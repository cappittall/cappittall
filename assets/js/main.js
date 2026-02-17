// Main JavaScript
// Portfolio Website Interactive Features

// ============================================================================
// Configuration
// ============================================================================
const CONFIG = {
    githubUsername: 'cappittall',
    githubToken: '', // Optional: Add GitHub token for higher rate limits
    typingSpeed: 100,
    typingDelay: 2000,
};

// ============================================================================
// Theme Management
// ============================================================================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.attachEventListeners();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        this.updateIcon();
    }

    toggle() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    updateIcon() {
        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            icon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
}

// ============================================================================
// Navigation
// ============================================================================
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.attachEventListeners();
        this.handleScroll();
    }

    attachEventListeners() {
        // Scroll event
        window.addEventListener('scroll', () => this.handleScroll());

        // Hamburger menu
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleLinkClick(e);
                this.closeMenu();
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                this.closeMenu();
            }
        });
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Update active link based on scroll position
        this.updateActiveLink();
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('.section, .hero');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }

    handleLinkClick(e) {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}

// ============================================================================
// Typing Animation
// ============================================================================
class TypingAnimation {
    constructor(element, texts, speed = 100, delay = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.delay = delay;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================================================
// Counter Animation
// ============================================================================
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.animated = false;
        this.init();
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        window.addEventListener('scroll', () => this.checkPosition());
    }

    checkPosition() {
        if (this.animated) return;

        const aboutSection = document.querySelector('.about-section');
        if (!aboutSection) return;

        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY >= (sectionTop - windowHeight + sectionHeight / 2)) {
            this.animate();
            this.animated = true;
        }
    }

    animate() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }
}

// ============================================================================
// Projects Filter
// ============================================================================
class ProjectsFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectsGrid = document.getElementById('projects-grid');
        this.init();
    }

    init() {
        this.renderProjects('all');
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filterProjects(filter);
                
                // Update active button
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    filterProjects(category) {
        this.renderProjects(category);
    }

    renderProjects(category) {
        const filteredProjects = getProjectsByCategory(category);
        
        if (!this.projectsGrid) return;
        
        this.projectsGrid.innerHTML = '';
        
        filteredProjects.forEach((project, index) => {
            const card = this.createProjectCard(project);
            card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
            this.projectsGrid.appendChild(card);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category.join(' '));
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" 
                 onerror="this.src='./assets/images/placeholder-project.jpg'">
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link" aria-label="GitHub"><i class="fab fa-github"></i></a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link" aria-label="Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-stats">
                    <span class="project-stat">
                        <i class="fas fa-star"></i> ${project.stars}
                    </span>
                    <span class="project-stat">
                        <i class="fas fa-code"></i> ${project.language}
                    </span>
                </div>
            </div>
        `;
        
        return card;
    }
}

// ============================================================================
// GitHub API Integration
// ============================================================================
class GitHubAPI {
    constructor(username, token = '') {
        this.username = username;
        this.token = token;
        this.baseURL = 'https://api.github.com';
        this.headers = {
            'Accept': 'application/vnd.github.v3+json'
        };
        
        if (token) {
            this.headers['Authorization'] = `token ${token}`;
        }
    }

    async fetchUserData() {
        try {
            const response = await fetch(`${this.baseURL}/users/${this.username}`, {
                headers: this.headers
            });
            return await response.json();
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }

    async fetchRepos() {
        try {
            const response = await fetch(
                `${this.baseURL}/users/${this.username}/repos?sort=updated&per_page=10`,
                { headers: this.headers }
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching repos:', error);
            return [];
        }
    }

    async updateGitHubStats() {
        const userData = await this.fetchUserData();
        if (userData) {
            this.updateStatsUI(userData);
        }

        const repos = await this.fetchRepos();
        if (repos && repos.length > 0) {
            this.updateReposUI(repos);
        }
    }

    updateStatsUI(userData) {
        const elements = {
            'total-repos': userData.public_repos,
            'total-followers': userData.followers
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                this.animateNumber(element, parseInt(element.textContent), value);
            }
        });
    }

    updateReposUI(repos) {
        const reposList = document.getElementById('repos-list');
        if (!reposList) return;

        reposList.innerHTML = '';

        repos.slice(0, 5).forEach(repo => {
            const repoItem = document.createElement('div');
            repoItem.className = 'repo-item';
            
            repoItem.innerHTML = `
                <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-name">
                    ${repo.name}
                </a>
                <p class="repo-description">${repo.description || 'No description available'}</p>
                <div class="repo-meta">
                    ${repo.language ? `<span><i class="fas fa-circle" style="color: #3572A5;"></i> ${repo.language}</span>` : ''}
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                </div>
            `;
            
            reposList.appendChild(repoItem);
        });
    }

    animateNumber(element, start, end) {
        const duration = 1000;
        const increment = (end - start) / (duration / 16);
        let current = start;

        const updateNumber = () => {
            current += increment;
            if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
                element.textContent = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = end;
            }
        };

        updateNumber();
    }
}

// ============================================================================
// Particles Animation
// ============================================================================
class ParticlesAnimation {
    constructor(container) {
        this.container = container;
        this.particlesCount = 50;
        this.init();
    }

    init() {
        if (!this.container) return;

        for (let i = 0; i < this.particlesCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.pointerEvents = 'none';
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite ease-in-out`;
        
        this.container.appendChild(particle);
    }
}

// ============================================================================
// Contact Form
// ============================================================================
class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Create mailto link as fallback
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        const mailtoLink = `mailto:netcat16@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        // Show success message
        this.showMessage('Thank you! Your message has been opened in your email client.', 'success');
        this.form.reset();
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
    }
}

// ============================================================================
// Back to Top Button
// ============================================================================
class BackToTop {
    constructor(buttonId) {
        this.button = document.getElementById(buttonId);
        this.init();
    }

    init() {
        if (!this.button) return;
        
        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================================================
// Initialize Everything
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Theme Manager
    new ThemeManager();
    
    // Navigation
    new Navigation();
    
    // Typing Animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = [
            'Full Stack Developer',
            'AI/ML Specialist',
            'Python Expert',
            'FastAPI Developer',
            'Computer Vision Engineer'
        ];
        new TypingAnimation(typingElement, texts, 100, 2000);
    }
    
    // Counter Animation
    new CounterAnimation();
    
    // Projects Filter
    new ProjectsFilter();
    
    // GitHub API
    const githubAPI = new GitHubAPI(CONFIG.githubUsername, CONFIG.githubToken);
    githubAPI.updateGitHubStats();
    
    // Particles Animation
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        new ParticlesAnimation(particlesContainer);
    }
    
    // Contact Form
    new ContactForm('contact-form');
    
    // Back to Top Button
    new BackToTop('back-to-top');
    
    // Add floating animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(30px, -30px); }
            66% { transform: translate(-20px, 20px); }
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
