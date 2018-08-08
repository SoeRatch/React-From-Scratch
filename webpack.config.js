// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import our plugin -> ADDED 3rd time


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
  ],
  	//Dev server configuration -> REMOVED in 3rd time
   // Dev server configuration -> ADDED in 2nd time
  // Now it uses our "src" folder as a starting point
 	// devServer: {
    //	contentBase: paths.SRC,
	//	  },
};