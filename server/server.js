const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const spaRoutes = require('./routes/spaRoutes');
const therapistRoutes = require('./routes/therapistRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Habilitar CORS
app.use(cors());

app.use(express.json());

app.use('/api/spas', spaRoutes);
app.use('/api/therapists', therapistRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
