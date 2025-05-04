const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./routes/index.routes");
const { default: mongoose } = require("mongoose");

dotenv.config();

let PORT = process.env.PORT || 3030;

let app = express();

app.use(express.json());

app.use("/api", mainRouter);

async function start() {
  try {
    await mongoose.connect("dburl")
    app.listen(PORT, () => {
      console.log(`Server started at: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
