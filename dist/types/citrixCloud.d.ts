export declare type GetAuthenticatorCode = {
    secretKey: string;
};
export declare type GetCitrixCloudTokens = {
    cwaAPI: string;
    citrixCloudCustomerId: string;
    citrixCloudClientId: string;
    citrixCloudClientSecret: string;
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
