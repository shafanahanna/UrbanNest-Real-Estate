import express from "express";
import { Signup } from "../Controllers/authController.js";
import { tryCatchMiddleware } from "../Middleware/errorHandler.js";

const router = express.Router();

router.post("/signup", tryCatchMiddleware(Signup));

export default router;
