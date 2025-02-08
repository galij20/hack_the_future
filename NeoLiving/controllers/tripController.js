const amadeusService = require('../services/amadeusService');

const getRecommendations = async (req, res) => {
  try {
    const { location } = req.query;
    const recommendations = await amadeusService.getTripRecommendations(location);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecommendations }; 