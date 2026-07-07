// navigation.js

// Grab elements
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on click
menuButton.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

// Keyboard accessibility for hamburger
menuButton.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const isOpen = navMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  }
});

// Wayfinding: highlight current page link
const links = navMenu.querySelectorAll('a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Optional: close menu when a link is clicked (mobile UX improvement)
links.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', false);
    }
  });
});
