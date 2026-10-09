import { buildApp } from "./app.js";

const port = Number(process.env.PORT ?? 3000);
const host =
  process.env.HOST ??
  (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1");

const app = await buildApp();

try {
  await app.listen({ port, host });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
