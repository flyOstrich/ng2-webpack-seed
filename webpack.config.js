var path = require('path');
module.exports =  {
   entry:{
       main:path.join(__dirname,'app','app.ts')
   },
   output:{
       path:path.join(__dirname,'app'),
       filename:"[name].js"
   },
   module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  }
}