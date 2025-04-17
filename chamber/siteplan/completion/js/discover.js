document.addEventListener('DOMContentLoaded', function() {
    const lastVisitElement = document.getElementById('last-visit');
    const now = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit === null) {
        lastVisitElement.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const lastVisitDate = parseInt(lastVisit);
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            lastVisitElement.textContent = 'Back so soon! Awesome!';
        } else if (daysDiff === 1) {
            lastVisitElement.textContent = 'You last visited 1 day ago.';
        } else {
            lastVisitElement.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', now);

    async function displayDiscoverItems() {
        try {
            const response = await fetch('data/discover_data.json');
            const items = await response.json();
            const gridContainer = document.querySelector('.discover-grid');

            items.forEach((item, index) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.style.gridArea = `item${index + 1}`;

                const h2 = document.createElement('h2');
                h2.textContent = item.name;

                const figure = document.createElement('figure');
                const img = document.createElement('img');
                img.src = `images/${item.image}`;