"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitrixCloud = void 0;
const axios_1 = __importDefault(require("axios"));
const otplib_1 = require("otplib");
const api_1 = require("./api");
const helpers_1 = require("./helpers");
otplib_1.authenticator.options = { digits: 6 };
/** Class representing a Citrix Cloud. */
class CitrixCloud extends api_1.API {
    constructor() {
        super();
    }
    /**
     * Generates auth code for login to Citrix Cloud
     *
     * @param {string} secretKey - SecretKey for generating the code
     */
    async getAuthenticatorCode({ secretKey }) {
        return otplib_1.authenticator.generate(secretKey);
    }
    /**
     * Get Citrix Cloud Bearer Token
     * @param {string} cwaAPI - Api Environmet
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */
    async getCCBearerToken({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret, }) {
        const response = await this.getCitrixCloudTokens({
            cwaAPI,
            citrixCloudCustomerId,
            citrixCloudClientId,
            citrixCloudClientSecret,
        });
        let token;
        try {
            token = response.data.token;
        }
        catch (error) {
            throw new Error(await helpers_1.paramsCheck({
                params: { token, response },
                source: 'response',
            }));
        }
        return token;
    }
    /**
     * Create Authorized Instace
     * @param {string} bearerToken - Access token
     */
    async createAuthInstance({ bearerToken }) {
        const authInstance = axios_1.default.create({});
        authInstance.defaults.headers.common['Authorization'] = `CWSAuth bearer=${bearerToken}`;
        authInstance.defaults.timeout = 90000;
        return authInstance;
    }
}
exports.CitrixCloud = CitrixCloud;
