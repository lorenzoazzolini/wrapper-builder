// File: assets/common.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Aggiornamento automatico dell'anteprima
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            // Cerca la funzione updatePreview() definita nel file HTML specifico e la lancia
            if (typeof window.updatePreview === 'function') {
                window.updatePreview();
            }
        });
    });

    // 2. Gestione universale del bottone Copia
    const btnCopy = document.getElementById('btnCopy');
    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            // Cerca la funzione getCleanCode() definita nel file HTML specifico
            if (typeof window.getCleanCode === 'function') {
                const cleanCode = window.getCleanCode();
                
                navigator.clipboard.writeText(cleanCode).then(() => {
                    const originalText = btnCopy.innerText;
                    btnCopy.innerText = "✅ Copiato!";
                    btnCopy.style.background = "#28a745";
                    
                    setTimeout(() => {
                        btnCopy.innerText = originalText;
                        btnCopy.style.background = ""; // Ripristina colore CSS
                    }, 2000);
                });
            }
        });
    }

    // Inizializza l'anteprima al primo caricamento
    if (typeof window.updatePreview === 'function') {
        window.updatePreview();
    }
});
