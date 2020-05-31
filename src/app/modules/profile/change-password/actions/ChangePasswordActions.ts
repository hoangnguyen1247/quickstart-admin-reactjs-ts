import { Dispatch } from 'redux';

export const CHANGE_PASSWORD_CHANGE_PAGE_STATE = "CHANGE_PASSWORD_CHANGE_PAGE_STATE";

export function changePassword_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CHANGE_PASSWORD_CHANGE_PAGE_STATE,
        });
    }
}
