const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const statusModel = model("status", statusSchema);

module.exports = statusModel;
