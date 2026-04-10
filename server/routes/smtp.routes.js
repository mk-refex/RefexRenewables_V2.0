import { Router } from "express";
import { authRequired, requireAdmin } from "../middleware/auth.js";
import {
  getSmtpConfig,
  saveSmtpConfig,
  sendSmtpTest,
} from "../controllers/smtp.controller.js";

const router = Router();

router.get("/", authRequired, requireAdmin, getSmtpConfig);
router.put("/", authRequired, requireAdmin, saveSmtpConfig);
router.post("/test", authRequired, requireAdmin, sendSmtpTest);

export default router;
