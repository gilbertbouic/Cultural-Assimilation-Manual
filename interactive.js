document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.querySelector('#quizzes');
    const scenariosContainer = document.querySelector('#scenarios');
    const roleSelectionContainer = document.querySelector('#role-selection');
    const progressContainer = document.querySelector('#progress-container');
    const resetButton = document.querySelector('#reset-progress');
    const generateSnapshotButton = document.querySelector('#generate-snapshot');
    const snapshotCanvas = document.querySelector('#snapshot-canvas');

    let progress = JSON.parse(localStorage.getItem('progress')) || { quizzes: {}, scenarios: [] };

    // Migration: Convert old title-based keys to id-based keys
    function migrateProgress() {
        if (!culturalData || !culturalData.quizzes) return;
        
        let needsMigration = false;
        const newQuizProgress = {};
        
        // Create a mapping from title to id
        const titleToIdMap = {};
        for (const key in culturalData.quizzes) {
            const quiz = culturalData.quizzes[key];
            if (quiz.id && quiz.title) {
                titleToIdMap[quiz.title] = quiz.id;
            }
        }
        
        // Check if any progress keys match titles (old format)
        for (const key in progress.quizzes) {
            if (titleToIdMap[key]) {
                // Old format detected - migrate to id-based key
                needsMigration = true;
                newQuizProgress[titleToIdMap[key]] = progress.quizzes[key];
            } else {
                // Already using id or unknown key - keep as is
                newQuizProgress[key] = progress.quizzes[key];
            }
        }
        
        if (needsMigration) {
            progress.quizzes = newQuizProgress;
            saveProgress();
        }
    }

    function saveProgress() {
        localStorage.setItem('progress', JSON.stringify(progress));
    }

    function displayQuiz(quiz) {
        const quizTitle = document.createElement('h3');
        quizTitle.innerText = quiz.title;
        quizContainer.appendChild(quizTitle);

        if (!progress.quizzes[quiz.id]) {
            progress.quizzes[quiz.id] = { score: 0, total: quiz.questions.length };
        }

        quiz.questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('quiz-question');
            
            const questionText = document.createElement('p');
            questionText.innerText = `${index + 1}. ${question.question}`;
            questionElement.appendChild(questionText);

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('quiz-options');

            const questionName = `question-${index}-${quiz.id}`;

            for (const key in question.options) {
                const optionLabel = document.createElement('label');
                const optionInput = document.createElement('input');
                optionInput.type = 'radio';
                optionInput.name = questionName;
                optionInput.value = key;

                optionLabel.appendChild(optionInput);
                optionLabel.appendChild(document.createTextNode(question.options[key]));
                optionsContainer.appendChild(optionLabel);
            }

            questionElement.appendChild(optionsContainer);
            quizContainer.appendChild(questionElement);

            const feedbackElement = document.createElement('p');
            feedbackElement.classList.add('quiz-feedback');
            questionElement.appendChild(feedbackElement);

            optionsContainer.addEventListener('change', (event) => {
                const selectedOption = event.target.value;
                const previouslyCorrect = event.target.dataset.answeredCorrectly === 'true';

                if (selectedOption === question.correct) {
                    feedbackElement.innerText = "Correct! " + question.explanation;
                    feedbackElement.style.color = 'green';
                    if (!previouslyCorrect) {
                        progress.quizzes[quiz.id].score++;
                        event.target.dataset.answeredCorrectly = 'true';
                    }
                } else {
                    feedbackElement.innerText = `Incorrect. The correct answer is ${question.correct.toUpperCase()}. ${question.explanation}`;
                    feedbackElement.style.color = 'red';
                    if (previouslyCorrect) {
                        progress.quizzes[quiz.id].score--;
                        event.target.dataset.answeredCorrectly = 'false';
                    }
                }
                saveProgress();
                renderProgress();
            });
        });
    }

    function displayScenario(scenario) {
        if (!progress.scenarios.includes(scenario.title)) {
            progress.scenarios.push(scenario.title);
            saveProgress();
            renderProgress();
        }

        const scenarioTitle = document.createElement('h3');
        scenarioTitle.innerText = scenario.title;
        scenariosContainer.appendChild(scenarioTitle);

        scenario.steps.forEach(step => {
            const stepElement = document.createElement('div');
            stepElement.classList.add('scenario-step');

            const stepTitle = document.createElement('h4');
            stepTitle.innerText = step.title;
            stepElement.appendChild(stepTitle);

            const stepDescription = document.createElement('p');
            stepDescription.innerText = step.description;
            stepElement.appendChild(stepDescription);

            const cardsContainer = document.createElement('div');
            cardsContainer.classList.add('scenario-cards');

            const dosCard = createFlipCard('Do\'s', step.dos);
            const dontsCard = createFlipCard('Don\'ts', step.donts);

            cardsContainer.appendChild(dosCard);
            cardsContainer.appendChild(dontsCard);
            stepElement.appendChild(cardsContainer);
            scenariosContainer.appendChild(stepElement);
        });
    }

    function createFlipCard(title, items) {
        const card = document.createElement('div');
        card.classList.add('flip-card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('flip-card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('flip-card-front');
        const frontTitle = document.createElement('h5');
        frontTitle.innerText = title;
        cardFront.appendChild(frontTitle);

        const cardBack = document.createElement('div');
        cardBack.classList.add('flip-card-back');
        const backList = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = item;
            backList.appendChild(listItem);
        });
        cardBack.appendChild(backList);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        return card;
    }

    function renderQuizzes() {
        quizContainer.innerHTML = '<h2>📝 Interactive Quizzes</h2>';
        if (culturalData && culturalData.quizzes) {
            for (const key in culturalData.quizzes) {
                displayQuiz(culturalData.quizzes[key]);
            }
        }
    }

    function renderScenarios() {
        scenariosContainer.innerHTML = '<h2>🎯 Scenario-Based Learning</h2>';
        const userRole = localStorage.getItem('userRole');

        if (scenarios) {
            for (const countryCode in scenarios) {
                const countryScenarios = scenarios[countryCode];
                for (const scenarioKey in countryScenarios) {
                    const scenario = countryScenarios[scenarioKey];
                    if (userRole && scenario.roles && !scenario.roles.includes(userRole)) {
                        continue;
                    }
                    displayScenario(scenario);
                }
            }
        }
    }

    function calculateOverallProgress() {
        let totalScore = 0;
        let totalPossible = 0;

        if (culturalData && culturalData.quizzes) {
            for (const key in culturalData.quizzes) {
                const quiz = culturalData.quizzes[key];
                if (quiz.id && progress.quizzes[quiz.id]) {
                    totalScore += progress.quizzes[quiz.id].score;
                    totalPossible += progress.quizzes[quiz.id].total;
                }
            }
        }

        if (scenarios) {
            let scenarioCount = 0;
            for (const countryCode in scenarios) {
                scenarioCount += Object.keys(scenarios[countryCode]).length;
            }
            totalScore += progress.scenarios.length;
            totalPossible += scenarioCount;
        }

        return totalPossible > 0 ? (totalScore / totalPossible) * 100 : 0;
    }

    function renderProgress() {
        progressContainer.innerHTML = ''; // Clear previous progress

        const overallProgress = calculateOverallProgress();
        const overallProgressBarContainer = document.createElement('div');
        overallProgressBarContainer.classList.add('progress-bar-container');
        const overallProgressBar = document.createElement('div');
        overallProgressBar.classList.add('progress-bar');
        overallProgressBar.style.width = `${overallProgress}%`;
        overallProgressBar.innerText = `${Math.round(overallProgress)}%`;
        overallProgressBarContainer.appendChild(overallProgressBar);
        progressContainer.appendChild(overallProgressBarContainer);

        const quizProgress = document.createElement('div');
        quizProgress.innerHTML = '<h4>Quiz Scores</h4>';
        if (Object.keys(progress.quizzes).length > 0) {
            for (const quizId in progress.quizzes) {
                const quiz = progress.quizzes[quizId];
                const percentage = (quiz.score / quiz.total) * 100;
                
                // Find the quiz title from the ID
                let quizTitle = quizId; // Fallback to ID if title not found
                if (culturalData && culturalData.quizzes) {
                    for (const key in culturalData.quizzes) {
                        if (culturalData.quizzes[key].id === quizId) {
                            quizTitle = culturalData.quizzes[key].title;
                            break;
                        }
                    }
                }
                
                const progressBarContainer = document.createElement('div');
                progressBarContainer.classList.add('progress-bar-container');
                const progressBar = document.createElement('div');
                progressBar.classList.add('progress-bar');
                progressBar.style.width = `${percentage}%`;
                progressBar.innerText = `${Math.round(percentage)}%`;
                quizProgress.appendChild(document.createTextNode(quizTitle));
                progressBarContainer.appendChild(progressBar);
                quizProgress.appendChild(progressBarContainer);
            }
        } else {
            quizProgress.innerHTML += '<p>No quizzes attempted yet.</p>';
        }

        const scenarioProgress = document.createElement('div');
        scenarioProgress.innerHTML = '<h4>Completed Scenarios</h4>';
        if (progress.scenarios.length > 0) {
            const list = document.createElement('ul');
            progress.scenarios.forEach(scenarioTitle => {
                const listItem = document.createElement('li');
                listItem.innerText = scenarioTitle;
                list.appendChild(listItem);
            });
            scenarioProgress.appendChild(list);
        } else {
            scenarioProgress.innerHTML += '<p>No scenarios completed yet.</p>';
        }

        progressContainer.appendChild(quizProgress);
        progressContainer.appendChild(scenarioProgress);

        renderBadges();
    }

    function renderBadges() {
        const badgesContainer = document.createElement('div');
        badgesContainer.innerHTML = '<h4>Badges</h4>';

        let allQuizzesCompleted = true;
        if (culturalData && culturalData.quizzes) {
            for (const key in culturalData.quizzes) {
                const quiz = culturalData.quizzes[key];
                if (!quiz.id || !progress.quizzes[quiz.id] || progress.quizzes[quiz.id].score < progress.quizzes[quiz.id].total) {
                    allQuizzesCompleted = false;
                    break;
                }
            }
        }

        let allScenariosCompleted = true;
        if (scenarios) {
            let scenarioCount = 0;
             for (const countryCode in scenarios) {
                scenarioCount += Object.keys(scenarios[countryCode]).length;
            }
            if (progress.scenarios.length < scenarioCount) {
                allScenariosCompleted = false;
            }
        }

        if (allQuizzesCompleted) {
            const quizBadge = document.createElement('span');
            quizBadge.innerText = '🏆 Quiz Master';
            badgesContainer.appendChild(quizBadge);
        }

        if (allScenariosCompleted) {
            const scenarioBadge = document.createElement('span');
            scenarioBadge.innerText = '🥇 Scenario Expert';
            badgesContainer.appendChild(scenarioBadge);
        }

        if (!allQuizzesCompleted && !allScenariosCompleted) {
            badgesContainer.innerHTML += '<p>No badges earned yet.</p>';
        }

        progressContainer.appendChild(badgesContainer);
    }

    function generateSnapshot() {
        const ctx = snapshotCanvas.getContext('2d');
        
        // Background
        const gradient = ctx.createLinearGradient(0, 0, 800, 400);
        gradient.addColorStop(0, '#4A90E2');
        gradient.addColorStop(1, '#50E3C2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 800, 400);
        
        // Title
        ctx.fillStyle = 'white';
        ctx.font = 'bold 40px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText('My Cultural Snapshot', 400, 60);

        // Progress
        const overallProgress = calculateOverallProgress();
        ctx.font = '60px Poppins';
        ctx.fillText(`${Math.round(overallProgress)}%`, 400, 150);
        ctx.font = '20px Poppins';
        ctx.fillText('Overall Progress', 400, 180);

        // Cultural Title
        let culturalTitle = 'Cultural Novice';
        if (overallProgress > 90) {
            culturalTitle = 'Cultural Guru';
        } else if (overallProgress > 70) {
            culturalTitle = 'Cultural Expert';
        } else if (overallProgress > 50) {
            culturalTitle = 'Cultural Adept';
        } else if (overallProgress > 20) {
            culturalTitle = 'Cultural Explorer';
        }
        ctx.font = 'bold 30px Poppins';
        ctx.fillText(culturalTitle, 400, 250);

        // Badges
        let badgeText = '';
        if (progress.badges && progress.badges.length > 0) {
            badgeText = progress.badges.join(' ');
        }
        ctx.font = '20px Poppins';
        ctx.fillText(badgeText, 400, 300);

        // Footer
        ctx.font = '16px Poppins';
        ctx.fillText('Generated by the Cultural Assimilation Manual', 400, 370);
    }

    roleSelectionContainer.addEventListener('change', (event) => {
        const selectedRole = event.target.value;
        localStorage.setItem('userRole', selectedRole);
        renderScenarios();
    });

    resetButton.addEventListener('click', () => {
        localStorage.removeItem('progress');
        localStorage.removeItem('userRole');
        progress = { quizzes: {}, scenarios: [] };
        const checkedRadio = document.querySelector('input[name="role"]:checked');
        if (checkedRadio) {
            checkedRadio.checked = false;
        }
        renderQuizzes();
        renderScenarios();
        renderProgress();
    });

    generateSnapshotButton.addEventListener('click', generateSnapshot);

    function loadUserRole() {
        const savedRole = localStorage.getItem('userRole');
        if (savedRole) {
            const radioToCheck = document.querySelector(`input[name='role'][value='${savedRole}']`);
            if (radioToCheck) {
                radioToCheck.checked = true;
            }
        }
    }

    // Initial setup
    migrateProgress();
    loadUserRole();
    renderQuizzes();
    renderScenarios();
    renderProgress();
});
