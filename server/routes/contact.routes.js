import { Router } from "express";
import {
  checkEnquiry,
  submitContactForm,
} from "../controllers/contact.controller.js";

const router = Router();

router.post("/check-enquiry", checkEnquiry);
router.post("/submit", submitContactForm);

export default router;
