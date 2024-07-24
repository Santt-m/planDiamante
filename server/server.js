// Importar módulos necesarios
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

// Configurar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Configuración de morgan para el entorno de desarrollo
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Definir rutas
const spaRoutes = require('./routes/spaRoutes');
const therapistRoutes = require('./routes/therapistRoutes');
const authRoutes = require('./routes/authRoutes'); // Puedes comentar esta línea si no necesitas autenticación ahora

app.use('/api/spas', spaRoutes);
app.use('/api/therapists', therapistRoutes);
app.use('/api/auth', authRoutes); // Puedes comentar esta línea si no necesitas autenticación ahora

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
