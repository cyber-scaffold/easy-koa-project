import Router from "@koa/router";

const router = new Router();

/**
 * @apiVersion 1.0.0
 * @api {get} /hello_words hello_words
 * @apiGroup api接口分组
 * @apiDescription 接口描述
 * @apiParamExample {json} Request-Example:
   {}
 * @apiUse responseSuccess
 * @apiSuccess {String} data {}
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * "hello words"
 **/
router.get("/api/hello_words", async (context) => {
  return "hello words";
});

export default router.routes();