// Cultural data for all countries and categories
const culturalData = {
    england: {
        name: "United Kingdom",
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
                    <p>Public and community conduct in the United Kingdom can be summed up in three words: <strong>quiet, considerate, and patient</strong>. 🤫🤝⏳ Mind your own business (mostly), be polite even when frustrated, say please and thank you, and queue properly. Do that, and you'll fit in just fine! ✅🇬🇧</p>
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
                    <strong>🔞 The Age of Consent is 16 (United Kingdom)</strong>
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
                <p>First things first: in the modern United Kingdom, you can, and should, wear whatever makes you feel comfortable. 😎 Personal freedom is highly valued. The prevailing attitude is that you shouldn't judge a book by its cover. 📚 So, the primary rule is: <strong>be yourself</strong>.</p>

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
                    <p>Forgetting to say please, thank you, or sorry is one of the fastest ways to be seen as rude. 🚫 It doesn't matter if your culture considers these words excessive – in the United Kingdom, they're the basics of social interaction. Use them automatically! 🔄</p>
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
