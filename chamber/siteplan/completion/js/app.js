import { validateForm } from './form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
    // Responsive Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    navToggle.addEventListener('click', () => {
        const isVisible = primaryNav.getAttribute('data-visible') === 'true';
        primaryNav.setAttribute('data-visible', !isVisible);
        navToggle.setAttribute('aria-expanded', !isVisible);
    });

    // --- Home Page: Dynamic Content Loading (Trails) ---
    if (document.querySelector('.trails-grid')) {
        const trailsDataContainer = document.getElementById('trails-data-container');
        const apiUrl = 'https://some-api.com/trails'; // Replace with your API endpoint or local JSON file
        const backupData = [
            { id: 1, name: "Mountain View Trail", location: "California", distance: 10, difficulty: "Moderate", description: "A scenic trail with beautiful views.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 2, name: "Forest Hike", location: "Oregon", distance: 8, difficulty: "Easy", description: "A relaxing hike through a lush forest.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 3, name: "Desert Ridge Trail", location: "Arizona", distance: 12, difficulty: "Difficult", description: "A challenging hike with stunning desert landscapes.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 4, name: "Coastal Path", location: "Maine", distance: 6, difficulty: "Easy", description: "A beautiful coastal trail with ocean views.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 5, name: "Alpine Summit Trail", location: "Colorado", distance: 14, difficulty: "Difficult", description: "A demanding hike to a high-altitude summit.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 6, name: "Redwood Grove Walk", location: "California", distance: 4, difficulty: "Easy", description: "A peaceful walk among towering redwood trees.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 7, name: "Canyon Rim Trail", location: "Utah", distance: 11, difficulty: "Moderate", description: "Hike along the rim of a breathtaking canyon.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 8, name: "Waterfall Trail", location: "Washington", distance: 7, difficulty: "Moderate", description: "Hike to a beautiful waterfall.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 9, name: "Lakeside Loop", location: "Minnesota", distance: 5, difficulty: "Easy", description: "A leisurely loop around a scenic lake.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 10, name: "Mountain Pass Trail", location: "Montana", distance: 13, difficulty: "Difficult", description: "A challenging trail through a high mountain pass.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 11, name: "Desert Oasis Hike", location: "Nevada", distance: 9, difficulty: "Moderate", description: "Discover a hidden oasis in the desert.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 12, name: "Pine Forest Trail", location: "Georgia", distance: 6, difficulty: "Easy", description: "A relaxing hike through a fragrant pine forest.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 13, name: "River Valley Trail", location: "Ohio", distance: 10, difficulty: "Moderate", description: "Hike along a scenic river valley.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 14, name: "Glacier View Trail", location: "Alaska", distance: 15, difficulty: "Difficult", description: "A breathtaking trail with views of a glacier.", imageUrl: "https://placehold.co/400x300/EEE/31343C" },
            { id: 15, name: "Hilltop Vista Trail", location: "Vermont", distance: 4, difficulty: "Easy", description: "A short hike to a beautiful hilltop vista.", imageUrl: "https://placehold.co/400x300/EEE/31343C" }
        ];

        async function fetchTrails() {
            try {
                // const response = await fetch(apiUrl);
                // if (!response.ok) {
                //     throw new Error(`HTTP error! status: ${response.status}`);
                // }
                // const data = await response.json();
                // localStorage.setItem('trails', JSON.stringify(data)); // Store fetched data
                const data = backupData;
                localStorage.setItem('trails', JSON.stringify(data));
                return data;
            } catch (error) {
                console.error("Failed to fetch trails:", error);
                // Fallback: Load from localStorage if available
                const storedTrails = localStorage.getItem('trails');
                if (storedTrails) {
                    console.warn("Using cached trail data.");
                    return JSON.parse(storedTrails);
                }
                // If no data at all, return backup data.
                return backupData;
            }
        }

        function displayTrails(trails) {
            trailsDataContainer.innerHTML = ''; // Clear previous content
            trails.forEach(trail => {
                const trailElement = document.createElement('div');
                trailElement.classList.add('trail-item');
                trailElement.innerHTML = `
                    <h3>${trail.name}</h3>
                    <p>Location: ${trail.location}</p>
                    <p>Distance: ${trail.distance} miles</p>
                    <p>Difficulty: ${trail.difficulty}</p>
                    <img src="${trail.imageUrl}" alt="${trail.name}" loading="lazy">
                    <button class="view-details-button" data-trail-id="${trail.id}">View Details</button>
                `;
                trailsDataContainer.appendChild(trailElement);
            });
        }

        function showTrailDetails(trail) {
            const modal = document.getElementById('modal');
            const modalTitle = document.getElementById('modal-title');
            const modalText = document.getElementById('modal-text');
            const closeButton = document.querySelector('.close-button');

            modalTitle.textContent = trail.name;
            modalText.innerHTML = `
                <p><strong>Location:</strong> ${trail.location}</p>
                <p><strong>Distance:</strong> ${trail.distance} miles</p>
                <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
                <p><strong>Description:</strong> ${trail.description}</p>
                <img src="${trail.imageUrl}" alt="${trail.name}" style="width:100%; border-radius:8px; margin-top:1rem;">
            `;
            modal.style.display = "block";

            closeButton.addEventListener('click', () => {
                modal.style.display = "none";
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            })
        }

        (async () => {
            const trails = await fetchTrails();
            displayTrails(trails);

            // Event listener for dynamically created buttons
            trailsDataContainer.addEventListener('click', (event) => {
                if (event.target.classList.contains('view-details-button')) {
                    const trailId = parseInt(event.target.dataset.trailId);
                    const selectedTrail = trails.find(trail => trail.id === trailId);
                    if (selectedTrail) {
                        showTrailDetails(selectedTrail);
                    }
                }
            });
        })();
    }

    // --- Contact Page: Form Validation and Submission ---
    if (document.getElementById('contact-form')) {
        const contactForm = document.getElementById('contact-form');
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalText = document.getElementById('modal-text');
        const closeButton = document.querySelector('.close-button');

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (validateForm()) { // Use the imported validation function
                // Simulate form submission
                console.log('Form submitted successfully!');
                const formData = new FormData(contactForm);
                for (const pair of formData.entries()) {
                    console.log(pair[0] + ': ' + pair[1]);
                }

                // Display modal
                modalTitle.textContent = "Thank You!";
                modalText.textContent = "Your message has been sent successfully!";
                modal.style.display = "block";

                // Reset form
                contactForm.reset();

                closeButton.addEventListener('click', () => {
                    modal.style.display = "none";
                });

                window.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = "none";
                    }
                });

            } else {
                console.log('Form submission failed due to validation errors.');
            }
        });
    }
});

