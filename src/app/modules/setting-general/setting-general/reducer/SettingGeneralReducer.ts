import { PAGE_STATES } from "src/app/utils/Constants";

const initialState = {
    pageState: PAGE_STATES.PRISTINE,
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
