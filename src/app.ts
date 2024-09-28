import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
const proxy = require("@fastify/http-proxy");

import Routes from "./routes/product-routes";

const app: FastifyInstance = Fastify({ logger: process.env.PROD === "true" || process.env.LOGGER === "true" });

app.register(cors, {
  origin: true,
  methods: "PUT, POST, GET, DELETE, OPTIONS",
  allowedHeaders: "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, x-session-id",
  optionsSuccessStatus: 204,
  strictPreflight: false,
});

app.get("/", async (request, reply) => {
  return { message: "This is root" };
});

app.get("/ping", async (request, reply) => {
  return "pong";
});

app.register(proxy, {
  upstream: process.env.SHIORI_URL,
  prefix: "/shiori",
  replyOptions: {
    // rewriteRequestHeaders: (originalReq, headers) => ({
    //   ...headers,
    //   "access-control-allow-headers": `Content-Type, Content-Length, Authorization, Accept, X-Requested-With, x-session-id`,
    // }),
  },
  http2: false,
});

app.register(Routes);

export default app;
