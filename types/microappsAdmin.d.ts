import { API } from './api';
import { AxiosResponse } from 'axios';
import type { AddSubscriber, AddSubscribers, CheckAppMissconfigurations, CreateHTTPIntegration, CreateJavaIntegration, ExportApp, ExportIntegrationUI, ExportMicroAppUI, GetComponentId, GetIntegrationId, GetIntegrationType, GetLastSyncTime, GetMicroAppId, GetNotificationId, GetStatusIntegration, ImportIntegration, ImportIntegrationUI, ImportMicroAppUI, MicroappsAdminLogin, OauthLogout, RenameIntegration, RunEvent, RunSynchronization, WaitForProcessStatus, WaitForSync, WaitForAllSync } from './types/microappsAdmin';
/** Class representing a Microapps Admin. */
export declare class MicroappsAdmin extends API {
    constructor();
    /**
     * Login to cloud
     * @param {string} - Microapps cloud login url
     * @param {string} - Username
     * @param {string} - Password
     */
    login({ page, url, username, password, mfa, secretKey }: MicroappsAdminLogin): Promise<void>;
    /**
     * Get Integration Id
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */
    getIntegrationId({ authInstance, microappsAdminUrl, integrationName }: GetIntegrationId): Promise<any>;
    /**
     * Delete credentiaslds from credentials wallet for specific inregration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {number} repeatCount - Set count for retries
     */
    oauthLogout({ authInstance, microappsAdminUrl, integrationName, repeatCount }: OauthLogout): Promise<void>;
    /**
     * Wait for syncronization and check the result of sync
     * @param {Function} getIntegration - Fetch status of integration
     * @param {string} synchronizationType - Set type of syncronization full/incremental
     */
    waitForSync({ getIntegration, synchronizationType, integrationName }: WaitForSync): Promise<any>;
    /**
     * Run syncronization for specific Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} synchronizationType - Set type of syncronization full/incremental
     */
    runSynchronization({ authInstance, microappsAdminUrl, integrationName, synchronizationType, }: RunSynchronization): Promise<void>;
    /**
     * Create HTTP Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} integrationConfiguration - Additional integration configuration
     */
    createHTTPIntegration({ authInstance, microappsAdminUrl, integrationName, integrationConfiguration, }: CreateHTTPIntegration): Promise<any>;
    /**
     * Wait for  process status
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} status - specific status of process
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} processId - Id of process
     */
    waitForProcessStatus({ authInstance, status, microappsAdminUrl, processId }: WaitForProcessStatus): Promise<AxiosResponse<any>>;
    /**
     * Create Java Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} integrationConfiguration - Additional integration configuration
     */
    createJavaIntegration({ authInstance, microappsAdminUrl, integrationConfiguration, withEntities, serviceType, serviceKey, name, }: CreateJavaIntegration): Promise<void>;
    /**
     * Get type of Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */
    getIntegrationType({ authInstance, microappsAdminUrl, integrationName }: GetIntegrationType): Promise<any>;
    /**
     * Get status of Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */
    getStatusIntegration({ authInstance, microappsAdminUrl, integrationName }: GetStatusIntegration): Promise<any>;
    /**
     * Import integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} pathToFile - path to file.mapp which should be imported
     */
    importIntegration({ authInstance, microappsAdminUrl, pathToFile }: ImportIntegration): Promise<AxiosResponse<any>>;
    /**
     * Rename integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {string} newIntegrationName - New Name of integration
     * @param {string} integrationConfiguration - Configuration for integration
     */
    renameIntegration({ authInstance, microappsAdminUrl, integrationName, newIntegrationName, integrationConfiguration, }: RenameIntegration): Promise<void>;
    /**
     * Export Application
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Id of target App
     * @param {string} pathToFile - path where file should be saved
     */
    exportApp({ authInstance, microappsAdminUrl, appId, pathToFile }: ExportApp): Promise<void>;
    /**
     * Get Id of Microapp
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationId - Name of integration
     * @param {string} appName - Name Application
     */
    getMicroAppId({ authInstance, microappsAdminUrl, integrationId, appName }: GetMicroAppId): Promise<any>;
    /**
     * Get Id of Notification
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Name of App
     * @param {string} notificationName - Name of Notification
     */
    getNotificationId({ authInstance, microappsAdminUrl, appId, notificationName }: GetNotificationId): Promise<any>;
    /**
     * Run a Event
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} appName - Name of App
     *  @param {string} notificationName - Name of Notification
     */
    runEvent({ authInstance, microappsAdminUrl, integrationName, appName, notificationName }: RunEvent): Promise<void>;
    checkAppMissconfigurations({ authInstance, microappsAdminUrl, appId }: CheckAppMissconfigurations): Promise<void>;
    addSubscriber({ authInstance, appId, user, config }: AddSubscriber): Promise<void>;
    addSubscribers({ authInstance, integrationName, microapps, microappsAdminUrl, config }: AddSubscribers): Promise<{
        microapp: string;
    }[]>;
    /**
     * Import Integration from an exported Integration file
     *
     * @param {Page} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} filePath - Path to the exported Integration file that will be imported
     */
    importIntegrationUI({ page, microappsAdminUrl, filePath }: ImportIntegrationUI): Promise<void>;
    /**
     * Imports MicroApp to @param integrationName Integration from an exported MicroApp file
     *
     * @param {Page} page -  Methods to interact with a single tab or extension background page in Browser
     * @param {string} microappsAdminUrl - MicroApps Admin URL
     * @param {string} filePath - Path to the exported MicroApp file that will be imported
     * @param {string} integrationName - Name of Integration in which the MicroApp will be imported
     */
    importMicroAppUI({ page, microappsAdminUrl, filePath, integrationName }: ImportMicroAppUI): Promise<void>;
    /**
     * Exports @param integrationName integation
     *
     * @param {Page} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} integrationName - Name of Integration which will be exported
     */
    exportIntegrationUI({ page, integrationName }: ExportIntegrationUI): Promise<void>;
    /**
     * Export @param appName MicroApp from @param integrationName Integration
     *
     * @param {Page} page -  Methods to interact with a single tab or extension background page in Browser
     * @param {string} integrationName - Name of Integration in which the MicroApp will be imported
     * @param {string} appName - Name of MicroApp that will be exported
     */
    exportMicroAppsUI({ page, integrationName, appName }: ExportMicroAppUI): Promise<void>;
    /**
     * Returns last duration of Synchronization
     *
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     */
    getLastTimeSync({ authInstance, microappsAdminUrl, integrationName }: GetLastSyncTime): Promise<any>;
    /**
     * Returns Id of component
     *
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} appName - Name of Microapp
     * @param {string} componentLabel - Label of Component
     */
    getComponentId({ authInstance, microappsAdminUrl, integrationName, appName, pageName, componentLabel, }: GetComponentId): Promise<any>;
    /**
     * Waits for all integrations to finish the sync and validate the results
     * @param {string} synchronizationType - Set type of syncronization full/incremental
     * @param {number} timeToRepeat = Number of repeats
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     *
     */
    waitForAllSync({ synchronizationType, timeToRepeat, authInstance, microappsAdminUrl, }: WaitForAllSync): Promise<void>;
}
