import { check, validationResult } from "express-validator";
import User from "../models/User.js";

export const formLogin = (req, res) => {
  res.render("auth/login", {
    title: "Iniciar sesión",
  });
};

export const formRegister = (req, res) => {
  res.render("auth/register", {
    title: "Crear cuenta",
  });
};

export const registerUser = async (req, res) => {
  await check("name")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .run(req);
  await check("email").isEmail().withMessage("El email no es válido").run(req);
  await check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .run(req);
  await check("password_confirmation")
    .equals("password")
    .withMessage("Las contraseñas no coinciden")
    .run(req);

  let result = validationResult(req);

  if (!result.isEmpty()) {
  }

  res.json(result.array());

  const user = await User.create(req.body);

  res.json(user);
};

export const formResetPassword = (req, res) => {
  res.render("auth/reset-password", {
    title: "Recuperar contraseña",
  });
};
