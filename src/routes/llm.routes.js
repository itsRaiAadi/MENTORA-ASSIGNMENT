import express from "express";
import { summarizeText } from "../controllers/llm.controller.js";
import { llmLimiter } from "../middleware/rateLimiter.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// protected endpoint
router.post("/summarize", protect, llmLimiter, summarizeText);

export default router;
