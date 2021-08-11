const mongoose = require('mongoose');
// const config = require('config');
const db = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    process.exit(1);
  }
};
module.exports = connectDB;
