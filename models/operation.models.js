const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const OperationSchema = new Schema({
  order_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
    required: true,
  },
  status_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Status",
    required: true,
  },
  operation_date: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v <= new Date();
      },
      message: "Ertangi kun bolmasin",
    },
  },
  admin_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    required: true,
  },
  description: {
    type: String,
    maxlength: [250, "Izoh 250 belgidan oshmasligi kerak"],
  },
});

const Operation = model("Operation", OperationSchema);

module.exports = Operation;
