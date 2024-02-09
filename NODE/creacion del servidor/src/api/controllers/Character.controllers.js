const enumOk = require("../../utils/enumOk");
const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");

const create = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {

    await Character.syncIndexes();
    const newCharacter = new Character(req.body);

    if (req.file) {
      newCharacter.image = catchImg;
    } else {
      newCharacter.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    try {
      const saveCharacter = await newCharacter.save();
      if (saveCharacter) {

        return res.status(200).json(saveCharacter);
      } else {
        return res
          .status(404)
          .json("No se ha podido guardar el elemento en la DB ❌");
      }
    } catch (error) {
      return res.status(404).json("error general saved character");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg);

    return (
      res.status(404).json({
        messege: "error en el creado del elemento",
        error: error,
      }) && next(error)
    );
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);
    if (characterById) {
      return res.status(200).json(characterById);
    } else {
      return res.status(404).json("no se ha encontrado el character");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allCharacter = await Character.find().populate("movies");
    /** el find nos devuelve un array */
    if (allCharacter.length > 0) {
      return res.status(200).json(allCharacter);
    } else {
      return res.status(404).json("no se han encontrado characters");
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

    const characterByName = await Character.find({ name });
    if (characterByName.length > 0) {
      return res.status(200).json(characterByName);
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

const update = async (req, res, next) => {
  await Character.syncIndexes();
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);
    if (characterById) {
      const oldImg = characterById.image;

      const customBody = {
        _id: characterById._id,
        image: req.file?.path ? catchImg : oldImg,
        name: req.body?.name ? req.body?.name : characterById.name,
      };

      if (req.body?.gender) {
        const resultEnum = enumOk(req.body?.gender);
        customBody.gender = resultEnum.check
          ? req.body?.gender
          : characterById.gender;
      }

      try {
        await Character.findByIdAndUpdate(id, customBody);
        if (req.file?.path) {
          deleteImgCloudinary(oldImg);
        }

        //** ------------------------------------------------------------------- */
        //** VAMOS A TESTEAR EN TIEMPO REAL QUE ESTO SE HAYA HECHO CORRECTAMENTE */
        //** ------------------------------------------------------------------- */

        const characterByIdUpdate = await Character.findById(id);
        const elementUpdate = Object.keys(req.body);

        let test = {};

        elementUpdate.forEach((item) => {
          if (req.body[item] === characterByIdUpdate[item]) {
            test[item] = true;
          } else {
            test[item] = false;
          }
        });

        if (catchImg) {
          characterByIdUpdate.image === catchImg
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }

        let acc = 0;
        for (clave in test) {
          test[clave] == false && acc++;
        }

        if (acc > 0) {
          return res.status(404).json({
            dataTest: test,
            update: false,
          });
        } else {
          return res.status(200).json({
            dataTest: test,
            update: true,
          });
        }
      } catch (error) { }
    } else {
      return res.status(404).json("este character no existe");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await Character.findByIdAndDelete(id);
    if (character) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdCharacter = await Character.findById(id);

      try {
        const test = await Movie.updateMany(
          { characters: id },
          { $pull: { characters: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { charactersFav: id },
            { $pull: { charactersFav: id } }
          );

          return res.status(finByIdCharacter ? 404 : 200).json({
            deleteTest: finByIdCharacter ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Movie",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  create,
  getById,
  getAll,
  getByName,
  update,
  deleteCharacter,
};
