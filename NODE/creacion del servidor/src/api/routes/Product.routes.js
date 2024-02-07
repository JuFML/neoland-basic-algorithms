const { upload } = require("../../middleware/files.middleware");
const { registerProduct, toggleSupermarket, getById, getAll, getByName, deleteProduct } = require("../controllers/Product.controllers");
const express = require("express")
const ProductRoutes = express.Router();

ProductRoutes.post("/register", upload.single("image"), registerProduct);
ProductRoutes.patch("/add/:id", toggleSupermarket);
ProductRoutes.get("/:id", getById);
ProductRoutes.get("/", getAll);
ProductRoutes.get("/byName/:name", getByName);
ProductRoutes.delete("/:id", deleteProduct);

module.exports = ProductRoutes;