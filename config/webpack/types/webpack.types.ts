export type TMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface IWebpackOptions {
    mode: TMode;
    port: number;
    paths: IBuildPaths;
    isDev: boolean;
}

export interface IWebpackEnv {
    mode: TMode,
    port: number;
}
