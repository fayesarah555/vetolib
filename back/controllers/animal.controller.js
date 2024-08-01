const Animal = require('../models/animal.model');

// Create a new animal
exports.createAnimal = async (req, res) => {
  try {
    const animal = new Animal(req.body);
    await animal.save();
    res.status(201).send(animal);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all animals
exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).send(animals);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get animal by ID
exports.getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).send();
    }
    res.status(200).send(animal);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update animal by ID
exports.updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!animal) {
      return res.status(404).send();
    }
    res.status(200).send(animal);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete animal by ID
exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) {
      return res.status(404).send();
    }
    res.status(200).send(animal);
  } catch (error) {
    res.status(500).send(error);
  }
};
