import React from "react";
import PlusIcon from "mdi-react/PlusIcon";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Button } from "reactstrap";
import { I18n } from "react-redux-i18n";
import { Helmet } from "react-helmet-async";

import { AppContext } from "src/app/AppContext";

import { Header } from "src/app/modules/shared/header/Header";
import { PageInner } from "src/app/modules/shared/page-inner/PageInner";
import { NavigationBar } from "src/app/modules/shared/navigation/NavigationBar";
import { Toolbar } from "src/app/modules/shared/toolbar/Toolbar";
import { Footer } from "src/app/modules/shared/footer/Footer";

const mapStateToProps = () => {
    return {

    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        ...bindActionCreators({

        }, dispatch),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true });

class SettingGeneralPage extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this._handleButtonButtonClick = this._handleButtonButtonClick.bind(this);
        this._handleButtonTestClick = this._handleButtonTestClick.bind(this);
    }

    _handleButtonButtonClick() {
        const { 
            confirmDialogRef,
        } = this.context;

        if (confirmDialogRef && confirmDialogRef.current) {
            confirmDialogRef.current.show({});
        }
    }

    _handleButtonTestClick() {

    }

    render() {
        const homeI18n = I18n.t("home");

        return (
            <div>
                <Helmet>
                    <title>{homeI18n.meta.title}</title>
                </Helmet>
                <Header
                />
                <div className="d-flex">
                    <NavigationBar />
                    <PageInner>
                        <Toolbar
                            breadcrumbItems={[
                            ]}
                            breadcrumbActiveItemLabel="Home"
                        >
                            <Button>
                                <PlusIcon />
                            </Button>
                        </Toolbar>
                        <div>
                            Content
                            <Button
                                onClick={this._handleButtonButtonClick}
                            >
                                Hello
                            </Button>
                        </div>
                    </PageInner>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connector(SettingGeneralPage);
