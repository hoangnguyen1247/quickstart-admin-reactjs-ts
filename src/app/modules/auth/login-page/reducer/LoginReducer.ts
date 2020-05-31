import { 
    CATALOG__CHANGE_MIN_WIDTH_992,
} from "../actions/LoginActions";

const initialState = {
    minWidth992: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CATALOG__CHANGE_MIN_WIDTH_992:
            return {
                ...state,
                minWidth992: action.minWidth992,
            }
        default:
            return state;
    }
}
