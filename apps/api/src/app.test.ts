import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { buildApp } from "./app.js";

const app = await buildApp({ logger: false });

before(async () => {
  await app.ready();
});

after(async () => {
  await app.close();
});

test("GET /health returns ok", async () => {
  const response = await app.inject({ method: "GET", url: "/health" });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { status: "ok" });
});

test("GET /ready returns ok", async () => {
  const response = await app.inject({ method: "GET", url: "/ready" });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { status: "ok" });
});
