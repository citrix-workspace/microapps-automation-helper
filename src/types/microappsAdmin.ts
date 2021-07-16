import { Page } from 'playwright';
import { AxiosInstance } from 'axios';

export type MicroappsAdminLogin = {
    page: Page;
    url: string;
    username: string;
    password: string;
    mfa: any | boolean;
    secretKey: string;
};

export type GetIntegrationId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};

export type OauthLogout = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    repeatCount?: number;
};

export type WaitForSync = {
    getIntegration: () => any;
    synchronizationType: string;
    integrationName?: string;
    skipCheck?: boolean,
    maxMinutesToWait?: number,
};

export type RunSynchronization = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    synchronizationType: string;
    maxMinutesToWait?: number
};

export type CreateHTTPIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    integrationConfiguration: any;
};

export type WaitForProcessStatus = {
    authInstance: AxiosInstance;
    getProcessStatus: () => any;
    status: string;
    microappsAdminUrl: string;
    processId: string;
};

export type CreateJavaIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    data: string;
    integrationConfiguration: any;
    withEntities: boolean;
    serviceType: any;
    serviceKey: string;
    name: string;
};

export type GetIntegrationType = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};

export type GetStatusIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};

export type ImportIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    pathToFile: string;
};

export type RenameIntegration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    newIntegrationName: string;
    integrationConfiguration: string;
};

export type ExportApp = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
    pathToFile: string;
};

export type GetMicroAppId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string;
    appName: string;
};

export type GetNotificationId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
    notificationName: string;
};

export type RunEvent = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    notificationName: string;
};

export type CheckAppMissconfigurations = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    appId: string;
};

export type ImportIntegrationUI = {
    page: Page;
    microappsAdminUrl: string;
    filePath: string;
};

export type ImportMicroAppUI = {
    page: Page;
    microappsAdminUrl: string;
    filePath: string;
    integrationName: string;
};
export type AddSubscriber = {
    authInstance: AxiosInstance;
    appId: string;
    user: string;
    config: any;
};

export type AddSubscribers = {
    authInstance: AxiosInstance;
    integrationName: string;
    microappsAdminUrl: string;
    microapps?: any;
    config: any;
};

export type Subscribe = {
    authInstance: AxiosInstance;
    microapps: any;
    microapp: string;
    integrationId: string;
};

export type ExportIntegrationUI = {
    page: Page;
    integrationName: string;
};

export type ExportMicroAppUI = {
    page: Page;
    appName: string;
    integrationName: string;
};

export type GetLastSyncTime = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
};

export type GetComponentId = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    pageName: string;
    componentLabel: string;
};

export type WaitForAllSync = {
    synchronizationType: string;
    timeToRepeat?: number;
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
};


export type  CheckIntegrationMissConfiguration = {
    authInstance: AxiosInstance;
    microappsAdminUrl: string;
    integrationId: string | number
}