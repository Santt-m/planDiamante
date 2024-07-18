const Spa = require('../models/spa');

const getSpas = async (req, res) => {
  try {
    const spas = await Spa.find({});
    res.status(200).json(spas);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const getSpaById = async (req, res) => {
  try {
    const spa = await Spa.findById(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json(spa);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const createSpa = async (req, res) => {
  const { name, location, services } = req.body;
  try {
    const spa = new Spa({ name, location, services });
    const createdSpa = await spa.save();
    res.status(201).json(createdSpa);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateSpa = async (req, res) => {
  const { name, location, services } = req.body;
  try {
    const spa = await Spa.findById(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    spa.name = name;
    spa.location = location;
    spa.services = services;
    const updatedSpa = await spa.save();
    res.status(200).json(updatedSpa);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteSpa = async (req, res) => {
  try {
    const spa = await Spa.findById(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    await spa.remove();
    res.status(200).json({ message: 'Spa removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getSpas,
  getSpaById,
  createSpa,
  updateSpa,
  deleteSpa,
};
