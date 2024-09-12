// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded');

    // Smooth scrolling for navigation links //Sanjida Akter
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Sanjida//Sanjida Akter
