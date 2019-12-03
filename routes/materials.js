const express = require("express");
const router = express.Router();

const Material = require("../models/Material");

router.get("/", async (request, response) => {
  const materials = await Material.find();
  return response.send(materials);
});

router.post("/", async (request, response) => {
  const material = new Material(request.body);
  const savedMaterial = await material.save();
  return response.send(savedMaterial);
});

module.exports = router;
