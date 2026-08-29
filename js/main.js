/* ============================================================
   MAIN.JS — Cursor, Navbar, GSAP, Carousel, Tilt, Cart, etc.
   Global scripts — NO ES modules
   ============================================================ */

/* ── Loading Counter ─────────────────────────────────────── */
(function () {
  const num = document.getElementById('loading-num');
  if (!num) return;
  let count = 0;
  const id = setInterval(() => {
    count += Math.ceil(Math.random() * 12);
    if (count >= 100) { count = 100; clearInterval(id); }
    num.textContent = count;
  }, 80);
})();

window.addEventListener('load', () => {
  setTimeout(() => {
    const overlay = document.getElementById('loading');
    if (overlay) overlay.classList.add('out');
    startPageAnimations();
  }, 2200);
});

/* ── Custom Cursor ───────────────────────────────────────── */
(function () {
  const cursor = document.getElementById('cursor');
  if (!cursor || 'ontouchstart' in window) {
    if (cursor) cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
    document.querySelectorAll('*').forEach(el => el.style.cursor = '');
    return;
  }

  let cx = 0, cy = 0, rx = 0, ry = 0;
  const ball = document.getElementById('cursor-ball');
  const dot  = document.getElementById('cursor-dot2');

  document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });

  (function loop() {
    rx += (cx - rx) * 0.13;
    ry += (cy - ry) * 0.13;
    if (cursor) {
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
    }
    if (ball) { ball.style.left = (rx - cx) + 'px'; ball.style.top = (ry - cy) + 'px'; }
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a,button,.pcard,.swatch,.filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ── Navbar ──────────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('filled', window.scrollY > 60);
  }, { passive: true });
})();

/* ── Hamburger ───────────────────────────────────────────── */
(function () {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('mobile-menu');
  const close = document.getElementById('menu-close');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => menu.classList.add('open'));
  if (close) close.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();

/* ── GSAP Page Animations ────────────────────────────────── */
function startPageAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // ── Hero entrance
  const htl = gsap.timeline({ delay: 0.1 });
  htl
    .to('.hero-pre',     { opacity: 1, y: 0, duration: 1,   ease: 'power3.out' })
    .to('.hero-h1',      { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out' }, '-=0.5')
    .to('.hero-sub',     { opacity: 1,        duration: 1,   ease: 'power3.out' }, '-=0.7')
    .to('.hero-actions', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');

  // ── Generic scroll fade-up helper
  function scrollFade(sel, extra = {}) {
    gsap.utils.toArray(sel).forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: extra.y ?? 48,
        x: extra.x ?? 0,
        scale: extra.scale ?? 1,
        duration: extra.dur ?? 1,
        ease: extra.ease ?? 'power3.out',
        delay: (extra.stagger ?? 0) * i,
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      });
    });
  }

  // Manifesto
  scrollFade('.manifesto-text', { y: 60, dur: 1.3 });
  scrollFade('.manifesto-sig',  { y: 20, dur: 0.8 });

  // Story
  scrollFade('.story-label',   { x: -40, y: 0 });
  scrollFade('.story-title',   { x: -60, y: 0, dur: 1.2 });
  scrollFade('.story-body',    { y: 30, stagger: 0.1 });
  scrollFade('.story-founder', { y: 20 });
  scrollFade('.story-img-wrap',{ x: 60,  y: 0, dur: 1.3, scale: 0.97 });

  // Collection
  scrollFade('.collection-head', { y: 40 });
  gsap.utils.toArray('.pcard').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0, y: 64, scale: 0.96, duration: 0.9, ease: 'power3.out',
      delay: (i % 3) * 0.1,
      scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reverse' },
    });
  });

  // Feature
  scrollFade('.feature-text',  { x: 60, y: 0, dur: 1.2 });
  scrollFade('.feature-img',   { x: -60, y: 0, dur: 1.2, scale: 0.97 });

  // Viewer
  scrollFade('.viewer-label',  { y: 30 });
  scrollFade('.viewer-title',  { y: 50, dur: 1.2 });
  scrollFade('.viewer-body',   { y: 30 });
  scrollFade('.swatches',      { y: 20 });
  scrollFade('#viewer-canvas', { scale: 0.93, y: 0, dur: 1.2 });

  // Testimonials
  scrollFade('.testi-label', { y: 40 });

  // Newsletter
  scrollFade('.nl-label',  { y: 30 });
  scrollFade('.nl-title',  { y: 50, dur: 1.2 });
  scrollFade('.nl-body',   { y: 20 });
  scrollFade('.nl-form',   { y: 30 });
  scrollFade('.nl-perks',  { y: 20 });

  // Hero parallax
  gsap.to('.hero-left', {
    y: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero', start: 'top top',
      end: 'bottom top', scrub: true,
    },
  });

  // Gold line draws
  gsap.utils.toArray('.line').forEach(el => {
    gsap.from(el, {
      scaleX: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });
}

/* ── 3D Hero Init ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('hero-canvas');
  if (c && window.HeroBlob) HeroBlob.init(c);
});

/* ── 360° Viewer (lazy) ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('viewer-canvas');
  if (!canvas || !window.Viewer3D) return;

  let ready = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !ready) {
      ready = true;
      Viewer3D.init(canvas);
      obs.disconnect();
    }
  }, { rootMargin: '200px' });
  obs.observe(canvas);

  // Variant swatches
  document.querySelectorAll('.swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(s => s.classList.remove('on'));
      sw.classList.add('on');
      const v = sw.dataset.v;
      if (ready) Viewer3D.switchVariant(v);
      const lbl = document.getElementById('variant-name');
      if (lbl) lbl.textContent = sw.dataset.label || v;
    });
  });
});

/* ── Collection Filter ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pcard');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        const show = f === 'all' || card.dataset.category === f;
        card.style.display = show ? '' : 'none';
        if (show && typeof gsap !== 'undefined') {
          gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        }
      });
    });
  });
});

/* ── Testimonial Carousel ────────────────────────────────── */
(function () {
  const track  = document.getElementById('carousel-track');
  const dots   = document.querySelectorAll('.c-dot');
  const prev   = document.getElementById('c-prev');
  const next   = document.getElementById('c-next');
  if (!track) return;

  let cur = 0;
  const count = track.children.length;
  let timer;

  function go(idx) {
    cur = ((idx % count) + count) % count;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('on', i === cur));
  }
  function start() { timer = setInterval(() => go(cur + 1), 6000); }
  function stop()  { clearInterval(timer); }

  if (prev) prev.addEventListener('click', () => { go(cur - 1); stop(); start(); });
  if (next) next.addEventListener('click', () => { go(cur + 1); stop(); start(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); stop(); start(); }));

  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) { dx < 0 ? go(cur + 1) : go(cur - 1); }
  });

  go(0); start();
})();

/* ── 3D Tilt on product cards ────────────────────────────── */
(function () {
  if ('ontouchstart' in window) return;
  document.querySelectorAll('.pcard').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = (e.clientX - r.left) / r.width  - 0.5;
      const y  = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateY(${x * 10}deg) rotateX(${-y * 7}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

/* ── Newsletter ──────────────────────────────────────────── */
(function () {
  const form = document.getElementById('nl-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const inp = form.querySelector('input');
    if (!inp || !inp.value) return;
    btn.textContent = 'Subscribed ✓';
    btn.style.background = '#2e8b57';
    inp.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 4000);
  });
})();

/* ── Smooth anchor links ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── Chat widget recommendation flow ───────────────────── */
(function () {
  const widget = document.getElementById('chat-widget');
  if (!widget) return;

  const fab = widget.querySelector('.chat-widget__fab');
  const closeBtn = widget.querySelector('.chat-widget__close');
  const messages = document.getElementById('chat-messages');
  const choices = document.getElementById('chat-choices');
  const result = document.getElementById('chat-result');

  const recommendations = {
    floral: [
      { name: 'Lumière Dorée', reason: 'A radiant floral that feels soft, elegant, and confident for everyday luxury.' },
      { name: 'Rose Éternelle', reason: 'A romantic rose signature with feminine depth and graceful warmth.' },
      { name: 'Blanc de Blanc', reason: 'A delicate white floral option if you prefer lighter, cleaner elegance.' }
    ],
    fresh: [
      { name: 'Crystal Noir', reason: 'Clean, sparkling, and modern with a crisp freshness that feels polished and refined.' },
      { name: 'Blanc de Blanc', reason: 'Minimal, airy, and luminous for those who love a clean signature.' },
      { name: 'Lumière Dorée', reason: 'A bright floral-fresh choice for effortless daytime sophistication.' }
    ],
    oriental: [
      { name: 'Ambre Royal', reason: 'Warm, rich, and luxurious, perfect for a memorable evening impression.' },
      { name: 'Nuit d’Or', reason: 'A deeper sensual blend with amber, spice, and stunning longevity.' },
      { name: 'Rose Éternelle', reason: 'Soft oriental warmth with a romantic floral heart.' }
    ],
    woody: [
      { name: 'Blanc de Blanc', reason: 'Clean woods and soft musk create a refined, polished presence.' },
      { name: 'Crystal Noir', reason: 'A modern woody-fresh scent with subtle edge and clarity.' },
      { name: 'Nuit d’Or', reason: 'Dark, textured, and luxurious for a stronger signature mood.' }
    ]
  };

  function addMessage(text, type = 'bot') {
    const msg = document.createElement('div');
    msg.className = `message message--${type}`;
    msg.innerHTML = `<span>${text}</span>`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function renderMatches(key) {
    result.innerHTML = '';
    const list = recommendations[key] || recommendations.floral;
    list.forEach(item => {
      const box = document.createElement('div');
      box.className = 'chat-widget__match';
      box.innerHTML = `<strong>${item.name}</strong><span>${item.reason}</span>`;
      result.appendChild(box);
    });
  }

  function setOpen(state) {
    widget.classList.toggle('is-open', state);
    widget.setAttribute('aria-expanded', String(state));
  }

  function handleChoice(choice) {
    const label = choice.charAt(0).toUpperCase() + choice.slice(1);
    addMessage(`I’d like a ${label.toLowerCase()} scent.`, 'user');

    const suggestionText = `Based on your taste, we recommend these options:`;
    addMessage(suggestionText, 'bot');
    renderMatches(choice);

    choices.innerHTML = '<button type="button" data-choice="floral">Start again</button>';
    const retry = choices.querySelector('button');
    if (retry) retry.addEventListener('click', () => {
      choices.innerHTML = [
        '<button type="button" data-choice="floral">Floral</button>',
        '<button type="button" data-choice="fresh">Fresh</button>',
        '<button type="button" data-choice="oriental">Warm / Oriental</button>',
        '<button type="button" data-choice="woody">Woody</button>'
      ].join('');
      result.innerHTML = '';
      addMessage('Tell me the kind of perfume you prefer and I’ll match it to your style.', 'bot');
      bindButtons();
    });
  }

  function bindButtons() {
    choices.querySelectorAll('button[data-choice]').forEach(button => {
      button.addEventListener('click', () => handleChoice(button.dataset.choice));
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));
  if (fab) fab.addEventListener('click', () => setOpen(true));

  bindButtons();
})();
