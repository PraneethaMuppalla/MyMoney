const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function authUser(req, res, next) {
  try {
    const token = req.header("Authorization");
    const userInformation = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = userInformation.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User is not authorized" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
}
module.exports = authUser;
