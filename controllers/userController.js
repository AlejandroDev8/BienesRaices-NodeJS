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
