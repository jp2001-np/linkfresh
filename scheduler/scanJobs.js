const cron = require('node-cron');
const mongoose = require('mongoose');
const { crawlForBrokenLinks } = require('../api/services/crawler');
const Website = require('../api/models/Website'); // Add this model
const ScanResult = require('../api/models/ScanResult'); // Add this model

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

cron.schedule('0 2 * * *', async () => {
  console.log('⏰ Starting scheduled scans...');

  const websites = await Website.find({ scanFrequency: 'weekly' });

  for (const site of websites) {
    try {
      const brokenLinks = await crawlForBrokenLinks(site.url);

      await ScanResult.create({
        url: site.url,
        userId: site.userId,
        brokenLinks,
        scannedAt: new Date()
      });

      // Optional: Email alert
      if (brokenLinks.length > 0) {
        console.log(`🚨 Broken links found for ${site.url}`);
        // sendEmail(site.userId, site.url, brokenLinks); // implement later
      }

      console.log(`✅ Scanned: ${site.url}`);
    } catch (err) {
      console.error(`❌ Error scanning ${site.url}:`, err.message);
    }
  }
});
