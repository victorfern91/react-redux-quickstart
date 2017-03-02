const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// plugin configuration
const HTMLConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const codeChunks = new webpack.optimize.CommonsChunkPlugin('vendor');

const webpackConfig = {
  devtool: 'cheap-module-source-map',
  entry: {
    main: './app/index.jsx',
    vendor: ['react', 'react-dom'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // this regex pattern is valid for .js and .jsx files
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [codeChunks, HTMLConfig],
};

if (process.env.NODE_ENV === 'production') {
  // this used to compile React and another libs as production code
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }));
  // uglify code
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }));
}

module.exports = webpackConfig;
