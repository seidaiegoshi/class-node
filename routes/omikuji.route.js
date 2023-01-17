import express from "express";
import { getResult } from "./../controllers/omikuji.controller.js";

export const omikujiRouter = express.Router();

omikujiRouter.get("/", (req, res) => getResult(req, res));
