const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  no: Number,
  firm: String,
  productName: String,
  material: String,
  size: { width: Number, length: Number },
  thickness: Number,
  paint: { type: mongoose.Schema.Types.ObjectId, ref: "PowderCoat" }
});

module.exports = mongoose.model("Order", orderSchema);
