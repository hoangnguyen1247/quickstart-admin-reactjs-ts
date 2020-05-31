import React from "react";
import validator from "validator";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import { AnyObject } from 'src/common';
import { FORM_STATES } from "src/app/utils/Constants";

import {
    apiAuth_forgotPassword,
} from "src/app/service/AuthService";

import { AppContext } from 'src/app/AppContext';
import { InputFormGroup } from "src/app/core-ui/form-group/InputFormGroup";
import { ReactToastify } from "src/app/core-ui/toast/ReactToastify";
import { Image } from "src/app/core-ui/image/Image";

const fieldsReducer = (state, action) => {
    return {
        ...state,
        ...action,
    }
}
const fieldErrorsReducer = (state, action) => {
    return {
        ...state,
        ...action,
    }
}

type Props = {
};

type State = {
    fields: AnyObject,
    fieldErrors: AnyObject,
    formState: string,
}

const defaultProps = {

}

const initialState = {
    fields: { 
        email: "",
        phoneNumber: "",
    },
    fieldErrors: {
        email: "",
        phoneNumber: "",
    },
    dirtyFields: {},
    formState: FORM_STATES.PRISTINE,
}

export function ForgotPasswordForm({

}: Props) {
    const { history } = React.useContext(AppContext);
    const [ fields, dispatchFields ] = React.useReducer(fieldsReducer, initialState.fields);
    const [ fieldErrors, dispatchFieldErrors ] = React.useReducer(fieldErrorsReducer, initialState.fieldErrors);
    const [ formState, setFormState ] = React.useState(initialState.formState);

    const _handleForgotPassword = (data) => {
        const serverValidationsI18n = I18n.t("server_validations");

        apiAuth_forgotPassword(data)
            .then(res => {
                ReactToastify.showSuccessToast("Đã gửi yêu cầu");

                if (history) {
                    history.push(`/reset-password`);
                }
            })
            .catch(error => {
                ReactToastify.showDangerToast(serverValidationsI18n[error.errorCode]);
            });
    }

    const _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const errorMessage = _validateField(name, value);
        dispatchFields({ [name]: value, });
        dispatchFieldErrors({ [name]: errorMessage });
    };

    const _handleRecaptchaChange = (value) => {
        dispatchFields({ recaptcha: value, } );
    };

    const _validateField = (field, value) => {
        const validationsI18n = I18n.t("validations");

        switch (field) {
            case "phoneNumber":
                if (validator.isEmpty(value.trim())) {
                    return validationsI18n.fieldIsRequired;
                } else return "";
            case "email":
                if (validator.isEmpty(value.trim())) {
                    return validationsI18n.fieldIsRequired;
                } return "";
            default:
                if (validator.isEmpty(value.trim())) {
                    return validationsI18n.fieldIsRequired;
                } return "";
        }
    };

    const _validateForm = () => {
        const mFieldErrors = {
            "phoneNumber": _validateField("phoneNumber", fields.phoneNumber),
        };

        dispatchFieldErrors(mFieldErrors);
        return !Object.keys(fieldErrors).some(key => fieldErrors[key]);
    };

    const _handleSubmitForm = () => {
        dispatchFieldErrors({});
        if (_validateForm()) {
            const { phoneNumber, recaptcha } = fields;

            _handleForgotPassword({ phoneNumber: phoneNumber, reCaptchaResponse: recaptcha });
        }
    };

    return (
        <div className={"forgot-password-form d-flex align-items-center justify-content-center"} >
            <div className={"forgot-password-form-inner"}>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="needs-validation"
                >
                    <Image
                        src={"/assets/images/logo.png"}
                        alt=""
                        width={"128px"}
                        height={"128px"}
                        className={"logo"}
                    />

                    <p className={"headline"}>
                        {I18n.t("forgot_password.form.headline")}
                    </p>

                    <InputFormGroup
                        className={"form-group text-left"}
                        name={"phoneNumber"}
                        value={fields.phoneNumber}
                        placeholder={I18n.t("forgot_password.form.placeholder.phoneNumber")}
                        label={I18n.t("forgot_password.form.placeholder.phoneNumber")}
                        errorMessage={fieldErrors.phoneNumber}
                        onChange={_handleInputChange}
                    />
                    <div className={"form-group button-wrap"}>
                        <Button
                            color="primary"
                            type="submit" 
                            className={"btn-login text-uppercase"}
                            disabled={formState === FORM_STATES.PRISTINE || 
                                Object.keys(fieldErrors).some(key => fieldErrors[key])
                            }
                            onClick={_handleSubmitForm}
                        >
                            {I18n.t("forgot_password.form.button.send_request_link")}
                        </Button>
                    </div>

                    <Link to={"/login"} className={"btn btn-link go-back-link"}>
                        {I18n.t("forgot_password.form.link.back_to_login")}
                    </Link>
                </form>
            </div>
        </div>
    );
}

ForgotPasswordForm.defaultProps = defaultProps;
