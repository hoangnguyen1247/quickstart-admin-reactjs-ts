import {config as configLocal} from "./config/config.local";
import {config as configDevelopment} from "./config/config.development";
import {config as configTest} from "./config/config.staging";
import {config as configProduction} from "./config/config.production";

const reactEnv = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : process.env.NODE_ENV;
let selectedProfile = configDevelopment;
switch (reactEnv) {
    case "local":
        selectedProfile = configLocal;
        break;
    case "development":
        selectedProfile = configDevelopment;
        break;
    case "test":
        selectedProfile = configTest;
        break;
    case "production":
        selectedProfile = configProduction;
        break;
    default:
        selectedProfile = configDevelopment;
        break;
}

export const config = selectedProfile;
