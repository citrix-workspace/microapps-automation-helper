import { Page } from 'playwright';
import { AxiosInstance } from 'axios';
export declare type MicroappsAdminLogin = {
    page: Page;
    url: string;
    username: string;
    password: string;
    mfa: any | boolean;
    secretKey: string;
};
export declare type GetIntegrationId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type OauthLogout = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    repeatCount?: number;
};
export declare type WaitForSync = {
    getIntegration: () => any;
    synchronizationType: string;
    integrationName?: string;
    skipCheck?: boolean;
    maxMinutesToWait?: number;
};
export declare type RunSynchronization = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    synchronizationType: string;
    maxMinutesToWait?: number;
};
export declare type CreateHTTPIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    integrationConfiguration: any;
};
export declare type WaitForProcessStatus = {
    authInstance: AxiosInstance;
    getProcessStatus: () => any;
    status: string;
    microappsAdminUrl: string;
    processId: string;
};
export declare type CreateJavaIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    data: string;
    integrationConfiguration: any;
    withEntities: boolean;
    serviceType: any;
    serviceKey: string;
    name: string;
};
export declare type GetIntegrationType = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type GetStatusIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type ImportIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    pathToFile: string;
};
export declare type RenameIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    newIntegrationName: string;
    integrationConfiguration: string;
};
export declare type ExportApp = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
    pathToFile: string;
};
export declare type GetMicroAppId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    appName: string;
};
export declare type GetNotificationId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
    notificationName: string;
};
export declare type RunEvent = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    notificationName: string;
};
export declare type CheckAppMissconfigurations = {
    authInstance: AxiosInstance;
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
    authInstance: AxiosInstance;
    appId: string;
    user: string;
    config: any;
};
export declare type AddSubscribers = {
    authInstance: AxiosInstance;
    integrationName: string;
    microappsAdminUrl: string;
    microapps?: any;
    config: any;
};
export declare type Subscribe = {
    authInstance: AxiosInstance;
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
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};
export declare type GetComponentId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    pageName: string;
    componentLabel: string;
};
export declare type WaitForAllSync = {
    synchronizationType: string;
    timeToRepeat?: number;
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};
export declare type CheckIntegrationMissConfiguration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string | number;
};
