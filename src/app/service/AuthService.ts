import moment from "moment";
import cookie from "react-cookies";

import { apiPostUrlencoded, apiPut } from "src/app/service/ApiCaller";
import {
    APIS_AUTH__LOGIN,
    APIS_AUTH__REFRESH_TOKEN,
    APIS_AUTH__FORGET_PASSWORD,
    APIS_AUTH__RESET_PASSWORD,
} from "src/app/service/ApiEndpoint";
import { LOCAL_STORAGE } from "src/app/utils/Constants";

export function apiAuth_login(data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPostUrlencoded(APIS_AUTH__LOGIN, data)
            .then(res => {
                const expiresIn = !isNaN(res.data.expires_in) ? moment.unix(res.data.expires_in).toDate() : undefined;

                cookie.save(LOCAL_STORAGE.ACCESS_TOKEN, res.data.access_token, { path: "/", expires: expiresIn });
                cookie.save(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN, res.data.expires_in, { path: "/", expires: expiresIn });
                cookie.save(LOCAL_STORAGE.REFRESH_TOKEN, res.data.refresh_token, { path: "/", expires: moment().add(1, "years").toDate() });

                resolve(res.data.user);
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
};

export function apiAuth_refreshToken(): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPostUrlencoded(APIS_AUTH__REFRESH_TOKEN, { refresh_token: cookie.load(LOCAL_STORAGE.REFRESH_TOKEN) })
            .then(res => {
                const expiresIn = !isNaN(res.data.expires_in) ? moment.unix(res.data.expires_in).toDate() : undefined;

                cookie.save(LOCAL_STORAGE.ACCESS_TOKEN, res.data.access_token, { path: "/", expires: expiresIn });
                cookie.save(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN, res.data.expires_in, { path: "/", expires: expiresIn });
                cookie.save(LOCAL_STORAGE.REFRESH_TOKEN, res.data.refresh_token, { path: "/", expires: moment().add(1, "years").toDate() });

                resolve(res.data.user);
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
};

export function apiAuth_forgotPassword(data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPut(APIS_AUTH__FORGET_PASSWORD, data)
            .then(res => {
                resolve();
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    });
};

export function apiAuth_resetPassword(data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPut(APIS_AUTH__RESET_PASSWORD, data)
            .then(res => {
                resolve();
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    });
};
