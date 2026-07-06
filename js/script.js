// ==========================================
// ZOMATO CLONE - script.js
// Designed by Sujal Suthar
// ==========================================

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Hide button initially
topBtn.style.display = "none";


// ================= NAVBAR SCROLL EFFECT =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.75)";
        header.style.backdropFilter = "blur(12px)";
        header.style.transition = ".4s";

    } else {

        header.style.background = "transparent";

    }

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".card, .feature-card, .stat-box, .left-content, .right-content, .download-app, footer"
);

function revealOnScroll() {

    const trigger = window.innerHeight - 120;

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function runCounter() {

    if (counterStarted) return;

    const mapSection = document.querySelector(".india-map-section");

    if (!mapSection) return;

    const top = mapSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 150) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            let current = 0;

            const speed = Math.max(20, Math.floor(number / 100));

            const interval = setInterval(() => {

                current += speed;

                if (current >= number) {

                    counter.innerText = text;
                    clearInterval(interval);

                } else {

                    if (text.includes("Cr")) {

                        counter.innerText = current + "Cr+";

                    } else {

                        counter.innerText = current + "+";

                    }

                }

            }, 20);

        });

    }

}

window.addEventListener("scroll", runCounter);


// ================= IMAGE HOVER =================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ================= HERO LOGO EFFECT =================

const logos = document.querySelectorAll(".hero-logo img");

logos.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// ================= SCROLL DOWN CLICK =================

const scrollText = document.querySelector(".scroll");

if (scrollText) {

    scrollText.style.cursor = "pointer";

    scrollText.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,
            behavior: "smooth"

        });

    });

}


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================= PAGE LOADED =================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = ".8s";


