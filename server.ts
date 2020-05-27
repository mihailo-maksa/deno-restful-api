import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const port = 5000;
const app = new Application();

// Init Middleware
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port ${port}`);

await app.listen({ port });
