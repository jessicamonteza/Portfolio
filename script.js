const contactMessage = document.querySelector("#contact-message");
const contactButton = document.querySelector("#contact-1");

// Meddelandet som visas när sidan laddas
contactMessage.textContent = "Welcome to my portfolio! Press button above to contact";

// När man klickar på knappen byts meddelandet
contactButton.addEventListener("click", function () {
    if (contactMessage.classList.contains("sent")) {

        // TILLBAKA
        contactMessage.classList.remove("sent");
        contactMessage.textContent = "Welcome to my portfolio! Click button to contact";

    } else {
        // VISA
        contactMessage.classList.add("sent");
        contactMessage.textContent = "Yayyyy! i will get back to you neverrr";
    }

});

// querySelector("#contact-message") hittar stycket under knappen, och querySelector("#contact-1") hittar knappen. Båda är const, eftersom själva elementen aldrig byts ut, bara texten i stycket.
// contactMessage.textContent = "Welcome ..." körs direkt när sidan laddas och ersätter "Click button above" som står i HTML:en. Det är samma sak som nowPlaying.textContent = "Hejsan svejsan" i ditt första Loopen-steg.
// addEventListener("click", function () { ... }) betyder "kör koden i klamrarna varje gång någon klickar på knappen".
// Den andra raden med textContent är den som byter meddelandet. Den ligger inuti funktionen, så den körs först vid klicket och inte när sidan laddas.


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