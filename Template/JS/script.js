const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    alert("Thank you for contacting us🥰❤🥰. This is just a practice web page ❤😎, not a real web.");
    form.reset();
});


// Footer year
let now = new Date();
document.getElementById("year").innerText = now.getFullYear();