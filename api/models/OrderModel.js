import mongoose from "mongoose";

const DeliveryStatusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
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
    location: {
      type: String,
      default: "", // Optional field to store the current location of the delivery
    },
    notes: {
      type: String,
      default: "", // Optional notes regarding the status
    },
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
      default: [], // Array to store the history of status updates
    },
  },
  { _id: false }
);

const ItemSchema = new mongoose.Schema(
  {
    foodId: { type: String, required: true },
    foodName: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
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
    // required: true,
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
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ["paid", "pending", "failed"],
    default: "pending",
  },
  deliveryTime: { type: DeliveryTimeSchema, required: true },
  deliveryFee: { type: Number, default: 0 },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
