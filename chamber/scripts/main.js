// js/main.js

// Toggle hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Display current year in footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Display last modified date in footer
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;
