import mongoose from "mongoose";

const DeliveryStatusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: [
        "placed",
        "confirmed",
        "onDelivery",
        "received",
        "completed",
        "canceled",
      ],
      default: "pending",
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    // location: {
    //   type: String,
    //   default: "",
    // },
    // notes: {
    //   type: String,
    //   default: "",
    // },
  },
  { _id: false }
);

const DeliveryTimeSchema = new mongoose.Schema(
  {
    // estimatedDelivery: {
    //   type: Date,
    //   required: true,
    // },
    // actualDelivery: {
    //   type: Date,
    // },
    statusHistory: {
      type: [DeliveryStatusSchema],
      default: [],
    },
  },
  { _id: false }
);

const ItemSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    foodName: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const CustomerInfoSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true, match: /^\d{11}$/ },
    address: { type: String, required: true },
    description: { type: String },
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema({
  userIdRef: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: [
      "placed",
      "confirmed",
      "onDelivery",
      "cancelled",
      "received",
      "completed",
    ],
    default: "placed",
  },
  customerInfo: { type: CustomerInfoSchema, required: true },
  items: { type: [ItemSchema], required: true },
  paymentMethod: {
    type: String,
    enum: ["cashOnDelivery"],
    default: "cashOnDelivery",
  },
  paymentStatus: {
    type: String,
    enum: ["paid", "pending", "failed"],
    default: "pending",
  },
  deliveryTime: { type: DeliveryTimeSchema },
  deliveryFee: { type: Number, default: 0 },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
