// import { Configuration } from 'webpack'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
/**
 * @type { Configuration }
 */
const config = {
  // 开发模式
  mode: 'development',

  // 本地服务配置
  devServer: {
    // 静态文件目录
    static: path.resolve(__dirname, 'public'),
    // 是否开启压缩 gzip
    compress: true,
    // 端口
    port: 8080,
    // 服务启动是否自动打开默认浏览器
    open: false
  },

  // 入口文件配置
  entry: './src/index.js',

  // 出口文件配置
  output: {
    // 文件名
    filename: 'bundle.js',
    // 位置
    path: path.join(__dirname, 'dist')
  },

  // loader配置
  module: {
    // 不需要解析的文件
    // noParse: '',
    // 配置规则
    rules: [
      // 处理样式文件
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',/*html文件头部加入style标签*/
          'css-loader', /*css加入到打包文件中*/
          'postcss-loader', /*处理css的兼容性问题*/
          'sass-loader' //处理.scss文件
        ]
      },
      // 处理图片文件
      {
        test: /\.(jpe?g|gif|png)$/i,
        type: 'asset',
        generator: {
          filename: '[name].[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 //超过50kb不转 base64
          }
        }
      },
      // 处理字体文件
      {
        test: /\.(woff2?|ett|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: '[name].[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 //超过50kb不转 base64
          }
        }
      },
      // js文件处理
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'thread-loader', // 开启多进程打包
            options: {
              worker: 3,
            }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 启用缓存
              presets: [
                '@babel/preset-env'
              ],
            }
          }
        ]
      }
    ]
  },
  
  // 插件配置
  plugins: [
    // html模板配置， 自动引入打包后的文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 打包前，清除目录下的文件
    new CleanWebpackPlugin(),
    // 提取css到单独文件中
    new MiniCssExtractPlugin({
      filename: '[name].[hash.8].css'
    }),
    // 清除用不到的 CSS
    new PurgecssWebpackPlugin({
      paths:  glob.sync(`${path.join(__dirname, 'src').src}/**/*`, {nodir: true})
    })
  ],

  resolve: {
    // 配置别名
    alias: {
      '@': path.join(__dirname, 'src')
    },
    // 引入模块时不带扩展名
    extensions: ['.js', '.vue', '.ts'],

    // 解析模块时应该搜索的目录
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  // 从输出的 bundle 中排除依赖
  externals: {
    jquery: '$'
  },

  // 通过配置 cache 缓存生成的 webpack 模块和 chunk，来改善构建速度
  cache: {
    type: 'filesystem',
  },

  optimization: {
    minimize: true,
    minimizer: [
      // css压缩配置
      new OptimizeCssAssetsWebpackPlugin({}),
      // js压缩 默认启动js压缩，可不配置
      new TerserWebpackPlugin({})
    ],
    splitChunks: {
      chunks: 'async', // 有效值为 `all`，`async` 和 `initial`
      minSize: 20000, // 生成 chunk 的最小体积（≈ 20kb)
      minRemainingSize: 0, // 确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
      minChunks: 1, // 拆分前必须共享模块的最小 chunks 数。
      maxAsyncRequests: 30, // 最大的按需(异步)加载次数
      maxInitialRequests: 30, // 打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件）
      enforceSizeThreshold: 50000,
      cacheGroups: { // 配置提取模块的方案
        defaultVendors: {
          test: /[\/]node_modules[\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
  }
}

module.exports = (env, argv) => {
  console.log(argv.mode)

  return config
}
