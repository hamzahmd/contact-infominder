const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @access    Public

router.post(
  '/',
  [
    body('name', 'Please add a name').not().isEmpty(),
    body('email', 'Please add a valid email').isEmail(),
    body('password', 'Please enter your password with 6+ char').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

module.exports = router;

// Common https requests
// GET --> Get the data
// POST --> Post the data or add the data
// PUT --> upodate the data
// DELETE --> Delete or remove the data
