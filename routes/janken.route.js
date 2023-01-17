import express from "express";
import { getResult } from "./../controllers/janken.controller.js";

export const jankenRouter = express.Router();

jankenRouter.post("/", (req, res) => getResult(req, res));
