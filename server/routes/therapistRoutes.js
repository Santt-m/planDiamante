const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  getTherapists,
  getTherapist,
  createTherapist,
  updateTherapist,
  deleteTherapist
} = require('../controllers/therapistController');

const router = express.Router();

// Rutas para obtener todos los terapeutas y crear un nuevo terapeuta
router
  .route('/')
  .get(getTherapists)
  .post(protect, authorize('manager', 'Santt'), createTherapist);

// Rutas para obtener, actualizar y eliminar un terapeuta por ID
router
  .route('/:id')
  .get(getTherapist)
  .put(protect, authorize('manager', 'Santt'), updateTherapist)
  .delete(protect, authorize('manager', 'Santt'), deleteTherapist);

module.exports = router;
