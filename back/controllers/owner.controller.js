const Owner = require('../models/owner.model');

// Create a new owner
exports.createOwner = async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).send(owner);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all owners
exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).send(owners);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get owner by ID
exports.getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      return res.status(404).send();
    }
    res.status(200).send(owner);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update owner by ID
exports.updateOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!owner) {
      return res.status(404).send();
    }
    res.status(200).send(owner);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete owner by ID
exports.deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);
    if (!owner) {
      return res.status(404).send();
    }
    res.status(200).send(owner);
  } catch (error) {
    res.status(500).send(error);
  }
};
