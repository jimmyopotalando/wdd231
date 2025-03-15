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
