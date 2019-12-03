const mongoose = require("mongoose");

const processSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  surfacePreparation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SurfacePreparation"
  },
  conveyor: { type: mongoose.Schema.Types.ObjectId, ref: "Conveyor" }
});

module.exports = mongoose.model("Process", processSchema);
