const logoElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

logoElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});
