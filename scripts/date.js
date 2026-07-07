// date.js

// Dynamically set current year
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Dynamically set last modified date
const lastModifiedPara = document.getElementById('lastModified');
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
