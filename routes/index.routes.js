const router = require("express").Router();

const clientRoutes = require("./client.routes");
const orderRoutes = require("./order.routes");
const adminRoutes = require("./admin.routes");
const currencyTypeRoutes = require("./currency_type.routes");
const statusRoutes = require("./status.routes");
const operationRoutes = require("./operation.routes");

router.use("/client", clientRoutes);
router.use("/order", orderRoutes);
router.use("/admin", adminRoutes);
router.use("/currency-type", currencyTypeRoutes);
router.use("/status", statusRoutes);
router.use("/operation", operationRoutes);

module.exports = router;
