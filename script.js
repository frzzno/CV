// Cyberpunk Portfolio Interactivity with Expandable Sections

document.addEventListener('DOMContentLoaded', function() {
    // Console log with cyberpunk style
    console.log('%c CYBERPUNK PORTFOLIO v2.0 ', 'background: #000; color: #00ffff; font-family: "Fira Code", monospace;');
    console.log('%c DESIGN: ULYANA ', 'background: #000; color: #ffffff; font-family: "Fira Code", monospace;');
    console.log('%c AESTHETIC: DARK CYBERPUNK ', 'background: #000; color: #ff00aa; font-family: "Fira Code", monospace;');

    // Expand/Collapse Section Functionality
    const expandButtons = document.querySelectorAll('.expand-btn');
    const collapseButtons = document.querySelectorAll('.collapse-btn');
    const sections = document.querySelectorAll('.expandable-section');

    // Close all sections initially
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Expand button click handler
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Close all other sections
            sections.forEach(section => {
                if (section.id !== targetId) {
                    section.classList.remove('active');
                }
            });

            // Toggle target section
            targetSection.classList.toggle('active');

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
            targetSection.classList.remove('active');
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

    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.1)';
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