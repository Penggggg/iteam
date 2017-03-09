var webpack = require('webpack');
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './web/index.tsx',
        vendor: './web/vendor.tsx'
    },

    output: {
        filename: '[name].[hash].js',
        path: '/'
    },

    resolve: {
        extensions: [ ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx/, use: ['babel-loader', 'ts-loader'] },
            { test: /\.less/, use: ["style-loader", "css-loader", "less-loader"]},
            { test: /\.css/, use: ["style-loader", "css-loader" ]}
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'app', 'vendor' ]
        }), 

        new CheckerPlugin( ),
    
        new HtmlWebpackPlugin({
            template: './web/index.html'
        }),

        new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify("develop")
         }
       })

    ]

}