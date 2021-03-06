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

STEP 3: Setting up webpack dev server - To be able to open our application in a browser, we’ll need a server. Webpack already provides us with a dev server.

		-> npm install --save-dev webpack-dev-server
			 It will server our files during development and also it can enable us to use hot module reload.
		-> in package.json add
			 "scripts": {
			    "dev": "webpack-dev-server",
			    "build": "webpack"
			  }
		-> npm run dev
		-> http://localhost:8080. Now it will just list our project’s files.

STEP4: create an index.html in the src folder
STEP5: update webpack.config.js


Every time we change webpack config we need to restart webpack (or webpack dev server).
Restart npm run dev and visit http://localhost:8080, it will just show a blank page. No signs of our JavaScript. To automatically inject <script> tags with our bundled application we’ll use html-webpack-plugin.

STEP6: HTML Webpack Plugin -simplifies creation of HTML files to serve your webpack bundles.

		->npm install --save-dev html-webpack-plugin
		->activate it in webpack.config.js. 
			Require it and add it to the plugins section of the config
		->restart dev task, we’ll be able to see Hello world! in the console.

STEP7: Babel setup -Babel takes modern JavaScript and transpiles it - converts it to the old version of 
					JavaScript that can be executed in the browsers that don’t support modern JavaScript
				    standards.

				    -> npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
				    		install the above four packages

				    -> create .babelrc file  // Babel has this default config file
				    	{
						  "presets": ["env", "react"]
						}
					-> This will tell Babel to use two presets we just installed.

					-> update webpack.config.js to use Babel loader for .js and .jsx files.

STEP8: REACT setup

		->npm install --save react react-dom
		-> modify index.html
			<div id="app"></div>
		->modify app.js with react component

STEP9: CSS setup

		->Create src/css folder and a simple style.css in it.

		->npm install --save-dev css-loader
				To add this CSS file to the app, let's use css-loader.
				CSS loader needs to write loaded CSS code to either style tag in the head or external stylesheet file. If you want to write it to the style tag you should use style-loader.

		->npm install --save-dev extract-text-webpack-plugin
			let's extract it to the external file by using extract-text-webpack-plugin. HTML webpack plugin, that we already set, will add css file to index.html for us.

		NOTE: if you are using webpack v4.x you’ll need to install extract-text-webpack-plugin@next which is 
				webpack 4 compatible.

		-> import our CSS in app.js

		-> update webpack config to use css-loader for CSS files

STEP10: file-loader setup - handles files - images, SVGs, fonts, videos or anything else you need.

		->create /src/assets/ folder
		-> npm install --save-dev file-loader
		-> import and use image in app.js
		->update webpack config 