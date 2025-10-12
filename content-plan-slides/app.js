class SlideshowPresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 12;
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.currentSlideEl = document.getElementById('current-slide');
        this.totalSlidesEl = document.getElementById('total-slides');
        
        this.init();
    }
    
    init() {
        // Set initial state
        this.updateSlideDisplay();
        this.updateNavigationState();
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Touch/swipe support for mobile
        this.addTouchSupport();
        
        // Update total slides display
        this.totalSlidesEl.textContent = this.totalSlides;
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    goToSlide(slideIndex) {
        // Validate slide index
        if (slideIndex < 0 || slideIndex >= this.totalSlides) {
            return;
        }
        
        const previousSlide = this.currentSlide;
        this.currentSlide = slideIndex;
        
        // Update slide visibility with animation direction
        this.updateSlideDisplay(previousSlide);
        this.updateNavigationState();
        this.updateSlideCounter();
    }
    
    updateSlideDisplay(previousSlide = null) {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (previousSlide !== null && index === previousSlide) {
                // Add prev class for smooth transition
                slide.classList.add('prev');
                // Remove prev class after transition
                setTimeout(() => {
                    slide.classList.remove('prev');
                }, 500);
            }
        });
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    updateNavigationState() {
        // Update button states
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        
        // Update button text for first and last slides
        const prevText = this.prevBtn.querySelector('.nav-text');
        const nextText = this.nextBtn.querySelector('.nav-text');
        
        if (this.currentSlide === 0) {
            prevText.textContent = 'Start';
        } else {
            prevText.textContent = 'Previous';
        }
        
        if (this.currentSlide === this.totalSlides - 1) {
            nextText.textContent = 'Restart';
        } else {
            nextText.textContent = 'Next';
        }
    }
    
    updateSlideCounter() {
        this.currentSlideEl.textContent = this.currentSlide + 1;
    }
    
    handleKeydown(e) {
        switch (e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ': // Spacebar
                e.preventDefault();
                this.nextSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
            case 'Escape':
                // Could be used to exit fullscreen mode in the future
                break;
        }
    }
    
    addTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        const slideshowContainer = document.querySelector('.slideshow-container');
        
        slideshowContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        slideshowContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            this.handleSwipe(startX, startY, endX, endY);
        }, { passive: true });
    }
    
    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;
        
        // Only process horizontal swipes that are longer than vertical swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                // Swipe right - go to previous slide
                this.previousSlide();
            } else {
                // Swipe left - go to next slide
                this.nextSlide();
            }
        }
    }
    
    // Public method to go to a specific slide (for external use)
    jumpToSlide(slideNumber) {
        if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
            this.goToSlide(slideNumber - 1);
        }
    }
    
    // Public method to get current slide info
    getCurrentSlideInfo() {
        return {
            current: this.currentSlide + 1,
            total: this.totalSlides,
            isFirst: this.currentSlide === 0,
            isLast: this.currentSlide === this.totalSlides - 1
        };
    }
}

// Auto-play functionality (optional)
class AutoPlayManager {
    constructor(slideshow, intervalMs = 10000) {
        this.slideshow = slideshow;
        this.interval = intervalMs;
        this.isPlaying = false;
        this.timerId = null;
        this.pauseOnInteraction = true;
    }
    
    start() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.timerId = setInterval(() => {
            const info = this.slideshow.getCurrentSlideInfo();
            if (info.isLast) {
                this.stop(); // Stop at the end
            } else {
                this.slideshow.nextSlide();
            }
        }, this.interval);
    }
    
    stop() {
        if (!this.isPlaying) return;
        
        this.isPlaying = false;
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    
    toggle() {
        if (this.isPlaying) {
            this.stop();
        } else {
            this.start();
        }
    }
}

// Accessibility enhancements
function enhanceAccessibility() {
    // Add ARIA labels
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.setAttribute('role', 'tabpanel');
        slide.setAttribute('aria-label', `Slide ${index + 1} of ${slides.length}`);
    });
    
    // Add ARIA labels to navigation
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.setAttribute('aria-label', 'Go to previous slide');
    nextBtn.setAttribute('aria-label', 'Go to next slide');
    
    // Add ARIA labels to indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.setAttribute('role', 'button');
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
        indicator.setAttribute('tabindex', '0');
        
        // Add keyboard support for indicators
        indicator.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                indicator.click();
            }
        });
    });
}

// Initialize the presentation when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create slideshow instance
    const presentation = new SlideshowPresentation();
    
    // Enhance accessibility
    enhanceAccessibility();
    
    // Optional: Create auto-play manager (uncomment to enable)
    // const autoPlay = new AutoPlayManager(presentation, 15000); // 15 seconds per slide
    
    // Make presentation available globally for debugging/external use
    window.presentation = presentation;
    
    // Add focus management
    const slideContainer = document.querySelector('.slideshow-container');
    slideContainer.setAttribute('tabindex', '0');
    
    // Announce slide changes to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
    
    // Update announcer when slide changes
    const originalGoToSlide = presentation.goToSlide.bind(presentation);
    presentation.goToSlide = function(slideIndex) {
        originalGoToSlide(slideIndex);
        
        // Announce the slide change
        const slideTitle = presentation.slides[slideIndex].querySelector('h1');
        if (slideTitle) {
            announcer.textContent = `Now showing: ${slideTitle.textContent}`;
        }
    };
    
    // Add visual feedback for keyboard users
    document.addEventListener('keydown', (e) => {
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Home', 'End'].includes(e.key)) {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add CSS for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation .nav-btn:focus,
        .keyboard-navigation .indicator:focus {
            outline: 2px solid var(--color-primary) !important;
            outline-offset: 2px;
        }
        
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;
    document.head.appendChild(style);
    
    console.log('LinkedIn Content Plan Presentation initialized successfully!');
    console.log('Available keyboard shortcuts:');
    console.log('- Arrow keys or Space: Navigate slides');
    console.log('- Home: Go to first slide');
    console.log('- End: Go to last slide');
    console.log('- Swipe left/right: Navigate on touch devices');
});