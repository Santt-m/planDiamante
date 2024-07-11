const Spa = require('../models/spa');

// Controlador para crear un nuevo spa
exports.createSpa = async (req, res) => {
  try {
    const { name, location, description } = req.body;
    const spa = new Spa({ name, location, description });
    await spa.save();
    res.status(201).json(spa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los spas
exports.getAllSpas = async (req, res) => {
  try {
    const spas = await Spa.find();
    res.status(200).json(spas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un spa por su ID
exports.getSpaById = async (req, res) => {
  try {
    const spa = await Spa.findById(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json(spa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un spa por su ID
exports.updateSpa = async (req, res) => {
  try {
    const { name, location, description } = req.body;
    const spa = await Spa.findByIdAndUpdate(
      req.params.id,
      { name, location, description },
      { new: true }
    );
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json(spa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un spa por su ID
exports.deleteSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndDelete(req.params.id);
    if (!spa) {
      return res.status(404).json({ message: 'Spa not found' });
    }
    res.status(200).json({ message: 'Spa deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
