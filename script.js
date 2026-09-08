// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 8, 15, 0.97)";
    } else {
        header.style.background = "rgba(11, 11, 20, 0.9)";
    }

});


// ==============================
// PROJECT CARD ANIMATION
// ==============================

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


projectCards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const footer = document.querySelector("footer");

const currentYear = new Date().getFullYear();

footer.querySelector("p").innerHTML =
    `© ${currentYear} Saranya. All Rights Reserved.`;