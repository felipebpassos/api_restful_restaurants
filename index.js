const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const swaggerDocs = require('./config/swagger');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Swagger setup
swaggerDocs(app);

// Rotas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/restaurants', require('./routes/restaurantRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
