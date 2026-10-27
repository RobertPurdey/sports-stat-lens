import Fastify, { type FastifyServerOptions } from 'fastify';
import { registerHealthRoutes } from '#/routes/health.js';
import { registerGameRoutes } from '#/modules/nfl/routes/games-routes.js';
import cors from '@fastify/cors';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: true,
    ...options,
  });

  app.register(cors, {
    origin: process.env.CORS_ORIGIN,
  });

  app.setErrorHandler((error: Error & { statusCode?: number }, request, reply) => {
    request.log.error(error);
    const statusCode = error.statusCode ?? 500;
    reply.status(statusCode).send({
      error: statusCode >= 500 ? "Internal Server Error" : error.message,
    });
  });

  app.register(api => {
    registerHealthRoutes(api);
    registerGameRoutes(api);
  }, { prefix: '/api' });
  
  return app;
}
