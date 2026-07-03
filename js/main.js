// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Contact Information Obfuscation
// Phone number parts: 010 / 7511 / 7622
const phoneParts = ['010', '7511', '7622'];
const phone = phoneParts.join('-');

// Email parts: hunmin1081 / inu.ac.kr
const emailParts = ['hunmin1081', 'inu.ac.kr'];
const email = emailParts.join('@');

// Render contact information on page load
window.addEventListener('DOMContentLoaded', () => {
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');

    if (phoneElement) {
        phoneElement.textContent = phone;
        phoneElement.style.cursor = 'pointer';
        phoneElement.addEventListener('click', () => {
            window.location.href = `tel:${phone}`;
        });
    }

    if (emailElement) {
        emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
