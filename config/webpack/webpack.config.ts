import path from 'path';
import { buildWebpackConfig } from './lib/buildWebpackConfig';
import { IWebpackEnv } from './types/webpack.types';

export default (env: IWebpackEnv) => {
    const port = env.port || 9000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        port,
        paths: {
            entry: path.resolve(__dirname, '..', '..',  'src', 'index.tsx'),
            output: path.resolve(__dirname, '..',  '..', 'dist'),
            html: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
            src: path.resolve(__dirname, '..', '..', 'src'),
            node_modules: path.resolve(__dirname, '..', '..', 'node_modules'),
        },
        isDev
    });
};
