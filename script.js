// ===========================
// NAV SCROLL EFFECT
// ===========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ===========================
// MOBILE MENU
// ===========================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const isOpen = mobileMenu.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===========================
// GSAP ANIMATIONS
// ===========================
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance — only translate, no opacity (safe fallback)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-eyebrow',    { y: 20, duration: 0.6 })
    .from('.hero-name',       { y: 40, duration: 0.7 }, '-=0.3')
    .from('.hero-tagline',    { y: 30, duration: 0.6 }, '-=0.4')
    .from('.hero-sub',        { y: 20, duration: 0.5 }, '-=0.3')
    .from('.hero-actions',    { y: 20, duration: 0.5 }, '-=0.3')
    .from('.hero-badges',     { y: 15, duration: 0.4 }, '-=0.2')
    .from('.hero-image-frame',{ x: 40, duration: 0.8, ease: 'power2.out' }, '-=0.8');

  // Scroll-triggered — translate only, no opacity
  const scrollFadeUp = (selector, trigger, stagger) => {
    gsap.from(selector, {
      scrollTrigger: { trigger: trigger || selector, start: 'top 88%', toggleActions: 'play none none none' },
      y: 30, duration: 0.6, stagger: stagger || 0, ease: 'power2.out'
    });
  };

  scrollFadeUp('.section-header');
  scrollFadeUp('.about-image-col');
  scrollFadeUp('.about-text-col');
  scrollFadeUp('.timeline-item', '.timeline', 0.15);
  scrollFadeUp('.cs-card', '.cs-cards-grid', 0.1);
  scrollFadeUp('.pm-who-card', '.pm-who-grid', 0.08);
  scrollFadeUp('.stat', '.about-stats', 0.1);
  scrollFadeUp('.contact-link', '.contact-links', 0.1);

  document.querySelectorAll('.case-study').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      y: 40, duration: 0.7, ease: 'power2.out'
    });
  });

  document.querySelectorAll('.result-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
      scale: 0.92, duration: 0.4, delay: i * 0.06, ease: 'back.out(1.2)'
    });
  });

  gsap.from('.pm-rounds-text', {
    scrollTrigger: { trigger: '.pm-rounds', start: 'top 85%', toggleActions: 'play none none none' },
    x: -30, duration: 0.7, ease: 'power2.out'
  });
  gsap.from('#substackPosts', {
    scrollTrigger: { trigger: '.pm-rounds', start: 'top 85%', toggleActions: 'play none none none' },
    x: 30, duration: 0.7, ease: 'power2.out'
  });
});

// ===========================
// SUBSTACK RSS FEED
// ===========================
async function loadSubstackPosts() {
  const SUBSTACK_URL = 'https://pmrounds.substack.com/feed';
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_URL)}&count=3`;
  const container = document.getElementById('substackPosts');

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (data.status !== 'ok' || !data.items || data.items.length === 0) {
      showComingSoon(container);
      return;
    }

    container.innerHTML = data.items.map(item => {
      const date = new Date(item.pubDate).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
      });
      const excerpt = item.description
        ? item.description.replace(/<[^>]+>/g, '').slice(0, 160) + '...'
        : '';
      return `
        <div class="substack-post">
          <div class="post-date">${date}</div>
          <a href="${item.link}" target="_blank" rel="noopener">
            <div class="post-title">${item.title}</div>
          </a>
          ${excerpt ? `<div class="post-excerpt">${excerpt}</div>` : ''}
        </div>
      `;
    }).join('');

  } catch {
    showComingSoon(container);
  }
}

function showComingSoon(container) {
  container.innerHTML = `
    <div class="posts-coming-soon">
      <p style="font-family:'Playfair Display',serif;font-size:1rem;color:#7B6860;margin-bottom:0.5rem;">First issue coming soon.</p>
      <p>Subscribe to PM Rounds to be notified.</p>
    </div>
  `;
}

loadSubstackPosts();
