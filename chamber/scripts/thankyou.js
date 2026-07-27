// scripts/thankyou.js

// Parse query string and display submitted values
const params = new URLSearchParams(window.location.search);
document.getElementById("firstname").textContent = params.get("firstname") || "";
document.getElementById("lastname").textContent = params.get("lastname") || "";
document.getElementById("organization-title").textContent = params.get("organization-title") || "";
document.getElementById("email").textContent = params.get("email") || "";
document.getElementById("phone").textContent = params.get("phone") || "";
document.getElementById("organization").textContent = params.get("organization") || "";
document.getElementById("membership").textContent = params.get("membership") || "";
document.getElementById("description").textContent = params.get("description") || "";
document.getElementById("timestamp").textContent = params.get("timestamp") || "";
