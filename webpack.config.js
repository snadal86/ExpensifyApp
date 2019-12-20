const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// console.log(path.join(__dirname, 'public'))

// entry: './src/app.js',
// entry: './src/z_playground/redux-101.js',
// entry: './src/z_playground/redux-expensify.js',
// entry: './src/z_playground/hoc.js',

module.exports = (env) => {

    const isProduction = env === 'production'
    // const CssExtractPlugin = new MiniCssExtractPlugin({ filename: 'styles.css' })

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public','dist'),
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                ],
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: 'styles.css'
            }),
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath:'/dist/'
        }
    }
}

