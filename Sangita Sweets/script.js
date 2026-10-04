// ========================================
// SANGITA SWEETS - WEBSITE JAVASCRIPT
// ========================================


// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}


// Close mobile menu when clicking a navigation link

document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


// ========================================
// 2. MENU FILTER
// ========================================

const chips = document.querySelectorAll(".chip");
const menuItems = document.querySelectorAll(".menu-item");

chips.forEach(function (chip) {

    chip.addEventListener("click", function () {

        // Remove active class from all buttons
        chips.forEach(function (button) {
            button.classList.remove("active");
        });

        // Add active class to clicked button
        chip.classList.add("active");

        const filter = chip.dataset.filter;

        menuItems.forEach(function (item) {

            const type = item.dataset.type || "";

            if (
                filter === "all" ||
                type.includes(filter)
            ) {

                item.style.display = "grid";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ========================================
// 3. ORIGINAL MENU BOARD POPUP
// ========================================

const menuModal = document.getElementById("menuModal");
const menuBoardButton = document.getElementById("menuBoardBtn");


// Open menu board

if (menuBoardButton && menuModal) {

    menuBoardButton.addEventListener("click", function () {

        menuModal.classList.add("open");

        menuModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    });

}


// Close menu board

document.querySelectorAll("[data-close-modal]").forEach(function (element) {

    element.addEventListener("click", function () {

        if (menuModal) {

            menuModal.classList.remove("open");

            menuModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow = "";

        }

    });

});


// ========================================
// 4. GALLERY LIGHTBOX
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");


// Open gallery image

document.querySelectorAll("[data-lightbox]").forEach(function (imageButton) {

    imageButton.addEventListener("click", function () {

        const imagePath = imageButton.dataset.lightbox;

        if (!lightbox || !lightboxImage) {
            return;
        }

        lightboxImage.src = imagePath;

        const imageInsideButton =
            imageButton.querySelector("img");

        if (imageInsideButton) {

            lightboxImage.alt =
                imageInsideButton.alt;

        } else {

            lightboxImage.alt =
                "Sangita Sweets photo";

        }

        lightbox.classList.add("open");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    });

});


// Close gallery

function closeLightbox() {

    if (!lightbox) {
        return;
    }

    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    if (lightboxImage) {
        lightboxImage.src = "";
    }

    document.body.style.overflow = "";

}


// Close button

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


// Close by clicking outside image

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


// ========================================
// 5. ESCAPE KEY
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        // Close menu modal

        if (menuModal) {

            menuModal.classList.remove("open");

            menuModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        // Close gallery

        closeLightbox();


        // Restore scrolling

        document.body.style.overflow = "";

    }

});


// ========================================
// 6. CURRENT YEAR
// ========================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ========================================
// 7. SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".sweet-feature, " +
    ".menu-item, " +
    ".review, " +
    ".about-copy, " +
    ".location-grid"
);


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.08
            }

        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(function (element) {

        element.classList.add("revealed");

    });

}


// ========================================
// 8. SMOOTH SCROLL
// ========================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// 9. PREVENT BROKEN IMAGE EXPERIENCE
// ========================================

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});


// ========================================
// 10. CONSOLE MESSAGE
// ========================================

console.log(
    "🍬 Sangita Sweets website loaded successfully!"
);

console.log(
    "Celebrating Bihar's Traditional Taste ❤️"
);