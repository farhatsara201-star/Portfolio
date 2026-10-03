document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const closeMenu = () => {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation');
  navLinks.classList.remove('open');
  document.body.classList.remove('menu-open');
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navLinks.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

const revealItems = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealItems.forEach(item => observer.observe(item));
}


// Lightweight reading progress, updated at most once per animation frame.
let progressPending = false;
let updateNavState = () => {};
const updateReadingProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
  if (header) header.style.setProperty('--reading-progress', String(progress));
  updateNavState();
  progressPending = false;
};
window.addEventListener('scroll', () => {
  if (progressPending) return;
  progressPending = true;
  requestAnimationFrame(updateReadingProgress);
}, { passive: true });
window.addEventListener('resize', updateReadingProgress);
window.addEventListener('load', updateReadingProgress);
updateReadingProgress();

// Identify the section currently being read without changing navigation history.
const sectionLinks = navLinks ? [...navLinks.querySelectorAll('a[href^="#"]')] : [];
const navSections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
updateNavState = () => {
  const activeSection = [...navSections].reverse().find(section => section.getBoundingClientRect().top <= window.innerHeight * 0.45);
  sectionLinks.forEach(link => {
    if (activeSection && link.getAttribute('href') === '#' + activeSection.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
updateNavState();
