// Scenario-based cultural guidance for different contexts
const scenarios = {
    workplace: {
        title: "🏢 Workplace Scenarios",
        description: "Navigate professional situations with cultural awareness",
        contexts: {
            firstDayOffice: {
                title: "Your First Day at the Office",
                situations: [
                    {
                        scenario: "Meeting your team for the first time",
                        dosAndDonts: {
                            dos: [
                                "Arrive 10-15 minutes early",
                                "Prepare a brief introduction about yourself",
                                "Remember names and write them down if needed",
                                "Ask questions about team culture and norms"
                            ],
                            donts: [
                                "Be overly casual in the first meeting",
                                "Dominate the conversation",
                                "Make assumptions about communication styles",
                                "Skip the team lunch if invited"
                            ]
                        },
                        culturalNuances: {
                            england: "Expect understated welcomes and dry humor. Don't be offended by lack of effusiveness.",
                            centralEurope: "Formal introductions with titles. Handshakes are firm and eye contact is important.",
                            scandinavia: "First-name basis from day one. Don't expect elaborate welcomes.",
                            mediterranean: "Warm greetings, possibly cheek kisses. Lunch together is important for bonding."
                        }
                    },
                    {
                        scenario: "Asking for help or clarification",
                        dosAndDonts: {
                            dos: [
                                "Acknowledge you're new and learning",
                                "Ask specific, well-formed questions",
                                "Take notes during explanations",
                                "Follow up with a thank you"
                            ],
                            donts: [
                                "Pretend to understand when you don't",
                                "Ask the same question multiple times without trying to learn",
                                "Interrupt ongoing work without checking if it's a good time",
                                "Dismiss offered help as unnecessary"
                            ]
                        }
                    }
                ]
            },
            meetingEtiquette: {
                title: "Meeting Etiquette",
                situations: [
                    {
                        scenario: "Contributing to team meetings",
                        dosAndDonts: {
                            dos: [
                                "Come prepared with agenda items reviewed",
                                "Wait for appropriate moments to speak",
                                "Support your points with clear reasoning",
                                "Acknowledge others' contributions"
                            ],
                            donts: [
                                "Dominate the discussion",
                                "Interrupt or talk over colleagues",
                                "Check your phone during presentations",
                                "Introduce new topics without relevance"
                            ]
                        },
                        culturalNuances: {
                            england: "Indirectness is common. 'I hear what you're saying' often means disagreement.",
                            centralEurope: "Direct communication expected. Silence means thinking, not agreement.",
                            scandinavia: "Consensus-driven. Everyone's opinion matters equally regardless of rank.",
                            mediterranean: "Animated discussion is normal. Overlap in conversation is acceptable."
                        }
                    }
                ]
            },
            emailCommunication: {
                title: "Email & Digital Communication",
                situations: [
                    {
                        scenario: "Writing professional emails",
                        dosAndDonts: {
                            dos: [
                                "Use appropriate greetings (Dear/Hi based on relationship)",
                                "Keep messages clear and concise",
                                "Use proper grammar and punctuation",
                                "Sign off professionally (Best regards, Kind regards)"
                            ],
                            donts: [
                                "Use excessive exclamation marks",
                                "Write in all caps",
                                "Send emails late at night expecting immediate responses",
                                "Use emojis in formal business communication"
                            ]
                        }
                    }
                ]
            }
        }
    },
    healthcare: {
        title: "🏥 Healthcare & Medical Scenarios",
        description: "Navigate healthcare systems with confidence",
        contexts: {
            doctorVisit: {
                title: "Visiting the Doctor",
                situations: [
                    {
                        scenario: "Booking and attending a GP appointment",
                        dosAndDonts: {
                            dos: [
                                "Book appointments in advance when possible",
                                "Arrive 10 minutes early",
                                "Bring all relevant medical documents",
                                "Prepare a list of symptoms and concerns"
                            ],
                            donts: [
                                "Miss appointments without canceling",
                                "Expect walk-in availability for non-emergencies",
                                "Demand specific treatments or medications",
                                "Withhold important medical history"
                            ]
                        },
                        culturalNuances: {
                            england: "GP is your gateway to all healthcare. Use NHS 111 for advice, 999 for emergencies only.",
                            centralEurope: "Appointments are strict. Bring your insurance card to every visit.",
                            scandinavia: "Healthcare is largely digital. Book online and use video consultations when possible.",
                            mediterranean: "Relationships matter. Having a regular doctor who knows you is valuable."
                        }
                    }
                ]
            },
            pharmacy: {
                title: "Using Pharmacy Services",
                situations: [
                    {
                        scenario: "Getting prescriptions filled",
                        dosAndDonts: {
                            dos: [
                                "Understand prescription charges in your country",
                                "Ask pharmacist for advice on minor ailments",
                                "Keep prescription records organized",
                                "Set up repeat prescription systems if needed"
                            ],
                            donts: [
                                "Expect immediate availability of all medications",
                                "Argue about prescription charges",
                                "Self-diagnose serious conditions",
                                "Skip doses or alter prescribed amounts"
                            ]
                        }
                    }
                ]
            }
        }
    },
    bureaucracy: {
        title: "🏛️ Bureaucracy & Official Procedures",
        description: "Handle official matters efficiently",
        contexts: {
            registration: {
                title: "Registration & Documentation",
                situations: [
                    {
                        scenario: "Registering residence",
                        dosAndDonts: {
                            dos: [
                                "Register within required timeframes",
                                "Bring all requested documents plus extras",
                                "Make copies of everything",
                                "Be patient with processing times"
                            ],
                            donts: [
                                "Delay registration beyond legal deadlines",
                                "Lose your registration confirmation",
                                "Get frustrated with bureaucratic processes",
                                "Skip reading official communications"
                            ]
                        },
                        culturalNuances: {
                            england: "Council registration required. Keep proof of address documents.",
                            centralEurope: "Anmeldung/registration is mandatory and strict. Do this immediately.",
                            scandinavia: "Digital systems make this easier. Get your personal number ASAP.",
                            mediterranean: "May require multiple visits. Bring patience and all possible documents."
                        }
                    }
                ]
            },
            taxAndFinance: {
                title: "Tax & Financial Administration",
                situations: [
                    {
                        scenario: "Setting up tax registration",
                        dosAndDonts: {
                            dos: [
                                "Register for tax immediately when starting work",
                                "Keep all income and expense records",
                                "File tax returns on time",
                                "Seek professional help if needed"
                            ],
                            donts: [
                                "Ignore tax obligations",
                                "Miss filing deadlines",
                                "Mix personal and business finances",
                                "Assume your home country tax rules apply"
                            ]
                        }
                    }
                ]
            }
        }
    },
    socialGatherings: {
        title: "🎉 Social Gatherings & Events",
        description: "Navigate social situations with cultural awareness",
        contexts: {
            dinner: {
                title: "Dinner Invitations",
                situations: [
                    {
                        scenario: "Being invited to someone's home for dinner",
                        dosAndDonts: {
                            dos: [
                                "RSVP promptly",
                                "Bring a host gift (wine, flowers, dessert)",
                                "Arrive on time (or fashionably late where appropriate)",
                                "Offer to help with dishes or cleanup"
                            ],
                            donts: [
                                "Arrive empty-handed",
                                "Be excessively late without notice",
                                "Criticize the food",
                                "Overstay your welcome"
                            ]
                        },
                        culturalNuances: {
                            england: "Arrive 10-15 minutes late. Compliment the host. Offer help but don't insist.",
                            centralEurope: "Punctuality is crucial. Bring good quality gifts. Remove shoes if indicated.",
                            scandinavia: "Arrive exactly on time. Bring flowers (unwrap them first). Remove shoes always.",
                            mediterranean: "Slight lateness acceptable. Meals are long social events. Compliment enthusiastically."
                        }
                    }
                ]
            },
            pubCulture: {
                title: "Pub & Bar Etiquette",
                situations: [
                    {
                        scenario: "Going to the pub with colleagues",
                        dosAndDonts: {
                            dos: [
                                "Participate in 'rounds' system where applicable",
                                "Know your drinking limits",
                                "Engage in friendly conversation",
                                "Say goodbye when leaving"
                            ],
                            donts: [
                                "Skip your round",
                                "Get excessively drunk",
                                "Discuss sensitive work matters",
                                "Sneak away without saying goodbye (Irish goodbye)"
                            ]
                        },
                        culturalNuances: {
                            england: "Rounds system is important. Don't lean on the bar. Queue properly.",
                            centralEurope: "Beer culture is serious. Quality over quantity.",
                            scandinavia: "Alcohol is expensive. Pre-drinking is common.",
                            mediterranean: "Wine with meals. Coffee culture may be stronger than alcohol."
                        }
                    }
                ]
            }
        }
    }
};

// Quiz questions for cultural knowledge testing
const quizzes = {
    englandBasics: {
        title: "United Kingdom Cultural Basics",
        questions: [
            {
                question: "What does 'quite nice' typically mean in British English?",
                options: [
                    "Average or mediocre",
                    "Very good or excellent",
                    "Slightly below average",
                    "Terrible"
                ],
                correct: 1,
                explanation: "British understatement means 'quite nice' often indicates something very good!"
            },
            {
                question: "What should you do if someone bumps into you?",
                options: [
                    "Ignore them completely",
                    "Say 'sorry' even though it wasn't your fault",
                    "Demand an apology",
                    "Bump them back"
                ],
                correct: 1,
                explanation: "The British apologize constantly, even when not at fault. It's a social lubricant!"
            },
            {
                question: "In a pub, what is the 'rounds' system?",
                options: [
                    "Ordering food in circular portions",
                    "Taking turns to buy drinks for the group",
                    "Walking around the pub to find seats",
                    "Playing games in a circle"
                ],
                correct: 1,
                explanation: "Buying rounds means each person takes turns buying drinks for everyone in the group."
            },
            {
                question: "What is the most sacred rule of public transport?",
                options: [
                    "Always offer your seat",
                    "Never make eye contact",
                    "Queue properly and let people off before getting on",
                    "Talk loudly on your phone"
                ],
                correct: 2,
                explanation: "Queuing is sacred in the UK, and letting people exit before boarding is fundamental etiquette."
            }
        ]
    },
    workplaceEtiquette: {
        title: "Workplace Cultural Etiquette",
        questions: [
            {
                question: "In Scandinavian workplaces, what is expected regarding hierarchy?",
                options: [
                    "Strict adherence to titles and formal address",
                    "Flat hierarchy with first-name basis for all",
                    "No communication with superiors",
                    "Hierarchy only matters during meetings"
                ],
                correct: 1,
                explanation: "Scandinavian workplaces are notably egalitarian with flat hierarchies and first-name culture."
            },
            {
                question: "How should you address disagreement in German workplace meetings?",
                options: [
                    "Hint indirectly and hope they understand",
                    "Wait until after the meeting to complain",
                    "State your disagreement directly but professionally",
                    "Agree publicly but ignore privately"
                ],
                correct: 2,
                explanation: "German workplace culture values direct, honest communication including respectful disagreement."
            },
            {
                question: "What does 'let's keep this in mind' typically mean in British workplace speak?",
                options: [
                    "We will definitely implement this idea",
                    "This is a good idea we should prioritize",
                    "We're probably not going to do this",
                    "Someone should write this down"
                ],
                correct: 2,
                explanation: "British workplace communication is often indirect. This phrase usually means polite dismissal."
            }
        ]
    }
};

// Role-based guidance configurations
const roleProfiles = {
    student: {
        title: "International Student",
        icon: "🎓",
        focusAreas: ["education", "socializing", "budgeting", "accommodation"],
        relevantScenarios: ["university", "studentHousing", "studyGroups", "studentLife"]
    },
    remoteWorker: {
        title: "Remote Worker",
        icon: "💻",
        focusAreas: ["digitalCommunication", "timeManagement", "networking", "workLifeBalance"],
        relevantScenarios: ["virtualMeetings", "asyncCommunication", "coworking", "isolation"]
    },
    spouse: {
        title: "Trailing Spouse/Partner",
        icon: "👨‍👩‍👧",
        focusAreas: ["socialIntegration", "localServices", "communityBuilding", "languageLearning"],
        relevantScenarios: ["makingFriends", "childcare", "localCommunity", "volunteering"]
    },
    professional: {
        title: "Working Professional",
        icon: "💼",
        focusAreas: ["workplaceCulture", "networking", "careerDevelopment", "businessEtiquette"],
        relevantScenarios: ["workplace", "networking", "businessMeetings", "officeEtiquette"]
    },
    entrepreneur: {
        title: "Entrepreneur/Business Owner",
        icon: "🚀",
        focusAreas: ["businessCulture", "networking", "regulations", "customerRelations"],
        relevantScenarios: ["businessSetup", "clientMeetings", "negotiation", "marketing"]
    },
    retiree: {
        title: "Retiree",
        icon: "🌅",
        focusAreas: ["healthcare", "socialServices", "leisureActivities", "communityIntegration"],
        relevantScenarios: ["healthcare", "hobbies", "volunteerWork", "socialClubs"]
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scenarios, quizzes, roleProfiles };
}
