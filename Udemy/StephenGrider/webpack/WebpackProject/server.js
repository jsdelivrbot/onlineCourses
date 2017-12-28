const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV !== 'production') {
  const WebpackDevMiddleware= require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  app.use(WebpackDevMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
}


app.listen(PORT, () => {
  console.log(`listeing to the port ${PORT}`);
})