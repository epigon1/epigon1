// js/components.js - Carica header e footer automaticamente

// Funzione per caricare componenti HTML
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Errore nel caricamento di ${filePath}:`, error);
    }
}

// Carica header e footer quando la pagina è pronta
document.addEventListener('DOMContentLoaded', async function() {
    // Carica header
    await loadComponent('header-placeholder', 'header.html');
    
    // Carica footer
    await loadComponent('footer-placeholder', 'footer.html');
    
    // Aspetta un momento per assicurarsi che tutto sia caricato
    setTimeout(() => {
        // Inizializza il menu mobile
        initMobileMenu();
        
        // Inizializza il contatore visite
        initVisitorCounter();
        
        // Evidenzia la pagina corrente nel menu
        highlightCurrentPage();
    }, 100);
});

// Funzione per il menu mobile
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Chiudi menu quando clicchi su un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Chiudi menu quando clicchi fuori
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// Funzione contatore visite
function initVisitorCounter() {
    const counterElement = document.getElementById('visitorCount');
    if (!counterElement) return;

    let count = localStorage.getItem('visitorCount');
    
    if (!count) {
        count = 5000;
    } else {
        count = parseInt(count);
    }
    
    count++;
    localStorage.setItem('visitorCount', count);
    animateCounter(counterElement, count);
}

function animateCounter(element, target) {
    let current = target - 10;
    const increment = 1;
    const duration = 1000;
    const steps = 10;
    const stepDuration = duration / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toLocaleString();
    }, stepDuration);
}

// Evidenzia pagina corrente
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.remove('active');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}