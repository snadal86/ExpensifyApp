const path = require('path')

console.log(path.join(__dirname, 'public'))

// entry: './src/app.js',
// entry: './src/z_playground/redux-101.js',
// entry: './src/z_playground/redux-expensify.js',
// entry: './src/z_playground/hoc.js',

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader', 
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
