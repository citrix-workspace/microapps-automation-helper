export type GetAuthenticatorCode = {
  secretKey: string;
};

export type GetCCBearerToken = {
  cwaAPI: string;
  citrixCloudCustomerId: string;
  citrixCloudClientId: string;
  citrixCloudClientSecret: string;
};

export type CreateAuthInstance = {
    bearerToken: string;
}