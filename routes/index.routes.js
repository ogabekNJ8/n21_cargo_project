

const router = require("express").Router();

const clientRouter = require("./client.routes")

router.use("/clients", clientRouter)

module.exports = router;
