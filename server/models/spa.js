const mongoose = require('mongoose');

const spaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL de la imagen
    required: true
  }
});

module.exports = mongoose.model('Spa', spaSchema);
