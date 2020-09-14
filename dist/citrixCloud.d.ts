import { API } from './api';
/** Class representing a Citrix Cloud. */
export declare class CitrixCloud extends API {
    constructor();
    /**
     * Generates auth code for login to Citrix Cloud
     *
     * @param {string} secretKey - SecretKey for generating the code
     */
    getAuthenticatorCode({ secretKey }: GetAuthenticatorCode): Promise<string>;
    /**
     * Get Citrix Cloud Bearer Token
     * @param {string} cwaAPI - Api Environmet
     * @param {string} citrixCloudCustomerId - Customer Id
     * @param {string} citrixCloudClientId - Client Id
     * @param {string} citrixCloudClientSecret - Client Secret
     */
    getCCBearerToken({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret, }: GetCCBearerToken): Promise<string>;
    /**
     * Create Authorized Instace
     * @param {string} bearerToken - Access token
     */
    createAuthInstance({ bearerToken }: CreateAuthInstance): Promise<import("axios").AxiosInstance>;
}
export declare type GetAuthenticatorCode = {
    secretKey: string;
};
export declare type GetCCBearerToken = {
    cwaAPI: string;
    citrixCloudCustomerId: string;
    citrixCloudClientId: string;
    citrixCloudClientSecret: string;
};
export declare type CreateAuthInstance = {
    bearerToken: string;
};
