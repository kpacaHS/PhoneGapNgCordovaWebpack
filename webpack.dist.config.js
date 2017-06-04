var webpack = require('webpack');

module.exports = {
    entry: {
        polyfill: ['./www/polyfill.ts'],
        //app: ['babel-polyfill', './www/app/app.js']
        //app: ['babel-polyfill','./www/app2/main.ts']
        //app1: ['./www/app/app.js'],
        app1: ['./www/app2/app.module.ts']
        //app1: ['./www/app/app.js', './www/app2/main.ts'],
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/, /plugins/, /platforms/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.styl$/, loader: 'style!css!stylus' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: './www/dist'
    },
    plugins: [
        /* probably wanna put this in a separate webpack file for prod.
            new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })*/
        //new CheckerPlugin()
    ]
};
