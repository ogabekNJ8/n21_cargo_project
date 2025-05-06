const currencyTypeModel = require("../models/currency_type.models");
const currencyTypeValidation = require("../validations/currencyTypeValidation");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = parseInt(limit) || 10;
    offset = parseInt(offset) || 1;

    let currencyTypes = await currencyTypeModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: currencyTypes });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let currencyType = await currencyTypeModel.findById(id);
    res.status(200).send({ data: currencyType });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    const { error } = currencyTypeValidation.validate(data);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let currencyType = await currencyTypeModel.create(data);
    res.status(201).send({ data: currencyType });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    const { error } = currencyTypeValidation.validate(data);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let updateCurrencyType = await currencyTypeModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
    res.status(200).send({ data: updateCurrencyType });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await currencyTypeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted currency type" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
