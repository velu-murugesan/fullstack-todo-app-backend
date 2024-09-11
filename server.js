import express from "express";

import appRouter from "./router/router.js";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
import cors from "cors";

dotenv.config();

// "install-server":"cd backend && npm install",
// "start-server":"cd backend &&  npm start",
// "install-client":"cd client && npm install",
// "build-client":"cd client && npm run build",
// "client":"cd client && npm run dev"

const PORT = process.env.PORT || 8000;

const app = express();

const corsOptions = {
  origin: "https://zesty-dragon-d490ee.netlify.app",

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
