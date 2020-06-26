import React from 'react';
import useMedia  from 'use-media';
import { History, UnregisterCallback } from 'history';
import { ToastContainer } from "react-toastify";
import { I18n } from "react-redux-i18n";
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useDispatch } from 'react-redux';

import { AnyObject } from 'src/common';
import { AppContext } from 'src/app/AppContext';
import { RootState } from "src/reducers";

import { useWindowWitdh } from 'src/app/hooks/useWindowWidth';

import { ConfirmDialog } from 'src/app/core-ui/dialog/ConfirmDialog';
import { ScrollupButton } from 'src/app/core-ui/scrollup/ScrollupButton';

import InitialComponent from './AppInitializer';

const reselectShippers = createSelector<RootState, any, any>(
    state => state.catalogReducer.userRoles,
    userRoles => userRoles.filter(userRole => userRole.key === "shipper")
)

const stateReducer = (state, action) => {
    return {
        ...state,
        ...action,
    }
}

type Props = {
    history?: History,
    children: ({ profile }) => React.ReactNode,
};

const inititalState = {
    minWidth992: false,
    darkMode: false,
    isShowMobileHomeBar: false,
    isShowMobileSearchBar: false,
    isShowMobileActionBar: false,
    navigationInRight: false,

    profile: undefined,

    precacheData: {
        priceUnitOptions: [],
    },
};

const AppContainer = ({
    history,
    children,
}) => {

    const services = useSelector<RootState, any>(state => state.catalogReducer.services);
    const shippers = useSelector(reselectShippers);

    const [ state, dispatchState ] = React.useReducer(stateReducer, inititalState);

    const applicationI18n = I18n.t("application");

    // unlistenHistory: UnregisterCallback;
    // minWith992MediaQuery: any;
    // darkModeMediaQuery: any;

    const _initialComponentRef = React.useRef<InitialComponent>(null);
    const _confirmDialogRef = React.useRef<ConfirmDialog>(null);

    // componentDidMount() {
    //     this.subscribeLocationChange();
    //     this.subscribeWindowResize();
    //     this.subscribeConnectionChange();
    //     this.subscribeMinWidthChange();
    //     this.subscribeDarkModeChange();
    // }

    // componentDidUpdate(prevProps: Props) {

    // }

    // componentWillUnmount() {
    //     this.unsubscribeLocationChange();
    //     this.unsubscribeWindowResize();
    //     this.unsubscribeConnectionChange();
    //     this.unsubscribeMinWidthChange();
    //     this.unsubscribeDarkModeChange();
    // }

    // subscribeLocationChange() {
    //     const { history } = this.props;

    //     if (history) {
    //         this.unlistenHistory = history.listen((location, action) => {
    //             // console.log(action, location.pathname, location.state);
    //             console.log(action, location.pathname);
    //         });
    //     }
    // };

    // unsubscribeLocationChange() {
    //     if (this.unlistenHistory) {
    //         this.unlistenHistory();
    //     }
    // };

    // subscribeWindowResize() {
    //     window.addEventListener('resize', () => {
    //     }, false);
    // }

    // unsubscribeWindowResize() {
    //     window.removeEventListener('resize', () => {

    //     });
    // };

    // subscribeConnectionChange() {
    //     window.addEventListener("online", () => {

    //     });
    //     window.addEventListener("offline", () => {

    //     });
    // }

    // unsubscribeConnectionChange() {
    //     window.removeEventListener("online", () => {

    //     });
    //     window.removeEventListener("offline", () => {

    //     });
    // };

    // subscribeMinWidthChange() {
    //     if (window.matchMedia) {
    //         this.minWith992MediaQuery = window.matchMedia('(min-width: 992px)');
    //         this.changeMinWidth992(this.minWith992MediaQuery.matches);

    //         this.minWith992MediaQuery.addListener((e) => {
    //             const minWith992Match = e.matches;
    //             // const { current } = this._confirmDialogRef;
    //             // if (current) {
    //                 // current.show({}, () => {
    //                     this.changeMinWidth992(minWith992Match);
    //                 // })
    //             // }
    //         });
    //     }
    // }

    // unsubscribeMinWidthChange() {
    //     if (this.minWith992MediaQuery) {
    //         this.minWith992MediaQuery.removeListener((e) => {
    //         });
    //     }
    // }

    // subscribeDarkModeChange() {
    //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    //         this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    //         this.changeDarkMode(this.darkModeMediaQuery.matches);

    //         this.darkModeMediaQuery.addListener((e) => {
    //             const darkModeMatch = e.matches;
    //             // console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
                
    //             const { current } = this._confirmDialogRef;
    //             if (current) {
    //                 current.show({}, () => {
    //                     this.changeDarkMode(darkModeMatch);
    //                 })
    //             }
    //         });
    //     }
    // }

    // unsubscribeDarkModeChange() {
    //     if (this.darkModeMediaQuery) {
    //         this.darkModeMediaQuery.removeListener((e) => {
    //         });
    //     }
    // }

    const minWidth992 = useMedia('(min-width: 992px)');
    const darkMode = useMedia('(prefers-color-scheme: dark)');
    const windowWidth = useWindowWitdh();

    const dispatch = useDispatch();

    const updateState = (field, value) => {
        dispatchState({ [field]: value });
    }
    
    const updateData = (action) => {
        dispatch(action);
    }

    return (
        <AppContext.Provider value={{
            history: history,
            location: typeof history === "object" ? history.location : {},
            initialComponentRef: _initialComponentRef,
            confirmDialogRef: _confirmDialogRef,

            minWidth992,
            darkMode,

            isShowMobileHomeBar: state.isShowMobileHomeBar,
            isShowMobileSearchBar: state.isShowMobileSearchBar,
            isShowMobileActionBar: state.isShowMobileActionBar,
            navigationInRight: state.navigationInRight,

            profile: state.profile,

            shippers,
            services,

            changeMobileHomeBar: (match) => updateState("isShowMobileHomeBar", match),
            changeMobileSearchBar: (match) => updateState("isShowMobileSearchBar", match),
            changeMobileActionBar: (match) => updateState("isShowMobileActionBar", match),
            changeNavigationInRight: (match) => updateState("navigationInRight", match),

            getProfileSuccess: (profile) => updateState("profile", profile),
            updateCachedData: (action) => updateData(action),
        }}>
            <Helmet>
                <title>{applicationI18n.meta.title}</title>
            </Helmet>
            <InitialComponent
                ref={_initialComponentRef}
            />
            <ConfirmDialog
                ref={_confirmDialogRef}
            />
            <ToastContainer
                autoClose={5000}
            />
            <ScrollupButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{}}
                ToggledStyle={{}}
            />
            <p>Window width: {windowWidth}</p>
            {children({
                profile: state.profile,
            })}
        </AppContext.Provider>
    );
}

export default AppContainer;
