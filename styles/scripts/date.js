// Set the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;


const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last updated: ${lastModifiedDate}`;
