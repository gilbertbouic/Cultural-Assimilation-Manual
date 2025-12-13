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
                                "Acknowledge others' contributions",
                                "Take notes on action items",
                                "Follow up on commitments made"
                            ],
                            donts: [
                                "Dominate the discussion",
                                "Interrupt or talk over colleagues",
                                "Check your phone during presentations",
                                "Introduce new topics without relevance",
                                "Arrive late without apology",
                                "Leave early without explanation"
                            ]
                        },
                        culturalNuances: {
                            england: "Indirectness is common. 'I hear what you're saying' often means disagreement.",
                            centralEurope: "Direct communication expected. Silence means thinking, not agreement.",
                            scandinavia: "Consensus-driven. Everyone's opinion matters equally regardless of rank.",
                            mediterranean: "Animated discussion is normal. Overlap in conversation is acceptable."
                        }
                    },
                    {
                        scenario: "Video conference etiquette",
                        dosAndDonts: {
                            dos: [
                                "Test technology before the meeting",
                                "Use a professional background or blur",
                                "Mute when not speaking",
                                "Look at the camera when speaking",
                                "Dress professionally from waist up",
                                "Have good lighting on your face"
                            ],
                            donts: [
                                "Eat during video calls",
                                "Have distracting backgrounds",
                                "Multitask obviously",
                                "Forget to unmute when speaking",
                                "Attend from bed or inappropriate locations",
                                "Have poor lighting making you hard to see"
                            ]
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
                                "Sign off professionally (Best regards, Kind regards)",
                                "Include clear subject lines",
                                "Respond within 24 hours"
                            ],
                            donts: [
                                "Use excessive exclamation marks",
                                "Write in all caps",
                                "Send emails late at night expecting immediate responses",
                                "Use emojis in formal business communication",
                                "Reply-all unnecessarily",
                                "Forward without context"
                            ]
                        }
                    },
                    {
                        scenario: "Using instant messaging at work",
                        dosAndDonts: {
                            dos: [
                                "Set status to indicate availability",
                                "Keep messages professional",
                                "Use threads to organize conversations",
                                "Respect 'Do Not Disturb' status",
                                "Use appropriate channels for topics",
                                "Respond within reasonable time during work hours"
                            ],
                            donts: [
                                "Message people constantly without regard to their status",
                                "Share sensitive information via chat",
                                "Use excessive GIFs or memes",
                                "Expect instant responses outside work hours",
                                "Have important discussions that should be in email",
                                "Send 'hello' and wait for response before asking question"
                            ]
                        }
                    }
                ]
            },
            presentations: {
                title: "Presentations & Public Speaking",
                situations: [
                    {
                        scenario: "Giving workplace presentations",
                        dosAndDonts: {
                            dos: [
                                "Practice your presentation beforehand",
                                "Prepare for technical difficulties",
                                "Start with clear objectives",
                                "Use visual aids appropriately",
                                "Engage your audience with questions",
                                "End with clear takeaways and next steps"
                            ],
                            donts: [
                                "Read slides word-for-word",
                                "Go over allocated time",
                                "Use too much jargon",
                                "Ignore audience questions",
                                "Have cluttered, text-heavy slides",
                                "Turn your back to the audience"
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
                                "Set up repeat prescription systems if needed",
                                "Check medication instructions carefully",
                                "Ask about potential side effects"
                            ],
                            donts: [
                                "Expect immediate availability of all medications",
                                "Argue about prescription charges",
                                "Self-diagnose serious conditions",
                                "Skip doses or alter prescribed amounts",
                                "Share prescription medications",
                                "Ignore pharmacist's advice"
                            ]
                        }
                    }
                ]
            },
            mentalHealth: {
                title: "Mental Health Services",
                situations: [
                    {
                        scenario: "Accessing mental health support",
                        dosAndDonts: {
                            dos: [
                                "Talk to your GP as first step",
                                "Be honest about your symptoms",
                                "Ask about available services and waiting times",
                                "Consider both NHS and private options",
                                "Use helplines for immediate support",
                                "Follow through with recommended treatments"
                            ],
                            donts: [
                                "Minimize your symptoms to appear 'strong'",
                                "Wait until crisis point to seek help",
                                "Stop medication without consulting doctor",
                                "Be ashamed to ask for help",
                                "Ignore warning signs in yourself or others",
                                "Dismiss therapy as 'not for you'"
                            ]
                        },
                        culturalNuances: {
                            england: "Mental health increasingly accepted. NHS provides services. Use IAPT for therapy referral.",
                            centralEurope: "Professional support available. Less stigma than past. Private options common.",
                            scandinavia: "Mental health support strong. Work-life balance emphasized. Open discussion encouraged.",
                            mediterranean: "Growing awareness. Family support important. Professional services expanding."
                        }
                    }
                ]
            },
            specialists: {
                title: "Seeing Specialists",
                situations: [
                    {
                        scenario: "Attending specialist appointments",
                        dosAndDonts: {
                            dos: [
                                "Bring referral letter from GP",
                                "Arrive with all medical records and test results",
                                "Write down questions beforehand",
                                "Take notes during the appointment",
                                "Ask about next steps and follow-up",
                                "Understand treatment options and timelines"
                            ],
                            donts: [
                                "Attend without proper referral",
                                "Be late for appointments",
                                "Withhold medical history",
                                "Forget to ask about costs (if private)",
                                "Ignore follow-up appointments",
                                "Self-discharge against medical advice"
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
                                "Seek professional help if needed",
                                "Understand tax brackets and allowances",
                                "Keep correspondence from tax authorities"
                            ],
                            donts: [
                                "Ignore tax obligations",
                                "Miss filing deadlines",
                                "Mix personal and business finances",
                                "Assume your home country tax rules apply",
                                "Ignore letters from tax authorities",
                                "Claim false deductions"
                            ]
                        }
                    }
                ]
            },
            visaImmigration: {
                title: "Visa & Immigration Matters",
                situations: [
                    {
                        scenario: "Managing visa requirements",
                        dosAndDonts: {
                            dos: [
                                "Keep track of visa expiry dates",
                                "Apply for extensions well in advance",
                                "Maintain required documentation",
                                "Report address changes if required",
                                "Understand your visa conditions and restrictions",
                                "Keep copies of all immigration documents"
                            ],
                            donts: [
                                "Let visa expire",
                                "Work beyond visa restrictions",
                                "Ignore correspondence from immigration",
                                "Travel without proper documentation",
                                "Provide false information",
                                "Miss biometric appointments"
                            ]
                        }
                    }
                ]
            },
            utilities: {
                title: "Setting Up Utilities",
                situations: [
                    {
                        scenario: "Connecting utilities and services",
                        dosAndDonts: {
                            dos: [
                                "Set up utilities before moving in if possible",
                                "Take meter readings on moving day",
                                "Compare providers and tariffs",
                                "Set up direct debit payments",
                                "Understand contract terms and cancellation policies",
                                "Keep records of all communications"
                            ],
                            donts: [
                                "Assume utilities transfer automatically",
                                "Ignore final bills from previous address",
                                "Sign long contracts without reading terms",
                                "Forget to notify when moving out",
                                "Leave bills unpaid",
                                "Share utility accounts with strangers"
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
                                "Say goodbye when leaving",
                                "Order at the bar (not table service)",
                                "Respect personal space in crowded venues"
                            ],
                            donts: [
                                "Skip your round",
                                "Get excessively drunk",
                                "Discuss sensitive work matters",
                                "Sneak away without saying goodbye (Irish goodbye)",
                                "Be loud or disruptive",
                                "Pressure others to drink more"
                            ]
                        },
                        culturalNuances: {
                            england: "Rounds system is important. Don't lean on the bar. Queue properly.",
                            centralEurope: "Beer culture is serious. Quality over quantity. Toast properly.",
                            scandinavia: "Alcohol is expensive. Pre-drinking is common. Know your limits.",
                            mediterranean: "Wine with meals. Coffee culture may be stronger than alcohol. Social, not excessive."
                        }
                    }
                ]
            },
            celebrations: {
                title: "Celebrations & Gift-Giving",
                situations: [
                    {
                        scenario: "Birthday and holiday celebrations",
                        dosAndDonts: {
                            dos: [
                                "Acknowledge colleagues' birthdays",
                                "Contribute to group gifts when appropriate",
                                "Respect different holiday traditions",
                                "Bring treats if it's your birthday (some cultures)",
                                "Send cards or messages for major holidays",
                                "Be inclusive of all celebrations"
                            ],
                            donts: [
                                "Assume everyone celebrates the same holidays",
                                "Give overly expensive or inappropriate gifts",
                                "Force participation in celebrations",
                                "Forget to thank gift-givers",
                                "Make holidays all about your religion",
                                "Ignore office birthday traditions"
                            ]
                        }
                    },
                    {
                        scenario: "Wedding and formal event invitations",
                        dosAndDonts: {
                            dos: [
                                "RSVP by the deadline",
                                "Follow dress code specified",
                                "Give gifts from registry if provided",
                                "Arrive on time",
                                "Stay for the ceremony and meal",
                                "Thank hosts before leaving"
                            ],
                            donts: [
                                "Bring uninvited guests",
                                "Wear white to weddings (unless bride)",
                                "Get drunk and cause scenes",
                                "Leave immediately after dinner",
                                "Complain about food or venue",
                                "Post photos before the couple does"
                            ]
                        }
                    }
                ]
            },
            dating: {
                title: "Dating & Romantic Social Situations",
                situations: [
                    {
                        scenario: "Dating etiquette and expectations",
                        dosAndDonts: {
                            dos: [
                                "Be honest about your intentions",
                                "Respect boundaries and consent",
                                "Split bills or take turns paying",
                                "Communicate clearly about expectations",
                                "Be punctual for dates",
                                "Accept rejection gracefully"
                            ],
                            donts: [
                                "Pressure anyone into activities",
                                "Move too fast without consent",
                                "Play games or be dishonest",
                                "Discuss marriage on first dates",
                                "Stalk on social media excessively",
                                "Ghost people without explanation"
                            ]
                        },
                        culturalNuances: {
                            england: "Dating apps common. Split bills increasingly normal. Reserved at first.",
                            centralEurope: "More traditional gender roles may exist. Direct communication valued.",
                            scandinavia: "Very egalitarian. Equality expected. Casual dating common.",
                            mediterranean: "Family involvement earlier. More traditional courtship in some areas."
                        }
                    }
                ]
            }
        }
    },
    teamOnboarding: {
        title: "🏢 Team Onboarding & Corporate Integration",
        description: "Navigate your first weeks at a new company with confidence",
        contexts: {
            firstDay: {
                title: "Your First Day at Work",
                situations: [
                    {
                        scenario: "Arriving and meeting the team",
                        dosAndDonts: {
                            dos: [
                                "Arrive 10-15 minutes early",
                                "Bring required documents (ID, bank details, etc.)",
                                "Smile, make eye contact, and offer handshakes",
                                "Write down names and key information",
                                "Ask where facilities are (toilets, kitchen, etc.)",
                                "Accept lunch invitations"
                            ],
                            donts: [
                                "Rush out at exactly 5 PM on your first day",
                                "Decline all social invitations",
                                "Pretend to know things you don't",
                                "Check your phone constantly during introductions",
                                "Skip bringing lunch or lunch money",
                                "Wear overly casual clothing"
                            ]
                        },
                        culturalNuances: {
                            england: "Expect understated welcomes. British colleagues may seem reserved but are observing you politely.",
                            centralEurope: "Formal introductions with handshakes. Use titles (Herr/Frau) until invited to use first names.",
                            scandinavia: "First-name basis immediately. Casual but professional atmosphere. Coffee breaks are important.",
                            mediterranean: "Warmer greetings. Lunch together is expected and important for bonding. Later work hours common."
                        }
                    },
                    {
                        scenario: "Learning office systems and processes",
                        dosAndDonts: {
                            dos: [
                                "Take detailed notes during training",
                                "Ask clarifying questions",
                                "Request access to all necessary systems early",
                                "Review company handbook and policies",
                                "Set up your workspace thoughtfully",
                                "Thank people who help you"
                            ],
                            donts: [
                                "Assume systems work like your previous company",
                                "Skip reading documentation",
                                "Interrupt busy colleagues repeatedly",
                                "Download unauthorized software",
                                "Share passwords or credentials",
                                "Complain about systems on day one"
                            ]
                        }
                    }
                ]
            },
            communicationStyle: {
                title: "Mastering Workplace Communication",
                situations: [
                    {
                        scenario: "Understanding indirect communication",
                        dosAndDonts: {
                            dos: [
                                "Listen for subtle cues and hints",
                                "Ask 'Is there anything else I should consider?'",
                                "Soften direct statements with 'perhaps' or 'maybe'",
                                "Use 'Could you possibly...' for requests",
                                "Pay attention to tone and context",
                                "Confirm understanding: 'Just to clarify...'"
                            ],
                            donts: [
                                "Take everything literally",
                                "Be blunt in disagreement",
                                "Demand rather than request",
                                "Interrupt or talk over others",
                                "Ignore nonverbal cues",
                                "Assume 'quite good' means average"
                            ]
                        },
                        culturalNuances: {
                            england: "'Interesting' often means disagreement. 'With respect...' signals strong disagreement.",
                            centralEurope: "More direct is acceptable. Silence in meetings means thinking, not agreement.",
                            scandinavia: "Consensus-driven. Everyone's input valued equally. Long silences are normal.",
                            mediterranean: "Animated discussion expected. Some overlap in conversation is normal and friendly."
                        }
                    },
                    {
                        scenario: "Email and digital communication",
                        dosAndDonts: {
                            dos: [
                                "Use appropriate greetings (Dear/Hi based on relationship)",
                                "Include clear subject lines",
                                "Use please and thank you throughout",
                                "Respond within 24 hours",
                                "Proofread for grammar and tone",
                                "Set out-of-office when away"
                            ],
                            donts: [
                                "Use excessive exclamation marks",
                                "Send emails late at night expecting immediate response",
                                "Write in all caps",
                                "Use emojis in formal business communication",
                                "CC everyone unnecessarily",
                                "Reply-all inappropriately"
                            ]
                        }
                    }
                ]
            },
            teamIntegration: {
                title: "Building Team Relationships",
                situations: [
                    {
                        scenario: "Coffee breaks and informal networking",
                        dosAndDonts: {
                            dos: [
                                "Accept coffee/tea invitations",
                                "Offer to make rounds occasionally",
                                "Engage in friendly small talk",
                                "Join colleagues for lunch sometimes",
                                "Show interest in their work",
                                "Remember personal details they share"
                            ],
                            donts: [
                                "Always eat lunch alone at your desk",
                                "Never reciprocate tea/coffee offers",
                                "Only talk about work",
                                "Decline every social invitation",
                                "Dominate conversations",
                                "Complain constantly"
                            ]
                        },
                        culturalNuances: {
                            england: "Tea rounds are important rituals. Weather chat is essential small talk.",
                            centralEurope: "Coffee breaks are scheduled. More structured than casual.",
                            scandinavia: "Fika (coffee break) is sacred. Provides work-life balance.",
                            mediterranean: "Long lunch breaks. Meals are social and relationship-building."
                        }
                    },
                    {
                        scenario: "After-work socializing",
                        dosAndDonts: {
                            dos: [
                                "Attend occasionally (shows team commitment)",
                                "Participate in the rounds system at pubs",
                                "Know and respect your alcohol limits",
                                "Engage in friendly conversation",
                                "Leave after 1-2 hours if needed",
                                "Say goodbye when leaving"
                            ],
                            donts: [
                                "Never attend any social events",
                                "Get excessively drunk",
                                "Skip your round at the pub",
                                "Discuss sensitive work matters",
                                "Leave without saying goodbye",
                                "Pressure non-drinkers to drink"
                            ]
                        }
                    }
                ]
            },
            languagePractice: {
                title: "Essential Office Language Practice",
                situations: [
                    {
                        scenario: "Using common office phrases",
                        dosAndDonts: {
                            dos: [
                                "Practice greetings: 'Good morning', 'How are you?'",
                                "Master polite requests: 'Would you mind...?'",
                                "Learn meeting phrases: 'Can I jump in here?'",
                                "Use 'please', 'thank you', 'sorry' frequently",
                                "Ask for clarification: 'Just to confirm...'",
                                "Practice small talk about weather, weekends"
                            ],
                            donts: [
                                "Use overly formal or archaic language",
                                "Skip pleasantries and jump to business",
                                "Use slang before understanding it",
                                "Speak in very long, complex sentences",
                                "Avoid asking for language help",
                                "Assume perfect English is required"
                            ]
                        }
                    }
                ]
            }
        }
    },
    transportation: {
        title: "🚇 Transportation & Public Transit",
        description: "Navigate public transportation systems with confidence",
        contexts: {
            publicTransit: {
                title: "Using Public Transportation",
                situations: [
                    {
                        scenario: "Riding buses and trains",
                        dosAndDonts: {
                            dos: [
                                "Have payment ready before boarding",
                                "Let passengers exit before boarding",
                                "Offer seats to elderly, pregnant, or disabled passengers",
                                "Keep bags close and out of the way",
                                "Move into the carriage, don't block doorways",
                                "Use headphones at reasonable volume"
                            ],
                            donts: [
                                "Push to get on before others exit",
                                "Take up multiple seats with bags",
                                "Eat smelly food on public transit",
                                "Play music or videos without headphones",
                                "Block doors or aisles",
                                "Talk loudly on your phone"
                            ]
                        },
                        culturalNuances: {
                            england: "Queue properly at bus stops. Say 'thank you' to the driver when exiting. Minimal conversation expected.",
                            centralEurope: "Have validated tickets before boarding. Punctuality is strict. Silent travel is preferred.",
                            scandinavia: "Minimal conversation. Personal space is important. Mobile tickets are common.",
                            mediterranean: "More relaxed timing. Conversations are normal. Family seating together is expected."
                        }
                    },
                    {
                        scenario: "Taking taxis and ride-sharing",
                        dosAndDonts: {
                            dos: [
                                "Verify the vehicle and driver details",
                                "Sit in back seat unless invited to front",
                                "Have destination address ready",
                                "Tip appropriately based on local customs",
                                "Rate drivers fairly",
                                "Keep conversation polite but brief"
                            ],
                            donts: [
                                "Get in unmarked vehicles",
                                "Be rude or demanding",
                                "Eat or drink without asking",
                                "Leave trash in the vehicle",
                                "Slam doors",
                                "Share personal information freely"
                            ]
                        }
                    },
                    {
                        scenario: "Cycling in the city",
                        dosAndDonts: {
                            dos: [
                                "Wear a helmet and use lights at night",
                                "Follow traffic rules and signals",
                                "Use designated bike lanes where available",
                                "Signal your turns clearly",
                                "Lock your bike securely",
                                "Respect pedestrians on shared paths"
                            ],
                            donts: [
                                "Cycle on pavements/sidewalks unless permitted",
                                "Run red lights",
                                "Weave dangerously through traffic",
                                "Cycle while using your phone",
                                "Leave bikes blocking walkways",
                                "Ignore local cycling regulations"
                            ]
                        },
                        culturalNuances: {
                            england: "Cycling infrastructure varies. Follow highway code. High-vis clothing recommended.",
                            centralEurope: "Excellent cycling infrastructure. Strict rules. Cyclists have clear rights and responsibilities.",
                            scandinavia: "Cycling is common year-round. Well-maintained paths. Winter cycling gear needed.",
                            mediterranean: "Less cycling infrastructure in many areas. More defensive cycling required."
                        }
                    }
                ]
            },
            driving: {
                title: "Driving and Car Ownership",
                situations: [
                    {
                        scenario: "Driving etiquette and parking",
                        dosAndDonts: {
                            dos: [
                                "Learn local traffic rules and signs",
                                "Use indicators/turn signals properly",
                                "Thank other drivers with a wave when appropriate",
                                "Display valid parking permits",
                                "Check parking restrictions carefully",
                                "Be patient in traffic"
                            ],
                            donts: [
                                "Honk unnecessarily or aggressively",
                                "Block driveways or crosswalks",
                                "Park in disabled spaces without a badge",
                                "Speed in residential areas",
                                "Use mobile phone while driving",
                                "Engage in road rage"
                            ]
                        }
                    }
                ]
            }
        }
    },
    shopping: {
        title: "🛒 Shopping & Consumer Behavior",
        description: "Navigate shopping customs and consumer expectations",
        contexts: {
            grocery: {
                title: "Grocery Shopping",
                situations: [
                    {
                        scenario: "Shopping in supermarkets",
                        dosAndDonts: {
                            dos: [
                                "Bring reusable bags or purchase bags at checkout",
                                "Queue properly at checkouts",
                                "Have payment ready",
                                "Return trolleys/carts to designated areas",
                                "Check expiration dates",
                                "Respect store closing times"
                            ],
                            donts: [
                                "Open packages before purchasing",
                                "Leave refrigerated items in wrong aisles",
                                "Block aisles with your trolley",
                                "Let children misbehave in stores",
                                "Haggle over prices at supermarkets",
                                "Take items from others' baskets"
                            ]
                        },
                        culturalNuances: {
                            england: "Self-service checkouts common. Bag your own groceries quickly. Small talk with cashiers acceptable.",
                            centralEurope: "Efficiency expected. Bag groceries yourself quickly. Sundays many shops closed.",
                            scandinavia: "Self-service is norm. Bag your own. Recycling stations at stores important.",
                            mediterranean: "Markets and small shops still popular. Longer shopping hours. More personal service."
                        }
                    },
                    {
                        scenario: "Shopping at local markets",
                        dosAndDonts: {
                            dos: [
                                "Greet vendors politely",
                                "Ask before touching produce",
                                "Bring cash as many don't take cards",
                                "Accept recommendations from vendors",
                                "Return regularly to build relationships",
                                "Be patient with queues"
                            ],
                            donts: [
                                "Squeeze or damage produce excessively",
                                "Haggle aggressively",
                                "Skip the queue",
                                "Compare prices loudly",
                                "Take photos without asking",
                                "Ignore vendors' greetings"
                            ]
                        }
                    }
                ]
            },
            retail: {
                title: "Retail Shopping",
                situations: [
                    {
                        scenario: "Shopping for clothing and goods",
                        dosAndDonts: {
                            dos: [
                                "Greet staff when entering smaller shops",
                                "Ask for help when needed",
                                "Try clothes on properly in fitting rooms",
                                "Understand return policies before purchasing",
                                "Keep receipts for returns",
                                "Respect closing times"
                            ],
                            donts: [
                                "Damage items through careless handling",
                                "Argue with sales assistants",
                                "Return worn or damaged items",
                                "Take items into fitting rooms without permission",
                                "Leave clothes in heaps in fitting rooms",
                                "Demand discounts without reason"
                            ]
                        }
                    },
                    {
                        scenario: "Handling returns and complaints",
                        dosAndDonts: {
                            dos: [
                                "Bring receipt and item in original condition",
                                "Explain the issue calmly and clearly",
                                "Know your consumer rights",
                                "Be patient with the process",
                                "Accept reasonable solutions",
                                "Thank staff for their help"
                            ],
                            donts: [
                                "Shout or be aggressive with staff",
                                "Return items without proof of purchase",
                                "Make unreasonable demands",
                                "Threaten legal action immediately",
                                "Blame individual staff for store policies",
                                "Leave damaged items as 'found'"
                            ]
                        }
                    }
                ]
            }
        }
    },
    housing: {
        title: "🏠 Housing & Accommodation",
        description: "Navigate rental markets and housing etiquette",
        contexts: {
            renting: {
                title: "Renting Accommodation",
                situations: [
                    {
                        scenario: "Viewing and applying for rentals",
                        dosAndDonts: {
                            dos: [
                                "Arrive on time for viewings",
                                "Ask about utilities, council tax, and contracts",
                                "Take photos/notes during viewings",
                                "Prepare references and employment proof",
                                "Read tenancy agreements carefully",
                                "Document existing damage before moving in"
                            ],
                            donts: [
                                "Miss viewing appointments",
                                "Criticize property rudely",
                                "Make offers you can't commit to",
                                "Skip reading the contract",
                                "Provide false information",
                                "Pay deposits to unlicensed landlords"
                            ]
                        },
                        culturalNuances: {
                            england: "Deposits protected by law. Council tax separate. Six-month minimum leases common.",
                            centralEurope: "Unfurnished is norm. Longer notice periods. Kitchen may not be included in some places.",
                            scandinavia: "Queue systems for popular areas. High deposits. Strong tenant protections.",
                            mediterranean: "Personal connections help. Longer negotiation processes. Furnished more common."
                        }
                    },
                    {
                        scenario: "Living in shared accommodation",
                        dosAndDonts: {
                            dos: [
                                "Establish house rules early",
                                "Clean up after yourself immediately",
                                "Respect quiet hours",
                                "Replace shared items you use",
                                "Pay bills on time",
                                "Communicate openly about issues"
                            ],
                            donts: [
                                "Leave dirty dishes in shared areas",
                                "Take others' food without asking",
                                "Have parties without prior notice",
                                "Monopolize shared spaces",
                                "Skip your share of cleaning",
                                "Leave bathroom in a mess"
                            ]
                        }
                    }
                ]
            },
            neighbors: {
                title: "Neighbor Relations",
                situations: [
                    {
                        scenario: "Being a good neighbor",
                        dosAndDonts: {
                            dos: [
                                "Introduce yourself when moving in",
                                "Keep noise down, especially at night",
                                "Inform neighbors of any loud events in advance",
                                "Maintain your property/garden",
                                "Help elderly neighbors when appropriate",
                                "Respect parking spaces and shared areas"
                            ],
                            donts: [
                                "Play loud music late at night",
                                "Let pets disturb neighbors",
                                "Block shared hallways or driveways",
                                "Have frequent loud parties",
                                "Let your property become unsightly",
                                "Ignore neighbor complaints"
                            ]
                        },
                        culturalNuances: {
                            england: "Privacy valued. Brief friendly chats acceptable. Noise complaints taken seriously.",
                            centralEurope: "Sunday quiet laws exist. Separate waste properly. Maintain properties well.",
                            scandinavia: "Respect personal space. Noise regulations strict. Community responsibility valued.",
                            mediterranean: "More social interaction. Outdoor living common. Later noise tolerance."
                        }
                    }
                ]
            }
        }
    },
    emergencies: {
        title: "🚨 Emergency Situations",
        description: "Handle urgent situations appropriately and safely",
        contexts: {
            medical: {
                title: "Medical Emergencies",
                situations: [
                    {
                        scenario: "Calling emergency services",
                        dosAndDonts: {
                            dos: [
                                "Know emergency numbers (112 EU-wide, 999 UK, 911 some places)",
                                "Stay calm and speak clearly",
                                "Provide exact location and situation details",
                                "Follow dispatcher instructions",
                                "Stay on line until told to hang up",
                                "Provide medical history if relevant"
                            ],
                            donts: [
                                "Call for non-emergencies",
                                "Panic or shout",
                                "Hang up before giving information",
                                "Move injured persons unnecessarily",
                                "Leave before help arrives (if safe)",
                                "Provide false information"
                            ]
                        },
                        culturalNuances: {
                            england: "999 or 112 for emergencies. NHS 111 for urgent non-emergency. A&E for serious issues only.",
                            centralEurope: "112 Europe-wide. Separate numbers for police, fire, ambulance in some countries.",
                            scandinavia: "112 universal. Emergency services highly efficient. Use appropriately only.",
                            mediterranean: "112 emergency number. Response times vary by area. Private hospitals option."
                        }
                    },
                    {
                        scenario: "First aid and helping others",
                        dosAndDonts: {
                            dos: [
                                "Ask before providing help",
                                "Call professional help immediately",
                                "Provide comfort and reassurance",
                                "Follow Good Samaritan principles",
                                "Stay until help arrives if possible",
                                "Give clear information to paramedics"
                            ],
                            donts: [
                                "Perform medical procedures you're not trained for",
                                "Move accident victims without need",
                                "Leave someone in danger",
                                "Film or photograph victims",
                                "Crowd around injured persons",
                                "Remove protective equipment from professionals"
                            ]
                        }
                    }
                ]
            },
            safety: {
                title: "Personal Safety",
                situations: [
                    {
                        scenario: "Staying safe in public",
                        dosAndDonts: {
                            dos: [
                                "Be aware of your surroundings",
                                "Trust your instincts",
                                "Keep valuables secure and hidden",
                                "Know safe routes home",
                                "Stay in well-lit, populated areas at night",
                                "Have emergency contacts easily accessible"
                            ],
                            donts: [
                                "Display expensive items openly",
                                "Walk alone in unfamiliar areas late at night",
                                "Accept drinks from strangers",
                                "Share personal details with strangers",
                                "Use phone while walking in risky areas",
                                "Ignore suspicious behavior"
                            ]
                        }
                    }
                ]
            }
        }
    },
    banking: {
        title: "🏦 Banking & Financial Services",
        description: "Navigate banking systems and financial transactions",
        contexts: {
            accounts: {
                title: "Opening and Managing Accounts",
                situations: [
                    {
                        scenario: "Opening a bank account",
                        dosAndDonts: {
                            dos: [
                                "Bring required ID and proof of address",
                                "Research banks and compare fees",
                                "Book appointments in advance",
                                "Ask about international transfers if needed",
                                "Set up online banking immediately",
                                "Understand overdraft terms"
                            ],
                            donts: [
                                "Provide false information",
                                "Ignore terms and conditions",
                                "Skip reading fee structures",
                                "Use accounts for illegal activities",
                                "Share account details or PINs",
                                "Ignore suspicious activity"
                            ]
                        },
                        culturalNuances: {
                            england: "Proof of address essential. Many online-only banks. Current accounts usually free.",
                            centralEurope: "Registration address required. Fees common for accounts. Efficient online banking.",
                            scandinavia: "Digital-first banking. Personal number essential. Mobile banking advanced.",
                            mediterranean: "Traditional banking still common. Branch visits normal. Personal relationships matter."
                        }
                    },
                    {
                        scenario: "Using ATMs and cash machines",
                        dosAndDonts: {
                            dos: [
                                "Shield PIN when entering",
                                "Check for card skimmers",
                                "Use machines in safe, well-lit locations",
                                "Check your balance regularly",
                                "Report lost cards immediately",
                                "Keep receipts secure or destroy them"
                            ],
                            donts: [
                                "Share your PIN with anyone",
                                "Count money openly at ATM",
                                "Leave receipts at machine",
                                "Use suspicious-looking machines",
                                "Let strangers help with transactions",
                                "Write PIN on card"
                            ]
                        }
                    }
                ]
            },
            transactions: {
                title: "Payments and Transactions",
                situations: [
                    {
                        scenario: "Making everyday payments",
                        dosAndDonts: {
                            dos: [
                                "Know whether to use chip-and-PIN or contactless",
                                "Keep contactless limit in mind",
                                "Verify amounts before confirming",
                                "Keep receipts for large purchases",
                                "Use secure payment methods online",
                                "Monitor account for fraud"
                            ],
                            donts: [
                                "Share card details over unsecure channels",
                                "Save card details on public computers",
                                "Ignore unusual transactions",
                                "Use public WiFi for banking",
                                "Keep all cards in one place",
                                "Ignore payment confirmation emails"
                            ]
                        }
                    }
                ]
            }
        }
    },
    workplace_advanced: {
        title: "💼 Advanced Workplace Scenarios",
        description: "Navigate complex professional situations",
        contexts: {
            performance: {
                title: "Performance Reviews and Feedback",
                situations: [
                    {
                        scenario: "Preparing for performance reviews",
                        dosAndDonts: {
                            dos: [
                                "Document your achievements throughout the year",
                                "Prepare specific examples of successes",
                                "Reflect honestly on areas for improvement",
                                "Set realistic goals for next period",
                                "Ask for clarification on feedback",
                                "Take notes during the review"
                            ],
                            donts: [
                                "Become defensive about criticism",
                                "Make excuses for poor performance",
                                "Blame colleagues for problems",
                                "Exaggerate achievements",
                                "Ignore feedback after the review",
                                "Demand unrealistic raises or promotions"
                            ]
                        },
                        culturalNuances: {
                            england: "Feedback often indirect and softened. 'Areas for development' means problems.",
                            centralEurope: "Direct feedback expected. Criticism seen as professional, not personal.",
                            scandinavia: "Collaborative approach. Self-assessment valued. Mutual dialogue expected.",
                            mediterranean: "Relationship matters. Face-to-face preferred. More personal approach."
                        }
                    },
                    {
                        scenario: "Giving feedback to colleagues",
                        dosAndDonts: {
                            dos: [
                                "Focus on specific behaviors, not personality",
                                "Use 'I' statements and observations",
                                "Offer feedback privately",
                                "Balance criticism with recognition",
                                "Provide actionable suggestions",
                                "Choose appropriate timing"
                            ],
                            donts: [
                                "Give feedback in anger",
                                "Criticize publicly",
                                "Make personal attacks",
                                "Compare to other colleagues",
                                "Bring up old issues repeatedly",
                                "Offer unsolicited feedback constantly"
                            ]
                        }
                    }
                ]
            },
            conflicts: {
                title: "Workplace Conflict Resolution",
                situations: [
                    {
                        scenario: "Addressing disagreements with colleagues",
                        dosAndDonts: {
                            dos: [
                                "Address issues early before they escalate",
                                "Seek to understand their perspective",
                                "Focus on the work problem, not personalities",
                                "Propose solutions, not just complaints",
                                "Keep discussions private",
                                "Involve HR or management if needed"
                            ],
                            donts: [
                                "Gossip about the conflict with others",
                                "Send angry emails",
                                "Give silent treatment",
                                "Escalate unnecessarily to management",
                                "Make threats or ultimatums",
                                "Hold grudges long-term"
                            ]
                        },
                        culturalNuances: {
                            england: "Indirect approach common. 'Clear the air' conversations. Mediation often used.",
                            centralEurope: "Direct discussion acceptable. Professional focus. Clear resolution expected.",
                            scandinavia: "Consensus-seeking. Open dialogue. Everyone's voice matters equally.",
                            mediterranean: "Personal relationships important. Face-to-face preferred. Emotional expression acceptable."
                        }
                    }
                ]
            },
            remote: {
                title: "Remote and Hybrid Work",
                situations: [
                    {
                        scenario: "Working effectively from home",
                        dosAndDonts: {
                            dos: [
                                "Set up proper workspace",
                                "Maintain regular working hours",
                                "Communicate availability clearly",
                                "Join video calls with camera on (when expected)",
                                "Respond to messages promptly during work hours",
                                "Take proper breaks and maintain boundaries"
                            ],
                            donts: [
                                "Be unreachable during work hours",
                                "Attend video calls in inappropriate settings",
                                "Multitask obviously during meetings",
                                "Miss deadlines without communication",
                                "Work all hours without breaks",
                                "Ignore team communication"
                            ]
                        },
                        culturalNuances: {
                            england: "Flexible working accepted. Trust-based. Results matter more than hours visible.",
                            centralEurope: "Clear schedules expected. Structured approach. Punctuality for video calls.",
                            scandinavia: "Strong work-life balance. Autonomy trusted. Results-focused.",
                            mediterranean: "Building in-person relationships still valued. Video calls more personal."
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
    },
    teamOnboarding: {
        title: "Team Onboarding & Workplace Language",
        questions: [
            {
                question: "What does 'That's interesting' typically mean in British workplace communication?",
                options: [
                    "They find it genuinely fascinating",
                    "They want to hear more details",
                    "They disagree or think it's a bad idea",
                    "They need time to think about it"
                ],
                correct: 2,
                explanation: "British indirect communication often uses 'That's interesting' to politely signal disagreement or skepticism about an idea."
            },
            {
                question: "What should you do when someone offers to make tea or coffee in the office?",
                options: [
                    "Always decline to avoid bothering them",
                    "Accept occasionally and offer to make rounds yourself",
                    "Accept every time without reciprocating",
                    "Only accept if you're very thirsty"
                ],
                correct: 1,
                explanation: "Tea/coffee rounds are part of British office culture. Accept occasionally and reciprocate by offering to make rounds yourself - it builds team relationships."
            },
            {
                question: "What does 'Let's park that for now' mean in a meeting?",
                options: [
                    "Write it down for the permanent record",
                    "This is the most important topic",
                    "Let's discuss this later, not now",
                    "Let's take a break"
                ],
                correct: 2,
                explanation: "'Park that' means to set aside a topic for later discussion. It's a way to stay focused on the current agenda while acknowledging the point."
            },
            {
                question: "In British pub culture, what is the 'rounds' system?",
                options: [
                    "Ordering drinks in circular glasses",
                    "Taking turns to buy drinks for the whole group",
                    "Walking around to find seats",
                    "Drinking games played in a circle"
                ],
                correct: 1,
                explanation: "The rounds system means each person in the group takes turns buying drinks for everyone. It's expected that you participate when socializing with colleagues at the pub."
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
