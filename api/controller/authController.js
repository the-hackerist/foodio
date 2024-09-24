import User from "../models/UserModel.js";

import bcrypt from "bcrypt";

export const signIn = async (req, res, next) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
  } catch (error) {
    next(error);
  }
};

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();

    res.status(201).json({ message: "Success", newUser });
  } catch (error) {
    next(error);
  }
};
