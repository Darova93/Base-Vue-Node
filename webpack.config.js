const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, exclude: /node_modules/, use: ['vue-style-loader', { loader: 'css-loader', options: { esModule: false }}]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ],
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
};