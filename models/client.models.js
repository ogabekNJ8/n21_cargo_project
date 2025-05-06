const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
  full_name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
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
  address: {
    type: String,
    required: true,
    minlength: [10, "Address kamida 10 ta belgidan iborat bo'lishi kerak"],
  },
  location: {
    type: String,
    minlength: [10, "Location kamida 10 ta belgidan iborat bo'lishi kerak"],
  },
  email: {
    type: String,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Iltimos emailni to'ldiring"],
    unique: true,
  },
});

const Client = model("Client", ClientSchema);

module.exports = Client;
