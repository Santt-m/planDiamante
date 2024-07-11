const Therapist = require('../models/therapist');

// Controlador para crear un nuevo terapeuta
exports.createTherapist = async (req, res) => {
  try {
    const { name, specialty, description } = req.body;
    const therapist = new Therapist({ name, specialty, description });
    await therapist.save();
    res.status(201).json(therapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los terapeutas
exports.getAllTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.status(200).json(therapists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un terapeuta por su ID
exports.getTherapistById = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json(therapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un terapeuta por su ID
exports.updateTherapist = async (req, res) => {
  try {
    const { name, specialty, description } = req.body;
    const therapist = await Therapist.findByIdAndUpdate(
      req.params.id,
      { name, specialty, description },
      { new: true }
    );
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json(therapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un terapeuta por su ID
exports.deleteTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndDelete(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json({ message: 'Therapist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
