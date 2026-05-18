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
        <strong style="color: var(--text-primary);">Grade Curricular Geral:</strong>
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
        <strong style="color: var(--text-primary);">Grade Curricular Geral:</strong>
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

// Abre o modal e insere os dados dinamicamente
function openModal(id) {
    const data = modalData[id];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-desc').innerHTML = data.desc;

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
        gitBtn.style.display = 'inline-block';
        gitBtn.href = data.github;
    } else {
        gitBtn.style.display = 'none';
    }

    if (data.page) {
        pageBtn.style.display = 'inline-block';
        pageBtn.href = data.page;
    } else {
        pageBtn.style.display = 'none';
    }

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));