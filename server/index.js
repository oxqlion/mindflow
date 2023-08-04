import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import db from "./config/database.js";
import router from "./routes/index.js";

import bodyParser from "body-parser";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  await db.sync();
  console.log("Database connected...");
} catch (error) {
  console.log("Error: ", error);
}

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser());
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server up and running on port 3000");
});
