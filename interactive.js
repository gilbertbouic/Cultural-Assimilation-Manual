// Interactive Components for Cultural User Manual

// Quiz System
class CulturalQuiz {
    constructor(quizData) {
        this.quizData = quizData;
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
    }

    render() {
        const container = document.createElement('div');
        container.className = 'quiz-container';
        container.innerHTML = `
            <div class="quiz-header">
                <h3>${this.quizData.title}</h3>
                <div class="quiz-progress">
                    <span>Question ${this.currentQuestion + 1} of ${this.quizData.questions.length}</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(this.currentQuestion / this.quizData.questions.length) * 100}%"></div>
                    </div>
                </div>
            </div>
            <div class="quiz-content" id="quiz-content">
                ${this.renderQuestion()}
            </div>
            <div class="quiz-score hidden" id="quiz-score"></div>
        `;
        return container;
    }

    renderQuestion() {
        const question = this.quizData.questions[this.currentQuestion];
        return `
            <div class="question-card">
                <h4 class="question-text">${question.question}</h4>
                <div class="options-container">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" data-index="${index}">
                            ${option}
                        </button>
                    `).join('')}
                </div>
                <div class="question-feedback hidden" id="feedback"></div>
            </div>
        `;
    }

    handleAnswer(selectedIndex) {
        const question = this.quizData.questions[this.currentQuestion];
        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            this.score++;
        }
        
        this.answers.push({
            question: question.question,
            selected: selectedIndex,
            correct: question.correct,
            isCorrect: isCorrect
        });

        this.showFeedback(isCorrect, question.explanation);
    }

    showFeedback(isCorrect, explanation) {
        const feedback = document.getElementById('feedback');
        feedback.className = 'question-feedback ' + (isCorrect ? 'correct' : 'incorrect');
        feedback.innerHTML = `
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-text">
                <strong>${isCorrect ? 'Correct!' : 'Not quite right'}</strong>
                <p>${explanation}</p>
            </div>
            <button class="next-question-btn" onclick="quizInstance.nextQuestion()">
                ${this.currentQuestion < this.quizData.questions.length - 1 ? 'Next Question' : 'See Results'} →
            </button>
        `;
        feedback.classList.remove('hidden');

        // Disable option buttons
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
        });
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion < this.quizData.questions.length) {
            document.getElementById('quiz-content').innerHTML = this.renderQuestion();
            this.attachEventListeners();
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.quizData.questions.length) * 100);
        let message = '';
        let emoji = '';

        if (percentage >= 90) {
            message = 'Outstanding! You have excellent cultural awareness!';
            emoji = '🌟';
        } else if (percentage >= 70) {
            message = 'Well done! You have good cultural understanding.';
            emoji = '👏';
        } else if (percentage >= 50) {
            message = 'Not bad! Keep learning and you\'ll get there.';
            emoji = '📚';
        } else {
            message = 'Keep studying! Cultural integration takes time.';
            emoji = '💪';
        }

        document.getElementById('quiz-content').innerHTML = `
            <div class="quiz-results">
                <div class="results-emoji">${emoji}</div>
                <h3>Quiz Complete!</h3>
                <div class="score-display">
                    <div class="score-circle">
                        <span class="score-number">${this.score}</span>
                        <span class="score-total">/ ${this.quizData.questions.length}</span>
                    </div>
                    <div class="score-percentage">${percentage}%</div>
                </div>
                <p class="results-message">${message}</p>
                <div class="results-actions">
                    <button class="retry-btn" onclick="quizInstance.retry()">Try Again</button>
                    <button class="review-btn" onclick="quizInstance.reviewAnswers()">Review Answers</button>
                </div>
            </div>
        `;
    }

    retry() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        document.getElementById('quiz-content').innerHTML = this.renderQuestion();
        this.attachEventListeners();
    }

    reviewAnswers() {
        const reviewHTML = `
            <div class="answer-review">
                <h3>Answer Review</h3>
                ${this.answers.map((answer, index) => {
                    const question = this.quizData.questions[index];
                    return `
                        <div class="review-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                            <div class="review-header">
                                <span class="review-icon">${answer.isCorrect ? '✅' : '❌'}</span>
                                <span class="review-number">Question ${index + 1}</span>
                            </div>
                            <p class="review-question">${question.question}</p>
                            <p class="review-your-answer">
                                <strong>Your answer:</strong> ${question.options[answer.selected]}
                            </p>
                            ${!answer.isCorrect ? `
                                <p class="review-correct-answer">
                                    <strong>Correct answer:</strong> ${question.options[answer.correct]}
                                </p>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
                <button class="back-to-results-btn" onclick="quizInstance.showResults()">Back to Results</button>
            </div>
        `;
        document.getElementById('quiz-content').innerHTML = reviewHTML;
    }

    attachEventListeners() {
        document.querySelectorAll('.quiz-option').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.handleAnswer(index);
            });
        });
    }
}

// Dos and Don'ts Card Component
class DosAndDontsCard {
    constructor(data) {
        this.data = data;
        this.isFlipped = false;
    }

    render() {
        const container = document.createElement('div');
        container.className = 'dos-donts-card';
        container.innerHTML = `
            <div class="card-inner ${this.isFlipped ? 'flipped' : ''}">
                <div class="card-front">
                    <div class="card-header dos-header">
                        <h4>✅ DO's</h4>
                    </div>
                    <ul class="card-list">
                        ${this.data.dos.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <button class="flip-card-btn" onclick="flipCard(this)">
                        See DON'Ts →
                    </button>
                </div>
                <div class="card-back">
                    <div class="card-header donts-header">
                        <h4>❌ DON'Ts</h4>
                    </div>
                    <ul class="card-list">
                        ${this.data.donts.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <button class="flip-card-btn" onclick="flipCard(this)">
                        ← See DO's
                    </button>
                </div>
            </div>
        `;
        return container;
    }
}

// Scenario Simulation Component
class ScenarioSimulation {
    constructor(scenarioData) {
        this.scenarioData = scenarioData;
        this.currentStep = 0;
        this.choices = [];
        this.score = 0;
    }

    render() {
        const container = document.createElement('div');
        container.className = 'scenario-simulation';
        container.innerHTML = `
            <div class="simulation-header">
                <h3>🎭 Interactive Scenario</h3>
                <p>${this.scenarioData.title}</p>
            </div>
            <div class="simulation-content" id="simulation-content">
                ${this.renderStep()}
            </div>
        `;
        return container;
    }

    renderStep() {
        const step = this.scenarioData.steps[this.currentStep];
        return `
            <div class="simulation-step">
                <div class="scenario-description">
                    <p>${step.description}</p>
                </div>
                <div class="scenario-choices">
                    <h4>What would you do?</h4>
                    ${step.choices.map((choice, index) => `
                        <button class="choice-btn" data-index="${index}">
                            ${choice.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    handleChoice(choiceIndex) {
        const step = this.scenarioData.steps[this.currentStep];
        const choice = step.choices[choiceIndex];
        
        this.choices.push(choiceIndex);
        this.score += choice.points || 0;

        this.showFeedback(choice);
    }

    showFeedback(choice) {
        const feedback = `
            <div class="choice-feedback ${choice.isGood ? 'positive' : 'negative'}">
                <div class="feedback-icon">${choice.isGood ? '👍' : '👎'}</div>
                <p>${choice.feedback}</p>
                ${choice.culturalNote ? `
                    <div class="cultural-note">
                        <strong>💡 Cultural Insight:</strong>
                        <p>${choice.culturalNote}</p>
                    </div>
                ` : ''}
                <button class="continue-btn" onclick="simulationInstance.nextStep()">
                    Continue →
                </button>
            </div>
        `;
        
        document.getElementById('simulation-content').innerHTML += feedback;
        
        // Disable choice buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
        });
    }

    nextStep() {
        this.currentStep++;
        
        if (this.currentStep < this.scenarioData.steps.length) {
            document.getElementById('simulation-content').innerHTML = this.renderStep();
            this.attachEventListeners();
        } else {
            this.showCompletion();
        }
    }

    showCompletion() {
        document.getElementById('simulation-content').innerHTML = `
            <div class="simulation-complete">
                <h3>Scenario Complete! 🎉</h3>
                <p>You navigated this cultural scenario. Here's your performance:</p>
                <div class="score-summary">
                    <div class="score-item">
                        <span class="score-label">Cultural Awareness Score</span>
                        <span class="score-value">${this.score} points</span>
                    </div>
                </div>
                <button class="restart-simulation-btn" onclick="simulationInstance.restart()">
                    Try Different Choices
                </button>
            </div>
        `;
    }

    restart() {
        this.currentStep = 0;
        this.choices = [];
        this.score = 0;
        document.getElementById('simulation-content').innerHTML = this.renderStep();
        this.attachEventListeners();
    }

    attachEventListeners() {
        document.querySelectorAll('.choice-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.handleChoice(index);
            });
        });
    }
}

// Etiquette Scoreboard
class EtiquetteScoreboard {
    constructor() {
        this.scores = this.loadScores();
    }

    loadScores() {
        try {
            const saved = localStorage.getItem('culturalScores');
            return saved ? JSON.parse(saved) : {
                quizzes: {},
                scenarios: {},
                overall: 0
            };
        } catch (error) {
            console.warn('Failed to load scores from localStorage:', error);
            // Return default structure if parsing fails
            return {
                quizzes: {},
                scenarios: {},
                overall: 0
            };
        }
    }

    saveScores() {
        localStorage.setItem('culturalScores', JSON.stringify(this.scores));
    }

    addQuizScore(quizName, score, total) {
        this.scores.quizzes[quizName] = {
            score: score,
            total: total,
            percentage: Math.round((score / total) * 100),
            date: new Date().toISOString()
        };
        this.updateOverallScore();
        this.saveScores();
    }

    addScenarioScore(scenarioName, score) {
        this.scores.scenarios[scenarioName] = {
            score: score,
            date: new Date().toISOString()
        };
        this.updateOverallScore();
        this.saveScores();
    }

    updateOverallScore() {
        const quizScores = Object.values(this.scores.quizzes).map(q => q.percentage);
        const scenarioScores = Object.values(this.scores.scenarios).map(s => s.score);
        
        const allScores = [...quizScores, ...scenarioScores];
        this.scores.overall = allScores.length > 0 
            ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
            : 0;
    }

    render() {
        const container = document.createElement('div');
        container.className = 'scoreboard-container';
        container.innerHTML = `
            <div class="scoreboard-header">
                <h3>📊 Your Cultural Competency</h3>
                <div class="overall-score">
                    <div class="score-circle-large">
                        <span class="score-number-large">${this.scores.overall}</span>
                        <span class="score-label-small">Overall Score</span>
                    </div>
                </div>
            </div>
            <div class="scoreboard-sections">
                <div class="score-section">
                    <h4>Quiz Scores</h4>
                    ${Object.entries(this.scores.quizzes).length > 0 ? `
                        <ul class="score-list">
                            ${Object.entries(this.scores.quizzes).map(([name, data]) => `
                                <li>
                                    <span class="score-name">${name}</span>
                                    <span class="score-badge">${data.percentage}%</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : '<p class="no-scores">No quiz scores yet. Take a quiz to get started!</p>'}
                </div>
                <div class="score-section">
                    <h4>Scenario Completions</h4>
                    ${Object.entries(this.scores.scenarios).length > 0 ? `
                        <ul class="score-list">
                            ${Object.entries(this.scores.scenarios).map(([name, data]) => `
                                <li>
                                    <span class="score-name">${name}</span>
                                    <span class="score-badge">${data.score} pts</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : '<p class="no-scores">No scenarios completed yet!</p>'}
                </div>
            </div>
            <button class="reset-scores-btn" id="reset-scores-btn">Reset All Scores</button>
        `;
        
        // Attach event listener after rendering
        setTimeout(() => {
            const resetBtn = container.querySelector('#reset-scores-btn');
            if (resetBtn) {
                resetBtn.onclick = () => this.reset();
            }
        }, 0);
        
        return container;
    }

    reset() {
        if (confirm('Are you sure you want to reset all your scores?')) {
            this.scores = {
                quizzes: {},
                scenarios: {},
                overall: 0
            };
            this.saveScores();
            location.reload();
        }
    }
}

// Helper function for card flipping
function flipCard(button) {
    const card = button.closest('.dos-donts-card');
    const cardInner = card.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
}

// Global instances (to be initialized when needed)
let quizInstance = null;
let simulationInstance = null;
let scoreboard = new EtiquetteScoreboard();

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        CulturalQuiz, 
        DosAndDontsCard, 
        ScenarioSimulation, 
        EtiquetteScoreboard 
    };
}
