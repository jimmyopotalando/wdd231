// scripts/join.js

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Populate timestamp hidden field
  const tsField = document.getElementById("timestamp");
  if (tsField) {
    tsField.value = new Date().toISOString();
  }

  // ✅ Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  // ✅ Modal functionality
  const cardLinks = document.querySelectorAll(".card a");
  const closeButtons = document.querySelectorAll(".close-modal");

  cardLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modal = document.querySelector(link.getAttribute("href"));
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // ✅ Accessibility: close modal with Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
      });
    }
  });
});
