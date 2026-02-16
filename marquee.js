const marquee = document.getElementById("marquee");
const track = marquee.querySelector(".marquee-track");

function fillMarquee() {
    const containerWidth = marquee.offsetWidth;
    let contentWidth = track.scrollWidth;

    while (contentWidth < containerWidth * 2) {
        track.innerHTML += track.innerHTML;
        contentWidth = track.scrollWidth;
    }
}

let position = 0;
const speed = 1;

function animate() {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
    fillMarquee();
    animate();
});

window.addEventListener("resize", () => {
    fillMarquee();
});




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

// const menu = document.querySelector('.mobile-menu-container');
// const openBtn = document.querySelector('.mobile-menu-icon');
// const closeBtn = document.querySelector('.menu-close-icon');

// openBtn.addEventListener('click', () => {
//     menu.classList.add('active');
//     document.documentElement.classList.add('no-scroll');
//     document.body.classList.add('no-scroll');
// });

// closeBtn.addEventListener('click', () => {
//     menu.classList.remove('active');
//     document.documentElement.classList.remove('no-scroll');
//     document.body.classList.remove('no-scroll');
// });


// Images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtnImg = document.querySelector(".modal-close");

// All testimonial images
const images = document.querySelectorAll(".quotes-grid .testimonial-user-img");

// Open modal when clicking any image
images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;           // same image → full size
        modalImg.alt = this.alt;
    });
});

// Close modal when clicking ×
closeBtnImg.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Optional: close with Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});