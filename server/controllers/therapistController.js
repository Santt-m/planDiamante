const Therapist = require('../models/therapist');

// @desc      Get all therapists
// @route     GET /api/therapists
// @access    Public
exports.getTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.status(200).json(therapists);
  } catch (err) {
    console.error('Error fetching therapists:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc      Get single therapist
// @route     GET /api/therapists/:id
// @access    Public
exports.getTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json(therapist);
  } catch (err) {
    console.error('Error fetching therapist:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc      Create new therapist
// @route     POST /api/therapists
// @access    Private
exports.createTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.create(req.body);
    res.status(201).json(therapist);
  } catch (err) {
    console.error('Error creating therapist:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc      Update therapist
// @route     PUT /api/therapists/:id
// @access    Private
exports.updateTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json(therapist);
  } catch (err) {
    console.error('Error updating therapist:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc      Delete therapist
// @route     DELETE /api/therapists/:id
// @access    Private
exports.deleteTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndDelete(req.params.id);
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json({ message: 'Therapist deleted' });
  } catch (err) {
    console.error('Error deleting therapist:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
