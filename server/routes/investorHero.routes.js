import { Router } from "express";
import { authRequired, requireInvestorAccess } from "../middleware/auth.js";
import {
  getInvestorHero,
  upsertInvestorHero,
  uploadHeroImage,
  upload,
} from "../controllers/investorHero.controller.js";

const router = Router();

// Public route - get investor hero (for website)
router.get("/", getInvestorHero);

// Upload hero image (saves to uploads/images/, returns { imageUrl: "/uploads/images/filename" })
router.post(
  "/upload",
  authRequired,
  requireInvestorAccess,
  upload.single("image"),
  uploadHeroImage
);

// Protected routes - users with investor-relations permission can access
// Multer middleware only processes if Content-Type is multipart/form-data
// For JSON requests (URL editing), express.json() handles the body
router.post(
  "/",
  authRequired,
  requireInvestorAccess,
  (req, res, next) => {
    // Only use multer if Content-Type is multipart/form-data
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      return upload.single("image")(req, res, next);
    }
    next();
  },
  upsertInvestorHero
);
router.put(
  "/",
  authRequired,
  requireInvestorAccess,
  (req, res, next) => {
    // Only use multer if Content-Type is multipart/form-data
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      return upload.single("image")(req, res, next);
    }
    next();
  },
  upsertInvestorHero
);

export default router;

