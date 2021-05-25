import axios from 'axios';
import { getCookie, paramsCheck } from './helpers';
import type {
    Login,
    CreateDsAuthInstance,
    GoToActions,
    StartAction,
    SkipTour,
    GetDsauthTokens,
    GetFeedCardButton,
    GetFeedNotifications,
    GetOneTimeToken,
    GetTokens,
    GetUserData,
    WaitForFeedCardId,
    WaitForPopUp,
} from './types/workspace';

/** Class representing a Workspace. */
export class Workspace {
    constructor() {}
    /**
     * Login to Workspace
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} workspaceUrl - Workspace login url
     * @param {string} workspaceUsername - Workspace Username
     * @param {string} workspacePassword - Workspace Password
     * @param {string} workspaceIdentityProvider - Identity provider (ad | netscaler | aad)
     */
    async login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider }: Login) {
        console.log('Login to Workspace', new Date());
        await page.goto(workspaceUrl, { waitUntil: 'domcontentloaded' });
        switch (workspaceIdentityProvider) {
            case 'ad':
                await page.waitForSelector('#username');
                await page.type('#username', workspaceUsername);
                await page.waitForSelector('#password');
                await page.type('#password', workspacePassword);
                await page.waitForSelector('#loginBtn');
                await page.click('#loginBtn');
                break;
            case 'netscaler':
                await page.waitForSelector('#login');
                await page.type('#login', workspaceUsername);
                await page.waitForSelector('#passwd');
                await page.type('#passwd', workspacePassword);
                await page.click('#nsg-x1-logon-button');
                break;
            case 'aad':
                await page.waitForSelector('input[name="loginfmt"]');
                await page.fill('input[name="loginfmt"]', workspaceUsername);
                await page.waitForSelector('input[value="Next"]');
                await page.click('input[value="Next"]');
                await page.waitForSelector('#loginHeader >> text=Enter password');
                await page.waitForSelector('input[name="passwd"]');
                await page.fill('input[name="passwd"]', workspacePassword);
                await page.waitForSelector('input[value="Sign in"]');
                await page.click('input[value="Sign in"]');
                await page.waitForSelector('input[value="Yes"]');
                await page.click('input[value="Yes"]');
                break;
            case 'okta':
                await page.waitForSelector('#okta-signin-username');
                await page.type('#okta-signin-username', workspaceUsername);
                await page.waitForSelector('#okta-signin-password');
                await page.type('#okta-signin-password', workspacePassword);
                await page.waitForSelector('#okta-signin-submit');
                await page.click('#okta-signin-submit');
                break;
            default:
                console.log('Identity provider was not specified.');
        }
        await page.waitForSelector('#content', { timeout: 90000 });
        await this.skipTour({ page });
    }

    /**
     * Skip Tour
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */

    async skipTour({ page }: SkipTour) {
        try {
            await page.waitForSelector('.cta-link a', { timeout: 5000 });
            const link = await page.$('.cta-link a');

            if (await link) {
                await page.click('.cta-link a');
            }
        } catch (error) {}
    }

    /**
     * Go to Actions
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */

    async goToActions({ page }: GoToActions) {
        await page.waitForSelector('span >> text=Actions');
        await page.click('span >> text=Actions');
        await page.waitForLoadState('networkidle');
    }

    /**
     * Start Action
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} actionName - name of Action what should be executed
     * @param {string} integrationName - name of Integration the action belongs to
     */

    async startAction({ page, actionName, integrationName }: StartAction) {
        console.log(`Choosing action ${actionName}`, new Date());
        await page.click(
            `//button[descendant::div[@title="${integrationName}"]] //div[contains(text(), "${actionName}")]`
        );
    }

    /**
     * Get Feed Notifications
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */

    async getFeedNotifications({ page }: GetFeedNotifications) {
        await page.waitForSelector('select');
        await page.selectOption('select', 'CREATED_AT');
        const notifications = await page.waitForResponse(
            (response: any) => response.url().match(new RegExp('notification')) && response.status() === 200
        );
        const notificationsBody = await notifications.json();
        return notificationsBody;
    }

    /**
     * Wait for FeedCard to show up in Notifications
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} recordId - Id of the record
     * @param {number} repeatMax - Max number of tries to find the FeedCard
     * @param {number} waitTime - Time in miliseconds to wait after each try
     */
    async waitForFeedCardId({
        page,
        repeatMax = 50,
        waitTime = 5000,
        recordId,
        notificationId = '',
<<<<<<< HEAD
    }: WaitForFeedCardId) {
        let feedCardId: Number;
=======
    }: WaitForFeedCardId): Promise<string> {
        let feedCardId;
>>>>>>> e45ae8d... Update types
        for (let i = 0; i < repeatMax; i++) {
            if (i === repeatMax - 1) {
                throw new Error('Have not found expected feedcard id.');
            }

            const feedNotification: any = await this.getFeedNotifications({ page });
            const data = feedNotification.items;
            let feedCardDetail;
            try {
                feedCardDetail = data.filter(
                    (e: { recordId: string | string[]; source: { notification: { id: string | string[] } } }) => {
                        return e.recordId.includes(recordId) && e.source.notification.id.includes(notificationId);
                    }
                );
                feedCardId = feedCardDetail[0].id;
            } catch (error) {
                console.log(error.stack);
                throw new Error(
                    await paramsCheck({
                        params: { feedCardDetail, feedCardId, data },
                        functionType: 'filter',
                        source: 'data',
                    })
                );
            }

            await page.waitForTimeout(waitTime);

            if (feedCardDetail.length >= 1) {
                break;
            }
        }

        console.log(feedCardId);
        return feedCardId;
    }

    /**
     * Returns button on FeedCard
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} feedCardId - Id of the FeedCard
     * @param {string} buttonName - Text on the Button
     */
    async getFeedCardButton({ page, feedCardId, buttonName }: GetFeedCardButton) {
        return page.$$(
            `xpath=//*[@id="feed-card-body-${feedCardId}"]/ancestor::div[@role="listitem"]//button//div[contains(text(), '${buttonName}')]`
        );
    }

    /**
     * Wait for success or error pop-up message
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} text - Text that should be in success message
     */
    async waitForPopUp({ page, text }: WaitForPopUp) {
        await Promise.race([
            page.waitForSelector(`xpath=//div[contains(text(), "We're unable to process your request")]`),
            page.waitForSelector(`xpath=//div[contains(text(), '${text}')]`),
        ]);
        const alertPopUp = await page.$$(`xpath=//div[contains(text(), "We're unable to process your request")]`);
        if (alertPopUp.length !== 0) {
            throw new Error('Service action failed');
        }
    }

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
    async getOneTimeToken({
        workspaceUrl,
        builderDomain,
        csrfToken,
        sessionId,
        ctxsAuthId,
        authDomain,
    }: GetOneTimeToken): Promise<string> {
        const response = await axios({
            url: `${workspaceUrl}/Citrix/StoreWeb/Sso/Proxy`,
            method: 'POST',
            headers: {
                'Citrix-WSP-Proxy-URL': `${builderDomain}/app/api/auth/dsauth`,
                'Csrf-Token': `${csrfToken}`,
                Cookie: `CsrfToken=${csrfToken}; ASP.NET_SessionId=${sessionId}; CtxsAuthId=${ctxsAuthId}`,
            },
            params: {
                authDomain,
            },
        });

        let token: string;
        try {
            token = response.data.ott;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { token, response },
                    source: 'response',
                })
            );
        }

        return token;
    }

    /**
     * Get citrix csrf token and jSessionId
     *
     * @param {string} builderDomain - Builder domain
     * @param {string} authDomain - Auth Domain
     * @param {string} oneTimeToken - One time token
     */
    async getTokens({
        builderDomain,
        authDomain,
        oneTimeToken,
    }: GetTokens): Promise<{
        citrixToken: string;
        jSessionId: string;
    }> {
        const response = await axios({
            url: `${builderDomain}/app/api/auth/dsauth`,
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
            params: {
                authDomain,
                ott: oneTimeToken,
            },
        });

        let citrixToken: string;
        try {
            citrixToken = response.data.csrf;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { citrixToken, response },
                    source: 'response',
                })
            );
        }

        const cookies = response.headers['set-cookie'];
        const jSessionId = await getCookie({
            cookies: cookies,
            cookieName: 'JSESSIONID',
        });
        return { citrixToken, jSessionId };
    }

    async getDsauthTokens({
        page,
        context,
        workspaceUrl,
        workspaceUsername,
        workspacePassword,
        workspaceIdentityProvider,
        builderDomain,
        authDomain,
    }: GetDsauthTokens) {
        await this.login({
            page,
            workspaceUrl,
            workspaceUsername,
            workspacePassword,
            workspaceIdentityProvider,
        });
        const cookies = await context.cookies();
<<<<<<< HEAD

        let csfrTokenCookie, sessionIdCookie, ctxsAuthIdCookie;
        let csrfToken: any, sessionId: any, ctxsAuthId: any;
        try {
            csfrTokenCookie = cookies.find((e) => e.name === 'CsrfToken');
            csrfToken = csfrTokenCookie?.value;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { csfrTokenCookie, csrfToken, cookies },
                    functionType: 'find',
                    source: 'cookies',
                })
            );
        }
        try {
            sessionIdCookie = cookies.find((e) => e.name === 'ASP.NET_SessionId');
            sessionId = sessionIdCookie?.value;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { sessionIdCookie, sessionId, cookies },
                    functionType: 'find',
                    source: 'cookies',
                })
            );
        }
        try {
            ctxsAuthIdCookie = cookies.find((e) => e.name === 'CtxsAuthId');
            ctxsAuthId = ctxsAuthIdCookie?.value;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { ctxsAuthIdCookie, ctxsAuthId, cookies },
                    functionType: 'find',
                    source: 'cookies',
                })
            );
        }
=======
        const csfrTokenCookie = cookies.find((e) => e.name === 'CsrfToken');
        const sessionIdCookie = cookies.find((e) => e.name === 'ASP.NET_SessionId');
        const ctxsAuthIdCookie = cookies.find((e) => e.name === 'CtxsAuthId');
        const csrfToken: string = csfrTokenCookie?.value;
        const sessionId: string = sessionIdCookie?.value;
        const ctxsAuthId: string = ctxsAuthIdCookie?.value;
>>>>>>> e45ae8d... Update types

        const oneTimeToken = await this.getOneTimeToken({
            workspaceUrl,
            builderDomain,
            csrfToken,
            sessionId,
            ctxsAuthId,
            authDomain,
        });
        const { citrixToken, jSessionId } = await this.getTokens({
            builderDomain,
            authDomain,
            oneTimeToken,
        });

        return { citrixToken, jSessionId };
    }

    async createDsAuthInstance({ citrixToken, jSessionId }: CreateDsAuthInstance) {
        const dSauthInstance = axios.create({});
        dSauthInstance.defaults.headers.common['citrix-csrf-token'] = `${citrixToken}`;
        dSauthInstance.defaults.headers.common['cookie'] = `JSESSIONID=${jSessionId}`;
        dSauthInstance.defaults.timeout = 90000;
        return dSauthInstance;
    }

    async getUserData({
        dSauthInstance,
        microappsAdminUrl,
        appId,
        componentId,
        dataLimit,
        initiatorType,
        initiatorData,
        pageId,
        authDomain,
    }: GetUserData) {
        const response = await dSauthInstance({
            url: `${microappsAdminUrl}/app/api/app/${appId}/component/${componentId}/data`,
            method: 'GET',
            queryParameters: {
                offset: 0,
                limit: dataLimit,
                orderDirection: 'ASC',
                initiator_type: initiatorType,
                initiator_id: pageId,
                initiator_appId: appId,
                initiator_data: initiatorData,
                authDomain,
            },
        });

        let token: string;
        try {
            token = response.data.token;
        } catch (error) {
            console.log(error.stack);
            throw new Error(
                await paramsCheck({
                    params: { token, response },
                    source: 'response',
                })
            );
        }
        return token;
    }
}
