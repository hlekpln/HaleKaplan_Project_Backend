const express = require("express");
const router = express.Router();

const SurfacePreparation = require("../models/SurfacePreparation");

router.get("/", async (request, response) => {
  const surfacePreparations = await SurfacePreparation.find();
  return response.send(surfacePreparations);
});

router.get("/:id", async (request, response) => {
  const surfacePreparation = await SurfacePreparation.findById(
    request.params.id
  );
  return response.send(surfacePreparation);
});

router.post("/", async (request, response) => {
  const surfacePreparation = new Production(request.body);
  const savedSurfacePreparation = await surfacePreparation.save();
  return response.send(savedSurfacePreparation);
});

router.put("/:id", async (request, response) => {
  const updatedSurfacePreparation = await SurfacePreparation.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedSurfacePreparation);
});

router.delete("/:id", async (request, response) => {
  const deletedSurfacePreparation = await SurfacePreparation.findByIdAndRemove(
    request.params.id
  );
  return response.send(deletedSurfacePreparation);
});

module.exports = router;
