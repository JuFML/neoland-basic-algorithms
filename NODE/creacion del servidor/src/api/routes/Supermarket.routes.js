const { upload } = require("../../middleware/files.middleware");
const { registerSupermarket, toggleProduct, getById, getAll, getByName, deleteSupermarket } = require("../controllers/Supermarket.controllers");
const express = require("express");
const SupermarketRoutes = express.Router();

SupermarketRoutes.post("/register", upload.single("image"), registerSupermarket);
SupermarketRoutes.patch("/add/:id", toggleProduct);
SupermarketRoutes.get("/:id", getById);
SupermarketRoutes.get("/", getAll);
SupermarketRoutes.get("/byName/:name", getByName);
SupermarketRoutes.delete("/:id", deleteSupermarket);

module.exports = SupermarketRoutes;