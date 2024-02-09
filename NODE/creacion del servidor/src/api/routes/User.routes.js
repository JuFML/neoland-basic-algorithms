const express = require("express");
const { upload } = require("../../middleware/files.middleware");
const { registerWithRedirect, sendCode, checkNewUser, resendCode, login, autoLogin, changePassword, sendPassword, modifyPassword, update, deleteUser, registerLargo, register } = require("../controllers/User.controllers");
const { isAuth } = require("../../middleware/auth.middleware");

const UserRoutes = express.Router()

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), register);
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);
UserRoutes.get("/register/sendMail/:id", sendCode)
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/sendPassword/:id", sendPassword);


UserRoutes.patch("/changepassword", [isAuth], modifyPassword);
UserRoutes.patch("/update/update", [isAuth], upload.single("image"), update);
UserRoutes.delete("/", [isAuth], deleteUser);

module.exports = UserRoutes