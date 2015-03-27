var webpack = require('webpack');
module.exports = {
  context : __dirname,
  entry : [
    './addons.expose.build'
  ],
  output : {
    path: __dirname,
    filename: '../yako.addons.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
