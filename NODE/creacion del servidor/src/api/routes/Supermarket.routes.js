const { upload } = require("../../middleware/files.middleware");
const { registerSupermarket } = require("../controllers/Supermarket.controllers");
const express = require("express");
const SupermarketRoutes = express.Router();

SupermarketRoutes.post("/register", upload.single("image"), registerSupermarket);

module.exports = SupermarketRoutes;