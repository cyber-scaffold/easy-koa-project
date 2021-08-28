import md5 from "md5";
import extname from "ext-name";
import Router from "@koa/router";
import multer from "@koa/multer";

const router = new Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits:1024000 }).single("file");

router.post("/upload",upload,async (context) => {
  const {originalname,buffer}=context.request.file;
  const file_sign=md5(buffer);
  const [{ext:extension_name}]=extname(originalname);
  const oss_filename=[file_sign,extension_name].join(".");
  return oss_filename;
});

export default router.routes();