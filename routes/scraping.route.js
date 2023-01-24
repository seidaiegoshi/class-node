// routes/scraping.route.js

import express from "express";
import { getResult } from "../controllers/scraping.controller.js";

export const scrapingRouter = express.Router();

scrapingRouter.get("/", (req, res) => getResult(req, res));
