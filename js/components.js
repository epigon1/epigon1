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
    console.log('🎵 Caricamento componenti...');
    
    // Carica header
    await loadComponent('header-placeholder', 'header.html');
    
    // Carica footer
    await loadComponent('footer-placeholder', 'footer.html');
    
    // Aspetta che i componenti siano completamente caricati
    setTimeout(() => {
        console.log('✅ Componenti caricati, inizializzo menu...');
        
        // Inizializza il menu mobile
        initMobileMenu();
        
        // Inizializza il contatore visite
        initVisitorCounter();
        
        // Evidenzia la pagina corrente nel menu
        highlightCurrentPage();
    }, 200);
});

// Funzione per il menu mobile
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    console.log('Menu button:', mobileMenuBtn);
    console.log('Nav links:', navLinks);

    if (!mobileMenuBtn || !navLinks) {
        console.error('❌ Menu elements not found!');
        return;
    }

    console.log('✅ Menu trovato, aggiungo event listeners...');

    // Toggle menu quando clicchi sul bottone
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('🔘 Menu button clicked');
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        console.log('Menu active:', navLinks.classList.contains('active'));
    });

    // Chiudi menu quando clicchi su un link
    const menuLinks = document.querySelectorAll('.nav-links a');
    console.log('Menu links trovati:', menuLinks.length);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link clicked, closing menu');
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Chiudi menu quando clicchi fuori
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !mobileMenuBtn.contains(e.target) && 
            !navLinks.contains(e.target)) {
            console.log('Clicked outside, closing menu');
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    console.log('✅ Menu mobile inizializzato!');
}

// Funzione contatore visite
function initVisitorCounter() {
    const counterElement = document.getElementById('visitorCount');
    if (!counterElement) {
        console.log('⚠️ Visitor counter not found');
        return;
    }

    let count = localStorage.getItem('visitorCount');
    
    if (!count) {
        count = 5000;
    } else {
        count = parseInt(count);
    }
    
    count++;
    localStorage.setItem('visitorCount', count);
    animateCounter(counterElement, count);
    console.log('✅ Visitor counter:', count);
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
    console.log('✅ Current page highlighted:', currentPage);
}