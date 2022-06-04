
// ===== Menu ===== //

let container = document.querySelector('.container-nav .navbar');
let menuNavigation = document.querySelector('.navbar__menu');
let menuBtn = document.querySelector('.navbar__btnMobile');

function showMenu() {
    container.classList.toggle('active-container')
    menuNavigation.classList.toggle('active-menu');
    menuBtn.classList.toggle('active-btn');
}


window.onscroll = () => {
    container.classList.remove('active-container');
    menuNavigation.classList.remove('active-menu');
    menuBtn.classList.remove('active-btn');
}


