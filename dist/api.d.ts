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
