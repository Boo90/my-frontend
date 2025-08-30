const langData = {
    "ar": {
        "features": "الميزات",
        "how-it-works": "كيفية العمل",
        "pricing": "الباقات",
        "contact": "اتصل بنا",
        "start-vip": "ابدأ التجربة VIP",
        "hero-title": "تصميم ويب بلمسة VIP",
        "hero-text": "منصة DesignSquad VIP تقدم لك تجربة فريدة تجمع بين الذكاء الاصطناعي المتقدم وأحدث تقنيات التصميم لإنشاء مواقع ويب استثنائية في دقائق",
        "start-free": "ابدأ التجربة المجانية",
        "browse-projects": "استعراض المشاريع"
    },
    "en": {
        "features": "Features",
        "how-it-works": "How It Works",
        "pricing": "Pricing",
        "contact": "Contact Us",
        "start-vip": "Start VIP Trial",
        "hero-title": "Web Design with a VIP Touch",
        "hero-text": "DesignSquad VIP is a unique platform combining advanced AI with the latest design technologies to create stunning websites in minutes.",
        "start-free": "Start Free Trial",
        "browse-projects": "Browse Projects"
    }
};

const langSwitchBtn = document.getElementById('lang-switch');

let currentLang = 'ar';

function updateContent() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = langData[currentLang][key];
    });

    // Update body and html direction
    if (currentLang === 'en') {
        document.body.dir = 'ltr';
        document.querySelector('html').lang = 'en';
    } else {
        document.body.dir = 'rtl';
        document.querySelector('html').lang = 'ar';
    }
}

langSwitchBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langSwitchBtn.textContent = currentLang.toUpperCase();
    updateContent();
});

// Initial content load
updateContent();