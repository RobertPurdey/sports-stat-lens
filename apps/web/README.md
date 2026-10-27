# Sports Stat Lens Web
React frontend for exploring and investigating sports data.

---

## Setup

Create a `.env` file in `apps/web` with the following configuration:

```env
VITE_API_BASE_URL=http://localhost:3000
```

**Note:** Do not include a trailing slash (`/`) at the end of the VITE_API_BASE_URL.

---

## Local

```bash
cd apps/web
npm install
npm run dev
```

Open `http://localhost:5173`.

```bash
npm run lint
npm run build
npm run preview
```

---

### Docker

Build and run from `apps/web`:

```bash
docker compose up --build
```

Open `http://localhost:5173`.

Stop the container with `Ctrl+C`, or run:

```bash
docker compose down
```