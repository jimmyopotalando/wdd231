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







// List of members with their details (name, logo, phone, address, website, membership level, and other info)
const members = [
    {
        name: 'Company One',
        logo: 'images/company1.jpg',
        phone: '(555) 123-4567',
        address: '123 Main St, Timbuktu',
        website: 'https://www.companyone.com',
        membershipLevel: 1,
        otherInfo: 'Local business since 1990'
    },
    {
        name: 'Company Two',
        logo: 'images/company2.jpg',
        phone: '(555) 234-5678',
        address: '456 Elm St, Timbuktu',
        website: 'https://www.companytwo.com',
        membershipLevel: 2,
        otherInfo: 'Award-winning restaurant'
    },
    {
        name: 'Company Three',
        logo: 'images/company1.jpg',
        phone: '(555) 345-6789',
        address: '789 Oak St, Timbuktu',
        website: 'https://www.companythree.com',
        membershipLevel: 3,
        otherInfo: 'Top-tier digital agency'
    },
    {
        name: 'Company Four',
        logo: 'images/company2.jpg',
        phone: '(555) 456-7890',
        address: '321 Pine St, Timbuktu',
        website: 'https://www.companyfour.com',
        membershipLevel: 1,
        otherInfo: 'Trusted construction company'
    },
    {
        name: 'Company Five',
        logo: 'images/company1.jpg',
        phone: '(555) 567-8901',
        address: '654 Maple St, Timbuktu',
        website: 'https://www.companyfive.com',
        membershipLevel: 2,
        otherInfo: 'Popular local gym'
    },
    {
        name: 'Company Six',
        logo: 'images/company2.jpg',
        phone: '(555) 678-9012',
        address: '987 Cedar St, Timbuktu',
        website: 'https://www.companysix.com',
        membershipLevel: 3,
        otherInfo: 'Eco-friendly products'
    },
    {
        name: 'Company Seven',
        logo: 'images/company1.jpg',
        phone: '(555) 789-0123',
        address: '135 Birch St, Timbuktu',
        website: 'https://www.companyseven.com',
        membershipLevel: 1,
        otherInfo: 'Local bookstore and cafe'
    }
];

// Function to get random spotlights from Gold or Silver members
function getRandomSpotlights() {
    // Filter members by membership level (Gold: level 1, Silver: level 2)
    const spotlights = members.filter(member => member.membershipLevel === 1 || member.membershipLevel === 2);
    const randomSpotlights = [];

    // Ensure we only get 2-3 random members (no duplicates)
    while (randomSpotlights.length < 3 && spotlights.length > 0) {
        const randomIndex = Math.floor(Math.random() * spotlights.length);
        const randomMember = spotlights[randomIndex];
        
        if (!randomSpotlights.includes(randomMember)) {
            randomSpotlights.push(randomMember);
        }
    }




    fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const members = data.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
        const spotlightsContainer = document.getElementById('spotlights');
        spotlightsContainer.innerHTML = members.map(member => `
            <div class="spotlight-card">
                <img src="${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
                <p>${member.otherInfo}</p>
            </div>
        `).join('');
    })
    .catch(error => console.error('Error fetching members:', error));

    // Get the container where the spotlights will be injected
    const spotlightsContainer = document.getElementById('spotlights');
    
    // Add the random members to the spotlights container
    spotlightsContainer.innerHTML = randomSpotlights.map(member => `
        <div class="spotlight-card">
            <img src="${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership: ${member.membershipLevel === 1 ? 'Gold' : 'Silver'}</p>
            <p>${member.otherInfo}</p>
        </div>
    `).join('');
}

// Call the function to populate the spotlights when the page loads
getRandomSpotlights();
