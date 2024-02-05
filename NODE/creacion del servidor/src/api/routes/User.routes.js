const express = require("express");
const { upload } = require("../../middleware/files.middleware");
const { registerWithRedirect, sendCode, checkNewUser, resendCode, login, autoLogin, changePassword, sendPassword } = require("../controllers/User.controllers");

const UserRoutes = express.Router()

UserRoutes.post("/register", upload.single("image"), registerWithRedirect);
UserRoutes.get("/register/sendMail/:id", sendCode)
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/sendPassword/:id", sendPassword);

module.exports = UserRoutes