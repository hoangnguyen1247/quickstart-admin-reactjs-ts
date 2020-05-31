import { Dispatch } from 'redux';

export const CHANGE_PROFILE__CHANGE_PAGE_STATE = "CHANGE_PROFILE__CHANGE_PAGE_STATE";

export function changeProfile_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CHANGE_PROFILE__CHANGE_PAGE_STATE,
        });
    }
}
