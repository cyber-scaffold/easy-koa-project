import Router from "@koa/router";

const router = new Router();

router.get("/env", async (context) => {
  return process.env.ENV_VALUE;
});

export default router.routes();