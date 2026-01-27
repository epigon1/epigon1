// Funzione per caricare i componenti (header e footer)
async function loadComponents() {
    // Carica Header
    const headerRes = await fetch('header.html');
    const headerHtml = await headerRes.text();
    document.getElementById('header-placeholder').innerHTML = headerHtml;

    // Carica Footer
    const footerRes = await fetch('footer.html');
    const footerHtml = await footerRes.text();
    document.getElementById('footer-placeholder').innerHTML = footerHtml;

    // --- LOGICA PER IL MENU MOBILE ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alterna la classe 'active' sia sul tasto che sulla lista link
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

// Avvia il caricamento al caricamento della pagina
window.addEventListener('DOMContentLoaded', loadComponents);