import React from "react";
import { Button, Spinner } from "reactstrap";
import { I18n } from "react-redux-i18n";
import isEmpty from "validator/lib/isEmpty";

import { PAGE_STATES } from "src/app/utils/Constants";

import { InputFormGroup } from "src/app/core-ui/form-group/InputFormGroup";

const fieldsReducer = (state, action) => {
    return {
        ...state,
        ...action,
    };
}

const fieldErrorsReducer = (state, action) => {
    return {
        ...state,
        ...action,
    };
}

type Props = {
    onLogin: (data, callback) => void,
};

export function LoginForm({
    onLogin,
}: Props) {
    const _passwordInputRef = React.useRef<HTMLInputElement>(null);
    const loginI18n = I18n.t("login");
    const [ pageState, setPageState ] = React.useState(PAGE_STATES.PRISTINE);
    const [ fields, dispatchFields ] = React.useReducer(fieldsReducer, {
        username: "",
        password: "",
    });
    const [ fieldErrors, dispatchFieldErrors ] = React.useReducer(fieldErrorsReducer, {
        username: "",
        password: "",
    });

    const _handleButtonLoginClick = () => {
        _submitForm({

        });
    };

    const _handleInputKeyPress = (event) => {
        if (event.key === "Enter") {
            _submitForm({

            });
        }
    }

    const _handleInputChange = (fieldName: string, value: any) => {
        const errorMessage = _validateField(fieldName, value);

        dispatchFields(Object.assign({}, fields, { [fieldName]: value }));
        dispatchFieldErrors(Object.assign({}, fieldErrors, { [fieldName]: errorMessage }));
    }

    const _validateField = (fieldName: string, value: any) => {
        const validationsI18n = I18n.t("validations");
        switch (fieldName) {
            default:
                if (!value || isEmpty(value)) {
                    return validationsI18n.fieldIsRequired;
                } else return "";
        }
    }

    const _validateForm = () => {
        const fieldErrors = {
            username: _validateField("username", fields.username),
            password: _validateField("password", _passwordInputRef.current ? _passwordInputRef.current.value : ""),
        }

        dispatchFieldErrors(fieldErrors);
        return !Object.keys(fieldErrors).some(key => !!fieldErrors[key]);
    }

    const _submitForm = (data) => {
        dispatchFieldErrors({});
        if (_validateForm()) {
            if (typeof onLogin === "function") {
                setPageState(PAGE_STATES.PENDING);
                onLogin({
                    username: fields.username,
                    password: _passwordInputRef.current ? _passwordInputRef.current.value : "",
                }, () => {
                    setPageState(PAGE_STATES.DONE);
                });
            }
        }
    };

    return (
        <div className="login-form" style={{ width: "384px", maxWidth: "100%" }}>
            <div className="row">
                <div className="col-12 col-lg-12">
                    <InputFormGroup
                        type="text"
                        label={loginI18n.loginForm.label.username}
                        placeholder=""
                        name="username"
                        value={fields.username}
                        errorMessage={fieldErrors.username}
                        onChange={(event) => _handleInputChange("username", event.currentTarget.value || "")}
                        onKeyPress={_handleInputKeyPress}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-12">
                    <InputFormGroup
                        innerRef={_passwordInputRef}
                        type="password"
                        label={loginI18n.loginForm.label.password}
                        placeholder=""
                        name="password"
                        // errorMessage={fieldErrors.password}
                        // onChange={(event) => _handleInputChange("password", event.currentTarget.value || "")}
                        onKeyPress={_handleInputKeyPress}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-12 text-right">
                    <Button
                        className="text-center"
                        onClick={_handleButtonLoginClick}
                    >
                        {pageState === PAGE_STATES.PRISTINE &&
                            <span>Login</span>
                        }
                        {pageState === PAGE_STATES.PENDING &&
                            <Spinner />
                        }
                        {pageState === PAGE_STATES.COMPLETED &&
                            <span>Completed</span>
                        }
                        {pageState === PAGE_STATES.DONE &&
                            <span>Login</span>
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}
