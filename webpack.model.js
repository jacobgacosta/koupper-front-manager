let TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');

function isDevelopment() {
    return process.env.NODE_ENV === 'development';
}

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

module.exports = function () {
    return {
        context: process.cwd(),
        mode: isProduction() ? 'production' : 'development',
        entry: {},
        output: {
            chunkFilename: '[name].[hash:5].js',
            publicPath: '/'
        },
        module: { rules: [] },
        plugins: [],
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js",
                '@': `${process.cwd()}/resources`,
                'assets': `${process.cwd()}/resources/images`
            },
            extensions: ["*", ".js", ".vue", ".json"]
        },
        stats: {
            hash: false,
            version: false,
            timings: false,
            children: false,
            errorDetails: false,
            entrypoints: false,
            performance: isProduction(),
            chunks: true,
            modules: false,
            reasons: false,
            source: false,
            publicPath: false,
            builtAt: false
        },
        performance: {
            hints: false
        },
        optimization: isProduction()
            ? {
                minimizer: [
                    new TerserPlugin(),
                    `...`,
                    new CssMinimizerPlugin(),
                ]
            }
            : {},
        devtool: false,
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            contentBase: '',
            historyApiFallback: true,
            noInfo: true,
            compress: true,
            quiet: true
        }
    }
};