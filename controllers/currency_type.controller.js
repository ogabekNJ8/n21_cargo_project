const currencyTypeModel = require("../models/currency_type.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;
    let currencies = await currencyTypeModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit);
    res.status(200).send({ data: currencies });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let currency = await currencyTypeModel.findById(id);
    res.status(200).send({ data: currency });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let currency = await currencyTypeModel.create(data);
    res.status(201).send({ data: currency });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updated = await currencyTypeModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send({ data: updated });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await currencyTypeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted currencyType" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, findOne, create, update, remove };
