// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const themeSwitcher = document.querySelector('.theme-switcher span');
    const languageSwitcher = document.querySelector('.language-switcher span');
    const searchInput = document.querySelector('.search-container input');
    let currentLanguage = 'EN';

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeSwitcher.textContent = '☀️';
        } else {
            themeSwitcher.textContent = '🌙';
        }
    });

    languageSwitcher.addEventListener('click', () => {
        if (currentLanguage === 'EN') {
            languageSwitcher.textContent = '🌐 हिन्दी | EN';
            currentLanguage = 'HI';
        } else {
            languageSwitcher.textContent = '🌐 EN | हिन्दी';
            currentLanguage = 'EN';
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            console.log(`Searching for: ${searchInput.value}`);
        }
    });

    const tabs = document.querySelector('.tabs');
    if (tabs) {
        const tabButtons = tabs.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.addEventListener('click', (e) => {
            const id = e.target.dataset.tab;
            if (id) {
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxImages = document.querySelectorAll('.lightbox-image');
        const closeLightbox = document.querySelector('.close-lightbox');

        lightboxImages.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxImg.src = image.src;
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }
});
