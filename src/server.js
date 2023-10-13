import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
mongoose.connect(`mongodb://root:example@mongo:27017`)
  .then(() => console.log("db connected"))
  .catch(err => console.log("error to connect db", err));

app.get("/", (req, res) => {
  res.json({name:"metoo 12"})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("app up and listen in port 4000");
});
