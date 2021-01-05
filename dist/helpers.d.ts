import type { GetCookie, ErrorHandle, ParamsCheck } from './types/helpers';
export declare const getCookie: ({ cookies, cookieName }: GetCookie) => string;
export declare const errorHandle: ({ error, args }: ErrorHandle) => Promise<never>;
export declare const paramsCheck: ({ params, functionType, source }: ParamsCheck) => Promise<string>;
