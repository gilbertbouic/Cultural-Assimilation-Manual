/**
 * Central Europe - Cultural Data
 * Quiz questions and cultural guidance for Central Europe (Germany, Austria, Switzerland, Liechtenstein).
 */
(function() {
    'use strict';

    const centralEuropeData = {
        id: "quiz_central_europe",
        title: "Central Europe Cultural Quiz",
        region: "central_europe",
        category: "general",
        questions: [
            {
                question: "You have a business meeting in Germany at 10:00 AM. What is the best time to arrive?",
                options: {
                    a: "10:15 AM - being a little late is fashionable.",
                    b: "10:00 AM exactly.",
                    c: "9:55 AM - being a few minutes early is best."
                },
                correct: "c",
                explanation: "Punctuality (Pünktlichkeit) is extremely important in Central Europe. Arriving a few minutes early for a business meeting is considered polite and professional."
            },
            {
                question: "You are emailing a new German colleague, Dr. Anna Schmidt, for the first time. How should you address her in the email?",
                options: {
                    a: "Hey Anna,",
                    b: "Dear Anna Schmidt,",
                    c: "Sehr geehrte Frau Dr. Schmidt,"
                },
                correct: "c",
                explanation: "In a professional context in Germany, it is important to use formal address (Sie) and include titles. 'Sehr geehrte Frau Dr. Schmidt,' is the most appropriate and respectful opening."
            },
            {
                question: "You are invited to a dinner party at a colleague's home in Switzerland. What should you bring?",
                options: {
                    a: "A large, expensive gift to show your appreciation.",
                    b: "A small, thoughtful gift, such as a bottle of wine or a box of chocolates.",
                    c: "Nothing - bringing a gift might be seen as an attempt to bribe your colleague."
                },
                correct: "b",
                explanation: "In Switzerland, it is customary to bring a small, thoughtful gift when invited to someone's home for dinner. A bottle of wine, flowers, or a dessert item are all good choices."
            }
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('central_europe', centralEuropeData);
    }

})();
