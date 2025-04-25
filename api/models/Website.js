const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  userId: String,
  url: String,
  scanFrequency: { type: String, default: 'manual' }, // 'manual' or 'weekly'
  lastScanAt: Date
});

module.exports = mongoose.model('Website', WebsiteSchema);
