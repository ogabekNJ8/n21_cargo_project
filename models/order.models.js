const { Schema, model } = require("mongoose");
const { schema } = require("./client.models");

let orderSchema = new Schema(
  {
    product_link: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    summa: {
      type: String,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    client_id: {
      type: Schema.Types.ObjectId,
      ref: "client",
    },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "currency_type",
    },
  },
  {
    timeseries: true,
    versionKey: false,
  }
);

let orederModel = model("order", orderSchema);

module.exports = orederModel;
