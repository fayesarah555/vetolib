const User = require('../models/user.model');

// Create a new veterinarian
exports.createVeterinarian = async (req, res) => {
  try {
    req.body.role = 'veterinarian';
    const veterinarian = new User(req.body);
    await veterinarian.save();
    res.status(201).send(veterinarian);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all veterinarians
exports.getAllVeterinarians = async (req, res) => {
  try {
    const veterinarians = await User.find({ role: 'veterinarian' });
    res.status(200).send(veterinarians);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get veterinarian by ID
exports.getVeterinarianById = async (req, res) => {
  try {
    const veterinarian = await User.findOne({ _id: req.params.id, role: 'veterinarian' });
    if (!veterinarian) {
      return res.status(404).send();
    }
    res.status(200).send(veterinarian);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update veterinarian by ID
exports.updateVeterinarian = async (req, res) => {
  try {
    const veterinarian = await User.findOneAndUpdate({ _id: req.params.id, role: 'veterinarian' }, req.body, { new: true, runValidators: true });
    if (!veterinarian) {
      return res.status(404).send();
    }
    res.status(200).send(veterinarian);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete veterinarian by ID
exports.deleteVeterinarian = async (req, res) => {
  try {
    const veterinarian = await User.findOneAndDelete({ _id: req.params.id, role: 'veterinarian' });
    if (!veterinarian) {
      return res.status(404).send();
    }
    res.status(200).send(veterinarian);
  } catch (error) {
    res.status(500).send(error);
  }
};
