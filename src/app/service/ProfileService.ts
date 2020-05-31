import { apiGet, apiPut } from "src/app/service/ApiCaller";
import {
    APIS_USER__CHANGE_PASSWORD,
    APIS_USER__GET_PROFILE,
    APIS_USER__CHANGE_PROFILE,
    APIS_USER__CHANGE_AVATAR,
} from "src/app/service/ApiEndpoint";
import { UserDto } from "src/app/dto/User";

export function apiProfile_getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
        apiGet(APIS_USER__GET_PROFILE)
            .then(res => {
                resolve(UserDto(res.data.user));
            })
            .catch(error => {
                reject(error.response ? error.response.data : []);
            });
    });
};

export function apiProfile_changeProfile(data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPut(APIS_USER__CHANGE_PROFILE, data)
            .then(res => {
                resolve();
            })
            .catch(error => {
                reject(error.response ? error.response.data : []);
            });
    });
};

export function apiProfile_changePassword(data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPut(APIS_USER__CHANGE_PASSWORD, data)
            .then(res => {
                resolve();
            })
            .catch(error => {
                reject(error.response ? error.response.data : []);
            });
    });
};

export function apiProfile_changeAvatar(data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        apiPut(APIS_USER__CHANGE_AVATAR, data)
            .then(res => {
                resolve();
            })
            .catch(error => {
                reject(error.response ? error.response.data : []);
            });
    })
};
