const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

mobileMenuIcon.addEventListener("click", function () {
    mobileMenuContainer.classList.add("active");
});

menuCloseIcon.addEventListener("click", function () {
    mobileMenuContainer.classList.remove("active");
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const menuClose = document.querySelector('.menu-close-icon');
    const menuContainer = document.querySelector('.mobile-menu-container');
    const submenuTrigger = document.querySelector('.submenu-trigger');
    const backTrigger = document.querySelector('.back-trigger');

    // Open main menu
    menuIcon.addEventListener('click', () => {
        menuContainer.classList.add('active');
        // Optional: reset submenu when opening main menu
        menuContainer.classList.remove('show-submenu');
    });

    // Close menu
    menuClose.addEventListener('click', () => {
        menuContainer.classList.remove('active');
        menuContainer.classList.remove('show-submenu');
    });

    // Go to submenu
    submenuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        menuContainer.classList.add('show-submenu');
    });

    // Go back to level 1
    backTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        menuContainer.classList.remove('show-submenu');
    });
});

const menu = document.querySelector('.mobile-menu-container');
const openBtn = document.querySelector('.mobile-menu-icon');
const closeBtn = document.querySelector('.menu-close-icon');

openBtn.addEventListener('click', () => {
    menu.classList.add('active');
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
});

// smooth-scroll.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modals a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const offset = 80; // keep your offset

                const y = target.getBoundingClientRect().top + window.pageYOffset - offset;

                // Option A: scrollTo with linear easing (feels smoother/slower)
                window.scrollTo({
                    top: y,
                    behavior: 'smooth' // still smooth, but we'll override speed below if needed
                });

                // Option B: use scrollIntoView with explicit duration (Chrome/Edge/Firefox support it well)
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'     // aligns to top of the section
                });

                // To really control speed → polyfill/custom timing (see Option 2 below)
            }
        });
    });
});

const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    // Show button after scrolling down ~300px (adjust as needed)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Click → smooth scroll to top
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}