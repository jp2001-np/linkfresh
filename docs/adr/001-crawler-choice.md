# ADR
# ADR: Website Crawler Engine

## Decision
We chose **Cheerio + Axios** for the initial version of our crawler.

## Reasoning
- Fast to implement
- Lightweight
- Perfect for static or semi-dynamic sites

## Alternatives
- Puppeteer (too heavy)
- Scrapy (Python-based)

## Revisit?
Yes — revisit if users need JavaScript-heavy sites scanned.
