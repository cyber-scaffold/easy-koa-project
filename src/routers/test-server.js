const Router = require("@koa/router");

const router = new Router();

router.get("/test", async (context) => {
  return "test-server"
});

module.exports = router.routes();