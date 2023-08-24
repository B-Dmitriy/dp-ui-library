import webpack from 'webpack';
import { buildRules } from './buildRules';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { IWebpackOptions } from '../types/webpack.types';

export function buildWebpackConfig(options: IWebpackOptions): webpack.Configuration {
    const { mode, port, paths, isDev, isAnalyze } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            assetModuleFilename: 'assets/[hash][ext][query]',
            publicPath: '/',
            path: paths.output,
            clean: true
        },
        module: {
            rules: buildRules(isDev),
        },
        resolve: buildResolve(paths.src, paths.node_modules),
        plugins: buildPlugins(paths.html, isDev, isAnalyze),
        devServer: isDev ? buildDevServer(port) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined
    };
}
