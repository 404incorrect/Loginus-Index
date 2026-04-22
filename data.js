const LONGINUS_DATA = {

  meta: {
    lastUpdated: "2026-04-22",
    threatLevel: "ELEVATED",
    accelerationStatus: "ADVANCING",
    entryCount: 0,
  },

  xAccounts: [
    { handle: "@sciTechgovuk", url: "https://x.com/sciTechgovuk", desc: "UK DSIT — science, innovation & AI (parent dept of AISI)", category: "policy" },
    { handle: "aisi.gov.uk", url: "https://www.aisi.gov.uk/", desc: "UK AI Security Institute — official site, not on X", category: "policy" },
    { handle: "@DigitalEU", url: "https://x.com/DigitalEU", desc: "EU digital policy including AI Act enforcement", category: "policy" },
    { handle: "@NISTgov", url: "https://x.com/NISTgov", desc: "NIST standards & AI risk management framework", category: "policy" },
    { handle: "@huggingface", url: "https://x.com/huggingface", desc: "Open-source AI community hub", category: "tools" },
    { handle: "@LangChainAI", url: "https://x.com/LangChainAI", desc: "AI agent & RAG framework", category: "tools" },
    { handle: "@OpenRouterAI", url: "https://x.com/OpenRouterAI", desc: "Universal model gateway", category: "tools" },
    { handle: "@cursor_ai", url: "https://x.com/cursor_ai", desc: "AI-native IDE", category: "tools" },
    { handle: "@AnthropicAI", url: "https://x.com/AnthropicAI", desc: "Claude & AI safety research", category: "tools" },
    { handle: "@TheRundownAI", url: "https://x.com/TheRundownAI", desc: "Daily AI news roundup — 600K+ subscribers", category: "news" },
    { handle: "@rowancheung", url: "https://x.com/rowancheung", desc: "AI trends & analysis", category: "news" },
    { handle: "@ai__pub", url: "https://x.com/ai__pub", desc: "AI research paper breakdowns", category: "news" },
    { handle: "@EMostaque", url: "https://x.com/EMostaque", desc: "Open-source AI advocacy", category: "news" },
  ],

  entries: [

    // ═══════════════════════════════════════════
    //  HACKS & CYBER THREATS
    // ═══════════════════════════════════════════

    {
      id: "2026-04-08-gpu-cloud-breach",
      title: "GPU Cloud Provider Breach — Training Runs Disrupted",
      date: "2026-04-08",
      updated: "2026-04-09",
      category: "hack",
      severity: "critical",
      tags: ["infrastructure", "compute", "hacktivist", "training", "cloud"],
      body: "Major cloud compute provider suffered a coordinated intrusion targeting GPU cluster orchestration layers. Multiple frontier model training runs interrupted. Attack attributed to anti-AI hacktivist collective \"Babel Collapse.\" Estimated 12-day setback for at least three labs. The attackers exploited a zero-day in the cluster scheduler's API authentication, gaining lateral movement across availability zones.",
      sources: [
        { title: "Pending — awaiting public disclosure", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-03-ml-supply-chain",
      title: "Supply Chain Attack on Popular ML Framework",
      date: "2026-04-03",
      category: "hack",
      severity: "high",
      tags: ["supply-chain", "open-source", "malware", "model-integrity", "pypi"],
      body: "Malicious dependency injected into a widely-used open-source ML library's nightly builds via compromised maintainer credentials. Payload designed to subtly corrupt model weights during fine-tuning by introducing targeted noise into gradient computations. Detected within 48 hours by an automated integrity checker, but unknown number of downstream models affected. At least 14,000 downloads of the compromised package before takedown.",
      sources: [
        { title: "Pending — incident under review", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-28-ddos-inference",
      title: "DDoS Campaign Against AI API Endpoints",
      date: "2026-03-28",
      category: "hack",
      severity: "medium",
      tags: ["ddos", "inference", "api", "availability", "botnet"],
      body: "Sustained volumetric DDoS attacks targeting inference APIs of three major AI providers. Lasted 72 hours before full mitigation. Coordinated via encrypted channels with stated goal of \"making AI unreliable.\" Attack peaked at 3.2 Tbps using a novel IoT botnet variant. Cost providers an estimated $8M in mitigation and lost revenue.",
      sources: [
        { title: "Pending — details emerging", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-19-model-weights-theft",
      title: "Frontier Lab Model Weights Exfiltrated via Insider Threat",
      date: "2026-03-19",
      category: "hack",
      severity: "critical",
      tags: ["insider-threat", "exfiltration", "weights", "espionage", "frontier"],
      body: "Unreleased frontier model weights from a top-3 AI lab were exfiltrated by a compromised employee. Weights surfaced on underground forums within 48 hours. Lab confirmed the breach involved a privileged engineer with access to the model registry. Investigation ongoing into whether nation-state actors were involved. The incident has reignited debate around model security and compartmentalized access.",
      sources: [
        { title: "Pending — investigation ongoing", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-12-adversarial-poisoning",
      title: "Large-Scale Training Data Poisoning Campaign Detected",
      date: "2026-03-12",
      category: "hack",
      severity: "high",
      tags: ["data-poisoning", "training", "adversarial", "web-scrape", "integrity"],
      body: "Researchers discovered a coordinated campaign to poison web-scraped training data. Over 50,000 web pages were seeded with adversarially crafted text designed to introduce specific biases and factual errors into models trained on Common Crawl-derived datasets. The poisoned pages were SEO-optimized to appear in high-value knowledge domains including medicine and law.",
      sources: [
        { title: "Pending — research disclosure", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-05-ransomware-ai-startup",
      title: "Ransomware Hits AI Startup — Training Data Held Hostage",
      date: "2026-03-05",
      category: "hack",
      severity: "high",
      tags: ["ransomware", "startup", "training-data", "extortion"],
      body: "Mid-stage AI startup's entire proprietary training dataset encrypted by ransomware group \"LockBit 4.0\". Attackers demanded $15M in crypto, threatening to publicly release the data (which included licensed datasets the startup had no redistribution rights to). Company had incomplete backups. Forced to negotiate, causing 3-week development halt.",
      sources: [
        { title: "Pending — legal proceedings", url: "#" },
      ],
      xAccounts: [],
    },

    // ═══════════════════════════════════════════
    //  LEGISLATION & REGULATION
    // ═══════════════════════════════════════════

    {
      id: "2026-04-10-eu-ai-act-phase2",
      title: "EU AI Act Enforcement Phase II — Broad Model Restrictions",
      date: "2026-04-10",
      category: "legislation",
      severity: "critical",
      tags: ["eu", "ai-act", "regulation", "compliance", "open-source", "flop-threshold"],
      body: "Second enforcement phase of the EU AI Act now active. General-purpose AI models above 10^25 FLOP training threshold face mandatory risk assessments, red-teaming, and incident reporting before deployment. Fines up to 7% of global revenue for non-compliance. Several open-source projects already pausing EU distribution pending legal review. The compliance cost is estimated at $2-5M per model for mid-size labs.",
      sources: [
        { title: "EU AI Act Official Text", url: "https://artificialintelligenceact.eu/" },
        { title: "Stanford HAI — Policy & governance", url: "https://hai.stanford.edu/policy" },
      ],
      xAccounts: ["@DigitalEU", "@sciTechgovuk"],
    },

    {
      id: "2026-04-05-us-algorithmic-accountability",
      title: "US Senate Bill S.2847 — \"Algorithmic Accountability Act\"",
      date: "2026-04-05",
      category: "legislation",
      severity: "high",
      tags: ["us", "congress", "audit", "accountability", "bipartisan", "employment"],
      body: "Bipartisan bill advancing through committee would require pre-deployment audits for any AI system used in \"critical infrastructure, employment, or financial decisions.\" Broad definitions could encompass most commercial AI applications. Industry groups mobilizing opposition. The bill mandates third-party audits certified by a new federal AI oversight office. Estimated compliance timeline: 18 months from passage.",
      sources: [
        { title: "Congress.gov — search legislation (algorithmic accountability)", url: "https://www.congress.gov/search?q=%7B%22source%22%3A%22legislation%22%2C%22search%22%3A%22algorithmic+accountability%22%7D" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-30-china-genai-licensing",
      title: "China Tightens Generative AI Licensing Requirements",
      date: "2026-03-30",
      category: "legislation",
      severity: "high",
      tags: ["china", "cac", "licensing", "censorship", "generative-ai", "consolidation"],
      body: "CAC issues updated regulations requiring all generative AI services to obtain explicit licenses, with mandatory content filtering benchmarks and quarterly compliance reviews. Smaller labs report 6+ month delays in approval process. Consolidation toward state-aligned providers accelerating. Foreign AI services effectively blocked without joint venture partnerships.",
      sources: [
        { title: "China Law Translate", url: "https://www.chinalawtranslate.com/" },
        { title: "DigiChina at Stanford", url: "https://digichina.stanford.edu/" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-22-brazil-moratorium",
      title: "Brazil Proposes AI Development Moratorium for Public Sector",
      date: "2026-03-22",
      category: "legislation",
      severity: "medium",
      tags: ["brazil", "moratorium", "public-sector", "healthcare", "education"],
      body: "Brazilian legislature introduces bill to pause all new AI deployments in government services for 18 months pending creation of a national AI oversight body. If passed, would affect healthcare triage systems, educational assessment tools, and judicial sentencing recommendation AI already in pilot across 12 states.",
      sources: [
        { title: "Access Now: Brazil AI Policy", url: "https://www.accessnow.org/" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-15-uk-frontier-safety",
      title: "UK Frontier AI Safety Framework Becomes Mandatory",
      date: "2026-03-15",
      category: "legislation",
      severity: "high",
      tags: ["uk", "frontier", "safety", "mandatory", "aisi"],
      body: "UK government converts voluntary frontier AI safety commitments into binding regulation. All models above capability threshold must undergo AISI evaluation before deployment. Labs must maintain \"kill switch\" capability and report dangerous capability discoveries within 24 hours. Three major labs already in compliance; smaller labs scrambling to meet requirements.",
      sources: [
        { title: "UK AI Security Institute (AISI)", url: "https://www.aisi.gov.uk/" },
        { title: "UK Gov AI Regulation", url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" },
      ],
      xAccounts: ["@sciTechgovuk"],
    },

    {
      id: "2026-03-08-california-sb1047-successor",
      title: "California Introduces SB-1047 Successor — Stricter Than Original",
      date: "2026-03-08",
      category: "legislation",
      severity: "high",
      tags: ["california", "state-law", "liability", "open-source", "compute"],
      body: "New California bill picks up where the vetoed SB-1047 left off, with stricter provisions. Imposes strict liability on developers of models above 10^26 FLOP or $100M training cost. Includes criminal penalties for \"reckless deployment.\" Open-source exemption is narrower than industry lobbied for. Bill has strong bipartisan support in committee.",
      sources: [
        { title: "California Legislature", url: "https://leginfo.legislature.ca.gov/" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-02-28-copyright-office-ruling",
      title: "US Copyright Office Rules AI-Generated Works Not Copyrightable",
      date: "2026-02-28",
      category: "legislation",
      severity: "medium",
      tags: ["copyright", "us", "ip", "creative", "ruling"],
      body: "US Copyright Office issues final ruling: works generated primarily by AI are not eligible for copyright protection. \"Human authorship\" requirement interpreted strictly — prompting alone does not constitute sufficient creative contribution. Major implications for AI-generated code, art, and text. Appeals expected.",
      sources: [
        { title: "US Copyright Office", url: "https://www.copyright.gov/" },
        { title: "EFF Analysis", url: "https://www.eff.org/" },
      ],
      xAccounts: [],
    },

    // ═══════════════════════════════════════════
    //  CULTURAL RESISTANCE
    // ═══════════════════════════════════════════

    {
      id: "2026-04-07-artists-lawsuit",
      title: "Major Artists' Coalition Files Landmark Copyright Suit",
      date: "2026-04-07",
      category: "culture",
      severity: "high",
      tags: ["copyright", "lawsuit", "artists", "training-data", "class-action"],
      body: "Coalition of 15,000+ artists, writers, and musicians files class-action suit seeking injunction against training on copyrighted works without explicit licensing. Backed by major record labels and publishers. Early rulings could set precedent that fundamentally constrains training data pipelines. Hearing scheduled for June 2026.",
      sources: [
        { title: "Pending — court docket", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-01-unplug-movement",
      title: "\"Unplug\" Movement Gains Mainstream Traction",
      date: "2026-04-01",
      category: "culture",
      severity: "moderate",
      tags: ["unplug", "boycott", "consumer", "movement", "ai-free"],
      body: "Anti-AI social movement \"Unplug\" now claims 2M+ members globally. Organizing consumer boycotts of AI-powered products and \"human-made\" certification campaigns. Several major brands including Patagonia and Whole Foods have begun marketing \"AI-free\" product lines in response. Movement spreading primarily through TikTok and grassroots organizing.",
      sources: [
        { title: "Pending — tracking", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-25-university-bans",
      title: "University Bans on AI Tools Spreading Across Europe",
      date: "2026-03-25",
      category: "culture",
      severity: "moderate",
      tags: ["education", "university", "ban", "europe", "academic-integrity"],
      body: "Over 40 European universities have now implemented strict bans on AI-assisted work across all departments, not just humanities. Movement framed as preserving \"cognitive sovereignty.\" Students caught using AI tools face automatic failure. Counter-protests argue bans are \"like banning calculators in the 80s.\" Several universities report 30% increase in manual proctoring costs.",
      sources: [
        { title: "Pending — aggregating reports", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-18-hollywood-strike-clause",
      title: "Hollywood Studios Agree to Sweeping AI Restrictions in New Contracts",
      date: "2026-03-18",
      category: "culture",
      severity: "high",
      tags: ["hollywood", "entertainment", "labor", "contracts", "sag-aftra", "wga"],
      body: "Following extended negotiations, major studios agree to contract clauses severely limiting AI use in writing, acting, and post-production. AI-generated scripts cannot be used as basis for production. Digital likenesses require explicit per-project consent with residual payments. VFX unions negotiating similar terms. Sets precedent for other creative industries.",
      sources: [
        { title: "SAG-AFTRA", url: "https://www.sagaftra.org/" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-10-nyt-ai-ban",
      title: "Major News Outlets Form Anti-AI Training Coalition",
      date: "2026-03-10",
      category: "culture",
      severity: "medium",
      tags: ["media", "news", "training-data", "coalition", "robots-txt"],
      body: "Coalition of 200+ news organizations across 30 countries implements coordinated technical and legal blocks against AI training on their content. New robots.txt directives, legal threats, and a shared \"AI Training Opt-Out\" technical standard. Coalition includes NYT, Reuters, BBC, and Associated Press. Some outlets begin watermarking all published text.",
      sources: [
        { title: "Pending — coalition forming", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-02-20-tech-worker-walkout",
      title: "Google & Microsoft Engineers Stage AI Ethics Walkout",
      date: "2026-02-20",
      category: "culture",
      severity: "moderate",
      tags: ["labor", "walkout", "ethics", "google", "microsoft", "protest"],
      body: "Over 3,000 engineers across Google and Microsoft stage coordinated walkout protesting what they call \"reckless deployment of AI systems without adequate safety testing.\" Demands include independent safety boards, longer evaluation periods before deployment, and right to refuse work on systems they deem unsafe. Companies issued statements acknowledging concerns.",
      sources: [
        { title: "Pending — media coverage", url: "#" },
      ],
      xAccounts: [],
    },

    // ═══════════════════════════════════════════
    //  WINS & BREAKTHROUGHS
    // ═══════════════════════════════════════════

    {
      id: "2026-04-09-open-model-surpasses",
      title: "Open-Weight Model Surpasses GPT-4 Class on All Benchmarks",
      date: "2026-04-09",
      category: "win",
      severity: "win",
      tags: ["open-source", "benchmark", "frontier", "apache-2", "decentralized"],
      body: "A fully open-weight model trained by a decentralized research collective has matched or exceeded GPT-4 class performance across all major reasoning, coding, and knowledge benchmarks. Weights released under Apache 2.0. Training cost estimated at $4M using donated compute. Demonstrates that frontier capability is no longer locked behind closed labs with billion-dollar budgets.",
      sources: [
        { title: "Hugging Face Open LLM Leaderboard", url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard" },
      ],
      xAccounts: ["@huggingface"],
    },

    {
      id: "2026-04-06-inference-cost-drop",
      title: "Inference Costs Drop 10x with New Quantization Breakthrough",
      date: "2026-04-06",
      category: "win",
      severity: "win",
      tags: ["quantization", "inference", "cost", "consumer-gpu", "democratization"],
      body: "Novel mixed-precision quantization technique allows 70B parameter models to run at near-full quality on consumer RTX 4090 GPUs. Inference costs at API providers already dropping. Paper demonstrates less than 1% quality loss at 3-bit quantization with their approach. Democratization of high-capability AI accelerating rapidly — what cost $1/1K tokens now costs $0.10.",
      sources: [
        { title: "Pending — preprint", url: "#" },
      ],
      xAccounts: ["@huggingface"],
    },

    {
      id: "2026-04-02-ai-drug-phase3",
      title: "AI-Designed Drug Enters Phase III Clinical Trials",
      date: "2026-04-02",
      category: "win",
      severity: "win",
      tags: ["biotech", "drug-discovery", "clinical-trial", "depression", "healthcare"],
      body: "First fully AI-designed therapeutic compound advances to Phase III trials for treatment of treatment-resistant depression. Molecule identified, optimized, and validated through AI pipeline in under 8 months — a process that historically takes 4-5 years. Phase II results showed 67% efficacy vs 23% placebo. Could reach market by 2027.",
      sources: [
        { title: "ClinicalTrials.gov", url: "https://clinicaltrials.gov/" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-29-ai-coding-agent-production",
      title: "AI Coding Agent Ships Production Feature End-to-End",
      date: "2026-03-29",
      category: "win",
      severity: "win",
      tags: ["coding", "agents", "automation", "development", "production"],
      body: "Multiple reports of AI coding agents successfully implementing, testing, and deploying production features with minimal human oversight. One YC startup reports 80% of their merged PRs are now AI-authored and pass all CI checks. The loop on autonomous software development is closing. Developer productivity metrics showing 3-5x gains for teams using agent-first workflows.",
      sources: [
        { title: "Cursor", url: "https://cursor.com/" },
        { title: "GitHub Copilot Research", url: "https://github.blog/ai-and-ml/" },
      ],
      xAccounts: ["@cursor_ai"],
    },

    {
      id: "2026-03-24-sovereign-compute",
      title: "Sovereign AI Compute — Three New National GPU Clusters",
      date: "2026-03-24",
      category: "win",
      severity: "win",
      tags: ["infrastructure", "sovereignty", "compute", "geopolitics", "gpu"],
      body: "Japan, UAE, and Canada each announce completion of dedicated sovereign AI compute clusters. Combined capacity exceeds 500,000 H100-equivalents. Reduces dependency on any single cloud provider and adds resilience to global AI infrastructure. Japan's cluster specifically designed for open research; UAE's includes world's largest inference farm.",
      sources: [
        { title: "Pending — gov announcements", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-16-reasoning-breakthrough",
      title: "Chain-of-Thought Scaling Unlocks PhD-Level Math Reasoning",
      date: "2026-03-16",
      category: "win",
      severity: "win",
      tags: ["reasoning", "math", "chain-of-thought", "scaling", "research"],
      body: "New research demonstrates that extended chain-of-thought with verification loops achieves 92% accuracy on PhD-level mathematics problems (MATH-hard benchmark). Previous SOTA was 61%. Key insight: allowing models to \"think longer\" with self-verification scales reasoning ability more efficiently than simply scaling parameters. Implications for scientific discovery are enormous.",
      sources: [
        { title: "Pending — preprint", url: "#" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-02-ai-materials-discovery",
      title: "AI Discovers New Room-Temperature Superconductor Candidate",
      date: "2026-03-02",
      category: "win",
      severity: "win",
      tags: ["materials-science", "superconductor", "discovery", "physics"],
      body: "AI materials discovery system identifies a novel compound predicted to exhibit superconductivity at 15°C under moderate pressure (50 GPa). Compound successfully synthesized and initial measurements are promising — confirmatory testing underway at three independent labs. If verified, would be a transformative breakthrough in energy and computing.",
      sources: [
        { title: "Pending — replication underway", url: "#" },
      ],
      xAccounts: [],
    },

    // ═══════════════════════════════════════════
    //  NEW TOOLS & RELEASES
    // ═══════════════════════════════════════════

    {
      id: "2026-04-10-cursor-10",
      title: "Cursor 1.0 — AI-Native IDE Goes Stable",
      date: "2026-04-10",
      category: "tool",
      severity: "tool",
      tags: ["ide", "cursor", "coding", "agents", "development"],
      body: "Cursor hits 1.0 milestone with multi-agent workflows, background tasks, and deep codebase understanding. Multi-file edits, autonomous debugging loops, and project-wide refactoring now reliable enough for daily use. Redefining what an IDE can be — less text editor, more autonomous development partner.",
      sources: [
        { title: "Cursor", url: "https://cursor.com/" },
        { title: "Cursor Changelog", url: "https://cursor.com/changelog" },
      ],
      xAccounts: ["@cursor_ai"],
    },

    {
      id: "2026-04-04-llamaindex-2",
      title: "LlamaIndex 2.0 — Unified Agentic Framework",
      date: "2026-04-04",
      category: "tool",
      severity: "tool",
      tags: ["framework", "agents", "rag", "llamaindex", "python"],
      body: "Major rewrite of LlamaIndex ships with unified agentic framework — seamless RAG, tool use, multi-step planning, and persistent memory in a single coherent API. Built-in evaluation suite for agent performance. Making it dramatically easier to build production-grade AI agents with proper observability.",
      sources: [
        { title: "LlamaIndex Docs", url: "https://docs.llamaindex.ai/" },
        { title: "GitHub: run-llama", url: "https://github.com/run-llama/llama_index" },
      ],
      xAccounts: ["@LangChainAI"],
    },

    {
      id: "2026-03-31-open-router-v3",
      title: "Open Router v3 — Universal Model Gateway",
      date: "2026-03-31",
      category: "tool",
      severity: "tool",
      tags: ["api", "routing", "models", "cost-optimization", "openrouter"],
      body: "Open Router releases v3 with automatic model routing based on task complexity, cost optimization, and multi-provider fallback chains across 200+ models. Single API endpoint picks the best model for the job. Eliminates vendor lock-in and makes model switching frictionless. New analytics dashboard shows cost-per-task breakdowns.",
      sources: [
        { title: "OpenRouter", url: "https://openrouter.ai/" },
      ],
      xAccounts: ["@OpenRouterAI"],
    },

    {
      id: "2026-03-26-localai-toolkit",
      title: "LocalAI Toolkit — One-Click Local Model Deployment",
      date: "2026-03-26",
      category: "tool",
      severity: "tool",
      tags: ["local", "privacy", "deployment", "open-source", "self-hosted"],
      body: "New open-source toolkit enables one-click deployment of quantized models locally with automatic hardware detection and optimization. Supports all major architectures (Llama, Mistral, Qwen, Gemma). GUI installer for non-technical users. Running your own models has never been easier — no cloud, no API keys, no surveillance.",
      sources: [
        { title: "LocalAI GitHub", url: "https://github.com/mudler/LocalAI" },
      ],
      xAccounts: ["@huggingface"],
    },

    {
      id: "2026-03-20-browser-use-agent",
      title: "Browser-Use 2.0 — AI Agents That Navigate the Web",
      date: "2026-03-20",
      category: "tool",
      severity: "tool",
      tags: ["browser", "agents", "automation", "web", "scraping"],
      body: "Browser-Use 2.0 ships with vision-based navigation, multi-tab orchestration, and CAPTCHA handling. AI agents can now autonomously browse, fill forms, extract data, and complete multi-step web tasks. Used by over 50 startups for automated research, lead gen, and testing workflows.",
      sources: [
        { title: "Browser-Use GitHub", url: "https://github.com/browser-use/browser-use" },
      ],
      xAccounts: [],
    },

    {
      id: "2026-03-14-claude-mcp-ecosystem",
      title: "MCP Protocol Adoption Explodes — 500+ Integrations",
      date: "2026-03-14",
      category: "tool",
      severity: "tool",
      tags: ["mcp", "protocol", "integrations", "anthropic", "ecosystem"],
      body: "Anthropic's Model Context Protocol hits 500+ third-party integrations. AI agents can now natively connect to databases, APIs, file systems, and SaaS tools through a standardized interface. Becoming the USB-C of AI tool use. Major adopters include Slack, Notion, GitHub, and Salesforce.",
      sources: [
        { title: "MCP Specification", url: "https://modelcontextprotocol.io/" },
        { title: "Anthropic", url: "https://www.anthropic.com/" },
      ],
      xAccounts: ["@AnthropicAI"],
    },


    {
      id: "2026-04-13--weekly-recap-fiber-optic-spying-windows",
      title: "⚡ Weekly Recap: Fiber Optic Spying, Windows Rootkit, AI Vulnerability Hunting and More",
      date: "2026-04-13",
      category: "hack",
      severity: "moderate",
      tags: ["ai-vulnerability","the-hacker-news"],
      body: "Monday is back, and the weekend’s backlog of chaos is officially hitting the fan. We are tracking a critical zero-day that has been quietly living in your PDFs for months, plus some aggressive state-sponsored meddling in infrastructure that is finally coming to light. It is one of those mornings ...",
      sources: [
        { title: "The Hacker News", url: "https://thehackernews.com/2026/04/weekly-recap-fiber-optic-spying-windows.html" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-13-vercel-ceo-guillermo-rauch-signals-ipo-r",
      title: "Vercel CEO Guillermo Rauch signals IPO readiness as AI agents fuel revenue surge",
      date: "2026-04-13",
      category: "tool",
      severity: "tool",
      tags: ["ai-agent","techcrunch"],
      body: "While many startups founded prior to the emergence of ChatGPT are struggling to position themselves for the AI era, Vercel, a 10-year-old dev tool and website hosting platform, is benefiting from the explosion of AI-generated apps and agents.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/13/vercel-ceo-guillermo-rauch-signals-ipo-readiness-as-ai-agents-fuel-revenue-surge/" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-13-cram-less-to-fit-more-training-data-prun",
      title: "Cram Less to Fit More: Training Data Pruning Improves Memorization of Facts",
      date: "2026-04-13",
      category: "hack",
      severity: "moderate",
      tags: ["training-data","apple-ml"],
      body: "This paper was accepted at the Workshop on Navigating and Addressing Data Problems for Foundation Models at ICLR 2026. Large language models (LLMs) can struggle to memorize factual knowledge in their parameters, often leading to hallucinations and poor performance on knowledge-intensive tasks. In...",
      sources: [
        { title: "Apple ML", url: "https://machinelearning.apple.com/research/cram-less" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-14-spring-ai-sdk-for-amazon-bedrock-agentco",
      title: "Spring AI SDK for Amazon Bedrock AgentCore is now Generally Available",
      date: "2026-04-14",
      category: "tool",
      severity: "tool",
      tags: ["ai-agent","aws-ml"],
      body: "With the new Spring AI AgentCore SDK, you can build production-ready AI agents and run them on the highly scalable AgentCore Runtime. The Spring AI AgentCore SDK is an open source library that brings Amazon Bedrock AgentCore capabilities into Spring AI. In this post, we build an AI agent starting...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/spring-ai-sdk-for-amazon-bedrock-agentcore-is-now-generally-available/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-15-rede-mater-dei-de-sa-de-monitoring-ai-ag",
      title: "Rede Mater Dei de Saúde: Monitoring AI agents in the revenue cycle with Amazon Bedrock AgentCore",
      date: "2026-04-15",
      category: "win",
      severity: "win",
      tags: ["ai-agent","aws-ml"],
      body: "This post is cowritten by Renata Salvador Grande, Gabriel Bueno and Paulo Laurentys at Rede Mater Dei de Saúde. The growing adoption of multi-agent AI systems is redefining critical operations in healthcare. In large hospital networks, where thousands of decisions directly impact cash flow, servi...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/rede-mater-dei-de-saude-monitoring-ai-agents-in-the-revenue-cycle-with-amazon-bedrock-agentcore/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-15-india-s-vibe-coding-startup-emergent-ent",
      title: "India’s vibe-coding startup Emergent enters OpenClaw-like AI agent space",
      date: "2026-04-15",
      category: "win",
      severity: "win",
      tags: ["ai-agent","techcrunch"],
      body: "Emergent's Wingman lets users manage and automate tasks through chat on platforms like WhatsApp and Telegram.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/15/indias-vibe-coding-startup-emergent-enters-openclaw-like-ai-agent-space/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-15-hightouch-reaches-100m-arr-fueled-by-mar",
      title: "Hightouch reaches $100M ARR fueled by marketing tools powered by AI",
      date: "2026-04-15",
      category: "tool",
      severity: "tool",
      tags: ["ai-agent","techcrunch"],
      body: "The startup says it grew its ARR by $70 million in just 20 months after launching an AI agent platform for marketers.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/15/hightouch-reaches-100m-arr-fueled-by-marketing-tools-powered-by-ai/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-16--webinar-find-and-eliminate-orphaned-non",
      title: "[Webinar] Find and Eliminate Orphaned Non-Human Identities in Your Environment",
      date: "2026-04-16",
      category: "win",
      severity: "win",
      tags: ["ai-agent","the-hacker-news"],
      body: "In 2024, compromised service accounts and forgotten API keys were behind 68% of cloud breaches. Not phishing. Not weak passwords. Unmanaged non-human identities that nobody was watching. For every employee in your org, there are 40 to 50 automated credentials: service accounts, API tokens, AI age...",
      sources: [
        { title: "The Hacker News", url: "https://thehackernews.com/2026/04/webinar-find-and-eliminate-orphaned-non.html" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-16-treating-enterprise-ai-as-an-operating-l",
      title: "Treating enterprise AI as an operating layer",
      date: "2026-04-16",
      category: "win",
      severity: "win",
      tags: ["foundation-model","mit-technology-review"],
      body: "There’s a fault line running through enterprise AI, and it’s not the one getting the most attention. The public conversation still tracks foundation models and benchmarks — GPT versus Gemini, reasoning scores, and marginal capability gains. But in practice, the more durable advantage is structura...",
      sources: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/2026/04/16/1135554/treating-enterprise-ai-as-an-operating-layer/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-16-new-athr-vishing-platform-uses-ai-voice",
      title: "New ATHR vishing platform uses AI voice agents for automated attacks",
      date: "2026-04-16",
      category: "win",
      severity: "win",
      tags: ["ai-agent","bleepingcomputer"],
      body: "A new cybercrime platform called ATHR can harvest credentials via fully automated voice phishing attacks that use both human operators and AI agents for the social engineering phase. [...]",
      sources: [
        { title: "BleepingComputer", url: "https://www.bleepingcomputer.com/news/security/new-athr-vishing-platform-uses-ai-voice-agents-for-automated-attacks/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-16-insightfinder-raises-15m-to-help-compani",
      title: "InsightFinder raises $15M to help companies figure out where AI agents go wrong",
      date: "2026-04-16",
      category: "win",
      severity: "win",
      tags: ["ai-agent","techcrunch"],
      body: "According to CEO Helen Gu, the biggest problem facing the industry today is not just monitoring and diagnosing where AI models go wrong, it's diagnosing how the entire tech stack operates now that AI is a part of it.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/16/insightfinder-raises-15m-to-help-companies-figure-out-where-ai-agents-go-wrong/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-16-how-automated-reasoning-checks-in-amazon",
      title: "How Automated Reasoning checks in Amazon Bedrock transform generative AI compliance",
      date: "2026-04-16",
      category: "legislation",
      severity: "moderate",
      tags: ["ai-compliance","aws-ml"],
      body: "In this post, you'll learn why probabilistic AI validation falls short in regulated industries and how Automated Reasoning checks use formal verification to deliver mathematically proven results. You'll also see how customers across six industries use this technology to produce formally verified,...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/how-automated-reasoning-checks-in-amazon-bedrock-transform-generative-ai-compliance/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-16-mixatlas-uncertainty-aware-data-mixture",
      title: "MixAtlas: Uncertainty-aware Data Mixture Optimization for Multimodal LLM Midtraining",
      date: "2026-04-16",
      category: "win",
      severity: "win",
      tags: ["foundation-model","apple-ml"],
      body: "This paper was accepted at the Workshop on Navigating and Addressing Data Problems for Foundation Models (NADPFM) at ICLR 2026. Principled domain reweighting can substantially improve sample efficiency and downstream generalization; however, data-mixture optimization for multimodal pretraining re...",
      sources: [
        { title: "Apple ML", url: "https://machinelearning.apple.com/research/mixatlas" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-16-factory-hits-1-5b-valuation-to-build-ai",
      title: "Factory hits $1.5B valuation to build AI coding for enterprises",
      date: "2026-04-16",
      category: "win",
      severity: "win",
      tags: ["ai-coding","techcrunch"],
      body: "The three-year-old startup raised $150 million led by Khosla Ventures.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/16/factory-hits-1-5b-valuation-to-build-ai-coding-for-enterprises/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-17-optimize-video-semantic-search-intent-wi",
      title: "Optimize video semantic search intent with Amazon Nova Model Distillation on Amazon Bedrock",
      date: "2026-04-17",
      category: "win",
      severity: "win",
      tags: ["inference-cost","aws-ml"],
      body: "In this post, we show you how to use Model Distillation, a model customization technique on Amazon Bedrock, to transfer routing intelligence from a large teacher model (Amazon Nova Premier) into a much smaller student model (Amazon Nova Micro). This approach cuts inference cost by over 95% and re...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/optimize-video-semantic-search-intent-with-amazon-nova-model-distillation-on-amazon-bedrock/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-18--webinar-eliminate-ghost-identities-befo",
      title: "[Webinar] Eliminate Ghost Identities Before They Expose Your Enterprise Data",
      date: "2026-04-18",
      category: "win",
      severity: "win",
      tags: ["ai-agent","the-hacker-news"],
      body: "In 2024, compromised service accounts and forgotten API keys were behind 68% of cloud breaches. Not phishing. Not weak passwords. Unmanaged non-human identities that nobody was watching. For every employee in your org, there are 40 to 50 automated credentials: service accounts, API tokens, AI age...",
      sources: [
        { title: "The Hacker News", url: "https://thehackernews.com/2026/04/webinar-find-and-eliminate-orphaned-non.html" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-18-the-app-store-is-booming-again-and-ai-ma",
      title: "The App Store is booming again, and AI may be why",
      date: "2026-04-18",
      category: "tool",
      severity: "tool",
      tags: ["ai-tool","techcrunch"],
      body: "New data from Appfigures shows a swell of new app launches in 2026, suggesting AI tools could be fueling a mobile software boom.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/18/the-app-store-is-booming-again-and-ai-may-be-why/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-18-ai-chip-startup-cerebras-files-for-ipo",
      title: "AI chip startup Cerebras files for IPO",
      date: "2026-04-18",
      category: "win",
      severity: "win",
      tags: ["ai-chip","techcrunch"],
      body: "In recent months, the company announced an agreement with Amazon Web Services to use Cerebras chips in Amazon data centers, as well as a deal with OpenAI reportedly worth more than $10 billion.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/18/ai-chip-startup-cerebras-files-for-ipo/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-19-the-12-month-window",
      title: "The 12-month window",
      date: "2026-04-19",
      category: "win",
      severity: "win",
      tags: ["foundation-model","techcrunch"],
      body: "A lot of AI startups exist partly because the foundation models haven't expanded into their category yet. As many jokingly acknowledge, that won't last forever.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/19/the-12-month-window/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-20-vercel-breach-tied-to-context-ai-hack-ex",
      title: "Vercel Breach Tied to Context AI Hack Exposes Limited Customer Credentials",
      date: "2026-04-20",
      category: "hack",
      severity: "moderate",
      tags: ["ai-hack","the-hacker-news"],
      body: "Web infrastructure provider Vercel has disclosed a security breach that allows bad actors to gain unauthorized access to \"certain\" internal Vercel systems. The incident stemmed from the compromise of Context.ai, a third-party artificial intelligence (AI) tool, that was used by an employee at the ...",
      sources: [
        { title: "The Hacker News", url: "https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-20-chinese-tech-workers-are-starting-to-tra",
      title: "Chinese tech workers are starting to train their AI doubles–and pushing back",
      date: "2026-04-20",
      category: "win",
      severity: "win",
      tags: ["ai-agent","mit-technology-review"],
      body: "Tech workers in China are being instructed by their bosses to train AI agents to replace them—and it’s prompting a wave of soul-searching among otherwise enthusiastic early adopters. Earlier this month a GitHub project called Colleague Skill, which claimed workers could use it to “distill�� their...",
      sources: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/2026/04/20/1136149/chinese-tech-workers-ai-colleagues/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-20-why-most-ai-deployments-stall-after-the",
      title: "Why Most AI Deployments Stall After the Demo",
      date: "2026-04-20",
      category: "tool",
      severity: "tool",
      tags: ["ai-tool","the-hacker-news"],
      body: "The fastest way to fall in love with an AI tool is to watch the demo. Everything moves quickly. Prompts land cleanly. The system produces impressive outputs in seconds. It feels like the beginning of a new era for your team. But most AI initiatives don't fail because of bad technology. They stall...",
      sources: [
        { title: "The Hacker News", url: "https://thehackernews.com/2026/04/why-most-ai-deployments-stall-after-demo.html" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-20-autonomous-ai-at-scale-adobe-agents-unlo",
      title: "Autonomous AI at Scale: Adobe Agents Unlock Breakthrough Creative Intelligence With NVIDIA and WPP",
      date: "2026-04-20",
      category: "win",
      severity: "win",
      tags: ["ai-agent","nvidia"],
      body: "AI agents are transforming how work gets done across all industries, accelerating everything from content creation to decision-making. NVIDIA’s expanded strategic collaborations with Adobe and WPP are bringing agentic AI to the center of enterprise marketing operations across creative production ...",
      sources: [
        { title: "NVIDIA", url: "https://blogs.nvidia.com/blog/adobe-ai-agents-nvidia-wpp/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-20-omnichannel-ordering-with-amazon-bedrock",
      title: "Omnichannel ordering with Amazon Bedrock AgentCore and Amazon Nova 2 Sonic",
      date: "2026-04-20",
      category: "win",
      severity: "win",
      tags: ["ai-agent","foundation-model","aws-ml"],
      body: "In this post, we'll show you how to build a complete omnichannel ordering system using Amazon Bedrock AgentCore, an agentic platform, to build, deploy, and operate highly effective AI agents securely at scale using any framework and foundation model and Amazon Nova 2 Sonic.",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/omnichannel-ordering-with-amazon-bedrock-agentcore-and-amazon-nova-2-sonic/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-20-toolsimulator-scalable-tool-testing-for",
      title: "ToolSimulator: scalable tool testing for AI agents",
      date: "2026-04-20",
      category: "tool",
      severity: "tool",
      tags: ["ai-agent","aws-ml"],
      body: "You can use ToolSimulator, an LLM-powered tool simulation framework within Strands Evals, to thoroughly and safely test AI agents that rely on external tools, at scale. Instead of risking live API calls that expose personally identifiable information (PII), trigger unintended actions, or settling...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/toolsimulator-scalable-tool-testing-for-ai-agents/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-20-accelerate-generative-ai-inference-on-am",
      title: "Accelerate Generative AI Inference on Amazon SageMaker AI with G7e Instances",
      date: "2026-04-20",
      category: "tool",
      severity: "win",
      tags: ["foundation-model","aws-ml"],
      body: "Today, we are thrilled to announce the availability of G7e instances powered by NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs on Amazon SageMaker AI. You can provision nodes with 1, 2, 4, and 8 RTX PRO 6000 GPU instances, with each GPU providing 96 GB of GDDR7 memory. This launch provides the...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/accelerate-generative-ai-inference-on-amazon-sagemaker-ai-with-g7e-instances/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-21-how-to-ground-a-korean-ai-agent-in-real",
      title: "How to Ground a Korean AI Agent in Real Demographics with Synthetic Personas",
      date: "2026-04-21",
      category: "win",
      severity: "win",
      tags: ["ai-agent","hugging-face"],
      body: "How to Ground a Korean AI Agent in Real Demographics with Synthetic Personas",
      sources: [
        { title: "Hugging Face", url: "https://huggingface.co/blog/nvidia/build-korean-agents-with-nemotron-personas" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-21-youtube-expands-its-ai-likeness-detectio",
      title: "YouTube expands its AI likeness detection technology to celebrities",
      date: "2026-04-21",
      category: "hack",
      severity: "moderate",
      tags: ["deepfake","techcrunch"],
      body: "YouTube is expanding its AI likeness detection tool to celebrities, giving talent and their reps a way to find and remove deepfakes.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/21/youtube-expands-its-ai-likeness-detection-technology-to-celebrities/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-21-ai-research-lab-neocognition-lands-40m-s",
      title: "AI research lab NeoCognition lands $40M seed to build agents that learn like humans",
      date: "2026-04-21",
      category: "win",
      severity: "win",
      tags: ["ai-agent","techcrunch"],
      body: "Founded by an OSU researcher, the startup is developing AI agents that can become experts in any domain.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/21/ai-research-lab-neocognition-lands-40m-seed-to-build-agents-that-learn-like-humans/" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-21-building-agent-first-governance-and-secu",
      title: "Building agent-first governance and security",
      date: "2026-04-21",
      category: "win",
      severity: "win",
      tags: ["ai-agent","mit-technology-review"],
      body: "As AI agents increasingly work alongside humans across organizations, companies could be inadvertently opening a new attack surface. Insecure agents can be manipulated to access sensitive systems and proprietary data, increasing enterprise risk. In some modern enterprises, non-human identities (N...",
      sources: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/2026/04/21/1136158/building-agent-first-governance-and-security/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-21-weaponized-deepfakes",
      title: "Weaponized deepfakes",
      date: "2026-04-21",
      category: "hack",
      severity: "moderate",
      tags: ["deepfake","mit-technology-review"],
      body: "For years, experts have warned that deepfakes—AI-generated videos, images, or audio recordings of people doing or saying things they haven’t actually done in real life—could be deployed in malicious ways. These dangers are now here. Improvements in deepfake technology, and the widespread availabi...",
      sources: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/2026/04/21/1135652/weaponized-deepfakes-ai-artificial-intelligence/" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-21-agent-orchestration",
      title: "Agent orchestration",
      date: "2026-04-21",
      category: "win",
      severity: "win",
      tags: ["ai-agent","mit-technology-review"],
      body: "When people say AI will speed up drug development or fear that it will bring about mass layoffs, what they have in mind—whether they know it or not—are AI agents. ChatGPT made large language models a mass consumer product. But to change the world, AI needs to do more than just talk back: It needs",
      sources: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/2026/04/21/1135654/agent-orchestration-ai-artificial-intelligence/" }
      ],
      xAccounts: [],
    },

    {
      id: "2026-04-21-resistance",
      title: "Resistance",
      date: "2026-04-21",
      category: "culture",
      severity: "moderate",
      tags: ["anti-ai","mit-technology-review"],
      body: "Turns out not everyone wants to live in the future that AI companies are building. People from all walks of life are speaking out against rising electricity bills from data centers, disappearing jobs, chatbots’ impact on teen mental health, the military’s use of AI, and copyright infringement—amo...",
      sources: [
        { title: "MIT Technology Review", url: "https://www.technologyreview.com/2026/04/21/1135665/resistance-ai-artificial-intelligence-backlash-protests/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-22-toxic-combinations-when-cross-app-permis",
      title: "Toxic Combinations: When Cross-App Permissions Stack into Risk",
      date: "2026-04-22",
      category: "win",
      severity: "win",
      tags: ["ai-agent","the-hacker-news"],
      body: "On January 31, 2026, researchers disclosed that Moltbook, a social network built for AI agents, had left its database wide open, exposing 35,000 email addresses and 1.5 million agent API tokens across 770,000 active agents. The more worrying part sat inside the private messages. Some of those con...",
      sources: [
        { title: "The Hacker News", url: "https://thehackernews.com/2026/04/toxic-combinations-when-cross-app.html" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-22-openai-teams-up-with-infosys-to-bring-ai",
      title: "OpenAI teams up with Infosys to bring AI tools to more businesses",
      date: "2026-04-22",
      category: "tool",
      severity: "tool",
      tags: ["ai-tool","techcrunch"],
      body: "Infosys said the integration will be used to help its clients modernize software development, automate workflows and deploy AI systems, initially focusing software engineering, legacy modernization, and DevOps.",
      sources: [
        { title: "TechCrunch", url: "https://techcrunch.com/2026/04/22/openai-teams-up-with-infosys-to-bring-ai-tools-to-more-businesses/" }
      ],
      xAccounts: [],
    },


    {
      id: "2026-04-22-company-wise-memory-in-amazon-bedrock-wi",
      title: "Company-wise memory in Amazon Bedrock with Amazon Neptune and Mem0",
      date: "2026-04-22",
      category: "win",
      severity: "win",
      tags: ["ai-agent","aws-ml"],
      body: "Company-wise memory in Amazon Bedrock, powered by Amazon Neptune and Mem0, provides AI agents with persistent, company-specific context—enabling them to learn, adapt, and respond intelligently across multiple interactions. TrendMicro, one of the largest antivirus software companies in the world, ...",
      sources: [
        { title: "AWS ML", url: "https://aws.amazon.com/blogs/machine-learning/company-wise-memory-in-amazon-bedrock-with-amazon-neptune-and-mem0/" }
      ],
      xAccounts: [],
    },

  ],
};

LONGINUS_DATA.meta.entryCount = LONGINUS_DATA.entries.length;
