// script.js

// Mensagem de boas-vindas no console
document.addEventListener('DOMContentLoaded', function() {
    console.log('DevLab - Landing Page carregada com sucesso!');
});

// ========== MENU RESPONSIVO (TOGGLE) ==========
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.classList.add('nav-toggle');
document.querySelector('.navbar').prepend(navToggle);

const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ========== SCROLL SUAVE PARA SEÇÕES ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ========== BOTÃO "VOLTAR AO TOPO" ==========
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Topo';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// ========== ANIMAÇÕES AO ROLAR A PÁGINA ==========
const fadeElements = document.querySelectorAll('.fade-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// ========== VALIDAÇÃO DE FORMULÁRIO DE CONTATO ==========
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        if (!name.value || !email.value) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios!');
        }
    });
}