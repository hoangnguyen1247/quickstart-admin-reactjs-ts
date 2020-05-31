import { toast } from "react-toastify";
import { I18n } from 'react-redux-i18n';

const serverValidations18n = I18n.t("server_validations");

export const ReactToastify = {

    showDefaultToast: (message) => {
        toast(message, {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        });
    },

    showCustomToast: (message, options = {}) => {
        toast(message, Object.assign({}, {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },

    showPrimaryToast: (message, options = {}) => {
        toast(message, Object.assign({}, {
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },

    showSecondaryToast: (message, options = {}) => {
        toast(message, Object.assign({}, {
            type: toast.TYPE.DEFAULT,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },

    showSuccessToast: (message, options = {}) => {
        toast(message, Object.assign({}, {
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },

    showInfoToast: (message, options = {}) => {
        toast(message, Object.assign({}, {
            type: toast.TYPE.INFO,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },

    showWarningToast: (message, options = {}) => {
        toast(message, Object.assign({}, {
            type: toast.TYPE.WARNING,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },

    showDangerToast: (message = "Đã có lỗi", options = {}) => {
        toast(message || serverValidations18n.has_error, Object.assign({}, {
            type: toast.TYPE.ERROR,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeButton: true,
            className: "toast-body",
        }, options));
    },
};
