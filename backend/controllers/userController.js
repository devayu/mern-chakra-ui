const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
// @desc Create user
// @route POST /api/users
// @access Public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all the required fields');
  }

  //if user already exits
  const userExists = await User.findOne({ email });

  if (userExists) {
    // instead of error we can also login the user
    res.status(400);
    throw new Error('User already exists with the same Email id');
  }
  // Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPass,
  });
  if (user) {
    res.status(200).json({
      message: 'user created',
      _id: user.id,
      name: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'User Logged in',
  });
});
// @desc Get user
// @route GET /api/users/me
// @access Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'get user data',
  });
});
module.exports = {
  createUser,
  loginUser,
  getUser,
};
