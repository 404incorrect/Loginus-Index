// ── Down Detector: AI Service Status Monitor ──
// Checks Atlassian StatusPage APIs + known status endpoints for major AI services

const DD_SERVICES = [
  // Atlassian StatusPage-based (public JSON API)
  { name: "OpenAI",      url: "https://status.openai.com/api/v2/status.json",      page: "https://status.openai.com",      type: "statuspage", category: "ai-platform" },
  { name: "Anthropic",   url: "https://status.anthropic.com/api/v2/status.json",    page: "https://status.anthropic.com",    type: "statuspage", category: "ai-platform" },
  { name: "GitHub",      url: "https://www.githubstatus.com/api/v2/status.json",    page: "https://www.githubstatus.com",    type: "statuspage", category: "dev-infra" },
  { name: "Vercel",      url: "https://www.vercel-status.com/api/v2/status.json",   page: "https://www.vercel-status.com",   type: "statuspage", category: "dev-infra" },
  { name: "Cloudflare",  url: "https://www.cloudflarestatus.com/api/v2/status.json",page: "https://www.cloudflarestatus.com", type: "statuspage", category: "infrastructure" },
  { name: "HuggingFace", url: "https://status.huggingface.co/api/v2/status.json",   page: "https://status.huggingface.co",   type: "statuspage", category: "ai-platform" },
  { name: "Render",      url: "https://status.render.com/api/v2/status.json",       page: "https://status.render.com",       type: "statuspage", category: "dev-infra" },
  { name: "Netlify",     url: "https://www.netlifystatus.com/api/v2/status.json",   page: "https://www.netlifystatus.com",   type: "statuspage", category: "dev-infra" },
  { name: "Datadog",     url: "https://status.datadoghq.com/api/v2/status.json",    page: "https://status.datadoghq.com",    type: "statuspage", category: "infrastructure" },

  // Non-StatusPage services — we probe their status pages via CORS proxy
  { name: "Google AI",   url: null, page: "https://status.cloud.google.com",         type: "probe", category: "ai-platform" },
  { name: "Azure AI",    url: null, page: "https://status.azure.com",                type: "probe", category: "ai-platform" },
  { name: "AWS",         url: null, page: "https://health.aws.amazon.com",           type: "probe", category: "infrastructure" },
  { name: "Mistral AI",  url: null, page: "https://mistral.ai",                      type: "probe", category: "ai-platform" },
  { name: "Replicate",   url: null, page: "https://replicate.com",                   type: "probe", category: "ai-platform" },
  { name: "Perplexity",  url: null, page: "https://perplexity.ai",                   type: "probe", category: "ai-platform" },
  { name: "Groq",        url: null, page: "https://groq.com",                        type: "probe", category: "ai-platform" },
  { name: "CoreWeave",   url: null, page: "https://www.coreweave.com",               type: "probe", category: "infrastructure" },
  { name: "Lambda Labs", url: null, page: "https://lambdalabs.com",                  type: "probe", category: "infrastructure" },
];

const DD_CACHE_KEY = 'longinus_dd_v1';
const DD_CACHE_TTL = 3 * 60 * 1000;
const DD_CORS_PROXIES = [
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
];

function normalizeStatus(indicator) {
  const map = {
    'none': 'operational',
    'operational': 'operational',
    'minor': 'degraded',
    'degraded_performance': 'degraded',
    'major': 'partial',
    'partial_outage': 'partial',
    'critical': 'major',
    'major_outage': 'major',
  };
  return map[indicator] || 'unknown';
}

function statusLabel(status) {
  const labels = {
    'operational': 'All Systems Operational',
    'degraded': 'Degraded Performance',
    'partial': 'Partial Outage',
    'major': 'Major Outage',
    'unknown': 'Status Unknown',
  };
  return labels[status] || 'Unknown';
}

function getCachedDD() {
  try {
    const raw = sessionStorage.getItem(DD_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.ts > DD_CACHE_TTL) return null;
    return cached.data;
  } catch { return null; }
}

function setCachedDD(data) {
  try {
    sessionStorage.setItem(DD_CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

async function fetchStatusPage(service) {
  for (const proxyFn of DD_CORS_PROXIES) {
    try {
      const res = await fetch(proxyFn(service.url), { signal: AbortSignal.timeout(6000) });
      if (!res.ok) continue;
      const data = await res.json();
      const indicator = data.status?.indicator || 'unknown';
      const description = data.status?.description || '';
      return {
        name: service.name,
        status: normalizeStatus(indicator),
        description: description,
        page: service.page,
        category: service.category,
      };
    } catch { continue; }
  }
  return { name: service.name, status: 'unknown', description: 'Could not reach status page', page: service.page, category: service.category };
}

async function probeService(service) {
  for (const proxyFn of DD_CORS_PROXIES) {
    try {
      const res = await fetch(proxyFn(service.page), { signal: AbortSignal.timeout(6000) });
      return {
        name: service.name,
        status: res.ok ? 'operational' : 'degraded',
        description: res.ok ? 'Reachable' : `HTTP ${res.status}`,
        page: service.page,
        category: service.category,
      };
    } catch { continue; }
  }
  return { name: service.name, status: 'unknown', description: 'Unreachable', page: service.page, category: service.category };
}

async function fetchAllStatuses() {
  const cached = getCachedDD();
  if (cached) return cached;

  const results = await Promise.allSettled(
    DD_SERVICES.map(s => s.type === 'statuspage' ? fetchStatusPage(s) : probeService(s))
  );

  const data = results.map((r, i) => {
    if (r.status === 'fulfilled') return r.value;
    return { name: DD_SERVICES[i].name, status: 'unknown', description: 'Check failed', page: DD_SERVICES[i].page, category: DD_SERVICES[i].category };
  });

  setCachedDD(data);
  return data;
}

function getDownDetectorScore(statuses) {
  if (!statuses || statuses.length === 0) return 0;
  let score = 0;
  for (const s of statuses) {
    if (s.status === 'major') score += 3;
    else if (s.status === 'partial') score += 2;
    else if (s.status === 'degraded') score += 1;
  }
  return score;
}

function renderDownDetector(statuses) {
  const container = document.getElementById('dd-grid');
  const summaryEl = document.getElementById('dd-summary');
  if (!container) return;

  const outages = statuses.filter(s => s.status !== 'operational' && s.status !== 'unknown');
  const operational = statuses.filter(s => s.status === 'operational');
  const unknown = statuses.filter(s => s.status === 'unknown');

  if (summaryEl) {
    if (outages.length === 0) {
      summaryEl.textContent = `${operational.length}/${statuses.length} operational`;
      summaryEl.style.color = 'var(--eva-green-dim)';
    } else {
      summaryEl.textContent = `${outages.length} issue${outages.length !== 1 ? 's' : ''} detected`;
      summaryEl.style.color = 'var(--warning-orange)';
    }
  }

  const groups = {
    'ai-platform': { label: 'AI Platforms', items: [] },
    'dev-infra': { label: 'Developer Infrastructure', items: [] },
    'infrastructure': { label: 'Cloud & Infrastructure', items: [] },
  };

  for (const s of statuses) {
    const group = groups[s.category] || groups['infrastructure'];
    group.items.push(s);
  }

  let html = '';
  for (const [, group] of Object.entries(groups)) {
    if (group.items.length === 0) continue;
    group.items.sort((a, b) => {
      const order = { major: 0, partial: 1, degraded: 2, unknown: 3, operational: 4 };
      return (order[a.status] ?? 5) - (order[b.status] ?? 5);
    });

    html += `<div class="dd-section-label">${group.label}</div>`;
    html += '<div class="dd-status-grid">';
    for (const s of group.items) {
      html += `
        <a href="${s.page}" target="_blank" rel="noopener" class="dd-card">
          <div class="dd-indicator dd-${s.status}"></div>
          <div class="dd-info">
            <div class="dd-service-name">${s.name}</div>
            <div class="dd-status-text dd-text-${s.status}">${statusLabel(s.status)}</div>
          </div>
        </a>`;
    }
    html += '</div>';
  }

  html += `<div class="dd-timestamp">Last checked: ${new Date().toLocaleTimeString()} · Refreshes every 3 min</div>`;
  container.innerHTML = html;

  window._longinusDD = statuses;
  if (typeof window.updateCompositeThreatLevel === 'function') {
    window.updateCompositeThreatLevel();
  }
}

async function initDownDetector() {
  const container = document.getElementById('dd-grid');
  if (!container) return;

  container.innerHTML = '<div class="wire-loading"><span class="wire-spinner"></span> Scanning service statuses...</div>';

  const statuses = await fetchAllStatuses();
  renderDownDetector(statuses);
}

if (document.getElementById('dd-grid')) {
  initDownDetector();
  setInterval(initDownDetector, DD_CACHE_TTL);
}
