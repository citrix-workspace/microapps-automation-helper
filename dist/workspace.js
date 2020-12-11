"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./helpers");
/** Class representing a Workspace. */
class Workspace {
    constructor() { }
    /**
     * Login to Workspace
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} workspaceUrl - Workspace login url
     * @param {string} workspaceUsername - Workspace Username
     * @param {string} workspacePassword - Workspace Password
     * @param {string} workspaceIdentityProvider - Identity provider (ad | netscaler | aad)
     */
    async login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider, }) {
        console.log("Login to Workspace", new Date());
        await page.goto(workspaceUrl, { waitUntil: "domcontentloaded" });
        switch (workspaceIdentityProvider) {
            case "ad":
                await page.waitForSelector("#username");
                await page.type("#username", workspaceUsername);
                await page.waitForSelector("#password");
                await page.type("#password", workspacePassword);
                await page.waitForSelector("#loginBtn");
                await page.click("#loginBtn");
                break;
            case "netscaler":
                await page.waitForSelector("#login");
                await page.type("#login", workspaceUsername);
                await page.waitForSelector("#passwd");
                await page.type("#passwd", workspacePassword);
                await page.click("#nsg-x1-logon-button");
                break;
            case "aad":
                await page.waitForSelector('input[name="loginfmt"]');
                await page.type('input[name="loginfmt"]', workspaceUsername);
                await page.waitForSelector('input[value="Next"]');
                await page.click('input[value="Next"]');
                await page.waitForSelector('input[name="passwd"]');
                await page.type('input[name="passwd"]', workspacePassword);
                await page.waitForSelector('input[value="Sign in"]');
                await page.click('input[value="Sign in"]');
                await page.waitForSelector('input[value="Yes"]');
                await page.click('input[value="Yes"]');
                break;
            case "okta":
                await page.waitForSelector("#okta-signin-username");
                await page.type("#okta-signin-username", workspaceUsername);
                await page.waitForSelector("#okta-signin-password");
                await page.type("#okta-signin-password", workspacePassword);
                await page.waitForSelector("#okta-signin-submit");
                await page.click("#okta-signin-submit");
                break;
            default:
                console.log("Identity provider was not specified.");
        }
        await page.waitForSelector("#content", { timeout: 90000 });
        await this.skipTour({ page });
    }
    /**
     * Skip Tour
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    async skipTour({ page }) {
        try {
            await page.waitForSelector(".cta-link a", { timeout: 5000 });
            const link = await page.$(".cta-link a");
            if (await link) {
                await page.click(".cta-link a");
            }
        }
        catch (error) { }
    }
    /**
     * Go to Actions
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    async goToActions({ page }) {
        await page.waitForSelector("span >> text=Actions");
        await page.click("span >> text=Actions");
        await page.waitForLoadState("networkidle");
    }
    /**
     * Start Action
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} actionName - name of Action what should be executed
     * @param {string} integrationName - name of Integration the action belongs to
     */
    async startAction({ page, actionName, integrationName }) {
        console.log(`Choosing action ${actionName}`, new Date());
        await page.click(`//button[descendant::div[@title="${integrationName}"]] //div[contains(text(), "${actionName}")]`);
    }
    /**
     * Get Feed Notifications
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     */
    async getFeedNotifications({ page }) {
        await page.waitForSelector("select");
        await page.selectOption("select", "CREATED_AT");
        const notifications = await page.waitForResponse((response) => response.url().match(new RegExp("notification")) &&
            response.status() === 200);
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
    async waitForFeedCardId({ page, repeatMax = 50, waitTime = 5000, recordId, notificationId = "", }) {
        let feedCardId;
        for (let i = 0; i < repeatMax; i++) {
            if (i === repeatMax - 1) {
                throw new Error("Have not found expected feedcard id.");
            }
            const feedNotification = await this.getFeedNotifications({ page });
            const data = feedNotification.items;
            const feedCardDetail = data.filter((e) => {
                return (e.recordId.includes(recordId) &&
                    e.source.notification.id.includes(notificationId));
            });
            try {
                feedCardId = feedCardDetail[0].id;
            }
            catch (error) { }
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
    async getFeedCardButton({ page, feedCardId, buttonName }) {
        return page.$$(`xpath=//*[@id="feed-card-body-${feedCardId}"]/ancestor::div[@role="listitem"]//button//div[contains(text(), '${buttonName}')]`);
    }
    /**
     * Wait for success or error pop-up message
     *
     * @param {Object} page - Methods to interact with a single tab or extension background page in Browser
     * @param {string} text - Text that should be in success message
     */
    async waitForPopUp({ page, text }) {
        await Promise.race([
            page.waitForSelector(`xpath=//div[contains(text(), "We're unable to process your request")]`),
            page.waitForSelector(`xpath=//div[contains(text(), '${text}')]`),
        ]);
        const alertPopUp = await page.$$(`xpath=//div[contains(text(), "We're unable to process your request")]`);
        if (alertPopUp.length !== 0) {
            throw new Error("Service action failed");
        }
    }
    async getOneTimeToken({ workspaceUrl, builderDomain, csrfToken, sessionId, ctxsAuthId, authDomain, }) {
        const response = await axios_1.default({
            url: `${workspaceUrl}/Citrix/StoreWeb/Sso/Proxy`,
            method: "POST",
            headers: {
                "Citrix-WSP-Proxy-URL": `${builderDomain}/app/api/auth/dsauth`,
                "Csrf-Token": `${csrfToken}`,
                Cookie: `CsrfToken=${csrfToken}; ASP.NET_SessionId=${sessionId}; CtxsAuthId=${ctxsAuthId}`,
            },
            params: {
                authDomain,
            },
        });
        return response.data.ott;
    }
    async getTokens({ builderDomain, authDomain, oneTimeToken }) {
        const response = await axios_1.default({
            url: `${builderDomain}/app/api/auth/dsauth`,
            method: "GET",
            headers: {
                accept: "application/json",
            },
            params: {
                authDomain,
                ott: oneTimeToken,
            },
        });
        const citrixToken = response.data.csrf;
        const cookies = response.headers["set-cookie"];
        const jSessionId = await helpers_1.getCookie({
            cookies: cookies,
            cookieName: "JSESSIONID",
        });
        return { citrixToken, jSessionId };
    }
    async getDsauthTokens({ page, context, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider, builderDomain, authDomain, }) {
        await this.login({
            page,
            workspaceUrl,
            workspaceUsername,
            workspacePassword,
            workspaceIdentityProvider,
        });
        const cookies = await context.cookies();
        const csfrTokenCookie = cookies.find((e) => e.name === "CsrfToken");
        const sessionIdCookie = cookies.find((e) => e.name === "ASP.NET_SessionId");
        const ctxsAuthIdCookie = cookies.find((e) => e.name === "CtxsAuthId");
        const csrfToken = csfrTokenCookie === null || csfrTokenCookie === void 0 ? void 0 : csfrTokenCookie.value;
        const sessionId = sessionIdCookie === null || sessionIdCookie === void 0 ? void 0 : sessionIdCookie.value;
        const ctxsAuthId = ctxsAuthIdCookie === null || ctxsAuthIdCookie === void 0 ? void 0 : ctxsAuthIdCookie.value;
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
    async createDsAuthInstance({ citrixToken, jSessionId, }) {
        const dSauthInstance = axios_1.default.create({});
        dSauthInstance.defaults.headers.common["citrix-csrf-token"] = `${citrixToken}`;
        dSauthInstance.defaults.headers.common["cookie"] = `JSESSIONID=${jSessionId}`;
        dSauthInstance.defaults.timeout = 90000;
        return dSauthInstance;
    }
    async getUserData({ dSauthInstance, microappsAdminUrl, appId, componentId, dataLimit, initiatorType, initiatorData, pageId, authDomain, }) {
        const response = await dSauthInstance({
            url: `${microappsAdminUrl}/app/api/app/${appId}/component/${componentId}/data`,
            method: "GET",
            queryParameters: {
                offset: 0,
                limit: dataLimit,
                orderDirection: "ASC",
                initiator_type: initiatorType,
                initiator_id: pageId,
                initiator_appId: appId,
                initiator_data: initiatorData,
                authDomain,
            },
        });
        return response.data.data;
    }
}
exports.Workspace = Workspace;
