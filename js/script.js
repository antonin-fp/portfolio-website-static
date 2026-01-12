// ====================
// Burger menu
// ====================

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        burgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Bloque le scroll quand le menu est ouvert
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Click sur le menu burger
    burgerBtn.addEventListener('click', toggleMenu);

    // Click sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

// ====================
// Animation
// ====================