const express = require('express');
const {
  createUser,
  loginUser,
  getUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', getUser);

module.exports = router;
