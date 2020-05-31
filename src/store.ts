import moment from "moment";
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from "redux";
import {
    loadTranslations,
    setLocale,
    syncTranslationWithStore
} from "react-redux-i18n";

import reducers from './reducers';
import translationsObject from './i18n';

export default function configureStore(initialState = {}) {

    // Create the store with two middlewares
    const middlewares = [
        thunk,
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    if (process.env.REACT_APP_ENV === "local" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = createStore(
        reducers,
        initialState,
        compose(...enhancers)
    );

    // store.asyncReducers = {}; // Async reducer registry

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translationsObject));
    store.dispatch(setLocale('vi'));

    moment.locale("en");

    return store;
}
