const Koa = require("koa");
const cors = require("@koa/cors");
const server = new Koa();


server.use(cors());
server.use(require("@/routers/hello-word").routes());
server.use(require("@/routers/test-server").routes());

server.listen(8080, () => {
  console.log("server run at port 8080");
});
