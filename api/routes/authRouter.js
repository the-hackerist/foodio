import express from "express";

import { signIn, signUp, getUser } from "../controller/authController.js";

const router = express.Router();

router.post("/sign-in", signIn);

router.post("/sign-up", signUp);

router.get("/get-user/:id", getUser);

export default router;
