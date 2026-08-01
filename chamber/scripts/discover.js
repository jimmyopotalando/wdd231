// js/discover.js
import { items } from "../data/discover.mjs";

// Build cards dynamically
const grid = document.querySelector(".discover-grid");

items.forEach((item, index) => {
  const card = document.createElement("article");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  const title = document.createElement("h2");
  title.textContent = item.title;

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  figure.appendChild(img);

  const address = document.createElement("address");
  address.textContent = item.address;

  const desc = document.createElement("p");
  desc.textContent = item.description;

  const button = document.createElement("button");
  button.textContent = "Learn More";

  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(address);
  card.appendChild(desc);
  card.appendChild(button);

  grid.appendChild(card);
});

// Visitor message logic
const messageEl = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    messageEl.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageEl.textContent = "You last visited 1 day ago.";
  } else {
    messageEl.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
