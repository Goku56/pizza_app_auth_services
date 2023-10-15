import app from "./app";
import { Config } from "./config";

const { PORT } = Config;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log("listening on port " + PORT);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  }
};

startServer();
