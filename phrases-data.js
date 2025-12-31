// Phrases data for all countries
const phrasesData = {
    "Sweden": {
        flag: "🇸🇪",
        language: "Swedish",
        phrases: {
            "Thank You": { translation: "Tack", pronunciation: "(tahk)" },
            "I'm Sorry": { translation: "Förlåt", pronunciation: "(fuhr-loht)" },
            "Hello / Hi": { translation: "Hej", pronunciation: "(hey)" },
            "How Are You?": { translation: "Hur mår du?", pronunciation: "(hoor mohr doo)" },
            "I Love You": { translation: "Jag älskar dig", pronunciation: "(yahg ehl-skar day)" },
            "Please": { translation: "Tack / Snälla", pronunciation: "(tahk / sneh-lah)" },
            "Goodbye": { translation: "Hej då", pronunciation: "(hey doh)" },
            "Excuse Me": { translation: "Ursäkta", pronunciation: "(oor-sehk-tah)" },
            "What's Your Name?": { translation: "Vad heter du?", pronunciation: "(vahd heh-ter doo)" },
            "Can You Help Me?": { translation: "Kan du hjälpa mig?", pronunciation: "(kahn doo yehl-pah may)" }
        }
    },
    "Norway": {
        flag: "🇳🇴",
        language: "Norwegian",
        phrases: {
            "Thank You": { translation: "Takk", pronunciation: "(tahk)" },
            "I'm Sorry": { translation: "Beklager", pronunciation: "(beh-klah-ger)" },
            "Hello / Hi": { translation: "Hei", pronunciation: "(hay)" },
            "How Are You?": { translation: "Hvordan har du det?", pronunciation: "(voor-dahn hahr doo deh)" },
            "I Love You": { translation: "Jeg elsker deg", pronunciation: "(yay ehl-sker day)" },
            "Please": { translation: "Vær så snill", pronunciation: "(vehr soh snill)" },
            "Goodbye": { translation: "Ha det", pronunciation: "(hah deh)" },
            "Excuse Me": { translation: "Unnskyld", pronunciation: "(oon-shyld)" },
            "What's Your Name?": { translation: "Hva heter du?", pronunciation: "(vah heh-ter doo)" },
            "Can You Help Me?": { translation: "Kan du hjelpe meg?", pronunciation: "(kahn doo yel-peh may)" }
        }
    },
    "Denmark": {
        flag: "🇩🇰",
        language: "Danish",
        phrases: {
            "Thank You": { translation: "Tak", pronunciation: "(tahg)" },
            "I'm Sorry": { translation: "Undskyld", pronunciation: "(oon-skool)" },
            "Hello / Hi": { translation: "Hej", pronunciation: "(high)" },
            "How Are You?": { translation: "Hvordan har du det?", pronunciation: "(vor-dahn hahr doo deh)" },
            "I Love You": { translation: "Jeg elsker dig", pronunciation: "(yai ehl-sker dai)" },
            "Please": { translation: "Vær så venlig", pronunciation: "(vehr soh vehn-lee)" },
            "Goodbye": { translation: "Farvel", pronunciation: "(fahr-vehl)" },
            "Excuse Me": { translation: "Undskyld", pronunciation: "(oon-skool)" },
            "What's Your Name?": { translation: "Hvad hedder du?", pronunciation: "(vah heh-ther doo)" },
            "Can You Help Me?": { translation: "Kan du hjælpe mig?", pronunciation: "(kahn doo yel-peh mai)" }
        }
    },
    "Finland": {
        flag: "🇫��",
        language: "Finnish",
        phrases: {
            "Thank You": { translation: "Kiitos", pronunciation: "(kee-tohs)" },
            "I'm Sorry": { translation: "Anteeksi", pronunciation: "(ahn-tehk-see)" },
            "Hello / Hi": { translation: "Hei / Moi", pronunciation: "(hay / moy)" },
            "How Are You?": { translation: "Mitä kuuluu?", pronunciation: "(mee-teh koo-loo)" },
            "I Love You": { translation: "Rakastan sinua", pronunciation: "(rah-kahs-tahn see-noo-ah)" },
            "Please": { translation: "Ole hyvä", pronunciation: "(oh-leh hew-veh)" },
            "Goodbye": { translation: "Näkemiin", pronunciation: "(neh-keh-meen)" },
            "Excuse Me": { translation: "Anteeksi", pronunciation: "(ahn-tehk-see)" },
            "What's Your Name?": { translation: "Mikä sinun nimesi on?", pronunciation: "(mee-keh see-noon nee-meh-see on)" },
            "Can You Help Me?": { translation: "Voitko auttaa minua?", pronunciation: "(voy-tko owt-tah mee-noo-ah)" }
        }
    },
    "Iceland": {
        flag: "🇮🇸",
        language: "Icelandic",
        phrases: {
            "Thank You": { translation: "Takk", pronunciation: "(tahk)" },
            "I'm Sorry": { translation: "Fyrirgefðu", pronunciation: "(fee-reer-gev-thu)" },
            "Hello / Hi": { translation: "Halló / Hæ", pronunciation: "(hah-loh / high)" },
            "How Are You?": { translation: "Hvernig hefur þú það?", pronunciation: "(kver-nig heh-voor thoo thahd)" },
            "I Love You": { translation: "Ég elska þig", pronunciation: "(yeh ehl-skah theeg)" },
            "Please": { translation: "Vinsamlegast", pronunciation: "(vin-sahm-leh-gahst)" },
            "Goodbye": { translation: "Bless", pronunciation: "(blehs)" },
            "Excuse Me": { translation: "Afsakið", pronunciation: "(ahf-sah-kith)" },
            "What's Your Name?": { translation: "Hvað heitir þú?", pronunciation: "(kvath hay-teer thoo)" },
            "Can You Help Me?": { translation: "Getur þú hjálpað mér?", pronunciation: "(geh-toor thoo hyowl-path myehr)" }
        }
    },
    "Germany": {
        flag: "🇩🇪",
        language: "German",
        phrases: {
            "Thank You": { translation: "Danke", pronunciation: "(dahn-keh)" },
            "I'm Sorry": { translation: "Es tut mir leid", pronunciation: "(ehs toot meer lait)" },
            "Hello / Hi": { translation: "Hallo / Guten Tag", pronunciation: "(hah-loh / goo-ten tahg)" },
            "How Are You?": { translation: "Wie geht es Ihnen?", pronunciation: "(vee gayt ehs ee-nen)" },
            "I Love You": { translation: "Ich liebe dich", pronunciation: "(ikh lee-beh deekh)" },
            "Please": { translation: "Bitte", pronunciation: "(bit-teh)" },
            "Goodbye": { translation: "Auf Wiedersehen", pronunciation: "(owf vee-der-zay-en)" },
            "Excuse Me": { translation: "Entschuldigung", pronunciation: "(ent-shool-dee-goong)" },
            "What's Your Name?": { translation: "Wie heißen Sie?", pronunciation: "(vee high-sen zee)" },
            "Can You Help Me?": { translation: "Können Sie mir helfen?", pronunciation: "(kur-nen zee meer hel-fen)" }
        }
    },
    "Austria": {
        flag: "🇦🇹",
        language: "German (Austrian)",
        phrases: {
            "Thank You": { translation: "Danke", pronunciation: "(dahn-keh)" },
            "I'm Sorry": { translation: "Es tut mir leid", pronunciation: "(ehs toot meer lait)" },
            "Hello / Hi": { translation: "Servus / Grüß Gott", pronunciation: "(zehr-voos / grews got)" },
            "How Are You?": { translation: "Wie geht es Ihnen?", pronunciation: "(vee gayt ehs ee-nen)" },
            "I Love You": { translation: "Ich liebe dich", pronunciation: "(ikh lee-beh deekh)" },
            "Please": { translation: "Bitte", pronunciation: "(bit-teh)" },
            "Goodbye": { translation: "Auf Wiedersehen / Servus", pronunciation: "(owf vee-der-zay-en / zehr-voos)" },
            "Excuse Me": { translation: "Entschuldigung", pronunciation: "(ent-shool-dee-goong)" },
            "What's Your Name?": { translation: "Wie heißen Sie?", pronunciation: "(vee high-sen zee)" },
            "Can You Help Me?": { translation: "Können Sie mir helfen?", pronunciation: "(kur-nen zee meer hel-fen)" }
        }
    },
    "Switzerland": {
        flag: "🇨🇭",
        language: "German/French/Italian",
        phrases: {
            "Thank You": { translation: "Danke / Merci / Grazie", pronunciation: "(dahn-keh / mehr-see / graht-tsyeh)" },
            "I'm Sorry": { translation: "Es tut mir leid / Désolé / Mi dispiace", pronunciation: "(ehs toot meer lait / day-zoh-lay / mee dee-spyah-cheh)" },
            "Hello / Hi": { translation: "Grüezi / Bonjour / Ciao", pronunciation: "(groo-et-see / bon-zhoor / chow)" },
            "How Are You?": { translation: "Wie geht's?", pronunciation: "(vee gayts)" },
            "I Love You": { translation: "Ich liebe dich", pronunciation: "(ikh lee-beh deekh)" },
            "Please": { translation: "Bitte", pronunciation: "(bit-teh)" },
            "Goodbye": { translation: "Uf Widerluege / Au revoir / Arrivederci", pronunciation: "(oof vee-der-loo-geh / oh reh-vwahr / ah-ree-veh-dehr-chee)" },
            "Excuse Me": { translation: "Entschuldigung", pronunciation: "(ent-shool-dee-goong)" },
            "What's Your Name?": { translation: "Wie heissen Sie?", pronunciation: "(vee high-sen zee)" },
            "Can You Help Me?": { translation: "Können Sie mir helfen?", pronunciation: "(kur-nen zee meer hel-fen)" }
        }
    },
    "Liechtenstein": {
        flag: "🇱🇮",
        language: "German",
        phrases: {
            "Thank You": { translation: "Danke", pronunciation: "(dahn-keh)" },
            "I'm Sorry": { translation: "Es tut mir leid", pronunciation: "(ehs toot meer lait)" },
            "Hello / Hi": { translation: "Hallo / Grüezi", pronunciation: "(hah-loh / groo-et-see)" },
            "How Are You?": { translation: "Wie geht es Ihnen?", pronunciation: "(vee gayt ehs ee-nen)" },
            "I Love You": { translation: "Ich liebe dich", pronunciation: "(ikh lee-beh deekh)" },
            "Please": { translation: "Bitte", pronunciation: "(bit-teh)" },
            "Goodbye": { translation: "Auf Wiedersehen", pronunciation: "(owf vee-der-zay-en)" },
            "Excuse Me": { translation: "Entschuldigung", pronunciation: "(ent-shool-dee-goong)" },
            "What's Your Name?": { translation: "Wie heißen Sie?", pronunciation: "(vee high-sen zee)" },
            "Can You Help Me?": { translation: "Können Sie mir helfen?", pronunciation: "(kur-nen zee meer hel-fen)" }
        }
    },
    "Poland": {
        flag: "🇵🇱",
        language: "Polish",
        phrases: {
            "Thank You": { translation: "Dziękuję", pronunciation: "(jen-koo-yeh)" },
            "I'm Sorry": { translation: "Przepraszam", pronunciation: "(pshe-prah-shahm)" },
            "Hello / Hi": { translation: "Cześć / Dzień dobry", pronunciation: "(cheshch / jen doh-bri)" },
            "How Are You?": { translation: "Jak się masz?", pronunciation: "(yahk sheh mahsh)" },
            "I Love You": { translation: "Kocham cię", pronunciation: "(koh-hahm cheh)" },
            "Please": { translation: "Proszę", pronunciation: "(proh-sheh)" },
            "Goodbye": { translation: "Do widzenia", pronunciation: "(doh vee-dzen-yah)" },
            "Excuse Me": { translation: "Przepraszam", pronunciation: "(pshe-prah-shahm)" },
            "What's Your Name?": { translation: "Jak masz na imię?", pronunciation: "(yahk mahsh nah ee-myeh)" },
            "Can You Help Me?": { translation: "Czy możesz mi pomóc?", pronunciation: "(chi moh-zhesh mee poh-moots)" }
        }
    },
    "Czechia": {
        flag: "🇨🇿",
        language: "Czech",
        phrases: {
            "Thank You": { translation: "Děkuji", pronunciation: "(dyeh-koo-yee)" },
            "I'm Sorry": { translation: "Promiňte", pronunciation: "(proh-meen-teh)" },
            "Hello / Hi": { translation: "Ahoj / Dobrý den", pronunciation: "(ah-hoy / doh-bree den)" },
            "How Are You?": { translation: "Jak se máte?", pronunciation: "(yahk seh mah-teh)" },
            "I Love You": { translation: "Miluji tě", pronunciation: "(mee-loo-yee tyeh)" },
            "Please": { translation: "Prosím", pronunciation: "(proh-seem)" },
            "Goodbye": { translation: "Na shledanou", pronunciation: "(nah skhleh-dah-noh)" },
            "Excuse Me": { translation: "Promiňte", pronunciation: "(proh-meen-teh)" },
            "What's Your Name?": { translation: "Jak se jmenujete?", pronunciation: "(yahk seh ymeh-noo-yeh-teh)" },
            "Can You Help Me?": { translation: "Můžete mi pomoci?", pronunciation: "(moo-zheh-teh mee poh-moh-tsee)" }
        }
    },
    "Spain": {
        flag: "🇪🇸",
        language: "Spanish",
        phrases: {
            "Thank You": { translation: "Gracias", pronunciation: "(grah-thyahs)" },
            "I'm Sorry": { translation: "Lo siento", pronunciation: "(loh see-en-toh)" },
            "Hello / Hi": { translation: "Hola", pronunciation: "(oh-lah)" },
            "How Are You?": { translation: "¿Cómo estás?", pronunciation: "(koh-moh es-tahs)" },
            "I Love You": { translation: "Te quiero / Te amo", pronunciation: "(teh kee-eh-roh / teh ah-moh)" },
            "Please": { translation: "Por favor", pronunciation: "(pohr fah-vohr)" },
            "Goodbye": { translation: "Adiós", pronunciation: "(ah-dee-ohs)" },
            "Excuse Me": { translation: "Disculpe", pronunciation: "(dees-kool-peh)" },
            "What's Your Name?": { translation: "¿Cómo te llamas?", pronunciation: "(koh-moh teh yah-mahs)" },
            "Can You Help Me?": { translation: "¿Puedes ayudarme?", pronunciation: "(pweh-des ah-yoo-dahr-meh)" }
        }
    },
    "Italy": {
        flag: "🇮🇹",
        language: "Italian",
        phrases: {
            "Thank You": { translation: "Grazie", pronunciation: "(graht-tsyeh)" },
            "I'm Sorry": { translation: "Mi dispiace", pronunciation: "(mee dee-spyah-cheh)" },
            "Hello / Hi": { translation: "Ciao / Buongiorno", pronunciation: "(chow / bwohn-johr-noh)" },
            "How Are You?": { translation: "Come stai?", pronunciation: "(koh-meh stai)" },
            "I Love You": { translation: "Ti amo", pronunciation: "(tee ah-moh)" },
            "Please": { translation: "Per favore", pronunciation: "(pehr fah-voh-reh)" },
            "Goodbye": { translation: "Arrivederci", pronunciation: "(ah-ree-veh-dehr-chee)" },
            "Excuse Me": { translation: "Scusi", pronunciation: "(skoo-zee)" },
            "What's Your Name?": { translation: "Come ti chiami?", pronunciation: "(koh-meh tee kyah-mee)" },
            "Can You Help Me?": { translation: "Puoi aiutarmi?", pronunciation: "(pwoy ah-yoo-tahr-mee)" }
        }
    },
    "Portugal": {
        flag: "🇵🇹",
        language: "Portuguese",
        phrases: {
            "Thank You": { translation: "Obrigado/Obrigada", pronunciation: "(oh-bree-gah-doo/dah)" },
            "I'm Sorry": { translation: "Desculpe", pronunciation: "(desh-kool-peh)" },
            "Hello / Hi": { translation: "Olá", pronunciation: "(oh-lah)" },
            "How Are You?": { translation: "Como está?", pronunciation: "(koh-moo esh-tah)" },
            "I Love You": { translation: "Eu te amo", pronunciation: "(eh-oo teh ah-moo)" },
            "Please": { translation: "Por favor", pronunciation: "(pohr fah-vohr)" },
            "Goodbye": { translation: "Adeus", pronunciation: "(ah-deh-oosh)" },
            "Excuse Me": { translation: "Com licença", pronunciation: "(kohm lee-sen-sah)" },
            "What's Your Name?": { translation: "Qual é o seu nome?", pronunciation: "(kwahl eh oo seh-oo noh-meh)" },
            "Can You Help Me?": { translation: "Pode me ajudar?", pronunciation: "(poh-deh meh ah-zhoo-dahr)" }
        }
    },
    "Greece": {
        flag: "🇬🇷",
        language: "Greek",
        phrases: {
            "Thank You": { translation: "Ευχαριστώ (Efharistó)", pronunciation: "(ef-hah-ree-stoh)" },
            "I'm Sorry": { translation: "Λυπάμαι (Lypámai)", pronunciation: "(lee-pah-meh)" },
            "Hello / Hi": { translation: "Γεια σου (Geia sou)", pronunciation: "(yah-soo)" },
            "How Are You?": { translation: "Τι κάνεις; (Ti káneis?)", pronunciation: "(tee kah-nees)" },
            "I Love You": { translation: "Σ' αγαπώ (S' agapó)", pronunciation: "(sah-gah-poh)" },
            "Please": { translation: "Παρακαλώ (Parakaló)", pronunciation: "(pah-rah-kah-loh)" },
            "Goodbye": { translation: "Αντίο (Antío)", pronunciation: "(ahn-dee-oh)" },
            "Excuse Me": { translation: "Συγγνώμη (Syngnómi)", pronunciation: "(seeg-noh-mee)" },
            "What's Your Name?": { translation: "Πώς σε λένε; (Pós se léne?)", pronunciation: "(pohs seh leh-neh)" },
            "Can You Help Me?": { translation: "Μπορείς να με βοηθήσεις; (Boreís na me voithíseis?)", pronunciation: "(boh-rees nah meh voh-ee-thee-sees)" }
        }
    },
    "France": {
        flag: "🇫🇷",
        language: "French",
        phrases: {
            "Thank You": { translation: "Merci", pronunciation: "(mehr-see)" },
            "I'm Sorry": { translation: "Je suis désolé", pronunciation: "(zhuh swee day-zoh-lay)" },
            "Hello / Hi": { translation: "Bonjour / Salut", pronunciation: "(bon-zhoor / sah-loo)" },
            "How Are You?": { translation: "Comment allez-vous?", pronunciation: "(koh-mahn tah-lay-voo)" },
            "I Love You": { translation: "Je t'aime", pronunciation: "(zhuh tehm)" },
            "Please": { translation: "S'il vous plaît", pronunciation: "(seel voo pleh)" },
            "Goodbye": { translation: "Au revoir", pronunciation: "(oh reh-vwahr)" },
            "Excuse Me": { translation: "Excusez-moi", pronunciation: "(ex-kew-zay mwah)" },
            "What's Your Name?": { translation: "Comment vous appelez-vous?", pronunciation: "(koh-mahn vooz ah-play-voo)" },
            "Can You Help Me?": { translation: "Pouvez-vous m'aider?", pronunciation: "(poo-vay-voo meh-day)" }
        }
    },
    "Malta": {
        flag: "🇲🇹",
        language: "Maltese/English",
        phrases: {
            "Thank You": { translation: "Grazzi", pronunciation: "(graht-tsee)" },
            "I'm Sorry": { translation: "Skużani", pronunciation: "(skoo-zah-nee)" },
            "Hello / Hi": { translation: "Bonġu / Hello", pronunciation: "(bon-joo / heh-loh)" },
            "How Are You?": { translation: "Kif int?", pronunciation: "(keef int)" },
            "I Love You": { translation: "Inħobbok", pronunciation: "(in-hob-bok)" },
            "Please": { translation: "Jekk jogħġbok", pronunciation: "(yek yoj-bok)" },
            "Goodbye": { translation: "Saħħa", pronunciation: "(sah-hah)" },
            "Excuse Me": { translation: "Skużani", pronunciation: "(skoo-zah-nee)" },
            "What's Your Name?": { translation: "X'jismek?", pronunciation: "(shis-mek)" },
            "Can You Help Me?": { translation: "Tista' tgħinni?", pronunciation: "(tis-tah teen-nee)" }
        }
    },
    "Cyprus": {
        flag: "🇨🇾",
        language: "Greek/Turkish",
        phrases: {
            "Thank You": { translation: "Ευχαριστώ (Efharistó)", pronunciation: "(ef-hah-ree-stoh)" },
            "I'm Sorry": { translation: "Λυπάμαι (Lypámai)", pronunciation: "(lee-pah-meh)" },
            "Hello / Hi": { translation: "Γεια σου (Geia sou)", pronunciation: "(yah-soo)" },
            "How Are You?": { translation: "Τι κάνεις; (Ti káneis?)", pronunciation: "(tee kah-nees)" },
            "I Love You": { translation: "Σ' αγαπώ (S' agapó)", pronunciation: "(sah-gah-poh)" },
            "Please": { translation: "Παρακαλώ (Parakaló)", pronunciation: "(pah-rah-kah-loh)" },
            "Goodbye": { translation: "Αντίο (Antío)", pronunciation: "(ahn-dee-oh)" },
            "Excuse Me": { translation: "Συγγνώμη (Syngnómi)", pronunciation: "(seeg-noh-mee)" },
            "What's Your Name?": { translation: "Πώς σε λένε; (Pós se léne?)", pronunciation: "(pohs seh leh-neh)" },
            "Can You Help Me?": { translation: "Μπορείς να με βοηθήσεις;", pronunciation: "(boh-rees nah meh voh-ee-thee-sees)" }
        }
    },
    "Serbia": {
        flag: "🇷🇸",
        language: "Serbian",
        phrases: {
            "Thank You": { translation: "Хвала (Hvala)", pronunciation: "(hvah-lah)" },
            "I'm Sorry": { translation: "Извините (Izvinite)", pronunciation: "(eez-vee-nee-teh)" },
            "Hello / Hi": { translation: "Здраво (Zdravo)", pronunciation: "(zdrah-voh)" },
            "How Are You?": { translation: "Како си? (Kako si?)", pronunciation: "(kah-koh see)" },
            "I Love You": { translation: "Волим те (Volim te)", pronunciation: "(voh-leem teh)" },
            "Please": { translation: "Молим (Molim)", pronunciation: "(moh-leem)" },
            "Goodbye": { translation: "Довиђења (Doviđenja)", pronunciation: "(doh-vee-jen-yah)" },
            "Excuse Me": { translation: "Извините (Izvinite)", pronunciation: "(eez-vee-nee-teh)" },
            "What's Your Name?": { translation: "Како се зовеш? (Kako se zoveš?)", pronunciation: "(kah-koh seh zoh-vesh)" },
            "Can You Help Me?": { translation: "Можете ли ми помоћи? (Možete li mi pomoći?)", pronunciation: "(moh-zheh-teh lee mee poh-moh-chee)" }
        }
    },
    "Croatia": {
        flag: "🇭🇷",
        language: "Croatian",
        phrases: {
            "Thank You": { translation: "Hvala", pronunciation: "(hvah-lah)" },
            "I'm Sorry": { translation: "Oprostite", pronunciation: "(oh-proh-stee-teh)" },
            "Hello / Hi": { translation: "Bok / Dobar dan", pronunciation: "(bohk / doh-bahr dahn)" },
            "How Are You?": { translation: "Kako si?", pronunciation: "(kah-koh see)" },
            "I Love You": { translation: "Volim te", pronunciation: "(voh-leem teh)" },
            "Please": { translation: "Molim", pronunciation: "(moh-leem)" },
            "Goodbye": { translation: "Doviđenja", pronunciation: "(doh-vee-jen-yah)" },
            "Excuse Me": { translation: "Oprostite", pronunciation: "(oh-proh-stee-teh)" },
            "What's Your Name?": { translation: "Kako se zoveš?", pronunciation: "(kah-koh seh zoh-vesh)" },
            "Can You Help Me?": { translation: "Možete li mi pomoći?", pronunciation: "(moh-zheh-teh lee mee poh-moh-chee)" }
        }
    },
    "Bosnia": {
        flag: "🇧🇦",
        language: "Bosnian",
        phrases: {
            "Thank You": { translation: "Hvala", pronunciation: "(hvah-lah)" },
            "I'm Sorry": { translation: "Žao mi je", pronunciation: "(zhow mee yeh)" },
            "Hello / Hi": { translation: "Zdravo", pronunciation: "(zdrah-voh)" },
            "How Are You?": { translation: "Kako si?", pronunciation: "(kah-koh see)" },
            "I Love You": { translation: "Volim te", pronunciation: "(voh-leem teh)" },
            "Please": { translation: "Molim", pronunciation: "(moh-leem)" },
            "Goodbye": { translation: "Doviđenja", pronunciation: "(doh-vee-jen-yah)" },
            "Excuse Me": { translation: "Izvinite", pronunciation: "(eez-vee-nee-teh)" },
            "What's Your Name?": { translation: "Kako se zoveš?", pronunciation: "(kah-koh seh zoh-vesh)" },
            "Can You Help Me?": { translation: "Možete li mi pomoći?", pronunciation: "(moh-zheh-teh lee mee poh-moh-chee)" }
        }
    },
    "Montenegro": {
        flag: "🇲🇪",
        language: "Montenegrin",
        phrases: {
            "Thank You": { translation: "Hvala", pronunciation: "(hvah-lah)" },
            "I'm Sorry": { translation: "Žao mi je", pronunciation: "(zhow mee yeh)" },
            "Hello / Hi": { translation: "Zdravo", pronunciation: "(zdrah-voh)" },
            "How Are You?": { translation: "Kako si?", pronunciation: "(kah-koh see)" },
            "I Love You": { translation: "Volim te", pronunciation: "(voh-leem teh)" },
            "Please": { translation: "Molim", pronunciation: "(moh-leem)" },
            "Goodbye": { translation: "Doviđenja", pronunciation: "(doh-vee-jen-yah)" },
            "Excuse Me": { translation: "Izvinite", pronunciation: "(eez-vee-nee-teh)" },
            "What's Your Name?": { translation: "Kako se zoveš?", pronunciation: "(kah-koh seh zoh-vesh)" },
            "Can You Help Me?": { translation: "Možete li mi pomoći?", pronunciation: "(moh-zheh-teh lee mee poh-moh-chee)" }
        }
    },
    "N. Macedonia": {
        flag: "🇲🇰",
        language: "Macedonian",
        phrases: {
            "Thank You": { translation: "Благодарам (Blagodaram)", pronunciation: "(blah-goh-dah-rahm)" },
            "I'm Sorry": { translation: "Простете (Prostete)", pronunciation: "(proh-steh-teh)" },
            "Hello / Hi": { translation: "Здраво (Zdravo)", pronunciation: "(zdrah-voh)" },
            "How Are You?": { translation: "Како си? (Kako si?)", pronunciation: "(kah-koh see)" },
            "I Love You": { translation: "Те сакам (Te sakam)", pronunciation: "(teh sah-kahm)" },
            "Please": { translation: "Ве молам (Ve molam)", pronunciation: "(veh moh-lahm)" },
            "Goodbye": { translation: "Довидување (Doviduvanje)", pronunciation: "(doh-vee-doo-vahn-yeh)" },
            "Excuse Me": { translation: "Простете (Prostete)", pronunciation: "(proh-steh-teh)" },
            "What's Your Name?": { translation: "Како се викаш? (Kako se vikaš?)", pronunciation: "(kah-koh seh vee-kahsh)" },
            "Can You Help Me?": { translation: "Можете ли да ми помогнете? (Možete li da mi pomognete?)", pronunciation: "(moh-zheh-teh lee dah mee poh-mog-neh-teh)" }
        }
    },
    "Albania": {
        flag: "🇦🇱",
        language: "Albanian",
        phrases: {
            "Thank You": { translation: "Faleminderit", pronunciation: "(fah-leh-meen-deh-reet)" },
            "I'm Sorry": { translation: "Më vjen keq", pronunciation: "(muh vyen kech)" },
            "Hello / Hi": { translation: "Përshëndetje / Tungjatjeta", pronunciation: "(puhr-shun-det-yeh / toong-yaht-yeh-tah)" },
            "How Are You?": { translation: "Si jeni?", pronunciation: "(see yeh-nee)" },
            "I Love You": { translation: "Të dua", pronunciation: "(tuh doo-ah)" },
            "Please": { translation: "Ju lutem", pronunciation: "(yoo loo-tem)" },
            "Goodbye": { translation: "Mirupafshim", pronunciation: "(mee-roo-pahf-sheem)" },
            "Excuse Me": { translation: "Më falni", pronunciation: "(muh fahl-nee)" },
            "What's Your Name?": { translation: "Si quheni?", pronunciation: "(see choo-heh-nee)" },
            "Can You Help Me?": { translation: "A mund të më ndihmoni?", pronunciation: "(ah moond tuh muh ndee-moh-nee)" }
        }
    },
    "Romania": {
        flag: "🇷🇴",
        language: "Romanian",
        phrases: {
            "Thank You": { translation: "Mulțumesc", pronunciation: "(mool-tsoo-mesk)" },
            "I'm Sorry": { translation: "Îmi pare rău", pronunciation: "(uhm pah-reh row)" },
            "Hello / Hi": { translation: "Bună / Salut", pronunciation: "(boo-nuh / sah-loot)" },
            "How Are You?": { translation: "Ce mai faci?", pronunciation: "(cheh mai fahch)" },
            "I Love You": { translation: "Te iubesc", pronunciation: "(teh yoo-besk)" },
            "Please": { translation: "Vă rog", pronunciation: "(vuh rohg)" },
            "Goodbye": { translation: "La revedere", pronunciation: "(lah reh-veh-deh-reh)" },
            "Excuse Me": { translation: "Scuzați-mă", pronunciation: "(skoo-zah-tsuh muh)" },
            "What's Your Name?": { translation: "Cum te cheamă?", pronunciation: "(koom teh kyah-muh)" },
            "Can You Help Me?": { translation: "Mă puteți ajuta?", pronunciation: "(muh poo-tets ah-zhoo-tah)" }
        }
    },
    "Bulgaria": {
        flag: "🇧🇬",
        language: "Bulgarian",
        phrases: {
            "Thank You": { translation: "Благодаря (Blagodarya)", pronunciation: "(blah-goh-dah-ryah)" },
            "I'm Sorry": { translation: "Съжалявам (Sŭzhalyavam)", pronunciation: "(suh-zhahl-yah-vahm)" },
            "Hello / Hi": { translation: "Здравей (Zdravey)", pronunciation: "(zdrah-vey)" },
            "How Are You?": { translation: "Как си? (Kak si?)", pronunciation: "(kahk see)" },
            "I Love You": { translation: "Обичам те (Obicham te)", pronunciation: "(oh-bee-chahm teh)" },
            "Please": { translation: "Моля (Molya)", pronunciation: "(mohl-yah)" },
            "Goodbye": { translation: "Довиждане (Dovizhdane)", pronunciation: "(doh-veezh-dah-neh)" },
            "Excuse Me": { translation: "Извинете (Izvinete)", pronunciation: "(eez-vee-neh-teh)" },
            "What's Your Name?": { translation: "Как се казваш? (Kak se kazvash?)", pronunciation: "(kahk seh kahz-vahsh)" },
            "Can You Help Me?": { translation: "Можете ли да ми помогнете? (Mozhete li da mi pomognete?)", pronunciation: "(moh-zheh-teh lee dah mee poh-mog-neh-teh)" }
        }
    },
    "Georgia": {
        flag: "🇬🇪",
        language: "Georgian",
        phrases: {
            "Thank You": { translation: "მადლობა (Madloba)", pronunciation: "(mahd-loh-bah)" },
            "I'm Sorry": { translation: "ბოდიში (Bodishi)", pronunciation: "(boh-dee-shee)" },
            "Hello / Hi": { translation: "გამარჯობა (Gamarjoba)", pronunciation: "(gah-mahr-joh-bah)" },
            "How Are You?": { translation: "როგორ ხარ? (Rogor khar?)", pronunciation: "(roh-gohr khahr)" },
            "I Love You": { translation: "მიყვარხარ (Miqvarkhar)", pronunciation: "(mee-kvahr-khahr)" },
            "Please": { translation: "გთხოვთ (Gtkhovt)", pronunciation: "(gt-khovt)" },
            "Goodbye": { translation: "ნახვამდის (Nakhvamdis)", pronunciation: "(nakh-vahm-dees)" },
            "Excuse Me": { translation: "უკაცრავად (Uk'atsravad)", pronunciation: "(oo-kah-tsrah-vahd)" },
            "What's Your Name?": { translation: "როგორ გქვიათ? (Rogor gqviat?)", pronunciation: "(roh-gohr gkvee-aht)" },
            "Can You Help Me?": { translation: "შეგიძლიათ დამეხმაროთ? (Shegidzliat damekharot?)", pronunciation: "(sheh-gee-dzlee-aht dah-mekh-mah-roht)" }
        }
    },
    "Slovenia": {
        flag: "🇸🇮",
        language: "Slovenian",
        phrases: {
            "Thank You": { translation: "Hvala", pronunciation: "(hvah-lah)" },
            "I'm Sorry": { translation: "Oprostite", pronunciation: "(oh-proh-stee-teh)" },
            "Hello / Hi": { translation: "Živjo / Dober dan", pronunciation: "(zheev-yoh / doh-behr dahn)" },
            "How Are You?": { translation: "Kako si?", pronunciation: "(kah-koh see)" },
            "I Love You": { translation: "Ljubim te", pronunciation: "(lyoo-beem teh)" },
            "Please": { translation: "Prosim", pronunciation: "(proh-seem)" },
            "Goodbye": { translation: "Nasvidenje", pronunciation: "(nahs-vee-deh-nyeh)" },
            "Excuse Me": { translation: "Oprostite", pronunciation: "(oh-proh-stee-teh)" },
            "What's Your Name?": { translation: "Kako ti je ime?", pronunciation: "(kah-koh tee yeh ee-meh)" },
            "Can You Help Me?": { translation: "Mi lahko pomagate?", pronunciation: "(mee lah-koh poh-mah-gah-teh)" }
        }
    },
    "Slovakia": {
        flag: "🇸🇰",
        language: "Slovak",
        phrases: {
            "Thank You": { translation: "Ďakujem", pronunciation: "(dyah-koo-yem)" },
            "I'm Sorry": { translation: "Prepáčte", pronunciation: "(preh-pahch-teh)" },
            "Hello / Hi": { translation: "Ahoj / Dobrý deň", pronunciation: "(ah-hoy / doh-bree dehn)" },
            "How Are You?": { translation: "Ako sa máte?", pronunciation: "(ah-koh sah mah-teh)" },
            "I Love You": { translation: "Ľúbim ťa", pronunciation: "(lyoo-beem tyah)" },
            "Please": { translation: "Prosím", pronunciation: "(proh-seem)" },
            "Goodbye": { translation: "Dovidenia", pronunciation: "(doh-vee-deh-nyah)" },
            "Excuse Me": { translation: "Prepáčte", pronunciation: "(preh-pahch-teh)" },
            "What's Your Name?": { translation: "Ako sa voláte?", pronunciation: "(ah-koh sah voh-lah-teh)" },
            "Can You Help Me?": { translation: "Môžete mi pomôcť?", pronunciation: "(moh-zheh-teh mee poh-mohtst)" }
        }
    },
    "Estonia": {
        flag: "🇪🇪",
        language: "Estonian",
        phrases: {
            "Thank You": { translation: "Tänan", pronunciation: "(tah-nahn)" },
            "I'm Sorry": { translation: "Vabandust", pronunciation: "(vah-bahn-doost)" },
            "Hello / Hi": { translation: "Tere", pronunciation: "(teh-reh)" },
            "How Are You?": { translation: "Kuidas läheb?", pronunciation: "(koo-ee-dahs lah-heb)" },
            "I Love You": { translation: "Ma armastan sind", pronunciation: "(mah ahr-mahs-tahn seend)" },
            "Please": { translation: "Palun", pronunciation: "(pah-loon)" },
            "Goodbye": { translation: "Nägemist", pronunciation: "(nah-geh-meest)" },
            "Excuse Me": { translation: "Vabandust", pronunciation: "(vah-bahn-doost)" },
            "What's Your Name?": { translation: "Mis su nimi on?", pronunciation: "(mees soo nee-mee on)" },
            "Can You Help Me?": { translation: "Kas saate mind aidata?", pronunciation: "(kahs sah-teh meend eye-dah-tah)" }
        }
    },
    "Latvia": {
        flag: "🇱🇻",
        language: "Latvian",
        phrases: {
            "Thank You": { translation: "Paldies", pronunciation: "(pahl-dees)" },
            "I'm Sorry": { translation: "Atvainojiet", pronunciation: "(aht-vai-noh-yeet)" },
            "Hello / Hi": { translation: "Sveiki / Labdien", pronunciation: "(svay-kee / lahb-deen)" },
            "How Are You?": { translation: "Kā jums klājas?", pronunciation: "(kah yooms klah-yahs)" },
            "I Love You": { translation: "Es tevi mīlu", pronunciation: "(ehs teh-vee mee-loo)" },
            "Please": { translation: "Lūdzu", pronunciation: "(lood-zoo)" },
            "Goodbye": { translation: "Uz redzēšanos", pronunciation: "(ooz reh-dzay-shah-nohs)" },
            "Excuse Me": { translation: "Atvainojiet", pronunciation: "(aht-vai-noh-yeet)" },
            "What's Your Name?": { translation: "Kā jūs sauc?", pronunciation: "(kah yoos sowts)" },
            "Can You Help Me?": { translation: "Vai jūs varat man palīdzēt?", pronunciation: "(vai yoos vah-raht mahn pah-leed-zayt)" }
        }
    },
    "Lithuania": {
        flag: "🇱🇹",
        language: "Lithuanian",
        phrases: {
            "Thank You": { translation: "Ačiū", pronunciation: "(ah-choo)" },
            "I'm Sorry": { translation: "Atsiprašau", pronunciation: "(aht-see-prah-show)" },
            "Hello / Hi": { translation: "Labas / Sveiki", pronunciation: "(lah-bahs / svay-kee)" },
            "How Are You?": { translation: "Kaip laikaisi?", pronunciation: "(kipe lie-kai-see)" },
            "I Love You": { translation: "Aš tave myliu", pronunciation: "(ahsh tah-veh mee-lyoo)" },
            "Please": { translation: "Prašau", pronunciation: "(prah-show)" },
            "Goodbye": { translation: "Viso gero", pronunciation: "(vee-soh geh-roh)" },
            "Excuse Me": { translation: "Atsiprašau", pronunciation: "(aht-see-prah-show)" },
            "What's Your Name?": { translation: "Koks tavo vardas?", pronunciation: "(koks tah-voh vahr-dahs)" },
            "Can You Help Me?": { translation: "Ar galite man padėti?", pronunciation: "(ahr gah-lee-teh mahn pah-day-tee)" }
        }
    },
    "Luxembourg": {
        flag: "🇱��",
        language: "Luxembourgish",
        phrases: {
            "Thank You": { translation: "Merci", pronunciation: "(mehr-see)" },
            "I'm Sorry": { translation: "Entschëllegt", pronunciation: "(ent-shel-legt)" },
            "Hello / Hi": { translation: "Moien", pronunciation: "(moy-en)" },
            "How Are You?": { translation: "Wéi geet et?", pronunciation: "(vay gayt et)" },
            "I Love You": { translation: "Ech hunn dech gär", pronunciation: "(ekh hoon dekh gehr)" },
            "Please": { translation: "Wann ech gelift", pronunciation: "(vahn ekh geh-lift)" },
            "Goodbye": { translation: "Äddi", pronunciation: "(ah-dee)" },
            "Excuse Me": { translation: "Entschëllegt", pronunciation: "(ent-shel-legt)" },
            "What's Your Name?": { translation: "Wéi heeschs du?", pronunciation: "(vay haysh doo)" },
            "Can You Help Me?": { translation: "Kanns du mir hëllefen?", pronunciation: "(kahns doo meer hel-leh-fen)" }
        }
    },
    "Belgium": {
        flag: "🇧🇪",
        language: "Dutch/French/German",
        phrases: {
            "Thank You": { translation: "Dank je / Merci", pronunciation: "(dahnk yeh / mehr-see)" },
            "I'm Sorry": { translation: "Het spijt me / Je suis désolé", pronunciation: "(het spait meh / zhuh swee day-zoh-lay)" },
            "Hello / Hi": { translation: "Hallo / Bonjour", pronunciation: "(hah-loh / bon-zhoor)" },
            "How Are You?": { translation: "Hoe gaat het? / Comment ça va?", pronunciation: "(hoo gaht het / koh-mahn sah vah)" },
            "I Love You": { translation: "Ik hou van jou / Je t'aime", pronunciation: "(ik how vahn yow / zhuh tehm)" },
            "Please": { translation: "Alsjeblieft / S'il vous plaît", pronunciation: "(ahl-syuh-bleeft / seel voo pleh)" },
            "Goodbye": { translation: "Tot ziens / Au revoir", pronunciation: "(toht zeens / oh reh-vwahr)" },
            "Excuse Me": { translation: "Excuseer / Excusez-moi", pronunciation: "(ex-kew-zayr / ex-kew-zay mwah)" },
            "What's Your Name?": { translation: "Wat is je naam? / Comment vous appelez-vous?", pronunciation: "(vaht is yeh nahm / koh-mahn vooz ah-play-voo)" },
            "Can You Help Me?": { translation: "Kun je me helpen? / Pouvez-vous m'aider?", pronunciation: "(koon yeh meh hel-pen / poo-vay-voo meh-day)" }
        }
    },
    "Netherlands": {
        flag: "🇳🇱",
        language: "Dutch",
        phrases: {
            "Thank You": { translation: "Dank je / Bedankt", pronunciation: "(dahnk yeh / beh-dahnkt)" },
            "I'm Sorry": { translation: "Het spijt me", pronunciation: "(het spait meh)" },
            "Hello / Hi": { translation: "Hallo / Hoi", pronunciation: "(hah-loh / hoy)" },
            "How Are You?": { translation: "Hoe gaat het?", pronunciation: "(hoo gaht het)" },
            "I Love You": { translation: "Ik hou van jou", pronunciation: "(ik how vahn yow)" },
            "Please": { translation: "Alsjeblieft", pronunciation: "(ahl-syuh-bleeft)" },
            "Goodbye": { translation: "Tot ziens / Dag", pronunciation: "(toht zeens / dahg)" },
            "Excuse Me": { translation: "Excuseer / Pardon", pronunciation: "(ex-kew-zayr / pahr-dohn)" },
            "What's Your Name?": { translation: "Wat is je naam?", pronunciation: "(vaht is yeh nahm)" },
            "Can You Help Me?": { translation: "Kun je me helpen?", pronunciation: "(koon yeh meh hel-pen)" }
        }
    },
    "United Kingdom": {
        flag: "🇬🇧",
        language: "English",
        phrases: {
            "Thank You": { translation: "Thank you", pronunciation: "(thank yoo)" },
            "I'm Sorry": { translation: "I'm sorry", pronunciation: "(ime sor-ree)" },
            "Hello / Hi": { translation: "Hello / Hi", pronunciation: "(hel-loh / hai)" },
            "How Are You?": { translation: "How are you?", pronunciation: "(how ar yoo)" },
            "I Love You": { translation: "I love you", pronunciation: "(ai luv yoo)" },
            "Please": { translation: "Please", pronunciation: "(pleez)" },
            "Goodbye": { translation: "Goodbye / Cheerio", pronunciation: "(good-bai / cheer-ee-oh)" },
            "Excuse Me": { translation: "Excuse me", pronunciation: "(ex-kyooz mee)" },
            "What's Your Name?": { translation: "What's your name?", pronunciation: "(wots yor naym)" },
            "Can You Help Me?": { translation: "Can you help me?", pronunciation: "(kan yoo help mee)" }
        }
    },
    "Ireland": {
        flag: "🇮🇪",
        language: "English/Irish",
        phrases: {
            "Thank You": { translation: "Thank you / Go raibh maith agat", pronunciation: "(thank yoo / guh rev mah ah-gut)" },
            "I'm Sorry": { translation: "I'm sorry / Tá brón orm", pronunciation: "(ime sor-ree / taw brohn orm)" },
            "Hello / Hi": { translation: "Hello / Dia dhuit", pronunciation: "(hel-loh / dee-ah gwitch)" },
            "How Are You?": { translation: "How are you? / Conas atá tú?", pronunciation: "(how ar yoo / kun-us ah-taw too)" },
            "I Love You": { translation: "I love you / Tá grá agam duit", pronunciation: "(ai luv yoo / taw graw ah-gum ditch)" },
            "Please": { translation: "Please / Le do thoil", pronunciation: "(pleez / leh duh hull)" },
            "Goodbye": { translation: "Goodbye / Slán", pronunciation: "(good-bai / slawn)" },
            "Excuse Me": { translation: "Excuse me / Gabh mo leithscéal", pronunciation: "(ex-kyooz mee / gov muh lesh-kayl)" },
            "What's Your Name?": { translation: "What's your name? / Cad is ainm duit?", pronunciation: "(wots yor naym / kod iss an-im ditch)" },
            "Can You Help Me?": { translation: "Can you help me? / An féidir leat cabhrú liom?", pronunciation: "(kan yoo help mee / on fay-jir lat cow-roo lum)" }
        }
    },
    "United States": {
        flag: "🇺🇸",
        language: "English",
        phrases: {
            "Thank You": { translation: "Thank you / Thanks", pronunciation: "(thank yoo / thanks)" },
            "I'm Sorry": { translation: "I'm sorry", pronunciation: "(ime sor-ree)" },
            "Hello / Hi": { translation: "Hello / Hi / Hey", pronunciation: "(hel-loh / hai / hay)" },
            "How Are You?": { translation: "How are you?", pronunciation: "(how ar yoo)" },
            "I Love You": { translation: "I love you", pronunciation: "(ai luv yoo)" },
            "Please": { translation: "Please", pronunciation: "(pleez)" },
            "Goodbye": { translation: "Goodbye / Bye", pronunciation: "(good-bai / bai)" },
            "Excuse Me": { translation: "Excuse me", pronunciation: "(ex-kyooz mee)" },
            "What's Your Name?": { translation: "What's your name?", pronunciation: "(wots yor naym)" },
            "Can You Help Me?": { translation: "Can you help me?", pronunciation: "(kan yoo help mee)" }
        }
    },
    "Australia": {
        flag: "🇦🇺",
        language: "English",
        phrases: {
            "Thank You": { translation: "Thank you / Thanks / Ta", pronunciation: "(thank yoo / thanks / tah)" },
            "I'm Sorry": { translation: "I'm sorry", pronunciation: "(ime sor-ree)" },
            "Hello / Hi": { translation: "Hello / G'day", pronunciation: "(hel-loh / guh-day)" },
            "How Are You?": { translation: "How are you? / How ya going?", pronunciation: "(how ar yoo / how yah goh-ing)" },
            "I Love You": { translation: "I love you", pronunciation: "(ai luv yoo)" },
            "Please": { translation: "Please", pronunciation: "(pleez)" },
            "Goodbye": { translation: "Goodbye / See ya", pronunciation: "(good-bai / see yah)" },
            "Excuse Me": { translation: "Excuse me", pronunciation: "(ex-kyooz mee)" },
            "What's Your Name?": { translation: "What's your name?", pronunciation: "(wots yor naym)" },
            "Can You Help Me?": { translation: "Can you help me?", pronunciation: "(kan yoo help mee)" }
        }
    },
    "New Zealand": {
        flag: "🇳🇿",
        language: "English/Māori",
        phrases: {
            "Thank You": { translation: "Thank you / Kia ora", pronunciation: "(thank yoo / kee-ah oh-rah)" },
            "I'm Sorry": { translation: "I'm sorry", pronunciation: "(ime sor-ree)" },
            "Hello / Hi": { translation: "Hello / Kia ora", pronunciation: "(hel-loh / kee-ah oh-rah)" },
            "How Are You?": { translation: "How are you? / Kei te pēhea koe?", pronunciation: "(how ar yoo / kay teh pay-hay-ah koh-eh)" },
            "I Love You": { translation: "I love you / Aroha ahau ki a koe", pronunciation: "(ai luv yoo / ah-roh-hah ah-how kee ah koh-eh)" },
            "Please": { translation: "Please", pronunciation: "(pleez)" },
            "Goodbye": { translation: "Goodbye / Haere rā", pronunciation: "(good-bai / high-reh raw)" },
            "Excuse Me": { translation: "Excuse me", pronunciation: "(ex-kyooz mee)" },
            "What's Your Name?": { translation: "What's your name? / Ko wai tō ingoa?", pronunciation: "(wots yor naym / koh wai toh ee-ngoh-ah)" },
            "Can You Help Me?": { translation: "Can you help me?", pronunciation: "(kan yoo help mee)" }
        }
    }
};
