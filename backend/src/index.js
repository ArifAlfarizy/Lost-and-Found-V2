import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Alit");
  res.json({ success: true, data: { nama: "anggas" } });
  res.json({ success: false, data: { nama: "arif" } });
  res.json({ success: true, data: { nama: "arifali" } });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
