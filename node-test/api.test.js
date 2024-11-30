import { describe, before, after, it } from "node:test";
import { strictEqual, deepStrictEqual, ok } from "node:assert";

const BASE_URL = "http://localhost:3000";
describe("API Workflow", () => {
  let _server = {};
  let _globalToken = "";
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
      jwt: _globalToken,
    };
    const request = await fetch(`${BASE_URL}/login`, {
      method: "POST",

      body: JSON.stringify(data),
    });
    strictEqual(request.status, 200);
    const response = await request.json();
    // console.log({ response });
    ok(response.token, "Token returned");
    _globalToken = response.token;
  });
  it("Should not be allowed to access private data without a token", async () => {
    const request = await fetch(`${BASE_URL}/`, {
      method: "GET",
      headers: {
        authorization: "", // Cabeçalho vazio para simular ausência de token
      },
    });

    // Verifica se o status da resposta é 400
    strictEqual(request.status, 400);

    // Verifica o conteúdo da resposta
    const response = await request.json();
    // console.log({ response });
    deepStrictEqual(response, { error: "Invalid token!" });
  });

  it("Should be allowed to access private data with a token", async () => {
    const request = await fetch(`${BASE_URL}/`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${_globalToken}`,
      },
    });
    strictEqual(request.status, 200);
    const response = await request.json();
    // console.log({ response });
    ok(response, { result: "Welcome" });
  });
});
