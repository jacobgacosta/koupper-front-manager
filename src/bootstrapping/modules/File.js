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