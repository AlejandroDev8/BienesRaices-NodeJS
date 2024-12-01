const formLogin = (req, res) => {
  res.render("auth/login", {
    auth: true,
  });
};

export { formLogin };
