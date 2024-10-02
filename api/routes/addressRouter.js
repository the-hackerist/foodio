import express from "express";

import { createAddress, getAddress } from "../controller/addressController.js";

const router = express.Router();

router.post("/get-address", getAddress);

router.post("/create-address", createAddress);

export default router;
