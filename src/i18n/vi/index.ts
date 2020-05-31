import { home } from "./home/home";
import { login } from "./auth/login";
import { validations } from './common/validations';

export default {
    application: {
        meta: {
            title: "QuickStart",
            name: "QuickStart",
        },
    },
    home: home,
    login: login,
    validations: validations,
};
