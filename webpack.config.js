var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var EXAMPLES_DIR = path.resolve(__dirname, 'examples');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    var isDraft = dir.charAt(0) === '_';

    if (dir === 'build')
      return entries;

    if (!isDraft && isDirectory(path.join(EXAMPLES_DIR, dir)))
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');

    return entries;
  }, {});
}

module.exports = {

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
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader'
        }
        }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'shared', minChunks: Infinity})
  ]

};
