const Router = require("@koa/router");

const router = new Router();

router.get("/", async (context) => {
  context.response.body = "hello words"
});

module.exports = router;