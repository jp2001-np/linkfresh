const axios = require('axios');
const cheerio = require('cheerio');

async function crawlForBrokenLinks(baseUrl) {
  try {
    const res = await axios.get(baseUrl);
    const $ = cheerio.load(res.data);

    const links = $("a[href]")
      .map((i, el) => $(el).attr("href"))
      .get()
      .filter(href => href.startsWith('http'));

    const brokenLinks = [];

    for (const link of links) {
      try {
        const response = await axios.head(link, { timeout: 5000 });
        if (response.status >= 400) {
          brokenLinks.push({ href: link, status: response.status });
        }
      } catch (err) {
        brokenLinks.push({ href: link, status: err.response?.status || 0 });
      }
    }

    return brokenLinks;
  } catch (err) {
    throw new Error('Failed to crawl: ' + err.message);
  }
}

module.exports = { crawlForBrokenLinks };

