import { Page } from 'playwright-core';

export type Login = {
    page: Page;
    url: string;
    username: string;
    password: string;
    mfa: any | boolean;
    secretKey: string;
};

export type GetIntegrationId = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};

export type OauthLogout = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    repeatCount: number;
};

export type WaitForSync = {
    getIntegration: () => any;
    synchronizationType: string;
};

export type RunSynchronization = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    synchronizationType: string;
};

export type CreateHTTPIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    integrationConfiguration: any;
};

export type WaitForProcessStatus = {
    authInstance: any;
    getProcessStatus: () => any;
    status: string;
    microappsAdminUrl: string;
    processId: string;
};

export type CreateJavaIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    data: string;
    integrationConfiguration: any;
    withEntities: boolean;
    serviceType: any;
    serviceKey: string;
    name: string;
};



export type GetIntegrationType = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};

export type GetStatusIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
};

export type ImportIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    pathToFile: string;
};

export type RenameIntegration = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    newIntegrationName: string;
    integrationConfiguration: string;
};

export type ExportApp = {
    authInstance: any;
    microappsAdminUrl: string;
    appId: string;
    pathToFile: string;
};

export type GetMicroAppId = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationId: string;
    appName: string;
};

export type GetNotificationId = {
    authInstance: any;
    microappsAdminUrl: string;
    appId: string;
    notificationName: string;
};

export type RunEvent = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
    appName: string;
    notificationName: string;
};

export type CheckAppMissconfigurations = {
    authInstance: any;
    microappsAdminUrl: string;
    appId: string;
};

export type ImportIntegrationUI = {
  page: Page;
  microappsAdminUrl: string;
  filePath: string;
}

export type ImportMicroAppUI = {
  page: Page;
  microappsAdminUrl: string;
  filePath: string;
  integrationName: string;
}
export type AddSubscriber = {
  authInstance: any;
  appId: string;
  user: string;
  config: any;
};

export type AddSubscribers = {
  authInstance: any;
  integrationName: string;
  microappsAdminUrl: string;
  microapps?: any;
  config: any;
};

export type Subscribe = {
  authInstance: any;
  microapps: any;
  microapp: string;
  integrationId: string;
};

export type ExportIntegrationUI = {
  page: Page;
  integrationName: string;
}

export type ExportMicroAppUI = {
  page: Page;
  appName: string;
  integrationName: string;
}

export type GetLastSyncTime = {
    authInstance: any;
    microappsAdminUrl: string;
    integrationName: string;
}