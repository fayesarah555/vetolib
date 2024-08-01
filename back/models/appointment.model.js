const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  animal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal',
    required: true,
  },
  vet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  appointment_date: {
    type: Date,
    required: true,
  },
  appointment_time: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    required: true,
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
