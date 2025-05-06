const { Schema, model } = require("mongoose");

const StatusSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: [100, "Izoh 100 belgidan oshmasligi kerak"],
  },
});

const Status = model("Status", StatusSchema);

module.exports = Status;
