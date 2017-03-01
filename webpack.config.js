var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'babel-polyfill',
      './src/index.jsx'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: './dist/bundle.js',
    },
    module: {
      loaders: [{
	test: /.jsx?$/,
        exclude: /node_modules/,
	loader: 'babel-loader',
	query: {
	  plugins: ['transform-runtime'],
	  presets: ['es2015', 'stage-0', 'react'],
	}
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "eslint",
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      }
      ]
    },
    eslint: {
        configFile: path.join(__dirname, '.eslintrc.js'),
        useEslintrc: false
    },
//    plugins: [
//    new webpack.optimize.UglifyJsPlugin({
//            compress: {
//                screw_ie8: true, // React doesn't support IE8 anyway
//               warnings: true
//            },
//            mangle: {
//                screw_ie8: true
//            },
//            output: {
//                comments: false,
//                screw_ie8: true
//            }
//       })],  
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
