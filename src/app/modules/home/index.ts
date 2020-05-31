// import { AllRoleTypes } from "src/app/enum/RoleType";

import HomePage from "./home-page/HomePage";

// import profileReducer from "./profile-page/reducer/ProfileReducer";

export const HomeModule = [
    { path: "/", component: HomePage, exact: true, isPrivate: false, allowRoles: [] },
    { path: "/home", component: HomePage, exact: true, isPrivate: false, allowRoles: [] },
    // { path: "/change-password", component: ChangePasswordPage, exact: false, isPrivate: false },
];

export const homeReducers = {
    // profileReducer,
};
