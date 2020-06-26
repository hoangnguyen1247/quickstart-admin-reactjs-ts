import { Dispatch } from 'redux';

import { AnyObject } from 'src/common';

export const CATALOG__CHANGE_MIN_WIDTH_992          = "CATALOG__CHANGE_MIN_WIDTH_992";
export const CATALOG__CHANGE_DARK_MODE              = "CATALOG__CHANGE_DARK_MODE";
export const CATALOG__CHANGE_MOBILE_HOME_BAR        = "CATALOG__CHANGE_MOBILE_HOME_BAR";
export const CATALOG__CHANGE_MOBILE_SEARCH_BAR      = "CATALOG__CHANGE_MOBILE_SEARCH_BAR";
export const CATALOG__CHANGE_MOBILE_ACTION_BAR      = "CATALOG__CHANGE_MOBILE_ACTION_BAR";
export const CATALOG__CHANGE_NAVIGATION_IN_RIGHT    = "CATALOG__CHANGE_NAVIGATION_IN_RIGHT";

export const CATALOG__GET_PROFILE_SUCCESS           = "CATALOG__GET_PROFILE_SUCCESS";
export const CATALOG__GET_PROFILE_FAILURE           = "CATALOG__GET_PROFILE_FAILURE";

export const CATALOG__FIND_MANY_SERVICES_SUCCESS    = "CATALOG__FIND_MANY_SERVICES_SUCCESS";
export const CATALOG__FIND_MANY_SERVICES_FAILURE    = "CATALOG__FIND_MANY_SERVICES_FAILURE";

export function catalog_changeMinWidth992(match: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_MIN_WIDTH_992,
            minWidth992: match,
        })
    }
}

export function catalog_changeDarkMode(match: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_DARK_MODE,
            darkMode: match,
        })
    }
}

export function catalog_changeMobileHomeBar(show: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_MOBILE_HOME_BAR,
            show: show,
        })
    }
}

export function catalog_changeMobileSearchBar(show: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_MOBILE_SEARCH_BAR,
            show: show,
        })
    }
}

export function catalog_changeMobileActionBar(show: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_MOBILE_ACTION_BAR,
            show: show,
        })
    }
}

export function catalog_changeNavigationInRight(match: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_NAVIGATION_IN_RIGHT,
            navigationInRight: match,
        })
    }
}

export function catalog_getProfileSuccess(profile: AnyObject) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__GET_PROFILE_SUCCESS,
            profile: profile,
        })
    }
}

export function catalog_getProfileFailure() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__GET_PROFILE_FAILURE,
        })
    }
}

export function catalog_getServicesSuccess(services: AnyObject[]) {
    return {
        type: CATALOG__FIND_MANY_SERVICES_SUCCESS,
        services: services,
    }
}

export function catalog_getServicesFailure() {
    return {
        type: CATALOG__FIND_MANY_SERVICES_FAILURE,
    }
}
