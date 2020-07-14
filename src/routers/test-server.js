const Router = require("@koa/router");

const router = new Router();

router.get("/test", async (context) => {
  context.response.body = "test-server"
});

module.exports = router;