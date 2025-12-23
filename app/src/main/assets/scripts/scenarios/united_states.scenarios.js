/**
 * United States - Cultural Scenarios
 * Scenario-based learning content for the United States.
 */
(function() {
    'use strict';

    const unitedStatesScenarios = {
        workplace: {
            id: "scenario_united_states_workplace",
            title: "First Day at a US Office",
            region: "united_states",
            category: "workplace",
            roles: ["professional", "remote", "entrepreneur"],
            steps: [
                {
                    title: "Arriving at the Office",
                    description: "You arrive for your first day at a US office. Your manager, Dave, comes to greet you.",
                    dos: [
                        "Arrive on time.",
                        "Offer a confident handshake and make eye contact.",
                        "Use your manager's first name: 'Hi Dave, it's great to be here.'"
                    ],
                    donts: [
                        "Don't use formal titles like 'Mr.' or 'Mrs.' unless specifically asked to.",
                        "Don't be afraid to show enthusiasm and a positive attitude.",
                        "Don't wait to be introduced; it's okay to introduce yourself to others."
                    ]
                },
                {
                    title: "The Morning Huddle",
                    description: "You are invited to the daily team huddle to discuss the day's tasks.",
                    dos: [
                        "Participate actively and share your ideas.",
                        "Be direct and to the point when you speak.",
                        "Feel free to ask questions if you are unsure about anything."
                    ],
                    donts: [
                        "Don't be too quiet or passive. Your input is valued.",
                        "Don't be overly modest about your skills or accomplishments.",
                        "Don't be afraid to respectfully disagree with a colleague's idea."
                    ]
                },
                {
                    title: "Asking a Colleague for Help",
                    description: "You need help with a task from a colleague you just met.",
                    dos: [
                        "Go directly to their desk or send them a direct message.",
                        "Clearly and concisely explain what you need.",
                        "Be friendly and appreciative: 'Hey, could you give me a hand with this? I'd really appreciate it.'"
                    ],
                    donts: [
                        "Don't apologize profusely for asking for help.",
                        "Don't beat around the bush. Directness is appreciated.",
                        "Don't forget to thank them for their time and help."
                    ]
                }
            ]
        }
    };

    // Register this region's scenarios
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('united_states', unitedStatesScenarios);
    }

})();
