const path = require('path');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

let config = {

    // tell webpack the root file of our
    // server application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        chunkFilename: '[name].bundle.js',
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false,
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new AsyncChunkNames()
    ]
}

module.exports = merge(baseConfig, config);

