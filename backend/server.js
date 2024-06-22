// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/db.config');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Database connection
const db = require('./models');
db.sequelize.sync();

// Routes
const adoptionRoutes = require('./routes/adoptionRoutes');
app.use('/api', adoptionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
