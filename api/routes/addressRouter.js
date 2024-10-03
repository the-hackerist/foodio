import express from "express";

import {
  createAddress,
  getAddress,
  deleteAddress,
  editAddress,
} from "../controller/addressController.js";

const router = express.Router();

router.post("/get-address", getAddress);

router.post("/create-address", createAddress);

router.post("/delete-address", deleteAddress);

router.post("/edit-address", editAddress);

export default router;
