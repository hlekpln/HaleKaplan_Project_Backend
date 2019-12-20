const express = require("express");
const router = express.Router();

const PowderCoat = require("../models/PowderCoat");

router.get("/", async (request, response) => {
  const powderCoats = await PowderCoat.find();
  console.log("bak")
  return response.send(powderCoats);
});

router.get("/:id", async (request, response) => {
  const powderCoat = await PowderCoat.findById(request.params.id);
  return response.send(powderCoat);
});

router.post("/", async (request, response) => {
  console.log(request.body);

  const powderCoat = new PowderCoat(request.body);
  const savedPowderCoat = await powderCoat.save();
  return response.send(savedPowderCoat);
});

router.put("/:id", async (request, response) => {
  const updatedPowderCoat = await PowderCoat.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedPowderCoat);
});

router.delete("/:id", async (request, response) => {
  const deletedPowderCoat = await PowderCoat.findByIdAndRemove(
    request.params.id
  );
  return response.send(deletedPowderCoat);
});

module.exports = router;
