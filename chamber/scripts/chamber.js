// Function to display the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Function to display the last modified date
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

// Sample data for featured businesses and events
const businesses = [
    { name: "Timbuktu Coffee", description: "Serving the finest coffee in Timbuktu.", website: "http://timbuktucoffee.com" },
    { name: "Timbuktu Books", description: "A local bookstore with a wide variety of books.", website: "http://timbuktubooks.com" }
];

const events = [
    { name: "Business Networking Event", date: "April 15, 2025", description: "Join us for a networking event to connect local businesses." },
    { name: "Workshop: Marketing Strategies", date: "May 10, 2025", description: "Learn new marketing strategies to grow your business." }
];

// Function to display businesses
function displayBusinesses() {
    const businessList = document.getElementById('business-list');
    businesses.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.classList.add('business-card');
        businessCard.innerHTML = `
            <h3>${business.name}</h3>
            <p>${business.description}</p>
            <a href="${business.website}" target="_blank">Visit Website</a>
        `;
        businessList.appendChild(businessCard);
    });
}

// Function to display events
function displayEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(eventCard);
    });
}

// Call functions to display data
displayBusinesses();
displayEvents();
