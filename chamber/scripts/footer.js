// scripts/footer.js

// Dynamically set current year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Dynamically set last modified date with label
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
