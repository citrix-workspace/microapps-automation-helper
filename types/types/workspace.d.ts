import { Page, BrowserContext } from 'playwright';
export declare type Login = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
};
export declare type SkipTour = {
    page: Page;
};
export declare type GoToActions = {
    page: Page;
};
export declare type StartAction = {
    page: Page;
    actionName: string;
    integrationName: string;
};
export declare type GetFeedNotifications = {
    page: Page;
};
export declare type WaitForFeedCardId = {
    page: Page;
    repeatMax?: number;
    waitTime?: number;
    recordId: string;
    notificationId: string;
};
export declare type GetFeedCardButton = {
    page: Page;
    feedCardId: string;
    buttonName: string;
};
export declare type WaitForPopUp = {
    page: Page;
    text: string;
};
export declare type GetOneTimeToken = {
    workspaceUrl: string;
    builderDomain: string;
    csrfToken: string;
    sessionId: string;
    ctxsAuthId: string;
    authDomain: string;
};
export declare type GetTokens = {
    builderDomain: string;
    authDomain: string;
    oneTimeToken: string;
};
export declare type GetDsauthTokens = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
    context: BrowserContext;
    builderDomain: string;
    authDomain: string;
};
export declare type CreateDsAuthInstance = {
    citrixToken: string;
    jSessionId: string;
};
export declare type GetUserData = {
    dSauthInstance: any;
    microappsAdminUrl: string;
    appId: string;
    componentId: string;
    dataLimit: string;
    initiatorType: string;
    initiatorData: string;
    pageId: string;
    authDomain: string;
};
export declare type SetFilterOnFeed = {
    page: Page;
    option?: 'CREATED_AT' | 'RELEVANCE_DESKTOP';
};
