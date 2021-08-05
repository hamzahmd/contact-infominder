// Entry point to our backend

const express = require('express');

const app = express();
// Creating endpoints
app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact InfoMinder API...' })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
