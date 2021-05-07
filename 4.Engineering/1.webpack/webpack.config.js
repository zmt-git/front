/*
 * @Description: 
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-04-07 15:00:35
 * @LastEditors: ZMT
 * @LastEditTime: 2021-04-20 14:50:19
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
                  // 环境变量使用， 必须使用函数
module.exports = (env) => {
  return {
    mode: 'development', // 模式
  
    entry:{ // 入口文件（多入口文件，配置optimization的runtimeChunk: single）
      index: './src/index.js',
      // test: './src/test.js'
      // home: ['./home.js', './home.scss'], 多入口，是插件MiniCssExtractPlugin独立输出
      // account: ['./account.js', './account.scss'],
    },
  
    devServer: { // 开发环境
      contentBase: './dist', //server指向dist目录
      hot: true // 模块热替换
    },
  
    output: { // 输出管理
      filename: '[name].[contenthash].js', // 打包输出文件名【name】, hash[contenthash] 文件内容变化，hash变化
      path: path.resolve(__dirname, 'dist'), // 打包输出到dist目录
      clean: true, // 打包清理dist目录
      // library: 'webpackTest' // 配置项暴露从入口导出的内容
      library: { // 配置项暴露从入口导出的内容
        name: 'webpackNumbers', // 名称
        type: 'umd', // 类型
      },
      pathinfo: false, // 输出结果不携带路径信息 ，减少圾回收性能压力
      publicPath: '/'
    },
  
    devtool: 'inline-source-map', // 方便调试控制台，出现错误代码方便调试
  
    plugins: [ // 插件使用
      new HtmlWebpackPlugin({
        title: 'development' // 修改html，title内容
      }),
      new webpack.ProvidePlugin({ // 预置全局变量
        // _: 'lodash',
        join: ['lodash', 'join'] // 暴露出某个模块中单个导出，通过配置一个“数组路径”（例如 [module, child, ...children?]
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      }),

      new MiniCssExtractPlugin({ // 
        file: '[name].css'
      })
    ],
  
    module: { // 配置loader
      rules: [ // css loader ,loader的执行顺序逆向的
        {
          test: /\.css$/i, // 正则匹配文件后缀名
          include: path.resolve(__dirname, 'src'), // loader只使用于src的文件
          use: ['style-loader', 'css-loader'] // 使用的loader
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/i,
          type: 'asset/resource',
          exclude: /node_modules/ // loader不做用于node_modules内地文件
        },
        // {
        //   test: require.resolve('./src/index.js'), // 配置index.js中this指向window
        //   use: 'imports-loader?wrapper=window',
        // }
      ]
    },
  
    optimization: {
      runtimeChunk: 'single',
      moduleIds: 'deterministic', // 固定moduleId，hash不改变
      splitChunks: { 
        cacheGroups: { //node_modules 代码打包至vendor中 缓存起来（node_modules中的代码，一般情况下不会去修改）
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },
  
    externals: { // 外部化
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  }
}