import { AxiosInstance } from 'axios';
export declare type AddApp = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    data: string;
};
export declare type GetBundleCatalogue = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};
export declare type GetIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};
export declare type GetIntegrations = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};
export declare type GetProcessStatus = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    processId: string;
};
export declare type IntegrationLogout = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};
export declare type UpdateBundleCatalogue = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    catalogueId: string;
};
export declare type UpdateintegrationConfiguration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    integrationConfiguration: any;
};
export declare type ValidateConfiguration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    serviceKey: string;
    configuration: string;
};
export declare type GetEntities = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};
export declare type CreateEntity = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    entityData: any;
};
export declare type FinalizeConfig = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};
export declare type GetApps = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};
export declare type GetNotifications = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};
export declare type RunNotificationEvent = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    notificationId: string;
};
export declare type StartSynchronization = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    synchronizationType: string;
};
export declare type IntegrityCheck = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};
export declare type DeleteIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};
export declare type GetDomain = {
    authInstance: AxiosInstance;
    cwaAPI: string;
    citrixCloudCustomerId: string;
    workspaceIdentityProvider: string;
};
export declare type GetUsers = {
    authInstance: AxiosInstance;
    cwaAPI: string;
    domainName: string;
    forestName: string;
    appId: string;
    query: string;
    citrixCloudCustomerId: string;
    idpType: any;
};
export declare type UpdateSubscribers = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    assign: string;
    userDetail: any;
    appId: string;
    domainName: string;
    forestName: string;
    workspaceIdentityProvider: string;
};
export declare type GetSubscribers = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};
export declare type ExportIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    filePath: any;
    params: any;
};
export declare type GetIntegrationLog = {
    authInstance: AxiosInstance;
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
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    data: any;
};
export declare type GetAppInfo = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};
