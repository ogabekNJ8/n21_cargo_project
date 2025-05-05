const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./routes/index.routes");
const { default: mongoose } = require("mongoose");
const config = require("config");


dotenv.config();

const PORT = config.get("port") || 3000;
const DB_URI = config.get("dbUri");

let app = express();

app.use(express.json());

app.use("/api", mainRouter);

async function start() {
  try {
    await mongoose.connect(DB_URI);
    app.listen(PORT, () => {
      console.log(`Server started at: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
