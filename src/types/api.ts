import { AxiosInstance } from 'axios';

export type AddApp = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    data: string;
};

export type GetBundleCatalogue = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};

export type GetIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};

export type GetIntegrations = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};

export type GetProcessStatus = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    processId: string;
};

export type IntegrationLogout = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};

export type UpdateBundleCatalogue = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    catalogueId: string;
};

export type UpdateintegrationConfiguration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    integrationConfiguration: any;
};

export type ValidateConfiguration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    serviceKey: string;
    configuration: string;
};

export type GetEntities = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};

export type CreateEntity = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    entityData: any;
};

export type FinalizeConfig = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};

export type GetApps = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};

export type GetNotifications = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};

export type RunNotificationEvent = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    notificationId: string;
};

export type StartSynchronization = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    synchronizationType: string;
};

export type IntegrityCheck = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};

export type DeleteIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
};

export type GetDomain = {
    authInstance: AxiosInstance;
    cwaAPI: string;
    citrixCloudCustomerId: string;
    workspaceIdentityProvider: string;
};

export type GetUsers = {
    authInstance: AxiosInstance;
    cwaAPI: string;
    domainName: string;
    forestName: string;
    appId: string;
    query: string;
    citrixCloudCustomerId: string;
    idpType: any;
};

export type UpdateSubscribers = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    assign: string;
    userDetail: any;
    appId: string;
    domainName: string;
    forestName: string;
    workspaceIdentityProvider: string;
};

export type GetSubscribers = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};

export type ExportIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    filePath: any;
    params: any;
};

export type GetIntegrationLog = {
    authInstance: AxiosInstance;
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

export type AddSecrets = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    data: any;
};

export type GetAppInfo = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};
