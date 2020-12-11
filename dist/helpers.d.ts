import { AxiosError } from 'axios';
export declare type GetCookie = {
    cookies: any;
    cookieName: string;
};
export declare type ErrorHandle = {
    error: AxiosError;
    args: Object;
};
export declare const getCookie: ({ cookies, cookieName }: GetCookie) => string;
export declare const errorHandle: ({ error, args }: ErrorHandle) => Promise<never>;
