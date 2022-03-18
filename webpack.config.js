// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.ts',
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
        clean: {
            keep: '_redirects'
        }
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        client: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: ['/node_modules/'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.pug$/i,
                loader: 'pug-loader',
                exclude: ['/node_modules/'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "fs": false,
            "assert": require.resolve("assert/"),
            "path": require.resolve("path-browserify"),
        }
    },
};


module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }

    return config;
};
