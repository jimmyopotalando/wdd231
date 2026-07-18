// js/directory.js

// Fetch members.json and display businesses
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Display members in the chosen layout
function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = ""; // Clear existing content

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p class="description">${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
    `;

    container.appendChild(card);
  });
}

// Convert membership level number to text
function getMembershipLevel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}

// Toggle between grid and list views
function setGridView() {
  const container = document.getElementById("members");
  container.classList.remove("list");
  container.classList.add("grid");
}

function setListView() {
  const container = document.getElementById("members");
  container.classList.remove("grid");
  container.classList.add("list");
}

// Event listeners for toggle buttons
document.getElementById("grid-view").addEventListener("click", setGridView);
document.getElementById("list-view").addEventListener("click", setListView);

// Load members on page load
loadMembers();
