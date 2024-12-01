import express from "express";

const app = express(); // Create an express app

const PORT = 3000; // Define a port to run the server on

// Routing

app.get("/", (req, res) => {
  res.send("Hello World on express");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(PORT, () => {
  // Start the server on the specified port
  console.log(`Server is running on port ${PORT}`);
});
