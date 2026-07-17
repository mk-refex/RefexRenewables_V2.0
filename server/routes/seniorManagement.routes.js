import { Router } from "express";
import { authRequired, requirePageAccess } from "../middleware/auth.js";
import {
  getSeniorManagement,
  saveSeniorManagement,
} from "../controllers/seniorManagement.controller.js";

const router = Router();

router.get("/", getSeniorManagement);
router.put("/", authRequired, requirePageAccess("about"), saveSeniorManagement);

export default router;
