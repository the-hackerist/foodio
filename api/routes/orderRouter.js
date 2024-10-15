import express from "express";

import {
  createOrder,
  getOrder,
  getOrdersList,
  getFood,
  getAllFood,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/create-order", createOrder);

router.get("/:id", getOrder);

router.get("/menu/:foodId", getFood);

router.get("/get/get-all-food", getAllFood);

router.get("/get-orders-list/:id", getOrdersList);

export default router;
