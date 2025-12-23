/**
 * United States - Cultural Data
 * Quiz questions and cultural guidance for the United States.
 */
(function() {
    'use strict';

    const unitedStatesData = {
        id: "quiz_united_states",
        title: "United States Cultural Quiz",
        region: "united_states",
        category: "general",
        questions: [
            {
                question: "You are meeting your new American manager, John Smith, for the first time. How should you greet him?",
                options: {
                    a: "Good morning, Mr. Smith. It is a pleasure to make your acquaintance.",
                    b: "Hey John, what's up?",
                    c: "Good morning, John. It's great to meet you."
                },
                correct: "c",
                explanation: "American culture is generally informal. While a very formal or very informal greeting might be acceptable in some contexts, a friendly and polite greeting using the first name is usually the safest and most common approach."
            },
            {
                question: "Your American colleague says, 'I'll be honest with you...' before giving you feedback. What does this likely mean?",
                options: {
                    a: "They are about to be rude and insulting.",
                    b: "They are preparing to give you direct, straightforward feedback and want to ensure you are ready for it.",
                    c: "They have been lying to you before this point."
                },
                correct: "b",
                explanation: "Americans tend to favor direct communication. This phrase is often used as a polite way to signal that they are about to be very direct and want to be helpful, not to be rude."
            },
            {
                question: "You have finished a meal at a restaurant in the US, and the server brings you the bill. What is the standard practice for tipping?",
                options: {
                    a: "A tip is not necessary, as the server's wage is included in the bill.",
                    b: "A tip of around 15-20% of the bill is expected for good service.",
                    c: "You should only tip if the service was exceptional."
                },
                correct: "b",
                explanation: "Tipping is a standard and expected practice in the United States. Service staff often rely on tips for a significant portion of their income. A tip of 15-20% is customary for good service."
            }
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('united_states', unitedStatesData);
    }

})();
