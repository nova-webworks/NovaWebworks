// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger reveal on page load
reveal();

// Form Interaction (Visual feedback only, allows submission to Web3Forms)
const forms = document.querySelectorAll('.contact-form');
forms.forEach(form => {
    form.addEventListener('submit', function() {
        const btn = form.querySelector('button[type="submit"]');
        if(btn) {
            btn.textContent = "Sending...";
            btn.style.opacity = "0.7";
            btn.style.pointerEvents = "none";
        }
    });
});