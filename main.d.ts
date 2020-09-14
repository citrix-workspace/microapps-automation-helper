import { GetCitrixCloudTokens } from './types/citrixCloud';
import { AddApp, CreateEntity, DeleteIntegration, ExportIntegration, FinalizeConfig, GetApps, GetBundleCatalogue, GetDomain, GetEntities, GetIntegration, GetIntegrationLog, GetIntegrations, GetNotifications, GetProcessStatus, GetSubscribers, GetUsers, IntegrationLogout, IntegrityCheck, RunNotificationEvent, StartSynchronization, UpdateBundleCatalogue, UpdateintegrationConfiguration, UpdateSubscribers, ValidateConfiguration } from './types/api';
/** Class representing a Citrix Cloud. */
export declare class API {
    constructor();
    /**
     * Get Citrix Cloud Tokens
     *
     * @param {string} cwaAPI - Api Environment
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */
    getCitrixCloudTokens({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret, }: GetCitrixCloudTokens): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get all Integrations in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    getIntegrations({ authInstance, microappsAdminUrl }: GetIntegrations): Promise<any>;
    /**
     * Get Bundle Catalogue in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    getBundleCatalogue({ authInstance, microappsAdminUrl }: GetBundleCatalogue): Promise<any>;
    /**
     * Update Bundle Catalogue in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} catalogueId - Catalogue Id
     */
    updateBundleCatalogue({ authInstance, microappsAdminUrl, catalogueId }: UpdateBundleCatalogue): Promise<any>;
    /**
     * Update Integration Configuration in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     * @param {string} integrationConfiguration - integrationConfiguration
     */
    updateintegrationConfiguration({ authInstance, microappsAdminUrl, integrationId, integrationConfiguration, }: UpdateintegrationConfiguration): Promise<any>;
    /**
     * Get one specific Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    getIntegration({ authInstance, microappsAdminUrl, integrationId }: GetIntegration): Promise<any>;
    /**
     * Auth logout in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    integrationLogout({ authInstance, microappsAdminUrl, integrationId }: IntegrationLogout): Promise<any>;
    /**
     * Validate configuration of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} serviceKey - ServiceKey of Integration
     * @param {string} configuration - Configuration parameters of Integration
     */
    validateConfiguration({ authInstance, microappsAdminUrl, serviceKey, configuration }: ValidateConfiguration): Promise<any>;
    /**
     * Add MicroApp in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} data - Data of the MicroApp
     */
    addApp({ authInstance, microappsAdminUrl, data }: AddApp): Promise<any>;
    /**
     * Get status of one specific process
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} processId - Id of the process
     */
    getProcessStatus({ authInstance, microappsAdminUrl, processId }: GetProcessStatus): Promise<any>;
    /**
     * Get all Entities of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    getEntities({ authInstance, microappsAdminUrl, integrationId }: GetEntities): Promise<any>;
    /**
     * Create Entity in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     * @param {string} entityData - Data of the Entity
     */
    createEntity({ authInstance, microappsAdminUrl, integrationId, entityData }: CreateEntity): Promise<any>;
    /**
     * Finalize configuration of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    finalizeConfig({ authInstance, microappsAdminUrl, integrationId }: FinalizeConfig): Promise<any>;
    /**
     * Get all MicroApps in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url

     */
    getApps({ authInstance, microappsAdminUrl }: GetApps): Promise<any>;
    /**
     * Get Notifications of MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    getNotifications({ authInstance, microappsAdminUrl, appId }: GetNotifications): Promise<any>;
    /**
     * Run Event in MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    runNotificationEvent({ authInstance, microappsAdminUrl, notificationId }: RunNotificationEvent): Promise<any>;
    /**
     * Start Synchronization of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    startSynchronization({ authInstance, microappsAdminUrl, integrationId, synchronizationType, }: StartSynchronization): Promise<any>;
    /**
     * Check integrity of all MicroApps in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    integrityCheck({ authInstance, microappsAdminUrl }: IntegrityCheck): Promise<any>;
    /**
     * Delete Integration in Microaaps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    deleteIntegration({ authInstance, microappsAdminUrl, integrationId }: DeleteIntegration): Promise<any>;
    /**
     * Sets Domain in authInstance for specific Workspace Identity Provider
     *
     * @param {object} authInstance - Axios instance
     * @param {string} cwaAPI - Api Environment
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} workspaceIdentityProvider - Identity Provider of Workspace
     */
    getDomain({ authInstance, cwaAPI, citrixCloudCustomerId, workspaceIdentityProvider }: GetDomain): Promise<any>;
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
    getUsers({ authInstance, cwaAPI, domainName, forestName, appId, query, citrixCloudCustomerId, idpType, }: GetUsers): Promise<any>;
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
    updateSubscribers({ authInstance, microappsAdminUrl, assign, userDetail, appId, domainName, forestName, workspaceIdentityProvider, }: UpdateSubscribers): Promise<any>;
    /**
     * Get all Subscribers of MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    getSubscribers({ authInstance, microappsAdminUrl, appId }: GetSubscribers): Promise<any>;
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
    exportIntegration({ authInstance, microappsAdminUrl, integrationId, filePath, params }: ExportIntegration): Promise<void>;
    /**
     * get integration log
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} integrationType - Type of Integration
     */
    getIntegrationLog({ authInstance, microappsAdminUrl, integrationId, integrationType }: GetIntegrationLog): Promise<any>;
}

import { CreateAuthInstance, GetAuthenticatorCode, GetCCBearerToken } from './types/citrixCloud';
import { API } from './api';
/** Class representing a Citrix Cloud. */
export declare class CitrixCloud extends API {
    constructor();
    /**
     * Generates auth code for login to Citrix Cloud
     *
     * @param {string} secretKey - SecretKey for generating the code
     */
    getAuthenticatorCode({ secretKey }: GetAuthenticatorCode): Promise<string>;
    /**
     * Get Citrix Cloud Bearer Token
     * @param {string} cwaAPI - Api Environmet
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */
    getCCBearerToken({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret, }: GetCCBearerToken): Promise<string>;
    /**
     * Create Authorized Instace
     * @param {string} bearerToken - Access token
     */
    createAuthInstance({ bearerToken }: CreateAuthInstance): Promise<import("axios").AxiosInstance>;
}

import { AddSubscriber, AddSubscribers, CheckAppMissconfigurations, CreateHTTPIntegration, CreateJavaIntegration, ExportApp, ExportIntegrationUI, ExportMicroAppUI, GetIntegrationId, GetIntegrationType, GetLastSyncTime, GetMicroAppId, GetNotificationId, GetStatusIntegration, ImportIntegration, ImportIntegrationUI, ImportMicroAppUI, Login, OauthLogout, RenameIntegration, RunEvent, RunSynchronization, WaitForProcessStatus, WaitForSync } from './types/microappsAdmin';
import { API } from './api';
/** Class representing a Microapps Admin. */
export declare class MicroappsAdmin extends API {
    constructor();
    /**
     * Login to cloud
     * @param {string} - Microapps cloud login url
     * @param {string} - Username
     * @param {string} - Password
     */
    login({ page, url, username, password, mfa, secretKey }: Login): Promise<void>;
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
    waitForSync({ getIntegration, synchronizationType }: WaitForSync): Promise<void>;
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
    waitForProcessStatus({ authInstance, status, microappsAdminUrl, processId }: WaitForProcessStatus): Promise<any>;
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
    importIntegration({ authInstance, microappsAdminUrl, pathToFile }: ImportIntegration): Promise<any>;
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
}

import { GetFeedCardButton, GetFeedNotifications, GoToActions, Login, SkipTour, StartAction, WaitForFeedCardId, WaitForPopUp } from './types/workspace';
/** Class representing a Workspace. */
export declare class Workspace {
    constructor();
    /**
     * Login to Workspace
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} workspaceUrl - Workspace login url
     * @param {string} workspaceUsername - Workspace Username
     * @param {string} workspacePassword - Workspace Password
     * @param {string} workspaceIdentityProvider - Identity provider (ad | netscaler | aad)
     */
    login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider }: Login): Promise<void>;
    /**
     * Skip Tour
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    skipTour({ page }: SkipTour): Promise<void>;
    /**
     * Go to Actions
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    goToActions({ page }: GoToActions): Promise<void>;
    /**
     * Start Action
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} actionName - name of Action what should be executed
     * @param {string} integrationName - name of Integration the action belongs to
     */
    startAction({ page, actionName, integrationName }: StartAction): Promise<void>;
    /**
     * Get Feed Notifications
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    getFeedNotifications({ page }: GetFeedNotifications): Promise<{}>;
    /**
     * Wait for FeedCard to show up in Notifications
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} recordId - Id of the record
     * @param {number} repeatMax - Max number of tries to find the FeedCard
     * @param {number} waitTime - Time in miliseconds to wait after each try
     */
    waitForFeedCardId({ page, repeatMax, waitTime, recordId, notificationId, }: WaitForFeedCardId): Promise<any>;
    /**
     * Returns button on FeedCard
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} feedCardId - Id of the FeedCard
     * @param {string} buttonName - Text on the Button
     */
    getFeedCardButton({ page, feedCardId, buttonName }: GetFeedCardButton): Promise<import("playwright-core").ElementHandle<SVGElement | HTMLElement>[]>;
    /**
     * Wait for success or error pop-up message
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} text - Text that should be in success message
     */
    waitForPopUp({ page, text }: WaitForPopUp): Promise<void>;
}
