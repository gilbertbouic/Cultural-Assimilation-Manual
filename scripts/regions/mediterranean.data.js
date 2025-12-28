/**
 * Mediterranean - Cultural Data
 * Quiz questions and cultural guidance for the Mediterranean region.
 * Countries: Spain, France, Italy, Slovenia, Croatia, Greece, Bosnia & Herzegovina, Cyprus, Malta, Portugal
 * 
 * Content based on refugee welcome guides covering 8 key topics:
 * 1. Big ideas – Life in the region
 * 2. Parenting
 * 3. Tipping
 * 4. Dating & relationships
 * 5. Neighbours
 * 6. Papers & bureaucracy
 * 7. Work
 * 8. Health & emergencies
 */
(function() {
    'use strict';

    const mediterraneanData = {
        id: "quiz_mediterranean",
        title: "Mediterranean Cultural Quiz",
        region: "mediterranean",
        category: "general",
        questions: [
            // Big Ideas - Life in the Mediterranean
            {
                question: "In Spain, what is the typical time for dinner in many areas?",
                options: {
                    a: "18:00–19:00",
                    b: "19:00–20:00",
                    c: "21:00–23:00"
                },
                correct: "c",
                explanation: "Spain has a later daily rhythm than many other countries. Lunch is typically 14:00–16:00, and dinner is often 21:00–23:00, especially in urban areas."
            },
            {
                question: "What is the French principle of 'laïcité'?",
                options: {
                    a: "A strong emphasis on culinary traditions",
                    b: "Secularism and separation of religion from public life",
                    c: "The French system of social welfare"
                },
                correct: "b",
                explanation: "Laïcité is a core French value representing secularism. It means keeping religion separate from government and public institutions, while protecting individual freedom of belief."
            },
            {
                question: "Which aspect is particularly important in Italian culture?",
                options: {
                    a: "Individual achievement over family",
                    b: "Family-centered culture with shared meals",
                    c: "Avoiding public social gatherings"
                },
                correct: "b",
                explanation: "Italian culture is strongly family-centered. Food and shared meals are very important social activities, and families often spend significant time together."
            },
            
            // Parenting
            {
                question: "In most Mediterranean countries, what is the general attitude toward physical punishment of children?",
                options: {
                    a: "It is widely accepted and encouraged",
                    b: "It is culturally discouraged and can lead to legal consequences",
                    c: "It is only acceptable in private settings"
                },
                correct: "b",
                explanation: "Across Mediterranean countries (Spain, France, Italy, Slovenia, Croatia, Greece, etc.), physical punishment of children is socially disapproved and can result in intervention by social services or legal problems."
            },
            {
                question: "In Spain, what might you commonly see regarding children in public spaces?",
                options: {
                    a: "Children must be home by 20:00",
                    b: "Children are often out late with parents, especially in summer",
                    c: "Children are rarely seen in public spaces"
                },
                correct: "b",
                explanation: "In Spain, it's common to see children out late with their parents in public spaces, restaurants, and social gatherings, particularly during summer months."
            },
            {
                question: "What is an important expectation for parents regarding schools in France?",
                options: {
                    a: "Schools operate independently without parental involvement",
                    b: "Schools emphasize discipline, homework, and respect for teachers",
                    c: "Physical education is the only required subject"
                },
                correct: "b",
                explanation: "French schools place strong emphasis on discipline, homework completion, and respect for teachers. Parents are expected to support these values at home."
            },
            
            // Tipping
            {
                question: "What is the typical tipping practice in restaurants in Italy?",
                options: {
                    a: "25% of the bill is mandatory",
                    b: "Service is often included; rounding up or leaving 1–2€ is common",
                    c: "Tipping is considered offensive"
                },
                correct: "b",
                explanation: "In Italy, service is often included in the bill (you may see a 'coperto' charge). Tipping is not obligatory, but rounding up or leaving 1–2€ is appreciated. In tourist areas, 5–10% may be expected for very good service."
            },
            {
                question: "How is tipping typically handled in French restaurants?",
                options: {
                    a: "Service is usually included; small change or 5–10% for very good service",
                    b: "20% tip is mandatory",
                    c: "Tipping is illegal"
                },
                correct: "a",
                explanation: "In France, service is usually included in restaurant bills. Leaving small change or rounding up is common, with 5–10% for very good service being appreciated but not required."
            },
            {
                question: "In Slovenia, what is the typical tipping practice?",
                options: {
                    a: "Tipping is forbidden by law",
                    b: "Always exactly 15%",
                    c: "Not mandatory but appreciated; about 10% for good service or rounding up"
                },
                correct: "c",
                explanation: "In Slovenia, tipping is not mandatory but appreciated. In restaurants, rounding up or adding about 10% for good service is common. For cafés and taxis, rounding up is typical."
            },
            
            // Dating & Relationships
            {
                question: "What is the legal status of same-sex marriage in Spain?",
                options: {
                    a: "Illegal in all circumstances",
                    b: "Legal and generally accepted, especially in cities",
                    c: "Only recognized if performed abroad"
                },
                correct: "b",
                explanation: "Same-sex marriage is legal in Spain and is generally accepted, particularly in urban areas. Spain has been progressive on LGBT+ rights."
            },
            {
                question: "What is a key principle emphasized in relationships across Mediterranean countries?",
                options: {
                    a: "Traditional arranged marriages are the norm",
                    b: "Consent and respect for personal boundaries",
                    c: "Physical contact doesn't require permission"
                },
                correct: "b",
                explanation: "Across Mediterranean countries, consent is a strong legal and social principle. Respectful behavior and consent for any physical contact are essential. Unwanted touching can be a crime."
            },
            {
                question: "In France, how are pre-marital relationships and living together viewed?",
                options: {
                    a: "Strictly forbidden and illegal",
                    b: "Legal and socially accepted in most areas",
                    c: "Only acceptable for people over 40"
                },
                correct: "b",
                explanation: "Pre-marital and cohabiting relationships are legal and socially accepted in France and most Mediterranean countries. Modern attitudes are generally tolerant and accepting."
            },
            
            // Neighbours
            {
                question: "What are typical quiet hours in Mediterranean apartment buildings?",
                options: {
                    a: "No quiet hours exist",
                    b: "All day every day",
                    c: "Usually from around 22:00 to 8:00"
                },
                correct: "c",
                explanation: "Most Mediterranean countries enforce quiet hours in apartment buildings, typically from around 22:00 (10 PM) to 8:00 AM. Some also have early afternoon quiet periods. Violating these can lead to complaints or police visits."
            },
            {
                question: "In France, how should you initially address neighbors?",
                options: {
                    a: "Greet with 'Bonjour' and use 'vous' (formal) until invited to be informal",
                    b: "Ignore them completely to respect their privacy",
                    c: "Use their first name immediately"
                },
                correct: "a",
                explanation: "French culture values politeness. Greet neighbors with 'Bonjour' and use the formal 'vous' until invited to use the informal 'tu'. This shows respect."
            },
            {
                question: "What is important to remember about Sunday in Slovenia?",
                options: {
                    a: "It's the best day for loud parties",
                    b: "People may seem reserved but are usually helpful; quiet hours are enforced",
                    c: "All stores must stay open"
                },
                correct: "b",
                explanation: "In Slovenia, people may initially seem reserved but are generally helpful. Quiet hours are strictly enforced, especially at night and on Sundays. Keep shared spaces clean."
            },
            
            // Papers & Bureaucracy
            {
                question: "In Spain, what is 'empadronamiento' and why is it important?",
                options: {
                    a: "A type of Spanish dance",
                    b: "Local registration essential for health care, schooling, and benefits",
                    c: "A food safety certificate"
                },
                correct: "b",
                explanation: "Empadronamiento is local municipal registration in Spain. It's essential for accessing health care, enrolling in schools, and receiving certain benefits. Always keep copies of this document."
            },
            {
                question: "What should you expect when dealing with bureaucracy in Italy?",
                options: {
                    a: "Instant processing online",
                    b: "Processes can be slow; expect queues at Questura and municipal offices",
                    c: "No documentation is ever required"
                },
                correct: "b",
                explanation: "Italian bureaucratic processes can be slow. Expect queues at police headquarters (Questura) and municipal offices. Always keep copies of asylum documents, residence permits, and appointments."
            },
            {
                question: "In France, which office manages residence permits and asylum documents?",
                options: {
                    a: "The local bakery",
                    b: "The Prefecture (préfecture)",
                    c: "The tourism office"
                },
                correct: "b",
                explanation: "In France, the Prefecture (préfecture) manages residence permits and asylum documents. Appointments can be difficult to get, so plan ahead and always keep copies of all documents."
            },
            
            // Work
            {
                question: "What do you need to work legally in Mediterranean countries?",
                options: {
                    a: "Just a verbal agreement with an employer",
                    b: "A valid residence and work permit",
                    c: "Only a tourist visa"
                },
                correct: "b",
                explanation: "Legal work in Spain, France, Italy, Slovenia, Croatia, Greece, and other Mediterranean countries requires a valid residence permit with work rights. Written contracts and social security registration protect your rights."
            },
            {
                question: "What sectors commonly employ foreign workers in Greece?",
                options: {
                    a: "Only government positions",
                    b: "Tourism, agriculture, construction, and services",
                    c: "Foreign workers are not allowed"
                },
                correct: "b",
                explanation: "In Greece and many Mediterranean countries, tourism, agriculture, construction, and service sectors commonly employ migrants. Legal employment with a contract is important for protection."
            },
            {
                question: "What is important about employment contracts in Portugal?",
                options: {
                    a: "Verbal agreements are sufficient",
                    b: "Written contracts and social security registration are essential",
                    c: "Contracts are optional"
                },
                correct: "b",
                explanation: "In Portugal and across the Mediterranean, written work contracts and social security registration are essential. They protect you and ensure minimum wage, paid leave, and proper working conditions. Demand a payslip."
            },
            
            // Health & Emergencies
            {
                question: "What is the emergency number in all EU Mediterranean countries?",
                options: {
                    a: "911",
                    b: "999",
                    c: "112"
                },
                correct: "c",
                explanation: "112 is the single EU emergency number that works across all Mediterranean EU countries (Spain, France, Italy, Slovenia, Croatia, Greece, Cyprus, Malta, Portugal). It connects you to police, ambulance, and fire services."
            },
            {
                question: "What is the 'tarjeta sanitaria' in Spain?",
                options: {
                    a: "A credit card for shopping",
                    b: "Public health card needed once you're registered",
                    c: "A library card"
                },
                correct: "b",
                explanation: "The tarjeta sanitaria is the public health system card in Spain. You receive it once you're registered with the municipality. Emergency care is provided regardless of status."
            },
            {
                question: "What is true about emergency health care in Mediterranean countries?",
                options: {
                    a: "Only available to citizens",
                    b: "Emergency treatment is provided even without full papers",
                    c: "You must pay full cost upfront"
                },
                correct: "b",
                explanation: "Across Mediterranean countries, emergency care is provided even without complete documentation. Public health systems and emergency rooms (pronto soccorso in Italy, urgences in France) treat urgent cases regardless of legal status."
            },
            {
                question: "In Croatia, what can asylum-seekers expect regarding health care?",
                options: {
                    a: "No health care is available",
                    b: "Access to basic health care; recognized refugees get broader coverage",
                    c: "Only traditional medicine is offered"
                },
                correct: "b",
                explanation: "In Croatia, asylum-seekers have access to basic health care. Recognized refugees receive broader coverage. The emergency number is 112, and pharmacies can advise on non-emergency problems."
            },
            {
                question: "What support is available for mental health in Mediterranean countries?",
                options: {
                    a: "No mental health support exists",
                    b: "Available through public systems and NGOs, though waiting times may be long",
                    c: "Only available in private clinics at high cost"
                },
                correct: "b",
                explanation: "Mental health and trauma support are available through public health systems and NGOs in Mediterranean countries. Waiting times can be long, but free counseling is often offered by NGOs. Ask for interpreters if needed."
            }
        ],
        
        // Country-specific guidance organized by topic
        countryGuides: {
            spain: {
                bigIdeas: [
                    "Social, family-oriented culture; people value time with friends and relatives",
                    "Daily rhythm is later: lunch 14:00–16:00, dinner 21:00–23:00 in many areas",
                    "Regional diversity (Catalonia, Andalusia, Basque Country) with different languages and traditions",
                    "Catholic background, but modern Spain is generally secular and tolerant"
                ],
                parenting: [
                    "Children often out late with parents in public spaces, especially in summer",
                    "Schools expect punctuality and parental involvement",
                    "Physical punishment is socially disapproved and legally problematic",
                    "Teachers and social workers may intervene if they suspect abuse"
                ],
                tipping: [
                    "Not mandatory, but appreciated",
                    "Cafés/bars: rounding up to the nearest euro",
                    "Restaurants: 5–10% if service is good",
                    "Taxis: round up or add 1–2€"
                ],
                relationships: [
                    "Pre-marital relationships and living together widely accepted",
                    "Same-sex relationships and marriage legal and generally accepted in cities",
                    "Consent crucial for any physical contact",
                    "Online dating apps common"
                ],
                neighbours: [
                    "Apartment living common; noise rules usually from ~22:00 to 8:00",
                    "Simple greetings expected ('Hola', 'Buenos días')",
                    "Building rules (garbage, pets, noise) important",
                    "Repeated problems can involve landlord or police"
                ],
                bureaucracy: [
                    "Expect slow processes and many appointments ('citas previas')",
                    "Keep copies of documents (ID, asylum papers, empadronamiento)",
                    "Registration in municipality essential for health care, schooling, benefits",
                    "Use NGOs or legal aid for asylum, residency, and work permits"
                ],
                work: [
                    "Formal work requires valid residence and work permit",
                    "Written contracts and social security registration are protection",
                    "Minimum wage set nationally; unpaid overtime illegal",
                    "Trade unions can advise, even if you are foreign"
                ],
                health: [
                    "Public health system (tarjeta sanitaria) once registered",
                    "Emergencies treated regardless of status",
                    "Emergency number: 112",
                    "Mental health support available but waiting times can be long"
                ]
            },
            france: {
                bigIdeas: [
                    "Strong values of equality, secularism (laïcité), and individual rights",
                    "French language central to integration",
                    "Public life more formal; politeness formulas matter"
                ],
                parenting: [
                    "Schools emphasize discipline, homework, and respect for teachers",
                    "Physical punishment not acceptable; can cause social services intervention",
                    "Children's rights strongly protected",
                    "Day-care and after-school options exist but may be limited"
                ],
                tipping: [
                    "Service usually included in restaurant bills",
                    "Small change or 5–10% for very good service",
                    "Optional but appreciated in cafés, taxis, hairdressers"
                ],
                relationships: [
                    "Pre-marital and same-sex relationships legal and socially accepted",
                    "Public displays of affection common; harassment taken seriously",
                    "Consent is strong legal and social principle"
                ],
                neighbours: [
                    "Strict noise and rubbish rules in buildings",
                    "Greet with 'Bonjour' and use 'vous' until invited to be informal",
                    "Handle conflicts calmly; involve landlord or authorities if needed"
                ],
                bureaucracy: [
                    "Prefecture manages residence permits and asylum documents",
                    "Keep copies of all documents; respond to official mail quickly",
                    "Registration helps access health care and social support",
                    "Free legal aid and NGOs available"
                ],
                work: [
                    "Legal work requires residence permit with work rights",
                    "Written contracts and payslips important evidence",
                    "Protective employment law: hour limits, paid leave, dismissal rules",
                    "Trade unions and 'inspection du travail' can help if exploited"
                ],
                health: [
                    "Public health system uses 'Carte Vitale'",
                    "Asylum-seekers can access specific coverage (PUMA, AME)",
                    "Emergency numbers: 112 or 15 (medical), 17 (police), 18 (fire)",
                    "Emergency care given without full papers"
                ]
            },
            italy: {
                bigIdeas: [
                    "Family-centered, social culture; food and shared meals important",
                    "Regional differences (north vs. south) in economy and social habits",
                    "Catholic heritage strong, but religious freedom exists"
                ],
                parenting: [
                    "Children very visible in public spaces and welcomed in social life",
                    "Schools value discipline but may be less formal than some countries",
                    "Physical punishment culturally discouraged and legally consequential",
                    "Vaccinations and school attendance important"
                ],
                tipping: [
                    "Service often included; 'coperto' charge may appear",
                    "Not obligatory; rounding up or 1–2€ common",
                    "Tourist areas: 5–10% for very good service"
                ],
                relationships: [
                    "Dating common; meet through friends or online",
                    "Same-sex relationships legally recognized (civil unions)",
                    "Controlling behavior not accepted; domestic violence is crime",
                    "Respectful communication and consent essential"
                ],
                neighbours: [
                    "Quiet hours usually at night and early afternoon",
                    "Building relationships help with practical matters",
                    "Noise, rubbish, parking are conflict sources – follow rules"
                ],
                bureaucracy: [
                    "Processes slow; expect queues at Questura and municipal offices",
                    "Keep copies of asylum documents, permits, appointments",
                    "Registration with municipality and national health service (SSN) important",
                    "NGOs assist with legal matters, language, integration"
                ],
                work: [
                    "Sectors: agriculture, construction, tourism, care work",
                    "Legal work requires valid permit",
                    "Contracts and social security protect you",
                    "Trade unions active and can help"
                ],
                health: [
                    "Register with public health service for card (tessera sanitaria)",
                    "Emergency number: 112",
                    "Emergency rooms (pronto soccorso) treat urgent cases",
                    "NGOs and churches offer additional support"
                ]
            },
            slovenia: {
                bigIdeas: [
                    "Small, safe, and relatively orderly country",
                    "Strong respect for nature and outdoor activities",
                    "Generally secular, though traditional values remain in some areas"
                ],
                parenting: [
                    "Children expected to be polite and disciplined in public",
                    "Schools emphasize attendance, homework, participation",
                    "Harsh punishment can lead to social services intervention",
                    "Parents encouraged to communicate with teachers"
                ],
                tipping: [
                    "Not mandatory but appreciated",
                    "Restaurants: round up or about 10% for good service",
                    "Cafés and taxis: rounding up common"
                ],
                relationships: [
                    "Dating begins in teenage or young adult years",
                    "Living together before marriage common",
                    "Same-sex relationships legally recognized and increasingly accepted",
                    "Consent and equality legally and socially important"
                ],
                neighbours: [
                    "People may seem reserved but usually helpful",
                    "Quiet hours enforced; loud parties can bring police",
                    "Keep shared spaces clean"
                ],
                bureaucracy: [
                    "Keep all asylum/residence documents safe with copies",
                    "Rule-based but can be slow; respect appointment times",
                    "Registration at address needed for services",
                    "Legal aid and NGOs help with decision letters and deadlines"
                ],
                work: [
                    "Legal work requires residence and work authorization",
                    "Written contracts essential; never sign without understanding",
                    "Entitled to minimum wage and rest periods",
                    "Contact labour inspectorate or NGOs if exploited"
                ],
                health: [
                    "Access depends on legal status; asylum-seekers get essential care",
                    "Emergency number: 112",
                    "Pharmacies offer advice for minor problems",
                    "Psychological support available; NGOs provide extra help"
                ]
            },
            croatia: {
                bigIdeas: [
                    "Post-war society with strong national identity and family values",
                    "Catholic tradition influential, especially in rural areas",
                    "Tourism drives coastal economy; inland regions quieter"
                ],
                parenting: [
                    "Parents ensure school attendance and good behavior",
                    "Physical punishment discouraged; may involve social services",
                    "Extended family often helps with child care"
                ],
                tipping: [
                    "Not obligatory but common in tourism",
                    "Restaurants: 5–10% for good service",
                    "Cafés and taxis: rounding up usual"
                ],
                relationships: [
                    "Dating and living together before marriage common",
                    "Attitudes toward same-sex relationships vary; cities more open",
                    "Domestic violence illegal; support services exist",
                    "Respect for boundaries and consent essential"
                ],
                neighbours: [
                    "Noise and parking can cause tension; follow building rules",
                    "People friendly but direct; greetings appreciated",
                    "Handle conflicts calmly; involve building manager or police if serious"
                ],
                bureaucracy: [
                    "Ministry of Interior handles asylum and residence permits",
                    "Keep all documents; deadlines for appeals strict",
                    "Registration at address necessary for services",
                    "NGOs offer legal counseling, translation, support"
                ],
                work: [
                    "Legal work requires permit; quotas may exist",
                    "Hospitality, construction, agriculture, tourism jobs common",
                    "Written contracts and social insurance protect you",
                    "Trade unions support in case of exploitation"
                ],
                health: [
                    "Emergency number: 112",
                    "Asylum-seekers get basic care; refugees get broader coverage",
                    "Pharmacies advise on non-emergency problems",
                    "Psychological support via health system and NGOs"
                ]
            },
            greece: {
                bigIdeas: [
                    "Warm, social culture with strong family and community ties",
                    "Greek Orthodox Church influential; freedom of religion exists",
                    "Economic challenges mean unemployment and bureaucracy issues"
                ],
                parenting: [
                    "Children central to family life; grandparents often help",
                    "Schools expect attendance and discipline; Greek helps integration",
                    "Physical punishment frowned upon; can lead to intervention",
                    "School is pathway to services and language learning"
                ],
                tipping: [
                    "Common but flexible",
                    "Restaurants: about 5–10% or rounding up",
                    "Cafés, taxis, deliveries: small change appreciated"
                ],
                relationships: [
                    "Dating and cohabitation common, especially in cities",
                    "Same-sex relationships exist; attitudes vary by area and age",
                    "Harassment not tolerated legally, though may occur",
                    "Consent and respectful behavior important"
                ],
                neighbours: [
                    "People talkative and curious; friendly relations help",
                    "Building rules about noise, especially late night",
                    "Respect shared spaces; ask before using facilities"
                ],
                bureaucracy: [
                    "Asylum services and police handle procedures; expect delays",
                    "Keep originals and make copies or photos",
                    "Registration with municipality and tax number (AFM) may be needed",
                    "NGOs specialize in legal support, translations, assistance"
                ],
                work: [
                    "Informal work common but offers no protection",
                    "Sectors: tourism, agriculture, construction, services",
                    "Minimum wage set by law; can report violations",
                    "Trade unions and NGOs help understand rights"
                ],
                health: [
                    "Emergency number: 112",
                    "Public hospitals provide care; access depends on status",
                    "Pharmacies widespread and can advise",
                    "Mental health support via public services and NGOs"
                ]
            },
            bosniaHerzegovina: {
                bigIdeas: [
                    "Post-war society with ethnic diversity and complex politics",
                    "Hospitality strong; many know about displacement",
                    "Economy weaker than EU neighbours; jobs limited"
                ],
                parenting: [
                    "Family and extended family play big role",
                    "Schools emphasize attendance and respect",
                    "Physical punishment increasingly questioned"
                ],
                tipping: [
                    "Common but not strictly required",
                    "Restaurants: 5–10% or rounding up",
                    "Cafés and taxis: small change normal"
                ],
                relationships: [
                    "Attitudes vary by city/rural area and community",
                    "Dating and cohabitation common in cities",
                    "Same-sex relationships face stigma; law gives some protection",
                    "Violence and harassment illegal; victims can seek support"
                ],
                neighbours: [
                    "People friendly and curious; gossip common in small communities",
                    "Quiet hours and building rules exist in cities",
                    "Handle conflicts calmly; avoid escalation"
                ],
                bureaucracy: [
                    "Procedures complex and slow",
                    "Always carry ID and keep documents safe",
                    "UNHCR, IOM, and NGOs are key support sources"
                ],
                work: [
                    "Labour market small; access limited for asylum-seekers",
                    "Informal work common but risky; exploitation a concern",
                    "Insist on basic written agreements if working"
                ],
                health: [
                    "Emergency number: 112",
                    "Public health care under-resourced; access depends on status",
                    "NGOs provide medical and psychological services"
                ]
            },
            cyprus: {
                bigIdeas: [
                    "Island with Greek-Cypriot majority and Turkish-Cypriot community",
                    "Strong family and religious traditions; major tourism destination",
                    "English widely spoken"
                ],
                parenting: [
                    "Children central to family life; extended family helps",
                    "Schools expect discipline and attendance",
                    "Harsh punishment can involve authorities"
                ],
                tipping: [
                    "Common in tourism areas",
                    "Restaurants: 5–10% if not included",
                    "Cafés and taxis: rounding up normal"
                ],
                relationships: [
                    "Dating and cohabitation common in many circles",
                    "Attitudes toward same-sex relationships changing but can be conservative",
                    "Consent and respectful behavior expected and protected by law"
                ],
                neighbours: [
                    "People friendly and curious, especially in smaller communities",
                    "Respect quiet hours and parking norms",
                    "Keep common areas tidy; follow waste rules"
                ],
                bureaucracy: [
                    "State authorities handle asylum; delays possible",
                    "Keep copies of documents; respect deadlines",
                    "Registration key for health care, schooling, allowances",
                    "NGOs provide legal support and interpretation"
                ],
                work: [
                    "Tourism, agriculture, domestic work, construction employ foreigners",
                    "Legal work requires permit and often employer-tied contract",
                    "Exploitation occurs; seek NGO or labour authority advice if abused"
                ],
                health: [
                    "Emergency number: 112",
                    "Public and private services; access depends on status",
                    "Emergency treatment provided; follow-up may require registration",
                    "Psychological support via NGOs and public services"
                ]
            },
            malta: {
                bigIdeas: [
                    "Small, densely populated island state",
                    "Catholic tradition strong; English is official language alongside Maltese",
                    "Society shaped by tourism and maritime activities"
                ],
                parenting: [
                    "Children visible in public life and expected to be well behaved",
                    "School attendance compulsory; bullying can be reported",
                    "Physical punishment discouraged"
                ],
                tipping: [
                    "Fairly common in tourism",
                    "Restaurants: around 10% if good and not included",
                    "Cafés and taxis: rounding up appreciated"
                ],
                relationships: [
                    "Dating and cohabitation common; attitudes becoming more liberal",
                    "Malta has advanced LGBT+ protections; same-sex marriage legal",
                    "Consent and equality important socially and legally"
                ],
                neighbours: [
                    "Living spaces close together; noise travels easily",
                    "Quiet hours and building rules must be respected",
                    "Friendly greetings help; trust may take time"
                ],
                bureaucracy: [
                    "Services may be centralized; detention or reception centres exist",
                    "Keep documents safe; renew permits before expiry",
                    "Registration important for health, education, support",
                    "NGOs active in legal aid, integration, language classes"
                ],
                work: [
                    "Sectors: tourism, hospitality, construction, domestic work, services",
                    "Legal employment requires permits and often ID number and bank account",
                    "Should receive payslips and legal minimum wage",
                    "Contact Department of Industrial Relations or NGOs for help"
                ],
                health: [
                    "Emergency number: 112",
                    "Public hospitals provide care; status affects costs and access",
                    "Pharmacies help with minor issues; some open late",
                    "Mental health support via public system and NGOs"
                ]
            },
            portugal: {
                bigIdeas: [
                    "Friendly, relatively relaxed society with strong family ties",
                    "Catholic background; generally tolerant and pluralistic",
                    "Coastal climate mild; cost of living high in Lisbon/Porto"
                ],
                parenting: [
                    "Children usually welcome in restaurants and public spaces",
                    "Schools require attendance, homework, parental involvement",
                    "Physical punishment socially disapproved",
                    "Supporting children's Portuguese language crucial"
                ],
                tipping: [
                    "Not mandatory, but common in tourism",
                    "Restaurants: 5–10% if not included",
                    "Cafés and taxis: rounding up polite"
                ],
                relationships: [
                    "Dating, cohabitation, children outside marriage widely accepted",
                    "Same-sex marriage legal and generally accepted",
                    "Consent and respect central; harassment can lead to arrest"
                ],
                neighbours: [
                    "People talkative and friendly, especially in smaller towns",
                    "Quiet hours at night; loud parties can bring police",
                    "Respect shared spaces and waste schedules"
                ],
                bureaucracy: [
                    "Immigration service manages permits and asylum",
                    "Expect queues and slow processing; keep documents",
                    "Municipal registration helps access health and social programs",
                    "NGOs and councils offer legal help, language courses, support"
                ],
                work: [
                    "Hospitality, agriculture, construction, services hire migrants",
                    "Work contracts and social security registration essential",
                    "Minimum wage defined by law; unpaid overtime warning sign",
                    "Trade unions and inspectorates help address exploitation"
                ],
                health: [
                    "National Health Service (SNS) offers low-cost or free care",
                    "Emergency number: 112",
                    "Local health centres (centro de saúde) for non-urgent issues",
                    "Psychological support via SNS and NGOs; interpreters may be needed"
                ]
            }
        }
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('mediterranean', mediterraneanData);
    }

})();
