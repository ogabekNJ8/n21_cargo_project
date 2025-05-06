const router = require("express").Router();

const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/status.controller");

router.get("/", findAll);
router.post("/", create);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
