const
  Koa = require('koa'),
  app = new Koa(),
  bodyParser = require('koa-bodyparser'),
  proxy = require('koa-proxy'),
  config = require('./config')();


app.use(proxy({
  host: config.ADMIN_SERVICE,
  match: /^\/admin\/?/
}));

app.use(require('./routes'));

app.use(bodyParser());
app.listen(config.PORT);