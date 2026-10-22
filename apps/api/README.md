# Sports Stat Lens API
Provides access to sports data and ways to investigate it.

---

## Setup

Create a `.env` file in `apps/api` with the following configuration:

```env
ESPN_SCOREBOARD_URL=https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard
```

---

## Local

```bash
cd apps/api
npm install
npm run dev
```

- Health: `GET http://127.0.0.1:3000/health`
- Ready: `GET http://127.0.0.1:3000/ready`

```bash
npm test
npm run build
npm start
```

Port defaults to `3000`. Override with `PORT`. Locally, the server binds to `127.0.0.1` unless `HOST` is set. In production and Docker, it binds to `0.0.0.0`.

---

### Docker

Build and run from `apps/api`:

```bash
docker compose up --build
```

The API is available at `http://localhost:3000`.

Stop the container with `Ctrl+C`, or run:

```bash
docker compose down
```