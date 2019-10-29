const path = require('path');

//Modules
//babel-loader teach babel how to work with Webpack
//babel-core knows how to take in code, parse it, and generate some output files.
//babel-present-env Ruleset for telling babel exactly what pieces of ES5,7 to look for
//and turn into ES5

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};

module.exports = config;