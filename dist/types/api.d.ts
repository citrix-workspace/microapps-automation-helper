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
