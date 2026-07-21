/* ==========================================
   NAVIGATION
========================================== */

const menuButton = document.querySelector(".mobile-menu-toggle");
const navigationList = document.querySelector(".navigation-list");

function toggleNavigation() {

    navigationList.classList.toggle("active");

    if (navigationList.classList.contains("active")) {

        menuButton.textContent = "✕";

        menuButton.setAttribute("aria-expanded", "true");

    } else {

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    }

}


menuButton.addEventListener("click", toggleNavigation);

/* ==========================================
   HERO TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing-text");

const professions = [
    "Software Developer",
    "Web Developer",
    "Python Programmer",
    "Database Administrator",
    "Graphic Designer",
    "Data Scientist"
];

let professionIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeProfession() {

    const currentProfession = professions[professionIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentProfession.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentProfession.length) {

            isDeleting = true;

            setTimeout(typeProfession, 1800);

            return;

        }

    } else {

        typingElement.textContent =
            currentProfession.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    const typingSpeed = isDeleting ? 60 : 120;

    setTimeout(typeProfession, typingSpeed);

}

typeProfession();

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.2

});

revealElements.forEach(element => {

    observer.observe(element);

});

/* ==========================================
   CONTACT FORM
========================================== */

/* ==========================================
   CONTACT FORM - EMAILJS
========================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

/* Initialize EmailJS */

emailjs.init({
    publicKey: "qPTHD_crvYjEiLsqs"
});


/* Handle Contact Form Submission */

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    /* Show sending message */

    formMessage.className = "form-message";
    formMessage.textContent = "Sending your message...";


    /* Send Form */

    emailjs.sendForm(
        "service_6ohoxso",
        "template_0npxzkd",
        contactForm
    )

    .then(function() {

        /* Success */

        formMessage.className = "form-message success";

        formMessage.textContent =
            "Thank you! Your message has been sent successfully. I'll get back to you soon.";

        /* Clear Form */

        contactForm.reset();

    })

    .catch(function(error) {

        /* Error */

        console.error("EmailJS Error:", error);

        formMessage.className = "form-message error";

        formMessage.textContent =
            "Sorry, something went wrong. Please try again later.";

    });

});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function (event) {

    event.preventDefault();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   SHOW / HIDE BACK TO TOP
========================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/*==================================
  DARK / LIGHT THEME
==================================*/

/*==================================
  DARK / LIGHT THEME
==================================*/

const mobileThemeToggle = document.getElementById("themeToggle");
const desktopThemeToggle = document.getElementById("themeToggleDesktop");

// Update both button icons
function updateThemeIcons(isLight) {

    const icon = isLight ? "☀️" : "🌙";

    if (mobileThemeToggle) {
        mobileThemeToggle.textContent = icon;
    }

    if (desktopThemeToggle) {
        desktopThemeToggle.textContent = icon;
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    updateThemeIcons(true);

} else {

    updateThemeIcons(false);

}

// Toggle function
function toggleTheme() {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    updateThemeIcons(isLight);

}

// Desktop button
if (desktopThemeToggle) {

    desktopThemeToggle.addEventListener("click", toggleTheme);

}

// Mobile button
if (mobileThemeToggle) {

    mobileThemeToggle.addEventListener("click", toggleTheme);

}



/*==================================
  DOWNLOAD CV BUTTON
==================================*/

const downloadButton = document.getElementById("downloadCV");

if (downloadButton) {

    downloadButton.addEventListener("click", () => {

        const icon = downloadButton.querySelector("i");
        const text = downloadButton.querySelector("span");

        icon.className = "fa-solid fa-spinner fa-spin";
        text.textContent = "Downloading...";

        setTimeout(() => {

            icon.className = "fa-solid fa-circle-check";
            text.textContent = "Downloaded!";

        }, 1200);

        setTimeout(() => {

            icon.className = "fa-solid fa-download";
            text.textContent = "Download CV";

        }, 2800);

    });

}