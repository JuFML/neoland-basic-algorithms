const mongoose = require('mongoose')

const SupermarketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    adress: {
      type: String,
      required: true,
      trim: true,
    },
    openingTime: {
      type: String,
      required: false,
      trim: true
    },
    closingTime: {
      type: String,
      required: false,
      trim: true
    },
    /// cuando relacionamos un modelo de con otro lo hacemos con populate y el ref a otro modelo
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Supermarket = mongoose.model("Supermarket", SupermarketSchema);

module.exports = Supermarket;

