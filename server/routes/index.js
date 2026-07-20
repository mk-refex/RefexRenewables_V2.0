import { Router } from "express";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.routes.js";
import pageAccessRouter from "./pageAccess.routes.js";
import investorContentRouter from "./investorContent.routes.js";
import investorHeroRouter from "./investorHero.routes.js";
import pageContentRouter from "./pageContent.routes.js";
import uploadRouter from "./upload.routes.js";
import smtpRouter from "./smtp.routes.js";
import contactRouter from "./contact.routes.js";
import geoRouter from "./geo.routes.js";
import seniorManagementRouter from "./seniorManagement.routes.js";
import boardOfDirectorsRouter from "./boardOfDirectors.routes.js";
import keyManagerialRouter from "./keyManagerial.routes.js";
import { getOverview } from "../controllers/overview.controller.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/upload", uploadRouter);
router.use("/users", usersRouter);
router.use("/page-access", pageAccessRouter);
router.use("/investor-content", investorContentRouter);
router.use("/investor-hero", investorHeroRouter);
router.use("/page-content", pageContentRouter);
router.use("/smtp", smtpRouter);
router.use("/contact", contactRouter);
router.use("/geo", geoRouter);
router.use("/senior-management", seniorManagementRouter);
router.use("/board-of-directors", boardOfDirectorsRouter);
router.use("/key-managerial", keyManagerialRouter);
router.get("/overview", authRequired, getOverview);

export default router;
