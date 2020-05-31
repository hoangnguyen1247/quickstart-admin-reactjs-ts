import React from "react";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { Helmet } from "react-helmet-async";
import { History } from "history";

import { ForgotPasswordForm } from "./children/ForgotPasswordForm";

const mapStateToProps = ({ i18n }) => {
    return {
        locale: i18n.locale,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const connector = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true });

type Props = {
    history: History,
};

const defaultProps = {

};

class ForgotPasswordPage extends React.Component<Props> {

    static defaultProps = defaultProps;

    render() {

        return (
            <div className={"forgot-password-page"}>
                <Helmet>
                    <title>{I18n.t("login.meta.title")}</title>
                </Helmet>
                <div className={"forgot-password-page-inner"}>
                    <div className={"background"}>
                        {/* <Image src={"/assets/images/login/bg/march.jpg"} /> */}
                    </div>
                    <ForgotPasswordForm
                    />
                </div>
            </div>
        );
    }
}

export default connector(ForgotPasswordPage);
