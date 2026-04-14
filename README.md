# 🔱 The Longinus Index

**The spear that pierces heaven's veil.**

An AI threat index tracking what aims to slow down artificial intelligence — hacks, legislation, and cultural resistance. Named after the Spear of Longinus from *Neon Genesis Evangelion*.

## Auto-Updating

### Live Wire (in the browser)

The **Live Wire** section pulls headlines from RSS feeds in the client. Cached for 10 minutes. Feeds include The Hacker News, BleepingComputer, TechCrunch AI, MIT Technology Review, and others.

### GitHub Actions (curated entries)

A scheduled workflow (see `.github/workflows/update.yml`) runs on a timer and can be triggered manually. It fetches RSS feeds, matches keywords, and can append new entries to `data.js` when you extend the script.

Enable **Actions** in the repo settings if you want workflows to run.

## Features

- **Live Wire** — Real-time RSS headlines with severity labels
- **Markets & hardware** — AI equities and GPU/RAM reference prices (client-side)
- **Down Detector** — Major AI/platform status pages
- **Composite threat level** — News + market moves + service status
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

## Deploy on GitHub Pages

### 1. Create a repository

On GitHub: **New repository** → name it (e.g. `longinus-index` or `username.github.io` for a user site).

### 2. Push this project

In a terminal, from the project folder (first time only):

```bash
git init
git add .
git commit -m "Initial commit: Longinus Index"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Use your real URL from the repo’s **Code** tab (HTTPS or SSH).

### 3. Turn on GitHub Pages

1. Repo → **Settings** → **Pages** (under *Code and automation*).
2. **Build and deployment** → **Source**: **Deploy from a branch**.
3. **Branch**: `main`, folder **`/ (root)`** → **Save**.

After a minute or two, the site is available at:

- **Project site:** `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- **User/org site** (only if the repo is named `YOUR_USERNAME.github.io`): `https://YOUR_USERNAME.github.io/`

Relative paths (`style.css`, `app.js`, etc.) work for project sites without extra configuration.

### 4. Optional: custom domain

**Settings → Pages** → add your domain, then add a `CNAME` file in the repo root (GitHub shows the exact hostname). Configure DNS at your registrar as GitHub documents.

---

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
