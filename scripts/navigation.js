// navigation.js

// Select elements
const menuButton = document.getElementById('menuButton');
const primaryNav = document.getElementById('primaryNav');

// Toggle navigation open/close
menuButton.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

// Keyboard accessibility for menu button
menuButton.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const isOpen = primaryNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  }
});

// Wayfinding: highlight current page link
const navLinks = primaryNav.querySelectorAll('a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('current');
  }
});
