// import mongoose from "mongoose";
// import User from "../models/UserModel.js";
import Order from "../models/OrderModel.js";

export const getOrder = async (req, res, next) => {
  console.log(req.params);
  try {
    const order = await Order.findById(req.params.id);

    if (!order) next({ statusCode: 404, message: "Order does not exist!" });

    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrdersList = async (req, res, next) => {
  const { id } = req.params;

  try {
    const ordersList = await Order.find({ userIdRef: id });

    if (!ordersList) next({ statusCode: 404, message: "There are no orders." });

    res.status(200).json({
      statusCode: 200,
      success: "OK",
      message: "List of orders retrieved successfully!",
      data: ordersList,
    });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  // const { _id, cart, userAddress, order: orderList } = req.body;
  //       userIdRef: user._id,
  //       items: cart,
  //       customerInfo: rest,
  //       paymentMethod: payment,
  //       deliveryFee: 49,
  const newOrder = new Order(req.body);
  // const orderId = new mongoose.Types.ObjectId().toString();

  // const order = { orderId, orderStatus: "pending", cart, userAddress };

  // const update = { orders: [...orderList, order] };

  try {
    const order = await newOrder.save();
    // const userOrder = await User.findByIdAndUpdate({ _id }, update, {
    //   new: true,
    //   runValidators: true,
    // });

    // if (!userOrder) next({ statusCode: 404, message: "User does not exist!" });
    if (!order)
      next({ statusCode: 404, message: "Failed to save order to database" });
    // user orders array
    // use as orders state context
    res.status(201).json({
      statusCode: 201,
      success: "OK",
      message: "Order created successfully!",
      data: newOrder,
    });
  } catch (error) {
    next(error);
  }
};
