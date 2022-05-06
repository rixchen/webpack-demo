const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //构建前清理
    },

    devtool: 'inline-cheap-module-source-map', // 报错信息
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 8000,
        hot: true,
    },
    // stats: {
    //     assets: true,
    //     assetsSpace: 15,
    // },
    // 减少打包体积
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                exclude: /\/node_modules/,
            }),
        ],
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, // 提取第三方库
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            // s generate a index.html
            title: 'webpack5.0练习',
            template: 'public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}
