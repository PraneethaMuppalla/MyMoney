const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const authUser = require("../middlewares/auth");

router.post("/sign-up", userController.signUpUser);
router.post("/login", userController.loginUser);
router.get("/get-details", authUser, userController.getUserDetails);
router.put("/update-details", authUser, userController.updateUserDetails);

module.exports = router;
