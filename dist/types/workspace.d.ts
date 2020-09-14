import { Page } from 'playwright-core';
export declare type Login = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
};
export declare type SkipTour = {
    page: Page;
};
export declare type GoToActions = {
    page: Page;
};
export declare type StartAction = {
    page: Page;
    actionName: string;
    integrationName: string;
};
export declare type GetFeedNotifications = {
    page: Page;
};
export declare type WaitForFeedCardId = {
    page: Page;
    repeatMax?: number;
    waitTime?: number;
    recordId: string;
    notificationId: string;
};
export declare type GetFeedCardButton = {
    page: Page;
    feedCardId: string;
    buttonName: string;
};
export declare type WaitForPopUp = {
    page: Page;
    text: string;
};
