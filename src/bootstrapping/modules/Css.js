const MiniCssExtractPlugin = require('mini-css-extract-plugin');

class Css {
    constructor(configurations) {
        this.configurations = configurations;
    }

    /**
     * rules to be appended to the master config.
     */
    rules() {
        return [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                precision: 8,
                                outputStyle: 'expanded'
                            }
                        }
                    },
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                precision: 8,
                                outputStyle: 'expanded',
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            }
        ];
    }

    /**
     * plugins to be appended to the master config.
     */
    plugins() {
        return [
            new MiniCssExtractPlugin({
                filename: this.configurations.css.output
            }),
        ]
    }
}

module.exports = Css
