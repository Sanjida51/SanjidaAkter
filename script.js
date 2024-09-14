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

// Selecting the 'Check All Projects' button and adding event listener
document.getElementById('check-all-projects-btn').addEventListener('click', function () {
    const moreProjects = document.getElementById('more-projects');
    const checkAllButton = document.getElementById('check-all-projects-btn');
    const showLessButton = document.getElementById('show-less-btn');
    

    // Show more projects and the "Show Less" button
    moreProjects.style.display = 'block';
    checkAllButton.style.display = 'none';
    showLessButton.style.display = 'inline-block';
});

// Selecting the 'Show Less' button and adding event listener
document.getElementById('show-less-btn').addEventListener('click', function () {
    const moreProjects = document.getElementById('more-projects');
    const checkAllButton = document.getElementById('check-all-projects-btn');
    const showLessButton = document.getElementById('show-less-btn');

    // Hide more projects and show the "Check All Projects" button
    moreProjects.style.display = 'none';
    checkAllButton.style.display = 'inline-block';
    showLessButton.style.display = 'none';
});

