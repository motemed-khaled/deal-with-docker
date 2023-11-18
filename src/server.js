import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import os from "os";

dotenv.config();

const app = express();
mongoose.connect(`mongodb://root:example@mongo:27017`)
  .then(() => console.log("db connected"))
  .catch(err => console.log("error to connect db", err));

app.get("/", (req, res) => {
  console.log(`tarfiik from ${os.hostname}`)
  res.json({name:"hello docker and aws and docker swarm!!!!"})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("app up and listen in port 4000");
});
