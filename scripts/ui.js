// UI helpers: intersection observer for animate-on-scroll and mobile nav behavior
document.addEventListener('DOMContentLoaded', function () {
  // Intersection observer: animate elements with .animate-on-scroll
  try {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      animatedElements.forEach(el => observer.observe(el));
    }
  } catch (e) {
    console.warn('animate-on-scroll not available', e);
  }

  // Mobile navigation: graceful, only if elements exist
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const closeBtn = document.querySelector('.close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('#mobile-nav nav a');

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => mobileNav.classList.add('is-active'));
  }

  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', () => mobileNav.classList.remove('is-active'));
  }

  if (mobileNavLinks && mobileNav) {
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('is-active'));
    });
  }
});
