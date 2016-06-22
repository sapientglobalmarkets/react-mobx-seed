'use strict';

let HtmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProvidePlugin = require('webpack').ProvidePlugin;

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, loader: 'babel',
                exclude: /node_modules/
            },

            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },

    plugins: [
        new HtmlPlugin({
            title: 'React + MobX',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('main.css'),
        new ProvidePlugin({
            React: 'react'
        })
    ]
};