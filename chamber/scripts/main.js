// scripts/main.js

// Toggle hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen); // accessibility
});

// Keyboard accessibility for hamburger
menuToggle.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  }
});

// Display current year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Display last modified date in footer
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;
