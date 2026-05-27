// IA.js

// ===============================
// CURSOR GLOW
// ===============================

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';

});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector('.ai-navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 40) {

        navbar.style.background =
            'rgba(5, 8, 15, 0.85)';

        navbar.style.padding =
            '14px 0';

        navbar.style.boxShadow =
            '0 10px 30px rgba(0,0,0,0.25)';

    } else {

        navbar.style.background =
            'rgba(5, 8, 15, 0.45)';

        navbar.style.padding =
            '20px 0';

        navbar.style.boxShadow =
            'none';

    }

});

// ===============================
// PARALLAX HERO
// ===============================

const shapes = document.querySelectorAll('.shape');

window.addEventListener('mousemove', (e) => {

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {

        let speed = (index + 1) * 25;

        let moveX = (x - 0.5) * speed;
        let moveY = (y - 0.5) * speed;

        shape.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });

});

// ===============================
// 3D TILT EFFECT
// ===============================

const cards = document.querySelectorAll(
    '.project-card, .glass-card'
);

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});

// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(
    '.project-card, .experience-box, .section-title'
);

const revealOnScroll = () => {

    const trigger =
        window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add('active-reveal');

        }

    });

};

window.addEventListener(
    'scroll',
    revealOnScroll
);

revealOnScroll();

// ===============================
// ADD INITIAL REVEAL STYLE
// ===============================

reveals.forEach(item => {

    item.style.opacity = '0';
    item.style.transform =
        'translateY(60px)';
    item.style.transition =
        'all 1s ease';

});

document.querySelectorAll(
    '.active-reveal'
).forEach(item => {

    item.style.opacity = '1';
    item.style.transform =
        'translateY(0px)';

});

// ===============================
// INTERSECTION OBSERVER
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';

            entry.target.style.transform =
                'translateY(0px)';

        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(item => {

    observer.observe(item);

});

// ===============================
// FLOATING PARTICLES
// ===============================

const createParticle = () => {

    const particle =
        document.createElement('span');

    particle.classList.add('particle');

    document.body.appendChild(particle);

    const size =
        Math.random() * 4 + 2;

    particle.style.width =
        size + 'px';

    particle.style.height =
        size + 'px';

    particle.style.left =
        Math.random() * window.innerWidth + 'px';

    particle.style.top =
        window.innerHeight + 'px';

    const duration =
        Math.random() * 5 + 5;

    particle.style.animationDuration =
        duration + 's';

    setTimeout(() => {

        particle.remove();

    }, duration * 1000);

};

setInterval(createParticle, 300);

// ===============================
// SMOOTH ACTIVE LINKS
// ===============================

const navLinks =
    document.querySelectorAll('.nav-link');

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        const targetId =
            link.getAttribute('href');

        if (targetId.startsWith('#')) {

            e.preventDefault();

            const target =
                document.querySelector(targetId);

            window.scrollTo({

                top:
                    target.offsetTop - 80,

                behavior: 'smooth'

            });

        }

    });

});

// ===============================
// DYNAMIC GLOW ON CARD
// ===============================

const projectCards =
    document.querySelectorAll('.project-card');

projectCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.setProperty(
            '--x',
            `${x}px`
        );

        card.style.setProperty(
            '--y',
            `${y}px`
        );

    });

});

// ===============================
// TYPEWRITER EFFECT
// ===============================

const title =
    document.querySelector('.hero-title');

const originalText =
    title.innerHTML;

title.innerHTML = '';

let i = 0;

const typing = () => {

    if (i < originalText.length) {

        title.innerHTML +=
            originalText.charAt(i);

        i++;

        setTimeout(typing, 20);

    }

};

typing();

// ===============================
// BACKGROUND MOTION
// ===============================

const gradient =
    document.querySelector('.bg-gradient');

window.addEventListener('mousemove', (e) => {

    let x =
        (e.clientX / window.innerWidth) * 100;

    let y =
        (e.clientY / window.innerHeight) * 100;

    gradient.style.background = `

        radial-gradient(
            circle at ${x}% ${y}%,
            rgba(0,229,255,0.10),
            transparent 25%
        ),

        radial-gradient(
            circle at ${100 - x}% ${100 - y}%,
            rgba(139,92,246,0.14),
            transparent 30%
        )

    `;

});

// ===============================
// LOADER EFFECT
// ===============================

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

// ===============================
// CONSOLE SIGNATURE
// ===============================

console.log(`

██████╗ ██╗
██╔══██╗██║
██████╔╝██║
██╔══██╗██║
██████╔╝███████╗
╚═════╝ ╚══════╝

AI Creative Developer
& AI Engineer

Created by Emanuel Cabral

`);