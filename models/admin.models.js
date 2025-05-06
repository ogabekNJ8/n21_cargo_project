const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    full_name: { type: String, required: true },
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    tg_link: { type: String, required: true },
    token: { type: String, required: true },
    is_creator: { type: Boolean, required: true },
    is_active: { type: Boolean, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const adminModel = model("admin", adminSchema);

module.exports = adminModel;
