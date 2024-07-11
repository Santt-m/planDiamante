const express = require('express');
const router = express.Router();
const spaController = require('../controllers/spaController');

// Ruta para crear un nuevo spa
router.post('/', spaController.createSpa);

// Ruta para obtener todos los spas
router.get('/', spaController.getAllSpas);

// Ruta para obtener un spa por su ID
router.get('/:id', spaController.getSpaById);

// Ruta para actualizar un spa por su ID
router.put('/:id', spaController.updateSpa);

// Ruta para eliminar un spa por su ID
router.delete('/:id', spaController.deleteSpa);

module.exports = router;
