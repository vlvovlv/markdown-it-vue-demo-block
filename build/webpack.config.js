const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = {
  mode: 'production',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './lib/demo-show/index.vue',
  },
  output: {
    path: path.resolve(__dirname, '../lib/dist'),
    library: 'DemoShow',
    libraryTarget: 'umd',
    filename: 'demo-show.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.styl(us)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = webpackConfig;
