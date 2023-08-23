import webpack, { WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(htmlPath: string, isDev: boolean): WebpackPluginInstance[] {
    const progressPlugin = new webpack.ProgressPlugin;

    const htmlPlugin = new HtmlWebpackPlugin({
        template: htmlPath,
    });

    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    });

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: isDev
    });

    return [ progressPlugin, htmlPlugin, miniCssPlugin, definePlugin ];
}
