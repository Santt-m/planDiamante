const Spa = require('../models/spa');

exports.getSpas = async (req, res) => {
  try {
    const spas = await Spa.find();
    res.status(200).json(spas);
  } catch (error) {
    console.error('Error fetching spas:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getSpaById = async (req, res) => {
  try {
    const spa = await Spa.findById(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json(spa);
  } catch (error) {
    console.error('Error fetching spa:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createSpa = async (req, res) => {
  try {
    const spa = new Spa(req.body);
    await spa.save();
    res.status(201).json(spa);
  } catch (error) {
    console.error('Error creating spa:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json(spa);
  } catch (error) {
    console.error('Error updating spa:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndDelete(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json({ message: 'Spa deleted' });
  } catch (error) {
    console.error('Error deleting spa:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
