const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// Configurar variables de entorno
dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Habilitar CORS
app.use(cors());

app.use(express.json());

// Definir rutas
const spaRoutes = require('./routes/spaRoutes');
const therapistRoutes = require('./routes/therapistRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/spas', spaRoutes);
app.use('/api/therapists', therapistRoutes);
app.use('/api/auth', authRoutes);

// Función para obtener la URI de MongoDB según el tipo de acceso
const getMongoURI = (accessType) => {
  let publicKey, privateKey;

  switch (accessType) {
    case 'readonly':
      publicKey = process.env.MONGO_READONLY_PUBLIC_KEY;
      privateKey = process.env.MONGO_READONLY_PRIVATE_KEY;
      break;
    case 'readwrite':
      publicKey = process.env.MONGO_READWRITE_PUBLIC_KEY;
      privateKey = process.env.MONGO_READWRITE_PRIVATE_KEY;
      break;
    case 'admin':
      publicKey = process.env.MONGO_ADMIN_PUBLIC_KEY;
      privateKey = process.env.MONGO_ADMIN_PRIVATE_KEY;
      break;
    default:
      throw new Error('Invalid access type');
  }

  return `mongodb+srv://${publicKey}:${privateKey}@cluster0.81svvx6.mongodb.net/planDiamanteDB?retryWrites=true&w=majority`;
};

// Conectar a la base de datos con nivel de acceso de lectura por defecto
const connectDB = async (accessType = 'readonly') => {
  const mongoose = require('mongoose');
  try {
    const mongoURI = getMongoURI(accessType);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB(); // Puedes cambiar 'readonly' a 'readwrite' o 'admin' según sea necesario

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
