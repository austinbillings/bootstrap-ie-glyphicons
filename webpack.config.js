const path = require('path');
const webpack = require('webpack');
const bundleName = 'bootstrap-ie-glyphicons';

const prodMode = true; //(process.env.NODE_ENV === 'production');
const plugins = [];

if (prodMode) plugins.push(new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }));

module.exports = {
    entry: [ path.join(__dirname, 'src', 'index.js') ],
    plugins,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'base64-font-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: bundleName + '.js',
    }
};
