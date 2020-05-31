import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { History } from 'history';
import cookie from "react-cookies";

import canUseDOM from "src/can-use-dom";
import { routes } from 'src/routes';
import { LOCAL_STORAGE } from "src/app/utils/Constants";

import AppContainer from 'src/app/AppContainer';

type Props = {
    history?: History,
}

function App({ 
    history,
}: Props) {

    let roleIds = [];
    try {
        roleIds = cookie.load(LOCAL_STORAGE.ROLE_IDS);
    } catch (error) {
        roleIds = [];
    }

    const _renderPrivateRouter = (profile, route, index) => {
        const { component: Component, ...rest } = route;

        return (
            <Route
                {...rest}
                key={index}
                render={props => {
                    if (!cookie.load(LOCAL_STORAGE.ACCESS_TOKEN)) {
                        return (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
                    } else if (profile) {
                        if (!route.allowRoles || (Array.isArray(roleIds) && roleIds.some(item => route.allowRoles.includes(item)))) {
                            return <Component {...props} />;
                        } else {
                            return (<Redirect to={{ pathname: "/not-found", state: { from: props.location } }} />)
                        }
                    } else {
                        return null; // keep location
                    }
                }}
            />
        )
    }

    return (
        <AppContainer
            history={history}
        >
            {({ profile }) => (
                <div className="routes-container">
                    <Switch>
                        {routes.map((route, index) => {
                            const { component: Component, allowRoles, ...rest } = route;

                            if (canUseDOM && route.isPrivate) {
                                return _renderPrivateRouter(profile, route, index);
                            } else {
                                return (<Route key={index} component={Component} {...rest} />);
                            }
                        })}
                    </Switch>
                </div>
            )}
        </AppContainer>
    );
}

export default App;
