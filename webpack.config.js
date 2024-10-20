const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.join(__dirname, '.', 'src');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [srcPath],
        options: {
          // eslint-disable-next-line global-require
          formatter: require('eslint-friendly-formatter'),
          emitWarning: false,
        },
      },
      {
        test: /\.js$/,
        include: [srcPath],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
