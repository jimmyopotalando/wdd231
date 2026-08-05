// main.js
// Core site functionality for Town Spy Investigators

// =========================
// Responsive Navigation
// =========================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// =========================
// Modal Dialog
// =========================
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content" role="dialog" aria-modal="true">
    <span class="close">&times;</span>
    <h2>Welcome to Town Spy Investigators</h2>
    <p>Your privacy and trust are our top priority.</p>
  </div>
`;
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Show modal on page load
window.addEventListener('load', () => {
  modal.style.display = 'block';
});

// =========================
// Fetch Data & Dynamic Content
// =========================
async function loadServices() {
  try {
    const response = await fetch('data/services.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const services = await response.json();

    // Use array method map to generate HTML
    const serviceContainer = document.querySelector('.service-grid');
    if (serviceContainer) {
      serviceContainer.innerHTML = services.map(service => `
        <article>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <p><strong>Category:</strong> ${service.category}</p>
          <p><strong>Duration:</strong> ${service.duration}</p>
          <a href="services.html#${service.id}">Learn More</a>
        </article>
      `).join('');
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }
}
loadServices();

// =========================
// Local Storage Example
// =========================
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Dark Mode';
themeToggle.classList.add('btn');
document.querySelector('footer').appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Apply saved theme on load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// =========================
// Accessibility & Usability
// =========================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});
