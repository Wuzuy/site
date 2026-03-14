const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
let lastScrollY = window.scrollY;

// Abre e fecha o menu lateral
hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Fecha o menu ao clicar num link
sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => sidebar.classList.remove('open'));
});

// Oculta o botao do menu ao rolar a pagina no mobile
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 600) {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            hamburgerBtn.classList.add('hidden');
        } else {
            hamburgerBtn.classList.remove('hidden');
        }
    }
    lastScrollY = window.scrollY;
});

// Alterna entre modo claro e noturno
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Noturno';
});

// Aplica a animacao de fade-in quando o elemento entra na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
