// Load data from JSON
fetch('../data/items.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.getElementById('cards-container');
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('item-card');

            card.innerHTML = `
                <h3>${item.name}</h3>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => console.log('Error loading JSON:', error));

// Store the last visit date
const lastVisit = localStorage.getItem('lastVisit');
const visitMessage = document.createElement('p');
const currentDate = new Date();
const daysSinceLastVisit = lastVisit ? Math.floor((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24)) : null;

if (!lastVisit) {
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else if (daysSinceLastVisit < 1) {
    visitMessage.textContent = 'Back so soon! Awesome!';
} else {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
}
document.body.prepend(visitMessage);

// Update last visit date
localStorage.setItem('lastVisit', currentDate.toISOString());
