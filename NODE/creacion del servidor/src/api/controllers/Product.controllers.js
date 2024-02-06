const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Product = require("../models/Product.model");

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

module.exports = { registerProduct }