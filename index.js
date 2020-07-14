const path = require("path");
const rootPath = path.join(__dirname, "src");
require("module-alias").addAlias("@", rootPath);

require("@/app.js");