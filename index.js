const
  Koa = require('koa'),
  app = new Koa(),
  bodyParser = require('koa-bodyparser'),
  proxy = require('koa-proxy');

const PORT = 3000;
const adminHost = 'http://localhost:3001';

app.use(proxy({
  host: adminHost,
  match: /^\/admin\/?/
}));

app.use(require('./routes'));

app.use(bodyParser());
app.listen(PORT);