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

// Language Translation System
const translations = {
    en: {
        nav: {
            home: "Home",
            products: "Products",
            pricing: "Pricing",
            about: "About",
            getStarted: "Get Started",
            language: "EN"
        },
        hero: {
            title1: "The all-in-one platform",
            title2: "for growing businesses",
            subtitle: "Nusra combines Website Builder + Hosting, Delivery Management System (DMS), and Warehouse Management System (WMS) into one powerful platform. Everything your business needs, all in one place.",
            getNusra: "Get Nusra",
            learnMore: "Learn More"
        },
        apps: {
            title: "Everything Your Business Needs",
            subtitle: "Three powerful applications, one unified platform",
            website: {
                title: "Website Builder + Hosting",
                description: "Build modern, professional websites and full-featured e-commerce stores with our intuitive drag-and-drop tools. Create your online store in minutes - no coding required! Fast, reliable hosting included with enterprise-grade security.",
                ecommerceTitle: "✨ Build Your E-Commerce Store with Drag & Drop",
                ecommerceText: "Create a complete online store without writing a single line of code. Add products, manage inventory, process payments, and track orders - all with simple drag-and-drop tools."
            },
            dms: {
                title: "Delivery Management System (DMS)",
                description: "Streamline your delivery operations with real-time tracking, route optimization, and driver management. Includes powerful mobile app for drivers to navigate, follow routes, and manage orders on the go.",
                driverTitle: "📱 Driver Mobile App - Complete Delivery Solution",
                driverText: "Our dedicated mobile app empowers drivers with everything they need for efficient deliveries. Navigate routes, update order status, communicate with customers, and track earnings - all from your smartphone."
            },
            wms: {
                title: "Warehouse Management System (WMS)",
                description: "Automate and control your warehouse operations with comprehensive inventory management, barcode scanning, and advanced analytics."
            }
        },
        clients: {
            title: "Our Clients",
            subtitle: "Trusted by leading brands worldwide"
        },
        contact: {
            address: "Tashkent city, Bogibuston st 186"
        },
        footer: {
            address: "Tashkent city, Bogibuston st 186"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            products: "Продукты",
            pricing: "Цены",
            about: "О нас",
            getStarted: "Начать",
            language: "RU"
        },
        hero: {
            title1: "Всё-в-одном платформа",
            title2: "для растущего бизнеса",
            subtitle: "Nusra объединяет Конструктор сайтов + Хостинг, Систему управления доставкой (DMS) и Систему управления складом (WMS) в одну мощную платформу. Всё, что нужно вашему бизнесу, в одном месте.",
            getNusra: "Получить Nusra",
            learnMore: "Узнать больше"
        },
        apps: {
            title: "Всё, что нужно вашему бизнесу",
            subtitle: "Три мощных приложения, одна унифицированная платформа",
            website: {
                title: "Конструктор сайтов + Хостинг",
                description: "Создавайте современные профессиональные веб-сайты и полнофункциональные интернет-магазины с помощью наших интуитивных инструментов перетаскивания. Создайте свой интернет-магазин за минуты - без программирования! Быстрый и надежный хостинг включен с корпоративной безопасностью.",
                ecommerceTitle: "✨ Создайте свой интернет-магазин перетаскиванием",
                ecommerceText: "Создайте полноценный интернет-магазин без написания ни одной строки кода. Добавляйте товары, управляйте запасами, обрабатывайте платежи и отслеживайте заказы - всё с помощью простых инструментов перетаскивания."
            },
            dms: {
                title: "Система управления доставкой (DMS)",
                description: "Оптимизируйте операции доставки с отслеживанием в реальном времени, оптимизацией маршрутов и управлением водителями. Включает мощное мобильное приложение для водителей для навигации, следования маршрутам и управления заказами на ходу.",
                driverTitle: "📱 Мобильное приложение для водителей - Полное решение для доставки",
                driverText: "Наше специальное мобильное приложение предоставляет водителям всё необходимое для эффективной доставки. Прокладывайте маршруты, обновляйте статус заказа, общайтесь с клиентами и отслеживайте заработок - всё со своего смартфона."
            },
            wms: {
                title: "Система управления складом (WMS)",
                description: "Автоматизируйте и контролируйте складские операции с комплексным управлением запасами, сканированием штрих-кодов и расширенной аналитикой."
            }
        },
        clients: {
            title: "Наши клиенты",
            subtitle: "Доверяют ведущие бренды по всему миру"
        },
        contact: {
            address: "г. Ташкент, ул. Богибустон, 186"
        },
        footer: {
            address: "г. Ташкент, ул. Богибустон, 186"
        }
    },
    uz: {
        nav: {
            home: "Bosh sahifa",
            products: "Mahsulotlar",
            pricing: "Narxlar",
            about: "Biz haqimizda",
            getStarted: "Boshlash",
            language: "UZ"
        },
        hero: {
            title1: "Hamma narsa bitta platformada",
            title2: "o'sib borayotgan bizneslar uchun",
            subtitle: "Nusra Veb-sayt quruvchi + Xosting, Yetkazib berish boshqaruvi tizimi (DMS) va Ombor boshqaruvi tizimi (WMS)ni bitta kuchli platformaga birlashtiradi. Biznesingizga kerak bo'lgan hamma narsa bitta joyda.",
            getNusra: "Nusra olish",
            learnMore: "Ko'proq bilish"
        },
        apps: {
            title: "Biznesingizga kerak bo'lgan hamma narsa",
            subtitle: "Uchta kuchli ilova, bitta birlashtirilgan platforma",
            website: {
                title: "Veb-sayt quruvchi + Xosting",
                description: "Zamonaviy, professional veb-saytlar va to'liq funksiyali elektron tijorat do'konlarini bizning intuitiv drag-and-drop vositalarimiz bilan yarating. Onlayn do'koningizni daqiqalar ichida yarating - kod yozish shart emas! Tez, ishonchli xosting korporativ darajadagi xavfsizlik bilan birga kiritilgan.",
                ecommerceTitle: "✨ Drag & Drop bilan elektron tijorat do'koningizni yarating",
                ecommerceText: "Bir qator kod yozmasdan to'liq onlayn do'kon yarating. Mahsulotlarni qo'shing, inventarizatsiyani boshqaring, to'lovlarni qayta ishlang va buyurtmalarni kuzating - bularning barchasi oddiy drag-and-drop vositalar bilan."
            },
            dms: {
                title: "Yetkazib berish boshqaruvi tizimi (DMS)",
                description: "Real vaqtda kuzatish, marshrut optimallashtirish va haydovchilar boshqaruvi bilan yetkazib berish operatsiyalarini soddalashtiring. Haydovchilar uchun navigatsiya qilish, marshrutlarni kuzatish va buyurtmalarni boshqarish uchun kuchli mobil ilovani o'z ichiga oladi.",
                driverTitle: "📱 Haydovchi mobil ilovasi - To'liq yetkazib berish yechimi",
                driverText: "Bizning maxsus mobil ilovamiz haydovchilarga samarali yetkazib berish uchun kerak bo'lgan hamma narsani ta'minlaydi. Marshrutlarni navigatsiya qiling, buyurtma holatini yangilang, mijozlar bilan muloqot qiling va daromadlarni kuzating - bularning barchasi smartfoningizdan."
            },
            wms: {
                title: "Ombor boshqaruvi tizimi (WMS)",
                description: "Ombor operatsiyalarini keng qamrovli inventarizatsiya boshqaruvi, shtrix-kod skanerlash va ilg'or tahlillar bilan avtomatlashtiring va nazorat qiling."
            }
        },
        clients: {
            title: "Bizning mijozlarimiz",
            subtitle: "Dunyoning yetakchi brendlari ishonadi"
        },
        contact: {
            address: "Toshkent shahri, Bogibuston ko'chasi 186"
        },
        footer: {
            address: "Toshkent shahri, Bogibuston ko'chasi 186"
        }
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Language flags mapping
const languageFlags = {
    en: '🇬🇧',
    ru: '🇷🇺',
    uz: '🇺🇿'
};

// Language names mapping
const languageNames = {
    en: 'English',
    ru: 'Русский',
    uz: "O'zbek"
};

// Initialize language selector
function initLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageSelector = document.querySelector('.language-selector');
    const languageText = document.querySelector('.language-text');
    const languageFlag = languageBtn.querySelector('.language-flag');

    // Set initial language
    updateLanguageDisplay();

    // Toggle dropdown
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageSelector.classList.toggle('active');
        });
    }

    // Handle language selection
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageSelector.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('active');
        }
    });
}

// Update language display
function updateLanguageDisplay() {
    const languageText = document.querySelector('.language-text');
    const languageFlag = document.querySelector('.language-btn .language-flag');
    
    if (languageText) {
        languageText.textContent = translations[currentLanguage].nav.language;
    }
    if (languageFlag) {
        languageFlag.textContent = languageFlags[currentLanguage];
    }
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageDisplay();
    translatePage();
}

// Translate page
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let translation = translations[currentLanguage];
        
        for (let k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Initialize language system when page loads
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelector();
    translatePage();
});

