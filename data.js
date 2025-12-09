// Cultural data for all countries and categories
const culturalData = {
    england: {
        name: "United Kingdom",
        flag: "🇬🇧",
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in the United Kingdom 🤝",
            content: `
                <h3>General Public Behavior</h3>
                <p>British society values quiet consideration, respect for personal space, and patience. Understanding both legal requirements and social expectations is essential for successful integration.</p>

                <h3>Legal Requirements</h3>
                <p>Several laws govern public conduct in the UK. Violations can result in fines or criminal charges.</p>

                <div class="warning">
                    <strong>Anti-Social Behaviour Laws</strong>
                    <ul>
                        <li><strong>Littering:</strong> Fixed penalty fines £50-£150; court fines up to £2,500</li>
                        <li><strong>Noise nuisance:</strong> Excessive noise especially 11 PM - 7 AM can result in warnings, fines, and equipment confiscation</li>
                        <li><strong>Public drinking:</strong> Many areas have Public Space Protection Orders banning alcohol; check for signs</li>
                        <li><strong>Dog fouling:</strong> Fines up to £1,000 for not picking up after your dog</li>
                    </ul>
                </div>

                <div class="important">
                    <strong>Public Order Offences</strong>
                    <ul>
                        <li><strong>Threatening behavior:</strong> Words or actions causing harassment, alarm, or distress are criminal; includes hate speech</li>
                        <li><strong>Drunk and disorderly:</strong> Being visibly drunk and causing disturbance is arrestable offense</li>
                        <li><strong>Harassment:</strong> Repeatedly following, threatening, or causing fear is illegal</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>Tip:</strong> The UK protects freedom of speech and peaceful protest, but hate speech inciting hatred against protected groups (race, religion, sexuality, disability) is criminal.
                </div>

                <h3>Noise and Quiet Hours</h3>
                <ul>
                    <li><strong>After 11 PM:</strong> Keep noise minimal - no loud music, shouting, or repeated loud sounds</li>
                    <li><strong>Sunday mornings:</strong> Avoid noisy activities (drilling, lawn mowing) before 10 AM</li>
                    <li><strong>DIY work:</strong> Keep disruptive work to reasonable weekday hours; warn neighbors of particularly noisy projects</li>
                    <li><strong>Pet noise:</strong> Persistent dog barking is major source of disputes; address promptly</li>
                </ul>

                <h3>Being a Good Neighbor</h3>
                <ul>
                    <li><strong>Basic greetings:</strong> Simple "Hello" or "Morning" when you see neighbors; acknowledgement expected</li>
                    <li><strong>Garden maintenance:</strong> Keep property reasonably tidy; overgrown gardens affect property values</li>
                    <li><strong>Parking consideration:</strong> Never block driveways or dropped kerbs; be considerate of street space</li>
                    <li><strong>Bin management:</strong> Put bins out on correct days and return promptly</li>
                    <li><strong>Parcel acceptance:</strong> Accepting neighbors' parcels builds goodwill</li>
                    <li><strong>Party notice:</strong> Warn immediate neighbors in advance of parties</li>
                    <li><strong>Dispute resolution:</strong> Talk to neighbors calmly first; use council mediation services if needed</li>
                </ul>

                <h3>Public Transport and Shared Spaces</h3>
                <ul>
                    <li><strong>Queuing:</strong> Absolutely essential - always join back of queue, never push in</li>
                    <li><strong>Escalators:</strong> Stand right, walk left (especially London Underground)</li>
                    <li><strong>Boarding transport:</strong> Let people off before getting on; give up seats for elderly, pregnant, or disabled</li>
                    <li><strong>Volume control:</strong> Keep voices down; quiet carriages prohibit phone calls</li>
                    <li><strong>Headphones required:</strong> Never play music aloud on public transport</li>
                    <li><strong>Pavement etiquette:</strong> Walk at reasonable pace; don't stop suddenly; be aware of others</li>
                    <li><strong>Door holding:</strong> Hold doors for person behind you; say thank you when done for you</li>
                    <li><strong>Apologizing:</strong> "Sorry" used frequently - for excuse me, to get attention, or general acknowledgement</li>
                </ul>

                <h3>Shops, Restaurants, and Pubs</h3>
                <ul>
                    <li><strong>Shop greetings:</strong> "Hello" and "thank you" to staff is polite</li>
                    <li><strong>Browsing:</strong> Generally left alone; staff won't follow you</li>
                    <li><strong>Getting attention:</strong> Make eye contact or raise hand slightly; never shout or snap fingers</li>
                    <li><strong>Tipping:</strong> Not obligatory; 10-15% appreciated in restaurants (check for service charge on bill)</li>
                    <li><strong>Pub rounds:</strong> Groups take turns buying drinks for everyone; social expectation to participate</li>
                    <li><strong>Bar space:</strong> Get drinks and move if others waiting; don't linger at bar</li>
                </ul>

                <h3>Public Services</h3>
                <ul>
                    <li><strong>Punctuality:</strong> Be on time for appointments; late arrivals often forfeit GP slots</li>
                    <li><strong>Patience required:</strong> Queues and waiting common; anger toward staff seen as unreasonable</li>
                    <li><strong>Documentation:</strong> Bring required ID, proof of address, reference numbers</li>
                    <li><strong>Politeness:</strong> Always use please and thank you, even with slow service</li>
                </ul>

                <h3>Community Integration</h3>
                <ul>
                    <li><strong>Local events:</strong> Attend village fetes, community fairs, charity events, seasonal celebrations</li>
                    <li><strong>Volunteering:</strong> Highly valued - charity shops, food banks, community groups, school PTAs</li>
                    <li><strong>Clubs and societies:</strong> Football teams, running clubs, book clubs, hobby groups facilitate integration</li>
                    <li><strong>Faith communities:</strong> Many have active outreach; community centers run groups and activities</li>
                    <li><strong>School involvement:</strong> Natural way to meet other local parents</li>
                </ul>

                <h3>Environmental Responsibilities</h3>
                <ul>
                    <li><strong>Recycling:</strong> Mandatory; councils provide separate bins (general, recycling, garden, food)</li>
                    <li><strong>Water conservation:</strong> Observe summer hosepipe bans</li>
                    <li><strong>Dog waste:</strong> Always carry and use poo bags; use designated bins</li>
                    <li><strong>Countryside code:</strong> Follow paths, close gates, don't litter, control dogs, respect wildlife</li>
                </ul>

                <div class="important">
                    <strong>Important:</strong> British public conduct centers on being quiet, considerate, and patient. Politeness, proper queuing, and respecting personal space are fundamental to fitting in.
                </div>
            `
        },
        relationships: {
            title: "💕 Module 1: Relationships & Respect in the United Kingdom 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>British society values personal freedom, privacy, and respect for individual boundaries. While modern and liberal, there are important cultural expectations around relationships and social interactions that are essential to understand.</p>
                
                <h3>Legal Requirements</h3>
                <p>Understanding UK law regarding relationships is crucial. Breaking these laws can result in serious criminal penalties.</p>
                
                <div class="warning">
                    <strong>Age of Consent</strong>
                    <ul>
                        <li><strong>Age limit is 16:</strong> Sexual contact with anyone under 16 is a serious crime with no exceptions</li>
                        <li><strong>Positions of trust:</strong> Teachers, coaches, doctors, and similar professionals face age limit of 18 for those in their care</li>
                        <li><strong>Ignorance not accepted:</strong> "I thought they were older" is never a valid defense; responsibility is entirely on you</li>
                    </ul>
                </div>

                <div class="important">
                    <strong>Consent Requirements</strong>
                    <ul>
                        <li><strong>Clear consent required:</strong> Silence, friendliness, or intoxication do not constitute consent</li>
                        <li><strong>"No" means no:</strong> Continuing after refusal constitutes harassment</li>
                        <li><strong>Enthusiastic agreement needed:</strong> Consent must be freely and clearly given</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>Tip:</strong> The UK has strong equality laws. Same-sex relationships are legal, normal, and protected. Gender-based or sexuality-based discrimination is not tolerated.
                </div>

                <h3>Dress and Appearance</h3>
                <p>The UK values personal freedom in dress, but context matters. The key concept is "making an effort" - dressing appropriately for the situation shows respect.</p>

                <ul>
                    <li><strong>Daily life:</strong> Casual and comfortable; no strict rules</li>
                    <li><strong>Social settings (pubs, casual gatherings):</strong> Smart casual is safe - clean jeans or chinos with decent shirt or jumper</li>
                    <li><strong>Nice occasions (restaurants, dates):</strong> Dress up to show respect for the person and place</li>
                    <li><strong>Personal expression:</strong> Unique styles generally accepted, especially in cities</li>
                    <li><strong>Understatement valued:</strong> Looking good without appearing to try too hard is the British way</li>
                </ul>

                <h3>Social Interactions</h3>
                <p>British people are generally reserved and value personal space and privacy.</p>

                <ul>
                    <li><strong>Public affection:</strong> Holding hands and brief kisses acceptable; extended passionate displays make people uncomfortable</li>
                    <li><strong>Personal space:</strong> Maintain arm's length distance; uninvited touching often seen as intrusive</li>
                    <li><strong>Compliments:</strong> Safe to compliment choices (clothing, accessories); comments about physical appearance can seem forward</li>
                    <li><strong>Conversation initiation:</strong> Use situation as starting point; respect signals to end conversation (short answers, turning away)</li>
                </ul>

                <h3>Dating Culture</h3>
                <ul>
                    <li><strong>Alcohol-centered socializing:</strong> "Going for a drink" is standard first date - casual and low-pressure</li>
                    <li><strong>Bill payment:</strong> Traditional "man pays" rule outdated; splitting bills or alternating rounds is common</li>
                    <li><strong>Age gaps:</strong> Large age differences (10+ years) can raise eyebrows, especially with younger partners</li>
                    <li><strong>Handling rejection:</strong> Polite acceptance and moving on is only acceptable response; persistence damages reputation</li>
                    <li><strong>Loyalty valued:</strong> Infidelity considered serious betrayal</li>
                    <li><strong>Physical intimacy:</strong> Don't assume dates end intimately; respectful ending and arranging next meeting is appropriate</li>
                </ul>

                <div class="important">
                    <strong>Important:</strong> British relationship culture centers on respect - for the law, for personal space, and for the right to say no. Following these principles ensures positive social interactions.
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in the United Kingdom 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>British communication is characterized by indirect expression, politeness, and understatement. Understanding what is said versus what is meant is essential for effective interaction.</p>

                <h3>Indirect Communication Patterns</h3>
                <p>The British often avoid saying what they mean directly, preferring polite euphemisms and understatement.</p>

                <ul>
                    <li><strong>"That's interesting":</strong> Often means disagreement or thinking it's a terrible idea</li>
                    <li><strong>"I'll bear that in mind":</strong> Likely won't be done or has been forgotten</li>
                    <li><strong>"With the greatest respect":</strong> About to completely disagree</li>
                    <li><strong>"I'm sure it's my fault, but...":</strong> Indicating it's actually your fault</li>
                    <li><strong>"Not bad":</strong> Actually quite good or excellent</li>
                    <li><strong>"Could we consider other options?":</strong> Don't like your idea at all</li>
                    <li><strong>"I hear what you're saying":</strong> Disagree and wish you'd stop</li>
                    <li><strong>"Fine":</strong> Can mean anything from great to furious</li>
                </ul>

                <div class="tip">
                    <strong>Tip:</strong> Mildly positive statements often mean very positive; mildly negative statements often mean quite harsh. The more polite the phrasing, the more attention to what's not being said directly.
                </div>

                <h3>Essential Politeness Words</h3>
                <p>"Please," "thank you," and "sorry" are fundamental to British social interaction and must be used constantly.</p>

                <ul>
                    <li><strong>Please:</strong> Add to every request, no matter how small; essential even when ordering or asking directions</li>
                    <li><strong>Thank you:</strong> Say after everything - doors held, bus stops, receiving anything; variations include "Thanks," "Cheers," "Ta," "Much appreciated"</li>
                    <li><strong>Sorry:</strong> Used for everything - as apology, excuse me, didn't hear you, or general acknowledgement; saying sorry even when someone else is at fault is normal</li>
                </ul>

                <div class="warning">
                    <strong>Important:</strong> Forgetting these words is one of the fastest ways to be seen as rude. They are non-negotiable basics of social interaction in the UK.
                </div>

                <h3>Small Talk Culture</h3>
                <p>Small talk is a social ritual, not just time-filling. Pleasantries precede getting to the point.</p>

                <ul>
                    <li><strong>Weather:</strong> Ultimate safe topic - always acceptable conversation starter</li>
                    <li><strong>Football and sports:</strong> "Did you see the match?" is common opener</li>
                    <li><strong>Holidays and travel:</strong> "Been anywhere nice recently?"</li>
                    <li><strong>TV shows:</strong> Especially British programs</li>
                    <li><strong>Local events:</strong> Area happenings, traffic, new establishments</li>
                </ul>

                <h3>Topics to Avoid</h3>
                <ul>
                    <li><strong>Money and salary:</strong> Very private; never ask what someone earns</li>
                    <li><strong>Politics:</strong> Can become heated quickly; proceed with caution</li>
                    <li><strong>Religion:</strong> Considered private unless they raise it</li>
                    <li><strong>Royal Family:</strong> Opinions vary wildly</li>
                    <li><strong>Age:</strong> Especially with women</li>
                </ul>

                <div class="tip">
                    <strong>Tip:</strong> Short, one-word answers and lack of eye contact signal disinterest in conversation. Don't take it personally - respect their preference for privacy.
                </div>

                <h3>British Mindset and Attitudes</h3>
                <ul>
                    <li><strong>Understatement valued:</strong> Distrust over-enthusiasm; prefer "not bad" to "amazing"; self-deprecation valued over boasting</li>
                    <li><strong>Emotional restraint:</strong> "Keep calm and carry on" - visible anger or making scenes extremely frowned upon; maintain polite demeanor even when furious</li>
                    <li><strong>Patience expected:</strong> Accept queuing, waiting, delays with grace; loud complaining marks you as difficult</li>
                    <li><strong>Self-deprecating humor:</strong> Making fun of yourself builds trust; laughing at mistakes defuses situations</li>
                </ul>

                <div class="important">
                    <strong>British Humor:</strong> Often dry, sarcastic, and deadpan. Statements that sound insulting may be jokes. Context and tone matter greatly. When in doubt, smile and learn to read it over time.
                </div>

                <h3>Communication Mistakes to Avoid</h3>
                <ul>
                    <li><strong>Volume:</strong> Speaking too loudly makes people uncomfortable</li>
                    <li><strong>Direct demands:</strong> "I want" sounds demanding; use "Could I possibly have...?"</li>
                    <li><strong>Boasting:</strong> Talking up achievements seen as tacky</li>
                    <li><strong>Loud phone calls:</strong> Keep calls brief and quiet on public transport</li>
                    <li><strong>Public complaints:</strong> Making scenes loses sympathy even if right</li>
                    <li><strong>Staring:</strong> Prolonged eye contact with strangers considered aggressive</li>
                </ul>

                <h3>Context-Specific Communication</h3>

                <h4>Workplace</h4>
                <ul>
                    <li>Emails: Start with "Hi/Dear [Name]" and end with "Kind regards/Best wishes"</li>
                    <li>Soft requests: "Would you mind..." "When you get a chance..." "Could you possibly..."</li>
                    <li>Indirect criticism: Feedback wrapped in positives</li>
                    <li>Small talk before business common in meetings</li>
                </ul>

                <h4>Shops and Services</h4>
                <ul>
                    <li>"Excuse me" or "Sorry" to get attention - never snap fingers or shout</li>
                    <li>"I was wondering if..." softer than "Do you have..."</li>
                    <li>Stay calm and polite for better service</li>
                </ul>

                <h4>With Officials</h4>
                <ul>
                    <li>Be polite and patient even when frustrated</li>
                    <li>Have documents ready and be organized</li>
                    <li>"Thank you for your help" at end appreciated</li>
                </ul>

                <div class="tip">
                    <strong>Tip:</strong> British communication is about reading between the lines, remaining polite when frustrated, and never making a scene. Master understatement, use please and thank you constantly, and when in doubt - apologize.
                </div>
            `
        },
        social: {
            title: "Social Ethics in the United Kingdom",
            content: `
                <h3>General Social Norms</h3>
                <p>English society values politeness, queuing (forming orderly lines), and respecting personal space. The British are known for their reserved nature, especially with strangers.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>A firm handshake is the standard greeting in formal situations</li>
                    <li>Friends may greet with a brief hug or kiss on the cheek</li>
                    <li>"How do you do?" is a formal greeting (respond with the same phrase)</li>
                    <li>"Alright?" or "You alright?" is a casual greeting meaning "Hello"</li>
                </ul>
                
                <h3>Personal Space</h3>
                <p>The English value their personal space. Maintain about an arm's length distance when speaking with someone. Avoid physical contact unless you know the person well.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Always say "please," "thank you," and "sorry" - these are essential in British culture. Apologizing, even when not at fault, is common.
                </div>
                
                <h3>Queuing Culture</h3>
                <p>The British take queuing very seriously. Always join the back of a queue and wait your turn. Jumping the queue is considered extremely rude.</p>
                
                <div class="warning">
                    <strong>Note:</strong> Direct eye contact is appreciated but should not be prolonged as it can be seen as aggressive.
                </div>
            `
        },
        conversation: {
            title: "Conversation Etiquette in the United Kingdom",
            content: `
                <h3>Safe Topics</h3>
                <ul>
                    <li>Weather (a classic British conversation starter)</li>
                    <li>Sports, especially football (soccer)</li>
                    <li>Travel and holidays</li>
                    <li>Current events (keeping views moderate)</li>
                    <li>Tea and food</li>
                </ul>
                
                <h3>Topics to Avoid</h3>
                <ul>
                    <li>Personal salary or finances</li>
                    <li>Age (especially with women)</li>
                    <li>Religion and politics with strangers</li>
                    <li>The Royal Family (opinions vary greatly)</li>
                </ul>
                
                <h3>Communication Style</h3>
                <p>The British often use understatement, irony, and self-deprecating humor. They may say the opposite of what they mean, so context is important.</p>
                
                <div class="important">
                    <strong>Important:</strong> "Not bad" often means "quite good," and "interesting" might mean someone disagrees. Learn to read between the lines.
                </div>
                
                <h3>Small Talk</h3>
                <p>Small talk is valued. Don't jump straight to business or serious topics. Start with pleasantries about the weather or general topics before discussing more substantial matters.</p>
            `
        },
        dating: {
            title: "Dating Culture in the United Kingdom",
            content: `
                <h3>Meeting People</h3>
                <p>Common ways to meet potential partners include:</p>
                <ul>
                    <li>Through mutual friends</li>
                    <li>At pubs, clubs, or social events</li>
                    <li>Dating apps (very popular)</li>
                    <li>Work or university</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <p>British dating is relatively casual compared to some cultures. There's often no formal declaration of dating - relationships develop gradually.</p>
                
                <ul>
                    <li>First dates are often in pubs or for coffee</li>
                    <li>Splitting the bill is common and accepted</li>
                    <li>Physical affection varies but is generally reserved in public</li>
                    <li>Direct communication about intentions is appreciated</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> British humor, including sarcasm and banter, is common in dating. Don't take teasing too seriously - it's often a sign of affection.
                </div>
                
                <h3>Timeline</h3>
                <p>There's no set timeline for relationships. Some people prefer to take things slowly, while others move quickly. Communication about expectations is key.</p>
            `
        },
        marriage: {
            title: "Marriage Customs in the United Kingdom",
            content: `
                <h3>Engagement</h3>
                <p>Engagements typically last 1-2 years. The proposal is usually done by the man, though women proposing is becoming more common.</p>
                
                <h3>Wedding Traditions</h3>
                <ul>
                    <li>Church or civil ceremonies are both common</li>
                    <li>"Something old, something new, something borrowed, something blue"</li>
                    <li>Best man and bridesmaids are traditional</li>
                    <li>Wedding breakfast (reception meal) follows the ceremony</li>
                    <li>Evening reception with dancing and more guests</li>
                </ul>
                
                <h3>Legal Requirements</h3>
                <p>You must give notice at a register office at least 28 days before the ceremony. Both parties must be at least 18 years old.</p>
                
                <div class="important">
                    <strong>Important:</strong> Marriages can be religious or civil, but must be registered with the state to be legally valid.
                </div>
                
                <h3>Modern Trends</h3>
                <p>Cohabitation before marriage is very common. Same-sex marriage has been legal since 2014. Many couples now personalize their ceremonies significantly.</p>
            `
        },
        work: {
            title: "Work Ethics in the United Kingdom",
            content: `
                <h3>Workplace Culture</h3>
                <p>British workplaces value professionalism, punctuality, and efficiency. There's often a clear hierarchy, though modern offices are becoming more egalitarian.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Punctuality is essential - arrive on time or slightly early</li>
                    <li>Meetings should have clear agendas</li>
                    <li>Email communication is formal and polite</li>
                    <li>Teamwork and collaboration are valued</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Standard working hours are typically 9 AM to 5 PM, Monday to Friday. There's growing emphasis on work-life balance, and flexible working is increasingly common.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Tea breaks are an important social ritual in many British workplaces. Offering to make tea for colleagues is a good way to build relationships.
                </div>
                
                <h3>Office Etiquette</h3>
                <ul>
                    <li>Dress codes vary but err on the side of formal when starting</li>
                    <li>Avoid discussing salary with colleagues</li>
                    <li>After-work socializing (pub visits) is common but optional</li>
                    <li>Direct criticism is often softened with politeness</li>
                </ul>
            `
        },
        civic: {
            title: "Civic Duties in the United Kingdom",
            content: `
                <h3>Voting</h3>
                <p>Citizens over 18 can vote in elections. You must register to vote - this isn't automatic. Check your eligibility based on your residency status.</p>
                
                <h3>Jury Service</h3>
                <p>If you're a registered voter aged 18-75, you may be called for jury service. This is a civic duty and you must respond to the summons.</p>
                
                <h3>Paying Taxes</h3>
                <p>Everyone earning above the threshold must pay income tax. National Insurance contributions fund healthcare and pensions. Self-assessment may be required for certain income.</p>
                
                <div class="important">
                    <strong>Important:</strong> The tax year runs from April 6 to April 5. Keep records of income and expenses for tax purposes.
                </div>
                
                <h3>Community Involvement</h3>
                <ul>
                    <li>Volunteering is encouraged and respected</li>
                    <li>Neighborhood watch schemes are common</li>
                    <li>Recycling and environmental responsibility are expected</li>
                    <li>Respecting local bylaws and regulations</li>
                </ul>
            `
        },
        clothing: {
            title: "Clothing Norms in the United Kingdom",
            content: `
                <h3>General Style</h3>
                <p>British style is often described as classic and understated. Quality over quantity is valued. Practical clothing for the changeable weather is essential.</p>
                
                <h3>Workplace Attire</h3>
                <ul>
                    <li>Corporate: Suits, formal dresses, polished shoes</li>
                    <li>Business casual: Smart trousers, blouses, smart shoes</li>
                    <li>Casual: Jeans with smart tops are often acceptable</li>
                </ul>
                
                <h3>Weather Considerations</h3>
                <p>Always be prepared for rain - a good waterproof jacket or umbrella is essential. Layers are recommended as weather can change quickly.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Invest in quality outerwear and waterproof shoes. A good coat is considered an essential wardrobe item.
                </div>
                
                <h3>Formal Occasions</h3>
                <ul>
                    <li>Black tie: Tuxedo/dinner jacket for men, evening dress for women</li>
                    <li>Smart casual: Interpret this as leaning toward smart</li>
                    <li>Wedding attire: Check invitation for dress code</li>
                </ul>
            `
        },
        hygiene: {
            title: "Hygiene Standards in the United Kingdom",
            content: `
                <h3>Personal Hygiene Expectations</h3>
                <p>Daily showering or bathing is the norm. Deodorant is considered essential. Clean, well-maintained clothing is expected.</p>
                
                <h3>Public Hygiene</h3>
                <ul>
                    <li>Cover your mouth when coughing or sneezing</li>
                    <li>Wash hands frequently, especially before eating</li>
                    <li>Dispose of litter properly - littering is subject to fines</li>
                    <li>Clean up after pets</li>
                </ul>
                
                <h3>Dental Care</h3>
                <p>Regular dental checkups are recommended. Good dental hygiene is valued in social and professional settings.</p>
                
                <div class="important">
                    <strong>Important:</strong> NHS dental care is available but may require registration and has associated costs. Private dental care is also widely available.
                </div>
                
                <h3>Home Hygiene</h3>
                <ul>
                    <li>Keep common areas in shared housing clean</li>
                    <li>Recycling is mandatory in most areas</li>
                    <li>Remove shoes indoors at others' homes if asked</li>
                </ul>
            `
        },
        citizenship: {
            title: "Path to Citizenship in the United Kingdom",
            content: `
                <h3>Requirements for British Citizenship</h3>
                <ul>
                    <li>Be at least 18 years old</li>
                    <li>Have lived in the UK for at least 5 years (or 3 if married to a British citizen)</li>
                    <li>Hold Indefinite Leave to Remain (ILR) or settled status</li>
                    <li>Meet the English language requirement</li>
                    <li>Pass the Life in the UK test</li>
                </ul>
                
                <h3>Life in the UK Test</h3>
                <p>This test covers British values, history, and traditions. Study the official handbook thoroughly. The test has 24 questions and you need 75% to pass.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Take practice tests online before the real exam. The official handbook "Life in the United Kingdom: A Guide for New Residents" is essential reading.
                </div>
                
                <h3>The Citizenship Ceremony</h3>
                <p>Successful applicants must attend a citizenship ceremony where they pledge allegiance to the Crown and receive their certificate of naturalization.</p>
                
                <h3>Benefits of Citizenship</h3>
                <ul>
                    <li>British passport</li>
                    <li>Right to vote in all elections</li>
                    <li>Access to public funds without restrictions</li>
                    <li>No immigration restrictions on employment</li>
                </ul>
            `
        },
        economicIntegration: {
            title: "💷 Module 4: Economic Integration – A Realist Guide to Work, Money, and Getting By 💼",
            content: `
                <p>Right, let's talk about the thing that actually keeps the lights on: work and money. 💸 This isn't going to be a fluffy guide about "following your dreams" – it's a practical, honest look at what it takes to survive and thrive economically in the United Kingdom, especially outside the big cities. 🏡</p>
                
                <p>Economic self-sufficiency isn't just about paying bills – in English culture, it's deeply tied to self-respect, community standing, and how you're perceived by others. 🎯 Let's get into it! 💪</p>

                <h3>🔧 Part 1: The English Work Ethic – What's Actually Expected</h3>
                <p>Forget what you might have heard about "lazy Brits." 😅 The reality is that working hard is deeply valued here – but it comes with some very specific expectations.</p>

                <div class="important">
                    <strong>💼 Core Work Values</strong>
                    <ul>
                        <li><strong>Reliability:</strong> Turning up on time, every time, is non-negotiable. ⏰ Being consistently present matters more than occasional brilliance.</li>
                        <li><strong>Honesty:</strong> If you can't do something, say so. Lying about skills or experience will catch up with you. 🤥❌</li>
                        <li><strong>Getting on with it:</strong> Complaining is fine (in moderation!), but you're expected to get the job done regardless. 💪</li>
                        <li><strong>Not being "above" any work:</strong> Taking any honest work while you find something better is respected. Turning down work because it's "beneath you" is not. 🙅</li>
                    </ul>
                </div>

                <h4>⚠️ What "Hard Work" Actually Means Here:</h4>
                <ul>
                    <li>🕐 <strong>Punctuality:</strong> Arriving 5-10 minutes early is expected. Arriving on time is already borderline late. Being actually late regularly will cost you your job.</li>
                    <li>📵 <strong>Focus:</strong> When you're at work, you work. Excessive phone use, long personal calls, or "looking busy" while doing nothing is noticed and resented.</li>
                    <li>🤝 <strong>Teamwork:</strong> Don't be the person who does the bare minimum while others pick up the slack. It won't stay secret for long.</li>
                    <li>🙊 <strong>No Drama:</strong> Keep personal problems at home. Coming to work with a "professional face" is expected, even when life is difficult.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Unwritten Rule</strong>
                    <p>The English respect "grafters" – people who work hard without making a fuss about it. 🔨 Talking about how hard you work is less valued than simply doing it. Let your actions speak, and people will notice. 👀</p>
                </div>

                <h3>🏘️ Part 2: Job Market Realities in Non-Urban Areas</h3>
                <p>If you're settling outside London or other major cities, here's the honest truth about employment. 📍 The opportunities are different – not necessarily worse, but definitely different.</p>

                <h4>📊 What Jobs Are Actually Available:</h4>
                <ul>
                    <li>🏥 <strong>Health and Social Care:</strong> Massive demand. Care homes, NHS support roles, home care – always hiring. The work is hard, the pay modest, but it's stable employment. 👩‍⚕️</li>
                    <li>🌾 <strong>Agriculture and Food Processing:</strong> Seasonal work on farms, packing, processing. Physical work, often early hours. Good for building a work history. 🥕</li>
                    <li>🚚 <strong>Warehousing and Logistics:</strong> Distribution centres are often in non-urban areas. Amazon, supermarket distribution, delivery driving. Shift work is common. 📦</li>
                    <li>🍽️ <strong>Hospitality:</strong> Pubs, hotels, restaurants, especially in tourist areas. Variable hours, often includes weekends. Tips can supplement income. 🍺</li>
                    <li>🔧 <strong>Trades:</strong> Plumbing, electrical work, building, landscaping. If you have skills or are willing to train, there's always work. 🛠️</li>
                    <li>🛒 <strong>Retail:</strong> Local shops, supermarkets, charity shops. Often part-time but can lead to management roles. 🏪</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ The Reality Check</strong>
                    <ul>
                        <li>💷 <strong>Pay may be lower:</strong> Outside cities, wages are often lower. But so is the cost of living, especially housing.</li>
                        <li>🚗 <strong>Transport matters:</strong> A driving licence and access to a car can double your job options. Public transport in rural areas is often poor. 🚌❌</li>
                        <li>🤐 <strong>Word travels:</strong> In smaller communities, your reputation matters. Being known as a good worker opens doors. Being known as unreliable closes them. 🚪</li>
                        <li>📝 <strong>Fewer entry-level office jobs:</strong> White-collar roles are concentrated in cities. Be realistic about what's locally available.</li>
                    </ul>
                </div>

                <h4>🎯 How to Find Work:</h4>
                <ul>
                    <li>🌐 <strong>Online:</strong> Indeed, Reed, Total Jobs, and the government's Find a Job service. Set up alerts for your area. 💻</li>
                    <li>🚶 <strong>Walk around:</strong> Many local businesses still put "Help Wanted" signs in windows. Don't be afraid to ask in person. 🪟</li>
                    <li>👥 <strong>Word of mouth:</strong> Tell everyone you're looking. In small communities, this is often how jobs are filled. 🗣️</li>
                    <li>🏢 <strong>Agencies:</strong> Temp agencies can get you working quickly. It's not ideal long-term, but it's income and experience. 📋</li>
                    <li>💼 <strong>Job Centre Plus:</strong> Register with them. They can help with job searches, training, and sometimes specific support for migrants. 🏛️</li>
                </ul>

                <h3>🏦 Part 3: The Cultural Importance of Economic Self-Sufficiency</h3>
                <p>This is crucial to understand: in English culture, supporting yourself financially is deeply connected to respect – both self-respect and how others see you. 🎭</p>

                <div class="important">
                    <strong>🇬🇧 Why This Matters</strong>
                    <p>The English have a strong cultural belief in "standing on your own two feet." 🦶🦶 While there's a welfare system for those who genuinely need it, there's also a cultural expectation that you'll do everything you can to support yourself before relying on the state or others.</p>
                </div>

                <h4>💪 What Self-Sufficiency Signals:</h4>
                <ul>
                    <li>✊ <strong>You're contributing:</strong> Paying taxes, supporting the local economy, not being a burden. This matters to people here.</li>
                    <li>🤝 <strong>You're trustworthy:</strong> Landlords, banks, and employers all look at financial stability as a sign of reliability.</li>
                    <li>👨‍👩‍👧 <strong>You can be counted on:</strong> Whether it's helping a neighbour or contributing to community events, having your own house in order comes first.</li>
                    <li>🏠 <strong>You belong:</strong> Working and contributing to the local economy is one of the fastest ways to become "one of us" in a community.</li>
                </ul>

                <h4>⚠️ The Honest Reality About Benefits:</h4>
                <ul>
                    <li>✅ <strong>There's no shame in genuine need:</strong> The welfare system exists for good reasons. If you're between jobs, unwell, or in crisis, use it. That's what it's for. 🏥</li>
                    <li>❌ <strong>BUT:</strong> Long-term benefit dependency, when you could work, is culturally stigmatised. Rightly or wrongly, it affects how people see you. 👀</li>
                    <li>💭 <strong>Perception matters:</strong> Being seen to be trying – applying for jobs, doing casual work, volunteering – matters as much as the outcome.</li>
                    <li>🔍 <strong>It affects integration:</strong> People are more likely to welcome and befriend someone who's working and contributing, regardless of the job.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Practical Tip</strong>
                    <p>If you're struggling to find permanent work, do <em>something</em>. 🔧 Volunteer at a charity shop. Help a local business for cash-in-hand (legally!). Keep busy and visible. This shows the community you're willing to work, and often leads to actual job offers. 🌟</p>
                </div>

                <h3>📈 Part 4: Building Financial Stability</h3>
                <p>Economic integration isn't just about getting a job – it's about building a stable foundation. 🏗️ Here's what matters:</p>

                <h4>🏦 Banking and Credit:</h4>
                <ul>
                    <li>💳 <strong>Open a bank account:</strong> You'll need proof of address and ID. High street banks or digital banks like Monzo or Starling are options.</li>
                    <li>📊 <strong>Build a credit history:</strong> Pay bills on time, get a basic credit card and pay it off in full. Your credit score matters for renting, phones, even some jobs.</li>
                    <li>💰 <strong>Save something:</strong> Even £20 a month. Having an emergency fund is essential and shows financial responsibility. 🐷</li>
                </ul>

                <h4>📑 Understanding Your Rights:</h4>
                <ul>
                    <li>💵 <strong>National Minimum Wage:</strong> This is the legal minimum you can be paid. Check current rates – they vary by age. Report underpayment. 📢</li>
                    <li>📅 <strong>Holiday Entitlement:</strong> You're legally entitled to paid holiday (at least 28 days including bank holidays for full-time workers).</li>
                    <li>🏥 <strong>Sick Pay:</strong> Statutory Sick Pay exists, though it's not much. Some employers offer more.</li>
                    <li>⚖️ <strong>Employment Rights:</strong> You have rights from day one. Unfair dismissal protection kicks in after 2 years. Know your rights! 📚</li>
                </ul>

                <h4>💸 Managing Money:</h4>
                <ul>
                    <li>📝 <strong>Budget:</strong> Know what comes in and what goes out. The 50/30/20 rule works: 50% needs, 30% wants, 20% savings.</li>
                    <li>🏠 <strong>Housing costs:</strong> Try to keep rent/mortgage below 35% of income. In some areas this is hard – be realistic about where you can afford to live.</li>
                    <li>🚗 <strong>Avoid car debt:</strong> An expensive car on finance is a common trap. A cheaper reliable car serves the same purpose.</li>
                    <li>💳 <strong>Avoid high-interest debt:</strong> Payday loans, credit cards left unpaid – these spiral fast. 🌀</li>
                </ul>

                <div class="warning">
                    <strong>🚨 Scams and Exploitation</strong>
                    <ul>
                        <li>❌ <strong>Cash-in-hand below minimum wage:</strong> It's illegal, and if caught, YOU can face problems too.</li>
                        <li>❌ <strong>"Deposit" jobs:</strong> Legitimate employers never ask you to pay upfront.</li>
                        <li>❌ <strong>Unlicensed gangmasters:</strong> In agriculture and food processing, only work through licensed agencies.</li>
                        <li>✅ <strong>If it sounds too good to be true:</strong> It probably is. Be cautious. 🔍</li>
                    </ul>
                </div>

                <h3>🌱 Part 5: Long-Term Economic Success</h3>
                <p>Getting a job is step one. Building a sustainable, successful economic life takes more. 📈</p>

                <h4>📚 Upskilling:</h4>
                <ul>
                    <li>🎓 <strong>Free courses:</strong> Many colleges offer free courses for adults. English, maths, and basic skills are often available. 📖</li>
                    <li>💻 <strong>Online learning:</strong> Platforms like FutureLearn offer free courses from UK universities. Build qualifications over time.</li>
                    <li>🔧 <strong>Apprenticeships:</strong> Not just for young people. Adult apprenticeships in trades can lead to well-paid work.</li>
                    <li>📜 <strong>Get UK qualifications:</strong> If you have qualifications from home, look into getting them recognised here. NARIC can help assess equivalence.</li>
                </ul>

                <h4>🚀 Starting a Business:</h4>
                <ul>
                    <li>🏪 <strong>It's very possible:</strong> The United Kingdom has relatively low barriers to starting a business. Many migrants succeed as self-employed or business owners.</li>
                    <li>📝 <strong>Start small:</strong> A side hustle while employed. Test the market. Grow gradually.</li>
                    <li>💼 <strong>Know the rules:</strong> You must register with HMRC if self-employed. Keep records. Pay your taxes. 📊</li>
                    <li>🤝 <strong>Network:</strong> Local business groups, Chamber of Commerce, networking events – build connections.</li>
                </ul>

                <h4>🏘️ Community Integration Through Work:</h4>
                <ul>
                    <li>👋 <strong>Be known:</strong> The local worker who's always cheerful and reliable becomes part of the community fabric.</li>
                    <li>🛒 <strong>Support local:</strong> Shopping locally, using local services – it builds relationships and reputation.</li>
                    <li>🤲 <strong>Give back when you can:</strong> Once stable, helping others who are struggling (with advice, connections, even small jobs) builds enormous goodwill.</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Economic integration in the United Kingdom is about more than just earning money. 💰 It's about showing up, working hard, supporting yourself, and contributing to your community. 🤝 The British respect people who graft, who don't complain (too much!), and who stand on their own two feet. 🦶 Do that, and you'll earn not just money – but respect and belonging. 🏠🇬🇧</p>
                </div>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare & NHS – Your Complete Guide to the National Health Service 💊",
            content: `
                <p>Right, let's talk about something absolutely crucial: healthcare. 🏥 The National Health Service (NHS) is one of Britain's proudest institutions – free healthcare at the point of use for everyone. But navigating it can be confusing if you're new here. 🤔</p>
                
                <p>This guide will walk you through everything you need to know: registering with a GP, booking appointments, getting prescriptions, and understanding hospital care. 📋 Let's get you sorted! 💪</p>

                <h3>🏛️ Part 1: Understanding the NHS – The Basics</h3>
                <p>The NHS is the UK's publicly funded healthcare system. 🇬🇧 Here's what you need to know:</p>

                <div class="important">
                    <strong>💡 Key Facts About the NHS</strong>
                    <ul>
                        <li><strong>Free at the point of use:</strong> Most NHS services are free – you won't be charged when you see a doctor or go to hospital. 🆓</li>
                        <li><strong>Funded by taxes:</strong> The NHS is paid for through National Insurance and general taxation. 💷</li>
                        <li><strong>Universal coverage:</strong> Everyone legally resident in the UK can use the NHS. This includes migrants with valid visas. 🌍</li>
                        <li><strong>Some exceptions:</strong> Dental care, eye tests, and prescriptions have charges (though many people are exempt). 💊</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>🔑 The Immigration Health Surcharge (IHS)</strong>
                    <p>If you're on a visa, you've likely paid the Immigration Health Surcharge as part of your visa application. 📝 This gives you access to NHS services on the same basis as a UK resident. Keep your visa documents handy – you may need to prove your entitlement.</p>
                </div>

                <h3>👨‍⚕️ Part 2: Registering with a GP – Your First Step</h3>
                <p>Your GP (General Practitioner) is your main doctor and the gateway to all NHS services. 🚪 Registering with a GP practice should be one of the first things you do when you arrive.</p>

                <h4>📋 How to Register:</h4>
                <ul>
                    <li>🔍 <strong>Find a practice:</strong> Use the NHS website (nhs.uk) to find GP practices near you. Enter your postcode to see options.</li>
                    <li>📍 <strong>Catchment areas:</strong> Most practices only accept patients living in their catchment area. Check before you apply. 🗺️</li>
                    <li>📝 <strong>Fill in the forms:</strong> You'll need to complete a GMS1 registration form. Most practices also ask you to complete a health questionnaire.</li>
                    <li>🪪 <strong>ID isn't always required:</strong> GP practices cannot refuse to register you because you don't have ID, proof of address, or an NHS number. 📄</li>
                    <li>⏳ <strong>Processing time:</strong> Registration can take a few days to a couple of weeks. You may be asked to attend a new patient health check. ✅</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Important Notes on Registration</strong>
                    <ul>
                        <li>You can only be registered with <strong>one GP practice</strong> at a time.</li>
                        <li>If you move house, you may need to re-register with a new practice if you're outside their area. 🏠</li>
                        <li>Some practices have closed lists – they're not accepting new patients. Try another nearby. 🚫</li>
                        <li>You <strong>don't need</strong> an NHS number to register – you'll be given one if you don't have one.</li>
                    </ul>
                </div>

                <h4>📞 What Your GP Practice Provides:</h4>
                <ul>
                    <li>👩‍⚕️ <strong>Consultations:</strong> Appointments with doctors, nurses, and other healthcare professionals.</li>
                    <li>💉 <strong>Vaccinations:</strong> Including flu jabs, COVID boosters, and travel vaccinations.</li>
                    <li>📋 <strong>Health checks:</strong> Regular screening for conditions like diabetes, blood pressure, and cancer.</li>
                    <li>💊 <strong>Prescriptions:</strong> Your GP can prescribe medications for you.</li>
                    <li>📝 <strong>Referrals:</strong> If you need specialist care, your GP refers you to hospital consultants.</li>
                    <li>🩺 <strong>Chronic condition management:</strong> Ongoing care for conditions like asthma, diabetes, or heart disease.</li>
                </ul>

                <h3>📅 Part 3: Booking Appointments – How the System Works</h3>
                <p>Getting a GP appointment can sometimes be challenging. 😅 Here's how to navigate the system:</p>

                <h4>📱 Ways to Book:</h4>
                <ul>
                    <li>📞 <strong>Phone:</strong> Call your practice – usually first thing in the morning (8am) for same-day appointments. Lines can be busy! 🕗</li>
                    <li>💻 <strong>Online:</strong> Many practices use the NHS App or their own online booking system. Register for online services. 📲</li>
                    <li>🚶 <strong>In person:</strong> You can visit the practice to book, though phone/online is usually preferred.</li>
                </ul>

                <h4>📊 Types of Appointments:</h4>
                <ul>
                    <li>⏰ <strong>Same-day/urgent:</strong> For problems that need attention today. Call early – these slots go fast! 🏃</li>
                    <li>📅 <strong>Routine:</strong> For non-urgent issues. May be a few days to weeks wait. Book ahead for ongoing concerns.</li>
                    <li>📹 <strong>Telephone/video:</strong> Many consultations now happen remotely. Be ready to describe your symptoms clearly. 🗣️</li>
                    <li>🏠 <strong>Home visits:</strong> Available for patients too ill to travel. Request through your practice. 🚗</li>
                </ul>

                <div class="tip">
                    <strong>💡 Tips for Getting Appointments</strong>
                    <ul>
                        <li>📞 Call at exactly 8am for same-day appointments – this is when most practices release them.</li>
                        <li>🖥️ Use online booking for routine appointments – often easier than phoning.</li>
                        <li>📝 Be clear about your symptoms when booking – this helps them allocate the right time.</li>
                        <li>❌ Cancel if you can't attend – missed appointments waste NHS resources. You can do this online or by phone.</li>
                        <li>🔄 If you can't get through, try the online "e-consult" or "ask my GP" service if your practice offers it.</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Be Punctual!</strong>
                    <p>Arrive on time for your appointment. ⏰ Being more than 10 minutes late usually means you'll lose your slot and have to rebook. GP appointments are typically only 10 minutes, so make the most of the time – prepare what you want to discuss! 📋</p>
                </div>

                <h3>💊 Part 4: Prescriptions – Getting Your Medications</h3>
                <p>If your GP prescribes medication, here's how the system works: 💊</p>

                <h4>📜 The Prescription Process:</h4>
                <ul>
                    <li>📝 <strong>Getting a prescription:</strong> Your GP writes a prescription (paper or electronic). Most are now sent electronically to your chosen pharmacy. 💻</li>
                    <li>🏪 <strong>Choose a pharmacy:</strong> You can nominate any pharmacy to receive your electronic prescriptions. Tell your GP practice which one. 🏥</li>
                    <li>💰 <strong>Prescription charges:</strong> In England, each item on your prescription has a fixed charge (check current prices at nhs.uk). Some items are exempt. Note: Prescriptions are free in Scotland, Wales, and Northern Ireland. 💷</li>
                    <li>🔄 <strong>Repeat prescriptions:</strong> For ongoing medications, you can order repeats online, by app, or by dropping the slip at your pharmacy.</li>
                </ul>

                <div class="important">
                    <strong>🆓 Who Gets Free Prescriptions?</strong>
                    <ul>
                        <li>👶 Children under 16 (or under 19 in full-time education)</li>
                        <li>👴 People aged 60 and over</li>
                        <li>🤰 Pregnant women and new mothers (up to 12 months after birth)</li>
                        <li>🩺 People with certain medical conditions (diabetes, epilepsy, cancer, etc.)</li>
                        <li>💷 People on low incomes or certain benefits</li>
                        <li>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Everyone in Scotland, Wales, and Northern Ireland (prescriptions are free there!)</li>
                    </ul>
                </div>

                <h4>💳 Saving Money on Prescriptions:</h4>
                <ul>
                    <li>🎫 <strong>Prescription Prepayment Certificate (PPC):</strong> If you need regular medications, a PPC can save you money. 💰</li>
                    <li>📅 <strong>3-month or 12-month PPC:</strong> Choose between a 3-month or 12-month certificate. Check current prices at nhsbsa.nhs.uk/ppc – if you need more than a few items, it's usually worth it.</li>
                    <li>🌐 <strong>Buy online:</strong> Get your PPC at nhsbsa.nhs.uk/ppc – it starts immediately.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Pharmacy First</strong>
                    <p>For minor ailments like coughs, colds, hay fever, or minor infections, try your local pharmacy first. 🏪 Pharmacists can give advice and sell over-the-counter medications – no GP appointment needed. Some pharmacies can now treat certain conditions directly under the "Pharmacy First" scheme. 👍</p>
                </div>

                <h3>🏨 Part 5: Hospital Care – When You Need More Than Your GP</h3>
                <p>For more serious conditions, you may need hospital care. Here's how it works: 🏥</p>

                <h4>📋 Types of Hospital Care:</h4>
                <ul>
                    <li>📝 <strong>Outpatient:</strong> You attend for appointments, tests, or treatments but go home the same day. 🏠</li>
                    <li>🛏️ <strong>Inpatient:</strong> You stay overnight or longer in hospital. 🌙</li>
                    <li>🚑 <strong>Emergency (A&E):</strong> For serious, life-threatening emergencies. Available 24/7. 🆘</li>
                    <li>⏰ <strong>Day surgery:</strong> Operations where you go home the same day.</li>
                </ul>

                <h4>🔀 Getting Referred:</h4>
                <ul>
                    <li>👨‍⚕️ <strong>GP referral:</strong> Your GP refers you to a specialist if needed. You have the <strong>right to choose</strong> which hospital you're referred to. 🏥</li>
                    <li>📧 <strong>e-Referral Service:</strong> You'll receive a booking letter with options to choose your hospital and appointment time. 📬</li>
                    <li>⏳ <strong>Waiting times:</strong> The NHS has targets for how long you should wait. Check referral to treatment (RTT) times for your area.</li>
                    <li>🔄 <strong>Follow-ups:</strong> After your first appointment, the hospital will arrange any follow-up care needed.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ A&E Is for Emergencies Only!</strong>
                    <p>A&E (Accident & Emergency) departments are for <strong>serious, life-threatening</strong> conditions: 🚨</p>
                    <ul>
                        <li>💔 Chest pain or difficulty breathing</li>
                        <li>🩸 Severe bleeding that won't stop</li>
                        <li>🤕 Serious injuries from accidents</li>
                        <li>🧠 Signs of stroke (face drooping, arm weakness, speech problems)</li>
                        <li>😵 Loss of consciousness</li>
                    </ul>
                    <p>For non-emergencies, use your GP, pharmacy, or NHS 111. A&E wait times can be very long for minor issues! ⏰</p>
                </div>

                <h3>📞 Part 6: Other NHS Services You Should Know About</h3>

                <h4>📱 NHS 111:</h4>
                <ul>
                    <li>📞 <strong>Call 111:</strong> For urgent medical problems that aren't emergencies. Available 24/7. 🕐</li>
                    <li>💻 <strong>Online:</strong> Use 111.nhs.uk for a symptom checker that directs you to the right care.</li>
                    <li>🏥 <strong>What they do:</strong> Give advice, book GP appointments, direct you to urgent care centres, or send an ambulance if needed. 🚑</li>
                </ul>

                <h4>🦷 Dental Care:</h4>
                <ul>
                    <li>🔍 <strong>Find a dentist:</strong> Use nhs.uk to find NHS dentists near you. Many have long waiting lists – start looking early! 📋</li>
                    <li>💰 <strong>Charges apply:</strong> NHS dental treatment has three price bands – check current prices at nhs.uk/nhs-services/dentists/. 💷</li>
                    <li>🆓 <strong>Free for some:</strong> Children, pregnant women, new mothers, and those on certain benefits get free NHS dental care.</li>
                    <li>🚨 <strong>Emergencies:</strong> For dental emergencies, call NHS 111 or find an emergency dental service.</li>
                </ul>

                <h4>👁️ Eye Care:</h4>
                <ul>
                    <li>👓 <strong>Eye tests:</strong> Available at high street opticians. Tests cost around £20-30, but are free for some groups. 🆓</li>
                    <li>🆓 <strong>Free for:</strong> Children, over 60s, people on benefits, those with certain conditions like diabetes or glaucoma.</li>
                    <li>🏥 <strong>Hospital eye care:</strong> For serious eye conditions, your optician or GP can refer you to a hospital eye department.</li>
                </ul>

                <h4>🧠 Mental Health Services:</h4>
                <ul>
                    <li>👨‍⚕️ <strong>Through your GP:</strong> Talk to your GP about mental health concerns. They can provide treatment or refer you. 💬</li>
                    <li>🔗 <strong>Self-referral:</strong> Many areas allow you to refer yourself to NHS talking therapies (IAPT) without seeing a GP first. 🗣️</li>
                    <li>📞 <strong>Crisis support:</strong> If you're in mental health crisis, call 111, go to A&E, or contact the Samaritans (116 123). 🆘</li>
                </ul>

                <div class="tip">
                    <strong>📱 The NHS App</strong>
                    <p>Download the NHS App! 📲 It lets you:</p>
                    <ul>
                        <li>📅 Book and manage GP appointments</li>
                        <li>💊 Order repeat prescriptions</li>
                        <li>📋 View your medical record</li>
                        <li>💉 Check your vaccination records</li>
                        <li>🏥 Register for organ donation</li>
                    </ul>
                    <p>Available on iOS and Android. Create an account with NHS login. 👍</p>
                </div>

                <h3>💡 Part 7: Practical Tips for Using the NHS</h3>

                <h4>📝 Getting the Best from Your GP Appointment:</h4>
                <ul>
                    <li>✍️ <strong>Prepare beforehand:</strong> Write down your symptoms, when they started, and any questions you have.</li>
                    <li>🎯 <strong>Be specific:</strong> Describe your symptoms clearly. Where does it hurt? How often? What makes it better or worse?</li>
                    <li>💊 <strong>Know your medications:</strong> Bring a list of any medicines you're taking, including over-the-counter ones.</li>
                    <li>❓ <strong>Ask questions:</strong> Don't be afraid to ask if you don't understand something. Ask for written information if helpful.</li>
                    <li>📞 <strong>Follow up:</strong> If your symptoms don't improve, book another appointment. It's okay to come back!</li>
                </ul>

                <h4>🛡️ Your Rights as an NHS Patient:</h4>
                <ul>
                    <li>🏥 <strong>Right to choose:</strong> You can choose which hospital you're referred to for many treatments.</li>
                    <li>⏳ <strong>Waiting time targets:</strong> The NHS has targets for treatment waiting times – ask about expected waits.</li>
                    <li>🔒 <strong>Confidentiality:</strong> Your medical records are confidential. Information is only shared when necessary for your care.</li>
                    <li>📋 <strong>Access to records:</strong> You have the right to see your medical records.</li>
                    <li>😤 <strong>Complaints:</strong> If you're unhappy with your care, you can complain through the NHS complaints procedure.</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>The NHS is there for you – use it! 🏥 Register with a GP as soon as you arrive, download the NHS App, and don't hesitate to seek help when you need it. 💪 The system can seem complex at first, but once you understand how it works, you'll have access to excellent healthcare – free at the point of use. 🆓 Stay healthy! 🇬🇧❤️</p>
                </div>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom and Bureaucracy – A Practical Guide to UK Government Systems 📋",
            content: `
                <p>Right, let's talk about something that can feel overwhelming when you first arrive: dealing with the government, official systems, and bureaucracy. 🏛️ The United Kingdom has its own way of doing things, and understanding how it all works will save you time, stress, and frustration. 😤➡️😌</p>
                
                <p>This guide will walk you through the key systems you'll encounter: getting your documents sorted, understanding local councils, dealing with HMRC (taxes), and navigating the various government services. Let's get you sorted! 💪</p>

                <h3>📋 Part 1: Essential Documents – What You Need and How to Get Them</h3>
                <p>First things first: you need to get your paperwork in order. 📄 Here are the essential documents you'll need to live and work in the UK:</p>

                <div class="important">
                    <strong>🔑 Key Documents for Life in the UK</strong>
                    <ul>
                        <li><strong>National Insurance Number (NI Number):</strong> Essential for working legally and paying taxes. Apply through the DWP (Department for Work and Pensions). 💼</li>
                        <li><strong>Proof of Right to Work:</strong> Your visa, BRP (Biometric Residence Permit), or settled status documentation. Employers must check this. 🪪</li>
                        <li><strong>Proof of Address:</strong> Utility bills, bank statements, or council tax bills. You'll need this for almost everything! 📬</li>
                        <li><strong>NHS Number:</strong> You'll get this when you register with a GP. It's your identifier across the healthcare system. 🏥</li>
                    </ul>
                </div>

                <h4>🔢 Getting Your National Insurance Number:</h4>
                <ul>
                    <li>📞 <strong>Apply by phone or online:</strong> Call the National Insurance number application line or apply through GOV.UK. 💻</li>
                    <li>📝 <strong>What you'll need:</strong> Proof of identity (passport, BRP), proof of address, and details of why you need it (usually employment).</li>
                    <li>📅 <strong>Interview:</strong> You may be invited to an "Evidence of Identity" interview at a Jobcentre Plus. Bring all your documents!</li>
                    <li>⏰ <strong>Processing time:</strong> Can take several weeks. You can start work while waiting – your employer can use your application reference. 🏃</li>
                </ul>

                <div class="tip">
                    <strong>💡 Pro Tip</strong>
                    <p>Keep copies of ALL your important documents – both physical and digital. Store them safely in the cloud. 🌐 You'll be asked for the same documents repeatedly by different organisations!</p>
                </div>

                <h3>🏠 Part 2: Local Councils – Your Local Government</h3>
                <p>Local councils (also called local authorities) are responsible for many services in your area. 🏘️ Understanding what they do will help you know who to contact for what.</p>

                <h4>📋 What Your Council Does:</h4>
                <ul>
                    <li>🗑️ <strong>Waste and Recycling:</strong> Bin collection schedules, recycling centres, and reporting missed collections.</li>
                    <li>💷 <strong>Council Tax:</strong> A local tax based on your property. You must register and pay this! 🏡</li>
                    <li>🏫 <strong>Schools:</strong> School admissions, catchment areas, and education services.</li>
                    <li>🏠 <strong>Housing:</strong> Social housing, housing benefit, and housing advice.</li>
                    <li>🚗 <strong>Parking and Roads:</strong> Parking permits, road maintenance, and traffic issues.</li>
                    <li>📋 <strong>Planning:</strong> Building permits, planning applications, and local development.</li>
                    <li>📖 <strong>Libraries:</strong> Free library services and community spaces.</li>
                    <li>👶 <strong>Social Services:</strong> Support for vulnerable adults and children.</li>
                </ul>

                <h4>💰 Council Tax – What You Need to Know:</h4>
                <ul>
                    <li>📝 <strong>Register when you move:</strong> You must register for council tax when you move to a new property. Contact your local council.</li>
                    <li>🏠 <strong>Based on property bands:</strong> Properties are in bands A-H based on their 1991 value. Your band determines how much you pay.</li>
                    <li>💸 <strong>Discounts available:</strong> Single person discount (25% off), student exemption, and various other discounts. Check what you're eligible for!</li>
                    <li>📅 <strong>Payment options:</strong> Usually paid monthly over 10 or 12 months. Set up a direct debit to avoid missing payments.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Don't Ignore Council Tax!</strong>
                    <p>Council tax debt is taken very seriously. 😰 Unpaid council tax can result in court summons, bailiff action, and even imprisonment in extreme cases. If you're struggling to pay, contact your council immediately to discuss payment plans or support options. 🤝</p>
                </div>

                <h3>💷 Part 3: HMRC and Taxes – Understanding the Tax System</h3>
                <p>HMRC (His Majesty's Revenue and Customs) is the UK's tax authority. 🏛️ They handle income tax, National Insurance, VAT, and other taxes. Here's what you need to know:</p>

                <h4>📊 Income Tax Basics:</h4>
                <ul>
                    <li>💼 <strong>PAYE (Pay As You Earn):</strong> If you're employed, your employer deducts tax automatically from your salary. You don't usually need to do anything! ✅</li>
                    <li>📋 <strong>Tax Code:</strong> This determines how much tax is taken. Check your payslip to make sure it's correct. Common codes start with numbers like "1257L".</li>
                    <li>🆓 <strong>Personal Allowance:</strong> You can earn up to a certain amount tax-free each year (check current rates on GOV.UK). After that, you pay tax at different rates.</li>
                    <li>💰 <strong>Tax Bands:</strong> Basic rate (20%), Higher rate (40%), Additional rate (45%) – only on earnings above certain thresholds.</li>
                </ul>

                <h4>📝 Self-Assessment:</h4>
                <ul>
                    <li>🧾 <strong>Who needs it:</strong> Self-employed people, those with additional income (rental, investments), or those earning over £100,000.</li>
                    <li>📅 <strong>Deadline:</strong> Tax returns for the previous year must be filed by 31st January. Late filing = automatic fine! ⏰</li>
                    <li>💻 <strong>Online filing:</strong> Register on GOV.UK and file online. It's easier than paper forms.</li>
                    <li>📚 <strong>Keep records:</strong> Keep receipts, invoices, and financial records for at least 5 years. HMRC can ask to see them! 🗂️</li>
                </ul>

                <div class="important">
                    <strong>📱 Your Personal Tax Account</strong>
                    <p>Create a personal tax account on GOV.UK. 💻 This lets you:</p>
                    <ul>
                        <li>✅ Check your tax code and PAYE records</li>
                        <li>📋 See your State Pension forecast</li>
                        <li>💷 Claim tax refunds</li>
                        <li>📝 Manage your Self Assessment</li>
                        <li>🔍 Track any correspondence with HMRC</li>
                    </ul>
                </div>

                <h4>🏢 National Insurance Contributions:</h4>
                <ul>
                    <li>💼 <strong>Deducted from wages:</strong> Like income tax, NI is usually taken automatically if you're employed.</li>
                    <li>🏥 <strong>What it funds:</strong> State Pension, NHS, unemployment benefits, and other state benefits.</li>
                    <li>📊 <strong>Your NI record:</strong> You need a certain number of years of contributions to qualify for full State Pension. Check your record on GOV.UK.</li>
                    <li>📝 <strong>Self-employed:</strong> You pay Class 2 and Class 4 NI through Self Assessment.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Check Your Tax Code</strong>
                    <p>Wrong tax codes are common, especially when you start a new job or have multiple jobs. 😅 If too much tax is taken, you're entitled to a refund. If too little is taken, you'll owe HMRC. Check your payslip and tax code regularly! 🔍</p>
                </div>

                <h3>🌐 Part 4: GOV.UK – Your One-Stop Shop for Government Services</h3>
                <p>GOV.UK is the UK government's official website. 💻 Almost everything you need to do with government can be done here. It's well-designed and user-friendly.</p>

                <h4>🔧 What You Can Do on GOV.UK:</h4>
                <ul>
                    <li>🪪 <strong>Apply for documents:</strong> Passport, driving licence, visa extensions.</li>
                    <li>💷 <strong>Manage taxes:</strong> Personal tax account, Self Assessment, tax credits.</li>
                    <li>🚗 <strong>Vehicle services:</strong> Tax your car, check MOT status, update vehicle details.</li>
                    <li>📋 <strong>Benefits:</strong> Apply for Universal Credit, check benefit eligibility.</li>
                    <li>🗳️ <strong>Electoral roll:</strong> Register to vote.</li>
                    <li>📖 <strong>Find information:</strong> Rights, rules, and guidance on almost any topic.</li>
                </ul>

                <h4>🔐 GOV.UK Verify and Government Gateway:</h4>
                <ul>
                    <li>🆔 <strong>Government Gateway:</strong> Your login for tax services. Set this up early – you'll need it for Self Assessment and other tax matters.</li>
                    <li>📱 <strong>GOV.UK ID:</strong> Newer identity verification system. Some services now use this instead.</li>
                    <li>🔑 <strong>Keep your details safe:</strong> Your Government Gateway ID and password are important. Store them securely! 🔒</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Beware of Scams!</strong>
                    <p>HMRC and government agencies will NEVER:</p>
                    <ul>
                        <li>❌ Call you threatening arrest for unpaid taxes</li>
                        <li>❌ Ask for immediate payment via gift cards or cryptocurrency</li>
                        <li>❌ Send text messages asking you to click links for tax refunds</li>
                        <li>❌ Email asking for your personal or banking details</li>
                    </ul>
                    <p>If in doubt, contact HMRC directly through GOV.UK. Report scams to Action Fraud. 🚨</p>
                </div>

                <h3>🗳️ Part 5: Electoral Registration – Your Right to Vote</h3>
                <p>Registering to vote is important – and it also helps with credit checks and other official processes. 📋</p>

                <h4>✅ Who Can Vote:</h4>
                <ul>
                    <li>🇬🇧 <strong>British citizens:</strong> All elections.</li>
                    <li>🇮🇪 <strong>Irish and Commonwealth citizens:</strong> All elections if resident in UK.</li>
                    <li>🇪🇺 <strong>EU citizens:</strong> Local elections only (not general elections, unless you have settled status and qualifying Commonwealth citizenship).</li>
                </ul>

                <h4>📝 How to Register:</h4>
                <ul>
                    <li>💻 <strong>Online:</strong> Register at gov.uk/register-to-vote – takes about 5 minutes!</li>
                    <li>📬 <strong>You'll need:</strong> National Insurance number and address details.</li>
                    <li>📅 <strong>Deadline:</strong> You must be registered at least 12 working days before an election to vote in it.</li>
                    <li>🏠 <strong>Update when you move:</strong> Re-register at your new address. You can only vote where you're registered!</li>
                </ul>

                <div class="tip">
                    <strong>💡 Why Register Even If You Can't Vote in All Elections?</strong>
                    <p>Being on the electoral roll helps with:</p>
                    <ul>
                        <li>💳 Credit checks – lenders use it to verify your address</li>
                        <li>🏦 Opening bank accounts</li>
                        <li>📋 Identity verification for other services</li>
                    </ul>
                </div>

                <h3>🚗 Part 6: DVLA – Driving and Vehicles</h3>
                <p>The DVLA (Driver and Vehicle Licensing Agency) handles driving licences and vehicle registration. 🚙</p>

                <h4>📋 Driving Licence:</h4>
                <ul>
                    <li>🌍 <strong>Using a foreign licence:</strong> You can usually drive on a valid foreign licence for 12 months after becoming UK resident. After that, you need a UK licence.</li>
                    <li>🔄 <strong>Exchanging your licence:</strong> Some countries have exchange agreements – you can swap your licence without taking a test. Check GOV.UK for the list.</li>
                    <li>📝 <strong>Taking the UK test:</strong> If no exchange agreement, you'll need to pass the UK theory and practical tests.</li>
                    <li>📱 <strong>Check your licence:</strong> Use GOV.UK to check your licence details, penalty points, and what vehicles you can drive.</li>
                </ul>

                <h4>🚙 Vehicle Registration and Tax:</h4>
                <ul>
                    <li>💷 <strong>Vehicle tax (road tax):</strong> You must tax your vehicle to drive it on public roads. Do this online at GOV.UK.</li>
                    <li>🔧 <strong>MOT:</strong> Annual safety check required for vehicles over 3 years old. No MOT = illegal to drive!</li>
                    <li>📋 <strong>V5C (logbook):</strong> The registration document. Update DVLA when you buy, sell, or change details.</li>
                    <li>🛡️ <strong>Insurance:</strong> You must have at least third-party insurance to drive. It's illegal to drive without it!</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ SORN – Statutory Off Road Notification</strong>
                    <p>If your vehicle isn't taxed and isn't on the road, you must declare SORN. 🚫 Otherwise, you can be fined. Even a car sitting on a driveway needs to be either taxed or SORNed!</p>
                </div>

                <h3>🏡 Part 7: Benefits and Support – When You Need Help</h3>
                <p>The UK has a welfare system to support people who need it. 🤝 Don't be afraid to claim what you're entitled to.</p>

                <h4>💰 Key Benefits:</h4>
                <ul>
                    <li>🏠 <strong>Universal Credit:</strong> The main benefit for working-age people. Covers living costs, housing, and childcare support.</li>
                    <li>👶 <strong>Child Benefit:</strong> Paid for each child under 16 (or under 20 in education/training).</li>
                    <li>🏥 <strong>Personal Independence Payment (PIP):</strong> For people with long-term health conditions or disabilities.</li>
                    <li>👴 <strong>State Pension:</strong> For people who've reached State Pension age with enough NI contributions.</li>
                    <li>💷 <strong>Council Tax Support:</strong> Helps with council tax if you're on a low income.</li>
                </ul>

                <h4>📝 Applying for Benefits:</h4>
                <ul>
                    <li>💻 <strong>Online:</strong> Most benefits are applied for online through GOV.UK.</li>
                    <li>📞 <strong>Phone:</strong> Helplines are available if you can't apply online.</li>
                    <li>📋 <strong>Evidence needed:</strong> Bank statements, proof of income, ID, proof of address, medical evidence (for health-related benefits).</li>
                    <li>⏰ <strong>Don't delay:</strong> Benefits are usually paid from when you apply, not before. Apply as soon as you're eligible!</li>
                </ul>

                <div class="tip">
                    <strong>💡 Use a Benefits Calculator</strong>
                    <p>Not sure what you're entitled to? Use the benefits calculator on GOV.UK or Turn2Us. 🧮 Many people don't claim benefits they're entitled to!</p>
                </div>

                <h3>📞 Part 8: Practical Tips for Dealing with UK Bureaucracy</h3>
                <p>Here are some hard-earned tips for navigating UK officialdom: 🎓</p>

                <h4>✅ Do's:</h4>
                <ul>
                    <li>📝 <strong>Keep copies of everything:</strong> Every form, every letter, every email. You WILL be asked for things multiple times.</li>
                    <li>✍️ <strong>Put things in writing:</strong> Follow up phone calls with emails. Create a paper trail. 📧</li>
                    <li>⏰ <strong>Respond to deadlines:</strong> Government letters often have deadlines. Miss them and you create bigger problems.</li>
                    <li>📞 <strong>Call at off-peak times:</strong> Government helplines are usually quieter early morning or mid-afternoon.</li>
                    <li>🗓️ <strong>Use online services:</strong> They're usually faster and available 24/7.</li>
                    <li>😊 <strong>Be polite but persistent:</strong> Staff deal with a lot. Being pleasant gets better results than being aggressive.</li>
                </ul>

                <h4>❌ Don'ts:</h4>
                <ul>
                    <li>🙈 <strong>Don't ignore letters:</strong> Especially from HMRC or courts. Ignoring problems makes them worse!</li>
                    <li>🤥 <strong>Don't provide false information:</strong> Fraud is taken seriously and can affect your immigration status.</li>
                    <li>😤 <strong>Don't lose your temper:</strong> It won't help and may hurt your case.</li>
                    <li>📅 <strong>Don't leave things to the last minute:</strong> Processing times can be long. Apply early!</li>
                </ul>

                <h4>🆘 Getting Help:</h4>
                <ul>
                    <li>📍 <strong>Citizens Advice:</strong> Free, confidential advice on benefits, housing, employment, and more. Find your local bureau or use the website.</li>
                    <li>🏛️ <strong>Your local council:</strong> Often has support services for new residents.</li>
                    <li>🌐 <strong>Community organisations:</strong> Many areas have migrant support organisations that can help navigate systems.</li>
                    <li>📚 <strong>GOV.UK:</strong> Has guidance on almost everything. Always check the official source first!</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>UK bureaucracy can feel complex, but it's generally logical once you understand it. 🧩 The key is: get your essential documents sorted early, register for everything you need to, keep good records, and don't be afraid to ask for help. 🤝 Most government services are designed to be accessible – use online services where possible, and remember that staff are usually trying to help, even if the system is frustrating! 😅🇬🇧</p>
                </div>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools – A Parent's Guide to the UK School System 📚",
            content: `
                <p>Right, let's talk about something that matters enormously if you have children: education. 🎓 The UK school system can seem bewildering at first – different types of schools, unfamiliar terminology, and a whole culture around schooling that might be very different from what you're used to. 🤔</p>
                
                <p>This guide will walk you through everything you need to know: how the system works, how to get your child into a school, what to expect, and how to be an involved parent without stepping on any toes. 📋 Let's get your kids sorted! 💪</p>

                <h3>🏫 Part 1: Understanding the UK School System – The Basics</h3>
                <p>The UK education system has some unique features. Here's the fundamental structure: 📊</p>

                <div class="important">
                    <strong>📅 Key Ages and Stages</strong>
                    <ul>
                        <li><strong>Compulsory education:</strong> In England, children must be in education from age 5 to 18. (Note: Scotland, Wales, and Northern Ireland have slightly different requirements.) 📚</li>
                        <li><strong>Reception (age 4-5):</strong> The first year of primary school – most children start in September after turning 4.</li>
                        <li><strong>Primary school (ages 5-11):</strong> Years 1-6. This covers Key Stage 1 (Years 1-2) and Key Stage 2 (Years 3-6). 🏫</li>
                        <li><strong>Secondary school (ages 11-16):</strong> Years 7-11. This covers Key Stage 3 (Years 7-9) and Key Stage 4 (Years 10-11, leading to GCSEs). 🎒</li>
                        <li><strong>Sixth Form/College (ages 16-18):</strong> Years 12-13. A-Levels or other qualifications. This can be at school or a separate college. 🎓</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Academic Year</strong>
                    <p>The school year runs from early September to mid-July. 📅 It's divided into three terms: Autumn (September-December), Spring (January-Easter), and Summer (Easter-July). Each term has a half-term break of about a week.</p>
                </div>

                <h4>🏫 Types of Schools:</h4>
                <ul>
                    <li>📗 <strong>State schools:</strong> Free, funded by the government. The vast majority of children attend these. Quality varies but many are excellent.</li>
                    <li>📘 <strong>Academies and Free Schools:</strong> State-funded but with more independence over curriculum and policies. Still free to attend.</li>
                    <li>⛪ <strong>Faith schools:</strong> Schools with a religious character (Church of England, Catholic, Jewish, Muslim, etc.). Many are state-funded. May have faith-based admissions criteria.</li>
                    <li>📕 <strong>Grammar schools:</strong> State schools that select students by academic ability (entrance exam at age 11). Only exist in some areas.</li>
                    <li>💷 <strong>Independent/Private schools:</strong> Fee-paying schools. Called "public schools" for historical reasons (confusingly!). Fees range from £10,000-£40,000+ per year.</li>
                    <li>🏠 <strong>Home education:</strong> Legal in the UK. Parents can educate children at home, but must provide a suitable education.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Terminology Alert!</strong>
                    <ul>
                        <li>"Public school" in the UK means expensive private school – the opposite of what you might expect! 🎩</li>
                        <li>"State school" is what Americans would call "public school".</li>
                        <li>"Reception" is the first year – not a place where you wait!</li>
                        <li>"Sixth Form" is ages 16-18, not a type of form you fill in.</li>
                    </ul>
                </div>

                <h3>📝 Part 2: Getting Your Child into School – The Admissions Process</h3>
                <p>Finding and securing a school place requires planning. Here's how it works: 📋</p>

                <h4>🔍 Finding Schools:</h4>
                <ul>
                    <li>🌐 <strong>GOV.UK:</strong> Use the "Find a School" service to search by location and see school details.</li>
                    <li>⭐ <strong>Ofsted reports:</strong> Every school is inspected by Ofsted (Office for Standards in Education). Ratings are Outstanding, Good, Requires Improvement, or Inadequate. Check reports online.</li>
                    <li>📊 <strong>League tables:</strong> Published exam results help compare academic performance, but don't tell the whole story.</li>
                    <li>👥 <strong>Word of mouth:</strong> Talk to local parents. Reputation matters, but remember opinions are subjective!</li>
                    <li>🚶 <strong>Open days:</strong> Schools hold open evenings/days. Attend these – you'll get a feel for the school and can ask questions.</li>
                </ul>

                <h4>📅 Application Timeline (Primary School - Reception):</h4>
                <ul>
                    <li>📋 <strong>September-October:</strong> Research schools, attend open days.</li>
                    <li>📝 <strong>By 15th January:</strong> Submit your application through your local council's website. You can list 3-6 preferences depending on your area.</li>
                    <li>📬 <strong>16th April (National Offer Day):</strong> You'll receive your offer. This is the same day across England.</li>
                    <li>✅ <strong>Accept your place:</strong> You must respond by the deadline given, usually 2 weeks.</li>
                </ul>

                <h4>📅 Application Timeline (Secondary School - Year 7):</h4>
                <ul>
                    <li>📋 <strong>September-October:</strong> Research schools, attend open evenings.</li>
                    <li>📝 <strong>By 31st October:</strong> Submit your application.</li>
                    <li>📬 <strong>1st March (National Offer Day):</strong> You'll receive your offer.</li>
                    <li>✅ <strong>Accept your place:</strong> Respond by the deadline.</li>
                </ul>

                <div class="important">
                    <strong>📍 Admissions Criteria – How Places Are Allocated</strong>
                    <p>When schools are oversubscribed, they use criteria to decide who gets in. Common criteria include:</p>
                    <ul>
                        <li>👶 <strong>Siblings:</strong> Children with siblings already at the school often get priority.</li>
                        <li>📏 <strong>Distance:</strong> How close you live to the school (measured by the council's method – usually straight line).</li>
                        <li>⛪ <strong>Faith criteria:</strong> For faith schools – church attendance, baptism certificates, etc.</li>
                        <li>👩‍⚕️ <strong>Medical/social needs:</strong> If the school is essential for your child's specific needs.</li>
                        <li>🎓 <strong>Selective schools:</strong> Grammar schools use entrance exams (11+).</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Tips for Applications</strong>
                    <ul>
                        <li>📍 Put your most realistic choice first, not necessarily your "dream" school.</li>
                        <li>📋 Use all your preferences – there's no advantage to listing fewer schools.</li>
                        <li>🏠 Check catchment areas – use previous years' admission distances as a guide.</li>
                        <li>📄 Keep evidence of your address ready – councils check!</li>
                        <li>⏰ Apply on time – late applications go to the back of the queue.</li>
                    </ul>
                </div>

                <h4>🆘 What if You Don't Get Your Preferred School?</h4>
                <ul>
                    <li>📝 <strong>Accept the offer:</strong> Accept the place you're given – you can still appeal or stay on waiting lists.</li>
                    <li>📋 <strong>Waiting lists:</strong> Ask to be added to waiting lists for preferred schools. Your position depends on the admissions criteria.</li>
                    <li>⚖️ <strong>Appeals:</strong> You have the right to appeal. You'll present your case to an independent panel. Success isn't guaranteed, but it's worth trying if you have strong grounds.</li>
                    <li>🔄 <strong>In-year applications:</strong> If you move to the area mid-year, apply directly to schools or through the council.</li>
                </ul>

                <h3>📚 Part 3: What to Expect – School Life in the UK</h3>
                <p>UK school culture might be different from what you're used to. Here's what to expect: 🎒</p>

                <h4>⏰ The School Day:</h4>
                <ul>
                    <li>🌅 <strong>Start time:</strong> Usually 8:30-9:00 AM. Arriving late is taken seriously!</li>
                    <li>🌆 <strong>End time:</strong> Primary schools finish around 3:00-3:30 PM. Secondary schools around 3:00-4:00 PM.</li>
                    <li>🍎 <strong>Break times:</strong> Morning break and lunch break. Younger children may have afternoon break too.</li>
                    <li>🏫 <strong>After-school clubs:</strong> Many schools offer activities like sports, music, drama, homework clubs. Often free.</li>
                    <li>📚 <strong>Homework:</strong> Starts light in primary school and increases. By secondary school, expect regular homework in most subjects.</li>
                </ul>

                <h4>👔 Uniform:</h4>
                <ul>
                    <li>👕 <strong>Most schools require uniform:</strong> This typically includes specific colours/styles for polo shirts, jumpers, trousers/skirts, and shoes.</li>
                    <li>🏷️ <strong>Where to buy:</strong> Supermarkets (cheapest), school suppliers, or the school itself. Many schools have second-hand uniform sales.</li>
                    <li>💰 <strong>Cost help:</strong> If you're on a low income, you may be eligible for help with uniform costs through your council.</li>
                    <li>📋 <strong>Rules are strict:</strong> Schools take uniform seriously. Wrong shoes, jewellery, or extreme hairstyles can result in being sent home!</li>
                </ul>

                <div class="tip">
                    <strong>💡 Uniform Tip</strong>
                    <p>Label everything! 🏷️ Kids lose things constantly. A permanent marker or iron-on labels on every item will save you money and frustration. Check lost property regularly.</p>
                </div>

                <h4>🍽️ School Meals:</h4>
                <ul>
                    <li>🆓 <strong>Universal Infant Free School Meals:</strong> All children in Reception, Year 1, and Year 2 get free school meals regardless of income.</li>
                    <li>💰 <strong>Free School Meals (FSM):</strong> Children from low-income families are entitled to free meals. Apply through your council – don't be embarrassed, it's your right!</li>
                    <li>🥪 <strong>Packed lunches:</strong> Allowed in most schools. Many schools have rules about what can be included (often no nuts, no sweets, no fizzy drinks).</li>
                    <li>💳 <strong>ParentPay/online systems:</strong> Many schools use cashless payment systems. You load money online and your child uses a card or fingerprint to pay.</li>
                </ul>

                <div class="important">
                    <strong>🆓 Why Applying for Free School Meals Matters</strong>
                    <p>Even if your child doesn't want school meals, APPLY if you're eligible! 📝 Schools receive extra funding (Pupil Premium) for every child registered for FSM. This money helps all children. It also gives access to other benefits like free trips and activities.</p>
                </div>

                <h4>📖 The Curriculum:</h4>
                <ul>
                    <li>📚 <strong>National Curriculum:</strong> Most state schools follow this. Core subjects are English, Maths, and Science.</li>
                    <li>🎨 <strong>Other subjects:</strong> History, Geography, Art, Music, PE, Computing, Languages (from age 7), and more.</li>
                    <li>🙏 <strong>Religious Education:</strong> Taught in all schools. You can withdraw your child if you wish.</li>
                    <li>💕 <strong>PSHE/Relationships Education:</strong> Personal, Social, Health and Economic education. Includes relationships and sex education (parents can withdraw from some elements).</li>
                    <li>📝 <strong>SATs:</strong> Standardised tests at the end of Year 2 and Year 6. Used to measure school performance and pupil progress.</li>
                    <li>🎓 <strong>GCSEs:</strong> Exams at age 16 (Year 11). Crucial for future education and employment. Graded 9-1 (9 is highest). Grade 4 is a "standard pass", grade 5 is a "strong pass".</li>
                </ul>

                <h3>🤝 Part 4: Being an Involved Parent – Rights and Expectations</h3>
                <p>UK schools expect parents to be involved – but in specific ways. Here's how to navigate this: 👨‍👩‍👧</p>

                <h4>📞 Communication with School:</h4>
                <ul>
                    <li>📱 <strong>School apps:</strong> Most schools use apps (ClassDojo, Seesaw, ParentMail, etc.) for communication. Download these and check regularly!</li>
                    <li>📧 <strong>Emails and letters:</strong> Important information comes this way. Read everything – missing a deadline can cause problems.</li>
                    <li>📅 <strong>Parents' evenings:</strong> Usually once or twice a year. You meet your child's teachers to discuss progress. Attendance is expected.</li>
                    <li>📊 <strong>Reports:</strong> Written reports at least once a year. These detail your child's progress and areas to improve.</li>
                    <li>📝 <strong>Homework diary/planner:</strong> Used for communication between home and school. Check and sign it regularly.</li>
                </ul>

                <h4>✅ What Schools Expect from Parents:</h4>
                <ul>
                    <li>⏰ <strong>Punctuality:</strong> Get your child to school on time, every day. Persistent lateness is monitored and can result in fines.</li>
                    <li>📅 <strong>Attendance:</strong> Aim for 100% attendance. Below 90% is considered "persistent absence" and triggers intervention.</li>
                    <li>✈️ <strong>Term-time holidays:</strong> Not allowed without exceptional circumstances. Schools can issue fines (check current rates – typically £60-£160 per parent, per child).</li>
                    <li>👔 <strong>Uniform and equipment:</strong> Send your child properly equipped and in correct uniform.</li>
                    <li>📚 <strong>Support learning:</strong> Help with homework, read with younger children, attend school events.</li>
                    <li>🤝 <strong>Respect staff:</strong> Aggressive behaviour towards staff is never acceptable and can result in you being banned from school premises.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Attendance and Fines</strong>
                    <p>UK schools take attendance very seriously. 📊 Every absence is recorded and categorised. Unauthorised absence (including term-time holidays) can result in fixed penalty notices. Persistent non-attendance can lead to court proceedings. If your child is genuinely ill, always inform the school on the first day of absence.</p>
                </div>

                <h4>🙋 Getting Involved (Positively):</h4>
                <ul>
                    <li>👥 <strong>PTA/PFA:</strong> Parent Teacher Association – helps with fundraising and events. A good way to meet other parents and contribute.</li>
                    <li>🎉 <strong>School events:</strong> Assemblies, plays, sports days, fairs. Attending shows your child you care.</li>
                    <li>🤝 <strong>Volunteering:</strong> Many schools welcome parent helpers for reading, trips, or events. You'll need a DBS check.</li>
                    <li>📋 <strong>Parent governors:</strong> Schools have governing bodies that include parent representatives. You can stand for election.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Cultural Tip</strong>
                    <p>In the UK, there's a line between "involved" and "interfering." 🎭 Being supportive, attending events, and communicating appropriately is valued. Constantly complaining, questioning teachers' methods, or trying to control how the school operates is not. Trust the professionals, but speak up if something is genuinely wrong.</p>
                </div>

                <h3>📋 Part 5: Special Educational Needs and Disabilities (SEND)</h3>
                <p>If your child has additional needs, the UK has a framework to support them: 🤝</p>

                <h4>🔍 Understanding SEND:</h4>
                <ul>
                    <li>📚 <strong>SEN (Special Educational Needs):</strong> Children who need extra help with learning, behaviour, or physical needs.</li>
                    <li>🏫 <strong>SEND Code of Practice:</strong> The legal framework that schools must follow.</li>
                    <li>👩‍🏫 <strong>SENCo:</strong> Every school has a Special Educational Needs Coordinator. They're your first point of contact.</li>
                </ul>

                <h4>📊 Levels of Support:</h4>
                <ul>
                    <li>📗 <strong>SEN Support:</strong> The first level. School provides extra help within normal classes. No formal assessment needed.</li>
                    <li>📋 <strong>EHC Plan (Education, Health and Care Plan):</strong> For children with more significant needs. A legal document setting out support required. You or the school can request an assessment from the council.</li>
                    <li>🏫 <strong>Specialist schools:</strong> For children with the most complex needs. Placement usually requires an EHC Plan.</li>
                </ul>

                <div class="important">
                    <strong>📝 Your Rights</strong>
                    <ul>
                        <li>✅ You can request an EHC needs assessment from your council.</li>
                        <li>📄 You have the right to be involved in all decisions about your child's education.</li>
                        <li>⚖️ You can appeal to the SEND Tribunal if you disagree with decisions.</li>
                        <li>🤝 Organisations like IPSEA and Contact can provide free advice and support.</li>
                    </ul>
                </div>

                <h4>🆘 Getting Help:</h4>
                <ul>
                    <li>👩‍🏫 <strong>Talk to the school:</strong> Start with the class teacher, then the SENCo.</li>
                    <li>🏥 <strong>GP referral:</strong> For medical assessments (e.g., ADHD, autism diagnosis).</li>
                    <li>📍 <strong>Local offer:</strong> Every council publishes information about local SEND services on their website.</li>
                    <li>👥 <strong>Parent carer forums:</strong> Local groups of parents with SEND children. Great for advice and support.</li>
                </ul>

                <h3>🏫 Part 6: Types of Secondary Education and Pathways</h3>
                <p>After primary school, there are different routes: 🎓</p>

                <h4>📚 Ages 11-16:</h4>
                <ul>
                    <li>🏫 <strong>Comprehensive schools:</strong> Non-selective state schools. Most children attend these.</li>
                    <li>📝 <strong>Grammar schools:</strong> Selective schools based on the 11+ exam. Only in some areas (Kent, Buckinghamshire, etc.).</li>
                    <li>💷 <strong>Independent schools:</strong> Private schools with entrance exams and fees.</li>
                    <li>🎯 <strong>Specialist schools:</strong> Some state schools specialise in areas like sports, performing arts, or languages.</li>
                </ul>

                <h4>🎓 Ages 16-18 (Post-GCSE Options):</h4>
                <ul>
                    <li>📘 <strong>A-Levels:</strong> Traditional academic qualifications. Usually 3-4 subjects studied in depth. Needed for most university courses.</li>
                    <li>📗 <strong>BTECs and vocational qualifications:</strong> More practical, work-related qualifications. Valid alternatives to A-Levels.</li>
                    <li>🔧 <strong>T-Levels:</strong> New technical qualifications combining classroom study with industry placements.</li>
                    <li>👷 <strong>Apprenticeships:</strong> Paid work combined with study. Leads to qualifications while earning money.</li>
                    <li>🏫 <strong>Where to study:</strong> School sixth form, sixth form college, or further education (FE) college.</li>
                </ul>

                <div class="tip">
                    <strong>💡 University Isn't the Only Path</strong>
                    <p>The UK has a strong apprenticeship and vocational training system. 🔧 High-quality apprenticeships (including degree apprenticeships) can lead to excellent careers without university debt. Don't assume university is the only "successful" route – skilled trades are in high demand!</p>
                </div>

                <h3>💰 Part 7: Financial Help and Support</h3>
                <p>Education is free, but there are still costs. Here's how to get help: 💷</p>

                <h4>🆓 Free Support Available:</h4>
                <ul>
                    <li>🍽️ <strong>Free School Meals:</strong> Apply through your council if on low income or certain benefits.</li>
                    <li>🚌 <strong>Free school transport:</strong> For children living more than 2 miles (under 8) or 3 miles (over 8) from their nearest suitable school.</li>
                    <li>👔 <strong>Uniform grants:</strong> Many councils offer help with uniform costs. Apply through your local council.</li>
                    <li>🎨 <strong>Pupil Premium:</strong> Schools receive extra funding for disadvantaged pupils. This should support your child's education.</li>
                    <li>📚 <strong>16-19 Bursary Fund:</strong> Financial help for students aged 16-19 in education. Apply through your school or college.</li>
                </ul>

                <h4>💳 Childcare and Before/After School:</h4>
                <ul>
                    <li>🏫 <strong>Breakfast clubs:</strong> Many schools offer affordable or free breakfast clubs starting from 7:30-8:00 AM.</li>
                    <li>🌆 <strong>After-school clubs:</strong> Schools and private providers offer care until 5:30-6:00 PM.</li>
                    <li>💰 <strong>Tax-Free Childcare:</strong> Government scheme where for every £8 you pay, the government adds £2. Use for registered childcare including some after-school clubs.</li>
                    <li>🎁 <strong>Childcare vouchers:</strong> If you were signed up before October 2018, you may still be using these.</li>
                </ul>

                <div class="important">
                    <strong>📝 Don't Miss Out!</strong>
                    <p>Many families don't claim support they're entitled to. Always check:</p>
                    <ul>
                        <li>🍽️ Free School Meals eligibility (even if your child takes packed lunch – schools get funding!)</li>
                        <li>🚌 School transport entitlement</li>
                        <li>👔 Uniform grants from your council</li>
                        <li>💰 Tax-Free Childcare (worth up to £2,000 per child per year)</li>
                    </ul>
                </div>

                <h3>🎯 Part 8: Navigating the School System – Practical Tips</h3>
                <p>Here's some hard-earned wisdom for navigating UK schools: 🎓</p>

                <h4>✅ Do's:</h4>
                <ul>
                    <li>📱 <strong>Download all the apps:</strong> Schools use multiple apps and platforms. Set them up immediately.</li>
                    <li>📅 <strong>Use a family calendar:</strong> Track term dates, inset days, events, and deadlines. Schools give lots of notice – use it!</li>
                    <li>👋 <strong>Introduce yourself:</strong> Get to know your child's teacher at the start of the year.</li>
                    <li>👥 <strong>Build a network:</strong> Get to know other parents. They're your best source of information and support.</li>
                    <li>📧 <strong>Respond promptly:</strong> When school asks for permission slips, forms, or money – do it quickly.</li>
                    <li>📚 <strong>Read with your child:</strong> This is the single most important thing you can do for their education.</li>
                    <li>😴 <strong>Establish routines:</strong> Regular bedtimes, morning routines, and homework times make everything easier.</li>
                </ul>

                <h4>❌ Don'ts:</h4>
                <ul>
                    <li>📱 <strong>Don't ignore communications:</strong> That "unimportant-looking" email might contain crucial information.</li>
                    <li>😤 <strong>Don't confront teachers angrily:</strong> If you have concerns, request a meeting. Shouting in the playground solves nothing.</li>
                    <li>🗣️ <strong>Don't bad-mouth the school to your child:</strong> It undermines their respect for education and makes their life harder.</li>
                    <li>🏖️ <strong>Don't book term-time holidays:</strong> Fines are real and affect your child's education.</li>
                    <li>🚗 <strong>Don't park dangerously at school:</strong> Nothing annoys communities more. Park and walk if necessary.</li>
                </ul>

                <h4>🆘 If Problems Arise:</h4>
                <ul>
                    <li>👩‍🏫 <strong>Step 1:</strong> Talk to the class teacher first. Most issues can be resolved here.</li>
                    <li>🏫 <strong>Step 2:</strong> If unresolved, request a meeting with the head teacher or relevant senior staff.</li>
                    <li>📝 <strong>Step 3:</strong> If still unhappy, make a formal complaint using the school's complaints procedure.</li>
                    <li>⚖️ <strong>Step 4:</strong> Contact the governing body or, for serious issues, the local council or Ofsted.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Golden Rule of School Communication</strong>
                    <p>Put it in writing! 📧 If something important is discussed verbally, follow up with an email summarising what was agreed. "Thank you for meeting with me today. Just to confirm, we agreed that..." This creates a record and avoids misunderstandings.</p>
                </div>

                <h3>🌍 Part 9: Supporting Your Child as a Migrant Family</h3>
                <p>Coming from another country brings unique challenges and opportunities: 🤝</p>

                <h4>🗣️ Language Support:</h4>
                <ul>
                    <li>📗 <strong>EAL (English as an Additional Language):</strong> Schools must support children learning English. There's often additional teaching and support available.</li>
                    <li>🏠 <strong>Maintain home language:</strong> Bilingualism is an advantage! Continue speaking your language at home.</li>
                    <li>📚 <strong>Reading in both languages:</strong> Read with your child in both English and your home language.</li>
                    <li>🌐 <strong>Translation services:</strong> Schools should provide interpreters for important meetings if needed.</li>
                </ul>

                <h4>🎭 Cultural Adjustment:</h4>
                <ul>
                    <li>🍽️ <strong>School meals:</strong> Inform the school about dietary requirements (halal, vegetarian, allergies, etc.).</li>
                    <li>🙏 <strong>Religious observance:</strong> Schools should accommodate religious needs. Discuss any requirements with the school.</li>
                    <li>👔 <strong>Uniform modifications:</strong> Faith-based modifications (hijab, kippah, etc.) are usually accommodated. Check with the school.</li>
                    <li>📅 <strong>Religious festivals:</strong> Authorised absence for important religious festivals is usually granted.</li>
                </ul>

                <h4>👨‍👩‍👧 Helping Your Child Fit In:</h4>
                <ul>
                    <li>🤝 <strong>Playdates:</strong> Encourage your child to invite classmates over. This builds friendships.</li>
                    <li>⚽ <strong>Extra-curricular activities:</strong> Sports clubs, Scouts/Guides, music groups help children make friends outside school.</li>
                    <li>🎉 <strong>Birthday parties:</strong> Parties are a big part of UK childhood. Inviting classmates (and being invited) matters to children.</li>
                    <li>🎭 <strong>Learn the culture:</strong> Help your child understand UK culture (but don't abandon your own!).</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>The UK education system can seem complicated, but it's designed to support all children. 🏫 The key is: understand how it works, communicate with your child's school, be involved but respectful, and advocate for your child when needed. 💪 Your child's education is a partnership between home and school – when both work together, children thrive. 🌟 Good luck! 🇬🇧📚</p>
                </div>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith – Understanding Belief, Belonging, and Mutual Respect 🤝",
            content: `
                <p>Right then, let's tackle something that can be sensitive but is incredibly important: religion and faith in the United Kingdom. 🙏 This guide will help you understand the religious landscape here, how to navigate your own faith while respecting others, and the cultural expectations around religious expression. Let's get into it! 💪</p>

                <p>The UK has a complex religious history and is now one of the most religiously diverse nations in the world. 🌍 Understanding this context will help you integrate while maintaining your own beliefs and practices.</p>

                <h3>⛪ Part 1: The Religious Landscape – What You Need to Know</h3>
                <p>The United Kingdom has a unique relationship with religion. Here's the honest picture: 📊</p>

                <div class="important">
                    <strong>📈 The Current Reality</strong>
                    <ul>
                        <li><strong>Christianity:</strong> Historically dominant, but church attendance has declined significantly. The Church of England is the established church, and the monarch is its head. ⛪</li>
                        <li><strong>No Religion:</strong> The fastest-growing group! Over half of the population identifies as having no religion. Secularism is very common. 🤷</li>
                        <li><strong>Islam:</strong> The second-largest religion, with vibrant communities across the UK. 🕌</li>
                        <li><strong>Hinduism, Sikhism, Judaism, Buddhism:</strong> All have significant and well-established communities. 🛕🕍</li>
                        <li><strong>Other Faiths:</strong> Diverse smaller communities including Bahá'í, Jain, Zoroastrian, Pagan, and many more. 🌟</li>
                    </ul>
                </div>

                <h4>🏛️ The Church of England – The "Established" Church:</h4>
                <ul>
                    <li>⛪ <strong>What it means:</strong> The Church of England (Anglican) is the official state church. The King is the "Supreme Governor" of the Church.</li>
                    <li>📜 <strong>Historical role:</strong> Church and state have been intertwined for centuries. Bishops sit in the House of Lords. Many schools are Church of England schools.</li>
                    <li>🤔 <strong>The reality:</strong> Despite being "established," regular church attendance is low (around 2-3% of the population). Many CofE members attend only for Christmas, Easter, weddings, and funerals.</li>
                    <li>🏴󠁧󠁢󠁳󠁣󠁴󠁿 <strong>Scotland is different:</strong> The Church of Scotland (Presbyterian) is the national church there, but it's not "established" in the same way – it's independent of the state.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Cultural Christianity Concept</strong>
                    <p>Many people in the UK identify as "culturally Christian" without actually believing or practising. 🎄 They might celebrate Christmas and Easter, have church weddings, and send children to church schools – but never attend regular services or pray. This is completely normal and accepted here!</p>
                </div>

                <h3>⚖️ Part 2: Your Legal Rights – Religious Freedom is Protected</h3>
                <p>The good news: your right to practise your religion (or have no religion) is strongly protected by law. ⚖️</p>

                <div class="important">
                    <strong>🔒 Key Legal Protections</strong>
                    <ul>
                        <li><strong>The Equality Act 2010:</strong> Makes it illegal to discriminate against someone because of their religion or belief (including lack of belief). This applies to employment, housing, education, and services. 📋</li>
                        <li><strong>Freedom of Religion:</strong> Protected under the Human Rights Act 1998. You can hold any religious belief, change your religion, and practise your faith. 🕊️</li>
                        <li><strong>Religious Hate Crime:</strong> Stirring up hatred based on religion is a criminal offence. Verbal or physical attacks motivated by religious hatred are treated seriously. 🚫</li>
                        <li><strong>Workplace Accommodation:</strong> Employers must make reasonable adjustments for religious practices (prayer times, religious dress, holidays) unless it causes genuine operational problems. 💼</li>
                    </ul>
                </div>

                <h4>✅ What This Means In Practice:</h4>
                <ul>
                    <li>🧕 <strong>Religious dress:</strong> You can wear religious clothing (hijab, turban, kippah, cross, etc.) in most situations. Some exceptions exist for genuine health and safety reasons.</li>
                    <li>🙏 <strong>Prayer:</strong> You can pray at work if it doesn't disrupt your duties. Many employers provide prayer rooms or quiet spaces.</li>
                    <li>📅 <strong>Religious holidays:</strong> You can request time off for religious festivals. Employers should try to accommodate this, though it may come from your annual leave allowance.</li>
                    <li>🍽️ <strong>Dietary requirements:</strong> Halal, kosher, vegetarian, or other religiously-mandated diets should be accommodated in workplaces, schools, and hospitals.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Know Your Limits</strong>
                    <ul>
                        <li>❌ Religious freedom doesn't mean you can break other laws. Practices that harm others (e.g., forced marriage, FGM) remain illegal regardless of religious justification.</li>
                        <li>❌ You cannot discriminate against others based on their protected characteristics, even if your religion disapproves. Religious belief is not a licence to discriminate.</li>
                        <li>❌ Proselytising aggressively (pressuring people to convert) can cross into harassment. Share your faith respectfully, but accept "no" gracefully.</li>
                    </ul>
                </div>

                <h3>🤝 Part 3: Mutual Respect – The Golden Rule of Religious Life in the UK</h3>
                <p>Here's the most important principle: in the UK, religious and non-religious people are expected to live side by side with <strong>mutual respect</strong>. 🤝 This is the social contract that makes diversity work.</p>

                <h4>🙏 What Mutual Respect Looks Like:</h4>
                <ul>
                    <li>👋 <strong>Acknowledge others' beliefs:</strong> You don't have to agree with or understand someone's faith, but basic respect for their right to hold it is expected.</li>
                    <li>🗣️ <strong>Mind your language:</strong> Avoid insulting or mocking other religions. "Banter" about someone's faith can easily cross into offensive territory.</li>
                    <li>🎉 <strong>Respect religious occasions:</strong> Be understanding when colleagues or neighbours have religious commitments (fasting, festivals, sabbath observance).</li>
                    <li>🤫 <strong>Keep it proportionate:</strong> Expressing your faith is fine; forcing it on others is not. There's a difference between sharing and imposing.</li>
                    <li>🧒 <strong>Be careful with children:</strong> Teaching your own children your faith is your right. Trying to influence other people's children without parental consent is not acceptable.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The "Live and Let Live" Principle</strong>
                    <p>The English approach to religion can be summarised as "live and let live." 🕊️ Your beliefs are your business. Other people's beliefs are their business. Everyone is expected to get along without trying to convert or condemn each other. Private devotion is respected; public proselytising is often seen as inappropriate.</p>
                </div>

                <h4>❌ Behaviours That Cause Problems:</h4>
                <ul>
                    <li>🔊 <strong>Aggressive preaching:</strong> Standing on street corners shouting about salvation, knocking on doors repeatedly, or cornering colleagues to discuss religion.</li>
                    <li>😤 <strong>Condemning others:</strong> Publicly declaring that people of other faiths (or no faith) are going to hell, are immoral, or are inferior.</li>
                    <li>🙅 <strong>Refusing to interact:</strong> While you can choose your friends, refusing to work with, serve, or acknowledge people of other faiths is discrimination.</li>
                    <li>👀 <strong>Judging others' observance:</strong> Criticising members of your own faith community for being "not religious enough" or too liberal.</li>
                    <li>🏠 <strong>Noise and disruption:</strong> Religious activities that cause noise disturbance to neighbours (early morning calls to prayer, late-night services) can cause community tension.</li>
                </ul>

                <h3>🕌 Part 4: Finding and Joining a Faith Community</h3>
                <p>If you're religious and want to find a community, here's how to go about it: 🔍</p>

                <h4>🔎 Finding a Place of Worship:</h4>
                <ul>
                    <li>🌐 <strong>Online search:</strong> Search for "[your religion] + [your town]" to find local places of worship and community groups.</li>
                    <li>📱 <strong>Apps and directories:</strong> Apps like "Mosque Finder," "Near Shul," or denominational websites list local congregations.</li>
                    <li>👥 <strong>Word of mouth:</strong> Ask people from your faith background already living in the UK. Community connections are often the best way to find a welcoming congregation.</li>
                    <li>🏛️ <strong>Interfaith councils:</strong> Many areas have interfaith groups that can point you toward local faith communities.</li>
                    <li>📚 <strong>University chaplaincies:</strong> If you're a student, university chaplaincy services often support multiple faiths and can connect you with communities.</li>
                </ul>

                <h4>🤝 Joining a Community – What to Expect:</h4>
                <ul>
                    <li>👋 <strong>Most are welcoming:</strong> Religious communities generally welcome newcomers. Don't be shy about introducing yourself.</li>
                    <li>🧐 <strong>Visit first:</strong> Attend a service or two before committing. Different congregations within the same faith can vary significantly in style and atmosphere.</li>
                    <li>💬 <strong>Ask questions:</strong> It's fine to ask about service times, dress expectations, and community activities.</li>
                    <li>🌍 <strong>Cultural differences:</strong> UK congregations may practise differently from what you're used to back home. Be open to some variation while finding a community that feels right for you.</li>
                    <li>🏃 <strong>Take your time:</strong> Building genuine community takes time. Attend regularly, participate in social activities, and connections will form naturally.</li>
                </ul>

                <div class="important">
                    <strong>🎭 Different Denominations and Traditions</strong>
                    <p>Within each major religion, you'll find diversity. 🌈 For example:</p>
                    <ul>
                        <li><strong>Christianity:</strong> Catholic, Anglican (Church of England), Methodist, Baptist, Pentecostal, Orthodox, Quaker, and many more – each with different styles.</li>
                        <li><strong>Islam:</strong> Sunni, Shia, Sufi communities; mosques may have different ethnic or linguistic backgrounds.</li>
                        <li><strong>Judaism:</strong> Orthodox, Reform, Liberal, Masorti – ranging from traditional to progressive.</li>
                        <li><strong>Hinduism:</strong> Temples may focus on different deities or traditions; community organisations vary by regional origin.</li>
                        <li><strong>Sikhism:</strong> Gurdwaras are generally welcoming to all, but some may have specific community ties.</li>
                    </ul>
                    <p>Shop around until you find the right fit! 🛒</p>
                </div>

                <h3>🏫 Part 5: Religion and Schools – What Parents Need to Know</h3>
                <p>Religion in schools is a common concern for parents. Here's the situation: 📚</p>

                <h4>📋 The Legal Framework:</h4>
                <ul>
                    <li>🙏 <strong>Collective worship:</strong> State schools are required to hold daily acts of "collective worship" that are "broadly Christian in character." In practice, this is often a morning assembly with a vague moral theme.</li>
                    <li>📖 <strong>Religious Education (RE):</strong> RE is compulsory but is meant to teach <em>about</em> religions (plural), not to indoctrinate. It covers Christianity, Islam, Judaism, Hinduism, Sikhism, Buddhism, and non-religious worldviews.</li>
                    <li>🏫 <strong>Faith schools:</strong> Schools affiliated with a religion (Church of England, Catholic, Jewish, Muslim, Sikh, etc.) can teach their faith more directly and may prioritise admissions for families of that faith.</li>
                    <li>🚫 <strong>Right to withdraw:</strong> Parents can withdraw children from RE and collective worship. However, consider carefully – RE provides valuable knowledge about the diverse society your child lives in.</li>
                </ul>

                <h4>⛪ Faith Schools – Understanding the Options:</h4>
                <ul>
                    <li>🏛️ <strong>Church of England schools:</strong> Very common. Quality varies. Many are academically good and accept children of all faiths. Religious content is usually moderate.</li>
                    <li>✝️ <strong>Catholic schools:</strong> Tend to be more explicitly religious. Often have good reputations. Usually prioritise baptised Catholic children for admissions.</li>
                    <li>🕌 <strong>Muslim, Jewish, Sikh, Hindu schools:</strong> Less common but growing. Provide education within the faith tradition. Follow the national curriculum plus religious education.</li>
                    <li>📝 <strong>Admissions policies:</strong> Oversubscribed faith schools may require evidence of religious practice (church attendance records, letter from a religious leader). This can be controversial but is legal.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Making the Right Choice</strong>
                    <p>Choose a school based on overall quality, ethos, and fit for your child – not just religious affiliation. 🎯 A good non-faith school may suit your child better than a mediocre faith school. Visit schools, read Ofsted reports, and talk to other parents before deciding!</p>
                </div>

                <h4>🎒 Supporting Your Child:</h4>
                <ul>
                    <li>🗣️ <strong>Communicate with school:</strong> Tell the school about your family's faith and any accommodations needed (dietary requirements, religious dress, absence for festivals).</li>
                    <li>📅 <strong>Religious holidays:</strong> Schools generally grant authorised absence for major religious festivals. Request in advance and in writing.</li>
                    <li>🤝 <strong>Be involved:</strong> Attend parent events, join the PTA, build relationships. This helps teachers understand your family better.</li>
                    <li>💬 <strong>Talk to your child:</strong> Discuss what they're learning in RE. Answer their questions. Help them navigate being different while feeling confident in their identity.</li>
                </ul>

                <h3>💼 Part 6: Religion in the Workplace</h3>
                <p>Navigating religion at work requires balance. Here's how to get it right: ⚖️</p>

                <h4>✅ Your Rights:</h4>
                <ul>
                    <li>🚫 <strong>No discrimination:</strong> You cannot be refused a job, passed over for promotion, or treated unfairly because of your religion (or lack thereof).</li>
                    <li>🧕 <strong>Religious dress:</strong> Generally allowed unless there's a genuine health and safety reason. Blanket bans on religious dress are usually unlawful.</li>
                    <li>🙏 <strong>Prayer and worship:</strong> Employers should try to accommodate reasonable requests for prayer time, but it shouldn't disrupt work. Use lunch breaks or adjust working hours by agreement.</li>
                    <li>📅 <strong>Time off for festivals:</strong> You can request annual leave for religious holidays. Employers should try to accommodate, but may refuse if it causes genuine business problems.</li>
                </ul>

                <h4>🤝 Navigating Religious Discussions at Work:</h4>
                <ul>
                    <li>🗣️ <strong>Keep it appropriate:</strong> Brief mentions of faith ("I can't make that meeting, I have church") are fine. Lengthy religious discussions during work time are not.</li>
                    <li>🤫 <strong>Read the room:</strong> Some workplaces are more open to religious discussion than others. Follow the lead of the workplace culture.</li>
                    <li>❌ <strong>Don't proselytise:</strong> Trying to convert colleagues is inappropriate and can constitute harassment. Faith is personal – keep it that way at work.</li>
                    <li>🙅 <strong>Don't judge:</strong> Colleagues may have very different beliefs (or none). Respect that. Making disapproving comments about their lifestyle or beliefs creates a hostile environment.</li>
                    <li>🎉 <strong>Participate in workplace culture:</strong> You don't have to drink alcohol at the office party, but showing up and being sociable is important. Being seen as "separate" can harm your career.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ If You Face Discrimination</strong>
                    <p>If you believe you're being discriminated against because of your religion:</p>
                    <ul>
                        <li>📝 Document incidents (dates, times, what was said, witnesses)</li>
                        <li>🗣️ Raise it with your manager or HR department first</li>
                        <li>📋 Follow your employer's grievance procedure</li>
                        <li>⚖️ You can take a claim to an employment tribunal (time limits apply)</li>
                        <li>📞 Seek advice from ACAS (Advisory, Conciliation and Arbitration Service) or a solicitor</li>
                    </ul>
                </div>

                <h3>🏘️ Part 7: Religion in Your Community – Being a Good Neighbour</h3>
                <p>Living alongside people of different faiths (and none) is a daily reality. Here's how to do it well: 🤝</p>

                <h4>👋 Building Positive Relationships:</h4>
                <ul>
                    <li>🤝 <strong>Be a good neighbour first:</strong> Before you're a religious person, be a friendly, helpful, considerate neighbour. This earns respect regardless of faith.</li>
                    <li>🎉 <strong>Share celebrations:</strong> Invite neighbours to share in your religious festivals (Eid sweets, Diwali, Christmas). Most people appreciate the gesture even if they're not religious.</li>
                    <li>🙏 <strong>Respect their celebrations:</strong> Acknowledge your neighbours' festivals with a "Happy Christmas" or "Eid Mubarak" – it's polite and builds goodwill.</li>
                    <li>🔇 <strong>Be mindful of noise:</strong> Religious gatherings at home should respect neighbours' peace. Keep noise to reasonable levels and reasonable hours.</li>
                    <li>🍽️ <strong>Food brings people together:</strong> Sharing food from your culture/faith is a wonderful way to build community. Many people are curious and will appreciate the gesture.</li>
                </ul>

                <h4>🌍 Interfaith Engagement:</h4>
                <ul>
                    <li>🤝 <strong>Interfaith groups:</strong> Many areas have interfaith councils or groups that bring together people of different faiths for dialogue and community projects.</li>
                    <li>🚪 <strong>Open days:</strong> Mosques, temples, gurdwaras, synagogues, and churches often hold open days. Visiting other places of worship builds understanding.</li>
                    <li>🤲 <strong>Joint charitable work:</strong> Food banks, homeless shelters, and community projects often bring together people of all faiths working together for good.</li>
                    <li>💬 <strong>Dialogue, not debate:</strong> Interfaith engagement is about understanding, not trying to "win" or convert. Approach with genuine curiosity.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The "Religion is Private" Culture</strong>
                    <p>Remember: many English people consider religion very private. 🤫 They may not want to discuss it, and asking "What religion are you?" can feel intrusive. Don't assume everyone wants to talk about faith – follow their lead. If they're interested, they'll ask!</p>
                </div>

                <h3>🚨 Part 8: Sensitive Issues – Navigating Potential Tensions</h3>
                <p>Let's be honest about some areas where religious beliefs can cause friction in modern UK society: 😬</p>

                <h4>🏳️‍🌈 LGBTQ+ Rights:</h4>
                <ul>
                    <li>⚖️ <strong>The law is clear:</strong> Discrimination against LGBTQ+ people is illegal in employment, housing, and services. This applies regardless of your religious beliefs.</li>
                    <li>💭 <strong>You can hold your views:</strong> You're entitled to believe that homosexuality is wrong. You're not entitled to discriminate against gay people in practice.</li>
                    <li>🗣️ <strong>Choose your words:</strong> Expressing religious views on sexuality is legal, but doing so in a way that harasses or intimidates individuals is not.</li>
                    <li>🤝 <strong>Coexistence is expected:</strong> You'll work alongside, be served by, and live near LGBTQ+ people. Basic civility and professionalism is the minimum expectation.</li>
                    <li>👨‍👨‍👧 <strong>Your children will encounter this:</strong> Schools teach that same-sex families exist and deserve respect. You can supplement this with your own values at home, but cannot opt out of inclusive education.</li>
                </ul>

                <h4>👩 Women's Equality:</h4>
                <ul>
                    <li>⚖️ <strong>Legal equality:</strong> Women have equal rights in UK law. This includes education, employment, property ownership, and bodily autonomy.</li>
                    <li>🏠 <strong>Within your family:</strong> How you organise your family life is largely your business. However, forced marriage and domestic abuse are crimes regardless of cultural or religious justification.</li>
                    <li>💼 <strong>In public life:</strong> Women in the UK expect to be treated as equals in workplaces and public spaces. Refusing to work with female colleagues or managers will cause serious problems.</li>
                    <li>🤝 <strong>Social interaction:</strong> Some cultures avoid physical contact between unrelated men and women. A brief explanation ("I don't shake hands with women for religious reasons, but I'm pleased to meet you") is usually understood and respected.</li>
                </ul>

                <h4>🗣️ Freedom of Speech and "Blasphemy":</h4>
                <ul>
                    <li>📜 <strong>No blasphemy law:</strong> The UK abolished its blasphemy laws in 2008. There is no legal protection for religions against criticism or ridicule.</li>
                    <li>🎭 <strong>Satire and criticism:</strong> People can (and do) mock, criticise, and satirise religions. This includes your religion. You may find it offensive, but it's legal.</li>
                    <li>🛑 <strong>The appropriate response:</strong> If you're offended by criticism of your faith, the appropriate response is to ignore it, complain to the platform, or write a calm rebuttal. Violence, threats, or intimidation are crimes.</li>
                    <li>⚖️ <strong>Hate speech limits:</strong> While criticism of religion is legal, inciting hatred against religious people is not. There's a line between criticising Islam and inciting hatred against Muslims.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Important Principle</strong>
                    <p>In the UK, people are protected from discrimination – but ideas, beliefs, and religions themselves are open to criticism. 🎯 You have a right to hold your faith without facing discrimination. You don't have a right to have your faith protected from criticism or debate. Understanding this distinction is important!</p>
                </div>

                <h3>😇 Part 9: If You Have No Religion</h3>
                <p>This section is for those who don't follow any religion – you're in good company! 🤝</p>

                <h4>🤷 The Non-Religious Landscape:</h4>
                <ul>
                    <li>📊 <strong>You're not alone:</strong> Over half of the UK population identifies as having no religion. In some areas, it's the overwhelming majority.</li>
                    <li>⚖️ <strong>Equal protection:</strong> Non-religious beliefs (humanism, atheism, agnosticism) are protected under equality law just like religious beliefs.</li>
                    <li>🏛️ <strong>Secular options:</strong> Non-religious ceremonies for weddings, funerals, and naming ceremonies are widely available and socially accepted.</li>
                    <li>🤝 <strong>Humanist organisations:</strong> Groups like Humanists UK provide community, ceremonies, and support for non-religious people.</li>
                </ul>

                <h4>🤝 Respecting Religious People:</h4>
                <ul>
                    <li>👋 <strong>Same principle applies:</strong> Just as religious people should respect non-believers, non-religious people should respect those with faith.</li>
                    <li>🙄 <strong>Avoid condescension:</strong> Treating religious people as stupid, deluded, or backward is just as problematic as religious people condemning atheists.</li>
                    <li>🎉 <strong>Participate in cultural events:</strong> You can enjoy Christmas dinner, attend a friend's wedding at a church, or share Eid sweets without believing in the underlying religion.</li>
                    <li>💬 <strong>Respectful disagreement:</strong> You can disagree with religious beliefs without being dismissive or offensive about it.</li>
                </ul>

                <h3>🎯 Part 10: Practical Tips for Religious Integration</h3>
                <p>Here's the practical wisdom for navigating religion in the UK: 💡</p>

                <h4>✅ Do:</h4>
                <ul>
                    <li>🙏 <strong>Practise your faith:</strong> You have every right to pray, worship, fast, and observe your religion. Don't feel you have to hide it.</li>
                    <li>🤝 <strong>Be open about accommodations:</strong> If you need prayer time, dietary requirements, or time off for festivals – ask. Most employers and organisations will try to help.</li>
                    <li>💬 <strong>Explain when asked:</strong> If people are curious about your faith, be willing to explain (briefly). Most curiosity is genuine interest, not hostility.</li>
                    <li>🌍 <strong>Engage with diversity:</strong> Get to know people of other faiths (and no faith). It enriches your life and builds bridges in your community.</li>
                    <li>🏘️ <strong>Be a good representative:</strong> Like it or not, people may judge your faith by your behaviour. Being a kind, honest, and helpful person reflects well on your community.</li>
                    <li>📚 <strong>Learn about UK context:</strong> Understanding Britain's religious history and current landscape helps you navigate it better.</li>
                </ul>

                <h4>❌ Don't:</h4>
                <ul>
                    <li>📢 <strong>Don't preach aggressively:</strong> Sharing your faith is fine; pressuring people is not. If someone isn't interested, respect that.</li>
                    <li>😤 <strong>Don't condemn others:</strong> Publicly declaring that people are sinners, going to hell, or morally inferior because of their beliefs (or lifestyle) will isolate you.</li>
                    <li>🙅 <strong>Don't refuse to integrate:</strong> Interacting only with people of your own faith will limit your opportunities and isolate your family.</li>
                    <li>💭 <strong>Don't assume the worst:</strong> Most people in the UK are tolerant and curious, not hostile. Don't expect prejudice before you encounter it.</li>
                    <li>⚖️ <strong>Don't break the law:</strong> Religious belief is never a justification for illegal activity. The law applies equally to everyone.</li>
                    <li>👀 <strong>Don't judge others' observance:</strong> How other members of your faith practise is their business. Unity doesn't require uniformity.</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Religion and faith in the United Kingdom come down to one core principle: <strong>mutual respect and peaceful coexistence</strong>. 🤝 You are free to believe, practise, and worship as you choose – and so is everyone else. The expectation is that you'll live alongside people of all faiths and none with civility, courtesy, and respect. 🕊️</p>
                    <p>Your faith is your own. It can be a source of strength, community, and meaning. 💪 Just remember that in a diverse society, the key to religious harmony is simple: mind your own business, respect others' right to mind theirs, and treat everyone with the dignity you'd want for yourself. 🌟 That's the British way! 🇬🇧</p>
                </div>
            `
        }
    },
    centralEurope: {
        name: "Central Europe",
        flag: "🇩🇪🇦🇹🇨🇭🇱🇮",
        relationships: {
            title: "💕 Module 1: A Practical Guide to Relationships, Respect, and How Not to Make a Fool of Yourself 🤝",
            content: `
                <p>So, let's get into the important stuff: men, women, dating, and everything in between. 🎭 This is likely one of the biggest differences you'll find from your home country, and it's where things can go wrong fastest. ⚠️</p>
                
                <p>This guide covers Germany 🇩🇪, Austria 🇦🇹, Switzerland 🇨🇭, and Liechtenstein 🇱🇮 – while each has its own character, they share a common Germanic cultural foundation. This guide isn't here to judge. It's a practical manual to help you understand the landscape, avoid getting into trouble 🔥, and hopefully have a good time. Pay attention, because these aren't just suggestions – they're the rules of the game! 🎯</p>

                <h3>🚨 Part 1: The Absolute, Non-Negotiable Rules (The Legal Bits) 📜</h3>
                <p>This isn't about culture; this is about the law. ⚖️ Breaking these rules can lead to prison. There are <strong>no exceptions</strong>.</p>

                <div class="warning">
                    <strong>🔞 Age of Consent Across Central Europe – Know the Law</strong>
                    <ul>
                        <li>The legal age of consent varies: Germany 🇩🇪 and Austria 🇦🇹 set it at 14, Switzerland 🇨🇭 and Liechtenstein 🇱🇮 at 16 – but all have significant restrictions and conditions.</li>
                        <li>Sexual contact with someone under the age of consent is <strong>always a serious crime</strong> (Germany: Kindesmissbrauch, Austria: Sexueller Missbrauch, Switzerland: Sexuelle Handlungen mit Kindern).</li>
                        <li>In Germany and Austria, adults over 21 can be prosecuted for sexual contact with 14-15 year olds if they exploit the young person's lack of sexual self-determination.</li>
                        <li>Persons in positions of trust (teachers 👨‍🏫, coaches, employers 👩‍⚕️) face stricter rules across all countries – sexual relationships with minors in their care are prohibited.</li>
                        <li><strong>Important:</strong> "I thought they were older" is <strong>never</strong> an excuse in any Central European country. The responsibility is 100% on you. If you have any doubt at all, walk away. 🚶</li>
                        <li><strong>Practical advice:</strong> To stay safe, treat 18 as the age of consent for any romantic or sexual relationship.</li>
                    </ul>
                </div>

                <div class="important">
                    <strong>✅ Consent is Essential (Einvernehmlichkeit / Zustimmung)</strong>
                    <ul>
                        <li>You must have clear consent across all Central European countries. 👍 Silence is not a yes. Someone being friendly is not a yes. Someone being drunk 🍺 is not a yes.</li>
                        <li>"Nein" means "Nein." 🛑 It is the end of the conversation. Continuing to pressure someone after a "no" is harassment in Germany (Belästigung), Austria (Belästigung), and Switzerland (Belästigung).</li>
                        <li>Germany's sexual criminal law (StGB §177) was reformed in 2016 with the principle of "Nein heißt Nein" (No means No). Austria and Switzerland have similar strong consent laws.</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>⚖️ Equality is the Law Across Central Europe</strong>
                    <p>Men and women are equal under the law in all Central European countries. 👫 Same-sex relationships are legal, normal, and protected. 🏳️‍🌈 Same-sex marriage is legal in Germany (since 2017), Austria (since 2019), and Switzerland (since 2022). Liechtenstein has registered partnerships. Disrespecting someone based on their gender or sexuality is not tolerated anywhere in the region.</p>
                </div>

                <h3>👔 Part 2: Dress Code – Practicality Meets Regional Variation</h3>
                <p>First things first: in modern Central Europe, you can, and should, wear whatever makes you feel comfortable. 😎 Personal freedom is highly valued. However, this guide is here to give you practical advice, especially for rural areas where traditional values may be more prominent. 📚</p>

                <p>Central Europeans value functionality and quality over flashiness. The key concept across the region is: <strong>"angemessen" (German), "passend" (Austrian), "angemessen" (Swiss)</strong> – meaning appropriate. It shows you've thought about the occasion and dressed suitably. ✨</p>

                <div class="tip">
                    <strong>💡 What does "appropriate" mean in rural Central Europe?</strong>
                    <p>It means you've considered the occasion and dressed respectfully for it. 🤝 Rural communities across Germany, Austria, and Switzerland tend to be more conservative in dress than city dwellers. Clean, well-maintained clothing is the foundation – it's less about fashion and more about showing you take care of yourself and respect the situation.</p>
                </div>

                <h4>🎯 Context is Everything:</h4>
                <ul>
                    <li>🏠 <strong>Daily Life</strong> (running errands): Practical, clean clothing. Central Europeans appreciate functionality – good walking shoes and weather-appropriate layers.</li>
                    <li>🍺 <strong>At the local Gasthof 🇩🇪🇦🇹, Beiz 🇨🇭 (local pub/inn)</strong>: Smart casual is safe – clean trousers or jeans, a decent shirt or jumper. Nothing too flashy or provocative.</li>
                    <li>🍽️ <strong>A "Nice" Occasion</strong> (a good restaurant, meeting the family): This is where "making an effort" is most appreciated. Neat, conservative clothing shows respect.</li>
                    <li>⛪ <strong>Church or Traditional Events:</strong> Dress conservatively. In Bavaria 🇩🇪 and Austria 🇦🇹, traditional clothing (Tracht) like Dirndl or Lederhosen may be worn at festivals. In Switzerland 🇨🇭, regional Trachten vary by canton.</li>
                    <li>🎨 <strong>Expressing Yourself:</strong> In cities like Berlin, Vienna, or Zurich, unique personal style is accepted. In rural areas, be aware that very unusual clothing may draw attention.</li>
                </ul>

                <p>Central Europeans value <strong>practicality and understatement</strong>. 🎩 The goal is to look presentable without appearing to show off. Quality basics trump flashy brands. So, ask yourself: "Am I dressed appropriately for this situation?" If the answer is yes, you're fine. ✅</p>

                <h3>🎭 Part 3: The Social Dance – Public Behaviour and First Steps</h3>
                <p>This is where real Central European culture comes in. People across Germany, Austria, Switzerland, and Liechtenstein are generally private and value their personal space. 🤫</p>

                <ul>
                    <li>💑 <strong>Public Affection:</strong> Central Europeans are more reserved than some cultures. Holding hands is fine. A brief kiss is acceptable. 😘 Long, passionate embraces in public, especially in conservative rural areas, will make people uncomfortable. 😬</li>
                    <li>📏 <strong>Personal Space (Persönliche Distanz):</strong> Personal space is valued across the region. Don't stand too close – about an arm's length is appropriate. 🤲 Uninvited touching, even if you mean it to be friendly, is generally unwelcome.</li>
                    <li>💬 <strong>The Art of the Compliment:</strong> Central Europeans appreciate directness but can be suspicious of excessive flattery. Complimenting something someone <em>chose</em> (their jacket 🧥, their car 🚗) is safer than personal comments. Be genuine – whether in Munich, Vienna, Zurich, or Vaduz, people can spot insincerity quickly.</li>
                    <li>🗣️ <strong>Initiating a Conversation:</strong> People across the region typically don't engage in small talk with strangers. At social events or in the Verein 🇩🇪🇦🇹 or Verein/Club 🇨🇭 (club), it's different. Use the situation as a starting point. If they give short answers and turn away, respect that signal. 😊</li>
                </ul>

                <h3>💕 Part 4: Dating – The Direct Central European Approach</h3>
                <ul>
                    <li>🍻 <strong>Less Alcohol, More Structure:</strong> While Central Europeans enjoy beer 🍺 and wine 🍷 (Austria is famous for its wine culture, Switzerland for its beer traditions), dating doesn't revolve around drinking as much as in some countries. A coffee date ☕ or a walk (Spaziergang) are common first dates across the region.</li>
                    <li>💸 <strong>Who Pays?:</strong> Across Germany, Austria, and Switzerland, people typically split the bill ("getrennt" or "going Dutch" 🇳🇱). This is standard and expected. Don't insist on paying for everything – it can seem odd or patronising.</li>
                    <li>📅 <strong>Age Gaps:</strong> Large age gaps (10+ years) are viewed with some suspicion 🤔, especially if one person is very young. It's not illegal, but be prepared for raised eyebrows in rural communities from Bavaria to Tyrol to Graubünden.</li>
                    <li>🙅 <strong>Handling Rejection:</strong> If you ask someone out and they say no, accept it gracefully: "Kein Problem, schönen Abend noch" / "Pas de problème" (Switzerland can be multilingual!) 👋 and move on. Pestering someone after rejection is absolutely unacceptable and will damage your reputation. 🚫</li>
                    <li>💔 <strong>Infidelity (Untreue):</strong> Loyalty is highly valued in relationships across Central Europe. Cheating is seen as a serious betrayal of trust.</li>
                    <li>🌙 <strong>The End of the Evening:</strong> Do not assume a date will end in physical intimacy. Central Europeans often take things slowly. A genuine "I had a nice evening" 😊 is the best way to end. If they feel the same, arrange another date. 📱</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Understanding Central European Directness</strong>
                    <p>Germans, Austrians, and Swiss Germans are known for being direct (though Austrians can be slightly more indirect, and Swiss often prefer harmony). If someone is interested, they will often make it clear. If they're not interested, they will also make that clear. Don't interpret directness as rudeness – it's honesty. And don't interpret politeness as romantic interest – they may just be being civil.</p>
                </div>

                <h3>👥 Part 5: Family and Community in Rural Central Europe</h3>
                <p>Rural communities across Central Europe (German Dorfgemeinschaft, Austrian Gemeinde, Swiss Gemeinde) can be close-knit with strong traditional values. 🏘️ Understanding this context is important:</p>

                <ul>
                    <li>👨‍👩‍👧 <strong>Family is Important:</strong> Family ties are valued across the region. Meeting the family is a significant step. Be punctual ⏰, bring a small gift (flowers 💐 or good wine 🍷), and be respectful.</li>
                    <li>🏠 <strong>Neighbours Matter:</strong> In villages from the Black Forest to the Austrian Alps to the Swiss Jura, people know each other. Your behaviour will be observed and discussed. Building a good reputation through reliability and friendliness is essential.</li>
                    <li>🎉 <strong>Clubs and Associations:</strong> Joining local clubs – sports clubs ⚽, music groups 🎵, volunteer fire brigade (Freiwillige Feuerwehr 🇩🇪🇦🇹, Feuerwehr 🇨🇭) 🚒, Schützenverein (shooting club), or Swiss Turnverein (gymnastics club) – is one of the best ways to integrate and meet people.</li>
                    <li>⛪ <strong>Religious Context:</strong> Rural Central Europe can be more religious (Catholic in Bavaria, Austria, and parts of Switzerland; Protestant in northern Germany and some Swiss cantons). Respect local religious traditions and holidays, even if you don't share the faith.</li>
                    <li>🍺 <strong>Stammtisch:</strong> Many villages across Germany and Austria have a regular Stammtisch (regulars' table) at the local pub. In Switzerland, similar traditions exist at the local Beiz. Being invited to join is a sign of acceptance.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Integration Tip</strong>
                    <p>Rural Central Europeans may take time to warm up to newcomers – perhaps even more so in tight-knit Swiss villages or traditional Austrian valleys. Don't be discouraged by initial reserve – it's not personal. Consistent presence, reliability, and respect for local customs will gradually earn trust and friendship. 🤝</p>
                </div>

                <h3>🏠 Part 6: Living Together and Relationships</h3>
                <p>Central European society has evolved significantly regarding relationships: 📈</p>

                <ul>
                    <li>👫 <strong>Cohabitation:</strong> Living together before marriage is completely normal and socially accepted across Germany, Austria, Switzerland, and Liechtenstein, even in rural areas.</li>
                    <li>💍 <strong>Marriage:</strong> Marriage is valued but not seen as the only valid relationship form. Many couples live together long-term without marrying.</li>
                    <li>👨‍👩‍👧 <strong>Children:</strong> Having children outside marriage carries no social stigma in modern Central Europe. The focus is on providing a stable, loving home.</li>
                    <li>⚖️ <strong>Legal Rights:</strong> Unmarried partners have fewer automatic legal rights than married couples across the region. Consider a partnership agreement for important matters.</li>
                </ul>

                <h3>🚫 Part 7: What Will Get You in Trouble</h3>
                <p>Beyond the legal issues covered in Part 1, here are behaviours that will seriously harm your reputation and integration across Central Europe: ⚠️</p>

                <ul>
                    <li>📢 <strong>Being Too Loud or Flashy:</strong> Bragging, showing off wealth, or being excessively loud is viewed negatively everywhere in the region. Whether in Munich, Salzburg, or Zurich, modesty is valued.</li>
                    <li>⏰ <strong>Being Unreliable:</strong> Not keeping appointments, being late repeatedly, or breaking promises will destroy trust. Reliability (German: Zuverlässigkeit, Swiss German: Zueverlässigkeit) is core to Central European culture.</li>
                    <li>🤐 <strong>Gossip and Indiscretion:</strong> Spreading rumours or sharing private information will quickly isolate you. Privacy is sacred across the region.</li>
                    <li>💢 <strong>Aggressive Behaviour:</strong> Raising your voice, making threats, or being physically aggressive – even in minor conflicts – is completely unacceptable.</li>
                    <li>🙅 <strong>Disrespecting Boundaries:</strong> Continuing to pursue someone who has said no, or violating personal space, will be remembered and discussed.</li>
                    <li>🏠 <strong>Ignoring Quiet Hours (Ruhezeiten):</strong> Not respecting quiet hours will make you very unpopular very quickly – this applies in Germany, Austria, and Switzerland (where it's equally strict!).</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>This guide might seem complex, but it boils down to one thing: <strong>Respect (Respekt)</strong>. 🙏 Respect the law ⚖️, respect personal space 📏, respect people's right to say "no" 🛑, and respect local customs. Central Europeans – whether German, Austrian, Swiss, or Liechtensteiner – appreciate honesty, reliability, and modesty. If you make these your foundation, you'll earn trust and acceptance throughout the region! ✨🇩🇪🇦🇹🇨🇭🇱🇮</p>
                </div>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Öffentliches Verhalten – How Central Europeans Actually Live Together 🤝",
            content: `
                <p>Willkommen to the Central European way of doing things. 🇩🇪🇦🇹🇨🇭🇱🇮 Here, society functions because everyone follows the same invisible rulebook. It's not about being uptight – it's about Rücksichtnahme (mutual consideration). When millions of people share these countries, everyone minding their own business while respecting others isn't just nice – it's necessary.</p>
                
                <p>Central Europeans don't do things randomly. There's a system for everything, and the system works because people actually follow it. 📋 Your job is to learn the system. Once you do, life here becomes remarkably smooth. Alles klar? Let's begin. 💪</p>

                <h3>⚖️ Teil 1: Gesetze und Verbote – The Legal Framework</h3>
                <p>All Central European countries are governed by the rule of law. Laws exist for everything, and people expect them to be followed. This isn't oppression; it's the foundation of the social contract. 📜</p>

                <div class="warning">
                    <strong>🚫 Absolut Verboten – Strictly Forbidden</strong>
                    <ul>
                        <li><strong>Nazi-Symbole und Parolen:</strong> The display of swastikas, SS runes, the Hitler salute, or Holocaust denial is a <strong>criminal offence</strong> in Germany 🇩🇪 (§86a StGB) and Austria 🇦🇹 (Verbotsgesetz). Switzerland 🇨🇭 and Liechtenstein 🇱🇮 also have laws against racial discrimination. Punishable by prison. There is no "ironic" exception. ⛔</li>
                        <li><strong>Incitement to Hatred:</strong> Inciting hatred against groups based on nationality, race, religion, or ethnic origin is criminal across Central Europe. This includes online posts. Think before you speak or type. 🚫</li>
                        <li><strong>Insults:</strong> Insulting someone is legally actionable in Germany (Beleidigung §185 StGB) and Austria. In Switzerland, defamation is also punishable. The middle finger or offensive gestures can result in significant fines. 🖕❌</li>
                    </ul>
                </div>

                <div class="important">
                    <strong>💶 Common Fines You'll Actually Face</strong>
                    <ul>
                        <li><strong>Jaywalking on Red:</strong> Crossing the street on red – small fines, but if a child sees you, you've taught them to break rules. Central Europeans will glare or even say something. In Switzerland 🇨🇭, expect particularly disapproving looks. 🚦</li>
                        <li><strong>Noise Violations:</strong> Breaking Ruhezeiten (quiet hours) – fines vary by country and municipality. Your neighbours will call authorities. 🔇</li>
                        <li><strong>Dog Waste:</strong> Not picking up after your dog – fines apply in all countries. Carry bags. Always. 🐕💩</li>
                        <li><strong>Improper Recycling:</strong> Wrong items in the wrong bin – Switzerland 🇨🇭 is particularly strict, with potential fines and even investigation of garbage bags. ♻️</li>
                        <li><strong>Fare Evasion:</strong> Riding without a valid ticket – Germany: minimum €60, Switzerland: CHF 100+, Austria: €100+. Controllers appear out of nowhere. Always have a ticket. 🎫</li>
                    </ul>
                </div>

                <h3>🤫 Teil 2: Die Ruhezeiten – Central Europe's Most Sacred Tradition</h3>
                <p>No aspect of Central European culture is more serious than Ruhezeiten (quiet times). This is not a suggestion – it's practically a religion across Germany, Austria, Switzerland, and Liechtenstein. Understanding this is essential to surviving in the region. 🕐</p>

                <div class="important">
                    <strong>⏰ When You Must Be Quiet</strong>
                    <ul>
                        <li><strong>Night Rest (22:00 - 06:00/07:00):</strong> Complete silence across all countries. No music, no loud conversations, no vacuuming. If neighbours can hear it, it's too loud. 🌙</li>
                        <li><strong>Midday Rest (13:00 - 15:00):</strong> Still observed in many regions, especially Bavaria 🇩🇪, Austria 🇦🇹, and many Swiss cantons 🇨🇭. No lawn mowing, no drilling. 🌞</li>
                        <li><strong>Sunday and Holiday Rest:</strong> <strong>ALL DAY</strong> on Sundays and public holidays across the region. Switzerland 🇨🇭 is particularly strict about Sunday rest. No lawn mowing (often illegal). No drilling. No car washing in some areas. No construction. ☀️</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Why Sundays Are Sacred Across Central Europe</strong>
                    <p>Sunday rest is protected by law in Germany (Article 140 of the Grundgesetz), Austria, and Switzerland (varying by canton). Shops are closed (by law), loud activities are forbidden. In Switzerland, even hanging laundry on Sundays is frowned upon in some areas! Break this rule, and you'll face not just fines, but social isolation in your neighbourhood. Respect it. 🙏</p>
                </div>

                <h4>🏢 Apartment Living:</h4>
                <ul>
                    <li>🥿 <strong>House Shoes:</strong> Wear soft house shoes inside. Walking on hard floors in outdoor shoes creates noise. This is standard practice across Germany, Austria, and Switzerland.</li>
                    <li>🚿 <strong>Bathing:</strong> Many house rules (Hausordnung) prohibit bathing between 22:00 and 06:00. Water through pipes is loud. Check your rules.</li>
                    <li>🎵 <strong>Room Volume:</strong> Music must be at "Zimmerlautstärke" – audible only within your own four walls. Test it: if you can hear it in the hallway, it's too loud.</li>
                    <li>🎸 <strong>Musical Instruments:</strong> Practising is typically limited to 2-3 hours daily, never during Ruhezeiten. Talk to your neighbours and find agreed times.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Central European Compromise</strong>
                    <p>Central Europeans aren't unreasonable. They understand that life makes noise. But they expect you to minimise it, to be aware of it, and to communicate. Planning a party? In Germany or Austria, put a note in letterboxes. In Switzerland, it's even more important to inform neighbours personally beforehand. This gesture alone can prevent complaints. 📝</p>
                </div>

                <h3>🏘️ Teil 3: Die Nachbarschaft – The Art of Central European Neighbouring</h3>
                <p>Neighbourly relations across Central Europe are defined by "distanzierte Höflichkeit" (distant politeness). You greet each other, you help when needed, but you respect boundaries. Nobody drops by unannounced. 🤝</p>

                <h4>👋 Daily Interactions:</h4>
                <ul>
                    <li>🗣️ <strong>Greeting is Mandatory:</strong> Always greet neighbours when you see them. "Guten Tag," "Grüß Gott" 🇦🇹🇨🇭 (Bavaria, Austria, Switzerland), "Hallo" – anything. Not greeting is actively rude. In Swiss 🇨🇭 and Austrian 🇦🇹 villages, greet everyone you pass.</li>
                    <li>🏠 <strong>Introducing Yourself:</strong> When moving in, briefly introduce yourself to immediate neighbours. A short greeting is sufficient. Some bring a small gift (chocolate, wine). In Switzerland, this gesture is particularly appreciated.</li>
                    <li>🚪 <strong>Never Unannounced:</strong> Central Europeans do not visit each other without prior arrangement. Even good friends call before coming over. Showing up unannounced puts people in an uncomfortable position.</li>
                    <li>📦 <strong>Accepting Parcels:</strong> Accepting parcels for absent neighbours is expected and appreciated. It builds goodwill.</li>
                </ul>

                <h4>🧹 Cleaning Duties:</h4>
                <p>In southern Germany and Switzerland especially, "Kehrwoche" (Germany) or similar rotating cleaning schedules exist where residents clean common areas. 🗓️</p>
                <ul>
                    <li>📋 <strong>Find the schedule:</strong> Check the board in the stairwell or ask building management.</li>
                    <li>✅ <strong>Do it properly:</strong> Sweep stairs, mop floors, clean railings. In Switzerland, standards are particularly high. Half-hearted effort will be noticed.</li>
                    <li>❄️ <strong>Winter Service:</strong> You're responsible for clearing snow and ice from the sidewalk in front of your property. Times vary: Germany and Austria typically by 7 AM on workdays; Switzerland has similar rules. Slip injuries can make you liable.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ House Rules (Hausordnung)</strong>
                    <p>Your Hausordnung is a legal document across Central Europe. It covers everything: quiet times, cleaning duties, pet rules, grill restrictions, laundry schedules. Read it completely when you move in. In Switzerland 🇨🇭, house rules are often particularly detailed. Repeated violations can lead to formal warnings and eventually eviction. 📋</p>
                </div>

                <h4>🔥 Grilling – A Common Topic:</h4>
                <ul>
                    <li>⚖️ <strong>Know local rules:</strong> Restrictions vary by region and building. Some limit frequency. Check your Hausordnung.</li>
                    <li>💨 <strong>Smoke direction:</strong> If smoke drifts into a neighbour's window, they have grounds for complaint. Consider an electric or gas grill.</li>
                    <li>🗣️ <strong>Inform neighbours:</strong> A quick word gives them the chance to close windows.</li>
                </ul>

                <h3>🚇 Teil 4: Im öffentlichen Raum – Public Spaces Done Right</h3>
                <p>Central Europeans have specific expectations about behaviour in shared spaces. The guiding principle is "Rücksichtnahme" – consideration for others. Follow these norms across Germany, Austria, and Switzerland. 🚶</p>

                <h4>🚌 Public Transport:</h4>
                <ul>
                    <li>🎫 <strong>Always Have a Ticket:</strong> Buy it. Validate it (where required). Have it ready. Plainclothes controllers check randomly across all countries. No excuses accepted.</li>
                    <li>🚪 <strong>Let People Exit First:</strong> This is fundamental across Central Europe. Stand to the side. Let everyone exit. Then board. Trying to push in early will earn verbal corrections.</li>
                    <li>🤫 <strong>Stay Quiet:</strong> Speak quietly. Phone conversations should be brief and low-voiced. In Switzerland 🇨🇭, this is taken particularly seriously.</li>
                    <li>🎧 <strong>Headphones:</strong> Audio without headphones is absolutely unacceptable throughout Central Europe.</li>
                    <li>💺 <strong>Bags Off Seats:</strong> Never put bags on seats when others are standing.</li>
                    <li>👴 <strong>Offer Your Seat:</strong> Offer your seat to elderly, pregnant, or disabled passengers.</li>
                </ul>

                <h4>🚶 Pedestrian Rules:</h4>
                <ul>
                    <li>🚴 <strong>Bike Paths:</strong> Excellent cycling infrastructure exists in Germany, Austria, and Switzerland. Stay off bike paths – cyclists will use their bells. 🔔</li>
                    <li>🚦 <strong>Wait for Green:</strong> Wait for the green light across all countries. Even if the street is empty. Especially if children are nearby. The Swiss 🇨🇭 are particularly observant of this rule.</li>
                    <li>📱 <strong>Don't Block:</strong> Walking slowly while staring at your phone, blocking the sidewalk, is antisocial everywhere.</li>
                    <li>➡️ <strong>Keep Right:</strong> Keep to the right on sidewalks and in corridors, same as traffic.</li>
                </ul>

                <h4>⬆️ Escalators and Elevators:</h4>
                <ul>
                    <li>➡️ <strong>Stand Right, Walk Left:</strong> Stand on the right. Walk on the left. This is universal across Central Europe.</li>
                    <li>🛗 <strong>Elevators:</strong> Let people exit first. Don't crowd in.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Taking Numbers</strong>
                    <p>At bakeries, butchers, delis, and service counters across Germany, Austria, and Switzerland, you often take a number and wait. Look for the ticket machine near the entrance. Trying to order without following the system will result in correction. 🎫</p>
                </div>

                <h3>🛒 Teil 5: Shopping and Dining</h3>

                <h4>🏪 In Shops:</h4>
                <ul>
                    <li>👋 <strong>Greet:</strong> "Guten Tag" / "Grüß Gott" 🇦🇹🇨🇭 when entering small shops. "Auf Wiedersehen" when leaving. Ignoring staff is rude.</li>
                    <li>🛒 <strong>Shopping Carts:</strong> Return your cart to the designated area. The deposit system ensures most do.</li>
                    <li>💶 <strong>Cash:</strong> Germany 🇩🇪 remains particularly cash-oriented. Switzerland 🇨🇭 and Austria 🇦🇹 are slightly more card-friendly, but always carry cash.</li>
                    <li>🛍️ <strong>Bring Your Own Bags:</strong> Bring reusable bags across all countries. Plastic bags cost money.</li>
                    <li>⏰ <strong>Opening Hours:</strong> Shops close early by international standards. Germany: often 20:00 weekdays, earlier Saturdays. Switzerland: often 18:30-19:00. Sundays: almost everything closed across the region.</li>
                    <li>📦 <strong>Checkout Speed:</strong> Pack your items quickly at checkout. Don't hold up the line.</li>
                </ul>

                <h4>🍽️ In Restaurants:</h4>
                <ul>
                    <li>🪑 <strong>Table Sharing:</strong> In busy traditional restaurants across the region, sharing tables with strangers is normal. "Ist hier noch frei?" is the standard question.</li>
                    <li>🍻 <strong>Ordering:</strong> Make eye contact with the server, raise your hand slightly. Never snap fingers or yell.</li>
                    <li>💧 <strong>Water Costs:</strong> Tap water isn't typically free across Central Europe. Order mineral water.</li>
                    <li>💰 <strong>Tipping:</strong> 5-10% is standard across the region. Round up on smaller bills. In Switzerland 🇨🇭, service is often included but small tips are appreciated.</li>
                    <li>💳 <strong>Paying:</strong> Ask to pay at the table. Splitting bills individually is normal and expected when requested.</li>
                </ul>

                <h4>🍺 Regional Traditions:</h4>
                <ul>
                    <li>🧺 <strong>Biergarten 🇩🇪:</strong> In traditional Bavarian beer gardens, you can bring your own food to tables without tablecloths. Only drinks must be purchased.</li>
                    <li>🍷 <strong>Heurigen 🇦🇹:</strong> In Austrian wine taverns (Heurigen), you enjoy local wines with simple food in a relaxed atmosphere.</li>
                    <li>🍻 <strong>Beiz 🇨🇭:</strong> In Swiss Beiz (local pubs), regional specialties and local beers are served in a traditional setting.</li>
                    <li>🍻 <strong>Toasting:</strong> When toasting, look each person in the eye across all countries. "Prost!" (beer), "Zum Wohl!" (wine). 👀</li>
                    <li>🪑 <strong>Stammtisch:</strong> Tables marked "Stammtisch" are reserved for regulars. Ask before sitting there.</li>
                </ul>

                <h3>🏛️ Teil 6: Behörden – Navigating Central European Bureaucracy</h3>
                <p>Central European bureaucracy can be challenging. Germany 🇩🇪 is legendary for paperwork, Austria 🇦🇹 follows closely, and even efficient Switzerland 🇨🇭 has its share. Here's how to manage: 📋</p>

                <ul>
                    <li>📅 <strong>Appointments Are Everything:</strong> Almost everything requires an appointment across all countries. Book online or by phone. Walking in usually means being turned away.</li>
                    <li>📄 <strong>Bring Everything:</strong> Bring originals AND copies of everything: ID, passport, registration certificate, proof of income, photos, completed forms. All these countries love documentation.</li>
                    <li>⏰ <strong>Be Punctual:</strong> Being late means losing your appointment. Arrive 5-10 minutes early.</li>
                    <li>🗣️ <strong>Language:</strong> Many officials may not speak English. In Germany and Austria, German is essential. In Switzerland, know whether your canton is German, French, Italian, or Romansh speaking!</li>
                    <li>😤 <strong>Patience:</strong> The process takes time. Stay calm and polite.</li>
                    <li>📝 <strong>Get It In Writing:</strong> If something is promised verbally, request written confirmation.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Registration Is Crucial</strong>
                    <p>Register your residence as soon as you move: 🇩🇪 Germany: within two weeks at the Einwohnermeldeamt. 🇦🇹 Austria: within 3 days at the Meldeamt. 🇨🇭 Switzerland: within 14 days at the Einwohnerkontrolle. This registration is required for almost everything else: bank accounts, insurance, work contracts. Without it, you're invisible in the system. 👻</p>
                </div>

                <h3>🤝 Teil 7: Vereine und Integration – The Heart of Community Life</h3>
                <p>Germany has over 600,000 registered Vereine (clubs/associations), and club culture is similarly strong in Austria and Switzerland. This is the backbone of Central European social life. Want to integrate? Join a Verein or local club. 🏆</p>

                <h4>🏅 What Clubs Mean:</h4>
                <ul>
                    <li>⚽ <strong>There's a Club for Everything:</strong> Sports, music, gardening, carnival, volunteer fire brigade, shooting clubs (Schützenverein 🇩🇪🇦🇹, Schützengesellschaft 🇨🇭), yodeling clubs 🇨🇭🇦🇹, and more. Pick something that interests you.</li>
                    <li>🤝 <strong>Active Participation:</strong> Don't just pay dues and disappear. Show up regularly. Volunteer for events. Help set up, clean up. People notice who contributes.</li>
                    <li>⏳ <strong>It Takes Time:</strong> Acceptance takes time across Central Europe. You might feel like an outsider for months. Keep showing up. Reliability is everything.</li>
                    <li>🚒 <strong>Volunteer Fire Brigade:</strong> In rural areas across Germany, Austria, and Switzerland, joining the volunteer fire brigade is one of the fastest paths to social integration.</li>
                </ul>

                <h4>🎪 Local Festivals and Traditions:</h4>
                <ul>
                    <li>🎉 <strong>Village and Town Festivals:</strong> Attend local Dorffeste 🇩🇪, Kirtage 🇦🇹, or Chilbi 🇨🇭. Participation shows you want to belong.</li>
                    <li>🎄 <strong>Christmas Markets:</strong> Visit local Weihnachtsmärkte 🇩🇪🇦🇹 or Wienachtsmärkte 🇨🇭. Drink Glühwein. It's quintessential winter culture.</li>
                    <li>🎭 <strong>Carnival:</strong> In the Rhineland 🇩🇪, it's Karneval. In Bavaria 🇩🇪 and Austria 🇦🇹, it's Fasching. In Switzerland 🇨🇭, the Basler Fasnacht is famous. Learn local traditions. Participate.</li>
                    <li>🍺 <strong>Volksfeste:</strong> From Oktoberfest 🇩🇪 to Austrian Weinfeste 🇦🇹 to Swiss Alpabzüge 🇨🇭 (cattle drives), these celebrations are community bonding experiences.</li>
                </ul>

                <div class="important">
                    <strong>🎯 Ehrenamt – Volunteering</strong>
                    <p>Central Europe runs on volunteer work. Millions volunteer regularly across Germany, Austria, and Switzerland. It's a social expectation. Volunteer at local events, support organizations, environmental groups, youth sports. It shows you want to contribute to society. This matters for integration and is genuinely noticed. 🙌</p>
                </div>

                <h3>♻️ Teil 8: Umweltbewusstsein – Environmental Responsibility</h3>
                <p>Environmental consciousness is deeply ingrained across Central Europe. This isn't political – it's practical and expected. Switzerland 🇨🇭 is particularly strict. 🌱</p>

                <h4>🗑️ Recycling:</h4>
                <ul>
                    <li>⚫ <strong>General Waste:</strong> Non-recyclable waste (Restmüll 🇩🇪🇦🇹, Kehricht 🇨🇭).</li>
                    <li>🟡 <strong>Packaging:</strong> Germany 🇩🇪 has the Gelber Sack/Gelbe Tonne system. In Switzerland 🇨🇭, you often pay for official garbage bags and sort recyclables separately.</li>
                    <li>🔵 <strong>Paper:</strong> Paper and cardboard go in designated bins or collection points.</li>
                    <li>🟤 <strong>Organic Waste:</strong> Food scraps, garden waste – composting is common, especially in Switzerland and rural areas.</li>
                    <li>🍾 <strong>Glass:</strong> Sort by colour at collection points. Don't dispose of glass during quiet hours!</li>
                    <li>🔋 <strong>Special Waste:</strong> Batteries, electronics, chemicals – take to designated collection points.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Deposit Systems</strong>
                    <p>🇩🇪 Germany: Extensive Pfand system. €0.25 for single-use bottles/cans, €0.08-€0.15 for reusable glass. Return to supermarket machines. 🇦🇹 Austria: Similar deposit system being expanded. 🇨🇭 Switzerland: No universal deposit, but excellent voluntary recycling rates. Don't throw away Pfand bottles – it's literally throwing away money! 🛒</p>
                </div>

                <h4>🌳 General Environmental Behaviour:</h4>
                <ul>
                    <li>💧 <strong>Water Conservation:</strong> Central Europeans don't waste water. Be mindful of usage.</li>
                    <li>💡 <strong>Energy:</strong> Turn off lights when leaving rooms. Heat only rooms you use.</li>
                    <li>🌲 <strong>In Nature:</strong> Stay on marked paths. Don't pick flowers in protected areas. Keep dogs on leads during wildlife breeding seasons.</li>
                    <li>🐕 <strong>Dog Waste:</strong> Clean up after your dog. Always. Everywhere. Non-negotiable.</li>
                </ul>

                <h3>🚗 Teil 9: Driving Culture</h3>
                <p>Central Europeans take driving seriously. Rules are strict across all countries, and following them precisely is expected. 🚗</p>

                <ul>
                    <li>🛣️ <strong>Highway Etiquette:</strong> Keep right. The left lane is for passing only. Germany's 🇩🇪 Autobahn has sections with no speed limit, but most of Austria's 🇦🇹 motorways and all of Switzerland's 🇨🇭 have speed limits (120-130 km/h). Finish overtaking and return right.</li>
                    <li>⚡ <strong>Headlight Flashing:</strong> On German Autobahns, flashing headlights means "I'm going fast, please move right." In Switzerland, aggressive flashing can result in fines.</li>
                    <li>🚔 <strong>Speed Cameras:</strong> Speed cameras are everywhere, especially in Switzerland 🇨🇭 where fines are extremely high. Austria 🇦🇹 also has strict enforcement. In towns: 50 km/h unless marked otherwise.</li>
                    <li>➡️ <strong>Right Before Left:</strong> At unmarked intersections, traffic from the right has priority across all countries.</li>
                    <li>❄️ <strong>Winter Tyres:</strong> Required when conditions demand in Germany and Austria. Switzerland requires appropriate tyres and can fine drivers with summer tyres in winter conditions.</li>
                    <li>🖕 <strong>No Insults:</strong> Road rage gestures are punishable, especially in Germany where fines are substantial.</li>
                    <li>🚗 <strong>Vehicle Inspections:</strong> Regular inspections required: TÜV/HU (Germany), §57a "Pickerl" (Austria), MFK (Switzerland).</li>
                    <li>🚑 <strong>Emergency Corridor:</strong> Form an emergency corridor when traffic stops: left lane moves left, all other lanes move right. Required in Germany and increasingly expected elsewhere.</li>
                    <li>🛣️ <strong>Highway Tolls:</strong> Austria requires a Vignette (sticker). Switzerland requires an annual Vignette. Germany is toll-free for cars on most roads. Check current prices before travelling.</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Public conduct in Central Europe rests on three pillars: <strong>Ordnung</strong> (order – follow the rules), <strong>Ruhe</strong> (quiet – respect others' peace), and <strong>Rücksicht</strong> (consideration – think of how your actions affect others). 📋🤫🤝</p>
                    <p>Central Europeans aren't cold or unfriendly – they just express community differently. They show respect through following systems, maintaining cleanliness, being punctual, and not imposing on others. Do the same across Germany, Austria, Switzerland, or Liechtenstein, and you'll earn genuine respect. Welcome to Central Europe! 🇩🇪🇦🇹🇨🇭🇱🇮✅</p>
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Kommunikation & Denkweise – How Central Europeans Really Communicate 🧠",
            content: `
                <p>Let's talk about something that trips up almost every newcomer: how Central Europeans actually communicate. 🗣️ It's not just about learning German – it's about understanding how people across Germany 🇩🇪, Austria 🇦🇹, Switzerland 🇨🇭, and Liechtenstein 🇱🇮 <em>use</em> language. The region is known for directness, but there's more nuance than most people realise – and regional differences too! 🎯</p>
                
                <p>This module will help you decode what Central Europeans really mean, how to express yourself without causing offence 🚫, and how to develop the mindset that'll help you thrive here. Los geht's! 💪</p>

                <h3>🎭 Teil 1: Central European Directness – What It Actually Means</h3>
                <p>Germans, Austrians, and Swiss Germans have a reputation for being blunt, and it's partly deserved – but with important variations. 🇩🇪🇦🇹🇨🇭 German directness is strongest. Austrian communication can be slightly softer. Swiss Germans often value harmony and may be more diplomatic. Here's how to understand it:</p>

                <div class="important">
                    <strong>🔍 Understanding Regional Directness</strong>
                    <ul>
                        <li><strong>"Das ist nicht gut" / "Das isch nöd guet" 🇨🇭</strong> (That's not good) = It's genuinely not good. They're being honest. 😐</li>
                        <li><strong>"Nein" / "Nei" 🇨🇭</strong> = No. Full stop. Central Europeans don't soften refusals with "maybe" when they mean no. 🛑</li>
                        <li><strong>"Das stimmt nicht"</strong> (That's not correct) = They're correcting you because accuracy matters, not attacking you. 📊</li>
                        <li><strong>"Warum?" / "Warum?" 🇦🇹 / "Wieso?" 🇨🇭</strong> (Why?) = A genuine question, not a challenge. 🤔</li>
                        <li><strong>"Das ist interessant"</strong> (That's interesting) = Usually means genuine interest in German-speaking countries (unlike British English!). ✅</li>
                        <li><strong>"Passt schon" / "Passt scho" 🇦🇹</strong> (It's fine) = It's acceptable, nothing more. Don't expect enthusiasm. 👍</li>
                        <li><strong>"Geht so" / "Geht scho" 🇦🇹</strong> (So-so) = It's mediocre. They have reservations. 😐</li>
                        <li><strong>Austrian Indirectness:</strong> Austrians can be more diplomatic than Germans. "Na ja..." or "Schau ma mal..." may mean they disagree but are being polite about it. 🇦🇹</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 The Golden Rule</strong>
                    <p>Across Central Europe, words generally mean what they say. 📝 There's less reading between the lines than in many cultures. But note: Germans are the most direct, Swiss often prioritise harmony and consensus, and Austrians fall somewhere in between with their famous "Schmäh" (gentle humour and charm). 🎯</p>
                </div>

                <h3>🤝 Teil 2: Höflichkeitsformen – Being Polite Across Central Europe 🙏</h3>
                <p>Politeness across Central Europe works differently than in English-speaking cultures. It's less about constant pleasantries and more about showing respect through correct behaviour. ⚙️</p>

                <h4>👔 Sie vs. Du (Formal vs. Informal "You") – The Foundation:</h4>
                <ul>
                    <li>🎩 <strong>Sie (formal "you"):</strong> Use with strangers, elders, professionals, officials across Germany, Austria, and (German-speaking) Switzerland. Always default to Sie.</li>
                    <li>👋 <strong>Du (informal "you"):</strong> Only use when explicitly offered! Wait for the invitation to use Du. In Switzerland 🇨🇭, the switch to Du may happen faster in some contexts.</li>
                    <li>⚠️ <strong>The Du offer:</strong> The older or higher-ranking person offers the Du. Never assume. Using Du prematurely is a real social error.</li>
                    <li>💼 <strong>At work:</strong> Many modern companies use "Du-Kultur." Others maintain Sie. Germany is more formal, Switzerland's startups often use Du, Austria varies. Ask or observe.</li>
                </ul>

                <h4>📋 Please and Thank You:</h4>
                <ul>
                    <li>🙏 <strong>Bitte:</strong> Use it, but Central Europeans use it less frequently than English speakers say "please." Still essential for requests.</li>
                    <li>🙌 <strong>Danke / Merci 🇨🇭:</strong> Important to say. In Switzerland, "Merci" (from French) is commonly used even in German-speaking areas.</li>
                    <li>🍽️ <strong>At meals:</strong> "Guten Appetit!" / "En Guete!" 🇨🇭 before eating. Respond "Danke, gleichfalls" (Thanks, likewise).</li>
                    <li>🍻 <strong>When toasting:</strong> "Prost!" for beer, "Zum Wohl!" for wine. Always make eye contact. 👀</li>
                </ul>

                <h4>👋 The Art of Greeting:</h4>
                <ul>
                    <li>🌅 <strong>Time-appropriate greetings:</strong> "Guten Morgen" (morning), "Guten Tag" (daytime), "Guten Abend" (evening).</li>
                    <li>🏔️ <strong>Regional variations:</strong> 🇩🇪 "Grüß Gott" (Bavaria), "Moin" (Northern Germany). 🇦🇹 "Grüß Gott," "Servus" (informal). 🇨🇭 "Grüezi" (formal), "Grüessech" (Bernese), "Hoi" (informal). Learn what's local!</li>
                    <li>🤝 <strong>Handshakes:</strong> Firm, brief, with eye contact. Common at every formal meeting across the region.</li>
                    <li>🚶 <strong>In the community:</strong> In villages across all countries, greet everyone you pass. Not greeting is rude.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Don't Skip the Greeting!</strong>
                    <p>Walking into a shop, doctor's waiting room, or elevator and greeting those present is standard across Central Europe. 🗣️ In Austria 🇦🇹, "Grüß Gott" is ubiquitous. In Switzerland 🇨🇭, "Grüezi" is essential. Entering silently and ignoring people is seen as unfriendly everywhere. 🏪</p>
                </div>

                <h3>💬 Teil 3: Smalltalk – The Central European Approach ☕</h3>
                <p>Central Europeans have a complicated relationship with small talk. They do engage in it – just differently than many cultures. 🤔</p>

                <h4>🌤️ Weather – Less Exciting Here:</h4>
                <ul>
                    <li>⛅ Weather discussions are usually practical: "Es soll regnen" (It's supposed to rain) = bring an umbrella. 🌂</li>
                    <li>📝 Weather comments are observations, not extended conversation openers.</li>
                    <li>☀️ Good weather topics: extreme weather, unusual weather, weather affecting outdoor plans. 🌡️</li>
                </ul>

                <h4>✅ Good Smalltalk Topics:</h4>
                <ul>
                    <li>⚽ <strong>Football:</strong> Works across all countries! Know your local teams – Bayern Munich 🇩🇪, Austria Wien 🇦🇹, FC Basel 🇨🇭.</li>
                    <li>⛷️ <strong>Skiing and Mountains:</strong> Particularly relevant in Austria 🇦🇹, Switzerland 🇨🇭, and southern Germany. A shared passion!</li>
                    <li>✈️ <strong>Holidays:</strong> Central Europeans love discussing travel destinations.</li>
                    <li>🚗 <strong>Cars:</strong> Germans especially are proud of their automotive industry.</li>
                    <li>🏡 <strong>Local events:</strong> Town festivals, local news, community happenings.</li>
                    <li>🍺 <strong>Regional identity:</strong> Food, traditions, dialect. People are often regionally proud – Bavarians, Tyroleans, Swiss cantons all have distinct identities.</li>
                </ul>

                <h4>❌ Topics to Avoid (Until You Know Someone Well):</h4>
                <ul>
                    <li>💶 <strong>Income and money:</strong> Very private across all countries. Never ask what someone earns. 🚫</li>
                    <li>📜 <strong>Nazi history:</strong> Taken extremely seriously. Don't make jokes. Don't make comparisons. Don't bring it up casually. Austria 🇦🇹 has its own complex relationship with this history.</li>
                    <li>🗳️ <strong>Politics:</strong> Can get intense. Switzerland's 🇨🇭 direct democracy makes politics a more common topic, but still tread carefully.</li>
                    <li>🛐 <strong>Religion:</strong> Generally private. Austria tends to be more Catholic, Switzerland mixed, Germany varies by region.</li>
                    <li>🏔️ <strong>Regional Rivalries:</strong> Don't compare countries unfavourably. Don't call Swiss people "German." Don't confuse Bavarians with Prussians.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Reading the Room</strong>
                    <p>Central Europeans separate Privatleben (private life) from public life. 🔒 Colleagues might chat about work but not share personal details. This isn't coldness – it's a valued boundary. If someone gives short answers about their weekend, don't push. Respect their privacy. 🤐</p>
                </div>

                <h3>🧠 Teil 4: Die Denkweise – Mindsets That Matter 🎯</h3>
                <p>Beyond words, <em>how you think</em> about situations matters across Central Europe. These attitudes will help you fit in: 🔄</p>

                <h4>📋 Ordnung muss sein (There must be order):</h4>
                <ul>
                    <li>✅ Central Europeans value structure, systems, and doing things correctly. This is strongest in Germany and Switzerland.</li>
                    <li>📝 Follow processes even if they seem bureaucratic. There's usually a reason.</li>
                    <li>📊 Be organised: have documents ready, be prepared for meetings, follow proper channels.</li>
                    <li>⚙️ Respect that "how" something is done matters as much as "what" is achieved.</li>
                </ul>

                <h4>⏰ Pünktlichkeit (Punctuality):</h4>
                <ul>
                    <li>🕐 On time means 5 minutes early across all countries. "On time" is already slightly late.</li>
                    <li>⚠️ Being late without notice is disrespectful. Always call ahead if delayed.</li>
                    <li>📅 Appointments are sacred across the region. Spontaneity is less valued than reliability.</li>
                    <li>💼 For business: 15 minutes early. For social occasions: on time (not early!).</li>
                    <li>🇨🇭 <strong>Swiss precision:</strong> Switzerland takes punctuality to an art form. Trains are famously on time, and so should you be!</li>
                </ul>

                <h4>🔧 Gründlichkeit (Thoroughness):</h4>
                <ul>
                    <li>📐 "Ganz oder gar nicht" (All or nothing) applies across Central Europe.</li>
                    <li>🎯 Quality over speed. Rushing is worse than taking time to do it right.</li>
                    <li>📖 Read instructions, follow procedures, do things completely.</li>
                    <li>🔍 Attention to detail is noticed and respected.</li>
                    <li>🇨🇭 <strong>Swiss quality:</strong> Swiss precision and quality standards are legendary worldwide.</li>
                </ul>

                <h4>🤫 Bescheidenheit (Modesty):</h4>
                <ul>
                    <li>🚫 Bragging is frowned upon across all countries. Let your work speak for itself.</li>
                    <li>📉 Understatement is preferred to exaggeration everywhere in the region.</li>
                    <li>💰 Showing off wealth is considered tasteless. Quality over flashiness.</li>
                    <li>🏆 Share credit. "We" over "I."</li>
                </ul>

                <div class="important">
                    <strong>🎭 Understanding Regional Humour</strong>
                    <p>Central Europeans do have humour – it varies by region! 😄 German humour tends to be dry and clever. Austrian "Schmäh" is playful, ironic, and charming. Swiss humour is often self-deprecating and subtle. Don't expect constant joking in professional settings anywhere, but among friends, all nationalities can be very funny. 🎪</p>
                </div>

                <h3>🚫 Teil 5: Kommunikationsfehler – Mistakes to Avoid 🙅</h3>
                <p>Here are common communication errors across Central Europe: ⚠️</p>

                <ul>
                    <li>🔊 <strong>Being Too Loud:</strong> Central Europeans speak relatively quietly, especially on public transport. Switzerland 🇨🇭 is particularly sensitive to noise.</li>
                    <li>😁 <strong>Over-enthusiastic Friendliness:</strong> Excessive smiling or over-the-top energy can seem fake or untrustworthy across the region.</li>
                    <li>❓ <strong>Excessive Small Talk:</strong> Getting to the point is often preferred over lengthy warm-ups.</li>
                    <li>🤥 <strong>Vagueness:</strong> Be clear about what you mean. Hedging creates confusion.</li>
                    <li>🎭 <strong>Empty Promises:</strong> Don't say "We should meet up" unless you mean it. Central Europeans may actually follow up.</li>
                    <li>😢 <strong>Oversharing:</strong> Discussing personal problems with casual acquaintances is uncomfortable for everyone.</li>
                    <li>🙈 <strong>Criticising the Country:</strong> Initially, even if locals complain, newcomers shouldn't. Earn the right to criticise first. This applies across all countries!</li>
                    <li>🏔️ <strong>National Confusion:</strong> Don't call the Swiss "German," or confuse Austrians with Germans. Each country has distinct identity and pride.</li>
                </ul>

                <h3>🏢 Teil 6: Kommunikation in verschiedenen Kontexten – Context Matters 📍</h3>

                <h4>💼 At Work:</h4>
                <ul>
                    <li>✉️ <strong>Email Style:</strong> Begin with "Sehr geehrte/r Frau/Herr [Name]" (formal) or "Liebe/r [Name]" (if on Du terms). End with "Mit freundlichen Grüßen" (formal) or "Viele Grüße" (friendly).</li>
                    <li>📋 <strong>Meetings:</strong> Be prepared, be punctual, stick to the agenda. Efficiency is valued across all Central European countries.</li>
                    <li>🗣️ <strong>Feedback:</strong> Feedback is direct across the region. "This needs improvement" isn't harsh – it's helpful honesty.</li>
                    <li>🤝 <strong>Hierarchy:</strong> Respect titles (Herr Doktor, Frau Professor). Austria 🇦🇹 is particularly fond of titles. Switzerland 🇨🇭 is somewhat more egalitarian.</li>
                </ul>

                <h4>🏛️ Dealing with Officials:</h4>
                <ul>
                    <li>📄 <strong>Be prepared:</strong> Have all documents ready, filled in correctly, with copies across all countries.</li>
                    <li>⏰ <strong>Keep appointments:</strong> Arriving late may mean rebooking everywhere.</li>
                    <li>🗣️ <strong>Be polite but direct:</strong> State clearly what you need.</li>
                    <li>🙏 <strong>Say thank you:</strong> "Danke für Ihre Hilfe" / "Merci vielmal" 🇨🇭 at the end goes a long way.</li>
                </ul>

                <h4>🛒 In Shops and Services:</h4>
                <ul>
                    <li>👋 <strong>Greet first:</strong> Essential across all countries.</li>
                    <li>🙋 <strong>Getting help:</strong> "Entschuldigung, können Sie mir helfen?" – wait politely.</li>
                    <li>💳 <strong>At checkout:</strong> Have payment ready. Efficiency is valued.</li>
                    <li>🙏 <strong>Saying goodbye:</strong> "Auf Wiedersehen" / "Uf Wiederluege" 🇨🇭 – silent exits seem rude.</li>
                </ul>

                <h4>🤝 Among Friends:</h4>
                <ul>
                    <li>👥 <strong>Friendship takes time:</strong> The distinction between acquaintances and true friends exists across Central Europe. Real friendship is earned.</li>
                    <li>🍺 <strong>Once friends, always friends:</strong> Central European friendships run deep. Loyalty and reliability are key.</li>
                    <li>📱 <strong>Communication:</strong> Don't expect constant messaging. But friends will be there when it matters.</li>
                    <li>🎯 <strong>Honesty:</strong> Friends will tell you the truth across all countries. This is care, not criticism.</li>
                </ul>

                <div class="tip">
                    <strong>🌟 Vereine – The Secret to Central European Social Life</strong>
                    <p>Clubs and associations are central to community life across Germany, Austria, and Switzerland. 🏆 Sports clubs, music groups, volunteer organisations – these are where people socialise and make friends. Join one that interests you, show up regularly, and participate actively. This is how you become part of the community throughout Central Europe. 🤝</p>
                </div>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Central European communication is about <strong>clarity</strong> 📝, <strong>honesty</strong> 🎯, and <strong>respect through correct behaviour</strong> 🤝. Say what you mean, keep your promises, be punctual, and respect boundaries. Regional variations exist – Germans most direct, Swiss valuing harmony, Austrians with their charm – but the fundamentals are shared.</p>
                    <p>Master regional greetings, respect the Sie/Du distinction, be punctual, and don't overshare. You'll find Central European communication refreshingly clear! Willkommen in Zentraleuropa! 🇩🇪🇦🇹🇨🇭🇱🇮✨</p>
                </div>
            `
        },
        economicIntegration: {
            title: "💼 Module 4: Wirtschaftliche Integration – A Practical Guide to Work, Money, and Economic Success in Central Europe 💰",
            content: `
                <p>Willkommen to arguably the most important module: work and money. 💰 In Central Europe – Germany 🇩🇪, Austria 🇦🇹, Switzerland 🇨🇭, and Liechtenstein 🇱🇮 – economic self-sufficiency isn't just about survival, it's about social standing, self-respect, and integration. These countries built world-class economies on the foundation of hard work, precision, and reliability. 🏗️</p>
                
                <p>This isn't a motivational speech – it's a practical guide to navigating Central European work culture, understanding what's truly expected of you, and building economic stability. Whether you're in Munich, Vienna, Zurich, or Vaduz, the principles are similar, with fascinating regional variations. Let's dive in! 💪</p>

                <h3>🔧 Teil 1: Die Arbeitsethik – The Central European Work Ethic</h3>
                <p>Central Europeans have a distinctive relationship with work. It's not just a means to an end – quality work is a source of pride. "Made in Germany," "Swiss Made," and Austria's craftsmanship reputation weren't built on shortcuts. 🎯</p>

                <div class="important">
                    <strong>💼 Core Work Values Across Central Europe</strong>
                    <ul>
                        <li><strong>Zuverlässigkeit (Reliability):</strong> This is THE foundation. Showing up on time, every time, and delivering what you promised. 🕐 In Switzerland, this is taken to an almost legendary level.</li>
                        <li><strong>Gründlichkeit (Thoroughness):</strong> Doing things right, not just quickly. Cutting corners is career suicide across the region. 📏</li>
                        <li><strong>Fachkompetenz (Professional Competence):</strong> Deep knowledge and skill in your field are highly respected. Germany's dual education system (Ausbildung) reflects this. 🎓</li>
                        <li><strong>Ordnung (Order/Organisation):</strong> Systems, processes, proper documentation. Germany is famous for this, but it applies across the region. 📋</li>
                        <li><strong>Pünktlichkeit (Punctuality):</strong> This isn't negotiable. 5 minutes early is on time. On time is late. Late without notice is unforgivable. ⏰</li>
                    </ul>
                </div>

                <h4>⚙️ What "Hard Work" Means in Central Europe:</h4>
                <ul>
                    <li>🎯 <strong>Quality over Speed:</strong> Better to do it right the first time than rush and fix mistakes. This is gospel in Swiss manufacturing.</li>
                    <li>📝 <strong>Documentation:</strong> Write things down. Track your work. Keep records. Germans especially appreciate thorough documentation.</li>
                    <li>🤝 <strong>Professionalism:</strong> Clear separation between work and private life. Keep personal matters private. This is stricter in Germany and Switzerland than Austria.</li>
                    <li>🎓 <strong>Continuous Learning:</strong> Professional development is valued. Weiterbildung (further education) is common and often supported by employers.</li>
                    <li>🔇 <strong>Quiet Competence:</strong> Let your work speak. Bragging about your achievements is frowned upon, particularly in Switzerland and Germany. Austrians may be slightly more expressive.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Unspoken Rule</strong>
                    <p>Central Europeans respect "Fachleute" (professionals) – people who know their craft inside out. 🔨 Whether you're a master craftsman (Meister), an engineer, or a shop assistant, doing your job with expertise and reliability earns more respect than any title. This is deeply embedded across the region. 🌟</p>
                </div>

                <h3>🏭 Teil 2: Job Market Realities Across Central Europe</h3>
                <p>The economic landscape varies significantly across the region. Let's break it down by country and sector: 🗺️</p>

                <h4>🇩🇪 Germany – Europe's Economic Powerhouse:</h4>
                <ul>
                    <li>🏭 <strong>Manufacturing & Engineering:</strong> Automotive (VW, BMW, Mercedes), machinery, chemicals. Strong demand for skilled workers.</li>
                    <li>🏥 <strong>Healthcare & Social Care:</strong> Massive demand for nurses, care workers (Pflegekräfte), medical technicians. Good entry point for many.</li>
                    <li>💻 <strong>IT & Technology:</strong> Berlin's startup scene, but also strong demand throughout the country for software developers, data analysts.</li>
                    <li>🏗️ <strong>Skilled Trades (Handwerk):</strong> Electricians, plumbers, carpenters – constant demand, well-paid with proper qualifications (Meister system).</li>
                    <li>🍽️ <strong>Hospitality & Gastronomy:</strong> Restaurants, hotels, tourism. Entry-level opportunities but often demanding hours.</li>
                    <li>🏪 <strong>Retail:</strong> Supermarkets (Lidl, Aldi, Rewe), department stores, specialist shops. Reliable starter employment.</li>
                </ul>

                <h4>🇦🇹 Austria – Quality and Tourism:</h4>
                <ul>
                    <li>⛷️ <strong>Tourism & Hospitality:</strong> Huge sector, especially in Tyrol, Salzburg. Seasonal and year-round positions in hotels, restaurants, ski resorts.</li>
                    <li>🏥 <strong>Healthcare:</strong> Similar to Germany – strong demand for nurses and care workers.</li>
                    <li>🏭 <strong>Manufacturing:</strong> Machinery, automotive suppliers, specialized industrial production.</li>
                    <li>🎨 <strong>Culture & Arts:</strong> Vienna's cultural sector, theaters, museums – competitive but opportunities exist.</li>
                    <li>🏪 <strong>Retail & Services:</strong> Shops, cafés (Kaffeehäuser), service industries throughout Austria.</li>
                </ul>

                <h4>🇨🇭 Switzerland – Precision and Finance:</h4>
                <ul>
                    <li>💰 <strong>Banking & Finance:</strong> Zurich and Geneva are major financial centers. Requires strong qualifications and often excellent language skills.</li>
                    <li>⌚ <strong>Precision Manufacturing:</strong> Watchmaking (Uhrenindustrie), pharmaceuticals, high-tech engineering. Switzerland's specialty.</li>
                    <li>🏥 <strong>Healthcare:</strong> Excellent healthcare system with high demand for qualified staff. Good pay but high standards.</li>
                    <li>🏨 <strong>Hospitality:</strong> Tourism in the Alps, major cities. High service standards expected.</li>
                    <li>🏪 <strong>Retail:</strong> Migros, Coop, and countless smaller businesses. Note: Sunday closing laws are strict.</li>
                    <li>💻 <strong>Technology:</strong> Growing IT sector, particularly in Zurich, Basel, and the Lake Geneva region.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ The Swiss Reality Check</strong>
                    <p>Switzerland offers the highest salaries in Europe – but also the highest cost of living. 💰 Rent in Zurich or Geneva can consume 30-40% of a good salary. Health insurance is mandatory and expensive (CHF 300-500+ per month). Getting a work permit is difficult for non-EU citizens. Do the math carefully before moving to Switzerland! 🧮</p>
                </div>

                <h4>🎯 How to Find Work:</h4>
                <ul>
                    <li>🌐 <strong>Online Job Portals:</strong> 
                        <ul>
                            <li>🇩🇪 Germany: Indeed.de, StepStone, Arbeitsagentur.de (official employment service)</li>
                            <li>🇦🇹 Austria: Karriere.at, StepStone.at, AMS.at (official service)</li>
                            <li>🇨🇭 Switzerland: Jobs.ch, Indeed.ch, RAV.ch (official service)</li>
                        </ul>
                    </li>
                    <li>📧 <strong>Direct Applications (Initiativbewerbung):</strong> Sending unsolicited applications to companies is common and accepted across Central Europe. Include a professional CV (Lebenslauf) and cover letter (Anschreiben).</li>
                    <li>🤝 <strong>Networking:</strong> Professional networks matter. LinkedIn is used. Personal recommendations carry significant weight.</li>
                    <li>🏢 <strong>Temp Agencies (Zeitarbeitsfirmen):</strong> Can get you started quickly. Germany has many: Randstad, Manpower, Adecco. Pay is lower but it's work experience.</li>
                    <li>🎓 <strong>Qualification Recognition:</strong> Get foreign qualifications recognized: Germany (anabin.kmk.org), Austria (enic-naric.net), Switzerland (SBFI). This is crucial for regulated professions!</li>
                </ul>

                <h3>💪 Teil 3: The German "Ausbildung" System – A Game Changer</h3>
                <p>Germany (and to a lesser extent Austria) has something special: the dual education system (Duales Ausbildungssystem). 🎓 This is worth understanding even if you're past typical apprenticeship age:</p>

                <div class="important">
                    <strong>🔧 What is Ausbildung?</strong>
                    <p>A 2-3 year vocational training program combining practical work in a company with theoretical learning at a vocational school (Berufsschule). 📚 You get paid while learning (€800-1,200/month typically). You gain a recognized qualification (anerkannter Abschluss). There are over 300 recognized training occupations! 🏆</p>
                </div>

                <h4>💼 Why This Matters:</h4>
                <ul>
                    <li>✅ <strong>Recognized Qualifications:</strong> An Ausbildung certificate is highly respected across Germany and recognized throughout the EU.</li>
                    <li>💰 <strong>Good Long-Term Prospects:</strong> After completing an Ausbildung, you're a qualified professional (Fachkraft) with solid earning potential.</li>
                    <li>📈 <strong>Career Ladder:</strong> You can advance to become a Meister (master craftsman) or Techniker (technician), often earning more than university graduates!</li>
                    <li>🌍 <strong>Open to Adults:</strong> While most apprentices are young, adult apprenticeships exist. Don't rule it out!</li>
                </ul>

                <h4>🔍 Common Ausbildung Fields:</h4>
                <ul>
                    <li>🔌 Electrician (Elektroniker)</li>
                    <li>🔧 Mechanic (Mechatroniker, KFZ-Mechatroniker)</li>
                    <li>🏗️ Construction trades (Maurer, Zimmermann)</li>
                    <li>💼 Office/Commercial (Kaufmann/-frau)</li>
                    <li>🍽️ Hospitality (Koch/Köchin, Hotelfachmann/-frau)</li>
                    <li>💇 Personal services (Friseur/in)</li>
                    <li>🏥 Healthcare (Gesundheits- und Krankenpfleger/in)</li>
                </ul>

                <div class="tip">
                    <strong>💡 Austria's Similar System</strong>
                    <p>Austria has its own excellent dual education system (Lehre). 🇦🇹 The principles are similar to Germany's. Switzerland has Berufslehre – also highly respected. If you're serious about long-term integration and good employment in Central Europe, investigate these paths! 🚀</p>
                </div>

                <h3>🏦 Teil 4: Money, Taxes, and Financial Basics</h3>
                <p>Understanding the financial system is crucial for stability. Central Europe is well-organised but complex. 💶</p>

                <h4>💳 Banking:</h4>
                <ul>
                    <li>🏦 <strong>Germany:</strong> Deutsche Bank, Commerzbank, Sparkasse (savings banks – local and trusted), N26/online banks. You'll need your registration certificate (Meldebescheinigung) to open an account.</li>
                    <li>🏦 <strong>Austria:</strong> Erste Bank, Raiffeisen, Bank Austria. Similar requirements: residence registration and ID.</li>
                    <li>🏦 <strong>Switzerland:</strong> UBS, PostFinance, Raiffeisen, cantonal banks. Opening an account can be more difficult for foreigners. Some banks charge monthly fees (CHF 5-15). Choose carefully!</li>
                    <li>💳 <strong>Cash Culture:</strong> Germany still uses cash heavily. Austria moderately. Switzerland is more card-friendly but cash is still important. Always carry some cash!</li>
                </ul>

                <h4>💰 Salary Expectations (Approximate Monthly Gross for Skilled Work):</h4>
                <ul>
                    <li>🇩🇪 <strong>Germany:</strong> €2,500-4,500+ depending on field, location, qualifications</li>
                    <li>🇦🇹 <strong>Austria:</strong> €2,400-4,200+ similar to Germany, slightly lower</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> CHF 4,500-8,000+ (€4,200-7,500+) – remember: higher costs!</li>
                </ul>
                
                <div class="tip">
                    <strong>💡 Note on Figures</strong>
                    <p>Salary ranges, tax rates, and insurance costs mentioned in this module are approximate and based on current data. These figures can change with policy updates and economic conditions. Always verify current rates with official sources when making financial decisions. 📊</p>
                </div>

                <h4>💸 Taxes and Contributions:</h4>
                <ul>
                    <li>📊 <strong>Germany:</strong> Progressive income tax (14-45%), plus solidarity surcharge. Church tax if you're registered as religious. Social contributions: pension, health, unemployment, long-term care (~20% total). Your payslip (Gehaltsabrechnung) will show deductions.</li>
                    <li>📊 <strong>Austria:</strong> Similar to Germany. Progressive tax (0-55% on very high incomes). Social security contributions around 18%. You'll receive a Lohnzettel showing deductions.</li>
                    <li>📊 <strong>Switzerland:</strong> Taxes vary significantly by canton! Federal tax is relatively low, but cantonal and municipal taxes vary. You pay taxes annually, not monthly (budget accordingly!). Social contributions are lower but health insurance is private and expensive. 🏥</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Tax Returns Are Mandatory</strong>
                    <p>Germany: Some employees must file (Steuererklärung), others can to get refunds. 🇦🇹 Austria: File if required or to claim deductions (Arbeitnehmerveranlagung). 🇨🇭 Switzerland: Everyone files an annual tax return to their canton. Don't skip this – penalties can be severe! 📋 Consider hiring a Steuerberater (tax advisor) for your first year if finances are complex.</p>
                </div>

                <h4>💼 Employment Rights:</h4>
                <ul>
                    <li>📝 <strong>Contracts:</strong> Get everything in writing. Employment contracts (Arbeitsvertrag/Anstellungsvertrag) are standard across all countries.</li>
                    <li>⏰ <strong>Working Hours:</strong> Typically 38-42 hours/week. Switzerland can be 42-45. Overtime rules vary – check your contract.</li>
                    <li>🏖️ <strong>Vacation:</strong> Germany minimum 20-24 days (most get 25-30), Austria minimum 25, Switzerland 20-25 (4-5 weeks). This is sacred – always take your vacation!</li>
                    <li>🤒 <strong>Sick Leave:</strong> All countries have good sick pay. Germany: employer pays for 6 weeks, then health insurance. Austria: similar. Switzerland: varies by contract, but typically well protected.</li>
                    <li>🛡️ <strong>Job Security:</strong> Germany has strong dismissal protection (Kündigungsschutz) after probation. Austria similar. Switzerland has less rigid protections but still fair regulations.</li>
                    <li>🤰 <strong>Parental Leave:</strong> Generous across the region. Germany offers Elterngeld (parental allowance) for up to 14 months. Austria has Kinderbetreuungsgeld. Switzerland varies by canton but is improving.</li>
                </ul>

                <h3>🚧 Teil 5: The Culture of Economic Self-Sufficiency</h3>
                <p>This is where Central European culture gets serious. Economic independence isn't just practical – it's a moral virtue. 💪</p>

                <div class="important">
                    <strong>🇩🇪🇦🇹🇨🇭 Why Self-Sufficiency Matters</strong>
                    <p>Central European culture is built on the principle of "Eigenverantwortung" (personal responsibility). 🎯 You're expected to take care of yourself and your family. While social safety nets exist (especially in Germany and Austria), relying on them long-term when you're capable of working is culturally frowned upon. In Switzerland, this expectation is even stronger. 🦶</p>
                </div>

                <h4>💡 What Economic Self-Sufficiency Signals:</h4>
                <ul>
                    <li>✊ <strong>You're Contributing:</strong> Paying taxes, social insurance contributions, supporting the system that supports society.</li>
                    <li>🤝 <strong>You're Serious About Integration:</strong> Working shows you're committed to making a life in Central Europe, not just passing through.</li>
                    <li>🏠 <strong>You're Reliable:</strong> Landlords, banks, officials all see stable employment as proof you're trustworthy.</li>
                    <li>👥 <strong>You Belong:</strong> Work is where many Central Europeans build their social networks. Colleagues become friends, especially through work social activities.</li>
                </ul>

                <h4>⚠️ About Unemployment Benefits:</h4>
                <ul>
                    <li>🇩🇪 <strong>Germany (Arbeitslosengeld):</strong> Good support if you've paid into the system. Generally 60-67% of previous net salary for up to 12 months (longer if you're older). Then Bürgergeld (citizen's allowance) kicks in. Check current rates as policies update regularly.</li>
                    <li>🇦🇹 <strong>Austria (Arbeitslosengeld):</strong> Generally around 55% of previous net earnings, available for 20-52 weeks depending on work history. Verify current rates.</li>
                    <li>🇨🇭 <strong>Switzerland (Arbeitslosenversicherung):</strong> Typically 70-80% of previous salary for up to 2 years, but strong expectation to actively seek work.</li>
                    <li>✅ <strong>Use If Needed:</strong> These systems exist for good reasons. If you lose your job, use the support. That's what you paid into!</li>
                    <li>❌ <strong>But Don't Abuse:</strong> Long-term unemployment while capable of working carries social stigma across all three countries. Active job seeking is required and monitored.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Swiss Difference</strong>
                    <p>Switzerland has less generous welfare than Germany or Austria, and cultural expectations for self-sufficiency are even stricter. 🇨🇭 The Swiss expect you to work hard, save privately, and not rely on the state. This mindset has created one of the world's wealthiest countries, but it's also more challenging if you're struggling. Plan accordingly! 💰</p>
                </div>

                <h3>📚 Teil 6: Professional Development and Qualifications</h3>
                <p>Central Europeans never stop learning. Weiterbildung (continuing education) is a way of life. 📖</p>

                <h4>🎓 Formal Qualifications Matter:</h4>
                <ul>
                    <li>📜 <strong>Get Recognition:</strong> If you have qualifications from abroad, get them officially recognized. This can significantly improve your job prospects and salary.</li>
                    <li>🏆 <strong>Meister/Fachwirt:</strong> In Germany and Austria, becoming a Meister (master craftsman) or Fachwirt (specialist) after your Ausbildung can lead to excellent career prospects and the right to train apprentices.</li>
                    <li>🎓 <strong>University Degrees:</strong> Respected across the region. Germany has many universities with low/no tuition. Austria similar. Switzerland has excellent universities but higher costs.</li>
                    <li>💻 <strong>Certificates and Courses:</strong> Industry-specific certifications (IT, project management, languages) are valued. Volkshochschulen (adult education centers) offer affordable courses across Germany and Austria.</li>
                </ul>

                <h4>🗣️ Language Skills – Critical Investment:</h4>
                <ul>
                    <li>🇩🇪 <strong>German:</strong> Essential in Germany and Austria. English works in some international companies, but German opens doors everywhere. Aim for B2-C1 level for professional work.</li>
                    <li>🇦🇹 <strong>Austrian German:</strong> Similar to standard German but with unique vocabulary and accent. Locals appreciate effort to learn Austrianisms!</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> German-speaking cantons use Swiss German (Schweizerdeutsch) in daily life, but High German (Hochdeutsch) in writing and formal settings. French in western cantons (Geneva, Lausanne), Italian in Ticino, Romansh in parts of Graubünden. Know which language region you're in!</li>
                    <li>📚 <strong>Free Courses:</strong> Many integration courses (Integrationskurse) are free or subsidized for migrants in Germany. Austria offers similar (ÖIF courses). Switzerland varies by canton.</li>
                </ul>

                <h3>🏢 Teil 7: Workplace Culture – What to Expect</h3>
                <p>Central European workplace culture has specific expectations. Here's how to navigate: 🎯</p>

                <h4>👔 Formality and Hierarchy:</h4>
                <ul>
                    <li>🎩 <strong>Sie vs. Du:</strong> Start with Sie (formal "you") with everyone. Wait for the offer to use Du. This matters! In some modern tech companies, Du is standard, but assume Sie until told otherwise.</li>
                    <li>📋 <strong>Titles:</strong> Use them! "Herr Doktor," "Frau Professorin" – especially in Austria, where titles are taken very seriously. In Switzerland and Germany, less emphasis but still respectful to use them.</li>
                    <li>🏢 <strong>Hierarchy:</strong> Respect exists but varies. Germany: clear hierarchies in traditional companies, flatter in startups. Austria: somewhat more hierarchical. Switzerland: varies, but consensus-oriented decision making is valued.</li>
                </ul>

                <h4>⏰ Punctuality and Meetings:</h4>
                <ul>
                    <li>🕐 <strong>Meetings Start On Time:</strong> Be there 5 minutes early. No excuses. Swiss punctuality is legendary – they mean it literally!</li>
                    <li>📋 <strong>Prepared and Organized:</strong> Bring documents, know your facts, have proposals ready. Germans especially value thorough preparation.</li>
                    <li>🎯 <strong>Focused and Efficient:</strong> Meetings have agendas and stick to them. Small talk is minimal. Get to the point.</li>
                    <li>📝 <strong>Minutes and Follow-up:</strong> Document everything (Protokoll). Follow through on commitments made in meetings.</li>
                </ul>

                <h4>💬 Communication Style:</h4>
                <ul>
                    <li>🎯 <strong>Direct Feedback:</strong> Germans are particularly direct. "Das ist falsch" (That's wrong) isn't personal – it's about accuracy. Don't take it to heart.</li>
                    <li>🇦🇹 <strong>Austrian Charm:</strong> Austrians can be more diplomatic with their famous "Schmäh" (charming humor), but still fairly direct.</li>
                    <li>🇨🇭 <strong>Swiss Consensus:</strong> Swiss Germans often seek consensus (Konkordanz). They avoid open conflict but are still clear communicators.</li>
                    <li>📧 <strong>Email Etiquette:</strong> Formal emails are standard. "Sehr geehrte/r" (Dear), professional tone, proper sign-offs. First names only after you've established rapport.</li>
                </ul>

                <h4>⚙️ Work Culture:</h4>
                <ul>
                    <li>🏢 <strong>Separation of Work and Private:</strong> Keep your private life private. Central Europeans don't share personal details easily at work.</li>
                    <li>🍺 <strong>After-Work Culture:</strong> Germany: sometimes Feierabendbier (after-work beer). Austria: Heurigenbesuch (wine tavern visit). Switzerland: less common, but exists. Attendance is semi-optional but helps with integration.</li>
                    <li>🎄 <strong>Company Events:</strong> Weihnachtsfeier (Christmas party), summer fests – these are important for team bonding. Show up!</li>
                    <li>☕ <strong>Breaks:</strong> Coffee breaks (Kaffeepause) are short and functional. Not like extended fika in Scandinavia!</li>
                </ul>

                <h3>💼 Teil 8: Starting a Business – Entrepreneurship in Central Europe</h3>
                <p>All three countries have vibrant business environments, though with different approaches: 🚀</p>

                <h4>🇩🇪 Germany – Strong Support, Lots of Rules:</h4>
                <ul>
                    <li>📋 <strong>Regulations:</strong> Lots of them! But they're clear and applied fairly. Know your Gewerbeordnung (trade regulations).</li>
                    <li>🏢 <strong>Legal Forms:</strong> Einzelunternehmen (sole trader), GmbH (limited company), UG (mini-GmbH). Choose based on your needs and liability concerns.</li>
                    <li>💰 <strong>Funding:</strong> KfW bank offers startup loans. Gründerzuschuss (startup grant) may be available if you're on benefits and have a solid business plan.</li>
                    <li>📝 <strong>Registration:</strong> Register at the Gewerbeamt for trade business, or as Freiberufler if you're a freelancer (certain professions only).</li>
                </ul>

                <h4>🇦🇹 Austria – Similar to Germany:</h4>
                <ul>
                    <li>🏢 <strong>Legal Forms:</strong> Einzelunternehmen, GmbH, OG (general partnership). Process similar to Germany.</li>
                    <li>📋 <strong>WKO:</strong> Wirtschaftskammer Österreich (Chamber of Commerce) – membership often mandatory for businesses. They provide support and services.</li>
                    <li>💶 <strong>Funding:</strong> AWS (Austria Wirtschaftsservice) provides startup support and financing.</li>
                </ul>

                <h4>🇨🇭 Switzerland – Easy to Start, Expensive to Run:</h4>
                <ul>
                    <li>✅ <strong>Business-Friendly:</strong> Switzerland consistently ranks as one of the easiest places to start a business globally.</li>
                    <li>💰 <strong>Costs:</strong> Higher than Germany/Austria. Rent, salaries, health insurance for employees – everything is more expensive.</li>
                    <li>🏢 <strong>Legal Forms:</strong> Einzelfirma (sole proprietorship), GmbH, AG (joint-stock company). Straightforward registration through cantonal commerce offices.</li>
                    <li>📊 <strong>Taxes:</strong> Business taxes vary by canton. Some cantons (Zug, Schwyz) are very business-friendly with low taxes. Others less so.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Get Professional Advice!</strong>
                    <p>Starting a business in Central Europe requires navigating complex tax, legal, and regulatory frameworks. 📋 Hire a Steuerberater (tax advisor) and possibly a lawyer for setup. The upfront cost saves enormous headaches and potential fines later. This is money well spent across all three countries! 💼</p>
                </div>

                <h3>🏘️ Teil 9: Economic Integration in Rural vs. Urban Areas</h3>
                <p>Job markets differ significantly between cities and countryside across Central Europe: 🏙️🌲</p>

                <h4>🏙️ Urban Areas (Berlin, Munich, Vienna, Zurich, Geneva):</h4>
                <ul>
                    <li>✅ <strong>More Opportunities:</strong> Diverse job markets, international companies, startups, specialized positions.</li>
                    <li>💰 <strong>Higher Salaries:</strong> But also much higher rents and living costs, especially in Munich, Zurich, Geneva.</li>
                    <li>🌍 <strong>International Environment:</strong> More English speakers, more cosmopolitan, easier initial integration.</li>
                    <li>🏃 <strong>Faster Pace:</strong> More competitive, potentially less personal workplace relationships.</li>
                </ul>

                <h4>🌲 Rural Areas:</h4>
                <ul>
                    <li>🏭 <strong>Different Sectors:</strong> Manufacturing, agriculture, tourism (especially in Alps), traditional trades, local retail.</li>
                    <li>💶 <strong>Lower Salaries, Lower Costs:</strong> Pay is less but so is rent and daily living. Quality of life can be excellent.</li>
                    <li>🚗 <strong>Car Essential:</strong> Public transport is limited. A driving license and car open up opportunities.</li>
                    <li>👥 <strong>Tighter Communities:</strong> Your reputation matters more. Being a good employee and neighbor is noticed. Integration takes longer but can be deeper.</li>
                    <li>🗣️ <strong>German Essential:</strong> English won't get you far in rural Bavaria, Austrian valleys, or Swiss villages. Local dialects common!</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Hidden Advantage</strong>
                    <p>Rural Central Europe often has excellent "hidden champion" companies (Mittelstand in Germany) – medium-sized, world-leading companies in specialized fields. 🏆 They often struggle to find workers and offer stable employment, good training, and strong benefits. Don't overlook opportunities outside major cities! 🌟</p>
                </div>

                <h3>🛡️ Teil 10: Social Security and Insurance – The Safety Net</h3>
                <p>Central European countries have comprehensive social security systems, but they work differently: 🏥</p>

                <h4>🏥 Health Insurance (Krankenversicherung) – MANDATORY:</h4>
                <ul>
                    <li>🇩🇪 <strong>Germany:</strong> Statutory (gesetzlich) or private (privat). Most employees are in statutory (AOK, TK, Barmer, etc.). About 14.6% of gross salary (split with employer). Covers family members at no extra cost.</li>
                    <li>🇦🇹 <strong>Austria:</strong> Similar to Germany. WGKK and other statutory providers. About 7.65% of gross salary. Very comprehensive coverage.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> MANDATORY private insurance (Grundversicherung). You choose your provider. Costs CHF 300-500+ per month depending on age, canton, deductible. NOT free for family members – everyone pays! Budget carefully!</li>
                </ul>

                <h4>💼 Unemployment Insurance (Arbeitslosenversicherung):</h4>
                <ul>
                    <li>📊 Contributions are automatic from your salary in all countries.</li>
                    <li>✅ Register immediately if you lose your job at the Arbeitsagentur (Germany), AMS (Austria), or RAV (Switzerland).</li>
                    <li>📋 Active job seeking is required. They will monitor your efforts!</li>
                </ul>

                <h4>👴 Pension Insurance (Rentenversicherung):</h4>
                <ul>
                    <li>🏦 All countries have state pension systems funded by current workers' contributions.</li>
                    <li>💰 Consider private pension supplements (Riester/Rürup in Germany, Pensionskasse in Austria, Säule 3a in Switzerland).</li>
                    <li>⏳ The earlier you start, the better. State pensions alone may not be sufficient!</li>
                </ul>

                <h4>⚖️ Legal Insurance (Rechtsschutzversicherung) – Recommended:</h4>
                <ul>
                    <li>📋 Not mandatory but very useful. Covers legal costs for disputes with employers, landlords, etc.</li>
                    <li>💶 Costs €10-30/month depending on coverage. Can save thousands if you need it!</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Economic integration in Central Europe rests on several pillars: <strong>Reliability (Zuverlässigkeit)</strong> ⏰ – show up, deliver, keep promises. <strong>Quality (Qualität)</strong> 🎯 – do things properly, take pride in your work. <strong>Self-Sufficiency (Eigenverantwortung)</strong> 💪 – support yourself and contribute to society. <strong>Continuous Learning (Weiterbildung)</strong> 📚 – never stop improving your skills.</p>
                    <p>Germany 🇩🇪 offers strong worker protections and excellent training systems. Austria 🇦🇹 combines German thoroughness with Alpine charm and a thriving tourism sector. Switzerland 🇨🇭 provides the highest salaries but demands the highest standards and self-reliance. </p>
                    <p>Work hard, work smart, respect the systems, and build your economic foundation. Central Europeans respect those who contribute and stand on their own two feet. Do that, and you'll build not just a career – but a solid, prosperous life in the heart of Europe! 🇩🇪🇦🇹🇨🇭🇱🇮✨</p>
                </div>
            `
        },
        social: {
            title: "Social Ethics in Central Europe",
            content: `
                <h3>General Social Norms</h3>
                <p>Central European society (Germany 🇩🇪, Austria 🇦🇹, Switzerland 🇨🇭, Liechtenstein 🇱🇮) values punctuality, efficiency, and directness. There's a clear distinction between formal and informal relationships across all countries.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>"Guten Tag" (Good day) is the standard formal greeting in German-speaking areas</li>
                    <li>"Grüß Gott" is common in Bavaria, Austria, and parts of Switzerland</li>
                    <li>"Grüezi" is the Swiss German formal greeting</li>
                    <li>Firm handshake with direct eye contact is expected across the region</li>
                    <li>Use titles (Herr, Frau, Dr.) until invited to use first names – Austria is particularly fond of titles</li>
                    <li>"Sie" (formal you) vs "Du" (informal you) distinction is important everywhere</li>
                </ul>
                
                <h3>Punctuality</h3>
                <p>Being on time is extremely important across Central Europe. Switzerland is particularly famous for precision. Arriving even 5 minutes late without notice is considered rude everywhere.</p>
                
                <div class="warning">
                    <strong>Note:</strong> "Pünktlichkeit" (punctuality) is a core Central European value. If you're going to be late, always call ahead.
                </div>
                
                <h3>Privacy</h3>
                <p>Central Europeans value their privacy. Avoid asking personal questions until you know someone well. Respect quiet hours (Ruhezeiten) – particularly strict in Switzerland and observed throughout the region.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Sundays are traditionally quiet days across all countries. Many shops are closed by law, and noisy activities are discouraged or prohibited.
                </div>
            `
        },
        conversation: {
            title: "Conversation Etiquette in Central Europe",
            content: `
                <h3>Communication Style</h3>
                <p>Central Europeans tend to be direct and straightforward. Germans are the most direct, Austrians often add charm ("Schmäh"), and Swiss Germans may prioritise harmony. This directness isn't rudeness – it's valued honesty.</p>
                
                <h3>Safe Topics</h3>
                <ul>
                    <li>Travel and vacations – highly valued across the region</li>
                    <li>Football (Fußball) and sports – including skiing ⛷️ (especially in Austria and Switzerland)</li>
                    <li>Cars and engineering (particularly in Germany)</li>
                    <li>Mountains and outdoor activities (particularly in Austria, Switzerland, Bavaria)</li>
                    <li>Cultural events and arts</li>
                    <li>Regional food and wine (Austria's wine culture, Swiss chocolate and cheese)</li>
                </ul>
                
                <h3>Topics to Approach Carefully</h3>
                <ul>
                    <li>World War II and Nazi history (handled very seriously in both Germany and Austria)</li>
                    <li>Personal finances and salary – private across all countries</li>
                    <li>Regional rivalries – don't confuse nationalities or regions</li>
                    <li>Comparisons between countries (don't call Swiss people "German")</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> Central Europeans separate work and private life. Colleagues may not socialize outside work. This isn't unfriendliness – it's respecting boundaries.
                </div>
                
                <h3>Humor</h3>
                <p>Humour exists across Central Europe but varies: German humour is dry and clever, Austrian "Schmäh" is playful and charming, Swiss humour is often subtle. Professional settings across all countries tend to be more serious.</p>
            `
        },
        dating: {
            title: "Dating Culture in Central Europe",
            content: `
                <h3>Meeting People</h3>
                <p>Central Europeans often meet through:</p>
                <ul>
                    <li>Friend groups and social circles</li>
                    <li>Sports clubs (Vereine) – very popular across Germany, Austria, and Switzerland</li>
                    <li>Dating apps (very popular, especially in urban areas)</li>
                    <li>Work or university</li>
                    <li>Outdoor activities (hiking, skiing – particularly in Alpine regions)</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <p>Dating across Central Europe can be direct. If someone is interested, they'll often make it clear. There's less "game-playing" than in some cultures.</p>
                
                <ul>
                    <li>Either person can ask the other out</li>
                    <li>Splitting bills is very common and expected across all countries</li>
                    <li>Punctuality matters for dates too – especially in Switzerland!</li>
                    <li>Public displays of affection are moderate throughout the region</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Be direct about your intentions. Central Europeans appreciate honesty over playing games. Austrians may appreciate a bit more charm (Schmäh), while Germans and Swiss tend to be very straightforward.
                </div>
                
                <h3>Relationship Progression</h3>
                <p>Relationships often develop from friendships across the region. Central Europeans may take time before committing but are serious once they do. Living together before marriage is common in all countries.</p>
            `
        },
        marriage: {
            title: "Marriage Customs in Central Europe",
            content: `
                <h3>Legal Marriage</h3>
                <p>Only civil marriages are legally recognized across Central Europe. In Germany, this is done at the Standesamt (registry office), in Austria at the Standesamt, and in Switzerland at the Zivilstandsamt. Religious ceremonies are optional and held after the civil ceremony.</p>
                
                <h3>Traditions</h3>
                <ul>
                    <li><strong>🇩🇪 Germany:</strong> Polterabend (pre-wedding party where guests break porcelain for luck), Baumstamm sägen (couple saws a log together)</li>
                    <li><strong>🇦🇹 Austria:</strong> Brautentführung (bride kidnapping tradition), Hochzeitssuppe (wedding soup)</li>
                    <li><strong>🇨🇭 Switzerland:</strong> Traditions vary by canton; often includes local folk music and regional customs</li>
                    <li>Wedding pranks by friends are common across the region</li>
                    <li>Multiple-day celebrations are traditional in many areas</li>
                </ul>
                
                <h3>Legal Requirements</h3>
                <p>You need various documents including birth certificate, proof of residence, and passport across all countries. Foreign documents often need apostille or legalization.</p>
                
                <div class="important">
                    <strong>Important:</strong> Start paperwork early – bureaucracy is thorough across Central Europe. Allow several months for document processing.
                </div>
                
                <h3>Modern Trends</h3>
                <p>Cohabitation without marriage is socially accepted across all countries. Same-sex marriage is legal in Germany (since 2017), Austria (since 2019), and Switzerland (since 2022). Liechtenstein has registered partnerships. Many couples don't take the same surname.</p>
            `
        },
        work: {
            title: "Work Ethics in Central Europe",
            content: `
                <h3>Workplace Culture</h3>
                <p>Central European workplaces value efficiency, quality, and reliability. There's respect for expertise and structures, though this varies by country – Switzerland tends to be more consensus-oriented, Austria slightly more hierarchical, Germany in between.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Punctuality is non-negotiable across all countries – Swiss precision is legendary</li>
                    <li>Meetings are focused and efficient</li>
                    <li>Quality work is expected – "Made in Germany" and "Swiss Made" are renowned quality marks</li>
                    <li>Direct feedback is normal, especially in Germany</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Central Europeans take work-life balance seriously. Working overtime is not glorified. Vacation time is generous: Germany (25-30 days), Austria (25+ days), Switzerland (20-25 days) and is expected to be taken.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> "Feierabend" (end of work day) is respected across the region. Don't expect responses to emails after hours, particularly in Germany.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>Use formal address (Sie) until invited otherwise across all countries</li>
                    <li>Titles (Dr., Prof.) should be used – Austria is particularly title-conscious</li>
                    <li>Keep personal and professional life separate</li>
                    <li>Be prepared and organized for meetings</li>
                </ul>
            `
        },
        civic: {
            title: "Civic Duties in Central Europe",
            content: `
                <h3>Registration</h3>
                <p>Registration is mandatory across Central Europe:</p>
                <ul>
                    <li><strong>🇩🇪 Germany:</strong> Register at the Bürgeramt within two weeks (Anmeldung)</li>
                    <li><strong>🇦🇹 Austria:</strong> Register at the Meldeamt within 3 days</li>
                    <li><strong>🇨🇭 Switzerland:</strong> Register at the Einwohnerkontrolle within 14 days</li>
                </ul>
                
                <h3>Taxes</h3>
                <p>All Central European countries have comprehensive tax systems. Switzerland's system varies by canton. Austria and Germany have similar progressive income tax systems. Keep all documents – these countries love paper trails.</p>
                
                <div class="important">
                    <strong>Important:</strong> Get your tax ID when you register. In Germany: Steuer-ID. In Austria: Steuernummer. In Switzerland: AHV-Nummer (social security number is key).
                </div>
                
                <h3>Health Insurance</h3>
                <p>Health insurance is mandatory across Central Europe. Systems vary: Germany has statutory and private options, Austria has a similar system, Switzerland requires private basic insurance (Grundversicherung) which is mandatory but from private providers.</p>
                
                <h3>Recycling</h3>
                <ul>
                    <li>Strict waste separation is required across all countries</li>
                    <li>🇩🇪 Germany: Yellow bin/bag (packaging), Blue (paper), Brown (organic)</li>
                    <li>🇦🇹 Austria: Similar system to Germany</li>
                    <li>🇨🇭 Switzerland: Particularly strict – you often pay for official garbage bags and can be fined for improper disposal</li>
                    <li>Glass containers: Separated by color at collection points everywhere</li>
                </ul>
            `
        },
        clothing: {
            title: "Clothing Norms in Central Europe",
            content: `
                <h3>General Style</h3>
                <p>Central European fashion tends toward practical, quality clothing. Dark colors and classic styles are common, especially in professional settings. Switzerland tends toward understated elegance, Austria appreciates both tradition and style.</p>
                
                <h3>Workplace Attire</h3>
                <ul>
                    <li>Corporate: Conservative suits, minimal accessories across all countries</li>
                    <li>Business casual: Neat, understated clothing</li>
                    <li>Tech/creative: More relaxed, but still tidy</li>
                    <li>Banking (especially in Switzerland): Particularly conservative</li>
                </ul>
                
                <h3>Casual Wear</h3>
                <p>Central Europeans dress practically. Good walking shoes, functional outerwear, and weather-appropriate clothing are essential – the Alps and variable weather demand quality outdoor gear.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Invest in good quality basics. Central Europeans value durability and practicality over flashy fashion. "Quality over quantity" is the motto.
                </div>
                
                <h3>Special Occasions</h3>
                <ul>
                    <li>Traditional events: Dirndl/Lederhosen (Bavaria 🇩🇪, Austria 🇦🇹); regional Trachten vary across Swiss cantons 🇨🇭</li>
                    <li>Formal events: Dark suits, evening wear</li>
                    <li>Swimming pools: Proper swimwear required (no street clothes)</li>
                    <li>Saunas: Often nude (mixed-gender in many places), especially in Germany and Austria</li>
                </ul>
            `
        },
        hygiene: {
            title: "Hygiene Standards in Central Europe",
            content: `
                <h3>Personal Hygiene</h3>
                <p>Daily showering and use of deodorant is standard across Central Europe. Clean, pressed clothing is expected in professional settings.</p>
                
                <h3>Public Hygiene</h3>
                <ul>
                    <li>Strict waste separation and recycling across all countries – Switzerland is particularly rigorous</li>
                    <li>Dog owners must clean up after pets everywhere</li>
                    <li>Public spaces are kept clean – littering is heavily frowned upon</li>
                    <li>Cover mouth when coughing/sneezing</li>
                </ul>
                
                <h3>Sauna Culture</h3>
                <p>Saunas are popular across Central Europe, especially in Germany and Austria. They are often nude, and this is not sexual – it's about health and relaxation. Textile-only times may be available. Always bring a towel to sit on.</p>
                
                <div class="important">
                    <strong>Important:</strong> Never put feet on sauna benches without a towel. Shower before entering pools and saunas. These rules apply across all countries.
                </div>
                
                <h3>Home Hygiene</h3>
                <ul>
                    <li>Regular cleaning is expected, especially in shared housing</li>
                    <li>Kehrwoche (cleaning duty) may rotate in apartment buildings (especially in southern Germany and Switzerland)</li>
                    <li>Shoes are often removed indoors across all countries</li>
                    <li>Airing out rooms daily (Lüften) is common practice to prevent mold</li>
                </ul>
            `
        },
        citizenship: {
            title: "Path to Citizenship in Central Europe",
            content: `
                <h3>Requirements Vary by Country</h3>
                <p>Each Central European country has different citizenship requirements:</p>
                
                <h4>🇩🇪 Germany</h4>
                <ul>
                    <li>8 years legal residence (can be reduced to 6-7 with integration achievements)</li>
                    <li>Pass the naturalization test and German language proficiency (B1 level)</li>
                    <li>Generally requires giving up other citizenships (exceptions for EU citizens)</li>
                </ul>
                
                <h4>🇦🇹 Austria</h4>
                <ul>
                    <li>10 years continuous legal residence (can be reduced to 6 years)</li>
                    <li>German language proficiency (B1 level) and citizenship test</li>
                    <li>Generally requires renouncing other citizenships</li>
                </ul>
                
                <h4>🇨🇭 Switzerland</h4>
                <ul>
                    <li>10 years legal residence (with specific rules for different age groups)</li>
                    <li>Integration requirements including language proficiency</li>
                    <li>Citizenship granted at federal, cantonal, and municipal levels</li>
                    <li>Dual citizenship is allowed</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> All countries have naturalization tests covering history, politics, and society. Study the official materials and take practice tests. Switzerland's process includes cantonal/municipal approval, which can vary significantly by location.
                </div>
                
                <h3>Benefits of Central European Citizenship</h3>
                <ul>
                    <li>German/Austrian citizenship includes EU passport and full EU free movement</li>
                    <li>Swiss citizenship includes one of the world's strongest passports</li>
                    <li>Voting rights</li>
                    <li>No visa requirements for many countries</li>
                    <li>Right to live and work freely in the country</li>
                </ul>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare Systems – Your Guide to Medical Care Across Central Europe 💊",
            content: `
                <p>Servus! Let's talk about something crucial: healthcare in Central Europe. 🏥 Germany 🇩🇪, Austria 🇦🇹, and Switzerland 🇨🇭 all have excellent healthcare systems, but they work differently from each other – and probably differently from what you're used to. Understanding how they work is essential for staying healthy and avoiding costly mistakes. 💰</p>
                
                <p>This module will walk you through health insurance requirements, finding doctors, getting treatment, and navigating each country's system. Los geht's! 💪</p>

                <h3>🌍 Part 1: Overview – Three Different Systems</h3>
                <p>While all Central European countries have high-quality healthcare, the systems differ significantly: 🏛️</p>

                <div class="important">
                    <strong>💡 The Three Systems at a Glance</strong>
                    <ul>
                        <li><strong>🇩🇪 Germany:</strong> Statutory health insurance (gesetzliche Krankenversicherung) for most, private option for high earners. Comprehensive coverage, relatively easy access. 🆓</li>
                        <li><strong>🇦🇹 Austria:</strong> Similar to Germany – social insurance system (Sozialversicherung) with near-universal coverage through statutory providers. e-card system for easy access. 💳</li>
                        <li><strong>🇨🇭 Switzerland:</strong> MANDATORY private insurance (Grundversicherung) from competing providers. You MUST buy your own insurance. Everyone pays, including children! 💰</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Critical Point: Insurance Is Mandatory Everywhere!</strong>
                    <p>In all three countries, health insurance is legally required. 🚫 In Germany and Austria, it's automatic for most employees. In Switzerland, YOU must arrange it yourself within 3 months of arrival. Failure to insure can result in fines and backdated premium bills! ⚖️</p>
                </div>

                <h3>🇩🇪 Part 2: Germany – The Statutory/Private Dual System</h3>
                <p>Germany's healthcare system is one of the world's oldest and most comprehensive. Here's how it works: 🏥</p>

                <h4>💳 Health Insurance in Germany:</h4>
                <ul>
                    <li>🏥 <strong>Gesetzliche Krankenversicherung (GKV) – Statutory Insurance:</strong> For employees earning under ~€69,300/year (2024 threshold). About 90% of Germans have this. Providers include AOK, TK (Techniker Krankenkasse), Barmer, DAK, BKK, and others.</li>
                    <li>💼 <strong>Private Krankenversicherung (PKV) – Private Insurance:</strong> Optional for high earners, self-employed, and civil servants. Can be cheaper when young but gets expensive with age.</li>
                    <li>💰 <strong>Cost:</strong> GKV is ~14.6% of gross salary (split roughly 50-50 between employer and employee). Plus ~1-2% additional contribution varies by provider.</li>
                    <li>👨‍👩‍👧 <strong>Family Coverage:</strong> GKV covers spouse and children at NO extra cost (Familienversicherung) if they earn little/no income. Private insurance requires separate policies for each person!</li>
                </ul>

                <h4>🏥 Choosing a Health Insurance Provider (Krankenkasse):</h4>
                <ul>
                    <li>🔍 <strong>All GKV providers offer same basic coverage:</strong> Legally mandated services are identical. Differences are in extra services (dental cleaning, travel vaccinations, alternative medicine).</li>
                    <li>📊 <strong>Compare additional contributions:</strong> These vary by ~0.5-2% and are listed on provider websites.</li>
                    <li>⭐ <strong>Popular options:</strong> TK (Techniker Krankenkasse) – good service, English support. AOK – regional providers. Barmer, DAK-Gesundheit – nationwide coverage.</li>
                    <li>🔄 <strong>You can switch:</strong> After 18 months with a provider, you can change (with 2 months' notice).</li>
                </ul>

                <h4>👨‍⚕️ Finding a Doctor (Arzt):</h4>
                <ul>
                    <li>🔍 <strong>General Practitioners (Hausarzt):</strong> Find one near you. Use online directories or ask neighbors. You don't formally "register" like in the UK – just book an appointment.</li>
                    <li>📞 <strong>Booking Appointments:</strong> Call the practice (Praxis). Say "Ich hätte gerne einen Termin" (I'd like an appointment). Many practices are moving to online booking.</li>
                    <li>💳 <strong>Bring Your Insurance Card:</strong> Always bring your Gesundheitskarte (health insurance card). The practice will scan it – you pay nothing on the spot for standard care.</li>
                    <li>🏥 <strong>Specialists (Fachärzte):</strong> You can often go directly without GP referral (unlike many countries). But getting a Überweisung (referral) from your Hausarzt can help with appointment priority.</li>
                </ul>

                <h4>💊 Prescriptions (Rezepte):</h4>
                <ul>
                    <li>📝 <strong>The Prescription:</strong> Your doctor gives you a paper or digital prescription (Rezept).</li>
                    <li>🏪 <strong>Pharmacies (Apotheken):</strong> Take it to any Apotheke. They'll prepare your medication.</li>
                    <li>💰 <strong>Cost:</strong> GKV members pay €5-10 per prescription (Rezeptgebühr) for most medicines. Some are exempt. Private insurance works differently.</li>
                    <li>🌙 <strong>Emergency Pharmacy:</strong> "Apotheken-Notdienst" rotate 24/7 coverage. Check local listings or apotheken.de.</li>
                </ul>

                <h4>🆘 Emergencies:</h4>
                <ul>
                    <li>🚑 <strong>Emergency Number:</strong> 112 for ambulance/fire/police throughout Europe!</li>
                    <li>🏥 <strong>Emergency Rooms (Notaufnahme):</strong> Go for serious emergencies only. Waiting times can be long for non-urgent cases.</li>
                    <li>📞 <strong>Ärztlicher Bereitschaftsdienst (116 117):</strong> For non-life-threatening urgent care outside office hours. They'll direct you to open practices or arrange house calls.</li>
                </ul>

                <div class="tip">
                    <strong>💡 German Healthcare Tip</strong>
                    <p>The Hausarzt system works well! 👨‍⚕️ Find a good Hausarzt you trust. They coordinate your care, have your medical history, and can refer you to specialists. Building this relationship is valuable. 🤝</p>
                </div>

                <h3>🇦🇹 Part 3: Austria – The E-Card System</h3>
                <p>Austria's healthcare is similar to Germany's but with some unique features: 💳</p>

                <h4>🏥 Health Insurance in Austria:</h4>
                <ul>
                    <li>📋 <strong>Automatically covered:</strong> Employees are automatically insured through their employer with regional Krankenkassen (ÖGK – Österreichische Gesundheitskasse is the main provider since 2020 merger).</li>
                    <li>💰 <strong>Cost:</strong> About 7.65% of gross salary for employees (employer pays additional percentage). Contributions are automatic.</li>
                    <li>💳 <strong>E-Card:</strong> You receive an e-card (Chipkarte) in the mail. THIS is your key to healthcare! Always bring it to doctor appointments.</li>
                    <li>👨‍👩‍👧 <strong>Family Coverage:</strong> Like Germany – spouse and children covered at no extra cost if they meet income criteria.</li>
                </ul>

                <h4>👨‍⚕️ Finding Doctors in Austria:</h4>
                <ul>
                    <li>🏥 <strong>Vertragsärzte (Contract Doctors):</strong> Doctors with contracts with health insurance. Treatment is FREE (covered by your e-card). Find them on ÖGK website.</li>
                    <li>💰 <strong>Wahlarzt (Private Doctors):</strong> Doctors without health insurance contracts. You pay upfront (can be expensive!) and claim partial reimbursement from your insurance (usually 80% of the official rate, which may be less than the actual bill!).</li>
                    <li>📞 <strong>Booking:</strong> Call practices. "Ich hätte gerne einen Termin" (I'd like an appointment).</li>
                    <li>💳 <strong>E-Card:</strong> Present it at every visit. The doctor scans it and billing is automatic.</li>
                </ul>

                <h4>💊 Prescriptions in Austria:</h4>
                <ul>
                    <li>📝 <strong>E-Rezept:</strong> Many prescriptions are now electronic. Your e-card carries the prescription.</li>
                    <li>🏪 <strong>Apotheke:</strong> Take your e-card to any pharmacy. They access your prescription and dispense medication.</li>
                    <li>💰 <strong>Rezeptgebühr:</strong> Small fee per prescription item (~€6-7). Some groups are exempt (children, low-income, certain chronic conditions).</li>
                </ul>

                <h4>🆘 Emergencies in Austria:</h4>
                <ul>
                    <li>🚑 <strong>Emergency Number:</strong> 112 (Europe-wide) or 144 (Austrian ambulance specifically).</li>
                    <li>🏥 <strong>Ambulanz:</strong> Hospital emergency departments for serious cases.</li>
                    <li>📞 <strong>Ärztefunkdienst (141):</strong> Emergency doctor service for urgent non-life-threatening issues outside office hours.</li>
                </ul>

                <div class="important">
                    <strong>🇦🇹 Austrian Tip: The E-Card is Everything!</strong>
                    <p>Don't lose your e-card! 💳 It's your passport to free healthcare at contract doctors. If lost, report immediately to ÖGK and request a replacement. Without it, you may have to pay upfront and claim reimbursement. 🚨</p>
                </div>

                <h3>🇨🇭 Part 4: Switzerland – Mandatory Private Insurance</h3>
                <p>Switzerland's system is unique and potentially expensive. Understanding it is critical: ⚠️</p>

                <h4>🏥 Health Insurance in Switzerland (Grundversicherung):</h4>
                <ul>
                    <li>🚨 <strong>MANDATORY for everyone:</strong> Within 3 months of arrival, you MUST buy basic insurance (Grundversicherung/assurance de base).</li>
                    <li>🏢 <strong>Private but regulated:</strong> You buy from private insurers (CSS, Helsana, Swica, Sanitas, Assura, and many others) but the basic coverage is legally defined – it's the same everywhere.</li>
                    <li>💰 <strong>Cost:</strong> Varies! CHF 300-600+ per month depending on:
                        <ul>
                            <li>📍 Your canton (Zurich expensive, Appenzell cheaper)</li>
                            <li>🎂 Your age (older = more expensive)</li>
                            <li>💵 Your deductible/Franchise choice (higher deductible = lower monthly premium)</li>
                            <li>🏥 Your insurance model (standard, HMO, GP model, etc.)</li>
                        </ul>
                    </li>
                    <li>👨‍👩‍👧 <strong>NO free family coverage:</strong> Every person – including children – needs their own policy and pays their own premium! 💰💰💰</li>
                    <li>📅 <strong>Can switch annually:</strong> You can change insurers each year by end of November for next year.</li>
                </ul>

                <h4>💡 Choosing Swiss Health Insurance:</h4>
                <ul>
                    <li>🔍 <strong>Use comparison sites:</strong> comparis.ch and priminfo.ch (official) help you compare premiums.</li>
                    <li>💵 <strong>Deductible (Franchise):</strong> You can choose from CHF 300 (lowest), 500, 1000, 1500, 2000, 2500 (highest). Higher deductible = lower monthly premium. Choose based on expected medical needs.</li>
                    <li>🏥 <strong>Insurance Models:</strong> 
                        <ul>
                            <li>Standard model: Free choice of doctors (most expensive)</li>
                            <li>HMO model: You visit a medical center first (cheaper)</li>
                            <li>Hausarzt/GP model: You choose a family doctor as first contact (cheaper)</li>
                            <li>Telmed model: Call insurance's medical hotline first (cheaper)</li>
                        </ul>
                    </li>
                    <li>📊 <strong>Cheapest isn't always best:</strong> But since basic coverage is identical, cheaper is often fine. Check service quality reviews.</li>
                </ul>

                <h4>👨‍⚕️ Using Healthcare in Switzerland:</h4>
                <ul>
                    <li>📞 <strong>Finding Doctors:</strong> Search online or ask for recommendations. Book appointments (Termine).</li>
                    <li>💳 <strong>Insurance Card:</strong> You receive an insurance card. Bring it to appointments.</li>
                    <li>💰 <strong>Payment:</strong> Unlike Germany/Austria, you often receive a BILL (Rechnung) after treatment! You pay it, then your insurance reimburses you. Or the doctor bills the insurance directly – depends on the practice.</li>
                    <li>💵 <strong>Deductible:</strong> YOU pay the first CHF 300-2500/year (your franchise) out of pocket. After that, you pay 10% of costs up to CHF 700/year. Insurance covers the rest.</li>
                </ul>

                <h4>💊 Prescriptions in Switzerland:</h4>
                <ul>
                    <li>📝 <strong>Paper Prescriptions:</strong> Doctor gives you a prescription (Rezept/ordonnance).</li>
                    <li>🏪 <strong>Apotheke/Pharmacie:</strong> Take to any pharmacy. They'll prepare medications.</li>
                    <li>💰 <strong>Cost:</strong> You pay upfront. Costs count toward your deductible/franchise.</li>
                </ul>

                <h4>🆘 Emergencies in Switzerland:</h4>
                <ul>
                    <li>🚑 <strong>Emergency Number:</strong> 112 or 144 (ambulance). Be aware: ambulance rides cost money (CHF 500-2000) and may not be fully covered! 🚨</li>
                    <li>🏥 <strong>Notfall/Urgences:</strong> Hospital emergency rooms for serious cases.</li>
                    <li>📞 <strong>Call your HMO/GP:</strong> If you're in an HMO or GP model, call them first for non-emergencies – going directly to emergency room can void coverage!</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Swiss Healthcare is EXPENSIVE!</strong>
                    <p>Budget carefully! 💸 A family of 3 can easily pay CHF 1000+/month just for mandatory insurance premiums. Add deductibles and 10% copayments, and healthcare can consume 10-15% of your income. This is one reason Swiss salaries are higher. Plan accordingly! 📊</p>
                </div>

                <div class="tip">
                    <strong>💡 Premium Reduction (Prämienverbilligung)</strong>
                    <p>Lower-income families in Switzerland can apply for premium reductions (Prämienverbilligung/réduction de primes). 💰 This is cantonal, so check your canton's website. Many people are eligible but don't claim it! Check if you qualify. 🔍</p>
                </div>

                <h3>🦷 Part 5: Dental Care Across Central Europe</h3>
                <p>Dental care works differently than general healthcare: 😬</p>

                <ul>
                    <li>🇩🇪 <strong>Germany:</strong> Basic dental care covered by GKV (checkups, basic fillings). Crowns, implants, cosmetic work require significant copayment (40-50% or more). Many get supplementary dental insurance (Zahnzusatzversicherung).</li>
                    <li>🇦🇹 <strong>Austria:</strong> Similar to Germany. Basic care covered, more complex work partially covered. Bonus program rewards regular checkups with higher coverage.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> Basic insurance (Grundversicherung) does NOT cover dental for adults! 🚫 You pay 100% out of pocket or buy supplementary dental insurance. Swiss dental bills can be shocking (CHF 200+ for cleaning, CHF 1500+ for crown).</li>
                </ul>

                <div class="important">
                    <strong>💡 Take Care of Your Teeth!</strong>
                    <p>Across Central Europe, prevention is cheaper than treatment. 🦷 Regular brushing, flossing, and checkups are essential. In Switzerland especially, avoid needing major dental work! 💰</p>
                </div>

                <h3>👁️ Part 6: Vision Care and Glasses</h3>
                <ul>
                    <li>🇩🇪 <strong>Germany:</strong> Eye tests covered for children and those with vision problems. Adults pay for tests (~€20-40). Glasses: insurance covers ~€10 for frames every 2 years for severe vision problems. Most people pay out of pocket.</li>
                    <li>🇦🇹 <strong>Austria:</strong> Similar to Germany. Limited coverage for glasses.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> NOT covered by basic insurance for adults. You pay everything yourself. 👓💰</li>
                </ul>

                <h3>🧠 Part 7: Mental Health Services</h3>
                <p>Mental health is increasingly recognized across Central Europe: 💚</p>

                <ul>
                    <li>👨‍⚕️ <strong>Through your GP:</strong> Start with your Hausarzt/general practitioner. They can refer you to specialists (Psychiater, Psychotherapeut).</li>
                    <li>🇩🇪 <strong>Germany:</strong> Psychotherapy covered by GKV. But waiting lists can be long (months). Private therapy available faster but expensive (€80-150/session).</li>
                    <li>🇦🇹 <strong>Austria:</strong> Similar to Germany. Kassenplätze (insurance-covered therapy spots) are limited. Long wait times common.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> Covered by Grundversicherung if prescribed by doctor and provided by licensed therapist. Subject to your deductible.</li>
                    <li>📞 <strong>Crisis Help:</strong> 
                        <ul>
                            <li>🇩🇪 Germany: Telefonseelsorge 0800 111 0 111 or 0800 111 0 222 (24/7)</li>
                            <li>🇦🇹 Austria: Telefonseelsorge 142 (24/7)</li>
                            <li>🇨🇭 Switzerland: Die Dargebotene Hand 143 (24/7)</li>
                        </ul>
                    </li>
                </ul>

                <h3>💡 Part 8: Practical Tips for Central European Healthcare</h3>

                <h4>📋 Before Appointments:</h4>
                <ul>
                    <li>⏰ <strong>Be Punctual:</strong> This is Central Europe! Arrive 5-10 minutes early. Being late may mean losing your appointment.</li>
                    <li>💳 <strong>Bring Your Card:</strong> Gesundheitskarte (Germany), e-card (Austria), insurance card (Switzerland). Always!</li>
                    <li>📝 <strong>Prepare Your Symptoms:</strong> Write down what's wrong, when it started, what makes it better/worse. Doctors appreciate organized patients.</li>
                    <li>🗣️ <strong>Language:</strong> Many doctors speak English in cities, but don't assume. Bring a German-speaking friend if needed, or use translation apps.</li>
                </ul>

                <h4>💊 Managing Medications:</h4>
                <ul>
                    <li>📋 <strong>Keep a List:</strong> Maintain a list of all medications you're taking.</li>
                    <li>🌍 <strong>Generic Names:</strong> Know the generic (chemical) names of your medications, not just brand names which differ by country.</li>
                    <li>🏪 <strong>Apotheke Advice:</strong> Pharmacists are highly trained across Central Europe. Ask them for advice on minor ailments – they can often help without needing a doctor visit.</li>
                </ul>

                <h4>📄 Medical Records:</h4>
                <ul>
                    <li>📋 <strong>Bring Previous Records:</strong> If moving from abroad, bring medical records translated to German if possible.</li>
                    <li>💉 <strong>Vaccination Records:</strong> Keep track of your vaccinations. You may need boosters.</li>
                    <li>📁 <strong>Patient Rights:</strong> You have the right to copies of your medical records in all three countries.</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Healthcare across Central Europe is excellent but navigating it requires understanding each system: 🏥</p>
                    <ul>
                        <li>🇩🇪 <strong>Germany:</strong> Comprehensive statutory insurance for most, automatic coverage, free family coverage. User-friendly once you understand it. ✅</li>
                        <li>🇦🇹 <strong>Austria:</strong> Similar to Germany with the convenient e-card system. Stick to Vertragsärzte to avoid unexpected bills. 💳</li>
                        <li>🇨🇭 <strong>Switzerland:</strong> Excellent care but YOU must arrange and PAY for mandatory insurance. Budget carefully – it's expensive! Choose your deductible and model wisely. 💰</li>
                    </ul>
                    <p>Get insured immediately, find good doctors, take preventive care seriously (especially dental in Switzerland!), and don't hesitate to seek treatment when needed. Your health is your foundation for everything else in Central Europe! 🇩🇪🇦🇹🇨🇭💪</p>
                </div>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom – Mastering Central European Bureaucracy 📋",
            content: `
                <p>Willkommen to perhaps the most "Central European" topic of all: bureaucracy! 📋 If you've heard that Germany, Austria, and Switzerland love paperwork, rules, and proper procedures... well, it's all true. But here's the thing: once you understand the system, it actually works remarkably well. ⚙️</p>
                
                <p>This module will guide you through registration requirements, dealing with government offices (Ämter/Behörden), taxes, residence permits, and all the essential officialdom you'll encounter. The key is being prepared, patient, and following procedures. Let's get you bureaucratically sorted! 💪</p>

                <h3>📋 Part 1: The Foundation – Anmeldung (Registration)</h3>
                <p>The FIRST thing you must do in any Central European country is register your residence. This is not optional! 🚨</p>

                <div class="warning">
                    <strong>⚠️ Anmeldung is MANDATORY!</strong>
                    <ul>
                        <li>🇩🇪 <strong>Germany:</strong> Within 14 days at the Bürgeramt/Einwohnermeldeamt</li>
                        <li>🇦🇹 <strong>Austria:</strong> Within 3 days at the Meldeamt/Gemeindeamt</li>
                        <li>🇨🇭 <strong>Switzerland:</strong> Within 14 days at the Einwohnerkontrolle/Einwohnerdienste (varies by canton)</li>
                    </ul>
                    <p>Failure to register on time can result in fines! Even if you're only staying temporarily, register. 💰</p>
                </div>

                <h4>📄 What You Need for Anmeldung:</h4>
                <ul>
                    <li>🪪 <strong>Valid Passport or ID card</strong></li>
                    <li>🏠 <strong>Rental Contract (Mietvertrag/Wohnungsgeberbestätigung):</strong> In Germany, your landlord must sign a Wohnungsgeberbestätigung (landlord confirmation). In Austria and Switzerland, your rental contract usually suffices.</li>
                    <li>👨‍👩‍👧 <strong>Family members:</strong> If registering family, bring their passports/IDs and marriage/birth certificates</li>
                    <li>📅 <strong>Sometimes:</strong> Passport photos (Germany and Austria sometimes require them)</li>
                </ul>

                <h4>🎫 What You Get:</h4>
                <ul>
                    <li>📋 <strong>Germany:</strong> Meldebescheinigung (registration certificate) – essential for opening bank accounts, getting phone contracts, etc.</li>
                    <li>📋 <strong>Austria:</strong> Meldezettel confirmation</li>
                    <li>📋 <strong>Switzerland:</strong> Confirmation of registration</li>
                    <li>🆔 <strong>Tax ID:</strong> Often assigned automatically upon registration (Steuer-ID in Germany, Steuernummer in Austria, AHV-Nummer in Switzerland)</li>
                </ul>

                <div class="tip">
                    <strong>💡 Book Appointments Early!</strong>
                    <p>In many German and Austrian cities, you need appointments (Termin) for Anmeldung. 📅 Book online as soon as you know your move-in date. Some cities have waits of weeks! Berlin and Munich are notorious for this. In Switzerland, walk-ins are often possible but vary by municipality. 🏃</p>
                </div>

                <h3>🆔 Part 2: Key Identity Documents and Numbers</h3>
                <p>Central European life revolves around various ID numbers. Get these sorted early: 🔢</p>

                <h4>🇩🇪 Germany:</h4>
                <ul>
                    <li>🔢 <strong>Steuer-ID (Tax ID):</strong> 11-digit number. Automatically assigned when you register. Sent by mail. Keep it safe! You need it for work, taxes, everything.</li>
                    <li>💳 <strong>Gesundheitskarte (Health Insurance Card):</strong> From your Krankenkasse after enrolling.</li>
                    <li>🏦 <strong>Bank Account:</strong> Needs Meldebescheinigung. Essential for salary, rent payments, etc.</li>
                    <li>🪪 <strong>Aufenthaltstitel (Residence Permit):</strong> If non-EU, you need this from the Ausländerbehörde (foreigners' office).</li>
                </ul>

                <h4>🇦🇹 Austria:</h4>
                <ul>
                    <li>🔢 <strong>Sozialversicherungsnummer (Social Security Number):</strong> 10 digits. Get it from ÖGK when you start working.</li>
                    <li>📋 <strong>Steuernummer (Tax Number):</strong> From the Finanzamt (tax office).</li>
                    <li>💳 <strong>e-card:</strong> Health insurance card from ÖGK.</li>
                    <li>🪪 <strong>Aufenthaltstitel:</strong> If non-EU/EEA, from MA35 (Vienna) or local authorities elsewhere.</li>
                </ul>

                <h4>🇨🇭 Switzerland:</h4>
                <ul>
                    <li>🔢 <strong>AHV-Nummer (13-digit):</strong> Your social security number. Assigned upon registration. You need it for everything!</li>
                    <li>🪪 <strong>Residence Permit (Aufenthaltsbewilligung):</strong> B-permit (temporary), C-permit (permanent), L-permit (short-term). EU/EFTA citizens get permits more easily. Non-EU much harder!</li>
                    <li>🏦 <strong>Bank Account:</strong> Easier than in Germany/Austria but you still need proof of residence.</li>
                </ul>

                <h3>🏢 Part 3: Dealing with Ämter/Behörden (Government Offices)</h3>
                <p>Government offices across Central Europe share certain characteristics. Here's how to navigate them successfully: 🎯</p>

                <h4>📅 The Appointment System (Terminvereinbarung):</h4>
                <ul>
                    <li>⏰ <strong>Most services require appointments now:</strong> Book online via the office's website. Some still allow walk-ins but expect long waits.</li>
                    <li>📞 <strong>Booking:</strong> Online preferred. Phone bookings also possible. In Switzerland, varies by canton – some are walk-in friendly.</li>
                    <li>🕐 <strong>Be Punctual:</strong> Arrive 5-10 minutes early. Bringing late may mean losing your slot and rebooking!</li>
                    <li>⏳ <strong>Wait Times:</strong> Even with appointments, expect some waiting. Bring a book or phone to occupy yourself.</li>
                </ul>

                <h4>📄 The Document Strategy:</h4>
                <ul>
                    <li>📋 <strong>Bring EVERYTHING:</strong> Original documents AND copies. Germans/Austrians/Swiss love paper trails!</li>
                    <li>🪪 <strong>ID Always:</strong> Passport or national ID card. Non-negotiable.</li>
                    <li>📝 <strong>Completed Forms:</strong> Download forms from the website and fill them in beforehand. Neat handwriting or typed is best.</li>
                    <li>📸 <strong>Photos:</strong> Bring extra passport photos. You never know when they'll be needed.</li>
                    <li>💰 <strong>Payment Method:</strong> Some offices only accept cash! Others card only. Check beforehand.</li>
                    <li>🔄 <strong>Certified Copies (Beglaubigte Kopien):</strong> Sometimes required. Get them from notaries (Notar) or sometimes from the office itself.</li>
                </ul>

                <h4>🗣️ Communication Tips:</h4>
                <ul>
                    <li>🇩🇪 <strong>Language:</strong> German is essential for most officialdom. English is hit-or-miss. Bring a German-speaking friend if needed.</li>
                    <li>🤝 <strong>Polite but Direct:</strong> "Guten Tag. Ich habe einen Termin um..." Be polite, professional, but get to the point.</li>
                    <li>😤 <strong>Stay Calm:</strong> Even if frustrated, remain polite. Getting emotional or angry will not help and may make things worse.</li>
                    <li>📋 <strong>Get It in Writing:</strong> If promised something verbally, ask for written confirmation (schriftliche Bestätigung).</li>
                    <li>📧 <strong>Follow-up:</strong> If you don't hear back in promised timeframe, follow up politely by email or phone.</li>
                </ul>

                <div class="important">
                    <strong>🎯 Understanding the German "Amtsdeutsch"</strong>
                    <p>Official German (Amtsdeutsch/Behördensprache) is formal, complex, and full of compound words. 📚 Don't be intimidated! Common terms:</p>
                    <ul>
                        <li><strong>Bescheid:</strong> Official decision/notice</li>
                        <li><strong>Bearbeitungszeit:</strong> Processing time</li>
                        <li><strong>Nachweis:</strong> Proof/evidence</li>
                        <li><strong>Frist:</strong> Deadline</li>
                        <li><strong>Antrag:</strong> Application</li>
                        <li><strong>Einspruch/Widerspruch:</strong> Objection/appeal</li>
                    </ul>
                    <p>Use online translation and ask for clarification if you don't understand something! 🔍</p>
                </div>

                <h3>💰 Part 4: Taxes (Steuern) – Understanding the System</h3>
                <p>Taxes across Central Europe are comprehensive but fair. Here's what you need to know: 📊</p>

                <h4>🇩🇪 Germany:</h4>
                <ul>
                    <li>📊 <strong>Income Tax (Einkommensteuer):</strong> Progressive 0-45%. If employed, automatically deducted (Lohnsteuer).</li>
                    <li>📋 <strong>Tax Classes (Steuerklasse):</strong> I (single), II (single parent), III/IV/V (married combos), VI (second job). Your class affects deductions.</li>
                    <li>📝 <strong>Tax Return (Steuererklärung):</strong> Not always mandatory for employees, but usually worth doing! You can reclaim expenses and often get refunds. File by July 31st (or later with extension). Use ELSTER (online system) or Steuerberater (tax advisor).</li>
                    <li>⛪ <strong>Church Tax (Kirchensteuer):</strong> 8-9% of income tax if you're registered as Catholic or Protestant. You can opt out (Kirchenaustritt) at the Standesamt.</li>
                    <li>🤝 <strong>Solidarity Surcharge (Solidaritätszuschlag):</strong> Abolished for most people in 2021. Only applies to very high earners now.</li>
                </ul>

                <h4>🇦🇹 Austria:</h4>
                <ul>
                    <li>📊 <strong>Income Tax (Einkommensteuer):</strong> Progressive 0-55% (highest bracket). Automatically deducted for employees (Lohnsteuer).</li>
                    <li>📝 <strong>Tax Return (Arbeitnehmerveranlagung):</strong> Voluntary for employees if only one employer. File within 5 years. Often worthwhile for refunds!</li>
                    <li>💼 <strong>FinanzOnline:</strong> Austria's online tax portal. Create an account to file electronically.</li>
                    <li>⛪ <strong>Church Tax (Kirchenbeitrag):</strong> Voluntary contribution requested by churches, not automatic deduction like Germany. You can decline.</li>
                </ul>

                <h4>🇨🇭 Switzerland:</h4>
                <ul>
                    <li>📊 <strong>Income Tax:</strong> Federal tax (low) + cantonal tax (varies wildly!) + municipal tax. Total can be 10-40%+ depending where you live. Zug and Schwyz = low tax. Geneva and Basel-Stadt = higher.</li>
                    <li>📋 <strong>Direct Deduction vs. Annual Payment:</strong> If employed, tax withheld monthly (Quellensteuer) in most cantons. Swiss citizens and permit C holders file annual tax returns.</li>
                    <li>📝 <strong>Tax Declaration (Steuererklärung):</strong> Due around March-April (deadlines vary by canton). Electronic filing available in most cantons.</li>
                    <li>💰 <strong>Wealth Tax:</strong> Switzerland taxes net wealth (assets minus debts). Rate varies by canton. Unique to Switzerland in this region!</li>
                    <li>📊 <strong>Tax Optimization:</strong> Legal tax optimization is common and accepted. Deductions for commuting, professional development, charitable giving, pension contributions (Säule 3a), etc.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Consider a Steuerberater (Tax Advisor)</strong>
                    <p>Especially in your first years, hiring a tax advisor can be worth it. 💼 They'll ensure you claim all deductions, file correctly, and can save you more than their fee costs. In Germany: ~€100-300. Austria: similar. Switzerland: ~CHF 300-800. Complex situations (self-employed, multiple income sources) definitely warrant professional help! 🎯</p>
                </div>

                <h3>🪪 Part 5: Residence Permits for Non-EU/EEA Citizens</h3>
                <p>If you're from outside the EU/EEA, residence permits are critical: 🌍</p>

                <h4>🇩🇪 Germany:</h4>
                <ul>
                    <li>🏢 <strong>Office:</strong> Ausländerbehörde (foreigners' office). Book appointment EARLY – waits can be months in big cities!</li>
                    <li>📋 <strong>Common Permits:</strong>
                        <ul>
                            <li>Aufenthaltserlaubnis (temporary residence): Work, family reunification, study</li>
                            <li>Niederlassungserlaubnis (permanent residence): After 5 years usually</li>
                            <li>Blaue Karte EU (EU Blue Card): For highly qualified workers</li>
                        </ul>
                    </li>
                    <li>📄 <strong>Documents Needed:</strong> Passport, biometric photos, proof of income/insurance/housing, contract (work/university), application forms. Requirements vary by permit type.</li>
                    <li>💰 <strong>Fees:</strong> €100+ depending on permit type.</li>
                </ul>

                <h4>🇦🇹 Austria:</h4>
                <ul>
                    <li>🏢 <strong>Office:</strong> MA35 in Vienna, local Bezirkshauptmannschaft elsewhere.</li>
                    <li>📋 <strong>Common Permits:</strong>
                        <ul>
                            <li>Aufenthaltsbewilligung (temporary)</li>
                            <li>Niederlassungsbewilligung (permanent)</li>
                            <li>Rot-Weiß-Rot Karte (Red-White-Red Card): For skilled workers – points-based</li>
                        </ul>
                    </li>
                    <li>📄 <strong>Requirements:</strong> Similar to Germany. Health insurance, sufficient income, housing, clear criminal record, etc.</li>
                    <li>💰 <strong>Fees:</strong> Vary by type, €50-200+.</li>
                </ul>

                <h4>🇨🇭 Switzerland:</h4>
                <ul>
                    <li>🏢 <strong>Office:</strong> Cantonal migration office (Migrationsamt).</li>
                    <li>⚠️ <strong>Difficult for Non-EU:</strong> Switzerland has strict immigration quotas. Work permits require employer sponsorship and justification that no EU/Swiss candidate was available.</li>
                    <li>📋 <strong>Permit Types:</strong>
                        <ul>
                            <li>L-permit: Short-term (up to 1 year)</li>
                            <li>B-permit: Residence/work (initially 1 year, renewable)</li>
                            <li>C-permit: Permanent residence (after 5-10 years)</li>
                        </ul>
                    </li>
                    <li>📄 <strong>Documents:</strong> Work contract, proof of qualification, employer justification, passport, housing confirmation.</li>
                    <li>💰 <strong>Fees:</strong> Vary by canton, CHF 100-300+.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Don't Let Your Permit Expire!</strong>
                    <p>Apply for renewal/extension BEFORE expiry! 📅 Late applications can cause serious problems. In Germany and Austria, apply 6-8 weeks before expiry. In Switzerland, timing varies by canton but don't wait until the last week! Missing deadlines can mean losing status. 🚨</p>
                </div>

                <h3>🏢 Part 6: Other Important Offices and Services</h3>

                <h4>🏛️ Finanzamt (Tax Office):</h4>
                <ul>
                    <li>📋 <strong>What:</strong> Handles tax returns, tax number issuance, tax assessments.</li>
                    <li>🇩🇪 <strong>Germany:</strong> Use ELSTER online for most interactions. Physical visits rare.</li>
                    <li>🇦🇹 <strong>Austria:</strong> FinanzOnline is your portal. Regional Finanzämter for in-person needs.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> Cantonal tax offices. Varies significantly by canton.</li>
                </ul>

                <h4>🏛️ Standesamt (Registry Office):</h4>
                <ul>
                    <li>📋 <strong>What:</strong> Civil marriages, birth registration, death certificates, church exit.</li>
                    <li>💒 <strong>Marriage:</strong> Only civil marriage is legally recognized. Religious ceremonies optional and after civil.</li>
                    <li>⛪ <strong>Church Exit (Kirchenaustritt):</strong> Done here in Germany and Austria to stop church tax.</li>
                </ul>

                <h4>🏛️ Arbeitsagentur (Germany) / AMS (Austria) / RAV (Switzerland):</h4>
                <ul>
                    <li>📋 <strong>What:</strong> Employment agency, unemployment insurance, job search support.</li>
                    <li>🚨 <strong>If Unemployed:</strong> Register IMMEDIATELY! Benefits depend on quick registration.</li>
                    <li>💼 <strong>Services:</strong> Job listings, career counseling, training courses, unemployment benefits.</li>
                </ul>

                <h4>🏛️ Sozialamt (Social Welfare Office):</h4>
                <ul>
                    <li>📋 <strong>What:</strong> Last resort financial assistance, housing support, emergency help.</li>
                    <li>💰 <strong>When:</strong> If you're in genuine need and have exhausted other options. Requirements are strict.</li>
                </ul>

                <h3>📜 Part 7: Dealing with Bureaucratic Challenges</h3>

                <h4>⏰ When Things Take Forever:</h4>
                <ul>
                    <li>📊 <strong>Expect Delays:</strong> Bearbeitungszeiten (processing times) can be weeks or months. Berlin's Bürgeramt, Vienna's MA35, and some Swiss cantonal offices are notorious.</li>
                    <li>📧 <strong>Follow Up:</strong> After quoted processing time passes, politely inquire about status.</li>
                    <li>🗂️ <strong>Track Everything:</strong> Keep copies of all submissions, note dates, keep reference numbers (Aktenzeichen).</li>
                </ul>

                <h4>❌ When You Get a Negative Decision (Ablehnungsbescheid):</h4>
                <ul>
                    <li>📋 <strong>Read Carefully:</strong> The Bescheid will explain the decision and your rights.</li>
                    <li>⏰ <strong>Objection Deadline:</strong> Usually 1 month (Widerspruchsfrist). Don't miss it!</li>
                    <li>📝 <strong>Widerspruch/Einspruch:</strong> You can object. State your reasons clearly, provide additional evidence.</li>
                    <li>💼 <strong>Get Help:</strong> Consider a lawyer (Anwalt) or specialized advisor, especially for residence permit refusals.</li>
                </ul>

                <h4>🆘 When You're Completely Lost:</h4>
                <ul>
                    <li>🤝 <strong>Migrant Support Organizations:</strong> Many cities have integration centers (Integrationszentrum) that help with bureaucracy. Free or low-cost!</li>
                    <li>💼 <strong>Professional Help:</strong> Steuerberater for taxes, immigration lawyers for residence permits, social workers for welfare issues.</li>
                    <li>👥 <strong>Expat Groups:</strong> Online forums and Facebook groups for your city. Others have faced the same issues!</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Secret to Bureaucratic Success</strong>
                    <p>Central European bureaucracy is actually logical once you understand it: ⚙️</p>
                    <ol>
                        <li>📋 <strong>Follow procedures exactly</strong> – don't improvise</li>
                        <li>📄 <strong>Bring complete documentation</strong> – they won't process incomplete applications</li>
                        <li>⏰ <strong>Be punctual and meet deadlines</strong> – this matters enormously</li>
                        <li>😊 <strong>Be polite but persistent</strong> – rudeness gets nowhere, but polite persistence works</li>
                        <li>📝 <strong>Document everything</strong> – keep paper trails</li>
                    </ol>
                    <p>The system works, but it requires playing by the rules. Do that, and you'll navigate it successfully! 🎯</p>
                </div>

                <h3>💻 Part 8: Digital Government Services</h3>
                <p>Central Europe is increasingly digitizing bureaucracy: 🖥️</p>

                <h4>🇩🇪 Germany:</h4>
                <ul>
                    <li>💻 <strong>ELSTER:</strong> Online tax filing. Essential!</li>
                    <li>📱 <strong>Bürgerserviceportal:</strong> Many cities have online portals for appointments and services.</li>
                    <li>🆔 <strong>eID Function:</strong> New ID cards have electronic function for online identification.</li>
                </ul>

                <h4>🇦🇹 Austria:</h4>
                <ul>
                    <li>💻 <strong>FinanzOnline:</strong> Tax portal.</li>
                    <li>🆔 <strong>Bürgerkarte/Handy-Signatur:</strong> Digital signature for official transactions.</li>
                    <li>📱 <strong>oesterreich.gv.at:</strong> Central portal for government services.</li>
                </ul>

                <h4>🇨🇭 Switzerland:</h4>
                <ul>
                    <li>💻 <strong>Cantonal Portals:</strong> Each canton has its own digital services. Quality varies!</li>
                    <li>📋 <strong>eUmzug:</strong> Electronic change of address notification across cantons.</li>
                    <li>🆔 <strong>SwissID:</strong> Digital identity for online services.</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Central European bureaucracy has a reputation, but it's manageable with the right approach: 📋</p>
                    <ul>
                        <li>✅ <strong>Register immediately</strong> – Anmeldung is your foundation for everything</li>
                        <li>📄 <strong>Collect key documents and numbers</strong> – Steuer-ID, AHV-Nummer, health insurance</li>
                        <li>⏰ <strong>Book appointments early</strong> – don't wait for emergencies</li>
                        <li>📋 <strong>Bring complete documentation</strong> – and copies!</li>
                        <li>🗣️ <strong>Learn German</strong> – essential for navigating officialdom</li>
                        <li>😊 <strong>Stay patient and polite</strong> – it pays off</li>
                        <li>💼 <strong>Get professional help when needed</strong> – tax advisors, lawyers for complex issues</li>
                        <li>⏳ <strong>Expect delays</strong> – processing times are real</li>
                    </ul>
                    <p>Germany 🇩🇪, Austria 🇦🇹, and Switzerland 🇨🇭 all have thorough, rules-based systems. They can seem slow and document-heavy, but they're also fair, transparent, and ultimately functional. Master the bureaucracy, and you've mastered a key part of Central European life! 🇩🇪🇦🇹🇨🇭✨</p>
                </div>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools – Navigating Central European School Systems 📚",
            content: `
                <p>Guten Tag! If you're moving to Central Europe with children, or planning to further your own education, understanding the education system is crucial. 🎓 Germany 🇩🇪, Austria 🇦🇹, and Switzerland 🇨🇭 all have excellent, well-organized education systems – but they work quite differently from many other countries. Early tracking, strong vocational education, and high academic standards are common across the region. ⭐</p>
                
                <p>This module will guide you through kindergartens, primary schools, secondary education options, vocational training (the famous dual system!), universities, and how to navigate school enrollment. Let's get your family educated! 💪</p>

                <h3>🌍 Part 1: Overview – Three Similar but Different Systems</h3>
                <p>While all Central European countries value education highly, their systems have important differences: 📚</p>

                <div class="important">
                    <strong>💡 Key Characteristics Across Central Europe</strong>
                    <ul>
                        <li><strong>High Quality:</strong> All three countries rank highly in international education assessments (PISA scores). Education is taken seriously! 📊</li>
                        <li><strong>Early Tracking:</strong> Students are sorted into different school types based on ability relatively early (age 10-12). This is controversial but deeply embedded. 🎯</li>
                        <li><strong>Strong Vocational Track:</strong> The dual education system (Ausbildung/Lehre) combining work and school is highly developed. Not everyone goes to university! 🔧</li>
                        <li><strong>Public Schools Dominate:</strong> Most students attend free public schools. Private schools exist but are less common than in many countries. 🏫</li>
                        <li><strong>Federalism (Germany & Switzerland):</strong> Education is controlled at state (Bundesland) or cantonal level, creating significant regional variation. Austria is more centralized. 🗺️</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Register Your Children Immediately!</strong>
                    <p>School attendance is mandatory across Central Europe! 🚨 When you register your residence (Anmeldung), you must also register school-age children with local schools. Failure to enroll children in school can result in fines and legal action. Compulsory education starts at age 6 (sometimes 5) and runs until age 15-16 in most regions. 📅</p>
                </div>

                <h3>👶 Part 2: Early Childhood Education (Age 3-6)</h3>

                <h4>🇩🇪 Germany – Kindergarten:</h4>
                <ul>
                    <li>🎨 <strong>Ages 3-6 (sometimes 1-6):</strong> Kindergarten is optional but most children attend.</li>
                    <li>🆓 <strong>Increasingly Free:</strong> Many Bundesländer now offer free Kindergarten (at least part-time). Full-day may cost €100-300/month depending on region and income.</li>
                    <li>🎪 <strong>Focus:</strong> Play-based learning, social skills, creativity. Less academic than many countries!</li>
                    <li>📝 <strong>Enrollment:</strong> Apply directly to Kindergartens (Kitas). Waiting lists can be long in cities! Apply early (even before birth in some areas like Munich!).</li>
                    <li>🏫 <strong>Types:</strong> Public (städtisch), church-affiliated (katholisch/evangelisch), Waldorf, Montessori, private.</li>
                </ul>

                <h4>🇦🇹 Austria – Kindergarten:</h4>
                <ul>
                    <li>🎨 <strong>Ages 3-6:</strong> Similar to Germany. Kindergarten is standard.</li>
                    <li>🆓 <strong>Free in Many Cases:</strong> Most Bundesländer offer free half-day Kindergarten. Full-day costs vary.</li>
                    <li>📚 <strong>Last Year Mandatory:</strong> The final year before school (age 5-6) is compulsory in most regions.</li>
                    <li>📝 <strong>Enrollment:</strong> Through local government (Gemeinde/Stadt). Apply well in advance!</li>
                </ul>

                <h4>🇨🇭 Switzerland – Kindergarten:</h4>
                <ul>
                    <li>🎨 <strong>Ages 4-6 (varies by canton):</strong> 1-2 years of Kindergarten/école enfantine/scuola dell'infanzia.</li>
                    <li>🆓 <strong>Free and Mandatory:</strong> Kindergarten is free and compulsory in most cantons now!</li>
                    <li>📍 <strong>Cantonal Variations:</strong> Age of entry, duration, and structure vary by canton. Check your local system!</li>
                    <li>📝 <strong>Automatic Enrollment:</strong> Usually automatic when you register residence. You'll be notified which school your child is assigned to based on address.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Language Immersion at Kindergarten</strong>
                    <p>Kindergarten is excellent for language acquisition! 🗣️ Children pick up German (or French/Italian in Switzerland) quickly through play. Don't worry if they start with no German – they'll learn fast. Teachers are experienced with multilingual children. 🌍</p>
                </div>

                <h3>📚 Part 3: Primary School (Grundschule/Primarschule) Age 6-10/12</h3>

                <h4>🇩🇪 Germany – Grundschule (Ages 6-10):</h4>
                <ul>
                    <li>📖 <strong>Years 1-4:</strong> All children attend Grundschule together (some Bundesländer extend to year 6).</li>
                    <li>🏫 <strong>Assignment:</strong> Usually assigned based on residence (Schulbezirk/catchment area).</li>
                    <li>🆓 <strong>Free:</strong> Public Grundschulen are free. Books and materials mostly free too.</li>
                    <li>📊 <strong>Subjects:</strong> German, Math, Sachunterricht (science/social studies), Art, Music, P.E., sometimes English from grade 3.</li>
                    <li>🎓 <strong>Crucial Years:</strong> Grades 3-4 determine which secondary school type (Gymnasium, Realschule, Hauptschule) your child can attend! Pressure can be high. 📈</li>
                    <li>🏠 <strong>Homework:</strong> Generally light in early years, increasing by grade 3-4.</li>
                </ul>

                <h4>🇦🇹 Austria – Volksschule (Ages 6-10):</h4>
                <ul>
                    <li>📖 <strong>Years 1-4:</strong> Volksschule for all children.</li>
                    <li>🏫 <strong>Very Similar to Germany:</strong> Structure, subjects, and approach largely parallel German Grundschule.</li>
                    <li>🆓 <strong>Free Public Education:</strong> Books, materials provided.</li>
                    <li>📊 <strong>Grade 4 Decision:</strong> Teachers' recommendations and grades determine secondary school options (Gymnasium vs. Mittelschule).</li>
                </ul>

                <h4>🇨🇭 Switzerland – Primarschule (Ages 6-12):</h4>
                <ul>
                    <li>📖 <strong>6 Years:</strong> Primarschule typically runs 6 years (after Kindergarten).</li>
                    <li>🗺️ <strong>Cantonal Differences:</strong> Structure, curriculum, and even textbooks vary by canton! HarmoS is an attempt at harmonization but implementation varies.</li>
                    <li>🆓 <strong>Free and High Quality:</strong> Public schools are excellent.</li>
                    <li>📚 <strong>Subjects:</strong> Language (German, French, or Italian depending on canton), Math, Sciences, Music, Art, P.E. Foreign languages start early (often English and another Swiss national language).</li>
                    <li>🏠 <strong>Short Days:</strong> Swiss primary school days are often short – children may come home for lunch! After-school care (Tagesschule/Mittagstisch) available but may cost extra.</li>
                </ul>

                <h3>🎓 Part 4: Secondary Education – The Tracking System</h3>
                <p>Here's where Central European systems differ most from Anglo-American models: after primary school, students are tracked into different school types. 🎯</p>

                <h4>🇩🇪 Germany – Three-Track System (After Grade 4/6):</h4>
                <ul>
                    <li>🏆 <strong>Gymnasium (Ages 10-18/19):</strong> Academic track leading to Abitur (university entrance qualification). Most demanding. ~40% of students. Subjects include advanced sciences, languages, humanities. Leads to university. 🎓</li>
                    <li>📊 <strong>Realschule (Ages 10-16):</strong> Intermediate track. Leads to Mittlere Reife (intermediate school leaving certificate). ~25% of students. Can continue to Fachoberschule for Fachabitur, or enter Ausbildung. 💼</li>
                    <li>🔧 <strong>Hauptschule (Ages 10-15/16):</strong> Basic track. Leads to Hauptschulabschluss. ~15% of students. Typically leads to Ausbildung (vocational training). Being phased out in some Bundesländer. 🛠️</li>
                    <li>🔄 <strong>Gesamtschule:</strong> Comprehensive school combining all tracks under one roof. Exists in some Bundesländer. Students still stream into different levels. 🏫</li>
                    <li>↗️ <strong>Mobility:</strong> It's possible but not easy to switch tracks upward. Switching down is easier. System is criticized for limiting social mobility. ⚠️</li>
                </ul>

                <h4>🇦🇹 Austria – Two-Track System (After Grade 4):</h4>
                <ul>
                    <li>🏆 <strong>AHS (Allgemeinbildende Höhere Schule) – Gymnasium (Ages 10-18):</strong> Academic track leading to Matura (university entrance). Unterstufe (grades 5-8) then Oberstufe (grades 9-12). ~35% of students. 🎓</li>
                    <li>🏫 <strong>Mittelschule (Ages 10-14):</strong> Replaces the old Hauptschule. Leads to further vocational education or can transfer to AHS-Oberstufe. ~65% of students. 📚</li>
                    <li>💼 <strong>After Mittelschule:</strong> Students can enter Lehre (apprenticeship), BHS (vocational secondary school leading to Matura + vocational qualification), or other options. 🔧</li>
                </ul>

                <h4>🇨🇭 Switzerland – Complex Cantonal Systems (After Age 12):</h4>
                <ul>
                    <li>🗺️ <strong>Huge Variation by Canton:</strong> Names and structures differ! German-speaking: Sekundarschule, Bezirksschule, Gymnasium. French-speaking: Collège, Cycle d'orientation. Italian-speaking: Scuola media.</li>
                    <li>🎯 <strong>Generally 2-3 Levels:</strong> 
                        <ul>
                            <li>Highest: Leads to Gymnasium/Matura (university track) 🏆</li>
                            <li>Middle: Prepares for Berufslehre (apprenticeships) or further vocational schools 💼</li>
                            <li>Basic: Prepares for practical apprenticeships 🔧</li>
                        </ul>
                    </li>
                    <li>📊 <strong>Assessment:</strong> Based on grades, teacher recommendations, and sometimes entrance exams. Systems vary by canton!</li>
                    <li>🔄 <strong>Permeability:</strong> Switching levels is possible but depends on canton and school.</li>
                </ul>

                <div class="important">
                    <strong>⚠️ The Tracking Controversy</strong>
                    <p>Early tracking is criticized for perpetuating social inequality. 📊 Children from immigrant or lower-income families are disproportionately steered away from Gymnasium. Be aware of this bias and advocate for your children if needed! Request meetings with teachers, ask about options for advancing tracks, and consider tutoring if your child is capable but needs language support. 💪</p>
                </div>

                <h3>🔧 Part 5: Vocational Education – The Dual System (Ausbildung/Lehre)</h3>
                <p>This is where Central Europe truly shines! The dual education system is world-renowned: 🌟</p>

                <h4>🇩🇪 Germany – Ausbildung (Ages 15-19+):</h4>
                <ul>
                    <li>💼 <strong>What Is It:</strong> Apprenticeship combining practical work in a company (3-4 days/week) with theoretical learning at Berufsschule (1-2 days/week). 2-3.5 years typically.</li>
                    <li>💰 <strong>You Get Paid:</strong> Apprentices earn ~€800-1,300/month (varies by field and year). Not much but it's income while learning!</li>
                    <li>🏆 <strong>Recognized Qualification:</strong> Over 300 recognized training occupations. Certificate is respected across Germany and EU.</li>
                    <li>🔧 <strong>Popular Fields:</strong> Mechatronics, electronics, IT, healthcare (nursing), retail/commercial, hospitality, crafts (plumbing, electrical, carpentry).</li>
                    <li>📈 <strong>Career Path:</strong> After Ausbildung, you're a Fachkraft (skilled worker). Can advance to Meister (master), Techniker, or Fachwirt. Or go to university!</li>
                    <li>🔍 <strong>Finding Ausbildung:</strong> Companies advertise open positions. Apply like a job! Good grades and motivation matter.</li>
                </ul>

                <h4>🇦🇹 Austria – Lehre (Ages 15-19):</h4>
                <ul>
                    <li>💼 <strong>Very Similar to Germany:</strong> Dual system combining company work and Berufsschule.</li>
                    <li>🏢 <strong>Regulated by Wirtschaftskammer:</strong> WKO (Chamber of Commerce) oversees the system.</li>
                    <li>💰 <strong>Apprentice Pay:</strong> Lower than Germany but still paid. Increases each year of training.</li>
                    <li>📚 <strong>Lehre mit Matura:</strong> Option to earn Matura (university entrance) alongside vocational training. Takes longer but opens university path!</li>
                    <li>🎓 <strong>Or BHS:</strong> Berufsbildende Höhere Schule – vocational secondary school (ages 14-19) leading to both Matura AND vocational qualification. Very popular!</li>
                </ul>

                <h4>🇨🇭 Switzerland – Berufslehre (Ages 15-19):</h4>
                <ul>
                    <li>💼 <strong>Most Popular Path:</strong> ~2/3 of Swiss youth choose vocational training! It's highly respected, not seen as second-class. 🏆</li>
                    <li>🏢 <strong>Company-Based:</strong> Apprentices work for companies 3-4 days/week, attend Berufsfachschule 1-2 days. 3-4 years typically.</li>
                    <li>💰 <strong>Competitive Salaries:</strong> Swiss apprentices can earn CHF 500-1,500/month depending on field and year. Higher than Germany/Austria!</li>
                    <li>🔧 <strong>Over 200 Professions:</strong> Everything from banking to carpentry to IT to healthcare.</li>
                    <li>🎓 <strong>Berufsmaturität:</strong> Option to earn Berufsmatura alongside Lehre – this allows university access (especially Universities of Applied Sciences/Fachhochschulen).</li>
                    <li>📈 <strong>Excellent Outcomes:</strong> Swiss vocational graduates have very low unemployment and good career prospects. 📊</li>
                </ul>

                <div class="tip">
                    <strong>💡 Don't Dismiss Vocational Education!</strong>
                    <p>In Central Europe, vocational training is NOT inferior to university! 🚫 Many vocational graduates earn more than university graduates. The system produces highly skilled workers who are in demand. Master craftspeople (Meister) command great respect and excellent salaries. If your child is practically minded, vocational education may be a better path than forcing academic study. 🎯</p>
                </div>

                <h3>🎓 Part 6: University Education (Higher Education)</h3>

                <h4>🇩🇪 Germany:</h4>
                <ul>
                    <li>🆓 <strong>Tuition-Free (Mostly):</strong> Public universities charge little/no tuition (~€300/semester admin fees). Education is seen as public good! 🎉</li>
                    <li>📚 <strong>Types:</strong>
                        <ul>
                            <li>Universität: Research-focused, academic. Requires Abitur. Bachelor 3 years, Master 2 years. 🎓</li>
                            <li>Fachhochschule (University of Applied Sciences): More practical, applied. Requires Abitur or Fachabitur. 💼</li>
                        </ul>
                    </li>
                    <li>📝 <strong>Numerus Clausus (NC):</strong> Limited spots in popular subjects (medicine, psychology, law). Admission by Abitur grade. Very competitive! 📊</li>
                    <li>🌍 <strong>International Students:</strong> Non-EU students may need visa and proof of financial means (~€11,000/year blocked account). Language requirements vary (often German for Bachelor, English for some Masters).</li>
                    <li>🏠 <strong>Student Life:</strong> Housing can be difficult in university cities. Student dormitories (Studentenwohnheim) have long waiting lists. Shared apartments (WG – Wohngemeinschaft) common.</li>
                </ul>

                <h4>🇦🇹 Austria:</h4>
                <ul>
                    <li>🆓 <strong>Low Tuition:</strong> ~€750/semester for non-EU students. EU students free (if studying within normal duration).</li>
                    <li>🎓 <strong>Similar to Germany:</strong> Universities and Fachhochschulen. Bachelor + Master system.</li>
                    <li>📝 <strong>Open Access (Mostly):</strong> Most programs open to anyone with Matura. Some popular fields (medicine, psychology) have entrance exams.</li>
                    <li>🏙️ <strong>Vienna:</strong> Huge student city. Relatively affordable compared to other European capitals.</li>
                </ul>

                <h4>🇨🇭 Switzerland:</h4>
                <ul>
                    <li>💰 <strong>Low Tuition by Swiss Standards:</strong> CHF 500-800/semester at public universities. Much less than private but still more than Germany/Austria.</li>
                    <li>🎓 <strong>Types:</strong>
                        <ul>
                            <li>Universitäten: Academic, research-focused. Require Matura. ETH Zurich and EPFL Lausanne are world-renowned! 🏆</li>
                            <li>Fachhochschulen: Practical, require Berufsmatura or Matura + practical experience. 💼</li>
                        </ul>
                    </li>
                    <li>🌍 <strong>International Students:</strong> English-taught programs exist (especially Masters). Admission requirements vary. Expensive cost of living (CHF 20,000-30,000/year)! 💸</li>
                    <li>📚 <strong>Excellent Quality:</strong> Swiss universities rank highly globally. Small class sizes, good professor access. 📊</li>
                </ul>

                <div class="important">
                    <strong>🎯 Recognition of Foreign Qualifications</strong>
                    <p>If you have degrees from outside Central Europe, get them recognized! 📋</p>
                    <ul>
                        <li>🇩🇪 Germany: anabin.kmk.org database. Regulated professions (doctor, lawyer, teacher) need formal recognition from authorities.</li>
                        <li>🇦🇹 Austria: ENIC-NARIC Austria handles recognition.</li>
                        <li>🇨🇭 Switzerland: swissuniversities.ch or SBFI for recognition.</li>
                    </ul>
                    <p>Process can take months. Start early if you need recognition for work! 💼</p>
                </div>

                <h3>📝 Part 7: Enrolling Your Children in School</h3>

                <h4>🔍 Step-by-Step Process:</h4>
                <ol>
                    <li>🏠 <strong>Register Your Residence:</strong> First step for everything! You'll declare school-age children during Anmeldung.</li>
                    <li>📋 <strong>School Assignment:</strong> Primary schools usually assign based on address (Schulbezirk). You'll be notified which school.</li>
                    <li>📞 <strong>Contact the School:</strong> Call or visit to arrange enrollment appointment.</li>
                    <li>📄 <strong>Bring Documents:</strong>
                        <ul>
                            <li>Birth certificate (translated to German if necessary)</li>
                            <li>Vaccination records (important!)</li>
                            <li>Passport/ID for child and parents</li>
                            <li>Proof of residence (Meldebescheinigung)</li>
                            <li>Previous school records if coming from abroad</li>
                        </ul>
                    </li>
                    <li>🗣️ <strong>Language Assessment:</strong> If child doesn't speak German, school may assess level and offer language support (DaZ – Deutsch als Zweitsprache classes).</li>
                    <li>📚 <strong>Class Placement:</strong> Based on age and prior schooling. May repeat a grade if coming mid-year or language skills need development.</li>
                    <li>✅ <strong>Start School:</strong> Schools provide lists of needed supplies. Books often provided free in public schools.</li>
                </ol>

                <h4>🗣️ Language Support:</h4>
                <ul>
                    <li>📚 <strong>Integration Classes:</strong> Many schools offer special German classes for non-native speakers (DaZ/DaF – Deutsch als Zweitsprache/Fremdsprache).</li>
                    <li>🏫 <strong>Willkommensklassen (Germany):</strong> Some schools have dedicated "welcome classes" for newly arrived children to intensively learn German before joining regular classes.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> Cantonal systems vary. Most offer German support. In multilingual cantons, check which language of instruction the school uses!</li>
                    <li>💪 <strong>Be Proactive:</strong> Ask about all support options. Private tutoring can also help with transition.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The Schultüte Tradition 🎉</strong>
                    <p>In Germany and Austria, children starting first grade receive a Schultüte (school cone) – a large decorated cone filled with school supplies, sweets, and small gifts. 🍬 Parents prepare these. It's a big tradition marking the start of formal education! Make one for your child to fit in on their first day. 🎨</p>
                </div>

                <h3>🏫 Part 8: School Culture and Parent Involvement</h3>

                <h4>📅 School Structure:</h4>
                <ul>
                    <li>⏰ <strong>School Hours:</strong> Often 8:00 AM - 1:00 PM for primary (half-day traditional model). Ganztagsschule (full-day school) increasingly available. Varies by school and region.</li>
                    <li>🏠 <strong>Homework:</strong> Expected from early grades. Parents are expected to support but not do it for children!</li>
                    <li>📅 <strong>School Year:</strong> Starts in August/September. Summer holidays ~6 weeks. Plus Christmas, Easter, and other breaks. Dates vary by region!</li>
                    <li>📊 <strong>Grading:</strong> 
                        <ul>
                            <li>Germany/Austria: 1 (excellent) to 6 (fail). Lower numbers are better!</li>
                            <li>Switzerland: Often 6 (best) to 1 (worst) – opposite! Or percentage-based. Check local system!</li>
                        </ul>
                    </li>
                </ul>

                <h4>👨‍👩‍👧 Parent Engagement:</h4>
                <ul>
                    <li>📋 <strong>Elternabend (Parent Evenings):</strong> Regular meetings to discuss class progress, school events, issues. Attendance expected!</li>
                    <li>🗣️ <strong>Parent-Teacher Conferences:</strong> Sprechstunden – scheduled meetings to discuss individual child's progress. Take these seriously!</li>
                    <li>🏫 <strong>Elternbeirat/Elternverein (Parent Council):</strong> Parent representatives who liaise with school administration. You can volunteer!</li>
                    <li>🎉 <strong>School Events:</strong> Sommerfest, Weihnachtsmarkt, sports days. Parents often volunteer to help organize. Good way to integrate!</li>
                </ul>

                <h4>📚 School Supplies and Costs:</h4>
                <ul>
                    <li>📖 <strong>Books:</strong> Usually provided free in public schools (Germany/Austria). Switzerland may charge or require purchases.</li>
                    <li>✏️ <strong>Supplies:</strong> Parents buy pencils, notebooks, folders, etc. Schools provide lists at start of year. Budget €50-150.</li>
                    <li>🎒 <strong>School Bag (Schulranzen):</strong> Serious business! Germans especially invest in ergonomic backpacks for primary school (€150-250). Important for back health!</li>
                    <li>🍎 <strong>Lunch:</strong> If Ganztagsschule, lunch may be provided (often for fee, €3-5/day). Otherwise, children bring packed lunch (Pausenbrot).</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Central European education is rigorous, well-structured, and highly valued: 🎓</p>
                    <ul>
                        <li>📚 <strong>Start early with Kindergarten</strong> – especially for language acquisition</li>
                        <li>🎯 <strong>Understand the tracking system</strong> – grades in primary school matter for secondary placement</li>
                        <li>🔧 <strong>Don't overlook vocational education</strong> – it's excellent and respected!</li>
                        <li>🗣️ <strong>Support German language learning</strong> – this is crucial for academic success</li>
                        <li>🤝 <strong>Engage with schools</strong> – attend parent evenings, communicate with teachers</li>
                        <li>🌍 <strong>Advocate for your children</strong> – especially if they're tracked below their potential due to language barriers</li>
                    </ul>
                    <p>Germany 🇩🇪 offers free university and strong dual education. Austria 🇦🇹 combines similar benefits with slightly more flexibility. Switzerland 🇨🇭 has world-class education but more variation by canton and higher costs. All three produce well-educated graduates! Master the system, support your children's learning, and they'll thrive. 🇩🇪🇦🇹🇨🇭✨</p>
                </div>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith – Understanding Religious Life in Central Europe 🤝",
            content: `
                <p>Grüß Gott! Let's talk about something that's both deeply personal and publicly visible in Central Europe: religion. 🛐 Germany 🇩🇪, Austria 🇦🇹, and Switzerland 🇨🇭 all have Christian heritage visible in architecture, holidays, and social structures – but modern society is increasingly secular. Understanding how religion works in public and private life will help you navigate cultural norms, legal requirements (yes, there's a church tax!), and social expectations. Let's dive in! 💪</p>
                
                <p>This module covers the religious landscape, church tax, religious freedom, faith communities, and how religion intersects with daily life. Whether you're religious, secular, or something in between, here's what you need to know. 🌍</p>

                <h3>⛪ Part 1: The Religious Landscape – Christian Heritage, Secular Present</h3>
                <p>Central Europe was shaped by Christianity for centuries, but things have changed dramatically: 📊</p>

                <div class="important">
                    <strong>💡 Religious Demographics (Approximate)</strong>
                    <ul>
                        <li><strong>🇩🇪 Germany:</strong>
                            <ul>
                                <li>~26% Catholic (stronger in south: Bavaria, Rhineland)</li>
                                <li>~24% Protestant/Evangelical (EKD) (stronger in north and east)</li>
                                <li>~5% Muslim (mainly Turkish and Arab communities)</li>
                                <li>~40%+ No religion (Konfessionslos) – especially in former East Germany</li>
                                <li>~1% Jewish, plus smaller Hindu, Buddhist, other communities</li>
                            </ul>
                        </li>
                        <li><strong>🇦🇹 Austria:</strong>
                            <ul>
                                <li>~55% Catholic (historically dominant, still culturally significant)</li>
                                <li>~4% Protestant</li>
                                <li>~8% Muslim (growing community, mainly Turkish and Balkan)</li>
                                <li>~25% No religion (growing, especially among youth)</li>
                                <li>Small Jewish, Orthodox Christian, Buddhist communities</li>
                            </ul>
                        </li>
                        <li><strong>🇨🇭 Switzerland:</strong>
                            <ul>
                                <li>~35% Catholic (strong in central and southern cantons)</li>
                                <li>~23% Protestant/Reformed (strong in Zurich, Bern, Basel areas)</li>
                                <li>~6% Muslim (growing, diverse origins)</li>
                                <li>~28% No religion (increasing rapidly)</li>
                                <li>Regional variation is significant – some cantons very Catholic, others very Protestant</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Visible But Not Dominant</strong>
                    <p>You'll see churches everywhere, hear church bells, and get public holidays for Christian festivals. ⛪🔔 But actual church attendance is LOW across Central Europe (5-15% weekly). Religion is more cultural heritage than active practice for most people. Society is largely secular in daily life, while maintaining Christian traditions. 🎄</p>
                </div>

                <h3>💰 Part 2: Church Tax (Kirchensteuer/Kirchenbeitrag) – The Unique System</h3>
                <p>Here's something that surprises many newcomers: if you're registered as a member of certain churches, you PAY for it through your taxes! 💸</p>

                <h4>🇩🇪 Germany – Kirchensteuer:</h4>
                <ul>
                    <li>📊 <strong>What:</strong> Automatic tax deduction if you're registered as Catholic or Protestant (EKD). 8-9% of your income tax (varies by Bundesland).</li>
                    <li>💰 <strong>Example:</strong> If your income tax is €5,000/year, church tax could be €400-450/year. Not small!</li>
                    <li>📝 <strong>Automatic:</strong> Based on your registered religion (Konfession) when you do Anmeldung. If you state "katholisch" or "evangelisch," you'll be charged automatically!</li>
                    <li>⛪ <strong>Who Collects:</strong> Government collects it and transfers to churches. Churches use it for clergy salaries, building maintenance, social programs, etc.</li>
                    <li>🚪 <strong>Opt Out:</strong> You can leave the church (Kirchenaustritt) at the Standesamt. Costs ~€25-35 (one-time fee). Then no more church tax! But you also lose certain rights (religious wedding in church, church burial, etc.).</li>
                </ul>

                <h4>🇦🇹 Austria – Kirchenbeitrag:</h4>
                <ul>
                    <li>📋 <strong>Different System:</strong> NOT automatic tax deduction! Churches send you a bill (Zahlschein) directly.</li>
                    <li>💰 <strong>Amount:</strong> Calculated by church based on your income (~1.1% typically). Catholic Church in Austria is very organized about this!</li>
                    <li>📧 <strong>Billing:</strong> Church will find you and send invoices. They're persistent!</li>
                    <li>🚪 <strong>Opt Out:</strong> You can leave the church (Austritt) at your local church office or online (katholisch.at/austritt for Catholics). Then they stop billing you.</li>
                    <li>⚠️ <strong>Consequences:</strong> Similar to Germany – can't have church wedding, church funeral, godparents for baptisms must be members, etc.</li>
                </ul>

                <h4>🇨🇭 Switzerland – Varied by Canton:</h4>
                <ul>
                    <li>📊 <strong>Most Cantons:</strong> Church tax exists for recognized churches (Catholic, Protestant/Reformed, sometimes Jewish community).</li>
                    <li>💰 <strong>Rate Varies:</strong> By canton and municipality. Could be 5-15% of cantonal tax. Significant in some areas!</li>
                    <li>🏢 <strong>Corporations Too:</strong> Even businesses pay church tax in some cantons! (They can't "leave" like individuals.)</li>
                    <li>🚪 <strong>Opt Out:</strong> Declare yourself konfessionslos (no religion) with your Gemeinde. Process varies by canton.</li>
                    <li>📍 <strong>Some Cantons Dropped It:</strong> Geneva, Neuchâtel no longer have church tax. Others maintain it.</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Be Careful During Anmeldung!</strong>
                    <p>When registering your residence, you'll be asked about religion (Konfession/Religion). 📋 If you say "Catholic" or "Protestant" just because you were baptized as a child, you're signing up for church tax! Many people put "keine" (none) or "konfessionslos" to avoid it – even if they're nominally Christian. This is legally fine and very common. 🚫💰</p>
                </div>

                <h3>🗽 Part 3: Religious Freedom – Your Rights</h3>
                <p>Central Europe has strong constitutional protections for religious freedom: 🛡️</p>

                <h4>📜 What's Protected:</h4>
                <ul>
                    <li>🛐 <strong>Freedom of Belief:</strong> You can believe (or not believe) whatever you want. Protected in constitutions of Germany (Art. 4 GG), Austria, Switzerland.</li>
                    <li>⛪ <strong>Freedom of Worship:</strong> You can practice your religion, attend services, build places of worship (though building permits still required!).</li>
                    <li>👶 <strong>Raise Children in Your Faith:</strong> Parents can raise children with their religious beliefs.</li>
                    <li>🚫 <strong>Freedom FROM Religion:</strong> You can't be forced to participate in religious activities. This includes school!</li>
                    <li>🏫 <strong>School Religious Education:</strong> In Germany and Austria, religious education is standard in public schools. But parents can opt children out! In Switzerland, varies by canton.</li>
                </ul>

                <h4>⚖️ Limits on Religious Freedom:</h4>
                <ul>
                    <li>📜 <strong>Must Respect Law:</strong> Religious freedom doesn't override secular law. Example: forced marriage is illegal regardless of religious justification.</li>
                    <li>👧 <strong>Children's Rights:</strong> Practices harmful to children are illegal (example: FGM is criminal regardless of cultural/religious justification).</li>
                    <li>🏛️ <strong>Public Order:</strong> Practices that threaten public order or others' rights can be restricted (though this is controversial – see headscarf debates).</li>
                </ul>

                <div class="important">
                    <strong>🎯 Anti-Discrimination Laws</strong>
                    <p>Discrimination based on religion is illegal across Central Europe in employment, housing, and services. ⚖️ If you face religious discrimination, you have legal recourse. Document incidents and seek legal advice (Antidiskriminierungsstelle in Germany, Gleichbehandlungsanwaltschaft in Austria, cantonal ombudspersons in Switzerland). 📋</p>
                </div>

                <h3>🕌 Part 4: Major Faith Communities</h3>

                <h4>⛪ Christian Churches:</h4>
                <ul>
                    <li>🇻🇦 <strong>Catholic Church:</strong> Strongest in southern Germany (Bavaria), Austria, and Catholic Swiss cantons. Traditional Mass in Latin less common now; services mostly in German. Active in social services (Caritas).</li>
                    <li>✝️ <strong>Protestant/Evangelical (EKD):</strong> Strongest in northern Germany, parts of Switzerland. EKD is actually a federation of Lutheran and Reformed churches. More progressive than Catholic on many issues (women priests, LGBTQ+ acceptance).</li>
                    <li>🇬🇷 <strong>Orthodox Churches:</strong> Growing communities (Greek, Serbian, Russian, Romanian). Mostly in urban areas. Liturgy often in original languages.</li>
                    <li>📿 <strong>Free Churches:</strong> Baptists, Methodists, Pentecostals, etc. Smaller but active communities. Often more conservative than mainstream churches.</li>
                </ul>

                <h4>🕌 Islam:</h4>
                <ul>
                    <li>🌙 <strong>Significant Communities:</strong> Especially Turkish diaspora in Germany/Austria, Balkan Muslims in Austria, diverse communities in Switzerland.</li>
                    <li>🕌 <strong>Mosques:</strong> Mosques exist in most cities. Finding one: search online or ask at Islamic cultural centers.</li>
                    <li>🥩 <strong>Halal Food:</strong> Widely available in urban areas. Turkish supermarkets are everywhere in Germany/Austria. Halal butchers in most cities.</li>
                    <li>⚖️ <strong>Challenges:</strong> Muslims face some discrimination and integration challenges. Debates over headscarves, mosque construction, integration have been contentious.</li>
                    <li>🏛️ <strong>Organized Differently:</strong> Unlike Christian churches, Islam isn't centrally organized or state-recognized the same way in most regions (though this is changing – some Islamic communities gaining official recognition).</li>
                </ul>

                <h4>✡️ Judaism:</h4>
                <ul>
                    <li>🕍 <strong>Historic Communities:</strong> Long history in Central Europe, devastated in Holocaust. Communities rebuilding since.</li>
                    <li>🇩🇪 <strong>Germany:</strong> Growing Jewish community (~200,000), many recent immigrants from former Soviet Union. Synagogues in major cities. Berlin, Munich, Frankfurt have significant communities.</li>
                    <li>🇦🇹 <strong>Austria:</strong> Vienna has historic Jewish community. Active synagogues and cultural centers.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> Small but established communities, especially Zurich, Geneva, Basel.</li>
                    <li>🛡️ <strong>Security:</strong> Synagogues and Jewish institutions often have security due to antisemitism concerns. This is sad reality.</li>
                    <li>🥩 <strong>Kosher Food:</strong> Available in major cities with Jewish communities.</li>
                </ul>

                <h4>🕉️ Other Faiths:</h4>
                <ul>
                    <li>🇮🇳 <strong>Hinduism:</strong> Temples in larger cities. Indian and Tamil communities.</li>
                    <li>☸️ <strong>Buddhism:</strong> Growing interest. Buddhist centers exist. Mix of Asian immigrants and European converts.</li>
                    <li>🔯 <strong>Sikhism:</strong> Gurdwaras in cities with significant Indian/Punjabi populations.</li>
                    <li>🌟 <strong>Other:</strong> Baháʼí, various new religious movements, etc.</li>
                </ul>

                <h3>🎄 Part 5: Religious Holidays and Public Life</h3>
                <p>Christian holidays shape the public calendar across Central Europe: 📅</p>

                <h4>🏛️ Public Holidays (Varies by Region!):</h4>
                <ul>
                    <li>🎄 <strong>Christmas (Weihnachten):</strong> Dec 25-26. Major holiday. Everything closes. Dec 24 (Heiligabend) is THE important evening – family gatherings, gift-giving.</li>
                    <li>🐣 <strong>Easter (Ostern):</strong> Good Friday (Karfreitag), Easter Sunday/Monday. Variable date. Everything closed.</li>
                    <li>⬆️ <strong>Ascension Day (Christi Himmelfahrt):</strong> 40 days after Easter. Public holiday. Also "Father's Day" (Vatertag) in Germany – men go hiking/drinking!</li>
                    <li>🕊️ <strong>Pentecost (Pfingsten):</strong> 50 days after Easter. Whit Monday is public holiday.</li>
                    <li>⛪ <strong>Assumption (Maria Himmelfahrt):</strong> Aug 15. Public holiday in Catholic regions (Bavaria, Austria, some Swiss cantons).</li>
                    <li>🎃 <strong>All Saints' Day (Allerheiligen):</strong> Nov 1. Public holiday in Catholic regions. Cemetery visits to honor dead.</li>
                    <li>📿 <strong>Corpus Christi (Fronleichnam):</strong> Thursday 60 days after Easter. Public holiday in Catholic regions.</li>
                    <li>🇨🇭 <strong>Swiss Cantonal Saints' Days:</strong> Many Catholic cantons have patron saint days as holidays!</li>
                </ul>

                <div class="important">
                    <strong>⚠️ Regional Variation!</strong>
                    <p>Not all religious holidays are public holidays everywhere! 🗺️ Bavaria has more Catholic holidays than Protestant northern Germany. Austrian regions vary. Swiss cantons completely different! Check your specific location. Some businesses close even when it's not officially a public holiday in Catholic/Protestant strongholds. 🏪🚫</p>
                </div>

                <h4>🎅 Christmas Season:</h4>
                <ul>
                    <li>🎄 <strong>Advent (4 weeks before Christmas):</strong> Advent wreaths, Advent calendars, Christmas markets (Weihnachtsmärkte) everywhere!</li>
                    <li>🍪 <strong>St. Nicholas Day (Nikolaustag):</strong> Dec 6. Children get candy/small gifts in shoes. Different from Christmas!</li>
                    <li>🎁 <strong>Christmas Eve (Heiligabend):</strong> Dec 24 evening is THE main event. Church services at 6pm or midnight. Family dinner. Gifts exchanged.</li>
                    <li>🦃 <strong>Dec 25-26:</strong> More family gatherings, eating. Quiet days.</li>
                </ul>

                <h4>🐰 Easter Season:</h4>
                <ul>
                    <li>🥚 <strong>Egg Decorating:</strong> Tradition across the region. Easter egg hunts for children.</li>
                    <li>🔥 <strong>Easter Fires (Osterfeuer):</strong> Bonfires on Easter Saturday night in many areas.</li>
                    <li>🍫 <strong>Easter Bunny (Osterhase):</strong> Brings eggs and chocolate. Major commercial holiday!</li>
                </ul>

                <h4>🌙 Accommodation for Other Religions:</h4>
                <ul>
                    <li>🕌 <strong>Eid al-Fitr / Eid al-Adha:</strong> NOT public holidays, but increasingly recognized. Some companies allow Muslims to take these as vacation days.</li>
                    <li>✡️ <strong>Jewish Holidays:</strong> Not public holidays. Jewish employees typically use vacation days.</li>
                    <li>🪔 <strong>Diwali, Vaisakhi, etc.:</strong> Not officially recognized but growing awareness in diverse cities.</li>
                </ul>

                <h3>🏫 Part 6: Religion and Education</h3>

                <h4>📚 Religious Education in Schools:</h4>
                <ul>
                    <li>🇩🇪 <strong>Germany:</strong> Religionsunterricht (Catholic or Protestant) is standard subject in public schools. But parents can opt children out! Alternative: Ethics (Ethik) classes. Islamic religious education slowly being introduced in some Bundesländer.</li>
                    <li>🇦🇹 <strong>Austria:</strong> Similar to Germany. Catholic or Protestant religion classes standard. Can opt out for ethics.</li>
                    <li>🇨🇭 <strong>Switzerland:</strong> Varies by canton! Some have confessional religion classes, some non-confessional "religion and culture" classes, some nothing. In French-speaking cantons, more secular.</li>
                    <li>✅ <strong>Opt-Out Process:</strong> Usually simple – inform school in writing that child won't attend religion class. No penalties!</li>
                </ul>

                <h4>⛪ Church-Run Schools:</h4>
                <ul>
                    <li>🏫 <strong>Catholic/Protestant Schools:</strong> Exist but less common than public schools. Often have excellent reputations. Usually charge tuition even though they receive state funding.</li>
                    <li>🎓 <strong>Not Exclusionary:</strong> Church schools often admit non-religious students too. Focus is often on values education and academic excellence rather than strict religious indoctrination.</li>
                </ul>

                <h3>💒 Part 7: Religious Ceremonies – Weddings, Funerals, etc.</h3>

                <h4>💍 Religious Weddings:</h4>
                <ul>
                    <li>⚖️ <strong>Civil Marriage First:</strong> In Germany and Austria, ONLY civil marriage at Standesamt is legally valid! Religious ceremony optional, held AFTER civil marriage.</li>
                    <li>🇨🇭 <strong>Switzerland Too:</strong> Civil ceremony at Zivilstandsamt required for legal marriage. Church wedding is optional extra.</li>
                    <li>⛪ <strong>Church Requirements:</strong> Catholic church requires at least one partner be Catholic. Protestant churches often more flexible. Preparation courses common. Churches can refuse (divorced Catholics may have issues).</li>
                    <li>🕌 <strong>Islamic Marriages:</strong> Nikah ceremony has no legal standing – must do civil marriage too!</li>
                </ul>

                <h4>👶 Baptisms and Naming Ceremonies:</h4>
                <ul>
                    <li>⛪ <strong>Christian Baptism:</strong> Still common even among non-practicing families. Cultural tradition.</li>
                    <li>🎉 <strong>Secular Alternatives:</strong> Welcoming ceremonies, naming parties for non-religious families.</li>
                    <li>📋 <strong>Legal Name Registration:</strong> Done at Standesamt, separate from any religious ceremony.</li>
                </ul>

                <h4>⚰️ Funerals:</h4>
                <ul>
                    <li>⛪ <strong>Religious Funerals:</strong> Church funerals common for church members. Burial in church cemeteries often possible.</li>
                    <li>🏛️ <strong>Secular Funerals:</strong> Perfectly acceptable! Secular humanist celebrants available. Municipal cemeteries serve everyone.</li>
                    <li>🕌 <strong>Muslim Burials:</strong> Islamic burial sections exist in many cemeteries. Repatriation to home countries also common.</li>
                    <li>✡️ <strong>Jewish Burials:</strong> Jewish cemeteries in cities with Jewish communities. Specific traditions accommodated.</li>
                </ul>

                <h3>🤝 Part 8: Practical Interfaith Considerations</h3>

                <h4>🏢 Workplace:</h4>
                <ul>
                    <li>📅 <strong>Christian Holidays Off:</strong> Automatically. Other religions must use vacation days for their holidays (not ideal but that's the system).</li>
                    <li>🍽️ <strong>Dietary Needs:</strong> Company cafeterias increasingly offer vegetarian/halal options. But not always! Bring your own lunch if needed.</li>
                    <li>🙏 <strong>Prayer Breaks:</strong> Not legally required. Some companies accommodate if reasonable. Muslims may use breaks for Salah.</li>
                    <li>🧕 <strong>Religious Clothing:</strong> Generally permitted (headscarves, turbans, etc.). Exceptions: certain public sector jobs have restrictions (varies by state/canton). Banks and corporations usually no issues.</li>
                </ul>

                <h4>🏠 Daily Life:</h4>
                <ul>
                    <li>🥩 <strong>Halal/Kosher Food:</strong> Widely available in cities. Turkish shops ubiquitous in Germany/Austria. Kosher requires more searching but exists.</li>
                    <li>🍖 <strong>Restaurants:</strong> Increasing awareness. Many restaurants mark vegetarian/vegan options. Halal restaurants common in diverse neighborhoods.</li>
                    <li>👗 <strong>Modest Clothing:</strong> No restrictions. Women can wear headscarves. Some pools may have women-only swimming hours (check local pools).</li>
                </ul>

                <h4>🤝 Interfaith Families:</h4>
                <ul>
                    <li>💑 <strong>Very Common:</strong> Mixed-religion couples are normal. No legal restrictions.</li>
                    <li>👶 <strong>Children:</strong> Parents decide how to raise children religiously. Some choose one faith, some expose to both, some choose secular upbringing.</li>
                    <li>⛪🕌 <strong>Religious Communities:</strong> Reactions vary. Some conservative communities may be less welcoming, but overall society is tolerant.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Finding Your Community</strong>
                    <p>Whatever your faith (or lack thereof), communities exist: 🤝</p>
                    <ul>
                        <li>🔍 Search online for places of worship in your area</li>
                        <li>🌐 Expat and immigrant organizations often have religious connections</li>
                        <li>👥 Facebook groups for your faith community in your city</li>
                        <li>🏛️ Integration centers can point you to faith communities</li>
                        <li>📚 Many cities have interfaith dialogue groups</li>
                    </ul>
                    <p>Don't be shy about reaching out. Most communities welcome newcomers! 🙏</p>
                </div>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Religion in Central Europe is a mix of Christian heritage and secular modernity: ⛪🔬</p>
                    <ul>
                        <li>⛪ <strong>Visible Christian culture</strong> – churches, holidays, symbols – but low active practice</li>
                        <li>💰 <strong>Church tax exists</strong> – opt in/out carefully during registration!</li>
                        <li>🗽 <strong>Strong religious freedom</strong> – you can practice (or not) as you choose</li>
                        <li>🌍 <strong>Increasing diversity</strong> – Islam, other faiths growing, recognized, but still face challenges</li>
                        <li>📅 <strong>Christian holidays dominate calendar</strong> – but society largely secular in practice</li>
                        <li>🤝 <strong>Respectful pluralism</strong> – most people tolerant of different beliefs (though discrimination exists)</li>
                    </ul>
                    <p>Germany 🇩🇪 is most diverse and secular (especially former East). Austria 🇦🇹 maintains stronger Catholic cultural influence. Switzerland 🇨🇭 varies dramatically by canton. Understand the system, know your rights, opt out of church tax if you want, and practice your faith freely. Religion is personal in Central Europe – your beliefs are your own business! 🇩🇪🇦🇹🇨🇭✨</p>
                </div>
            `
        }
    },
    mediterranean: {
        name: "Mediterranean",
        flag: "🇮🇹🇫🇷🇪🇸🇵🇹",
        social: {
            title: "Social Ethics in the Mediterranean",
            content: `
                <h3>General Social Norms</h3>
                <p>Mediterranean society values elegance, intellectual conversation, and enjoying life. There's strong appreciation for culture, food, and proper social etiquette.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>"Bonjour" (daytime) and "Bonsoir" (evening) are essential in France</li>
                    <li>La bise: Cheek kisses (number varies by region, usually 2-4)</li>
                    <li>Handshakes for formal or first-time meetings</li>
                    <li>Always greet shopkeepers when entering/leaving stores</li>
                </ul>
                
                <h3>Formality</h3>
                <p>The distinction between "vous" (formal) and "tu" (informal) is crucial. Use "vous" with strangers, elders, and in professional settings until invited to use "tu."</p>
                
                <div class="important">
                    <strong>Important:</strong> Always say "Bonjour" before any interaction - even asking for directions. Not doing so is considered very rude.
                </div>
                
                <h3>Meal Times</h3>
                <p>Meals are social occasions. Lunch is typically 12-2 PM and dinner after 8 PM. Taking time to enjoy food and conversation is valued.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Avoid discussing business during meals unless your French counterpart brings it up. Meals are for pleasure, not work.
                </div>
            `
        },
        conversation: {
            title: "Conversation Etiquette in the Mediterranean",
            content: `
                <h3>The Art of Conversation</h3>
                <p>The French love intellectual debate and discussion. Being able to express opinions eloquently is valued. Silence is often uncomfortable.</p>
                
                <h3>Good Topics</h3>
                <ul>
                    <li>Art, literature, and cinema</li>
                    <li>Food and wine</li>
                    <li>Philosophy and ideas</li>
                    <li>Travel and culture</li>
                    <li>Current events and politics (with care)</li>
                </ul>
                
                <h3>Topics to Avoid</h3>
                <ul>
                    <li>Personal income and finances</li>
                    <li>Age (especially with women)</li>
                    <li>Negative comparisons with other countries</li>
                    <li>Immigration (sensitive topic)</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> The French enjoy debating for its own sake. Don't take disagreement personally - it's intellectual exercise.
                </div>
                
                <h3>Language</h3>
                <p>Making an effort to speak French is deeply appreciated. Even a few phrases show respect for the culture. The French are protective of their language.</p>
            `
        },
        dating: {
            title: "Dating Culture in the Mediterranean",
            content: `
                <h3>French Romance</h3>
                <p>France has a reputation for romance, but dating is actually quite different from many countries. There's often no formal "dating" phase.</p>
                
                <h3>Meeting People</h3>
                <ul>
                    <li>Through social circles and friends</li>
                    <li>At social gatherings, parties, cafés</li>
                    <li>Dating apps (increasingly common)</li>
                    <li>Through shared activities and interests</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <ul>
                    <li>No formal "first date" - often just spending time together</li>
                    <li>Exclusivity is often assumed after a kiss</li>
                    <li>The man traditionally pays, but this is changing</li>
                    <li>Public displays of affection are accepted</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> In France, a kiss often signifies the start of an exclusive relationship. There's no "dating multiple people" phase.
                </div>
                
                <h3>Flirtation</h3>
                <p>Flirting is considered an art form and is common even among those in relationships. It's often playful and doesn't necessarily indicate serious interest.</p>
            `
        },
        marriage: {
            title: "Marriage Customs in the Mediterranean",
            content: `
                <h3>Civil Ceremony</h3>
                <p>Only civil marriages at the mairie (town hall) are legally valid. Religious ceremonies can follow but have no legal status.</p>
                
                <h3>French Wedding Traditions</h3>
                <ul>
                    <li>Vin d'honneur: Cocktail reception for all guests</li>
                    <li>Lengthy multi-course meal with speeches between courses</li>
                    <li>Croquembouche instead of traditional wedding cake</li>
                    <li>La soupe à l'oignon: Onion soup served late at night</li>
                </ul>
                
                <h3>Legal Requirements</h3>
                <p>Documents needed include birth certificates, proof of residence, and medical certificates. At least one party must reside in the commune for 30+ days.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> French weddings often last all day and well into the night. Be prepared for a marathon celebration!
                </div>
                
                <h3>PACS</h3>
                <p>PACS (Pacte civil de solidarité) is a popular alternative to marriage, offering many legal benefits without full marriage. Many couples choose this option.</p>
            `
        },
        work: {
            title: "Work Ethics in the Mediterranean",
            content: `
                <h3>Workplace Culture</h3>
                <p>French workplaces value intellectual contribution, proper hierarchies, and work-life balance. The 35-hour work week is standard.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Formal relationships with clear hierarchies</li>
                    <li>Meetings for discussion and debate</li>
                    <li>Long lunch breaks (1-2 hours) are traditional</li>
                    <li>Vacation time is sacred (5 weeks minimum)</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>The "right to disconnect" is law - employers can't expect responses to emails outside work hours. August is traditional vacation month.</p>
                
                <div class="important">
                    <strong>Important:</strong> Never schedule meetings in August if you can avoid it. Many businesses slow down or close entirely.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>Use "vous" and titles until invited otherwise</li>
                    <li>Dress well - appearance matters</li>
                    <li>Build relationships before pushing for results</li>
                    <li>Written communication is often formal</li>
                </ul>
            `
        },
        civic: {
            title: "Civic Duties in the Mediterranean",
            content: `
                <h3>Administrative Requirements</h3>
                <p>France is known for its bureaucracy. Keep all documents organized. You'll need a carte de séjour (residence permit) as a non-EU citizen.</p>
                
                <h3>Taxes</h3>
                <p>Annual tax declarations are mandatory. Income tax is calculated on the household, not individually. Various social charges fund the welfare system.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Keep copies of everything. French administration loves paperwork, and you may need to prove things multiple times.
                </div>
                
                <h3>Social Security</h3>
                <p>The French social security system covers healthcare, family benefits, retirement, and unemployment. Contributions are mandatory but provide comprehensive coverage.</p>
                
                <h3>Civic Values</h3>
                <ul>
                    <li>Liberté, Égalité, Fraternité - the national motto</li>
                    <li>Laïcité (secularism) in public institutions</li>
                    <li>Environmental responsibility</li>
                    <li>Participation in democracy (voting)</li>
                </ul>
            `
        },
        clothing: {
            title: "Clothing Norms in the Mediterranean",
            content: `
                <h3>French Style</h3>
                <p>French fashion emphasizes quality basics, classic pieces, and looking "put together." Less is more - avoid over-accessorizing or trying too hard.</p>
                
                <h3>Key Principles</h3>
                <ul>
                    <li>Invest in quality over quantity</li>
                    <li>Classic, timeless pieces over trends</li>
                    <li>Neutral colors with occasional accents</li>
                    <li>Well-fitted clothing is essential</li>
                </ul>
                
                <h3>Workplace Attire</h3>
                <p>Professional dress is generally required. French workplaces value looking polished. Even "casual" often means smart and well-put-together.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Parisians famously wear a lot of black. A well-fitted black outfit is always appropriate.
                </div>
                
                <h3>Common Mistakes</h3>
                <ul>
                    <li>Athletic wear outside of sports is frowned upon</li>
                    <li>Very casual clothes (flip-flops, shorts) in cities</li>
                    <li>Overly branded or logo-heavy clothing</li>
                    <li>Appearing "too made up" - aim for effortless</li>
                </ul>
            `
        },
        hygiene: {
            title: "Hygiene Standards in the Mediterranean",
            content: `
                <h3>Personal Hygiene</h3>
                <p>Despite stereotypes, modern French hygiene standards are high. Daily bathing and use of fragrance are common.</p>
                
                <h3>French Approach</h3>
                <ul>
                    <li>Perfume and cologne are widely used</li>
                    <li>Personal grooming is important</li>
                    <li>Pharmacies are trusted for skincare advice</li>
                    <li>Natural beauty is valued over heavy makeup</li>
                </ul>
                
                <h3>Public Hygiene</h3>
                <p>Respect shared spaces. Clean up after yourself in public areas. Dog waste in Paris is a known issue - watch your step!</p>
                
                <div class="important">
                    <strong>Important:</strong> Public toilets (sanisettes) are available in cities. Some are free, others require coins. Always carry tissue.
                </div>
                
                <h3>Home Hygiene</h3>
                <ul>
                    <li>Regular cleaning is expected</li>
                    <li>Recycling systems exist (tri sélectif)</li>
                    <li>Kitchen cleanliness is particularly important</li>
                    <li>Indoor shoes or slippers are common</li>
                </ul>
            `
        },
        citizenship: {
            title: "Path to Citizenship in the Mediterranean",
            content: `
                <h3>Requirements for French Citizenship</h3>
                <ul>
                    <li>Legal residence in France for 5 years (continuous)</li>
                    <li>French language proficiency (B1 level)</li>
                    <li>Knowledge of French culture and civic values</li>
                    <li>Stable income and no serious criminal record</li>
                    <li>Integration into French society</li>
                </ul>
                
                <h3>Reduced Residency Requirements</h3>
                <p>The 5-year requirement can be reduced for those who:</p>
                <ul>
                    <li>Are married to a French citizen (4 years)</li>
                    <li>Have French higher education degrees (2 years)</li>
                    <li>Have made exceptional contributions to France</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Learn about French history, the Revolution, and the values of the Republic. These are central to the citizenship interview.
                </div>
                
                <h3>The Process</h3>
                <p>Apply at your local prefecture. There will be an interview assessing your integration and knowledge. The process can take 12-18 months.</p>
                
                <h3>Benefits of French Citizenship</h3>
                <ul>
                    <li>French and EU passport</li>
                    <li>Voting rights in all elections</li>
                    <li>Full access to public services</li>
                    <li>Right to live and work anywhere in the EU</li>
                </ul>
            `
        },
        relationships: {
            title: "💕 Module 1: Relationships & Respect in the Mediterranean 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>Mediterranean culture values warmth, expressiveness, and strong family bonds. Social interactions are typically more demonstrative than in Northern Europe, with emphasis on personal connections and emotional expression.</p>
                
                <h3>Greetings and Personal Space</h3>
                <ul>
                    <li><strong>Cheek kisses (la bise, besos):</strong> Common among friends and family; number varies by region (2 in France, 2-3 in Spain/Italy)</li>
                    <li><strong>Formal greetings essential:</strong> Always say "Bonjour/Buongiorno/Buenos días" before any interaction, even in shops</li>
                    <li><strong>Handshakes:</strong> Standard for business and first meetings</li>
                    <li><strong>Closer personal space:</strong> Physical proximity during conversation is normal; touching arms or shoulders shows warmth</li>
                    <li><strong>Eye contact:</strong> Direct and important for showing sincerity and engagement</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> In France particularly, not saying "Bonjour" when entering a shop or "Au revoir" when leaving is considered extremely rude. These formalities matter!
                </div>
                
                <h3>Family Values</h3>
                <p>Family is central to Mediterranean life:</p>
                <ul>
                    <li><strong>Extended family ties:</strong> Close relationships with grandparents, aunts, uncles, cousins</li>
                    <li><strong>Multi-generational gatherings:</strong> Sunday meals, holidays, celebrations involve entire family</li>
                    <li><strong>Adult children:</strong> Often live at home longer (into 20s-30s) for economic and cultural reasons</li>
                    <li><strong>Parental involvement:</strong> Parents remain actively involved in adult children's lives</li>
                    <li><strong>Childcare:</strong> Grandparents frequently provide care; strong intergenerational bonds</li>
                </ul>
                
                <h3>Social Etiquette</h3>
                <ul>
                    <li><strong>Vouvoyer/Lei/Usted (formal you):</strong> Use formal address initially; switch to informal only when invited</li>
                    <li><strong>Titles matter:</strong> Use professional titles (Doctor, Professor, Monsieur, Signora)</li>
                    <li><strong>Punctuality nuanced:</strong> Business meetings require punctuality; social events allow "fashionably late" (15-30 minutes)</li>
                    <li><strong>Gift-giving:</strong> Bring wine, flowers, or sweets when visiting homes (avoid chrysanthemums in France/Italy - funeral flowers)</li>
                    <li><strong>Dress well:</strong> Appearance matters; dress stylishly even for casual outings</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Mediterranean cultures value "la dolce vita" / "joie de vivre" - taking time to enjoy life, savor meals, and appreciate beauty. Don't rush social interactions!
                </div>
                
                <h3>Dating and Relationships</h3>
                <ul>
                    <li>Meeting through social circles remains common alongside apps</li>
                    <li>Men often take initiative in asking someone out (though this is changing)</li>
                    <li>Romantic gestures appreciated - compliments, flowers, thoughtful dates</li>
                    <li>Relationships develop through conversation and shared meals</li>
                    <li>Meeting the family is significant - signals seriousness</li>
                </ul>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in the Mediterranean 🤝",
            content: `
                <h3>Public Behavior and Social Norms</h3>
                <p>Mediterranean public spaces blend formality with warmth. Proper etiquette and presentation are important, but social interactions are warmer and more animated than in Northern Europe.</p>
                
                <h3>Daily Courtesies</h3>
                <ul>
                    <li><strong>Greetings mandatory:</strong> Say bonjour/buongiorno/buenos días when entering ANY space - shops, elevators, waiting rooms</li>
                    <li><strong>Please and thank you:</strong> S'il vous plaît/per favore/por favor and merci/grazie/gracias used constantly</li>
                    <li><strong>Excuse me:</strong> Pardon/scusi/perdón when passing, bumping, or getting attention</li>
                    <li><strong>Goodbye:</strong> Au revoir/arrivederci/adiós when leaving shops or interactions</li>
                </ul>
                
                <div class="warning">
                    <strong>France Particularly:</strong> Failure to greet shopkeepers or service staff is perceived as incredibly rude. Even if just browsing, say "Bonjour, je regarde" (I'm just looking). This applies everywhere!
                </div>
                
                <h3>Noise and Quiet Hours</h3>
                <ul>
                    <li><strong>Animated conversation normal:</strong> Louder, more expressive public conversation than Northern Europe</li>
                    <li><strong>Quiet hours:</strong> Typically 10 PM - 7 AM on weekdays; respect in apartments</li>
                    <li><strong>Siesta time (Spain, parts of Italy):</strong> Reduced noise 2-5 PM in some areas; many shops close</li>
                    <li><strong>Late evening culture:</strong> Dinner often 9-10 PM; social life extends late, especially weekends</li>
                </ul>
                
                <h3>Dining Etiquette</h3>
                <ul>
                    <li><strong>Meals are sacred:</strong> Lunch breaks 1-2 hours; dinner is social event, not to be rushed</li>
                    <li><strong>Restaurants:</strong> Wait to be seated; don't split bills excessively (Italians especially dislike this)</li>
                    <li><strong>Coffee culture:</strong> Standing at bar is cheaper; sitting adds service charge</li>
                    <li><strong>Café time:</strong> You can linger over one coffee for hours - you're paying for the space and time</li>
                    <li><strong>Tipping:</strong> Service often included; small tips (€1-5) appreciated but not obligatory</li>
                </ul>
                
                <h3>Environmental Consciousness</h3>
                <ul>
                    <li>Recycling programs exist but less comprehensive than Northern Europe</li>
                    <li>Bring reusable bags for shopping (plastic bags often charged)</li>
                    <li>Water conservation important in southern regions</li>
                    <li>Historic city centers - drive carefully, many pedestrian zones</li>
                </ul>
                
                <h3>Dress Code</h3>
                <ul>
                    <li><strong>Appearance matters:</strong> Dress well even for routine activities</li>
                    <li><strong>Church visits:</strong> Cover shoulders and knees; remove hats</li>
                    <li><strong>Beach to city:</strong> Don't wear swimwear away from beach; cover up appropriately</li>
                    <li><strong>Business:</strong> Formal, elegant attire expected</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Embrace the "passegiata" (Italy) or evening stroll culture. Many locals walk through town centers in early evening - it's social ritual and people-watching, not just exercise.
                </div>
                
                <h3>Public Transport and Driving</h3>
                <ul>
                    <li><strong>Validate tickets:</strong> Public transport requires validation (fines for non-validation)</li>
                    <li><strong>Driving style:</strong> More aggressive than Northern Europe; horns used liberally</li>
                    <li><strong>Parking:</strong> Creative parking common; rules sometimes loosely interpreted</li>
                    <li><strong>Strikes:</strong> Public transport strikes common; plan accordingly</li>
                </ul>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in the Mediterranean 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>Mediterranean communication is expressive, nuanced, and relationship-oriented. Style varies: French favor intellectual debate, Italians use gestures extensively, Spanish emphasize warmth and personal connection.</p>
                
                <h3>Key Communication Characteristics</h3>
                <ul>
                    <li><strong>Expressive:</strong> Animated gestures, facial expressions, vocal variation normal and expected</li>
                    <li><strong>Indirect in some contexts:</strong> Especially in France and Italy, criticism is wrapped in politeness</li>
                    <li><strong>Context matters:</strong> What's said often less important than how it's said and the relationship context</li>
                    <li><strong>Interrupting acceptable:</strong> Overlapping conversation shows engagement, not rudeness</li>
                    <li><strong>Debate valued:</strong> Particularly in France, intellectual argumentation is sport, not personal attack</li>
                </ul>
                
                <div class="important">
                    <strong>French Communication:</strong> The French value eloquence and intellectual rigor. Debate is enjoyed. Don't take strong opinions personally - it's about ideas, not you. Learning to defend your viewpoint calmly is respected.
                </div>
                
                <h3>Conversation Topics</h3>
                <div class="tip">
                    <strong>Good Topics:</strong>
                    <ul>
                        <li>Food, wine, and cuisine (passionate subject!)</li>
                        <li>Art, culture, cinema, literature</li>
                        <li>Travel and regional differences</li>
                        <li>Fashion and style</li>
                        <li>Philosophy and ideas (especially France)</li>
                        <li>Football (soccer) - major cultural touchstone</li>
                        <li>Local history and architecture</li>
                    </ul>
                </div>
                
                <div class="warning">
                    <strong>Topics to Approach Carefully:</strong>
                    <ul>
                        <li>Personal income or finances (private)</li>
                        <li>Oversimplified comparisons to other countries</li>
                        <li>Stereotypes about laziness or inefficiency (offensive)</li>
                        <li>Religious topics (France particularly secular)</li>
                        <li>Regional rivalries (North vs. South debates can be sensitive)</li>
                    </ul>
                </div>
                
                <h3>Language and Formality</h3>
                <ul>
                    <li><strong>Formal vs. informal:</strong> Tu/vous, tu/lei, tú/usted distinction crucial; wait to be invited to use informal</li>
                    <li><strong>Language pride:</strong> French particularly proud of language; attempt to speak it even if imperfect - effort appreciated</li>
                    <li><strong>English varies:</strong> More widely spoken in business/tourism; less in everyday contexts. Learn the local language for integration</li>
                    <li><strong>Regional languages:</strong> Catalan, Basque, Occitan, regional Italian dialects - show respect for linguistic diversity</li>
                </ul>
                
                <h3>Workplace Communication</h3>
                <ul>
                    <li><strong>Hierarchy present:</strong> More formal than Northern Europe; respect for authority and seniority</li>
                    <li><strong>Titles used:</strong> Monsieur, Madame, Dottore, Señor/Señora in professional contexts</li>
                    <li><strong>Meeting style:</strong> Can be lengthy; building consensus through discussion</li>
                    <li><strong>Email:</strong> Formal openings and closings required; French business emails quite elaborate</li>
                    <li><strong>Lunch meetings:</strong> Business often conducted over meals; important relationship-building</li>
                </ul>
                
                <h3>Gestures and Non-Verbal Communication</h3>
                <ul>
                    <li>Italians particularly gesture-heavy (fingers bunched tapping - "what do you want?"; hand wave under chin - "I don't care")</li>
                    <li>French: shoulder shrug with pursed lips means "I don't know" or "what can you do?"</li>
                    <li>Maintain good eye contact - shows honesty and engagement</li>
                    <li>Physical touch during conversation (arm touches) shows warmth</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Appreciate the art of conversation. Mediterranean cultures value eloquence, wit, and the ability to converse on varied topics. Reading widely and staying culturally informed helps you participate fully.
                </div>
            `
        },
        economicIntegration: {
            title: "💼 Module 4: Economic Integration in the Mediterranean 💰",
            content: `
                <h3>Workplace Culture</h3>
                <p>Mediterranean work culture balances professionalism with personal relationships. Hierarchies exist but are tempered by personal connections. Work-life balance and quality of life are highly valued.</p>
                
                <h3>Key Workplace Values</h3>
                <ul>
                    <li><strong>Relationships matter:</strong> Personal connections facilitate business; invest time in relationship-building</li>
                    <li><strong>Hierarchy respected:</strong> More vertical structures than Northern Europe; formal with superiors</li>
                    <li><strong>Long lunch breaks:</strong> 1-2 hours standard; meal times sacred</li>
                    <li><strong>Work hours:</strong> Often 9 AM - 6/7 PM, but with substantial lunch break; "presenteeism" can be expected</li>
                    <li><strong>Vacation sacred:</strong> August particularly - many businesses close for 2-3 weeks</li>
                    <li><strong>Quality of life:</strong> Work to live, not live to work; family and personal time prioritized</li>
                </ul>
                
                <div class="important">
                    <strong>French Workplace Specifics:</strong>
                    <ul>
                        <li>35-hour work week legally; in practice varies by sector</li>
                        <li>Strong unions and workers' rights</li>
                        <li>Strikes and manifestations (protests) common</li>
                        <li>Formal communication; business relationships take time to develop</li>
                        <li>September restart after August vacation is crucial business period</li>
                    </ul>
                </div>
                
                <h3>Finding Employment</h3>
                <ul>
                    <li><strong>Job boards:</strong> Pôle Emploi (France), InfoJobs (Spain), LinkedIn increasingly used</li>
                    <li><strong>Networking crucial:</strong> Personal connections often more important than cold applications</li>
                    <li><strong>Language requirements:</strong> Local language proficiency typically required except in specific international sectors</li>
                    <li><strong>Contracts:</strong> CDI (permanent) vs. CDD (fixed-term) in France; similar distinctions elsewhere</li>
                    <li><strong>Credential recognition:</strong> EU qualifications generally recognized; non-EU may need validation</li>
                </ul>
                
                <h3>Employment Rights and Benefits</h3>
                <ul>
                    <li><strong>Vacation:</strong> Minimum 4-5 weeks annually (5 weeks in France)</li>
                    <li><strong>Healthcare:</strong> Employer contributes to social security/health insurance</li>
                    <li><strong>Parental leave:</strong> Available but varies by country; less generous than Scandinavia</li>
                    <li><strong>Sick leave:</strong> Doctor's note required; employers and social security share cost</li>
                    <li><strong>Termination protection:</strong> Strong worker protections; difficult to dismiss without cause</li>
                </ul>
                
                <h3>Bureaucracy and Administration</h3>
                <ul>
                    <li><strong>Paperwork intensive:</strong> Employment requires substantial documentation</li>
                    <li><strong>Social security registration:</strong> Mandatory for all workers</li>
                    <li><strong>Bank account:</strong> Often required before employment starts</li>
                    <li><strong>Payslips complex:</strong> French "bulletin de salaire" particularly detailed with numerous deductions</li>
                </ul>
                
                <div class="warning">
                    <strong>Strikes and Labor Action:</strong> Public sector strikes common, especially France. Transport, education, public services can be disrupted. This is accepted part of social dialogue - not viewed negatively as elsewhere.
                </div>
                
                <h3>Entrepreneurship</h3>
                <ul>
                    <li>Bureaucratic hurdles exist but support programs available</li>
                    <li>France: Auto-entrepreneur status simplified self-employment</li>
                    <li>Italy: Partita IVA for freelancers/small businesses</li>
                    <li>Spain: Autónomo status for self-employed</li>
                    <li>EU citizens have right to establish businesses</li>
                </ul>
                
                <h3>Taxation</h3>
                <ul>
                    <li><strong>Progressive tax systems:</strong> Higher rates than some countries (France: up to 45%)</li>
                    <li><strong>Social charges:</strong> Substantial contributions for healthcare, pensions, unemployment (France particularly high)</li>
                    <li><strong>Tax residence:</strong> Established by spending majority of year in country</li>
                    <li><strong>Annual tax declarations:</strong> Required even if employer withholds taxes</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Business meals matter. Cultivate relationships over lunch or coffee. In Mediterranean culture, breaking bread together builds trust essential for professional success.
                </div>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare Systems in the Mediterranean 💊",
            content: `
                <h3>Universal Healthcare Systems</h3>
                <p>Mediterranean countries provide universal healthcare through social insurance systems. Quality is generally high, but systems vary by country. Registration and contributions are mandatory for residents.</p>
                
                <h3>France: Sécurité Sociale</h3>
                <h4>System Overview:</h4>
                <ul>
                    <li><strong>Coverage:</strong> Comprehensive healthcare for all legal residents and workers</li>
                    <li><strong>Registration:</strong> Automatic upon employment; students and others register separately</li>
                    <li><strong>Carte Vitale:</strong> Electronic health card containing your medical information</li>
                    <li><strong>Reimbursement model:</strong> You pay upfront, then claim reimbursement (typically 70% of consultation cost)</li>
                    <li><strong>Mutuelle:</strong> Supplementary insurance covers remaining costs (often provided by employer)</li>
                </ul>
                
                <h4>Accessing Care in France:</h4>
                <ul>
                    <li><strong>Médecin traitant:</strong> Choose a primary care doctor (GP); required for optimal reimbursement</li>
                    <li><strong>Appointments:</strong> Book directly with doctor; Doctolib app widely used</li>
                    <li><strong>Consultations:</strong> Standard GP visit ~€25; specialists more expensive</li>
                    <li><strong>Pharmacies:</strong> Green cross sign; pharmacists provide health advice</li>
                    <li><strong>Emergencies:</strong> SAMU (15) for medical emergencies; Pompiers (18) for life-threatening situations</li>
                </ul>
                
                <h3>Italy: Servizio Sanitario Nazionale (SSN)</h3>
                <h4>System Overview:</h4>
                <ul>
                    <li><strong>Free at point of use:</strong> For registered residents</li>
                    <li><strong>Registration:</strong> Register at local ASL (Azienda Sanitaria Locale)</li>
                    <li><strong>Tessera sanitaria:</strong> Health card required for accessing services</li>
                    <li><strong>Ticket (copayment):</strong> Small fees for some services based on income</li>
                </ul>
                
                <h4>Accessing Care in Italy:</h4>
                <ul>
                    <li><strong>Medico di base:</strong> Choose a family doctor from registered list</li>
                    <li><strong>Appointments:</strong> Book directly; walk-in hours often available</li>
                    <li><strong>Specialists:</strong> GP referral usually required for SSN coverage</li>
                    <li><strong>Pharmacies:</strong> Green cross; rotating schedule for 24-hour service</li>
                    <li><strong>Emergency:</strong> 118 for ambulance; Pronto Soccorso (ER) at hospitals</li>
                </ul>
                
                <h3>Spain: Sistema Nacional de Salud</h3>
                <h4>System Overview:</h4>
                <ul>
                    <li><strong>Free universal healthcare:</strong> For residents registered with social security</li>
                    <li><strong>Tarjeta sanitaria:</strong> Health card issued by autonomous community</li>
                    <li><strong>Regional variations:</strong> Health managed by autonomous communities; slight differences</li>
                    <li><strong>No co-payments:</strong> Generally free, though some regions charge for prescriptions</li>
                </ul>
                
                <h4>Accessing Care in Spain:</h4>
                <ul>
                    <li><strong>Centro de salud:</strong> Local health center with GPs and nurses</li>
                    <li><strong>Médico de familia:</strong> Assigned family doctor at your local center</li>
                    <li><strong>Appointments:</strong> Book through phone or online portal</li>
                    <li><strong>Pharmacies:</strong> Green cross; prescription medicines require receta</li>
                    <li><strong>Emergency:</strong> 112 general emergency; Urgencias for hospital ER</li>
                </ul>
                
                <h3>Portugal: Serviço Nacional de Saúde (SNS)</h3>
                <ul>
                    <li><strong>Free healthcare:</strong> For residents and EU citizens</li>
                    <li><strong>Registration:</strong> Register at local health center (centro de saúde)</li>
                    <li><strong>Número de utente:</strong> User number for accessing services</li>
                    <li><strong>Moderate fees:</strong> Small charges for some services (€5-7 for GP visits)</li>
                    <li><strong>Emergency:</strong> 112; SNS 24 (808 24 24 24) for health advice</li>
                </ul>
                
                <div class="important">
                    <strong>Key Points Across All Systems:</strong>
                    <ul>
                        <li>European Health Insurance Card (EHIC) provides temporary coverage for EU visitors</li>
                        <li>Private healthcare available as alternative; often faster for specialists</li>
                        <li>Prescription costs vary; reimbursement rates differ by medication type</li>
                        <li>Dental and optical care often not fully covered; expect to pay</li>
                    </ul>
                </div>
                
                <h3>Prescriptions and Pharmacies</h3>
                <ul>
                    <li><strong>Prescription required:</strong> For all but basic medications</li>
                    <li><strong>Generic substitution:</strong> Pharmacists may offer cheaper generics</li>
                    <li><strong>Reimbursement rates:</strong> Vary by medication type (35%-100%)</li>
                    <li><strong>Chronic conditions:</strong> Long-term prescriptions available; often 100% reimbursed</li>
                </ul>
                
                <h3>Mental Health</h3>
                <ul>
                    <li>Available through public systems but waiting times can be long</li>
                    <li>Private psychologists and psychiatrists more accessible</li>
                    <li>Growing acceptance but still some stigma around mental health care</li>
                    <li>Employee assistance programs increasingly common</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Build relationship with your pharmacist. They're knowledgeable healthcare professionals who can advise on minor ailments, saving you a doctor visit.
                </div>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom in the Mediterranean 📋",
            content: `
                <h3>Bureaucracy and Administration</h3>
                <p>Mediterranean bureaucracy has a reputation for complexity. Systems are paper-heavy, require patience, and vary significantly by country and even region. Digital services are improving but not universal.</p>
                
                <div class="warning">
                    <strong>Reality Check:</strong> Mediterranean bureaucracy can be frustrating. Multiple visits to offices, conflicting information, and long waits are common. Patience, persistence, and keeping all documents organized are essential. Consider it a marathon, not a sprint!
                </div>
                
                <h3>France: Prefecture and Essential Services</h3>
                
                <h4>Key Registration Steps:</h4>
                <ul>
                    <li><strong>Titre de séjour (residence permit):</strong> Non-EU citizens must apply at préfecture within 2 months of arrival</li>
                    <li><strong>Carte de séjour:</strong> EU citizens can request (though not obligatory post-Brexit for Brits)</li>
                    <li><strong>Social security:</strong> Register with CPAM (Caisse Primaire d'Assurance Maladie)</li>
                    <li><strong>Numéro de sécurité sociale:</strong> Essential ID number for all administrative matters</li>
                    <li><strong>Tax registration:</strong> Declare residence to tax office (centre des impôts)</li>
                </ul>
                
                <h4>Essential Numbers:</h4>
                <ul>
                    <li><strong>NIR (Numéro d'Inscription au Répertoire):</strong> Your social security number - needed for everything</li>
                    <li><strong>Numéro fiscal:</strong> Tax identification number</li>
                </ul>
                
                <h4>Banking:</h4>
                <ul>
                    <li>Proof of residence required (attestation d'hébergement if staying with someone)</li>
                    <li>French banks prefer French income/employment</li>
                    <li>Online banks (Boursorama, N26) sometimes easier for newcomers</li>
                </ul>
                
                <h3>Italy: Permesso and Residency</h3>
                
                <h4>Key Steps:</h4>
                <ul>
                    <li><strong>Permesso di soggiorno:</strong> Non-EU residents must apply within 8 days at Questura (police)</li>
                    <li><strong>Codice fiscale:</strong> Tax code - get this first at Agenzia delle Entrate; needed for everything</li>
                    <li><strong>Residenza:</strong> Register residence at local Anagrafe (registry office)</li>
                    <li><strong>Carta d'identità:</strong> ID card issued after residency registration</li>
                    <li><strong>Tessera sanitaria:</strong> Health card from ASL</li>
                </ul>
                
                <h4>The Italian Queue:</h4>
                <ul>
                    <li>Take a number (biglietto) at offices</li>
                    <li>Arrive early - offices have limited capacity</li>
                    <li>Bring all original documents plus photocopies</li>
                    <li>"Marca da bollo" (tax stamp) often required for applications</li>
                </ul>
                
                <h3>Spain: NIE and Empadronamiento</h3>
                
                <h4>Key Steps:</h4>
                <ul>
                    <li><strong>NIE (Número de Identidad de Extranjero):</strong> Foreigner ID number - priority #1</li>
                    <li><strong>Empadronamiento:</strong> Register residence at local Ayuntamiento (town hall)</li>
                    <li><strong>TIE (Tarjeta de Identidad de Extranjero):</strong> Physical ID card for non-EU residents</li>
                    <li><strong>Certificado digital:</strong> Digital certificate for online government services</li>
                    <li><strong>Social security number:</strong> Assigned upon employment</li>
                </ul>
                
                <h4>Cita Previa:</h4>
                <ul>
                    <li>Appointment system for most government offices</li>
                    <li>Book online weeks in advance (appointments scarce)</li>
                    <li>Check daily for cancellations - persistence pays off</li>
                </ul>
                
                <h3>Portugal: NIF and Residence</h3>
                <ul>
                    <li><strong>NIF (Número de Identificação Fiscal):</strong> Tax number - essential for everything</li>
                    <li><strong>Residence permit:</strong> Apply at SEF (immigration service) if non-EU</li>
                    <li><strong>Morada fiscal:</strong> Fiscal residence address registration</li>
                    <li><strong>Certificado de residência:</strong> Residence certificate for EU citizens</li>
                </ul>
                
                <div class="important">
                    <strong>Universal Tips for Mediterranean Bureaucracy:</strong>
                    <ul>
                        <li><strong>Documents:</strong> Always bring originals + photocopies; passport-sized photos often needed</li>
                        <li><strong>Translations:</strong> Official translations may be required for foreign documents</li>
                        <li><strong>Apostilles:</strong> Foreign official documents need apostille for recognition</li>
                        <li><strong>Patience:</strong> Multi-hour waits are normal; bring a book!</li>
                        <li><strong>Conflicting info:</strong> Different officials may give different answers; document everything</li>
                        <li><strong>Receipts:</strong> Keep all receipts, application proofs, and correspondence</li>
                        <li><strong>Local help:</strong> Having a native speaker assist is invaluable</li>
                    </ul>
                </div>
                
                <h3>Taxes</h3>
                <ul>
                    <li><strong>Income tax:</strong> Progressive rates; annual declarations required</li>
                    <li><strong>Employer withholding:</strong> Taxes deducted from salary but annual declaration still needed</li>
                    <li><strong>Tax residence:</strong> Established by spending more than 183 days/year in country</li>
                    <li><strong>Deductions:</strong> Vary by country - healthcare, education, mortgage interest, etc.</li>
                    <li><strong>Help available:</strong> Tax advisors (commercialisti in Italy, gestores in Spain) assist with filings</li>
                </ul>
                
                <h3>Driving</h3>
                <ul>
                    <li><strong>License exchange:</strong> EU licenses valid; non-EU must exchange within 6-12 months</li>
                    <li><strong>Vehicle registration:</strong> Complex process if importing car</li>
                    <li><strong>Insurance mandatory:</strong> At minimum third-party liability</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Join expat forums for your city. Others share current process updates, recommended officials, and navigate bureaucracy together. Crowd-sourced knowledge is gold!
                </div>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools in the Mediterranean 📚",
            content: `
                <h3>Education Philosophy</h3>
                <p>Mediterranean education systems emphasize academic knowledge, respect for teachers, and traditional learning methods. Systems are centralized with national curricula, though regional variations exist. Education is free and compulsory through secondary level.</p>
                
                <h3>School System Structure</h3>
                
                <h4>Early Childhood (3-6 years):</h4>
                <ul>
                    <li><strong>France:</strong> École maternelle (preschool) - free, optional but nearly universal attendance</li>
                    <li><strong>Italy:</strong> Scuola dell'infanzia - optional but widely attended</li>
                    <li><strong>Spain:</strong> Educación infantil - optional; public, private, and concertado (semi-private) options</li>
                    <li><strong>Portugal:</strong> Educação pré-escolar - free and optional</li>
                    <li>Focus on socialization, play-based learning, and school readiness</li>
                </ul>
                
                <h4>Primary School (6-11/12 years):</h4>
                <ul>
                    <li><strong>Compulsory and free:</strong> All countries provide free primary education</li>
                    <li><strong>France:</strong> École élémentaire (5 years, ages 6-11)</li>
                    <li><strong>Italy:</strong> Scuola primaria (5 years, ages 6-11)</li>
                    <li><strong>Spain:</strong> Educación primaria (6 years, ages 6-12)</li>
                    <li><strong>Portugal:</strong> Ensino básico (1º ciclo: 4 years)</li>
                    <li>Academic focus begins early; reading, writing, math, and general knowledge</li>
                </ul>
                
                <h4>Secondary School (12-18 years):</h4>
                <ul>
                    <li><strong>Lower secondary:</strong> Collège (France), scuola media (Italy), ESO (Spain), 2º & 3º ciclos (Portugal)</li>
                    <li><strong>Upper secondary:</strong> Lycée (France), scuola superiore (Italy), Bachillerato (Spain), Secundário (Portugal)</li>
                    <li><strong>Academic or vocational tracks:</strong> Students choose paths around age 14-16</li>
                    <li><strong>National exams:</strong> Baccalauréat (France), Esame di Stato (Italy), Selectividad (Spain) determine university entrance</li>
                </ul>
                
                <div class="important">
                    <strong>School Culture:</strong>
                    <ul>
                        <li><strong>Respect for teachers:</strong> Authority figures; vouvoyer/lei/usted used</li>
                        <li><strong>Formal environment:</strong> More structured than Northern European schools</li>
                        <li><strong>Homework substantial:</strong> Expect significant homework from primary school onward</li>
                        <li><strong>Lunch breaks:</strong> Often 1.5-2 hours; students may go home (especially in Spain)</li>
                        <li><strong>No uniforms:</strong> Generally not required in public schools</li>
                        <li><strong>Repetition possible:</strong> Students may repeat grades if performance insufficient</li>
                    </ul>
                </div>
                
                <h3>School Schedule</h3>
                <h4>France:</h4>
                <ul>
                    <li>Monday-Friday, typically 8:30 AM - 4:30 PM</li>
                    <li>Wednesday afternoons often free (varies)</li>
                    <li>Long lunch break (1.5-2 hours); canteen or home</li>
                </ul>
                
                <h4>Italy:</h4>
                <ul>
                    <li>Varies: 8:00 AM - 1:00/1:30 PM (morning only) OR full day with lunch</li>
                    <li>Saturday mornings sometimes included</li>
                </ul>
                
                <h4>Spain:</h4>
                <ul>
                    <li>Two shifts common: 9 AM - 2 PM (mornings) or 9 AM - 5 PM (with lunch break)</li>
                    <li>Lunch 2-4 PM (main meal of day)</li>
                </ul>
                
                <h3>Public vs. Private Schools</h3>
                <ul>
                    <li><strong>Public (scuola pubblica/école publique):</strong> Free, secular, follows national curriculum</li>
                    <li><strong>Private (privé/privato):</strong> Tuition fees; often religious; can offer different curricula</li>
                    <li><strong>Spain's "concertado":</strong> Semi-private schools - state-funded but privately run</li>
                    <li><strong>International schools:</strong> Available in major cities; expensive; often teach in English</li>
                </ul>
                
                <h3>University and Higher Education</h3>
                <ul>
                    <li><strong>Free or low-cost:</strong> Public universities charge minimal fees (€170-€600/year typically)</li>
                    <li><strong>Competitive entrance:</strong> Based on secondary school exam results</li>
                    <li><strong>Bologna Process:</strong> Three-cycle system (Bachelor 3 years, Master 2 years, Doctorate 3+ years)</li>
                    <li><strong>Grandes Écoles (France):</strong> Elite institutions separate from university system; highly competitive</li>
                    <li><strong>Teaching style:</strong> Lecture-based; less interactive than Anglo systems; independent study expected</li>
                    <li><strong>Language:</strong> Most undergraduate programs in national language; some English-taught masters</li>
                </ul>
                
                <h3>Parent Involvement</h3>
                <ul>
                    <li>Parent-teacher meetings (conseils de classe) twice yearly</li>
                    <li>Carnet de liaison/diario (communication notebook) between school and parents</li>
                    <li>Parents less involved in classroom compared to some countries</li>
                    <li>School councils include parent representatives</li>
                </ul>
                
                <h3>Support for Foreign Students</h3>
                <ul>
                    <li><strong>Language support:</strong> FLE classes (French), italiano L2 (Italy), Spanish as second language</li>
                    <li><strong>Integration programs:</strong> Vary by school and region</li>
                    <li><strong>Credential evaluation:</strong> Foreign qualifications assessed for appropriate grade placement</li>
                </ul>
                
                <h3>Holiday Schedule</h3>
                <ul>
                    <li><strong>Summer:</strong> July-August (2 months)</li>
                    <li><strong>Christmas:</strong> 2 weeks</li>
                    <li><strong>Spring:</strong> 2 weeks (Easter/Pâques/Pasqua)</li>
                    <li><strong>Additional breaks:</strong> Toussaint (All Saints), Carnival (varies)</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> School supplies (fournitures scolaires) are specified by teachers at start of year. Lists can be extensive - specific notebook types, colors, etc. Budget for this and shop early!
                </div>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith in the Mediterranean 🤝",
            content: `
                <h3>Religious Landscape</h3>
                <p>The Mediterranean is historically Catholic/Christian, and religious heritage deeply influences culture, holidays, and architecture. However, secularization varies: France is highly secular (laïcité), while Italy remains culturally Catholic. Religious diversity is growing.</p>
                
                <h3>Predominant Faith: Catholicism</h3>
                <ul>
                    <li><strong>Italy:</strong> Historically the heart of Catholicism; Vatican City in Rome</li>
                    <li><strong>Cultural influence strong:</strong> Even non-practicing Italians often identify as Catholic</li>
                    <li><strong>Church attendance declining:</strong> Particularly among youth, except for holidays and lifecycle events</li>
                    <li><strong>Spain and Portugal:</strong> Similar patterns - historically Catholic, increasingly secular</li>
                    <li><strong>France:</strong> Historically Catholic but strictly secular state (laïcité) since 1905</li>
                </ul>
                
                <h3>France: Laïcité (Secularism)</h3>
                <p>France practices strict separation of church and state:</p>
                <ul>
                    <li><strong>Laïcité principle:</strong> Religion is private matter; state institutions are secular</li>
                    <li><strong>Public schools secular:</strong> No religious instruction or symbols (including for students)</li>
                    <li><strong>Headscarf debate:</strong> Religious headcoverings banned in schools; full face veils banned in public</li>
                    <li><strong>Religion rarely discussed:</strong> Considered private; inappropriate in professional/public contexts</li>
                    <li><strong>Church attendance low:</strong> Only ~5% attend mass regularly</li>
                </ul>
                
                <div class="important">
                    <strong>Laïcité Expectations:</strong> In France particularly, keep religious practice private. Proselytizing is inappropriate. Public displays of religiosity (wearing prominent religious symbols, public prayer) can face social disapproval. Religion and politics are strictly separated.
                </div>
                
                <h3>Religious Diversity</h3>
                <ul>
                    <li><strong>Islam:</strong> Second largest religion in France, Spain; growing in Italy and Portugal</li>
                    <li><strong>Judaism:</strong> Significant communities especially in France</li>
                    <li><strong>Protestantism:</strong> Minority but present, especially in France</li>
                    <li><strong>Orthodoxy:</strong> Growing with immigration from Eastern Europe</li>
                    <li><strong>Buddhism, Hinduism:</strong> Smaller communities in urban areas</li>
                    <li><strong>Non-religious:</strong> Growing, especially among young people</li>
                </ul>
                
                <h3>Religious Freedom and Practice</h3>
                <ul>
                    <li><strong>Freedom guaranteed:</strong> You can practice any faith or none</li>
                    <li><strong>Places of worship:</strong> Churches ubiquitous; mosques in cities; synagogues in larger communities</li>
                    <li><strong>Halal/Kosher:</strong> Increasingly available in cities; less so in rural areas</li>
                    <li><strong>Religious clothing:</strong> Generally acceptable except where secular laws apply (French schools, public service)</li>
                </ul>
                
                <h3>Catholic Cultural Heritage</h3>
                <p>Even in secular contexts, Catholic traditions influence culture:</p>
                <ul>
                    <li><strong>Public holidays:</strong> Christmas, Easter, Assumption (Aug 15), All Saints (Nov 1) are national holidays</li>
                    <li><strong>First Communion:</strong> Still celebrated as major family event even by non-practicing families</li>
                    <li><strong>Church weddings:</strong> Traditional even for non-religious couples</li>
                    <li><strong>Saints' days:</strong> Some people celebrate name days (especially in Catholic regions)</li>
                    <li><strong>Churches as landmarks:</strong> Central to towns; visiting them is cultural tourism</li>
                </ul>
                
                <div class="tip">
                    <strong>Visiting Churches:</strong> Even if not religious, visit churches as cultural sites. Dress modestly (cover shoulders and knees), remove hats, keep voices low. No photos during services. Free entry but donations appreciated.
                </div>
                
                <h3>Religious Holidays and Observances</h3>
                <ul>
                    <li><strong>Christmas (Noël/Natale):</strong> Major holiday; religious services + secular celebrations</li>
                    <li><strong>Easter (Pâques/Pasqua):</strong> Holy Week important in Spain and Italy; processions common</li>
                    <li><strong>Assumption:</strong> August 15 - major holiday, especially Italy</li>
                    <li><strong>All Saints' Day:</strong> November 1 - visiting family graves traditional</li>
                    <li><strong>Local saint festivals:</strong> Patron saints celebrated regionally (e.g., San Fermín in Pamplona)</li>
                </ul>
                
                <h3>Muslim Community</h3>
                <ul>
                    <li>Mosques available in cities</li>
                    <li>Friday prayer accommodations vary by employer</li>
                    <li>Ramadan: fasting respected but not publicly accommodated (no adjusted work hours typically)</li>
                    <li>Halal food: increasingly available in supermarkets and restaurants</li>
                    <li>Hijab: legal in most contexts (except French schools/some public service)</li>
                </ul>
                
                <h3>Jewish Community</h3>
                <ul>
                    <li>Synagogues in major cities (especially France - largest Jewish population in Western Europe)</li>
                    <li>Kosher food available in Jewish neighborhoods</li>
                    <li>Some public awareness of Jewish holidays</li>
                    <li>Security presence at synagogues due to past attacks</li>
                </ul>
                
                <h3>Workplace and School</h3>
                <ul>
                    <li><strong>Religious holidays:</strong> Christian holidays are public; others may request leave</li>
                    <li><strong>Accommodations:</strong> Vary by employer; legal protections exist against discrimination</li>
                    <li><strong>Prayer space:</strong> Not typically provided except in some large companies</li>
                    <li><strong>Food:</strong> Company cafeterias may offer vegetarian but rarely halal/kosher options</li>
                    <li><strong>School:</strong> Public schools secular (especially France); religious education at home or through community</li>
                </ul>
                
                <div class="warning">
                    <strong>Social Sensitivity:</strong> Mediterranean societies have complex relationships with religion. Historical Catholicism meets modern secularism meets growing diversity. Be respectful of all faiths but understand that strong religious expression, especially evangelical or fundamentalist, can make people uncomfortable. Moderate, private practice is the social norm.
                </div>
                
                <h3>Finding Community</h3>
                <ul>
                    <li>Search online for places of worship in your area</li>
                    <li>Religious communities often provide social networks and support</li>
                    <li>Cultural centers may be linked to religious communities</li>
                    <li>International churches often conduct services in English</li>
                </ul>
            `
        }
    },
    scandinavia: {
        name: "Scandinavia",
        flag: "🇸🇪🇳🇴🇩🇰",
        social: {
            title: "Social Ethics in Scandinavia",
            content: `
                <h3>General Social Norms</h3>
                <p>Scandinavian society values equality, consensus, and respect for others' privacy. There's strong emphasis on "Lagom" - not too much, not too little, just right.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>"Hej" is the universal greeting (informal)</li>
                    <li>"God dag" is more formal</li>
                    <li>Handshakes for first meetings</li>
                    <li>Hugs among friends</li>
                </ul>
                
                <h3>Personal Space</h3>
                <p>Scandinavians value personal space. Leave distance when queuing, don't sit next to strangers on buses if other seats are available.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Swedes may seem reserved at first, but once you become friends, relationships are genuine and lasting.
                </div>
                
                <h3>Equality (Jämlikhet)</h3>
                <p>Sweden is highly egalitarian. Gender equality is strongly emphasized. Don't make assumptions based on gender or social status.</p>
                
                <div class="important">
                    <strong>Important:</strong> "Fika" (coffee break) is a crucial social institution. Never skip or rush fika - it's time for connection.
                </div>
            `
        },
        conversation: {
            title: "Conversation Etiquette in Scandinavia",
            content: `
                <h3>Communication Style</h3>
                <p>Swedes are generally understated and avoid conflict. Silence is comfortable and doesn't need to be filled. Bragging is frowned upon (Jantelagen).</p>
                
                <h3>Good Topics</h3>
                <ul>
                    <li>Nature and outdoor activities</li>
                    <li>Weather and seasons</li>
                    <li>Travel and vacation plans</li>
                    <li>Sports (especially ice hockey, football, and skiing)</li>
                    <li>Swedish culture and traditions</li>
                </ul>
                
                <h3>Topics to Handle Carefully</h3>
                <ul>
                    <li>Personal income (very private)</li>
                    <li>Immigration (polarizing topic)</li>
                    <li>Personal achievements (avoid boasting)</li>
                    <li>Religion (mostly secular society)</li>
                </ul>
                
                <div class="warning">
                    <strong>Note:</strong> Jantelagen is a cultural concept warning against thinking you're better than others. Humility is valued.
                </div>
                
                <h3>Small Talk</h3>
                <p>Swedes don't engage in as much small talk as other cultures. When they speak, it's typically meaningful. Don't mistake quietness for unfriendliness.</p>
            `
        },
        dating: {
            title: "Dating Culture in Scandinavia",
            content: `
                <h3>Meeting People</h3>
                <p>Swedes often meet through:</p>
                <ul>
                    <li>Friends and social activities</li>
                    <li>Dating apps (very commonly used)</li>
                    <li>Sports clubs and hobbies</li>
                    <li>Work or studies</li>
                </ul>
                
                <h3>Swedish Dating Norms</h3>
                <p>Dating in Sweden is notably egalitarian and casual. Traditional gender roles in dating are minimal.</p>
                
                <ul>
                    <li>Either person can initiate</li>
                    <li>Splitting bills is the norm</li>
                    <li>Casual "fika" dates are common</li>
                    <li>Physical intimacy may happen earlier than in some cultures</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> A fika date is a low-pressure way to get to know someone. Suggest meeting for coffee and cake.
                </div>
                
                <h3>Relationship Development</h3>
                <p>Relationships often develop slowly from friendships. Swedes may be reserved at first but are genuine once committed. Cohabitation (sambo) is very common.</p>
            `
        },
        marriage: {
            title: "Marriage Customs in Scandinavia",
            content: `
                <h3>Sambo Culture</h3>
                <p>Many Swedish couples live together as "sambo" (cohabiting partners) with legal rights similar to marriage. Marriage isn't necessary for social acceptance.</p>
                
                <h3>Wedding Traditions</h3>
                <ul>
                    <li>Ceremonies can be religious or civil</li>
                    <li>Midsommar weddings are popular</li>
                    <li>Multiple short speeches during dinner</li>
                    <li>Traditional songs and games</li>
                    <li>The "snapsvisor" - drinking songs</li>
                </ul>
                
                <h3>Legal Requirements</h3>
                <p>Both parties must be at least 18. You need to apply for "hindersprövning" (marriage impediment check) before the wedding.</p>
                
                <div class="important">
                    <strong>Important:</strong> Same-sex marriage has been legal in Sweden since 2009. The country has progressive family laws.
                </div>
                
                <h3>Modern Approach</h3>
                <p>Swedish weddings are often personal and relaxed. Both partners typically keep their surnames. Parental leave is generous and equally shared.</p>
            `
        },
        work: {
            title: "Work Ethics in Scandinavia",
            content: `
                <h3>Workplace Culture</h3>
                <p>Swedish workplaces are flat and egalitarian. Consensus decision-making is valued. Titles and hierarchy matter less than in many countries.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Work-life balance is prioritized</li>
                    <li>Fika breaks are important for team bonding</li>
                    <li>Punctuality is expected</li>
                    <li>Direct but diplomatic communication</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Generous parental leave, flexible hours, and vacation time (minimum 25 days) are standard. Working overtime is not glorified.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> "Fredagsfika" (Friday fika) is common in workplaces. Participate to build relationships with colleagues.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>First names are used from the start</li>
                    <li>Everyone's opinion is valued in meetings</li>
                    <li>Avoid interrupting or being too assertive</li>
                    <li>Dress code is often smart casual</li>
                </ul>
            `
        },
        civic: {
            title: "Civic Duties in Scandinavia",
            content: `
                <h3>Registration (Folkbokföring)</h3>
                <p>You must register with Skatteverket (Tax Agency) when moving to Sweden. Your personnummer (personal ID number) is essential for everything.</p>
                
                <div class="important">
                    <strong>Important:</strong> Get your personnummer as soon as possible. Without it, many things (banking, healthcare, contracts) are difficult.
                </div>
                
                <h3>Taxes</h3>
                <p>Sweden has high taxes that fund extensive public services. Tax returns are largely pre-filled by the government. Most people simply approve their return online.</p>
                
                <h3>Healthcare</h3>
                <p>Healthcare is publicly funded. Register with a vårdcentral (health center). There are small fees for visits, but costs are capped annually.</p>
                
                <h3>Environmental Responsibility</h3>
                <ul>
                    <li>Extensive recycling system (pant for bottles/cans)</li>
                    <li>Allemansrätten (right to roam) comes with responsibilities</li>
                    <li>Environmental consciousness is expected</li>
                    <li>Sustainable living is valued</li>
                </ul>
            `
        },
        clothing: {
            title: "Clothing Norms in Scandinavia",
            content: `
                <h3>Swedish Style</h3>
                <p>Swedish fashion is minimalist, functional, and practical. Clean lines, neutral colors, and quality materials are preferred.</p>
                
                <h3>Key Principles</h3>
                <ul>
                    <li>Functional clothing for varying weather</li>
                    <li>Minimalist, understated style</li>
                    <li>Sustainable and ethical fashion choices</li>
                    <li>Quality basics over fast fashion</li>
                </ul>
                
                <h3>Weather Preparedness</h3>
                <p>Sweden has extreme seasons. You'll need good winter clothing including warm coat, layers, waterproof boots, hats, and gloves.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> As Swedes say, "There's no bad weather, only bad clothing." Invest in proper outdoor gear.
                </div>
                
                <h3>Workplace Attire</h3>
                <ul>
                    <li>Generally smart casual</li>
                    <li>Less formal than many European countries</li>
                    <li>Comfort is important</li>
                    <li>Some industries may be more formal</li>
                </ul>
            `
        },
        hygiene: {
            title: "Hygiene Standards in Scandinavia",
            content: `
                <h3>Personal Hygiene</h3>
                <p>Swedes have high hygiene standards. Daily showering, use of deodorant, and clean clothing are expected.</p>
                
                <h3>Sauna and Bathing Culture</h3>
                <ul>
                    <li>Sauna (bastu) is part of Swedish culture</li>
                    <li>Public saunas often have nude bathing (separated by gender)</li>
                    <li>Swimming pools have strict hygiene requirements</li>
                    <li>Shower before entering pools or saunas</li>
                </ul>
                
                <h3>Public Hygiene</h3>
                <p>Sweden is generally very clean. Littering is heavily frowned upon. The pant system encourages bottle/can recycling.</p>
                
                <div class="important">
                    <strong>Important:</strong> Remove shoes when entering Swedish homes. This is standard practice and expected.
                </div>
                
                <h3>Environmental Hygiene</h3>
                <ul>
                    <li>Strict recycling at recycling stations</li>
                    <li>Composting is common</li>
                    <li>Respect nature when hiking (leave no trace)</li>
                    <li>Clean shared spaces</li>
                </ul>
            `
        },
        citizenship: {
            title: "Path to Citizenship in Scandinavia",
            content: `
                <h3>Requirements for Swedish Citizenship</h3>
                <ul>
                    <li>Prove your identity</li>
                    <li>Be at least 18 years old</li>
                    <li>Have permanent residence permit or EU status</li>
                    <li>Have lived in Sweden for 5 years (3 if married to Swedish citizen)</li>
                    <li>Good conduct (no criminal record)</li>
                </ul>
                
                <h3>No Language Test</h3>
                <p>Unlike many countries, Sweden doesn't require a language test for citizenship. However, learning Swedish is essential for integration and strongly recommended.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Take advantage of SFI (Swedish for Immigrants) - free Swedish language classes available to all residents.
                </div>
                
                <h3>Dual Citizenship</h3>
                <p>Sweden allows dual citizenship since 2001. You don't need to renounce your current citizenship to become Swedish.</p>
                
                <h3>Benefits of Swedish Citizenship</h3>
                <ul>
                    <li>Swedish and EU passport</li>
                    <li>Right to vote in all elections</li>
                    <li>Access to more jobs (some require citizenship)</li>
                    <li>Unconditional right to live in Sweden</li>
                    <li>Consular protection worldwide</li>
                </ul>
            `
        },
        relationships: {
            title: "💕 Module 1: Relationships & Respect in Scandinavia 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>Scandinavian society is characterized by strong egalitarianism, respect for personal space, and the philosophy of "lagom" (not too much, not too little). Social equality is deeply valued across all aspects of life.</p>
                
                <h3>Greetings and Personal Space</h3>
                <ul>
                    <li>Handshakes are standard for first meetings and business contexts</li>
                    <li>"Hej" is the common informal greeting in Sweden; "Hei" in Norway</li>
                    <li>Personal space is important - maintain distance when conversing</li>
                    <li>Hugs are reserved for close friends and family</li>
                    <li>Small talk is less common than in other cultures - silence is comfortable</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Scandinavians may seem reserved at first, but once you build trust, friendships are genuine and lasting. Don't mistake quietness for unfriendliness!
                </div>
                
                <h3>Gender Equality</h3>
                <p>Gender equality (jämställdhet) is fundamental. Both partners typically work, share household duties equally, and have generous parental leave. Making assumptions based on gender is inappropriate.</p>
                
                <h3>Family Values</h3>
                <ul>
                    <li>Nuclear families are common; extended family ties exist but are less central than in Southern Europe</li>
                    <li>Children are raised with independence and autonomy</li>
                    <li>Shared parental leave is standard - fathers actively participate in childcare</li>
                    <li>Work-life balance is prioritized for all family members</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> "Fika" (Swedish coffee break) is a crucial social institution. It's time for genuine connection and equality - everyone participates, regardless of position.
                </div>
                
                <h3>The Law of Jante (Jantelagen)</h3>
                <p>An unwritten social code emphasizing modesty and community over individual achievement. Don't boast about accomplishments or wealth - understatement is valued. Success is celebrated quietly.</p>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in Scandinavia 🤝",
            content: `
                <h3>Public Behavior and Social Norms</h3>
                <p>Scandinavian public spaces are characterized by respect for others, environmental consciousness, and adherence to social rules. Order and consideration for the collective good are paramount.</p>
                
                <h3>Key Public Etiquette</h3>
                <ul>
                    <li><strong>Queuing:</strong> Always respect queues. Take a number when available (especially in service contexts)</li>
                    <li><strong>Public transport:</strong> Give up seats for elderly, pregnant, or disabled passengers. Keep voices low. Remove backpacks in crowded spaces</li>
                    <li><strong>Quiet hours:</strong> Respect silence, especially after 10 PM on weekdays and 11 PM on weekends</li>
                    <li><strong>Environmental responsibility:</strong> Recycling is mandatory. Sort waste correctly (paper, plastic, glass, metal, food waste)</li>
                    <li><strong>Outdoor spaces:</strong> Follow "Allemansrätten" (right to roam) - you can access nature freely but must respect private property and leave no trace</li>
                </ul>
                
                <div class="warning">
                    <strong>Legal Requirements:</strong> Registration with authorities is mandatory within specified timeframes (varies by country). Obtain personal identity numbers (personnummer in Sweden, personnummer in Norway, CPR in Denmark) for accessing services.
                </div>
                
                <h3>Neighborhood Relations</h3>
                <ul>
                    <li>Minimal noise after 10 PM is expected and enforced</li>
                    <li>Keep common areas tidy in apartment buildings</li>
                    <li>Respect laundry room schedules if applicable</li>
                    <li>Snow removal is often a shared responsibility - check local regulations</li>
                </ul>
                
                <h3>Environmental Consciousness</h3>
                <p>Scandinavia leads in environmental protection. Expect:</p>
                <ul>
                    <li>Comprehensive recycling systems with multiple categories</li>
                    <li>Deposit systems for bottles and cans (pant)</li>
                    <li>Strong cycling culture - bike lanes are protected</li>
                    <li>Plastic bag fees and sustainable packaging initiatives</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Embrace the outdoor lifestyle. Scandinavians believe "there's no bad weather, only bad clothing." Invest in proper gear for year-round outdoor activities.
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in Scandinavia 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>Scandinavian communication is characterized by understatement, consensus-seeking, and respect for silence. Direct honesty is valued, but delivered without confrontation.</p>
                
                <h3>Key Communication Principles</h3>
                <ul>
                    <li><strong>Silence is golden:</strong> Comfortable pauses in conversation are normal. Don't feel pressured to fill silences</li>
                    <li><strong>Understatement:</strong> Avoid exaggeration or overly enthusiastic language</li>
                    <li><strong>Directness with tact:</strong> Honest feedback is given but wrapped in constructive language</li>
                    <li><strong>Consensus:</strong> Group agreement is sought through discussion, not top-down decisions</li>
                    <li><strong>Flat hierarchies:</strong> First-name basis is standard, even with bosses and professors</li>
                </ul>
                
                <h3>Conversation Topics</h3>
                <div class="tip">
                    <strong>Good Topics:</strong>
                    <ul>
                        <li>Nature, hiking, outdoor activities</li>
                        <li>Seasonal changes and weather (important cultural topic)</li>
                        <li>Sustainable living and environmental issues</li>
                        <li>Travel experiences</li>
                        <li>Sports (cross-country skiing, ice hockey, football)</li>
                        <li>Work-life balance</li>
                    </ul>
                </div>
                
                <div class="warning">
                    <strong>Topics to Approach Carefully:</strong>
                    <ul>
                        <li>Personal finances or income (very private)</li>
                        <li>Religion (mostly secular societies)</li>
                        <li>Excessive self-promotion (violates Jantelagen)</li>
                        <li>Comparing Scandinavian countries unfavorably to each other</li>
                    </ul>
                </div>
                
                <h3>Workplace Communication</h3>
                <ul>
                    <li>Flat organizational structures with minimal hierarchy</li>
                    <li>Everyone's opinion is valued regardless of position</li>
                    <li>Meetings focus on consensus-building</li>
                    <li>Email communication is direct and concise</li>
                    <li>Punctuality is essential - being late is disrespectful</li>
                </ul>
                
                <h3>Digital Communication</h3>
                <p>Scandinavia is highly digitized. Most communication with authorities, banks, and services happens online. Learn to use BankID (Sweden/Norway) or NemID (Denmark) for secure digital identification.</p>
            `
        },
        economicIntegration: {
            title: "💼 Module 4: Economic Integration in Scandinavia 💰",
            content: `
                <h3>Workplace Culture</h3>
                <p>Scandinavian work culture emphasizes work-life balance, flat hierarchies, and collective decision-making. Long hours are uncommon and often frowned upon as poor planning.</p>
                
                <h3>Key Workplace Values</h3>
                <ul>
                    <li><strong>Work-life balance:</strong> Working beyond contracted hours is unusual. Family time is prioritized</li>
                    <li><strong>Flat hierarchies:</strong> Managers are facilitators, not commanders. First names used at all levels</li>
                    <li><strong>Consensus culture:</strong> Decisions made through group discussion (can seem slow initially)</li>
                    <li><strong>Autonomy:</strong> Employees trusted to manage their own time and tasks</li>
                    <li><strong>Equality:</strong> Gender pay gaps are smaller than most countries; parental leave is shared</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> Punctuality is crucial. Arriving on time shows respect for others. Meeting schedules are strictly followed, and meetings often end precisely on time.
                </div>
                
                <h3>Employment Benefits</h3>
                <ul>
                    <li>Generous vacation time (typically 5 weeks minimum)</li>
                    <li>Shared parental leave (Sweden: 480 days total; Norway: 49-59 weeks)</li>
                    <li>Comprehensive social safety net</li>
                    <li>Strong trade unions protecting worker rights</li>
                    <li>Sick leave without loss of pay</li>
                </ul>
                
                <h3>Finding Employment</h3>
                <ul>
                    <li>Job boards: Arbetsförmedlingen (Sweden), NAV (Norway), Jobindex (Denmark)</li>
                    <li>Networking is important but done subtly</li>
                    <li>Language skills: English widely spoken in many sectors, but local language needed for most jobs</li>
                    <li>Credential recognition may be required for regulated professions</li>
                </ul>
                
                <h3>Taxation and Social Services</h3>
                <p>High taxes (40-60% for higher earners) fund comprehensive social services:</p>
                <ul>
                    <li>Universal healthcare</li>
                    <li>Free education (including university)</li>
                    <li>Subsidized childcare</li>
                    <li>Pension system</li>
                    <li>Unemployment insurance</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Join a trade union (fackförbund in Sweden, fagforening in Norway/Denmark). They provide unemployment insurance, legal support, and salary negotiation assistance.
                </div>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare Systems in Scandinavia 💊",
            content: `
                <h3>Universal Healthcare System</h3>
                <p>Scandinavia provides universal healthcare funded through taxation. Quality is high, but systems differ by country. Registration and obtaining a personal identity number is essential for access.</p>
                
                <h3>Primary Care</h3>
                <h4>In Sweden:</h4>
                <ul>
                    <li><strong>Vårdcentral (health center):</strong> Your first point of contact for non-emergency care</li>
                    <li><strong>Registration:</strong> Register with a local vårdcentral after obtaining personnummer</li>
                    <li><strong>1177 Vårdguiden:</strong> Call 1177 for medical advice and to book appointments</li>
                    <li><strong>Costs:</strong> Small patient fees (around 100-300 SEK per visit); free for children under 18</li>
                    <li><strong>High-cost protection:</strong> Annual cap on healthcare costs (around 1,200 SEK)</li>
                </ul>
                
                <h4>In Norway:</h4>
                <ul>
                    <li><strong>Fastlege (GP):</strong> You're assigned a GP or can choose one</li>
                    <li><strong>Patient fees:</strong> Around 200 NOK per visit</li>
                    <li><strong>Frikort:</strong> Free card issued when you reach annual cap (around 2,500 NOK)</li>
                    <li><strong>Helsenorge.no:</strong> Online portal for booking appointments and accessing health records</li>
                </ul>
                
                <h4>In Denmark:</h4>
                <ul>
                    <li><strong>Doctor choice:</strong> Choose between Group 1 (assigned GP, free) or Group 2 (any GP, partial payment)</li>
                    <li><strong>Most services free</strong> for Group 1 patients</li>
                    <li><strong>sundhed.dk:</strong> National health portal for appointments and information</li>
                </ul>
                
                <div class="important">
                    <strong>Emergency Care:</strong>
                    <ul>
                        <li><strong>Emergency number: 112</strong> (same across Scandinavia)</li>
                        <li><strong>Medical advice lines:</strong> 1177 (Sweden), 116117 (Norway), 1813 (Copenhagen)</li>
                        <li><strong>Emergency rooms (akutmottagning/legevakt):</strong> For urgent but not life-threatening issues</li>
                    </ul>
                </div>
                
                <h3>Prescriptions and Pharmacies</h3>
                <ul>
                    <li><strong>E-prescriptions:</strong> Sent electronically to pharmacy of your choice</li>
                    <li><strong>Pharmacy (apotek):</strong> Only pharmacies can sell prescription medicines; some over-the-counter items available in grocery stores</li>
                    <li><strong>Costs:</strong> Prescription fees apply but have annual caps</li>
                    <li><strong>Generic substitution:</strong> Pharmacists may substitute cheaper generic versions</li>
                </ul>
                
                <h3>Dental Care</h3>
                <p><strong>Not free for adults</strong> - dental care is private and can be expensive. Consider dental insurance. Children receive free dental care up to age 18-20 (varies by country).</p>
                
                <h3>Mental Health Services</h3>
                <ul>
                    <li>Accessible through GP referral</li>
                    <li>Some waiting times for specialist care</li>
                    <li>Employee assistance programs common through employers</li>
                    <li>Crisis lines available 24/7</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Scandinavian healthcare emphasizes prevention. Annual health checks, vaccination programs, and screenings are encouraged and often free.
                </div>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom in Scandinavia 📋",
            content: `
                <h3>Digital-First Bureaucracy</h3>
                <p>Scandinavia leads in digital governance. Most interactions with authorities happen online using secure digital ID systems. Embrace digital services - they're efficient and required.</p>
                
                <h3>Essential Registration Steps</h3>
                
                <h4>Upon Arrival:</h4>
                <ul>
                    <li><strong>Register residence:</strong> Within specified timeframe (varies: 1 week in Sweden, 8 days in Norway)</li>
                    <li><strong>Obtain personal ID number:</strong>
                        <ul>
                            <li>Sweden: Personnummer from Skatteverket (Tax Agency)</li>
                            <li>Norway: Fødselsnummer/D-nummer from Skatteetaten</li>
                            <li>Denmark: CPR-nummer from Borgerservice</li>
                        </ul>
                    </li>
                    <li><strong>Set up digital ID:</strong> BankID (Sweden/Norway) or NemID/MitID (Denmark)</li>
                    <li><strong>Register for tax:</strong> Automatic with residence registration</li>
                </ul>
                
                <div class="important">
                    <strong>Personal ID Number is Essential:</strong> You need this for nearly everything - banking, healthcare, employment, phone contracts, apartment rentals. Prioritize obtaining it immediately.
                </div>
                
                <h3>Banking</h3>
                <ul>
                    <li><strong>Bank account:</strong> Needed for salary and bills. Requires personal ID number</li>
                    <li><strong>BankID/NemID:</strong> Used for all online transactions and government services</li>
                    <li><strong>Major banks:</strong> Swedbank, Handelsbanken, Nordea (Sweden); DNB (Norway); Danske Bank (Denmark)</li>
                    <li><strong>Cashless society:</strong> Most places don't accept cash - cards and mobile payments dominate</li>
                </ul>
                
                <h3>Housing Registration</h3>
                <ul>
                    <li>Register your address with population registry</li>
                    <li>Notify authorities within days of moving</li>
                    <li>Landlords report rentals to authorities</li>
                    <li>Housing contracts are legally binding - read carefully</li>
                </ul>
                
                <h3>Tax System</h3>
                <p>Transparent and largely automatic:</p>
                <ul>
                    <li><strong>Automatic tax deduction:</strong> Employers deduct taxes from salary</li>
                    <li><strong>Tax returns:</strong> Pre-filled; review and approve online</li>
                    <li><strong>Tax rates:</strong> Progressive, ranging 30-60% depending on income</li>
                    <li><strong>Tax benefits:</strong> Deductions for commuting, union fees, pension contributions</li>
                </ul>
                
                <div class="tip">
                    <strong>Digital Services:</strong>
                    <ul>
                        <li>Sweden: Skatteverket.se, Försäkringskassan.se, 1177.se</li>
                        <li>Norway: Skatteetaten.no, NAV.no, Helsenorge.no</li>
                        <li>Denmark: Skat.dk, Borger.dk, Sundhed.dk</li>
                    </ul>
                </div>
                
                <h3>Driving and Transportation</h3>
                <ul>
                    <li><strong>Driver's license:</strong> EU licenses valid; others must exchange within 1 year</li>
                    <li><strong>Vehicle registration:</strong> Register with transport authority if bringing a car</li>
                    <li><strong>Public transport:</strong> Extensive and efficient; monthly passes available</li>
                </ul>
                
                <h3>Unemployment and Social Insurance</h3>
                <ul>
                    <li>Sweden: Arbetsförmedlingen (employment office), A-kassa (unemployment insurance through unions)</li>
                    <li>Norway: NAV (comprehensive social services)</li>
                    <li>Denmark: Jobcenter and A-kasse</li>
                </ul>
                
                <h3>Language Services</h3>
                <ul>
                    <li>Free Swedish/Norwegian/Danish classes (SFI/language schools)</li>
                    <li>Integration programs for newcomers</li>
                    <li>Many services available in English, but learning the local language is essential for integration</li>
                </ul>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools in Scandinavia 📚",
            content: `
                <h3>Education Philosophy</h3>
                <p>Scandinavian education emphasizes equality, critical thinking, and student well-being over competition. Education is free from preschool through university, funded by taxes.</p>
                
                <h3>School System Structure</h3>
                
                <h4>Early Childhood Education (1-6 years):</h4>
                <ul>
                    <li><strong>Förskola/barnehage (preschool):</strong> Available from age 1; heavily subsidized</li>
                    <li><strong>Play-based learning:</strong> Focus on social skills, outdoor play, and development</li>
                    <li><strong>Costs:</strong> Income-based fees with maximum caps (e.g., 1,500 SEK/month in Sweden)</li>
                    <li><strong>Guaranteed spots:</strong> Right to childcare within reasonable timeframe</li>
                </ul>
                
                <h4>Primary School (6-16 years):</h4>
                <ul>
                    <li><strong>Grundskola/barneskole (compulsory education):</strong> 9-10 years, starting age 6-7</li>
                    <li><strong>Free of charge:</strong> Tuition, meals, books, and materials provided</li>
                    <li><strong>Curriculum:</strong> Broad subjects including mother tongue support for immigrant children</li>
                    <li><strong>No standardized testing:</strong> Assessment is continuous and holistic (though varies by country)</li>
                    <li><strong>Homework:</strong> Minimal compared to other countries; emphasis on work-life balance</li>
                </ul>
                
                <h4>Upper Secondary School (16-19 years):</h4>
                <ul>
                    <li><strong>Gymnasium/videregående skole:</strong> Optional but 90%+ attend</li>
                    <li><strong>Academic or vocational tracks:</strong> Both respected equally</li>
                    <li><strong>Free education:</strong> Tuition-free with study grants available</li>
                    <li><strong>Grades matter:</strong> Determine university entrance</li>
                </ul>
                
                <div class="important">
                    <strong>School Culture:</strong>
                    <ul>
                        <li>First-name basis with teachers (reflects egalitarian values)</li>
                        <li>Student autonomy and responsibility emphasized</li>
                        <li>Outdoor education in all weather conditions</li>
                        <li>No school uniforms</li>
                        <li>Anti-bullying programs standard</li>
                    </ul>
                </div>
                
                <h3>University and Higher Education</h3>
                <ul>
                    <li><strong>Tuition-free:</strong> For EU/EEA citizens; fees for non-EU (varies by country)</li>
                    <li><strong>Application:</strong> Centralized systems (antagning.se in Sweden)</li>
                    <li><strong>Study grants:</strong> CSN (Sweden), Lånekassen (Norway) provide grants and loans</li>
                    <li><strong>Teaching style:</strong> Independent study, critical thinking, group work</li>
                    <li><strong>English-taught programs:</strong> Many master's programs offered in English</li>
                </ul>
                
                <h3>Parent Involvement</h3>
                <ul>
                    <li>Parent-teacher meetings (utvecklingssamtal) twice yearly</li>
                    <li>Parents expected to engage but not hover</li>
                    <li>School councils include parent representatives</li>
                    <li>Communication through digital platforms (Skolplattformen, etc.)</li>
                </ul>
                
                <h3>Special Education and Support</h3>
                <ul>
                    <li>Inclusive education - children with special needs integrated when possible</li>
                    <li>Extra support (särskilt stöd) available for those who need it</li>
                    <li>Language support for immigrant children (mother tongue instruction)</li>
                    <li>School health services (nurse, counselor, psychologist)</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Schools emphasize outdoor time in all weather. Invest in proper clothing for your children - layers, waterproofs, and warm winter gear are essential.
                </div>
                
                <h3>Holiday Schedule</h3>
                <ul>
                    <li>Long summer break (June-August)</li>
                    <li>Christmas break (2-3 weeks)</li>
                    <li>Winter break (February/March - sportlov/vinterferie)</li>
                    <li>Shorter autumn and spring breaks</li>
                </ul>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith in Scandinavia 🤝",
            content: `
                <h3>Secular Society</h3>
                <p>Scandinavia is among the most secular regions in the world. While historically Lutheran Christian, most Scandinavians are non-practicing or non-religious. Religion is considered a private matter.</p>
                
                <h3>Religious Landscape</h3>
                <ul>
                    <li><strong>Historically Lutheran:</strong> State churches (Church of Sweden, Church of Norway, Church of Denmark) still exist but separated from state (Sweden 2000, Norway 2012)</li>
                    <li><strong>Low church attendance:</strong> Only 2-5% attend services regularly</li>
                    <li><strong>Cultural Christianity:</strong> Many maintain membership for baptisms, weddings, and funerals but are not religiously active</li>
                    <li><strong>Growing diversity:</strong> Muslim communities (especially in urban areas), Catholic, Orthodox, and other faiths represented</li>
                </ul>
                
                <div class="tip">
                    <strong>Religious Freedom:</strong> Complete freedom of religion guaranteed by law. You can practice any faith, wear religious symbols, and establish places of worship. Discrimination based on religion is illegal.
                </div>
                
                <h3>Church Tax</h3>
                <ul>
                    <li>Members of state churches pay church tax (around 1% of income)</li>
                    <li>You can opt out by leaving the church (uttrade/utmelding)</li>
                    <li>Process is simple - online or written request</li>
                    <li>Doesn't affect access to church ceremonies if you want them later</li>
                </ul>
                
                <h3>Religious Observance in Daily Life</h3>
                <ul>
                    <li><strong>Christian holidays:</strong> Public holidays include Christmas, Easter, Pentecost - observed as cultural traditions more than religious ones</li>
                    <li><strong>Christmas (Jul):</strong> Major cultural celebration focused on family, food, and traditions</li>
                    <li><strong>Midsummer:</strong> Pre-Christian celebration, now secular festival</li>
                    <li><strong>Lucia (Dec 13):</strong> Swedish tradition with both Christian and pagan roots</li>
                </ul>
                
                <h3>Muslim Community</h3>
                <ul>
                    <li>Mosques available in major cities</li>
                    <li>Halal food increasingly available in supermarkets</li>
                    <li>Some accommodations for prayer times in workplaces (varies)</li>
                    <li>Islamic schools and organizations active</li>
                </ul>
                
                <h3>Workplace and School</h3>
                <ul>
                    <li><strong>Religious holidays:</strong> Can request time off for non-Christian religious holidays; employers should accommodate when possible</li>
                    <li><strong>Religious clothing:</strong> Generally accepted, though face-covering bans exist in some contexts (varies by country and situation)</li>
                    <li><strong>School:</strong> Religious education is comparative (learning about all religions), not confessional</li>
                    <li><strong>Food:</strong> Halal/kosher options increasingly available but not guaranteed in all settings</li>
                </ul>
                
                <div class="important">
                    <strong>Social Attitudes:</strong>
                    <ul>
                        <li>Strong secularism means religion rarely discussed in social or professional settings</li>
                        <li>Proselytizing considered inappropriate</li>
                        <li>Religious beliefs expected to be private</li>
                        <li>LGBTQ+ rights strongly supported - religious objections to same-sex relationships may face social disapproval</li>
                        <li>Gender equality fundamental - religious practices perceived as restricting women's autonomy may face criticism</li>
                    </ul>
                </div>
                
                <h3>Integration and Religion</h3>
                <p>Scandinavia values integration over multiculturalism in some aspects. You're free to practice your religion, but expected to accept core societal values: gender equality, LGBTQ+ rights, secular governance, and children's rights.</p>
                
                <h3>Finding Religious Communities</h3>
                <ul>
                    <li>Online directories for mosques, synagogues, churches, temples</li>
                    <li>Cultural associations often linked to religious communities</li>
                    <li>University student organizations for various faiths</li>
                    <li>Social media groups connecting believers</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> If your faith is important to you, seek out communities early. They provide social networks and cultural connections, especially valuable during dark winter months.
                </div>
            `
        }
    },
    balkans: {
        name: "Balkans",
        flag: "🇷🇸🇭🇷🇧🇦",
        relationships: {
            title: "💕 Module 1: Relationships & Respect in the Balkans 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>Balkan society is characterized by strong hospitality traditions, extended family ties, and warm interpersonal relationships. The region values generosity, loyalty, and community bonds.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>Warm handshakes are common, often with direct eye contact</li>
                    <li>Cheek kisses (usually 3) among friends and family</li>
                    <li>Hugging is common between close acquaintances</li>
                    <li>Greetings are often accompanied by inquiries about family</li>
                </ul>
                
                <h3>Hospitality</h3>
                <p>Hospitality is a cornerstone of Balkan culture. Guests are treated with great generosity, and refusing food or drink can be seen as impolite.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> When visiting a Balkan home, expect to be offered food and drinks. It's polite to accept, even if just a small amount.
                </div>
                
                <h3>Family Values</h3>
                <p>Extended family networks are very important. Multiple generations often live together or in close proximity, and family obligations take priority.</p>
                
                <div class="important">
                    <strong>Important:</strong> Respect for elders is fundamental. Always greet older family members first and show deference to their opinions.
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in the Balkans 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>Balkan communication tends to be warm, expressive, and direct. Animated conversations with gestures are common and show engagement.</p>
                
                <h3>Good Topics</h3>
                <ul>
                    <li>Family and children</li>
                    <li>Food and local cuisine</li>
                    <li>Sports, especially football and basketball</li>
                    <li>Music and cultural traditions</li>
                    <li>Local history and heritage</li>
                </ul>
                
                <h3>Topics to Approach Carefully</h3>
                <ul>
                    <li>Recent conflicts and wars (1990s)</li>
                    <li>Ethnic and religious tensions</li>
                    <li>Political affiliations</li>
                    <li>Territorial disputes</li>
                </ul>
                
                <div class="warning">
                    <strong>Note:</strong> Historical sensitivities vary greatly by country and region. Listen more than you speak until you understand the local context.
                </div>
                
                <h3>Coffee Culture</h3>
                <p>Coffee (often Turkish-style) is central to social life. Invitations for coffee are opportunities for conversation and relationship building. Never rush through coffee.</p>
            `
        },
        dating: {
            title: "Dating Culture in the Balkans",
            content: `
                <h3>Meeting People</h3>
                <p>In the Balkans, people often meet through:</p>
                <ul>
                    <li>Extended family and friend networks</li>
                    <li>Social gatherings and celebrations</li>
                    <li>Cafés and nightlife venues</li>
                    <li>Dating apps (increasingly popular)</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <ul>
                    <li>Traditional gender roles are more common, though this varies by generation</li>
                    <li>Men often take the initiative in asking someone out</li>
                    <li>Chivalry is appreciated - opening doors, paying for dates</li>
                    <li>Family approval often matters in serious relationships</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Meeting the family is a significant step. Be prepared to be thoroughly welcomed (and fed) when this happens.
                </div>
                
                <h3>Relationship Progression</h3>
                <p>Relationships often develop within social circles. Once serious, partners are typically introduced to family relatively early compared to Western Europe.</p>
            `
        },
        economicIntegration: {
            title: "💷 Module 4: Economic Integration in the Balkans 💼",
            content: `
                <h3>Workplace Culture</h3>
                <p>Balkan workplaces often blend formal hierarchies with personal relationships. Building trust and connections with colleagues is important for professional success.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Personal relationships often facilitate business</li>
                    <li>Hierarchy is respected but relationships matter</li>
                    <li>Flexibility and adaptability are valued</li>
                    <li>Coffee breaks are important social rituals</li>
                </ul>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>Formal dress is expected in business settings</li>
                    <li>Titles and academic degrees are respected</li>
                    <li>Business cards are exchanged formally</li>
                    <li>Meetings may start with personal conversation</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> Building personal rapport before business discussions is common and expected. Don't rush straight to business matters.
                </div>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in the Balkans 🤝",
            content: `
                <h3>Administrative Requirements</h3>
                <p>Bureaucratic processes can be complex and time-consuming. Patience and persistence are necessary when dealing with official matters.</p>
                
                <h3>Documentation</h3>
                <ul>
                    <li>Keep multiple copies of all important documents</li>
                    <li>Registration with local authorities is typically required</li>
                    <li>Expect to need certified translations of foreign documents</li>
                    <li>Apostilles may be required for official recognition</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Having a local contact who can help navigate bureaucracy is invaluable. Personal connections often help expedite processes.
                </div>
                
                <h3>Community Involvement</h3>
                <ul>
                    <li>Neighborhood and community ties are strong</li>
                    <li>Religious communities play significant social roles</li>
                    <li>Volunteering through religious or community organizations is common</li>
                </ul>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare Systems in the Balkans 💊",
            content: `
                <h3>Healthcare Overview</h3>
                <p>Balkan healthcare systems vary significantly by country but share common challenges: mix of public and private care, infrastructure gaps, and reliance on personal connections. EU member states (Croatia, Slovenia) have more integrated systems.</p>
                
                <h3>Public Healthcare Access</h3>
                <ul>
                    <li><strong>Mandatory health insurance:</strong> Registration required for residents and workers</li>
                    <li><strong>Health cards:</strong> Issued upon registration with health insurance authority</li>
                    <li><strong>Primary care centers:</strong> Dom zdravlja (health centers) provide basic services</li>
                    <li><strong>Specialist referrals:</strong> GP referral typically required for specialist visits</li>
                    <li><strong>Hospital care:</strong> Public hospitals provide inpatient and emergency services</li>
                </ul>
                
                <div class="warning">
                    <strong>Reality Check:</strong> Public healthcare can be underfunded with long wait times, especially for non-emergency procedures. Many residents supplement with private care or travel abroad for major treatments.
                </div>
                
                <h3>Country-Specific Systems</h3>
                
                <h4>Serbia:</h4>
                <ul>
                    <li>Register with RFZO (Republican Health Insurance Fund)</li>
                    <li>Health booklet (zdravstvena knjižica) required</li>
                    <li>Co-payments for some services</li>
                    <li>Private clinics widely used for faster service</li>
                </ul>
                
                <h4>Croatia (EU):</h4>
                <ul>
                    <li>HZZO (Croatian Health Insurance Institute) administers system</li>
                    <li>EU health insurance card valid for EU citizens</li>
                    <li>Better integrated with EU healthcare standards</li>
                    <li>Mix of public and private providers</li>
                </ul>
                
                <h4>Bosnia and Herzegovina:</h4>
                <ul>
                    <li>Complex system divided by entities (Federation and Republika Srpska)</li>
                    <li>Health insurance through employment or separate registration</li>
                    <li>Limited resources in public system</li>
                </ul>
                
                <h3>Private Healthcare</h3>
                <ul>
                    <li><strong>Widely used:</strong> Many use private clinics alongside public system</li>
                    <li><strong>Costs moderate:</strong> More affordable than Western Europe</li>
                    <li><strong>Faster service:</strong> Shorter wait times and often better facilities</li>
                    <li><strong>Specialists accessible:</strong> Direct access without referrals</li>
                    <li><strong>Medical tourism:</strong> Some Balkans countries (Serbia) attract medical tourists for dental, cosmetic procedures</li>
                </ul>
                
                <h3>Emergency Care</h3>
                <ul>
                    <li><strong>Emergency number: 194</strong> (ambulance in Serbia); 112 works across most countries</li>
                    <li><strong>Hitna pomoć:</strong> Emergency departments at hospitals</li>
                    <li><strong>24-hour pharmacies:</strong> Available in larger cities (dežurna apoteka)</li>
                </ul>
                
                <h3>Pharmacies</h3>
                <ul>
                    <li>Prescription required for most medications</li>
                    <li>Some antibiotics more readily available than Western Europe</li>
                    <li>Generic medications available and affordable</li>
                    <li>Pharmacists knowledgeable and provide advice</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Build a relationship with a trusted GP in private practice. Personal connections can facilitate access to specialists and expedite care. Having the doctor's mobile number is common and useful.
                </div>
                
                <h3>Health Insurance</h3>
                <ul>
                    <li>Employed: Insurance through employer contributions</li>
                    <li>Self-employed: Must register and pay independently</li>
                    <li>Private insurance: Optional supplemental insurance available</li>
                    <li>International insurance: Recommended for comprehensive coverage</li>
                </ul>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom in the Balkans 📋",
            content: `
                <h3>Bureaucratic Reality</h3>
                <p>Balkan bureaucracy can be complex, slow, and frustrating. Personal connections (veze/veza) often facilitate processes. Patience, persistence, and keeping all documentation organized are essential. Systems are improving but remain challenging.</p>
                
                <div class="important">
                    <strong>Key Principle:</strong> In the Balkans, personal relationships often matter as much as official procedures. Having a local friend or contact to help navigate bureaucracy is invaluable. Don't hesitate to ask for help.
                </div>
                
                <h3>Essential Registration Steps</h3>
                
                <h4>Upon Arrival:</h4>
                <ul>
                    <li><strong>Register residence:</strong> Report to local police station within specified timeframe (typically 24-48 hours)</li>
                    <li><strong>Temporary residence permit:</strong> Non-EU citizens apply at police/immigration office</li>
                    <li><strong>Address registration:</strong> Must register at local municipality (opština/općina)</li>
                    <li><strong>Personal ID number:</strong> Essential for all transactions (JMBG in Serbia, OIB in Croatia)</li>
                </ul>
                
                <h3>Key Documents and Numbers</h3>
                <ul>
                    <li><strong>Personal identification number:</strong> Unique ID (JMBG, OIB, etc.) needed for everything</li>
                    <li><strong>Residence permit:</strong> Temporary or permanent (boravišna dozvola)</li>
                    <li><strong>Work permit:</strong> Required for non-EU citizens (radna dozvola)</li>
                    <li><strong>Tax number:</strong> For employment and business (PIB in Serbia)</li>
                </ul>
                
                <h3>Banking</h3>
                <ul>
                    <li>Proof of residence required (landlord's confirmation)</li>
                    <li>Personal ID number essential</li>
                    <li>Employment contract or proof of income often needed</li>
                    <li>International banks (Raiffeisen, UniCredit) present in many Balkan countries</li>
                    <li>Cash still widely used; have both cash and cards</li>
                </ul>
                
                <h3>Documentation Tips</h3>
                <ul>
                    <li><strong>Certified translations:</strong> Foreign documents must be officially translated</li>
                    <li><strong>Apostille required:</strong> For recognizing foreign official documents</li>
                    <li><strong>Multiple copies:</strong> Always have several certified copies of important documents</li>
                    <li><strong>Original documents:</strong> Bring originals plus copies to every office</li>
                    <li><strong>Notarization common:</strong> Many documents require notary certification</li>
                </ul>
                
                <div class="warning">
                    <strong>Bureaucratic Challenges:</strong>
                    <ul>
                        <li>Information inconsistent - different officials may give different answers</li>
                        <li>Long waiting times at offices common</li>
                        <li>Limited English in government offices</li>
                        <li>Processes can take longer than officially stated</li>
                        <li>Patience and multiple visits often necessary</li>
                    </ul>
                </div>
                
                <h3>Employment and Social Security</h3>
                <ul>
                    <li><strong>Work permit:</strong> Employer typically applies on your behalf</li>
                    <li><strong>Employment contract:</strong> Must be registered with authorities</li>
                    <li><strong>Social security registration:</strong> Automatic through employment</li>
                    <li><strong>Contributions:</strong> Employer and employee both contribute to pension, health, unemployment</li>
                </ul>
                
                <h3>Taxation</h3>
                <ul>
                    <li><strong>Income tax:</strong> Withheld by employer; rates vary by country (typically 10-20%)</li>
                    <li><strong>Social contributions:</strong> Substantial additional deductions (25-35%)</li>
                    <li><strong>Tax residence:</strong> Determined by where you spend most of year</li>
                    <li><strong>Annual declaration:</strong> May be required depending on income sources</li>
                </ul>
                
                <h3>Property and Utilities</h3>
                <ul>
                    <li><strong>Rental contracts:</strong> Should be registered with tax authorities</li>
                    <li><strong>Utilities:</strong> Often require physical payment at post office or bank (modernizing)</li>
                    <li><strong>Property ownership:</strong> Foreigners face restrictions in some countries; research carefully</li>
                </ul>
                
                <h3>Driving</h3>
                <ul>
                    <li><strong>Driver's license:</strong> EU licenses valid; others may need to exchange or get local license</li>
                    <li><strong>Vehicle registration:</strong> Complex if importing; local assistance recommended</li>
                    <li><strong>Insurance mandatory:</strong> Third-party liability minimum</li>
                    <li><strong>Annual registration:</strong> Vehicles must be re-registered annually with technical inspection</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Consider hiring an agency or lawyer for complex bureaucratic procedures (residence permits, business registration, property purchases). The cost is often worth the time and frustration saved.
                </div>
                
                <h3>Corruption and "Facilitation"</h3>
                <p>While improving, corruption persists in some areas. Be aware:</p>
                <ul>
                    <li>Never offer bribes - it's illegal and risky</li>
                    <li>"Expediting fees" through official channels sometimes exist</li>
                    <li>Personal connections (veze) can help without corruption</li>
                    <li>Report any demands for unofficial payments to supervisors or anti-corruption agencies</li>
                </ul>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools in the Balkans 📚",
            content: `
                <h3>Education System Overview</h3>
                <p>Balkan education systems are undergoing reform but maintain traditional structures. Education is free and compulsory through secondary level. Quality varies significantly between urban and rural areas.</p>
                
                <h3>School Structure</h3>
                
                <h4>Pre-Primary (3-6 years):</h4>
                <ul>
                    <li><strong>Vrtić/Vrtec (kindergarten):</strong> Optional, some fees apply</li>
                    <li>Limited availability, especially in rural areas</li>
                    <li>Waitlists common in cities</li>
                    <li>Prepare children for primary school entry</li>
                </ul>
                
                <h4>Primary School (6-14/15 years):</h4>
                <ul>
                    <li><strong>Osnovna škola:</strong> Compulsory, free, 8-9 years</li>
                    <li><strong>Grade 1-4:</strong> General primary education, single teacher</li>
                    <li><strong>Grade 5-8/9:</strong> Subject-specific teachers</li>
                    <li>Traditional teaching methods, emphasis on memorization</li>
                    <li>Homework substantial from early grades</li>
                </ul>
                
                <h4>Secondary School (14/15-18 years):</h4>
                <ul>
                    <li><strong>Gimnazija (general/academic track):</strong> Prepares for university</li>
                    <li><strong>Vocational schools:</strong> Trade-specific education (3-4 years)</li>
                    <li><strong>Entrance exams:</strong> Required for some competitive schools</li>
                    <li><strong>Matura/Graduation exam:</strong> Final exam determines university entrance</li>
                </ul>
                
                <div class="important">
                    <strong>School Culture:</strong>
                    <ul>
                        <li>Respect for teachers (nastavnik/učitelj) is paramount</li>
                        <li>Formal relationships between students and teachers</li>
                        <li>Competitive academic environment</li>
                        <li>Private tutoring very common for extra support</li>
                        <li>Traditional values emphasized</li>
                    </ul>
                </div>
                
                <h3>School Schedule</h3>
                <ul>
                    <li><strong>Hours:</strong> Typically 8:00 AM - 1:00/2:00 PM</li>
                    <li><strong>Shifts:</strong> Some schools run double shifts due to space constraints</li>
                    <li><strong>Saturday:</strong> Occasionally classes on Saturday mornings</li>
                    <li><strong>Breaks:</strong> Short recess periods; no extended lunch break</li>
                </ul>
                
                <h3>Public vs. Private Schools</h3>
                <ul>
                    <li><strong>Public schools:</strong> Free, majority attend these</li>
                    <li><strong>Private schools:</strong> Growing sector, tuition fees, often higher quality facilities</li>
                    <li><strong>International schools:</strong> Available in capitals and major cities; expensive; English instruction</li>
                    <li><strong>Religious schools:</strong> Some church-affiliated schools exist</li>
                </ul>
                
                <h3>University and Higher Education</h3>
                <ul>
                    <li><strong>Public universities:</strong> Low tuition (often minimal or free for high achievers)</li>
                    <li><strong>Entrance exams:</strong> Competitive; matura scores crucial</li>
                    <li><strong>Bologna Process:</strong> Three-cycle system implemented (Bachelor, Master, PhD)</li>
                    <li><strong>Language:</strong> Primarily taught in national language; some English programs</li>
                    <li><strong>Student life:</strong> Vibrant student culture; affordable living</li>
                </ul>
                
                <h3>Academic Approach</h3>
                <ul>
                    <li>Lecture-based teaching dominant</li>
                    <li>Emphasis on theoretical knowledge</li>
                    <li>Memorization important for exams</li>
                    <li>Less interactive than Western European classrooms</li>
                    <li>Respect for academic hierarchy strong</li>
                </ul>
                
                <h3>For Foreign Students</h3>
                <ul>
                    <li><strong>Language barrier:</strong> Learning local language essential for public schools</li>
                    <li><strong>Language support:</strong> Limited; varies by school</li>
                    <li><strong>Credential recognition:</strong> Foreign qualifications assessed for grade placement</li>
                    <li><strong>Integration:</strong> Children often integrate faster through school friendships</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Private tutoring (instrukcije/privatni časovi) is extremely common and socially accepted. If your child needs extra help or language support, hiring a tutor is normal and affordable.
                </div>
                
                <h3>Parent Involvement</h3>
                <ul>
                    <li>Parent-teacher meetings (roditeljski sastanak) periodically</li>
                    <li>Parents expected to monitor homework and academic progress closely</li>
                    <li>School councils include parent representatives</li>
                    <li>Fundraising for school improvements common</li>
                </ul>
                
                <h3>Holiday Schedule</h3>
                <ul>
                    <li><strong>Summer:</strong> June-August (long break)</li>
                    <li><strong>Winter:</strong> Two weeks around Orthodox or Catholic Christmas (varies)</li>
                    <li><strong>Spring:</strong> Easter break (1-2 weeks)</li>
                    <li><strong>Religious holidays:</strong> Slava, Patron Saint days (regional)</li>
                </ul>
                
                <h3>Challenges</h3>
                <ul>
                    <li>Infrastructure can be dated, especially in rural areas</li>
                    <li>Teacher salaries low, affecting quality in some cases</li>
                    <li>Political interference in curricula (especially history) in some countries</li>
                    <li>Brain drain: many educated young people emigrate</li>
                </ul>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith in the Balkans 🤝",
            content: `
                <h3>Religious Landscape</h3>
                <p>The Balkans is one of Europe's most religiously diverse regions. Orthodox Christianity, Catholicism, and Islam coexist, shaped by complex history. Religion is intertwined with national and cultural identity, particularly after Yugoslav Wars.</p>
                
                <div class="important">
                    <strong>Historical Context:</strong> Religious identity in the Balkans is deeply connected to ethnicity and history. The 1990s conflicts were partly along religious/ethnic lines. Be respectful and sensitive - these topics can evoke strong emotions.
                </div>
                
                <h3>Major Religious Communities</h3>
                
                <h4>Orthodox Christianity:</h4>
                <ul>
                    <li><strong>Predominant in:</strong> Serbia, Montenegro, North Macedonia, parts of Bosnia</li>
                    <li><strong>Serbian Orthodox Church:</strong> Important national institution</li>
                    <li><strong>Traditions:</strong> Christmas (January 7), Easter, Slava (patron saint day) celebrations</li>
                    <li><strong>Churches:</strong> Beautiful monasteries; important cultural heritage</li>
                    <li><strong>Practices:</strong> Icons, fasting periods, rich liturgical tradition</li>
                </ul>
                
                <h4>Catholicism:</h4>
                <ul>
                    <li><strong>Predominant in:</strong> Croatia, Slovenia, parts of Bosnia</li>
                    <li><strong>Vatican ties:</strong> Strong connection to Catholic Church</li>
                    <li><strong>Traditions:</strong> Christmas (December 25), Easter, saints' days</li>
                    <li><strong>Pilgrimage sites:</strong> Medjugorje in Bosnia is major Catholic pilgrimage destination</li>
                </ul>
                
                <h4>Islam:</h4>
                <ul>
                    <li><strong>Predominant in:</strong> Albania, Kosovo, Bosnia (Bosniaks), parts of North Macedonia</li>
                    <li><strong>Mainly Sunni:</strong> Ottoman heritage</li>
                    <li><strong>Mosques:</strong> Historic mosques in cities (many from Ottoman period)</li>
                    <li><strong>Practices:</strong> Mix of traditional and more secular approaches</li>
                    <li><strong>Ramadan:</strong> Observed by practicing Muslims; some businesses adjust hours</li>
                </ul>
                
                <h3>Religion and National Identity</h3>
                <p>In the Balkans, religion often overlaps with ethnic identity:</p>
                <ul>
                    <li>Serbs: Predominantly Orthodox Christian</li>
                    <li>Croats: Predominantly Catholic</li>
                    <li>Bosniaks: Predominantly Muslim</li>
                    <li>Slovenes: Predominantly Catholic</li>
                    <li>Albanians: Predominantly Muslim, some Catholic</li>
                </ul>
                
                <div class="warning">
                    <strong>Sensitivity Required:</strong> Avoid making assumptions about someone's religion based on ethnicity. Don't bring up religious/ethnic conflicts unless they raise it. Respect that for many, religious identity is cultural rather than strictly about faith.
                </div>
                
                <h3>Religious Observance</h3>
                <ul>
                    <li><strong>Varies widely:</strong> From devout to culturally religious to secular</li>
                    <li><strong>Life events:</strong> Baptisms, weddings, funerals often religious even for non-practicing individuals</li>
                    <li><strong>Holidays observed:</strong> Major religious holidays are public holidays</li>
                    <li><strong>Church attendance:</strong> Higher than Western Europe but varies by region and age</li>
                </ul>
                
                <h3>Religious Holidays</h3>
                
                <h4>Orthodox:</h4>
                <ul>
                    <li>Christmas: January 7 (Julian calendar)</li>
                    <li>Easter: Date varies (Julian calendar)</li>
                    <li>Slava: Family patron saint day (uniquely Serbian tradition)</li>
                    <li>St. Sava: January 27 (Serbia's patron saint)</li>
                </ul>
                
                <h4>Catholic:</h4>
                <ul>
                    <li>Christmas: December 25</li>
                    <li>Easter: Date varies (Gregorian calendar)</li>
                    <li>Assumption: August 15</li>
                    <li>All Saints: November 1</li>
                </ul>
                
                <h4>Islamic:</h4>
                <ul>
                    <li>Ramadan: Month of fasting</li>
                    <li>Eid al-Fitr: End of Ramadan</li>
                    <li>Eid al-Adha: Festival of Sacrifice</li>
                    <li>Kurban Bajram: Major celebration in Bosnia, Albania</li>
                </ul>
                
                <h3>Slava - Unique Serbian Tradition</h3>
                <p>Slava is celebration of family's patron saint - uniquely Serbian Orthodox custom:</p>
                <ul>
                    <li>Each family has patron saint (inherited through paternal line)</li>
                    <li>Annual celebration with specific rituals</li>
                    <li>Guests invited to family home</li>
                    <li>Food, drink, blessing of bread and wheat</li>
                    <li>Important social and religious event</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> If invited to Slava, it's an honor. Bring a gift (wine, sweets), dress nicely, and participate respectfully in rituals even if not Orthodox yourself.
                </div>
                
                <h3>Religious Freedom</h3>
                <ul>
                    <li>Guaranteed by law in all Balkan countries</li>
                    <li>Freedom to practice any faith or none</li>
                    <li>Religious discrimination illegal but social tensions can exist</li>
                    <li>Mixed marriages exist but can face family/social challenges</li>
                </ul>
                
                <h3>Interfaith Relations</h3>
                <ul>
                    <li>Generally peaceful coexistence in most areas</li>
                    <li>Some regions have mixed communities with good relations</li>
                    <li>Legacy of conflict means sensitivities remain in some areas</li>
                    <li>Younger generations often more tolerant</li>
                </ul>
                
                <h3>Religious Sites</h3>
                <ul>
                    <li><strong>Monasteries:</strong> Studenica, Visoki Dečani, etc. - important cultural heritage</li>
                    <li><strong>Mosques:</strong> Gazi Husrev-beg (Sarajevo), historic Ottoman mosques</li>
                    <li><strong>Catholic churches:</strong> Zagreb Cathedral, pilgrimage sites</li>
                    <li>Many sites open to respectful visitors regardless of faith</li>
                </ul>
                
                <h3>Workplace and Daily Life</h3>
                <ul>
                    <li>Religious holidays are public holidays (varies by country/region)</li>
                    <li>Accommodation for prayer or fasting generally available</li>
                    <li>Religious symbols worn openly by some</li>
                    <li>Halal food available in areas with Muslim populations</li>
                    <li>Fasting periods (Orthodox Lent, Ramadan) respected</li>
                </ul>
                
                <h3>For Newcomers</h3>
                <ul>
                    <li>Learn about local religious landscape and history</li>
                    <li>Respect religious observances even if not participating</li>
                    <li>Avoid discussing religious/ethnic politics unless well-informed</li>
                    <li>Finding your religious community can provide social network</li>
                    <li>Churches, mosques, temples welcome those seeking their communities</li>
                </ul>
            `
        }
    },
    greece: {
        name: "Greece",
        flag: "🇬🇷",
        relationships: {
            title: "💕 Module 1: Relationships & Respect in Greece 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>Greek society is characterized by warmth, expressiveness, and strong family bonds. The concept of "philoxenia" (hospitality to strangers) is deeply embedded in the culture.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>Warm handshakes with direct eye contact</li>
                    <li>Cheek kisses (usually 2) between friends and family</li>
                    <li>Hugging is common among close acquaintances</li>
                    <li>"Yia sou" (informal) or "Yia sas" (formal) are standard greetings</li>
                </ul>
                
                <h3>Philoxenia (Hospitality)</h3>
                <p>Greeks take pride in their hospitality. Visitors to homes will be offered food and refreshments, and refusing is considered impolite.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> When invited to a Greek home, bring a small gift such as pastries, wine, or flowers for the hostess.
                </div>
                
                <h3>Mediterranean Pace</h3>
                <p>Life in Greece often moves at a relaxed pace. Social relationships and quality of life take priority over strict schedules.</p>
                
                <div class="important">
                    <strong>Important:</strong> Greeks are passionate communicators. Animated discussions with gestures and raised voices don't necessarily indicate conflict - it's often just enthusiastic conversation.
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in Greece 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>Greek communication is warm, expressive, and often animated. Direct eye contact shows engagement and honesty.</p>
                
                <h3>Good Topics</h3>
                <ul>
                    <li>Greek history and ancient heritage</li>
                    <li>Food and local cuisine</li>
                    <li>Family and children</li>
                    <li>Football and sports</li>
                    <li>Greek islands and travel</li>
                </ul>
                
                <h3>Topics to Handle Carefully</h3>
                <ul>
                    <li>Relations with Turkey and Cyprus</li>
                    <li>Recent economic crisis</li>
                    <li>Macedonia naming dispute</li>
                    <li>Political parties</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Greeks enjoy debate and discussion. Having opinions and expressing them respectfully is appreciated.
                </div>
                
                <h3>Coffee Culture</h3>
                <p>Greek coffee culture is essential to social life. Cafés (kafeneia) are gathering places for conversation that can last for hours.</p>
            `
        },
        dating: {
            title: "Dating Culture in Greece",
            content: `
                <h3>Meeting People</h3>
                <p>Greeks commonly meet potential partners through:</p>
                <ul>
                    <li>Extended social circles and friend groups</li>
                    <li>Cafés, bars, and nightlife</li>
                    <li>Work and university</li>
                    <li>Dating apps (popular among younger generations)</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <ul>
                    <li>Dating often starts casually within social groups</li>
                    <li>Men traditionally take more initiative</li>
                    <li>Public displays of affection are accepted</li>
                    <li>Family approval becomes important as relationships progress</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> Meeting the family is a significant milestone. Be prepared for warm welcomes, lots of food, and many questions.
                </div>
                
                <h3>Relationship Progression</h3>
                <p>Relationships in Greece often move from casual to serious relatively quickly. Family involvement in relationships is common and expected.</p>
            `
        },
        economicIntegration: {
            title: "💷 Module 4: Economic Integration in Greece 💼",
            content: `
                <h3>Workplace Culture</h3>
                <p>Greek workplaces blend professionalism with personal relationships. Building rapport with colleagues is important for workplace harmony.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Personal relationships influence professional success</li>
                    <li>Hierarchy is respected but relationships matter</li>
                    <li>Flexibility in schedules is common</li>
                    <li>Extended lunch breaks are traditional</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Greeks value quality of life. Family obligations and social commitments are respected, and work is not expected to dominate life.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Many businesses observe a midday break during hot summer months. Plan meetings accordingly.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>Formal dress in business settings</li>
                    <li>Building relationships before business discussions</li>
                    <li>Name days are often celebrated more than birthdays</li>
                    <li>Orthodox religious holidays are widely observed</li>
                </ul>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in Greece 🤝",
            content: `
                <h3>Administrative Requirements</h3>
                <p>Greek bureaucracy can be complex. Patience and persistence are necessary, and having local assistance is helpful.</p>
                
                <h3>Registration</h3>
                <ul>
                    <li>Register with local authorities when establishing residence</li>
                    <li>Tax registration (AFM number) is required for most activities</li>
                    <li>Health insurance enrollment is mandatory</li>
                    <li>Document legalization may be required</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> Greek bureaucracy often requires multiple visits and patience. Arriving early and bringing all possible documentation helps.
                </div>
                
                <h3>Religious and Cultural Observance</h3>
                <ul>
                    <li>Orthodox Christianity plays a significant role in public life</li>
                    <li>Religious holidays affect business hours</li>
                    <li>Name days are celebrated widely</li>
                    <li>Easter is the most important holiday</li>
                </ul>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare System in Greece 💊",
            content: `
                <h3>National Healthcare System (ESY)</h3>
                <p>Greece provides universal healthcare through ESY (Ethniko Systima Ygeias). EU citizens with European Health Insurance Card have access. The system faces challenges but provides essential care.</p>
                
                <h3>Healthcare Registration</h3>
                <ul>
                    <li><strong>AMKA number:</strong> Social security number required for healthcare access</li>
                    <li><strong>IKA (Social Insurance Institute):</strong> Main provider for employed persons</li>
                    <li><strong>Registration:</strong> Through employment or municipality for residents</li>
                    <li><strong>EU citizens:</strong> EHIC provides temporary coverage; register for permanent residence</li>
                </ul>
                
                <h3>Primary Care</h3>
                <ul>
                    <li><strong>Public health centers (Kentro Ygeias):</strong> Free basic care</li>
                    <li><strong>GP services:</strong> Limited in public system; private GPs more accessible</li>
                    <li><strong>Appointments:</strong> Can involve long waits in public system</li>
                    <li><strong>No referral system:</strong> Can access specialists directly</li>
                </ul>
                
                <div class="important">
                    <strong>Public vs. Private Reality:</strong> Many Greeks use public system for emergencies and serious illness but rely on private doctors for routine care. Private healthcare is more accessible but costs apply. Consider supplemental private insurance.
                </div>
                
                <h3>Hospitals</h3>
                <ul>
                    <li><strong>Public hospitals:</strong> Free care but overcrowded; long waits common</li>
                    <li><strong>Private clinics:</strong> Better facilities, shorter waits, English-speaking staff</li>
                    <li><strong>Islands:</strong> Limited facilities; serious cases transferred to mainland</li>
                    <li><strong>Emergency: 166</strong> (ambulance); 112 (general emergency)</li>
                </ul>
                
                <h3>Pharmacies</h3>
                <ul>
                    <li><strong>Well-stocked:</strong> Green cross sign; pharmacists knowledgeable</li>
                    <li><strong>Prescription required:</strong> For most medications</li>
                    <li><strong>After-hours:</strong> Rotating duty pharmacies (farmakeio efimerevo) open 24/7</li>
                    <li><strong>Costs:</strong> Prescription medicines have co-payments; reimbursement through social insurance</li>
                </ul>
                
                <h3>Costs and Insurance</h3>
                <ul>
                    <li>Public healthcare theoretically free but unofficial payments (fakelaki) historically expected</li>
                    <li>This practice declining but awareness helpful</li>
                    <li>Private insurance recommended for comprehensive coverage</li>
                    <li>International insurance useful, especially for dental and specialist care</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Islands have limited medical facilities. If living on an island, understand what care is available locally and where you'd need to travel for specialized treatment. Medical tourism to Athens is common from islands.
                </div>
                
                <h3>Mental Health</h3>
                <ul>
                    <li>Services available but stigma still exists</li>
                    <li>Private psychologists and psychiatrists more accessible</li>
                    <li>Some English-speaking practitioners in Athens and major cities</li>
                </ul>
                
                <h3>Dental Care</h3>
                <ul>
                    <li>Not covered by public system except emergencies</li>
                    <li>Private dentists widely available</li>
                    <li>Costs moderate compared to Western Europe</li>
                </ul>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom in Greece 📋",
            content: `
                <h3>Greek Bureaucracy</h3>
                <p>Greek bureaucracy has a reputation for complexity and inefficiency. Digital services are improving, but many processes still require in-person visits, patience, and persistence. Personal connections can help.</p>
                
                <div class="warning">
                    <strong>Reality Check:</strong> Greek bureaucracy can be frustrating. Expect: multiple visits to offices, conflicting information from different officials, requests for additional documents, and longer processing times than stated. Patience is essential!
                </div>
                
                <h3>Essential Registration Steps</h3>
                
                <h4>Key Numbers and Documents:</h4>
                <ul>
                    <li><strong>AFM (Tax Identification Number):</strong> Essential for everything - banking, employment, renting. Get this first!</li>
                    <li><strong>AMKA (Social Security Number):</strong> Required for healthcare</li>
                    <li><strong>Residence permit:</strong> Non-EU citizens apply at Immigration Office</li>
                    <li><strong>Registration certificate:</strong> EU citizens register at municipality</li>
                </ul>
                
                <h4>Where to Go:</h4>
                <ul>
                    <li><strong>Tax Office (Eforia):</strong> For AFM registration</li>
                    <li><strong>Municipality (Dimos):</strong> For residence registration</li>
                    <li><strong>AMKA office:</strong> Usually within IKA or municipality</li>
                    <li><strong>KEP (Citizen Service Centers):</strong> One-stop shops for some services</li>
                </ul>
                
                <h3>Getting Your AFM</h3>
                <p>The tax number (AFM) is crucial:</p>
                <ul>
                    <li>Visit local tax office with passport and proof of residence</li>
                    <li>May need address verification from landlord or police</li>
                    <li>Process usually same day once you have all documents</li>
                    <li>Some offices allow online appointment booking</li>
                </ul>
                
                <h3>Banking</h3>
                <ul>
                    <li><strong>AFM required:</strong> Can't open bank account without tax number</li>
                    <li><strong>Proof of residence:</strong> Rental contract or utility bill</li>
                    <li><strong>Capital controls legacy:</strong> Some restrictions may still apply</li>
                    <li><strong>International banks:</strong> May be easier for foreigners</li>
                </ul>
                
                <h3>Documentation</h3>
                <ul>
                    <li><strong>Translations:</strong> Official translations required for foreign documents</li>
                    <li><strong>Apostille:</strong> Foreign official documents need apostille stamp</li>
                    <li><strong>Photocopies:</strong> Always bring originals plus multiple copies</li>
                    <li><strong>Photos:</strong> Passport-style photos frequently needed</li>
                    <li><strong>Receipts:</strong> Keep all paperwork and stamped receipts</li>
                </ul>
                
                <div class="tip">
                    <strong>Survival Tips:</strong>
                    <ul>
                        <li>Arrive early - offices get busy and may have limited capacity</li>
                        <li>Bring everything you might possibly need - passport, copies, photos, proof of everything</li>
                        <li>Don't assume logic - processes may not make sense; just comply</li>
                        <li>Be polite and patient - rudeness will not help</li>
                        <li>Having a Greek-speaking friend is invaluable</li>
                    </ul>
                </div>
                
                <h3>Employment and Social Security</h3>
                <ul>
                    <li><strong>Work permit:</strong> Non-EU citizens need work authorization</li>
                    <li><strong>IKA registration:</strong> Social insurance through employer</li>
                    <li><strong>Employment contract:</strong> Should be formalized and registered</li>
                    <li><strong>Contributions:</strong> Both employer and employee pay into system</li>
                </ul>
                
                <h3>Taxation</h3>
                <ul>
                    <li><strong>Income tax:</strong> Progressive rates; employer typically withholds</li>
                    <li><strong>Annual declaration:</strong> Required even if taxes already withheld</li>
                    <li><strong>TAXISnet:</strong> Online portal for tax declarations</li>
                    <li><strong>Property tax (ENFIA):</strong> Annual tax on property ownership</li>
                    <li><strong>Tax advisor:</strong> Accountant (logistis) recommended for complex situations</li>
                </ul>
                
                <h3>Utilities and Services</h3>
                <ul>
                    <li>Electricity (DEI), water, telephone require AFM</li>
                    <li>Contracts typically require deposit</li>
                    <li>Bills can be paid at banks, post offices, or online</li>
                    <li>Landlord may include some utilities in rent</li>
                </ul>
                
                <h3>Driving</h3>
                <ul>
                    <li><strong>License exchange:</strong> EU licenses valid; non-EU may need Greek license</li>
                    <li><strong>Vehicle registration:</strong> Complex if importing car</li>
                    <li><strong>Insurance mandatory:</strong> Third-party minimum</li>
                    <li><strong>Annual inspections (KTEO):</strong> Required for vehicles over 4 years old</li>
                </ul>
                
                <h3>Real Estate</h3>
                <ul>
                    <li><strong>Notary required:</strong> All property transactions go through notary</li>
                    <li><strong>Property tax (ENFIA):</strong> Annual tax based on location and value</li>
                    <li><strong>Lawyer recommended:</strong> For property purchases to verify title</li>
                    <li><strong>Fees substantial:</strong> Transfer taxes, legal fees, notary fees add up</li>
                </ul>
                
                <div class="important">
                    <strong>Economic Crisis Legacy:</strong> Greek bureaucracy expanded during crisis with additional taxes and controls. Some still exist. Systems are slowly modernizing with digital services, but paper processes remain common.
                </div>
                
                <h3>Digital Services</h3>
                <ul>
                    <li><strong>TAXISnet:</strong> Tax-related services online</li>
                    <li><strong>gov.gr:</strong> Central government services portal</li>
                    <li><strong>Improving:</strong> More services going online but not all processes yet digital</li>
                </ul>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools in Greece 📚",
            content: `
                <h3>Education System Overview</h3>
                <p>Greek education is centralized with national curriculum. Education is free and compulsory through age 15. Traditional teaching methods prevail, with emphasis on classical education and memorization. Private tutoring (frontistirio) is extremely common.</p>
                
                <h3>School Structure</h3>
                
                <h4>Pre-Primary (4-5 years):</h4>
                <ul>
                    <li><strong>Nipiagogio (kindergarten):</strong> Optional but free; widely attended</li>
                    <li>Prepares children for primary school</li>
                    <li>Play-based learning with some academic preparation</li>
                </ul>
                
                <h4>Primary School (Dimotiko) - Ages 6-12:</h4>
                <ul>
                    <li><strong>6 grades:</strong> Compulsory, free public education</li>
                    <li><strong>Core subjects:</strong> Greek, math, science, history, religion</li>
                    <li><strong>Foreign language:</strong> English typically begins in Grade 3</li>
                    <li><strong>Homework:</strong> Substantial from early grades</li>
                    <li><strong>Traditional methods:</strong> Teacher-centered, emphasis on memorization</li>
                </ul>
                
                <h4>Gymnasium (Lower Secondary) - Ages 12-15:</h4>
                <ul>
                    <li><strong>3 years:</strong> Compulsory, free</li>
                    <li>Academic curriculum intensifies</li>
                    <li>Second foreign language introduced (often French or German)</li>
                    <li>Grading system: 0-20 scale (10+ is passing)</li>
                </ul>
                
                <h4>Lykeio (Upper Secondary) - Ages 15-18:</h4>
                <ul>
                    <li><strong>3 years:</strong> Optional but most attend; free</li>
                    <li><strong>General or vocational tracks</strong></li>
                    <li>Intense preparation for university entrance exams (Panhellenic Examinations)</li>
                    <li>Final year almost entirely focused on exam preparation</li>
                </ul>
                
                <div class="important">
                    <strong>Frontistirio Culture:</strong> Private afternoon tutoring schools (frontistiria) are ubiquitous. Most students attend them for extra lessons, especially in secondary school. This is essential for competitive university entrance. Budget for this if your child will attend Greek schools.
                </div>
                
                <h3>School Schedule</h3>
                <ul>
                    <li><strong>Hours:</strong> Typically 8:00 AM - 1:30/2:30 PM (morning shift)</li>
                    <li><strong>No lunch:</strong> Students go home after school; no cafeteria meals</li>
                    <li><strong>Saturday:</strong> No school (used to have Saturday mornings)</li>
                    <li><strong>Afternoon activities:</strong> Frontistirio, sports, music lessons</li>
                </ul>
                
                <h3>Public vs. Private Schools</h3>
                <ul>
                    <li><strong>Public schools:</strong> Free, follow national curriculum, Greek language</li>
                    <li><strong>Private schools:</strong> Tuition fees; some offer alternative curricula; better facilities often</li>
                    <li><strong>International schools:</strong> In Athens and major cities; expensive; English or other languages; IB, British, or American curricula</li>
                </ul>
                
                <h3>University Entrance</h3>
                <ul>
                    <li><strong>Panhellenic Examinations:</strong> National exams determine university placement</li>
                    <li><strong>Extremely competitive:</strong> Limited university spots; high-stakes testing</li>
                    <li><strong>Subject specialization:</strong> Students choose academic direction in Lykeio</li>
                    <li><strong>Exam subjects:</strong> 4 subjects tested; scores determine which universities/programs possible</li>
                    <li><strong>Frontistirio essential:</strong> School alone often insufficient for competitive exams</li>
                </ul>
                
                <h3>University Education</h3>
                <ul>
                    <li><strong>Free public universities:</strong> No tuition at public institutions</li>
                    <li><strong>Competitive entry:</strong> Exam-based; some programs extremely selective</li>
                    <li><strong>Language:</strong> Taught in Greek; some postgraduate programs in English</li>
                    <li><strong>Student life:</strong> Vibrant culture; affordable living (outside Athens)</li>
                    <li><strong>Many study abroad:</strong> Due to competitive entrance, many Greeks study in other EU countries</li>
                </ul>
                
                <div class="tip">
                    <strong>For Foreign Students:</strong>
                    <ul>
                        <li>Greek language proficiency required for public schools</li>
                        <li>Language support programs exist but vary</li>
                        <li>International schools available for non-Greek instruction</li>
                        <li>Foreign qualifications recognized for university with evaluation</li>
                    </ul>
                </div>
                
                <h3>School Culture</h3>
                <ul>
                    <li><strong>Teacher respect:</strong> Authority figures; formal relationships</li>
                    <li><strong>Religion in curriculum:</strong> Greek Orthodox religion taught (opt-out possible)</li>
                    <li><strong>National pride:</strong> Greek history and culture emphasized</li>
                    <li><strong>Memorization valued:</strong> Learning by rote still common</li>
                    <li><strong>Competitive environment:</strong> Academic pressure especially in secondary school</li>
                </ul>
                
                <h3>Parent Involvement</h3>
                <ul>
                    <li>Parent-teacher meetings periodically</li>
                    <li>Parents monitor homework closely</li>
                    <li>School councils exist but teacher authority strong</li>
                    <li>Parents often heavily involved in child's academic success</li>
                </ul>
                
                <h3>Holiday Schedule</h3>
                <ul>
                    <li><strong>Summer:</strong> June-September (3 months!)</li>
                    <li><strong>Christmas:</strong> 2 weeks</li>
                    <li><strong>Easter:</strong> 2 weeks (Orthodox Easter - date varies)</li>
                    <li><strong>Carnival:</strong> "Apokries" break</li>
                    <li><strong>National holidays:</strong> March 25 (Independence Day), October 28 (Ohi Day)</li>
                </ul>
                
                <h3>Challenges</h3>
                <ul>
                    <li>Underfunded public schools; infrastructure varies</li>
                    <li>Teacher strikes occur periodically</li>
                    <li>Frontistirio costs add up significantly</li>
                    <li>High-stakes exam culture creates stress</li>
                    <li>Brain drain - many educated young people emigrate</li>
                </ul>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith in Greece 🤝",
            content: `
                <h3>Greek Orthodox Christianity</h3>
                <p>Greece is overwhelmingly Greek Orthodox Christian (90%+). The Greek Orthodox Church is closely tied to national identity and culture. Religion influences daily life, holidays, and social customs even for non-practicing Greeks.</p>
                
                <div class="important">
                    <strong>Religion and Identity:</strong> For many Greeks, Orthodox Christianity is inseparable from Greek identity. Even secular Greeks often identify as Orthodox culturally. The Church played a crucial role in preserving Greek identity during Ottoman rule.
                </div>
                
                <h3>The Greek Orthodox Church</h3>
                <ul>
                    <li><strong>Autocephalous church:</strong> Independent branch of Eastern Orthodoxy</li>
                    <li><strong>Historically influential:</strong> Church and state closely tied (though officially separate since 1975)</li>
                    <li><strong>Monastery tradition:</strong> Mount Athos (Agio Oros) - autonomous monastic state</li>
                    <li><strong>Patriarchate:</strong> Archbishop of Athens heads Church of Greece</li>
                </ul>
                
                <h3>Religious Observance</h3>
                <ul>
                    <li><strong>Varies widely:</strong> From devout churchgoers to culturally Orthodox but non-practicing</li>
                    <li><strong>Major holidays:</strong> High church attendance at Easter and Christmas</li>
                    <li><strong>Name days:</strong> Celebrated often more than birthdays; saint's feast day for your name</li>
                    <li><strong>Life events:</strong> Baptisms, weddings, funerals almost always Orthodox ceremonies</li>
                    <li><strong>Icons in homes:</strong> Many Greek homes have icon corner (iconostasio)</li>
                </ul>
                
                <h3>Major Religious Holidays</h3>
                
                <h4>Easter (Pascha):</h4>
                <p>The most important holiday in Greek Orthodoxy - more significant than Christmas:</p>
                <ul>
                    <li><strong>Holy Week:</strong> Intense religious observances</li>
                    <li><strong>Good Friday:</strong> Epitaphios processions in every village</li>
                    <li><strong>Saturday midnight:</strong> Resurrection service - "Christos Anesti!" (Christ is Risen)</li>
                    <li><strong>Easter Sunday:</strong> Family feast; roasted lamb; red eggs</li>
                    <li><strong>Date:</strong> Follows Orthodox calendar (usually different from Western Easter)</li>
                    <li><strong>Everything closes:</strong> Expect businesses shut from Friday through Monday</li>
                </ul>
                
                <h4>Other Major Holidays:</h4>
                <ul>
                    <li><strong>Christmas:</strong> December 25 (religious services, family gatherings)</li>
                    <li><strong>Epiphany (Theofania):</strong> January 6 - blessing of waters; dive for cross</li>
                    <li><strong>Assumption (Dekapentavgoustos):</strong> August 15 - Dormition of Virgin Mary</li>
                    <li><strong>Annunciation:</strong> March 25 (also Greek Independence Day)</li>
                    <li><strong>Clean Monday (Kathara Deftera):</strong> First day of Lent; kite flying, outdoor feasts</li>
                </ul>
                
                <div class="tip">
                    <strong>Experiencing Easter:</strong> If in Greece during Easter, participate respectfully in local traditions. Attend midnight service (bring a candle), try tsoureki (Easter bread) and mageiritsa (Easter soup), crack red eggs saying "Christos Anesti" (Christ is Risen) - "Alithos Anesti" (Truly He is Risen).
                </div>
                
                <h3>Religious Practices in Daily Life</h3>
                <ul>
                    <li><strong>Fasting periods:</strong> Many observe Lent and other fasts (no meat/dairy)</li>
                    <li><strong>Church services:</strong> Divine Liturgy on Sundays and feast days</li>
                    <li><strong>Saints' days:</strong> Each profession, town, island has patron saint with celebrations</li>
                    <li><strong>Blessings:</strong> New homes, businesses often blessed by priest</li>
                    <li><strong>Memorials (mnimosino):</strong> Services for deceased at regular intervals</li>
                </ul>
                
                <h3>Churches and Monasteries</h3>
                <ul>
                    <li><strong>Ubiquitous small churches:</strong> Chapels everywhere, even tiny islands</li>
                    <li><strong>Iconography:</strong> Byzantine art tradition; icons venerated</li>
                    <li><strong>Mount Athos:</strong> Men-only monastic peninsula; special permission to visit</li>
                    <li><strong>Meteora:</strong> Famous cliff-top monasteries</li>
                    <li><strong>Pilgrimage sites:</strong> Tinos (Panagia Evangelistria) major pilgrimage destination</li>
                </ul>
                
                <div class="important">
                    <strong>Church Etiquette:</strong>
                    <ul>
                        <li>Dress modestly - cover shoulders and knees (women sometimes given wrap-around skirts)</li>
                        <li>Women traditionally cover head in some churches</li>
                        <li>Remove sunglasses and hats</li>
                        <li>Keep voices low; minimal photography during services</li>
                        <li>Light a candle, venerate icons if comfortable (not required)</li>
                        <li>Stand during service (limited seating for elderly/infirm)</li>
                    </ul>
                </div>
                
                <h3>Religious Diversity</h3>
                <p>Greece is less religiously diverse than Western Europe:</p>
                <ul>
                    <li><strong>Muslim minority:</strong> In Thrace (Pomaks, Turks); historic communities; mosques present</li>
                    <li><strong>Catholics:</strong> Small communities, especially Cyclades islands (Syros, Tinos)</li>
                    <li><strong>Jews:</strong> Historic Sephardic communities in Thessaloniki and Athens (decimated in Holocaust)</li>
                    <li><strong>Other Christians:</strong> Small Protestant, evangelical communities</li>
                    <li><strong>Non-religious:</strong> Growing, especially among youth, but still identify culturally as Orthodox</li>
                </ul>
                
                <h3>Religious Freedom</h3>
                <ul>
                    <li>Constitution guarantees freedom of religion</li>
                    <li>Orthodox Church has "prevailing religion" status</li>
                    <li>Proselytizing is sensitive and restricted</li>
                    <li>Building non-Orthodox places of worship can face bureaucratic obstacles</li>
                    <li>Some social pressure to conform to Orthodox traditions</li>
                </ul>
                
                <h3>Islam in Greece</h3>
                <ul>
                    <li>Muslim minority in Thrace protected by Lausanne Treaty</li>
                    <li>Mosques in Thrace; Athens mosque opened 2020 (first official mosque in Athens since 19th century)</li>
                    <li>Halal food available in areas with Muslim populations and major cities</li>
                    <li>Some prejudice exists due to historical Ottoman rule and recent migration</li>
                </ul>
                
                <h3>Name Days</h3>
                <p>Unique Greek tradition:</p>
                <ul>
                    <li>Each saint has feast day on Orthodox calendar</li>
                    <li>People named after saint celebrate on that day</li>
                    <li>Open house tradition - friends visit, bring small gifts</li>
                    <li>Sometimes more important than birthday</li>
                    <li>Common names have major celebrations (e.g., Maria/Mary on August 15)</li>
                </ul>
                
                <h3>Education and Religion</h3>
                <ul>
                    <li>Greek Orthodox religion taught in public schools</li>
                    <li>Non-Orthodox can opt out of religious instruction</li>
                    <li>Religious holidays determine school calendar</li>
                    <li>Morning prayers traditional in schools (less common now)</li>
                </ul>
                
                <h3>For Newcomers</h3>
                <ul>
                    <li>Respect religious traditions even if not Orthodox</li>
                    <li>Participate in cultural aspects of holidays (food, festivities)</li>
                    <li>Understand religious holidays affect business hours</li>
                    <li>Churches are cultural and architectural sites - visit respectfully</li>
                    <li>Finding your own faith community may require effort in smaller places</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Learning basic religious greetings shows respect: "Christos Anesti" / "Alithos Anesti" at Easter, "Kali Anastasi" (Happy Resurrection), "Chronia Polla" (Many Years) on name days.
                </div>
            `
        }
    },
    finland: {
        name: "Finland",
        flag: "🇫🇮",
        relationships: {
            title: "💕 Module 1: Relationships & Respect in Finland 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>Finnish society values honesty, equality, and respect for personal space. The concept of "sisu" - inner strength and determination - is central to Finnish identity.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>Firm handshake with direct eye contact</li>
                    <li>"Hei" or "Moi" are common informal greetings</li>
                    <li>Physical contact is minimal outside close relationships</li>
                    <li>First names are used quickly in casual settings</li>
                </ul>
                
                <h3>Personal Space</h3>
                <p>Finns highly value personal space. Maintain distance in queues and public spaces. Sitting next to strangers when other seats are available is unusual.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Silence is comfortable in Finnish culture. Don't feel obligated to fill pauses in conversation - Finns speak when they have something meaningful to say.
                </div>
                
                <h3>Sauna Culture</h3>
                <p>The sauna is central to Finnish life - it's a place for relaxation, cleansing, and even important conversations. Being invited to someone's sauna is an honor.</p>
                
                <div class="important">
                    <strong>Important:</strong> Finns are famous for their comfort with silence. This isn't rudeness or awkwardness - it's respect for genuine communication.
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in Finland 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>Finnish communication is direct, honest, and economical. Finns say what they mean and mean what they say.</p>
                
                <h3>Good Topics</h3>
                <ul>
                    <li>Nature and outdoor activities</li>
                    <li>Sauna culture</li>
                    <li>Ice hockey and sports</li>
                    <li>Education and technology</li>
                    <li>Music, especially metal and classical</li>
                </ul>
                
                <h3>Topics to Handle Carefully</h3>
                <ul>
                    <li>Personal income and finances</li>
                    <li>Bragging or self-promotion</li>
                    <li>Comparisons with Sweden (the rivalry is real)</li>
                    <li>Very personal questions too early</li>
                </ul>
                
                <div class="warning">
                    <strong>Note:</strong> Finns value authenticity. Small talk for its own sake is less common. Meaningful conversation is preferred over filling silence.
                </div>
                
                <h3>Sisu</h3>
                <p>Sisu represents determination, resilience, and courage in the face of adversity. It's a core Finnish value that influences how people approach challenges.</p>
            `
        },
        dating: {
            title: "Dating Culture in Finland",
            content: `
                <h3>Meeting People</h3>
                <p>Finns often meet potential partners through:</p>
                <ul>
                    <li>Mutual friends and social groups</li>
                    <li>Hobbies and sports clubs</li>
                    <li>Dating apps (very popular)</li>
                    <li>Work or study</li>
                    <li>Social events (alcohol often helps break Finnish reserve)</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <ul>
                    <li>Gender equality is strong - either person can initiate</li>
                    <li>Splitting bills is standard and expected</li>
                    <li>Physical intimacy may develop quickly once dating begins</li>
                    <li>Relationships are typically egalitarian</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Finnish directness applies to dating too. If someone is interested, they'll usually be straightforward about it.
                </div>
                
                <h3>Relationship Style</h3>
                <p>Finnish relationships tend to be independent and egalitarian. Personal space remains important even in relationships. Cohabitation before marriage is very common.</p>
            `
        },
        economicIntegration: {
            title: "💷 Module 4: Economic Integration in Finland 💼",
            content: `
                <h3>Workplace Culture</h3>
                <p>Finnish workplaces are flat, egalitarian, and trust-based. Efficiency and reliability are highly valued.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Punctuality is essential - being late is disrespectful</li>
                    <li>Flat hierarchies - everyone's input is valued</li>
                    <li>Work-life balance is protected</li>
                    <li>Coffee breaks (kahvitauko) are important</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Finns value their free time. Working excessive overtime is not admired. Vacation time is generous and expected to be used.</p>
                
                <div class="important">
                    <strong>Important:</strong> Finns mean what they say in professional settings. If they commit to something, they'll deliver. The same reliability is expected from you.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>First names are common even with superiors</li>
                    <li>Meetings start and end on time</li>
                    <li>Promises are taken seriously</li>
                    <li>Showing off or boasting is viewed negatively</li>
                </ul>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in Finland 🤝",
            content: `
                <h3>Registration</h3>
                <p>Register with the Digital and Population Data Services Agency when moving to Finland. Your personal identity code is essential for most services.</p>
                
                <h3>Key Requirements</h3>
                <ul>
                    <li>Registration with local register office</li>
                    <li>Personal identity code (henkilötunnus)</li>
                    <li>Health insurance enrollment</li>
                    <li>Tax registration</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Finnish administration is highly digitized. Many services can be handled online once you have your identity code and bank credentials.
                </div>
                
                <h3>Social Contract</h3>
                <ul>
                    <li>High taxes fund comprehensive public services</li>
                    <li>Education is free at all levels</li>
                    <li>Healthcare is universal with small co-pays</li>
                    <li>Following rules is expected and respected</li>
                </ul>
                
                <h3>Environmental Responsibility</h3>
                <ul>
                    <li>Comprehensive recycling is mandatory</li>
                    <li>Bottle/can return system (pantti) is efficient</li>
                    <li>Respect for nature (jokamiehen oikeus - everyman's right)</li>
                </ul>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare System in Finland 💊",
            content: `
                <h3>Finnish Healthcare System</h3>
                <p>Finland provides universal healthcare through municipalities. The system emphasizes prevention and primary care. Quality is excellent but non-urgent specialist care can involve waiting times.</p>
                
                <h3>Registration and Access</h3>
                <ul>
                    <li><strong>Municipality registration:</strong> Register residence to access healthcare</li>
                    <li><strong>Kela (Social Insurance Institution):</strong> Handles health insurance and reimbursements</li>
                    <li><strong>European Health Insurance Card:</strong> EU citizens have temporary coverage; register for permanent residence</li>
                    <li><strong>Personal identity code (henkilötunnus):</strong> Essential for all healthcare access</li>
                </ul>
                
                <h3>Primary Healthcare (Terveyskeskus)</h3>
                <ul>
                    <li><strong>Health centers:</strong> First point of contact; run by municipalities</li>
                    <li><strong>GP appointments:</strong> Book through health center; may be waiting time</li>
                    <li><strong>Nurse-led care:</strong> Nurses handle many routine issues</li>
                    <li><strong>Phone consultations:</strong> Often first step; advice given over phone</li>
                    <li><strong>Digital services:</strong> OmaOlo and similar platforms for symptom checking</li>
                </ul>
                
                <div class="important">
                    <strong>Appointment Booking:</strong> Call health center early in morning for appointments. Digital booking increasingly available. For urgent issues, explain clearly - triage nurses assess priority. Non-urgent issues may have longer waits.
                </div>
                
                <h3>Costs</h3>
                <ul>
                    <li><strong>GP visit:</strong> Around €20-30 (varies by municipality)</li>
                    <li><strong>Specialist visit:</strong> Around €40-50</li>
                    <li><strong>Annual cap:</strong> After spending around €683/year, care becomes free (healthcare ceiling)</li>
                    <li><strong>Children:</strong> Under 18 often free or heavily subsidized</li>
                </ul>
                
                <h3>Specialist Care</h3>
                <ul>
                    <li><strong>Referral required:</strong> GP must refer to specialist</li>
                    <li><strong>Waiting times:</strong> Can be significant for non-urgent care (weeks to months)</li>
                    <li><strong>Hospital districts:</strong> Specialized hospitals serve regions</li>
                    <li><strong>Quality excellent:</strong> Care is high-quality once accessed</li>
                </ul>
                
                <h3>Emergency Care</h3>
                <ul>
                    <li><strong>112:</strong> Emergency number for ambulance, police, fire</li>
                    <li><strong>Päivystys:</strong> Emergency department at hospitals; 24/7</li>
                    <li><strong>Triage system:</strong> Assessed by urgency; non-urgent may wait hours</li>
                    <li><strong>Costs:</strong> Emergency visit around €30-40</li>
                </ul>
                
                <h3>Private Healthcare</h3>
                <ul>
                    <li><strong>Occupational health:</strong> Many employers provide private healthcare access</li>
                    <li><strong>Private clinics:</strong> Faster appointments; Terveystalo, Mehiläinen are major providers</li>
                    <li><strong>Kela reimbursements:</strong> Partial reimbursement even for private care</li>
                    <li><strong>Costs higher:</strong> €80-150 for private GP visit</li>
                </ul>
                
                <h3>Prescriptions and Pharmacies (Apteekki)</h3>
                <ul>
                    <li><strong>E-prescriptions:</strong> Sent electronically to all pharmacies</li>
                    <li><strong>Green cross sign:</strong> Pharmacies are easily identified</li>
                    <li><strong>Reimbursements:</strong> Kela reimburses 40-100% depending on medication</li>
                    <li><strong>Chronic conditions:</strong> Special reimbursement rates (65-100%)</li>
                    <li><strong>Prescription required:</strong> For almost all medications (stricter than many countries)</li>
                </ul>
                
                <h3>Dental Care</h3>
                <ul>
                    <li><strong>Public dental:</strong> Available through health centers; waiting times common</li>
                    <li><strong>Emergency dental:</strong> Available for acute problems</li>
                    <li><strong>Private dentists:</strong> Most adults use private care; expensive</li>
                    <li><strong>Children:</strong> Free dental care up to age 18</li>
                </ul>
                
                <h3>Mental Health Services</h3>
                <ul>
                    <li>Available through health centers (GP referral)</li>
                    <li>Specialized psychiatric services for more complex issues</li>
                    <li>Crisis helplines available (Mieli Mental Health Finland)</li>
                    <li>Private psychologists widely available</li>
                    <li>Strong emphasis on preventive mental health</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Finland has excellent maternal and child health services. Neuvola (maternity and child health clinics) provide comprehensive free care for pregnant women and children up to school age. They're proactive and supportive!
                </div>
                
                <h3>Unique Aspects</h3>
                <ul>
                    <li><strong>Baby box:</strong> All expectant parents receive free maternity package (or cash grant)</li>
                    <li><strong>Preventive focus:</strong> Regular health checks, screenings emphasized</li>
                    <li><strong>Digital health:</strong> Kanta services - electronic health records accessible to you</li>
                    <li><strong>Sami healthcare:</strong> Special provisions for indigenous Sami population in Lapland</li>
                </ul>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom in Finland 📋",
            content: `
                <h3>Finnish Administration</h3>
                <p>Finnish bureaucracy is efficient, digitized, and relatively straightforward - among Europe's best. Most services available online. English often spoken in offices. Systems work well once you understand them.</p>
                
                <div class="tip">
                    <strong>Good News:</strong> Finnish bureaucracy is user-friendly compared to most countries. Digital services work well. Information is clear. Officials are helpful. Once you have your identity code, most things can be done online.
                </div>
                
                <h3>Essential First Steps</h3>
                
                <h4>Upon Arrival (Priority Order):</h4>
                <ul>
                    <li><strong>1. Register residence:</strong> At local Digital and Population Data Services Agency (DVV/Maistraatti)</li>
                    <li><strong>2. Get henkilötunnus:</strong> Personal identity code - essential for EVERYTHING</li>
                    <li><strong>3. Register with Kela:</strong> Social insurance for healthcare, benefits</li>
                    <li><strong>4. Open bank account:</strong> Requires identity code</li>
                    <li><strong>5. Register for tax:</strong> Usually automatic but verify with Tax Administration</li>
                </ul>
                
                <h3>Henkilötunnus (Personal Identity Code)</h3>
                <p>This is the KEY to everything in Finland:</p>
                <ul>
                    <li>Format: DDMMYY-XXXC (birth date + personal identifier + check digit)</li>
                    <li>Needed for: banking, healthcare, employment, housing, phone contracts, gym membership - literally everything</li>
                    <li>Obtained when registering residence</li>
                    <li>Temporary residents may get temporary code</li>
                </ul>
                
                <h3>Key Government Services</h3>
                
                <h4>DVV (Digital and Population Data Services):</h4>
                <ul>
                    <li>Population register, identity codes, name changes, citizenship</li>
                    <li>Local offices (Maistraatti) in all cities</li>
                    <li>Much can be done online at dvv.fi</li>
                </ul>
                
                <h4>Kela (Social Insurance Institution):</h4>
                <ul>
                    <li>Health insurance, parental benefits, unemployment, pensions, student aid</li>
                    <li>Register as soon as you have residence permit and address</li>
                    <li>Comprehensive online services at kela.fi</li>
                    <li>OmaKela - your personal online portal</li>
                </ul>
                
                <h4>Vero (Tax Administration):</h4>
                <ul>
                    <li>Income tax, VAT, tax deductions</li>
                    <li>MyTax (OmaVero) - online portal for all tax matters</li>
                    <li>Pre-filled tax returns (easy to approve online)</li>
                    <li>Tax card (verokortti) - employer withholds based on this</li>
                </ul>
                
                <h3>Digital Services</h3>
                <ul>
                    <li><strong>Suomi.fi:</strong> Central government services portal</li>
                    <li><strong>Bank authentication:</strong> Online banking credentials used to login to government services</li>
                    <li><strong>Digital signatures:</strong> Legally binding via bank authentication</li>
                    <li><strong>OmaKanta:</strong> Your health records online</li>
                    <li><strong>Kela app:</strong> Access benefits and services</li>
                </ul>
                
                <div class="important">
                    <strong>Bank Authentication System:</strong> Finnish digital services use bank credentials for secure login. This is why getting a bank account early is crucial. Your online banking codes become your digital ID for government services!
                </div>
                
                <h3>Banking</h3>
                <ul>
                    <li><strong>Identity code required:</strong> Must have henkilötunnus to open account</li>
                    <li><strong>Major banks:</strong> Nordea, OP, Danske Bank, S-Pankki</li>
                    <li><strong>Bank authentication:</strong> Online banking credentials used everywhere</li>
                    <li><strong>Cashless society:</strong> Cards and mobile payments dominant</li>
                    <li><strong>Identification apps:</strong> Mobile banking app used for digital ID</li>
                </ul>
                
                <h3>Employment and Work Permits</h3>
                <ul>
                    <li><strong>EU citizens:</strong> Right to work; just register residence</li>
                    <li><strong>Non-EU:</strong> Work permit required (apply from home country or within Finland)</li>
                    <li><strong>Tax number:</strong> Assigned automatically upon employment registration</li>
                    <li><strong>Tax card:</strong> Request from tax office; give to employer</li>
                </ul>
                
                <h3>Taxation</h3>
                <ul>
                    <li><strong>Progressive system:</strong> 0-31.25% municipal + 0-31% state tax (total can reach ~50%+ for high earners)</li>
                    <li><strong>Withheld at source:</strong> Employer deducts based on tax card</li>
                    <li><strong>Pre-filled returns:</strong> Tax administration calculates; you review and approve</li>
                    <li><strong>Deductions:</strong> Commuting, union fees, mortgage interest</li>
                    <li><strong>Tax year:</strong> Calendar year; deadline spring following year</li>
                </ul>
                
                <h3>Social Security</h3>
                <ul>
                    <li><strong>Comprehensive system:</strong> Unemployment, healthcare, pensions, family benefits</li>
                    <li><strong>Kela benefits:</strong> Register to access (housing allowance, student aid, etc.)</li>
                    <li><strong>Contributions:</strong> Through taxes and employer/employee payments</li>
                    <li><strong>Unemployment:</strong> Register with TE-Toimisto (Employment Office)</li>
                </ul>
                
                <h3>Housing Registration</h3>
                <ul>
                    <li>Must register address with DVV</li>
                    <li>Notify within days of moving</li>
                    <li>Landlords often require proof of income/employment</li>
                    <li>Rental agreements straightforward; standard contracts</li>
                </ul>
                
                <h3>Driving and Vehicles</h3>
                <ul>
                    <li><strong>License exchange:</strong> EU licenses valid; some non-EU can exchange</li>
                    <li><strong>Vehicle registration:</strong> Traficom handles all traffic matters</li>
                    <li><strong>Annual inspection:</strong> Required for older vehicles</li>
                    <li><strong>Winter tires:</strong> Mandatory December-February</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Finland's administrative system rewards self-service. Learn to use online portals - they're efficient and available in English. If you need help, book appointment in advance. Walk-ins can mean long waits.
                </div>
                
                <h3>Language Services</h3>
                <ul>
                    <li>Free Finnish language courses for immigrants</li>
                    <li>Integration services for newly arrived</li>
                    <li>Many government services available in Finnish, Swedish, and English</li>
                    <li>Interpreters available for complex matters</li>
                </ul>
                
                <h3>What Makes Finnish Bureaucracy Work</h3>
                <ul>
                    <li>High trust society - system assumes honesty</li>
                    <li>Digital infrastructure excellent</li>
                    <li>Clear rules, consistently applied</li>
                    <li>Efficient processing times</li>
                    <li>English widely available</li>
                    <li>Helpful, professional officials</li>
                </ul>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools in Finland 📚",
            content: `
                <h3>World-Renowned Education System</h3>
                <p>Finland consistently ranks among the world's best education systems. Emphasis on equality, well-being, play-based learning (especially early years), and trust in teachers. No standardized testing until final year. Education is completely free from pre-primary through university.</p>
                
                <div class="important">
                    <strong>Finnish Education Philosophy:</strong> Focus on child well-being over competition. Less homework, more play. No tracking by ability. Trust in professional teachers. The goal: lifelong learners who love learning, not test-takers.
                </div>
                
                <h3>School Structure</h3>
                
                <h4>Early Childhood Education (1-6 years):</h4>
                <ul>
                    <li><strong>Päiväkoti (daycare):</strong> From 9 months; guaranteed right to subsidized care</li>
                    <li><strong>Income-based fees:</strong> Maximum around €290/month, many pay less</li>
                    <li><strong>Esiopetus (pre-primary):</strong> Age 6, free, optional but 98% attend</li>
                    <li><strong>Play-based learning:</strong> Through age 7; less academic than many countries</li>
                    <li><strong>Forest kindergartens:</strong> Outdoor education heavily emphasized</li>
                </ul>
                
                <h4>Peruskoulu (Comprehensive School) - Ages 7-16:</h4>
                <ul>
                    <li><strong>9 years compulsory:</strong> Grades 1-9, completely free</li>
                    <li><strong>No ability tracking:</strong> Mixed-ability classes; individual support as needed</li>
                    <li><strong>Late start:</strong> School begins at age 7 (research shows benefits)</li>
                    <li><strong>Short days:</strong> Shorter than most countries; max ~30 hours/week</li>
                    <li><strong>Minimal homework:</strong> Especially early grades; less than 30 minutes/day initially</li>
                    <li><strong>No standardized tests:</strong> Until final year; assessment is continuous</li>
                    <li><strong>Recess every 45 minutes:</strong> 15-minute breaks between lessons (improves concentration)</li>
                </ul>
                
                <h4>Upper Secondary (Lukio/Ammattiopisto) - Ages 16-19:</h4>
                <ul>
                    <li><strong>Optional but 95%+ continue:</strong> Two tracks equally valued</li>
                    <li><strong>Lukio (general/academic):</strong> Prepares for university; 3 years</li>
                    <li><strong>Ammattiopisto (vocational):</strong> Practical skills; 3 years; highly respected</li>
                    <li><strong>Free education:</strong> Tuition, books, meals all free</li>
                    <li><strong>Matriculation exam:</strong> Ylioppilastutkinto for lukio students</li>
                </ul>
                
                <h3>What Makes Finnish Schools Special</h3>
                <ul>
                    <li><strong>Teacher quality:</strong> Master's degree required; highly selective profession; trusted completely</li>
                    <li><strong>Teacher autonomy:</strong> Teachers design own lessons within national framework</li>
                    <li><strong>Small class sizes:</strong> Usually under 20 students</li>
                    <li><strong>Individual support:</strong> Special education integrated; every child gets help needed</li>
                    <li><strong>No competition:</strong> No rankings, minimal testing; focus on personal progress</li>
                    <li><strong>Equality:</strong> All schools excellent; minimal private schools</li>
                    <li><strong>Well-being focused:</strong> School nurse, psychologist, social worker available</li>
                </ul>
                
                <h3>School Day</h3>
                <ul>
                    <li><strong>Hours:</strong> Typically 8-9 AM to 1-3 PM (younger children shorter days)</li>
                    <li><strong>Free lunch:</strong> Hot, nutritious meal provided daily</li>
                    <li><strong>Outdoor time:</strong> Even in -20°C; "no bad weather, only bad clothing"</li>
                    <li><strong>Less structured:</strong> More autonomy, less rigid than many systems</li>
                </ul>
                
                <h3>No School Uniforms, Minimal Formality</h3>
                <ul>
                    <li>Students call teachers by first name</li>
                    <li>Relaxed atmosphere; comfort emphasized</li>
                    <li>Shoes off indoors (Finnish custom)</li>
                    <li>Students choose own seating in many classes</li>
                </ul>
                
                <h3>Support Systems</h3>
                <ul>
                    <li><strong>Special education:</strong> ~30% receive some special support at some point</li>
                    <li><strong>Three-tier support:</strong> General, intensified, special - escalating as needed</li>
                    <li><strong>Inclusion:</strong> Students with needs integrated in regular classes when possible</li>
                    <li><strong>Learning assistants:</strong> Support available in classroom</li>
                    <li><strong>School welfare:</strong> Nurse, psychologist, social worker, counselor</li>
                </ul>
                
                <h3>For Foreign Students</h3>
                <ul>
                    <li><strong>Preparatory education:</strong> Finnish language courses for immigrant children (one year)</li>
                    <li><strong>Mother tongue instruction:</strong> Support for maintaining native language</li>
                    <li><strong>Integration support:</strong> Schools experienced with multicultural students</li>
                    <li><strong>English taught:</strong> From grade 1, so good foundation</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Don't expect homework battles. Finnish philosophy: childhood is for playing and being outside. Learning happens at school. Homework increases gradually but remains reasonable. Trust the system - it works!
                </div>
                
                <h3>University Education</h3>
                <ul>
                    <li><strong>Completely free:</strong> No tuition for EU/EEA citizens (fees for non-EU)</li>
                    <li><strong>Two types:</strong> Universities (research-focused) and UAS (universities of applied sciences)</li>
                    <li><strong>Competitive entrance:</strong> Exams required for most programs</li>
                    <li><strong>Student benefits:</strong> Study grant, housing allowance, student loan guarantee</li>
                    <li><strong>English programs:</strong> Many master's programs taught in English</li>
                    <li><strong>Quality:</strong> Excellent research universities (Helsinki, Aalto particularly strong)</li>
                </ul>
                
                <h3>Parent Involvement</h3>
                <ul>
                    <li>Teachers are trusted professionals - less parent micromanagement</li>
                    <li>Parent-teacher meetings twice yearly</li>
                    <li>Wilma - digital platform for school communication</li>
                    <li>Parents expected to support but not hover</li>
                </ul>
                
                <h3>Holiday Schedule</h3>
                <ul>
                    <li><strong>Summer:</strong> June-mid-August (10 weeks)</li>
                    <li><strong>Christmas:</strong> 2 weeks</li>
                    <li><strong>Winter break:</strong> One week (ski holiday - hiihtoloma)</li>
                    <li><strong>Autumn and spring:</strong> Short breaks</li>
                </ul>
                
                <h3>Practical Considerations</h3>
                <ul>
                    <li><strong>School supplies minimal:</strong> Most provided by school</li>
                    <li><strong>Outdoor clothing essential:</strong> Warm, waterproof gear for all-weather outdoor time</li>
                    <li><strong>Dark winters:</strong> Schools adapted to seasonal light variation</li>
                    <li><strong>After-school care:</strong> Available for working parents (iltapäiväkerho)</li>
                </ul>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith in Finland 🤝",
            content: `
                <h3>Secular Society with Lutheran Heritage</h3>
                <p>Finland is predominantly secular but with Evangelical Lutheran heritage. While majority are church members, active practice is low. Religion is considered private. Freedom of belief is complete, and society is tolerant of diverse faiths.</p>
                
                <h3>Religious Landscape</h3>
                <ul>
                    <li><strong>Evangelical Lutheran:</strong> ~67% members (declining) but only 2% attend weekly</li>
                    <li><strong>Finnish Orthodox:</strong> ~1% (second national church)</li>
                    <li><strong>Other religions:</strong> Small Muslim, Catholic, Jewish, Buddhist communities</li>
                    <li><strong>Non-religious:</strong> ~30% and growing, especially among youth</li>
                    <li><strong>Cultural Christianity:</strong> Many members for tradition, not active faith</li>
                </ul>
                
                <div class="important">
                    <strong>Church Membership vs. Practice:</strong> Most Finns are baptized Lutheran and maintain membership for lifecycle events (baptisms, confirmations, weddings, funerals) but are not religiously active. Church is cultural institution more than spiritual for many.
                </div>
                
                <h3>Evangelical Lutheran Church of Finland</h3>
                <ul>
                    <li><strong>State church until 1869:</strong> Still "national church" with special status</li>
                    <li><strong>Two official churches:</strong> Lutheran and Orthodox both have official status</li>
                    <li><strong>Church tax:</strong> Members pay 1-2% church tax (can opt out by leaving church)</li>
                    <li><strong>Property and funding:</strong> Owns significant property; receives tax funding</li>
                    <li><strong>Social services:</strong> Runs charities, elderly care, some social services</li>
                </ul>
                
                <h3>Religious Observance</h3>
                <ul>
                    <li><strong>Very low church attendance:</strong> Most don't attend except major holidays/lifecycle events</li>
                    <li><strong>Christmas:</strong> Main religious/cultural holiday; churchgoing common on Christmas Eve</li>
                    <li><strong>Easter:</strong> Observed but less religious emphasis than Central/Southern Europe</li>
                    <li><strong>Confirmation:</strong> ~80% of youth still go through Lutheran confirmation (rippileiri) - often seen as cultural tradition/coming-of-age</li>
                </ul>
                
                <h3>Church Tax and Membership</h3>
                <ul>
                    <li>Members of Lutheran or Orthodox Church pay church tax (1-2% of income)</li>
                    <li>Can leave church (eroakirkosta.fi) to avoid tax - simple online process</li>
                    <li>Leaving church doesn't affect civil rights or social standing</li>
                    <li>Can rejoin later if desired</li>
                    <li>Church weddings still possible even for non-members (with fee)</li>
                </ul>
                
                <div class="tip">
                    <strong>Church Tax:</strong> When you register in Finland, you're asked about religious affiliation. If you join Lutheran/Orthodox Church, you pay church tax. You're not automatically enrolled - it's your choice. Consider whether church membership matters to you.
                </div>
                
                <h3>Christian Holidays</h3>
                <ul>
                    <li><strong>Christmas (joulu):</strong> Major holiday; Christmas Eve most important (Dec 24)</li>
                    <li><strong>Easter (pääsiäinen):</strong> Friday-Monday holiday; traditions include mämmi and painted eggs</li>
                    <li><strong>Midsummer (juhannus):</strong> Secular but originally Christian (St. John); biggest holiday of year</li>
                    <li><strong>All Saints:</strong> First Saturday of November; visiting graves traditional</li>
                    <li><strong>Ascension Day:</strong> Thursday in May (public holiday)</li>
                </ul>
                
                <h3>Other Religious Communities</h3>
                
                <h4>Islam:</h4>
                <ul>
                    <li>Growing community, mostly in larger cities (Helsinki, Turku, Tampere)</li>
                    <li>Mosques and prayer spaces available</li>
                    <li>Halal food increasingly available in supermarkets</li>
                    <li>Integration generally good but some social tensions exist</li>
                </ul>
                
                <h4>Judaism:</h4>
                <ul>
                    <li>Small community, mainly in Helsinki</li>
                    <li>Synagogues in Helsinki and Turku</li>
                    <li>Kosher food available</li>
                    <li>Community well-established</li>
                </ul>
                
                <h4>Catholicism:</h4>
                <ul>
                    <li>Small but growing (immigration)</li>
                    <li>Churches in major cities</li>
                    <li>International masses available</li>
                </ul>
                
                <h3>Religious Freedom</h3>
                <ul>
                    <li>Complete freedom of religion guaranteed</li>
                    <li>Right to practice any faith or none</li>
                    <li>No discrimination based on religion (illegal)</li>
                    <li>Building places of worship allowed</li>
                    <li>Religious clothing permitted (no face-covering ban)</li>
                </ul>
                
                <h3>Religion in Daily Life</h3>
                <ul>
                    <li><strong>Rarely discussed:</strong> Religion very private; not topic of conversation</li>
                    <li><strong>Secularism strong:</strong> Religion separate from public life and politics</li>
                    <li><strong>Schools:</strong> Optional religious education (Lutheran, Orthodox, or ethics for non-religious)</li>
                    <li><strong>Workplace:</strong> Religion not discussed; accommodations for prayer if needed</li>
                    <li><strong>Public holidays:</strong> Christian holidays but celebrated secularly by most</li>
                </ul>
                
                <div class="important">
                    <strong>Social Expectations:</strong> Keep faith private. Proselytizing is unwelcome. Strong religiosity can make Finns uncomfortable - they value quiet faith. Evangelical or fundamentalist expressions may face social disapproval. Moderate, personal practice is the norm.
                </div>
                
                <h3>Nature as "Religion"</h3>
                <p>Many Finns describe nature/forest as their "church":</p>
                <ul>
                    <li>Deep spiritual connection to nature and forests</li>
                    <li>Sauna as spiritual/cleansing ritual</li>
                    <li>Seasonal celebrations tied to nature more than religion</li>
                    <li>Midsummer bonfires, berry picking, mushroom hunting - semi-spiritual traditions</li>
                </ul>
                
                <h3>Sami Spirituality</h3>
                <ul>
                    <li>Indigenous Sami people in Lapland have traditional spiritual practices</li>
                    <li>Shamanic traditions (noaidi)</li>
                    <li>Sacred sites (sieidi)</li>
                    <li>Most Sami also Lutheran but maintain cultural traditions</li>
                    <li>Respect for Sami culture and sacred sites important</li>
                </ul>
                
                <h3>Finding Religious Community</h3>
                <ul>
                    <li>Search online for places of worship in your area</li>
                    <li>International churches offer services in various languages</li>
                    <li>Helsinki has most diverse religious communities</li>
                    <li>Smaller cities have fewer options but communities exist</li>
                </ul>
                
                <h3>Church Architecture and Culture</h3>
                <ul>
                    <li>Beautiful Lutheran churches worth visiting as cultural sites</li>
                    <li>Temppeliaukio Church (Rock Church) in Helsinki famous</li>
                    <li>Orthodox churches in eastern Finland</li>
                    <li>Open for visitors; modest dress appreciated</li>
                    <li>Often used for concerts and cultural events</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> If you value religious community, actively seek it out. Finnish reserve means people won't reach out - you must take initiative. International churches and multicultural congregations often warmest welcome for newcomers.
                </div>
            `
        }
    },
    baltics: {
        name: "Baltics",
        flag: "🇪🇪🇱🇻🇱🇹",
        relationships: {
            title: "💕 Module 1: Relationships & Respect in the Baltics 🤝",
            content: `
                <h3>General Social Norms</h3>
                <p>Baltic societies (Estonia, Latvia, Lithuania) value independence, hard work, and cultural heritage. Each nation maintains distinct traditions while sharing regional characteristics.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>Firm handshakes with direct eye contact</li>
                    <li>Reserved initial demeanor with strangers</li>
                    <li>Warmth develops as relationships build</li>
                    <li>Formal address is appropriate until familiarity develops</li>
                </ul>
                
                <h3>Cultural Identity</h3>
                <p>The Baltics have strong national identities, particularly important given their history of occupation. Language and cultural traditions are deeply valued.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Learning basic phrases in the local language is highly appreciated and shows respect for the culture.
                </div>
                
                <h3>Song and Dance</h3>
                <p>Song festivals are central to Baltic identity. These massive events celebrate national heritage and were instrumental in independence movements.</p>
                
                <div class="important">
                    <strong>Important:</strong> While the Baltic states share history and geography, each has a distinct language and culture. Don't assume they're interchangeable.
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset in the Baltics 🧠",
            content: `
                <h3>Communication Style</h3>
                <p>Baltic communication tends to be direct and honest. Small talk is less common than in Western Europe, but this changes as relationships develop.</p>
                
                <h3>Good Topics</h3>
                <ul>
                    <li>Nature and outdoor activities</li>
                    <li>Cultural festivals and traditions</li>
                    <li>Technology and innovation (especially Estonia)</li>
                    <li>History and independence</li>
                    <li>Local cuisine and beverages</li>
                </ul>
                
                <h3>Topics to Approach Carefully</h3>
                <ul>
                    <li>Soviet occupation period (listen first, learn sensitivity)</li>
                    <li>Relations with Russia</li>
                    <li>Ethnic minority issues</li>
                    <li>Comparisons between Baltic states</li>
                </ul>
                
                <div class="warning">
                    <strong>Note:</strong> The Soviet period left deep marks. Many families have personal stories of deportation or resistance. Approach this history with respect.
                </div>
                
                <h3>Digital Culture</h3>
                <p>Estonia in particular is known for digital innovation (e-residency, digital governance). Technological literacy is high across the region.</p>
            `
        },
        dating: {
            title: "Dating Culture in the Baltics",
            content: `
                <h3>Meeting People</h3>
                <p>People in the Baltics commonly meet through:</p>
                <ul>
                    <li>Friend groups and social circles</li>
                    <li>Work and university</li>
                    <li>Dating apps (widely used)</li>
                    <li>Cultural events and activities</li>
                    <li>Nightlife venues</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <ul>
                    <li>Initial reserve that opens up with familiarity</li>
                    <li>Gender equality is valued</li>
                    <li>Relationships develop gradually from friendships</li>
                    <li>Splitting bills or alternating who pays is common</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Cultural events like festivals, concerts, or outdoor activities are good settings for getting to know people.
                </div>
                
                <h3>Relationship Style</h3>
                <p>Baltic relationships tend to be serious and commitment-oriented once established. Living together before marriage is socially accepted.</p>
            `
        },
        economicIntegration: {
            title: "💷 Module 4: Economic Integration in the Baltics 💼",
            content: `
                <h3>Workplace Culture</h3>
                <p>Baltic workplaces value efficiency, reliability, and professionalism. The work ethic is strong, reflecting the region's rapid development.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Punctuality and reliability are essential</li>
                    <li>Direct communication is appreciated</li>
                    <li>Results matter more than face time</li>
                    <li>Digital literacy is expected</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Work-life balance is increasingly valued, especially among younger generations. Vacation time is important and respected.</p>
                
                <div class="important">
                    <strong>Important:</strong> The Baltic economies have grown rapidly through hard work and innovation. A strong work ethic is respected and expected.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>Professional dress in business settings</li>
                    <li>Email communication is formal initially</li>
                    <li>Meetings are focused and efficient</li>
                    <li>Following through on commitments is crucial</li>
                </ul>
            `
        },
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct in the Baltics 🤝",
            content: `
                <h3>Registration</h3>
                <p>Each Baltic state has its own registration requirements. Generally, you must register your residence and obtain necessary permits.</p>
                
                <h3>Key Requirements</h3>
                <ul>
                    <li>Residence registration with authorities</li>
                    <li>Personal identification code</li>
                    <li>Health insurance enrollment</li>
                    <li>Tax registration</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Estonia's e-Residency program allows digital access to Estonian services for entrepreneurs worldwide. The Baltics are leaders in digital governance.
                </div>
                
                <h3>National Pride</h3>
                <ul>
                    <li>Independence Day celebrations are significant</li>
                    <li>Song festivals are major cultural events</li>
                    <li>Midsummer (Jāņi, Joninės, Jaanipäev) is widely celebrated</li>
                    <li>Respect for national symbols and heritage</li>
                </ul>
                
                <h3>Environmental Awareness</h3>
                <ul>
                    <li>Strong connection to nature</li>
                    <li>Recycling programs are standard</li>
                    <li>Outdoor activities are popular year-round</li>
                </ul>
            `
        },
        healthcareNHS: {
            title: "🏥 Module 5: Healthcare Systems in the Baltics 💊",
            content: `
                <h3>Healthcare Overview</h3>
                <p>The Baltic states (Estonia, Latvia, Lithuania) provide universal healthcare through social insurance systems. All three have modernized rapidly since independence. Estonia leads in digital health services. Quality is good, especially in cities.</p>
                
                <h3>Healthcare Registration</h3>
                <ul>
                    <li><strong>Mandatory health insurance:</strong> Required for all residents</li>
                    <li><strong>Through employment:</strong> Employer contributions cover workers</li>
                    <li><strong>Self-employed:</strong> Must register and pay independently</li>
                    <li><strong>Personal ID required:</strong> Health services tied to personal identification code</li>
                </ul>
                
                <h3>Estonia: Digital Healthcare Leader</h3>
                <h4>System Overview:</h4>
                <ul>
                    <li><strong>Estonian Health Insurance Fund (Haigekassa):</strong> Administers system</li>
                    <li><strong>Coverage:</strong> Employed, children, pensioners, registered unemployed covered</li>
                    <li><strong>E-health:</strong> Digital prescriptions, patient portal, electronic health records</li>
                    <li><strong>Patient Portal:</strong> Access your health data online</li>
                </ul>
                
                <h4>Accessing Care:</h4>
                <ul>
                    <li><strong>Family doctor (perearst):</strong> Choose and register with GP</li>
                    <li><strong>Appointments:</strong> Book via phone, online, or patient portal</li>
                    <li><strong>Specialist referral:</strong> GP refers to specialists</li>
                    <li><strong>Emergency: 112</strong></li>
                    <li><strong>Patient fees:</strong> Small co-payments (€5 for GP, €10 for specialist)</li>
                </ul>
                
                <h3>Latvia: Healthcare System</h3>
                <ul>
                    <li><strong>National Health Service (NHS/VVD):</strong> Manages healthcare</li>
                    <li><strong>Compulsory insurance:</strong> Through social tax</li>
                    <li><strong>GP registration:</strong> Choose ģimenes ārsts (family doctor)</li>
                    <li><strong>Patient fees:</strong> Generally low or free for insured</li>
                    <li><strong>E-health developing:</strong> Digital services expanding</li>
                    <li><strong>Emergency: 113</strong></li>
                </ul>
                
                <h3>Lithuania: Healthcare System</h3>
                <ul>
                    <li><strong>National Health Insurance Fund (NHIF/PSDF):</strong> Administers system</li>
                    <li><strong>Compulsory insurance:</strong> Through employment or state coverage</li>
                    <li><strong>GP (šeimos gydytojas):</strong> Register with family doctor</li>
                    <li><strong>Patient fees:</strong> Small co-payments for some services</li>
                    <li><strong>Digital services:</strong> e-health system developing</li>
                    <li><strong>Emergency: 112</strong></li>
                </ul>
                
                <div class="important">
                    <strong>Common Across Baltics:</strong>
                    <ul>
                        <li>Free or low-cost care for insured residents</li>
                        <li>Private healthcare available for faster service</li>
                        <li>Quality better in capital cities than rural areas</li>
                        <li>Waiting times exist for non-urgent specialist care</li>
                        <li>English spoken in private clinics, less in public system</li>
                    </ul>
                </div>
                
                <h3>Private Healthcare</h3>
                <ul>
                    <li>Growing sector in all three countries</li>
                    <li>Faster appointments and English-speaking doctors</li>
                    <li>Moderate costs compared to Western Europe</li>
                    <li>Often used alongside public system</li>
                    <li>Major cities have modern private clinics</li>
                </ul>
                
                <h3>Pharmacies (Aptieka/Vaistinė)</h3>
                <ul>
                    <li><strong>Well-stocked:</strong> Green cross sign</li>
                    <li><strong>E-prescriptions:</strong> Especially Estonia (fully digital)</li>
                    <li><strong>Prescription required:</strong> For most medications</li>
                    <li><strong>Generic substitution:</strong> Pharmacists may offer cheaper alternatives</li>
                    <li><strong>24-hour pharmacies:</strong> Available in larger cities</li>
                </ul>
                
                <h3>Costs and Reimbursement</h3>
                <ul>
                    <li>Patient fees minimal for insured (€5-10 typical)</li>
                    <li>Prescription drugs partially reimbursed</li>
                    <li>Chronic conditions: higher reimbursement rates</li>
                    <li>Annual caps on out-of-pocket expenses</li>
                </ul>
                
                <h3>Dental Care</h3>
                <ul>
                    <li>Basic emergency dental care covered</li>
                    <li>Routine dental mostly private and out-of-pocket</li>
                    <li>Children receive free or subsidized dental care</li>
                    <li>Costs moderate; dental tourism destination for some</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Estonia's e-health system is world-class. 99% of prescriptions are digital, all health data is online, and you can access everything via patient portal. Latvia and Lithuania are catching up with digital services.
                </div>
                
                <h3>Mental Health</h3>
                <ul>
                    <li>Services available but stigma still exists</li>
                    <li>Improving awareness and access</li>
                    <li>Private psychologists more accessible</li>
                    <li>Crisis lines available in all three countries</li>
                </ul>
                
                <h3>For EU Citizens</h3>
                <ul>
                    <li>European Health Insurance Card (EHIC) provides temporary coverage</li>
                    <li>Register for permanent residence to access full benefits</li>
                    <li>S1 form for pensioners/certain categories</li>
                </ul>
            `
        },
        navigatingOfficialdom: {
            title: "🏛️ Module 6: Navigating Officialdom in the Baltics 📋",
            content: `
                <h3>Digital-First Governance</h3>
                <p>The Baltic states, especially Estonia, are digital governance pioneers. E-government services are advanced, efficient, and user-friendly. Most administrative tasks can be completed online once you're registered in the system.</p>
                
                <div class="tip">
                    <strong>Estonia's E-Government:</strong> Estonia is the world's most digitally advanced society. 99% of public services online, digital signatures legally binding, X-Road system connects all databases. It's a glimpse of the future - embrace it!
                </div>
                
                <h3>Estonia: E-Estonia</h3>
                
                <h4>Essential Registration:</h4>
                <ul>
                    <li><strong>Register residence:</strong> Within 1 month at local government</li>
                    <li><strong>Personal identification code (isikukood):</strong> Assigned upon registration</li>
                    <li><strong>Digital ID:</strong> ID-card or Mobile-ID enables all e-services</li>
                    <li><strong>Health insurance:</strong> Register with Haigekassa</li>
                    <li><strong>Tax:</strong> Register with Tax and Customs Board</li>
                </ul>
                
                <h4>E-Services:</h4>
                <ul>
                    <li><strong>E-identity:</strong> ID-card or Mobile-ID for secure authentication</li>
                    <li><strong>E-residency:</strong> Digital identity for non-residents (for entrepreneurs)</li>
                    <li><strong>E-tax:</strong> File taxes online in minutes</li>
                    <li><strong>E-prescription:</strong> 99% of prescriptions are digital</li>
                    <li><strong>E-health:</strong> Access all health records online</li>
                    <li><strong>E-banking:</strong> Fully integrated with government services</li>
                    <li><strong>E-signature:</strong> Legally binding digital signatures</li>
                </ul>
                
                <h3>Latvia: Latvija.lv Portal</h3>
                
                <h4>Essential Steps:</h4>
                <ul>
                    <li><strong>Register address:</strong> At Office of Citizenship and Migration Affairs (OCMA/PMLP)</li>
                    <li><strong>Personal code (personas kods):</strong> Assigned upon registration</li>
                    <li><strong>eParaksts:</strong> Electronic signature system</li>
                    <li><strong>Tax registration:</strong> State Revenue Service (VID)</li>
                </ul>
                
                <h4>Digital Services:</h4>
                <ul>
                    <li><strong>Latvija.lv:</strong> Central e-government portal</li>
                    <li><strong>Growing e-services:</strong> Expanding digital government</li>
                    <li><strong>eParaksts Mobile:</strong> Mobile digital signature</li>
                    <li><strong>E-declaration system:</strong> For taxes</li>
                </ul>
                
                <h3>Lithuania: E-Government Services</h3>
                
                <h4>Essential Registration:</h4>
                <ul>
                    <li><strong>Register residence:</strong> At Migration Department</li>
                    <li><strong>Personal code (asmens kodas):</strong> Assigned at registration</li>
                    <li><strong>Tax registration:</strong> State Tax Inspectorate (VMI)</li>
                    <li><strong>Social insurance:</strong> Sodra (social security)</li>
                </ul>
                
                <h4>Digital Services:</h4>
                <ul>
                    <li><strong>eGov gateway:</strong> Access to government e-services</li>
                    <li><strong>E-signature:</strong> Mobile and smart-ID signature</li>
                    <li><strong>E-tax:</strong> Online tax declarations</li>
                    <li><strong>Developing systems:</strong> Modernization ongoing</li>
                </ul>
                
                <div class="important">
                    <strong>Personal ID Code is Key:</strong> Like Scandinavia, your personal identification code unlocks everything in the Baltics. You need it for banking, healthcare, employment, housing, phone contracts - everything. Get it immediately upon arrival.
                </div>
                
                <h3>Banking</h3>
                <ul>
                    <li><strong>Personal ID required:</strong> Must have identification code</li>
                    <li><strong>Proof of residence:</strong> Rental contract or registration certificate</li>
                    <li><strong>Major banks:</strong> Swedbank, SEB, Luminor operate across Baltics</li>
                    <li><strong>Online banking:</strong> Sophisticated; used for authentication of e-services</li>
                    <li><strong>Euro currency:</strong> All three countries use Euro</li>
                </ul>
                
                <h3>Documentation</h3>
                <ul>
                    <li><strong>Translated documents:</strong> Official translations required for foreign documents</li>
                    <li><strong>Apostille:</strong> Foreign official documents need apostille</li>
                    <li><strong>Digital copies:</strong> Scan everything - digital systems expect this</li>
                    <li><strong>Less paperwork:</strong> Than traditional European bureaucracies</li>
                </ul>
                
                <h3>Employment and Social Security</h3>
                <ul>
                    <li><strong>EU citizens:</strong> Right to work; register residence</li>
                    <li><strong>Non-EU:</strong> Work permit required</li>
                    <li><strong>Employment contract:</strong> Registered digitally with authorities</li>
                    <li><strong>Social contributions:</strong> Automatic through employment</li>
                    <li><strong>Unemployment:</strong> Register with employment service if needed</li>
                </ul>
                
                <h3>Taxation</h3>
                <ul>
                    <li><strong>Estonia:</strong> 20% flat income tax; unique system (no tax on retained corporate profits)</li>
                    <li><strong>Latvia:</strong> Progressive 20-31% income tax</li>
                    <li><strong>Lithuania:</strong> 20% or 32% (two rates) income tax</li>
                    <li><strong>Social contributions:</strong> Additional deductions for social security</li>
                    <li><strong>E-declarations:</strong> File taxes online; often pre-filled</li>
                </ul>
                
                <h3>Property and Utilities</h3>
                <ul>
                    <li>Rental contracts should be registered</li>
                    <li>Utilities often included in rent or paid separately</li>
                    <li>Online payment systems well-developed</li>
                    <li>Property ownership: foreigners can buy (some restrictions on agricultural land)</li>
                </ul>
                
                <h3>Driving</h3>
                <ul>
                    <li><strong>EU licenses valid:</strong> Can use EU/EEA license</li>
                    <li><strong>Non-EU exchange:</strong> May need to exchange license</li>
                    <li><strong>Vehicle registration:</strong> Straightforward if importing</li>
                    <li><strong>Annual inspection:</strong> Required for older vehicles</li>
                    <li><strong>Winter tires:</strong> Mandatory in winter months</li>
                </ul>
                
                <div class="tip">
                    <strong>Language:</strong> While digital systems often have English, knowing some local language helps with older officials and rural areas. English widely spoken by younger people in cities.
                </div>
                
                <h3>What Makes Baltic Bureaucracy Work</h3>
                <ul>
                    <li><strong>Digital-first mindset:</strong> Paper increasingly rare</li>
                    <li><strong>Efficiency valued:</strong> Soviet legacy rejected; modern systems prized</li>
                    <li><strong>Transparency:</strong> Data sharing between agencies (with privacy protections)</li>
                    <li><strong>Innovation:</strong> Willing to try new approaches</li>
                    <li><strong>English available:</strong> Especially online services</li>
                </ul>
                
                <h3>Business and E-Residency (Estonia)</h3>
                <ul>
                    <li>Estonia's e-Residency allows anyone globally to establish EU company digitally</li>
                    <li>Remote business management entirely online</li>
                    <li>Access to EU market</li>
                    <li>Digital nomad and startup-friendly environment</li>
                </ul>
            `
        },
        educationSchools: {
            title: "🎓 Module 7: Education & Schools in the Baltics 📚",
            content: `
                <h3>Education System Overview</h3>
                <p>Baltic education systems combine Soviet legacy with modern European standards. Strong emphasis on academic achievement, multilingualism, and increasingly, digital learning. Education is free and compulsory through secondary level. Quality is good, particularly in cities.</p>
                
                <h3>School Structure (Similar Across Baltics)</h3>
                
                <h4>Pre-Primary (Ages 1-7):</h4>
                <ul>
                    <li><strong>Kindergarten/Pre-school:</strong> Available from age 1-2; subsidized</li>
                    <li>Mandatory pre-primary year before school (age 6-7)</li>
                    <li>Focus on play-based learning and school readiness</li>
                    <li>Language immersion options in some areas</li>
                </ul>
                
                <h4>Basic Education (Ages 7-16):</h4>
                <ul>
                    <li><strong>9 years compulsory:</strong> Free public education</li>
                    <li><strong>Primary (1-4):</strong> General basic skills</li>
                    <li><strong>Lower secondary (5-9):</strong> Subject specialization begins</li>
                    <li>Strong academic focus; homework substantial</li>
                    <li>Foreign language from early grades (typically English)</li>
                </ul>
                
                <h4>Upper Secondary (Ages 16-19):</h4>
                <ul>
                    <li><strong>General academic track (gymnasium):</strong> Prepares for university</li>
                    <li><strong>Vocational track:</strong> Professional education; increasingly valued</li>
                    <li>Free education</li>
                    <li>Final state exams determine university entrance</li>
                </ul>
                
                <div class="important">
                    <strong>Multilingualism:</strong> Baltic students typically learn 2-3 languages. English taught from early grades, often Russian or German/French as third language. High proficiency is normal - don't be surprised if children become trilingual!
                </div>
                
                <h3>Estonia: Education Innovation</h3>
                <ul>
                    <li><strong>High PISA scores:</strong> Among Europe's best in math, science, reading</li>
                    <li><strong>Digital education:</strong> E-schoolbag system; digital textbooks; coding from Grade 1</li>
                    <li><strong>Teacher quality:</strong> Well-trained, respected profession</li>
                    <li><strong>Language policy:</strong> Estonian-medium instruction; Russian-medium schools being transitioned</li>
                    <li><strong>E-kooli:</strong> Digital diary connecting school, parents, students</li>
                </ul>
                
                <h3>Latvia: Education System</h3>
                <ul>
                    <li><strong>Academic focus:</strong> Strong emphasis on academic achievement</li>
                    <li><strong>Language transition:</strong> Moving to Latvian-medium instruction in all schools</li>
                    <li><strong>Bilingual programs:</strong> Some schools offer bilingual Latvian-minority language programs</li>
                    <li><strong>Song and dance traditions:</strong> Choral singing and folk dancing integral to education</li>
                </ul>
                
                <h3>Lithuania: Education System</h3>
                <ul>
                    <li><strong>Traditional values:</strong> Academic rigor, respect for teachers</li>
                    <li><strong>Lithuanian-medium:</strong> Instruction primarily in Lithuanian; minority language schools exist</li>
                    <li><strong>Reform ongoing:</strong> Modernizing curriculum and teaching methods</li>
                    <li><strong>Strong humanities:</strong> Literature, history emphasized</li>
                </ul>
                
                <h3>School Culture</h3>
                <ul>
                    <li><strong>Respect for teachers:</strong> Authority figures; formal relationships</li>
                    <li><strong>Academic pressure:</strong> Achievement valued; competitive environment</li>
                    <li><strong>Homework substantial:</strong> From primary school onward</li>
                    <li><strong>Grading:</strong> 1-10 scale typical; high standards</li>
                    <li><strong>Exams important:</strong> State exams determine university entrance</li>
                </ul>
                
                <h3>School Day</h3>
                <ul>
                    <li><strong>Hours:</strong> Typically 8:00 AM - 2:00/3:00 PM</li>
                    <li><strong>Lunch:</strong> School meals provided (sometimes paid, often free/subsidized)</li>
                    <li><strong>After-school:</strong> Activities and extended day programs available</li>
                </ul>
                
                <h3>Public vs. Private Schools</h3>
                <ul>
                    <li><strong>Public schools:</strong> Free, high quality, majority attend</li>
                    <li><strong>Private schools:</strong> Growing sector; often emphasize languages or alternative pedagogies</li>
                    <li><strong>International schools:</strong> Available in capital cities; English instruction; expensive</li>
                </ul>
                
                <h3>Higher Education</h3>
                <ul>
                    <li><strong>Universities and colleges:</strong> Academic and applied tracks</li>
                    <li><strong>State-funded places:</strong> Free tuition for top performers</li>
                    <li><strong>Paid places:</strong> Available for those not qualifying for state funding</li>
                    <li><strong>Bologna Process:</strong> Three-cycle system (Bachelor, Master, PhD)</li>
                    <li><strong>English programs:</strong> Many master's programs offered in English</li>
                    <li><strong>Quality:</strong> Several ranked universities; strong in IT, sciences</li>
                </ul>
                
                <div class="tip">
                    <strong>Estonia's Tech Education:</strong> Estonia has highest number of startups per capita in Europe. Education system emphasizes digital skills, entrepreneurship, and innovation. Children learn coding from Grade 1. Great for tech-oriented families!
                </div>
                
                <h3>For Foreign Students</h3>
                <ul>
                    <li><strong>Language barrier:</strong> Learning local language essential for public schools</li>
                    <li><strong>Language support:</strong> Programs exist but vary by school and region</li>
                    <li><strong>International schools:</strong> Easier transition but expensive</li>
                    <li><strong>Fast integration:</strong> Children often pick up language quickly through immersion</li>
                    <li><strong>Credential recognition:</strong> Foreign qualifications assessed for appropriate placement</li>
                </ul>
                
                <h3>Parent Involvement</h3>
                <ul>
                    <li>Parent-teacher meetings regularly (quarterly or twice yearly)</li>
                    <li>Digital communication systems (e-kooli in Estonia, etc.)</li>
                    <li>Parents monitor homework and academic progress</li>
                    <li>School councils include parent representatives</li>
                    <li>Active parent communities in most schools</li>
                </ul>
                
                <h3>Holiday Schedule</h3>
                <ul>
                    <li><strong>Summer:</strong> June-August (3 months)</li>
                    <li><strong>Winter:</strong> Christmas/New Year (2 weeks)</li>
                    <li><strong>Spring:</strong> Easter break (1 week)</li>
                    <li><strong>Autumn:</strong> Short break (1 week)</li>
                    <li><strong>National holidays:</strong> Independence Days, Midsummer</li>
                </ul>
                
                <h3>Unique Cultural Elements</h3>
                <ul>
                    <li><strong>Song festivals:</strong> Massive choral events involving thousands; schools participate</li>
                    <li><strong>Outdoor education:</strong> Forest schools, nature education emphasized</li>
                    <li><strong>National pride:</strong> History and national identity important in curriculum</li>
                    <li><strong>STEM focus:</strong> Especially Estonia - strong math, science, IT education</li>
                </ul>
                
                <h3>Challenges</h3>
                <ul>
                    <li>Teacher salaries modest (though improving)</li>
                    <li>Rural-urban quality gap exists</li>
                    <li>Language policy changes can be contentious</li>
                    <li>Brain drain - educated youth often emigrate</li>
                    <li>Declining birth rates affecting school populations</li>
                </ul>
            `
        },
        religionFaith: {
            title: "🛐 Module 8: Religion & Faith in the Baltics 🤝",
            content: `
                <h3>Religious Landscape</h3>
                <p>The Baltic states have diverse religious histories influenced by various occupations and migrations. Current religiosity is low compared to most of Europe, with secularism strong especially in Estonia. Each country has different religious composition and relationship with faith.</p>
                
                <h3>Estonia: Most Secular Country in Europe</h3>
                <p>Estonia is one of the world's least religious societies:</p>
                <ul>
                    <li><strong>Non-religious:</strong> ~70-75% claim no religious affiliation</li>
                    <li><strong>Lutheran heritage:</strong> Historically Protestant but very secularized</li>
                    <li><strong>Orthodox minority:</strong> ~15% (mainly ethnic Russians)</li>
                    <li><strong>Church attendance:</strong> Minimal (~5%)</li>
                    <li><strong>Religion very private:</strong> Rarely discussed or displayed publicly</li>
                </ul>
                
                <div class="important">
                    <strong>Estonian Secularity:</strong> Estonians often joke they worship nature and the internet more than God. Religion is deeply private. Even church buildings used primarily as cultural venues. Don't expect religious discussions or displays.
                </div>
                
                <h3>Latvia: Lutheran and Catholic Mix</h3>
                <ul>
                    <li><strong>Lutheran:</strong> ~35% (traditional faith of ethnic Latvians)</li>
                    <li><strong>Catholic:</strong> ~25% (particularly Latgale region)</li>
                    <li><strong>Orthodox:</strong> ~15% (mainly ethnic Russians)</li>
                    <li><strong>Non-religious:</strong> Growing, especially among youth</li>
                    <li><strong>More religious:</strong> Than Estonia but still largely secular</li>
                </ul>
                
                <h3>Lithuania: Most Religious Baltic State</h3>
                <ul>
                    <li><strong>Catholic:</strong> ~80% identify as Catholic (though many non-practicing)</li>
                    <li><strong>Orthodox:</strong> Small minority</li>
                    <li><strong>Church attendance:</strong> Higher than other Baltics but declining</li>
                    <li><strong>Catholic identity:</strong> Intertwined with Lithuanian national identity</li>
                    <li><strong>More traditional:</strong> Religion plays larger cultural role than Estonia/Latvia</li>
                </ul>
                
                <h3>Religious Freedom</h3>
                <ul>
                    <li>Complete freedom of religion in all three countries</li>
                    <li>No state church (though Lutheran churches have historical significance)</li>
                    <li>Right to practice any faith or none</li>
                    <li>Religious discrimination illegal</li>
                    <li>Growing religious diversity through immigration</li>
                </ul>
                
                <h3>Major Religious Traditions</h3>
                
                <h4>Lutheranism (Estonia, Latvia):</h4>
                <ul>
                    <li>Historical state religion</li>
                    <li>Beautiful historic churches (often now museums or concert venues)</li>
                    <li>Christmas and Easter observed culturally more than religiously</li>
                    <li>Low church attendance</li>
                </ul>
                
                <h4>Catholicism (Lithuania, Latgale region of Latvia):</h4>
                <ul>
                    <li>Stronger presence in Lithuania</li>
                    <li>Pilgrimage sites (Hill of Crosses in Lithuania)</li>
                    <li>Catholic holidays observed</li>
                    <li>Pope John Paul II important figure for Lithuanians</li>
                </ul>
                
                <h4>Orthodox Christianity:</h4>
                <ul>
                    <li>Primarily ethnic Russian communities</li>
                    <li>Beautiful Orthodox churches and cathedrals</li>
                    <li>Alexander Nevsky Cathedral (Tallinn), Orthodox churches (Riga)</li>
                    <li>Follow Julian calendar (different holiday dates)</li>
                </ul>
                
                <h3>Religious Holidays</h3>
                <ul>
                    <li><strong>Christmas:</strong> December 24-26 (public holidays in all three)</li>
                    <li><strong>Easter:</strong> Western Easter (public holiday)</li>
                    <li><strong>All Saints' Day:</strong> November 1 (particularly Lithuania)</li>
                    <li>Holidays often observed as secular time off rather than religious observance</li>
                </ul>
                
                <h3>Unique Cultural Celebrations</h3>
                
                <h4>Midsummer (Jāņi/Joninės/Jaanipäev):</h4>
                <p>Most important holiday - pre-Christian, pagan-rooted celebration:</p>
                <ul>
                    <li><strong>June 23-24:</strong> Summer solstice celebration</li>
                    <li><strong>Bonfires:</strong> All-night festivities</li>
                    <li><strong>Nature rituals:</strong> Flower crowns, jumping over fires, searching for fern flower</li>
                    <li><strong>Beer and singing:</strong> Traditional foods and folk songs</li>
                    <li><strong>National holiday:</strong> Most important summer celebration</li>
                </ul>
                
                <h4>Song Festivals:</h4>
                <ul>
                    <li>Mass choral events with thousands of singers</li>
                    <li>Deeply cultural/national, not religious</li>
                    <li>UNESCO Intangible Cultural Heritage</li>
                    <li>Singing Revolution legacy - songs helped achieve independence</li>
                </ul>
                
                <div class="tip">
                    <strong>Nature Spirituality:</strong> Like Finns, many Balts describe connection to nature as their "religion." Forests, Baltic Sea, ancient oak groves have spiritual significance. Midsummer celebration connects to pre-Christian nature worship.
                </div>
                
                <h3>Other Religious Communities</h3>
                <ul>
                    <li><strong>Muslims:</strong> Small but growing communities, mainly in capitals</li>
                    <li><strong>Jews:</strong> Historic communities decimated in Holocaust; small communities remain</li>
                    <li><strong>Various Christian denominations:</strong> Baptists, Pentecostals, others</li>
                    <li><strong>New Age/Spiritual:</strong> Growing interest in alternative spirituality</li>
                </ul>
                
                <h3>Religion in Daily Life</h3>
                <ul>
                    <li><strong>Very private:</strong> Religion rarely discussed in social/work settings</li>
                    <li><strong>Secularism strong:</strong> Especially Estonia and Latvia</li>
                    <li><strong>Lifecycle events:</strong> Some still mark with religious ceremonies (baptisms, church weddings, funerals)</li>
                    <li><strong>Schools:</strong> Religious education optional; comparative approach</li>
                    <li><strong>Churches as culture:</strong> Historic churches often function as museums/concert halls</li>
                </ul>
                
                <h3>Religious Sites</h3>
                <ul>
                    <li><strong>Tallinn:</strong> Alexander Nevsky Cathedral, St. Mary's Cathedral</li>
                    <li><strong>Riga:</strong> Riga Cathedral, St. Peter's Church</li>
                    <li><strong>Vilnius:</strong> Vilnius Cathedral, Gates of Dawn, Hill of Three Crosses</li>
                    <li><strong>Hill of Crosses (Lithuania):</strong> Major pilgrimage site; powerful symbol of faith and resistance</li>
                    <li>Most churches welcome respectful visitors</li>
                </ul>
                
                <h3>Soviet Legacy</h3>
                <ul>
                    <li>50 years of Soviet atheism deeply affected religious practice</li>
                    <li>Churches closed, clergy persecuted, religious practice suppressed</li>
                    <li>Created generations with little religious upbringing</li>
                    <li>Post-independence: freedom restored but secularization continued</li>
                    <li>Religion associated by some with resistance to Soviet occupation (especially Lithuania)</li>
                </ul>
                
                <h3>For Newcomers</h3>
                <ul>
                    <li><strong>Practice privately:</strong> Faith is personal matter; public displays uncommon</li>
                    <li><strong>Proselytizing unwelcome:</strong> Evangelism viewed negatively</li>
                    <li><strong>Finding community:</strong> Religious communities exist but may be small; search online</li>
                    <li><strong>International churches:</strong> In capitals, various denominations offer English-language services</li>
                    <li><strong>Respect secular culture:</strong> Don't assume religious observance or knowledge</li>
                </ul>
                
                <div class="important">
                    <strong>Cultural vs. Religious Identity:</strong> Many Balts identify culturally with Lutheran or Catholic heritage without religious belief. Christmas and Easter are cultural holidays, not primarily religious. Understand this distinction when discussing faith.
                </div>
                
                <h3>Social Attitudes</h3>
                <ul>
                    <li>Tolerance for diverse beliefs (or non-belief)</li>
                    <li>Strong religiosity can make people uncomfortable (especially Estonia)</li>
                    <li>LGBTQ+ rights vary: Estonia most progressive, Lithuania most traditional</li>
                    <li>Younger generations more secular than older</li>
                    <li>Urban-rural divide: cities more secular, rural areas more traditional</li>
                </ul>
            `
        }
    }
};
