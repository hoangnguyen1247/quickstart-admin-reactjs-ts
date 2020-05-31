export {};

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

declare var window: Window;

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};
