import { AxiosError } from 'axios';

export type GetCookie = {
  cookies: any;
  cookieName: string;
};

export type ErrorHandle = {
  error: any;
  args: Object;
};

export type ParamsCheck = {
  params: Object;
  functionType?: string;
  source: string;
}