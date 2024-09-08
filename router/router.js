import express from "express";
import {
  getData,
  createData,
  updateData,
  deleteData,
} from "../controller/controller.js";

const router = express.Router();

router.get("/", getData);
router.post("/save", createData);
router.post("/update", updateData);
router.post("/delete", deleteData);

export default router;
