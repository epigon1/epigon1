// js/script.js

// Synth switch functionality
const synthSwitch = document.getElementById('synthSwitch');
const synthStatus = document.getElementById('synthStatus');
const bgCircles = document.getElementById('bgCircles');

// Check if synth state is saved in localStorage
if (localStorage.getItem('synthOn') === 'true') {
    synthSwitch.classList.add('active');
    synthStatus.classList.add('active');
    bgCircles.classList.add('active');
}

synthSwitch.addEventListener('click', function() {
    this.classList.toggle('active');
    synthStatus.classList.toggle('active');
    bgCircles.classList.toggle('active');
    
    // Save state to localStorage
    const isActive = this.classList.contains('active');
    localStorage.setItem('synthOn', isActive);
});

// Smooth scroll for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current page nav link
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Optional: Add console message
console.log('🎵 epigon1 - Techno Producer');
console.log('Website loaded successfully');