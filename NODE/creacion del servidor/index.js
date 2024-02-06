const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const { configCloudinary } = require("./src/middleware/files.middleware")

const app = express()
dotenv.config()
configCloudinary()

const cors = require("cors");
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

const UserRoutes = require("./src/api/routes/User.routes")
app.use("/api/users/", UserRoutes);

const ProductRoutes = require("./src/api/routes/Product.routes");
app.use("/api/products/", ProductRoutes);

const SupermarketRoutes = require("./src/api/routes/Supermarket.routes");
app.use("/api/supermarkets/", SupermarketRoutes);

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(() => {
  console.log("Banco conectado")
  app.listen(PORT, () => console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`))
})

