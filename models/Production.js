const mongoose = require("mongoose");

const productionSchema = new mongoose.Schema({
  date: Date,
  start: Number,
  finish: Number,
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  line: { type: mongoose.Schema.Types.ObjectId, ref: "Line" },

  painted: Number,
  inspected: Number,
  returned: Number,
  employees: Number,
  usedpaint: { box: Number, Used: Number }
});

module.exports = mongoose.model("Production", productionSchema);
