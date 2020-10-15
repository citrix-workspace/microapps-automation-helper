export declare type GetCookie = {
    cookies: any;
    cookieName: string;
};
export declare const getCookie: ({ cookies, cookieName }: GetCookie) => string;
