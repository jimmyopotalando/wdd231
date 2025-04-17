const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
    menuButton.setAttribute(
        'aria-expanded',
        navigation.classList.contains('open')
    );
});

const date = new Date();
const year = date.getFullYear();
document.querySelector("#year").textContent = year;

const lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;