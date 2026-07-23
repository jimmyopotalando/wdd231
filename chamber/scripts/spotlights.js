// Spotlights section: show 2–3 random Gold/Silver members
async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Members JSON not found");
    const members = await response.json();
    spotlightMembers(members);
  } catch (error) {
    console.error("Spotlights fetch failed:", error);
    document.querySelector(".spotlights").textContent = "Spotlights unavailable.";
  }
}

function spotlightMembers(members) {
  // Filter Gold and Silver members
  const eligible = members.filter(m => 
    m.membership === "Gold" || m.membership === "Silver"
  );

  // Randomly select up to 3
  const chosen = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

  renderSpotlights(chosen);
}

function renderSpotlights(companies) {
  const container = document.querySelector(".spotlights");
  container.innerHTML = "";
  companies.forEach(c => {
    const card = document.createElement("div");
    card.className = "spotlight-card";
    card.innerHTML = `
      <h3>${c.name}</h3>
      <p>${c.tagline || ""}</p>
      <a href="${c.website}" target="_blank">Visit Site</a>
    `;
    container.appendChild(card);
  });
}

loadSpotlights();
