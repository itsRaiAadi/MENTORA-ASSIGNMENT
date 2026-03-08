import express from "express";
import { createBooking } from "../controllers/booking.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// parent books lesson for student
router.post("/", protect, authorize("parent"), createBooking);

export default router;
