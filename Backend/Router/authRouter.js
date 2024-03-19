import express from "express";
import { Signin, Signup } from "../Controllers/authController.js";
// import { tryCatchMiddleware } from "../Middleware/errorHandler.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);

export default router;
