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
  const user = await User.create(req.body);

  res.json(user);
};

export const formResetPassword = (req, res) => {
  res.render("auth/reset-password", {
    title: "Recuperar contraseña",
  });
};
