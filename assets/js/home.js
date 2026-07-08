// =============================================
// HOME PAGE JS — assets/js/home.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // === TYPED TEXT ===
    const typedEl = document.querySelector('.typed-text');
    if (typedEl) {
        const phrases = ['Web Developer', 'UI/UX Designer', 'WordPress Expert', 'Freelancer'];
        let phraseIndex = 0, charIndex = 0, isDeleting = false;
        function typeEffect() {
            const current = phrases[phraseIndex];
            if (isDeleting) {
                typedEl.textContent = current.slice(0, --charIndex);
            } else {
                typedEl.textContent = current.slice(0, ++charIndex);
            }
            let delay = isDeleting ? 60 : 110;
            if (!isDeleting && charIndex === current.length) {
                delay = 1800; isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 400;
            }
            setTimeout(typeEffect, delay);
        }
        typeEffect();
    }

    // === COUNT UP ANIMATION ===
    const counters = document.querySelectorAll('.count');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.done) {
                entry.target.dataset.done = true;
                const target = +entry.target.dataset.target;
                let count = 0;
                const step = target / 60;
                const update = () => {
                    count += step;
                    if (count < target) {
                        entry.target.textContent = Math.ceil(count);
                        requestAnimationFrame(update);
                    } else {
                        entry.target.textContent = target;
                    }
                };
                update();
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    // === SKILL BARS ANIMATION ===
    const barFills = document.querySelectorAll('.bar-fill');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = true;
                const w = entry.target.dataset.width;
                setTimeout(() => { entry.target.style.width = w + '%'; }, 200);
            }
        });
    }, { threshold: 0.5 });
    barFills.forEach(b => barObserver.observe(b));

    // === CONTACT FORM ===
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('c-name').value;
            const email = document.getElementById('c-email').value;
            const subject = document.getElementById('c-subject').value;
            const message = document.getElementById('c-message').value;
            const body = `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`;
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rummanshahzad012@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(gmailUrl, '_blank');
        });
    }

});
