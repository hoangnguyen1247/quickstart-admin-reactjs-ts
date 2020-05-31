import ProfilePage from "./profile-page/ProfilePage";
import ChangeProfilePage from "./change-profile/ChangeProfilePage";
import ChangePasswordPage from './change-password/ChangePasswordPage';

import profileReducer from "./profile-page/reducer/ProfileReducer";
import changeProfileReducer from "./change-profile/reducer/ChangeProfileReducer";
import changePasswordReducer from "./change-password/reducer/ChangePasswordReducer";

export const SettingProfileModule = [
    { path: "/setting/profile", component: ProfilePage, exact: true, isPrivate: true, allowRoles: undefined },
    { path: "/setting/profile/change", component: ChangeProfilePage, exact: true, isPrivate: true, allowRoles: undefined },
    { path: "/setting/profile/change-password", component: ChangePasswordPage, exact: true, isPrivate: false, allowRoles: undefined },
];

export const settingProfileReducers = {
    profileReducer,
    changeProfileReducer,
    changePasswordReducer,
};
