var path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
      //common:['../node_modules/jquery/dist/jquery.js','./js/utility.js'],
      index: "./js/index.js",
      product: "./js/product.js",
      helloreact: "./js/helloreact.js"
    },
    plugins:[
      new webpack.optimize.CommonsChunkPlugin({
          name: 'commons',
          filename: 'commons.js',
          minChunks: 2
      })
    ],
    output: {
        path: path.resolve(__dirname, 'dist') + '/js',
        filename: '[name].bundle.js'
        //,publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};