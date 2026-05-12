import { Router } from "express";
import { getIndiaCities } from "../controllers/geo.controller.js";

const router = Router();

router.get("/india-cities", getIndiaCities);

export default router;
