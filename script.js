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
            dms: "DMS",
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
            title: "Trusted by",
            subtitle: "Teams across industries. Logistics, retail and local commerce rely on Nusra to move faster."
        },
        dms: {
            hero: {
                title: "Delivery Management, simplified.",
                subtitle: "From order to proof of delivery — coordinate drivers, routes, and customers in one platform.",
                ctaDemo: "Request a demo",
                ctaDriverApp: "See Driver App",
                imageCaption: "Warehouse courier delivering parcel — Nusra DMS in use"
            },
            features: {
                dispatch: {
                    title: "Smart Dispatch",
                    text: "Automatically assign orders to drivers based on location, capacity, and availability. Optimize routes for maximum efficiency."
                },
                driverApp: {
                    title: "Free Driver App — for your drivers",
                    text: "Nusra provides a free Driver App to our clients' drivers — covering the entire delivery process from order pickup to Proof of Delivery (POD).",
                    bullet1: "Real-time GPS tracking & navigation",
                    bullet2: "In-app order list & job acceptance",
                    bullet3: "Digital Proof of Delivery with photo & signature",
                    bullet4: "Automatic sync with Nusra DMS (no manual uploads)",
                    cta: "Open driver demo"
                },
                analytics: {
                    title: "Real-time Analytics",
                    text: "Track delivery performance, driver efficiency, and customer satisfaction. Make data-driven decisions to improve operations."
                }
            },
            screenshots: {
                jobListCaption: "Driver app: job list and instant navigation — drivers accept & complete jobs with one tap.",
                navigationCaption: "Live GPS tracking with turn-by-turn navigation and ETA updates."
            }
        },
        modal: {
            title: "Driver App Demo",
            caption1: "Driver app: job list and instant navigation — drivers accept & complete jobs with one tap.",
            caption2: "Live GPS tracking with turn-by-turn navigation and ETA updates."
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
            dms: "DMS",
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
            title: "Нам доверяют",
            subtitle: "Команды из разных отраслей. Логистика, розничная торговля и локальная коммерция полагаются на Nusra для более быстрого движения."
        },
        dms: {
            hero: {
                title: "Управление доставкой, упрощено.",
                subtitle: "От заказа до подтверждения доставки — координируйте водителей, маршруты и клиентов на одной платформе.",
                ctaDemo: "Запросить демо",
                ctaDriverApp: "Посмотреть приложение водителя",
                imageCaption: "Курьер склада доставляет посылку — Nusra DMS в действии"
            },
            features: {
                dispatch: {
                    title: "Умная отправка",
                    text: "Автоматически назначайте заказы водителям на основе местоположения, вместимости и доступности. Оптимизируйте маршруты для максимальной эффективности."
                },
                driverApp: {
                    title: "Бесплатное приложение водителя — для ваших водителей",
                    text: "Nusra предоставляет бесплатное приложение для водителей нашим клиентам — охватывая весь процесс доставки от получения заказа до подтверждения доставки (POD).",
                    bullet1: "GPS отслеживание и навигация в реальном времени",
                    bullet2: "Список заказов в приложении и принятие работы",
                    bullet3: "Цифровое подтверждение доставки с фото и подписью",
                    bullet4: "Автоматическая синхронизация с Nusra DMS (без ручной загрузки)",
                    cta: "Открыть демо приложения"
                },
                analytics: {
                    title: "Аналитика в реальном времени",
                    text: "Отслеживайте производительность доставки, эффективность водителей и удовлетворенность клиентов. Принимайте решения на основе данных для улучшения операций."
                }
            },
            screenshots: {
                jobListCaption: "Приложение водителя: список работ и мгновенная навигация — водители принимают и завершают работу одним нажатием.",
                navigationCaption: "GPS отслеживание в реальном времени с пошаговой навигацией и обновлениями ETA."
            }
        },
        modal: {
            title: "Демо приложения водителя",
            caption1: "Приложение водителя: список работ и мгновенная навигация — водители принимают и завершают работу одним нажатием.",
            caption2: "GPS отслеживание в реальном времени с пошаговой навигацией и обновлениями ETA."
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
            dms: "DMS",
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
            title: "Ishonch bildiriladi",
            subtitle: "Turli sohalardagi jamoalar. Logistika, chakana savdo va mahalliy savdo tezroq harakat qilish uchun Nusra'ga tayanadi."
        },
        dms: {
            hero: {
                title: "Yetkazib berish boshqaruvi, soddalashtirildi.",
                subtitle: "Buyurtmadan yetkazib berish tasdig'igacha — haydovchilar, marshrutlar va mijozlarni bitta platformada muvofiqlashtiring.",
                ctaDemo: "Demo so'rang",
                ctaDriverApp: "Haydovchi ilovasini ko'ring",
                imageCaption: "Ombor yetkazib beruvchisi paket yetkazib bermoqda — Nusra DMS ishlatilmoqda"
            },
            features: {
                dispatch: {
                    title: "Aqlli yuborish",
                    text: "Joylashuv, sig'im va mavjudlikka asoslanib buyurtmalarni avtomatik ravishda haydovchilarga tayinlang. Maksimal samaradorlik uchun marshrutlarni optimallashtiring."
                },
                driverApp: {
                    title: "Bepul haydovchi ilovasi — haydovchilaringiz uchun",
                    text: "Nusra mijozlarining haydovchilariga bepul Haydovchi ilovasini taqdim etadi — buyurtmani olishdan Yetkazib berish tasdig'iga (POD) qadar butun yetkazib berish jarayonini qamrab oladi.",
                    bullet1: "Real vaqtda GPS kuzatish va navigatsiya",
                    bullet2: "Ilova ichidagi buyurtma ro'yxati va ishni qabul qilish",
                    bullet3: "Rasm va imzo bilan raqamli Yetkazib berish tasdig'i",
                    bullet4: "Nusra DMS bilan avtomatik sinxronlash (qo'lda yuklash yo'q)",
                    cta: "Haydovchi demoni ochish"
                },
                analytics: {
                    title: "Real vaqtda tahlil",
                    text: "Yetkazib berish samaradorligi, haydovchi samaradorligi va mijozlar mamnuniyatini kuzating. Operatsiyalarni yaxshilash uchun ma'lumotlarga asoslangan qarorlar qabul qiling."
                }
            },
            screenshots: {
                jobListCaption: "Haydovchi ilovasi: ish ro'yxati va zudlik bilan navigatsiya — haydovchilar ishlarni bitta bosish bilan qabul qiladi va yakunlaydi.",
                navigationCaption: "Qadam-baqadam navigatsiya va ETA yangilanishlari bilan real vaqtda GPS kuzatish."
            }
        },
        modal: {
            title: "Haydovchi ilovasi demo",
            caption1: "Haydovchi ilovasi: ish ro'yxati va zudlik bilan navigatsiya — haydovchilar ishlarni bitta bosish bilan qabul qiladi va yakunlaydi.",
            caption2: "Qadam-baqadam navigatsiya va ETA yangilanishlari bilan real vaqtda GPS kuzatish."
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
    initDriverModal();
});

// Driver App Modal Functionality
function initDriverModal() {
    const modal = document.getElementById('driverModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const driverAppBtn = document.getElementById('driverAppBtn');
    const driverAppFeatureBtn = document.getElementById('driverAppFeatureBtn');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const slides = document.querySelectorAll('.screenshot-slide');
    const indicators = document.querySelectorAll('.indicator-dot');
    
    let currentSlide = 0;

    // Open modal
    function openModal() {
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            // Focus trap - focus on close button
            modalClose.focus();
        }
    }

    // Close modal
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    // Show slide
    function showSlide(index) {
        if (slides.length === 0) return;
        
        currentSlide = index;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }

    // Event listeners
    if (driverAppBtn) {
        driverAppBtn.addEventListener('click', openModal);
    }

    if (driverAppFeatureBtn) {
        driverAppFeatureBtn.addEventListener('click', openModal);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    if (modalPrev) {
        modalPrev.addEventListener('click', () => showSlide(currentSlide - 1));
    }

    if (modalNext) {
        modalNext.addEventListener('click', () => showSlide(currentSlide + 1));
    }

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
        }
    });
}

