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
  /**
   * Update integration with secrets
   * @param {Object} authInstance - Authorized instance for API calls
   * @param {string} microappsAdminUrl - Microapps admin url
   * @param {string} integrationId - Id of Integration
   * @param {string} data - Secrest which should be add to the integration
   */
  addSecrets({ authInstance, microappsAdminUrl, integrationId, data }: AddSecrets): Promise<any>;
  /**
   * Get microapp info - pages, components etc...
   * @param {Object} authInstance - Authorized instance for API calls
   * @param {string} microappsAdminUrl - Microapps admin url
   * @param {string} appId - Id of microapp
   */
  getAppInfo({ authInstance, microappsAdminUrl, appId }: GetAppInfo): Promise<any>;
}
export declare type AddApp = {
  authInstance: any;
  microappsAdminUrl: string;
  data: string;
};
export declare type GetBundleCatalogue = {
  authInstance: any;
  microappsAdminUrl: string;
};
export declare type GetIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};
export declare type GetIntegrations = {
  authInstance: any;
  microappsAdminUrl: string;
};
export declare type GetProcessStatus = {
  authInstance: any;
  microappsAdminUrl: string;
  processId: string;
};
export declare type IntegrationLogout = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};
export declare type UpdateBundleCatalogue = {
  authInstance: any;
  microappsAdminUrl: string;
  catalogueId: string;
};
export declare type UpdateintegrationConfiguration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  integrationConfiguration: any;
};
export declare type ValidateConfiguration = {
  authInstance: any;
  microappsAdminUrl: string;
  serviceKey: string;
  configuration: string;
};
export declare type GetEntities = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};
export declare type CreateEntity = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  entityData: any;
};
export declare type FinalizeConfig = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};
export declare type GetApps = {
  authInstance: any;
  microappsAdminUrl: string;
};
export declare type GetNotifications = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};
export declare type RunNotificationEvent = {
  authInstance: any;
  microappsAdminUrl: string;
  notificationId: string;
};
export declare type StartSynchronization = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  synchronizationType: string;
};
export declare type IntegrityCheck = {
  authInstance: any;
  microappsAdminUrl: string;
};
export declare type DeleteIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};
export declare type GetDomain = {
  authInstance: any;
  cwaAPI: string;
  citrixCloudCustomerId: string;
  workspaceIdentityProvider: string;
};
export declare type GetUsers = {
  authInstance: any;
  cwaAPI: string;
  domainName: string;
  forestName: string;
  appId: string;
  query: string;
  citrixCloudCustomerId: string;
  idpType: any;
};
export declare type UpdateSubscribers = {
  authInstance: any;
  microappsAdminUrl: string;
  assign: string;
  userDetail: any;
  appId: string;
  domainName: string;
  forestName: string;
  workspaceIdentityProvider: string;
};
export declare type GetSubscribers = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};
export declare type ExportIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  filePath: any;
  params: any;
};
export declare type GetIntegrationLog = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  integrationType: string;
};
export declare type GetCitrixCloudTokens = {
  cwaAPI: string;
  citrixCloudCustomerId: string;
  citrixCloudClientId: string;
  citrixCloudClientSecret: string;
};
export declare type AddSecrets = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  data: any;
};
export declare type GetAppInfo = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};

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
export declare type GetAuthenticatorCode = {
    secretKey: string;
};
export declare type GetCCBearerToken = {
    cwaAPI: string;
    citrixCloudCustomerId: string;
    citrixCloudClientId: string;
    citrixCloudClientSecret: string;
};
export declare type CreateAuthInstance = {
    bearerToken: string;
};


import { AxiosError } from 'axios';
export declare type GetCookie = {
    cookies: any;
    cookieName: string;
};
export declare type ErrorHandle = {
    error: AxiosError;
    args: Object;
};
export declare const getCookie: ({ cookies, cookieName }: GetCookie) => string;
export declare const errorHandle: ({ error, args }: ErrorHandle) => Promise<never>;


/** Class representing a Microapps Admin. */
export declare class MicroappsAdmin extends API {
    constructor();
    /**
     * Login to cloud
     * @param {string} - Microapps cloud login url
     * @param {string} - Username
     * @param {string} - Password
     */
    login({ page, url, username, password, mfa, secretKey, }: MicroappsAdminLogin): Promise<void>;
    /**
     * Get Integration Id
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */
    getIntegrationId({ authInstance, microappsAdminUrl, integrationName, }: GetIntegrationId): Promise<any>;
    /**
     * Delete credentiaslds from credentials wallet for specific inregration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     * @param {number} repeatCount - Set count for retries
     */
    oauthLogout({ authInstance, microappsAdminUrl, integrationName, repeatCount, }: OauthLogout): Promise<void>;
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
    waitForProcessStatus({ authInstance, status, microappsAdminUrl, processId, }: WaitForProcessStatus): Promise<any>;
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
    getIntegrationType({ authInstance, microappsAdminUrl, integrationName, }: GetIntegrationType): Promise<any>;
    /**
     * Get status of Integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of integration
     */
    getStatusIntegration({ authInstance, microappsAdminUrl, integrationName, }: GetStatusIntegration): Promise<any>;
    /**
     * Import integration
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} pathToFile - path to file.mapp which should be imported
     */
    importIntegration({ authInstance, microappsAdminUrl, pathToFile, }: ImportIntegration): Promise<any>;
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
    exportApp({ authInstance, microappsAdminUrl, appId, pathToFile, }: ExportApp): Promise<void>;
    /**
     * Get Id of Microapp
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationId - Name of integration
     * @param {string} appName - Name Application
     */
    getMicroAppId({ authInstance, microappsAdminUrl, integrationId, appName, }: GetMicroAppId): Promise<any>;
    /**
     * Get Id of Notification
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Name of App
     * @param {string} notificationName - Name of Notification
     */
    getNotificationId({ authInstance, microappsAdminUrl, appId, notificationName, }: GetNotificationId): Promise<any>;
    /**
     * Run a Event
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} appName - Name of App
     *  @param {string} notificationName - Name of Notification
     */
    runEvent({ authInstance, microappsAdminUrl, integrationName, appName, notificationName, }: RunEvent): Promise<void>;
    checkAppMissconfigurations({ authInstance, microappsAdminUrl, appId, }: CheckAppMissconfigurations): Promise<void>;
    addSubscriber({ authInstance, appId, user, config }: AddSubscriber): Promise<void>;
    addSubscribers({ authInstance, integrationName, microapps, microappsAdminUrl, config, }: AddSubscribers): Promise<{
        microapp: string;
    }[]>;
    /**
     * Import Integration from an exported Integration file
     *
     * @param {Page} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} filePath - Path to the exported Integration file that will be imported
     */
    importIntegrationUI({ page, microappsAdminUrl, filePath, }: ImportIntegrationUI): Promise<void>;
    /**
     * Imports MicroApp to @param integrationName Integration from an exported MicroApp file
     *
     * @param {Page} page -  Methods to interact with a single tab or extension background page in Browser
     * @param {string} microappsAdminUrl - MicroApps Admin URL
     * @param {string} filePath - Path to the exported MicroApp file that will be imported
     * @param {string} integrationName - Name of Integration in which the MicroApp will be imported
     */
    importMicroAppUI({ page, microappsAdminUrl, filePath, integrationName, }: ImportMicroAppUI): Promise<void>;
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
    exportMicroAppsUI({ page, integrationName, appName, }: ExportMicroAppUI): Promise<void>;
    /**
     * Returns last duration of Synchronization
     *
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     */
    getLastTimeSync({ authInstance, microappsAdminUrl, integrationName, }: GetLastSyncTime): Promise<any>;
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
}
export declare type MicroappsAdminLogin = {
    page: Page;
    url: string;
    username: string;
    password: string;
    mfa: any | boolean;
    secretKey: string;
};
export declare type GetIntegrationId = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type OauthLogout = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    repeatCount?: number;
};
export declare type WaitForSync = {
    getIntegration: () => any;
    synchronizationType: string;
};
export declare type RunSynchronization = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    synchronizationType: string;
};
export declare type CreateHTTPIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    integrationConfiguration: any;
};
export declare type WaitForProcessStatus = {
    authInstance: any;
    getProcessStatus: () => any;
    status: string;
    microappsAdminUrl: string;
    processId: string;
};
export declare type CreateJavaIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    data: string;
    integrationConfiguration: any;
    withEntities: boolean;
    serviceType: any;
    serviceKey: string;
    name: string;
};
export declare type GetIntegrationType = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type GetStatusIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type ImportIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    pathToFile: string;
};
export declare type RenameIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    newIntegrationName: string;
    integrationConfiguration: string;
};
export declare type ExportApp = {
    authInstance: any;
    microappsAdminUrl: string;
    appId: string;
    pathToFile: string;
};
export declare type GetMicroAppId = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationId: string;
    appName: string;
};
export declare type GetNotificationId = {
    authInstance: any;
    microappsAdminUrl: string;
    appId: string;
    notificationName: string;
};
export declare type RunEvent = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    notificationName: string;
};
export declare type CheckAppMissconfigurations = {
    authInstance: any;
    microappsAdminUrl: string;
    appId: string;
};
export declare type ImportIntegrationUI = {
    page: Page;
    microappsAdminUrl: string;
    filePath: string;
};
export declare type ImportMicroAppUI = {
    page: Page;
    microappsAdminUrl: string;
    filePath: string;
    integrationName: string;
};
export declare type AddSubscriber = {
    authInstance: any;
    appId: string;
    user: string;
    config: any;
};
export declare type AddSubscribers = {
    authInstance: any;
    integrationName: string;
    microappsAdminUrl: string;
    microapps?: any;
    config: any;
};
export declare type Subscribe = {
    authInstance: any;
    microapps: any;
    microapp: string;
    integrationId: string;
};
export declare type ExportIntegrationUI = {
    page: Page;
    integrationName: string;
};
export declare type ExportMicroAppUI = {
    page: Page;
    appName: string;
    integrationName: string;
};
export declare type GetLastSyncTime = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type GetComponentId = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    pageName: string;
    componentLabel: string;
};



import { Page, BrowserContext } from "playwright";
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
    login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider, }: Login): Promise<void>;
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
    getFeedCardButton({ page, feedCardId, buttonName }: GetFeedCardButton): Promise<import("playwright").ElementHandle<SVGElement | HTMLElement>[]>;
    /**
     * Wait for success or error pop-up message
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} text - Text that should be in success message
     */
    waitForPopUp({ page, text }: WaitForPopUp): Promise<void>;
    getOneTimeToken({ workspaceUrl, builderDomain, csrfToken, sessionId, ctxsAuthId, authDomain, }: GetOneTimeToken): Promise<any>;
    getTokens({ builderDomain, authDomain, oneTimeToken }: GetTokens): Promise<{
        citrixToken: any;
        jSessionId: string;
    }>;
    getDsauthTokens({ page, context, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider, builderDomain, authDomain, }: GetDsauthTokens): Promise<{
        citrixToken: any;
        jSessionId: string;
    }>;
    createDsAuthInstance({ citrixToken, jSessionId, }: CreateDsAuthInstance): Promise<import("axios").AxiosInstance>;
    getUserData({ dSauthInstance, microappsAdminUrl, appId, componentId, dataLimit, initiatorType, initiatorData, pageId, authDomain, }: GetUserData): Promise<any>;
}
export declare type Login = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
};
export declare type SkipTour = {
    page: Page;
};
export declare type GoToActions = {
    page: Page;
};
export declare type StartAction = {
    page: Page;
    actionName: string;
    integrationName: string;
};
export declare type GetFeedNotifications = {
    page: Page;
};
export declare type WaitForFeedCardId = {
    page: Page;
    repeatMax?: number;
    waitTime?: number;
    recordId: string;
    notificationId: string;
};
export declare type GetFeedCardButton = {
    page: Page;
    feedCardId: string;
    buttonName: string;
};
export declare type WaitForPopUp = {
    page: Page;
    text: string;
};
export declare type GetOneTimeToken = {
    workspaceUrl: string;
    builderDomain: string;
    csrfToken: string;
    sessionId: string;
    ctxsAuthId: string;
    authDomain: string;
};
export declare type GetTokens = {
    builderDomain: string;
    authDomain: string;
    oneTimeToken: string;
};
export declare type GetDsauthTokens = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
    context: BrowserContext;
    builderDomain: string;
    authDomain: string;
};
export declare type CreateDsAuthInstance = {
    citrixToken: string;
    jSessionId: string;
};
export declare type GetUserData = {
    dSauthInstance: any;
    microappsAdminUrl: string;
    appId: string;
    componentId: string;
    dataLimit: string;
    initiatorType: string;
    initiatorData: string;
    pageId: string;
    authDomain: string;
};
