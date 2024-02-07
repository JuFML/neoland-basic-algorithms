const { upload } = require("../../middleware/files.middleware");
const { registerProduct, toggleSupermarket, getById, getAll, getByName } = require("../controllers/Product.controllers");
const express = require("express")
const ProductRoutes = express.Router();

ProductRoutes.post("/register", upload.single("image"), registerProduct);
ProductRoutes.patch("/add/:id", toggleSupermarket);
ProductRoutes.get("/:id", getById);
ProductRoutes.get("/", getAll);
ProductRoutes.get("/byName/:name", getByName);

module.exports = ProductRoutes;