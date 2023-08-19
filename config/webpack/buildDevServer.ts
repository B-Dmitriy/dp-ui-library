import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(): DevServerConfiguration {
    return {
        port: 9000,
        open: true
    }
}
