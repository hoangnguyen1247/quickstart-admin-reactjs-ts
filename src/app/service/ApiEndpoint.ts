import { config } from "src/config";

export const BASE_ENDPOINT                                  = config.apis.baseUrl + "";
export const AUTH_ENDPOINT                                  = config.apis.baseUrl + "/auth";

// Authentication
export const APIS_AUTH__REGISTER                            = AUTH_ENDPOINT + "/register"; // POST
export const APIS_AUTH__LOGIN                               = AUTH_ENDPOINT + "/login"; // POST
export const APIS_AUTH__LOGOUT                              = AUTH_ENDPOINT + "/sign-out"; // POST
export const APIS_AUTH__REFRESH_TOKEN                       = AUTH_ENDPOINT + "/refresh-token"; // POST
export const APIS_AUTH__AUTH_BY_FACEBOOK                    = AUTH_ENDPOINT + "/login-by-facebook"; // POST
export const APIS_AUTH__AUTH_BY_GOOGLE                      = AUTH_ENDPOINT + "/login-by-google"; // POST
export const APIS_AUTH__FORGET_PASSWORD                     = AUTH_ENDPOINT + "/forgot-password"; // PUT
export const APIS_AUTH__RESET_PASSWORD                      = AUTH_ENDPOINT + "/reset-password"; // PUT

export const APIS_USER__GET_PROFILE                         = BASE_ENDPOINT + "/account/profile"; // GET
export const APIS_USER__CHANGE_PROFILE                      = BASE_ENDPOINT + "/account/profile"; // PUT
export const APIS_USER__CHANGE_AVATAR                       = BASE_ENDPOINT + "/account/profile/change-avatar"; // PUT
export const APIS_USER__CHANGE_PASSWORD                     = BASE_ENDPOINT + "/account/profile/change-password"; // POST

export const APIS_STAFF__SEARCH                             = BASE_ENDPOINT + "/account/staffs/search?page={page}&size={size}"; // GET
export const APIS_STAFF__FIND_ONE_BY_ID                     = BASE_ENDPOINT + "/account/staffs/{id}"; // GET
export const APIS_STAFF__INSERT                             = BASE_ENDPOINT + "/account/staffs"; // POST
export const APIS_STAFF__UPDATE                             = BASE_ENDPOINT + "/account/staffs/{id}"; // PUT
export const APIS_STAFF__DELETE                             = BASE_ENDPOINT + "/account/staffs/{id}"; // DELETE
