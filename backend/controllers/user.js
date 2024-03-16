const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const {
  isValidText,
  isValidEmail,
  isValidPassword,
} = require("../util/validation");

function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.TOKEN_SECRET);
}

const signUpUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validation
  let errors = {};
  if (!isValidEmail(email)) {
    errors.email = "Invalid email";
  }
  if (!isValidPassword(password)) {
    errors.password = "Invalid password";
  }
  console.log(errors);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Bad request. Some parameters are passing",
      errors,
    });
  }
  try {
    //checking if user already exists
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists. Please login" });
    }
    //creating new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await User.create({
      email,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ success: true, message: "User Created", data: response });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = {};
  if (!isValidEmail(email)) {
    errors.email = "Invalid email";
  }

  if (Object.keys(errors).length > 0) {
    return res
      .status(400)
      .json({ message: "Bad request. Some parameters are passing", errors });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      //user not registered
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      //unauthorized
      return res.status(401).json({
        success: false,
        message: "Email or password is incorrect",
      });
    }
    const token = generateToken(user.id);
    return res.status(200).json({
      success: true,
      message: "Successful Login",
      token,
    });
  } catch (err) {
    next(err);
  }
};

const getUserDetails = async (req, res, next) => {
  try {
    return res.status(200).json({ user: req.user });
  } catch (err) {
    next(err);
  }
};

const updateUserDetails = async (req, res, next) => {
  const { name, profilePicture } = req.body;
  if (!isValidText(name)) {
    return res
      .status(400)
      .json({ message: "Bad request. Some parameters are passing" });
  }
  try {
    await User.update(
      { name, profilePicture, isProfileComplete: true },
      { where: { id: req.user.id } }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};

module.exports = { signUpUser, loginUser, getUserDetails, updateUserDetails };
