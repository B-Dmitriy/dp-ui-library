import webpack, { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {IWebpackOptions} from "./types/webpack.types";

export function buildPlugins(htmlPath: string): WebpackPluginInstance[] {
    const progressPlugin = new webpack.ProgressPlugin;

    const htmlPlugin = new HtmlWebpackPlugin({
        template: htmlPath,
    })

    return [progressPlugin,htmlPlugin];
}
