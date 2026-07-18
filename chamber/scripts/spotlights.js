// scripts/spotlights.js
// Load 2–3 random Gold/Silver members from JSON and display them

async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Filter for Gold and Silver members
    const premium = members.filter(m => m.membership === 'Gold' || m.membership === 'Silver');

    // Randomize and select 2–3
    const selected = premium.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} Logo">
        <h3>${member.name}</h3>
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership: ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Spotlights fetch error:', error);
    document.getElementById('spotlight-container').textContent = 'Unable to load member spotlights.';
  }
}

loadSpotlights();
