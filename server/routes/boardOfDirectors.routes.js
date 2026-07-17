import { Router } from "express";
import { authRequired, requirePageAccess } from "../middleware/auth.js";
import {
  getBoardOfDirectors,
  saveBoardOfDirectors,
} from "../controllers/boardOfDirectors.controller.js";

const router = Router();

router.get("/", getBoardOfDirectors);
router.put("/", authRequired, requirePageAccess("about"), saveBoardOfDirectors);

export default router;
