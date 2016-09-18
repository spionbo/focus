var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,CleanPlugin = require('clean-webpack-plugin')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin")
    ,CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
    ,debug = process.env.NODE_ENV === 'dev'
    ,local = 'http://10.66.5.205:801/focus20160913_%E6%96%B0%E6%97%B6%E4%BB%A3/app/build/'
    ,http = 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160913/app/';

module.exports = {
    entry: './src/main.js',   
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: debug ? local : http,   
        filename: "[name].js",
        chunkFilename:  '[name]_chunk.js',
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            //{ test: /\.css$/, loader: "style-loader!css-loader"},
           // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //{ test: /\.sass$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
            { test: /\.sass$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
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
    ,resolve : {
        extensions: ['', '.js', '.json', '.scss','.sass','.vue'],
        alias : {
          publicCss : '../../../common/css/global.css', 
          T : '../../../common/js/global.js', 
          callApp : '../../../common/js/callApp.js', 
          nativeShare : '../../../common/js/nativeShare.js', 
          wechatShare : '../../../common/js/wechat-share.js', 
        }
    }
    ,plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.tpl.html'),  
        inject: true,
        filename: 'index.html',
        minify : {
          removeComments:true,    //移除HTML中的注释
          collapseWhitespace:false    //删除空白符与换行符
        }
      }),
      new webpack.ProvidePlugin({
        Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
        $ : 'webpack-zepto'
      }),
      new ExtractTextPlugin('./[id][name].css',{
          allChunks : true
      }),
    ]
};

if (!debug) {
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

    new webpack.optimize.OccurenceOrderPlugin(),
    new CleanPlugin('./build')

  ])

}else{
  module.exports.devtool = '#source-map'
}