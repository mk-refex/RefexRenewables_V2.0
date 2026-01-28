import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { upload } from "../controllers/investorHero.controller.js";
import {
  uploadImage,
  uploadPdf as uploadPdfMulter,
  uploadPdfHandler,
} from "../controllers/upload.controller.js";

const router = Router();

router.post("/", authRequired, upload.single("image"), uploadImage);
router.post("/pdf", authRequired, uploadPdfMulter.single("pdf"), uploadPdfHandler);

export default router;
