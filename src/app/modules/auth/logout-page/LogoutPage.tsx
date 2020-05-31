import React from "react";
import cookie from "react-cookies";
import { History } from "history";

import { LOCAL_STORAGE } from "src/app/utils/Constants";

type Props = {
    history: History,
};

const defaultProps = {

};

class LogutPage extends React.Component<Props> {

    static defaultProps = defaultProps;

    componentDidMount() {
        this.clearAccessToken();

        const { history } = this.props;

        if (history) {
            history.push("/login");
        }
    }

    clearAccessToken = () => {
        cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN, { path: "/" });
        cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN, { path: "/" });
        cookie.remove(LOCAL_STORAGE.REFRESH_TOKEN, { path: "/" });
        cookie.remove(LOCAL_STORAGE.LOGGED_USER, { path: "/" });

    };

    render() {
        return null;
    }
}

export default LogutPage;
