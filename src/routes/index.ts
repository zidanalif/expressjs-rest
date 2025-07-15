import { Router } from "express";
import fs from "fs";
import path from "path";

const routes = Router();
const routesDir = __dirname;

function loadRoutes(dir: string) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      loadRoutes(fullPath);
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".route.ts") || entry.name.endsWith(".route.js")) &&
      entry.name !== "index.ts"
    ) {
      const routeModule = require(fullPath);
      const router = routeModule.default;

      if (router && typeof router === "function") {
        console.log(`Registering router from: ${fullPath}`);
        routes.use(router);
      } else {
        console.error(`Invalid router in: ${fullPath}`);
      }
    }
  });
}

loadRoutes(routesDir);

export default routes;
