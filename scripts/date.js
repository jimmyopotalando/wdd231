// date.js

// Dynamically set the current year
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Dynamically set the last modified date
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
  lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
}
