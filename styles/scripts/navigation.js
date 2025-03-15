document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.hamburger-menu');

    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
