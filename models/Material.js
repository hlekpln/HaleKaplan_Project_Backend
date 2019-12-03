const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  name: String,
  thickness: Number
});

module.exports = mongoose.model("Material", materialSchema);
