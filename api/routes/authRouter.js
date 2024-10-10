import express from "express";

import {
  signIn,
  signUp,
  getUser,
  verifyUser,
  updatePassword,
} from "../controller/authController.js";

const router = express.Router();

router.post("/sign-in", signIn);

router.post("/sign-up", signUp);

router.get("/get-user/:id", getUser);

router.post("/verify", verifyUser);

router.post("/update-password", updatePassword);

export default router;
