import React from "react";
import cookie from "react-cookies";

import { LOCAL_STORAGE } from "src/app/utils/Constants";
import { PropsFromReactRouter } from "src/common";

import { 
    apiAuth_login,
} from "src/app/service/AuthService";

import { LoginForm } from "./children/LoginForm";

type Props = PropsFromReactRouter & {

}

class LoginPage extends React.Component<Props> {

    constructor(props) {
        super(props);

        this._handleLoginByEmail = this._handleLoginByEmail.bind(this);
    }

    componentDidMount() {
        const {
            match: { params },
        } = this.props;

        const provider = params.provider
        if (provider) {
            switch (provider) {
                default:
                    break;
            }
        }

        this._checkLoginState();
    }

    _checkLoginState() {
        if (cookie.load(LOCAL_STORAGE.ACCESS_TOKEN)) {
            this.props.history.push('/');
        }
    }

    _handleLoginByEmail(data, callback) {
        apiAuth_login(data)
            .then(res => {
                if (typeof callback === "function") {
                    callback();
                }
            })
            .catch(error => {
                if (typeof callback === "function") {
                    callback();
                }
            })
    }

    render() {
        return (
            <div className="login-page position-fixed d-flex align-items-center" style={{ width: "100%", height: "100%", }}>
                <div className="login-page-inner w-100 d-flex justify-content-center">
                    <LoginForm
                        onLogin={this._handleLoginByEmail}
                    />
                </div>
            </div>
        )
    }
}

export default LoginPage;
