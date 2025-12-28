/**
 * Mediterranean - Cultural Scenarios
 * Scenario-based learning content for Mediterranean region.
 * Countries: Spain, France, Italy, Slovenia, Croatia, Greece, Bosnia & Herzegovina, Cyprus, Malta, Portugal
 */
(function() {
    'use strict';

    const mediterraneanScenarios = {
        work: {
            id: "scenario_mediterranean_work",
            title: "Starting a Job in a Mediterranean Country",
            region: "mediterranean",
            category: "work",
            roles: ["professional", "student", "remote_worker"],
            steps: [
                {
                    title: "Before Starting Work",
                    description: "You have received a job offer in Spain, Italy, or another Mediterranean country.",
                    dos: [
                        "Ensure you have a valid residence permit with work authorization.",
                        "Request a written employment contract before starting.",
                        "Understand the terms: salary, hours, vacation days, social security.",
                        "Ask about registration with social security (Seguridad Social in Spain, SSN in Italy)."
                    ],
                    donts: [
                        "Don't start work without proper documentation.",
                        "Don't accept a purely cash arrangement without any written agreement.",
                        "Don't sign a contract you don't understand - ask for translation or legal help.",
                        "Don't skip registering with social security - this protects your rights."
                    ]
                },
                {
                    title: "First Day at Work",
                    description: "It's your first day at the new job.",
                    dos: [
                        "Arrive on time or a few minutes early to make a good impression.",
                        "Bring required documents (ID, work permit, bank details if requested).",
                        "Observe workplace culture - greetings, lunch breaks, communication style.",
                        "Ask questions if you're unsure about procedures or expectations."
                    ],
                    donts: [
                        "Don't be late without calling ahead.",
                        "Don't assume workplace culture is the same as your home country.",
                        "Don't hesitate to ask for clarification - it shows you want to do well.",
                        "Don't ignore safety training or workplace rules."
                    ]
                },
                {
                    title: "Understanding Your Rights",
                    description: "You want to ensure your workplace treats you fairly.",
                    dos: [
                        "Keep copies of your contract, payslips, and work permit.",
                        "Know the minimum wage for your country and check your pay is correct.",
                        "Understand your rights to breaks, paid vacation, and sick leave.",
                        "Contact trade unions or NGOs if you experience exploitation or abuse."
                    ],
                    donts: [
                        "Don't accept unpaid overtime without understanding if it's legal.",
                        "Don't tolerate unsafe working conditions - you have right to safe workplace.",
                        "Don't be afraid to report wage theft or mistreatment.",
                        "Don't assume you have fewer rights because you're foreign - labor laws protect all workers."
                    ]
                }
            ],
            culturalNotes: [
                "Mediterranean countries have strong labor protections, but informal work exists - aim for legal employment.",
                "Trade unions (sindicatos in Spain, syndicats in France) can help even if you're not a member.",
                "Work culture varies: Spain and Greece tend to be more flexible, while Northern Italy and France may be more formal.",
                "Building good relationships with colleagues is important - lunch breaks are often social times."
            ]
        },
        
        bureaucracy: {
            id: "scenario_mediterranean_bureaucracy",
            title: "Navigating Papers and Registration",
            region: "mediterranean",
            category: "bureaucracy",
            roles: ["asylum_seeker", "refugee", "student", "professional"],
            steps: [
                {
                    title: "Initial Registration",
                    description: "You have arrived and need to register with local authorities.",
                    dos: [
                        "Register with your local municipality as soon as possible (empadronamiento in Spain, anagrafi in Italy).",
                        "Bring your ID, asylum documents, and proof of address.",
                        "Ask for a registration certificate - keep multiple copies.",
                        "Find out what this registration gives you access to (health care, schools, benefits)."
                    ],
                    donts: [
                        "Don't delay registration - it's essential for accessing services.",
                        "Don't lose your registration certificate - make photocopies.",
                        "Don't assume registration is automatic - you must apply.",
                        "Don't skip appointments - reschedule if you can't attend."
                    ]
                },
                {
                    title: "Managing Appointments",
                    description: "You need to attend appointments at prefecture, police station, or asylum office.",
                    dos: [
                        "Arrive early with all required documents listed in your appointment notice.",
                        "Bring an interpreter or someone who speaks the local language if needed.",
                        "Keep all appointment confirmations and letters from authorities.",
                        "Ask for written confirmation of any decisions or next steps."
                    ],
                    donts: [
                        "Don't miss appointments - this can delay your case or affect your status.",
                        "Don't throw away official letters without reading them carefully.",
                        "Don't argue with officials - stay calm and polite even if frustrated.",
                        "Don't go alone if you're not confident in the language - get help from NGOs."
                    ]
                },
                {
                    title: "Understanding Slow Processes",
                    description: "Your permit renewal or asylum decision is taking longer than expected.",
                    dos: [
                        "Be patient - Mediterranean bureaucracy is often slow with long queues.",
                        "Keep track of deadlines for appeals or renewals.",
                        "Check in with NGOs or legal aid organizations for updates on typical waiting times.",
                        "Maintain copies of all documents showing you've applied and are waiting."
                    ],
                    donts: [
                        "Don't panic if things take time - delays are common but manageable.",
                        "Don't miss renewal deadlines while waiting - apply before permits expire.",
                        "Don't pay bribes or use unofficial 'fixers' - seek legitimate help.",
                        "Don't give up - persistence and proper documentation will help your case."
                    ]
                }
            ],
            culturalNotes: [
                "Expect 'citas previas' (prior appointments) in Spain - online booking systems are common but can be frustrating.",
                "In Italy, the Questura handles many immigration matters; arrive very early to avoid long waits.",
                "France's Prefecture can be difficult to contact; NGOs often have better information.",
                "Always carry copies of key documents with you, especially when traveling between regions.",
                "Many Mediterranean countries have active NGO networks that can guide you through bureaucracy."
            ]
        },
        
        social: {
            id: "scenario_mediterranean_social",
            title: "Living in a Mediterranean Neighborhood",
            region: "mediterranean",
            category: "social",
            roles: ["student", "family", "retiree", "professional"],
            steps: [
                {
                    title: "Moving Into Your Apartment",
                    description: "You've just moved into an apartment building in a Mediterranean city.",
                    dos: [
                        "Introduce yourself to neighbors with a friendly greeting (Bonjour, Hola, Ciao, Kalimera).",
                        "Learn and respect quiet hours - typically 22:00 to 8:00, sometimes also early afternoon.",
                        "Read building rules about garbage disposal, shared spaces, and pets.",
                        "Ask the landlord or neighbors about recycling schedules and procedures."
                    ],
                    donts: [
                        "Don't play loud music or host noisy parties late at night.",
                        "Don't ignore building rules - they're taken seriously and can lead to complaints.",
                        "Don't let children run and scream in hallways or shared courtyards after quiet hours.",
                        "Don't park in assigned spaces that aren't yours."
                    ]
                },
                {
                    title: "Weekend Plans",
                    description: "It's Saturday evening and you want to socialize or do chores.",
                    dos: [
                        "Enjoy local evening culture - many Mediterranean countries have late dinners and social life.",
                        "Go out to local cafés or restaurants to experience community life.",
                        "If doing home repairs or cleaning, do it during acceptable daytime hours.",
                        "Invite neighbors for coffee or a meal to build friendly relationships."
                    ],
                    donts: [
                        "Don't start drilling or using power tools after 22:00 or on Sunday mornings.",
                        "Don't assume everyone has the same schedule - some neighbors may work nights.",
                        "Don't forget that Sunday is often a day of rest with stricter quiet expectations.",
                        "Don't blast music with open windows, even during the day."
                    ]
                },
                {
                    title: "Handling Conflicts",
                    description: "A neighbor has complained about noise from your apartment.",
                    dos: [
                        "Listen to their concern calmly and apologize if you were unaware.",
                        "Ask what specific issue they're experiencing and when.",
                        "Explain your situation politely and try to find a compromise.",
                        "Be proactive: adjust your behavior before it becomes a bigger issue."
                    ],
                    donts: [
                        "Don't get defensive or argue aggressively.",
                        "Don't ignore repeated complaints - they can escalate to landlord or police involvement.",
                        "Don't retaliate with counter-complaints unless genuinely necessary.",
                        "Don't let pride prevent you from making reasonable adjustments."
                    ]
                }
            ],
            culturalNotes: [
                "Mediterranean cultures value community and social connection, but also respect for shared living spaces.",
                "In Spain and Greece, evening and night social life is vibrant, but quiet hours are still enforced.",
                "French apartment buildings can be more formal - use 'vous' and proper greetings with neighbors.",
                "In many Mediterranean buildings, a building administrator or porter manages conflicts.",
                "Summer months often mean open windows - be extra considerate about noise."
            ]
        },
        
        healthcare: {
            id: "scenario_mediterranean_healthcare",
            title: "Accessing Healthcare Services",
            region: "mediterranean",
            category: "healthcare",
            roles: ["asylum_seeker", "refugee", "family", "student"],
            steps: [
                {
                    title: "Registering for Healthcare",
                    description: "You need to access the public health system.",
                    dos: [
                        "Complete your municipal registration first (it's usually required).",
                        "Apply for a health card (tarjeta sanitaria in Spain, tessera sanitaria in Italy, Carte Vitale in France).",
                        "Bring required documents: ID, residence permit, registration certificate.",
                        "Ask NGOs or social workers for help if the process is unclear."
                    ],
                    donts: [
                        "Don't wait until you're sick to register.",
                        "Don't assume you're automatically registered - you must apply.",
                        "Don't be discouraged by bureaucracy - keep trying with NGO support.",
                        "Don't pay for emergency care if you shouldn't - know your rights."
                    ]
                },
                {
                    title: "For Non-Emergency Care",
                    description: "You need to see a doctor for a non-urgent health issue.",
                    dos: [
                        "Find your assigned local health center (centro de salud, centre de santé, ambulatorio).",
                        "Make an appointment - some accept walk-ins but many require booking.",
                        "Bring your health card, ID, and any previous medical records if available.",
                        "Ask for an interpreter if needed - some centers have language support."
                    ],
                    donts: [
                        "Don't go directly to emergency room for minor issues - use health centers.",
                        "Don't miss appointments - call ahead if you can't attend.",
                        "Don't be afraid to ask questions about your treatment or medications.",
                        "Don't ignore follow-up care or prescription instructions."
                    ]
                },
                {
                    title: "In Case of Emergency",
                    description: "You or someone with you has a medical emergency.",
                    dos: [
                        "Call 112 immediately - it works in all EU Mediterranean countries.",
                        "Stay calm and clearly describe the emergency and location.",
                        "Go to emergency room (pronto soccorso, urgences) or wait for ambulance.",
                        "Remember: emergency care is provided regardless of your documentation status."
                    ],
                    donts: [
                        "Don't delay calling for help due to fear about documentation.",
                        "Don't try to transport a seriously injured person yourself - wait for ambulance.",
                        "Don't leave the hospital without understanding discharge instructions.",
                        "Don't ignore bills if they arrive - seek help from NGOs to understand your obligations."
                    ]
                },
                {
                    title: "Mental Health Support",
                    description: "You're experiencing anxiety, depression, or trauma symptoms.",
                    dos: [
                        "Talk to your family doctor first - they can refer you to mental health services.",
                        "Contact NGOs that specialize in refugee and migrant mental health support.",
                        "Ask about free or low-cost counseling services.",
                        "Be patient with waiting times but don't give up - keep following up."
                    ],
                    donts: [
                        "Don't suffer in silence - mental health is taken seriously in Mediterranean countries.",
                        "Don't be ashamed to ask for help - trauma and adjustment stress are normal.",
                        "Don't assume services aren't available - many NGOs offer free support.",
                        "Don't skip appointments once you get them - waiting lists are long."
                    ]
                }
            ],
            culturalNotes: [
                "Public healthcare quality varies across Mediterranean countries, but all provide essential care.",
                "Pharmacists are highly trained and can advise on minor health issues without prescription.",
                "Many Mediterranean countries have separate systems for asylum-seekers (ask about PUMA in France, AME, etc.).",
                "Emergency number 112 works throughout the EU; explain clearly if you need interpreter.",
                "Mental health awareness is growing, but stigma may exist - seek professional NGO support."
            ]
        },
        
        family: {
            id: "scenario_mediterranean_family",
            title: "Raising Children in Mediterranean Culture",
            region: "mediterranean",
            category: "family",
            roles: ["parent", "family"],
            steps: [
                {
                    title: "Enrolling Children in School",
                    description: "You need to register your children for school.",
                    dos: [
                        "Contact the local education office or municipality for enrollment procedures.",
                        "Bring birth certificates, ID, residence documents, and vaccination records.",
                        "Ask about language support classes for your children.",
                        "Attend initial meetings with teachers to understand expectations."
                    ],
                    donts: [
                        "Don't delay enrollment - education is compulsory and helps integration.",
                        "Don't be intimidated by the process - schools have experience with immigrant families.",
                        "Don't skip vaccination requirements - they're mandatory for school entry.",
                        "Don't ignore communications from school - respond to notes and attend meetings."
                    ]
                },
                {
                    title: "Understanding Parenting Expectations",
                    description: "You want to raise your children according to your values while respecting local norms.",
                    dos: [
                        "Understand that physical punishment is not acceptable and can cause legal problems.",
                        "Teach children respectful behavior in school and public spaces.",
                        "Communicate with teachers if there are cultural misunderstandings.",
                        "Balance your cultural traditions with helping children adapt to new environment."
                    ],
                    donts: [
                        "Don't use physical discipline - teachers and social workers are required to report suspected abuse.",
                        "Don't keep children home from school without valid reason.",
                        "Don't dismiss school rules as unimportant - they reflect legal and social expectations.",
                        "Don't isolate children from local culture - integration helps their future success."
                    ]
                },
                {
                    title: "Children in Public Spaces",
                    description: "You're out with your children in restaurants, parks, or public transport.",
                    dos: [
                        "In Spain, Italy, Greece: children are welcome in most social spaces, even in evening.",
                        "Supervise children's behavior and teach them to respect others' space.",
                        "Use public transport appropriately - teach children to be considerate.",
                        "Enjoy family-friendly culture of Mediterranean countries."
                    ],
                    donts: [
                        "Don't let children run wild or disturb other people, even in child-friendly settings.",
                        "Don't shout at children aggressively in public - it attracts negative attention.",
                        "Don't ignore when children need to quiet down in shared spaces.",
                        "Don't forget quiet hours apply to children's noise too in residential buildings."
                    ]
                },
                {
                    title: "If Social Services Get Involved",
                    description: "You've been contacted by child protection services with concerns.",
                    dos: [
                        "Take it seriously and cooperate fully - they're trying to ensure children's safety.",
                        "Explain cultural differences calmly and respectfully.",
                        "Ask for interpreter and legal support from NGOs.",
                        "Show willingness to learn and adapt to local child protection standards."
                    ],
                    donts: [
                        "Don't ignore their concerns or miss meetings.",
                        "Don't be hostile or defensive - this makes situations worse.",
                        "Don't assume they want to take your children - usually they want to support families.",
                        "Don't handle it alone - get legal advice immediately."
                    ]
                }
            ],
            culturalNotes: [
                "Mediterranean countries have strong child protection laws, but most are family-oriented and supportive.",
                "Children are very visible in public life in Spain, Italy, Greece - they're included in social activities.",
                "France has stricter discipline expectations in schools; homework and punctuality matter.",
                "Extended family involvement in childcare is common in Mediterranean culture.",
                "Children's rights are taken very seriously - they are seen as individuals with protections, not property."
            ]
        }
    };

    // Register this region's scenarios
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('mediterranean', mediterraneanScenarios);
    }

})();
