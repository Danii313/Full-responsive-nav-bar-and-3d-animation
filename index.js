
const navList = document.querySelector('.nav-list');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

mobileMenuButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});
