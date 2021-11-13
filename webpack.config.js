const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        //contentBase: './build',
        open: true,
        compress: true,
        port: 4000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
};