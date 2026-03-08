import express from "express";
import {
  createStudent,
  getStudents,
} from "../controllers/student.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// parent only
router.post("/", protect, authorize("parent"), createStudent);

// parent only
router.get("/", protect, authorize("parent"), getStudents);

export default router;
