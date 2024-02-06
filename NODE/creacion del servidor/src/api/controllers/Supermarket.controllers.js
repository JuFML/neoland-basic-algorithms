const { deleteImgCloudinary } = require("../../middleware/files.middleware");
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

module.exports = { registerSupermarket }