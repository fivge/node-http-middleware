import "dotenv/config";
import app from "./app";

const PORT = +process.env.PORT!;

const start = async () => {
  try {
    app.listen({ port: PORT, host: "0.0.0.0" });
    console.log("server start on", PORT);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
