// We require the webpack package and the resolve functionality from the path package at the top of the file.
// Resolving a path is the act of providing a dedicated tool (like the path library) the name of a directory or file, and relying upon it to find the exact path.

// This allows us to say things like resolve('file_name') instead of ./../much/longer/filepath/to/the/file_name.js
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
// Within the module we declare an entry specifying the file where the bundling process starts. Similar to the main.ts file in Angular, we specify index.jsx as our entry point.

// An entry point is the file responsible for instructing the module bundler how to build the application. The browser loads this file first.
  entry: [
//     react-hot-loader/patch activates hot module replacement.
// webpack-dev-server/client?http: localhost:8080' connects to the necessary endpoint (our project will be served at localhost:8080).
// webpack/hot/only-dev-server instructs Webpack to bundle code, then provide the bundle to the development server
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    // filename determines the name of the file containing our bundled code. We've named ours app.bundle.js.
    // In summary, this section instructs Webpack to place bundled code in build/app.bundle.js.
   filename: 'app.bundle.js',
   // path: points to a directory called build. This is where our transpiled, bundled source code will reside. __dirname refers to the current directory webpack.config.js is located in. We call resolve() and pass the name of the directory we're attempting to locate (build) and __dirname. The path library then resolves the exact file path for us.
   path: resolve(__dirname, 'build'),
   // This specifies where hot-reloaded modules should be loaded. / is the default publicPath configuration for single page applications. That means HMR would still work without this line. However, we include it to denote we're actively choosing the default path, /
   publicPath: '/'
 },

 resolve: {
   // The resolve option tells Webpack to locate files with specific extensions. By specifying the extensions here, we can later import files without explicitly listing an extension in their import statement. (ie,: require(myComponent) instead of: require(myComponent.jsx)). This is certainly not mandatory, but a helpful feature
   extensions: ['.js', '.jsx']
 },
// devtool tells Webpack how to communicate errors
 devtool: '#source-map',
 // source-map is not the only devtool option. Check out the Wepack documentation on devtool to see what else is available.




 devServer: {
//    hot: true enables HMR on the local server.
// contentBase points to the source code it will serve in the browser.
// publicPath specifies where hot-reloaded modules should be loaded. This should always match the publicPath option in output.
   hot: true,
   contentBase: resolve(__dirname, 'build'),
   publicPath: '/'
 },

// we need to configure Webpack and Babel to work together. We need Webpack to invoke Babel during the bundling process to transpile our JSX into ES5. We do this by adding more configurations to webpack.config.js:

// * test takes a RegEx expression indicating which files the loader should transform.
// * loader details which loader tool will transform these files
// * excluded outlines which files, if any, should not be transformed. We don't need to transform our npm dependencies so we list node_modules here.
// * options tells Babel what kind of project we’re working with (React), and what version of JavaScript code should be transpiled to (ES5).
// * In plain English, the configuration above reads “Hey Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project. You can find the JSX in files with a .jsx extension. But ignore .jsx files in the nodemodules directory.”_

 module: {
   rules: [
     {
       test: /\.jsx?$/,
       enforce: "pre",
       loader: "eslint-loader",
       exclude: /node_modules/,
       options: {
         emitWarning: true,
         configFile: "./.eslintrc.json"
       }
      },
     {
       test: /\.jsx?$/,
       loader: "babel-loader",
       exclude: /node_modules/,
       options: {
         presets: [
           // We've added modules: false to presets. Babel organizes code into a format called CommonJS by default. But CommonJS doesn't support hot module replacement. This configuration turns off CommonJS formatting.
           ["es2015", {"modules": false}],
           "react",
         ],
         plugins: [
           "react-hot-loader/babel",
           "styled-jsx/babel"
         ]
       }
     }
   ]
 },
//  The first line we've added to plugins enables HMR globally.
// The second prints HMR status updates to the console. These are both additional plugins from the react-hot-loader/babel plugin we just added to our rules.
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
// template tells the plugin which file to use as a template when creating an index.html in the build directory.
// appMountId provides the name of our HTML's root DOM node. As discussed in Creating and Rendering Basic Elements, a root DOM node is the area of a page React manages.
// title sets our new indexs <title> tags.
// filename is the location we're placing our programmatically-generated index.html.
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'React Help Queue',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ]
};
