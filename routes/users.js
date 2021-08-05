const express = require('express');

const router = express.Router();

// @route     POST api/users
// @desc      Register a user
// @access    Public

router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;

// Common https requests
// GET --> Get the data
// POST --> Post the data or add the data
// PUT --> upodate the data
// DELETE --> Delete or remove the data
