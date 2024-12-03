import express from "express";
import {
  formLogin,
  formRegister,
  formResetPassword,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/login", formLogin);
router.get("/register", formRegister);
router.post("/register", registerUser);
router.get("/reset-password", formResetPassword);

export default router;
