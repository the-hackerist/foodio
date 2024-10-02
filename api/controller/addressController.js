import User from "../models/UserModel.js";

import mongoose from "mongoose";

export const getAddress = async (req, res, next) => {
  const { _id } = req.body;

  try {
    const userAddress = await User.findOne({ _id });

    if (!userAddress)
      next({ statusCode: 404, message: "User does not exist!" });

    const { password, access_level, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const createAddress = async (req, res, next) => {
  const id = new mongoose.Types.ObjectId().toString();

  const { _id, currentAddressList, newAddress } = req.body;

  let newAddressList = currentAddressList;

  if (newAddress.default) {
    newAddressList = currentAddressList.map((item) =>
      item.default ? { ...item, default: false } : item
    );
  }

  const update = {
    address: [...newAddressList, { _id: id, ...newAddress }],
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

export const deleteAddress = async (req, res, next) => {
  const { _id, addressId, addressList } = req.body;

  console.log(addressList);

  const newAddressList = addressList?.filter(
    (address) => address._id !== addressId
  );

  const update = { address: newAddressList };

  try {
    const userAddress = await User.findOneAndUpdate({ _id }, update, {
      new: true,
      runValidators: true,
    });

    if (!userAddress)
      next({ statusCode: 404, message: "User does not exist!" });

    res.status(200).json(userAddress.address);
  } catch (error) {
    next(error);
  }
};
