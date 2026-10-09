# Sports Stat Lens

Provides access to live sports data and tools to investigate it.

## Apps

- `apps/api` — Fastify HTTP API (Node 24, TypeScript)
- `apps/web` — React frontend (Node 24, TypeScript, Vite)

## Local Development

Each app has its own setup instructions in its README. Run both apps to use the complete application.

## Docker

Run the complete application from the repository root:

```bash
docker compose up --build
```

- Web: `http://localhost:5173`
- API: `http://localhost:3000`

Stop the containers with `Ctrl+C`, or run:

```bash
docker compose down
```