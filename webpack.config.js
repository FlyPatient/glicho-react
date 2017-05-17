const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

const GLOBALS = {
    'process.env.ENDPOINT' : JSON.stringify('http://resourceserver.herokuapp.com/api/bookstore/')
}

module.exports = {
    entry: "./src/index",
    output: {
        path: `${__dirname}`,
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new HtmlWebpackPlugin({
            // Create HTML file that includes references to bundled CSS and JS.
            template: `./src/index.ejs`,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ]
}