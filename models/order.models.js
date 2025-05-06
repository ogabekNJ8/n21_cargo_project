const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const OrderSchema = new Schema({
  order_unique_id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  client_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
    required: [true, "Client tanlanishi shart"],
  },
  product_link: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        return !v || /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `"${props.value}" noto'g'ri URL formatida`,
    },
  },
  quantity: {
    type: Number,
    min: [1, "Miqdor kamida 1 bo'lishi kerak"],
    required: [true, "Miqdor ko'rsatilishi shart"],
  },
  summa: {
    type: mongoose.Types.Decimal128,
    required: [true, "Summa ko'rsatilishi shart"],
  },
  currency_type_id: {
    type: mongoose.Schema.ObjectId,
    ref: "CurrencyType",
    required: true,
  },
  truck: { type: String },
  description: {
    type: String,
    maxlength: [500, "Izoh 500 belgidan oshmasligi kerak"],
  },
});

const Order = model("Order", OrderSchema);

module.exports = Order;
