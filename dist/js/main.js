const hamburgerBtn = document.querySelector('.hamburger_menu');
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav_menu');
const menuBranding = document.querySelector('.menu_branding');
const navItems = document.querySelectorAll('.nav_item');

// Set Initial State of Menu
let showMenu = false;

// Event Listeners
hamburgerBtn.addEventListener('click', menuToggle);

function menuToggle() {
    if(!showMenu) {
        hamburgerBtn.classList.add('close');
        menu.classList.add('show');
        navMenu.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        hamburgerBtn.classList.remove('close');
        menu.classList.remove('show');
        navMenu.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}
