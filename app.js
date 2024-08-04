document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
});
