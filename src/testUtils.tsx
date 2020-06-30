import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';

import { mockMediaQueryList } from 'use-media/lib/useMedia';
// Types are also exported for convienence:
// import {Effect, MediaQueryObject} from 'use-media/lib/types';

import configureStore from 'src/store';
import App from './App';

const history = createBrowserHistory();
const mockStore = configureStore();

export function renderConnectedComponent(ui, { initialState = {} as any, store = mockStore, ...renderOptions } = {} as any) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <HelmetProvider>
                        {children}
                    </HelmetProvider>
                </Router>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export function renderConnectedComponent2(ui, { initialState = {} as any, store = mockStore, ...renderOptions } = {} as any) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <HelmetProvider>
                        <Route path="/" render={(props) => <>{children})</>} />
                    </HelmetProvider>
                </Router>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export {
    history,
}
 
export interface MockMatchMedia {
    media: string;
    matches?: boolean;
}
 
export function getMockImplementation({media, matches = false}: MockMatchMedia) {
    const mql: MediaQueryList = {
        ...mockMediaQueryList,
        media,
        matches,
    };
    
    return () => mql;
}

export const mediaQueries = {
    minWidth992: '(min-width: 992px)',
    darkMode: '(prefers-color-scheme: dark)',
};
