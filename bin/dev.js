import * as esbuild from "esbuild";
import { ctxESM, ctxIIFE, ctxIIFEes2015, ctxCJS, ctxCSS } from "./configs.js";

await ctxESM.watch();
await ctxCSS.watch();
await ctxIIFE.watch();
await ctxIIFEes2015.watch();
await ctxCJS.watch();

let { hosts, port } = await ctxESM.serve({
  servedir: "dist",
});

console.info(`Serving on http://localhost:${port}`);
