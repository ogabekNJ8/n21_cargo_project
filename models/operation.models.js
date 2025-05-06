const { Schema, model } = require("mongoose");

const operationSchema = new Schema(
  {
    order_id: { type: Schema.Types.ObjectId, ref: "order", required: true },
    status_id: { type: Schema.Types.ObjectId, ref: "status", required: true },
    operation_date: { type: Date, required: true },
    admin_id: { type: Schema.Types.ObjectId, ref: "admin", required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const operationModel = model("operation", operationSchema);

module.exports = operationModel;
