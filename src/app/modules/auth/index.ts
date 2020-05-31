import LoginPage from "./login-page/LoginPage";
import LogoutPage from "src/app/modules/auth/logout-page/LogoutPage";

// import profileReducer from "./profile-page/reducer/ProfileReducer";

export const AuthModule = [
    { path: "/login", component: LoginPage, exact: true, isPrivate: false, allowRoles: undefined },
    { path: "/logout", component: LogoutPage, exact: true, isPrivate: false, allowRoles: undefined },
];

export const authReducers = {
    // profileReducer,
};
