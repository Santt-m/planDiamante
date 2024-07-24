const Therapist = require('../models/therapist');

// Obtener todos los terapeutas
exports.getTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();
    console.log('Therapists:', therapists);
    res.status(200).json({ success: true, data: therapists });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Obtener un terapeuta por ID
exports.getTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ success: false, error: 'Therapist not found' });
    }
    res.status(200).json({ success: true, data: therapist });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Crear un nuevo terapeuta
exports.createTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.create(req.body);
    res.status(201).json({ success: true, data: therapist });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Actualizar un terapeuta
exports.updateTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!therapist) {
      return res.status(404).json({ success: false, error: 'Therapist not found' });
    }
    res.status(200).json({ success: true, data: therapist });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Eliminar un terapeuta
exports.deleteTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndDelete(req.params.id);
    if (!therapist) {
      return res.status(404).json({ success: false, error: 'Therapist not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
