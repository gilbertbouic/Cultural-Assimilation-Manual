// Application State
let currentCountry = null;
let currentCategory = null;

// DOM Elements
const introSection = document.getElementById('intro-section');
const countrySelection = document.getElementById('country-selection');
const categorySelection = document.getElementById('category-selection');
const contentDisplay = document.getElementById('content-display');
const countryNameDisplay = document.getElementById('country-name-display');
const contentTitle = document.getElementById('content-title');
const contentBody = document.getElementById('content-body');

// Buttons
const startBtn = document.getElementById('start-btn');
const backToIntroBtn = document.getElementById('back-to-intro');
const countryButtons = document.querySelectorAll('.country-btn');
const categoryButtons = document.querySelectorAll('.category-btn');
const backToCountriesBtn = document.getElementById('back-to-countries');
const backToCategoriesBtn = document.getElementById('back-to-categories');

// Event Listeners
startBtn.addEventListener('click', showCountrySelection);
backToIntroBtn.addEventListener('click', showIntro);

countryButtons.forEach(btn => {
    btn.addEventListener('click', () => selectCountry(btn.dataset.country));
});

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => selectCategory(btn.dataset.category));
});

backToCountriesBtn.addEventListener('click', showCountrySelection);
backToCategoriesBtn.addEventListener('click', showCategorySelection);

// Functions
function showIntro() {
    currentCountry = null;
    currentCategory = null;
    
    // Remove all background classes
    document.body.classList.remove('country-england', 'country-germany', 'country-france', 'country-sweden');
    document.body.classList.remove('country-selection-active');
    
    // Add intro background
    document.body.classList.add('intro-active');
    
    introSection.classList.remove('hidden');
    countrySelection.classList.add('hidden');
    categorySelection.classList.add('hidden');
    contentDisplay.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Functions
function selectCountry(country) {
    currentCountry = country;
    const countryData = culturalData[country];
    countryNameDisplay.textContent = `${countryData.flag} ${countryData.name}`;
    
    // Show/hide category buttons based on available data for the selected country
    categoryButtons.forEach(btn => {
        const category = btn.dataset.category;
        if (countryData[category]) {
            btn.style.display = '';
        } else {
            btn.style.display = 'none';
        }
    });
    
    // Remove white background and apply country-specific background
    document.body.classList.remove('country-selection-active');
    document.body.classList.remove('country-england', 'country-germany', 'country-france', 'country-sweden');
    document.body.classList.add(`country-${country}`);
    
    countrySelection.classList.add('hidden');
    categorySelection.classList.remove('hidden');
    contentDisplay.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectCategory(category) {
    currentCategory = category;
    const countryData = culturalData[currentCountry];
    const categoryData = countryData[category];
    
    contentTitle.textContent = categoryData.title;
    contentBody.innerHTML = categoryData.content;
    
    categorySelection.classList.add('hidden');
    contentDisplay.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCountrySelection() {
    currentCountry = null;
    currentCategory = null;
    
    // Remove country-specific background and intro-active
    document.body.classList.remove('country-england', 'country-germany', 'country-france', 'country-sweden');
    document.body.classList.remove('intro-active');
    
    // Add white background for country selection
    document.body.classList.add('country-selection-active');
    
    introSection.classList.add('hidden');
    countrySelection.classList.remove('hidden');
    categorySelection.classList.add('hidden');
    contentDisplay.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCategorySelection() {
    currentCategory = null;
    
    categorySelection.classList.remove('hidden');
    contentDisplay.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!contentDisplay.classList.contains('hidden')) {
            showCategorySelection();
        } else if (!categorySelection.classList.contains('hidden')) {
            showCountrySelection();
        } else if (!countrySelection.classList.contains('hidden')) {
            showIntro();
        }
    }
});

// Add animation class when elements become visible
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply initial styles and observe buttons
document.querySelectorAll('.country-btn, .category-btn').forEach((btn, index) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    btn.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
    observer.observe(btn);
});

// Initialize - trigger animations
setTimeout(() => {
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    });
}, 100);

console.log('Cultural User Manual initialized successfully!');
