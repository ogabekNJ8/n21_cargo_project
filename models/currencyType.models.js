const { Schema, model } = require("mongoose");

const currencyTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  {
    timeseries: true,
    versionKey: false,
  }
);

const currencyTypeModel = model("currency_type", currencyTypeSchema);

module.exports = currencyTypeModel;
