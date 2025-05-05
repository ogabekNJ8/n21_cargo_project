const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required"],
      maxLength: [15, "Max length is 15"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    email: {
      type: String,
      match: [
        /^(?![.\-])[\w\-_.]*[^.\-](@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        "Please enter a valid email address",
      ],
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order"
      },
    ],
  },
  {
    timeseries: true,
    versionKey: false,
  }
);

const clientModel = model("client", clientSchema);

module.exports = clientModel;
