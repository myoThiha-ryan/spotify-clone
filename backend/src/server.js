import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"; // importing route from other files

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
