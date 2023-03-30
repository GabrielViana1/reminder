const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: './src/js/script.js',
        checkTask: './src/js/checkTask.js',
        createTask: './src/js/createTask.js',
        deleteTask: './src/js/deleteTask.js',
        editTask: './src/js/editTask.js',
        loadTask: './src/js/loadTask.js',
        theme: './src/js/theme.js'
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },{
            test: /\.js$/,
            use: ['babel-loader']
          }
        ],
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    }, 
}