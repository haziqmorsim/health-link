const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  timings: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
