/**
 * United Kingdom - Cultural Scenarios
 * Scenario-based learning content for the United Kingdom.
 */
(function() {
    'use strict';

    const unitedKingdomScenarios = {
        workplace: {
            id: "scenario_united_kingdom_workplace",
            title: "First Day at a UK Office",
            region: "united_kingdom",
            category: "workplace",
            roles: ["professional", "remote", "entrepreneur"],
            steps: [
                {
                    title: "Arriving at the Office",
                    description: "You arrive at 9:00 AM sharp. Your new manager, Sarah, greets you.",
                    dos: [
                        "Arrive on time or a few minutes early.",
                        "Offer a firm handshake to everyone you are introduced to.",
                        "Use polite greetings like \"Good morning\" and \"Pleased to meet you.\""
                    ],
                    donts: [
                        "Don't be late. Punctuality is important.",
                        "Don't be overly familiar or use informal greetings immediately.",
                        "Don't interrupt conversations to introduce yourself."
                    ]
                },
                {
                    title: "The Morning Team Meeting",
                    description: "You are invited to the daily team meeting. The team discusses ongoing projects.",
                    dos: [
                        "Listen attentively and take notes.",
                        "Wait for a natural pause before asking questions.",
                        "Phrase suggestions politely, e.g., \"Could we perhaps consider...?\""
                    ],
                    donts: [
                        "Don't dominate the conversation on your first day.",
                        "Don't criticize existing processes directly.",
                        "Don't be afraid to ask for clarification if you don't understand something."
                    ]
                },
                {
                    title: "Emailing a Colleague",
                    description: "You need to ask a colleague, David, for some information.",
                    dos: [
                        "Use a clear and concise subject line.",
                        "Start with a polite opening, like \"Hi David,\" or \"Dear David,\"",
                        "Use polite phrasing like \"Would you mind...\" or \"Could you please...\""
                    ],
                    donts: [
                        "Don't be too direct or demanding in your request.",
                        "Don't forget to say \"please\" and \"thank you\".",
                        "Don't send a follow-up email too quickly if you don't get an immediate response."
                    ]
                }
            ]
        }
    };

    // Register this region's scenarios
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('united_kingdom', unitedKingdomScenarios);
    }

})();
