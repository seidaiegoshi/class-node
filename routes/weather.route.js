// routes/weather.route.js

import express from "express";
import { getResult } from "../controllers/weather.controller.js";

export const weatherRouter = express.Router();

weatherRouter.get("/", (req, res) => getResult(req, res));
