export type GetCookie = {
  cookies: any;
  cookieName: string;
};

export const getCookie = ({ cookies, cookieName }: GetCookie): string => {
  const regexp = new RegExp(`^${cookieName}=([^;]+);`);
  const cookie = cookies.find((cookieString: { match: (arg0: RegExp) => null }) => cookieString.match(regexp) !== null);

  if (!cookie) {
    throw new Error(`Cookie ${cookieName} not found`);
  }

  return cookie.match(regexp)[1];
};
