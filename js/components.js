// js/components.js

document.addEventListener('DOMContentLoaded', () => {
    // Funzione per caricare componenti esterni (Header e Footer)
    function loadComponent(id, file, callback) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error('Errore nel caricamento di ' + file);
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(error));
    }

    // Carica l'Header e inizializza il menu mobile solo dopo il caricamento
    loadComponent('header-placeholder', 'header.html', () => {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                // Attiva/disattiva le classi per mostrare il menu
                mobileMenuBtn.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Chiude il menu se si clicca su un link (opzionale, utile su mobile)
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    });

    // Carica il Footer
    loadComponent('footer-placeholder', 'footer.html');
});