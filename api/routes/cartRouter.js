import express from "express";

import { getCart, updateCart } from "../controller/cartController.js";

const router = express.Router();

router.post("/get-cart", getCart);

router.post("/update-cart", updateCart);

export default router;
