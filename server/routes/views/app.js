require('dotenv').config();

const fs = require('fs');

const path = require('path');

const express = require('express');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../../webpack/webpack.config');

const routes = (app) => {
  if (process.env === 'development') {
    const compiler = webpack(config);

    compiler.plugin('done', () => {
      console.info('Webpack finished compiling.');
    });

    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
      },
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    app.get('/*', (req, res) => {
      const content = middleware.fileSystem.readFileSync(
        path.join(__dirname, '../../../dist/index.html')
      );

      if (req.user) {
        // eslint-disable-next-line no-underscore-dangle
        res.cookie('id', req.user._id.toString(), { path: '/' });
      } else {
        res.clearCookie('id', { path: '/' });
      }

      res.set('Content-Type', 'text/html');
      res.send(content);
    });
  } else {
    app.use('/dist', express.static(path.join(__dirname, '../../../dist')));
    const content = fs.readFileSync(path.join(__dirname, '../../../dist/index.html'), 'utf8');

    app.get('/*', (req, res) => {
      if (req.user) {
        // eslint-disable-next-line no-underscore-dangle
        res.cookie('id', req.user._id.toString(), { path: '/' });
      } else {
        res.clearCookie('id', { path: '/' });
      }
      res.set('Content-Type', 'text/html');
      res.send(content);
    });
  }
};

module.exports = routes;
