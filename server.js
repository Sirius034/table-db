const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');
const mysqlRouter = require('./src/server/routes/mysql'); 

const app = express();
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.get('/getData', mysqlRouter);
app.get('/getData/query', mysqlRouter);

app.listen(3000, () => {
    console.log('Сервер запущен');
})
