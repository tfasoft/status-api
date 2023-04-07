import { Services } from "$controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/", Services.ALL);

export default router;
