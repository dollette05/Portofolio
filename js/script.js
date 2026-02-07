let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Informatics Student', 'Junior Web Developer', 'Aspiring Web Developer', 'Web Design Enthusiast'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

const form = document.querySelector("form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.style.display = "block";
            status.innerHTML = "✅ Message sent successfully!";
            form.reset();
        } else {
            status.style.display = "block";
            status.innerHTML = "❌ Oops! Something went wrong.";
        }
    } catch (error) {
        status.style.display = "block";
        status.innerHTML = "❌ Network error. Please try again.";
    }
});
