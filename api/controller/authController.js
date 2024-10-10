import User from "../models/UserModel.js";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const updatePassword = async (req, res, next) => {
  const { _id, newPassword } = req.body;

  const hashedPassword = bcryptjs.hashSync(newPassword, 10);

  const update = { password: hashedPassword };

  try {
    const validUser = await User.findByIdAndUpdate({ _id }, update, {
      new: true,
      runValidators: true,
    });

    if (!validUser)
      return next({ statusCode: 404, message: "User does not exist!" });

    res.status(200).json({ success: "OK" });
  } catch (error) {
    next(error);
  }
};

export const verifyUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser)
      return next({ statusCode: 404, message: "User does not exist!" });

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) res.status(404).json({ success: "failed" });
    else res.status(200).json({ success: "OK" });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) next({ statusCode: 404, message: "User does not exist!" });

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return next({ statusCode: 404, message: "This user does not exist!" });

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next({ statusCode: 401, message: "Wrong credentials!" });

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, access_level, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!password)
    return next({ statusCode: 404, message: "Password is required!" });

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();

    res.status(201).json({ message: "success", newUser });
  } catch (error) {
    next(error);
  }
};
