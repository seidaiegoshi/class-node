// routes/weather.route.js

import express from "express";
import { getTodaysData } from "../controllers/today.controller.js";

export const todayRouter = express.Router();

todayRouter.get("/", (req, res) => getTodaysData(req, res));
