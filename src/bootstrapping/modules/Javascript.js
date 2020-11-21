const {VueLoaderPlugin} = require("vue-loader");

class Javascript {
    constructor(configurations) {
        this.configurations = configurations;
    }

    /**
     * rules to be appended to the master config.
     */
    rules() {
        return [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
        ];
    }

    /**
     * plugins to be appended to the master config.
     */
    plugins() {
        return [
            new VueLoaderPlugin()
        ]
    }
}

module.exports = Javascript
