// scripts/thankyou.js

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Parse query string
  const params = new URLSearchParams(window.location.search);

  // Helper to safely set text content
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  };

  // ✅ Populate submitted values
  setText("firstname", params.get("firstname"));
  setText("lastname", params.get("lastname"));
  setText("organization-title", params.get("organization-title"));
  setText("email", params.get("email"));
  setText("phone", params.get("phone"));
  setText("organization", params.get("organization"));
  setText("membership", params.get("membership"));
  setText("description", params.get("description"));

  // ✅ Format timestamp nicely
  const rawTimestamp = params.get("timestamp");
  if (rawTimestamp) {
    try {
      const date = new Date(rawTimestamp);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setText("timestamp", date.toLocaleString(undefined, options));
    } catch {
      setText("timestamp", rawTimestamp); // fallback to raw ISO
    }
  }

  // ✅ Footer year and last modified
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lastModifiedEl = document.getElementById("last-modified");
  if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;
});
