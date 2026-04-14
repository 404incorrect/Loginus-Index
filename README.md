# 🔱 The Longinus Index


An AI threat index tracking what aims to slow down artificial intelligence, hacks, legislation, and cultural resistance. 

## Auto-Updating

### Live Wire (in the browser)

The **Live Wire** section pulls headlines from RSS feeds in the client. Cached for 10 minutes. Feeds include The Hacker News, BleepingComputer, TechCrunch AI, MIT Technology Review, and others.

### GitHub Actions (curated entries)

A scheduled workflow (see `.github/workflows/update.yml`) runs on a timer and can be triggered manually. It fetches RSS feeds, matches keywords, and can append new entries to `data.js` when you extend the script.

Enable **Actions** in the repo settings if you want workflows to run.

## Features

- **Live Wire** Real-time RSS headlines with severity labels
- **Markets & hardware** AI equities and GPU/RAM reference prices (client-side)
- **Down Detector** Major AI/platform status pages
- **Composite threat level** News + market moves + service status
- **Data-driven archive** — Curated entries in `data.js`

## Adding Entries Manually

Edit `data.js` and add an object to the `entries` array:

```js
{
  id: "2026-04-12-example",
  title: "Entry Title Here",
  date: "2026-04-12",
  category: "hack",         // hack | legislation | culture | win | tool
  severity: "high",         // critical | high | medium | moderate | win | tool
  tags: ["tag1", "tag2"],
  body: "Description of the event...",
  sources: [
    { title: "Source Name", url: "https://example.com" }
  ],
  xAccounts: ["@handle"],   // optional
  updated: "2026-04-13",    // optional
}
```


## File Structure

```
index.html                      ← Single site page
data.js                         ← Curated entries + metadata
feeds.js                        ← Live Wire RSS + threat level
market.js                       ← Stocks & hardware widgets
downdetector.js                 ← Service status grid
app.js                          ← Page helpers
script.js                       ← Starfield, typing, glitch
style.css                       ← Theme
scripts/fetch-feeds.js          ← Node script for Actions (optional automation)
.github/workflows/update.yml   ← Scheduled workflow
```
