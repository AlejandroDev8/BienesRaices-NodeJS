import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();

const PORT = 3000;

app.use("/", userRoute);

app.listen(PORT, () => {
  // Start the server on the specified port
  console.log(`Server is running on port ${PORT}`);
});
