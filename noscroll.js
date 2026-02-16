// const searchIcon = document.querySelector(".search-icon");
// const searchContainer = document.querySelector(".search-container");

// searchIcon.addEventListener("click", function () {
//     searchContainer.classList.toggle("active");
// })

const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

mobileMenuIcon.addEventListener("click", function() {
    mobileMenuContainer.classList.add("active");
});

menuCloseIcon.addEventListener("click", function() {
    mobileMenuContainer.classList.remove("active");
});


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon    = document.querySelector('.mobile-menu-icon');
    const menuClose   = document.querySelector('.menu-close-icon');
    const menuContainer = document.querySelector('.mobile-menu-container');
    const submenuTrigger = document.querySelector('.submenu-trigger');
    const backTrigger    = document.querySelector('.back-trigger');

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

// Simple vertical carousel (put in your JS file or <script> tag)
document.addEventListener('DOMContentLoaded', () => {
    function initCarousel(trackId) {
        const track = document.getElementById(trackId);
        if (!track) return;

        const cards = track.querySelectorAll('.module-card');
        const container = track.closest('.carousel-container');
        const prevBtn = container.querySelector('.left-arrow');
        const nextBtn = container.querySelector('.right-arrow');

        let currentIndex = 0;
        const total = cards.length;

        function showSlide(index) {
            cards.forEach(c => c.classList.remove('visible'));
            cards[index].classList.add('visible');
        }

        function next() {
            currentIndex = (currentIndex + 1) % total;
            showSlide(currentIndex);
        }

        function prev() {
            currentIndex = (currentIndex - 1 + total) % total;
            showSlide(currentIndex);
        }

        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);

        // Show first card
        showSlide(0);

        // Optional: swipe support (very basic)
        let touchStartX = 0;
        container.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        container.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) next();
                else prev();
            }
        });
    }

    // Initialize both carousels
    initCarousel('trackLeft');
    initCarousel('trackRight');
});



document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener("click", () => {
                const faqItem = question.closest(".faq-item");

                faqItem.classList.toggle("active");

               
            });
        });
    }
});


