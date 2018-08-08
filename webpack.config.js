// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import our plugin -> ADDED 3rd time

const ExtractTextPlugin = require('extract-text-webpack-plugin'); //  -> ADDED 5th time

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'), // source folder path -> ADDED in 2nd time
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  // Tell webpack to use html plugin -> ADDED in 3rd time
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    // CSS will be extracted to this bundle file -> ADDED in 5th time
    new ExtractTextPlugin('style.bundle.css'), 
  ],
  	//Dev server configuration -> REMOVED in 3rd time
   // Dev server configuration -> ADDED in 2nd time
  // Now it uses our "src" folder as a starting point
 	// devServer: {
    //	contentBase: paths.SRC,
	//	  },

  // Loaders configuration -> ADDED in 4th time
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
       // CSS loader to CSS files -> ADDED in 5th time
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      }
    ],
  },
  // resolve file extenion -> ADDED in 4th time
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};