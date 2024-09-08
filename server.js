import express from "express";

import appRouter from "./router/router.js";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

const corsOptions = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", appRouter);

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server started on http://localhost:${PORT}`);
});
