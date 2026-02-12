import express from "express";
import dotenv from "dotenv";

// Routes
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();


app.use(express.json());

// API User
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("Alit");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
