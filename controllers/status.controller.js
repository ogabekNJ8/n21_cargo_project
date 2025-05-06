const statusModel = require("../models/status.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;
    let statuses = await statusModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit);
    res.status(200).send({ data: statuses });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let status = await statusModel.findById(id);
    res.status(200).send({ data: status });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let status = await statusModel.create(data);
    res.status(201).send({ data: status });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateStatus = await statusModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send({ data: updateStatus });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await statusModel.findByIdAndDelete(id);
    res.status(201).send({ message: "Deleted status" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, findOne, create, update, remove };
