const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  getSpas,
  getSpaById,
  createSpa,
  updateSpa,
  deleteSpa,
} = require('../controllers/spaController');

const router = express.Router();

// Rutas para obtener todos los spas y crear un nuevo spa
router.route('/')
  .get(getSpas)
  .post(protect, authorize('manager', 'Santt'), createSpa);

// Rutas para obtener, actualizar y eliminar un spa por ID
router.route('/:id')
  .get(getSpaById)
  .put(protect, authorize('manager', 'Santt'), updateSpa)
  .delete(protect, authorize('manager', 'Santt'), deleteSpa);

module.exports = router;
