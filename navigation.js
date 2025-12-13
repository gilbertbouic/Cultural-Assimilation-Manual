// Enhanced Navigation System for Cultural User Manual

// Section visibility management
function showSection(sectionName) {
    // Hide all main sections
    const sections = [
        'intro-section',
        'country-selection',
        'category-selection',
        'content-display',
        'role-selection',
        'scenarios-section',
        'quizzes-section',
        'scoreboard-section'
    ];
    
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });
    
    // Show requested section
    let targetSection = '';
    switch(sectionName) {
        case 'intro':
            targetSection = 'intro-section';
            document.body.className = 'intro-active';
            break;
        case 'scenarios':
            targetSection = 'scenarios-section';
            document.body.className = '';
            break;
        case 'quizzes':
            targetSection = 'quizzes-section';
            document.body.className = '';
            break;
        case 'scoreboard':
            targetSection = 'scoreboard-section';
            document.body.className = '';
            renderScoreboard();
            break;
        case 'roles':
            targetSection = 'role-selection';
            document.body.className = '';
            renderRoleSelection();
            break;
        default:
            targetSection = 'intro-section';
            document.body.className = 'intro-active';
    }
    
    const target = document.getElementById(targetSection);
    if (target) {
        target.classList.remove('hidden');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scenario context display
function showScenarioContext(contextType) {
    const scenarioContent = document.getElementById('scenario-content');
    const context = scenarios[contextType];
    
    if (!context) return;
    
    let html = `
        <div class="scenario-context-detail">
            <h3>${context.title}</h3>
            <p>${context.description}</p>
            
            <div class="context-situations">
    `;
    
    for (const [key, situationGroup] of Object.entries(context.contexts)) {
        html += `
            <div class="situation-group">
                <h4>${situationGroup.title}</h4>
                ${situationGroup.situations.map((situation, idx) => `
                    <div class="situation-card">
                        <h5>📍 ${situation.scenario}</h5>
                        ${situation.dosAndDonts ? `
                            <div class="dos-donts-container" id="dos-donts-${contextType}-${key}-${idx}"></div>
                        ` : ''}
                        ${situation.culturalNuances ? `
                            <div class="cultural-nuances">
                                <h6>🌍 Cultural Nuances</h6>
                                ${Object.entries(situation.culturalNuances).map(([region, nuance]) => `
                                    <div class="nuance-item">
                                        <strong>${region}:</strong> ${nuance}
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    html += `
            </div>
        </div>
    `;
    
    scenarioContent.innerHTML = html;
    
    // Create DosAndDontsCard components after DOM insertion (avoiding script injection)
    for (const [key, situationGroup] of Object.entries(context.contexts)) {
        situationGroup.situations.forEach((situation, idx) => {
            if (situation.dosAndDonts) {
                const containerId = `dos-donts-${contextType}-${key}-${idx}`;
                const container = document.getElementById(containerId);
                if (container) {
                    const card = new DosAndDontsCard(situation.dosAndDonts);
                    container.appendChild(card.render());
                }
            }
        });
    }
}

// Quiz initialization
function startQuiz(quizName) {
    const quizData = quizzes[quizName];
    if (!quizData) {
        console.error('Quiz not found:', quizName);
        return;
    }
    
    quizInstance = new CulturalQuiz(quizData);
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';
    quizContent.appendChild(quizInstance.render());
    quizInstance.attachEventListeners();
    
    // Save to scoreboard when complete
    const originalShowResults = quizInstance.showResults.bind(quizInstance);
    quizInstance.showResults = function() {
        originalShowResults();
        scoreboard.addQuizScore(quizData.title, this.score, this.quizData.questions.length);
    };
}

// Role selection rendering
function renderRoleSelection() {
    const roleGrid = document.getElementById('role-grid');
    if (!roleGrid) return;
    
    roleGrid.innerHTML = '';
    
    for (const [key, profile] of Object.entries(roleProfiles)) {
        const roleCard = document.createElement('div');
        roleCard.className = 'role-card';
        roleCard.onclick = (event) => selectRole(key, event);
        roleCard.innerHTML = `
            <div class="role-icon">${profile.icon}</div>
            <div class="role-title">${profile.title}</div>
        `;
        roleGrid.appendChild(roleCard);
    }
}

// Role selection handler
function selectRole(roleKey, event) {
    localStorage.setItem('selectedRole', roleKey);
    
    // Update UI to show selection
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('selected');
    });
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('selected');
    }
    
    // Show confirmation and redirect
    setTimeout(() => {
        alert(`Profile set to: ${roleProfiles[roleKey].title}\n\nYou'll now see personalized content for your role!`);
        showSection('intro');
    }, 300);
}

// Scoreboard rendering
function renderScoreboard() {
    const scoreboardContent = document.getElementById('scoreboard-content');
    if (!scoreboardContent) return;
    
    scoreboardContent.innerHTML = '';
    scoreboardContent.appendChild(scoreboard.render());
}

// Privacy policy modal
function showPrivacyPolicy() {
    const modal = document.createElement('div');
    modal.className = 'privacy-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Privacy Policy</h2>
                <button class="modal-close" onclick="this.closest('.privacy-modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <h3>🔒 Your Privacy Matters</h3>
                <p>The Cultural User Manual is committed to your privacy:</p>
                
                <h4>What We DON'T Do:</h4>
                <ul>
                    <li>❌ No advertising or ad tracking</li>
                    <li>❌ No third-party analytics</li>
                    <li>❌ No cookies (except essential local storage)</li>
                    <li>❌ No personal data collection</li>
                    <li>❌ No user accounts required</li>
                </ul>
                
                <h4>What We DO:</h4>
                <ul>
                    <li>✅ Store your quiz scores locally (on your device only)</li>
                    <li>✅ Remember your role preference (local storage)</li>
                    <li>✅ Keep all data on your device - we never see it</li>
                    <li>✅ Provide a completely ad-free experience</li>
                </ul>
                
                <h4>Local Storage:</h4>
                <p>We use browser local storage to save your progress and preferences. This data:</p>
                <ul>
                    <li>Stays on your device</li>
                    <li>Is never transmitted to our servers</li>
                    <li>Can be cleared anytime in your browser settings</li>
                </ul>
                
                <h4>Open Source:</h4>
                <p>This project is open source. You can review the code on <a href="https://github.com/gilbertbouic/The-Cultural-User-Manual" target="_blank">GitHub</a> to verify our privacy practices.</p>
                
                <p class="privacy-footer">Last updated: December 2024</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved role
    const savedRole = localStorage.getItem('selectedRole');
    if (savedRole && roleProfiles[savedRole]) {
        console.log('User role:', roleProfiles[savedRole].title);
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            showSection('intro');
        }
    });
});

// Export functions for global access
window.showSection = showSection;
window.showScenarioContext = showScenarioContext;
window.startQuiz = startQuiz;
window.selectRole = selectRole;
window.showPrivacyPolicy = showPrivacyPolicy;
