import { configCommon } from "./config.common";

export const config = {
    server: Object.assign({}, configCommon.server, {
        port: 4221,
    }),
};
