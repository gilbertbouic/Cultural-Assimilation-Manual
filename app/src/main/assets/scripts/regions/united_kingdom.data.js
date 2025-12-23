/**
 * United Kingdom - Cultural Data
 * Quiz questions and cultural guidance for the United Kingdom.
 */
(function() {
    'use strict';

    const unitedKingdomData = {
        id: "quiz_united_kingdom",
        title: "United Kingdom Cultural Quiz",
        region: "united_kingdom",
        category: "general",
        questions: [
            {
                question: "You arrive at a bus stop where several people are waiting. What is the most appropriate action?",
                options: {
                    a: "Walk to the front to ensure you get on the bus first.",
                    b: "Ask who is last in the queue and stand behind them.",
                    c: "Stand wherever you like; it's first come, first served when the bus arrives."
                },
                correct: "b",
                explanation: "The UK has a strong queuing culture. It is considered very rude to jump the queue. You should always find the back of the line."
            },
            {
                question: "A British colleague tells you your report is 'quite good.' What do they likely mean?",
                options: {
                    a: "The report is excellent and needs no changes.",
                    b: "The report is terrible and they are being sarcastic.",
                    c: "The report is acceptable, but could probably be improved."
                },
                correct: "c",
                explanation: "British people often use understatement. 'Quite good' is a polite way of saying something is acceptable but not brilliant. It's an invitation for you to ask for more detailed feedback."
            },
            {
                question: "You are at a pub with a group of British friends. One of them says, 'It's your round.' What does this mean?",
                options: {
                    a: "It's time to play a round of darts.",
                    b: "It is your turn to buy drinks for everyone in the group.",
                    c: "They are asking you to go around the table and introduce yourself."
                },
                correct: "b",
                explanation: "In British pub culture, it is common to take turns buying a 'round' of drinks for the entire group. This is a key social ritual."
            }
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('united_kingdom', unitedKingdomData);
    }

})();
