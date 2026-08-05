import * as esbuild from "esbuild";

import { ctxESM, ctxIIFE, ctxIIFEes2015, ctxCJS, ctxCSS } from "./configs.js";

await ctxESM.rebuild();
await ctxCSS.rebuild();
await ctxIIFE.rebuild();
await ctxIIFEes2015.rebuild();
await ctxCJS.rebuild();

console.info("Files built. Available in `dist` folder.");

await ctxESM.dispose();
await ctxCSS.dispose();
await ctxIIFE.dispose();
await ctxIIFEes2015.dispose();
await ctxCJS.dispose();
