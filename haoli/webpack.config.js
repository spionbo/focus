var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    build = process.env.NODE_ENV === 'build',
    local = '',
    http = '';
const postcss = {
    plugins: [
        require('postcss-cssnext'),
        //require('autoprefixer'),
        require('postcss-pxtorem')({
            replace: true,
            propList: ['font', 'font-size', 'line-height', 'box-shadow', 'letter-spacing', 'perspective', 'transform', '-webkit-perspective', '-webkit-transform', 'max-width', 'min-width', 'max-height', 'min-height', 'margin', 'margin-left', 'margin-right', 'margin-bottom', 'margin-top', 'padding', 'padding-left', 'padding-right', 'padding-bottom', 'padding-top', 'border', 'border-left', 'border-right', 'border-bottom', 'border-top', 'width', 'height', 'background-position', 
                'top','left','bottom','right',
                'border-radius'],
        }),
        require('postcss-assets')({
            loadPaths: ['images/**'],
            basePath: __dirname + '/build',
            //baseUrl: 'http://localhost/activity/app/guhuaDafuweng/build/',
            relative: true,
            cachebuster: true
        }),
        require('postcss-extend'),
        require('precss'),
    ],
    options: {
        //parser: sugarss // use sugarss parser
    }
};
module.exports = {
    entry: {
        app: './src/main.js'
    },
    externals : {
        'Vue' : 'window.Vue',
        '$' : 'window.$',
    },
    output: {
        path: path.join(__dirname, build ? '/ftp' : "/build"),
        publicPath: build ? http : local,
        filename: "[name].js?name=[hash]",
        chunkFilename: '[name]_chunk.js?name=[hash]',
    },
    module: {
        // noParse : ['./plug/'],
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", 'postcss-loader', ]
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "sass-loader",
                        //'postcss-loader',
                    ]
                })
            }, {
                test: /\.js$/,
                enforce: "pre",
                loader: "babel-loader",
                include: [ // 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: function(path) {
                    // 路径中含有 node_modules 的就不去解析。
                    var isNpmModule = !!path.match(/node_modules/);
                    return isNpmModule;
                },
                options: {
                    compact: false
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ // 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: /node_modules/,
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ["css-loader", 'postcss-loader'],
                            fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000, //图片大小超过0.5kb, 不压缩入 bundle 
                        name: 'images/[name].[ext]?[hash:8]' //图片输出路径
                    }
                }]
            },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, "/"), "node_modules"
        ],
        alias: {
            global: 'src/common/global'
        },
        extensions: ['.js', '.json', '.scss', '.sass', '.vue', '.jsx', '.css'],
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../common/vendor-manifest.json')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: false,
            options: {
                postcss: postcss,
                vue: { // 使用用户自定义插件
                    postcss: postcss,
                }
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/', 'index.html'),
            inject: true,
            filename: 'index.html',
            minify: {
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise',
            T: 'global',
        }),
        new ExtractTextPlugin({
            filename: './[id][name].css?[hash]',
            allChunks: true
        }),
        //new ImageminWebpackPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        /*new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js?[hash:8]',
            minChunks: Infinity
        }),*/
        /*new CommonsChunkPlugin({
            name: ['comon'],
            filename: 'comon.js?[hash:8]',
            minChunks: Infinity
        }),*/
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
} else {
    module.exports.devtool = '#source-map'
}