import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { CitrixCloud } from './citrixCloud';
import { API } from './api';
import { paramsCheck } from './helpers';
import { AxiosResponse } from 'axios';
import type {
    AddSubscriber,
    AddSubscribers,
    CheckAppMissconfigurations,
    CheckIntegrationMissConfiguration,
    CreateHTTPIntegration,
    CreateJavaIntegration,
    ExportApp,
    ExportIntegrationUI,
    ExportMicroAppUI,
    GetComponentId,
    GetIntegrationId,
    GetIntegrationType,
    GetLastSyncTime,
    GetMicroAppId,
    GetNotificationId,
    GetStatusIntegration,
    ImportIntegration,
    ImportIntegrationUI,
    ImportMicroAppUI,
    MicroappsAdminLogin,
    OauthLogout,
    RenameIntegration,
    RunEvent,
    RunSynchronization,
    Subscribe,
    WaitForAllSync,
    WaitForProcessStatus,
    WaitForSync,
} from './types/microappsAdmin';

const citrixCloud = new CitrixCloud();

/** Class representing a Microapps Admin. */
export class MicroappsAdmin extends API {
    constructor() {
        super();
    }

    /**
     * Login to cloud
     * @param {string} - Microapps cloud login url
     * @param {string} - Username
     * @param {string} - Password
     */
    async login({ page, url, username, password, mfa = null, secretKey }: MicroappsAdminLogin) {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#username');
        await page.type('#username', username);
        await page.waitForSelector('#password');
        await page.type('#password', password);
        await page.waitForSelector('#submit');
        await page.click('#submit');

        if (mfa) {
            const authCode = await citrixCloud.getAuthenticatorCode({ secretKey });

            await page.waitForSelector('input[inputmode]');
            for (let i = 0; i < 6; i++) {
                await page.type(`input[inputmode][name="${i}"]`, authCode[i]);
            }

            await page.waitForSelector('button[type="button"]:not([disabled])');
            await page.click('button[type="button"]:not([disabled])');

            try {
                for (;;) {
                    if ((await page.$(`input[inputmode][name="0"][value="${authCode[0]}"]`)) !== null) {
                        await page.waitForTimeout(300);
                    } else break;
                }
            } catch (error) {}
        }
    }

    /**
     * Get Integration Id
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */
    async getIntegrationId({ authInstance, microappsAdminUrl, integrationName }: GetIntegrationId): Promise<string> {
        let integrationId;
        let integration;

        const integrations = await this.getIntegrations({ authInstance, microappsAdminUrl });

        try {
            integration = integrations.data.find((e: { title: string }) => e.title === integrationName);
            integrationId = integration.id;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { integration, integrationId, integrations },
                    functionType: 'find',
                    source: 'integrations',
                })
            );
        }
        return integrationId;
    }

    /**
     * Delete credentiaslds from credentials wallet for specific inregration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {number} repeatCount - Set count for retries
     */

    async oauthLogout({ authInstance, microappsAdminUrl, integrationName, repeatCount = 1 }: OauthLogout) {
        const integrationId = await this.getIntegrationId({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });
        for (let i = 0; i < repeatCount; i++) {
            await this.integrationLogout({
                authInstance,
                microappsAdminUrl,
                integrationId,
            });
        }
    }

    /**
     * Wait for syncronization and check the result of sync
     * @param {Function} getIntegration - Fetch status of integration
     * @param {string} synchronizationType - Set type of syncronization full/incremental
     * @param {string} skipCheck - If running on newly created integration set this as true
     * @param {number} maxMinutesToWait - Maxim time to wait in minutes
     */

     async waitForSync({
        getIntegration,
        synchronizationType,
        integrationName = '',
        skipCheck = false,
        maxMinutesToWait = 9,
    }: WaitForSync) {
        let jobRun: {
            jobState: string;
            running: boolean;
            lastRunSuccess: boolean;
            lastRunException: any;
            cancelled: boolean;
            lastRunDurationMillis: number;
            lastSuccessfulRunStartTimeAsInstant: string;
        };
        let newSyncRunning = false;
        const maxQueueTime = new Date().setMinutes(new Date().getMinutes() + 5);
        const maxTime = new Date().setMinutes(new Date().getMinutes() + maxMinutesToWait);

        for (let i = 0; ; i++) {
            if (i % 6 === 0) {
                console.log(`${integrationName && `[${integrationName}] - `}Waiting for synchronization to finish`);
            }
            const integration = await getIntegration();
            if (integration.data.jobRuns.length > 0) {
                [jobRun] = integration.data.jobRuns.filter(
                    (job: { synchronizationTypeId: string }) => job.synchronizationTypeId === synchronizationType
                );

                const currentTime = new Date().getTime();
                if (currentTime > maxTime) {
                    throw new Error(`Maximum amount of time - ${maxMinutesToWait} minutes - reached!`);
                }
                if (jobRun?.jobState === 'RUNNING') {
                    newSyncRunning = true;
                }
                if (jobRun?.jobState !== 'RUNNING' && skipCheck === false) {
                    if (jobRun?.jobState === 'FAILED') {
                        throw new Error(`Synchronization FAILED.`);
                    } else if (currentTime > maxQueueTime && jobRun?.jobState === 'QUEUED') {
                        throw new Error(`Synchronization is in state QUEUED for more than 5 minutes.`);
                    } else if (
                        jobRun?.jobState === 'STARTING' ||
                        ((jobRun?.jobState === 'SCHEDULED' || jobRun?.jobState === 'FINISHED') && !newSyncRunning)
                    ) {
                        await new Promise((resolve) => setTimeout(resolve, 100));
                        continue;
                    }
                }
                if (jobRun?.running === false && jobRun?.jobState !== 'QUEUED') {
                    break;
                }
            } else if (i > 2) {
                throw new Error(`No jobRuns found.`);
            }
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }

        if (jobRun.lastRunSuccess === false || jobRun.lastRunException) {
            if (jobRun.lastRunException) {
                throw new Error(`Sync failed with: ${jobRun.lastRunException}`);
            }

            throw new Error(`Sync failed without Exception!`);
        } else if (jobRun.cancelled === true) {
            throw new Error(`Sync was cancelled!`);
        }
        return jobRun;
    }

    /**
     * Run syncronization for specific Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} synchronizationType - Set type of syncronization full/incremental
     */

     async runSynchronization({
        authInstance,
        microappsAdminUrl,
        integrationName,
        synchronizationType,
        maxMinutesToWait = 9,
    }: RunSynchronization) {
        const integrationId = await this.getIntegrationId({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });

        const integration = await this.getIntegration({ authInstance, microappsAdminUrl, integrationId });

        const jobRuns = integration.data.jobRuns;

        const getJobRunDetail = jobRuns.find((job: { synchronizationTypeId: string }) => {
            return job.synchronizationTypeId === synchronizationType;
        });

        if (getJobRunDetail === undefined) {
            await this.startSynchronization({
                authInstance,
                microappsAdminUrl,
                integrationId,
                synchronizationType,
            });

            await this.waitForSync({
                getIntegration: () => this.getIntegration({ authInstance, microappsAdminUrl, integrationId }),
                synchronizationType,
                maxMinutesToWait: maxMinutesToWait,
            });
        } else if (getJobRunDetail.running === true) {
            await this.waitForSync({
                getIntegration: () => this.getIntegration({ authInstance, microappsAdminUrl, integrationId }),
                synchronizationType,
                maxMinutesToWait: maxMinutesToWait,
            });
        } else {
            await this.startSynchronization({
                authInstance,
                microappsAdminUrl,
                integrationId,
                synchronizationType,
            });

            await this.waitForSync({
                getIntegration: () => this.getIntegration({ authInstance, microappsAdminUrl, integrationId }),
                synchronizationType,
                maxMinutesToWait: maxMinutesToWait,
            });
        }
    }

    /**
     * Create HTTP Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} integrationConfiguration - Additional integration configuration
     */

    async createHTTPIntegration({
        authInstance,
        microappsAdminUrl,
        integrationName,
        integrationConfiguration,
    }: CreateHTTPIntegration): Promise<string> {
        const bundleCatalogue = await this.getBundleCatalogue({
            authInstance,
            microappsAdminUrl,
        });
        const bundleCatalogueData = bundleCatalogue.data;
        let catalogueDetail;
        let catalogueId;
        try {
            catalogueDetail = bundleCatalogueData.find(
                (e: { title: string; type: string }) => e.title === integrationName && e.type === 'HTTP'
            );
            catalogueId = catalogueDetail.uniqueId;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { catalogueDetail, catalogueId, bundleCatalogueData },
                    functionType: 'find',
                    source: 'bundleCatalogueData',
                })
            );
        }
        const createdConnector = await this.updateBundleCatalogue({
            authInstance,
            microappsAdminUrl,
            catalogueId,
        });
        const integrationId = createdConnector.data.id;

        await this.updateintegrationConfiguration({
            authInstance,
            microappsAdminUrl,
            integrationId,
            integrationConfiguration,
        });

        return integrationId;
    }

    /**
     * Wait for  process status
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} status - specific status of process
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} processId - Id of process
     */

    async waitForProcessStatus({ authInstance, status, microappsAdminUrl, processId }: WaitForProcessStatus) {
        let processStatus;
        for (let i = 0; i < 35; i++) {
            processStatus = await this.getProcessStatus({
                authInstance,
                microappsAdminUrl,
                processId,
            });
            if (processStatus.data.message !== undefined) {
                console.log(processStatus.data.message);
            }

            if ((await processStatus.data.status) === status) {
                break;
            }
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        if ((await processStatus.data.status) !== status) {
            throw new Error(`Process status is: ${processStatus.data.status}`);
        }
        return processStatus;
    }

    /**
     * Create Java Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} integrationConfiguration - Additional integration configuration
     */

    async createJavaIntegration({
        authInstance,
        microappsAdminUrl,
        integrationConfiguration,
        withEntities = true,
        serviceType = null,
        serviceKey,
        name = '',
    }: CreateJavaIntegration) {
        let processId: string;

        let configurationParameters: any;
        try {
            configurationParameters = integrationConfiguration.serviceData.configuration.configurationParameters;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { configurationParameters, integrationConfiguration },
                    source: 'integrationConfiguration',
                })
            );
        }

        const responseValidation = await this.validateConfiguration({
            authInstance,
            microappsAdminUrl,
            serviceKey,
            configuration: configurationParameters,
        });

        const responseValidationBody = JSON.stringify(responseValidation.data);
        if (!responseValidationBody.includes('ok')) {
            throw new Error('Configuration is not valid!');
        }

        const app = await this.addApp({
            authInstance,
            microappsAdminUrl,
            data: integrationConfiguration,
        });

        processId = app.data.processId;

        const processStatus = await this.waitForProcessStatus({
            authInstance,
            getProcessStatus: () => this.getProcessStatus({ authInstance, microappsAdminUrl, processId }),
            status: 'DONE',
            microappsAdminUrl,
            processId,
        });

        const integrationId = processStatus.data.detail.service.id;

        let entities;
        let entityFilters;

        // Some connectors have different flow for getting entities
        if (serviceType === 'Service Now' || serviceType === 'Salesforce') {
            const services = await this.getIntegration({
                authInstance,
                microappsAdminUrl,
                integrationId,
            });

            entities = services.data.configuration.entities;

            entityFilters = services.data.configuration.entityFilters;
        } else {
            const response = await this.getEntities({
                authInstance,
                microappsAdminUrl,
                integrationId,
            });

            processId = response.data.processId;

            await this.waitForProcessStatus({
                authInstance,
                getProcessStatus: () => this.getProcessStatus({ authInstance, microappsAdminUrl, processId }),
                status: 'DONE',
                microappsAdminUrl,
                processId,
            });

            const processDetail = await this.getProcessStatus({
                authInstance,
                microappsAdminUrl,
                processId,
            });
            entities = processDetail.data.detail.data.entities;
            entityFilters = processDetail.data.detail.data.entityFilters;
        }

        const entityNames: Array<string> = [];

        entities.forEach((el: { name: string }) => entityNames.push(el.name));

        const entityData = {
            entityNames: entityNames,
            entityAttributeNamesMap: {},
            entityFilters: entityFilters,
        };

        if (withEntities) {
            const entity = await this.createEntity({
                authInstance,
                microappsAdminUrl,
                integrationId,
                entityData,
            });

            processId = entity.data.processId;

            await this.waitForProcessStatus({
                authInstance,
                getProcessStatus: () => this.getProcessStatus({ authInstance, microappsAdminUrl, processId }),
                status: 'DONE',
                microappsAdminUrl,
                processId,
            });
            await this.finalizeConfig({
                authInstance,
                microappsAdminUrl,
                integrationId,
            });
        }
    }

    /**
     * Get type of Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */

    async getIntegrationType({
        authInstance,
        microappsAdminUrl,
        integrationName,
    }: GetIntegrationType): Promise<string> {
        const integrations = await this.getIntegrations({
            authInstance,
            microappsAdminUrl,
        });

        const integrationsData = integrations.data;

        let findIntegrationType;
        let integrationType;
        try {
            findIntegrationType = integrationsData.find((integration: { title: string }) => {
                return integration.title === integrationName;
            });

            integrationType = findIntegrationType.serviceType;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { findIntegrationType, integrationType, integrationsData },
                    functionType: 'find',
                    source: 'integrationsData',
                })
            );
        }
        return integrationType;
    }

    /**
     * Get status of Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */

    async getStatusIntegration({ authInstance, microappsAdminUrl, integrationName }: GetStatusIntegration) {
        try {
            const serviceId = await this.getIntegrationId({
                authInstance,
                microappsAdminUrl,
                integrationName,
            });
            return serviceId;
        } catch (e) {
            return null;
        }
    }

    /**
     * Import integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} pathToFile - path to file.mapp which should be imported
     */

    async importIntegration({ authInstance, microappsAdminUrl, pathToFile }: ImportIntegration) {
        const form: any = new FormData();
        let response: AxiosResponse;

        form.append('file', fs.createReadStream(path.resolve(__dirname, pathToFile)));

        try {
            response = await authInstance({
                url: `${microappsAdminUrl}/api/service/import`,
                method: 'POST',
                headers: {
                    'content-type': `multipart/form-data; boundary=${form._boundary}`,
                },
                data: form,
            });
        } catch (error) {
            throw error.stack;
        }

        await assert.deepStrictEqual(
            response.status,
            200,
            `Response status ${response.status} doesn't match expected 200`
        );
        return response;
    }

    /**
     * Rename integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} newIntegrationName - New Name of integration
     * @param {string} integrationConfiguration - Configuration for integration
     */

    async renameIntegration({
        authInstance,
        microappsAdminUrl,
        integrationName,
        newIntegrationName,
        integrationConfiguration,
    }: RenameIntegration) {
        const integrationId = await this.getStatusIntegration({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });

        await this.updateintegrationConfiguration({
            authInstance,
            microappsAdminUrl,
            integrationId,
            integrationConfiguration,
        });

        const integrations = await this.getIntegrations({
            authInstance,
            microappsAdminUrl,
        });
        const integrationsData = integrations.data;
        let integrationDetail;
        try {
            integrationDetail = integrationsData.filter((e: { title: string; id: string }) => {
                return e.title === integrationName && e.id === newIntegrationName;
            });
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { integrationDetail, integrationsData },
                    functionType: 'filter',
                    source: 'integrationsData',
                })
            );
        }

        console.log(
            `Integration ${integrationName} with id: ${integrationDetail[0].id} was renamed to:  ${integrationsData[0].title}`
        );
    }

    /**
     * Export Application
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Id of target App
     * @param {string} pathToFile - path where file should be saved
     */

    async exportApp({ authInstance, microappsAdminUrl, appId, pathToFile }: ExportApp) {
        let response;
        try {
            response = await authInstance({
                method: 'GET',
                url: `${microappsAdminUrl}/api/app/${appId}/export`,
                responseType: 'stream',
            });
        } catch (error) {
            throw error.stack;
        }
        await response.data.pipe(fs.createWriteStream(path.resolve(__dirname, pathToFile)));
    }

    /**
     * Get Id of Microapp
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationId - Name of integration
     * @param {string} appName - Name Application
     */

    async getMicroAppId({ authInstance, microappsAdminUrl, integrationId, appName }: GetMicroAppId): Promise<string> {
        let apps;
        try {
            apps = await this.getApps({ authInstance, microappsAdminUrl });
            const appsData = apps.data;
            const getAppDetail = appsData.filter(
                (app: { app: { title: string; serviceId: string } }) =>
                    app.app.title === appName && app.app.serviceId === integrationId
            );

            return getAppDetail[0].id;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    /**
     * Get Id of Notification
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Name of App
     * @param {string} notificationName - Name of Notification
     */

    async getNotificationId({
        authInstance,
        microappsAdminUrl,
        appId,
        notificationName,
    }: GetNotificationId): Promise<string> {
        const notifications = await this.getNotifications({
            authInstance,
            microappsAdminUrl,
            appId,
        });

        const notificationsData = notifications.data;

        let getNotificationId;
        let notificationId;
        try {
            getNotificationId = notificationsData.find((e: { label: string }) => {
                return e.label === notificationName;
            });

            notificationId = getNotificationId.id;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { getNotificationId, notificationId, notificationsData },
                    functionType: 'find',
                    source: 'notificationsData',
                })
            );
        }

        return notificationId;
    }

    /**
     * Run a Event
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} appName - Name of App
     * @param {string} notificationName - Name of Notification
     */

    async runEvent({ authInstance, microappsAdminUrl, integrationName, appName, notificationName }: RunEvent) {
        let notifications;
        const integrationId = await this.getIntegrationId({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });

        const appId = await this.getMicroAppId({
            authInstance,
            microappsAdminUrl,
            integrationId,
            appName,
        });

        const notificationId = await this.getNotificationId({
            authInstance,
            appId,
            microappsAdminUrl,
            notificationName,
        });

        await this.runNotificationEvent({
            authInstance,
            microappsAdminUrl,
            notificationId,
        });

        for (let i = 0; i < 10; i++) {
            notifications = await this.getNotifications({
                authInstance,
                microappsAdminUrl,
                appId,
            });

            const running = notifications.data[0].running;

            if ((await running) === false) {
                break;
            }

            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        const lastRunStatus = notifications.data[0].lastRunStatus;
        if ((await lastRunStatus) !== 'SUCCESS') {
            throw new Error('Event run failed!');
        }
    }

    async checkAppMissconfigurations({ authInstance, microappsAdminUrl, appId }: CheckAppMissconfigurations) {
        const response = await this.integrityCheck({
            authInstance,
            microappsAdminUrl,
        });
        const responseBody = response.data;

        let missconfigurations;
        try {
            missconfigurations = responseBody.filter((e: { appId: string }) => e.appId === appId);
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { missconfigurations, responseBody },
                    functionType: 'filter',
                    source: 'responseBody',
                })
            );
        }

        if (!Array.isArray(missconfigurations) || !missconfigurations.length) {
            console.log(`appId: ${appId} has no missconfigurations`);
        }

        console.log('missconfigurations: ', missconfigurations);
    }

    async addSubscriber({ authInstance, appId, user, config }: AddSubscriber) {
        const { microappsAdminUrl, citrixCloudCustomerId, cwaAPI, workspaceIdentityProvider } = config;
        // Get Domains
        const domains = await this.getDomain({
            authInstance,
            cwaAPI,
            citrixCloudCustomerId,
            workspaceIdentityProvider,
        });

        const actionSubscribe = 'Add';
        let domainName;
        let forestName;
        let idpType;

        switch (workspaceIdentityProvider) {
            case 'ad':
            case 'netscaler':
                domainName = domains.data.domains[0].domainName;
                forestName = domains.data.domains[0].forestName;
                idpType = 'AD';
                break;
            case 'aad':
                const domainsData = domains.data;
                let domainDetail;
                try {
                    const domainDetail = domainsData.filter((domain: { idpType: string }) => {
                        return domain.idpType === 'AzureAd';
                    });
                    domainName = 'todo';
                    forestName = domainDetail[0].idpProperties.tid;
                    idpType = 'AZUREAD';
                } catch (error) {
                    console.log(error.stack);
                    throw new Error(
                        await paramsCheck({
                            params: { domainDetail, domainsData },
                            functionType: 'filter',
                            source: 'domainsData',
                        })
                    );
                }
                break;
            case 'okta':
                domainName = null;
                forestName = null;
                idpType = 'OKTA';
                break;
            default:
                console.log(
                    `Adding subscribers is currently not implemented for this idp: ${workspaceIdentityProvider}`
                );
                break;
        }

        // Get user
        const users = await this.getUsers({
            authInstance,
            cwaAPI,
            domainName,
            forestName,
            appId,
            query: user,
            citrixCloudCustomerId,
            idpType,
        });
        let userDetail = users.data.results;

        if (userDetail.length > 1) {
            // filter group to subscribe
            const userData = users.data.results;
            try {
                userDetail = userData.filter((e: { accountName: string }) => {
                    return e.accountName === user;
                });
            } catch (error) {
                console.log(error.stack);
                throw new Error(
                    await paramsCheck({
                        params: { userDetail, userData },
                        functionType: 'filter',
                        source: 'userData',
                    })
                );
            }
        }

        // Update Subscribers
        await this.updateSubscribers({
            authInstance,
            microappsAdminUrl,
            assign: actionSubscribe,
            userDetail,
            appId,
            domainName,
            forestName,
            workspaceIdentityProvider,
        });

        await this.getSubscribers({
            authInstance,
            microappsAdminUrl,
            appId,
        });
    }
    async addSubscribers({ authInstance, integrationName, microapps, microappsAdminUrl, config }: AddSubscribers) {
        const integrationId = await this.getIntegrationId({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });

        const subscribe = async ({ microapps, microapp, authInstance, integrationId }: Subscribe) => {
            console.log(`[${integrationName}] - Adding subscribers for: ${microapp}`);
            const subscribers = microapps[microapp].subscribers;
            const microappId = await this.getMicroAppId({
                authInstance,
                microappsAdminUrl,
                integrationId,
                appName: microapp,
            });
            for (const subscriber of subscribers) {
                await this.addSubscriber({
                    authInstance,
                    appId: microappId,
                    user: subscriber,
                    config,
                });
            }
            return { microapp };
        };

        const microappsPromises = [];
        for (const microapp in microapps) {
            microappsPromises.push(subscribe({ microapps, microapp, authInstance, integrationId }));
        }

        return await Promise.all(microappsPromises);
    }
    /**
     * Import Integration from an exported Integration file
     *
     * @param {Page} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} filePath - Path to the exported Integration file that will be imported
     */
    async importIntegrationUI({ page, microappsAdminUrl, filePath }: ImportIntegrationUI) {
        await page.waitForSelector('[data-testid="add-integration-button"]');
        await page.click('[data-testid="add-integration-button"]');

        await page.waitForSelector('[data-testid="new-integration-upload"]');
        await page.click('[data-testid="new-integration-upload"]');

        const uploadFile: any = await page.$('input[type=file]');
        await uploadFile.setInputFiles(path.resolve(__dirname, filePath));

        await page.waitForSelector('[data-testid="upload-submit-button"]');
        await page.click('[data-testid="upload-submit-button"]');

        await page.waitForResponse(
            (response: { url: () => string; status: () => number }) =>
                response.url() === `${microappsAdminUrl}/api/service/import` && response.status() === 200
        );
    }

    /**
     * Imports MicroApp to @param integrationName Integration from an exported MicroApp file
     *
     * @param {Page} page -  Methods to interact with a single tab or extension background page in Browser
     * @param {string} microappsAdminUrl - MicroApps Admin URL
     * @param {string} filePath - Path to the exported MicroApp file that will be imported
     * @param {string} integrationName - Name of Integration in which the MicroApp will be imported
     */
    async importMicroAppUI({ page, microappsAdminUrl, filePath, integrationName }: ImportMicroAppUI) {
        await page.waitForSelector(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="toggle-integration-options-dropdown"]`
        );
        await page.click(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="toggle-integration-options-dropdown"]`
        );

        await page.waitForSelector(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="open-import-app"]`
        );
        await page.click(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="open-import-app"]`
        );

        const uploadFile: any = await page.$('input[type=file]');
        await uploadFile.setInputFiles(path.resolve(__dirname, filePath));
        await page.waitForSelector('[data-testid="upload-submit-button"]');
        await page.click('[data-testid="upload-submit-button"]');

        await page.waitForResponse(
            (response: { url: () => string; status: () => number }) =>
                response.url() === `${microappsAdminUrl}/api/app` && response.status() === 200
        );
    }

    /**
     * Exports @param integrationName integation
     *
     * @param {Page} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} integrationName - Name of Integration which will be exported
     */
    async exportIntegrationUI({ page, integrationName }: ExportIntegrationUI) {
        await page.waitForSelector(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="toggle-integration-options-dropdown"]`
        );
        await page.click(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="toggle-integration-options-dropdown"]`
        );

        await page.waitForSelector(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="open-export-integration"]`
        );
        await page.click(
            `//div[@data-testid="integration-name-${integrationName}"] //button[@data-testid="open-export-integration"]`
        );

        await page.waitForSelector(`//legend[(text()= 'Include Microapps')]`);

        await page.click(`//button[@data-testid="export-integration-commit-button"]`);

        const download = await page.waitForEvent('download');

        if ((await download.path()) === null) {
            throw new Error('No file was downloaded');
        }
    }

    /**
     * Export @param appName MicroApp from @param integrationName Integration
     *
     * @param {Page} page -  Methods to interact with a single tab or extension background page in Browser
     * @param {string} integrationName - Name of Integration in which the MicroApp will be imported
     * @param {string} appName - Name of MicroApp that will be exported
     */
    async exportMicroAppsUI({ page, integrationName, appName }: ExportMicroAppUI) {
        await page.waitForSelector(
            `//div[@data-testid="integration-name-${integrationName}"] //tr[descendant::a[contains(text(), "${appName}")]] //button[starts-with(@class, "PlainButton")]`
        );
        await page.click(
            `//div[@data-testid="integration-name-${integrationName}"] //tr[descendant::a[contains(text(), "${appName}")]] //button[starts-with(@class, "PlainButton")]`
        );
        await page.waitForSelector(
            `//div[@data-testid="integration-name-${integrationName}"] //tr[descendant::a[contains(text(), "${appName}")]] //button[@data-testid="do-app-export"]`
        );
        await page.click(
            `//div[@data-testid="integration-name-${integrationName}"] //tr[descendant::a[contains(text(), "${appName}")]] //button[@data-testid="do-app-export"]`
        );
        const download = await page.waitForEvent('download');

        if ((await download.path()) === null) {
            throw new Error('No file was downloaded');
        }
    }

    /**
     * Returns last duration of Synchronization
     *
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     */
    async getLastTimeSync({ authInstance, microappsAdminUrl, integrationName }: GetLastSyncTime) {
        const regex = new RegExp(/\d*:\d*:\d*.\d*/);

        const integrationId = await this.getIntegrationId({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });

        const integrationType = await this.getIntegrationType({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });

        const logs = await this.getIntegrationLog({
            authInstance,
            microappsAdminUrl,
            integrationId,
            integrationType,
        });

        for (const line of logs.data.data) {
            if (line.message.includes('Service synchronization finished in')) {
                return line.message.match(regex)[0];
            }
        }
    }

    /**
     * Returns Id of component
     *
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} appName - Name of Microapp
     * @param {string} componentLabel - Label of Component
     */
    async getComponentId({
        authInstance,
        microappsAdminUrl,
        integrationName,
        appName,
        pageName,
        componentLabel,
    }: GetComponentId) {
        const integrationId = await this.getIntegrationId({
            authInstance,
            microappsAdminUrl,
            integrationName,
        });
        const appId = await this.getMicroAppId({
            authInstance,
            microappsAdminUrl,
            integrationId,
            appName,
        });
        const selectedAppData = await this.getAppInfo({
            authInstance,
            microappsAdminUrl,
            appId,
        });
        const pagesData = selectedAppData.data.app.pages;

        let getPage;
        let components;
        try {
            getPage = pagesData.filter((app: { title: string }) => app.title === pageName);
            components = getPage[0].components;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { getPage, components, pagesData },
                    functionType: 'filter',
                    source: 'pagesData',
                })
            );
        }
        let getComponent;
        let componentId: string;
        try {
            getComponent = components.filter((component: { label: string }) => component.label === componentLabel);
            componentId = getComponent[0].id;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { getComponent, componentId, components },
                    functionType: 'filter',
                    source: 'components',
                })
            );
        }
        return componentId;
    }

    /**
     * Waits for all integrations to finish the sync and validate the results
     * @param {string} synchronizationType - Set type of syncronization full/incremental
     * @param {number} timeToRepeat = Number of repeats
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     *
     */
    async waitForAllSync({
        synchronizationType,
        timeToRepeat = 45,
        authInstance,
        microappsAdminUrl,
    }: WaitForAllSync): Promise<void> {
        for (let i = 0; i < timeToRepeat; i++) {
            const integrations = await this.getIntegrations({
                authInstance,
                microappsAdminUrl,
            });

            const expanded = [...integrations.data];

            const readyForSync = expanded.filter(
                (e) =>
                    e.configMissing === false &&
                    e.configurationPending === false &&
                    e.secretsMissing === false &&
                    e.oauthLoginNeeded === false &&
                    e.updatePending === false
            );

            const allJobs = readyForSync.map((e) => e.jobRuns);

            const flattedJobs = allJobs.flat();

            const jobsBySyncType = flattedJobs.filter((job) => job.synchronizationTypeId === synchronizationType);

            const runningJobs = jobsBySyncType.map((e) => e.running);

            await new Promise((resolve) => setTimeout(resolve, 10000));

            if (!runningJobs.includes(true)) {
                console.log(`All integrations finished ${synchronizationType}`);
                break;
            }
        }
    }

    async checkIntegrationMissConfiguration({
        authInstance,
        microappsAdminUrl,
        integrationId,
    }: CheckIntegrationMissConfiguration) {
        const response = await this.integrityCheck({ authInstance, microappsAdminUrl });
        const missconfigured = response.data;

        const responseApps = await this.getApps({ authInstance, microappsAdminUrl });
        const appsData = responseApps.data;

        const missconfiguredAppsId = missconfigured.map((app: { appId: string }) => app.appId);

        let res = [];

        res = appsData.filter((app: { id: string }) => {
            return missconfiguredAppsId.find((missConfiguredAppId: string) => {
                return missConfiguredAppId === app.id;
            });
        });

        const intregrations = res.find((e: { app: { serviceId: number } }) => e.app.serviceId === integrationId);

        if (intregrations) {
            return { missConfigured: 'true' };
        } else {
            return { missConfigured: 'false' };
        }
    }
}
