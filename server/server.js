const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const { protect, authorize } = require('./middleware/auth');

const spaRoutes = require('./routes/spaRoutes');
const therapistRoutes = require('./routes/therapistRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(cookieParser());

// Middleware de registro de solicitudes
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/spas', protect, spaRoutes);
app.use('/api/therapists', protect, therapistRoutes);
app.use('/api/auth', authRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
