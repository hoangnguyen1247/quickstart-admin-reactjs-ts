import format from "string-template";
import queryString from "query-string";

import { apiGet, apiPost, apiPut, apiDelete } from "./ApiCaller";
import {
    APIS_STAFF__FIND_ONE_BY_ID,
    APIS_STAFF__SEARCH,
    APIS_STAFF__INSERT,
    APIS_STAFF__UPDATE,
    APIS_STAFF__DELETE,
} from "./ApiEndpoint";
import { Staff, StaffList } from "../dto/Staff";

export function apiStaff_search(searchKey?: string, searchFields?: string[], filterMap: Object = {}, page?: number, size?: number, sortBy?: string, sortDirection?: number): Promise<any> {
    return new Promise((resolve, reject) => {
        let formattedUrl = format(APIS_STAFF__SEARCH, { page: page, size: size });
        if (searchKey) {
            formattedUrl += `&searchKey=${searchKey}`;
        }
        if (Array.isArray(searchFields) && searchFields.length > 0) {
            formattedUrl += "&" + queryString.stringify({ searchFields });
        }
        if (Object.keys(filterMap).length > 0) {
            formattedUrl += "&" + queryString.stringify(filterMap);
        }
        if (sortBy) {
            formattedUrl += `&sortBy=${sortBy}`;
            if (sortDirection) {
                formattedUrl += `&sortDirection=${sortDirection}`;
            }
        }
        return apiGet(formattedUrl)
            .then(res => {
                resolve({ users: StaffList(res.data.users), totalItems: parseInt(res.data.totalItems, 10) })
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    });
};

export function apiStaff_findOneById(id: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
        return apiGet(format(APIS_STAFF__FIND_ONE_BY_ID, {id: id}))
            .then(res => {
                resolve(new Staff(res.data.user))
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
}

export function apiStaff_insert(account: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        return apiPost(APIS_STAFF__INSERT, account)
            .then(res => {
                resolve(new Staff(res.data.user))
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
}

export function apiStaff_update(id: string | number, role: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        return apiPut(format(APIS_STAFF__UPDATE, {id: id}), role)
            .then(res => {
                resolve()
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
}

export function apiStaff_delete(id: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
        return apiDelete(format(APIS_STAFF__DELETE, {id: id}))
            .then(res => {
                resolve()
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
}
