import mongoose from "mongoose";
import User from "../models/UserModel.js";

export const createOrder = async (req, res, next) => {
  const { _id, cart, userAddress, order: orderList } = req.body;

  const orderId = new mongoose.Types.ObjectId().toString();

  const order = { orderId, orderStatus: "pending", cart, userAddress };

  const update = { orders: [...orderList, order] };

  try {
    const userOrder = await User.findByIdAndUpdate({ _id }, update, {
      new: true,
      runValidators: true,
    });

    if (!userOrder) next({ statusCode: 404, message: "User does not exist!" });

    res.status(200).json(userOrder.orders);
  } catch (error) {
    next(error);
  }
};
