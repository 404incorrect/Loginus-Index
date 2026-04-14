#!/usr/bin/env node
//
// Longinus Index — Automated Feed Aggregator
// Runs via GitHub Actions on a cron schedule.
// Fetches RSS feeds, keyword-matches for AI-relevant stories,
// formats them as Longinus entries, and appends to data.js.
//

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

const DATA_FILE = path.join(__dirname, '..', 'data.js');

const FEEDS = [
  // Security
  { url: "https://feeds.feedburner.com/TheHackersNews", source: "The Hacker News", bias: "hack" },
  { url: "https://www.bleepingcomputer.com/feed/", source: "BleepingComputer", bias: "hack" },
  // General AI
  { url: "https://techcrunch.com/category/artificial-intelligence/feed/", source: "TechCrunch", bias: "general" },
  { url: "https://www.technologyreview.com/feed/", source: "MIT Technology Review", bias: "general" },
  { url: "https://feeds.arstechnica.com/arstechnica/technology-lab", source: "Ars Technica", bias: "general" },
  // OpenAI
  { url: "https://openai.com/blog/rss.xml", source: "OpenAI", bias: "general" },
  // Anthropic
  { url: "https://www.anthropic.com/research/rss.xml", source: "Anthropic", bias: "general" },
  // Google DeepMind / Alphabet
  { url: "https://blog.google/technology/ai/rss/", source: "Google AI", bias: "general" },
  // Mistral AI
  { url: "https://mistral.ai/feed/", source: "Mistral AI", bias: "general" },
  // NVIDIA
  { url: "https://blogs.nvidia.com/feed/", source: "NVIDIA", bias: "general" },
  // Microsoft AI
  { url: "https://blogs.microsoft.com/ai/feed/", source: "Microsoft AI", bias: "general" },
  // Meta AI
  { url: "https://ai.meta.com/blog/rss/", source: "Meta AI", bias: "general" },
  // Hugging Face
  { url: "https://huggingface.co/blog/feed.xml", source: "Hugging Face", bias: "general" },
  // AWS / Amazon
  { url: "https://aws.amazon.com/blogs/machine-learning/feed/", source: "AWS ML", bias: "general" },
  // Apple
  { url: "https://machinelearning.apple.com/rss.xml", source: "Apple ML", bias: "general" },
  // Palantir
  { url: "https://blog.palantir.com/feed", source: "Palantir", bias: "general" },
  // Cohere
  { url: "https://cohere.com/blog/rss.xml", source: "Cohere", bias: "general" },
];

// Keywords that signal an article is relevant to the Longinus Index
const THREAT_KEYWORDS = [
  'ai regulation', 'ai ban', 'ai law', 'ai legislation', 'ai act', 'ai safety',
  'ai hack', 'ai breach', 'ai attack', 'ai vulnerability', 'model weights',
  'training data', 'copyright ai', 'ai lawsuit', 'ai restrict', 'ai moratorium',
  'ai pause', 'ai ethics', 'anti-ai', 'deepfake', 'ai misuse',
  'ai policy', 'ai compliance', 'ai audit', 'data poisoning',
];

const WIN_KEYWORDS = [
  'open source ai', 'open-source model', 'open weights', 'ai breakthrough',
  'ai benchmark', 'new ai model', 'ai tool', 'ai agent', 'ai release',
  'inference cost', 'quantization', 'ai drug', 'ai discovery',
  'ai coding', 'ai productivity', 'ai startup funding',
  'llm release', 'foundation model', 'ai chip',
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'LonginusIndex/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseXML(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, { trim: true, explicitArray: false }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function extractItems(parsed) {
  if (parsed.rss && parsed.rss.channel && parsed.rss.channel.item) {
    const items = parsed.rss.channel.item;
    return Array.isArray(items) ? items : [items];
  }
  if (parsed.feed && parsed.feed.entry) {
    const items = parsed.feed.entry;
    return Array.isArray(items) ? items : [items];
  }
  return [];
}

function classify(title, desc) {
  const text = `${title} ${desc}`.toLowerCase();
  let threatScore = 0;
  let winScore = 0;
  const matchedThreatTags = [];
  const matchedWinTags = [];

  for (const kw of THREAT_KEYWORDS) {
    if (text.includes(kw)) {
      threatScore++;
      matchedThreatTags.push(kw.replace(/\s+/g, '-'));
    }
  }
  for (const kw of WIN_KEYWORDS) {
    if (text.includes(kw)) {
      winScore++;
      matchedWinTags.push(kw.replace(/\s+/g, '-'));
    }
  }

  if (threatScore === 0 && winScore === 0) return null;

  if (threatScore >= winScore) {
    return {
      category: text.includes('regulat') || text.includes('law') || text.includes('legislat') || text.includes('ban')
        ? 'legislation'
        : text.includes('copyright') || text.includes('artist') || text.includes('boycott')
          ? 'culture'
          : 'hack',
      severity: threatScore >= 3 ? 'high' : threatScore >= 2 ? 'medium' : 'moderate',
      tags: [...new Set(matchedThreatTags)].slice(0, 5),
    };
  } else {
    return {
      category: text.includes('tool') || text.includes('release') || text.includes('launch') ? 'tool' : 'win',
      severity: text.includes('tool') || text.includes('release') ? 'tool' : 'win',
      tags: [...new Set(matchedWinTags)].slice(0, 5),
    };
  }
}

function makeId(date, title) {
  const d = date.toISOString().split('T')[0];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40).replace(/-$/, '');
  return `${d}-${slug}`;
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
}

function loadExistingIds() {
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf8');
    const ids = new Set();
    const regex = /id:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      ids.add(match[1]);
    }
    return ids;
  } catch {
    return new Set();
  }
}

async function main() {
  const existingIds = loadExistingIds();
  const newEntries = [];
  const today = new Date();
  const threeDaysAgo = new Date(today - 3 * 24 * 60 * 60 * 1000);

  for (const feed of FEEDS) {
    try {
      console.log(`Fetching ${feed.source}...`);
      const xml = await fetch(feed.url);
      const parsed = await parseXML(xml);
      const items = extractItems(parsed);

      for (const item of items.slice(0, 10)) {
        const title = item.title || '';
        const desc = stripHtml(item.description || item.summary || item['content:encoded'] || '');
        const link = item.link && typeof item.link === 'object' ? item.link.$.href : (item.link || '');
        const pubDate = new Date(item.pubDate || item.published || item.updated || today);

        if (pubDate < threeDaysAgo) continue;

        const classification = classify(title, desc);
        if (!classification) continue;

        const id = makeId(pubDate, title);
        if (existingIds.has(id)) continue;

        const body = desc.length > 300 ? desc.slice(0, 297) + '...' : desc;

        newEntries.push({
          id,
          title,
          date: pubDate.toISOString().split('T')[0],
          category: classification.category,
          severity: classification.severity,
          tags: [...classification.tags, feed.source.toLowerCase().replace(/\s+/g, '-')],
          body: body || title,
          sources: [{ title: feed.source, url: link }],
          xAccounts: [],
        });

        existingIds.add(id);
      }
    } catch (err) {
      console.error(`Failed to fetch ${feed.source}: ${err.message}`);
    }
  }

  if (newEntries.length === 0) {
    console.log('No new entries to add.');
    process.exit(0);
  }

  console.log(`Found ${newEntries.length} new entries. Updating data.js...`);

  let content = fs.readFileSync(DATA_FILE, 'utf8');

  // Update lastUpdated
  const todayStr = today.toISOString().split('T')[0];
  content = content.replace(
    /lastUpdated:\s*"[^"]*"/,
    `lastUpdated: "${todayStr}"`
  );

  // Insert new entries before the closing of the entries array
  const entriesEndMarker = '  ],\n};\n';
  const insertion = newEntries.map(e => {
    const sourcesStr = e.sources.map(s => `        { title: "${s.title}", url: "${s.url}" }`).join(',\n');
    return `
    {
      id: "${e.id}",
      title: ${JSON.stringify(e.title)},
      date: "${e.date}",
      category: "${e.category}",
      severity: "${e.severity}",
      tags: ${JSON.stringify(e.tags)},
      body: ${JSON.stringify(e.body)},
      sources: [
${sourcesStr}
      ],
      xAccounts: [],
    },`;
  }).join('\n');

  const insertionPoint = content.lastIndexOf('  ],\n};');
  if (insertionPoint === -1) {
    console.error('Could not find insertion point in data.js');
    process.exit(1);
  }

  content = content.slice(0, insertionPoint) + insertion + '\n\n  ],\n};\n\nLONGINUS_DATA.meta.entryCount = LONGINUS_DATA.entries.length;\n';

  fs.writeFileSync(DATA_FILE, content, 'utf8');
  console.log(`Done. Added ${newEntries.length} entries.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
