const Spa = require('../models/spa');

// Obtener todos los spas
exports.getSpas = async (req, res) => {
  try {
    const spas = await Spa.find();
    res.status(200).json({ success: true, data: spas });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Obtener un spa por ID
exports.getSpaById = async (req, res) => {
  try {
    const spa = await Spa.findById(req.params.id);
    if (!spa) {
      return res.status(404).json({ success: false, error: 'Spa not found' });
    }
    res.status(200).json({ success: true, data: spa });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Crear un nuevo spa
exports.createSpa = async (req, res) => {
  try {
    const spa = await Spa.create(req.body);
    res.status(201).json({ success: true, data: spa });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Actualizar un spa
exports.updateSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!spa) {
      return res.status(404).json({ success: false, error: 'Spa not found' });
    }
    res.status(200).json({ success: true, data: spa });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Eliminar un spa
exports.deleteSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndDelete(req.params.id);
    if (!spa) {
      return res.status(404).json({ success: false, error: 'Spa not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
