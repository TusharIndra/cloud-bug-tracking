// backend/controllers/bugController.js
const axios = require('axios');

// Function to handle bug report submissions
const submitBugReport = async (req, res) => {
  const bugReport = req.body;

  try {
    // Send the bug report to the Python ML service for processing
    const simulatedResponse = {
        status: 'bug_detected',
        confidence: 0.95,
      };
      res.status(200).send(simulatedResponse);
    // const response = await axios.post('http://localhost:5000/predict', bugReport);
    // res.status(200).send(response.data);
  } catch (error) {
    console.error('Error communicating with ML service:', error.message);
    res.status(500).send('Error communicating with ML service');
  }
};

module.exports = { submitBugReport };