import React from "react";
import cookie from "react-cookies";
import moment from "moment";

import { LOCAL_STORAGE } from "src/app/utils/Constants";

import { apiAuth_refreshToken } from "src/app/service/AuthService";
import { apiProfile_getProfile } from "src/app/service/ProfileService";
import { apiService_search } from "./service/ServiceService";

import { 
    catalog_getServicesSuccess,
    catalog_getServicesFailure,
} from "./AppActions";

import { AppContext } from "src/app/AppContext";

class InitialComponent extends React.Component {

    static contextType = AppContext;

    componentDidMount() {
        if (cookie && cookie.load(LOCAL_STORAGE.ACCESS_TOKEN)) {
            this.getUserProfile();
        } else {
            const refreshToken = cookie.load(LOCAL_STORAGE.REFRESH_TOKEN);
            if (refreshToken) {
                apiAuth_refreshToken()
                    .then(res => {
                        // do something
                        this.getUserProfile();
                    })
                    .catch(error => {
                        // do nothing
                        // maybe, we will forwarding to /logout for admin site
                        const { history } = this.context;
                        if (history) {
                            history.push("/logout");
                        }
                    });
            } else {
                // do nothing
                // maybe, we will forwarding to /logout for admin site
                const { history } = this.context;
                if (history) {
                    history.push("/logout");
                }
            }
        }
    }

    getUserProfile() {
        apiProfile_getProfile()
            .then(res => {
                this.context.getProfileSuccess(res);

                // load catalog data
                this.loadCommonData();
            
                // updata token if need
                const accessTokenExpiresIn = cookie.load(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN);
                // console.log(moment.unix(accessTokenExpiresIn));
                // console.log(moment.unix(accessTokenExpiresIn).diff(moment().utc(), "hours"));
                if (moment.unix(accessTokenExpiresIn) < moment().utc() || 
                    moment.unix(accessTokenExpiresIn).diff(moment().utc(), "hours") < 12) {
                    this._updateAccessToken();
                }
            })
            .catch(error => {
                // try to refresh token
                this._refreshAccessToken();
            });
    }

    _updateAccessToken() {
        const refreshToken = cookie.load(LOCAL_STORAGE.REFRESH_TOKEN);
        if (refreshToken) {
            apiAuth_refreshToken()
                .then(res => {
                    // do something
                })
                .catch(error => {
                    // do nothing
                });
        }
    }

    _refreshAccessToken() {
        const refreshToken = cookie.load(LOCAL_STORAGE.REFRESH_TOKEN);
        if (refreshToken) {
            apiAuth_refreshToken()
                .then(res => {
                    // do something
                    this.getUserProfile();
                })
                .catch(() => {
                    cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN, { path: "/" });
                    cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN, { path: "/" });
                    cookie.remove(LOCAL_STORAGE.REFRESH_TOKEN, { path: "/" });

                    const { history } = this.context;
                    if (history) {
                        history.push("/logout");
                    }
                });
        } else {
            cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN, { path: "/" });
            cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN, { path: "/" });
            cookie.remove(LOCAL_STORAGE.REFRESH_TOKEN, { path: "/" });

            const { history } = this.context;
            if (history) {
                history.push("/logout");
            }
        }
    }
    
    loadCommonData() {
        this.loadServices();
    }

    loadServices() {
        apiService_search()
            .then(res => {
                this.context.updateCachedData(catalog_getServicesSuccess(res.services));
            })
            .catch(error => {
                this.context.updateCachedData(catalog_getServicesFailure());
            })
    }

    render() {
        return null;
    }
}

export default InitialComponent;
