const express = require("express");
const router = express.Router();

const Line = require("../models/Line");

router.get("/", async (request, response) => {
  const line = await Line.find();
  return response.send(line);
});

router.get("/:id", async (request, response) => {
  const line = await Line.findById(request.params.id);
  return response.send(line);
});

router.post("/", async (request, response) => {
  const line = new Line(request.body);
  const savedLine = await line.save();
  return response.send(savedLine);
});

router.put("/:id", async (request, response) => {
  const updatedLine = await Line.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedLine);
});

router.delete("/:id", async (request, response) => {
  const deletedLine = await Line.findByIdAndRemove(request.params.id);
  return response.send(deletedLine);
});

module.exports = router;
