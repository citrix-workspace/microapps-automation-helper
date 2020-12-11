"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = exports.getCookie = void 0;
exports.getCookie = ({ cookies, cookieName }) => {
    const regexp = new RegExp(`^${cookieName}=([^;]+);`);
    const cookie = cookies.find((cookieString) => cookieString.match(regexp) !== null);
    if (!cookie) {
        throw new Error(`Cookie ${cookieName} not found`);
    }
    return cookie.match(regexp)[1];
};
exports.errorHandle = async ({ error, args }) => {
    let errorReport = {
        ErrorReport: {
            invalidValues: [],
            possibleReasons: [],
        },
    };
    let description;
    let invalidValue = false;
    for (const [key, value] of Object.entries(args)) {
        if (value === undefined || value === null || value === '') {
            invalidValue = true;
            errorReport.ErrorReport.invalidValues.push(`Value "${key}" is type of "${typeof value}" and has value "${value}". Is the ${key} correctly assigned?`);
        }
    }
    if (invalidValue) {
        errorReport.ErrorReport.possibleReasons.push(`Some arguments have incorrect values. Please check if the right values are assigned.`);
    }
    if (error.response !== undefined) {
        switch (error.response.status) {
            case 400: {
                description = 'The server cannot or will not process the request due to an apparent client error.';
                errorReport.ErrorReport.possibleReasons.push('Request syntax error, please check, if all mandatory values are correctly assigned.');
                break;
            }
            case 401: {
                description = 'Authentication is required and has failed or has not yet been provided.';
                errorReport.ErrorReport.possibleReasons.push('Wrong credentials used, are correct credentials assigned?');
                break;
            }
            case 402: {
                description = 'Payment required or daily limiy of requests is exceeded.';
                break;
            }
            case 403: {
                description = 'Access is forbidden for this request.';
                errorReport.ErrorReport.possibleReasons.push('User has not permission to use this action or the action is prohibited.');
                break;
            }
            case 404: {
                description = 'The requested resource could not be found but may be available in the future.';
                errorReport.ErrorReport.possibleReasons.push('Record does not exist.');
                break;
            }
            case 405: {
                description = 'A request method is not supported for the requested resource.';
                break;
            }
            case 408: {
                description = 'The server timed out waiting for the request.';
                break;
            }
            case 409: {
                description =
                    'Request could not be processed because of conflict in the current state of the resource.';
                break;
            }
            case 500: {
                description = 'Unexpected condition was encountered and no more specific message is suitable.';
                break;
            }
            case 501: {
                description =
                    'The server either does not recognize the request method, or it lacks the ability to fulfil the request.';
                break;
            }
            case 502: {
                description =
                    'The request was not completed. The server received an invalid response from the upstream server.';
                break;
            }
            case 503: {
                description = 'The server cannot handle the request (overloaded or down for maintenance).';
                break;
            }
            case 504: {
                description = 'The gateway has timed out.';
                break;
            }
            default: {
                description = 'No further description for this state of the request';
                break;
            }
        }
        errorReport.ErrorReport.status = `The request failed with status: ${error.response.status} - ${error.response.statusText} - ${description}`;
        errorReport.ErrorReport.message = `The request send message: ${error.response.data}`;
    }
    else {
        console.log(error.stack);
        errorReport.ErrorReport.possibleReasons.push('Undefined error. Error has been printed.');
    }
    console.log(errorReport);
    throw new Error('Request failed. Please review the ErrorReport above.');
};
