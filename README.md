#REACT FROM SCRATCH


STEP1:  make a package.json file 
		 {
			  "name": "React-From-Scratch"
		 }

STEP2:  Setting up webpack- transpiles and bundles JavaScript files, compile SASS or PostCSS, optimize images 
		 
		 ->npm install --save-dev webpack
		 ->create src/js/app.js
		 		console.log('Hello world!');
		 ->./node_modules/webpack/bin/webpack.js ./src/js/app.js --output-filename ./dist/app.bundle.js 
		 		This command runs webpack using our app.js as entry and outputs the result to the dist folder
		 -> create webpack.config.js in root folder
		 		// We are using node's native package 'path'
				// https://nodejs.org/api/path.html
				const path = require('path');

				// Constant with our paths
				const paths = {
				  DIST: path.resolve(__dirname, 'dist'),
				  JS: path.resolve(__dirname, 'src/js'),
				};

				// Webpack configuration
				module.exports = {
				  entry: path.join(paths.JS, 'app.js'),
				  output: {
				    path: paths.DIST,
				    filename: 'app.bundle.js'
				  },
				};
		->By default webpack looks for webpack.config.js and reads config from it.
		->./node_modules/webpack/bin/webpack.js

		-> add script section in package.json
			"scripts": {
			    "build": "webpack"
			  }

		-> npm run build
			Npm tasks allow us not to type full path to the package binary every time.It searches for locally installed packages in the project’s node_modules folder.