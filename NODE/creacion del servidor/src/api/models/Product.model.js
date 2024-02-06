const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    fabricante: {
      type: String,
      required: true,
      trim: true,
    },
    expirationDate: {
      type: String,
      required: true,
      trim: true,
    },
    /// cuando relacionamos un modelo de con otro lo hacemos con populate y el ref a otro modelo
    supermarket: [{ type: mongoose.Schema.Types.ObjectId, ref: "Supermarket" }],
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

