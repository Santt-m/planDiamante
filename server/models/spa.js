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

const Spa = mongoose.model('Spa', spaSchema);
module.exports = Spa;
