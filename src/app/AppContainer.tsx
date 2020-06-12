import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { History, UnregisterCallback } from 'history';
import { ToastContainer } from "react-toastify";
import { I18n } from "react-redux-i18n";
import { Helmet } from 'react-helmet-async';

import { RootState } from 'src/reducers';
import { AppContext } from 'src/app/AppContext';

import { 
    catalog_changeMinWidth992,
    catalog_changeDarkMode,
    catalog_changeMobileSearchBar,
    catalog_changeMobileActionBar,
    catalog_changeNavigationInRight,

    catalog_getProfileSuccess,
} from './AppActions';

import { ConfirmDialog } from 'src/app/core-ui/dialog/ConfirmDialog';
import { ScrollupButton } from 'src/app/core-ui/scrollup/ScrollupButton';

import InitialComponent from './AppInitializer';

const mapStateToProps = ({ catalogReducer }: RootState) => {
    return {
        profile: catalogReducer.profile,
        minWidth992: catalogReducer.minWidth992,
        darkMode: catalogReducer.darkMode,
        isShowMobileHomeBar: catalogReducer.isShowMobileHomeBar,
        isShowMobileSearchBar: catalogReducer.isShowMobileSearchBar,
        isShowMobileActionBar: catalogReducer.isShowMobileActionBar,
        navigationInRight: catalogReducer.navigationInRight,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        ...bindActionCreators({
            changeMinWidth992: catalog_changeMinWidth992,
            changeDarkMode: catalog_changeDarkMode,
            changeMobileSearchBar: catalog_changeMobileSearchBar,
            changeMobileActionBar: catalog_changeMobileActionBar,
            changeNavigationInRight: catalog_changeNavigationInRight,

            getProfileSuccess: catalog_getProfileSuccess,
        }, dispatch),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true });

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    history?: History,
    children: ({ profile }) => React.ReactNode,
    profile: any,
};

class AppContainer extends React.Component<Props> {

    state = {
        precacheData: {
            priceUnitOptions: [],
        },
    };

    unlistenHistory: UnregisterCallback;
    minWith992MediaQuery: any;
    darkModeMediaQuery: any;

    _initialComponentRef: { current: null | InitialComponent };
    _confirmDialogRef: { current: null | ConfirmDialog };

    constructor(props: Props, context: any) {
        super(props, context);

        this.unlistenHistory = () => {};

        this._initialComponentRef = React.createRef();
        this._confirmDialogRef = React.createRef();

        this.subscribeLocationChange = this.subscribeLocationChange.bind(this);
        this.unsubscribeLocationChange = this.unsubscribeLocationChange.bind(this);

        this._changeMobileSearchBar = this._changeMobileSearchBar.bind(this);
        this._changeMobileActionBar = this._changeMobileActionBar.bind(this);
        this._changeNavigationInRight = this._changeNavigationInRight.bind(this);

        this.getUserProfile = this.getUserProfile.bind(this);
    }

    componentDidMount() {
        this.subscribeLocationChange();
        this.subscribeWindowResize();
        this.subscribeConnectionChange();
        this.subscribeMinWidthChange();
        this.subscribeDarkModeChange();
    }

    componentDidUpdate(prevProps: Props) {

    }

    componentWillUnmount() {
        this.unsubscribeLocationChange();
        this.unsubscribeWindowResize();
        this.unsubscribeConnectionChange();
        this.unsubscribeMinWidthChange();
        this.unsubscribeDarkModeChange();
    }

    subscribeLocationChange() {
        const { history } = this.props;

        if (history) {
            this.unlistenHistory = history.listen((location, action) => {
                // console.log(action, location.pathname, location.state);
                console.log(action, location.pathname);
            });
        }
    };

    unsubscribeLocationChange() {
        if (this.unlistenHistory) {
            this.unlistenHistory();
        }
    };

    subscribeWindowResize() {
        window.addEventListener('resize', () => {
        }, false);
    }

    unsubscribeWindowResize() {
        window.removeEventListener('resize', () => {

        });
    };

    subscribeConnectionChange() {
        window.addEventListener("online", () => {

        });
        window.addEventListener("offline", () => {

        });
    }

    unsubscribeConnectionChange() {
        window.removeEventListener("online", () => {

        });
        window.removeEventListener("offline", () => {

        });
    };

    subscribeMinWidthChange() {
        if (window.matchMedia) {
            this.minWith992MediaQuery = window.matchMedia('(min-width: 992px)');
            this.changeMinWidth992(this.minWith992MediaQuery.matches);

            this.minWith992MediaQuery.addListener((e) => {
                const minWith992Match = e.matches;
                // const { current } = this._confirmDialogRef;
                // if (current) {
                    // current.show({}, () => {
                        this.changeMinWidth992(minWith992Match);
                    // })
                // }
            });
        }
    }

    unsubscribeMinWidthChange() {
        if (this.minWith992MediaQuery) {
            this.minWith992MediaQuery.removeListener((e) => {
            });
        }
    }

    subscribeDarkModeChange() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            this.changeDarkMode(this.darkModeMediaQuery.matches);

            this.darkModeMediaQuery.addListener((e) => {
                const darkModeMatch = e.matches;
                // console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
                
                const { current } = this._confirmDialogRef;
                if (current) {
                    current.show({}, () => {
                        this.changeDarkMode(darkModeMatch);
                    })
                }
            });
        }
    }

    unsubscribeDarkModeChange() {
        if (this.darkModeMediaQuery) {
            this.darkModeMediaQuery.removeListener((e) => {
            });
        }
    }

    changeMinWidth992(match: boolean) {
        this.props.changeMinWidth992(match);
    }
    
    changeDarkMode(match: boolean) {
        this.props.changeDarkMode(match);
    }

    _changeMobileSearchBar(match: boolean) {
        this.props.changeMobileSearchBar(match);
    }
    
    _changeMobileActionBar(match: boolean) {
        this.props.changeMobileActionBar(match);
    }
    
    _changeNavigationInRight(match: boolean) {
        this.props.changeNavigationInRight(match);
    }

    getUserProfile() {

    };

    render() {
        const {
            history,
            profile,

            minWidth992,
            isShowMobileHomeBar,
            isShowMobileSearchBar,
            isShowMobileActionBar,
            navigationInRight,

            getProfileSuccess,
        } = this.props;
        const applicationI18n = I18n.t("application");

        return (
            <AppContext.Provider value={{
                history: history,
                location: typeof history === "object" ? history.location : {},
                initialComponentRef: this._initialComponentRef,
                confirmDialogRef: this._confirmDialogRef,
                profile,

                minWidth992,
                isShowMobileHomeBar,
                isShowMobileSearchBar,
                isShowMobileActionBar,
                navigationInRight,

                changeMobileSearchBar: this._changeMobileSearchBar,
                changeMobileActionBar: this._changeMobileActionBar,
                changeNavigationInRight: this._changeNavigationInRight,

                getProfileSuccess,
            }}>
                <Helmet>
                    <title>{applicationI18n.meta.title}</title>
                </Helmet>
                <InitialComponent
                    ref={this._initialComponentRef}
                />
                <ConfirmDialog
                    ref={this._confirmDialogRef}
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
                {this.props.children({
                    profile,
                })}
            </AppContext.Provider>
        );
    }
}

export default connector(AppContainer);
