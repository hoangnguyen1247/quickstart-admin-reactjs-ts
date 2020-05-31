import { Dispatch } from 'redux';

export const CATALOG__CHANGE_MIN_WIDTH_992 = "CATALOG__CHANGE_MIN_WIDTH_992";

export function catalog_changeMinWidth992(match: boolean) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CATALOG__CHANGE_MIN_WIDTH_992,
            minWidth992: match,
        })
    }
}
