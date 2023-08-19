import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
})

export default config;
