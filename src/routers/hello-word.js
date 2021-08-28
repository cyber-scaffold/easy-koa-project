import Router from "@koa/router";

const router = new Router();

router.get("/", async (context) => {
  return "hello words";
});

export default router.routes();