/* =====================================================
   GREENSPACE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });


    /* Close menu after clicking a link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   SCROLL ANIMATIONS
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".feature, .service-card, .project, .about-content"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const button =
                contactForm.querySelector(
                    "button"
                );

            const originalText =
                button.querySelector(
                    "span:first-child"
                );


            originalText.textContent =
                "Message sent ✓";


            button.style.background =
                "#486a4b";


            contactForm.reset();


            setTimeout(() => {

                originalText.textContent =
                    "Send inquiry";

                button.style.background =
                    "";

            }, 3000);

        }
    );

}


/* =====================================================
   HERO SLIDER EFFECT
===================================================== */

const indicators =
    document.querySelectorAll(".indicator");


let currentSlide = 0;


function changeIndicator() {

    indicators.forEach(
        indicator =>
            indicator.classList.remove("active")
    );


    if (indicators.length > 0) {

        indicators[currentSlide]
            .classList.add("active");

    }

}


setInterval(() => {

    if (indicators.length > 0) {

        currentSlide++;

        if (
            currentSlide >=
            indicators.length
        ) {

            currentSlide = 0;

        }

        changeIndicator();

    }

}, 4000);


/* =====================================================
   HEADER BACKGROUND ON SCROLL
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(248, 247, 242, 0.94)";

        header.style.backdropFilter =
            "blur(12px)";

    } else {

        header.style.background =
            "transparent";

        header.style.backdropFilter =
            "none";

    }

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );

            if (!target) {
                return;
            }


            event.preventDefault();


            const headerHeight =
                document.querySelector(
                    ".header"
                ).offsetHeight;


            const targetPosition =
                target.getBoundingClientRect()
                    .top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =====================================================
   PARALLAX HERO
===================================================== */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage) {
        return;
    }


    const scrollPosition =
        window.scrollY;


    if (scrollPosition < 700) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateActiveNavigation();

    }
);