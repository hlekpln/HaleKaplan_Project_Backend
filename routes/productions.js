const express = require("express");
const router = express.Router();

const Production = require("../models/Production");

router.get("/", async (request, response) => {
  const productions = await Production.find().populate("paint");
  return response.send(productions);
});

router.get("/:id", async (request, response) => {
  const production = await Production.findById(request.params.id);
  return response.send(production);
});

router.post("/", async (request, response) => {
  const production = new Production(request.body);
  const savedProduction = await production.save();
  return response.send(savedProduction);
});

router.put("/:id", async (request, response) => {
  const updatedProduction = await Production.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedProduction);
});

router.delete("/:id", async (request, response) => {
  const deletedProduction = await Production.findByIdAndRemove(
    request.params.id
  );
  return response.send(deletedProduction);
});

module.exports = router;
