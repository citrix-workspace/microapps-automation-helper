"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const helpers_1 = require("./helpers");
/** Class representing a Citrix Cloud. */
class API {
    constructor() { }
    /**
     * Get Citrix Cloud Tokens
     *
     * @param {string} cwaAPI - Api Environment
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */
    async getCitrixCloudTokens({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret, }) {
        try {
            return await axios_1.default({
                timeout: 180000,
                url: `https://trust.${cwaAPI}.net/${citrixCloudCustomerId}/tokens/clients`,
                method: 'POST',
                data: {
                    clientId: citrixCloudClientId,
                    clientSecret: citrixCloudClientSecret,
                },
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { cwaAPI, citrixCloudClientId, citrixCloudClientSecret, citrixCloudCustomerId },
            });
        }
    }
    /**
     * Get all Integrations in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    async getIntegrations({ authInstance, microappsAdminUrl }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: {},
            });
        }
    }
    /**
     * Get Bundle Catalogue in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    async getBundleCatalogue({ authInstance, microappsAdminUrl }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/bundleCatalogue`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl },
            });
        }
    }
    /**
     * Update Bundle Catalogue in Miroapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} catalogueId - Catalogue Id
     */
    async updateBundleCatalogue({ authInstance, microappsAdminUrl, catalogueId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/bundleCatalogue/import/${catalogueId}`,
                method: 'POST',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, catalogueId },
            });
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
    async updateintegrationConfiguration({ authInstance, microappsAdminUrl, integrationId, integrationConfiguration, }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}`,
                method: 'PUT',
                data: integrationConfiguration,
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId, integrationConfiguration },
            });
        }
    }
    /**
     * Get one specific Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async getIntegration({ authInstance, microappsAdminUrl, integrationId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId },
            });
        }
    }
    /**
     * Auth logout in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async integrationLogout({ authInstance, microappsAdminUrl, integrationId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/auth/serviceAction/logout/${integrationId}`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId },
            });
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
    async validateConfiguration({ authInstance, microappsAdminUrl, serviceKey, configuration, }) {
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
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, serviceKey, configuration },
            });
        }
    }
    /**
     * Add MicroApp in Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} data - Data of the MicroApp
     */
    async addApp({ authInstance, microappsAdminUrl, data }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app`,
                method: 'POST',
                data,
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, data },
            });
        }
    }
    /**
     * Get status of one specific process
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} processId - Id of the process
     */
    async getProcessStatus({ authInstance, microappsAdminUrl, processId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/process/${processId}`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, processId },
            });
        }
    }
    /**
     * Get all Entities of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async getEntities({ authInstance, microappsAdminUrl, integrationId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/entities`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId },
            });
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
    async createEntity({ authInstance, microappsAdminUrl, integrationId, entityData }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/entities`,
                method: 'PUT',
                data: entityData,
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId, entityData },
            });
        }
    }
    /**
     * Finalize configuration of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async finalizeConfig({ authInstance, microappsAdminUrl, integrationId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/finalize-config`,
                method: 'POST',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId },
            });
        }
    }
    /**
     * Get all MicroApps in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url

     */
    async getApps({ authInstance, microappsAdminUrl }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl },
            });
        }
    }
    /**
     * Get Notifications of MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    async getNotifications({ authInstance, microappsAdminUrl, appId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/notifications/app/${appId}`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, appId },
            });
        }
    }
    /**
     * Run Event in MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    async runNotificationEvent({ authInstance, microappsAdminUrl, notificationId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/notification/${notificationId}/run`,
                method: 'POST',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, notificationId },
            });
        }
    }
    /**
     * Start Synchronization of Integration in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async startSynchronization({ authInstance, microappsAdminUrl, integrationId, synchronizationType, }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/run/${synchronizationType}`,
                method: 'POST',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId, synchronizationType },
            });
        }
    }
    /**
     * Check integrity of all MicroApps in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     */
    async integrityCheck({ authInstance, microappsAdminUrl }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app/integrity-check`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl },
            });
        }
    }
    /**
     * Delete Integration in Microaaps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} integrationId - Integration Id
     */
    async deleteIntegration({ authInstance, microappsAdminUrl, integrationId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}`,
                method: 'DELETE',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId },
            });
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
    async getDomain({ authInstance, cwaAPI, citrixCloudCustomerId, workspaceIdentityProvider }) {
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
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, cwaAPI, citrixCloudCustomerId, workspaceIdentityProvider },
            });
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
    async getUsers({ authInstance, cwaAPI, domainName, forestName, appId, query, citrixCloudCustomerId, idpType, }) {
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
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, cwaAPI, domainName, forestName, appId, query, citrixCloudCustomerId, idpType },
            });
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
    async updateSubscribers({ authInstance, microappsAdminUrl, assign, userDetail, appId, domainName, forestName, workspaceIdentityProvider, }) {
        const { accountName, displayName, universalClaims, identityInformation, isGroup } = userDetail[0];
        const getOID = universalClaims.filter((value) => {
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
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: {
                    authInstance,
                    microappsAdminUrl,
                    assign,
                    userDetail,
                    appId,
                    domainName,
                    forestName,
                    workspaceIdentityProvider,
                },
            });
        }
    }
    /**
     * Get all Subscribers of MicroApp in Microapps Admin
     *
     * @param {object} authInstance - Axios instance
     * @param {string} microappsAdminUrl - Microapps Admin Url
     * @param {string} appId - Id of the MicroApp
     */
    async getSubscribers({ authInstance, microappsAdminUrl, appId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/security/app-user/selected-groups/${appId}`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, appId },
            });
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
    async exportIntegration({ authInstance, microappsAdminUrl, integrationId, filePath, params, }) {
        let response;
        try {
            response = await authInstance({
                method: 'GET',
                url: `${microappsAdminUrl}/api/service/${integrationId}/export`,
                params,
                responseType: 'stream',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId, filePath, params },
            });
        }
        await response.data.pipe(fs_1.default.createWriteStream(path_1.default.resolve(__dirname, filePath)));
    }
    /**
     * get integration log
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationName - Name of Integration
     * @param {string} integrationType - Type of Integration
     */
    async getIntegrationLog({ authInstance, microappsAdminUrl, integrationId, integrationType, }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/event-log?entityRef=${integrationId}&type=${integrationType}&subType=JOB&offset=0&limit=20`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId, integrationType },
            });
        }
    }
    /**
     * Update integration with secrets
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} integrationId - Id of Integration
     * @param {string} data - Secrest which should be add to the integration
     */
    async addSecrets({ authInstance, microappsAdminUrl, integrationId, data }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/service/${integrationId}/secrets`,
                method: 'POST',
                data,
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, integrationId, data },
            });
        }
    }
    /**
     * Get microapp info - pages, components etc...
     * @param {Object} authInstance - Authorized instance for API calls
     * @param {string} microappsAdminUrl - Microapps admin url
     * @param {string} appId - Id of microapp
     */
    async getAppInfo({ authInstance, microappsAdminUrl, appId }) {
        try {
            return await authInstance({
                url: `${microappsAdminUrl}/api/app/${appId}`,
                method: 'GET',
            });
        }
        catch (error) {
            await helpers_1.errorHandle({
                error,
                args: { authInstance, microappsAdminUrl, appId },
            });
        }
    }
}
exports.API = API;
