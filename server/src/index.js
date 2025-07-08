import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const port = process.env.PORT;
connectDB()
  .then(
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    })
  )
  .catch((err) => {
    console.log("connection error");
  });
