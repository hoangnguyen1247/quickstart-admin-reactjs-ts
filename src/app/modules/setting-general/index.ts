import SettingGeneralPage from "./setting-general/SettingGeneralPage";

import settingGeneralReducer from "./setting-general/reducer/SettingGeneralReducer";

export const SettingModule = [
    { path: "/settings", component: SettingGeneralPage, exact: true, isPrivate: true, allowRoles: undefined },
    { path: "/settings/general", component: SettingGeneralPage, exact: true, isPrivate: true, allowRoles: undefined },
];

export const settingReducers = {
    settingGeneralReducer,
};
