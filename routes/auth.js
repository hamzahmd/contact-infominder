const express = require('express');

const router = express.Router();

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route     POST api/auth
// @desc      Auth user & get Token
// @access    Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;

// Common https requests
// GET --> Get the data
// POST --> Post the data or add the data
// PUT --> upodate the data
// DELETE --> Delete or remove the data
