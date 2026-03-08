import express from "express";
import { createLesson } from "../controllers/lesson.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/", protect, authorize("mentor"), createLesson);

export default router;
