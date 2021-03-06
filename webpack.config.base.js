import fs from 'fs'
import path from 'path';

const nodeModules = fs.readdirSync('node_modules').filter(x => {
  return x !== '.bin' && x !== 'babel-polyfill'
});

export default {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    root: path.resolve('app'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
  plugins: [],
  externals: nodeModules,
};
