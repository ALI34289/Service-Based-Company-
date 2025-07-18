// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const themeSwitcher = document.querySelector('.theme-switcher span');
    const languageSwitcher = document.querySelector('.language-switcher span');
    const searchInput = document.querySelector('.search-container input');
    let currentLanguage = localStorage.getItem('language') || 'EN';

    const translations = {
        'EN': {
            'Home': 'Home',
            'Services': 'Services',
            'Portfolio': 'Portfolio',
            'About Us': 'About Us',
            'Contact': 'Contact',
            'We Build Websites That Work. We Build Software That Performs.': 'We Build Websites That Work. We Build Software That Performs.',
            'Custom websites & software crafted for speed, security, and scale.': 'Custom websites & software crafted for speed, security, and scale.',
            'Get a Free Quote': 'Get a Free Quote',
            'View Our Work': 'View Our Work',
            'Select Your Industry. Discover Our Impact.': 'Select Your Industry. Discover Our Impact.',
            'Explore the sectors where we deliver tailored solutions and measurable results.': 'Explore the sectors where we deliver tailored solutions and measurable results.',
            'Our Process': 'Our Process',
            'We follow a simple and effective process to deliver the best results.': 'We follow a simple and effective process to deliver the best results.',
            'Discovery': 'Discovery',
            'We start by understanding your business and goals.': 'We start by understanding your business and goals.',
            'Planning': 'Planning',
            'We create a detailed plan and timeline for your project.': 'We create a detailed plan and timeline for your project.',
            'Development': 'Development',
            'We build your website or software with the latest technologies.': 'We build your website or software with the latest technologies.',
            'Launch': 'Launch',
            'We deploy your project and provide ongoing support.': 'We deploy your project and provide ongoing support.',
            'What Our Clients Say': 'What Our Clients Say',
            'Our Work in Action': 'Our Work in Action',
            'View Full Portfolio': 'View Full Portfolio',
            'Our Tech Stack': 'Our Tech Stack',
            'We use the latest and greatest technologies to build our solutions.': 'We use the latest and greatest technologies to build our solutions.',
            'Latest Buzz from Itzenix': 'Latest Buzz from Itzenix',
            'Stay updated with the latest trends, company news, and announcements from Itzenix.': 'Stay updated with the latest trends, company news, and announcements from Itzenix.',
            'Itzenix Launches New AI-Powered Platform': 'Itzenix Launches New AI-Powered Platform',
            'We are excited to announce the launch of our new AI-powered platform, designed to help businesses automate their workflows and improve efficiency.': 'We are excited to announce the launch of our new AI-powered platform, designed to help businesses automate their workflows and improve efficiency.',
            'Read more': 'Read more',
            'Itzenix Partners with TechCorp to Expand Services': 'Itzenix Partners with TechCorp to Expand Services',
            'We have partnered with TechCorp, a leading provider of cloud solutions, to expand our service offerings and provide more value to our clients.': 'We have partnered with TechCorp, a leading provider of cloud solutions, to expand our service offerings and provide more value to our clients.',
            'Itzenix Welcomes New Client, Innovate Inc.': 'Itzenix Welcomes New Client, Innovate Inc.',
            'We are thrilled to welcome Innovate Inc. as our new client. We look forward to helping them achieve their business goals with our custom software solutions.': 'We are thrilled to welcome Innovate Inc. as our new client. We look forward to helping them achieve their business goals with our custom software solutions.',
            'Subscribe to our Newsletter': 'Subscribe to our Newsletter',
            'Enter your email': 'Enter your email',
            'Subscribe': 'Subscribe',
            'Why Choose Us': 'Why Choose Us',
            'The edge your business deserves.': 'The edge your business deserves.',
            'We deliver more than services — we deliver trust, innovation, and results.': 'We deliver more than services — we deliver trust, innovation, and results.',
            'Expert Team': 'Expert Team',
            'Our team of certified professionals is dedicated to delivering excellence and innovation.': 'Our team of certified professionals is dedicated to delivering excellence and innovation.',
            'On-Time Delivery': 'On-Time Delivery',
            'We value your time and are committed to delivering projects on schedule, every time.': 'We value your time and are committed to delivering projects on schedule, every time.',
            'Affordable Pricing': 'Affordable Pricing',
            'We offer competitive pricing without compromising on quality or service.': 'We offer competitive pricing without compromising on quality or service.',
            '24/7 Support': '24/7 Support',
            'Our dedicated support team is available around the clock to assist you.': 'Our dedicated support team is available around the clock to assist you.',
            'Innovative Solutions': 'Innovative Solutions',
            'We provide cutting-edge solutions tailored to your specific business needs.': 'We provide cutting-edge solutions tailored to your specific business needs.',
            'Secure & Reliable': 'Secure & Reliable',
            'We prioritize security and reliability in all our products and services.': 'We prioritize security and reliability in all our products and services.',
            'Explore Our Services': 'Explore Our Services',
            'Contact Us': 'Contact Us',
            'Your Name': 'Your Name',
            'Your Email': 'Your Email',
            'Your Message': 'Your Message',
            'Send Message': 'Send Message',
            'Call Us Now': 'Call Us Now',
            '© 2024 Itzenix. All rights reserved.': '© 2024 Itzenix. All rights reserved.'
        },
        'HI': {
            'Home': 'होम',
            'Services': 'सेवाएं',
            'Portfolio': 'पोर्टफोलियो',
            'About Us': 'हमारे बारे में',
            'Contact': 'संपर्क करें',
            'We Build Websites That Work. We Build Software That Performs.': 'हम ऐसी वेबसाइट बनाते हैं जो काम करती हैं। हम ऐसा सॉफ्टवेयर बनाते हैं जो प्रदर्शन करता है।',
            'Custom websites & software crafted for speed, security, and scale.': 'गति, सुरक्षा और पैमाने के लिए तैयार की गई कस्टम वेबसाइट और सॉफ्टवेयर।',
            'Get a Free Quote': 'एक मुफ्त उद्धरण प्राप्त करें',
            'View Our Work': 'हमारा काम देखें',
            'Select Your Industry. Discover Our Impact.': 'अपना उद्योग चुनें। हमारे प्रभाव की खोज करें।',
            'Explore the sectors where we deliver tailored solutions and measurable results.': 'उन क्षेत्रों का अन्वेषण करें जहां हम अनुरूप समाधान और औसत दर्जे का परिणाम देते हैं।',
            'Our Process': 'हमारी प्रक्रिया',
            'We follow a simple and effective process to deliver the best results.': 'हम सर्वोत्तम परिणाम देने के लिए एक सरल और प्रभावी प्रक्रिया का पालन करते हैं।',
            'Discovery': 'खोज',
            'We start by understanding your business and goals.': 'हम आपके व्यवसाय और लक्ष्यों को समझकर शुरुआत करते हैं।',
            'Planning': 'योजना',
            'We create a detailed plan and timeline for your project.': 'हम आपके प्रोजेक्ट के लिए एक विस्तृत योजना और समय-सीमा बनाते हैं।',
            'Development': 'विकास',
            'We build your website or software with the latest technologies.': 'हम नवीनतम तकनीकों के साथ आपकी वेबसाइट या सॉफ्टवेयर बनाते हैं।',
            'Launch': 'लांच',
            'We deploy your project and provide ongoing support.': 'हम आपके प्रोजेक्ट को तैनात करते हैं और निरंतर सहायता प्रदान करते हैं।',
            'What Our Clients Say': 'हमारे ग्राहक क्या कहते हैं',
            'Our Work in Action': 'कार्रवाई में हमारा काम',
            'View Full Portfolio': 'पूर्ण पोर्टफोलियो देखें',
            'Our Tech Stack': 'हमारा टेक स्टैक',
            'We use the latest and greatest technologies to build our solutions.': 'हम अपने समाधान बनाने के लिए नवीनतम और सबसे बड़ी तकनीकों का उपयोग करते हैं।',
            'Latest Buzz from Itzenix': 'इटजेनिक्स से नवीनतम चर्चा',
            'Stay updated with the latest trends, company news, and announcements from Itzenix.': 'नवीनतम रुझानों, कंपनी समाचारों और इटजेनिक्स से घोषणाओं से अपडेट रहें।',
            'Itzenix Launches New AI-Powered Platform': 'इटजेनिक्स ने नया एआई-पावर्ड प्लेटफॉर्म लॉन्च किया',
            'We are excited to announce the launch of our new AI-powered platform, designed to help businesses automate their workflows and improve efficiency.': 'हम अपने नए एआई-पावर्ड प्लेटफॉर्म के लॉन्च की घोषणा करने के लिए उत्साहित हैं, जिसे व्यवसायों को उनके वर्कफ़्लो को स्वचालित करने और दक्षता में सुधार करने में मदद करने के लिए डिज़ाइन किया गया है।',
            'Read more': 'और पढ़ें',
            'Itzenix Partners with TechCorp to Expand Services': 'इटजेनिक्स ने सेवाओं का विस्तार करने के लिए टेककॉर्प के साथ साझेदारी की',
            'We have partnered with TechCorp, a leading provider of cloud solutions, to expand our service offerings and provide more value to our clients.': 'हमने अपनी सेवा पेशकशों का विस्तार करने और अपने ग्राहकों को अधिक मूल्य प्रदान करने के लिए क्लाउड समाधानों के एक अग्रणी प्रदाता टेककॉर्प के साथ साझेदारी की है।',
            'Itzenix Welcomes New Client, Innovate Inc.': 'इटजेनिक्स ने नए क्लाइंट, इनोवेट इंक का स्वागत किया।',
            'We are thrilled to welcome Innovate Inc. as our new client. We look forward to helping them achieve their business goals with our custom software solutions.': 'हम इनोवेट इंक को अपने नए क्लाइंट के रूप में स्वागत करते हुए रोमांचित हैं। हम अपने कस्टम सॉफ्टवेयर समाधानों के साथ उनके व्यावसायिक लक्ष्यों को प्राप्त करने में उनकी मदद करने के लिए तत्पर हैं।',
            'Subscribe to our Newsletter': 'हमारे न्यूज़लेटर के लिए सदस्यता लें',
            'Enter your email': 'अपना ईमेल दर्ज करें',
            'Subscribe': 'सब्सक्राइब',
            'Why Choose Us': 'हमें क्यों चुनें',
            'The edge your business deserves.': 'आपके व्यवसाय के लायक बढ़त।',
            'We deliver more than services — we deliver trust, innovation, and results.': 'हम सेवाओं से अधिक वितरित करते हैं - हम विश्वास, नवीनता और परिणाम देते हैं।',
            'Expert Team': 'विशेषज्ञ टीम',
            'Our team of certified professionals is dedicated to delivering excellence and innovation.': 'प्रमाणित पेशेवरों की हमारी टीम उत्कृष्टता और नवीनता देने के लिए समर्पित है।',
            'On-Time Delivery': 'समय पर डिलीवरी',
            'We value your time and are committed to delivering projects on schedule, every time.': 'हम आपके समय को महत्व देते हैं और हर बार समय पर परियोजनाओं को वितरित करने के लिए प्रतिबद्ध हैं।',
            'Affordable Pricing': 'किफायती मूल्य निर्धारण',
            'We offer competitive pricing without compromising on quality or service.': 'हम गुणवत्ता या सेवा से समझौता किए बिना प्रतिस्पर्धी मूल्य निर्धारण प्रदान करते हैं।',
            '24/7 Support': '24/7 सहायता',
            'Our dedicated support team is available around the clock to assist you.': 'हमारी समर्पित सहायता टीम आपकी सहायता के लिए चौबीसों घंटे उपलब्ध है।',
            'Innovative Solutions': 'अभिनव समाधान',
            'We provide cutting-edge solutions tailored to your specific business needs.': 'हम आपकी विशिष्ट व्यावसायिक आवश्यकताओं के अनुरूप अत्याधुनिक समाधान प्रदान करते हैं।',
            'Secure & Reliable': 'सुरक्षित और विश्वसनीय',
            'We prioritize security and reliability in all our products and services.': 'हम अपने सभी उत्पादों और सेवाओं में सुरक्षा और विश्वसनीयता को प्राथमिकता देते हैं।',
            'Explore Our Services': 'हमारी सेवाएं एक्सप्लोर करें',
            'Contact Us': 'संपर्क करें',
            'Your Name': 'आपका नाम',
            'Your Email': 'आपका ईमेल',
            'Your Message': 'आपका संदेश',
            'Send Message': 'संदेश भेजें',
            'Call Us Now': 'अभी हमें फोन करें',
            '© 2024 Itzenix. All rights reserved.': '© 2024 इटजेनिक्स। सर्वाधिकार सुरक्षित।'
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
        languageSwitcher.textContent = lang === 'EN' ? '🌐 EN | हिन्दी' : '🌐 हिन्दी | EN';
        localStorage.setItem('language', lang);
        currentLanguage = lang;
    }

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
        const newLang = currentLanguage === 'EN' ? 'HI' : 'EN';
        setLanguage(newLang);
    });

    function filterContent() {
        const query = searchInput.value.toLowerCase().trim();
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const cards = section.querySelectorAll('.industry-card, .service-card, .testimonial-card, .portfolio-item, .news-card, .why-choose-us-card');
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    searchInput.addEventListener('input', filterContent);

    const searchButton = document.querySelector('.search-container button');
    searchButton.addEventListener('click', filterContent);

    const newsletterForm = document.querySelector('.newsletter-signup form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter your email address.');
        }
    });

    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = contactForm.querySelector('input[name="name"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const messageInput = contactForm.querySelector('textarea[name="message"]');

            if (nameInput.value && emailInput.value && messageInput.value) {
                alert('Thank you for your message!');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

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
.tabs');
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

    setLanguage(currentLanguage);

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;

            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
                accordionItem.classList.remove('active');
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionItem.classList.add('active');
            }
        });
    });
});
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

    setLanguage(currentLanguage);

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
