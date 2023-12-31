const express = require('express');
const router = express.Router();
const userCtlr = require('../controllers/user');
const {
  validateBirthday,
  validateEmail,
  validatePassword,
  validatePhone,
} = require('@bretzkierra/utils');

router.post(
  '/signup',
  validateEmail,
  validatePhone,
  validateBirthday,
  validatePassword,
  userCtlr.signup
);

module.exports = router;
