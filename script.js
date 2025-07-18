// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Itzenix website loaded');

    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const languageSwitcherButton = document.getElementById('language-switcher-button');
    const languageDropdown = document.getElementById('language-dropdown');

    languageSwitcherButton.addEventListener('click', () => {
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });

    const translations = {
        en: {
            "We Build Websites That Work. We Build Software That Performs.": "We Build Websites That Work. We Build Software That Performs.",
            "Custom websites & software crafted for speed, security, and scale.": "Custom websites & software crafted for speed, security, and scale.",
            "Get a Free Quote": "Get a Free Quote",
            "View Our Work": "View Our Work",
            "Contact Us": "Contact Us",
            "Who We Are": "Who We Are",
            "What We Think": "What We Think",
            "Services": "Services",
            "Careers": "Careers",
        },
        hi: {
            "We Build Websites That Work. We Build Software That Performs.": "हम ऐसी वेबसाइट बनाते हैं जो काम करती हैं। हम ऐसा सॉफ्टवेयर बनाते हैं जो प्रदर्शन करता है।",
            "Custom websites & software crafted for speed, security, and scale.": "गति, सुरक्षा और पैमाने के लिए तैयार की गई कस्टम वेबसाइट और सॉफ्टवेयर।",
            "Get a Free Quote": "एक मुफ्त उद्धरण प्राप्त करें",
            "View Our Work": "हमारा काम देखें",
            "Contact Us": "संपर्क करें",
            "Who We Are": "हम कौन हैं",
            "What We Think": "हम क्या सोचते हैं",
            "Services": "सेवाएं",
            "Careers": "करियर",
        },
        fr: {
            "We Build Websites That Work. We Build Software That Performs.": "Nous créons des sites Web qui fonctionnent. Nous créons des logiciels qui fonctionnent.",
            "Custom websites & software crafted for speed, security, and scale.": "Sites Web et logiciels personnalisés conçus pour la vitesse, la sécurité et l'évolutivité.",
            "Get a Free Quote": "Obtenez un devis gratuit",
            "View Our Work": "Voir notre travail",
            "Contact Us": "Contactez-nous",
            "Who We Are": "Qui nous sommes",
            "What We Think": "Ce que nous pensons",
            "Services": "Services",
            "Careers": "Carrières",
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            element.textContent = translations[lang][key];
        });
    }

    languageDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const lang = e.target.dataset.lang;
            languageSwitcherButton.textContent = `${lang.toUpperCase()} ▼`;
            languageDropdown.style.display = 'none';
            changeLanguage(lang);
        }
    });

    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.querySelector('#search-box input');

    searchIcon.addEventListener('click', () => {
        searchBox.style.display = 'block';
    });

    closeSearch.addEventListener('click', () => {
        searchBox.style.display = 'none';
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase();
            if (query.includes('website') || query.includes('software') || query.includes('services')) {
                window.location.href = 'services.html';
            } else if (query.includes('contact') || query.includes('support')) {
                window.location.href = 'contact.html';
            } else if (query.includes('career') || query.includes('jobs') || query.includes('join')) {
                window.location.href = 'careers.html';
            } else {
                alert('No results found.');
            }
        }
    });

    // Tabs
    const tabs = document.querySelector('.tabs');
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

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxImages = document.querySelectorAll('.lightbox-image');
    const closeLightbox = document.querySelector('.close-lightbox');

    console.log('lightbox', lightbox);
    console.log('lightboxImg', lightboxImg);
    console.log('lightboxImages', lightboxImages);
    console.log('closeLightbox', closeLightbox);

    lightboxImages.forEach(image => {
        image.addEventListener('click', () => {
            console.log('image clicked');
            lightbox.style.display = 'block';
            lightboxImg.src = image.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        console.log('close lightbox clicked');
        lightbox.style.display = 'none';
    });
});
