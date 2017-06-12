const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['zepto','Vue', 'VueRouter']
  },
  output: {
    path: path.join(__dirname, ''),
    filename: 'build/[name].dll.js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]_library'
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
          //Pop : '../../common/js/widgets/pop',
          //global : 'src/common/global'
      }
  },
  plugins: [
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, '', '[name]-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。 
       */
      name: '[name]_library'
    })
  ]
};