import { ResolveOptions } from 'webpack';

export function buildResolve(srcPath: string, modulesPath: string): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [srcPath, modulesPath],
        mainFiles: ['index'],
        alias: {}
    };
}
