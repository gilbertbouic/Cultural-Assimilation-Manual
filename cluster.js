/**
 * Cultural Assimilation Manual - Cluster Navigation Module
 * Handles cluster-based navigation and content display
 */
(function() {
    'use strict';

    // Cluster data with detailed content for each topic
    const clusterData = {
        'northern-europe': {
            title: 'Northern Europe (Scandinavia & Nordic Countries)',
            countries: '🇸🇪 Sweden • 🇳🇴 Norway • 🇩🇰 Denmark • 🇫🇮 Finland • 🇮🇸 Iceland',
            keyTraits: ['Equality - Everyone is treated equally, and flat hierarchies are common', 
                       'Reserved Communication - Politeness is expressed with minimal small talk; silence is normal, not awkward',
                       'Punctuality - Timekeeping is crucial; being late is seen as disrespectful'],
            topics: {
                peculiarities: [
                    'Silence is valued and not considered awkward',
                    'Personal space is highly respected - maintain distance',
                    'Punctuality is extremely important in all contexts',
                    'Direct but polite communication style',
                    'Work-life balance is sacred',
                    'Consensus-based decision making in workplaces',
                    'Environmental consciousness is deeply ingrained',
                    'Gender equality is fundamental',
                    'Trust in institutions and systems is high',
                    'Modesty and humility are valued over boasting'
                ],
                dating: [
                    'Dating culture is very egalitarian - either party can initiate',
                    'Going Dutch (splitting bills) is common and expected',
                    'Physical affection in public is generally modest',
                    'Relationships develop slowly with clear communication',
                    'Marriage and cohabitation are equally accepted',
                    'Consent and mutual respect are paramount'
                ],
                communication: [
                    'Small talk is minimal - get to the point politely',
                    'Eye contact shows attentiveness but staring is rude',
                    'Indirect communication through understatement is common',
                    'Wait for your turn to speak - interrupting is very rude',
                    'First names are used quickly, even in professional settings',
                    'Email is preferred for official communication'
                ],
                bureaucracy: [
                    'Most services are digital and highly efficient',
                    'Personal identification number (personnummer/CPR) is essential for everything',
                    'Register with local authorities immediately upon arrival',
                    'Online banking and e-government services are standard',
                    'Appointments are required for most official matters',
                    'Documentation must be translated by authorized translators'
                ],
                rights: [
                    'Strong workers\' rights and union presence',
                    'Freedom of speech is highly protected',
                    'Healthcare and education are rights for residents',
                    'Equal rights regardless of gender, sexuality, or background',
                    'Police interactions are generally respectful and professional',
                    'Right to privacy is strongly protected'
                ],
                health: [
                    'Universal healthcare for residents',
                    'Register with local healthcare center first',
                    'Emergency number: 112 (EU standard)',
                    'Pharmacies (apotek) require prescriptions for most medications',
                    'Mental health services are available and stigma-free',
                    'Preventive care is emphasized'
                ]
            }
        },
        'western-europe': {
            title: 'Central Europe',
            countries: '🇩🇪 Germany • 🇦🇹 Austria • 🇨🇭 Switzerland • 🇱🇮 Liechtenstein • 🇵🇱 Poland • 🇨🇿 Czechia',
            keyTraits: ['Efficiency - Systems are highly organized, and tasks are expected to be completed promptly',
                       'Formality - Communication is formal and polite, especially upon first meetings',
                       'Rule-Focused - Following the law and respecting rules are strongly emphasized'],
            topics: {
                peculiarities: [
                    'Punctuality is sacred - arrive 5 minutes early',
                    'Rules and regulations are taken very seriously',
                    'Formality in address (use titles and last names initially)',
                    'Planning ahead is expected in both personal and professional life',
                    'Quality and precision are highly valued',
                    'Directness in communication without unnecessary politeness',
                    'Quiet hours (Ruhezeit) must be observed',
                    'Recycling and waste separation is mandatory',
                    'Cash is still widely used alongside digital payments',
                    'Privacy is paramount - avoid personal questions initially'
                ],
                dating: [
                    'Dating is formal initially with clear expectations',
                    'Traditional gender roles still influence some interactions',
                    'Splitting bills is becoming more common among younger people',
                    'Relationships progress methodically',
                    'Public displays of affection are moderate',
                    'Meeting family is a serious step indicating commitment'
                ],
                communication: [
                    'Use formal "Sie" until invited to use informal "du"',
                    'Include academic titles (Dr., Prof.) in formal communication',
                    'Be direct and precise - avoid ambiguity',
                    'Written communication is important for official matters',
                    'Maintain eye contact during conversations',
                    'Handshakes are firm and brief'
                ],
                bureaucracy: [
                    'Register at local registration office (Einwohnermeldeamt) immediately',
                    'Extensive documentation required for most processes',
                    'Appointments are mandatory - walk-ins rarely accepted',
                    'Processing times can be lengthy - plan accordingly',
                    'Keep copies of all official documents',
                    'German language proficiency helps significantly'
                ],
                rights: [
                    'Strong legal framework for workers and tenants',
                    'Contracts are legally binding and taken seriously',
                    'Freedom of speech with some historical restrictions',
                    'Strict data protection laws (GDPR origin)',
                    'Right to appeal administrative decisions',
                    'Police require identification - always carry ID'
                ],
                health: [
                    'Mandatory health insurance (public or private)',
                    'Register with a general practitioner (Hausarzt)',
                    'Emergency number: 112',
                    'Appointments needed for most medical visits',
                    'Pharmacies (Apotheke) provide professional advice',
                    'Alternative medicine is widely accepted and covered'
                ]
            }
        },
        'southern-europe': {
            title: 'Southern Europe (Mediterranean)',
            countries: '🇪🇸 Spain • 🇮🇹 Italy • 🇵🇹 Portugal • 🇬🇷 Greece • 🇫🇷 France • 🇲🇹 Malta • 🇨🇾 Cyprus',
            keyTraits: ['Social Connections - Relationships and family take priority, while meals are opportunities to bond',
                       'Relaxed Timekeeping - Punctuality is flexible, and social commitments often run late',
                       'Expressive Communication - Hand gestures and emotional dialogue are part of everyday interactions'],
            topics: {
                peculiarities: [
                    'Family is central to social life and decision-making',
                    'Mealtimes are sacred social occasions, not rushed',
                    'Time is fluid - "on time" may mean 15-30 minutes late',
                    'Loud, animated conversations are normal, not arguments',
                    'Physical contact (kisses on cheeks, hugs) common in greetings',
                    'Life happens outdoors - cafés, piazzas, terraces',
                    'Siesta/afternoon break observed in some regions',
                    'Bureaucracy can be slow and frustrating',
                    'Personal relationships often facilitate formal processes',
                    'Style and appearance matter in social and professional contexts'
                ],
                dating: [
                    'Dating often happens within social circles',
                    'Family approval is important',
                    'Men traditionally take the lead, but this is changing',
                    'Romantic gestures and compliments are common',
                    'Relationships tend to progress more quickly',
                    'Physical affection in public is normal and accepted'
                ],
                communication: [
                    'Expressive hand gestures accompany speech',
                    'Interrupting is acceptable and shows engagement',
                    'Raised voices don\'t necessarily indicate anger',
                    'Personal questions show interest, not rudeness',
                    'Greetings include kisses on cheeks (number varies by country)',
                    'Building rapport before business is important'
                ],
                bureaucracy: [
                    'Processes can be slow - patience is essential',
                    'Personal visits often more effective than online',
                    'Original documents and certified copies required',
                    'Bring all documents even if not explicitly requested',
                    '午 Afternoon hours may be limited due to lunch breaks',
                    'Persistence and follow-up are necessary'
                ],
                rights: [
                    'Workers\' rights exist but enforcement varies',
                    'Family law strongly favors family unit preservation',
                    'Freedom of speech with some cultural sensitivities',
                    'Regional laws can differ significantly within countries',
                    'Police interactions require respect but are generally courteous',
                    'Legal processes can be lengthy'
                ],
                health: [
                    'Public healthcare available but quality varies by region',
                    'Private insurance common for faster access',
                    'Emergency number: 112',
                    'Pharmacists provide extensive medical advice',
                    'Extended family often helps with healthcare decisions',
                    'Alternative and traditional remedies popular'
                ]
            }
        },
        'eastern-europe': {
            title: 'Eastern Europe & Balkans',
            countries: '🇷🇸 Serbia • 🇭🇷 Croatia • 🇧🇦 Bosnia & Herzegovina • 🇲🇪 Montenegro • 🇲🇰 North Macedonia • 🇦🇱 Albania • 🇷🇴 Romania • 🇧🇬 Bulgaria • 🇬🇪 Georgia • 🇸🇮 Slovenia • 🇸🇰 Slovakia',
            keyTraits: ['Hospitality - Guests are treated like family, and generosity is central to social life',
                       'Respect for Tradition - Locals value age-old customs, family hierarchy, and religious practices',
                       'Bureaucracy & Patience - Official processes often require persistence and an understanding of formal etiquette'],
            topics: {
                peculiarities: [
                    'Hospitality is legendary - refusing food/drink can offend',
                    'Family and community bonds are extremely strong',
                    'Respect for elders is fundamental',
                    'Gender roles can be more traditional',
                    'Religious and cultural traditions are deeply respected',
                    'Personal connections ("veza") often facilitate processes',
                    'Direct communication style without excessive politeness',
                    'Giving and receiving gifts is common',
                    'Coffee culture is central to social interaction',
                    'Historical and political topics require sensitivity'
                ],
                dating: [
                    'Traditional gender roles often influence dating',
                    'Family introduction is a significant step',
                    'Men typically expected to pay initially',
                    'Relationships involve family from early stages',
                    'Marriage is still highly valued',
                    'Dating within social/family networks is common'
                ],
                communication: [
                    'Direct and honest communication is valued',
                    'Emotional expression is normal and accepted',
                    'Small talk and personal questions show interest',
                    'Eye contact is important and shows respect',
                    'First names used after initial formality',
                    'Toasting etiquette important in social gatherings'
                ],
                bureaucracy: [
                    'Processes can be complex and time-consuming',
                    'Personal connections can help navigate systems',
                    'Bring all possible documents to appointments',
                    'Language barriers can complicate processes',
                    'Patience and persistence are essential',
                    'Corruption may be encountered - stay firm but polite'
                ],
                rights: [
                    'Legal systems are developing and improving',
                    'Workers\' rights exist but enforcement varies',
                    'Women\'s rights protected by law but traditional attitudes persist',
                    'Freedom of speech exists with some political sensitivities',
                    'Police require respect and proper documentation',
                    'Legal representation recommended for serious matters'
                ],
                health: [
                    'Public healthcare available with varying quality',
                    'Private clinics offer faster, better service',
                    'Emergency number: 112 (most countries)',
                    'Bring cash for medical services',
                    'Pharmacies accessible and knowledgeable',
                    'Traditional medicine and home remedies still common'
                ]
            }
        },
        'baltic': {
            title: 'Baltic Countries',
            countries: '🇪🇪 Estonia • 🇱🇻 Latvia • 🇱🇹 Lithuania',
            keyTraits: ['Nature-Oriented - Outdoor activities are highly popular, and locals maintain a strong connection to their natural surroundings',
                       'Reserved Social Behavior - Interactions begin formally and become warmer over time',
                       'Digital Society - Particularly in Estonia, where many processes are streamlined online'],
            topics: {
                peculiarities: [
                    'Reserved and introverted social behavior initially',
                    'Strong connection to nature and seasonal traditions',
                    'Digital governance and e-services are advanced (especially Estonia)',
                    'Historical memory influences current attitudes',
                    'Privacy and personal space highly valued',
                    'Sauna culture is important social tradition',
                    'Environmental awareness is strong',
                    'Work-life balance is improving and valued',
                    'Multilingualism is common (local language, Russian, English)',
                    'Pride in national identity and independence'
                ],
                dating: [
                    'Dating is egalitarian with modern attitudes',
                    'Relationships develop slowly through friendship',
                    'Gender equality in dating expectations',
                    'Splitting bills is common',
                    'Public displays of affection are moderate',
                    'Trust and loyalty highly valued'
                ],
                communication: [
                    'Initial formality gives way to warmth over time',
                    'Direct and honest communication once comfortable',
                    'Small talk is minimal',
                    'Personal space and privacy respected',
                    'Eye contact maintained during conversation',
                    'English widely spoken, especially among younger people'
                ],
                bureaucracy: [
                    'E-governance makes processes efficient (especially Estonia)',
                    'Digital ID and e-signatures standard',
                    'Registration with local authorities required',
                    'Most services available online 24/7',
                    'Some older systems still require in-person visits',
                    'English support available for most official services'
                ],
                rights: [
                    'EU member states with strong legal frameworks',
                    'Equal rights regardless of gender or background',
                    'Workers\' rights protected by law',
                    'Freedom of speech and press',
                    'Digital rights and data protection emphasized',
                    'Police are professional and generally helpful'
                ],
                health: [
                    'EU standard healthcare systems',
                    'Register with family doctor',
                    'Emergency number: 112',
                    'E-health services available (especially Estonia)',
                    'Pharmacies require prescriptions for most medications',
                    'Mental health services available but still developing'
                ]
            }
        },
        'anglo-sphere': {
            title: 'Anglo Sphere',
            countries: '🇬🇧 United Kingdom • 🇮🇪 Ireland • 🇺🇸 United States • 🇦🇺 Australia • 🇳🇿 New Zealand',
            keyTraits: ['Casual & Independent - Locals often value independence and tend to communicate casually, even with strangers',
                       'Direct Communication - People value honesty, and conversations are often concise and straightforward',
                       'Time Matters - Being "on time" is generally expected and appreciated'],
            topics: {
                peculiarities: [
                    'Individualism and self-reliance are highly valued',
                    'Casual communication even in professional settings',
                    'Queuing (standing in line) is sacred, especially in UK',
                    'Tipping culture varies (essential in US, less so in UK/AU/NZ)',
                    'Punctuality expected but "fashionably late" accepted socially',
                    'Small talk is common and expected',
                    'Privacy and "minding your own business" valued',
                    'Entrepreneurial spirit encouraged',
                    'Diversity and multicultural attitudes (varies by region)',
                    'Sports and pub culture important socially'
                ],
                dating: [
                    'Dating is casual initially with clear communication',
                    'Meeting through apps and online is normalized',
                    'Gender equality in dating expectations',
                    'Splitting bills or taking turns is common',
                    'Relationships can move quickly or slowly',
                    'Marriage less central than in previous generations'
                ],
                communication: [
                    'Direct and straightforward communication style',
                    'First names used immediately, even with superiors',
                    'Small talk about weather, sports is common',
                    'Humor (including self-deprecation) is valued',
                    'Politeness expressed through "please," "thank you," "sorry"',
                    'Eye contact shows engagement and honesty'
                ],
                bureaucracy: [
                    'Systems vary significantly by country',
                    'US: Complex healthcare and tax systems',
                    'UK: NHS for healthcare, National Insurance number needed',
                    'AU/NZ: Relatively straightforward processes',
                    'Online services available but in-person often necessary',
                    'Proof of identity and address essential'
                ],
                rights: [
                    'Strong legal protections for individual rights',
                    'Freedom of speech highly valued',
                    'Workers\' rights vary by country (weakest in US)',
                    'Anti-discrimination laws in place',
                    'Police interactions vary by location and circumstance',
                    'Right to legal representation'
                ],
                health: [
                    'Healthcare systems vary dramatically:',
                    'UK/IE: Public NHS system',
                    'US: Insurance-based (expensive without coverage)',
                    'AU/NZ: Public with private option',
                    'Emergency number: 911 (US), 999 (UK), 000 (AU)',
                    'Register with GP/Primary care physician',
                    'Mental health services available with varying access'
                ]
            }
        },
        'other-europe': {
            title: 'Western European Countries',
            countries: '🇱🇺 Luxembourg • 🇧🇪 Belgium • 🇳🇱 Netherlands',
            keyTraits: ['Multilingualism - Many people speak multiple languages, making communication easier',
                       'Balanced Approach - Cultures value both tradition and progressive ideas, blending modernity with heritage',
                       'Politeness First - Etiquette and good manners are key in public spaces'],
            topics: {
                peculiarities: [
                    'Multilingual environments (often 3-4 languages)',
                    'Cycling culture is dominant (especially Netherlands)',
                    'Progressive social policies on equality and environment',
                    'International and cosmopolitan populations',
                    'High quality of life and work-life balance',
                    'Coffee shop culture (Netherlands has unique meaning)',
                    'Direct communication style (especially Dutch)',
                    'Tolerance and liberal attitudes',
                    'Consensus-based decision making',
                    'Efficiency combined with social warmth'
                ],
                dating: [
                    'Egalitarian and progressive dating culture',
                    'Going Dutch (splitting bills) is expected',
                    'Open communication about expectations',
                    'Relationships develop at natural pace',
                    'Cohabitation before marriage is normal',
                    'LGBT+ relationships fully accepted'
                ],
                communication: [
                    'Dutch directness can seem blunt but isn\'t meant rudely',
                    'English widely spoken as second language',
                    'Greetings involve handshakes or cheek kisses (Belgium)',
                    'Eye contact and good posture show respect',
                    'Appointments preferred for professional meetings',
                    'Email communication is formal and precise'
                ],
                bureaucracy: [
                    'Efficient systems but extensive documentation required',
                    'Register with local municipality immediately',
                    'Digital services available in multiple languages',
                    'Health insurance mandatory',
                    'Tax systems complex for internationals',
                    'Expect thorough and systematic processes'
                ],
                rights: [
                    'Strong EU legal framework',
                    'Progressive rights for all including LGBT+ community',
                    'Workers\' rights well protected',
                    'Privacy and data protection emphasized',
                    'Freedom of speech and expression',
                    'Police are professional and approachable'
                ],
                health: [
                    'High-quality healthcare systems',
                    'Mandatory health insurance (public or private)',
                    'Register with GP/huisarts',
                    'Emergency number: 112',
                    'Prescription needed for most medications',
                    'Mental health services accessible and destigmatized'
                ]
            }
        }
    };

    let currentCluster = null;

    document.addEventListener('DOMContentLoaded', () => {
        initializeClusterNavigation();
    });

    function initializeClusterNavigation() {
        const menuToggle = document.getElementById('menu-toggle');
        const mainNav = document.getElementById('main-nav');
        const clusterLinks = document.querySelectorAll('.cluster-link');
        const clusterButtons = document.querySelectorAll('.cluster-btn');
        const backToHomeBtn = document.getElementById('back-to-home');
        const exploreClustersBtn = document.getElementById('explore-clusters-btn');

        // Toggle menu
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mainNav && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
            }
        });

        // Cluster navigation from menu
        clusterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const cluster = link.getAttribute('data-cluster');
                showClusterDetail(cluster);
                mainNav.classList.remove('active');
            });
        });

        // Cluster navigation from cards
        clusterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const cluster = btn.getAttribute('data-cluster');
                showClusterDetail(cluster);
            });
        });

        // Cluster cards clickable
        document.querySelectorAll('.cluster-card').forEach(card => {
            card.addEventListener('click', () => {
                const cluster = card.getAttribute('data-cluster');
                if (cluster) {
                    showClusterDetail(cluster);
                }
            });
        });

        // Back to home
        if (backToHomeBtn) {
            backToHomeBtn.addEventListener('click', () => {
                showHomePage();
            });
        }

        // Explore clusters button
        if (exploreClustersBtn) {
            exploreClustersBtn.addEventListener('click', () => {
                const clustersSection = document.getElementById('clusters-overview');
                if (clustersSection) {
                    clustersSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    function showClusterDetail(clusterKey) {
        currentCluster = clusterKey;
        const cluster = clusterData[clusterKey];
        
        if (!cluster) {
            console.error('Cluster not found:', clusterKey);
            return;
        }

        // Hide home sections
        document.getElementById('hero').style.display = 'none';
        document.getElementById('topics-overview').style.display = 'none';
        document.getElementById('clusters-overview').style.display = 'none';

        // Show cluster detail
        const detailSection = document.getElementById('cluster-detail');
        detailSection.style.display = 'block';

        // Populate cluster details
        document.getElementById('cluster-title').textContent = cluster.title;
        document.getElementById('cluster-countries-list').innerHTML = 
            `<p class="cluster-countries" style="font-size: 1.2rem; margin: 20px 0;">${cluster.countries}</p>`;
        
        const traitsHTML = cluster.keyTraits.map(trait => `<li>${trait}</li>`).join('');
        document.getElementById('cluster-key-traits').innerHTML = 
            `<div style="background: var(--background-color); padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: var(--primary-color); margin-top: 0;">Key Cultural Traits</h3>
                <ul style="line-height: 1.8;">${traitsHTML}</ul>
            </div>`;

        // Populate topics
        populateTopic('peculiarities', cluster.topics.peculiarities);
        populateTopic('dating', cluster.topics.dating);
        populateTopic('communication', cluster.topics.communication);
        populateTopic('bureaucracy', cluster.topics.bureaucracy);
        populateTopic('rights', cluster.topics.rights);
        populateTopic('health', cluster.topics.health);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function populateTopic(topicKey, content) {
        const topicSection = document.getElementById(`topic-${topicKey}`);
        if (topicSection) {
            const contentDiv = topicSection.querySelector('.topic-content');
            if (contentDiv && Array.isArray(content)) {
                const listHTML = content.map(item => `<li>${item}</li>`).join('');
                contentDiv.innerHTML = `<ul>${listHTML}</ul>`;
            }
        }
    }

    function showHomePage() {
        // Show home sections
        document.getElementById('hero').style.display = 'block';
        document.getElementById('topics-overview').style.display = 'block';
        document.getElementById('clusters-overview').style.display = 'block';

        // Hide cluster detail
        document.getElementById('cluster-detail').style.display = 'none';

        currentCluster = null;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Expose functions globally if needed
    window.CAM_CLUSTER = {
        showClusterDetail: showClusterDetail,
        showHomePage: showHomePage,
        getCurrentCluster: () => currentCluster
    };

})();
