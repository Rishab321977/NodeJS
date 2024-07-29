import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo DB connection failed!!", err);
  });
