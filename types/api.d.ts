import type { AddApp, AddSecrets, CreateEntity, DeleteIntegration, ExportIntegration, FinalizeConfig, GetAppInfo, GetApps, GetBundleCatalogue, GetCitrixCloudTokens, GetDomain, GetEntities, GetIntegration, GetIntegrationLog, GetIntegrations, GetNotifications, GetProcessStatus, GetSubscribers, GetUsers, IntegrationLogout, IntegrityCheck, RunNotificationEvent, StartSynchronization, UpdateBundleCatalogue, UpdateintegrationConfiguration, UpdateSubscribers, ValidateConfiguration } from './types/api';
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
    getIntegrations({ authInstance, microappsAdminUrl }: GetIntegrations): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get Bundle Catalogue in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    getBundleCatalogue({ authInstance, microappsAdminUrl }: GetBundleCatalogue): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Update Bundle Catalogue in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} catalogueId - Catalogue Id
     */
    updateBundleCatalogue({ authInstance, microappsAdminUrl, catalogueId }: UpdateBundleCatalogue): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Update Integration Configuration in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     * @param {string} integrationConfiguration - integrationConfiguration
     */
    updateintegrationConfiguration({ authInstance, microappsAdminUrl, integrationId, integrationConfiguration, }: UpdateintegrationConfiguration): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get one specific Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    getIntegration({ authInstance, microappsAdminUrl, integrationId }: GetIntegration): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Auth logout in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    integrationLogout({ authInstance, microappsAdminUrl, integrationId }: IntegrationLogout): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Validate configuration of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} serviceKey - ServiceKey of Integration
     * @param {string} configuration - Configuration parameters of Integration
     */
    validateConfiguration({ authInstance, microappsAdminUrl, serviceKey, configuration }: ValidateConfiguration): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Add MicroApp in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} data - Data of the MicroApp
     */
    addApp({ authInstance, microappsAdminUrl, data }: AddApp): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get status of one specific process
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} processId - Id of the process
     */
    getProcessStatus({ authInstance, microappsAdminUrl, processId }: GetProcessStatus): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get all Entities of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    getEntities({ authInstance, microappsAdminUrl, integrationId }: GetEntities): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Create Entity in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     * @param {string} entityData - Data of the Entity
     */
    createEntity({ authInstance, microappsAdminUrl, integrationId, entityData }: CreateEntity): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Finalize configuration of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    finalizeConfig({ authInstance, microappsAdminUrl, integrationId }: FinalizeConfig): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get all MicroApps in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url

     */
    getApps({ authInstance, microappsAdminUrl }: GetApps): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get Notifications of MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    getNotifications({ authInstance, microappsAdminUrl, appId }: GetNotifications): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Run Event in MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    runNotificationEvent({ authInstance, microappsAdminUrl, notificationId }: RunNotificationEvent): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Start Synchronization of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    startSynchronization({ authInstance, microappsAdminUrl, integrationId, synchronizationType, }: StartSynchronization): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Check integrity of all MicroApps in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    integrityCheck({ authInstance, microappsAdminUrl }: IntegrityCheck): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Delete Integration in Microaaps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    deleteIntegration({ authInstance, microappsAdminUrl, integrationId }: DeleteIntegration): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Sets Domain in authInstance for specific Workspace Identity Provider
     *
     * @param {object} authInstance - Axios instance
     * @param {string} cwaAPI - Api Environment
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} workspaceIdentityProvider - Identity Provider of Workspace
     */
    getDomain({ authInstance, cwaAPI, citrixCloudCustomerId, workspaceIdentityProvider }: GetDomain): Promise<import("axios").AxiosResponse<any>>;
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
    getUsers({ authInstance, cwaAPI, domainName, forestName, appId, query, citrixCloudCustomerId, idpType, }: GetUsers): Promise<import("axios").AxiosResponse<any>>;
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
    updateSubscribers({ authInstance, microappsAdminUrl, assign, userDetail, appId, domainName, forestName, workspaceIdentityProvider, }: UpdateSubscribers): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get all Subscribers of MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    getSubscribers({ authInstance, microappsAdminUrl, appId }: GetSubscribers): Promise<import("axios").AxiosResponse<any>>;
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
    getIntegrationLog({ authInstance, microappsAdminUrl, integrationId, integrationType }: GetIntegrationLog): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Update integration with secrets
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationId - Id of Integration
     * @param {string} data - Secrest which should be add to the integration
     */
    addSecrets({ authInstance, microappsAdminUrl, integrationId, data }: AddSecrets): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get microapp info - pages, components etc...
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Id of microapp
     */
    getAppInfo({ authInstance, microappsAdminUrl, appId }: GetAppInfo): Promise<import("axios").AxiosResponse<any>>;
}
