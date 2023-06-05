import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

import Routes from "./routes/product-routes";

const app: FastifyInstance = Fastify({ logger: false });

app.register(cors, {
  origin: true,
  methods: "PUT, POST, GET, DELETE, OPTIONS",
  allowedHeaders: "Content-Type, Content-Length, Authorization, Accept, X-Requested-With",
  optionsSuccessStatus: 204,
  strictPreflight: false,
});

app.register(Routes);

export default app;
