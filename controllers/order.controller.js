const orderModel = require("../models/order.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;
    let orders = await orderModel
      .find({})
      .populate("clientId")
      .populate("adminId")
      .populate("currencyTypeId")
      .populate("statusId")
      .limit(limit)
      .skip((offset - 1) * limit);
    res.status(200).send({ data: orders });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let order = await orderModel
      .findById(id)
      .populate("clientId")
      .populate("adminId")
      .populate("currencyTypeId")
      .populate("statusId");
    res.status(200).send({ data: order });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let order = await orderModel.create(data);
    res.status(201).send({ data: order });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updated = await orderModel.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send({ data: updated });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await orderModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted order" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, findOne, create, update, remove };
