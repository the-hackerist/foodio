import express from "express";

import {
  createOrder,
  getOrder,
  getOrdersList,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/create-order", createOrder);

router.get("/:id", getOrder);

router.get("/get-orders-list/:id", getOrdersList);

export default router;
