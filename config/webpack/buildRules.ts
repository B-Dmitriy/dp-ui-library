import { RuleSetRule } from "webpack";

export function buildRules(): RuleSetRule[] {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}
