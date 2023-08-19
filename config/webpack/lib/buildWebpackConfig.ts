import webpack from "webpack";
import { buildRules } from "./buildRules";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";
import { IWebpackOptions } from "../types/webpack.types";

export function buildWebpackConfig(options: IWebpackOptions): webpack.Configuration {
    const {mode, port, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true
        },
        module: {
            rules: buildRules(isDev),
        },
        resolve: buildResolve(),
        plugins: buildPlugins(paths.html),
        devServer: buildDevServer(port),
        devtool: isDev ? 'inline-source-map' : undefined
    }
}
