import { errorHandler } from "../Middleware/errorHandler.js";
import User from "../Models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  const { username, email, password, phoneNumber } = req.body;
  console.log(req.body, "ffffff");
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    phoneNumber,
  });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const Signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    console.log(validUser, "this is valid user");
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong!"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
     res
      .status(200)
      .json({token,user:validUser});
  } catch (error) {
    next(errorHandler);
  }
};
