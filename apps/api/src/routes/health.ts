import type { FastifyInstance } from "fastify";

export function registerHealthRoutes(app: FastifyInstance) {
  app.get("/health", () => ({ status: "ok" }));
  app.get("/ready", () => ({ status: "ok" }));
}
