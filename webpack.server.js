const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');


let config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',
    

    // tell webpack the root file of our
    // server application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
        optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
    externals:[webpackNodeExternals()],
    plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new AsyncChunkNames()
      ]

}
module.exports = merge(baseConfig, config);
