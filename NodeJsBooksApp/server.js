var http = require('http')
  , koa = require('koa')
  , views = require('koa-views')
  , logger = require('koa-logger')
  , serve = require('koa-static')
  , stylus = require('koa-stylus')
  , bodyParser = require('koa-bodyparser');

var router = require('./api/routes');

var app = koa();

app.use(logger());
app.use(bodyParser());
app.use(serve('./public'));
app.use(stylus('./public'));

app.use(views('views', { map: { html: 'swig' } }));

router(app);

var port = process.env.PORT || 1337;

app.listen(port);
