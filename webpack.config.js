var config = {
   entry: './src/js/main.js',
	
   output: {
      path: __dirname,
      filename: 'app.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-decorators-legacy'],
            }
         }
      ]
   }
}

module.exports = config;