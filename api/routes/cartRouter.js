import express from "express";

import { getCart } from "../controller/cartController.js";

const router = express.Router();

router.post("/get-cart", getCart);

export default router;
