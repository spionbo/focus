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
        //require('postcss-partial-import'),
        require('precss'),
        /*require('postcss-sprites')({
            retina: true,//支持retina，可以实现合并不同比例图片
            verbose: true,
            spritePath: './build/images',//雪碧图合并后存放地址
            stylesheetPath: './images',
           // basePath: './',
            filterBy: function (image) {
                //过滤一些不需要合并的图片，返回值是一个promise，默认有一个exist的filter
                //
                if (image.url.indexOf('/images/sprites/') === -1) {
                    return Promise.reject();
                }
                return Promise.resolve();
            },
            groupBy: function (image) {
                //将图片分组，可以实现按照文件夹生成雪碧图
                return spritesGroupBy(image);
            },
            hooks: {
                onUpdateRule: function (rule, comment, image) {
                    //更新生成后的规则，这里主要是改变了生成后的url访问路径
                    return spritesOnUpdateRule(true, rule, comment, image);
                },
                onSaveSpritesheet: function(opts, groups) {
                    return spritesOnSaveSpritesheet(true, opts, groups);
                }
            }
        }),*/
        /*require('postcss-simple-vars'),
        require('postcss-define-property'),
        require('postcss-nested'),
        require('postcss-mixins'),*/
        //require('postcss-scss'),
        // require('postcss-each'),
        // require('postcss-for'),
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
        'VueRouter' : 'window.VueRouter',
        'Vuex' : 'window.Vuex',
        '$' : 'window.$',
        //'Promise' : 'window.Promise'
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
            /*{
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },*/
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ // 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: /node_modules/,
                options: {
                    loaders: {
                        /*sass: ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: [
                                "css-loader",
                                "sass-loader",
                                'postcss-loader',
                            ]
                        }),*/
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
            Vuex: 'src/plug/vuex',
            VueRouter: 'src/plug/vue-router.min',
            global: 'src/common/global'
        },
        extensions: ['.js', '.json', '.scss', '.sass', '.vue', '.jsx', '.css'],
    },
    plugins: [
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
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.ProvidePlugin({
            //VueRouter: 'VueRouter',
            //Vuex: 'Vuex',
            Promise: 'es6-promise-promise',
            T: 'global'
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