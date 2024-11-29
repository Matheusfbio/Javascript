import { describe, before, after, it } from "node:test";
import { strictEqual, deepStrictEqual, ok } from "node:assert";
const BASE_URL = "http://localhost:3000";

describe("API Workflow", () => {
  let _server = {};
  before(async () => {
    _server = (await import("./api.js")).app;
    await new Promise((resolve) => _server.once("listening", resolve));
  });
  after((done) => _server.close(done));

  it("Should receive not authorized given wrong user and password", async () => {
    const data = {
      user: "Matheus fabio",
      password: "",
    };
    const request = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    strictEqual(request.status, 401);
    const response = await request.json();
    deepStrictEqual(response, { error: "user invalid!" });
  });
  it("Should login successfuly given user and password", async () => {
    const data = {
      user: "Matheus fabio",
      password: "12345",
    };
    const request = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    strictEqual(request.status, 200);
    const response = await request.json();
    console.log({ response });
    ok(response.token, "Token returned");
  });
});
