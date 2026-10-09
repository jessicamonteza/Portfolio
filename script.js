// Read more / Read less
const toggleButton = document.querySelector("#toggle-about");
const moreText = document.querySelector("#more-about");

toggleButton.addEventListener("click", function () {

    if (moreText.classList.contains("hidden")) {

        // VISA
        moreText.classList.remove("hidden");
        toggleButton.textContent = "Read less";
        toggleButton.setAttribute("aria-expanded", "true");

    } else {

        // DÖLJ
        moreText.classList.add("hidden");
        toggleButton.textContent = "Read more about me ...";
        toggleButton.setAttribute("aria-expanded", "false");

    }

});


// hamburgermeny

const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");
const menuIcon = document.querySelector("#menu-icon");

menuButton.addEventListener("click", function () {

    if (navLinks.classList.contains("open")) {

        // STÄNGD
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuIcon.textContent = "☰";

    } else {

        // Öppen
        navLinks.classList.add("open");
        menuIcon.textContent = "✕";
        menuButton.setAttribute("aria-expanded", "true");
    }

});

// Stänger automatisk efter man klickat en länk
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuIcon.textContent = "☰";
    });
});