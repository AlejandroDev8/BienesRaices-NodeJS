import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World on express");
});

router.get("/about", (req, res) => {
  res.send("About page");
});

export default router;
