import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

import catalogReducer from './app/AppReducer';
import { homeReducers } from './app/modules/home';
import { authReducers } from './app/modules/auth';
import { profileReducers } from './app/modules/profile';
import { settingReducers } from './app/modules/setting';

const appReducer = combineReducers({
    i18n: i18nReducer,

    catalogReducer,
    ...homeReducers,
    ...authReducers,
    ...profileReducers,
    ...settingReducers,
});

const rootReducer = (state, action: any) => {
    if (action.type === "RESET_STATE") {
        state = undefined;
    }

    return appReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
