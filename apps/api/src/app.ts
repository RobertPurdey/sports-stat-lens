import Fastify, { type FastifyServerOptions } from "fastify";
import { registerHealthRoutes } from "./routes/health.js";

export async function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: true,
    ...options,
  });

  app.setErrorHandler((error: Error & { statusCode?: number }, request, reply) => {
    request.log.error(error);
    const statusCode = error.statusCode ?? 500;
    reply.status(statusCode).send({
      error: statusCode >= 500 ? "Internal Server Error" : error.message,
    });
  });

  await registerHealthRoutes(app);
  return app;
}
