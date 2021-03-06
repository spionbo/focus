var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',        
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: process.env.NODE_ENV === 'production' ? "http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/" : '',     //用于配置文件发布路径，如CDN或本地服务器
        filename: "[name].js?[hash]",
        crossOriginLoading : 'anonymous'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'url',
              query: {
                limit: 15000,
                name: '[name].[ext]?[hash]'
              }
            },
            {
                "test": /\.js?$/,
                "exclude": /node_modules/,
                "loader": "babel",
                "query": {
                  "presets": [
                    "es2015",
                    "stage-0"
                  ],
                  "plugins": []
                }
              }
        ]

    }
    ,resolue : {
        extensions: ['', '.js', '.json', '.scss','.vue']
    }
    /*,externals : {
      'callApp' : 'window.callApp'
    }*/
    ,plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.tpl.html'),  
        inject: true,
        filename: 'index.html'
      }),
      new webpack.ProvidePlugin({
        Promise: 'imports?this=>global!exports?global.Promise!es6-promise'
      })
    ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),

    new webpack.optimize.OccurenceOrderPlugin()

    // new ExtractTextPlugin('[name].[contenthash:12].css')

  ])

}else{
  module.exports.devtool = '#source-map'
}