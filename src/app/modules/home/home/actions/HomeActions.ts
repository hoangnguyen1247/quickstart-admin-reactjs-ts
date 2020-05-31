import { Dispatch } from 'redux';

export const HOME__CHANGE_PAGE_STATE = "HOME__CHANGE_PAGE_STATE";

export function home_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: HOME__CHANGE_PAGE_STATE,
        });
    }
}
