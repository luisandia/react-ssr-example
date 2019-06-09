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
        // filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        chunkFilename: '[name].bundle.js',
        filename: 'bundle.js',
        // chunkFilename: '[name].bundle.js',
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false,
        // runtimeChunk: 'single',
        splitChunks: {
            // chunks: 'all',
            // maxInitialRequests: Infinity,
            // minSize: 0,
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name(module) {
            //             // get the name. E.g. node_modules/packageName/not/this/part.js
            //             // or node_modules/packageName
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            //             // npm package names are URL-safe, but some servers don't like @ symbols
            //             return `npm.${packageName.replace('@', '')}`;
            //         },
            //     },
            // },
        }


    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new AsyncChunkNames()
    ]
}

module.exports = merge(baseConfig, config);

