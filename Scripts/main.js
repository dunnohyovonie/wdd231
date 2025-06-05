// Main JavaScript for Chamber Home Page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById('last-modified').textContent += document.lastModified;
    
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const navList = document.querySelector('nav ul');
    
    menuButton.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
    
    // Close menu when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                navList.classList.remove('show');
            }
        });
    });
});