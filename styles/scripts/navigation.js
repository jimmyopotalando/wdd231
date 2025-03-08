document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('#nav ul');
    const menuToggle = document.querySelector('#menu-toggle');

    // Toggle navigation visibility on small screens
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
