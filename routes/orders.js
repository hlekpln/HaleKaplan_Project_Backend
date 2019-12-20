const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.get("/", async (request, response) => {
  const orders = await Order.find();
  return response.send(orders);
});

router.get("/:id", async (request, response) => {
  const order = await Order.findById(request.params.id);
  return response.send(order);
});

router.post("/", async (request, response) => {
  const order = new Order(request.body);
  const savedOrder = await order.save();
  return response.send(savedOrder);
});

router.put("/:id", async (request, response) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedOrder);
});

router.delete("/:id", async (request, response) => {
  const deletedOrder = await Order.findByIdAndRemove(request.params.id);
  return response.send(deletedOrder);
});

module.exports = router;
