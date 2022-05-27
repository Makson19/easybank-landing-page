
// ===== Menu ===== //

function showMenu() {
    let container = document.querySelector('.container-nav .navbar');
    let menuNavigation = document.querySelector('.navbar__menu');
    let menuBtn = document.querySelector('.navbar__btnMobile');

    container.classList.toggle('active-container')
    menuNavigation.classList.toggle('active-menu');
    menuBtn.classList.toggle('active-btn');
}



