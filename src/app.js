import Koa from "koa";
import path from "path";
import cors from "@koa/cors";
import file_static from "koa-static";
import bodyParser from "koa-bodyparser";
import response_middleware from "@/middlewares/response_middleware";

import look_env_value from "@/routers/look_env_value";
import hello_word from "@/routers/hello-word";
import test_server from "@/routers/test-server";
import upload from "@/routers/upload";

/**
 * @apiPermission none
 * @apiDefine responseSuccess
 * @apiSuccess {String} code 业务状态码 成功:0 失败:10000
 * @apiSuccess {String} status 业务状态 成功:success 失败:ErrorType
 * @apiSuccess {Number} message 状态信息 成功:"ok" 失败:ErrorDescriptiong
 **/

const server = new Koa();
const static_file_path=path.resolve(__dirname,"../statics/");

server.use(cors());
server.use(bodyParser());
server.use(file_static(static_file_path));

server.use(response_middleware);

server.use(look_env_value);
server.use(hello_word);
server.use(test_server);
server.use(upload);

server.listen(9000, () => {
  console.log("server run at port 9000");
});
