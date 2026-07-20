import { Router } from "express";
import { authRequired, requirePageAccess } from "../middleware/auth.js";
import {
  getKeyManagerialPersonnel,
  saveKeyManagerialPersonnel,
} from "../controllers/keyManagerial.controller.js";

const router = Router();

router.get("/", getKeyManagerialPersonnel);
router.put(
  "/",
  authRequired,
  requirePageAccess("about"),
  saveKeyManagerialPersonnel
);

export default router;
