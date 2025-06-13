class App {
    constructor() {
        this.initSidebar();
        this.initTheme();
        this.initModals();
    }

    initSidebar() {
        const sidebar = document.getElementById('sidebar');
        const hamburger = document.getElementById('hamburger');
        
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }
    }

    initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
                localStorage.setItem('theme', theme);
            });
            
            // Load saved theme
            if (localStorage.getItem('theme') === 'light') {
                document.body.classList.add('light-theme');
            }
        }
    }

    initModals() {
        const modal = document.getElementById('noticeModal');
        const modalBtn = document.getElementById('noticeBoardBtn');
        const modalClose = document.getElementById('modalClose');
        
        if (modal && modalBtn && modalClose) {
            modalBtn.addEventListener('click', () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});