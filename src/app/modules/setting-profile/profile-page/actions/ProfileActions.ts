import { Dispatch } from 'redux';

export const PROFILE_PAGE__CHANGE_PAGE_STATE = "PROFILE_PAGE__CHANGE_PAGE_STATE";

export function profilePage_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: PROFILE_PAGE__CHANGE_PAGE_STATE,
        });
    }
}
