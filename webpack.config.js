const webpackConfiguration = require('./webpack.model');

let modules = [
    'Javascript',
    'Html',
    'Css',
    'File'
];

class Configuration {
    buildFrom(fileName) {
        this.jsEntryFile = fileName;

        return this;
    }

    template(fileName) {
        this.htmlEntryFile = fileName;

        return this;
    }

    outputJs(fileName) {
        this.jsOutputFile = fileName;

        return this;
    }

    outputCss(fileName) {
        this.cssOutputFile = fileName;

        return this;
    }

    publicPath(path) {
        this.outputPath = path;

        return this;
    }

    build() {
        const configuration = webpackConfiguration()
        configuration.entry = `${process.cwd()}/${this.jsEntryFile}`;
        configuration.output.filename = this.jsOutputFile;
        configuration.output.path = `${process.cwd()}/${this.outputPath}`;
        configuration.devServer.contentBase = `${process.cwd()}/${this.outputPath}`;

        const modules = this.initializeModules();

        let rules = [];

        modules.forEach(module => {
            rules = rules.concat(module.rules());
        });

        configuration.module.rules = rules;

        let plugins = [];

        modules.forEach(module => {
            plugins = plugins.concat(module.plugins());
        });

        configuration.plugins = plugins;

        return configuration;
    }

    initializeModules() {
        const self = this;

        return modules.map(function (module) {
            let Module = require(`./src/bootstrapping/modules/${module}`);

            switch (Module.name) {
                case 'Html':
                    return new Module({
                        html: {
                            entry: self.htmlEntryFile
                        }
                    });
                case 'Css':
                    return new Module({
                        css: {
                            output: self.cssOutputFile
                        }
                    });
                default:
                    return new Module();
            }
        });
    }
}

module.exports = (new Configuration)
    .buildFrom('resources/init.js')
    .template('resources/index.html')
    .outputJs( 'js/init.js')
    .outputCss('css/app.css')
    .publicPath('public')
    .build();
