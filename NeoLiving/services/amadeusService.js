const Amadeus = require('amadeus');
const config = require('../config/config');

const amadeus = new Amadeus({
  clientId: config.amadeus.clientId,
  clientSecret: config.amadeus.clientSecret
});

// ... existing code ...