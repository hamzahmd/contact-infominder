// Entry point to our backend
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Creating endpoints
// app.get('/', (req, res) =>
//   res.json({ msg: 'Welcome to the Contact InfoMinder API...' })
// );

// Routes
app.use('./api/users', require('./routes/users'));
app.use('./api/auth', require('./routes/auth'));
app.use('./api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
