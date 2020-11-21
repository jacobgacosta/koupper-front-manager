var HtmlWebpackPlugin = require('html-webpack-plugin')

class Html {
    constructor(configurations) {
        this.configurations = configurations;
    }

    /**
     * rules to be appended to the master config.
     */
    rules() {
        return [
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ],
            },
        ]
    }

    /**
     * plugins to be appended to the master config.
     */
    plugins() {
        return [
            new HtmlWebpackPlugin({
                template: `${process.cwd()}/${this.configurations.html.entry}`
            })
        ]
    }
}

module.exports = Html
