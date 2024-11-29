import { createServer } from "node:http";
import { once } from "node:events";
import JWT from "jsonwebtoken";

const DEFAULT_USER = {
  user: "Matheus fabio",
  password: "12345",
};

const JWT_KEY = "1234abcd";

async function loginRouter(request, response) {
  const { user, password } = JSON.parse(await once(request, "data"));
  // console.log({ user, password });

  if (user !== DEFAULT_USER.user || password !== DEFAULT_USER.password) {
    response.writeHead(401);
    response.end(JSON.stringify({ error: "user invalid!" }));
    return;
  }
  const token = JWT.sign({ user, message: "Welcome" }, JWT_KEY);
  response.end(JSON.stringify({ token }));
}

async function handler(request, response) {
  if (request.url === "/login" && request.method === "POST") {
    return loginRouter(request, response);
  }

  response.end("Hello world!");
}

const app = createServer(handler).listen(3000, () =>
  console.log("listening on port 3000")
);

export { app };
