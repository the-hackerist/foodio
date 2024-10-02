import User from "../models/UserModel.js";

import mongoose from "mongoose";

export const getAddress = async (req, res, next) => {
  const { _id } = req.body;

  try {
    const user = await User.findOne({ _id });

    if (!user) next({ statusCode: 404, message: "User does not exist!" });

    const { password, access_level, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const createAddress = async (req, res, next) => {
  const id = new mongoose.Types.ObjectId().toString();

  const { _id, currentAddressList, newAddress } = req.body;

  const update = {
    address: [...currentAddressList, { _id: id, ...newAddress }],
  };

  try {
    const userAddress = await User.findOneAndUpdate({ _id }, update, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(userAddress.address);
  } catch (error) {
    next(error);
  }
};
