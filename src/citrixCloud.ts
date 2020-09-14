import axios from 'axios';
import { authenticator } from 'otplib';
import { CreateAuthInstance, GetAuthenticatorCode, GetCCBearerToken } from './types/citrixCloud';
import { API } from './api';

authenticator.options = { digits: 6 };

/** Class representing a Citrix Cloud. */
export class CitrixCloud extends API {
    constructor() {
        super();
    }

    /**
     * Generates auth code for login to Citrix Cloud
     * 
     * @param {string} secretKey - SecretKey for generating the code
     */
    async getAuthenticatorCode({ secretKey }: GetAuthenticatorCode) {
        return authenticator.generate(secretKey);
    }

    /**
     * Get Citrix Cloud Bearer Token
     * @param {string} cwaAPI - Api Environmet
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */

    async getCCBearerToken({
        cwaAPI,
        citrixCloudCustomerId,
        citrixCloudClientId,
        citrixCloudClientSecret,
    }: GetCCBearerToken): Promise<string> {
        const response = await this.getCitrixCloudTokens({
            cwaAPI,
            citrixCloudCustomerId,
            citrixCloudClientId,
            citrixCloudClientSecret,
        });
        return response.data.token;
    }

    /**
     * Create Authorized Instace
     * @param {string} bearerToken - Access token
     */

    async createAuthInstance({ bearerToken }: CreateAuthInstance) {
        const authInstance = axios.create({});
        authInstance.defaults.headers.common['Authorization'] = `CWSAuth bearer=${bearerToken}`;
        authInstance.defaults.timeout = 90000;
        return authInstance;
    }
}