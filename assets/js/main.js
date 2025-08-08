"use strict";

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }
    });
});

// Navbar toggle (tablet/mobile)
const navToggleButton = document.querySelector('.nav-bar__toggle');
const navList = document.querySelector('.nav-bar__list');

if (navToggleButton && navList) {
    navToggleButton.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('is-open');
        navToggleButton.setAttribute('aria-expanded', String(isOpen));
    });
}