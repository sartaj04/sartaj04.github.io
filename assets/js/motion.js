(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function initHeroEntrance() {
        const heroItems = document.querySelectorAll(
            '.hero-label, .hero h1, .hero-tagline, .hero-services, .hero-cta, .hero-stats, .hero-image, .page-hero-content, .page-hero h1, .page-hero p'
        );

        if (!heroItems.length) return;

        if (reduceMotion) {
            heroItems.forEach((el) => {
                el.style.opacity = '1';
            });
            return;
        }

        heroItems.forEach((el, index) => {
            el.classList.add('hero-enter');
            el.style.animationDelay = `${80 + index * 90}ms`;
        });
    }

    function initScrollReveal() {
        const         candidates = document.querySelectorAll(
            [
                '.section-header',
                '.service-card',
                '.work-card',
                '.process-card',
                '.featured-project',
                '.project-card',
                '.project-repo-card',
                '.blog-card',
                '.founder-card',
                '.timeline-item',
                '.education-card',
                '.tech-category',
                '.cta-content',
                '.persona-grid > div',
                '.focus-card',
                '.page-hero-image'
            ].join(', ')
        );

        if (!candidates.length) return;

        if (reduceMotion || !('IntersectionObserver' in window)) {
            candidates.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        // Stagger siblings within the same parent
        const parentMap = new Map();
        candidates.forEach((el) => {
            el.classList.add('reveal');
            const parent = el.parentElement;
            if (!parentMap.has(parent)) parentMap.set(parent, []);
            parentMap.get(parent).push(el);
        });

        parentMap.forEach((siblings) => {
            siblings.forEach((el, index) => {
                const delayClass = `reveal-delay-${Math.min(index + 1, 5)}`;
                el.classList.add(delayClass);
            });
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        candidates.forEach((el) => observer.observe(el));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initHeroEntrance();
            initScrollReveal();
        });
    } else {
        initHeroEntrance();
        initScrollReveal();
    }
})();
