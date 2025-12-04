// Cultural data for all countries and categories
const culturalData = {
    england: {
        name: "England",
        flag: "🇬🇧",
        publicConduct: {
            title: "🏛️ Module 2: Public & Community Conduct – A Practical Guide to Getting Along and Fitting In 🤝",
            content: `
                <p>Right, let's get into the nitty-gritty of how to behave in public and be a good neighbour. 🏘️ This is crucial stuff – get it wrong and you'll stick out like a sore thumb. Get it right, and people will barely notice you're new here (which is actually the goal 🎯).</p>
                
                <p>This isn't about changing who you are. It's about understanding the unwritten rules that keep British society ticking along smoothly. ⚙️ Think of it as learning the local dialect of "being considerate." Let's crack on! 💪</p>

                <h3>🚨 Part 1: The Legal Essentials – What Can Actually Get You In Trouble ⚖️</h3>
                <p>Before we get to the social stuff, here are the legal bits. Breaking these can result in fines 💸 or worse.</p>

                <div class="warning">
                    <strong>🚯 Anti-Social Behaviour Laws</strong>
                    <ul>
                        <li><strong>Littering:</strong> Dropping litter is a criminal offence. Fixed penalty fines range from £50-£150. 🗑️ If it goes to court, fines can reach £2,500.</li>
                        <li><strong>Noise Nuisance:</strong> Making excessive noise, especially at night (11 PM - 7 AM) 🌙, can result in formal warnings and fines. Your local council has the power to confiscate equipment.</li>
                        <li><strong>Public Drinking:</strong> Many town and city centres have "Public Space Protection Orders" banning alcohol. 🍺 Check for signs – you can be fined or have your drink confiscated.</li>
                        <li><strong>Dog Fouling:</strong> Not picking up after your dog 🐕 can result in fines up to £1,000. Always carry bags.</li>
                    </ul>
                </div>

                <div class="important">
                    <strong>⚠️ Public Order Offences</strong>
                    <ul>
                        <li><strong>Threatening or Abusive Behaviour:</strong> Using threatening words or behaviour that could cause harassment, alarm, or distress is a crime. This includes racist or homophobic language. 🚫</li>
                        <li><strong>Being Drunk and Disorderly:</strong> Being visibly drunk and causing a disturbance in public is an offence. 🍻 You can be arrested.</li>
                        <li><strong>Harassment:</strong> Repeatedly following someone, making threats, or behaving in a way that causes fear is illegal under the Protection from Harassment Act.</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>📢 Freedom of Speech (and its limits)</strong>
                    <p>You have the right to express opinions, protest peacefully ✊, and practice your religion. However, "hate speech" – speech that incites hatred against protected groups (race, religion, sexuality, disability) – is a crime. There's a line between robust debate and abuse. 🎭</p>
                </div>

                <h3>🤫 Part 2: The Unwritten Rules – Keeping the Peace</h3>
                <p>Now for the stuff that won't get you arrested, but will make your life much easier (or much harder) if you ignore it. 🧐</p>

                <h4>🔇 Noise and Disturbance:</h4>
                <ul>
                    <li>🌃 <strong>After 11 PM:</strong> Keep it down. No loud music 🎵, no shouting in the street, no slamming car doors repeatedly. Your neighbours are sleeping (or trying to).</li>
                    <li>☀️ <strong>Sunday Mornings:</strong> Don't start drilling, mowing the lawn 🌿, or doing anything noisy before about 10 AM. Sunday is traditionally a quiet day.</li>
                    <li>🔨 <strong>DIY and Construction:</strong> Try to keep disruptive work to reasonable weekday hours. Warn your neighbours if you're doing something particularly noisy.</li>
                    <li>🐕 <strong>Dogs Barking:</strong> Persistent barking is a major source of neighbour disputes. Train your dog or address the issue. 🤫</li>
                </ul>

                <h4>🏡 Being a Good Neighbour:</h4>
                <ul>
                    <li>👋 <strong>Greet Your Neighbours:</strong> A simple "Hello" or "Morning" when you see them is enough. You don't need to become best friends 🤝, but basic acknowledgement is expected.</li>
                    <li>🌳 <strong>Keep Your Garden Tidy:</strong> You don't need a perfect lawn, but an overgrown jungle can affect property values and annoy neighbours. 🪴</li>
                    <li>🚗 <strong>Parking:</strong> Don't block anyone's driveway. Be considerate about how much street space you take up. Don't park over someone's dropped kerb.</li>
                    <li>🗑️ <strong>Bin Days:</strong> Put your bins out on the correct day 📅 and bring them back in afterwards. Don't leave them cluttering the pavement for days.</li>
                    <li>📬 <strong>Accepting Parcels:</strong> If a neighbour is out, it's common to accept parcels for them. It's a small gesture that builds goodwill. 📦</li>
                </ul>

                <h4>📢 Communication is Key:</h4>
                <ul>
                    <li>🎉 <strong>If You're Having a Party:</strong> Warn your immediate neighbours in advance. A quick knock on the door or a note through the letterbox goes a long way. ✉️</li>
                    <li>🔧 <strong>If Something Bothers You:</strong> Talk to your neighbour calmly and politely <em>first</em>. Most issues can be resolved with a friendly word. 💬 Going straight to the council is seen as aggressive.</li>
                    <li>😤 <strong>If There's a Dispute:</strong> Local councils often have free mediation services for neighbour disputes. Use them before things escalate. 🤝</li>
                </ul>

                <h3>🚇 Part 3: Public Transport and Shared Spaces – The Art of the Commute</h3>
                <p>Public spaces are where British reserve is most visible. Here's how to navigate them. 🚶</p>

                <ul>
                    <li>📶 <strong>Queuing:</strong> This is sacred. 🙏 Always join the back of the queue. Never push in. Never. Seriously. It's basically a national religion. 🇬🇧</li>
                    <li>⬅️ <strong>Escalators:</strong> Stand on the right, walk on the left. This applies on the London Underground especially, but is good practice everywhere. ⬆️</li>
                    <li>🚌 <strong>Public Transport:</strong> Let people off before you get on. 🚪 Give up your seat for elderly, pregnant, or disabled passengers (look for priority seats). Keep your voice down. 🔇 Avoid taking up multiple seats with bags.</li>
                    <li>📱 <strong>Phone Calls:</strong> Keep calls brief and quiet. Nobody wants to hear your entire conversation. 🙉 On trains, many carriages are "quiet carriages" where calls are discouraged.</li>
                    <li>🎧 <strong>Music:</strong> Use headphones. 🎶 Playing music out loud on the bus or train is incredibly annoying and marks you out as inconsiderate.</li>
                    <li>🚶 <strong>Pavements:</strong> Walk at a reasonable pace. Don't stop suddenly in the middle of a busy pavement. Be aware of people trying to get past. 👣</li>
                    <li>🚪 <strong>Holding Doors:</strong> Hold the door open for the person behind you. 🙌 It's automatic courtesy. Say "thank you" when someone does it for you.</li>
                </ul>

                <div class="tip">
                    <strong>💡 The "Sorry" Rule</strong>
                    <p>The English apologise constantly, often for things that aren't their fault. "Sorry" is used to mean "excuse me" 🙏, to get someone's attention 👋, or just to fill awkward silence. You'll hear it hundreds of times a day. Join in! 😅</p>
                </div>

                <h3>🛒 Part 4: Shops, Pubs, and Public Services – How Things Work</h3>

                <h4>🏪 Shops and Restaurants:</h4>
                <ul>
                    <li>👋 <strong>Greetings:</strong> Saying "Hello" to shop staff isn't compulsory, but it's polite. Always say "thank you" after a transaction. 🙏</li>
                    <li>🔕 <strong>Browsing:</strong> You're generally left alone to browse. Staff won't follow you around (if they do, it's bad service). 🛍️</li>
                    <li>✋ <strong>Getting Attention:</strong> Don't shout or snap your fingers at staff. 🙅 Make eye contact, raise a hand slightly, or wait for them to approach. Patience is valued.</li>
                    <li>💷 <strong>Tipping:</strong> Not obligatory in most situations. Restaurants often add a service charge 📝 (check your bill). Tipping 10-15% is appreciated but not expected.</li>
                </ul>

                <h4>🍺 The Pub:</h4>
                <ul>
                    <li>🪑 <strong>Finding a Seat:</strong> Some pubs are "order at the bar," some have table service. Look around for clues or ask. 🧐</li>
                    <li>🍻 <strong>Buying Rounds:</strong> If you're with a group, you'll take turns buying drinks for everyone. 🔄 This is called "getting a round in." It's a social contract – don't skip your turn, and don't accept drinks without offering to buy one back. 💸</li>
                    <li>🧍 <strong>Don't Lean on the Bar:</strong> If others are waiting to order, get your drinks and move. 🚶 Don't hog the bar space.</li>
                </ul>

                <h4>🏥 Public Services (GP, Council, etc.):</h4>
                <ul>
                    <li>📅 <strong>Appointments:</strong> Be on time. ⏰ For GP appointments, arriving late often means you'll lose your slot.</li>
                    <li>😌 <strong>Be Patient:</strong> Queues and waiting times are a fact of life. ⏳ Getting angry at frontline staff won't speed things up and makes you look unreasonable. 😤</li>
                    <li>📄 <strong>Have Your Documents Ready:</strong> Whether it's ID, proof of address, or reference numbers – come prepared. 📋</li>
                    <li>🙏 <strong>Say Please and Thank You:</strong> Always. Even if the service was slow. 😊</li>
                </ul>

                <h3>🌍 Part 5: Community and Integration – Getting Involved</h3>
                <p>Being part of a community isn't just about not annoying people. It's about contributing. 🤗</p>

                <ul>
                    <li>🏠 <strong>Local Events:</strong> Look out for village fetes, community fairs, charity events, or seasonal celebrations. 🎪 Attending shows you're interested in your community.</li>
                    <li>🙋 <strong>Volunteering:</strong> This is highly valued and a great way to meet people. 🤝 Charity shops, food banks, community groups, school PTAs – there are endless opportunities. 💪</li>
                    <li>🏃 <strong>Sports Clubs and Societies:</strong> Joining a local football team ⚽, running club 🏃‍♀️, book club 📚, or hobby group is one of the best ways to integrate. The English open up more over shared activities.</li>
                    <li>⛪ <strong>Religious and Community Groups:</strong> Many faith groups have active community outreach. Even non-religious community centres often run groups and activities. 🕌</li>
                    <li>👨‍👩‍👧 <strong>School Community:</strong> If you have children 🧒, get involved with school events. It's a natural way to meet other local parents.</li>
                </ul>

                <h3>♻️ Part 6: Environmental Responsibility – Doing Your Bit</h3>
                <p>The English take environmental responsibility increasingly seriously. 🌱</p>

                <ul>
                    <li>♻️ <strong>Recycling:</strong> This is mandatory. 🗑️ Councils provide different bins for different waste (general, recycling, garden, food). Learn your collection days and what goes where. Getting it wrong can mean your bins aren't collected. 📅</li>
                    <li>💧 <strong>Water Conservation:</strong> In summer, there may be hosepipe bans. 🚿 Don't waste water unnecessarily.</li>
                    <li>🐶 <strong>Dog Walking:</strong> Always clean up after your dog. 🐕 Carry poo bags. Use designated bins or take it home. 🗑️</li>
                    <li>🌳 <strong>Countryside Code:</strong> If you're in the countryside, follow paths, close gates 🚪, don't litter, keep dogs under control, and respect wildlife. 🦔</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>Public and community conduct in England can be summed up in three words: <strong>quiet, considerate, and patient</strong>. 🤫🤝⏳ Mind your own business (mostly), be polite even when frustrated, say please and thank you, and queue properly. Do that, and you'll fit in just fine! ✅🇬🇧</p>
                </div>
            `
        },
        relationships: {
            title: "💕 Module 1: A Practical Guide to Relationships, Respect, and How Not to Make a Fool of Yourself 🤝",
            content: `
                <p>Right then. Let's talk about the tricky stuff: men, women, dating, and everything in between. 🎭 This is likely the biggest difference you'll find from your home country, and it's where things can go wrong fastest. ⚠️</p>
                
                <p>This guide isn't here to judge. It's a practical manual to help you understand the landscape, avoid getting into hot water 🔥, and hopefully have a decent time. Pay attention, because these aren't just suggestions – they're the rules of the game! 🎯</p>

                <h3>🚨 Part 1: The Absolute, Non-Negotiable Rules (The Legal Bits) 📜</h3>
                <p>This isn't about culture; this is about the law. ⚖️ Breaking these rules can lead to prison. There are <strong>no exceptions</strong>.</p>

                <div class="warning">
                    <strong>🔞 The Age of Consent is 16 (England & Wales)</strong>
                    <ul>
                        <li>It is a <strong>serious crime</strong> to have any kind of sexual contact with someone under 16. The law is absolute on this.</li>
                        <li>"I thought they were older" is <strong>never</strong> an excuse. The responsibility is 100% on you. If you have any doubt at all, walk away. 🚶</li>
                        <li><strong>Important:</strong> For people in positions of trust (like teachers 👨‍🏫, coaches, or doctors 👩‍⚕️), it is illegal to have a sexual relationship with a 16 or 17-year-old in their care. The age limit is effectively 18 in these cases.</li>
                    </ul>
                </div>

                <div class="important">
                    <strong>✅ Consent is Freely and Enthusiastically Given</strong>
                    <ul>
                        <li>You must have a clear "yes." 👍 Silence is not a yes. Someone being friendly is not a yes. Someone being drunk 🍺 is not a yes.</li>
                        <li>"No" means "No." 🛑 It is the end of the conversation. Pestering, begging, or arguing after a "no" is harassment.</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>⚖️ Equality is the Law</strong>
                    <p>Men and women are equal. 👫 Same-sex relationships are legal, normal, and protected by law. 🏳️‍🌈 You will see gay couples holding hands or being affectionate; this is a normal part of life here. Disrespecting someone based on their gender or sexuality is not tolerated.</p>
                </div>

                <h3>👔 Part 2: Dress Code – The Art of Effort and Understatement</h3>
                <p>First things first: in modern England, you can, and should, wear whatever makes you feel comfortable. 😎 Personal freedom is highly valued. The prevailing attitude is that you shouldn't judge a book by its cover. 📚 So, the primary rule is: <strong>be yourself</strong>.</p>

                <p>However, this guide is here to give you practical advice. We don't have strict "dress codes," but we do have "contexts." 🎭 Choosing what to wear is less about following rules and more about showing you understand the situation. It boils down to one simple concept: <strong>"making an effort." ✨</strong></p>

                <div class="tip">
                    <strong>💡 What does "making an effort" mean?</strong>
                    <p>It means you've thought about the occasion and dressed appropriately for it. It's a non-verbal way of saying "I respect this situation and the people I'm with." 🤝 It has very little to do with money 💰 and everything to do with care. Clean clothes, clean shoes 👟, and a tidy appearance are the foundation.</p>
                </div>

                <h4>🎯 Context is Everything:</h4>
                <ul>
                    <li>🏠 <strong>Daily Life</strong> (running errands): Comfort is key. Nobody will bat an eyelid at what you're wearing.</li>
                    <li>🍺 <strong>A Casual Social Setting</strong> (e.g., the pub): You'll see everything, but the safe middle ground is "smart casual"—think clean jeans or chinos and a decent jumper or shirt. It says, "I'm relaxed, but I've made an effort."</li>
                    <li>🍽️ <strong>A "Nice" Occasion</strong> (a good restaurant, a date): This is where "making an effort" is most appreciated. It shows respect for the person you're with and the place you're in.</li>
                    <li>🎨 <strong>Expressing Yourself:</strong> If you have a unique personal style, wear it with confidence. In most places, people will either not notice or will appreciate the individuality.</li>
                </ul>

                <p>The real secret is that the English are masters of <strong>understatement</strong>. 🎩 The goal is often to look good without looking like you've tried too hard. So, forget rigid rules. Just ask yourself: "Am I showing the right amount of respect for this occasion?" If the answer is yes, you've got it right. ✅</p>

                <h3>🎭 Part 3: The Social Dance – Public Behaviour and First Steps</h3>
                <p>This is where the real English culture comes in. We are generally reserved and value privacy. 🤫</p>

                <ul>
                    <li>💑 <strong>Public Affection:</strong> Keep it subtle. Holding hands or a brief kiss is fine. 😘 Long, passionate embraces in the middle of a quiet café will make people uncomfortable. 😬</li>
                    <li>📏 <strong>Personal Space:</strong> We like our space. Don't stand too close. A good rule is to keep about an arm's length away. 🤲 Uninvited touching, even if you mean it to be friendly, is often seen as an invasion of that space.</li>
                    <li>💬 <strong>The Art of the Compliment:</strong> Be careful. Complimenting something someone <em>chose</em> (their jacket 🧥, their shoes 👞) is safe. Complimenting someone's body ("you have beautiful eyes" 👀) can come across as far too forward and may be seen as an unwanted advance.</li>
                    <li>🗣️ <strong>Initiating a Conversation:</strong> It's fine to chat to someone in a pub or social setting. Use the situation as a starting point ("It's busy tonight 🌙"). If they give short, one-word answers and turn away, that's a polite signal to end the conversation. Take the hint gracefully. 😊</li>
                </ul>

                <h3>💕 Part 4: Dating – The Unspoken Rules</h3>
                <ul>
                    <li>🍻 <strong>Alcohol is Involved:</strong> A huge amount of socialising and dating revolves around alcohol. "Going for a drink" is the standard first date. It's casual, low-pressure, and has an easy time limit. ⏰</li>
                    <li>💸 <strong>Who Pays?:</strong> The old "man always pays" rule is dead. ⚰️ Often, people will "get a round" in turn, or the bill is split ("going Dutch" 🇳🇱). A good policy is to always offer to pay your share.</li>
                    <li>📅 <strong>Age Gaps:</strong> Large age gaps (10+ years) are less common and can sometimes be viewed with suspicion 🤔, especially if one person is very young (e.g., under 21). It's not illegal, but it's something to be aware of.</li>
                    <li>🙅 <strong>Handling Rejection:</strong> If you ask someone out and they say no, the only acceptable response is a polite, "No problem, have a good evening," 👋 and then you move on. Pestering someone after rejection is considered socially unacceptable and will seriously damage your reputation. 🚫</li>
                    <li>💔 <strong>Infidelity ("Cheating"):</strong> Loyalty is highly valued. Cheating on a partner is seen as a massive betrayal and a deeply dishonourable thing to do.</li>
                    <li>🌙 <strong>The End of the Night:</strong> Do not assume a date will end in physical intimacy. It usually doesn't. A simple "I had a really nice time" 😊 is the best way to end the evening. If they feel the same, you can arrange another date. 📱</li>
                </ul>

                <div class="important">
                    <strong>🎯 The Bottom Line</strong>
                    <p>This guide might seem complex, but it boils down to one thing: <strong>respect</strong>. 🙏 Respect the law ⚖️, respect personal space 📏, and respect a person's right to say "no." 🛑 If you make that your starting point, you'll be absolutely fine! ✨🇬🇧</p>
                </div>
            `
        },
        communicationMindset: {
            title: "🗣️ Module 3: Communication & Mindset – How to Talk, Think, and Fit In Like a Local 🧠",
            content: `
                <p>Right then, let's crack on with one of the trickiest bits of fitting into English life: how we actually communicate. 🗣️ It's not just about speaking English – it's about understanding how the English <em>use</em> English. We're a nation of understatement, indirect hints, and saying "fine" when we mean absolutely anything but. 😅</p>
                
                <p>This module will help you decode what we really mean, how to express yourself without putting your foot in it 🦶, and how to develop the mindset that'll help you thrive here. Let's get into it! 💪</p>

                <h3>🎭 Part 1: The Art of Indirect Communication – What We Say vs What We Mean</h3>
                <p>The English are world champions at <strong>not saying what they mean</strong>. 🏆 This isn't dishonesty – it's a cultural preference for politeness, understatement, and avoiding confrontation. Here's your decoder ring: 🔑</p>

                <div class="important">
                    <strong>🔍 The English Translation Guide</strong>
                    <ul>
                        <li><strong>"That's interesting..."</strong> = I disagree completely, or I think that's a terrible idea. 🤔</li>
                        <li><strong>"I'll bear that in mind"</strong> = I've already forgotten it and won't be doing that. 🙃</li>
                        <li><strong>"With the greatest respect..."</strong> = I'm about to completely disagree with you. 😬</li>
                        <li><strong>"I'm sure it's my fault, but..."</strong> = This is definitely your fault. 😤</li>
                        <li><strong>"Not bad"</strong> = Actually quite good! Sometimes even excellent. ✨</li>
                        <li><strong>"Could we consider some other options?"</strong> = I don't like your idea at all. ❌</li>
                        <li><strong>"I hear what you're saying"</strong> = I disagree and wish you'd stop saying it. 🙉</li>
                        <li><strong>"Fine"</strong> = Could mean anything from "great" to "I'm furious but won't say so." 🎲</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 The Golden Rule</strong>
                    <p>When an English person says something mildly positive, they often mean something very positive. When they say something mildly negative, they often mean something quite harsh. 📊 The more polite the phrasing, the more you should pay attention to what's <em>not</em> being said directly!</p>
                </div>

                <h3>🤝 Part 2: The Power Words – "Please," "Thank You," and "Sorry" 🙏</h3>
                <p>These three words are the lubricant of English social life. ⚙️ Use them constantly – far more than you think is necessary.</p>

                <h4>🙏 Please:</h4>
                <ul>
                    <li>Add it to <em>every</em> request, no matter how small. "A coffee, please." "Could you pass the salt, please?" ☕</li>
                    <li>Even when ordering food or asking for directions, "please" is expected. 🗺️</li>
                    <li>Leaving it out makes you sound rude or demanding – even if you don't mean to be. 😬</li>
                </ul>

                <h4>🙌 Thank You:</h4>
                <ul>
                    <li>Say it after <em>everything</em>. When someone holds a door. When a bus driver stops. When you receive anything. 🚌</li>
                    <li>Variations include: "Thanks," "Cheers," "Ta" (informal), "Much appreciated." 👍</li>
                    <li>"Cheers" is particularly versatile – it can mean thank you, goodbye, or be a toast! 🍻</li>
                </ul>

                <h4>😅 Sorry:</h4>
                <ul>
                    <li>The English apologise for <em>everything</em>. Someone bumps into us? We say sorry. 🙇</li>
                    <li>It doesn't always mean actual apology – it can mean "excuse me," "I didn't hear you," or just general acknowledgment. 🤷</li>
                    <li>If someone steps on YOUR foot, you might well say sorry. This is normal here! 😂</li>
                </ul>

                <div class="warning">
                    <strong>⚠️ Don't Skip These Words!</strong>
                    <p>Forgetting to say please, thank you, or sorry is one of the fastest ways to be seen as rude. 🚫 It doesn't matter if your culture considers these words excessive – in England, they're the basics of social interaction. Use them automatically! 🔄</p>
                </div>

                <h3>💬 Part 3: Small Talk – The Great British Pastime ☕</h3>
                <p>Small talk isn't just a time-filler here – it's a social ritual. 🎭 Before getting to the point of any conversation, expect some pleasantries.</p>

                <h4>🌤️ The Weather – The Ultimate Safe Topic:</h4>
                <ul>
                    <li>"Lovely day, isn't it?" "Bit chilly today!" "Can you believe this rain?" 🌧️</li>
                    <li>This isn't because we're obsessed with weather (though we are 😄) – it's a safe, neutral way to connect.</li>
                    <li>Agree enthusiastically, even if you're from somewhere much hotter or colder! ❄️☀️</li>
                </ul>

                <h4>✅ Good Small Talk Topics:</h4>
                <ul>
                    <li>⚽ <strong>Football and sports:</strong> "Did you see the match?" is a great opener.</li>
                    <li>✈️ <strong>Holidays and travel:</strong> "Been anywhere nice recently?"</li>
                    <li>📺 <strong>TV shows:</strong> Especially British ones – everyone watches Strictly or Bake Off!</li>
                    <li>🏠 <strong>Local events:</strong> What's happening in the area, traffic, that new café.</li>
                </ul>

                <h4>❌ Topics to Avoid (Until You Know Someone Well):</h4>
                <ul>
                    <li>💷 <strong>Money and salary:</strong> Very private topic. Never ask what someone earns.</li>
                    <li>🗳️ <strong>Politics:</strong> Especially now – can get heated very quickly. Proceed with caution!</li>
                    <li>🛐 <strong>Religion:</strong> Generally considered private unless they bring it up.</li>
                    <li>👑 <strong>The Royal Family:</strong> Opinions vary wildly – you might offend either way!</li>
                    <li>🎂 <strong>Age:</strong> Especially with women, this is considered impolite.</li>
                </ul>

                <div class="tip">
                    <strong>💡 Reading the Room</strong>
                    <p>If someone is giving short, one-word answers and not making eye contact, they don't want to chat. 🙅 Don't take it personally – they might just be having a bad day or simply prefer their own company. Respect that! 🤫</p>
                </div>

                <h3>🧠 Part 4: The English Mindset – Attitudes That Will Help You Fit In 🎯</h3>
                <p>Beyond what you say, <em>how you think</em> about situations makes a big difference. Here are some mindset shifts that'll help: 🔄</p>

                <h4>🤐 Understatement is King:</h4>
                <ul>
                    <li>The English distrust over-enthusiasm and big claims. 📉</li>
                    <li>Instead of "This is amazing!", try "Not bad at all" or "Quite nice, actually." 😌</li>
                    <li>Self-deprecation is valued – people who brag or boast are seen negatively. 🙄</li>
                    <li>If you win something, downplay it: "Oh, I just got lucky!" 🍀</li>
                </ul>

                <h4>😌 Keep Calm and Carry On:</h4>
                <ul>
                    <li>Getting visibly angry, shouting, or making a scene is extremely frowned upon. 🙅</li>
                    <li>Even if you're furious, keep your voice down and stay polite. 🤫</li>
                    <li>"Keeping a stiff upper lip" means not showing excessive emotion, especially negative ones. 😐</li>
                    <li>If something goes wrong, the ideal response is a wry comment and moving on. 💪</li>
                </ul>

                <h4>⏳ Patience is a Virtue:</h4>
                <ul>
                    <li>Queuing, waiting, delayed trains 🚂 – accept these with good grace.</li>
                    <li>Sighing heavily, tutting loudly, or complaining publicly marks you out as "difficult." 😬</li>
                    <li>A quiet grumble to the person next to you is acceptable – a loud complaint is not. 🤭</li>
                </ul>

                <h4>😅 Self-Deprecating Humour:</h4>
                <ul>
                    <li>Making fun of yourself is a British art form. 🎭</li>
                    <li>It builds trust and shows you don't take yourself too seriously. 😄</li>
                    <li>If you make a mistake, laughing at yourself is the quickest way to defuse the situation! 🤣</li>
                </ul>

                <div class="important">
                    <strong>🎭 Understanding British Humour</strong>
                    <p>British humour is often dry, sarcastic, and deadpan. 🎯 Someone might say something that sounds insulting, but they're actually joking. Context and tone matter hugely. If everyone else is smiling, it's probably a joke! 😄 When in doubt, smile and laugh along – you'll learn to read it over time.</p>
                </div>

                <h3>🚫 Part 5: Communication Mistakes to Avoid 🙅</h3>
                <p>Here are some common pitfalls that can make communication tricky: ⚠️</p>

                <ul>
                    <li>🔊 <strong>Being Too Loud:</strong> The English speak relatively quietly. Loud voices in public are uncomfortable for everyone.</li>
                    <li>💪 <strong>Being Too Direct:</strong> "I want..." sounds demanding. "Could I possibly have...?" is much better. 🙏</li>
                    <li>🏆 <strong>Boasting:</strong> Talking up your achievements or possessions is seen as tacky. Let others discover your qualities!</li>
                    <li>📞 <strong>Phone Calls on Public Transport:</strong> Keep calls brief and quiet, or text instead. Nobody wants to hear your conversation! 📵</li>
                    <li>😡 <strong>Public Complaints:</strong> Taking a complaint public (shouting at staff, making a scene) will lose you sympathy, even if you're right.</li>
                    <li>🤨 <strong>Staring:</strong> Making prolonged eye contact with strangers is considered aggressive or strange. 👀</li>
                </ul>

                <h3>🏢 Part 6: Communication in Different Contexts 📍</h3>

                <h4>💼 At Work:</h4>
                <ul>
                    <li>Emails start with "Hi [Name]" or "Dear [Name]" and end with "Kind regards" or "Best wishes." ✉️</li>
                    <li>Requests are phrased softly: "Would you mind..." "When you get a chance..." "Could you possibly..." 🤝</li>
                    <li>Giving direct criticism is uncomfortable – expect feedback to be wrapped in positives. 🎁</li>
                    <li>Meetings often include small talk before getting to business. ☕</li>
                </ul>

                <h4>🛒 In Shops and Services:</h4>
                <ul>
                    <li>"Excuse me" or "Sorry" to get attention – never snap your fingers or shout! 🙅</li>
                    <li>"I was wondering if..." is softer than "Do you have..." 🤔</li>
                    <li>If there's a problem, stay calm and polite – you'll get better service. 😊</li>
                </ul>

                <h4>🏥 With Officials (Doctors, Council, etc.):</h4>
                <ul>
                    <li>Be polite and patient, even if you're frustrated. 😤➡️😌</li>
                    <li>Have your documents ready and be organised. 📋</li>
                    <li>"Thank you for your help" at the end goes a long way. 🙏</li>
                </ul>

                <div class="tip">
                    <strong>🌟 The Bottom Line</strong>
                    <p>English communication is all about <strong>reading between the lines</strong> 📖, being <strong>polite even when frustrated</strong> 😌, and never <strong>making a scene</strong> 🎭. Master the art of understatement, say please and thank you constantly, and when in doubt – apologise! 😅 You'll be fitting in before you know it. 🇬🇧✨</p>
                </div>
            `
        },
        social: {
            title: "Social Ethics in England",
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
            title: "Conversation Etiquette in England",
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
            title: "Dating Culture in England",
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
            title: "Marriage Customs in England",
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
            title: "Work Ethics in England",
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
            title: "Civic Duties in England",
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
            title: "Clothing Norms in England",
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
            title: "Hygiene Standards in England",
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
            title: "Path to Citizenship in England",
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
        }
    },
    germany: {
        name: "Germany",
        flag: "🇩🇪",
        social: {
            title: "Social Ethics in Germany",
            content: `
                <h3>General Social Norms</h3>
                <p>German society values punctuality, efficiency, and directness. There's a clear distinction between formal and informal relationships.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>"Guten Tag" (Good day) is the standard formal greeting</li>
                    <li>Firm handshake with direct eye contact is expected</li>
                    <li>Use titles (Herr, Frau, Dr.) until invited to use first names</li>
                    <li>"Sie" (formal you) vs "Du" (informal you) distinction is important</li>
                </ul>
                
                <h3>Punctuality</h3>
                <p>Being on time is extremely important in Germany. Arriving even 5 minutes late without notice is considered rude.</p>
                
                <div class="warning">
                    <strong>Note:</strong> "Pünktlichkeit" (punctuality) is a core German value. If you're going to be late, always call ahead.
                </div>
                
                <h3>Privacy</h3>
                <p>Germans value their privacy. Avoid asking personal questions until you know someone well. Respect quiet hours (Ruhezeiten) - typically 1-3 PM and after 10 PM.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Sundays are traditionally quiet days. Many shops are closed, and noisy activities are discouraged.
                </div>
            `
        },
        conversation: {
            title: "Conversation Etiquette in Germany",
            content: `
                <h3>Communication Style</h3>
                <p>Germans tend to be direct and straightforward. This isn't rudeness - it's valued honesty. Say what you mean without excessive politeness formulas.</p>
                
                <h3>Safe Topics</h3>
                <ul>
                    <li>Travel and vacations</li>
                    <li>Football (Fußball) and sports</li>
                    <li>Cars and engineering</li>
                    <li>Environmental issues</li>
                    <li>Cultural events and arts</li>
                </ul>
                
                <h3>Topics to Approach Carefully</h3>
                <ul>
                    <li>World War II and Nazi history (handled seriously)</li>
                    <li>Personal finances and salary</li>
                    <li>Age</li>
                    <li>Comparisons with other countries</li>
                </ul>
                
                <div class="important">
                    <strong>Important:</strong> Germans separate work and private life. Colleagues may not socialize outside work. This isn't unfriendliness - it's respecting boundaries.
                </div>
                
                <h3>Humor</h3>
                <p>German humor exists but may be different from what you're used to. Wordplay and irony are appreciated, but humor in professional settings is limited.</p>
            `
        },
        dating: {
            title: "Dating Culture in Germany",
            content: `
                <h3>Meeting People</h3>
                <p>Germans often meet through:</p>
                <ul>
                    <li>Friend groups and social circles</li>
                    <li>Sports clubs (Vereine)</li>
                    <li>Dating apps (very popular)</li>
                    <li>Work or university</li>
                </ul>
                
                <h3>Dating Norms</h3>
                <p>German dating can be direct. If someone is interested, they'll often make it clear. There's less "game-playing" than in some cultures.</p>
                
                <ul>
                    <li>Either person can ask the other out</li>
                    <li>Splitting bills is very common and expected</li>
                    <li>Punctuality matters for dates too</li>
                    <li>Public displays of affection are moderate</li>
                </ul>
                
                <div class="tip">
                    <strong>Tip:</strong> Be direct about your intentions. Germans appreciate honesty over playing games.
                </div>
                
                <h3>Relationship Progression</h3>
                <p>Relationships often develop from friendships. Germans may take time before committing but are serious once they do. Living together before marriage is common.</p>
            `
        },
        marriage: {
            title: "Marriage Customs in Germany",
            content: `
                <h3>Legal Marriage</h3>
                <p>Only civil marriages at the Standesamt (registry office) are legally recognized. Religious ceremonies are optional and held after the civil ceremony.</p>
                
                <h3>Traditions</h3>
                <ul>
                    <li>Polterabend: Pre-wedding party where guests break porcelain for luck</li>
                    <li>Baumstamm sägen: Couple saws a log together to show teamwork</li>
                    <li>Wedding pranks by friends are common</li>
                    <li>Multiple-day celebrations are traditional</li>
                </ul>
                
                <h3>Legal Requirements</h3>
                <p>You need various documents including birth certificate, proof of residence, and passport. Foreign documents often need apostille or legalization.</p>
                
                <div class="important">
                    <strong>Important:</strong> Start paperwork early - German bureaucracy is thorough. Allow several months for document processing.
                </div>
                
                <h3>Modern Trends</h3>
                <p>Cohabitation without marriage is socially accepted. Same-sex marriage has been legal since 2017. Many couples don't take the same surname.</p>
            `
        },
        work: {
            title: "Work Ethics in Germany",
            content: `
                <h3>Workplace Culture</h3>
                <p>German workplaces value efficiency, quality, and reliability. There's respect for expertise and hierarchical structures, though this varies by industry.</p>
                
                <h3>Key Values</h3>
                <ul>
                    <li>Punctuality is non-negotiable</li>
                    <li>Meetings are focused and efficient</li>
                    <li>Quality work is expected - "Made in Germany" means quality</li>
                    <li>Direct feedback is normal</li>
                </ul>
                
                <h3>Work-Life Balance</h3>
                <p>Germans take work-life balance seriously. Working overtime is not glorified. Vacation time (usually 25-30 days) is expected to be taken.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> "Feierabend" (end of work day) is sacred. Don't expect responses to emails after hours.
                </div>
                
                <h3>Professional Etiquette</h3>
                <ul>
                    <li>Use formal address (Sie) until invited otherwise</li>
                    <li>Titles (Dr., Prof.) should be used</li>
                    <li>Keep personal and professional life separate</li>
                    <li>Be prepared and organized for meetings</li>
                </ul>
            `
        },
        civic: {
            title: "Civic Duties in Germany",
            content: `
                <h3>Registration (Anmeldung)</h3>
                <p>Within two weeks of moving to a new address, you must register at the local Bürgeramt. This is mandatory and needed for almost everything else.</p>
                
                <h3>Taxes</h3>
                <p>Germany has a comprehensive tax system. Income tax, solidarity surcharge, and potentially church tax are deducted from salaries. Annual tax returns may result in refunds.</p>
                
                <div class="important">
                    <strong>Important:</strong> Get a tax ID (Steuer-ID) when you register. Keep all documents - Germans keep extensive records.
                </div>
                
                <h3>Health Insurance</h3>
                <p>Health insurance is mandatory. Most employees are in statutory health insurance (gesetzliche Krankenversicherung). Private insurance is an option for higher earners.</p>
                
                <h3>Recycling (Mülltrennung)</h3>
                <ul>
                    <li>Strict waste separation is required</li>
                    <li>Yellow bin/bag: Packaging</li>
                    <li>Blue bin: Paper</li>
                    <li>Brown/green bin: Organic waste</li>
                    <li>Glass containers: Separated by color</li>
                </ul>
            `
        },
        clothing: {
            title: "Clothing Norms in Germany",
            content: `
                <h3>General Style</h3>
                <p>German fashion tends toward practical, quality clothing. Dark colors and classic styles are common, especially in professional settings.</p>
                
                <h3>Workplace Attire</h3>
                <ul>
                    <li>Corporate: Conservative suits, minimal accessories</li>
                    <li>Business casual: Neat, understated clothing</li>
                    <li>Tech/creative: More relaxed, but still tidy</li>
                </ul>
                
                <h3>Casual Wear</h3>
                <p>Germans dress practically. Good walking shoes, functional outerwear, and weather-appropriate clothing are essential.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> Invest in good quality basics. Germans value durability and practicality over flashy fashion.
                </div>
                
                <h3>Special Occasions</h3>
                <ul>
                    <li>Traditional events: Dirndl/Lederhosen for Oktoberfest in Bavaria</li>
                    <li>Formal events: Dark suits, evening wear</li>
                    <li>Swimming pools: Proper swimwear required (no street clothes)</li>
                    <li>Saunas: Often nude (mixed-gender)</li>
                </ul>
            `
        },
        hygiene: {
            title: "Hygiene Standards in Germany",
            content: `
                <h3>Personal Hygiene</h3>
                <p>Daily showering and use of deodorant is standard. Clean, pressed clothing is expected in professional settings.</p>
                
                <h3>Public Hygiene</h3>
                <ul>
                    <li>Strict waste separation and recycling</li>
                    <li>Dog owners must clean up after pets</li>
                    <li>Public spaces are kept clean</li>
                    <li>Cover mouth when coughing/sneezing</li>
                </ul>
                
                <h3>Sauna Culture</h3>
                <p>Saunas are popular and often nude. This is not sexual - it's about health and relaxation. Textile-only times may be available.</p>
                
                <div class="important">
                    <strong>Important:</strong> Bring a large towel to sit on in saunas. Never put feet on benches without a towel.
                </div>
                
                <h3>Home Hygiene</h3>
                <ul>
                    <li>Regular cleaning is expected, especially in shared housing</li>
                    <li>Kehrwoche (cleaning duty) may rotate in apartment buildings</li>
                    <li>Shoes are often removed indoors</li>
                    <li>Airing out rooms daily (Lüften) is common practice</li>
                </ul>
            `
        },
        citizenship: {
            title: "Path to Citizenship in Germany",
            content: `
                <h3>Requirements for German Citizenship</h3>
                <ul>
                    <li>Legal residence in Germany for 8 years (can be reduced to 6-7 with integration achievements)</li>
                    <li>Indefinite residence permit or EU free movement</li>
                    <li>Pass the naturalization test</li>
                    <li>Proof of German language proficiency (B1 level)</li>
                    <li>Financial self-sufficiency</li>
                    <li>No criminal record</li>
                </ul>
                
                <h3>The Naturalization Test</h3>
                <p>The test covers German history, politics, society, and laws. You have 60 minutes to answer 33 questions. You need 17 correct answers to pass.</p>
                
                <div class="tip">
                    <strong>Tip:</strong> All 310 possible questions are publicly available. Study the question catalog and take practice tests online.
                </div>
                
                <h3>Dual Citizenship</h3>
                <p>Germany generally requires giving up other citizenships, with exceptions for EU citizens and cases where renunciation isn't possible.</p>
                
                <h3>Benefits of German Citizenship</h3>
                <ul>
                    <li>German and EU passport</li>
                    <li>Voting rights</li>
                    <li>No visa requirements for many countries</li>
                    <li>Full EU free movement rights</li>
                </ul>
            `
        }
    },
    france: {
        name: "France",
        flag: "🇫🇷",
        social: {
            title: "Social Ethics in France",
            content: `
                <h3>General Social Norms</h3>
                <p>French society values elegance, intellectual conversation, and enjoying life. There's strong appreciation for culture, food, and proper social etiquette.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>"Bonjour" (daytime) and "Bonsoir" (evening) are essential</li>
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
            title: "Conversation Etiquette in France",
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
            title: "Dating Culture in France",
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
            title: "Marriage Customs in France",
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
            title: "Work Ethics in France",
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
            title: "Civic Duties in France",
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
            title: "Clothing Norms in France",
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
            title: "Hygiene Standards in France",
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
            title: "Path to Citizenship in France",
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
        }
    },
    sweden: {
        name: "Sweden",
        flag: "🇸🇪",
        social: {
            title: "Social Ethics in Sweden",
            content: `
                <h3>General Social Norms</h3>
                <p>Swedish society values equality, consensus, and respect for others' privacy. There's strong emphasis on "Lagom" - not too much, not too little, just right.</p>
                
                <h3>Greetings</h3>
                <ul>
                    <li>"Hej" is the universal greeting (informal)</li>
                    <li>"God dag" is more formal</li>
                    <li>Handshakes for first meetings</li>
                    <li>Hugs among friends</li>
                </ul>
                
                <h3>Personal Space</h3>
                <p>Swedes value personal space. Leave distance when queuing, don't sit next to strangers on buses if other seats are available.</p>
                
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
            title: "Conversation Etiquette in Sweden",
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
            title: "Dating Culture in Sweden",
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
            title: "Marriage Customs in Sweden",
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
            title: "Work Ethics in Sweden",
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
            title: "Civic Duties in Sweden",
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
            title: "Clothing Norms in Sweden",
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
            title: "Hygiene Standards in Sweden",
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
            title: "Path to Citizenship in Sweden",
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
        }
    }
};
