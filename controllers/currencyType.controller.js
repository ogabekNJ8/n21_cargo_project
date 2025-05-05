const currencyTypeModel = require("../models/currencyType.models");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let currencyTypes = await currencyTypeModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: currencyTypes });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let currencyType = await currencyTypeModel.findById(id);
    res.status(200).send({ data: currencyType });
  } catch (error) {
    console.log(error.message);
  }
}


async function create(req, res) {
  let data = req.body;
  try {
    let currencyType = await currencyTypeModel.create(data);
    res.status(201).send({ data: currencyType });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateCurrencyType = await currencyTypeModel.findByIdAndUpdate(
      id,
      data
    );
    res.status(200).send({ data: updateCurrencyType });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await currencyTypeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted currency type" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
