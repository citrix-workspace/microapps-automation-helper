import axios from 'axios';
import { TypeAssertion } from 'typescript';
import { getCookie, paramsCheck } from './helpers';
import * as types from './types/workspace';

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
    async login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider }: types.Login) {
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

    async skipTour({ page }: types.SkipTour) {
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

    async goToActions({ page }: types.GoToActions) {
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

    async startAction({ page, actionName, integrationName }: types.StartAction) {
        console.log(`Choosing action ${actionName}`, new Date());
        await page.click(
            `//button[descendant::div[@title="${integrationName}"]] //div[contains(text(), "${actionName}")]`
        );
    }

    async setFilterOnFeed({ page, option = 'CREATED_AT' }: types.SetFilterOnFeed) {
        const menuItemTitle = option === 'CREATED_AT' ? 'Most Recent' : 'Recommended';

        const elementSelect = await page.$('select');
        const elementFilter = await page.$('#ws-sortby-label');

        const elementSelectState = await Promise.all([elementSelect, elementFilter])
            .then((value) => {
                return value[0];
            })
            .catch((error) => {
                throw new Error(`${error}`);
            });

        if (elementSelectState) {
            await page.waitForSelector('select');

            if (await (await page.$('select'))!.isEnabled()) {
                await page.selectOption('select', option);
            } else {
                console.log('Activity feed dropdown is disabled');
            }
        } else {
            await page.waitForSelector('#ws-sortby-label');
            await page.click('#ws-sortby-label');
            await page.waitForSelector(`[role="menuitem"] :text("${menuItemTitle}")`);
            await page.click(`[role="menuitem"] :text("${menuItemTitle}")`);
        }

        await page.waitForSelector('[role="region"][aria-busy="false"]');
    }

    /**
     * Get Feed Notifications
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */

    async getFeedNotifications({ page }: types.GetFeedNotifications) {
        const notificationsResponse = page.waitForResponse(
            (response) => response.url().match(new RegExp('notification'))! && response.status() === 200
        );

        this.setFilterOnFeed({ page });

        const notifications = await notificationsResponse;
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
    }: types.WaitForFeedCardId) {
        let feedCardId;
        for (let i = 0; i < repeatMax; i += 1) {
            if (i === repeatMax - 1) {
                throw new Error('Have not found expected feedcard id.');
            }

            const feedNotification = await this.getFeedNotifications({ page });

            const data = feedNotification['items'];

            const feedCardDetail = data.find(
                (feedCard: { recordId: string; source: { notification: { id: string } } }) =>
                    feedCard.recordId &&
                    feedCard.recordId.includes(recordId) &&
                    feedCard.source.notification.id.includes(notificationId)
            );

            await page.waitForTimeout(waitTime);

            if (feedCardDetail) {
                feedCardId = feedCardDetail.id;
                console.log('feedCardId:', feedCardId);
                break;
            }
        }

        return feedCardId;
    }

    /**
     * Returns button on FeedCard
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} feedCardId - Id of the FeedCard
     * @param {string} buttonName - Text on the Button
     */
    async getFeedCardButton({ page, feedCardId, buttonName }: types.GetFeedCardButton) {
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
    async waitForPopUp({ page, text }: types.WaitForPopUp) {
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
    }: types.GetOneTimeToken): Promise<string> {
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
    async getTokens({ builderDomain, authDomain, oneTimeToken }: types.GetTokens): Promise<{
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
    }: types.GetDsauthTokens) {
        await this.login({
            page,
            workspaceUrl,
            workspaceUsername,
            workspacePassword,
            workspaceIdentityProvider,
        });
        const cookies = await context.cookies();

        let csfrTokenCookie, sessionIdCookie, ctxsAuthIdCookie;
        let csrfToken: string, sessionId: string, ctxsAuthId: string;
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

    async createDsAuthInstance({ citrixToken, jSessionId }: types.CreateDsAuthInstance) {
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
    }: types.GetUserData) {
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

    async iwsSearchBar({ page, text, tab = 'All' }: types.IwsSearchBar) {
        await page.waitForSelector('//span[contains(text(),"Search Workspace")]');
        await page.click('//span[contains(text(),"Search Workspace")]');
        await page.waitForSelector('#downshift-0-input');
        await page.type('#downshift-0-input', `"${text}"`);
        await page.waitForSelector('//*[@id="downshift-0-menu"]/parent::div');
        await page.click('//*[@id="downshift-0-menu"]/parent::div', { position: { x: 0, y: 0 } }); // selector speficied by position due to different version on stage and prod envs
        await page.waitForSelector(`//*[@role="tablist"]//span[contains(text(),"${tab}")]`);
        await page.click(`//*[@role="tablist"]//span[contains(text(),"${tab}")]`);
        switch (tab) {
            case 'All':
                await Promise.race([
                    page.waitForSelector(`//div[@role="listitem"]`),
                    page.waitForSelector(`//div[contains(text(), 'No files found')]`),
                    page.waitForSelector(`//td[@data-label='Title']`),
                ]);
                break;
            case 'Feed':
                await Promise.race([
                    page.waitForSelector(`//div[@role="listitem"]`),
                    page.waitForSelector(`#search-results-title`),
                ]);
                break;
            case 'OneDrive':
                await Promise.race([
                    page.waitForSelector(`//div[contains(text(), 'No files found')]`),
                    page.waitForSelector(`//td[@data-label='Title']`),
                ]);
                break;
            case 'Google drive':
                await Promise.race([
                    page.waitForSelector(`//div[contains(text(), 'No files found')]`),
                    page.waitForSelector(`//td[@data-label='Title']`),
                ]);
                break;
        }
    }

    async waitForFeedElement({ page, elementPromise, repeatMax = 10, waitTime = 7000 }: types.WaitForFeedElement) {
        for (let i = 0; i < repeatMax; i++) {
            if (i === repeatMax - 1) {
                throw 'Have not found element even after reload of the page.';
            }
            const element = await elementPromise();
            await page.waitForTimeout(waitTime);
            if (element) {
                break;
            }
            console.log('reloading page');
            await page.reload();
            await page.waitForTimeout(waitTime);
        }
    }

    async waitForSharedFile({ page, fullFileName }: types.WaitForSharedFile) {
        const testFileXPath = `//span[contains(text(),"${fullFileName}")]`;
        const noFilesFoundXpath = '//div[contains(text(), "No files found")]';
        await Promise.race([page.waitForSelector(testFileXPath), page.waitForSelector(noFilesFoundXpath)]);
        await this.waitForFeedElement({
            page,
            elementPromise: () => page.$(testFileXPath),
            repeatMax: 5,
            waitTime: 15000,
        });
    }
}
