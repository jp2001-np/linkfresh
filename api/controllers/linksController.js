
const { crawlForBrokenLinks } = require('../services/crawler');

exports.scanWebsite = async (req, res) => {
  const { url } = req.body;

  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Valid URL is required' });
  }

  try {
    const results = await crawlForBrokenLinks(url);

    // Optional: Save results to DB
    // await ScanResult.create({ url, userId: req.user.id, brokenLinks: results })

    return res.status(200).json({
      message: 'Scan complete',
      url,
      brokenLinks: results,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Scan failed' });
  }
};
