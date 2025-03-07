document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('nav ul');
    const hamburger = document.createElement('button');
    hamburger.innerHTML = '☰';
    document.querySelector('nav').appendChild(hamburger);
  
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });
  