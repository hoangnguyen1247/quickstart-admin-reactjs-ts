import LoginPage from "./login-page/LoginPage";

// import profileReducer from "./profile-page/reducer/ProfileReducer";

export const AuthModule = [
    { path: "/login", component: LoginPage, exact: true, isPrivate: false, allowRoles: [] },
];

export const authReducers = {
    // profileReducer,
};
