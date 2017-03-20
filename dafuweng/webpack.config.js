var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,ImageminPlugin = require('imagemin-webpack-plugin')
    ,CleanPlugin = require('clean-webpack-plugin')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin")
    ,CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
    ,build =  process.env.NODE_ENV === 'build'
    ,local = ''
    ,http = ''; 


const CSS = new ExtractTextPlugin('stylesheets/[name].less');
const SASS = new ExtractTextPlugin('stylesheets/[name].sass');

module.exports = {
    entry: { 
        app : './src/main.js',
        vendor : ["Vue", "VueRouter",'zepto','global']
    },
    /*externals : {
        '$' : 'zepto-webpack',
        'Vue' : 'Vue',
        'VueRouter' : 'VueRouter',
    },*/
    output: {
        path: path.join(__dirname, build?'/ftp':"/build"),
        publicPath: build ? http : local,
        filename: "[name].js?name=[hash]",
        chunkFilename:  '[name]_chunk.js?name=[hash]',
    },
    module: {
       // noParse : ['./plug/'],
        rules :[
            /*{
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },*/
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: "url-loader?limit=8192&name=[path][name].[ext]?[hash:8]",//,'image-webpack-loader',"url-loader"
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "babel-loader",
                include : [// 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: function(path) {
                  // 路径中含有 node_modules 的就不去解析。
                  var isNpmModule = !!path.match(/node_modules/);
                  return isNpmModule;
                },
                options : {
                    compact : false
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include : [// 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: function(path) {
                  // 路径中含有 node_modules 的就不去解析。
                  var isNpmModule = !!path.match(/node_modules/);
                  return isNpmModule;
                },
                options : {
                    loaders: {
                        sass: ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: [
                               // "style-loader",
                                "css-loader",
                                "sass-loader"
                            ]
                        })
                    }
                }
            }
        ],
    },
    resolve:{
        //root : path.resolve('src'),
        modules: [
            path.join(__dirname, "/"),
            "node_modules"
        ],
        alias : {
            zepto : 'src/plug/zepto' , 
            Vue : 'src/plug/vue.min' , 
            VueRouter : 'src/plug/vue-router.min' ,
            Pop : '../../common/js/widgets/pop',
            global : 'src/common/global'
        },
        extensions: ['.js', '.json', '.scss','.sass','.vue','.jsx','.css'],
    },
    plugins: [
        /*new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor-manifest.json')
        }),*/
        // ----在这里追加----
        new HtmlWebpackPlugin({
            template: path.resolve('./src/', 'index.html'),  
            inject: true,
            filename: 'index.html',
            minify : {
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        new webpack.ProvidePlugin({
            //Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            //'Promise': 'exports?global.Promise!es6-promise',
            Promise: 'es6-promise-promise',
            $ : 'zepto',
            Vue : 'Vue',
            VueRouter : 'VueRouter',
            Pop : 'Pop',
            T : 'global'
            //React : 'react',
            //ReactDOM : 'react-dom'
        }),
        new ExtractTextPlugin({
            filename : './[id][name].css?[hash]',
            allChunks : true
        }),
        //new ImageminWebpackPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        new CommonsChunkPlugin({
            name: 'vendor', 
            filename : 'global.js?[hash:8]',
            minChunks : Infinity
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

    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanPlugin('./ftp')

  ])

}else{
  module.exports.devtool = '#source-map'
}