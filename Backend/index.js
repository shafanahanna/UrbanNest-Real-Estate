import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Router/userRouter.js";
import authRouter from "./Router/authRouter.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3001;

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
