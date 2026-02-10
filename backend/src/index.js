import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Alit")
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
});