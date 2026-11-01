import type { FastifyInstance } from "fastify";
import { getGames } from '#/modules/nfl/services/games/games-service.js';
import { NflGameFilter } from '#/modules/nfl/types/nfl-game-filter.js';
import { gameQuerySchema } from '#/modules/nfl/routes/games-schema.js';

export function registerGameRoutes(app: FastifyInstance) {
  app.get<{ Querystring: NflGameFilter }>(
    '/nfl/games',
    { schema: { querystring: gameQuerySchema } },
    async(request) => getGames(request.query)
  );
}

export default registerGameRoutes;
