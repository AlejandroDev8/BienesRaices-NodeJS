import express from "express";
import userRoute from "./routes/userRoute.js";
import database from "./config/database.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  await database.authenticate();
  database.sync();
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/auth", userRoute);

const PORT = 3000;

app.listen(PORT, () => {
  // Start the server on the specified port
  console.log(`Server is running on port ${PORT}`);
});
