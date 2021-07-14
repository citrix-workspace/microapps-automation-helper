import { Page, BrowserContext } from 'playwright';

export type Login = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
};

export type SkipTour = {
    page: Page;
};

export type GoToActions = {
    page: Page;
};

export type StartAction = {
    page: Page;
    actionName: string;
    integrationName: string;
};

export type GetFeedNotifications = {
    page: Page;
};

export type WaitForFeedCardId = {
    page: Page;
    repeatMax?: number;
    waitTime?: number;
    recordId: string;
    notificationId?: string;
};

export type GetFeedCardButton = {
    page: Page;
    feedCardId: string;
    buttonName: string;
};

export type WaitForPopUp = {
    page: Page;
    text: string;
};

export type GetOneTimeToken = {
    workspaceUrl: string;
    builderDomain: string;
    csrfToken: string;
    sessionId: string;
    ctxsAuthId: string;
    authDomain: string;
};

export type GetTokens = {
    builderDomain: string;
    authDomain: string;
    oneTimeToken: string;
};

export type GetDsauthTokens = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
    context: BrowserContext;
    builderDomain: string;
    authDomain: string;
};

export type CreateDsAuthInstance = {
    citrixToken: string;
    jSessionId: string;
};

export type GetUserData = {
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


export type SetFilterOnFeed = {
    page: Page;
    option?: 'CREATED_AT' | 'RELEVANCE_DESKTOP';   
};