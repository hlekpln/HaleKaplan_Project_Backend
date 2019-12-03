const mongoose = require("mongoose");

const productionSchema = new mongoose.Schema({
  paint: { type: mongoose.Schema.Types.ObjectId, ref: "PowderCoat" },
  conveyor: { type: mongoose.Schema.Types.ObjectId, ref: "Conveyor" },
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" }
});

module.exports = mongoose.model("Production", productionSchema);
