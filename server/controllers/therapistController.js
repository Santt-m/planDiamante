const Therapist = require('../models/Therapist');

// @desc      Get all therapists
// @route     GET /api/therapists
// @access    Public
exports.getTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.status(200).json({ success: true, data: therapists });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc      Get single therapist
// @route     GET /api/therapists/:id
// @access    Public
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

// @desc      Create new therapist
// @route     POST /api/therapists
// @access    Private
exports.createTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.create(req.body);
    res.status(201).json({ success: true, data: therapist });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc      Update therapist
// @route     PUT /api/therapists/:id
// @access    Private
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

// @desc      Delete therapist
// @route     DELETE /api/therapists/:id
// @access    Private
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
