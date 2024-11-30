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

function isHeadersValid(headers) {
  // console.log({ headers });
  try {
    const auth = headers.authorization.replace(/bearer\s/i, "");
    JWT.verify(auth, JWT_KEY);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}

async function handler(request, response) {
  if (request.url === "/login" && request.method === "POST") {
    return loginRouter(request, response);
  }

  if (!isHeadersValid(request.headers)) {
    response.writeHead(400);
    return response.end(JSON.stringify({ error: "Invalid token!" }));
  }

  response.end(JSON.stringify({ result: "Welcome" }));
}

const app = createServer(handler).listen(3000, () =>
  console.log("listening on port 3000")
);

export { app };
