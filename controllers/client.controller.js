const clientModel = require("../models/client.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;
    let clients = await clientModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit);
    res.status(200).send({ data: clients });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let client = await clientModel.findById(id);
    res.status(200).send({ data: client });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let client = await clientModel.create(data);
    res.status(201).send({ data: client });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updated = await clientModel.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send({ data: updated });
  } catch (error) {
    console.log(error.message);
  }
}

async function pushOrder(req, res) {
  let { id } = req.params; // clientId
  let { orderId } = req.body;
  try {
    let updated = await clientModel.findByIdAndUpdate(
      id,
      { $push: { orders: orderId } },
      { new: true }
    );
    res.status(200).send({ data: updated });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await clientModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted client" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, findOne, create, update, pushOrder, remove };
