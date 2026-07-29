// Cyberpunk Portfolio Interactivity with Expandable Sections

document.addEventListener('DOMContentLoaded', function() {
    // Console log with cyberpunk style
    console.log('%c CYBERPUNK PORTFOLIO v2.0 ', 'background: #000; color: #00ffff; font-family: "Fira Code", monospace;');
    console.log('%c DESIGN: ULYANA ', 'background: #000; color: #ffffff; font-family: "Fira Code", monospace;');
    console.log('%c AESTHETIC: DARK CYBERPUNK ', 'background: #000; color: #ff00aa; font-family: "Fira Code", monospace;');

    // Expand/Collapse Section Functionality
    const expandLinks = document.querySelectorAll('.expand-link');
    const collapseButtons = document.querySelectorAll('.collapse-btn');
    const sections = document.querySelectorAll('.expandable-section');

    // Close all sections initially
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Expand link click handler
    expandLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            const promptHost = document.getElementById('promptHost');

            // Close all other sections
            sections.forEach(section => {
                if (section.id !== targetId) {
                    section.classList.remove('active');
                }
            });

            // Toggle target section
            targetSection.classList.toggle('active');

            // Update prompt host based on section
            if (targetSection.classList.contains('active')) {
                promptHost.textContent = targetId;
            } else {
                promptHost.textContent = 'main';
            }

            // Update active link styling
            expandLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Scroll to section if it's being opened
            if (targetSection.classList.contains('active')) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });

    // Collapse button click handler
    collapseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            const promptHost = document.getElementById('promptHost');

            targetSection.classList.remove('active');

            // Reset prompt to main when collapsed
            promptHost.textContent = 'main';

            // Remove active link styling
            const activeLink = document.querySelector(`.expand-link[data-target="${targetId}"]`);
            if (activeLink) {
                activeLink.classList.remove('active');
            }
        });
    });

    // Full View Modal Functionality
    window.openFullView = function(imageSrc, title, description) {
        const modal = document.getElementById('fullViewModal');
        const modalImage = document.getElementById('fullViewImage');
        const modalTitle = document.getElementById('fullViewTitle');
        const modalDescription = document.getElementById('fullViewDescription');

        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeFullView = function() {
        const modal = document.getElementById('fullViewModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close modal when clicking outside
    document.getElementById('fullViewModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeFullView();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFullView();
        }
    });

    // Fix typewriter cursor positioning
    const promptText = document.querySelector('.prompt-text');
    if (promptText) {
        // Remove the border after animation completes to avoid duplicate cursor
        setTimeout(() => {
            promptText.style.borderRight = 'none';
        }, 3500); // After animation completes (3s + 0.5s delay)
    }

    // Add hover effects to skill buttons
    const skillButtons = document.querySelectorAll('.skill-btn');
    skillButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.1)';
        });
    });

    // Add click effect to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simple click feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});