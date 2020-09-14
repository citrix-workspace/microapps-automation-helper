import { Page } from 'playwright-core';
export type Login = {
    page: Page;
    workspaceUrl: string;
    workspaceUsername: string;
    workspacePassword: string;
    workspaceIdentityProvider: string;
};

export type SkipTour = {
    page: Page;
};

export type GoToActions = {
    page: Page;
};

export type StartAction = {
    page: Page;
    actionName: string;
    integrationName: string;
};

export type GetFeedNotifications = {
    page: Page;
};

export type WaitForFeedCardId = {
    page: Page;
    repeatMax?: number;
    waitTime?: number;
    recordId: string;
    notificationId: string;
};

export type GetFeedCardButton = {
    page: Page;
    feedCardId: string;
    buttonName: string;
};

export type WaitForPopUp = {
    page: Page;
    text: string;
};
