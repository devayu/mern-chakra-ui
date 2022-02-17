const express = require("express");
const protectRoute = require("../middlewares/authMiddleware");
const {
  createUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/me", protectRoute, getUser);

module.exports = router;
