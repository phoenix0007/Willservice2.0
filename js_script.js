document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const container = document.querySelector('.container');

    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!container.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });
});
