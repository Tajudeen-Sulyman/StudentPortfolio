
// ================================
// TYPING ANIMATION
// ================================

const typingElement = document.getElementById("typing");

const texts = [
    "B.Sc. Data Science Student",
    "Web Developer",
    "Python Programmer",
    "AI Enthusiast",
    "Machine Learning Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);
}

if (typingElement) {
    typeEffect();
}

// ================================
// Back To Top Button
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 200) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
