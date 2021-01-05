export type AddApp = {
  authInstance: any;
  microappsAdminUrl: string;
  data: string;
};

export type GetBundleCatalogue = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type GetIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type GetIntegrations = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type GetProcessStatus = {
  authInstance: any;
  microappsAdminUrl: string;
  processId: string;
};

export type IntegrationLogout = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type UpdateBundleCatalogue = {
  authInstance: any;
  microappsAdminUrl: string;
  catalogueId: string;
};

export type UpdateintegrationConfiguration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  integrationConfiguration: any;
};

export type ValidateConfiguration = {
  authInstance: any;
  microappsAdminUrl: string;
  serviceKey: string;
  configuration: string;
};

export type GetEntities = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type CreateEntity = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  entityData: any;
};

export type FinalizeConfig = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type GetApps = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type GetNotifications = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};

export type RunNotificationEvent = {
  authInstance: any;
  microappsAdminUrl: string;
  notificationId: string;
};

export type StartSynchronization = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  synchronizationType: string;
};

export type IntegrityCheck = {
  authInstance: any;
  microappsAdminUrl: string;
};

export type DeleteIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
};

export type GetDomain = {
  authInstance: any;
  cwaAPI: string;
  citrixCloudCustomerId: string;
  workspaceIdentityProvider: string;
};

export type GetUsers = {
  authInstance: any;
  cwaAPI: string;
  domainName: string;
  forestName: string;
  appId: string;
  query: string;
  citrixCloudCustomerId: string;
  idpType: any;
};

export type UpdateSubscribers = {
  authInstance: any;
  microappsAdminUrl: string;
  assign: string;
  userDetail: any;
  appId: string;
  domainName: string;
  forestName: string;
  workspaceIdentityProvider: string;
};

export type GetSubscribers = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};

export type ExportIntegration = {
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  filePath: any;
  params: any;
};

export type GetIntegrationLog = {
  authInstance: any;
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
  authInstance: any;
  microappsAdminUrl: string;
  integrationId: string;
  data: any;
};

export type GetAppInfo = {
  authInstance: any;
  microappsAdminUrl: string;
  appId: string;
};
