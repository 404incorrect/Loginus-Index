// ── Market Intelligence: AI Stocks + Hardware Price Tracker ──

const AI_STOCKS = [
  { symbol: "NVDA",  name: "NVIDIA",          sector: "infrastructure" },
  { symbol: "AMD",   name: "AMD",             sector: "infrastructure" },
  { symbol: "TSM",   name: "TSMC",            sector: "infrastructure" },
  { symbol: "ASML",  name: "ASML",            sector: "infrastructure" },
  { symbol: "AVGO",  name: "Broadcom",        sector: "infrastructure" },
  { symbol: "SMCI",  name: "Super Micro",     sector: "infrastructure" },
  { symbol: "MRVL",  name: "Marvell",         sector: "infrastructure" },
  { symbol: "SNPS",  name: "Synopsys",        sector: "infrastructure" },
  { symbol: "CDNS",  name: "Cadence",         sector: "infrastructure" },
  { symbol: "MSFT",  name: "Microsoft",       sector: "platform" },
  { symbol: "GOOGL", name: "Alphabet",        sector: "platform" },
  { symbol: "AMZN",  name: "Amazon",          sector: "platform" },
  { symbol: "META",  name: "Meta Platforms",  sector: "platform" },
  { symbol: "AAPL",  name: "Apple",           sector: "platform" },
  { symbol: "ORCL",  name: "Oracle",          sector: "platform" },
  { symbol: "CRM",   name: "Salesforce",      sector: "platform" },
  { symbol: "PLTR",  name: "Palantir",        sector: "defense" },
];

const AI_PRIVATE = [
  { name: "OpenAI",        desc: "ChatGPT / GPT family, frontier models",           valuation: "$300B+" },
  { name: "Anthropic",     desc: "Claude family, enterprise & safety focus",        valuation: "$60B+" },
  { name: "xAI",           desc: "Grok models, Colossus training cluster",          valuation: "$50B+" },
  { name: "Databricks",    desc: "Lakehouse, MLflow, enterprise AI platform",       valuation: "$43B+" },
  { name: "CoreWeave",     desc: "GPU cloud — training & inference at scale",       valuation: "$19B+" },
  { name: "Scale AI",      desc: "Data labeling, RLHF, gov & enterprise",           valuation: "$14B+" },
  { name: "Anysphere",     desc: "Cursor — AI-native coding IDE",                   valuation: "$9B+" },
  { name: "Perplexity AI", desc: "AI answer engine & research assistant",           valuation: "$9B+" },
  { name: "Mistral AI",    desc: "European LLMs, open-weights leader",              valuation: "$6B+" },
  { name: "Cohere",        desc: "Enterprise LLMs, RAG & retrieval",                 valuation: "$5.5B+" },
  { name: "Hugging Face",  desc: "Models hub, Spaces, open ML community",           valuation: "$4.5B+" },
  { name: "ElevenLabs",    desc: "Voice AI — TTS, dubbing, agents",                   valuation: "$3.3B+" },
  { name: "Figure AI",     desc: "Humanoid robots, BMW / OpenAI partnerships",       valuation: "$2.7B+" },
  { name: "Lambda Labs",   desc: "On-demand GPUs & 1-click clusters",               valuation: "$1.5B+" },
  { name: "Runway",        desc: "Generative video (Gen-3) & creative tools",         valuation: "$1.5B+" },
  { name: "Stability AI",  desc: "Stable Diffusion, open image & audio",            valuation: "$1B+" },
  { name: "Midjourney",    desc: "Discord-native image generation",                 valuation: "~$10B" },
];

const GPU_PRICES = [
  { name: "RTX 5090",       msrp: 1999, category: "consumer",   note: "Flagship, Blackwell",       history: [1999, 2099, 2199, 2149, 1999] },
  { name: "RTX 5080",       msrp: 999,  category: "consumer",   note: "High-end gaming/AI",        history: [999, 1049, 1029, 999, 999] },
  { name: "RTX 4090",       msrp: 1599, category: "consumer",   note: "Previous gen flagship",     history: [1599, 1699, 1799, 1749, 1599] },
  { name: "RTX 4080 SUPER", msrp: 999,  category: "consumer",   note: "Strong price/perf",         history: [999, 1029, 999, 969, 999] },
  { name: "RTX 4070 Ti",    msrp: 799,  category: "consumer",   note: "Mid-range AI capable",      history: [799, 829, 799, 779, 799] },
  { name: "H100 SXM",       msrp: 30000,category: "datacenter", note: "Hopper, training standard", history: [40000, 35000, 32000, 30000, 30000] },
  { name: "H200",           msrp: 35000,category: "datacenter", note: "HBM3e, inference king",     history: [40000, 38000, 36000, 35000, 35000] },
  { name: "B200",           msrp: 40000,category: "datacenter", note: "Blackwell, next-gen DC",    history: [45000, 42000, 41000, 40000, 40000] },
  { name: "A100 80GB",      msrp: 15000,category: "datacenter", note: "Ampere, still widely used", history: [20000, 18000, 16000, 15000, 15000] },
  { name: "AMD MI300X",     msrp: 15000,category: "datacenter", note: "AMD competitor to H100",    history: [18000, 17000, 16000, 15000, 15000] },
];

const RAM_PRICES = [
  { name: "DDR5 32GB (2x16)", speed: "6000MHz", price: 85,  note: "Sweet spot for AI dev",          history: [110, 100, 95, 90, 85] },
  { name: "DDR5 64GB (2x32)", speed: "6000MHz", price: 170, note: "Recommended for local LLMs",     history: [220, 200, 190, 180, 170] },
  { name: "DDR5 96GB (2x48)", speed: "5600MHz", price: 280, note: "High-capacity workstation",      history: [350, 320, 300, 290, 280] },
  { name: "DDR5 192GB kit",   speed: "5200MHz", price: 550, note: "Max consumer capacity",          history: [700, 650, 600, 575, 550] },
  { name: "HBM3e (H200)",     speed: "N/A",     price: null, note: "Bundled with GPU, not sold separately", history: null },
];

const STOCK_CACHE_KEY = 'longinus_stocks_v2';
const STOCK_CACHE_TTL = 5 * 60 * 1000;
const CORS_PROXIES = [
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
];

function getCachedStocks() {
  try {
    const raw = sessionStorage.getItem(STOCK_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.ts > STOCK_CACHE_TTL) return null;
    return cached.data;
  } catch { return null; }
}

function setCachedStocks(data) {
  try {
    sessionStorage.setItem(STOCK_CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

async function fetchStockQuote(symbol) {
  const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1mo`;

  for (const proxyFn of CORS_PROXIES) {
    try {
      const res = await fetch(proxyFn(yahooUrl), { signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;
      const data = await res.json();
      const result = data.chart?.result?.[0];
      if (!result) continue;

      const meta = result.meta;
      const price = meta.regularMarketPrice;
      const prevClose = meta.chartPreviousClose || meta.previousClose;
      if (!price || !prevClose) continue;

      const closes = result.indicators?.quote?.[0]?.close?.filter(v => v != null) || [];
      const sparkline = closes.length > 5 ? closes.slice(-20) : [prevClose, price];

      return { symbol, price, change: price - prevClose, changePct: ((price - prevClose) / prevClose) * 100, sparkline };
    } catch { continue; }
  }
  return null;
}

async function fetchAllStocks() {
  const cached = getCachedStocks();
  if (cached) return cached;

  const results = await Promise.allSettled(AI_STOCKS.map(s => fetchStockQuote(s.symbol)));
  const data = {};
  results.forEach((r, i) => {
    if (r.status === 'fulfilled' && r.value) data[AI_STOCKS[i].symbol] = r.value;
  });

  if (Object.keys(data).length > 0) setCachedStocks(data);
  return data;
}

function formatPrice(n) {
  if (n == null) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

function formatChange(change, pct) {
  if (change == null) return '';
  const sign = change >= 0 ? '+' : '';
  const cls = change >= 0 ? 'stock-up' : 'stock-down';
  return `<span class="${cls}">${sign}${change.toFixed(2)} (${sign}${pct.toFixed(2)}%)</span>`;
}

function escHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function drawSparkline(canvas, data, color) {
  if (!canvas || !data || data.length < 2) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.offsetWidth * 2;
  const h = canvas.height = canvas.offsetHeight * 2;
  ctx.clearRect(0, 0, w, h);

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = 2;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';

  data.forEach((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, color.replace(')', ', 0.15)').replace('rgb', 'rgba'));
  grad.addColorStop(1, 'transparent');
  ctx.lineTo(w - pad, h);
  ctx.lineTo(pad, h);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
}

// ── Render Stock Ticker ──
async function renderStockTicker() {
  const container = document.getElementById('stock-ticker');
  if (!container) return;

  container.innerHTML = '<div class="market-loading"><span class="wire-spinner"></span> Fetching market data...</div>';
  const quotes = await fetchAllStocks();

  let html = '<div class="private-section-label">Listed equities — live quotes</div><div class="stock-grid">';
  for (const stock of AI_STOCKS) {
    const q = quotes[stock.symbol];
    const price = q ? formatPrice(q.price) : '—';
    const change = q ? formatChange(q.change, q.changePct) : '<span class="stock-stale">loading...</span>';
    const sparkColor = q && q.change >= 0 ? '#00ff9d' : '#ff2244';

    html += `
      <a href="https://finance.yahoo.com/quote/${stock.symbol}" target="_blank" rel="noopener" class="stock-card" data-symbol="${stock.symbol}">
        <div class="stock-card-top">
          <div>
            <div class="stock-symbol">${stock.symbol}</div>
            <div class="stock-name">${escHtml(stock.name)}</div>
          </div>
          <div class="stock-price-block">
            <div class="stock-price">${price}</div>
            <div class="stock-change">${change}</div>
          </div>
        </div>
        <canvas class="stock-spark" data-spark='${q ? JSON.stringify(q.sparkline) : '[]'}' data-color="${sparkColor}"></canvas>
      </a>`;
  }
  html += '</div>';

  html += '<div class="private-section-label">Private &amp; pre-IPO — last known rounds</div><div class="private-grid">';
  for (const co of AI_PRIVATE) {
    html += `
      <div class="private-card">
        <div class="private-name">${escHtml(co.name)}</div>
        <div class="private-desc">${escHtml(co.desc)}</div>
        <div class="private-val">${escHtml(co.valuation)}</div>
      </div>`;
  }
  html += '</div>';

  container.innerHTML = html;

  container.querySelectorAll('.stock-spark').forEach(canvas => {
    try {
      const data = JSON.parse(canvas.dataset.spark);
      if (data.length >= 2) drawSparkline(canvas, data, canvas.dataset.color);
    } catch {}
  });

  if (typeof window.updateCompositeThreatLevel === 'function') {
    window.updateCompositeThreatLevel();
  }
}

// ── Render Hardware Prices ──
function renderHardwarePrices() {
  const container = document.getElementById('hardware-prices');
  if (!container) return;

  let html = '<div class="hw-section-label">GPUs</div><div class="hw-grid">';
  for (const gpu of GPU_PRICES) {
    const dcClass = gpu.category === 'datacenter' ? ' hw-dc' : '';
    const trend = gpu.history ? (gpu.history[gpu.history.length-1] <= gpu.history[0] ? 'stock-up' : 'stock-down') : '';
    html += `
      <div class="hw-card${dcClass}" ${gpu.history ? `data-hw-history='${JSON.stringify(gpu.history)}'` : ''}>
        <div class="hw-name">${escHtml(gpu.name)}</div>
        <div class="hw-price">${gpu.msrp ? formatPrice(gpu.msrp) + ' MSRP' : 'N/A'} ${trend ? `<span class="${trend}">${trend === 'stock-up' ? '↓' : '↑'}</span>` : ''}</div>
        <div class="hw-note">${escHtml(gpu.note)}</div>
        ${gpu.history ? '<canvas class="hw-spark"></canvas>' : ''}
      </div>`;
  }

  html += '</div><div class="hw-section-label">Memory (DDR5)</div><div class="hw-grid">';
  for (const ram of RAM_PRICES) {
    const trend = ram.history ? (ram.history[ram.history.length-1] <= ram.history[0] ? 'stock-up' : 'stock-down') : '';
    html += `
      <div class="hw-card" ${ram.history ? `data-hw-history='${JSON.stringify(ram.history)}'` : ''}>
        <div class="hw-name">${escHtml(ram.name)}</div>
        <div class="hw-speed">${escHtml(ram.speed)}</div>
        <div class="hw-price">${ram.price ? '~' + formatPrice(ram.price) : 'N/A'} ${trend ? `<span class="${trend}">${trend === 'stock-up' ? '↓' : '↑'}</span>` : ''}</div>
        <div class="hw-note">${escHtml(ram.note)}</div>
        ${ram.history ? '<canvas class="hw-spark"></canvas>' : ''}
      </div>`;
  }

  html += '</div>';
  html += '<div class="hw-disclaimer">Prices are approximate MSRP / street averages. Datacenter GPUs sold through enterprise channels. Trend arrows show price direction (↓ = cheaper).</div>';
  container.innerHTML = html;

  container.querySelectorAll('.hw-card[data-hw-history]').forEach(card => {
    try {
      const data = JSON.parse(card.dataset.hwHistory);
      const canvas = card.querySelector('.hw-spark');
      if (canvas && data.length >= 2) {
        const down = data[data.length-1] <= data[0];
        drawSparkline(canvas, data, down ? '#00ff9d' : '#ff2244');
      }
    } catch {}
  });
}

// ── Universal collapsible widget toggle ──
function initWidgetToggles() {
  document.querySelectorAll('[data-widget-toggle]').forEach(btn => {
    const targetId = btn.dataset.widgetToggle;
    const body = document.getElementById(targetId);
    if (!btn || !body) return;
    btn.addEventListener('click', () => {
      const isOpen = body.classList.toggle('widget-open');
      btn.classList.toggle('expanded', isOpen);
    });
    body.classList.add('widget-open');
    btn.classList.add('expanded');
  });
}

// ── Init ──
initWidgetToggles();
if (document.getElementById('stock-ticker')) renderStockTicker();
if (document.getElementById('hardware-prices')) renderHardwarePrices();
