const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
  name: String,
  speed: Number,
  maxLength: Number
});

module.exports = mongoose.model("Line", lineSchema);
