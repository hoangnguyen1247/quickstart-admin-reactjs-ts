import SettingGeneralPage from "./setting-general/SettingGeneralPage";
import SettingProfilePage from "./setting-profile/SettingProfilePage";

import settingGeneralReducer from "./setting-general/reducer/SettingGeneralReducer";
import settingProfileReducer from "./setting-profile/reducer/SettingProfileReducer";

export const SettingModule = [
    { path: "/settings", component: SettingGeneralPage, exact: true, isPrivate: true, allowRoles: undefined },
    { path: "/settings/general", component: SettingGeneralPage, exact: true, isPrivate: true, allowRoles: undefined },
    { path: "/settings/profile", component: SettingProfilePage, exact: true, isPrivate: false, allowRoles: undefined },
];

export const settingReducers = {
    settingGeneralReducer,
    settingProfileReducer,
};
