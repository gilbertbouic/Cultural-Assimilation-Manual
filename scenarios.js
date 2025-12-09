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
    },
    relationshipsRespect: {
        title: "Relationships & Respect",
        questions: [
            {
                question: "What is the age of consent in the UK?",
                options: [
                    "14 years old",
                    "16 years old",
                    "18 years old",
                    "21 years old"
                ],
                correct: 1,
                explanation: "The age of consent in the UK is 16. Sexual contact with anyone under 16 is a serious crime with no exceptions."
            },
            {
                question: "How should you handle rejection when dating in the UK?",
                options: [
                    "Keep trying to change their mind",
                    "Ask their friends to convince them",
                    "Accept it politely and move on",
                    "Wait a few days and ask again"
                ],
                correct: 2,
                explanation: "Polite acceptance and moving on is the only acceptable response. Persistence damages your reputation."
            },
            {
                question: "What is considered appropriate public affection in the UK?",
                options: [
                    "Extended passionate displays of affection",
                    "No physical contact at all",
                    "Holding hands and brief kisses",
                    "Only handholding, no kissing"
                ],
                correct: 2,
                explanation: "Holding hands and brief kisses are acceptable, but extended passionate displays make people uncomfortable."
            },
            {
                question: "What type of compliments are safest in British culture?",
                options: [
                    "Comments about physical appearance",
                    "Comments about body shape or size",
                    "Compliments about choices like clothing or accessories",
                    "Compliments should be avoided entirely"
                ],
                correct: 2,
                explanation: "It's safest to compliment choices (clothing, accessories). Comments about physical appearance can seem forward."
            }
        ]
    },
    publicConductEtiquette: {
        title: "Public & Community Conduct",
        questions: [
            {
                question: "What is the fine for littering in the UK?",
                options: [
                    "£10-£20",
                    "£50-£150 fixed penalty, up to £2,500 in court",
                    "Just a warning for first offense",
                    "Community service only"
                ],
                correct: 1,
                explanation: "Littering carries fixed penalty fines of £50-£150, with court fines up to £2,500 for serious violations."
            },
            {
                question: "On an escalator in London, where should you stand?",
                options: [
                    "Stand left, walk right",
                    "Stand right, walk left",
                    "Stand in the middle",
                    "Either side is fine"
                ],
                correct: 1,
                explanation: "On London Underground escalators, stand right and walk left. This is essential etiquette."
            },
            {
                question: "What is the most important rule about queuing in the UK?",
                options: [
                    "Form orderly queues and never push in",
                    "Queuing is optional",
                    "Elderly people can skip the queue",
                    "You can save spots for friends"
                ],
                correct: 0,
                explanation: "Queuing is sacred in the UK. Always join the back of the queue and never push in."
            },
            {
                question: "When is it generally acceptable to do noisy DIY work?",
                options: [
                    "Anytime, it's your property",
                    "Before 7 AM is best",
                    "Reasonable weekday hours, avoid early Sunday mornings",
                    "Only on weekends"
                ],
                correct: 2,
                explanation: "Keep disruptive DIY work to reasonable weekday hours and avoid noisy activities (drilling, lawn mowing) before 10 AM on Sundays."
            }
        ]
    },
    communicationMindset: {
        title: "Communication & Mindset",
        questions: [
            {
                question: "What does 'That's interesting' often mean in British communication?",
                options: [
                    "They find it genuinely fascinating",
                    "They want to hear more",
                    "They disagree or think it's a terrible idea",
                    "They need time to think about it"
                ],
                correct: 2,
                explanation: "British indirect communication means 'That's interesting' often indicates disagreement or thinking it's a bad idea."
            },
            {
                question: "Which words are essential in every British interaction?",
                options: [
                    "Hello and goodbye only",
                    "Please, thank you, and sorry",
                    "Yes and no",
                    "Formal titles"
                ],
                correct: 1,
                explanation: "'Please,' 'thank you,' and 'sorry' are fundamental to British social interaction and must be used constantly."
            },
            {
                question: "What does 'not bad' typically mean in British understatement?",
                options: [
                    "Actually quite poor",
                    "Exactly average",
                    "Actually quite good or excellent",
                    "Needs improvement"
                ],
                correct: 2,
                explanation: "British understatement means 'not bad' actually means quite good or excellent."
            },
            {
                question: "Which topic should you generally avoid in British small talk?",
                options: [
                    "Weather",
                    "Sports and football",
                    "Money and salary",
                    "Holidays and travel"
                ],
                correct: 2,
                explanation: "Money and salary are very private topics. Never ask what someone earns in the UK."
            }
        ]
    },
    economicIntegration: {
        title: "Economic Integration & Work Culture",
        questions: [
            {
                question: "What is most valued in British work culture?",
                options: [
                    "Brilliant but unreliable performance",
                    "Talking about how hard you work",
                    "Consistent reliability and punctuality",
                    "Working the minimum hours required"
                ],
                correct: 2,
                explanation: "British work culture values consistent reliability and punctuality more than occasional brilliance."
            },
            {
                question: "What does arriving 'on time' to work mean in the UK?",
                options: [
                    "Exactly at start time",
                    "Within 15 minutes of start time",
                    "5-10 minutes early (on-time is borderline late)",
                    "Anytime before lunch"
                ],
                correct: 2,
                explanation: "In British work culture, you should arrive 5-10 minutes early. Being exactly on time is considered borderline late."
            },
            {
                question: "How should you respond to work difficulties?",
                options: [
                    "Complain frequently to show effort",
                    "Complete work despite difficulties with minimal complaining",
                    "Refuse tasks that are too difficult",
                    "Delegate everything to others"
                ],
                correct: 1,
                explanation: "British work culture expects you to 'get on with it' - complete work despite difficulties with minimal complaining."
            },
            {
                question: "What is a major advantage of rural employment in the UK?",
                options: [
                    "Higher wages than cities",
                    "More office jobs available",
                    "Lower cost of living, especially housing",
                    "No need for transportation"
                ],
                correct: 2,
                explanation: "While rural wages are often lower, they're offset by lower cost of living, especially housing costs."
            }
        ]
    },
    healthcareNHS: {
        title: "Healthcare & NHS",
        questions: [
            {
                question: "What is the first step to accessing NHS healthcare?",
                options: [
                    "Go directly to hospital",
                    "Register with a GP (General Practitioner)",
                    "Call 999 for every health issue",
                    "Buy private health insurance"
                ],
                correct: 1,
                explanation: "Registering with a GP practice should be one of the first things you do. Your GP is your gateway to all NHS services."
            },
            {
                question: "Can a GP practice refuse to register you for not having ID or proof of address?",
                options: [
                    "Yes, ID is always required",
                    "Yes, proof of address is mandatory",
                    "No, they cannot refuse for lack of ID or proof of address",
                    "Only if you're not a UK citizen"
                ],
                correct: 2,
                explanation: "GP practices cannot refuse to register you because you don't have ID, proof of address, or an NHS number."
            },
            {
                question: "Which NHS service should you use for urgent but non-life-threatening issues?",
                options: [
                    "Always call 999",
                    "Go directly to A&E",
                    "Use NHS 111 for advice",
                    "Wait for your next GP appointment"
                ],
                correct: 2,
                explanation: "NHS 111 provides advice for urgent but non-life-threatening issues. 999 is for emergencies only."
            },
            {
                question: "What happens if you miss a GP appointment without canceling?",
                options: [
                    "Nothing, appointments are flexible",
                    "You may be charged a fee",
                    "You may forfeit your appointment slot",
                    "You get automatically rescheduled"
                ],
                correct: 2,
                explanation: "Missing appointments without canceling is frowned upon, and you may forfeit your slot. Always cancel if you can't attend."
            }
        ]
    },
    navigatingOfficialdom: {
        title: "Navigating Officialdom",
        questions: [
            {
                question: "When should you register your residence after moving to the UK?",
                options: [
                    "Whenever convenient",
                    "Within the required legal timeframe",
                    "Only if you plan to stay permanently",
                    "Registration is optional"
                ],
                correct: 1,
                explanation: "You must register within required timeframes. Delaying beyond legal deadlines can cause serious problems."
            },
            {
                question: "What should you bring to official appointments?",
                options: [
                    "Just your passport",
                    "Only the documents specifically requested",
                    "All requested documents plus extras and copies",
                    "Nothing, they have everything on file"
                ],
                correct: 2,
                explanation: "Always bring all requested documents plus extras and make copies of everything. Over-preparation is better than under-preparation."
            },
            {
                question: "How should you handle bureaucratic delays and processing times?",
                options: [
                    "Complain loudly to speed things up",
                    "Skip the process and come back later",
                    "Be patient and accept processing times",
                    "Demand immediate service"
                ],
                correct: 2,
                explanation: "Be patient with processing times. Bureaucratic processes take time, and getting frustrated won't help."
            },
            {
                question: "What should you do immediately when starting work in the UK?",
                options: [
                    "Wait for your employer to handle everything",
                    "Register for tax immediately",
                    "Tax registration can wait until year-end",
                    "Only register if earning over a threshold"
                ],
                correct: 1,
                explanation: "Register for tax immediately when starting work. Keep all income and expense records from day one."
            }
        ]
    },
    educationSchools: {
        title: "Education & Schools",
        questions: [
            {
                question: "What is the UK school starting age?",
                options: [
                    "3 years old",
                    "4-5 years old (Reception year)",
                    "6 years old",
                    "7 years old"
                ],
                correct: 1,
                explanation: "Children typically start primary school in Reception year at age 4-5 in the UK."
            },
            {
                question: "What should you do if your child is sick and cannot attend school?",
                options: [
                    "Just keep them home, no need to inform",
                    "Send a note the next day",
                    "Inform the school on the morning of absence",
                    "Only inform for absences longer than a week"
                ],
                correct: 2,
                explanation: "You must inform the school on the morning of any absence. Unexplained absences are taken seriously."
            },
            {
                question: "How should you communicate with teachers about concerns?",
                options: [
                    "Confront them publicly at school gates",
                    "Wait for the annual parent meeting",
                    "Schedule an appointment or use provided communication channels",
                    "Send your child with a verbal message"
                ],
                correct: 2,
                explanation: "Schedule proper appointments or use school communication channels. Don't confront teachers publicly."
            },
            {
                question: "What is the role of parent involvement in UK schools?",
                options: [
                    "Parents should not be involved",
                    "Only attend if specifically requested",
                    "Involvement through PTA, volunteering, and school events is valued",
                    "Teachers handle everything"
                ],
                correct: 2,
                explanation: "Parent involvement through PTA, volunteering, and attending school events is highly valued and helps your child's integration."
            }
        ]
    },
    religionFaith: {
        title: "Religion & Faith",
        questions: [
            {
                question: "How is religion generally viewed in UK society?",
                options: [
                    "Mandatory church attendance expected",
                    "Religion is banned in public",
                    "Considered private; secular society with freedom of religion",
                    "Only Christianity is accepted"
                ],
                correct: 2,
                explanation: "The UK is largely secular with freedom of religion. Religion is considered a private matter, and all faiths are protected."
            },
            {
                question: "Can you request time off for religious observances at work?",
                options: [
                    "No, work always comes first",
                    "Yes, employers must make reasonable accommodations",
                    "Only for Christian holidays",
                    "Only if you're a religious leader"
                ],
                correct: 1,
                explanation: "Employers must make reasonable accommodations for religious observances under UK equality laws."
            },
            {
                question: "How should you discuss religion in the UK?",
                options: [
                    "Proselytize and convert others actively",
                    "Keep it private unless others raise the topic",
                    "Criticize other religions openly",
                    "Religion should never be mentioned"
                ],
                correct: 1,
                explanation: "Religion is considered private in the UK. Keep it to yourself unless others raise the topic, and always respect different beliefs."
            },
            {
                question: "What is the UK's legal stance on religious discrimination?",
                options: [
                    "No protections exist",
                    "Protected only in the workplace",
                    "Illegal under equality laws with strong protections",
                    "Only majority religions are protected"
                ],
                correct: 2,
                explanation: "Religious discrimination is illegal under UK equality laws, with strong protections for all faiths and beliefs."
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
