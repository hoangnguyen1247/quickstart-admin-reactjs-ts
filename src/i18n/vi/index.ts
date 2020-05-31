import { home } from "./home/home";
import { login } from "./auth/login";
// import { validations } from './validations';

export default {
    application: {
        meta: {
            title: "Heramo BackOffice",
            name: "Heramo",
        },
    },
    home: home,
    login: login,
    // validations: validations,
};
