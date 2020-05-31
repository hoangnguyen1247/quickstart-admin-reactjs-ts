import HomePage from "./home/HomePage";

export const HomeModule = [
    { path: "/", component: HomePage, exact: true, isPrivate: false, allowRoles: [] },
    { path: "/home", component: HomePage, exact: true, isPrivate: false, allowRoles: [] },
];

export const homeReducers = {
    // profileReducer,
};
