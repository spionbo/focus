var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,CleanPlugin = require('clean-webpack-plugin')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin")
    ,CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
    ,build =  process.env.NODE_ENV === 'build'
    ,local = ''
    ,http = 'http://192.168.0.245:8888/activity/app/newYear/'//http://www.duorongcf.com/activity/app/newYear/';

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: build ? http : local,
        filename: "[name].js?name=[hash]",
        chunkFilename:  '[name]_chunk.js?name=[hash]',
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            //{ test: /\.css$/, loader: "style-loader!css-loader"},
           // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //{ test: /\.sass$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(htm|html)$/i,loader: 'html-withimg-loader' },
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
        extensions: ['', '.js', '.json', '.scss','.sass','.vue','.jsx','.css'],
        alias : {
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
        //Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
        $ : 'webpack-zepto',
        Vue : 'Vue'
        //globalCss : '../../common/css/style/global.scss'
        //React : 'react',
        //ReactDOM : 'react-dom'
      }),
      new ExtractTextPlugin('./[id][name].css?[hash]',{
          allChunks : true
      })
    ]
};

if (build) {
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