const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    order_unique_id: { type: String, required: true },
    client_id: { type: Schema.Types.ObjectId, ref: "client", required: true },
    product_link: { type: String, required: true },
    quantity: { type: Number, required: true },
    summa: { type: Schema.Types.Decimal128, required: true },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "currency_type",
      required: true,
    },
    truck: { type: String, required: true },
    description: { type: String, required: true },
    operations: [{ type: Schema.Types.ObjectId, ref: "operation" }],
  },
  { timestamps: true, versionKey: false }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
