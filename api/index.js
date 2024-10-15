import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import authRouter from "./routes/authRouter.js";
import cartRouter from "./routes/cartRouter.js";
import addressRouter from "./routes/addressRouter.js";
import orderRouter from "./routes/orderRouter.js";
import profileRouter from "./routes/profileRouter.js";

dotenv.config();

const app = express();

const database = process.env.MONGO_DB.replace(
  "<db_password>",
  process.env.MONGO_DB_PASSWORD
);

mongoose
  .connect(database)
  .then(() => console.log("Successfully connected to database"))
  .catch(() => console.log("Failed to connect to database"));

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/address", addressRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/profile", profileRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
