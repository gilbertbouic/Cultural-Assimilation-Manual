// Content for scenario-based learning

const scenarios = {
    uk: {
        workplace: {
            title: "First Day at a UK Office",
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
    },
    us: {
        workplace: {
            title: "First Day at a US Office",
            roles: ["professional", "remote", "entrepreneur"],
            steps: [
                {
                    title: "Arriving at the Office",
                    description: "You arrive for your first day at a US office. Your manager, Dave, comes to greet you.",
                    dos: [
                        "Arrive on time.",
                        "Offer a confident handshake and make eye contact.",
                        "Use your manager's first name: 'Hi Dave, it\'s great to be here.'"
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
    },
    ce: {
        social: {
            title: "Sunday in a German Neighborhood",
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
    }
};
