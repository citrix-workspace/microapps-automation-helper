import { Page, BrowserContext } from "playwright";
/** Class representing a Workspace. */
export declare class Workspace {
    constructor();
    /**
     * Login to Workspace
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} workspaceUrl - Workspace login url
     * @param {string} workspaceUsername - Workspace Username
     * @param {string} workspacePassword - Workspace Password
     * @param {string} workspaceIdentityProvider - Identity provider (ad | netscaler | aad)
     */
    login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider }: Login): Promise<void>;
    /**
     * Skip Tour
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    skipTour({ page }: SkipTour): Promise<void>;
    /**
     * Go to Actions
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    goToActions({ page }: GoToActions): Promise<void>;
    /**
     * Start Action
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} actionName - name of Action what should be executed
     * @param {string} integrationName - name of Integration the action belongs to
     */
    startAction({ page, actionName, integrationName }: StartAction): Promise<void>;
    /**
     * Get Feed Notifications
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    getFeedNotifications({ page }: GetFeedNotifications): Promise<{}>;
    /**
     * Wait for FeedCard to show up in Notifications
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} recordId - Id of the record
     * @param {number} repeatMax - Max number of tries to find the FeedCard
     * @param {number} waitTime - Time in miliseconds to wait after each try
     */
    waitForFeedCardId({ page, repeatMax, waitTime, recordId, notificationId }: WaitForFeedCardId): Promise<any>;
    /**
     * Returns button on FeedCard
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} feedCardId - Id of the FeedCard
     * @param {string} buttonName - Text on the Button
     */
    getFeedCardButton({ page, feedCardId, buttonName }: GetFeedCardButton): Promise<import("playwright").ElementHandle<SVGElement | HTMLElement>[]>;
    /**
     * Wait for success or error pop-up message
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} text - Text that should be in success message
     */
    waitForPopUp({ page, text }: WaitForPopUp): Promise<void>;
    getOneTimeToken({ workspaceUrl, builderDomain, csrfToken, sessionId, ctxsAuthId, authDomain, }: GetOneTimeToken): Promise<any>;
    getTokens({ builderDomain, authDomain, oneTimeToken }: GetTokens): Promise<{
        citrixToken: any;
        jSessionId: string;
    }>;
    getDsauthTokens({ page, context, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider, builderDomain, authDomain, }: GetDsauthTokens): Promise<{
        citrixToken: any;
        jSessionId: string;
    }>;
    createDsAuthInstance({ citrixToken, jSessionId }: CreateDsAuthInstance): Promise<import("axios").AxiosInstance>;
}
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
