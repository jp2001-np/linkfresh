const mongoose = require('mongoose');

const ScanResultSchema = new mongoose.Schema({
  userId: String,
  url: String,
  brokenLinks: [
    {
      href: String,
      status: Number
    }
  ],
  scannedAt: Date
});

module.exports = mongoose.model('ScanResult', ScanResultSchema);
