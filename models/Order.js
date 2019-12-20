const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderDate: Date,
  no: Number,
  customerName: String,
  productNo: Number,
  productName: String,
  orderPiece: Number,
  price: Number,
  material: String,
  size: { width: Number, length: Number },
  //m2 takım metretül
  thickness: Number,
  //termin ekle
  color: { type: mongoose.Schema.Types.ObjectId, ref: "PowderCoat" },

  ////// üretim kısmı
  surfacePreparation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SurfacePreparation"
  },
  productionDetail: [
    {
      start: Number,
      finish: Number,
      line: { type: mongoose.Schema.Types.ObjectId, ref: "Line" },
      usedpaint: { box: Number, Used: Number },
      employees: Number,
      painted: Number,
      inspected: Number,
      returned: Number
    }
  ],
  customerWaybill: { no: Number, Pieces: Number, date: Date },
  waybill: [{ no: Number, Pieces: Number, date: Date }]
});

module.exports = mongoose.model("Order", orderSchema);
