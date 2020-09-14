import { Page } from 'playwright-core';
export declare type Login = {
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
    repeatCount: number;
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
