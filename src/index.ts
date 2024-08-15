import mongoose from "mongoose";
import { app } from "./app";
import { ENV, PORT } from "./env";

export const dbUrl = process.env.DATABASE_PATH;
if (!dbUrl) {
  console.error("DB_URL is not defined");
} else {
  mongoose
    .connect(dbUrl)
    .then(() =>
      app.listen(PORT, () => {
        console.log(
          `[server]: listening at http://localhost:${PORT} in ${ENV} mode`
        );
      })
    )
    .catch((error) => console.log(error));
}
