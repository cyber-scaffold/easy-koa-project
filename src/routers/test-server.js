import Router from "@koa/router";

const router = new Router();

router.get("/test", async (context) => {
  return "test-server"
});

export default router.routes();