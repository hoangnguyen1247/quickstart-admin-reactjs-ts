import format from "string-template";
import queryString from "query-string";

import { apiGet } from "./ApiCaller";
import {
    APIS_SERVICE__SEARCH,
} from "./ApiEndpoint";
import { ServiceList } from "src/app/dto/Service";

export function apiService_search(searchKey?: string, searchFields?: string[], filterMap: Object = {}, page?: number, size?: number, sortBy?: string, sortDirection?: number): Promise<any> {
    return new Promise((resolve, reject) => {
        let formattedUrl = format(APIS_SERVICE__SEARCH, { page: page, size: size });
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
                resolve({ services: ServiceList(res.data.services), totalItems: parseInt(res.data.totalItems, 10) })
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    });
};

