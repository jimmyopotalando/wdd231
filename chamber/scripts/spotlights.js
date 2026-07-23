// scripts/spotlights.js
// Load 2–3 random Gold/Silver members from JSON and display them

async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const members = await response.json();

    // Filter for Gold and Silver members only
    const premiumMembers = members.filter(m =>
      m.membership.toLowerCase() === 'gold' || m.membership.toLowerCase() === 'silver'
    );

    // Randomize and select 2–3 members
    const shuffled = premiumMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2 or 3

    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} Logo" class="spotlight-logo">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
        <p><em>Membership: ${member.membership}</em></p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Spotlights fetch error:', error);
    const container = document.getElementById('spotlight-container');
    container.textContent = 'Unable to load member spotlights.';
  }
}

loadSpotlights();
