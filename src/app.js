import Koa from "koa";
import cors from "@koa/cors";
import response_middleware from "@/middlewares/response_middleware";

import hello_word from "@/routers/hello-word";
import test_server from "@/routers/test-server";
import upload from "@/routers/upload";

const server = new Koa();

server.use(cors());
server.use(response_middleware);
server.use(hello_word);
server.use(test_server);
server.use(upload);

server.listen(8080, () => {
  console.log("server run at port 8080");
});
