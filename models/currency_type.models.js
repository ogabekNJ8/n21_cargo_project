const { Schema, model } = require("mongoose");

const CurrencyTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Valyuta nomi kamida 2 ta belgi bo'lsin"],
    maxlength: [10, "Valyuta nomi 10 belgidan oshmasligi kerak"],
  },
  description: {
    type: String,
    maxlength: [100, "Izoh 100 belgidan oshmasligi kerak"],
  },
});

const CurrencyType = model("CurrencyType", CurrencyTypeSchema);

module.exports = CurrencyType;
