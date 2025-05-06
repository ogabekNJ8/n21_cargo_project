const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  full_name: {
    type: String,
    required: true,
    maxlength: [100, "F.I.O 100 belgidan oshmasligi kerak"],
  },
  user_name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [100, "User-name 100 belgidan oshmasligi kerak"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Parol 8 belgidan kam bo'lmasin"],
  },
  phone_number: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{2}-\d{3}-\d{2}-\d{2}$/.test(value);
      },
      message: (props) => `${props.value} - raqam noto'g'ri`,
    },
  },
  email: {
    type: String,
    required: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Iltimos to'g'ri emailni to'ldiring"],
  },
  tg_link: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return !v || /^https:\/\/t\.me\/[A-Za-z0-9_]+$/.test(v);
      },
      message:
        "Telegram url noto'g'ri formatda (namuna: https://t.me/username)",
    },
  },
  token: {
    type: String,
  },
  is_creator: {
    type: Boolean,
    required: true,
  },
  is_active: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    maxlength: [250, "Izoh 250 belgidan oshmasligi kerak"],
  },
});

const Admin = model("Admin", AdminSchema);

module.exports = Admin;
