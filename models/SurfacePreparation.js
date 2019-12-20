const mongoose = require("mongoose");

const surfacePreparationSchema = new mongoose.Schema({
  material: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
  bath: String
});

module.exports = mongoose.model("SurfacePreparation", surfacePreparationSchema);
