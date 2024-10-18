import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    profileImage: { type: String, default: "" },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    phone: { type: String, default: "" },
    access_level: { type: String, default: "user" },
    cart: { type: Array, default: [] },
    address: { type: Array, default: [] },
    bookings: { type: Array, default: [] },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;
