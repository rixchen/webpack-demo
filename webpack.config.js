const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //构建前清理 
    },

    devtool: 'inline-source-map',// 报错信息
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 8000,
        hot: true

    },
    // stats: {
    //     assets: true,
    //     assetsSpace: 15,
    // },

    optimization: {
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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack5.0练习'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};