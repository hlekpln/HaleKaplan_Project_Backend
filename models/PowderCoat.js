const mongoose = require("mongoose");

const powderCoatSchema = new mongoose.Schema({
  brand: String,
  name: String,
  color: Number,
  chemicalType: String,
  appearance: String,
  gloss: String,
  cureSchedule: [
    {
      temprature: Number,
      time: Number
    },
    {
      temprature: Number,
      time: Number
    }
  ]
});

module.exports = mongoose.model("PowderCoat", powderCoatSchema);
