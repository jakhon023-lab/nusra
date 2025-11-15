// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Simple scroll animation on page load and scroll
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });
    
    reveals.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = header.offsetHeight;
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - headerHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
}

// Parallax effect for hero video
function initParallax() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroVideo.style.transform = `translateY(${rate}px) scale(1.1)`;
        });
    }
}

// Smooth parallax for app images
function initImageParallax() {
    const appImages = document.querySelectorAll('.app-image');
    appImages.forEach(image => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', function() {
                        const rect = entry.boundingClientRect;
                        const scrolled = window.pageYOffset;
                        const rate = (scrolled - rect.top) * 0.1;
                        if (entry.isIntersecting) {
                            image.style.transform = `translateY(${rate}px) scale(1.05)`;
                        }
                    }, { passive: true });
                }
            });
        }, { threshold: 0.1 });
        observer.observe(image);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initParallax();
    initImageParallax();
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            scrollToSection(targetId);
        }
    });
});

