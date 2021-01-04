class File {
    constructor(configurations = {}) {
        this.configurations = configurations;
    }

    /**
     * rules to be appended to the master config.
     */
    rules() {
        return [
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        publicPath: "../imgs",
                        outputPath: "imgs",
                        esModule: false
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../webfonts',
                            outputPath: "webfonts",
                        }
                    }
                ]
            }
        ]
    }

    /**
     * plugins to be appended to the master config.
     */
    plugins() {
        return [];
    }
}

module.exports = File