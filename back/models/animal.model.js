const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  date_of_birth: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  microchip_number: {
    type: String,
  }
});

module.exports = mongoose.model('Animal', AnimalSchema);
