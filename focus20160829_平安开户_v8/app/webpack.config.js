var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,CleanPlugin = require('clean-webpack-plugin')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin")
    //,CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
    ,debug = process.env.NODE_ENV === 'dev'
    ,local = 'http://10.66.5.205:801/focus20160829_%E5%B9%B3%E5%AE%89%E5%BC%80%E6%88%B7_v8/app/build/'
    ,http = 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160829/app/';

module.exports = {
    entry: './src/main.js',        
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: debug ? local : http,     //用于配置文件发布路径，如CDN或本地服务器
        filename: "[name].js",
        // crossOriginLoading : 'anonymous',
        chunkFilename:  '[name]_chunk.js',
       /* pathinfo : 'true',
        changeOrigin: 'true',
        target: debug ? local : http*/
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
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
    ,resolve : {
        extensions: ['', '.js', '.json', '.scss','.vue'],
       // target : 'async-node'
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
        Promise: 'imports?this=>global!exports?global.Promise!es6-promise'
      }),
      new ExtractTextPlugin('./[id][name].css',{
          allChunks : true
      }),
      /*new webpack.optimize.CommonsChunkPlugin({
          name:      'main', 
          children:  true, 
          minChunks: 2, 
      }),*/
      //提供全局的变量，在模块中使用无需用require引入
      /*new webpack.ProvidePlugin({
          $: "webpack-zepto",
          // nie: "nie"
      }),
      //将公共代码抽离出来合并为一个文件
      new CommonsChunkPlugin('common.js')*/
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