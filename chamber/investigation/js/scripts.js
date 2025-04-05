// Example for storing form data in localStorage
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Store form data in localStorage
    localStorage.setItem('contactForm', JSON.stringify(formData));

    // Example of using a modal dialog (simple alert)
    alert("Your message has been stored. We'll get back to you soon!");
});

// Function to fetch JSON data
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
