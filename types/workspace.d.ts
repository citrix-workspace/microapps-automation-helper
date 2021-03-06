import type { Login, CreateDsAuthInstance, GoToActions, StartAction, SkipTour, GetDsauthTokens, GetFeedCardButton, GetFeedNotifications, GetOneTimeToken, GetTokens, GetUserData, WaitForFeedCardId, WaitForPopUp, SetFilterOnFeed } from './types/workspace';
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
    setFilterOnFeed({ page, option }: SetFilterOnFeed): Promise<void>;
    /**
     * Get Feed Notifications
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    getFeedNotifications({ page }: GetFeedNotifications): Promise<import("playwright/types/structs").Serializable>;
    /**
     * Wait for FeedCard to show up in Notifications
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} recordId - Id of the record
     * @param {number} repeatMax - Max number of tries to find the FeedCard
     * @param {number} waitTime - Time in miliseconds to wait after each try
     */
    waitForFeedCardId({ page, repeatMax, waitTime, recordId, notificationId, }: WaitForFeedCardId): Promise<any>;
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
    /**
     * Get one time token for DsAuth
     *
     * @param {string} workspaceUrl - Workspace url
     * @param {string} builderDomain - Builder domain
     * @param {string} csrfToken - Csrf token
     * @param {string} sessionId - Session Id
     * @param {string} ctxsAuthId - CtxsAuth Id
     * @param {string} authDomain - Auth Domain
     */
    getOneTimeToken({ workspaceUrl, builderDomain, csrfToken, sessionId, ctxsAuthId, authDomain, }: GetOneTimeToken): Promise<string>;
    /**
     * Get citrix csrf token and jSessionId
     *
     * @param {string} builderDomain - Builder domain
     * @param {string} authDomain - Auth Domain
     * @param {string} oneTimeToken - One time token
     */
    getTokens({ builderDomain, authDomain, oneTimeToken }: GetTokens): Promise<{
        citrixToken: string;
        jSessionId: string;
    }>;
    getDsauthTokens({ page, context, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider, builderDomain, authDomain, }: GetDsauthTokens): Promise<{
        citrixToken: string;
        jSessionId: string;
    }>;
    createDsAuthInstance({ citrixToken, jSessionId }: CreateDsAuthInstance): Promise<import("axios").AxiosInstance>;
    getUserData({ dSauthInstance, microappsAdminUrl, appId, componentId, dataLimit, initiatorType, initiatorData, pageId, authDomain, }: GetUserData): Promise<string>;
}
