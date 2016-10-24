var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,CleanPlugin = require('clean-webpack-plugin')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin")
    ,CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
    ,build =  process.env.NODE_ENV === 'build'
    ,build1 =  process.env.NODE_ENV === 'build1'
    ,dev = process.env.NODE_ENV === 'dev' 
    ,dev1 = process.env.NODE_ENV === 'dev1'
    ,debug = dev || dev1
    ,demo = (build || dev)
    ,local = ''
    ,http = 'http://i0.jrjimg.cn/zqt-m/webview/transaction/firm/';

module.exports = {
    entry: demo ? ['./src/main.js'] : {totalRanking:'./src/totalRanking.js'},   
   //entry: {totalRanking:'./src/totalRanking/app.jsx'},   
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: debug ? local : http,   
        filename: "[name].js?name=[hash]",
        chunkFilename:  '[name]_chunk.js?name=[hash]',
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
                "test": /\.jsx?$/,
                "exclude": /node_modules/,
                "loader": "babel",
                "query": {
                  "presets": [
                    "react",
                    "es2015",
                    "stage-0"
                  ],
                  "plugins": [
                    "react-html-attrs"
                  ]
                }
            },
            {
                "test": /\.js?$/,
                "exclude": /node_modules/,
                "loader": "babel",
                "query": {
                  "presets": [
                    "react",
                    "es2015",
                    "stage-0"
                  ],
                  "plugins": [
                    "react-html-attrs"
                  ]
                }
            }
        ]

    }
    ,resolve : {
        extensions: ['', '.js', '.json', '.scss','.sass','.vue','.jsx'],
        alias : {
        }
    }
    ,plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.tpl.html'),  
        inject: true,
        filename: demo ? 'index.html' : 'totalRanking.html',
        minify : {
          removeComments:true,    //移除HTML中的注释
          collapseWhitespace:false    //删除空白符与换行符
        }
      }),
      /*new HtmlWebpackPlugin({
        template: path.resolve('src', 'totalRanking.html'),  
        inject: true,
        filename: 'totalRanking.html',
        minify : {
          removeComments:true,    //移除HTML中的注释
          collapseWhitespace:true    //删除空白符与换行符
        },
        "files": {
          "css": [ "./css/app.scss" ],
          "js": [ "./totalRanking/app.jsx"],
          "chunks": {
            "head": {
              "entry": "./totalRanking/app.jsx",
              "css": [ "./css/app.scss" ]
             },
             "main": {
                "entry": "./totalRanking/app.jsx",
                "css": []
             },
          }
        }
      }),*/
      new webpack.ProvidePlugin({
        Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
        $ : 'webpack-zepto',
        React : 'react',
        ReactDOM : 'react-dom'
      }),
      new ExtractTextPlugin('./[id][name].css?[hash]',{
          allChunks : true
      })
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