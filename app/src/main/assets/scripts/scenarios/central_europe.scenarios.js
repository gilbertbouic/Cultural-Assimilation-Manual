/**
 * Central Europe - Cultural Scenarios
 * Scenario-based learning content for Central Europe (Germany, Austria, Switzerland, Liechtenstein).
 */
(function() {
    'use strict';

    const centralEuropeScenarios = {
        social: {
            id: "scenario_central_europe_social",
            title: "Sunday in a German Neighborhood",
            region: "central_europe",
            category: "social",
            roles: ["student", "spouse", "retiree"],
            steps: [
                {
                    title: "Morning Activities",
                    description: "It is Sunday morning and you decide to do some chores.",
                    dos: [
                        "Enjoy a quiet breakfast.",
                        "Go for a walk or a bike ride.",
                        "Read a book or watch a movie."
                    ],
                    donts: [
                        "Don't mow the lawn or use other loud power tools.",
                        "Don't do any loud DIY projects.",
                        "Don't recycle your glass bottles in the public containers."
                    ]
                },
                {
                    title: "Afternoon Socializing",
                    description: "You meet your neighbors in the shared courtyard of your apartment building.",
                    dos: [
                        "Greet them with a friendly 'Hallo' or 'Guten Tag'.",
                        "Engage in some light small talk about the weather or your weekend plans.",
                        "Respect their privacy and don't ask overly personal questions."
                    ],
                    donts: [
                        "Don't play loud music in the courtyard.",
                        "Don't let your children run around screaming.",
                        "Don't start a barbecue without checking the building rules first."
                    ]
                },
                {
                    title: "Evening Plans",
                    description: "You are thinking about what to do in the evening.",
                    dos: [
                        "Have a quiet dinner at home.",
                        "Watch a movie or a TV show at a reasonable volume.",
                        "If you have guests, ask them to be quiet when leaving late at night."
                    ],
                    donts: [
                        "Don't have a loud party that goes late into the night.",
                        "Don't do your laundry if the machine is in a shared space.",
                        "Don't forget that Sunday is a 'Ruhetag' (quiet day) in Germany."
                    ]
                }
            ]
        }
    };

    // Register this region's scenarios
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('central_europe', centralEuropeScenarios);
    }

})();
