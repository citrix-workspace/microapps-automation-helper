import axios from 'axios';
import fs from 'fs';
import path from 'path';

/** Class representing a Citrix Cloud. */
export class API {
    constructor() {}
    /**
     * Get Citrix Cloud Tokens
     * 
     * @param {string} cwaAPI - Api Environment
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */

    async getCitrixCloudTokens({
        cwaAPI,
        citrixCloudCustomerId,
        citrixCloudClientId,
        citrixCloudClientSecret,
    }: GetCitrixCloudTokens) {
        try {
            return await axios({
                timeout: 180000,
                url: `https://trust.${cwaAPI}.net/${citrixCloudCustomerId}/tokens/clients`,
                method: 'POST',
                data: {
                    clientId: citrixCloudClientId,
                    clientSecret: citrixCloudClientSecret,
                },
            });
        } catch (error) {
            throw error.stack;
        }
    }
    /**
     * Get all Integrations in Miroapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */

    async getIntegrations({ authInstance, microappsAdminUrl }: GetIntegrations) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get Bundle Catalogue in Miroapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */

    async getBundleCatalogue({ authInstance, microappsAdminUrl }: GetBundleCatalogue) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/bundleCatalogue`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Update Bundle Catalogue in Miroapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} catalogueId - Catalogue Id
     */
    async updateBundleCatalogue({ authInstance, microappsAdminUrl, catalogueId }: UpdateBundleCatalogue) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/bundleCatalogue/import/${catalogueId}`,
                method: 'POST',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Update Integration Configuration in Miroapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     * @param {string} integrationConfiguration - integrationConfiguration
     */
    async updateintegrationConfiguration({
        authInstance,
        microappsAdminUrl,
        integrationId,
        integrationConfiguration,
    }: UpdateintegrationConfiguration) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}`,
                method: 'PUT',
                data: integrationConfiguration,
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get one specific Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async getIntegration({ authInstance, microappsAdminUrl, integrationId }: GetIntegration) {
        return await authInstance({
            url: `${microappsAdminUrl}/api/service/${integrationId}`,
            method: 'GET',
        });
    }

    /**
     * Auth logout in Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async integrationLogout({ authInstance, microappsAdminUrl, integrationId }: IntegrationLogout) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/auth/serviceAction/logout/${integrationId}`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Validate configuration of Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} serviceKey - ServiceKey of Integration
     * @param {string} configuration - Configuration parameters of Integration
     */
    async validateConfiguration({ authInstance, microappsAdminUrl, serviceKey, configuration }: ValidateConfiguration) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/external-services/${serviceKey}/validate-configuration`,
                method: 'POST',
                data: {
                    configurationParameters: configuration,
                    onPremProxyConfiguration: {
                        useOnPremProxy: false,
                        resourceLocation: '',
                    },
                },
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Add MicroApp in Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} data - Data of the MicroApp
     */
    async addApp({ authInstance, microappsAdminUrl, data }: AddApp) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app`,
                method: 'POST',
                data,
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get status of one specific process
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} processId - Id of the process
     */
    async getProcessStatus({ authInstance, microappsAdminUrl, processId }: GetProcessStatus) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/process/${processId}`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get all Entities of Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async getEntities({ authInstance, microappsAdminUrl, integrationId }: GetEntities) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/entities`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Create Entity in Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     * @param {string} entityData - Data of the Entity
     */
    async createEntity({ authInstance, microappsAdminUrl, integrationId, entityData }: CreateEntity) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/entities`,
                method: 'PUT',
                data: entityData,
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Finalize configuration of Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id 
     */
    async finalizeConfig({ authInstance, microappsAdminUrl, integrationId }: FinalizeConfig) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/finalize-config`,
                method: 'POST',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get all MicroApps in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url

     */
    async getApps({ authInstance, microappsAdminUrl }: GetApps) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get Notifications of MicroApp in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    async getNotifications({ authInstance, microappsAdminUrl, appId }: GetNotifications) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/notifications/app/${appId}`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Run Event in MicroApp in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    async runNotificationEvent({ authInstance, microappsAdminUrl, notificationId }: RunNotificationEvent) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/notification/${notificationId}/run`,
                method: 'POST',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Start Synchronization of Integration in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id 
     */
    async startSynchronization({
        authInstance,
        microappsAdminUrl,
        integrationId,
        synchronizationType,
    }: StartSynchronization) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/run/${synchronizationType}`,
                method: 'POST',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Check integrity of all MicroApps in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    async integrityCheck({ authInstance, microappsAdminUrl }: IntegrityCheck) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app/integrity-check`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Delete Integration in Microaaps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async deleteIntegration({ authInstance, microappsAdminUrl, integrationId }: DeleteIntegration) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}`,
                method: 'DELETE',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Sets Domain in authInstance for specific Workspace Identity Provider
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} cwaAPI - Api Environment
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} workspaceIdentityProvider - Identity Provider of Workspace
     */
    async getDomain({ authInstance, cwaAPI, citrixCloudCustomerId, workspaceIdentityProvider }: GetDomain) {
        try {
            switch (workspaceIdentityProvider) {
                case 'ad':
                    return await authInstance({
                        url: `https://cws.${cwaAPI}.net/${citrixCloudCustomerId}/domainconfigurations`,
                        method: 'GET',
                        params: {
                            Provider: workspaceIdentityProvider.toUpperCase(),
                        },
                    });
                case 'netscaler':
                    return await authInstance({
                        url: `https://cws.${cwaAPI}.net/${citrixCloudCustomerId}/domainconfigurations`,
                        method: 'GET',
                        params: {
                            Provider: 'AD',
                        },
                    });
                case 'aad':
                    return await authInstance({
                        url: `https://cws.${cwaAPI}.net/${citrixCloudCustomerId}/AuthDomains`,
                        method: 'GET',
                    });
                case 'okta':
                    break;
                default:
                    console.log(`getDomain is currently not implemented for this idp: ${workspaceIdentityProvider}`);
                    break;
            }
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get data of specific Users for Subscribing to MicroApp in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} cwaAPI - Api Environment
     * @param {string} domainName - Domain name
     * @param {string} forestName - Forest name
     * @param {string} appId - Id of the MicroApp
     * @param {string} query - List of Subscribers
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} idpType - Identity Provider of Workspace
     */
    async getUsers({
        authInstance,
        cwaAPI,
        domainName,
        forestName,
        appId,
        query,
        citrixCloudCustomerId,
        idpType,
    }: GetUsers) {
        try {
            return await authInstance({
                url: `https://cws.${cwaAPI}.net/${citrixCloudCustomerId}/users/query`,
                method: 'POST',
                data: {
                    adminUser: '',
                    domain: domainName,
                    forest: forestName,
                    idpType: idpType,
                    key: '',
                    offerings: [
                        {
                            compatibleIdentities: [
                                {
                                    compatibleIdentity: 'OID:/*',
                                    reasons: [],
                                },
                            ],
                            offeringId: appId,
                        },
                    ],
                    query: query,
                    supportsAzureAdGroups: idpType === 'AZUREAD',
                },
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Update Subscribers of MicroApp in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} assign - Action type
     * @param {string} userDetail - List of Subscribers
     * @param {string} appId - Id of the MicroApp
     * @param {string} domainName - Domain name
     * @param {string} forestName - Forest name
     * @param {string} workspaceIdentityProvider - Identity Provider of Workspace
     */
    async updateSubscribers({
        authInstance,
        microappsAdminUrl,
        assign,
        userDetail,
        appId,
        domainName,
        forestName,
        workspaceIdentityProvider,
    }: UpdateSubscribers) {
        const { accountName, displayName, universalClaims, identityInformation, isGroup } = userDetail[0];

        const getOID = universalClaims.filter((value: string) => {
            return value.startsWith('OID');
        });

        const oid = getOID[0];

        let ipForUpdate;
        switch (workspaceIdentityProvider) {
            case 'ad':
            case 'netscaler':
                ipForUpdate = 'AD';
                break;
            case 'aad':
                ipForUpdate = 'AzureAD';
                break;
            case 'okta':
                ipForUpdate = 'Okta';
                break;
            default:
                ipForUpdate = null;
                console.log(`Adding subscribers is currently not implemented for this idp`);
                break;
        }

        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/security/app-user/selected-groups/${appId}`,
                method: 'PUT',
                data: [
                    {
                        oid: oid,
                        accountName: accountName,
                        displayName: displayName,
                        directoryContext: {
                            domain: domainName,
                            forest: forestName,
                            identityProvider: ipForUpdate,
                        },
                        email: identityInformation.email,
                        isGroup: isGroup,
                        domain: domainName,
                        userPrincipalName: identityInformation.email,
                        universalClaims: universalClaims,
                        assign: assign === 'Add' ? true : false,
                    },
                ],
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Get all Subscribers of MicroApp in Microapps Admin
     * 
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    async getSubscribers({ authInstance, microappsAdminUrl, appId }: GetSubscribers) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/security/app-user/selected-groups/${appId}`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }

    /**
     * Import Integration from an exported Integration file
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Id of itntegration
     * @param {string} filePath - Path where to file will be saved
     * @param {string} params -  Mandatadory params are vendor, appId (which apps will be  exported) and optional param description.
     * Example: vendor=Citrix&appId=myAppId1&appId=myAppId2&description=
     */
    async exportIntegration({ authInstance, microappsAdminUrl, integrationId, filePath, params }: ExportIntegration) {
        let response;
        try {
            response = await authInstance({
                method: 'GET',
                url: `${microappsAdminUrl}/api/service/${integrationId}/export`,
                params,
                responseType: 'stream',
            });
        } catch (error) {
            throw error.stack;
        }

        await response.data.pipe(fs.createWriteStream(path.resolve(__dirname, filePath)));
    }

    /**
     * get integration log
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} integrationType - Type of Integration
     */

    async getIntegrationLog({ authInstance, microappsAdminUrl, integrationId, integrationType }: GetIntegrationLog) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/event-log?entityRef=${integrationId}&type=${integrationType}&subType=JOB&offset=0&limit=20`,
                method: 'GET',
            });
        } catch (error) {
            throw error.stack;
        }
    }
}


export type AddApp = {
  authInstance: any;
  microappsAdminUrl: string;
  data: string;
};

export type GetBundleCatalogue = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type GetIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type GetIntegrations = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type GetProcessStatus = {
  authInstance: any;
  microappsAdminUrl: string;
  processId: string;
};

export type IntegrationLogout = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type UpdateBundleCatalogue = {
  authInstance: any;
  microappsAdminUrl: string;
  catalogueId: string;
};

export type UpdateintegrationConfiguration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  integrationConfiguration: any;
};

export type ValidateConfiguration = {
  authInstance: any;
  microappsAdminUrl: string;
  serviceKey: string;
  configuration: string;
};

export type GetEntities = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type CreateEntity = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  entityData: any;
};

export type FinalizeConfig = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type GetApps = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type GetNotifications = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};

export type RunNotificationEvent = {
  authInstance: any;
  microappsAdminUrl: string;
  notificationId: string;
};

export type StartSynchronization = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  synchronizationType: string;
};

export type IntegrityCheck = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type DeleteIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type GetDomain = {
  authInstance: any;
  cwaAPI: string;
  citrixCloudCustomerId: string;
  workspaceIdentityProvider: string;
};

export type GetUsers = {
  authInstance: any;
  cwaAPI: string;
  domainName: string;
  forestName: string;
  appId: string;
  query: string;
  citrixCloudCustomerId: string;
  idpType: any;
};

export type UpdateSubscribers = {
  authInstance: any;
  microappsAdminUrl: string;
  assign: string;
  userDetail: any;
  appId: string;
  domainName: string;
  forestName: string;
  workspaceIdentityProvider: string;
};

export type GetSubscribers = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};

export type ExportIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  filePath: any;
  params: any;
}

export type GetIntegrationLog = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  integrationType: string;
};

export type GetCitrixCloudTokens = {
  cwaAPI: string;
  citrixCloudCustomerId: string;
  citrixCloudClientId: string;
  citrixCloudClientSecret: string;
};