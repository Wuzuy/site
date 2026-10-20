const modalData = {
    'sige': {
        title: 'SIGE',
        desc: '<p>Plataforma digital para matrículas, identificação e gestão de dados de alunos.</p>',
        tags: ['Frontend', 'Backend', 'Web'],
        github: '',
        page: 'sige.html'
    },
    'gerenciador-vendas': {
        title: 'Gerenciador de Vendas',
        desc: '<p>Sistema arquitetado para gestão de produção e vendas de pequenos negócios.</p>',
        tags: ['Node.js', 'TypeScript', 'API'],
        github: 'http://github.com/wuzuy/',
        page: 'gerenciador-vendas.html'
    },
    'tato': {
        title: 'App TATO',
        desc: '<p>Tecnologia de Acesso Por Toque e Outros Sentidos, focada em acessibilidade industrial.</p>',
        tags: ['Backend', 'Kotlin', 'Hardware'],
        github: 'http://github.com/wuzuy/',
        page: 'tato.html'
    },
    'faculdade': {
        title: 'Engenharia de Software',
        desc: `
        <strong>Grade Curricular Geral:</strong>
        <ul>
            <li>Banco de Dados (Relacional e NoSQL)</li>
            <li>Computação em Nuvem e Redes</li>
            <li>Desenvolvimento Back-end e Front-end</li>
            <li>DevOps e Gerência de Configuração</li>
            <li>Engenharia de Usabilidade e Produto</li>
            <li>Estrutura de Dados e Algoritmos</li>
            <li>Matemática e Métodos Quantitativos</li>
            <li>Métodos Ágeis (Scrum) e Projetos</li>
            <li>Modelagem de Sistemas (UML)</li>
            <li>POO e Padrões de Projetos em Java</li>
            <li>Programação Android</li>
            <li>Qualidade e Testes de Software</li>
            <li>Segurança e Direito Cibernético</li>
            <li>Sistemas Operacionais</li>
        </ul>`,
        tags: ['Estácio de Sá', 'Bacharelado', '2025-2029'],
        github: '',
        page: ''
    },
    'tecnico': {
        title: 'Desenvolvimento de Sistemas',
        desc: `
        <strong>Grade Curricular Geral:</strong>
        <ul>
            <li>Banco de Dados</li>
            <li>Desenvolvimento de Aplicativo Mobile</li>
            <li>Desenvolvimento de Sistemas</li>
            <li>Fundamentos de Eletroeletrônica Aplicada</li>
            <li>Implantação e Manutenção de Sistemas</li>
            <li>Internet das Coisas (IoT)</li>
            <li>Introdução à Indústria 4.0</li>
            <li>Introdução à Qualidade e Produtividade</li>
            <li>Introdução à TI e Comunicação</li>
            <li>Lógica de Programação</li>
            <li>Modelagem de Sistemas</li>
            <li>Projetos (Introdução e Desenvolvimento)</li>
            <li>Saúde e Segurança no Trabalho</li>
            <li>Sustentabilidade nos Processos Industriais</li>
            <li>Teste de Sistemas</li>
        </ul>`,
        tags: ['Firjan SENAI', 'Técnico', '2025-2026'],
        github: '',
        page: ''
    }
};

const modal = document.getElementById('project-modal');
const modalDesc = document.getElementById('modal-desc');
let lastFocused = null;

function openModal(id) {
    const data = modalData[id];
    if (!data || !modal) return;

    lastFocused = document.activeElement;

    document.getElementById('modal-title').textContent = data.title;
    modalDesc.innerHTML = data.desc;
    modalDesc.scrollTop = 0;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    const gitBtn = document.getElementById('modal-link-github');
    const pageBtn = document.getElementById('modal-link-page');

    if (data.github) {
        gitBtn.style.display = 'inline-flex';
        gitBtn.href = data.github;
    } else {
        gitBtn.style.display = 'none';
    }

    if (data.page) {
        pageBtn.style.display = 'inline-flex';
        pageBtn.href = data.page;
    } else {
        pageBtn.style.display = 'none';
    }

    modal.classList.add('active');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.querySelector('.close-btn')?.focus();
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Menu mobile
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        menuBtn.classList.toggle('active', open);
        menuBtn.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuBtn.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Navbar com estado ao rolar + progresso de leitura + parallax
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('scroll-progress');
const glows = document.querySelectorAll('.bg-glow');
const portrait = document.querySelector('.portrait');

const onScroll = () => {
    const y = window.scrollY;

    if (navbar) navbar.classList.toggle('scrolled', y > 12);

    if (progressBar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(y / max, 1) : 0;
        progressBar.style.transform = `scaleX(${progress})`;
    }

    glows.forEach((glow, i) => {
        const speed = i === 0 ? 0.08 : -0.05;
        glow.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });

    if (portrait) {
        portrait.style.transform = `translateY(${Math.min(y * 0.04, 42)}px)`;
    }
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Link ativo conforme a seção visível
const sections = Array.from(document.querySelectorAll('main section[id]'));
const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));

if ('IntersectionObserver' in window && sections.length) {
    const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            navAnchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => linkObserver.observe(section));
}

// Animação de entrada
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .fade-in, .stagger').forEach(el => revealObserver.observe(el));
} else {
    document.querySelectorAll('.reveal, .fade-in, .stagger').forEach(el => el.classList.add('visible'));
}

// Contadores
const counterObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('[data-counter]').forEach(animateCounter);
            counterObserver.unobserve(entry.target);
        });
    }, { threshold: 0.4 })
    : null;

if (counterObserver) {
    const stats = document.getElementById('stats');
    if (stats) counterObserver.observe(stats);
}

function animateCounter(el) {
    const target = Number(el.dataset.counter || 0);
    const suffix = el.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    };

    el.textContent = '0' + suffix;
    requestAnimationFrame(tick);
}

// Brilho que segue o cursor + tilt 3D nos cards de projeto
document.querySelectorAll('.project-card').forEach(card => {
    const isStatic = card.classList.contains('project-static');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);

        if (!isStatic && window.matchMedia('(hover: hover)').matches) {
            card.style.setProperty('--ry', `${((px - 0.5) * 9).toFixed(2)}deg`);
            card.style.setProperty('--rx', `${((0.5 - py) * 9).toFixed(2)}deg`);
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
    });
});

// Acessibilidade: abrir cards com Enter/Espaço
document.querySelectorAll('[role="button"]').forEach(card => {
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// Ano no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Lightbox da galeria de conquistas
(() => {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <button type="button" class="lightbox-close" aria-label="Fechar imagem">&times;</button>
        <img alt="">
        <p class="lightbox-caption"></p>
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector('img');
    const caption = overlay.querySelector('.lightbox-caption');
    const closeBtn = overlay.querySelector('.lightbox-close');
    let opener = null;

    const openLightbox = (link) => {
        const img = link.querySelector('img');
        overlayImg.src = link.getAttribute('href');
        overlayImg.alt = img ? img.alt : '';
        caption.textContent = link.querySelector('.gallery-caption')?.textContent || '';
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        opener = link;
        closeBtn.focus();
    };

    const closeLightbox = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (opener) opener.focus();
    };

    gallery.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-lightbox]');
        if (!link) return;
        e.preventDefault();
        openLightbox(link);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.closest('.lightbox-close')) closeLightbox();
    });

    overlay.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'Tab') {
            e.preventDefault();
            closeBtn.focus();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
    });
})();
