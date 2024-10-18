// backend/index.js
const express = require('express');
const bugRoutes = require('./routes/bugRoutes');
const config = require('./config');
const logger = require('./middlewares/logger');
const app = express();
const PORT = config.PORT || 3000;

app.use(express.json());

// Use the defined bug routes
app.use(logger)
app.use('/api/bugs', bugRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});