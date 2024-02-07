const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Product = require("../models/Product.model");
const Supermarket = require("../models/Supermarket.model");


const registerProduct = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await Product.syncIndexes();

    const productExist = await Product.findOne({ name: req.body.name });
    if (!productExist) {
      const newProduct = new Product({ ...req.body, image: catchImg });

      try {
        const productSave = await newProduct.save();

        if (productSave) {
          return res.status(200).json({
            product: productSave
          });
        } else {
          return res.status(404).json("product not saved");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json("this product already exist");
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

const toggleSupermarket = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { supermarkets } = req.body;
    const productById = await Product.findById(id);

    if (productById) {
      const arrayIdSupermarkets = supermarkets.split(",");
      Promise.all(
        arrayIdSupermarkets.map(async (supermarket, index) => {
          if (productById.supermarkets.includes(supermarket)) {

            try {
              await Product.findByIdAndUpdate(id, {
                $pull: { supermarkets: supermarket },
              });

              try {
                await Supermarket.findByIdAndUpdate(supermarket, {
                  $pull: { products: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update supermarket",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update product",
                message: error.message,
              }) && next(error);
            }
          } else {

            try {
              await Product.findByIdAndUpdate(id, {
                $push: { supermarkets: supermarket },
              });
              try {
                await Supermarket.findByIdAndUpdate(supermarket, {
                  $push: { products: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update supermarket",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update product",
                message: error.message,
              }) && next(error);
            }
          }
        })
      ).catch((error) => res.status(404).json(error.message))
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Product.findById(id).populate("supermarkets"),
          });
        });
    } else {
      return res.status(404).json("este producto no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productById = await Product.findById(id);
    if (productById) {
      return res.status(200).json(productById);
    } else {
      return res.status(404).json("no se ha encontrado el producto");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allProducts = await Product.find().populate("supermarkets");

    if (allProducts.length > 0) {
      return res.status(200).json(allProducts);
    } else {
      return res.status(404).json("no se han encontrado produtos");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// nos devuelve un array de elementos
    const productByName = await Product.find({ name });
    if (productByName.length > 0) {
      return res.status(200).json(productByName);
    } else {
      return res.status(404).json("no se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (product) {
      // lo buscamos para vr si sigue existiendo o no
      const findByIdProduct = await Product.findById(id);

      try {
        const test = await Supermarket.updateMany(
          { product: id },
          { $pull: { product: id } }
        );
        console.log(test);

        return res.status(findByIdProduct ? 404 : 200).json({
          deleteTest: findByIdProduct ? false : true,
        });
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Supermarket",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { registerProduct, toggleSupermarket, getById, getAll, getByName, deleteProduct }