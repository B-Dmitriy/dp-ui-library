export type TMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface IWebpackOptions {
    mode: TMode;
    paths: IBuildPaths;
}
