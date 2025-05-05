const { Router } = require("express");

const clientRoutes = require("./client.routes");
const orderRoutes = require("./order.routes");
const currencyTypeRoutes = require("./currencyType.routes");

const router = Router();

router.use("/clients", clientRoutes);
router.use("/orders", orderRoutes);
router.use("/currency_types", currencyTypeRoutes);

module.exports = router;
