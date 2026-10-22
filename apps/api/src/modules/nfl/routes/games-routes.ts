import type { FastifyInstance } from "fastify";
import { getGames } from '@/modules/nfl/services/games/games-service.js';

export function registerGameRoutes(app: FastifyInstance) {
  app.get('/nfl/games', async() => {
    return getGames();
  });
}

export default registerGameRoutes;
