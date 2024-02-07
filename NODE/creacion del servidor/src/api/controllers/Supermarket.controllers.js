const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Product = require("../models/Product.model");
const Supermarket = require("../models/Supermarket.model");

const registerSupermarket = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await Supermarket.syncIndexes();

    const supermarketExist = await Supermarket.findOne({ name: req.body.name });
    if (!supermarketExist) {
      const newSupermarket = new Supermarket({ ...req.body, image: catchImg });

      try {
        const supermarketSave = await newSupermarket.save();

        if (supermarketSave) {
          return res.status(200).json({
            supermarket: supermarketSave
          });
        } else {
          return res.status(404).json("supermarket not saved");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json("this supermarket already exist");
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

const toggleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { products } = req.body;
    const supermarketById = await Supermarket.findById(id);

    if (supermarketById) {
      const arrayIdProducts = products.split(",");
      Promise.all(
        arrayIdProducts.map(async (product, index) => {
          if (supermarketById.products.includes(product)) {

            try {
              await Supermarket.findByIdAndUpdate(id, {
                $pull: { products: product },
              });

              try {
                await Product.findByIdAndUpdate(product, {
                  $pull: { supermarkets: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update product",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update supermarket",
                message: error.message,
              }) && next(error);
            }
          } else {

            try {
              await Supermarket.findByIdAndUpdate(id, {
                $push: { products: product },
              });
              try {
                await Product.findByIdAndUpdate(product, {
                  $push: { supermarkets: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update product",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update supermarket",
                message: error.message,
              }) && next(error);
            }
          }
        })
      ).catch((error) => res.status(404).json(error.message))
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Supermarket.findById(id).populate("products"),
          });
        });
    } else {
      return res.status(404).json("este supermarket no existe");
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
    const supermarketById = await Supermarket.findById(id);
    if (supermarketById) {
      return res.status(200).json(supermarketById);
    } else {
      return res.status(404).json("no se ha encontrado el supermercado");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allSupermarkets = await Supermarket.find().populate("products");

    if (allSupermarkets.length > 0) {
      return res.status(200).json(allSupermarkets);
    } else {
      return res.status(404).json("no se han encontrado supermercados");
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
    const supermarketByName = await Supermarket.find({ name });
    if (supermarketByName.length > 0) {
      return res.status(200).json(supermarketByName);
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

const deleteSupermarket = async (req, res, next) => {
  try {
    const { id } = req.params;
    const supermarket = await Supermarket.findByIdAndDelete(id);
    if (supermarket) {
      // lo buscamos para vr si sigue existiendo o no
      const findByIdSupermarket = await Supermarket.findById(id);

      try {
        const test = await Product.updateMany(
          { supermarket: id },
          { $pull: { supermarket: id } }
        );
        console.log(test);

        return res.status(findByIdSupermarket ? 404 : 200).json({
          deleteTest: findByIdSupermarket ? false : true,
        });
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Product",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { registerSupermarket, toggleProduct, getById, getAll, getByName, deleteSupermarket }