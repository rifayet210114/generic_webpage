/**
 * Aether Technologies - Premium Landing Page Script
 * Author: Senior Frontend UI/UX Developer
 * Version: 1.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initThemeToggle();
    initCustomCursor();
    initStickyHeader();
    initMobileNavigation();
    initScrollReveal();
    initTimelineProgress();
    initTestimonialsSlider();
    initMagneticButtons();
    initButtonRipple();
    initCardGlows();
});

/* ==========================================================================
   CUSTOM CURSOR & FOLLOWER
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const follower = document.getElementById('customCursorFollower');
    
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0; // Current mouse coords
    let followerX = 0, followerY = 0; // Follower smooth coords
    let isMoving = false;
    let isHovered = false;

    // Show cursor on first mouse movement
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMoving) {
            cursor.style.opacity = '1';
            follower.style.opacity = '1';
            isMoving = true;
        }

        // Standard direct cursor alignment (extremely fast responsive feedback)
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    // Custom animation loop for lag follower (interpolate values for fluid elastic delay)
    function renderFollower() {
        // Lerp formula: current + (target - current) * factor
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;

        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;

        requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    // Hover state styles trigger (enlarge follower ring)
    const hoverElements = document.querySelectorAll('a, button, .dropdown-trigger, .slider-dot, .why-card, .project-card, .service-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            follower.classList.add('cursor-hover');
            isHovered = true;
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            follower.classList.remove('cursor-hover');
            isHovered = false;
        });
    });

    // Click trigger animation state
    window.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
        follower.classList.add('cursor-click');
    });

    window.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-click');
        follower.classList.remove('cursor-click');
    });

    // Hide cursor when leaving screen viewport
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        follower.style.opacity = '0';
        isMoving = false;
    });
}

/* ==========================================================================
   STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownTrigger = document.getElementById('navPortfolioContainer');

    if (!hamburger || !navMenu) return;

    // Toggle menu slide-in drawer
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Prevent background scroll when menu is active
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Auto-close menu drawer when clicking navigational anchor targets
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // If mobile view and it's a dropdown, toggle rather than closing
            if (window.innerWidth <= 768 && link.parentElement.classList.contains('dropdown-trigger')) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
                return;
            }

            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Handle viewport changes to reset scrolls/overflow locks
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            if (dropdownTrigger) dropdownTrigger.classList.remove('active');
        }
    });
}

/* ==========================================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    // Cards get a slightly higher trigger threshold to catch them mid-entry
    const cardSelector = '.why-card, .service-card, .testimonial-card, .project-card';

    const defaultOptions = {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const cardOptions = {
        root: null,
        threshold: 0.06,
        rootMargin: '0px 0px -20px 0px'
    };

    function makeObserver(options) {
        return new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
    }

    const defaultObserver = makeObserver(defaultOptions);
    const cardObserver    = makeObserver(cardOptions);

    revealElements.forEach((el) => {
        const isCard = el.matches(cardSelector);
        const parent = el.parentElement;

        // Assign stagger delay based on position within its grid parent
        if (parent && parent.classList.contains('grid')) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('scroll-reveal'));
            const idx = siblings.indexOf(el);
            if (idx > 0 && idx <= 6) {
                el.classList.add(`delay-${idx}`);
            }
        }

        if (isCard) {
            cardObserver.observe(el);
        } else {
            defaultObserver.observe(el);
        }
    });
}

/* ==========================================================================
   TIMELINE PROGRESS ENGINE
   ========================================================================== */
function initTimelineProgress() {
    const progressLine = document.getElementById('timelineProgress');
    const steps = document.querySelectorAll('.timeline-step');
    
    if (!progressLine || steps.length === 0) return;

    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;

    window.addEventListener('scroll', updateTimelineProgress);
    window.addEventListener('resize', updateTimelineProgress);
    
    // Initial run
    updateTimelineProgress();

    function updateTimelineProgress() {
        const containerRect = timelineContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Compute active scrolling depth relative to timeline layout height
        const timelineTop = containerRect.top + window.scrollY;
        const timelineHeight = containerRect.height;
        const triggerPoint = window.scrollY + (viewportHeight * 0.65); // Trigger midway down screen
        
        let scrollProgress = 0;
        
        if (triggerPoint > timelineTop) {
            scrollProgress = (triggerPoint - timelineTop) / timelineHeight;
            scrollProgress = Math.min(Math.max(scrollProgress, 0), 1); // Clamp between 0 and 1
        }
        
        // Grow indicator line
        progressLine.style.height = `${scrollProgress * 100}%`;

        // Check each stage node boundary and toggle active states
        steps.forEach(step => {
            const stepRect = step.getBoundingClientRect();
            const stepTop = stepRect.top + window.scrollY;
            
            if (triggerPoint >= stepTop) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
}

/* ==========================================================================
   TESTIMONIALS SLIDER
   ========================================================================== */
function initTestimonialsSlider() {
    const wrapper = document.getElementById('testimonialsWrapper');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    
    if (!wrapper || slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    // Move slider viewport offset
    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots state
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Controls listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }

    // Pagination Dots click mappings
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetAutoPlay();
        });
    });

    // Start auto slider rotation
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 7000); // 7s slide rotation
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();
}

/* ==========================================================================
   MAGNETIC INTERACTION FOR BUTTONS
   ========================================================================== */
function initMagneticButtons() {
    // Only run on desktop layout to prevent weird jumps on touch screens
    if (window.innerWidth <= 1024) return;

    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            
            // Calculate mouse coordinates relative to button center
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;
            
            // Move item slightly towards cursor center (lower strength for subtler, premium feel)
            const strength = 0.18;
            const transformX = mouseX * strength;
            const transformY = mouseY * strength;
            
            el.style.transform = `translate3d(${transformX}px, ${transformY}px, 0)`;
            el.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
            
            // Move text/icon inner tags for parallax depth
            const text = el.querySelector('span');
            if (text) {
                text.style.transform = `translate3d(${transformX * 0.25}px, ${transformY * 0.25}px, 0)`;
                text.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
            }
        });

        // Reset positions smoothly when mouse exits
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate3d(0, 0, 0)';
            el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            
            const text = el.querySelector('span');
            if (text) {
                text.style.transform = 'translate3d(0, 0, 0)';
                text.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            }
        });
    });
}

/* ==========================================================================
   BUTTON RIPPLE CLICK TRIGGERS
   ========================================================================== */
function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple should only trigger on visual clicks, ignore keyboard space/enters
            if (e.clientX === 0 && e.clientY === 0) return;

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            // Clean up node when animation finishes
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    });
}

/* ==========================================================================
   THEME TOGGLE SYSTEM (LIGHT & DARK MODES)
   ========================================================================== */
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggleBtn');
    if (!toggleBtn) return;

    // Apply the active theme visually to the toggle button
    function updateToggleIcon(theme) {
        // Toggle button classes or properties if needed, SVGs are styled in CSS
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        let newTheme = 'light';

        if (currentTheme === 'light') {
            newTheme = 'dark';
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });
}

/* ==========================================================================
   DYNAMIC CARD GLOW HOVER SYSTEM
   ========================================================================== */
function initCardGlows() {
    const cards = document.querySelectorAll('.why-card, .service-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--card-mouse-x', `${x}px`);
            card.style.setProperty('--card-mouse-y', `${y}px`);
        });
    });
}
