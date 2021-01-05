import { AxiosError } from 'axios';
export declare type GetCookie = {
    cookies: any;
    cookieName: string;
};
export declare type ErrorHandle = {
    error: AxiosError;
    args: Object;
};
export declare type ParamsCheck = {
    params: Object;
    functionType?: string;
    source: string;
};
