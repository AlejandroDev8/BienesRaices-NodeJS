import express from "express";
import {
  formLogin,
  formRegister,
  formResetPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/login", formLogin);
router.get("/register", formRegister);
router.get("/reset-password", formResetPassword);

export default router;
