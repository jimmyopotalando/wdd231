async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    
    let memberList = document.getElementById("member-list");
    
    members.forEach(member => {
        let memberCard = document.createElement("div");
        memberCard.classList.add("card");
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.otherInfo}</p>
        `;
        
        memberList.appendChild(memberCard);
    });
}

loadMembers();

function toggleView(viewType) {
    const memberList = document.getElementById("member-list");
    if (viewType === 'grid') {
        memberList.classList.add("grid-view");
        memberList.classList.remove("list-view");
    } else {
        memberList.classList.add("list-view");
        memberList.classList.remove("grid-view");
    }
}




// members.js
const members = [
    { name: 'Company A', logo: 'images/logo-a.png', phone: '123-456-7890', address: '123 A St.', website: 'https://www.companya.com', membership: 'Gold' },
    { name: 'Company B', logo: 'images/logo-b.png', phone: '123-456-7891', address: '456 B St.', website: 'https://www.companyb.com', membership: 'Silver' },
    { name: 'Company C', logo: 'images/logo-c.png', phone: '123-456-7892', address: '789 C St.', website: 'https://www.companyc.com', membership: 'Gold' },
];

function getRandomSpotlights() {
    const spotlights = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
    const randomSpotlights = [];
    
    while (randomSpotlights.length < 3) {
        const randomIndex = Math.floor(Math.random() * spotlights.length);
        const randomMember = spotlights[randomIndex];
        if (!randomSpotlights.includes(randomMember)) {
            randomSpotlights.push(randomMember);
        }
    }
    
    const spotlightsContainer = document.getElementById('spotlights');
    spotlightsContainer.innerHTML = randomSpotlights.map(member => `
        <div class="spotlight-card">
            <img src="${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership: ${member.membership}</p>
        </div>
    `).join('');
}

getRandomSpotlights();
