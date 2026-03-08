import express from "express";

import {
  createSession,
  getLessonSessions,
} from "../controllers/session.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// mentor creates session
router.post("/", protect, authorize("mentor"), createSession);

// anyone logged in can view lesson sessions
router.get("/lesson/:id", protect, getLessonSessions);

export default router;
