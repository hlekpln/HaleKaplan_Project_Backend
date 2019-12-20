const mongoose = require("mongoose");

const processSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  surfacePreparation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SurfacePreparation"
  },
  line: { type: mongoose.Schema.Types.ObjectId, ref: "Line" }
});

module.exports = mongoose.model("Process", processSchema);
