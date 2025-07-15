import { Router } from "express";
import fs from "fs";
import path from "path";

const routes = Router();
const routesDir = __dirname;

fs.readdirSync(routesDir).forEach((file) => {
  if (
    file !== "index.ts" &&
    (file.endsWith(".route.ts") || file.endsWith(".route.js"))
  ) {
    const route = require(path.join(routesDir, file));
    if (route.default) {
      routes.use(route.default);
    }
  }
});

export default routes;
