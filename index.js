import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

const PORT = 3000;

app.use("/auth", userRoute);

app.listen(PORT, () => {
  // Start the server on the specified port
  console.log(`Server is running on port ${PORT}`);
});
