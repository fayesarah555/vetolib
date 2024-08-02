const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['veterinarian', 'owner', 'admin'],
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  specialization: {
    type: String,
    required: function() {
      return this.role === 'veterinarian';
    }
  },
  clinic_address: {
    type: String,
    required: function() {
      return this.role === 'veterinarian';
    }
  }
});

module.exports = mongoose.model('User', UserSchema);
