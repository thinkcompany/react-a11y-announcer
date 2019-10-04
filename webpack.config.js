const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const EXAMPLES_DIR = path.resolve(__dirname, 'examples');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce((entries, dir) => {
    if (dir === 'build') {
      return entries;
    }

    const isDraft = dir.charAt(0) === '_';
    if (!isDraft && isDirectory(path.join(EXAMPLES_DIR, dir)))
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');

    return entries;
  }, {});
}

module.exports = {

  mode: 'development',

  entry: buildEntries(),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: EXAMPLES_DIR + '/__build__',
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    contentBase: 'examples/',
    port: 8080,
    disableHostCheck: true,
    inline: false,
    hot: true
  }

};

///--inline --hot --content-base examples/
