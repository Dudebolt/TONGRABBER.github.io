// Инициализация GSAP
gsap.registerPlugin(ScrollTrigger);

// Анимация при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    // Анимация заголовка
    gsap.to("h1", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2
    });
    
    // Анимация подзаголовка
    gsap.to("h2", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4
    });
    
    // Анимация подчеркивания
    gsap.to(".underline-image", {
        opacity: 1,
        duration: 1,
        delay: 0.6
    });
    
    // Анимация блоков с преимуществами
    gsap.to(".feature", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.8
    });
    
    // Создаем эффект свечения для заголовка
    const tl = gsap.timeline({repeat: -1, yoyo: true});
    tl.to("h1", {
        textShadow: "0 0 15px rgba(58, 134, 255, 0.7)",
        duration: 2,
        ease: "sine.inOut"
    });
});

// Анимация шапки при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 14, 42, 0.9)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Добавляем анимацию частиц для фона
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Стилизуем частицу
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, ' + (Math.random() * 0.5) + ')';
        particle.style.borderRadius = '50%';
        
        // Позиционируем случайно
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        hero.appendChild(particle);
        
        // Анимируем частицу
        gsap.to(particle, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            duration: Math.random() * 5 + 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

createParticles();

// Добавляем анимацию для секции "How it works"
function animateHowItWorks() {
    gsap.to(".section-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".how-it-works",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.to(".subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".how-it-works",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.to(".steps-container", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
            trigger: ".how-it-works",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    // Анимация шагов по очереди
    gsap.to(".step", {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".steps-container",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// Вызываем функцию анимации при прокрутке
function animateOnScroll() {
    animateHowItWorks();
}

animateOnScroll(); 