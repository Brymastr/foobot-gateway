const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
  ctx.body = '/'
});

router.get('/messages', async ctx => {
  ctx.body = 'messages for current user'
});

router.get('/subscriptions', async ctx => {
  ctx.body = 'subscriptions for current user'
});

module.exports = router.routes();