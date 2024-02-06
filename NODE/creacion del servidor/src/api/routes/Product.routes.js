const { upload } = require("../../middleware/files.middleware");
const { registerProduct } = require("../controllers/Product.controllers");
const express = require("express")
const ProductRoutes = express.Router();

ProductRoutes.post("/register", upload.single("image"), registerProduct);

module.exports = ProductRoutes;