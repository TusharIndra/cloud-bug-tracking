// backend/config.js
module.exports = {
    PORT: process.env.PORT || 3000,
    ML_SERVICE_URL: 'http://localhost:5000/predict'
  };