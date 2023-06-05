import app from "./app";

const PORT = 3000;

const start = async () => {
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log("server start on", PORT);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
