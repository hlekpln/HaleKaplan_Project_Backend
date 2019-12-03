const mongoose = require("mongoose");

const conveyorSchema = new mongoose.Schema({
  conveyor: String,
  material: String,
  thickness: Number,
  speed: Number,
  maxLength: Number
});

module.exports = mongoose.model("Conveyor", conveyorSchema);
