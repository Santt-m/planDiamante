const express = require('express');
const { getSpas, getSpaById, createSpa, updateSpa, deleteSpa } = require('../controllers/spaController');
const router = express.Router();

// Rutas para obtener todos los spas y crear un nuevo spa
router.route('/')
  .get(getSpas)
  .post(createSpa);

// Rutas para obtener, actualizar y eliminar un spa por ID
router.route('/:id')
  .get(getSpaById)
  .put(updateSpa)
  .delete(deleteSpa);

module.exports = router;
