# Sports Stat Lens API
Provides access to the sports data and ways to investigate it.

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

Port defaults to `3000`. Override with `PORT`. In production (and in Docker) the server binds `0.0.0.0`; locally it binds `127.0.0.1` unless `HOST` is set.

---

### Docker

Build from `apps/api`:

```bash
docker compose up
```
