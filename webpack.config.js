const HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    plugins: [htmlPlugin]
}