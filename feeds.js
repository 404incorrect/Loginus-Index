// ── Live Wire: RSS headlines + composite threat level ──

const WIRE_FEEDS = [
  { url: "https://feeds.feedburner.com/TheHackersNews", label: "The Hacker News", category: "hack" },
  { url: "https://www.bleepingcomputer.com/feed/", label: "BleepingComputer", category: "hack" },
  { url: "https://techcrunch.com/category/artificial-intelligence/feed/", label: "TechCrunch AI", category: "general" },
  { url: "https://www.technologyreview.com/feed/", label: "MIT Tech Review", category: "general" },
  { url: "https://venturebeat.com/category/ai/feed/", label: "VentureBeat AI", category: "general" },
  { url: "https://www.artificialintelligence-news.com/feed/rss/", label: "AI News", category: "general" },
];

const CRITICAL_WORDS = ['breach', 'zero-day', 'ransomware', 'critical', 'exploit', 'backdoor', 'emergency', 'massive'];
const HIGH_WORDS = ['hack', 'attack', 'vulnerability', 'malware', 'leak', 'compromise', 'incident', 'warning', 'ban', 'shutdown'];
const MEDIUM_WORDS = ['regulate', 'lawsuit', 'restrict', 'threat', 'risk', 'concern', 'flaw', 'patch', 'security'];

const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";
const WIRE_CACHE_KEY = 'longinus_wire';
const WIRE_CACHE_TTL = 10 * 60 * 1000;
const WIRE_MAX_ITEMS = 40;

function getCachedWire() {
  try {
    const raw = sessionStorage.getItem(WIRE_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.ts > WIRE_CACHE_TTL) return null;
    return cached.items;
  } catch { return null; }
}

function setCachedWire(items) {
  try {
    sessionStorage.setItem(WIRE_CACHE_KEY, JSON.stringify({ ts: Date.now(), items }));
  } catch {}
}

function stripHtml(html) {
  if (!html) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

async function fetchFeed(feedConfig) {
  try {
    const res = await fetch(RSS_PROXY + encodeURIComponent(feedConfig.url));
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== "ok" || !data.items) return [];
    return data.items.slice(0, 6).map(item => {
      let desc = stripHtml(item.description || '');
      if (desc.length > 280) desc = desc.slice(0, 277) + '...';
      return {
        title: item.title || '',
        link: item.link || '#',
        pubDate: item.pubDate,
        source: feedConfig.label,
        category: feedConfig.category,
        description: desc,
      };
    });
  } catch { return []; }
}

function dedupeByTitle(items) {
  const seen = new Set();
  return items.filter(item => {
    const key = item.title.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function relativeTime(dateStr) {
  const now = new Date();
  const then = new Date(dateStr);
  const diff = now - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return then.toLocaleDateString();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function classifyItem(title, desc) {
  const text = (title + ' ' + desc).toLowerCase();
  let critHits = 0, highHits = 0, medHits = 0;
  for (const w of CRITICAL_WORDS) { if (text.includes(w)) critHits++; }
  for (const w of HIGH_WORDS) { if (text.includes(w)) highHits++; }
  for (const w of MEDIUM_WORDS) { if (text.includes(w)) medHits++; }

  if (critHits >= 2) return { label: 'CRITICAL', cls: 'wire-sev-critical' };
  if (critHits >= 1) return { label: 'HIGH', cls: 'wire-sev-high' };
  if (highHits >= 2) return { label: 'HIGH', cls: 'wire-sev-high' };
  if (highHits >= 1 || medHits >= 2) return { label: 'MEDIUM', cls: 'wire-sev-medium' };
  if (medHits >= 1) return { label: 'LOW', cls: 'wire-sev-low' };
  return { label: 'INTEL', cls: 'wire-sev-intel' };
}

function computeNewsThreatScore(items) {
  if (!items || items.length === 0) return 0;

  const now = new Date();
  let score = 0;

  for (const item of items) {
    const age = (now - new Date(item.pubDate)) / 3600000;
    const sev = classifyItem(item.title, item.description);
    const recencyMultiplier = age < 12 ? 1.5 : age < 48 ? 1.0 : 0.6;

    if (sev.cls === 'wire-sev-critical') score += 4 * recencyMultiplier;
    else if (sev.cls === 'wire-sev-high') score += 2.5 * recencyMultiplier;
    else if (sev.cls === 'wire-sev-medium') score += 1.5 * recencyMultiplier;
    else if (sev.cls === 'wire-sev-low') score += 0.5;
  }

  return score;
}

function computeStockThreatScore() {
  try {
    const raw = sessionStorage.getItem('longinus_stocks_v2');
    if (!raw) return 0;
    const cached = JSON.parse(raw);
    const quotes = cached.data || {};

    let bigDrops = 0, moderateDrops = 0, totalStocks = 0;
    for (const sym in quotes) {
      const q = quotes[sym];
      if (!q || q.changePct == null) continue;
      totalStocks++;
      if (q.changePct <= -5) bigDrops++;
      else if (q.changePct <= -3) moderateDrops++;
    }

    if (totalStocks === 0) return 0;

    let score = 0;
    score += bigDrops * 4;
    score += moderateDrops * 2;

    const dropRatio = (bigDrops + moderateDrops) / totalStocks;
    if (dropRatio > 0.5) score += 5;
    else if (dropRatio > 0.3) score += 3;

    return score;
  } catch { return 0; }
}

function computeDDThreatScore() {
  const statuses = window._longinusDD;
  if (!statuses || statuses.length === 0) return 0;

  let score = 0;
  for (const s of statuses) {
    if (s.status === 'major') score += 5;
    else if (s.status === 'partial') score += 3;
    else if (s.status === 'degraded') score += 1.5;
  }
  return score;
}

function computeCompositeThreatLevel(newsItems) {
  const newsScore = computeNewsThreatScore(newsItems);
  const stockScore = computeStockThreatScore();
  const ddScore = computeDDThreatScore();

  const composite = newsScore + stockScore + ddScore;

  if (composite >= 40) return { level: 'CRITICAL', cls: 'level-critical', score: composite };
  if (composite >= 25) return { level: 'SEVERE', cls: 'level-severe', score: composite };
  if (composite >= 15) return { level: 'ELEVATED', cls: 'level-elevated', score: composite };
  if (composite >= 6)  return { level: 'GUARDED', cls: 'level-guarded', score: composite };
  return { level: 'NOMINAL', cls: 'level-nominal', score: composite };
}

function updateBannerLevel(items) {
  const levelEl = document.getElementById('dynamic-level');
  if (!levelEl) return;

  const result = computeCompositeThreatLevel(items);
  levelEl.textContent = result.level;
  levelEl.className = 'level ' + result.cls;

  window._longinusWireItems = items;
}

window.updateCompositeThreatLevel = function () {
  const items = window._longinusWireItems;
  if (!items) return;
  const levelEl = document.getElementById('dynamic-level');
  if (!levelEl) return;
  const result = computeCompositeThreatLevel(items);
  levelEl.textContent = result.level;
  levelEl.className = 'level ' + result.cls;
};

function renderWire(items) {
  const container = document.getElementById('live-wire-feed');
  const statusEl = document.getElementById('wire-status');
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="wire-empty">No live data available — check back soon</div>';
    if (statusEl) statusEl.textContent = 'offline';
    return;
  }

  if (statusEl) statusEl.textContent = `${items.length} stories · live`;

  container.innerHTML = items.map(item => {
    let hostname = '';
    try { hostname = new URL(item.link).hostname; } catch {}

    const sev = classifyItem(item.title, item.description);
    const sevBadge = `<span class="wire-sev-badge ${sev.cls}">${sev.label}</span>`;

    return `
    <a href="${item.link}" target="_blank" rel="noopener" class="wire-card ${sev.cls}-card">
      <div class="wire-card-header">
        <span class="wire-source">${escapeHtml(item.source)}</span>
        ${sevBadge}
        <span class="wire-time">${relativeTime(item.pubDate)}</span>
      </div>
      <div class="wire-card-title">${escapeHtml(item.title)}</div>
      ${item.description ? `<div class="wire-card-desc">${escapeHtml(item.description)}</div>` : ''}
      <div class="wire-card-cite">
        <span class="wire-cite-icon">↗</span> ${escapeHtml(item.source)}${hostname ? ' — ' + escapeHtml(hostname) : ''}
      </div>
    </a>`;
  }).join('');

  updateBannerLevel(items);
}

async function initLiveWire() {
  const container = document.getElementById('live-wire-feed');
  if (!container) return;

  const cached = getCachedWire();
  if (cached) { renderWire(cached); return; }

  container.innerHTML = '<div class="wire-loading"><span class="wire-spinner"></span> Scanning feeds...</div>';

  const results = await Promise.allSettled(WIRE_FEEDS.map(f => fetchFeed(f)));

  let allItems = [];
  results.forEach(r => { if (r.status === 'fulfilled') allItems.push(...r.value); });

  allItems = dedupeByTitle(allItems);
  allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  allItems = allItems.slice(0, WIRE_MAX_ITEMS);

  setCachedWire(allItems);
  renderWire(allItems);
}

if (document.getElementById('live-wire-feed')) {
  initLiveWire();
  setInterval(initLiveWire, WIRE_CACHE_TTL);
}
