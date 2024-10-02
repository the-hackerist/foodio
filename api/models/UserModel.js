import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    phone: { type: String, default: "" },
    access_level: { type: String, default: "user" },
    cart: { type: Array, default: [] },
    address: { type: Array, default: [] },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
