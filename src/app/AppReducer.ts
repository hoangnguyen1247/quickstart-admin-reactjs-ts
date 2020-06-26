import { anyobj } from "src/common";

import { 
    CATALOG__CHANGE_MIN_WIDTH_992,
    CATALOG__CHANGE_DARK_MODE,
    CATALOG__CHANGE_MOBILE_HOME_BAR,
    CATALOG__CHANGE_MOBILE_SEARCH_BAR,
    CATALOG__CHANGE_MOBILE_ACTION_BAR,
    CATALOG__CHANGE_NAVIGATION_IN_RIGHT,
    CATALOG__GET_PROFILE_SUCCESS,
    CATALOG__GET_PROFILE_FAILURE,

    CATALOG__FIND_MANY_SERVICES_SUCCESS,
    CATALOG__FIND_MANY_SERVICES_FAILURE,
} from "./AppActions";

const initialState = {
    minWidth992: false,
    darkMode: false,
    isShowMobileHomeBar: false,
    isShowMobileSearchBar: false,
    isShowMobileActionBar: false,
    navigationInRight: false,
    profile: null,

    userRoles: [],
    services: [],
}

export default function(state = initialState, action = anyobj) {
    switch (action.type) {
        case CATALOG__CHANGE_MIN_WIDTH_992:
            return {
                ...state,
                minWidth992: action.minWidth992,
            }
        case CATALOG__CHANGE_DARK_MODE:
            return {
                ...state,
                darkMode: action.darkMode,
            }
        case CATALOG__CHANGE_MOBILE_HOME_BAR:
            return {
                ...state,
                isShowMobileHomeBar: action.show,
            }
        case CATALOG__CHANGE_MOBILE_SEARCH_BAR:
            return {
                ...state,
                isShowMobileSearchBar: action.show,
            } 
        case CATALOG__CHANGE_MOBILE_ACTION_BAR:
            return {
                ...state,
                isShowMobileActionBar: action.show,
            } 
        case CATALOG__CHANGE_NAVIGATION_IN_RIGHT:
            return {
                ...state,
                navigationInRight: action.navigationInRight,
            }
        case CATALOG__GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile,
            }
        case CATALOG__GET_PROFILE_FAILURE:
            return {
                ...state,
                profile: null,
            }
        case CATALOG__FIND_MANY_SERVICES_SUCCESS:
            return {
                ...state,
                services: action.services,
            }
        case CATALOG__FIND_MANY_SERVICES_FAILURE:
            return {
                ...state,
                services: [],
            }
        default:
            return state;
    }
}
