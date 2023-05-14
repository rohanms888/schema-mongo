const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
});

const City = mongoose.model('City', citySchema);

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  City,
  User,
};
