"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
exports.getCookie = ({ cookies, cookieName }) => {
    const regexp = new RegExp(`^${cookieName}=([^;]+);`);
    const cookie = cookies.find((cookieString) => cookieString.match(regexp) !== null);
    if (!cookie) {
        throw new Error(`Cookie ${cookieName} not found`);
    }
    return cookie.match(regexp)[1];
};
