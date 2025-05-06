const operationModel = require("../models/operation.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;
    let operations = await operationModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit);
    res.status(200).send({ data: operations });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let operation = await operationModel.findById(id);
    res.status(200).send({ data: operation });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let operation = await operationModel.create(data);
    res.status(201).send({ data: operation });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateOperation = await operationModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send({ data: updateOperation });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await operationModel.findByIdAndDelete(id);
    res.status(201).send({ message: "Deleted operation" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, findOne, create, update, remove };
