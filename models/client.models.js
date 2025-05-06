const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    full_name: { type: String, required: true },
    phone_number: { type: String, required: true, maxLength: 15 },
    address: { type: String, required: true },
    location: { type: String, required: true },
    email: {
      type: String,
      match: [
        /^(?![.\-])[\w\-_.]*[^.\-](@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        "Please enter a valid email address",
      ],
    },
    orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
  },
  { timestamps: true, versionKey: false }
);

const clientModel = model("client", clientSchema);

module.exports = clientModel;
