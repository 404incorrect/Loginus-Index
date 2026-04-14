// ── Starfield ──
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  const STAR_COUNT = 200;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        drift: (Math.random() - 0.5) * 0.15,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        hue: Math.random() > 0.85 ? (Math.random() > 0.5 ? 280 : 160) : 0,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const s of stars) {
      s.pulse += s.pulseSpeed;
      s.y += s.drift;

      if (s.y < -5) s.y = canvas.height + 5;
      if (s.y > canvas.height + 5) s.y = -5;

      const flicker = s.alpha + Math.sin(s.pulse) * 0.3;
      const a = Math.max(0.05, Math.min(1, flicker));

      if (s.hue) {
        ctx.fillStyle = `hsla(${s.hue}, 80%, 70%, ${a})`;
      } else {
        ctx.fillStyle = `rgba(200, 210, 230, ${a})`;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    createStars();
  });

  resize();
  createStars();
  draw();
})();

// ── Typing Effect for Terminal Prompt ──
(function initTyping() {
  const typedElements = document.querySelectorAll('[data-typed]');

  typedElements.forEach((el) => {
    const text = el.getAttribute('data-typed');
    el.textContent = '';
    let i = 0;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30 + Math.random() * 50);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          type();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
  });
})();

// ── Glitch Effect on Title Hover ──
(function initGlitch() {
  const title = document.querySelector('.title');
  if (!title) return;

  let running = false;
  title.addEventListener('mouseenter', () => {
    if (running) return;
    running = true;

    let count = 0;
    const originalText = title.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

    const interval = setInterval(() => {
      title.textContent = originalText
        .split('')
        .map((ch, i) => {
          if (i < count) return originalText[i];
          if (ch === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      count += 1;
      if (count > originalText.length) {
        clearInterval(interval);
        title.textContent = originalText;
        running = false;
      }
    }, 35);
  });
})();
