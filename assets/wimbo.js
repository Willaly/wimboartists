/* Wimbo — site généré le 2026-11-16 — sources : wimbo-site/src */
const LOGO_LIGHT = '/assets/logo-light.png';
const LOGO_DARK = '/assets/logo-dark.png';
const BUILD_DATE = '2026-11-16';
/* =====================================================================
   WIMBO — Données du site (version de présentation)
   ---------------------------------------------------------------------
   Les artistes, avis et chiffres ci-dessous sont des EXEMPLES destinés
   à présenter le site. À retirer avant l'ouverture au public :
   passer DEMO_MODE à false dans CONFIG pour ne garder que les vrais
   artistes validés dans Supabase.
   ===================================================================== */

const CONFIG = {
  DEMO_MODE: true,                 // affiche le catalogue d'exemple
  DEMO_NOTICE: true,               // mention discrète en pied de page
  VERSION: '2.8',
  SITE_URL: 'https://wimboartistes.com',
  CONTACT_EMAIL: 'contact@wimboartistes.com',   // communication
  HELLO_EMAIL: 'hello@wimboartistes.com',       // emails automatiques (mots de passe, notifications)
  COMPANY: 'CWEA SAS',
  COMPANY_ADDRESS: '60 rue François Ier, 75008 Paris',
  FOUNDERS_SEATS: 150,
  INSTAGRAM: 'https://www.instagram.com/',
  FACEBOOK: 'https://www.facebook.com/',
  TIKTOK: 'https://www.tiktok.com/',
  LINKEDIN: 'https://www.linkedin.com/'
};

/* ---------- Photos (Unsplash, vérifiées) ---------- */
const P = {
  singerArms: '1493225457124-a3eb161ffa5f', djDecks: '1470225620780-dba8ba36b745',
  crowd: '1501386761578-eac5c94b800a', stageColor: '1516450360452-9312f5e86fc7',
  trumpet: '1511192336575-5a79af67a629', guitarClose: '1510915361894-db8b60106cb1',
  sax: '1415201364774-f6f0bb35f28f', pianoKeys: '1520523839897-bd0b52f945a0',
  violins: '1465847899084-d164df4dedc6', crowdYellow: '1459749411175-04bf5292ceea',
  acousticPlay: '1525201548942-d8732f6617a0', handsHeart: '1429962714451-bb934ecdc4ec',
  maleSingerGuitar: '1460723237483-7a6dc9d0b212', womanHatPink: '1504898770365-14faca6a7320',
  guitarsRoom: '1511379938547-c1f69419868d', vintageMic: '1485579149621-3123dd979885',
  concertCrowd: '1540039155733-5bb30b53aa14', confettiDark: '1533174072545-7a4b6ad7a6c3',
  confetti: '1492684223066-81342ee5ff30', weddingBride: '1519741497674-611481863552',
  weddingCouple: '1511285560929-80b456fea0bc', balloons: '1530103862676-de8c9debad1d',
  crowdGold: '1507874457470-272b3c8d8ee2', micBokeh: '1511671782779-c97d3d27a1d4',
  bandBlue: '1526478806334-5fd488fcaabc', guitarPlay2: '1483069125343-4ef290c07840',
  crowdOrange: '1524368535928-5b5e00ddc76b', rockBand: '1549834125-82d3c48159a3',
  womanGuitarStage: '1528489496900-d841974f5290', pianoBW: '1513883049090-d0b7439799bf',
  redParty: '1545128485-c400e7702796', partyOutdoor: '1517457373958-b7bdd4587205',
  weddingTables: '1464366400600-7168b8af9bc3', bandIndoor: '1481886756534-97af88ccb438',
  beach: '1519046904884-53103b34b206', vinyl: '1458560871784-56d23406c091',
  familyHands: '1556484687-30636164638b', performerBlue: '1516981442399-a91139e20ff8',
  blondeSinger: '1520872024865-3ff2805d8bb3', manAcoustic: '1471478331149-c72f17e33c73',
  violinB: '1460036521480-ff49c08c2781', djMan: '1516873240891-4bf014598ab4',
  womanSingerRed: '1517230878791-4d28214057c2', weddingTable2: '1519225421980-715cb0215aed',
  weddingRings: '1465495976277-4387d4b0b4c6', friendsToast: '1527529482837-4698179dc6ce',
  streetViolin: '1484972759836-b93f9ef2b293', djPink: '1516223725307-6f76b9ec8742',
  dinnerParty: '1528605248644-14dd04022da1', drums: '1543443258-92b04ad5ec6b',
  womanViolin: '1465821185615-20b3c2fbf41b', pianoUpright: '1552422535-c45813c61732',
  cellist: '1519139270028-ab664cf42264', singerBokeh: '1507676184212-d03ab07a01bf',
  guitaristPurple: '1605722243979-fe0be8158232', singerSilhouette: '1415886541506-6efc5e4b1786',
  crowdGuitarGold: '1565035010268-a3816f98589a', streetBand: '1525994886773-080587e161c2',
  dancers: '1504609813442-a8924e83f76e', gardenParty: '1472653431158-6364773b2a56',
  restaurant: '1517248135467-4c7edcad34c4', gala: '1530023367847-a683933f4172',
  vintageMicEvent: '1475721027785-f74eccf877e2', club: '1574391884720-bbc3740c59d1',
  guitarOutdoor: '1514649923863-ceaf75b7ec00', girlsParty: '1532635241-17e820acc59f',
  christmas: '1511268011861-691ed210aae8', fireworks: '1567593810070-7a3d471af022',
  sheetMusic: '1507838153414-b4b713384a76'
};
function U(id, w, h) {
  return 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + w + (h ? '&h=' + h : '') + '&q=72';
}

/* ---------- Taxonomies ---------- */
const GENRES = {
  'jazz': 'Jazz', 'jazz-manouche': 'Jazz manouche', 'swing': 'Swing',
  'chanson-francaise': 'Chanson française', 'pop': 'Pop', 'rock': 'Rock',
  'soul-rnb': 'Soul / R&B', 'funk': 'Funk', 'reprises': 'Groupe de reprises',
  'folk-acoustique': 'Folk / Acoustique', 'bossa-nova': 'Bossa nova',
  'latino-salsa': 'Latino / Salsa', 'classique': 'Classique', 'lounge': 'Lounge',
  'electro-house': 'Électro / House', 'afrobeats': 'Afrobeats',
  'kizomba-semba': 'Kizomba / Semba', 'zouk-kompa': 'Zouk / Kompa',
  'gwoka': 'Gwoka / Biguine', 'fado': 'Fado', 'musique-du-monde': 'Musique du monde'
};

const EVENTS = {
  'mariage': { label: 'Mariage', photo: P.weddingCouple,
    text: "La musique accompagne chaque moment de votre mariage : l'entrée à la cérémonie, le cocktail, le dîner puis la soirée dansante. Sur Wimbo, vous trouvez le chanteur, le quatuor, le groupe ou le DJ qui vous ressemble, et vous recevez un devis détaillé en quelques heures. Le contrat et la déclaration GUSO sont préparés pour vous." },
  'anniversaire': { label: 'Anniversaire', photo: P.balloons,
    text: "18, 30, 50 ou 70 ans : un artiste live change complètement l'ambiance d'un anniversaire. Choisissez un style, une ville et une date, comparez les profils, écoutez les extraits et réservez en toute sérénité, paiement sécurisé et administratif compris." },
  'fete-privee': { label: 'Fête privée', photo: P.friendsToast,
    text: "Une soirée entre amis, une fête de famille, une pendaison de crémaillère : un musicien ou un DJ fait toute la différence. Wimbo vous aide à trouver l'artiste disponible près de chez vous, au bon prix." },
  'entreprise': { label: "Événement d'entreprise", photo: P.gala,
    text: "Soirée de gala, séminaire, inauguration ou fête de fin d'année : nos artistes ont l'habitude des événements professionnels. Facture au nom de votre société, interlocuteur unique et accompagnement administratif." },
  'cocktail-diner': { label: 'Cocktail & dîner', photo: P.dinnerParty,
    text: "Une ambiance élégante pour un cocktail ou un dîner : piano-voix, jazz, bossa nova, saxophone lounge ou quatuor à cordes. Des formules acoustiques, discrètes et adaptées aux lieux intimes." },
  'ceremonie': { label: 'Cérémonie', photo: P.weddingBride,
    text: "Cérémonie laïque, religieuse ou civile : des musiciens qui savent accompagner les moments forts, de l'entrée des mariés à la sortie, avec un répertoire choisi ensemble." },
  'bapteme-communion': { label: 'Baptême & communion', photo: P.gardenParty,
    text: "Des formules douces et familiales pour célébrer un baptême ou une communion, à l'église, en salle ou dans le jardin." },
  'evjf-evg': { label: 'EVJF / EVG', photo: P.girlsParty,
    text: "Un enterrement de vie de jeune fille ou de garçon mémorable : DJ, groupe de reprises ou chanteur pour faire chanter et danser toute la bande." },
  'concert-maison': { label: 'Concert à la maison', photo: P.guitarsRoom,
    text: "Offrez-vous un concert privé dans votre salon ou votre jardin : une formule acoustique, conviviale et inoubliable pour vos proches." },
  'restaurant-bar': { label: 'Restaurant & bar', photo: P.restaurant,
    text: "Restaurateurs et gérants de bar : programmez des artistes live réguliers ou ponctuels pour animer vos soirées et fidéliser votre clientèle." },
  'noel-nouvel-an': { label: 'Noël & Nouvel an', photo: P.fireworks,
    text: "Réveillon, fête de fin d'année, arbre de Noël : réservez tôt, les artistes sont très demandés en décembre." },
  'evenement-diaspora': { label: 'Fête au pays (diaspora)', photo: P.familyHands,
    text: "Vous vivez en France et organisez une fête de famille au Portugal, aux Antilles ou ailleurs ? Réservez un artiste local à distance, échangez avec lui en ligne et payez en toute sécurité. Wimbo s'occupe du lien." }
};

const INSTRUMENTS = {
  'chanteur': 'Chanteur / Chanteuse', 'deejay': 'DJ', 'guitariste': 'Guitariste',
  'pianiste': 'Pianiste', 'clavieriste': 'Claviériste', 'violoniste': 'Violoniste',
  'violoncelliste': 'Violoncelliste', 'contrebassiste': 'Contrebassiste', 'bassiste': 'Bassiste',
  'batteur': 'Batteur', 'percussionniste': 'Percussionniste', 'saxophoniste': 'Saxophoniste',
  'trompettiste': 'Trompettiste', 'tromboniste': 'Tromboniste', 'clarinettiste': 'Clarinettiste',
  'flutiste': 'Flûtiste', 'accordeoniste': 'Accordéoniste', 'harpiste': 'Harpiste',
  'organiste': 'Organiste', 'beatboxer': 'Beatboxer', 'choeur': 'Chœur / chorale'
};
/* Libellés courts des vignettes « instruments et spécialités » (formulaires artistes) */
const INSTR_CHIP = {
  'chanteur': 'Chant', 'pianiste': 'Piano', 'clavieriste': 'Clavier', 'guitariste': 'Guitare',
  'bassiste': 'Basse', 'contrebassiste': 'Contrebasse', 'batteur': 'Batterie', 'percussionniste': 'Percussions',
  'violoniste': 'Violon', 'violoncelliste': 'Violoncelle', 'saxophoniste': 'Saxophone',
  'trompettiste': 'Trompette', 'tromboniste': 'Trombone', 'clarinettiste': 'Clarinette', 'flutiste': 'Flûte',
  'accordeoniste': 'Accordéon', 'harpiste': 'Harpe', 'organiste': 'Orgue', 'deejay': 'DJ',
  'beatboxer': 'Beatbox', 'choeur': 'Chœur'
};
/* Synonymes pour relire les anciennes saisies libres (« Voix et piano », « sax »…) */
const INSTR_SYN = {
  voix: 'chanteur', chant: 'chanteur', chanteur: 'chanteur', chanteuse: 'chanteur', piano: 'pianiste', pianiste: 'pianiste',
  clavier: 'clavieriste', claviers: 'clavieriste', synthe: 'clavieriste', guitare: 'guitariste', guitariste: 'guitariste',
  basse: 'bassiste', bassiste: 'bassiste', contrebasse: 'contrebassiste', batterie: 'batteur', batteur: 'batteur',
  percussions: 'percussionniste', percussion: 'percussionniste', violon: 'violoniste', violoniste: 'violoniste',
  violoncelle: 'violoncelliste', saxophone: 'saxophoniste', sax: 'saxophoniste', trompette: 'trompettiste', trombone: 'tromboniste',
  clarinette: 'clarinettiste', flute: 'flutiste', accordeon: 'accordeoniste', harpe: 'harpiste', orgue: 'organiste',
  dj: 'deejay', deejay: 'deejay', beatbox: 'beatboxer', choeur: 'choeur', chorale: 'choeur'
};

const ARTIST_TYPES = {
  'chanteur': 'Chanteur·se', 'musicien': 'Musicien·ne', 'groupe': 'Groupe',
  'dj': 'DJ', 'ensemble': 'Ensemble classique'
};

/* Pays : codes ISO à 2 lettres (FR, PT, CM…). Les DOM (Guadeloupe, Martinique…) sont en FR. */

/* ---------- Artistes (exemples) ---------- */
const DEMO_ARTISTS = [
  {
    slug: 'elise-marceau', name: 'Élise Marceau', tagline: 'Voix & piano · Jazz, bossa, chanson',
    type: 'chanteur', formation: ['Solo', 'Duo'],
    members: [{ n: 'Élise Marceau', r: ['Voix', 'Piano'] }, { n: 'Paul Arnaud (option duo)', r: ['Contrebasse'] }],
    city: 'Paris', region: 'Île-de-France', country: 'FR', zone: "Île-de-France et jusqu'à 150 km",
    serves: ['Paris', 'Versailles', 'Reims', 'Rouen', 'Orléans'],
    genres: ['jazz', 'bossa-nova', 'chanson-francaise', 'pop'], instruments: ['chanteur', 'pianiste'],
    events: ['mariage', 'cocktail-diner', 'anniversaire', 'entreprise', 'concert-maison', 'ceremonie'],
    priceMin: 650, priceMax: 1200, premium: true, verified: true, languages: ['Français', 'Anglais'],
    since: 2015, bookings: 84, responseTime: '1 h',
    cover: P.pianoBW, avatar: P.blondeSinger,
    gallery: [P.blondeSinger, P.pianoBW, P.pianoKeys, P.pianoUpright, P.micBokeh, P.weddingTable2],
    videos: [{ t: 'Fly me to the moon — live cocktail', d: '2:41', img: P.pianoKeys }, { t: 'Medley chanson française', d: '4:05', img: P.micBokeh }],
    description: "Chanteuse et pianiste formée au conservatoire, je m'accompagne au piano pour créer une ambiance élégante et chaleureuse. Mon répertoire va des standards de jazz à la bossa nova, en passant par la chanson française et les tubes pop revisités. Idéal pour un cocktail de mariage, un dîner raffiné ou un anniversaire en petit comité.",
    experience: "Plus de 300 prestations depuis 2015 : mariages, hôtels parisiens, soirées d'entreprise et concerts privés. Résidence hebdomadaire dans un piano-bar du 8e arrondissement pendant quatre ans.",
    formationText: "En solo (voix et piano numérique), ou en duo avec contrebasse pour un son plus jazz. Possibilité d'ajouter un saxophone sur demande.",
    repertoire: "Plus de 250 titres : Ella Fitzgerald, Nina Simone, Norah Jones, Jobim, Gainsbourg, Aznavour, Adele, Coldplay… Demandes spéciales bienvenues avec trois semaines d'avance.",
    logistique: "Piano numérique, sonorisation adaptée jusqu'à 120 invités et micro HF pour les discours fournis. Espace nécessaire : 3 m².",
    montage: "Installation et balance en 40 minutes. Déplacements inclus dans Paris intramuros, forfait kilométrique au-delà."
  },
  {
    slug: 'trio-etincelles', name: 'Trio Étincelles', tagline: 'Jazz manouche & swing acoustique',
    type: 'groupe', formation: ['Trio', 'Quatuor'],
    members: [{ n: 'Lucas Ferrand', r: ['Guitare solo'] }, { n: 'Malo Vasseur', r: ['Guitare rythmique'] }, { n: 'Inès Garnier', r: ['Violon'] }],
    city: 'Lyon', region: 'Auvergne-Rhône-Alpes', country: 'FR', zone: 'Rhône-Alpes, Bourgogne et Suisse romande',
    serves: ['Lyon', 'Annecy', 'Grenoble', 'Dijon', 'Genève', 'Saint-Étienne'],
    genres: ['jazz-manouche', 'swing', 'jazz'], instruments: ['guitariste', 'violoniste'],
    events: ['mariage', 'cocktail-diner', 'restaurant-bar', 'anniversaire', 'entreprise'],
    priceMin: 900, priceMax: 1800, premium: true, verified: true, languages: ['Français', 'Anglais'],
    since: 2017, bookings: 126, responseTime: '2 h',
    cover: P.bandIndoor, avatar: P.guitarPlay2,
    gallery: [P.bandIndoor, P.guitarPlay2, P.guitarClose, P.womanViolin, P.restaurant, P.gardenParty],
    videos: [{ t: 'Minor swing — mariage au château', d: '3:12', img: P.guitarPlay2 }, { t: 'Déambulation cocktail', d: '2:20', img: P.bandIndoor }],
    description: "Trois musiciens, deux guitares et un violon : le Trio Étincelles fait revivre l'esprit des cabarets de Django avec énergie et élégance. Notre formule 100 % acoustique nous permet de jouer partout, en déambulation entre les tables comme sur scène.",
    experience: "Formé en 2017 au conservatoire de Lyon, le trio joue chaque année dans une quarantaine de mariages et de soirées privées, ainsi que dans plusieurs festivals de jazz de la région.",
    formationText: "Trio guitare, guitare, violon. Passage en quartet avec contrebasse sur demande.",
    repertoire: "Django Reinhardt, Stéphane Grappelli, standards swing, valses musette et reprises pop arrangées façon manouche (Beatles, Stromae, Daft Punk).",
    logistique: "Acoustique, aucune sonorisation nécessaire jusqu'à 100 invités. Petite sono fournie au-delà.",
    montage: "Installation en 15 minutes. Déplacement possible dans toute la France sur devis."
  },
  {
    slug: 'maya-soulfire', name: 'Maya Soulfire', tagline: 'Soul, funk & R&B · solo ou avec band',
    type: 'chanteur', formation: ['Solo', 'Duo', 'Groupe'],
    members: [{ n: 'Maya Diop', r: ['Chant lead'] }, { n: 'Le Soulfire Band (option)', r: ['Clavier', 'Basse', 'Batterie', 'Guitare'] }],
    city: 'Bordeaux', region: 'Nouvelle-Aquitaine', country: 'FR', zone: 'Nouvelle-Aquitaine et Pays basque',
    serves: ['Bordeaux', 'Arcachon', 'Biarritz', 'La Rochelle', 'Toulouse'],
    genres: ['soul-rnb', 'funk', 'pop', 'reprises'], instruments: ['chanteur'],
    events: ['mariage', 'fete-privee', 'anniversaire', 'entreprise', 'evjf-evg'],
    priceMin: 700, priceMax: 2400, premium: true, verified: true, languages: ['Français', 'Anglais'],
    since: 2016, bookings: 97, responseTime: '2 h',
    cover: P.womanSingerRed, avatar: P.womanSingerRed,
    gallery: [P.womanSingerRed, P.singerBokeh, P.vintageMic, P.crowdOrange, P.stageColor],
    videos: [{ t: 'Respect — live soirée de gala', d: '3:38', img: P.singerBokeh }, { t: 'Medley Motown', d: '5:10', img: P.vintageMic }],
    description: "Une voix puissante, une présence scénique solaire : Maya transforme n'importe quelle soirée en piste de danse. En solo sur bandes, en duo avec guitariste ou avec son band de cinq musiciens, elle adapte la formule à votre événement et à votre budget.",
    experience: "Choriste pour plusieurs artistes nationaux, finaliste d'un télé-crochet en 2019, Maya anime depuis 2016 des mariages et soirées d'entreprise dans tout le Sud-Ouest.",
    formationText: "Solo (voix et bandes HD), duo voix-guitare, ou band complet de 5 musiciens.",
    repertoire: "Aretha Franklin, Stevie Wonder, Amy Winehouse, Beyoncé, Bruno Mars, Earth Wind & Fire, Dua Lipa… Playlist DJ entre les sets incluse.",
    logistique: "Sonorisation et lumières fournies pour 200 invités. Le band nécessite un espace de 4 x 3 m.",
    montage: "1 h d'installation en solo, 2 h avec le band. Frais de déplacement calculés depuis Bordeaux."
  },
  {
    slug: 'dj-kaito', name: 'DJ Kaïto', tagline: 'Afro-house, afrobeats, kizomba & hits',
    type: 'dj', formation: ['Solo'],
    members: [{ n: 'Kaïto Mendes', r: ['DJ', 'Animation micro'] }],
    city: 'Lisbonne', region: 'Lisbonne', country: 'PT', zone: 'Portugal, Paris et Île-de-France',
    serves: ['Lisbonne', 'Porto', 'Faro', 'Cascais', 'Paris'],
    genres: ['electro-house', 'afrobeats', 'kizomba-semba', 'pop'], instruments: ['deejay'],
    events: ['mariage', 'fete-privee', 'anniversaire', 'entreprise', 'evenement-diaspora', 'noel-nouvel-an'],
    priceMin: 800, priceMax: 1600, premium: true, verified: true, languages: ['Français', 'Portugais', 'Anglais'],
    since: 2014, bookings: 210, responseTime: '1 h',
    cover: P.djMan, avatar: P.djMan,
    gallery: [P.djMan, P.djDecks, P.djPink, P.club, P.confetti, P.redParty],
    videos: [{ t: 'Set afro-house — mariage à Sintra', d: '6:02', img: P.djDecks }, { t: 'Ouverture de bal kizomba', d: '3:45', img: P.club }],
    description: "Franco-portugais installé à Lisbonne, Kaïto mixe entre deux cultures : afro-house, afrobeats, kizomba, kuduro et les grands hits français et internationaux. Il lit la piste comme personne et fait danser toutes les générations, de la grand-mère aux cousins.",
    experience: "Plus de 200 mariages et soirées privées entre le Portugal et la France. Résident dans un club de Lisbonne depuis 2019.",
    formationText: "DJ solo avec animation micro. Option saxophoniste ou percussionniste live sur demande.",
    repertoire: "Afro-house, amapiano, afrobeats, kizomba, semba, zouk, hits 80's à aujourd'hui, variété française et portugaise.",
    logistique: "Platines, sonorisation 2 000 W, lumières LED et machine à fumée fournies. Jusqu'à 300 invités.",
    montage: "1 h 30 d'installation. Déplacements en France facturés au réel (vol + transport matériel)."
  },
  {
    slug: 'los-compadres', name: 'Los Compadres', tagline: 'Salsa, cumbia & latino live',
    type: 'groupe', formation: ['Groupe'],
    members: [{ n: 'Diego Alvarez', r: ['Chant', 'Guitare'] }, { n: 'Rafael Ortega', r: ['Trompette'] }, { n: 'Sofia Mendes', r: ['Percussions'] }, { n: 'Julien Costa', r: ['Piano'] }, { n: 'Karim Belhadj', r: ['Basse'] }],
    city: 'Marseille', region: "Provence-Alpes-Côte d'Azur", country: 'FR', zone: 'Sud de la France',
    serves: ['Marseille', 'Aix-en-Provence', 'Toulon', 'Avignon', 'Montpellier', 'Nice'],
    genres: ['latino-salsa', 'musique-du-monde', 'reprises'], instruments: ['chanteur', 'trompettiste', 'percussionniste', 'pianiste', 'bassiste'],
    events: ['mariage', 'fete-privee', 'anniversaire', 'entreprise'],
    priceMin: null, priceMax: null, premium: false, verified: true, languages: ['Français', 'Espagnol'],
    since: 2018, bookings: 63, responseTime: '3 h',
    cover: P.dancers, avatar: P.trumpet,
    gallery: [P.trumpet, P.dancers, P.drums, P.partyOutdoor, P.stageColor],
    videos: [{ t: 'Bailando — soirée de mariage', d: '4:11', img: P.dancers }],
    description: "Cinq musiciens, des cuivres, des percussions et une énergie contagieuse : Los Compadres font souffler un vent de Cuba et de Colombie sur vos soirées. Initiation salsa offerte aux invités pendant le premier set.",
    experience: "Le groupe tourne depuis 2018 dans les festivals du Sud et anime une trentaine de mariages par an.",
    formationText: "Formation de 5 musiciens, extensible à 7 avec deux cuivres supplémentaires.",
    repertoire: "Salsa, cumbia, son cubain, bachata, reggaeton acoustique et reprises latines de tubes internationaux.",
    logistique: "Sonorisation complète fournie. Espace scénique de 5 x 3 m et deux prises 16 A.",
    montage: "2 h d'installation et de balances. Arrivée prévue en début d'après-midi."
  },
  {
    slug: 'kalinda-kreyol', name: 'Kalinda Kréyòl', tagline: 'Gwoka, zouk, kompa & biguine',
    type: 'groupe', formation: ['Trio', 'Groupe'],
    members: [{ n: 'Marie-Line Bérard', r: ['Chant'] }, { n: 'Jocelyn Théodore', r: ['Ka', 'Percussions'] }, { n: 'Steeve Lubin', r: ['Guitare'] }, { n: 'Dimitri Cassin', r: ['Clavier'] }],
    city: 'Pointe-à-Pitre', region: 'Guadeloupe', country: 'FR', zone: 'Guadeloupe, Martinique · Île-de-France sur demande',
    serves: ['Pointe-à-Pitre', 'Basse-Terre', 'Le Gosier', 'Fort-de-France', 'Paris'],
    genres: ['zouk-kompa', 'gwoka', 'musique-du-monde'], instruments: ['chanteur', 'percussionniste', 'guitariste'],
    events: ['mariage', 'bapteme-communion', 'anniversaire', 'fete-privee', 'evenement-diaspora'],
    priceMin: 900, priceMax: 1900, premium: true, verified: true, languages: ['Français', 'Créole'],
    since: 2012, bookings: 141, responseTime: '2 h',
    cover: P.streetBand, avatar: P.streetBand,
    gallery: [P.streetBand, P.beach, P.drums, P.friendsToast, P.confettiDark],
    videos: [{ t: 'Léwòz — mariage au Gosier', d: '5:24', img: P.streetBand }],
    description: "Du tambour ka au zouk love, Kalinda Kréyòl fait vibrer les racines antillaises. Le groupe accompagne mariages, baptêmes et fêtes de famille en Guadeloupe et en Martinique, et vient régulièrement en Île-de-France pour la diaspora.",
    experience: "Plus de 15 ans de scène, du carnaval aux grandes soirées privées. Le groupe a joué pour de nombreuses familles venues de métropole célébrer un mariage au pays.",
    formationText: "Trio acoustique (voix, ka, guitare) ou groupe complet de 4 à 6 musiciens.",
    repertoire: "Gwoka traditionnel, biguine, zouk (Kassav', Malavoi), kompa, quadrille et reprises créoles de tubes actuels.",
    logistique: "Sonorisation fournie pour la formule groupe. Le trio peut jouer sans sono jusqu'à 80 invités.",
    montage: "1 h d'installation. Déplacements en métropole sur devis (billets d'avion inclus dans le devis)."
  },
  {
    slug: 'ines-ferreira', name: 'Inês Ferreira', tagline: 'Fado & chanson lusophone',
    type: 'chanteur', formation: ['Solo', 'Trio'],
    members: [{ n: 'Inês Ferreira', r: ['Chant'] }, { n: 'Rui Almeida', r: ['Guitarra portuguesa'] }, { n: 'Nuno Sousa', r: ['Viola de fado'] }],
    city: 'Porto', region: 'Porto', country: 'PT', zone: 'Portugal · France sur demande',
    serves: ['Porto', 'Lisbonne', 'Braga', 'Coimbra', 'Paris'],
    genres: ['fado', 'musique-du-monde', 'chanson-francaise'], instruments: ['chanteur'],
    events: ['mariage', 'cocktail-diner', 'anniversaire', 'evenement-diaspora', 'restaurant-bar'],
    priceMin: 600, priceMax: 1500, premium: false, verified: true, languages: ['Portugais', 'Français', 'Anglais'],
    since: 2016, bookings: 72, responseTime: '2 h',
    cover: P.singerSilhouette, avatar: P.womanHatPink,
    gallery: [P.singerSilhouette, P.womanHatPink, P.acousticPlay, P.restaurant, P.vintageMicEvent],
    videos: [{ t: 'Barco Negro — casa de fado, Porto', d: '3:50', img: P.singerSilhouette }],
    description: "Née à Porto, élevée entre le Portugal et la région parisienne, Inês chante le fado avec une émotion rare. Accompagnée de la guitarra portuguesa et de la viola, elle offre un moment suspendu à vos invités, idéal pour un dîner ou un mariage franco-portugais.",
    experience: "Chanteuse dans plusieurs casas de fado de Porto et Lisbonne depuis 2016, invitée de festivals lusophones en France et en Suisse.",
    formationText: "Solo avec bande, ou trio traditionnel voix, guitarra portuguesa et viola de fado.",
    repertoire: "Amália Rodrigues, Mariza, Ana Moura, Carlos do Carmo, chansons populaires portugaises et quelques classiques français.",
    logistique: "Formule acoustique pour les lieux intimes. Petite sono fournie au-delà de 80 invités.",
    montage: "Installation en 20 minutes. Déplacements en France regroupés sur des week-ends pour réduire les frais."
  },
  {
    slug: 'velvet-covers', name: 'The Velvet Covers', tagline: 'Pop-rock live · 60\'s à aujourd\'hui',
    type: 'groupe', formation: ['Groupe'],
    members: [{ n: 'Tom Leclerc', r: ['Chant', 'Guitare'] }, { n: 'Julie Moreau', r: ['Chant'] }, { n: 'Bastien Roux', r: ['Basse'] }, { n: 'Yanis Morel', r: ['Batterie'] }, { n: 'Paul Girard', r: ['Clavier'] }],
    city: 'Nantes', region: 'Pays de la Loire', country: 'FR', zone: 'Grand Ouest et Paris',
    serves: ['Nantes', 'Rennes', 'Angers', 'La Baule', 'Tours', 'Paris'],
    genres: ['rock', 'pop', 'reprises', 'funk'], instruments: ['chanteur', 'guitariste', 'batteur', 'bassiste', 'clavieriste'],
    events: ['mariage', 'fete-privee', 'anniversaire', 'entreprise', 'evjf-evg'],
    priceMin: 1500, priceMax: 3200, premium: false, verified: true, languages: ['Français', 'Anglais'],
    since: 2015, bookings: 118, responseTime: '3 h',
    cover: P.rockBand, avatar: P.guitaristPurple,
    gallery: [P.rockBand, P.guitaristPurple, P.womanGuitarStage, P.concertCrowd, P.drums, P.handsHeart],
    videos: [{ t: 'Mr. Brightside — soirée d\'entreprise', d: '3:44', img: P.guitaristPurple }, { t: 'Best of mariages 2026', d: '2:30', img: P.concertCrowd }],
    description: "Cinq musiciens et deux voix pour un show pop-rock qui fait chanter toute la salle, des Beatles à Dua Lipa en passant par Téléphone et Queen. Nous construisons la setlist avec vous et enchaînons sans temps mort jusqu'au bout de la nuit.",
    experience: "Plus de 100 mariages et soirées d'entreprise depuis 2015 dans le Grand Ouest et à Paris.",
    formationText: "Groupe de 5 musiciens, formule réduite en trio acoustique pour le cocktail.",
    repertoire: "Plus de 180 titres : Beatles, Queen, Téléphone, Indochine, Killers, Arctic Monkeys, Bruno Mars, Dua Lipa, Daft Punk…",
    logistique: "Sonorisation 3 kW et lumières scéniques fournies. Espace de 6 x 4 m.",
    montage: "2 h 30 d'installation. Prévoir un accès véhicule proche."
  },
  {
    slug: 'sacha-sax', name: 'Sacha Sax', tagline: 'Saxophone lounge & sax-house',
    type: 'musicien', formation: ['Solo', 'Duo'],
    members: [{ n: 'Sacha Benali', r: ['Saxophone'] }, { n: 'DJ Léna (option duo)', r: ['DJ'] }],
    city: 'Nice', region: "Provence-Alpes-Côte d'Azur", country: 'FR', zone: 'Côte d\'Azur, Monaco et Provence',
    serves: ['Nice', 'Cannes', 'Monaco', 'Antibes', 'Saint-Tropez', 'Marseille'],
    genres: ['lounge', 'electro-house', 'jazz', 'soul-rnb'], instruments: ['saxophoniste'],
    events: ['cocktail-diner', 'mariage', 'entreprise', 'restaurant-bar', 'fete-privee'],
    priceMin: 450, priceMax: 1100, premium: false, verified: true, languages: ['Français', 'Anglais', 'Italien'],
    since: 2017, bookings: 89, responseTime: '1 h',
    cover: P.sax, avatar: P.sax,
    gallery: [P.sax, P.crowdYellow, P.restaurant, P.gardenParty, P.redParty],
    videos: [{ t: 'Sax-house sunset session', d: '4:30', img: P.sax }],
    description: "Le saxophone en live sur des sets lounge ou house : Sacha apporte une touche chic et festive à vos cocktails, beach-parties et soirées. En duo avec DJ Léna, la formule devient une vraie soirée clé en main.",
    experience: "Habitué des plages privées et palaces de la Côte d'Azur depuis 2017, Sacha joue aussi en déambulation lors des mariages.",
    formationText: "Saxophone solo sur bandes, ou duo saxophone et DJ.",
    repertoire: "Standards jazz, lounge, deep house, reprises au sax (Careless Whisper, Lose Yourself to Dance, Get Lucky…).",
    logistique: "Micro HF et petite sono fournis. Formule duo avec régie DJ complète.",
    montage: "30 minutes en solo, 1 h en duo."
  },
  {
    slug: 'noah-belanger', name: 'Noah Bélanger', tagline: 'Chant & guitare · folk-pop acoustique',
    type: 'chanteur', formation: ['Solo', 'Duo'],
    members: [{ n: 'Noah Bélanger', r: ['Chant', 'Guitare'] }],
    city: 'Toulouse', region: 'Occitanie', country: 'FR', zone: 'Occitanie et Sud-Ouest',
    serves: ['Toulouse', 'Albi', 'Montpellier', 'Carcassonne', 'Bordeaux'],
    genres: ['folk-acoustique', 'pop', 'chanson-francaise', 'reprises'], instruments: ['chanteur', 'guitariste'],
    events: ['mariage', 'ceremonie', 'anniversaire', 'concert-maison', 'cocktail-diner', 'evjf-evg'],
    priceMin: 400, priceMax: 900, premium: false, verified: true, languages: ['Français', 'Anglais'],
    since: 2019, bookings: 54, responseTime: '2 h',
    cover: P.maleSingerGuitar, avatar: P.manAcoustic,
    gallery: [P.maleSingerGuitar, P.manAcoustic, P.guitarClose, P.guitarOutdoor, P.guitarsRoom],
    videos: [{ t: 'Cérémonie laïque — Perfect (Ed Sheeran)', d: '3:05', img: P.manAcoustic }],
    description: "Une voix douce, une guitare et beaucoup d'émotion : Noah est le choix idéal pour une cérémonie laïque, un cocktail champêtre ou un concert dans votre salon. Il adapte chaque chanson à votre histoire.",
    experience: "Auteur-compositeur, plus de 50 mariages depuis 2019 et une tournée de concerts chez l'habitant en Occitanie.",
    formationText: "Solo guitare-voix, ou duo avec violoncelle pour les cérémonies.",
    repertoire: "Ed Sheeran, Ben Howard, Vianney, Jean-Jacques Goldman, Cabrel, Coldplay, Lewis Capaldi et compositions originales.",
    logistique: "Acoustique ou petite sono fournie. Idéal pour les lieux en extérieur.",
    montage: "20 minutes d'installation."
  },
  {
    slug: 'amara', name: 'Amara', tagline: 'Afro-soul, kizomba & zouk love',
    type: 'chanteur', formation: ['Solo', 'Trio'],
    members: [{ n: 'Amara Nzinga', r: ['Chant'] }, { n: 'Yohan Silva', r: ['Guitare'] }, { n: 'Kevin Mbala', r: ['Percussions'] }],
    city: 'Paris', region: 'Île-de-France', country: 'FR', zone: 'France · Portugal · Afrique lusophone sur demande',
    serves: ['Paris', 'Lille', 'Lyon', 'Lisbonne', 'Bruxelles'],
    genres: ['afrobeats', 'kizomba-semba', 'soul-rnb', 'zouk-kompa'], instruments: ['chanteur'],
    events: ['mariage', 'anniversaire', 'fete-privee', 'evenement-diaspora', 'bapteme-communion'],
    priceMin: 700, priceMax: 1600, premium: true, verified: true, languages: ['Français', 'Portugais', 'Anglais', 'Lingala'],
    since: 2018, bookings: 76, responseTime: '2 h',
    cover: P.singerArms, avatar: P.performerBlue,
    gallery: [P.singerArms, P.performerBlue, P.crowdGold, P.friendsToast, P.confetti],
    videos: [{ t: 'Kizomba live — mariage franco-angolais', d: '4:18', img: P.crowdGold }],
    description: "Amara chante l'Afrique, les Caraïbes et le Portugal dans une même soirée : afro-soul, kizomba, semba et zouk love. Une artiste généreuse pour les mariages mixtes et les fêtes de famille où plusieurs cultures se rencontrent.",
    experience: "Plus de 70 mariages et galas depuis 2018 en France, en Belgique et au Portugal. Première partie de plusieurs artistes afro-pop.",
    formationText: "Solo sur bandes, ou trio voix, guitare et percussions.",
    repertoire: "Kizomba, semba, afrobeats, zouk love, soul (Aya Nakamura, Burna Boy, Anselmo Ralph, Kassav', Lauryn Hill…).",
    logistique: "Sonorisation fournie. Ouverture de bal chorégraphiée possible.",
    montage: "1 h d'installation."
  }
];

/* ---------- Avis (exemples) ---------- */
// s = [qualité musicale, communication, professionnalisme, amabilité]
const DEMO_REVIEWS = [
  { a: 'elise-marceau', n: 'Camille D.', e: 'Anniversaire 70 ans', d: '2026-09-12', s: [5,5,5,5], t: "Élise a joué pour les 70 ans de ma mère : un moment hors du temps. Elle avait préparé deux chansons d'Aznavour à notre demande, toute la famille était émue.", r: "Merci Camille, c'était un plaisir de partager ce moment avec votre famille !" },
  { a: 'elise-marceau', n: 'Thomas & Julie', e: 'Mariage', d: '2026-07-04', s: [5,5,5,5], t: "Parfaite pendant le cocktail, discrète pendant les discours, puis elle a lancé la soirée avec un medley qui a fait chanter tout le monde. On recommande les yeux fermés." },
  { a: 'elise-marceau', n: 'Hélène R.', e: 'Dîner d\'entreprise', d: '2026-05-21', s: [5,4,5,5], t: "Très professionnelle, ponctuelle et d'une grande élégance. Nos clients ont adoré l'ambiance jazz." },
  { a: 'trio-etincelles', n: 'Marion B.', e: 'Mariage', d: '2026-08-22', s: [5,5,5,5], t: "Ils ont joué en déambulation pendant tout le cocktail, les invités les suivaient de table en table ! Une énergie incroyable et une vraie complicité entre eux.", r: "Merci Marion, quel mariage ! Longue vie aux mariés." },
  { a: 'trio-etincelles', n: 'Pierre-Antoine L.', e: 'Anniversaire 40 ans', d: '2026-06-14', s: [5,5,5,5], t: "Le jazz manouche était le thème de la soirée, ils ont été parfaits. Réactifs dès la demande de devis." },
  { a: 'trio-etincelles', n: 'Restaurant Le Comptoir', e: 'Soirée restaurant', d: '2026-03-08', s: [5,5,5,4], t: "On les fait revenir chaque mois, nos clients réservent spécialement pour eux." },
  { a: 'maya-soulfire', n: 'Sarah K.', e: 'Mariage', d: '2026-09-05', s: [5,5,5,5], t: "Maya et son band ont mis le feu ! Piste de danse pleine de 22 h à 3 h. Sa reprise de Respect restera dans les mémoires." },
  { a: 'maya-soulfire', n: 'Agence Horizon', e: 'Soirée d\'entreprise', d: '2026-06-27', s: [5,5,4,5], t: "Formule solo parfaite pour notre soirée de 150 personnes. Très bonne communication en amont." },
  { a: 'maya-soulfire', n: 'Lina M.', e: 'EVJF', d: '2026-04-18', s: [4,5,5,5], t: "Une voix incroyable et beaucoup d'humour, la future mariée était aux anges." },
  { a: 'dj-kaito', n: 'Ana & Mickaël', e: 'Mariage franco-portugais', d: '2026-08-08', s: [5,5,5,5], t: "On cherchait un DJ capable de mélanger kizomba, variété portugaise et hits français : Kaïto a fait danser nos deux familles toute la nuit. On a tout organisé depuis Paris sans stress.", r: "Obrigado Ana & Mickaël, quelle soirée à Sintra !" },
  { a: 'dj-kaito', n: 'Joana P.', e: 'Anniversaire 30 ans', d: '2026-05-30', s: [5,5,5,5], t: "Ambiance de folie, il a parfaitement lu le public. Matériel au top." },
  { a: 'dj-kaito', n: 'Startup Lisboa Hub', e: 'Fête de fin d\'année', d: '2025-12-12', s: [5,4,5,5], t: "Super set afro-house, nos équipes en parlent encore." },
  { a: 'los-compadres', n: 'Nadia S.', e: 'Mariage', d: '2026-07-18', s: [5,4,5,5], t: "L'initiation salsa pendant le premier set a été le moment préféré de nos invités. Une énergie folle." },
  { a: 'los-compadres', n: 'Olivier T.', e: 'Anniversaire 50 ans', d: '2026-05-09', s: [5,5,4,5], t: "Groupe généreux et très bons musiciens, tout le monde a dansé." },
  { a: 'kalinda-kreyol', n: 'Laetitia & Johan', e: 'Mariage au Gosier', d: '2026-07-25', s: [5,5,5,5], t: "Nous vivons à Paris et avons organisé notre mariage en Guadeloupe à distance. Le groupe a été adorable et le léwòz final a réuni toutes les générations.", r: "Mèsi anpil, nou té kontan anpil jwé pou zot !" },
  { a: 'kalinda-kreyol', n: 'Rose-Marie C.', e: 'Baptême', d: '2026-03-28', s: [5,5,5,5], t: "Une ambiance familiale et festive, exactement ce que nous voulions." },
  { a: 'kalinda-kreyol', n: 'Fabrice G.', e: 'Anniversaire 60 ans', d: '2025-12-20', s: [5,4,5,5], t: "Le zouk love pour la danse de mes parents, inoubliable." },
  { a: 'ines-ferreira', n: 'Sofia & Nicolas', e: 'Mariage', d: '2026-06-20', s: [5,5,5,5], t: "Inês a chanté pendant le dîner, ma grand-mère a pleuré de bonheur. Un vrai moment de grâce." },
  { a: 'ines-ferreira', n: 'Manuel F.', e: 'Dîner privé', d: '2026-02-14', s: [5,5,5,4], t: "Une voix magnifique et des musiciens d'exception." },
  { a: 'velvet-covers', n: 'Émilie V.', e: 'Mariage', d: '2026-08-29', s: [5,5,5,5], t: "Setlist construite ensemble, aucun temps mort, une piste pleine jusqu'à 4 h. Le groupe a même appris notre chanson en une semaine !" },
  { a: 'velvet-covers', n: 'Groupe Atlantique', e: 'Soirée d\'entreprise', d: '2026-06-12', s: [4,5,5,5], t: "Très pros, son impeccable, nos collaborateurs ont adoré." },
  { a: 'velvet-covers', n: 'Kevin L.', e: 'EVG', d: '2026-05-02', s: [5,4,4,5], t: "Ambiance rock comme on l'aime, merci les gars." },
  { a: 'sacha-sax', n: 'Beach Club Antibes', e: 'Soirée sunset', d: '2026-08-15', s: [5,5,5,5], t: "Sacha est devenu notre rendez-vous de l'été, ambiance chic et festive garantie." },
  { a: 'sacha-sax', n: 'Clara & Mehdi', e: 'Cocktail de mariage', d: '2026-06-06', s: [5,5,4,5], t: "Le sax pendant le cocktail au coucher du soleil, nos invités ont adoré." },
  { a: 'noah-belanger', n: 'Justine & Hugo', e: 'Cérémonie laïque', d: '2026-09-26', s: [5,5,5,5], t: "Noah a repris notre chanson pour l'entrée de la mariée, tout le monde avait les larmes aux yeux. Très à l'écoute du début à la fin." },
  { a: 'noah-belanger', n: 'Agathe P.', e: 'Concert à la maison', d: '2026-04-25', s: [5,5,5,5], t: "Un concert dans notre jardin pour mes 35 ans, intime et chaleureux." },
  { a: 'amara', n: 'Grace & Bruno', e: 'Mariage franco-angolais', d: '2026-08-01', s: [5,5,5,5], t: "Amara a su rassembler nos deux cultures : kizomba pour l'ouverture de bal, afro-soul pendant le dîner. Exceptionnel.", r: "Obrigada Grace et Bruno, je garde un souvenir merveilleux de votre fête !" },
  { a: 'amara', n: 'Fatou D.', e: 'Anniversaire 40 ans', d: '2026-05-16', s: [5,5,5,5], t: "Une voix sublime et une énergie communicative." },
  { a: 'amara', n: 'Association Lusofonia', e: 'Gala annuel', d: '2026-03-21', s: [5,4,5,5], t: "Parfaite pour notre public lusophone et francophone." }
];

/* ---------- Blog ---------- */
const BLOG = [
  {
    slug: 'choisir-musicien-mariage', cat: 'Mariage', date: '2026-10-14', read: '6 min', cover: P.weddingRings,
    title: 'Musique de mariage : le guide pour choisir votre artiste',
    excerpt: "Cérémonie, cocktail, dîner, soirée : quel artiste pour quel moment, à quel budget, et combien de temps à l'avance réserver ?",
    body: `
<p>La musique est l'un des souvenirs les plus forts d'un mariage. Bien choisie, elle accompagne l'émotion de la cérémonie, détend l'atmosphère du cocktail et fait danser toutes les générations. Voici comment vous y prendre, étape par étape.</p>
<h3>1. Découpez votre journée en moments</h3>
<p>Un mariage compte en général quatre temps musicaux : la <strong>cérémonie</strong> (entrée, échange des vœux, sortie), le <strong>cocktail</strong>, le <strong>dîner</strong> et la <strong>soirée dansante</strong>. Chaque moment appelle une formule différente : un quatuor ou un guitariste-chanteur pour la cérémonie, un duo jazz ou un saxophoniste pour le cocktail, puis un groupe ou un DJ pour la soirée.</p>
<h3>2. Choisissez la formation adaptée à votre lieu</h3>
<p>Un domaine en extérieur sans électricité ? Privilégiez une formule acoustique. Une grande salle de 200 invités ? Il faudra une sonorisation adaptée, que la plupart des groupes fournissent. Vérifiez toujours l'espace nécessaire indiqué sur le profil de l'artiste.</p>
<h3>3. Fixez un budget réaliste</h3>
<p>À titre indicatif, comptez de 400 à 900 € pour un musicien solo, de 900 à 1 800 € pour un trio et de 1 500 à 3 500 € pour un groupe complet, selon la durée, la date et le déplacement. Sur Wimbo, chaque profil affiche une fourchette de cachet et le devis détaille les cotisations sociales, sans mauvaise surprise.</p>
<h3>4. Réservez tôt</h3>
<p>Les samedis de mai à septembre partent vite : 8 à 12 mois à l'avance pour les artistes les plus demandés. Pour un mariage hors saison, 3 à 6 mois suffisent souvent.</p>
<h3>5. Les bonnes questions à poser</h3>
<ul><li>Quelles chansons peut-on ajouter au répertoire, et avec quel délai ?</li><li>Quelles sont les pauses prévues pendant la prestation ?</li><li>Que se passe-t-il en cas d'empêchement de l'artiste ?</li><li>Le matériel (sono, lumières, micro pour les discours) est-il inclus ?</li></ul>
<h3>6. Pensez à l'administratif</h3>
<p>En France, engager un artiste pour un événement privé implique une déclaration auprès du GUSO. Sur Wimbo, nous la préparons pour vous et le paiement est sécurisé jusqu'au jour J. Vous n'avez plus qu'à profiter.</p>`
  },
  {
    slug: 'guso-tout-comprendre', cat: 'Administratif', date: '2026-10-02', read: '5 min', cover: P.sheetMusic,
    title: 'GUSO : tout comprendre en 5 minutes',
    excerpt: "Vous engagez un musicien pour une fête privée ? Voici ce qu'est le GUSO, pourquoi il est obligatoire et comment Wimbo s'en charge pour vous.",
    body: `
<p>Le <strong>GUSO</strong> (Guichet unique du spectacle occasionnel) est le service public qui permet aux organisateurs occasionnels de déclarer et de rémunérer légalement des artistes du spectacle vivant. Il concerne les particuliers, les associations et les entreprises dont l'activité principale n'est pas le spectacle.</p>
<h3>Pourquoi est-ce obligatoire ?</h3>
<p>En France, un artiste qui se produit en public est présumé salarié (article L7121-3 du Code du travail). Lorsque vous l'engagez directement pour votre mariage ou votre anniversaire, vous devenez donc son employeur occasionnel, et vous devez déclarer la prestation et payer les cotisations sociales correspondantes.</p>
<h3>Comment fonctionne le GUSO ?</h3>
<p>Une seule déclaration, la <strong>DUS</strong> (déclaration unique et simplifiée), remplace toutes les formalités : elle vaut contrat de travail et déclaration auprès des organismes sociaux (URSSAF, retraite, assurance chômage, congés spectacles, formation, santé au travail). Le GUSO calcule les cotisations et les redistribue.</p>
<h3>Les points à retenir</h3>
<ul><li>Le recours au GUSO est limité à <strong>6 représentations par an</strong> pour un même organisateur.</li><li>La déclaration se fait idéalement avant la prestation, et au plus tard dans les jours qui suivent.</li><li>Les cotisations s'ajoutent au cachet net de l'artiste : il faut en tenir compte dans votre budget.</li><li>Si l'artiste vous facture via une structure (association, société de production), c'est elle qui est employeur : pas de GUSO pour vous.</li></ul>
<h3>Ce que fait Wimbo</h3>
<p>Sur Wimbo, le devis que vous recevez intègre les cotisations : vous connaissez le coût total dès le départ. Une fois la réservation confirmée, nous préparons la déclaration avec vos informations et celles de l'artiste, vous n'avez plus qu'à la valider. Plus d'oubli, plus de risque de redressement.</p>
<p class="note">Cet article est informatif et ne remplace pas un conseil juridique. Pour les cas particuliers, consultez <a href="https://www.guso.fr" target="_blank" rel="noopener">guso.fr</a>.</p>`
  },
  {
    slug: 'prix-musicien-evenement', cat: 'Budget', date: '2026-09-18', read: '4 min', cover: P.crowdGuitarGold,
    title: 'Combien coûte un musicien pour un événement privé ?',
    excerpt: "Solo, duo, groupe ou DJ : les fourchettes de prix constatées et les critères qui font varier le devis.",
    body: `
<p>C'est la première question que l'on se pose. Le cachet d'un artiste dépend de nombreux critères, mais quelques repères permettent d'y voir clair.</p>
<h3>Les fourchettes indicatives</h3>
<ul><li><strong>Musicien ou chanteur solo</strong> : 400 à 900 €</li><li><strong>Duo</strong> : 600 à 1 300 €</li><li><strong>Trio ou quatuor</strong> : 900 à 2 400 €</li><li><strong>Groupe de 4 à 6 musiciens</strong> : 1 500 à 3 500 €</li><li><strong>DJ</strong> : 500 à 1 600 €</li></ul>
<p>Ces montants correspondent à une prestation de 2 à 4 heures et sont donnés à titre indicatif.</p>
<h3>Ce qui fait varier le prix</h3>
<ul><li><strong>La date</strong> : un samedi de juin coûte plus cher qu'un jeudi de novembre.</li><li><strong>La durée</strong> : cérémonie seule, cocktail, ou soirée complète jusqu'au bout de la nuit.</li><li><strong>Le déplacement</strong> : distance, péage, hébergement éventuel.</li><li><strong>Le matériel</strong> : sonorisation, lumières, micro pour les discours.</li><li><strong>Les demandes spéciales</strong> : apprentissage de nouveaux morceaux, chorégraphie, tenue à thème.</li></ul>
<h3>Comment éviter les mauvaises surprises</h3>
<p>Demandez un devis détaillé qui précise la durée, les pauses, le matériel et les frais annexes. Sur Wimbo, le devis inclut aussi les cotisations sociales liées au GUSO, que beaucoup oublient d'anticiper. Le paiement se fait en deux fois : un acompte de 30 % pour bloquer la date, le solde après la prestation.</p>`
  },
  {
    slug: 'organiser-fete-au-pays', cat: 'Diaspora', date: '2026-09-03', read: '5 min', cover: P.beach,
    title: 'Organiser une fête au pays à distance : le guide diaspora',
    excerpt: "Mariage au Portugal, baptême en Guadeloupe, anniversaire à Lisbonne : comment trouver et réserver un artiste local sans être sur place.",
    body: `
<p>Vous vivez en France et votre famille est au Portugal, aux Antilles ou en Afrique ? Organiser une fête là-bas depuis Paris ou Lyon relève souvent du casse-tête : trouver des prestataires de confiance, se faire comprendre, payer à distance. Voici nos conseils.</p>
<h3>1. Commencez par la musique</h3>
<p>Le lieu et le traiteur se trouvent souvent via la famille. Les artistes, eux, se réservent tôt et sont plus difficiles à évaluer sans les voir. Sur Wimbo, chaque profil propose photos, vidéos et avis vérifiés : vous pouvez comparer depuis votre canapé.</p>
<h3>2. Pensez au mélange des cultures</h3>
<p>Un mariage franco-portugais ou franco-antillais réunit souvent plusieurs générations et plusieurs langues. Cherchez un artiste capable de passer de la variété française à la kizomba, au fado ou au zouk. Précisez-le dans votre demande de devis.</p>
<h3>3. Échangez en visio avant de réserver</h3>
<p>Un appel de 20 minutes avec l'artiste permet de valider le répertoire, les horaires et la logistique. La messagerie Wimbo conserve tous vos échanges au même endroit.</p>
<h3>4. Sécurisez le paiement</h3>
<p>Évitez les virements à l'étranger sans garantie. Avec Wimbo, votre acompte est sécurisé et le solde n'est versé à l'artiste qu'après la prestation.</p>
<h3>5. Désignez un relais sur place</h3>
<p>Un cousin ou une amie peut accueillir l'artiste le jour J. Partagez-lui le récapitulatif de réservation : horaires, contact, plan d'accès.</p>`
  },
  {
    slug: "prix-dj-mariage", cat: "Mariage", date: "2026-11-10", read: "6 min", cover: P.djDecks,
    title: "Prix DJ mariage : combien prévoir et comment comparer les devis",
    excerpt: "Combien coûte un DJ pour un mariage ? Fourchettes indicatives, ce qui fait varier le prix, ce qui est inclus et les questions à poser avant de réserver.",
    body: "<p><strong>En bref :</strong> à titre indicatif, un DJ pour une soirée de mariage coûte en général de 600 à 1 500 €, selon la durée, la date, le déplacement et le matériel fourni. Ce prix comprend le plus souvent la sonorisation, un éclairage de piste et la préparation de la playlist avec vous. Pour comparer, demandez des devis détaillés sur les mêmes horaires et vérifiez ligne par ligne ce qui est inclus.</p>\n<h3>Combien coûte un DJ pour un mariage ?</h3>\n<p>Il n'existe pas de tarif unique : chaque DJ fixe son prix, et seul le devis fait foi. Le bas de la fourchette correspond plutôt à une soirée de quelques heures, en semaine ou hors saison, avec un matériel standard. Le haut de la fourchette, à un samedi de juin, une fête qui dure jusqu'au petit matin, un éclairage plus travaillé ou un DJ présent dès le cocktail. Pour situer ces montants par rapport aux autres formules (solo, trio, groupe), consultez notre <a href=\"/blog/prix-musicien-evenement\">guide des prix des musiciens</a>.</p>\n<p>Vous hésitez entre un DJ et un groupe live ? Notre <a href=\"/blog/choisir-musicien-mariage\">guide de la musique de mariage</a> vous aide à choisir moment par moment. Une formule courante : un musicien pour la cérémonie et le cocktail, puis un DJ pour la soirée.</p>\n<h3>Ce qui fait varier le prix</h3>\n<ul><li><strong>La durée</strong> : soirée dansante seule, ou présence dès le cocktail et pendant le dîner. Les heures au-delà de l'horaire prévu sont souvent facturées en supplément.</li><li><strong>La date</strong> : les samedis de mai à septembre sont les plus demandés, donc les plus chers.</li><li><strong>Le déplacement</strong> : distance, péages, et parfois hébergement si le lieu est loin ou si la soirée finit très tard.</li><li><strong>Le matériel</strong> : puissance de la sono selon le nombre d'invités, jeux de lumière, deuxième installation pour une cérémonie laïque ou un cocktail dans un autre espace.</li><li><strong>La personnalisation</strong> : playlist sur mesure, mélange de styles (variété française, afrobeats, kizomba, zouk…), animation au micro, ouverture de bal préparée.</li></ul>\n<h3>Qu'est-ce qui est inclus dans le prix d'un DJ ?</h3>\n<p>Un devis de DJ de mariage comprend en général :</p>\n<ul><li>la prestation sur la durée convenue, pauses comprises ;</li><li>une sonorisation adaptée à la salle et au nombre d'invités ;</li><li>un éclairage d'ambiance pour la piste de danse ;</li><li>un micro pour les discours et les annonces ;</li><li>un échange avant le jour J pour préparer la playlist, les morceaux incontournables et ceux à éviter ;</li><li>l'installation et le démontage.</li></ul>\n<p>Rien de tout cela n'est automatique : certains DJ proposent l'éclairage ou le micro sans fil en option. Vérifiez chaque ligne et demandez ce qui se passe si la fête se prolonge.</p>\n<h3>Comment comparer les devis de DJ ?</h3>\n<p>Deux devis ne se comparent que s'ils portent sur la même chose. Donnez à chaque DJ les mêmes informations (horaires, lieu, nombre d'invités, ambiance souhaitée), puis regardez :</p>\n<ul><li><strong>Le prix par heure de musique</strong>, une fois l'installation et les pauses déduites.</li><li><strong>Le matériel listé</strong> : un devis moins cher sans lumières ni micro peut finir par coûter plus cher.</li><li><strong>Les frais annexes</strong> : déplacement, heures supplémentaires, repas du DJ.</li><li><strong>Les cotisations sociales</strong> : en France, engager directement un artiste implique une déclaration au <a href=\"/blog/guso-tout-comprendre\">GUSO</a>. Sur Wimbo, nous la préparons pour vous et les cotisations figurent dans le devis.</li></ul>\n<p>Regardez aussi les vidéos et les avis vérifiés de chaque profil : la façon dont un DJ lit sa piste de danse compte autant que son tarif.</p>\n<h3>Les questions à poser avant de réserver</h3>\n<ul><li>Combien de mariages avez-vous déjà animés, et avez-vous une vidéo de soirée à me montrer ?</li><li>Comment construit-on la playlist ensemble ? Acceptez-vous une liste de morceaux à ne pas passer ?</li><li>Savez-vous faire danser plusieurs générations et mélanger les cultures de nos deux familles ?</li><li>Quel est le tarif d'une heure supplémentaire si la fête continue ?</li><li>Que se passe-t-il si vous avez un empêchement le jour J ?</li><li>De quoi avez-vous besoin sur place : espace, prises électriques, repas, horaires d'installation ?</li></ul>\n<h3>Quand réserver son DJ de mariage ?</h3>\n<p>Pour un samedi de haute saison, les DJ les plus demandés partent tôt : réserver 8 à 12 mois à l'avance n'a rien d'excessif. Hors saison ou en semaine, quelques mois suffisent souvent. Sur Wimbo, vous bloquez la date avec un acompte de 30 % qui reste sécurisé, et le solde n'est réglé qu'après la prestation.</p>\n<p>Envie de comparer dès maintenant ? Parcourez les <a href=\"/instruments/deejay\">DJ disponibles sur Wimbo</a>, regardez leurs vidéos et envoyez vos demandes de devis : les artistes répondent en général sous 2 à 3 heures. À vous ensuite de choisir celui qui vous ressemble.</p>"
  },
  {
    slug: "musique-bapteme", cat: "Famille", date: "2026-10-28", read: "6 min", cover: P.familyHands,
    title: "Musique baptême : quels artistes pour la cérémonie et la fête ?",
    excerpt: "Cérémonie religieuse ou laïque, apéritif, repas : quelle musique pour un baptême, quelle formation choisir, quel budget prévoir et nos conseils pratiques.",
    body: "<p><strong>En bref :</strong> pour la musique d'un baptême, une voix accompagnée d'une guitare, d'un orgue ou d'une harpe suffit souvent pour la cérémonie, puis un duo ou un petit groupe prend le relais pour l'apéritif et le repas. À titre indicatif, comptez de 400 à 900 € pour un musicien solo et de 900 à 1 800 € pour un duo ou un trio. À l'église, validez toujours le choix des morceaux avec la paroisse.</p>\n<h3>Quelle musique pour un baptême religieux ?</h3>\n<p>À l'église, la musique accompagne l'entrée de la famille, quelques temps forts de la célébration et la sortie. Le choix se fait en accord avec la paroisse : certaines privilégient les chants liturgiques, d'autres acceptent des pièces classiques ou des chansons plus personnelles. Contactez tôt le prêtre, le pasteur ou l'équipe d'animation : ils vous diront aussi s'il y a un orgue et un organiste disponibles.</p>\n<p>Les grands classiques fonctionnent toujours : l'« Ave Maria » de Schubert ou de Gounod, le « Canon » de Pachelbel, « Jésus que ma joie demeure » de Bach, ou « Hallelujah » de Leonard Cohen pour une touche plus contemporaine, si la paroisse l'accepte. Dans une église à belle acoustique, une voix seule avec un instrument suffit à créer l'émotion.</p>\n<h3>Et pour une cérémonie laïque ?</h3>\n<p>Un baptême civil (ou républicain) en mairie, ou une cérémonie laïque dans un jardin ou une salle, laisse plus de liberté. Vous pouvez choisir des chansons qui ont du sens pour votre famille : une chanson française douce, une berceuse revisitée, un morceau de la culture des grands-parents. Prévoyez trois moments : l'entrée, un ou deux morceaux entre les textes et les engagements du parrain et de la marraine, puis la sortie.</p>\n<p>Quelques idées : « Here Comes the Sun » des Beatles, « What a Wonderful World » de Louis Armstrong, « La vie en rose » d'Édith Piaf ou « Sodade » de Cesária Évora. En mairie, la cérémonie est courte et la salle souvent petite : une formule acoustique est idéale, et renseignez-vous à l'avance sur ce qui est autorisé.</p>\n<h3>Apéritif et repas : une ambiance conviviale</h3>\n<p>Après la cérémonie, la musique change de rôle : elle accompagne les retrouvailles sans couvrir les conversations. Un duo guitare-voix, un trio jazz ou bossa nova, un pianiste si le lieu a un piano : l'objectif est un fond musical vivant, à volume modéré. Pensez aussi aux enfants, souvent nombreux : quelques chansons qu'ils connaissent font toujours leur effet au moment du dessert.</p>\n<p>Si la fête se prolonge en soirée, un petit groupe ou un DJ peut prendre le relais et faire danser toutes les générations.</p>\n<h3>Quelle formation choisir ?</h3>\n<ul><li><strong>Voix seule</strong>, a cappella ou avec l'orgue de l'église : sobre et très émouvante dans un lieu à belle acoustique.</li><li><strong>Guitare et voix</strong> : la formule la plus polyvalente, qui passe de la cérémonie à l'apéritif sans changer d'artiste.</li><li><strong>Harpe</strong> : douce et élégante, parfaite pour la cérémonie ou un apéritif au calme. Découvrez les <a href=\"/instruments/harpiste\">harpistes sur Wimbo</a>.</li><li><strong>Petite formation</strong> (duo ou trio) : voix, guitare ou piano, parfois violon ou saxophone, pour enchaîner cérémonie, apéritif et repas.</li></ul>\n<h3>Quel budget prévoir pour la musique d'un baptême ?</h3>\n<p>À titre indicatif, comptez de 400 à 900 € pour un musicien ou un chanteur solo, de 900 à 1 800 € pour un duo ou un trio, et de 1 500 à 3 500 € pour un groupe complet si vous prévoyez une soirée dansante. Le prix dépend surtout de la durée (cérémonie seule ou journée complète), de la date, du déplacement et du matériel. Garder le même artiste pour la cérémonie et l'apéritif peut revenir moins cher que deux prestations séparées, et simplifie l'organisation.</p>\n<h3>Nos conseils pratiques</h3>\n<ul><li><strong>Réservez tôt</strong> si le baptême a lieu un week-end de printemps ou d'été, période chargée avec les communions et les mariages.</li><li><strong>Partagez les contraintes du lieu</strong> : horaires de la paroisse, accès à l'électricité, temps d'installation, espace disponible.</li><li><strong>Envoyez votre liste de morceaux</strong> quelques semaines à l'avance, surtout pour une chanson qui n'est pas encore au répertoire de l'artiste.</li><li><strong>Anticipez l'administratif</strong> : en France, engager directement un artiste implique une déclaration au <a href=\"/blog/guso-tout-comprendre\">GUSO</a>, que Wimbo prépare pour vous. Pour un baptême au pays, les formalités dépendent du pays et du statut de l'artiste : lisez notre <a href=\"/blog/organiser-fete-au-pays\">guide de la fête au pays</a>.</li></ul>\n<p>Pour trouver la formule qui vous ressemble, parcourez les artistes disponibles pour les <a href=\"/evenements/bapteme-communion\">baptêmes et communions</a> sur Wimbo : regardez leurs vidéos, comparez les profils vérifiés et envoyez vos demandes de devis en quelques clics.</p>"
  },
  {
    slug: "mariage-kizomba-semba-zouk", cat: "Diaspora", date: "2026-11-06", read: "6 min", cover: P.dancers,
    title: "Musique de mariage kizomba, semba, zouk : le guide du mariage mixte",
    excerpt: "Mariage franco-angolais, franco-capverdien ou franco-antillais : kizomba, semba, zouk, kompa, groupe ou DJ, et une playlist bâtie avec les deux familles.",
    body: "<p><strong>En bref :</strong> Pour un mariage franco-angolais, franco-capverdien ou franco-antillais, choisissez un groupe ou un DJ qui maîtrise vraiment les rythmes de la famille (kizomba, semba, coladeira, funaná, zouk, kompa) et les classiques que connaissent les invités français. Construisez la playlist avec les deux familles, alternez les styles par blocs et validez le répertoire avec l'artiste avant de réserver.</p>\n<p>Dans un mariage mixte, la piste de danse est souvent le premier vrai lieu de rencontre entre les deux familles. Les tantes qui dansent le semba, les cousins qui ne jurent que par le zouk, les amis de fac qui attendent leurs tubes des années 2000 : chacun doit y trouver sa place. Voici comment vous y prendre.</p>\n<h3>Kizomba, semba, zouk, kompa : qui danse quoi ?</h3>\n<p>Pour une oreille non avertie, ces styles se ressemblent. Pour les familles, pas du tout. Quelques repères pour en parler avec votre artiste :</p>\n<ul><li><strong>Semba</strong> (Angola) : le rythme festif historique, qui se danse en couple avec des pas joueurs. Un classique : « Mona Ki Ngi Xica » de Bonga.</li><li><strong>Kizomba</strong> (Angola) : née dans les années 1980, plus lente et plus sensuelle, parfaite pour faire danser les couples. « Única Mulher » d'Anselmo Ralph reste un incontournable.</li><li><strong>Coladeira et funaná</strong> (Cap-Vert) : la coladeira est chaloupée, le funaná, porté par l'accordéon et le ferrinho, est rapide et très festif. La morna, plus lente, accompagne bien le dîner, par exemple avec « Sodade » de Cesária Évora.</li><li><strong>Zouk</strong> (Guadeloupe, Martinique) : popularisé par Kassav', dont « Zouk la sé sèl médikaman nou ni » fait encore se lever toutes les tables.</li><li><strong>Kompa</strong> (Haïti) : proche cousin du zouk, incontournable des soirées antillaises et haïtiennes, avec des standards comme « New York City » de Tabou Combo.</li></ul>\n<h3>Groupe live ou DJ : que choisir ?</h3>\n<p>Un <strong>groupe live</strong> apporte une énergie incomparable : un semba ou un funaná joué avec de vraies percussions et un accordéon, ça ne s'oublie pas. Son répertoire est en revanche plus limité, et il faut prévoir l'espace, le temps d'installation et un budget plus élevé : à titre indicatif, de 1 500 à 3 500 € pour un groupe complet.</p>\n<p>Un <strong>DJ</strong> passe en une seconde de la kizomba à la variété française, puis au kompa, et répond aux demandes des invités. Comptez, à titre indicatif, de 600 à 1 500 € pour une soirée de mariage, selon la durée, la date, le déplacement et le matériel.</p>\n<p>Une formule mixte est aussi possible : un groupe ou un chanteur pour l'ouverture du bal et une heure de live, puis un DJ jusqu'au bout de la nuit. Sur Wimbo, comparez les profils <a href=\"/genres/kizomba-semba\">kizomba et semba</a> ou <a href=\"/genres/zouk-kompa\">zouk et kompa</a>, avec leurs vidéos et leurs avis.</p>\n<h3>Comment mélanger les cultures sans perdre personne ?</h3>\n<p>Le secret : alterner par <strong>blocs de 20 à 30 minutes</strong> plutôt que de changer de style à chaque chanson. Un bloc kizomba et semba, un bloc de tubes français que tout le monde chante, un bloc zouk ou funaná, puis on recommence en montant le tempo.</p>\n<ul><li><strong>Ouvrez large</strong> : les premiers titres doivent parler aux deux familles et à toutes les générations.</li><li><strong>Pensez aux aînés</strong> : un semba ou une coladeira à l'ancienne en début de soirée fait souvent venir les grands-parents sur la piste.</li><li><strong>Proposez une initiation</strong> : quelques minutes de pas de base de kizomba, menées par l'artiste ou par un proche bon danseur, mettent tout le monde à l'aise. Demandez à l'artiste s'il le propose.</li><li><strong>Soignez la première danse</strong> : une kizomba lente fonctionne très bien, à condition de la répéter avant le jour J.</li></ul>\n<h3>Construire la playlist avec les deux familles</h3>\n<p>Plutôt que de laisser chaque famille négocier avec l'artiste, centralisez tout dans un document partagé. Demandez à chaque côté ses <strong>dix incontournables</strong>, les titres liés aux moments clés (entrée des mariés, première danse, gâteau, dernière chanson) et une courte liste de morceaux à éviter.</p>\n<p>Certaines familles tiennent aussi à un moment traditionnel : un chant pour l'entrée de la mariée, une danse avec les parents, un hommage à ceux qui sont restés au pays. Prévenez l'artiste tôt : la plupart acceptent d'apprendre quelques titres avec quelques semaines d'avance. Envoyez la version finale un mois avant le mariage, puis laissez le DJ ou le groupe sentir la salle.</p>\n<h3>Les bonnes questions à poser avant de réserver</h3>\n<ul><li>Jouez-vous vraiment ces styles toute une soirée, ou seulement quelques titres ? Demandez une vidéo récente filmée en situation.</li><li>Pouvez-vous chanter ou faire les annonces en portugais, en créole et en français ?</li><li>Combien de temps dure la prestation, avec quelles pauses ?</li><li>La sono, les lumières et le micro pour les discours sont-ils inclus ?</li><li>Acceptez-vous une playlist fournie par les familles et des demandes en direct ?</li></ul>\n<p>Sur Wimbo, chaque profil est vérifié, les artistes répondent en général sous 2 à 3 heures et un acompte de 30 %, sécurisé, suffit à bloquer la date ; le solde est réglé après la fête. Pour un mariage en France, nous préparons aussi la <a href=\"/blog/guso-tout-comprendre\">déclaration GUSO</a>. Les samedis d'été partent vite : visez 8 à 12 mois à l'avance pour un artiste très demandé.</p>\n<p>Vous préparez un mariage aux couleurs des deux familles ? <a href=\"/recherche\">Cherchez votre artiste sur Wimbo</a> par style et par ville, et demandez vos devis gratuitement. La musique qui rapproche, les émotions qui restent.</p>"
  },
  {
    slug: "fete-cap-vert-angola-a-distance", cat: "Diaspora", date: "2026-10-22", read: "6 min", cover: P.partyOutdoor,
    title: "Organiser une fête au Cap-Vert ou en Angola depuis la France",
    excerpt: "Baptême à Praia, mariage à Luanda : trouver un artiste local à distance, vérifier son matériel, payer sans risque et choisir la bonne date depuis la France.",
    body: "<p><strong>En bref :</strong> Pour organiser une fête au Cap-Vert ou en Angola depuis la France ou le Portugal, réservez l'artiste quatre à six mois à l'avance (davantage pour l'été et les fêtes de fin d'année), validez répertoire et matériel lors d'un appel vidéo et vérifiez que le lieu dispose d'une électricité fiable. Payez via une plateforme qui sécurise l'acompte et confiez le jour J à une personne de confiance sur place.</p>\n<p>Un baptême à Praia, les 80 ans d'une grand-mère à Mindelo, un mariage à Luanda : la famille est là-bas, vous êtes ici, et c'est souvent à vous de tout organiser. Nous avons déjà posé les <a href=\"/blog/organiser-fete-au-pays\">bases d'une fête au pays organisée à distance</a> ; voici les points propres au Cap-Vert et à l'Angola.</p>\n<h3>Quelle période choisir au Cap-Vert ou en Angola ?</h3>\n<p>Au <strong>Cap-Vert</strong>, il pleut peu, et surtout entre août et octobre : pour une fête en plein air, le reste de l'année est plus sûr. En <strong>Angola</strong>, le climat varie selon les régions. À Luanda, la saison sèche et plus fraîche, le cacimbo, va à peu près de mai à septembre, tandis que les pluies tombent surtout entre novembre et avril.</p>\n<p>Pensez aussi au calendrier de la diaspora : l'été et les fêtes de fin d'année sont les moments où beaucoup de familles rentrent, et où les artistes sont les plus sollicités. Pour ces dates, réservez tôt. Côté appels, attention au décalage horaire : le Cap-Vert a deux heures de moins que Paris en hiver (trois en été), et l'Angola est à l'heure de Paris en hiver (une heure de moins en été).</p>\n<h3>Trouver un artiste local sans être sur place</h3>\n<p>Cherchez d'abord un artiste <strong>basé sur place</strong> : il connaît les lieux, le public et les usages, et vous évitez billets d'avion et hébergement. Au Cap-Vert, précisez bien l'île : faire venir un groupe de Santiago à São Vicente implique un vol ou un bateau, et souvent une nuit d'hôtel. En Angola, les distances entre Luanda et les provinces comptent aussi.</p>\n<p>Selon la ville, le choix d'artistes locaux peut être limité. Un artiste de la diaspora installé en France ou au Portugal peut alors faire le voyage : prévoyez transport, hébergement et formalités d'entrée, qui dépendent du pays et de la nationalité de l'artiste. La page <a href=\"/evenements/evenement-diaspora\">Fête au pays</a> rassemble les artistes qui proposent ce type d'événement.</p>\n<h3>Que vérifier lors de l'appel vidéo ?</h3>\n<p>Un appel vidéo avant de réserver vaut tous les messages écrits. Allez au-delà du répertoire :</p>\n<ul><li>Demandez à l'artiste de <strong>montrer son matériel</strong> à l'écran : sono, micros, câbles, lumières. Est-il à lui, loué, inclus dans le devis ?</li><li>Faites-vous préciser la <strong>puissance électrique</strong> nécessaire et le nombre de prises.</li><li>Demandez une vidéo récente filmée lors d'une vraie fête, pas seulement en studio.</li><li>Vérifiez le nombre de musiciens, la durée, les pauses et l'heure d'installation.</li><li>Parlez du plan B : pluie, vent, coupure de courant, empêchement de dernière minute.</li><li>Convenez de la langue des annonces : portugais, créole, français, ou un peu des trois.</li></ul>\n<h3>Payer à distance sans prendre de risque</h3>\n<p>Le piège classique : virer la totalité du cachet à l'avance, sur un compte personnel ou par un service de transfert d'argent, à quelqu'un que vous n'avez jamais vu jouer. Trois règles :</p>\n<ul><li>Ne versez qu'un <strong>acompte</strong> pour bloquer la date, jamais la totalité avant la fête.</li><li>Faites tout figurer par écrit : devis détaillé, horaires, matériel, frais de déplacement.</li><li>Payez dans un cadre qui vous protège : un paiement hors plateforme ne bénéficie d'aucune garantie.</li></ul>\n<p>Sur Wimbo, l'acompte de 30 % reste sécurisé et le solde n'est versé à l'artiste qu'après la prestation, une fois que vous l'avez confirmée.</p>\n<h3>Votre relais sur place : une vraie mission</h3>\n<p>Un cousin, une tante ou une amie de confiance sera vos yeux et vos oreilles. Confiez-lui une mission claire :</p>\n<ul><li>Visiter le lieu en amont et vérifier l'électricité : prises disponibles, stabilité du courant, distance jusqu'à l'espace musique.</li><li>Si le courant n'est pas fiable (terrain familial, plage, jardin), louer un <strong>groupe électrogène</strong> adapté à la puissance demandée par l'artiste, placé loin de la piste, avec le carburant nécessaire.</li><li>Prévoir un abri pour protéger le matériel du soleil, du vent ou d'une averse.</li><li>Appeler l'artiste deux jours avant pour confirmer l'heure et l'accès.</li><li>L'accueillir le jour J, puis vous dire que tout s'est bien passé.</li></ul>\n<p>Le site Wimbo existe aussi en portugais : pratique pour la famille restée au pays.</p>\n<h3>Ce que Wimbo peut faire à l'étranger, et ce qu'il ne fait pas</h3>\n<p>Où que soit votre fête, Wimbo vous permet de comparer des profils vérifiés, de recevoir des devis en général sous 2 à 3 heures, d'échanger avec l'artiste dans la messagerie et de payer de façon sécurisée. Tout est détaillé sur la page <a href=\"/comment-ca-marche\">Comment ça marche</a>.</p>\n<p>En revanche, la déclaration GUSO que nous préparons pour les événements en France ne s'applique ni au Cap-Vert ni en Angola : sur place, les formalités dépendent du pays et du statut de l'artiste. Posez la question dès la demande de devis, et renseignez-vous auprès du lieu ou de la commune pour une fête en plein air. Enfin, Wimbo ne choisit pas à votre place et ne réserve ni le lieu, ni le traiteur, ni les billets d'avion : c'est vous qui gardez la main.</p>\n<p>La famille vous attend pour faire la fête ? <a href=\"/recherche\">Trouvez votre artiste sur Wimbo</a> et demandez vos devis gratuitement, depuis Paris, Lyon ou Lisbonne.</p>"
  },
  {
    slug: "groupe-soiree-entreprise", cat: "Entreprise", date: "2026-11-03", read: "7 min", cover: P.gala,
    title: "Groupe ou DJ pour une soirée d'entreprise : comment choisir ?",
    excerpt: "Gala, séminaire, fête de fin d'année : groupe, DJ ou musiciens, formules par moment, technique, budget, délais et GUSO pour réussir votre soirée d'entreprise.",
    body: "<p><strong>En bref :</strong> pour une soirée d'entreprise, choisissez un groupe si vous voulez un vrai temps fort live et une piste de danse pleine, un DJ si vous cherchez de la souplesse et un budget maîtrisé, et des musiciens acoustiques pour le cocktail et le dîner. Ces formules se combinent très bien : musiciens pour l'accueil, groupe ou DJ pour la fin de soirée. Pour décembre, réservez dès la rentrée.</p>\n<h3>Groupe, DJ ou musiciens : que choisir pour votre soirée ?</h3>\n<p>Tout dépend de l'ambiance recherchée et du profil de vos invités. Un <strong>groupe live</strong> crée un spectacle : on regarde, on applaudit, puis on danse. C'est idéal pour un gala ou une fête de fin d'année qui doit marquer les esprits, surtout avec un <a href=\"/genres/reprises\">groupe de reprises</a> au répertoire fédérateur, des années 80 aux tubes actuels.</p>\n<p>Un <strong>DJ</strong> s'adapte en temps réel à la salle, joue sans interruption et demande moins de place. Les <strong>musiciens acoustiques</strong> (duo jazz, piano-voix, saxophone, trio bossa nova) habillent le cocktail et le dîner sans couvrir les conversations. Enfin, la <strong>formule mixte</strong> est courante : un groupe pour un ou deux sets, puis un DJ jusqu'à la fin.</p>\n<h3>Cocktail, dîner, soirée dansante : une formule par moment</h3>\n<ul><li><strong>Cocktail d'accueil</strong> (1 h à 2 h) : une formule légère et mobile, à volume modéré. Vos invités viennent aussi pour échanger entre collègues ou avec des clients.</li><li><strong>Dîner ou gala</strong> (environ 2 h) : une musique d'ambiance entre les plats, avec des coupures prévues pour les discours, la remise de trophées ou la vidéo de l'année.</li><li><strong>Soirée dansante</strong> (2 h à 4 h) : un groupe joue en général par sets de 45 minutes à 1 heure, entrecoupés de pauses ; un DJ peut enchaîner sans arrêt.</li><li><strong>Séminaire</strong> : l'animation musicale d'un séminaire peut ouvrir la plénière, rythmer une pause ou animer la soirée. Certains artistes proposent aussi des ateliers participatifs (percussions, chant) : précisez-le dans votre demande.</li></ul>\n<p>Pensez aussi aux heures supplémentaires : demandez dès le devis le tarif d'une heure de plus, au cas où la soirée se prolonge.</p>\n<h3>Son et technique : les questions à poser au lieu</h3>\n<p>Avant de réserver, contactez le responsable technique de la salle ou de l'hôtel et transmettez-lui la fiche technique de l'artiste. Vérifiez notamment :</p>\n<ul><li>l'espace disponible pour la scène : un groupe de cinq musiciens prend bien plus de place qu'un DJ ;</li><li>les prises électriques à proximité et la puissance disponible ;</li><li>la présence d'un limiteur de son, fréquent en ville : une batterie acoustique s'y adapte plus difficilement qu'un DJ ;</li><li>les horaires d'installation et de balances, à caler avant l'arrivée des invités ;</li><li>l'accès pour décharger le matériel, le parking et une loge pour les artistes ;</li><li>un micro pour les discours de la direction : l'artiste peut-il le fournir ?</li></ul>\n<h3>Quel budget prévoir pour une soirée d'entreprise ?</h3>\n<p>À titre indicatif, comptez de 400 à 900 € pour un musicien solo, de 900 à 1 800 € pour un duo ou un trio, de 1 500 à 3 500 € pour un groupe complet et de 600 à 1 500 € pour un DJ sur une soirée. Ces montants varient selon la durée, la date, le déplacement et le matériel : une grande salle demande plus de sonorisation et de lumières. Pour couvrir plusieurs moments, demandez une formule globale au même artiste : certains groupes proposent une version acoustique pour le cocktail avant de passer à la formation complète. Notre <a href=\"/blog/prix-musicien-evenement\">guide des prix</a> détaille les critères qui font varier un devis.</p>\n<h3>Fin d'année : réservez dès la rentrée</h3>\n<p>Décembre est la période la plus demandée de l'année pour les soirées d'entreprise : les jeudis et vendredis partent vite, et les artistes les plus sollicités sont réservés dès septembre ou octobre. Idéalement, comptez 3 à 6 mois d'avance pour une fête de fin d'année, davantage pour un gala avec un groupe complet. Prévoyez aussi le temps de validation interne : budget, bon de commande, service achats.</p>\n<p>Vous vous y prenez tard ? Élargissez vos dates (un mardi ou un mercredi), optez pour une formule plus légère, ou transformez votre soirée en soirée des vœux en janvier, quand le choix est souvent plus large.</p>\n<h3>Facturation et GUSO : ce que votre entreprise doit savoir</h3>\n<p>En France, un artiste qui se produit est présumé salarié. Si votre entreprise l'engage directement et que son activité principale n'est pas le spectacle, elle doit passer par le <strong>GUSO</strong> (Guichet unique du spectacle occasionnel), comme un particulier, dans la limite de 6 représentations par an. Une seule déclaration vaut contrat de travail et règle les cotisations sociales. Prévenez votre service comptable : il s'agit d'un salaire et de cotisations, pas d'une facture fournisseur.</p>\n<p>Si l'artiste passe par une structure (association, société de production), c'est elle qui l'emploie et qui vous facture : pas de GUSO de votre côté. Sur Wimbo, indiquez les coordonnées de votre société : le devis est établi à son nom et intègre les cotisations GUSO quand elles s'appliquent ; nous préparons la déclaration, vous la validez. Le paiement suit le même principe que pour un particulier : un acompte de 30 % sécurisé, le solde après la prestation. Pour un événement hors de France, les formalités dépendent du pays et du statut de l'artiste. Tout est détaillé dans <a href=\"/blog/guso-tout-comprendre\">notre article sur le GUSO</a>.</p>\n<p>Prêt à trouver l'artiste de votre prochaine soirée ? Comparez les profils vérifiés, écoutez les extraits et envoyez vos demandes de devis depuis notre page <a href=\"/evenements/entreprise\">Événement d'entreprise</a> : les artistes répondent en général sous 2 à 3 heures.</p>"
  },
  {
    slug: "musique-ceremonie-laique", cat: "Mariage", date: "2026-10-18", read: "6 min", cover: P.weddingBride,
    title: "Musique de cérémonie laïque : moments clés et idées de chansons",
    excerpt: "Arrivée des invités, entrée, lectures, vœux, sortie : quelle musique pour votre cérémonie laïque, quelle formation choisir et 16 idées de morceaux à écouter.",
    body: "<p><strong>En bref :</strong> une cérémonie laïque compte cinq moments musicaux : l'arrivée des invités, l'entrée, les lectures, l'échange des vœux et la sortie. Une formation acoustique (voix-guitare, quatuor à cordes, harpe ou piano) convient à la plupart des lieux, avec un morceau choisi pour chaque temps fort. En extérieur, prévoyez de l'ombre, une solution électrique et un plan B en cas de pluie.</p>\n<p>Contrairement au mariage civil, la cérémonie laïque n'a pas de déroulé imposé : vous choisissez le lieu, la durée et chaque morceau. C'est une vraie liberté, à condition de bien préparer la musique avec vos artistes.</p>\n<h3>Quels sont les moments musicaux d'une cérémonie laïque ?</h3>\n<ul><li><strong>L'arrivée des invités</strong> (15 à 30 minutes) : une musique douce pendant que chacun s'installe. Elle donne le ton et évite les silences gênants.</li><li><strong>L'entrée</strong> : celle de l'officiant, du cortège puis des mariés. C'est le moment le plus attendu : choisissez un morceau qui vous émeut, les musiciens l'adapteront à la longueur de l'allée.</li><li><strong>Les lectures et les discours</strong> : de courts interludes entre les prises de parole laissent l'émotion retomber et relancent l'attention.</li><li><strong>L'échange des vœux</strong> : silence pendant les paroles, puis un morceau pour l'échange des alliances ou un rituel symbolique (sable, ruban, bougie).</li><li><strong>La sortie</strong> : un titre joyeux et rythmé, qui donne le signal de la fête.</li></ul>\n<h3>Quelle formation choisir ?</h3>\n<ul><li><strong>Voix-guitare</strong> : la formule la plus souple. Elle s'adapte à tous les répertoires, de la chanson française à la pop, et se contente d'une petite sono sur batterie.</li><li><strong>Quatuor à cordes</strong> : élégant et solennel, il joue aussi bien Pachelbel que des arrangements de titres pop. Prévoyez quatre chaises sans accoudoirs et un sol plat.</li><li><strong>Harpe</strong> : un son aérien, presque magique. Un <a href=\"/instruments/harpiste\">harpiste</a> a besoin d'un accès facile pour l'instrument, d'un sol stable et d'ombre.</li><li><strong>Piano</strong> : intense et intemporel, mais il faut un piano sur place ou un piano numérique, donc de l'électricité.</li></ul>\n<p>Pour l'émotion des vœux, une voix fait souvent la différence. Pour une ambiance plus classique, les cordes et la harpe créent une atmosphère plus solennelle.</p>\n<h3>16 idées de morceaux pour votre cérémonie laïque</h3>\n<ul><li><strong>Arrivée des invités</strong> : « La Vie en rose » (Édith Piaf), « Can't Help Falling in Love » (Elvis Presley), « Gymnopédie n° 1 » (Erik Satie).</li><li><strong>Entrée</strong> : « Canon en ré » (Johann Pachelbel), « A Thousand Years » (Christina Perri), « Perfect » (Ed Sheeran), « Comptine d'un autre été, l'après-midi » (Yann Tiersen).</li><li><strong>Lectures</strong> : « Clair de lune » (Claude Debussy), « Nuvole bianche » (Ludovico Einaudi), « River Flows in You » (Yiruma).</li><li><strong>Vœux et alliances</strong> : « L'Hymne à l'amour » (Édith Piaf), « All of Me » (John Legend), « Je te promets » (Johnny Hallyday).</li><li><strong>Sortie</strong> : « Signed, Sealed, Delivered I'm Yours » (Stevie Wonder), « Viva la Vida » (Coldplay), « Marry You » (Bruno Mars).</li></ul>\n<p>Vous avez des racines au Portugal, au Cap-Vert ou aux Antilles ? Un fado instrumental, une morna ou une biguine peuvent rendre hommage à votre famille. Envoyez votre liste aux musiciens un à deux mois avant : certains titres demandent un arrangement spécial.</p>\n<h3>Cérémonie en extérieur : les contraintes à anticiper</h3>\n<ul><li><strong>L'électricité</strong> : une prise à proximité ou une sono sur batterie. Renseignez-vous auprès du lieu.</li><li><strong>Le son</strong> : en plein air, la voix porte mal. Prévoyez un micro pour l'officiant et les lecteurs : beaucoup de musiciens peuvent le fournir, posez la question.</li><li><strong>Le soleil et l'humidité</strong> : les instruments en bois se désaccordent et peuvent s'abîmer. Une tonnelle ou un coin d'ombre protège musiciens et instruments.</li><li><strong>Le vent</strong> : il emporte les partitions et souffle dans les micros ; les musiciens expérimentés prévoient pinces et bonnettes.</li><li><strong>La pluie</strong> : définissez un plan B à couvert et indiquez aux artistes le lieu de repli.</li><li><strong>Le terrain</strong> : herbe, gravier ou pente compliquent l'installation d'une harpe ou d'un piano. Précisez la distance entre le parking et l'emplacement de la cérémonie.</li></ul>\n<h3>Budget et derniers conseils</h3>\n<p>À titre indicatif, comptez de 400 à 900 € pour un musicien solo et de 900 à 1 800 € pour un duo ou un trio ; un quatuor peut aller un peu au-delà. Le prix dépend de la durée, de la date, du déplacement et du matériel. Demandez si l'artiste peut enchaîner avec le cocktail : c'est souvent plus simple et plus économique qu'une seconde formation. Pour un événement en France, le devis Wimbo intègre les cotisations GUSO et nous préparons la déclaration.</p>\n<p>Le jour J, désignez une personne (l'officiant ou un témoin) qui donne le signal aux musiciens, et transmettez-leur le déroulé minute par minute. Pour les autres moments de la journée, notre <a href=\"/blog/choisir-musicien-mariage\">guide pour choisir votre artiste de mariage</a> vous aide à composer le reste du programme.</p>\n<p>Envie d'une cérémonie qui vous ressemble ? Parcourez les profils vérifiés de chanteurs, de quatuors et de harpistes sur notre page <a href=\"/evenements/ceremonie\">Cérémonie</a>, écoutez leurs extraits et envoyez vos demandes de devis en quelques clics.</p>"
  },
  {
    slug: "musique-anniversaire-30-40-50-ans", cat: "Anniversaire", date: "2026-10-25", read: "6 min", cover: P.girlsParty,
    title: "Musique d'anniversaire 30, 40, 50 ans : quelle animation choisir ?",
    excerpt: "Anniversaire de 30, 40, 50, 60 ou 70 ans : quelle musique selon l'âge et le lieu, live ou DJ, budget indicatif et conseils pour une fête surprise.",
    body: "<p><strong>En bref :</strong> pour un anniversaire de 30, 40, 50 ans ou plus, partez de la personne fêtée et du lieu. Un musicien solo ou un duo suffit pour un dîner à la maison, un groupe ou un DJ fera danser une salle louée, et la formule mixte réunit souvent le meilleur des deux. Le fil rouge qui marche à tous les âges : les chansons de ses 20 ans.</p>\n<h3>Quelle musique pour un anniversaire de 30, 40, 50 ans ou plus ?</h3>\n<p>Une règle simple fonctionne presque toujours : misez sur les morceaux qui ont marqué la personne fêtée entre 15 et 25 ans. Ce sont ceux qui la font sourire dès les premières notes, et que ses amis connaissent par cœur.</p>\n<ul><li><strong>30 ans</strong> : les tubes des années 2010, pop, électro et afrobeats, à commencer par « Uptown Funk » de Mark Ronson et Bruno Mars.</li><li><strong>40 ans</strong> : les années 2000, entre R&B, pop et rap français, avec des incontournables comme « Crazy in Love » de Beyoncé.</li><li><strong>50 ans</strong> : les années 90, dance, rock et variété, dont l'inusable « Freed from Desire » de Gala.</li><li><strong>60 ans</strong> : les années 80, funk, new wave et variété, avec « Billie Jean » de Michael Jackson en tête.</li><li><strong>70 ans</strong> : les années 70, soul, disco, rock et chanson française, et « September » d'Earth, Wind & Fire pour lancer la piste.</li></ul>\n<p>Ce ne sont que des points de départ : une amatrice de jazz ou de fado mérite une soirée à son image, quel que soit son âge. Demandez à ses proches ce qu'elle ou il écoute vraiment.</p>\n<h3>Dîner à la maison ou salle louée : quelle formule ?</h3>\n<p><strong>Dîner à la maison</strong> (20 à 40 invités) : un guitariste-chanteur, un pianiste (avec son propre clavier si vous n'avez pas de piano) ou un duo acoustique crée une ambiance chaleureuse sans couvrir les conversations. Vérifiez l'espace et l'alimentation électrique indiqués sur le profil de l'artiste, et prévenez vos voisins.</p>\n<p><strong>Salle louée</strong> (50 invités et plus) : place à la danse. Un <a href=\"/genres/reprises\">groupe de reprises</a> ou un DJ avec sa sonorisation et ses lumières transforme une salle des fêtes en piste de danse. Avant de réserver, demandez au loueur l'heure de fin autorisée et s'il impose un limiteur de son, puis transmettez ces informations à l'artiste.</p>\n<h3>Musicien live ou DJ : comment choisir ?</h3>\n<p>Le live apporte l'émotion : une voix qui reprend sa chanson préférée au moment du gâteau, un saxophone qui accompagne son entrée, des musiciens qui échangent avec les invités. Le DJ, lui, dispose d'un catalogue presque illimité, enchaîne les générations sans temps mort et tient facilement jusqu'au bout de la nuit.</p>\n<p>Une solution souvent retenue : la formule mixte, avec un musicien pendant l'apéritif et le dîner, puis un DJ pour la soirée dansante. Certains groupes proposent aussi un DJ set entre leurs passages : posez la question dans votre demande de devis.</p>\n<h3>Mélanger les générations grâce à la playlist de sa jeunesse</h3>\n<p>Un anniversaire réunit souvent enfants, parents, amis d'enfance et collègues. Pour que personne ne reste assis :</p>\n<ul><li><strong>Collectez sa playlist</strong> : demandez à ses frères et sœurs ou à ses amis de toujours 5 à 10 titres qui lui ressemblent, et envoyez la liste à l'artiste 3 à 4 semaines avant. Un morceau hors répertoire demande du travail, parfois un supplément.</li><li><strong>Construisez la soirée par vagues</strong> : ambiance douce pendant le dîner, puis les tubes de sa jeunesse, des titres actuels pour les plus jeunes et un final que tout le monde chante.</li><li><strong>Pensez aux racines familiales</strong> : un passage kizomba, zouk ou fado peut faire lever trois générations d'un coup.</li></ul>\n<h3>Quel budget pour l'animation d'un anniversaire ?</h3>\n<p>À titre indicatif, comptez de 400 à 900 € pour un musicien solo, de 900 à 1 800 € pour un duo ou un trio, de 1 500 à 3 500 € pour un groupe complet et de 600 à 1 500 € pour un DJ en soirée. Le montant dépend de la durée, de la date, du déplacement et du matériel. Un vendredi soir ou un déjeuner du dimanche peut être plus abordable qu'un samedi de juin. Notre <a href=\"/blog/prix-musicien-evenement\">guide des prix</a> détaille ce qui fait varier un devis.</p>\n<p>Sur Wimbo, le devis inclut les cotisations sociales et, pour une fête en France, nous préparons la déclaration GUSO. Vous versez un acompte de 30 %, qui reste sécurisé, et le solde après la prestation.</p>\n<h3>Fête surprise : nos conseils pour garder le secret</h3>\n<ul><li>Donnez à l'artiste le numéro d'un complice, jamais celui de la personne fêtée, et évitez les agendas ou boîtes mail partagés.</li><li>Faites arriver l'artiste avant les invités, le temps qu'il s'installe à l'abri des regards.</li><li>Choisissez avec lui le morceau de l'entrée et un signal clair (un message, une lumière qui s'éteint) pour le lancer au bon moment.</li><li>Prévoyez une marge : si la personne fêtée arrive en retard, l'horaire de l'artiste doit pouvoir glisser. Précisez-le dès la demande de devis.</li></ul>\n<p>Envie de faire de cet anniversaire un souvenir qui reste ? Sur Wimbo, cherchez par ville, date et style, écoutez les extraits, lisez les avis vérifiés et demandez un devis gratuit : les artistes répondent en général sous 2 à 3 heures. <a href=\"/evenements/anniversaire\">Trouver un artiste pour un anniversaire</a>.</p>"
  },
  {
    slug: "musicien-profil-qui-attire-les-demandes", cat: "Artistes", date: "2026-11-13", read: "5 min", cover: P.micBokeh,
    title: "Trouver des dates de musicien : 7 conseils pour votre profil en ligne",
    excerpt: "Musicien, chanteur, groupe ou DJ : 7 conseils concrets pour un profil en ligne qui attire les demandes de devis et vous aide à décrocher plus de contrats.",
    body: "<p><strong>En bref :</strong> pour décrocher plus de contrats, votre profil doit rassurer un client qui ne vous a jamais vu jouer. Des photos soignées, des vidéos de 15 secondes, un répertoire clair, des prix honnêtes, des réponses rapides, des avis et un calendrier à jour font la différence. Sur Wimbo, l'inscription est gratuite et les 150 premiers inscrits sont Premium à vie.</p>\n<h3>Comment avoir plus de contrats quand on est musicien ?</h3>\n<p>Un client qui prépare un mariage ou un anniversaire compare souvent plusieurs profils en quelques minutes, parfois sur son téléphone, le soir. Il cherche des réponses simples : à quoi vous ressemblez sur scène, ce que vous jouez, combien vous coûtez, si vous êtes libre à sa date et s'il peut vous faire confiance. Chacun des 7 conseils ci-dessous répond à l'une de ces questions.</p>\n<h3>Conseils 1 et 2 : des photos et des vidéos qui donnent envie</h3>\n<p><strong>1. Des photos en situation.</strong> Une photo nette en concert, une en formation complète et un portrait bien éclairé valent mieux que vingt clichés flous pris du fond de la salle. Montrez les formules que vous proposez vraiment : si vous jouez en solo et en trio, les deux doivent apparaître.</p>\n<p><strong>2. Des vidéos de 15 secondes.</strong> Le client n'écoutera pas un concert entier : choisissez un extrait qui démarre fort, avec un bon son. L'idéal est une vidéo par moment clé (cocktail, première danse, piste de danse). Sur Wimbo, vous pouvez envoyer une vidéo courte ou coller un lien YouTube, Vimeo, Instagram ou TikTok.</p>\n<h3>Conseils 3 et 4 : un répertoire clair et des prix honnêtes</h3>\n<p><strong>3. Un répertoire lisible.</strong> Indiquez vos styles, une dizaine de titres représentatifs, les langues dans lesquelles vous chantez, la durée de vos sets et le matériel fourni. Précisez si vous acceptez d'apprendre un morceau sur demande, et avec quel délai. Inutile de lister 300 chansons : le client veut se projeter, pas lire un catalogue.</p>\n<p><strong>4. Des prix honnêtes, ou « sur devis ».</strong> Une fourchette indicative rassure et filtre les demandes hors budget. Si votre tarif varie vraiment selon la formule ou le déplacement, affichez « sur devis » et expliquez ce qui le fait évoluer. Sur Wimbo, vous fixez vos tarifs, ajustez chaque devis, et le client connaît le coût total dès le départ.</p>\n<h3>Conseil 5 : répondre vite, même pour dire non</h3>\n<p>Un organisateur contacte souvent plusieurs artistes à la fois, et la première réponse claire part avec une longueur d'avance. Sur Wimbo, les artistes répondent en général sous 2 à 3 heures, votre délai moyen est affiché sur votre profil et un bon taux de réponse améliore votre visibilité. Une bonne réponse tient en quelques lignes : un remerciement, la confirmation de la date, la formule proposée, le prix et une question sur l'événement. Pas disponible ? Déclinez rapidement et poliment : le client vous en sera reconnaissant.</p>\n<h3>Conseils 6 et 7 : des avis et un calendrier à jour</h3>\n<p><strong>6. Des avis.</strong> Après chaque prestation, demandez un avis au client tant que l'émotion est encore là. Répondez aux avis en quelques mots sincères : les futurs clients lisent aussi vos réponses. Sur Wimbo, chaque avis est rattaché à une réservation réelle, ce qui lui donne tout son poids.</p>\n<p><strong>7. Un calendrier de disponibilités.</strong> Bloquez les dates déjà prises, y compris celles réservées en dehors de Wimbo. Vous évitez les doubles réservations et les demandes que vous devriez refuser, et le client sait tout de suite s'il peut compter sur vous.</p>\n<h3>Comment Wimbo vous aide à trouver des dates ?</h3>\n<p>Wimbo met en relation des particuliers et des entreprises avec des artistes vérifiés, en France comme ailleurs, y compris pour les fêtes au pays de la diaspora. Les demandes arrivent complètes (date, lieu, nombre d'invités, budget), l'acompte du client est sécurisé dès la réservation et, pour les événements en France, la déclaration GUSO est préparée côté client (<a href=\"/blog/guso-tout-comprendre\">tout comprendre sur le GUSO</a>). Trois offres, sans engagement :</p>\n<ul><li><strong>Découverte</strong> : gratuite, profil avec 5 photos, demandes de devis, messagerie et calendrier.</li><li><strong>Pro</strong> (19 € par mois) : 15 photos, 2 vidéos et une visibilité renforcée dans les résultats.</li><li><strong>Premium</strong> (49 € par mois) : 30 photos, 5 vidéos et la mise en avant en tête des résultats.</li></ul>\n<p>Une commission n'est prélevée que sur les prestations réalisées. Et pour le lancement, les 150 premiers inscrits sont Premium à vie, gratuitement, avec le badge de membre fondateur. Tout le détail est sur la page <a href=\"/abonnements\">Abonnements</a>.</p>\n<p>Votre art, leurs émotions : créez votre profil en 5 minutes, sans carte bancaire, et notre équipe le valide en général sous 48 heures. <a href=\"/je-suis-artiste\">Découvrir l'espace artistes</a>.</p>"
  }
];
BLOG.sort((x, y) => y.date.localeCompare(x.date));

/* ---------- FAQ ---------- */
const FAQ = {
  organisateurs: [
    ['Combien coûte l\'utilisation de Wimbo ?', "La recherche, la consultation des profils et les demandes de devis sont gratuites et sans engagement. Lorsque vous réservez, des frais de service sont inclus dans le devis : ils couvrent le paiement sécurisé, la préparation des formalités GUSO et l'accompagnement en cas de problème."],
    ['En combien de temps vais-je recevoir un devis ?', "Les artistes Wimbo s'engagent à répondre sous 2 à 3 heures en journée. Le délai moyen de chaque artiste est affiché sur son profil."],
    ['Qu\'est-ce que le GUSO et dois-je m\'en occuper ?', "Le GUSO est le guichet qui permet de déclarer un artiste engagé pour un événement occasionnel. C'est obligatoire en France quand vous engagez directement un artiste. Wimbo prépare la déclaration et intègre les cotisations au devis : vous n'avez qu'à valider."],
    ['Comment fonctionne le paiement ?', "Vous réglez un acompte de 30 % pour bloquer la date, par carte via notre prestataire de paiement sécurisé. Le solde est réglé après la prestation et n'est versé à l'artiste qu'une fois l'événement passé."],
    ['Que se passe-t-il si l\'artiste annule ?', "C'est rare, mais si cela arrive, votre acompte vous est intégralement remboursé et nous vous proposons en priorité des artistes équivalents disponibles à votre date."],
    ['Puis-je réserver un artiste à l\'étranger depuis la France ?', "Oui, c'est l'une des spécialités de Wimbo : une fête de famille au Portugal, aux Antilles, en Afrique ou ailleurs. Les échanges et le paiement se font en ligne, et nos artistes ont l'habitude des familles qui organisent à distance."],
    ['Les avis sont-ils vérifiés ?', "Oui. Chaque avis est relu par notre équipe et rapproché d'une réservation réelle avant d'être publié sur le profil de l'artiste."],
    ['Le site existe-t-il en portugais et en anglais ?', "Oui : choisissez la langue avec le drapeau en haut de page (français, portugais ou anglais). Les présentations des artistes restent dans la langue où ils les ont rédigées."],
    ['Puis-je demander des chansons particulières ?', "Bien sûr. Précisez-les dans votre demande de devis : la plupart des artistes acceptent les demandes spéciales avec quelques semaines d'avance."]
  ],
  artistes: [
    ['Quelles différences entre les offres Découverte, Pro et Premium ?', "Découverte (gratuit, commission de 15 %) : profil avec 5 photos. Pro (19 € par mois, commission de 10 %) : 15 photos, 2 vidéos et une visibilité renforcée. Premium (49 € par mois, commission de 7 %) : 30 photos, 5 vidéos et la mise en avant en tête des résultats. Les 150 premiers artistes inscrits sont Premium à vie, gratuitement."],
    ['Comment ajouter des vidéos à mon profil ?', "Depuis votre espace artiste, onglet « Mon profil » : envoyez une vidéo courte (15 secondes et 50 Mo maximum) ou collez un lien YouTube, Vimeo, Instagram ou TikTok. Le nombre de vidéos dépend de votre offre : 2 en Pro, 5 en Premium."],
    ['L\'inscription est-elle gratuite ?', "Oui. Créer votre profil et recevoir des demandes est gratuit. Une commission n'est prélevée que sur les prestations réalisées. Les 150 premiers artistes inscrits bénéficient du badge Premium à vie."],
    ['Combien de temps faut-il pour s\'inscrire ?', "Environ 5 minutes. Vous pouvez créer votre compte sans photo et compléter votre profil plus tard depuis votre espace."],
    ['Comment mon profil est-il validé ?', "Notre équipe vérifie votre identité, vos extraits et votre statut. La validation prend en général 48 heures, après quoi votre profil apparaît dans les résultats."],
    ['Quel statut faut-il pour travailler via Wimbo ?', "Intermittent du spectacle, artiste salarié via le GUSO ou structure (association, société de production) : Wimbo s'adapte. Nous préparons les formalités côté client pour que vous soyez déclaré correctement."],
    ['Quand suis-je payé ?', "Le solde vous est versé dans les 48 heures suivant la prestation, une fois l'événement confirmé par le client. L'acompte est sécurisé dès la réservation."],
    ['Puis-je refuser une demande ?', "Oui, vous restez libre d'accepter ou de refuser chaque demande, et de proposer un devis adapté. Un taux de réponse élevé améliore toutefois votre visibilité."],
    ['Puis-je fixer mes propres tarifs ?', "Totalement. Vous indiquez une fourchette sur votre profil et ajustez chaque devis selon la date, la durée et le déplacement."],
    ['Je vis hors de France métropolitaine, puis-je m\'inscrire ?', "Oui. Wimbo est ouvert aux artistes du monde entier. Les formalités dépendent du pays de l'événement : en France (DOM compris), nous préparons la déclaration GUSO ; ailleurs, nous vous accompagnons au cas par cas."]
  ]
};

/* ---------- Chatbot : réponses courtes complémentaires (mots-clés → réponse) ---------- */
const CHAT_EXTRA = [
  { k: ['prix', 'tarif', 'cout', 'coute', 'combien', 'budget', 'cher'], q: 'Combien coûte un artiste ?', a: "Chaque artiste fixe son tarif : comptez en général de 400 à 900 € pour un solo, de 900 à 2 400 € pour un trio ou un quatuor, et de 1 500 à 3 500 € pour un groupe. Le devis précise tout, cotisations GUSO comprises.", link: ['/blog/prix-musicien-evenement', 'Lire notre guide des prix'] },
  { k: ['guso', 'urssaf', 'declaration', 'declarer', 'cotisation', 'cotisations'], q: 'Qu\'est-ce que le GUSO ?', a: "Le GUSO est le guichet qui permet de déclarer un artiste engagé pour un événement en France. Wimbo prépare la déclaration et intègre les cotisations au devis : vous n'avez qu'à valider.", link: ['/blog/guso-tout-comprendre', 'Comprendre le GUSO en 5 minutes'] },
  { k: ['inscrire', 'inscription', 'creer', 'compte', 'profil'], q: 'Comment créer mon compte ?', a: "Organisateur : cliquez sur « Se connecter » puis « Je cherche un artiste ». Artiste : cliquez sur « Je suis artiste ». Les deux sont gratuits et prennent quelques minutes.", link: ['/inscription-artiste', 'Créer mon profil artiste'] },
  { k: ['mot', 'passe', 'oublie', 'connexion', 'connecter'], q: 'J\'ai oublié mon mot de passe', a: "Sur la page de connexion, cliquez sur « Mot de passe oublié ? » : vous recevrez un lien par email pour en choisir un nouveau.", link: ['/mot-de-passe-oublie', 'Réinitialiser mon mot de passe'] },
  { k: ['annuler', 'annulation', 'rembourser', 'remboursement'], q: 'Et si je dois annuler ?', a: "Plus de 30 jours avant l'événement, l'acompte est remboursé intégralement. Entre 30 et 15 jours, 50 % de l'acompte est retenu ; en dessous de 15 jours, l'acompte est conservé.", link: ['/cgv', 'Voir les conditions'] },
  { k: ['video', 'videos', 'photo', 'photos', 'media', 'medias'], q: 'Combien de photos et de vidéos ?', a: "Découverte : 5 photos. Pro : 15 photos et 2 vidéos. Premium : 30 photos et 5 vidéos (15 secondes maximum chacune, ou un lien YouTube).", link: ['/abonnements', 'Comparer les offres'] },
  { k: ['abonnement', 'offre', 'offres', 'premium', 'pro', 'decouverte', 'fondateur', 'fondateurs'], q: 'Quelles sont les offres artistes ?', a: "Découverte est gratuite (commission 15 %), Pro coûte 19 € par mois (10 %) et Premium 49 € par mois (7 %). Les 150 premiers artistes inscrits sont Premium à vie, gratuitement.", link: ['/abonnements', 'Voir les abonnements'] },
  { k: ['contact', 'contacter', 'equipe', 'humain', 'parler', 'telephone', 'email', 'mail'], q: 'Parler à quelqu\'un', a: "Notre équipe vous répond sous 24 heures ouvrées.", link: ['/contact', 'Écrire à l\'équipe Wimbo'] },
  { k: ['langue', 'portugais', 'anglais', 'traduction', 'english', 'portugues'], q: 'Le site est-il traduit ?', a: "Oui : choisissez le français, le portugais ou l'anglais avec le drapeau en haut de page." },
  { k: ['pays', 'etranger', 'portugal', 'antilles', 'angola', 'cap', 'diaspora', 'haiti'], q: 'Puis-je réserver à l\'étranger ?', a: "Oui, Wimbo n'a pas de frontières : vous pouvez réserver un artiste près de chez vous ou pour une fête au pays, et tout gérer à distance.", link: ['/evenements/evenement-diaspora', 'Fête au pays'] }
];

/* ---------- Abonnements ---------- */
/* Offres artistes : limites appliquées par le site ET par la base (SQL v3) */
const PLAN_LIMITS = {
  decouverte: { photos: 5, videos: 0 },
  pro: { photos: 15, videos: 2 },
  premium: { photos: 30, videos: 5 }
};
const PLANS = [
  { id: 'decouverte', name: 'Découverte', price: 0, tag: 'Pour démarrer', commission: 15,
    features: ['Profil public avec 5 photos', 'Demandes de devis et messagerie', 'Calendrier de disponibilités', 'Paiement sécurisé', 'Formalités GUSO préparées côté client'] },
  { id: 'pro', name: 'Pro', price: 19, tag: 'Pour les artistes actifs', commission: 10, popular: true, includes: 'Tout Découverte, plus :',
    features: ['15 photos et 2 vidéos courtes', 'Visibilité renforcée dans les résultats', 'Badge Pro sur le profil', 'Support par email sous 48 h'] },
  { id: 'premium', name: 'Premium', price: 49, tag: 'Pour les pros à plein temps', commission: 7, includes: 'Tout Pro, plus :',
    features: ['30 photos et 5 vidéos courtes', 'Mise en avant en tête des résultats', 'Badge ★ Premium', 'Statistiques avancées', 'Support prioritaire'] }
];
/* Titres optimisés pour Google (onglet du navigateur et résultats de recherche) */
const SEO_TITLES = {
  '/recherche': 'Trouver un musicien, un chanteur ou un DJ · Wimbo',
  '/comment-ca-marche': 'Comment réserver un musicien ou un DJ · Wimbo',
  '/je-suis-artiste': 'Musiciens, chanteurs, DJ : trouvez des dates avec Wimbo',
  '/abonnements': 'Abonnements artistes : Découverte, Pro, Premium · Wimbo',
  '/avis': 'Avis clients sur les artistes · Wimbo',
  '/faq': 'FAQ : devis, paiement, GUSO et réservation · Wimbo',
  '/blog': 'Blog : conseils musique pour vos événements · Wimbo'
};
const PLAN_NAMES = { decouverte: 'Découverte', pro: 'Pro', premium: 'Premium' };

/* ---------- Démo : données du tableau de bord (compte demo@wimbo.dev) ---------- */
const DEMO_DASHBOARD = {
  kpis: { views: 1284, requests: 23, responseRate: 96, revenue: 7850 },
  requests: [
    { id: 'd1', client_name: 'Camille Durand', event_type: 'Anniversaire', event_date: '2026-11-21', event_city: 'Boulogne-Billancourt', guests: 60, message: "Bonjour, pour les 70 ans de ma mère, 2 h de piano-voix pendant le dîner, avec deux chansons d'Aznavour si possible.", status: 'nouvelle', created_at: '2026-10-27T09:12:00' },
    { id: 'd2', client_name: 'Julien & Sarah', event_type: 'Mariage', event_date: '2027-06-12', event_city: 'Chantilly', guests: 120, message: "Cocktail de 18 h à 20 h puis ouverture de soirée. Formule duo ?", status: 'devis_envoye', created_at: '2026-10-24T18:40:00' },
    { id: 'd3', client_name: 'Agence Lumen', event_type: "Événement d'entreprise", event_date: '2026-12-10', event_city: 'Paris 8e', guests: 200, message: "Soirée de fin d'année, ambiance jazz pendant le cocktail dînatoire.", status: 'acceptee', created_at: '2026-10-15T11:05:00' },
    { id: 'd4', client_name: 'Marc Lefèvre', event_type: 'Fête privée', event_date: '2026-11-08', event_city: 'Vincennes', guests: 30, message: "Concert privé dans notre salon pour 30 amis.", status: 'refusee', created_at: '2026-10-10T20:15:00' }
  ],
  payments: [
    { date: '2026-10-05', label: 'Mariage — Thomas & Julie (solde)', amount: 840, status: 'Versé' },
    { date: '2026-09-14', label: 'Anniversaire — Camille D.', amount: 620, status: 'Versé' },
    { date: '2026-10-16', label: "Agence Lumen — acompte 30 %", amount: 330, status: 'Sécurisé' }
  ]
};

/* Wimbo — traductions de l'interface (généré par gen_i18n.py, ne pas éditer à la main).
   ui : textes affichés (clé = texte français exact) · tpl : phrases avec variables · blog : articles · chatk : mots-clés du chatbot */
const I18N = {"pt":{"ui":{"(cliquez pour choisir)":"(clique para escolher)","(cliquez pour choisir, plusieurs possibles)":"(clique para escolher, pode selecionar vários)","(facultatif)":"(opcional)","(facultatif, jusqu'à 3 liens)":"(opcional, até 3 links)","(jusqu'à 4, la première sera votre photo principale)":"(até 4, a primeira será a sua foto principal)",", nous suivons le dossier jusqu'au bout.":", e nós acompanhamos o processo até ao fim.","/ mois":"/ mês","1 artiste à Paris":"1 artista em Paris","15 photos et 2 vidéos courtes":"15 fotos e 2 vídeos curtos","150 places de membres fondateurs":"150 lugares de membro fundador","150 places de membres fondateurs : badge Premium offert à vie":"150 lugares de membro fundador: selo Premium oferecido para sempre","18, 30, 50 ou 70 ans : un artiste live change complètement l'ambiance d'un anniversaire. Choisissez un style, une ville et une date, comparez les profils, écoutez les extraits et réservez en toute sérénité, paiement sécurisé et administratif compris.":"18, 30, 50 ou 70 anos: um artista ao vivo muda completamente o ambiente de uma festa de aniversário. Escolha um estilo, uma cidade e uma data, compare os perfis, ouça os excertos e reserve com toda a tranquilidade, com pagamento seguro e tratamento administrativo incluídos.","30 photos et 5 vidéos courtes":"30 fotos e 5 vídeos curtos","4,5 et plus":"4,5 ou mais","4,8 et plus":"4,8 ou mais","8 caractères minimum. Astuce : une phrase courte, comme « guitare bleue 2027 ».":"Mínimo de 8 caracteres. Dica: uma frase curta, como «guitarra azul 2027».","8 caractères minimum. Astuce : une phrase courte, comme « mariage de ma fille 2027 ».":"Mínimo de 8 caracteres. Dica: uma frase curta, como «casamento da minha filha 2027».",": cachet, cotisations sociales et frais de service.":": cachet, contribuições sociais e taxa de serviço.",": votre espace organisateur sera lié à votre compte artiste.":": a sua área de organizador ficará associada à sua conta de artista.",": votre profil artiste sera lié à ce compte.":": o seu perfil de artista ficará associado a esta conta.","Abonnement":"Plano","Abonnements":"Planos","Abonnements artistes · Wimbo":"Planos para artistas · Wimbo","Accepter":"Aceitar","Accepter le devis":"Aceitar o orçamento","Accordéon":"Acordeão","Accordéoniste":"Acordeonista","Accueil":"Início","Accès réservé · Wimbo":"Acesso reservado · Wimbo","Accès réservé à l'équipe Wimbo":"Acesso reservado à equipa Wimbo","Accéder au blog":"Ir para o blog","Acompte (30 %)":"Sinal (30%)","Acompte de 30 % sécurisé, solde après la prestation. Nous préparons la déclaration GUSO pour vous.":"Sinal de 30% protegido, valor restante após a atuação. Preparamos a declaração GUSO para si.","Acompte de 30 % à la réservation, solde après la prestation, versé à l'artiste une fois l'événement passé.":"Sinal de 30% no ato da reserva, valor restante após a atuação, pago ao artista depois do evento.","Actif":"Ativo","Administratif":"Administrativo","Administratif · 5 min":"Administrativo · 5 min","Administration":"Administração","Administration · Wimbo":"Administração · Wimbo","Adresse email invalide (format attendu : nom@domaine.fr).":"Endereço de email inválido (formato esperado: nom@domaine.fr).","Affiner la recherche":"Refinar a pesquisa","Agenda intégré":"Agenda integrada","Agrandir la photo":"Ampliar a foto","Aide Wimbo":"Ajuda Wimbo","Ajouter au moins 3 photos":"Adicionar pelo menos 3 fotos","Ajouter aux favoris":"Adicionar aos favoritos","Ajouter mon IBAN":"Adicionar o meu IBAN","Ajouter un lien vidéo ou Instagram":"Adicionar um link de vídeo ou do Instagram","Ajouter une vidéo":"Adicionar um vídeo","Ajouté à vos favoris":"Adicionado aos seus favoritos","Altiste":"Violetista","Alto":"Viola d'arco","Amabilité":"Simpatia","Anniversaire":"Aniversário","Annulée":"Cancelada","Aperçu":"Pré-visualização","Aperçu administrateur · statut :":"Pré-visualização de administrador · estado:","Aperçu de votre profil : il sera visible publiquement après validation par l'équipe Wimbo (sous 48 h).":"Pré-visualização do seu perfil: ficará visível publicamente após validação pela equipa Wimbo (no prazo de 48 h).","Artiste":"Artista","Artiste Wimbo":"Artista Wimbo","Artiste validé : il apparaît dans le catalogue":"Artista validado: já aparece no catálogo","Artistes":"Artistas","Artistes : rejoignez Wimbo":"Artistas: juntem-se ao Wimbo","Artistes Premium uniquement":"Apenas artistas Premium","Artistes similaires":"Artistas semelhantes","Artistes vérifiés":"Artistas verificados","Association / structure":"Associação / entidade","Aucun artiste dans cette catégorie.":"Nenhum artista nesta categoria.","Aucun artiste ne correspond… pour l'instant":"Nenhum artista corresponde… por enquanto","Aucun avis pour le moment.":"Ainda sem avaliações.","Aucun message pour le moment.":"Ainda sem mensagens.","Aucune demande pour l'instant":"Ainda sem pedidos","Aucune demande pour l'instant. Un profil complet avec de belles photos reçoit bien plus de demandes.":"Ainda sem pedidos. Um perfil completo, com boas fotos, recebe muitos mais pedidos.","Aucune demande pour le moment":"Ainda sem pedidos","Aucune demande pour le moment.":"Ainda sem pedidos.","Aucune photo pour le moment.":"Ainda sem fotos.","Aucune vidéo pour le moment.":"Ainda sem vídeos.","Aucune ville trouvée. Vérifiez l'orthographe.":"Nenhuma cidade encontrada. Verifique a ortografia.","Auto-entrepreneur":"Trabalhador independente","Autre":"Outro","Autre / je ne sais pas":"Outro / não sei","Autres genres":"Outros géneros","Autres instruments":"Outros instrumentos","Avis":"Avaliações","Avis clients":"Avaliações de clientes","Avis clients · Wimbo":"Avaliações de clientes · Wimbo","Avis publié":"Avaliação publicada","Avis refusé":"Avaliação recusada","Badge Premium offert à vie, mise en avant dans les résultats et commission réduite.":"Selo Premium oferecido para sempre, destaque nos resultados e comissão reduzida.","Badge Pro sur le profil":"Selo Pro no perfil","Badge ★ Premium":"Selo ★ Premium","Baptême & communion":"Batizado & comunhão","Basse":"Baixo","Bassiste":"Baixista","Basé à":"Com base em","Batterie":"Bateria","Batteur":"Baterista","Besoin de plus de photos ?":"Precisa de mais fotos?","Bien sûr. Précisez-les dans votre demande de devis : la plupart des artistes acceptent les demandes spéciales avec quelques semaines d'avance.":"Claro. Indique-o no seu pedido de orçamento: a maioria dos artistas aceita pedidos especiais com algumas semanas de antecedência.","Bientôt disponible":"Disponível em breve","Bloquez vos dates indisponibles, évitez les doubles réservations.":"Bloqueie as datas em que não está disponível e evite reservas duplicadas.","Bon retour":"Bem-vindo","Bravo, votre profil est complet !":"Parabéns, o seu perfil está completo!","Budget":"Orçamento","Budget maximum":"Orçamento máximo","Budget · 4 min":"Orçamento · 4 min","C'est rare, mais si cela arrive, votre acompte vous est intégralement remboursé et nous vous proposons en priorité des artistes équivalents disponibles à votre date.":"É raro, mas, se acontecer, o seu sinal é reembolsado na totalidade e propomos-lhe, com prioridade, artistas equivalentes disponíveis na sua data.","Calendrier":"Calendário","Calendrier de disponibilités":"Calendário de disponibilidade","Ce fichier n'est pas une vidéo (formats acceptés : MP4, MOV, WebM).":"Este ficheiro não é um vídeo (formatos aceites: MP4, MOV, WebM).","Ce lien a expiré ou a déjà été utilisé.":"Este link expirou ou já foi utilizado.","Ce profil n'existe pas ou n'est plus disponible.":"Este perfil não existe ou já não está disponível.","Ce que Wimbo gère pour vous":"O que o Wimbo trata por si","Ce que les organisateurs disent des artistes Wimbo. Chaque avis est relu et rapproché d'une réservation.":"O que os organizadores dizem dos artistas Wimbo. Cada avaliação é revista e associada a uma reserva.","Ce qui est inclus : durée, matériel, déplacement…":"O que está incluído: duração, material, deslocação…","Cet artiste établit un tarif sur mesure pour chaque événement (durée, lieu, formation). Demandez un devis gratuit : vous connaissez le coût total, cotisations GUSO comprises, avant de réserver.":"Este artista define um preço à medida para cada evento (duração, local, formação). Peça um orçamento gratuito: fica a saber o custo total, contribuições GUSO incluídas, antes de reservar.","Cette page a fait une fausse note":"Esta página desafinou","Changer mon mot de passe":"Alterar a minha palavra-passe","Chanson française":"Chanson francesa","Chant":"Canto","Chanteur / Chanteuse":"Cantor / Cantora","Chanteur·se":"Cantor(a)","Chanteuse, pianiste, violoniste, DJ : cherchez directement l'artiste qu'il vous faut.":"Cantora, pianista, violinista, DJ: procure diretamente o artista de que precisa.","Chaque artiste fixe son tarif : comptez en général de 400 à 900 € pour un solo, de 900 à 2 400 € pour un trio ou un quatuor, et de 1 500 à 3 500 € pour un groupe. Le devis précise tout, cotisations GUSO comprises.":"Cada artista define o seu preço: conte, em geral, com valores entre 400 e 900 € para um solo, entre 900 e 2400 € para um trio ou quarteto e entre 1500 e 3500 € para uma banda. O orçamento detalha tudo, contribuições GUSO incluídas.","Chargement…":"A carregar…","Chercher":"Pesquisar","Cherchez":"Pesquise","Cherchez et comparez":"Pesquise e compare","Choisir…":"Escolher…","Choisissez au moins 8 caractères.":"Use pelo menos 8 caracteres.","Choisissez au moins un instrument ou une spécialité (ou utilisez « Autre »).":"Escolha pelo menos um instrumento ou uma especialidade (ou use «Outro»).","Choisissez au moins un style.":"Escolha pelo menos um estilo.","Choisissez le type d'événement.":"Escolha o tipo de evento.","Choisissez un mot de passe d'au moins 8 caractères.":"Escolha uma palavra-passe com pelo menos 8 caracteres.","Choisissez votre ville dans la liste de suggestions : elle nous indique aussi le pays.":"Escolha a sua cidade na lista de sugestões: assim ficamos também a saber o país.","Chœur":"Coro","Chœur / chorale":"Coro / grupo coral","Clarinette":"Clarinete","Clarinettiste":"Clarinetista","Classique":"Clássica","Clavier":"Teclado","Claviériste":"Teclista","Cliquez sur le cœur d'un profil pour le retrouver ici.":"Clique no coração de um perfil para o encontrar aqui.","Cliquez sur un jour pour le marquer indisponible. Les dates confirmées apparaissent en couleur.":"Clique num dia para o marcar como indisponível. As datas confirmadas aparecem a cores.","Cocktail & dîner":"Cocktail & jantar","Combien coûte l'utilisation de Wimbo ?":"Quanto custa utilizar o Wimbo?","Combien coûte un artiste ?":"Quanto custa um artista?","Combien coûte un musicien pour un événement privé ?":"Quanto custa um músico para um evento privado?","Combien de photos et de vidéos ?":"Quantas fotos e vídeos?","Combien de temps faut-il pour s'inscrire ?":"Quanto tempo demora o registo?","Commencer gratuitement":"Começar gratuitamente","Commencez à taper puis choisissez dans la liste : le pays est ajouté automatiquement.":"Comece a escrever e escolha na lista: o país é adicionado automaticamente.","Comment ajouter des vidéos à mon profil ?":"Como adiciono vídeos ao meu perfil?","Comment créer mon compte ?":"Como crio a minha conta?","Comment fonctionne le paiement ?":"Como funciona o pagamento?","Comment mon profil est-il validé ?":"Como é validado o meu perfil?","Comment pouvons-nous vous aider ?":"Como podemos ajudar?","Comment ça marche":"Como funciona","Comment ça marche · Wimbo":"Como funciona · Wimbo","Communication":"Comunicação","Comparer les offres":"Comparar planos","Compléter mon profil":"Completar o meu perfil","Complétez ces informations pour activer votre espace organisateur.":"Preencha estas informações para ativar a sua área de organizador.","Comprendre le GUSO en 5 minutes":"Compreender o GUSO em 5 minutos","Concentrez-vous sur la scène":"Concentre-se no palco","Concert":"Concerto","Concert à la maison":"Concerto em casa","Conditions générales de vente":"Condições gerais de venda","Confidentialité":"Privacidade","Confirmer la réservation":"Confirmar a reserva","Confirmée":"Confirmada","Connecté avec":"Sessão iniciada com","Connexion au serveur impossible.":"Não foi possível ligar ao servidor.","Connexion au serveur impossible. Vérifiez votre connexion internet.":"Não foi possível ligar ao servidor. Verifique a sua ligação à internet.","Connexion en cours…":"A iniciar sessão…","Connexion · Wimbo":"Iniciar sessão · Wimbo","Connexion…":"A iniciar sessão…","Conseil : une photo en situation (sur scène, avec votre instrument) attire bien plus de demandes.":"Dica: uma foto em ação (em palco, com o seu instrumento) atrai muitos mais pedidos.","Conseils, guides et inspirations pour réussir la musique de vos événements.":"Dicas, guias e inspiração para acertar na música dos seus eventos.","Contact":"Contacto","Contact · Wimbo":"Contacto · Wimbo","Contactez-nous":"Contacte-nos","Continuer":"Continuar","Contrat et GUSO":"Contrato e GUSO","Contrat et déclaration GUSO préparés pour vos clients : vous êtes déclaré correctement, sans effort.":"Contrato e declaração GUSO preparados para os seus clientes: fica corretamente declarado, sem esforço.","Contrebasse":"Contrabaixo","Contrebassiste":"Contrabaixista","Coordonnées bancaires":"Dados bancários","Copiez l'adresse de la vidéo depuis YouTube, Vimeo, Instagram ou TikTok. Les vidéos YouTube et Vimeo se lisent directement sur votre fiche.":"Copie o endereço do vídeo no YouTube, Vimeo, Instagram ou TikTok. Os vídeos do YouTube e do Vimeo são reproduzidos diretamente na sua página.","Création de votre profil…":"A criar o seu perfil…","Création du compte…":"A criar a conta…","Créer mon compte":"Criar a minha conta","Créer mon compte pour suivre ma demande":"Criar a minha conta para acompanhar o meu pedido","Créer mon profil":"Criar o meu perfil","Créer mon profil artiste":"Criar o meu perfil de artista","Créer mon profil gratuitement":"Criar o meu perfil gratuitamente","Créer un compte":"Criar conta","Créer un compte · Wimbo":"Criar conta · Wimbo","Créez votre compte":"Crie a sua conta","Créez votre compte pour suivre vos demandes, retrouver vos favoris et réserver en quelques clics.":"Crie a sua conta para acompanhar os seus pedidos, encontrar os seus favoritos e reservar em poucos cliques.","Créez votre profil gratuitement.":"Crie o seu perfil gratuitamente.","Créez-le en 3 minutes avec votre compte actuel.":"Crie-o em 3 minutos com a sua conta atual.","Cérémonie":"Cerimónia","Cérémonie laïque, religieuse ou civile : des musiciens qui savent accompagner les moments forts, de l'entrée des mariés à la sortie, avec un répertoire choisi ensemble.":"Cerimónia laica, religiosa ou civil: músicos que sabem acompanhar os grandes momentos, da entrada dos noivos à saída, com um repertório escolhido em conjunto.","Cérémonie, cocktail, dîner, soirée : quel artiste pour quel moment, à quel budget, et combien de temps à l'avance réserver ?":"Cerimónia, cocktail, jantar, festa: que artista para cada momento, com que orçamento e com quanta antecedência reservar?","D'acompte sécurisé":"De sinal protegido","Date":"Data","Date à préciser":"Data a definir","Date, lieu, nombre d'invités, budget : chaque demande arrive complète. Vous répondez avec un devis en quelques clics.":"Data, local, número de convidados, verba disponível: cada pedido chega completo. Responde com um orçamento em poucos cliques.","Demande acceptée, le client est prévenu":"Pedido aceite, o cliente foi notificado","Demande déclinée":"Pedido recusado","Demande enregistrée":"Pedido registado","Demande personnalisée":"Pedido personalizado","Demander un devis":"Pedir orçamento","Demander un devis gratuit":"Pedir orçamento gratuito","Demander un nouveau lien":"Pedir um novo link","Demandes":"Pedidos","Demandes de devis et messagerie":"Pedidos de orçamento e mensagens","Demandes reçues":"Pedidos recebidos","Demandes reçues, profil, calendrier":"Pedidos recebidos, perfil, calendário","Demandez un devis":"Peça um orçamento","Depuis votre espace artiste, onglet « Mon profil » : envoyez une vidéo courte (15 secondes et 50 Mo maximum) ou collez un lien YouTube, Vimeo, Instagram ou TikTok. Le nombre de vidéos dépend de votre offre : 2 en Pro, 5 en Premium.":"Na Área do artista, separador «O meu perfil»: carregue um vídeo curto (máximo de 15 segundos e 50 MB) ou cole um link do YouTube, Vimeo, Instagram ou TikTok. O número de vídeos depende do seu plano: 2 no Pro, 5 no Premium.","Dernières demandes":"Últimos pedidos","Des demandes qualifiées":"Pedidos qualificados","Des demandes qualifiées de particuliers et d'entreprises, sans démarchage":"Pedidos qualificados de particulares e empresas, sem ter de angariar clientes","Des formules douces et familiales pour célébrer un baptême ou une communion, à l'église, en salle ou dans le jardin.":"Propostas serenas e familiares para celebrar um batizado ou uma comunhão, na igreja, numa sala ou no jardim.","Des profils vérifiés, un devis en quelques heures, l'administratif en moins.":"Perfis verificados, um orçamento em poucas horas e menos burocracia.","Description":"Descrição","Devis envoyé":"Orçamento enviado","Devis envoyé au client":"Orçamento enviado ao cliente","Diaspora":"Diáspora","Diaspora · 5 min":"Diáspora · 5 min","Dim":"Dom","Du jazz manouche au zouk, en passant par le fado et l'afro-house : trouvez le style qui fera vibrer vos invités.":"Do jazz manouche ao zouk, passando pelo fado e pelo afro-house: encontre o estilo que vai pôr os seus convidados a vibrar.","Durée":"Duração","Dès qu'un organisateur vous contacte, sa demande apparaît ici et vous êtes prévenu par email.":"Assim que um organizador o contactar, o pedido aparece aqui e recebe uma notificação por email.","Déclaration GUSO préparée par Wimbo":"Declaração GUSO preparada pelo Wimbo","Découverte":"Descoberta","Découverte (gratuit, commission de 15 %) : profil avec 5 photos. Pro (19 € par mois, commission de 10 %) : 15 photos, 2 vidéos et une visibilité renforcée. Premium (49 € par mois, commission de 7 %) : 30 photos, 5 vidéos et la mise en avant en tête des résultats. Les 150 premiers artistes inscrits sont Premium à vie, gratuitement.":"Descoberta (gratuito, comissão de 15%): perfil com 5 fotos. Pro (19 € por mês, comissão de 10%): 15 fotos, 2 vídeos e maior visibilidade. Premium (49 € por mês, comissão de 7%): 30 fotos, 5 vídeos e destaque no topo dos resultados. Os 150 primeiros artistas registados ficam Premium para sempre, gratuitamente.","Découverte : 5 photos. Pro : 15 photos et 2 vidéos. Premium : 30 photos et 5 vidéos (15 secondes maximum chacune, ou un lien YouTube).":"Descoberta: 5 fotos. Pro: 15 fotos e 2 vídeos. Premium: 30 fotos e 5 vídeos (máximo de 15 segundos cada, ou um link do YouTube).","Découverte est gratuite (commission 15 %), Pro coûte 19 € par mois (10 %) et Premium 49 € par mois (7 %). Les 150 premiers artistes inscrits sont Premium à vie, gratuitement.":"O plano Descoberta é gratuito (comissão de 15%), o Pro custa 19 € por mês (10%) e o Premium 49 € por mês (7%). Os 150 primeiros artistas registados ficam Premium para sempre, gratuitamente.","Découvrez les profils à l'affiche":"Descubra os perfis em destaque","Décrivez votre événement : lieu, moments à animer, chansons souhaitées…":"Descreva o seu evento: local, momentos a animar, canções pretendidas…","Décrivez votre événement en 2 minutes. L'artiste répond en 2 à 3 heures avec un devis détaillé.":"Descreva o seu evento em 2 minutos. O artista responde em 2 a 3 horas com um orçamento detalhado.","Décrivez votre événement en 2 minutes. L'artiste vous répond sous 2 à 3 heures avec un devis détaillé.":"Descreva o seu evento em 2 minutos. O artista responde-lhe no prazo de 2 a 3 horas com um orçamento detalhado.","Déjà inscrit ?":"Já tem conta?","Délai de réponse":"Tempo de resposta","Délai de réponse moyen":"Tempo médio de resposta","Démonstration :":"Demonstração:","Détails":"Detalhes","Dîner":"Jantar","EVJF / EVG":"Despedida de solteira / solteiro","Effacer les filtres":"Limpar filtros","Email ou mot de passe incorrect.":"Email ou palavra-passe incorretos.","En 3 étapes":"Em 3 passos","En France, engager un artiste pour un événement privé impose une déclaration auprès du Guichet unique du spectacle occasionnel (GUSO). Beaucoup l'ignorent, et s'exposent à un redressement.":"Em França, contratar um artista para um evento privado obriga a fazer uma declaração junto do Guichet unique du spectacle occasionnel (GUSO). Muitos não sabem disso e arriscam-se a ser penalizados.","En activité depuis":"Em atividade desde","En attente":"Pendente","En attente de réponse":"A aguardar resposta","En cas d'imprévu, notre équipe vous propose un artiste de remplacement sous 24 h ouvrées.":"Em caso de imprevisto, a nossa equipa propõe-lhe um artista substituto no prazo de 24 h úteis.","En combien de temps vais-je recevoir un devis ?":"Em quanto tempo vou receber um orçamento?","En euros, pour une prestation de 2 h. C'est un prix « à partir de » : vous l'ajustez à chaque devis.":"Em euros, para uma atuação de 2 h. É um preço «a partir de»: pode ajustá-lo em cada orçamento.","En pause":"Em pausa","En savoir plus":"Saber mais","En vedette":"Em destaque","Enregistrement du compte impossible :":"Não foi possível registar a conta:","Enregistrement du profil impossible :":"Não foi possível guardar o perfil:","Enregistrement impossible :":"Não foi possível guardar:","Enregistrement impossible, réessayez dans un instant.":"Não foi possível guardar. Tente novamente dentro de instantes.","Enregistrement…":"A guardar…","Enregistrer":"Guardar","Ensemble classique":"Ensemble clássico","Environ 5 minutes. Vous pouvez créer votre compte sans photo et compléter votre profil plus tard depuis votre espace.":"Cerca de 5 minutos. Pode criar a sua conta sem fotos e completar o perfil mais tarde, na sua área.","Envoi de la vidéo… cela peut prendre une minute":"A enviar o vídeo… pode demorar um minuto","Envoi en cours…":"A enviar…","Envoi…":"A enviar…","Envoyer":"Enviar","Envoyer le devis":"Enviar o orçamento","Envoyer le message":"Enviar a mensagem","Envoyer un devis":"Enviar um orçamento","Erreur 404":"Erro 404","Espace artiste · Wimbo":"Área do artista · Wimbo","Espace organisateur":"Área do organizador","Essayez d'élargir vos critères, ou confiez-nous votre recherche : nous trouvons l'artiste qu'il vous faut sous 24 h.":"Experimente alargar os critérios ou confie-nos a sua pesquisa: encontramos o artista de que precisa em 24 h.","Et si je dois annuler ?":"E se eu tiver de cancelar?","Ex. : 600":"Ex.: 600","Ex. : 800":"Ex.: 800","Ex. : Lyon, Lisbonne…":"Ex.: Lyon, Lisboa…","Ex. : Paris":"Ex.: Paris","Ex. : Paris, Lisbonne, Douala…":"Ex.: Paris, Lisboa, Douala…","Ex. : Trio Étincelles":"Ex.: Trio Étincelles","Ex. : kora, oud, steel drum (séparez par des virgules)":"Ex.: kora, oud, steel drum (separe por vírgulas)","Expérience":"Experiência","FAQ organisateurs":"FAQ para organizadores","Favori":"Favorito","Favoris":"Favoritos","Fermer":"Fechar","Filtres":"Filtros","Filtrez par style, événement, ville et budget. Photos, vidéos et avis vérifiés vous aident à choisir.":"Filtre por estilo, evento, cidade e orçamento. Fotos, vídeos e avaliações verificadas ajudam-no a escolher.","Filtrez par style, événement, ville, budget et formation. Chaque profil est vérifié par notre équipe.":"Filtre por estilo, evento, cidade, orçamento e formação. Cada perfil é verificado pela nossa equipa.","Flûte":"Flauta","Flûtiste":"Flautista","Folk / Acoustique":"Folk / Acústico","Fondateur":"Fundador","Formalités GUSO préparées côté client":"Formalidades GUSO preparadas do lado do cliente","Formation":"Formação","Formation et membres":"Formação e membros","France":"França","Fête":"Festa","Fête au pays":"Festa na terra","Fête au pays (diaspora)":"Festa na terra (diáspora)","Fête privée":"Festa privada","GUSO : tout comprendre en 5 minutes":"GUSO: perceba tudo em 5 minutos","GUSO géré":"GUSO tratado","GUSO inclus":"GUSO incluído","Genres":"Géneros","Genres musicaux":"Géneros musicais","Gratuit et sans engagement":"Gratuito e sem compromisso","Gratuit, en 1 minute. Pour organiser un événement.":"Gratuito, em 1 minuto. Para organizar um evento.","Groupe":"Banda","Groupe de reprises":"Banda de covers","Guitare":"Guitarra","Guitariste":"Guitarrista","Harpe":"Harpa","Harpiste":"Harpista","Ici et au pays":"Cá e na terra","Identité, statut et extraits contrôlés par notre équipe avant toute mise en ligne.":"Identidade, estatuto e excertos verificados pela nossa equipa antes de qualquer publicação.","Identité, statut, extraits et références contrôlés avant la mise en ligne.":"Identidade, estatuto, excertos e referências verificados antes da publicação.","Il reste 150 places de membres fondateurs : Premium offert à vie. Inscription gratuite en 5 minutes.":"Restam 150 lugares de membro fundador: Premium oferecido para sempre. Registo gratuito em 5 minutos.","Ils ont réservé sur Wimbo":"Reservaram no Wimbo","Impossible de lire cette image":"Não foi possível ler esta imagem","Indiquer un tarif ou choisir « sur devis »":"Indicar um preço ou escolher «sob orçamento»","Indiquez l'email de votre compte.":"Indique o email da sua conta.","Indiquez la date de votre événement.":"Indique a data do seu evento.","Indiquez la ville de l'événement.":"Indique a cidade do evento.","Indiquez un montant valide.":"Indique um montante válido.","Indiquez un tarif indicatif, ou choisissez « Sur devis uniquement ».":"Indique um preço indicativo ou escolha «Apenas sob orçamento».","Indiquez une adresse email valide pour recevoir le devis.":"Indique um endereço de email válido para receber o orçamento.","Indiquez une adresse email valide.":"Indique um endereço de email válido.","Indiquez votre email et votre mot de passe.":"Indique o seu email e a sua palavra-passe.","Indiquez votre nom et un commentaire d'au moins 15 caractères.":"Indique o seu nome e um comentário com pelo menos 15 caracteres.","Indiquez votre nom.":"Indique o seu nome.","Indiquez votre prénom et votre nom.":"Indique o seu nome próprio e apelido.","Indiquez votre ville.":"Indique a sua cidade.","Indisponible":"Indisponível","Informations":"Informações","Informations enregistrées":"Informações guardadas","Inscription artiste · Wimbo":"Registo de artista · Wimbo","Inscription gratuite en 5 minutes.":"Registo gratuito em 5 minutos.","Inscription gratuite, sans engagement.":"Registo gratuito, sem compromisso.","Instruments":"Instrumentos","Instruments et spécialités":"Instrumentos e especialidades","Intermittent du spectacle":"Intermitente do espetáculo","Intermittent du spectacle, artiste salarié via le GUSO ou structure (association, société de production) : Wimbo s'adapte. Nous préparons les formalités côté client pour que vous soyez déclaré correctement.":"Intermitente do espetáculo, artista assalariado através do GUSO ou entidade (associação, produtora): o Wimbo adapta-se. Preparamos as formalidades do lado do cliente para que fique corretamente declarado.","Invités":"Convidados","J'accepte les":"Aceito as","J'accepte que Wimbo utilise ces informations pour me répondre (voir la politique de confidentialité).":"Aceito que o Wimbo utilize estas informações para me responder (ver a política de privacidade).","J'affiche un tarif indicatif":"Mostrar um preço indicativo","J'ai oublié mon mot de passe":"Esqueci-me da palavra-passe","Je confirme ma réservation":"Confirmo a minha reserva","Je n'ai pas trouvé de réponse précise à votre question. Notre équipe vous répond sous 24 heures ouvrées.":"Não encontrei uma resposta precisa para a sua pergunta. A nossa equipa responde-lhe no prazo de 24 horas úteis.","Je ne cours plus après les demandes : elles arrivent qualifiées, avec la date, le lieu et le budget. Et le paiement tombe à l'heure.":"Já não ando atrás de pedidos: chegam qualificados, com a data, o local e o orçamento. E o pagamento cai a horas.","Je ne suis pas disponible":"Não estou disponível","Je peux me déplacer au-delà de mon rayon (frais en sus)":"Posso deslocar-me para além do meu raio de ação (com custos adicionais)","Je vis hors de France métropolitaine, puis-je m'inscrire ?":"Vivo fora da França metropolitana. Posso registar-me?","Jeu":"Qui","Jusqu'à":"Até","Jusqu'à 1 000 €":"Até 1000 €","L'acompte est sécurisé dès la réservation. Le solde vous est versé sous 48 h après la prestation.":"O sinal fica protegido logo na reserva. O valor restante é-lhe pago no prazo de 48 h após a atuação.","L'artiste vous répond en général sous 2 à 3 heures.":"Em geral, o artista responde-lhe no prazo de 2 a 3 horas.","L'artiste étudie votre demande et vous envoie un devis détaillé, cotisations GUSO comprises.":"O artista analisa o seu pedido e envia-lhe um orçamento detalhado, contribuições GUSO incluídas.","L'inscription est-elle gratuite ?":"O registo é gratuito?","La bonne musique pour chaque moment":"A música certa para cada momento","La date de l'événement doit être dans le futur.":"A data do evento tem de ser no futuro.","La déclaration obligatoire est préparée pour vous et les cotisations sont intégrées au devis. Zéro oubli, zéro surprise.":"A declaração obrigatória é preparada para si e as contribuições estão incluídas no orçamento. Zero esquecimentos, zero surpresas.","La déclaration préparée pour vous":"A declaração preparada para si","La musique":"A música","La musique accompagne chaque moment de votre mariage : l'entrée à la cérémonie, le cocktail, le dîner puis la soirée dansante. Sur Wimbo, vous trouvez le chanteur, le quatuor, le groupe ou le DJ qui vous ressemble, et vous recevez un devis détaillé en quelques heures. Le contrat et la déclaration GUSO sont préparés pour vous.":"A música acompanha cada momento do seu casamento: a entrada na cerimónia, o cocktail, o jantar e, depois, a festa com dança. No Wimbo, encontra o cantor, o quarteto, a banda ou o DJ que tem a ver consigo e recebe um orçamento detalhado em poucas horas. O contrato e a declaração GUSO são preparados para si.","La musique nous rapproche":"A música aproxima-nos","La page que vous cherchez n'existe pas ou a été déplacée.":"A página que procura não existe ou foi movida.","La recherche, la consultation des profils et les demandes de devis sont gratuites et sans engagement. Lorsque vous réservez, des frais de service sont inclus dans le devis : ils couvrent le paiement sécurisé, la préparation des formalités GUSO et l'accompagnement en cas de problème.":"A pesquisa, a consulta de perfis e os pedidos de orçamento são gratuitos e sem compromisso. Quando reserva, o orçamento inclui uma taxa de serviço: cobre o pagamento seguro, a preparação das formalidades GUSO e o apoio em caso de problema.","La suite":"A seguir","Langue":"Idioma","Langues":"Idiomas","Le GUSO est le guichet qui permet de déclarer un artiste engagé pour un événement en France. Wimbo prépare la déclaration et intègre les cotisations au devis : vous n'avez qu'à valider.":"O GUSO é o balcão que permite declarar um artista contratado para um evento em França. O Wimbo prepara a declaração e inclui as contribuições no orçamento: só tem de validar.","Le GUSO est le guichet qui permet de déclarer un artiste engagé pour un événement occasionnel. C'est obligatoire en France quand vous engagez directement un artiste. Wimbo prépare la déclaration et intègre les cotisations au devis : vous n'avez qu'à valider.":"O GUSO é o balcão que permite declarar um artista contratado para um evento ocasional. É obrigatório em França quando contrata diretamente um artista. O Wimbo prepara a declaração e inclui as contribuições no orçamento: só tem de validar.","Le GUSO, on s'en occupe":"Do GUSO tratamos nós","Le blog Wimbo":"O blog Wimbo","Le coût total dès le devis":"O custo total logo no orçamento","Le jour J, l'artiste fait le show. Le solde est réglé après la prestation, puis vous laissez un avis.":"No grande dia, o artista dá espetáculo. O valor restante é pago após a atuação e, depois, deixa uma avaliação.","Le jour J, place à la musique. Le solde est réglé après la prestation.":"No grande dia, é hora da música. O valor restante é pago após a atuação.","Le monde de Wimbo":"O mundo Wimbo","Le paiement en ligne sécurisé sera activé à l'ouverture des réservations. En attendant, notre équipe vous contacte pour finaliser.":"O pagamento online seguro será ativado quando as reservas abrirem. Até lá, a nossa equipa entra em contacto consigo para finalizar.","Le plus choisi":"O mais escolhido","Le serveur ne répond pas pour le moment. Vérifiez votre connexion et réessayez dans quelques minutes.":"O servidor não está a responder de momento. Verifique a sua ligação e tente novamente dentro de alguns minutos.","Le service GUSO":"O serviço GUSO","Le site est-il traduit ?":"O site está traduzido?","Le site existe-t-il en portugais et en anglais ?":"O site está disponível em português e em inglês?","Le solde vous est versé dans les 48 heures suivant la prestation, une fois l'événement confirmé par le client. L'acompte est sécurisé dès la réservation.":"O valor restante é-lhe pago nas 48 horas seguintes à atuação, depois de o cliente confirmar o evento. O sinal fica protegido logo na reserva.","Les artistes Wimbo s'engagent à répondre sous 2 à 3 heures en journée. Le délai moyen de chaque artiste est affiché sur son profil.":"Os artistas Wimbo comprometem-se a responder no prazo de 2 a 3 horas durante o dia. O tempo médio de resposta de cada artista é apresentado no respetivo perfil.","Les artistes que vous avez mis de côté. Enregistrés sur cet appareil.":"Os artistas que pôs de parte. Guardados neste dispositivo.","Les avis sont-ils vérifiés ?":"As avaliações são verificadas?","Les clients savent exactement ce qu'ils paient, cotisations comprises. Fini les négociations gênantes au moment du devis.":"Os clientes sabem exatamente o que pagam, contribuições incluídas. Acabaram-se as negociações constrangedoras na altura do orçamento.","Les formalités GUSO préparées pour vos clients":"As formalidades GUSO preparadas para os seus clientes","Les organisateurs peuvent vous trouver et vous contacter.":"Os organizadores podem encontrá-lo e contactá-lo.","Les premiers artistes arrivent":"Os primeiros artistas estão a chegar","Les premiers avis arrivent bientôt":"As primeiras avaliações chegam em breve","Les vidéos sont disponibles avec les offres Pro (2 vidéos) et Premium (5 vidéos).":"Os vídeos estão disponíveis nos planos Pro (2 vídeos) e Premium (5 vídeos).","Les vidéos sont disponibles avec les offres Pro et Premium.":"Os vídeos estão disponíveis nos planos Pro e Premium.","Les vidéos sont disponibles avec les offres Pro et Premium. Vous pourrez en ajouter depuis votre espace en changeant d'offre.":"Os vídeos estão disponíveis nos planos Pro e Premium. Poderá adicioná-los na sua área quando mudar de plano.","Lien YouTube, Vimeo, Instagram ou TikTok":"Link do YouTube, Vimeo, Instagram ou TikTok","Lien copié":"Link copiado","Lire notre guide des prix":"Ler o nosso guia de preços","Lisbonne, Portugal":"Lisboa, Portugal","Logistique et équipement":"Logística e equipamento","Lun":"Seg","MP4 ou MOV, 50 Mo maximum. Filmez à l'horizontale de préférence.":"MP4 ou MOV, máximo de 50 MB. De preferência, filme na horizontal.","Mar":"Ter","Mariage":"Casamento","Mariage au Portugal, baptême en Guadeloupe, anniversaire à Lisbonne : comment trouver et réserver un artiste local sans être sur place.":"Casamento em Portugal, batizado em Guadalupe, aniversário em Lisboa: como encontrar e reservar um artista local sem estar lá.","Mariage, anniversaire, soirée d'entreprise ou fête au pays : la bonne musique pour chaque occasion.":"Casamento, aniversário, festa de empresa ou festa na terra: a música certa para cada ocasião.","Mariage, anniversaire…":"Casamento, aniversário…","Marquer comme traité":"Marcar como tratado","Marquer à traiter":"Marcar como por tratar","Membres fondateurs":"Membros fundadores","Mentions légales":"Informação legal","Mer":"Qua","Merci ! Votre avis sera publié après vérification.":"Obrigado! A sua avaliação será publicada após verificação.","Merci d'accepter l'utilisation de vos informations pour vous répondre.":"Aceite a utilização dos seus dados para lhe podermos responder.","Merci d'accepter les CGV pour continuer.":"Aceite as CGV para continuar.","Merci de noter les 4 critères.":"Avalie os 4 critérios.","Merci de remplir votre nom, un email valide et votre message.":"Preencha o seu nome, um email válido e a sua mensagem.","Mes demandes":"Os meus pedidos","Mes demandes de devis, favoris":"Os meus pedidos de orçamento, favoritos","Mes demandes envoyées (organisateur)":"Os meus pedidos enviados (organizador)","Mes disponibilités":"A minha disponibilidade","Mes favoris":"Os meus favoritos","Mes favoris · Wimbo":"Os meus favoritos · Wimbo","Mes informations":"Os meus dados","Mes paiements":"Os meus pagamentos","Mes photos":"As minhas fotos","Mes vidéos":"Os meus vídeos","Message":"Mensagem","Message bien reçu":"Mensagem recebida","Message mis à jour":"Mensagem atualizada","Messages":"Mensagens","Messages de contact":"Mensagens de contacto","Mieux notés":"Mais bem avaliados","Mise en avant en tête des résultats":"Destaque no topo dos resultados","Mise à jour impossible :":"Não foi possível atualizar:","Mois précédent":"Mês anterior","Mois suivant":"Mês seguinte","Mon compte":"A minha conta","Mon espace":"A minha área","Mon espace organisateur":"A minha área de organizador","Mon espace · Wimbo":"A minha área · Wimbo","Mon profil":"O meu perfil","Montage et déplacements":"Montagem e deslocações","Montant":"Montante","Mot de passe":"Palavra-passe","Mot de passe mis à jour":"Palavra-passe atualizada","Mot de passe oublié":"Palavra-passe esquecida","Mot de passe oublié ?":"Esqueceu-se da palavra-passe?","Mot de passe oublié · Wimbo":"Palavra-passe esquecida · Wimbo","Mot de passe refusé : choisissez au moins 8 caractères.":"Palavra-passe recusada: escolha pelo menos 8 caracteres.","Mot de passe trop court : 8 caractères minimum (une phrase courte marche très bien).":"Palavra-passe demasiado curta: mínimo de 8 caracteres (uma frase curta funciona muito bem).","Mot de passe trop court : 8 caractères minimum.":"Palavra-passe demasiado curta: mínimo de 8 caracteres.","Mot-clé":"Palavra-chave","Musiciens, chanteurs, groupes et DJ vérifiés pour vos événements, près de chez vous comme au pays.":"Músicos, cantores, bandas e DJ verificados para os seus eventos, perto de si e na terra.","Musiciens, chanteurs, groupes et DJ vérifiés. Devis en 2 à 3 heures, déclaration GUSO et paiement sécurisé inclus.":"Músicos, cantores, bandas e DJ verificados. Orçamento em 2 a 3 horas, declaração GUSO e pagamento seguro incluídos.","Musicien·ne":"Músico(a)","Musique du monde":"Música do mundo","Navigation principale":"Navegação principal","Nom":"Apelido","Nom de scène":"Nome artístico","Nom, email, mot de passe. Pas de carte bancaire.":"Nome, email, palavra-passe. Sem cartão bancário.","Nom, style, ville…":"Nome, estilo, cidade…","Nos articles":"Os nossos artigos","Note minimum":"Classificação mínima","Notre offre musicale":"A nossa oferta musical","Notre signature":"A nossa assinatura","Notre équipe le vérifie sous 48 h. En attendant, complétez-le pour qu'il soit prêt.":"A nossa equipa verifica-o no prazo de 48 h. Entretanto, complete-o para que fique pronto.","Notre équipe vous répond sous 24 h ouvrées.":"A nossa equipa responde-lhe no prazo de 24 h úteis.","Notre équipe vous répond sous 24 heures ouvrées.":"A nossa equipa responde-lhe no prazo de 24 horas úteis.","Notre équipe vérifie votre identité, vos extraits et votre statut. La validation prend en général 48 heures, après quoi votre profil apparaît dans les résultats.":"A nossa equipa verifica a sua identidade, os seus excertos e o seu estatuto. A validação demora normalmente 48 horas e, depois disso, o seu perfil passa a aparecer nos resultados.","Notre équipe vérifie votre profil, puis vous apparaissez dans les résultats.":"A nossa equipa verifica o seu perfil e, depois, passa a aparecer nos resultados.","Nous contacter":"Contacte-nos","Nous joindre":"Fale connosco","Nous sélectionnons actuellement des artistes dans cette catégorie. Confiez-nous votre recherche, nous vous proposons des profils sous 24 h.":"Estamos a selecionar artistas nesta categoria. Confie-nos a sua pesquisa: propomos-lhe perfis no prazo de 24 h.","Nous vous envoyons un lien pour choisir un nouveau mot de passe.":"Enviamos-lhe um link para escolher uma nova palavra-passe.","Nouveau":"Novo","Nouveau mot de passe":"Nova palavra-passe","Nouveau mot de passe · Wimbo":"Nova palavra-passe · Wimbo","Nouveau sur Wimbo":"Novo no Wimbo","Nouvelle demande":"Novo pedido","Noël & Nouvel an":"Natal & Ano Novo","Numéro de téléphone incomplet.":"Número de telefone incompleto.","Offert à vie : vous gardez toutes les fonctionnalités Premium, sans abonnement.":"Oferecido para sempre: mantém todas as funcionalidades Premium, sem subscrição.","Offre":"Plano","Offre de lancement":"Oferta de lançamento","Offre gratuite, commission de 15 % par prestation.":"Plano gratuito, comissão de 15 % por atuação.","Offrez-vous un concert privé dans votre salon ou votre jardin : une formule acoustique, conviviale et inoubliable pour vos proches.":"Dê-se ao luxo de um concerto privado na sua sala ou no seu jardim: um formato acústico, convivial e inesquecível para os seus mais próximos.","On s'occupe du reste":"Nós tratamos do resto","On vous attend sur scène":"Esperamos por si em palco","Options":"Opções","Organisateur":"Organizador","Organisateur : cliquez sur « Se connecter » puis « Je cherche un artiste ». Artiste : cliquez sur « Je suis artiste ». Les deux sont gratuits et prennent quelques minutes.":"Organizador: clique em «Iniciar sessão» e depois em «Procuro um artista». Artista: clique em «Sou artista». Ambos são gratuitos e demoram poucos minutos.","Organisateurs":"Organizadores","Organiser une fête au pays à distance : le guide diaspora":"Organizar uma festa na terra à distância: o guia da diáspora","Organiste":"Organista","Orgue":"Órgão","Oui : choisissez la langue avec le drapeau en haut de page (français, portugais ou anglais). Les présentations des artistes restent dans la langue où ils les ont rédigées.":"Sim: escolha o idioma com a bandeira no topo da página (francês, português ou inglês). As apresentações dos artistas mantêm-se no idioma em que foram escritas.","Oui : choisissez le français, le portugais ou l'anglais avec le drapeau en haut de page.":"Sim: escolha francês, português ou inglês com a bandeira no topo da página.","Oui, Wimbo n'a pas de frontières : vous pouvez réserver un artiste près de chez vous ou pour une fête au pays, et tout gérer à distance.":"Sim, o Wimbo não tem fronteiras: pode reservar um artista perto de si ou para uma festa na terra, e gerir tudo à distância.","Oui, c'est l'une des spécialités de Wimbo : une fête de famille au Portugal, aux Antilles, en Afrique ou ailleurs. Les échanges et le paiement se font en ligne, et nos artistes ont l'habitude des familles qui organisent à distance.":"Sim, é uma das especialidades do Wimbo: uma festa de família em Portugal, nas Antilhas, em África ou noutro lugar. A comunicação e o pagamento são feitos online, e os nossos artistas estão habituados a famílias que organizam à distância.","Oui, vous restez libre d'accepter ou de refuser chaque demande, et de proposer un devis adapté. Un taux de réponse élevé améliore toutefois votre visibilité.":"Sim, é livre de aceitar ou recusar cada pedido e de propor um orçamento adequado. No entanto, uma taxa de resposta elevada melhora a sua visibilidade.","Oui. Chaque avis est relu par notre équipe et rapproché d'une réservation réelle avant d'être publié sur le profil de l'artiste.":"Sim. Cada avaliação é revista pela nossa equipa e associada a uma reserva real antes de ser publicada no perfil do artista.","Oui. Créer votre profil et recevoir des demandes est gratuit. Une commission n'est prélevée que sur les prestations réalisées. Les 150 premiers artistes inscrits bénéficient du badge Premium à vie.":"Sim. Criar o seu perfil e receber pedidos é gratuito. Só é cobrada uma comissão sobre as atuações realizadas. Os 150 primeiros artistas registados beneficiam do selo Premium para sempre.","Oui. Wimbo est ouvert aux artistes du monde entier. Les formalités dépendent du pays de l'événement : en France (DOM compris), nous préparons la déclaration GUSO ; ailleurs, nous vous accompagnons au cas par cas.":"Sim. O Wimbo está aberto a artistas de todo o mundo. As formalidades dependem do país do evento: em França (incluindo os territórios ultramarinos), preparamos a declaração GUSO; noutros países, acompanhamo-lo caso a caso.","Où ?":"Onde?","Page introuvable · Wimbo":"Página não encontrada · Wimbo","Paiement garanti":"Pagamento garantido","Paiement garanti : l'acompte est sécurisé dès la réservation":"Pagamento garantido: o sinal fica protegido desde a reserva","Paiement sécurisé":"Pagamento seguro","Paiement sécurisé, solde après la prestation":"Pagamento seguro, valor restante após a atuação","Paiements":"Pagamentos","Paperasse GUSO":"Papelada GUSO","Parler à quelqu'un":"Falar com alguém","Partager":"Partilhar","Partenariat (lieu, wedding planner…)":"Parceria (espaço, wedding planner…)","Pas de":"Sem","Pas de photo sous la main ? Créez votre profil maintenant et ajoutez-les plus tard depuis votre espace.":"Não tem fotos à mão? Crie já o seu perfil e adicione-as mais tarde a partir da sua área.","Pas encore d'avis. Les avis sont publiés après chaque prestation réservée via Wimbo.":"Ainda sem avaliações. As avaliações são publicadas após cada atuação reservada através do Wimbo.","Pas encore de compte ?":"Ainda não tem conta?","Pas encore de favoris":"Ainda sem favoritos","Passer en mode":"Mudar para o modo","Patientez…":"Aguarde…","Pays":"País","Percussionniste":"Percussionista","Percussions":"Percussão","Photo supprimée":"Foto eliminada","Photo trop lourde (15 Mo maximum)":"Foto demasiado pesada (máximo 15 MB)","Photos":"Fotos","Photos ajoutées":"Fotos adicionadas","Pianiste":"Pianista","Pilotage de la plateforme":"Gestão da plataforma","Places fondateurs":"Lugares de fundador","Plus de 30 jours avant l'événement, l'acompte est remboursé intégralement. Entre 30 et 15 jours, 50 % de l'acompte est retenu ; en dessous de 15 jours, l'acompte est conservé.":"Mais de 30 dias antes do evento, o sinal é reembolsado na totalidade. Entre 30 e 15 dias, são retidos 50 % do sinal; a menos de 15 dias, o sinal não é devolvido.","Plus qu'un annuaire : un vrai service de réservation":"Mais do que um diretório: um verdadeiro serviço de reservas","Plus tard":"Mais tarde","Politique de confidentialité":"Política de privacidade","Populaires :":"Populares:","Posez votre question…":"Faça a sua pergunta…","Pour bloquer la date, un acompte de 30 % est demandé.":"Para garantir a data, é pedido um sinal de 30 %.","Pour devenir administrateur, votre adresse doit être ajoutée dans la table « wimbo_admins » (fichier SQL v3).":"Para se tornar administrador, o seu endereço tem de ser adicionado à tabela «wimbo_admins» (ficheiro SQL v3).","Pour démarrer":"Para começar","Pour les artistes actifs":"Para artistas ativos","Pour les pros à plein temps":"Para profissionais a tempo inteiro","Pour quel événement ?":"Para que evento?","Pour recevoir vos paiements, renseignez votre IBAN via notre prestataire de paiement sécurisé.":"Para receber os seus pagamentos, indique o seu IBAN através do nosso prestador de pagamentos seguro.","Pour un devis":"Para um orçamento","Pour vous prévenir par SMS quand un client vous contacte. Jamais partagé.":"Para o avisar por SMS quando um cliente o contactar. Nunca é partilhado.","Pourquoi Wimbo":"Porquê o Wimbo","Pourquoi rejoindre Wimbo":"Porquê aderir ao Wimbo","Premium · membre fondateur":"Premium · membro fundador","Presse":"Imprensa","Prestation":"Atuação","Prestation confirmée":"Atuação confirmada","Prestations via Wimbo":"Atuações através do Wimbo","Prix HT. La commission est prélevée uniquement sur les prestations réservées et réalisées via Wimbo.":"Preços sem IVA. A comissão só é cobrada sobre as atuações reservadas e realizadas através do Wimbo.","Prix croissant":"Preço crescente","Prix décroissant":"Preço decrescente","Pro et Premium seront activés dès l'ouverture du paiement en ligne. En attendant, votre profil fonctionne en Découverte.":"Os planos Pro e Premium serão ativados assim que o pagamento online estiver disponível. Entretanto, o seu perfil funciona no plano Descoberta.","Professionnalisme":"Profissionalismo","Profil en cours de validation.":"Perfil em validação.","Profil enregistré":"Perfil guardado","Profil gratuit, badge Premium offert à vie et des demandes qualifiées. Nous gérons l'administratif, vous gérez la scène.":"Perfil gratuito, selo Premium oferecido para sempre e pedidos qualificados. Nós tratamos da burocracia, o palco é consigo.","Profil public avec 5 photos":"Perfil público com 5 fotos","Profil refusé":"Perfil recusado","Profil remis en attente":"Perfil reposto em espera","Profil vérifié":"Perfil verificado","Profils vérifiés, devis en 2 à 3 h, GUSO inclus.":"Perfis verificados, orçamento em 2 a 3 h, GUSO incluído.","Profiter de l'offre":"Aproveitar a oferta","Profitez":"Aproveite","Près de chez vous ou à l'autre bout du monde : réservez un artiste local même à distance, pour les fêtes de la diaspora.":"Perto de si ou do outro lado do mundo: reserve um artista local mesmo à distância, para as festas da diáspora.","Précédent":"Anterior","Précédente":"Anterior","Prénom":"Nome próprio","Prénom et nom":"Nome e apelido","Présentation":"Apresentação","Présentez votre musique":"Apresente a sua música","Présentez-vous":"Apresente-se","Prêt à trouver votre artiste ?":"Pronto para encontrar o seu artista?","Publier":"Publicar","Publié":"Publicado","Puis-je demander des chansons particulières ?":"Posso pedir músicas específicas?","Puis-je fixer mes propres tarifs ?":"Posso definir os meus próprios preços?","Puis-je refuser une demande ?":"Posso recusar um pedido?","Puis-je réserver un artiste à l'étranger depuis la France ?":"Posso reservar um artista no estrangeiro a partir de França?","Puis-je réserver à l'étranger ?":"Posso reservar no estrangeiro?","Qu'est-ce que le GUSO ?":"O que é o GUSO?","Qu'est-ce que le GUSO et dois-je m'en occuper ?":"O que é o GUSO e tenho de tratar disso?","Qualité musicale":"Qualidade musical","Quand suis-je payé ?":"Quando sou pago?","Que se passe-t-il si l'artiste annule ?":"O que acontece se o artista cancelar?","Quel artiste ?":"Que artista?","Quel espace souhaitez-vous ouvrir ?":"Que área pretende abrir?","Quel statut faut-il pour travailler via Wimbo ?":"Que estatuto é necessário para trabalhar através do Wimbo?","Quelles différences entre les offres Découverte, Pro et Premium ?":"Quais as diferenças entre os planos Descoberta, Pro e Premium?","Quelles sont les offres artistes ?":"Quais são os planos para artistas?","Question générale":"Pergunta geral","Questions fréquentes":"Perguntas frequentes","Rayon de déplacement (km)":"Raio de deslocação (km)","Recevez des demandes de particuliers et d'entreprises, fixez vos tarifs, soyez payé à temps. Wimbo prépare les formalités pour vos clients.":"Receba pedidos de particulares e empresas, defina os seus preços e seja pago a tempo. O Wimbo prepara as formalidades para os seus clientes.","Recevoir la newsletter Wimbo (1 email par mois maximum)":"Receber a newsletter do Wimbo (máximo de 1 email por mês)","Recevoir le lien":"Receber o link","Recherche d'artiste personnalisée":"Pesquisa de artista personalizada","Rechercher un artiste · Wimbo":"Procurar um artista · Wimbo","Recommandés":"Recomendados","Refuser":"Recusar","Refusé":"Recusado","Refusés":"Recusados","Rejoignez les":"Junte-se aos","Rejoignez les 150 membres fondateurs":"Junte-se aos 150 membros fundadores","Remettre en attente":"Repor em espera","Renseigner vos indisponibilités":"Indicar as suas indisponibilidades","Restaurant & bar":"Restaurante & bar","Restaurateurs et gérants de bar : programmez des artistes live réguliers ou ponctuels pour animer vos soirées et fidéliser votre clientèle.":"Donos de restaurantes e gerentes de bares: programe artistas ao vivo, com regularidade ou pontualmente, para animar as suas noites e fidelizar a sua clientela.","Retirer":"Remover","Retiré de vos favoris":"Removido dos seus favoritos","Retour":"Voltar","Retour à l'accueil":"Voltar à página inicial","Retour à l'administration":"Voltar à administração","Retour à la connexion":"Voltar ao início de sessão","Retrouvez vos demandes, vos favoris et votre espace artiste.":"Encontre os seus pedidos, os seus favoritos e a sua área do artista.","Revenus encaissés":"Receitas recebidas","Réalisée":"Realizada","Récapitulatif de réservation, contrat et déclaration préparés automatiquement.":"Resumo da reserva, contrato e declaração preparados automaticamente.","Réception":"Receção","Rédiger une présentation (40 caractères minimum)":"Escrever uma apresentação (mínimo de 40 caracteres)","Réinitialiser mon mot de passe":"Repor a minha palavra-passe","Répertoire":"Repertório","Réponses immédiates":"Respostas imediatas","Réservation confirmée, l'artiste est prévenu":"Reserva confirmada, o artista foi avisado","Réserver ma place":"Reservar o meu lugar","Réserver un artiste n'a jamais été aussi simple":"Reservar um artista nunca foi tão simples","Réservez":"Reserve","Réservez sereinement":"Reserve com tranquilidade","Réveillon, fête de fin d'année, arbre de Noël : réservez tôt, les artistes sont très demandés en décembre.":"Réveillon, festa de fim de ano, festa de Natal: reserve cedo, os artistas são muito procurados em dezembro.","Salarié":"Assalariado","Sam":"Sáb","Sans engagement, modifiable à tout moment. Une commission uniquement sur les prestations réalisées.":"Sem compromisso, pode ser alterado a qualquer momento. Comissão apenas sobre as atuações realizadas.","Saxophone":"Saxofone","Saxophoniste":"Saxofonista","Se connecter":"Iniciar sessão","Se déconnecter":"Terminar sessão","Serveur indisponible":"Servidor indisponível","Sinon, nous affichons votre prénom et votre nom.":"Caso contrário, mostramos o seu nome e apelido.","Site web":"Website","Siège":"Sede","Soirée":"Festa","Soirée complète":"Noite completa","Soirée de gala, séminaire, inauguration ou fête de fin d'année : nos artistes ont l'habitude des événements professionnels. Facture au nom de votre société, interlocuteur unique et accompagnement administratif.":"Noite de gala, seminário, inauguração ou festa de fim de ano: os nossos artistas estão habituados a eventos profissionais. Fatura em nome da sua empresa, interlocutor único e apoio administrativo.","Solde après la prestation":"Valor restante após a atuação","Solo, duo, groupe ou DJ : les fourchettes de prix constatées et les critères qui font varier le devis.":"Solo, duo, banda ou DJ: os intervalos de preços praticados e os critérios que fazem variar o orçamento.","Sous 24 h ouvrées, du lundi au samedi":"No prazo de 24 h úteis, de segunda a sábado","Statistiques avancées":"Estatísticas avançadas","Statut":"Estatuto","Style, ville, tarif indicatif, quelques photos. Vous pourrez tout compléter plus tard.":"Estilo, cidade, preço indicativo, algumas fotos. Pode completar tudo mais tarde.","Styles":"Estilos","Suivant":"Seguinte","Suivante":"Seguinte","Suivez nos conseils":"Siga os nossos conselhos","Suivez vos demandes de devis et vos réservations.":"Acompanhe os seus pedidos de orçamento e as suas reservas.","Suivre ma demande":"Acompanhar o meu pedido","Sujet":"Assunto","Support par email sous 48 h":"Apoio por email no prazo de 48 h","Support prioritaire":"Apoio prioritário","Supprimer":"Eliminar","Sur devis":"Sob orçamento","Sur devis uniquement":"Apenas sob orçamento","Sur la page de connexion, cliquez sur « Mot de passe oublié ? » : vous recevrez un lien par email pour en choisir un nouveau.":"Na página de início de sessão, clique em «Esqueceu-se da palavra-passe?»: receberá por email um link para escolher uma nova.","Tarif":"Preço","Tarif indicatif pour une prestation de 2 heures. Le devis précise la durée, le déplacement et les cotisations sociales (GUSO) : vous connaissez le coût total avant de réserver.":"Preço indicativo para uma atuação de 2 horas. O orçamento especifica a duração, a deslocação e as contribuições sociais (GUSO): fica a saber o custo total antes de reservar.","Taux de réponse":"Taxa de resposta","Total du devis":"Total do orçamento","Totalement. Vous indiquez une fourchette sur votre profil et ajustez chaque devis selon la date, la durée et le déplacement.":"Sem dúvida. Indica um intervalo de preços no seu perfil e ajusta cada orçamento consoante a data, a duração e a deslocação.","Touchez aussi les familles de la diaspora qui organisent une fête au pays, partout dans le monde.":"Chegue também às famílias da diáspora que organizam uma festa na terra, em qualquer parte do mundo.","Tous":"Todos","Tous les budgets":"Todos os orçamentos","Tous les genres":"Todos os géneros","Tous les instruments":"Todos os instrumentos","Tous les pays":"Todos os países","Tout Découverte, plus :":"Tudo o que o Descoberta inclui, mais:","Tout Pro, plus :":"Tudo o que o Pro inclui, mais:","Tout ce qu'il faut savoir pour réserver un artiste ou rejoindre Wimbo.":"Tudo o que precisa de saber para reservar um artista ou aderir ao Wimbo.","Tout effacer":"Limpar tudo","Toutes les demandes":"Todos os pedidos","Toutes les notes":"Todas as classificações","Toutes les places de membres fondateurs sont prises. Merci à nos 150 premiers artistes !":"Todos os lugares de membro fundador estão ocupados. Obrigado aos nossos 150 primeiros artistas!","Toutes les questions":"Todas as perguntas","Traité":"Tratado","Tri :":"Ordenar:","Tri : Mieux notés":"Ordenar: Mais bem avaliados","Tri : Prix croissant":"Ordenar: Preço crescente","Tri : Prix décroissant":"Ordenar: Preço decrescente","Tri : Recommandés":"Ordenar: Recomendados","Trier":"Ordenar","Tromboniste":"Trombonista","Trompette":"Trompete","Trompettiste":"Trompetista","Trop de tentatives en peu de temps. Patientez quelques minutes avant de réessayer.":"Demasiadas tentativas em pouco tempo. Aguarde alguns minutos antes de tentar novamente.","Trouver, réserver et payer un artiste en toute sérénité, sans vous soucier de l'administratif.":"Encontrar, reservar e pagar um artista com toda a tranquilidade, sem se preocupar com a burocracia.","Trouvez par genre, événement ou instrument":"Pesquise por género, evento ou instrumento","Trouvez un artiste et demandez un devis gratuit en 2 minutes.":"Encontre um artista e peça um orçamento gratuito em 2 minutos.","Trouvez votre artiste sur Wimbo":"Encontre o seu artista no Wimbo","Type d'artiste":"Tipo de artista","Type d'événement":"Tipo de evento","Type d'événement, date, ville, style recherché, budget…":"Tipo de evento, data, cidade, estilo pretendido, orçamento…","Téléphone":"Telefone","Un compte existe déjà avec cet email. Connectez-vous ou utilisez « Mot de passe oublié ».":"Já existe uma conta com este email. Inicie sessão ou use «Esqueceu-se da palavra-passe?».","Un compte existe déjà avec cet email. Utilisez le même mot de passe, ou « Mot de passe oublié » sur la page de connexion.":"Já existe uma conta com este email. Use a mesma palavra-passe ou «Esqueceu-se da palavra-passe?» na página de início de sessão.","Un enterrement de vie de jeune fille ou de garçon mémorable : DJ, groupe de reprises ou chanteur pour faire chanter et danser toute la bande.":"Uma despedida de solteira ou de solteiro memorável: DJ, banda de covers ou cantor para pôr todo o grupo a cantar e a dançar.","Un interlocuteur":"Um interlocutor","Un lien vidéo n'est pas valide : copiez l'adresse complète (elle commence par https://).":"Um link de vídeo não é válido: copie o endereço completo (começa por https://).","Un seul compte pour vos espaces organisateur et artiste.":"Uma única conta para as suas áreas de organizador e de artista.","Une ambiance élégante pour un cocktail ou un dîner : piano-voix, jazz, bossa nova, saxophone lounge ou quatuor à cordes. Des formules acoustiques, discrètes et adaptées aux lieux intimes.":"Um ambiente elegante para um cocktail ou um jantar: piano e voz, jazz, bossa nova, saxofone lounge ou quarteto de cordas. Formatos acústicos, discretos e adaptados a espaços intimistas.","Une erreur est survenue. Réessayez dans un instant.":"Ocorreu um erro. Tente novamente dentro de instantes.","Une question ?":"Tem alguma pergunta?","Une question, une recherche particulière, un partenariat ? Écrivez-nous, nous répondons sous 24 h ouvrées.":"Uma pergunta, uma pesquisa específica, uma parceria? Escreva-nos: respondemos no prazo de 24 h úteis.","Une soirée entre amis, une fête de famille, une pendaison de crémaillère : un musicien ou un DJ fait toute la différence. Wimbo vous aide à trouver l'artiste disponible près de chez vous, au bon prix.":"Um serão entre amigos, uma festa de família, uma festa de casa nova: um músico ou um DJ faz toda a diferença. O Wimbo ajuda-o a encontrar o artista disponível perto de si, ao preço certo.","Une équipe à votre écoute":"Uma equipa ao seu dispor","Validation sous 48 h":"Validação em 48 h","Valider":"Validar","Valider les artistes, modérer les avis, suivre les demandes et les messages.":"Validar artistas, moderar avaliações, acompanhar pedidos e mensagens.","Validez le devis et réglez un acompte de 30 % : la date est bloquée, votre paiement est sécurisé.":"Valide o orçamento e pague um sinal de 30 %: a data fica garantida e o seu pagamento protegido.","Validé":"Validado","Validés":"Validados","Ven":"Sex","Version de présentation : les profils et avis affichés sont des exemples.":"Versão de demonstração: os perfis e as avaliações apresentados são exemplos.","Vidéo Vimeo":"Vídeo Vimeo","Vidéo YouTube":"Vídeo YouTube","Vidéo ajoutée":"Vídeo adicionado","Vidéo supprimée":"Vídeo eliminado","Vidéo trop lourde : 50 Mo maximum.":"Vídeo demasiado pesado: máximo 50 MB.","Vidéos":"Vídeos","Vidéos : non incluses dans votre offre.":"Vídeos: não incluídos no seu plano.","Vidéos courtes":"Vídeos curtos","Ville":"Cidade","Ville ou région":"Cidade ou região","Ville, région…":"Cidade, região…","Violon":"Violino","Violoncelle":"Violoncelo","Violoncelliste":"Violoncelista","Violoniste":"Violinista","Visibilité renforcée dans les résultats":"Visibilidade reforçada nos resultados","Vivez de":"Viva da","Voir l'aperçu":"Pré-visualizar","Voir la fiche":"Ver ficha","Voir les abonnements":"Ver os planos","Voir les conditions":"Ver as condições","Voir les offres":"Ver os planos","Voir les résultats":"Ver resultados","Voir mon profil":"Ver o meu perfil","Voir mon profil public":"Ver o meu perfil público","Voir plus de genres":"Ver mais géneros","Voir toute la FAQ":"Ver todas as FAQ","Vos paiements apparaîtront ici après votre première prestation. Le solde est versé sous 48 h après chaque événement.":"Os seus pagamentos aparecerão aqui após a sua primeira atuação. O valor restante é transferido no prazo de 48 h após cada evento.","Vos photos":"As suas fotos","Vos questions":"As suas perguntas","Vos styles":"Os seus estilos","Vos tarifs, vos règles":"Os seus preços, as suas regras","Votre acompte est sécurisé, le solde n'est versé à l'artiste qu'après la prestation.":"O seu sinal fica protegido e o valor restante só é pago ao artista após a atuação.","Votre avis sera publié après vérification de la prestation.":"A sua avaliação será publicada após a verificação da atuação.","Votre cachet (€)":"O seu cachet (€)","Votre commentaire":"O seu comentário","Votre compte":"A sua conta","Votre compte a un profil artiste et un espace organisateur.":"A sua conta tem um perfil de artista e uma área de organizador.","Votre devis :":"O seu orçamento:","Votre email n'est pas encore confirmé : cliquez sur le lien reçu par email, puis reconnectez-vous.":"O seu email ainda não foi confirmado: clique no link que recebeu por email e volte a iniciar sessão.","Votre message":"A sua mensagem","Votre musique":"A sua música","Votre nom":"O seu nome","Votre offre":"O seu plano","Votre offre ne permet pas d'ajouter plus de photos.":"O seu plano não permite adicionar mais fotos.","Votre parcours, votre répertoire, les événements que vous animez…":"O seu percurso, o seu repertório, os eventos que anima…","Votre profil a bien été enregistré":"O seu perfil foi guardado","Votre profil affichera « Sur devis » : vous fixez le prix au cas par cas, à chaque demande.":"O seu perfil mostrará «Sob orçamento»: define o preço caso a caso, em cada pedido.","Votre profil en ligne en 5 minutes":"O seu perfil online em 5 minutos","Votre profil est créé. Notre équipe le valide sous 48 h, vous serez prévenu par email. En attendant, complétez-le pour recevoir plus de demandes.":"O seu perfil foi criado. A nossa equipa valida-o no prazo de 48 h e será avisado por email. Entretanto, complete-o para receber mais pedidos.","Votre profil est en ligne.":"O seu perfil está online.","Votre question":"A sua pergunta","Votre tarif":"O seu preço","Votre utilisation":"A sua utilização","Votre ville":"A sua cidade","Vous engagez un musicien pour une fête privée ? Voici ce qu'est le GUSO, pourquoi il est obligatoire et comment Wimbo s'en charge pour vous.":"Vai contratar um músico para uma festa privada? Saiba o que é o GUSO, porque é obrigatório e como o Wimbo trata disso por si.","Vous fixez votre fourchette et ajustez chaque devis. Vous acceptez ou refusez librement.":"Define o seu intervalo de preços e ajusta cada orçamento. Aceita ou recusa livremente.","Vous ne trouvez pas votre réponse ?":"Não encontra a resposta?","Vous pourriez également aimer":"Também poderá gostar","Vous profitez, on s'occupe du reste":"Aproveite, nós tratamos do resto","Vous réglez un acompte de 30 % pour bloquer la date, par carte via notre prestataire de paiement sécurisé. Le solde est réglé après la prestation et n'est versé à l'artiste qu'une fois l'événement passé.":"Paga um sinal de 30 % para garantir a data, com cartão, através do nosso prestador de pagamentos seguro. O valor restante é pago após a atuação e só é transferido para o artista depois do evento.","Vous validez en un clic":"Valida com um clique","Vous validez et réglez 30 % d'acompte : la date est bloquée.":"Valida e paga 30 % de sinal: a data fica garantida.","Vous vivez en France et organisez une fête de famille au Portugal, aux Antilles ou ailleurs ? Réservez un artiste local à distance, échangez avec lui en ligne et payez en toute sécurité. Wimbo s'occupe du lien.":"Vive em França e vai organizar uma festa de família em Portugal, nas Antilhas ou noutro lugar? Reserve um artista local à distância, fale com ele online e pague com toda a segurança. O Wimbo faz a ponte.","Vous vous demandez peut-être":"Talvez se esteja a perguntar","Vous êtes":"Sou","Vous êtes artiste ?":"É artista?","Vous êtes artiste ? Créez directement votre profil, c'est gratuit :":"É artista? Crie diretamente o seu perfil, é gratuito:","Vous êtes connecté avec":"Tem sessão iniciada com","Vous êtes déconnecté":"Terminou a sessão","Vous êtes déjà connecté":"Já tem sessão iniciada","Vues du profil (30 j)":"Visualizações do perfil (30 dias)","Vérifiez votre boîte mail":"Verifique a sua caixa de correio","Vérifié":"Verificado","Wimbo ajoute automatiquement les cotisations GUSO et les frais de service dans le devis envoyé au client.":"O Wimbo adiciona automaticamente as contribuições GUSO e as taxas de serviço ao orçamento enviado ao cliente.","Wimbo me permet de jouer pour les familles franco-portugaises des deux côtés de la frontière, sans me noyer dans la paperasse.":"O Wimbo permite-me tocar para famílias franco-portuguesas dos dois lados da fronteira, sem me afogar em papelada.","Wimbo réunit des artistes vérifiés pour les mariages, fêtes privées, anniversaires et événements d'entreprise, avec l'administratif en moins.":"O Wimbo reúne artistas verificados para casamentos, festas privadas, aniversários e eventos empresariais, sem a burocracia.","Wimbo, accueil":"Wimbo, página inicial","Zone de déplacement":"Zona de deslocação","Zéro paperasse":"Zero papelada","[Wimbo] Vue artists_public absente (exécuter le SQL v2) :":"[Wimbo] Vista artists_public em falta (executar o SQL v2):","avec vos informations et celles de l'artiste.":"com os seus dados e os do artista.","cette fonction n'est pas encore activée : exécutez le fichier « SQL site v3 » dans Supabase.":"esta função ainda não está ativada: execute o ficheiro «SQL site v3» no Supabase.","délai dépassé":"tempo limite excedido","départ":"começo","je m'inscris":"registe-se","l'espace vidéo n'est pas encore activé (fichier « SQL site v3 » à exécuter dans Supabase)":"a área de vídeos ainda não está ativada (ficheiro «SQL site v3» a executar no Supabase)","la base de données a refusé l'enregistrement (règles de sécurité Supabase). Exécutez le fichier « SQL site v2 » dans Supabase puis réessayez.":"a base de dados recusou o registo (regras de segurança do Supabase). Execute o ficheiro «SQL site v2» no Supabase e tente novamente.","le profil a été envoyé mais la base ne permet pas de le relire (règles de sécurité Supabase). Exécutez le fichier « SQL site v2 » dans Supabase puis reconnectez-vous.":"o perfil foi enviado, mas a base de dados não permite lê-lo (regras de segurança do Supabase). Execute o ficheiro «SQL site v2» no Supabase e volte a iniciar sessão.","le serveur ne répond pas":"o servidor não responde","nous rapproche":"aproxima-nos","novembre 2026":"novembro de 2026","ouvre un espace artiste complet.":"abre uma área do artista completa.","panique":"pânico","parmi nous":"de volta","places de membres fondateurs : badge Premium offert à vie":"lugares de membro fundador: selo Premium oferecido para sempre","politique de confidentialité":"política de privacidade","un profil existe déjà avec cet email (créé avec l'ancienne version du site). Supprimez l'ancien compte de test dans Supabase, ou utilisez une autre adresse.":"já existe um perfil com este email (criado com a versão antiga do site). Elimine a conta de teste antiga no Supabase ou use outro endereço.","vidéo trop lourde pour le serveur (50 Mo maximum)":"vídeo demasiado pesado para o servidor (máximo 50 MB)","votre art":"sua arte","votre offre ne permet pas d'ajouter plus de photos.":"o seu plano não permite adicionar mais fotos.","votre offre ne permet pas d'ajouter plus de vidéos":"o seu plano não permite adicionar mais vídeos","votre offre ne permet pas d'ajouter plus de vidéos.":"o seu plano não permite adicionar mais vídeos.","© 2026 Wimbo · CWEA SAS · Tous droits réservés":"© 2026 Wimbo · CWEA SAS · Todos os direitos reservados","« Je ne cours plus après les demandes : elles arrivent qualifiées, avec la date, le lieu et le budget. Et le paiement tombe à l'heure. »":"«Já não ando atrás dos pedidos: chegam qualificados, com a data, o local e o orçamento. E o pagamento chega a horas.»","« Les clients savent exactement ce qu'ils paient, cotisations comprises. Fini les négociations gênantes au moment du devis. »":"«Os clientes sabem exatamente o que pagam, contribuições incluídas. Acabaram-se as negociações constrangedoras no momento do orçamento.»","« Wimbo me permet de jouer pour les familles franco-portugaises des deux côtés de la frontière, sans me noyer dans la paperasse. »":"«O Wimbo permite-me tocar para famílias franco-portuguesas dos dois lados da fronteira, sem me afogar em papelada.»","· Tous droits réservés":"· Todos os direitos reservados","· Vous êtes artiste ?":"· É artista?","· tarif sur mesure":"· preço à medida","À lire aussi":"Leia também","À partir de":"A partir de","À traiter":"Por tratar","Écrire à l'équipe Wimbo":"Escrever à equipa Wimbo","Électro / House":"Eletrónica / House","Étape 1":"Passo 1","Étape 2":"Passo 2","Étape 3":"Passo 3","Étape 4":"Passo 4","Événement":"Evento","Événement d'entreprise":"Evento empresarial","Événements":"Eventos","Abonnements artistes":"Planos para artistas","Autres événements":"Outros eventos","Bonjour ! Je réponds aux questions fréquentes sur Wimbo. Que voulez-vous savoir ?":"Olá! Respondo às perguntas frequentes sobre o Wimbo. O que gostaria de saber?","Chercher un artiste":"Procurar um artista","Choisir vos styles":"Escolher os seus estilos","Connexion artistes":"Acesso para artistas","Créer un profil artiste":"Criar um perfil de artista","Découvrez tous les événements":"Descubra todos os eventos","Découvrir les artistes":"Descobrir os artistas","Espace artiste":"Área do artista","Espace artistes":"Área dos artistas","FAQ artistes":"FAQ para artistas","Instruments et artistes":"Instrumentos e artistas","Je cherche un artiste":"Procuro um artista","Je suis artiste":"Sou artista","Laisser un avis":"Deixar uma avaliação","Lire tous les avis":"Ler todas as avaliações","Mon espace artiste":"A minha área de artista","Publier mon avis":"Publicar a minha avaliação","Tous les artistes":"Todos os artistas","Tous les événements":"Todos os eventos","Trouver un artiste":"Encontrar um artista","Trouvez l'artiste idéal pour votre événement":"Encontre o artista ideal para o seu evento","Vidéos courtes de 15 secondes maximum (MP4 ou MOV, 50 Mo). Les liens YouTube et Vimeo du formulaire ci-dessus comptent aussi.":"Vídeos curtos de 15 segundos no máximo (MP4 ou MOV, 50 MB). As ligações YouTube e Vimeo do formulário acima também contam.","Voir les artistes":"Ver os artistas","Voir tous les artistes":"Ver todos os artistas","Vous n'avez pas encore de profil artiste":"Ainda não tem um perfil de artista","Wimbo · Musiciens, chanteurs, groupes et DJ pour vos événements":"Wimbo · Músicos, cantores, bandas e DJ para os seus eventos","et la":"e a","Passer en mode organisateur":"Mudar para o modo organizador","Passer en mode artiste":"Mudar para o modo artista","CGV":"Condições de venda","Musiciens, chanteurs, groupes et DJ vérifiés pour vos événements.":"Músicos, cantores, bandas e DJ verificados para os seus eventos.","* Champs obligatoires":"* Campos obrigatórios","Écrivez votre message.":"Escreva a sua mensagem.","Famille":"Família","Entreprise":"Empresa","La musique qui rapproche,":"A música que aproxima,","les émotions qui restent":"as emoções que ficam","La musique qui rapproche, les émotions qui restent":"A música que aproxima, as emoções que ficam","Votre art,":"A sua arte,","leurs émotions":"as emoções deles","Votre art, leurs émotions":"A sua arte, as emoções deles","Profil gratuit et demandes qualifiées. Nous gérons l'administratif, vous gérez la scène.":"Perfil gratuito e pedidos qualificados. Nós tratamos da papelada, o palco é consigo.","Filtrez par style, événement, ville et budget. Chaque profil est vérifié par notre équipe.":"Filtre por estilo, evento, cidade e orçamento. Cada perfil é verificado pela nossa equipa.","(recommandé, jusqu'à 4 : la première sera votre photo principale)":"(recomendado, até 4: a primeira será a sua foto principal)","Wimbo · La musique qui rapproche, les émotions qui restent":"Wimbo · A música que aproxima, as emoções que ficam","Trouver un musicien, un chanteur ou un DJ · Wimbo":"Encontrar um músico, cantor ou DJ · Wimbo","Comment réserver un musicien ou un DJ · Wimbo":"Como reservar um músico ou DJ · Wimbo","Musiciens, chanteurs, DJ : trouvez des dates avec Wimbo":"Músicos, cantores, DJ: encontre atuações com o Wimbo","Abonnements artistes : Découverte, Pro, Premium · Wimbo":"Planos para artistas: Descoberta, Pro, Premium · Wimbo","Avis clients sur les artistes · Wimbo":"Avaliações de clientes sobre os artistas · Wimbo","FAQ : devis, paiement, GUSO et réservation · Wimbo":"FAQ: orçamentos, pagamento, GUSO e reservas · Wimbo","Blog : conseils musique pour vos événements · Wimbo":"Blog: conselhos de música para os seus eventos · Wimbo"},"tpl":{"(facultatif, 15 secondes maximum, {n} au total avec les liens)":"(opcional, 15 segundos no máximo, {n} no total com os links)",", déplacements possibles au-delà":", com deslocações possíveis para além dessa zona","Action impossible : {err}":"Não foi possível realizar a ação: {err}","Bienvenue sur Wimbo, {name} !":"Boas-vindas ao Wimbo, {name}!","Bienvenue {name}":"Boas-vindas, {name}","Bienvenue {name} !":"Boas-vindas, {name}!","Bonjour {name}":"Olá, {name}","Cette vidéo dure {n} secondes : 15 secondes maximum.":"Este vídeo dura {n} segundos: o máximo é 15 segundos.","Choisir {plan}":"Escolher {plan}","Commission de {n} % par prestation.":"Comissão de {n} % por atuação.","Commission {n} % par prestation":"Comissão de {n} % por atuação","Contact : {email}":"Contacto: {email}","Demande : {plan}":"Pedido: {plan}","Demande de passage en {plan} enregistrée : elle sera activée dès l'ouverture du paiement en ligne, ou par l'équipe Wimbo.":"Pedido de mudança para {plan} registado: será ativado assim que o pagamento online estiver disponível, ou pela equipa Wimbo.","Demande envoyée en tant que {name}":"Pedido enviado como {name}","Demande envoyée à {name} !":"Pedido enviado a {name}!","Demander l'offre {plan}":"Pedir o plano {plan}","Demander un devis à {name}":"Pedir orçamento a {name}","Dernière mise à jour : {date}":"Última atualização: {date}","Devis reçu : {price}":"Orçamento recebido: {price}","Envoi de la vidéo {i} sur {n}…":"A enviar o vídeo {i} de {n}…","Envoi de {n} photos…":"A enviar {n} fotos…","Envoi de {n} photo…":"A enviar {n} foto…","Envoyée le {date}":"Enviado a {date}","Genres":"Géneros","Il reste {n} places":"Restam {n} lugares","Il reste {n} places : inscrivez-vous maintenant et profitez de toutes les fonctionnalités Premium (30 photos, 5 vidéos), sans abonnement.":"Restam {n} lugares: registe-se já e aproveite todas as funcionalidades Premium (30 fotos, 5 vídeos), sem subscrição.","Il reste {n} places de membres fondateurs : Premium offert à vie.":"Restam {n} lugares de membro fundador: Premium oferecido para sempre.","Instruments":"Instrumentos","La lecture vidéo sera disponible à l'ouverture de la plateforme. Demandez un devis pour recevoir d'autres extraits de {name}.":"A reprodução de vídeo ficará disponível com a abertura da plataforma. Peça um orçamento para receber outros excertos de {name}.","La vidéo n'a pas pu être envoyée ({err}). Vous pourrez l'ajouter depuis votre espace artiste.":"Não foi possível enviar o vídeo ({err}). Poderá adicioná-lo a partir da sua área do artista.","Lecture impossible : {err}":"Não foi possível ler: {err}","Les documents juridiques de Wimbo sont rédigés en français : seule cette version fait foi.":"Os documentos jurídicos do Wimbo estão redigidos em francês: só essa versão faz fé.","Membre fondateur : il reste {n} places. Votre profil sera Premium à vie (30 photos, 5 vidéos), gratuitement.":"Membro fundador: restam {n} lugares. O seu perfil será Premium para sempre (30 fotos, 5 vídeos), gratuitamente.","Merci {name}, nous vous répondons sous 24 h ouvrées à {email}.":"Obrigado, {name}! Respondemos-lhe no prazo de 24 h úteis para {email}.","Musiciens et groupes {genre}":"Músicos e bandas de {genre}","Musique pour {event}":"Música para {event}","Note moyenne sur {n} avis":"Classificação média com base em {n} avaliações","Nous avons envoyé un lien de confirmation à <strong>{email}</strong>. Cliquez dessus puis connectez-vous : votre profil et vos photos seront enregistrés automatiquement.":"Enviámos um link de confirmação para <strong>{email}</strong>. Clique nele e depois inicie sessão: o seu perfil e as suas fotos serão guardados automaticamente.","Nous avons envoyé un lien de confirmation à <strong>{email}</strong>. Cliquez dessus, puis connectez-vous : votre compte sera prêt.":"Enviámos um link de confirmação para <strong>{email}</strong>. Clique nele e, depois, inicie sessão: a sua conta ficará pronta.","Offre {plan} appliquée":"Plano {plan} aplicado","Plus qu'une étape, {name} !":"Só falta um passo, {name}!","Premium offert à vie aux {n} premiers artistes":"Premium oferecido para sempre aos {n} primeiros artistas","Profil complété à {n} %":"Perfil {n} % completo","Publié le {date} par l'équipe Wimbo":"Publicado a {date} pela equipa Wimbo","Reçue le {date}":"Recebido a {date}","Réponse de {name}":"Resposta de {name}","Réponse sous {t} en moyenne":"Resposta em {t}, em média","Si un compte existe pour {email}, vous allez recevoir un lien de réinitialisation. Pensez à vérifier vos spams.":"Se existir uma conta para {email}, vai receber um link de reposição. Não se esqueça de verificar a pasta de spam.","Suppression impossible : {err}":"Não foi possível eliminar: {err}","Sur devis":"Sob orçamento","Trouvez un {instrument} pour votre événement : profils vérifiés, photos, vidéos et avis clients. Demandez un devis gratuit et recevez une réponse sous 2 à 3 heures.":"Encontre um {instrument} para o seu evento: perfis verificados, fotos, vídeos e avaliações de clientes. Peça um orçamento gratuito e receba uma resposta em 2 a 3 horas.","Type d'artiste":"Tipo de artista","Version {v} du {date}":"Versão {v} de {date}","Vidéo non envoyée : {err}":"Vídeo não enviado: {err}","Vidéos courtes {opt}":"Vídeos curtos {opt}","Ville principale":"Cidade principal","Voir la vidéo sur {site}":"Ver o vídeo no {site}","Votre avis sur {name}":"A sua avaliação de {name}","Votre offre permet {n} vidéos au total (fichiers et liens).":"O seu plano permite {n} vídeos no total (ficheiros e links).","Votre offre {plan} permet {n} photos. La première est votre photo principale.":"O seu plano {plan} permite {n} fotos. A primeira é a sua foto principal.","Vous avez atteint les {n} vidéos de votre offre.":"Atingiu o limite de {n} vídeos do seu plano.","Vous cherchez un artiste {genre} pour un mariage, une fête privée ou un événement d'entreprise ? Découvrez des profils vérifiés, écoutez leurs extraits, comparez les cachets et demandez un devis en quelques clics. Nous préparons la déclaration GUSO et sécurisons le paiement.":"Procura um artista de {genre} para um casamento, uma festa privada ou um evento empresarial? Descubra perfis verificados, ouça os seus excertos, compare os cachets e peça um orçamento em poucos cliques. Preparamos a declaração GUSO e garantimos a segurança do pagamento.","Vous recevrez une réponse à <strong>{email}</strong>, en général sous {time}.":"Receberá uma resposta em <strong>{email}</strong>, normalmente no prazo de {time}.","dès {price}":"desde {price}","l'artiste":"o artista","membre fondateur":"membro fundador","pour {event}":"para {event}","sur {n} avis":"em {n} avaliações","tarif sur mesure":"preço à medida","{cat} · {read} de lecture":"{cat} · {read} de leitura","{city} et {n} km autour":"{city} e {n} km em redor","{instrument} pour votre événement":"{instrument} para o seu evento","{n} artiste":"{n} artista","{n} artiste disponible":"{n} artista disponível","{n} artistes":"{n} artistas","{n} artistes disponibles":"{n} artistas disponíveis","{n} avis":"{n} avaliações","{n} avis vérifié":"{n} avaliação verificada","{n} avis vérifiés":"{n} avaliações verificadas","{n} demandes de devis":"{n} pedidos de orçamento","{n} invités":"{n} convidados","{n} photo(s)":"{n} foto(s)","{n} événements":"{n} eventos","À partir de {price}":"A partir de {price}","Étape {n} sur 3":"Passo {n} de 3","à {place}":"em {place}","{n} avis#1":"{n} avaliação","Offre de lancement : Premium offert à vie aux {n} premiers artistes":"Oferta de lançamento: Premium para sempre para os {n} primeiros artistas","Plus que {n} places":"Restam apenas {n} lugares","Je m'inscris gratuitement":"Inscreva-se gratuitamente"},"blog":{"choisir-musicien-mariage":{"title":"Música de casamento: o guia para escolher o seu artista","excerpt":"Cerimónia, cocktail, jantar, festa: que artista para cada momento, com que orçamento e com quanta antecedência reservar?","body":"<p>A música é uma das recordações mais marcantes de um casamento. Bem escolhida, acompanha a emoção da cerimónia, descontrai o ambiente do cocktail e põe todas as gerações a dançar. Eis como proceder, passo a passo.</p>\n<h3>1. Divida o seu dia em momentos</h3>\n<p>Um casamento tem geralmente quatro momentos musicais: a <strong>cerimónia</strong> (entrada, troca de votos, saída), o <strong>cocktail</strong>, o <strong>jantar</strong> e a <strong>festa dançante</strong>. Cada momento pede um formato diferente: um quarteto ou um guitarrista-cantor para a cerimónia, um duo de jazz ou um saxofonista para o cocktail e, depois, uma banda ou um DJ para a festa.</p>\n<h3>2. Escolha a formação adequada ao seu espaço</h3>\n<p>Uma quinta ao ar livre sem eletricidade? Prefira um formato acústico. Uma grande sala com 200 convidados? Será necessária uma sonorização adequada, que a maioria das bandas fornece. Verifique sempre o espaço necessário indicado no perfil do artista.</p>\n<h3>3. Defina um orçamento realista</h3>\n<p>A título indicativo, conte com 400 a 900 € para um músico a solo, 900 a 1800 € para um trio e 1500 a 3500 € para uma banda completa, consoante a duração, a data e a deslocação. No Wimbo, cada perfil apresenta um intervalo de cachet e o orçamento detalha as contribuições sociais, sem surpresas desagradáveis.</p>\n<h3>4. Reserve cedo</h3>\n<p>Os sábados de maio a setembro esgotam depressa: reserve com 8 a 12 meses de antecedência para os artistas mais procurados. Para um casamento fora de época, 3 a 6 meses costumam bastar.</p>\n<h3>5. As perguntas certas a fazer</h3>\n<ul><li>Que músicas se podem acrescentar ao repertório, e com que antecedência?</li><li>Que pausas estão previstas durante a atuação?</li><li>O que acontece se o artista tiver um impedimento?</li><li>O equipamento (som, luzes, microfone para os discursos) está incluído?</li></ul>\n<h3>6. Não se esqueça da parte administrativa</h3>\n<p>Em França, contratar um artista para um evento privado implica uma declaração junto do GUSO. No Wimbo, preparamo-la por si e o pagamento fica protegido até ao grande dia. Só lhe resta aproveitar.</p>"},"guso-tout-comprendre":{"title":"GUSO: tudo o que precisa de saber em 5 minutos","excerpt":"Vai contratar um músico para uma festa privada? Saiba o que é o GUSO, porque é obrigatório e como o Wimbo trata disso por si.","body":"<p>O <strong>GUSO</strong> (Guichet unique du spectacle occasionnel, o balcão único para espetáculos ocasionais) é o serviço público que permite aos organizadores ocasionais declarar e remunerar legalmente artistas de espetáculos ao vivo. Abrange particulares, associações e empresas cuja atividade principal não é o espetáculo.</p>\n<h3>Porque é obrigatório?</h3>\n<p>Em França, presume-se que um artista que atua em público é trabalhador por conta de outrem (artigo L7121-3 do Código do Trabalho francês). Quando o contrata diretamente para o seu casamento ou o seu aniversário, torna-se, portanto, a sua entidade empregadora ocasional e tem de declarar a atuação e pagar as contribuições sociais correspondentes.</p>\n<h3>Como funciona o GUSO?</h3>\n<p>Uma única declaração, a <strong>DUS</strong> (déclaration unique et simplifiée, ou seja, declaração única e simplificada), substitui todas as formalidades: vale como contrato de trabalho e como declaração junto dos organismos sociais (URSSAF, reforma, subsídio de desemprego, férias pagas do setor do espetáculo, formação, saúde no trabalho). O GUSO calcula as contribuições e redistribui-as.</p>\n<h3>Pontos a reter</h3>\n<ul><li>O recurso ao GUSO está limitado a <strong>6 representações por ano</strong> para um mesmo organizador.</li><li>A declaração deve ser feita, idealmente, antes da atuação e, o mais tardar, nos dias seguintes.</li><li>As contribuições somam-se ao cachet líquido do artista: tenha isso em conta no seu orçamento.</li><li>Se o artista lhe faturar através de uma estrutura (associação, produtora), é essa estrutura a entidade empregadora: não precisa de recorrer ao GUSO.</li></ul>\n<h3>O que o Wimbo faz</h3>\n<p>No Wimbo, o orçamento que recebe inclui as contribuições: fica a saber o custo total desde o início. Assim que a reserva é confirmada, preparamos a declaração com os seus dados e os do artista; só tem de a validar. Sem esquecimentos, sem risco de penalizações.</p>\n<p class=\"note\">Este artigo é informativo e não substitui aconselhamento jurídico. Para casos específicos, consulte <a href=\"https://www.guso.fr\" target=\"_blank\" rel=\"noopener\">guso.fr</a>.</p>"},"prix-musicien-evenement":{"title":"Quanto custa um músico para um evento privado?","excerpt":"Solo, duo, banda ou DJ: os intervalos de preços praticados e os critérios que fazem variar o orçamento.","body":"<p>É a primeira pergunta que todos fazem. O cachet de um artista depende de muitos critérios, mas algumas referências ajudam a ver as coisas com clareza.</p>\n<h3>Os intervalos indicativos</h3>\n<ul><li><strong>Músico ou cantor a solo</strong>: 400 a 900 €</li><li><strong>Duo</strong>: 600 a 1300 €</li><li><strong>Trio ou quarteto</strong>: 900 a 2400 €</li><li><strong>Banda de 4 a 6 músicos</strong>: 1500 a 3500 €</li><li><strong>DJ</strong>: 500 a 1600 €</li></ul>\n<p>Estes valores correspondem a uma atuação de 2 a 4 horas e são meramente indicativos.</p>\n<h3>O que faz variar o preço</h3>\n<ul><li><strong>A data</strong>: um sábado de junho custa mais do que uma quinta-feira de novembro.</li><li><strong>A duração</strong>: só a cerimónia, o cocktail ou a festa completa até altas horas.</li><li><strong>A deslocação</strong>: distância, portagens, eventual alojamento.</li><li><strong>O equipamento</strong>: sonorização, luzes, microfone para os discursos.</li><li><strong>Os pedidos especiais</strong>: aprendizagem de novos temas, coreografia, traje temático.</li></ul>\n<h3>Como evitar surpresas desagradáveis</h3>\n<p>Peça um orçamento detalhado que especifique a duração, as pausas, o equipamento e os custos adicionais. No Wimbo, o orçamento inclui também as contribuições sociais associadas ao GUSO, que muitos se esquecem de prever. O pagamento é feito em duas vezes: um sinal de 30 % para garantir a data e o valor restante após a atuação.</p>"},"organiser-fete-au-pays":{"title":"Organizar uma festa na terra à distância: o guia da diáspora","excerpt":"Casamento em Portugal, batizado em Guadalupe, aniversário em Lisboa: como encontrar e reservar um artista local sem lá estar.","body":"<p>Vive em França e a sua família está em Portugal, nas Antilhas ou em África? Organizar uma festa lá a partir de Paris ou de Lyon é muitas vezes uma dor de cabeça: encontrar prestadores de serviços de confiança, fazer-se entender, pagar à distância. Eis os nossos conselhos.</p>\n<h3>1. Comece pela música</h3>\n<p>O espaço e o catering encontram-se muitas vezes através da família. Já os artistas reservam-se cedo e são mais difíceis de avaliar sem os ver. No Wimbo, cada perfil apresenta fotos, vídeos e avaliações verificadas: pode comparar a partir do seu sofá.</p>\n<h3>2. Pense na mistura de culturas</h3>\n<p>Um casamento franco-português ou franco-antilhano reúne muitas vezes várias gerações e várias línguas. Procure um artista capaz de passar da música de variedades francesa para a kizomba, o fado ou o zouk. Indique-o no seu pedido de orçamento.</p>\n<h3>3. Fale por videochamada antes de reservar</h3>\n<p>Uma chamada de 20 minutos com o artista permite validar o repertório, os horários e a logística. O sistema de mensagens do Wimbo guarda todas as suas conversas no mesmo sítio.</p>\n<h3>4. Proteja o pagamento</h3>\n<p>Evite transferências para o estrangeiro sem garantia. Com o Wimbo, o seu sinal fica protegido e o valor restante só é pago ao artista após a atuação.</p>\n<h3>5. Designe uma pessoa de contacto no local</h3>\n<p>Um primo ou uma amiga pode receber o artista no grande dia. Partilhe com essa pessoa o resumo da reserva: horários, contacto, mapa de acesso.</p>"},"prix-dj-mariage":{"title":"Preço de DJ para casamento: quanto custa e como comparar orçamentos","excerpt":"Quanto custa um DJ para um casamento? Valores indicativos, o que faz variar o preço, o que está incluído e as perguntas a fazer antes de reservar.","body":"<p><strong>Em resumo:</strong> a título indicativo, um DJ para a festa de um casamento custa em geral entre 600 e 1500 €, consoante a duração, a data, a deslocação e o equipamento fornecido. Este preço inclui quase sempre a sonorização, iluminação para a pista de dança e a preparação da playlist consigo. Para comparar, peça orçamentos detalhados para o mesmo horário e verifique, linha a linha, o que está incluído.</p>\n<h3>Quanto custa um DJ para um casamento?</h3>\n<p>Não existe um preço único: cada DJ define o seu preço e a referência é sempre o orçamento. A parte mais baixa do intervalo corresponde sobretudo a uma festa de poucas horas, durante a semana ou fora de época, com equipamento standard. A parte mais alta, a um sábado de junho, uma festa que se prolonga pela madrugada, uma iluminação mais elaborada ou um DJ presente desde o cocktail. Para comparar estes valores com outras formações (solo, trio, banda), consulte o nosso <a href=\"/blog/prix-musicien-evenement\">guia de preços dos músicos</a>.</p>\n<p>Hesita entre um DJ e uma banda ao vivo? O nosso <a href=\"/blog/choisir-musicien-mariage\">guia da música de casamento</a> ajuda a escolher momento a momento. Uma fórmula frequente: um músico para a cerimónia e o cocktail e, depois, um DJ para a festa.</p>\n<h3>O que faz variar o preço</h3>\n<ul><li><strong>A duração</strong>: só a parte dançante, ou presença desde o cocktail e durante o jantar. As horas além do horário previsto são muitas vezes cobradas à parte.</li><li><strong>A data</strong>: os sábados de maio a setembro são os mais procurados e, por isso, os mais caros.</li><li><strong>A deslocação</strong>: distância, portagens e, por vezes, alojamento se o local for longe ou se a festa acabar muito tarde.</li><li><strong>O equipamento</strong>: potência do som consoante o número de convidados, jogos de luzes, uma segunda instalação para uma cerimónia laica ou um cocktail noutro espaço.</li><li><strong>A personalização</strong>: playlist à medida, mistura de estilos (música de variedades francesa, afrobeats, kizomba, zouk…), animação ao microfone, abertura do baile preparada.</li></ul>\n<h3>O que está incluído no preço de um DJ?</h3>\n<p>Um orçamento de DJ para casamento inclui, em geral:</p>\n<ul><li>a atuação durante o tempo combinado, pausas incluídas;</li><li>uma sonorização adequada à sala e ao número de convidados;</li><li>iluminação ambiente para a pista de dança;</li><li>um microfone para os discursos e os avisos;</li><li>uma conversa antes do grande dia para preparar a playlist, as músicas obrigatórias e as que são de evitar;</li><li>a montagem e a desmontagem.</li></ul>\n<p>Nada disto é automático: alguns DJ propõem a iluminação ou o microfone sem fios como opção. Verifique cada linha e pergunte o que acontece se a festa se prolongar.</p>\n<h3>Como comparar orçamentos de DJ?</h3>\n<p>Dois orçamentos só se comparam se disserem respeito à mesma coisa. Dê a cada DJ as mesmas informações (horário, local, número de convidados, ambiente pretendido) e depois analise:</p>\n<ul><li><strong>O preço por hora de música</strong>, depois de descontar a montagem e as pausas.</li><li><strong>O equipamento indicado</strong>: um orçamento mais barato sem luzes nem microfone pode acabar por sair mais caro.</li><li><strong>Os custos adicionais</strong>: deslocação, horas extra, refeição do DJ.</li><li><strong>As contribuições sociais</strong>: em França, contratar diretamente um artista implica uma declaração ao <a href=\"/blog/guso-tout-comprendre\">GUSO</a>, o balcão único francês para a contratação ocasional de artistas. No Wimbo, preparamos essa declaração por si e as contribuições constam do orçamento.</li></ul>\n<p>Veja também os vídeos e as avaliações verificadas de cada perfil: a forma como um DJ lê a pista de dança conta tanto como o preço.</p>\n<h3>As perguntas a fazer antes de reservar</h3>\n<ul><li>Quantos casamentos já animou e tem algum vídeo de uma festa para me mostrar?</li><li>Como construímos a playlist em conjunto? Aceita uma lista de músicas a não passar?</li><li>Consegue pôr várias gerações a dançar e misturar as culturas das nossas duas famílias?</li><li>Qual é o preço de uma hora extra se a festa continuar?</li><li>O que acontece se tiver um impedimento no próprio dia?</li><li>De que precisa no local: espaço, tomadas, refeição, horário de montagem?</li></ul>\n<h3>Quando reservar o DJ do casamento?</h3>\n<p>Para um sábado em época alta, os DJ mais procurados ficam reservados cedo: reservar com 8 a 12 meses de antecedência não é exagero. Fora de época ou durante a semana, alguns meses costumam ser suficientes. No Wimbo, garante a data com um sinal de 30 % que fica protegido, e o valor restante só é pago depois da atuação.</p>\n<p>Quer começar já a comparar? Explore os <a href=\"/instruments/deejay\">DJ disponíveis no Wimbo</a>, veja os seus vídeos e envie os seus pedidos de orçamento: os artistas respondem em geral em 2 a 3 horas. Depois, é só escolher aquele que tem mais a ver consigo.</p>"},"musique-bapteme":{"title":"Música para batizado: que artistas para a cerimónia e a festa?","excerpt":"Cerimónia religiosa ou laica, aperitivo, refeição: que música escolher para um batizado, que formação, que orçamento prever e os nossos conselhos práticos.","body":"<p><strong>Em resumo:</strong> para a música de um batizado, uma voz acompanhada por guitarra, órgão ou harpa é muitas vezes suficiente para a cerimónia; depois, um duo ou uma pequena banda assegura o aperitivo e a refeição. A título indicativo, conte com 400 a 900 € para um músico a solo e 900 a 1800 € para um duo ou trio. Na igreja, confirme sempre a escolha das músicas com a paróquia.</p>\n<h3>Que música escolher para um batizado religioso?</h3>\n<p>Na igreja, a música acompanha a entrada da família, alguns momentos fortes da celebração e a saída. A escolha é feita em acordo com a paróquia: algumas preferem cânticos litúrgicos, outras aceitam peças clássicas ou canções mais pessoais. Contacte cedo o padre, o pastor ou a equipa de animação litúrgica: também lhe dirão se há um órgão e um organista disponíveis.</p>\n<p>Os grandes clássicos resultam sempre: a «Ave Maria» de Schubert ou de Gounod, o «Cânone» de Pachelbel, «Jesus, Alegria dos Homens» de Bach, ou «Hallelujah» de Leonard Cohen para um toque mais contemporâneo, se a paróquia aceitar. Numa igreja com boa acústica, uma voz a solo com um instrumento basta para criar emoção.</p>\n<h3>E para uma cerimónia laica?</h3>\n<p>Um batizado civil (ou «republicano», uma tradição francesa celebrada na câmara municipal) ou uma cerimónia laica num jardim ou numa sala deixa mais liberdade. Pode escolher canções que tenham significado para a sua família: uma chanson francesa suave, uma canção de embalar revisitada, uma música da cultura dos avós. Preveja três momentos: a entrada, uma ou duas músicas entre os textos e os compromissos do padrinho e da madrinha e, por fim, a saída.</p>\n<p>Algumas ideias: «Here Comes the Sun» dos Beatles, «What a Wonderful World» de Louis Armstrong, «La vie en rose» de Édith Piaf ou «Sodade» de Cesária Évora. Na câmara municipal, a cerimónia é curta e a sala muitas vezes pequena: uma formação acústica é ideal, e informe-se com antecedência sobre o que é permitido.</p>\n<h3>Aperitivo e refeição: um ambiente de convívio</h3>\n<p>Depois da cerimónia, a música muda de papel: acompanha os reencontros sem abafar as conversas. Um duo de guitarra e voz, um trio de jazz ou bossa nova, um pianista se o local tiver piano: o objetivo é um fundo musical ao vivo, com volume moderado. Pense também nas crianças, muitas vezes numerosas: algumas canções que elas conheçam fazem sempre sucesso à hora da sobremesa.</p>\n<p>Se a festa se prolongar pela noite, uma pequena banda ou um DJ pode continuar e pôr todas as gerações a dançar.</p>\n<h3>Que formação escolher?</h3>\n<ul><li><strong>Voz a solo</strong>, a cappella ou com o órgão da igreja: sóbria e muito emocionante num espaço com boa acústica.</li><li><strong>Guitarra e voz</strong>: a fórmula mais versátil, que passa da cerimónia para o aperitivo sem trocar de artista.</li><li><strong>Harpa</strong>: suave e elegante, perfeita para a cerimónia ou para um aperitivo tranquilo. Descubra os <a href=\"/instruments/harpiste\">harpistas no Wimbo</a>.</li><li><strong>Pequena formação</strong> (duo ou trio): voz, guitarra ou piano, por vezes violino ou saxofone, para encadear cerimónia, aperitivo e refeição.</li></ul>\n<h3>Que orçamento prever para a música de um batizado?</h3>\n<p>A título indicativo, conte com 400 a 900 € para um músico ou cantor a solo, 900 a 1800 € para um duo ou trio e 1500 a 3500 € para uma banda completa, se tiver prevista uma parte dançante. O preço depende sobretudo da duração (só a cerimónia ou o dia inteiro), da data, da deslocação e do equipamento. Manter o mesmo artista para a cerimónia e o aperitivo pode sair mais barato do que duas atuações separadas, e simplifica a organização.</p>\n<h3>Os nossos conselhos práticos</h3>\n<ul><li><strong>Reserve cedo</strong> se o batizado for num fim de semana de primavera ou verão, época concorrida com as comunhões e os casamentos.</li><li><strong>Partilhe as condicionantes do local</strong>: horários da paróquia, acesso à eletricidade, tempo de montagem, espaço disponível.</li><li><strong>Envie a sua lista de músicas</strong> com algumas semanas de antecedência, sobretudo se incluir uma canção que ainda não faz parte do repertório do artista.</li><li><strong>Antecipe a parte administrativa</strong>: em França, contratar diretamente um artista implica uma declaração ao <a href=\"/blog/guso-tout-comprendre\">GUSO</a> (o balcão único francês para declarar artistas contratados ocasionalmente), que o Wimbo prepara por si. Para um batizado na terra, as formalidades dependem do país e do estatuto do artista: leia o nosso <a href=\"/blog/organiser-fete-au-pays\">guia da festa na terra</a>.</li></ul>\n<p>Para encontrar a fórmula que tem mais a ver consigo, explore os artistas disponíveis para <a href=\"/evenements/bapteme-communion\">batizados e comunhões</a> no Wimbo: veja os seus vídeos, compare os perfis verificados e envie os seus pedidos de orçamento em poucos cliques.</p>"},"mariage-kizomba-semba-zouk":{"title":"Música de casamento kizomba, semba, zouk: o guia do casamento misto","excerpt":"Casamento franco-angolano, franco-cabo-verdiano ou franco-antilhano: kizomba, semba, zouk, kompa, banda ou DJ e uma playlist feita com as duas famílias.","body":"<p><strong>Em resumo:</strong> Para um casamento franco-angolano, franco-cabo-verdiano ou franco-antilhano, escolha uma banda ou um DJ que domine mesmo os ritmos da família (kizomba, semba, coladeira, funaná, zouk, kompa) e também os clássicos que os convidados franceses conhecem. Construa a playlist com as duas famílias, alterne os estilos por blocos e valide o repertório com o artista antes de reservar.</p>\n<p>Num casamento misto, a pista de dança é muitas vezes o primeiro verdadeiro ponto de encontro entre as duas famílias. As tias que dançam semba, os primos que só querem zouk, os amigos da faculdade à espera dos êxitos dos anos 2000: todos têm de encontrar o seu lugar. Eis como proceder.</p>\n<h3>Kizomba, semba, zouk, kompa: quem dança o quê?</h3>\n<p>Para um ouvido menos atento, estes estilos parecem-se. Para as famílias, nem pensar. Algumas referências para falar deles com o seu artista:</p>\n<ul><li><strong>Semba</strong> (Angola): o ritmo festivo histórico, dançado a par, com passos brincalhões. Um clássico: «Mona Ki Ngi Xica», de Bonga.</li><li><strong>Kizomba</strong> (Angola): nascida nos anos 1980, mais lenta e mais sensual, perfeita para pôr os casais a dançar. «Única Mulher», de Anselmo Ralph, continua a ser incontornável.</li><li><strong>Coladeira e funaná</strong> (Cabo Verde): a coladeira é gingada; o funaná, levado pela gaita (acordeão) e pelo ferrinho, é rápido e muito festivo. A morna, mais lenta, acompanha bem o jantar, por exemplo com «Sodade», de Cesária Évora.</li><li><strong>Zouk</strong> (Guadalupe, Martinica): popularizado pelos Kassav', cujo «Zouk la sé sèl médikaman nou ni» ainda põe todas as mesas de pé.</li><li><strong>Kompa</strong> (Haiti): primo próximo do zouk, presença obrigatória nas festas antilhanas e haitianas, com clássicos como «New York City», dos Tabou Combo.</li></ul>\n<h3>Banda ao vivo ou DJ: o que escolher?</h3>\n<p>Uma <strong>banda ao vivo</strong> traz uma energia incomparável: um semba ou um funaná tocado com percussão a sério e um acordeão não se esquece. Em contrapartida, o repertório é mais limitado, e é preciso prever o espaço, o tempo de montagem e um orçamento mais elevado: a título indicativo, de 1500 a 3500 € para uma banda completa.</p>\n<p>Um <strong>DJ</strong> passa num segundo da kizomba para a música de variedades francesa e depois para o kompa, e responde aos pedidos dos convidados. Conte, a título indicativo, com 600 a 1500 € para uma festa de casamento, consoante a duração, a data, a deslocação e o equipamento.</p>\n<p>Também é possível uma fórmula mista: uma banda ou um cantor para a abertura do baile e uma hora ao vivo e, depois, um DJ até ao fim da noite. No Wimbo, compare os perfis de <a href=\"/genres/kizomba-semba\">kizomba e semba</a> ou de <a href=\"/genres/zouk-kompa\">zouk e kompa</a>, com os respetivos vídeos e avaliações.</p>\n<h3>Como misturar culturas sem deixar ninguém de fora?</h3>\n<p>O segredo: alternar por <strong>blocos de 20 a 30 minutos</strong>, em vez de mudar de estilo a cada música. Um bloco de kizomba e semba, um bloco de êxitos franceses que toda a gente canta, um bloco de zouk ou funaná e, depois, recomeça-se, subindo o ritmo.</p>\n<ul><li><strong>Comece pelo que une</strong>: os primeiros temas devem falar às duas famílias e a todas as gerações.</li><li><strong>Pense nos mais velhos</strong>: um semba ou uma coladeira à antiga no início da festa leva muitas vezes os avós para a pista.</li><li><strong>Proponha uma iniciação</strong>: alguns minutos de passos básicos de kizomba, orientados pelo artista ou por um familiar bom dançarino, deixam toda a gente à vontade. Pergunte ao artista se o faz.</li><li><strong>Cuide da primeira dança</strong>: uma kizomba lenta resulta muito bem, desde que a ensaiem antes do grande dia.</li></ul>\n<h3>Construir a playlist com as duas famílias</h3>\n<p>Em vez de deixar cada família negociar com o artista, centralize tudo num documento partilhado. Peça a cada lado os seus <strong>dez temas incontornáveis</strong>, as músicas ligadas aos momentos-chave (entrada dos noivos, primeira dança, bolo, última música) e uma pequena lista de temas a evitar.</p>\n<p>Algumas famílias fazem também questão de um momento tradicional: uma canção para a entrada da noiva, uma dança com os pais, uma homenagem a quem ficou na terra. Avise o artista cedo: a maioria aceita aprender alguns temas com algumas semanas de antecedência. Envie a versão final um mês antes do casamento e, depois, deixe o DJ ou a banda sentir o ambiente.</p>\n<h3>As perguntas certas a fazer antes de reservar</h3>\n<ul><li>Toca mesmo estes estilos durante uma noite inteira, ou apenas alguns temas? Peça um vídeo recente gravado num evento real.</li><li>Pode cantar ou fazer os anúncios em português, em crioulo e em francês?</li><li>Quanto tempo dura a atuação, e com que pausas?</li><li>O som, as luzes e o microfone para os discursos estão incluídos?</li><li>Aceita uma playlist fornecida pelas famílias e pedidos ao vivo?</li></ul>\n<p>No Wimbo, cada perfil é verificado, os artistas respondem geralmente em 2 a 3 horas e um sinal de 30 %, protegido, basta para garantir a data; o valor restante é pago depois da festa. Para um casamento em França, preparamos também a <a href=\"/blog/guso-tout-comprendre\">declaração GUSO</a> (o regime francês para declarar um artista contratado pontualmente). Os sábados de verão esgotam depressa: conte com 8 a 12 meses de antecedência para um artista muito procurado.</p>\n<p>Está a preparar um casamento com as cores das duas famílias? <a href=\"/recherche\">Procure o seu artista no Wimbo</a> por estilo e por cidade, e peça os seus orçamentos gratuitamente. A música que aproxima, as emoções que ficam.</p>"},"fete-cap-vert-angola-a-distance":{"title":"Organizar uma festa em Cabo Verde ou em Angola a partir de França","excerpt":"Batizado na Praia, casamento em Luanda: encontrar um artista local à distância, verificar o equipamento, pagar em segurança e escolher a data certa.","body":"<p><strong>Em resumo:</strong> Para organizar uma festa em Cabo Verde ou em Angola a partir de França ou de Portugal, reserve o artista com quatro a seis meses de antecedência (mais no verão e nas festas de fim de ano), valide o repertório e o equipamento numa videochamada e confirme que o espaço tem eletricidade fiável. Pague através de uma plataforma que proteja o sinal e confie o grande dia a uma pessoa de confiança no local.</p>\n<p>Um batizado na Praia, os 80 anos de uma avó em Mindelo, um casamento em Luanda: a família está lá, a sua vida é cá e, muitas vezes, cabe-lhe a si organizar tudo. Já explicámos as <a href=\"/blog/organiser-fete-au-pays\">bases de uma festa na terra organizada à distância</a>; eis os pontos específicos de Cabo Verde e de Angola.</p>\n<h3>Que altura do ano escolher em Cabo Verde ou em Angola?</h3>\n<p>Em <strong>Cabo Verde</strong> chove pouco, e sobretudo entre agosto e outubro: para uma festa ao ar livre, o resto do ano é mais seguro. Em <strong>Angola</strong>, o clima varia consoante as regiões. Em Luanda, a estação seca e mais fresca, o cacimbo, vai aproximadamente de maio a setembro, enquanto as chuvas se concentram sobretudo entre novembro e abril.</p>\n<p>Pense também no calendário da diáspora: o verão e as festas de fim de ano são as alturas em que muitas famílias regressam e em que os artistas estão mais solicitados. Para essas datas, reserve cedo. Nas chamadas, atenção à diferença horária: Cabo Verde tem menos duas horas do que Paris no inverno (menos três no verão), e Angola tem a mesma hora de Paris no inverno (menos uma no verão).</p>\n<h3>Encontrar um artista local sem lá estar</h3>\n<p>Procure primeiro um artista <strong>baseado no local</strong>: conhece os espaços, o público e os costumes, e evita bilhetes de avião e alojamento. Em Cabo Verde, indique bem a ilha: levar uma banda de Santiago para São Vicente implica um voo ou um barco e, muitas vezes, uma noite de hotel. Em Angola, as distâncias entre Luanda e as províncias também contam.</p>\n<p>Consoante a cidade, a oferta de artistas locais pode ser limitada. Nesse caso, um artista da diáspora radicado em França ou em Portugal pode fazer a viagem: preveja transporte, alojamento e formalidades de entrada, que dependem do país e da nacionalidade do artista. A página <a href=\"/evenements/evenement-diaspora\">Festa na terra</a> reúne os artistas que propõem este tipo de evento.</p>\n<h3>O que verificar na videochamada?</h3>\n<p>Uma videochamada antes de reservar vale mais do que todas as mensagens escritas. Vá além do repertório:</p>\n<ul><li>Peça ao artista que <strong>mostre o equipamento</strong> no ecrã: som, microfones, cabos, luzes. É dele ou alugado? Está incluído no orçamento?</li><li>Pergunte qual a <strong>potência elétrica</strong> necessária e de quantas tomadas precisa.</li><li>Peça um vídeo recente gravado numa festa a sério, não apenas em estúdio.</li><li>Confirme o número de músicos, a duração, as pausas e a hora de montagem.</li><li>Fale do plano B: chuva, vento, corte de energia, impedimento de última hora.</li><li>Combine a língua dos anúncios: português, crioulo, francês, ou um pouco das três.</li></ul>\n<h3>Pagar à distância sem correr riscos</h3>\n<p>A armadilha clássica: transferir a totalidade do cachet antecipadamente, para uma conta pessoal ou através de um serviço de envio de dinheiro, a alguém que nunca viu atuar. Três regras:</p>\n<ul><li>Pague apenas um <strong>sinal</strong> para garantir a data, nunca a totalidade antes da festa.</li><li>Ponha tudo por escrito: orçamento detalhado, horários, equipamento, despesas de deslocação.</li><li>Pague num enquadramento que o proteja: um pagamento fora da plataforma não tem qualquer garantia.</li></ul>\n<p>No Wimbo, o sinal de 30 % fica protegido e o valor restante só é pago ao artista depois da atuação, assim que a confirmar.</p>\n<h3>A sua pessoa de contacto no local: uma verdadeira missão</h3>\n<p>Um primo, uma tia ou uma amiga de confiança será os seus olhos e os seus ouvidos. Dê-lhe uma missão clara:</p>\n<ul><li>Visitar o espaço com antecedência e verificar a eletricidade: tomadas disponíveis, estabilidade da corrente, distância até à zona da música.</li><li>Se a corrente não for fiável (terreno da família, praia, quintal), alugar um <strong>gerador</strong> adequado à potência pedida pelo artista, colocado longe da pista e com o combustível necessário.</li><li>Prever um abrigo para proteger o equipamento do sol, do vento ou de um aguaceiro.</li><li>Ligar ao artista dois dias antes para confirmar a hora e o acesso.</li><li>Receber o artista no grande dia e mantê-lo a si informado até ao fim da festa.</li></ul>\n<p>O site do Wimbo está disponível em português e em francês: prático para partilhar com a família que ficou na terra.</p>\n<h3>O que o Wimbo pode fazer no estrangeiro, e o que não faz</h3>\n<p>Seja onde for a sua festa, o Wimbo permite-lhe comparar perfis verificados, receber orçamentos geralmente em 2 a 3 horas, falar com o artista através do sistema de mensagens e pagar em segurança. Está tudo explicado na página <a href=\"/comment-ca-marche\">Como funciona</a>.</p>\n<p>Em contrapartida, a declaração GUSO (o regime francês para declarar artistas contratados pontualmente), que preparamos para os eventos em França, não se aplica em Cabo Verde nem em Angola: lá, as formalidades dependem do país e do estatuto do artista. Coloque a questão logo no pedido de orçamento e, no caso de uma festa ao ar livre, informe-se junto do espaço ou das autoridades locais. Por fim, o Wimbo não escolhe por si nem reserva o espaço, o catering ou os bilhetes de avião: a decisão é sempre sua.</p>\n<p>A família está à sua espera para a festa? <a href=\"/recherche\">Encontre o seu artista no Wimbo</a> e peça os seus orçamentos gratuitamente, a partir de Paris, Lyon ou Lisboa.</p>"},"groupe-soiree-entreprise":{"title":"Banda ou DJ para uma festa de empresa: como escolher?","excerpt":"Gala, seminário, festa de fim de ano: banda, DJ ou músicos, formatos por momento, técnica, orçamento, prazos e GUSO para acertar na sua festa de empresa.","body":"<p><strong>Em resumo:</strong> para uma festa de empresa, escolha uma banda se quiser um verdadeiro momento ao vivo e uma pista de dança cheia, um DJ se procura flexibilidade e um orçamento controlado, e músicos acústicos para o cocktail e o jantar. Estas opções combinam muito bem: músicos para a receção, banda ou DJ para o fim da noite. Para dezembro, reserve logo a partir de setembro.</p>\n<h3>Banda, DJ ou músicos: o que escolher para o seu evento?</h3>\n<p>Tudo depende do ambiente pretendido e do perfil dos seus convidados. Uma <strong>banda ao vivo</strong> cria um espetáculo: as pessoas assistem, aplaudem e depois dançam. É ideal para uma gala ou uma festa de fim de ano que deve ficar na memória, sobretudo com uma <a href=\"/genres/reprises\">banda de covers</a> com um repertório que agrada a todos, dos anos 80 aos êxitos atuais.</p>\n<p>Um <strong>DJ</strong> adapta-se à sala em tempo real, toca sem interrupções e precisa de menos espaço. Os <strong>músicos acústicos</strong> (duo de jazz, piano e voz, saxofone, trio de bossa nova) criam ambiente no cocktail e no jantar sem abafar as conversas. Por fim, a <strong>fórmula mista</strong> é frequente: uma banda durante um ou dois sets e, depois, um DJ até ao fim.</p>\n<h3>Cocktail, jantar, festa dançante: um formato para cada momento</h3>\n<ul><li><strong>Cocktail de boas-vindas</strong> (1 a 2 h): um formato leve e móvel, com volume moderado. Os seus convidados também vêm para conversar entre colegas ou com clientes.</li><li><strong>Jantar ou gala</strong> (cerca de 2 h): música ambiente entre os pratos, com pausas previstas para os discursos, a entrega de prémios ou o vídeo do ano.</li><li><strong>Festa dançante</strong> (2 a 4 h): uma banda toca geralmente em sets de 45 minutos a 1 hora, com pausas pelo meio; um DJ pode tocar sem parar.</li><li><strong>Seminário</strong>: a animação musical de um seminário pode abrir a sessão plenária, marcar uma pausa ou animar a noite. Alguns artistas propõem também workshops participativos (percussão, canto): indique-o no seu pedido.</li></ul>\n<p>Pense também nas horas extra: peça logo no orçamento o preço de uma hora adicional, caso a festa se prolongue.</p>\n<h3>Som e técnica: as perguntas a fazer ao espaço</h3>\n<p>Antes de reservar, contacte o responsável técnico da sala ou do hotel e envie-lhe a ficha técnica do artista. Verifique sobretudo:</p>\n<ul><li>o espaço disponível para o palco: uma banda de cinco músicos ocupa muito mais espaço do que um DJ;</li><li>as tomadas elétricas por perto e a potência disponível;</li><li>a existência de um limitador de som, frequente nos espaços urbanos: uma bateria acústica lida pior com ele do que um DJ;</li><li>os horários de montagem e de ensaio de som, a acertar antes da chegada dos convidados;</li><li>o acesso para descarregar o material, o estacionamento e um camarim para os artistas;</li><li>um microfone para os discursos da direção: o artista pode fornecê-lo?</li></ul>\n<h3>Que orçamento prever para uma festa de empresa?</h3>\n<p>A título indicativo, conte com 400 a 900 € para um músico a solo, 900 a 1800 € para um duo ou trio, 1500 a 3500 € para uma banda completa e 600 a 1500 € para um DJ durante uma noite. Estes valores variam consoante a duração, a data, a deslocação e o equipamento: uma sala grande exige mais sonorização e iluminação. Para cobrir vários momentos, peça uma proposta global ao mesmo artista: algumas bandas propõem uma versão acústica para o cocktail antes de passarem à formação completa. O nosso <a href=\"/blog/prix-musicien-evenement\">guia de preços</a> detalha os critérios que fazem variar um orçamento.</p>\n<h3>Fim de ano: reserve logo a partir de setembro</h3>\n<p>Dezembro é o período mais procurado do ano para as festas de empresa: as quintas e sextas-feiras esgotam depressa e os artistas mais requisitados são reservados logo em setembro ou outubro. O ideal é reservar com 3 a 6 meses de antecedência para uma festa de fim de ano, e com mais tempo ainda para uma gala com banda completa. Conte também com o tempo de aprovação interna: orçamento, nota de encomenda, departamento de compras.</p>\n<p>Deixou para a última hora? Alargue as datas (uma terça ou quarta-feira), opte por um formato mais leve ou transforme a festa num evento de Ano Novo em janeiro, quando a escolha costuma ser maior.</p>\n<h3>Faturação e GUSO: o que a sua empresa deve saber</h3>\n<p>Em França, presume-se que um artista que atua é trabalhador por conta de outrem. Se a sua empresa o contratar diretamente e a sua atividade principal não for o espetáculo, tem de recorrer ao <strong>GUSO</strong> (Guichet unique du spectacle occasionnel, o balcão único francês para espetáculos ocasionais), tal como um particular, até ao limite de 6 representações por ano. Uma única declaração vale como contrato de trabalho e regulariza as contribuições sociais. Avise o departamento de contabilidade: trata-se de um salário e de contribuições, não de uma fatura de fornecedor.</p>\n<p>Se o artista trabalhar através de uma estrutura (associação, produtora), é ela que o emprega e que emite a fatura: não há GUSO do seu lado. No Wimbo, indique os dados da sua empresa: o orçamento é emitido em nome dela e inclui as contribuições GUSO quando se aplicam; nós preparamos a declaração e só tem de a validar. O pagamento segue o mesmo princípio que para um particular: um sinal de 30 % protegido e o valor restante após a atuação. Para um evento fora de França, as formalidades dependem do país e do estatuto do artista. Está tudo explicado no <a href=\"/blog/guso-tout-comprendre\">nosso artigo sobre o GUSO</a>.</p>\n<p>Pronto para encontrar o artista do seu próximo evento? Compare perfis verificados, ouça os excertos e envie os seus pedidos de orçamento a partir da nossa página <a href=\"/evenements/entreprise\">Evento empresarial</a>: os artistas respondem geralmente em 2 a 3 horas.</p>"},"musique-ceremonie-laique":{"title":"Música para cerimónia laica: momentos-chave e ideias de canções","excerpt":"Chegada dos convidados, entrada, leituras, votos, saída: que música escolher para a sua cerimónia laica, que formação contratar e 16 ideias de temas.","body":"<p><strong>Em resumo:</strong> uma cerimónia laica tem cinco momentos musicais: a chegada dos convidados, a entrada, as leituras, a troca de votos e a saída. Uma formação acústica (voz e guitarra, quarteto de cordas, harpa ou piano) adapta-se à maioria dos espaços, com um tema escolhido para cada momento forte. Ao ar livre, preveja sombra, uma solução elétrica e um plano B em caso de chuva.</p>\n<p>Ao contrário do casamento civil, a cerimónia laica não tem um alinhamento imposto: escolhe o local, a duração e cada tema. É uma verdadeira liberdade, desde que prepare bem a música com os artistas.</p>\n<h3>Quais são os momentos musicais de uma cerimónia laica?</h3>\n<ul><li><strong>A chegada dos convidados</strong> (15 a 30 minutos): música suave enquanto todos se sentam. Dá o tom e evita silêncios constrangedores.</li><li><strong>A entrada</strong>: a do celebrante, do cortejo e, por fim, dos noivos. É o momento mais esperado: escolha um tema que o emocione, os músicos adaptam-no ao comprimento do corredor.</li><li><strong>As leituras e os discursos</strong>: breves interlúdios entre as intervenções deixam a emoção assentar e renovam a atenção.</li><li><strong>A troca de votos</strong>: silêncio durante as palavras e, depois, um tema para a troca de alianças ou para um ritual simbólico (areia, fita, vela).</li><li><strong>A saída</strong>: um tema alegre e ritmado, que dá o sinal de partida para a festa.</li></ul>\n<h3>Que formação escolher?</h3>\n<ul><li><strong>Voz e guitarra</strong>: o formato mais flexível. Adapta-se a todos os repertórios, da chanson francesa à pop, e basta-lhe um pequeno sistema de som a bateria.</li><li><strong>Quarteto de cordas</strong>: elegante e solene, toca tanto Pachelbel como arranjos de temas pop. Preveja quatro cadeiras sem braços e um piso plano.</li><li><strong>Harpa</strong>: um som etéreo, quase mágico. Um <a href=\"/instruments/harpiste\">harpista</a> precisa de um acesso fácil para o instrumento, de um piso estável e de sombra.</li><li><strong>Piano</strong>: intenso e intemporal, mas é preciso um piano no local ou um piano digital, o que implica eletricidade.</li></ul>\n<p>Para a emoção dos votos, uma voz faz muitas vezes a diferença. Para um ambiente mais clássico, as cordas e a harpa criam uma atmosfera mais solene.</p>\n<h3>16 ideias de temas para a sua cerimónia laica</h3>\n<ul><li><strong>Chegada dos convidados</strong>: «La Vie en rose» (Édith Piaf), «Can't Help Falling in Love» (Elvis Presley), «Gymnopédie n.º 1» (Erik Satie).</li><li><strong>Entrada</strong>: «Cânone em Ré» (Johann Pachelbel), «A Thousand Years» (Christina Perri), «Perfect» (Ed Sheeran), «Comptine d'un autre été, l'après-midi» (Yann Tiersen).</li><li><strong>Leituras</strong>: «Clair de lune» (Claude Debussy), «Nuvole bianche» (Ludovico Einaudi), «River Flows in You» (Yiruma).</li><li><strong>Votos e alianças</strong>: «L'Hymne à l'amour» (Édith Piaf), «All of Me» (John Legend), «Je te promets» (Johnny Hallyday).</li><li><strong>Saída</strong>: «Signed, Sealed, Delivered I'm Yours» (Stevie Wonder), «Viva la Vida» (Coldplay), «Marry You» (Bruno Mars).</li></ul>\n<p>Tem raízes em Portugal, em Cabo Verde ou nas Antilhas? Um fado instrumental, uma morna ou uma biguine podem homenagear a sua família. Envie a sua lista aos músicos um a dois meses antes: alguns temas exigem um arranjo especial.</p>\n<h3>Cerimónia ao ar livre: as condicionantes a antecipar</h3>\n<ul><li><strong>A eletricidade</strong>: uma tomada por perto ou um sistema de som a bateria. Informe-se junto do espaço.</li><li><strong>O som</strong>: ao ar livre, a voz não se ouve bem. Preveja um microfone para o celebrante e para quem faz as leituras: muitos músicos podem fornecê-lo, basta perguntar.</li><li><strong>O sol e a humidade</strong>: os instrumentos de madeira desafinam e podem danificar-se. Uma tenda ou um recanto à sombra protege músicos e instrumentos.</li><li><strong>O vento</strong>: leva as partituras e sopra nos microfones; os músicos experientes trazem molas e espumas anti-vento.</li><li><strong>A chuva</strong>: defina um plano B coberto e indique aos artistas o local alternativo.</li><li><strong>O terreno</strong>: relva, gravilha ou declive complicam a instalação de uma harpa ou de um piano. Indique a distância entre o estacionamento e o local da cerimónia.</li></ul>\n<h3>Orçamento e últimos conselhos</h3>\n<p>A título indicativo, conte com 400 a 900 € para um músico a solo e 900 a 1800 € para um duo ou trio; um quarteto pode ficar um pouco acima. O preço depende da duração, da data, da deslocação e do equipamento. Pergunte se o artista pode continuar no cocktail: é muitas vezes mais simples e mais económico do que contratar uma segunda formação. Para um evento em França, o orçamento do Wimbo inclui as contribuições GUSO (o regime francês de declaração de artistas contratados ocasionalmente) e nós preparamos a declaração.</p>\n<p>No grande dia, designe uma pessoa (o celebrante ou uma testemunha) que dê o sinal aos músicos e envie-lhes o alinhamento minuto a minuto. Para os outros momentos do dia, o nosso <a href=\"/blog/choisir-musicien-mariage\">guia para escolher o artista do seu casamento</a> ajuda-o a compor o resto do programa.</p>\n<p>Quer uma cerimónia à sua imagem? Explore os perfis verificados de cantores, quartetos e harpistas na nossa página <a href=\"/evenements/ceremonie\">Cerimónia</a>, ouça os excertos e envie os seus pedidos de orçamento em poucos cliques.</p>"},"musique-anniversaire-30-40-50-ans":{"title":"Música para aniversário de 30, 40, 50 anos: que animação escolher?","excerpt":"Aniversário de 30, 40, 50, 60 ou 70 anos: que música escolher consoante a idade e o espaço, ao vivo ou DJ, orçamento indicativo e dicas para uma festa surpresa.","body":"<p><strong>Em resumo:</strong> para um aniversário de 30, 40, 50 anos ou mais, parta do aniversariante e do espaço. Um músico a solo ou um duo chega para um jantar em casa, uma banda ou um DJ põe uma sala alugada a dançar, e o formato misto junta muitas vezes o melhor dos dois. O fio condutor que resulta em qualquer idade: as músicas dos seus 20 anos.</p>\n<h3>Que música para um aniversário de 30, 40, 50 anos ou mais?</h3>\n<p>Há uma regra simples que funciona quase sempre: aposte nos temas que marcaram o aniversariante entre os 15 e os 25 anos. São os que o fazem sorrir logo às primeiras notas e que os amigos sabem de cor.</p>\n<ul><li><strong>30 anos</strong>: os êxitos dos anos 2010, pop, eletrónica e afrobeats, a começar por « Uptown Funk », de Mark Ronson e Bruno Mars.</li><li><strong>40 anos</strong>: os anos 2000, entre R&B, pop e rap, com clássicos como « Crazy in Love », de Beyoncé.</li><li><strong>50 anos</strong>: os anos 90, dance, rock e pop, incluindo o inesquecível « Freed from Desire », de Gala.</li><li><strong>60 anos</strong>: os anos 80, funk, new wave e música ligeira, com « Billie Jean », de Michael Jackson, à cabeça.</li><li><strong>70 anos</strong>: os anos 70, soul, disco, rock e canção de autor, e « September », dos Earth, Wind & Fire, para abrir a pista.</li></ul>\n<p>São apenas pontos de partida: uma apaixonada por jazz ou por fado merece uma festa à sua imagem, seja qual for a idade. Pergunte às pessoas mais próximas o que ela ou ele ouve realmente.</p>\n<h3>Jantar em casa ou sala alugada: que formato?</h3>\n<p><strong>Jantar em casa</strong> (20 a 40 convidados): um guitarrista-cantor, um pianista (com o seu próprio teclado, se não tiver piano) ou um duo acústico cria um ambiente acolhedor sem abafar as conversas. Verifique o espaço e a alimentação elétrica indicados no perfil do artista, e avise os vizinhos.</p>\n<p><strong>Sala alugada</strong> (50 convidados ou mais): é a vez da dança. Uma <a href=\"/genres/reprises\">banda de covers</a> ou um DJ com o seu próprio som e luzes transforma um salão de festas numa pista de dança. Antes de reservar, pergunte ao responsável pelo espaço a hora de fim autorizada e se é obrigatório um limitador de som, e transmita essas informações ao artista.</p>\n<h3>Músico ao vivo ou DJ: como escolher?</h3>\n<p>A música ao vivo traz emoção: uma voz que canta a música preferida do aniversariante na hora do bolo, um saxofone que acompanha a sua entrada, músicos que interagem com os convidados. O DJ, por seu lado, tem um catálogo quase ilimitado, passa de uma geração para outra sem tempos mortos e aguenta facilmente até ao fim da noite.</p>\n<p>Uma solução muitas vezes escolhida: o formato misto, com um músico durante o aperitivo e o jantar e, depois, um DJ para a festa dançante. Algumas bandas também propõem um DJ set entre as suas atuações: pergunte no seu pedido de orçamento.</p>\n<h3>Juntar gerações com a playlist da juventude do aniversariante</h3>\n<p>Um aniversário reúne muitas vezes filhos, pais, amigos de infância e colegas. Para que ninguém fique sentado:</p>\n<ul><li><strong>Reúna a playlist</strong>: peça aos irmãos ou aos amigos de sempre 5 a 10 temas que tenham a cara do aniversariante, e envie a lista ao artista 3 a 4 semanas antes. Um tema fora do repertório exige trabalho e, por vezes, um suplemento.</li><li><strong>Construa a festa por fases</strong>: ambiente suave durante o jantar, depois os êxitos da sua juventude, temas atuais para os mais novos e um final que todos cantam.</li><li><strong>Pense nas raízes da família</strong>: um momento de kizomba, zouk ou fado pode pôr três gerações de pé de uma só vez.</li></ul>\n<h3>Que orçamento para a animação de um aniversário?</h3>\n<p>A título indicativo, conte com 400 a 900 € para um músico a solo, 900 a 1800 € para um duo ou trio, 1500 a 3500 € para uma banda completa e 600 a 1500 € para um DJ durante a noite. O valor depende da duração, da data, da deslocação e do equipamento. Uma sexta-feira à noite ou um almoço de domingo pode ser mais acessível do que um sábado de junho. O nosso <a href=\"/blog/prix-musicien-evenement\">guia de preços</a> explica o que faz variar um orçamento.</p>\n<p>No Wimbo, o orçamento inclui as contribuições sociais e, para uma festa em França, preparamos a declaração GUSO (o sistema francês para declarar artistas contratados pontualmente). Paga um sinal de 30 %, que fica protegido, e o valor restante após a atuação.</p>\n<h3>Festa surpresa: os nossos conselhos para guardar o segredo</h3>\n<ul><li>Dê ao artista o número de um cúmplice, nunca o do aniversariante, e evite agendas ou caixas de correio partilhadas.</li><li>Combine a chegada do artista antes dos convidados, para que se instale longe dos olhares.</li><li>Escolha com o artista o tema da entrada e um sinal claro (uma mensagem, uma luz que se apaga) para o lançar no momento certo.</li><li>Preveja alguma margem: se o aniversariante chegar atrasado, o horário do artista tem de poder ajustar-se. Indique-o logo no pedido de orçamento.</li></ul>\n<p>Quer fazer deste aniversário uma recordação que fica? No Wimbo, pesquise por cidade, data e estilo, ouça os excertos, leia as avaliações verificadas e peça um orçamento gratuito: os artistas respondem geralmente em 2 a 3 horas. <a href=\"/evenements/anniversaire\">Encontrar um artista para um aniversário</a>.</p>"},"musicien-profil-qui-attire-les-demandes":{"title":"Conseguir atuações como músico: 7 dicas para o seu perfil online","excerpt":"Músico, cantor, banda ou DJ: 7 dicas concretas para um perfil online que atrai pedidos de orçamento e o ajuda a conseguir mais contratos e atuações.","body":"<p><strong>Em resumo:</strong> para conseguir mais contratos, o seu perfil tem de transmitir confiança a um cliente que nunca o viu atuar. Fotos cuidadas, vídeos de 15 segundos, um repertório claro, preços honestos, respostas rápidas, avaliações e um calendário atualizado fazem a diferença. No Wimbo, o registo é gratuito e os 150 primeiros inscritos ficam Premium para sempre.</p>\n<h3>Como é que um músico consegue mais contratos?</h3>\n<p>Um cliente que está a preparar um casamento ou um aniversário compara muitas vezes vários perfis em poucos minutos, por vezes no telemóvel, à noite. Procura respostas simples: como é em palco, o que toca, quanto custa, se está livre na data pretendida e se pode confiar em si. Cada uma das 7 dicas abaixo responde a uma destas perguntas.</p>\n<h3>Dicas 1 e 2: fotos e vídeos que convencem</h3>\n<p><strong>1. Fotos em contexto.</strong> Uma foto nítida em concerto, uma com a formação completa e um retrato bem iluminado valem mais do que vinte fotos desfocadas tiradas do fundo da sala. Mostre os formatos que propõe realmente: se toca a solo e em trio, os dois têm de aparecer.</p>\n<p><strong>2. Vídeos de 15 segundos.</strong> O cliente não vai ouvir um concerto inteiro: escolha um excerto que comece em força, com bom som. O ideal é um vídeo por momento-chave (cocktail, primeira dança, pista de dança). No Wimbo, pode carregar um vídeo curto ou colar um link do YouTube, Vimeo, Instagram ou TikTok.</p>\n<h3>Dicas 3 e 4: um repertório claro e preços honestos</h3>\n<p><strong>3. Um repertório fácil de ler.</strong> Indique os seus estilos, uma dezena de temas representativos, as línguas em que canta, a duração dos seus sets e o equipamento incluído. Diga se aceita aprender um tema a pedido e com que antecedência. Não vale a pena listar 300 músicas: o cliente quer imaginar a sua festa, não ler um catálogo.</p>\n<p><strong>4. Preços honestos, ou « sob orçamento ».</strong> Um intervalo indicativo tranquiliza e filtra os pedidos fora das possibilidades do cliente. Se o seu preço varia realmente consoante o formato ou a deslocação, indique « sob orçamento » e explique o que o faz mudar. No Wimbo, define os seus preços, ajusta cada orçamento e o cliente fica a conhecer o custo total desde o início.</p>\n<h3>Dica 5: responder depressa, mesmo para dizer que não</h3>\n<p>Um organizador contacta muitas vezes vários artistas ao mesmo tempo, e a primeira resposta clara parte com vantagem. No Wimbo, os artistas respondem geralmente em 2 a 3 horas, o seu tempo médio de resposta aparece no perfil e uma boa taxa de resposta melhora a sua visibilidade. Uma boa resposta cabe em poucas linhas: um agradecimento, a confirmação da data, o formato proposto, o preço e uma pergunta sobre o evento. Não está disponível? Recuse depressa e com simpatia: o cliente vai agradecer.</p>\n<h3>Dicas 6 e 7: avaliações e um calendário atualizado</h3>\n<p><strong>6. Avaliações.</strong> Depois de cada atuação, peça uma avaliação ao cliente enquanto a emoção ainda está presente. Responda às avaliações com algumas palavras sinceras: os futuros clientes também leem as suas respostas. No Wimbo, cada avaliação está associada a uma reserva real, o que lhe dá todo o peso.</p>\n<p><strong>7. Um calendário de disponibilidade.</strong> Bloqueie as datas já ocupadas, incluindo as reservadas fora do Wimbo. Evita reservas duplicadas e pedidos que teria de recusar, e o cliente sabe logo se pode contar consigo.</p>\n<h3>Como é que o Wimbo o ajuda a conseguir atuações?</h3>\n<p>O Wimbo põe particulares e empresas em contacto com artistas verificados, em França e noutros países, incluindo as festas na terra da diáspora. Os pedidos chegam completos (data, local, número de convidados, orçamento), o sinal do cliente fica protegido desde a reserva e, para eventos em França, a declaração GUSO (o sistema francês para declarar artistas contratados pontualmente) é preparada do lado do cliente (<a href=\"/blog/guso-tout-comprendre\">tudo sobre o GUSO</a>). Três planos, sem fidelização:</p>\n<ul><li><strong>Descoberta</strong>: gratuito, perfil com 5 fotos, pedidos de orçamento, mensagens e calendário.</li><li><strong>Pro</strong> (19 € por mês): 15 fotos, 2 vídeos e maior visibilidade nos resultados.</li><li><strong>Premium</strong> (49 € por mês): 30 fotos, 5 vídeos e destaque no topo dos resultados.</li></ul>\n<p>Só é cobrada uma comissão sobre as atuações realizadas. E, no lançamento, os 150 primeiros inscritos ficam Premium para sempre, gratuitamente, com o selo de membro fundador. Todos os detalhes estão na página <a href=\"/abonnements\">Planos</a>.</p>\n<p>A sua arte, as emoções deles: crie o seu perfil em 5 minutos, sem cartão bancário, e a nossa equipa valida-o geralmente em 48 horas. <a href=\"/je-suis-artiste\">Descobrir o Wimbo para artistas</a>.</p>"}},"chatk":[["preco","precos","custa","custo","quanto","orcamento","caro","valor"],["guso","declaracao","declarar","contribuicoes","seguranca","social"],["registar","registo","inscrever","inscricao","criar","conta","perfil"],["palavra","passe","senha","esqueci","sessao","entrar","login"],["cancelar","cancelamento","reembolso","reembolsar","devolver"],["video","videos","foto","fotos","fotografias","media"],["plano","planos","assinatura","oferta","premium","pro","descoberta","fundador","fundadores"],["contacto","contactar","equipa","humano","falar","telefone","telemovel","email"],["lingua","idioma","portugues","ingles","frances","traducao","traduzido"],["pais","estrangeiro","portugal","angola","cabo","verde","diaspora","haiti","brasil","terra"]]},"en":{"ui":{"(cliquez pour choisir)":"(click to choose)","(cliquez pour choisir, plusieurs possibles)":"(click to choose, several allowed)","(facultatif)":"(optional)","(facultatif, jusqu'à 3 liens)":"(optional, up to 3 links)","(jusqu'à 4, la première sera votre photo principale)":"(up to 4, the first will be your main photo)",", nous suivons le dossier jusqu'au bout.":", we see everything through to the end.","/ mois":"/ month","1 artiste à Paris":"1 artist in Paris","15 photos et 2 vidéos courtes":"15 photos and 2 short videos","150 places de membres fondateurs":"150 founding member places","150 places de membres fondateurs : badge Premium offert à vie":"150 founding member places: Premium badge free for life","18, 30, 50 ou 70 ans : un artiste live change complètement l'ambiance d'un anniversaire. Choisissez un style, une ville et une date, comparez les profils, écoutez les extraits et réservez en toute sérénité, paiement sécurisé et administratif compris.":"18th, 30th, 50th or 70th: a live artist completely changes the atmosphere of a birthday party. Choose a style, a city and a date, compare profiles, listen to samples and book with complete peace of mind, with secure payment and paperwork included.","30 photos et 5 vidéos courtes":"30 photos and 5 short videos","4,5 et plus":"4.5 and above","4,8 et plus":"4.8 and above","8 caractères minimum. Astuce : une phrase courte, comme « guitare bleue 2027 ».":"8 characters minimum. Tip: a short phrase, such as “blue guitar 2027”.","8 caractères minimum. Astuce : une phrase courte, comme « mariage de ma fille 2027 ».":"8 characters minimum. Tip: a short phrase, such as “my daughter's wedding 2027”.",": cachet, cotisations sociales et frais de service.":": fee, social security contributions and service fees.",": votre espace organisateur sera lié à votre compte artiste.":": your organiser area will be linked to your artist account.",": votre profil artiste sera lié à ce compte.":": your artist profile will be linked to this account.","Abonnement":"Plan","Abonnements":"Plans","Abonnements artistes · Wimbo":"Artist plans · Wimbo","Accepter":"Accept","Accepter le devis":"Accept quote","Accordéon":"Accordion","Accordéoniste":"Accordionist","Accueil":"Home","Accès réservé · Wimbo":"Restricted access · Wimbo","Accès réservé à l'équipe Wimbo":"Access restricted to the Wimbo team","Accéder au blog":"Visit the blog","Acompte (30 %)":"Deposit (30%)","Acompte de 30 % sécurisé, solde après la prestation. Nous préparons la déclaration GUSO pour vous.":"Secure 30% deposit, balance after the performance. We prepare the GUSO declaration for you.","Acompte de 30 % à la réservation, solde après la prestation, versé à l'artiste une fois l'événement passé.":"30% deposit on booking, balance after the performance, paid to the artist once the event has taken place.","Actif":"Active","Administratif":"Paperwork","Administratif · 5 min":"Paperwork · 5 min","Adresse email invalide (format attendu : nom@domaine.fr).":"Invalid email address (expected format: name@domain.com).","Affiner la recherche":"Refine your search","Agenda intégré":"Built-in calendar","Agrandir la photo":"Enlarge photo","Aide Wimbo":"Wimbo Help","Ajouter au moins 3 photos":"Add at least 3 photos","Ajouter aux favoris":"Add to favourites","Ajouter mon IBAN":"Add my IBAN","Ajouter un lien vidéo ou Instagram":"Add a video or Instagram link","Ajouter une vidéo":"Add a video","Ajouté à vos favoris":"Added to your favourites","Altiste":"Viola player","Alto":"Viola","Amabilité":"Friendliness","Anniversaire":"Birthday","Annulée":"Cancelled","Aperçu":"Preview","Aperçu administrateur · statut :":"Admin preview · status:","Aperçu de votre profil : il sera visible publiquement après validation par l'équipe Wimbo (sous 48 h).":"Preview of your profile: it will be publicly visible once approved by the Wimbo team (within 48 hours).","Artiste":"Artist","Artiste Wimbo":"Wimbo artist","Artiste validé : il apparaît dans le catalogue":"Artist approved: now listed in the catalogue","Artistes":"Artists","Artistes : rejoignez Wimbo":"Artists: join Wimbo","Artistes Premium uniquement":"Premium artists only","Artistes similaires":"Similar artists","Artistes vérifiés":"Verified artists","Association / structure":"Association / organisation","Aucun artiste dans cette catégorie.":"No artists in this category.","Aucun artiste ne correspond… pour l'instant":"No matching artists… yet","Aucun avis pour le moment.":"No reviews yet.","Aucun message pour le moment.":"No messages yet.","Aucune demande pour l'instant":"No requests yet","Aucune demande pour l'instant. Un profil complet avec de belles photos reçoit bien plus de demandes.":"No requests yet. A complete profile with great photos gets far more requests.","Aucune demande pour le moment":"No requests yet","Aucune demande pour le moment.":"No requests yet.","Aucune photo pour le moment.":"No photos yet.","Aucune vidéo pour le moment.":"No videos yet.","Aucune ville trouvée. Vérifiez l'orthographe.":"No city found. Check the spelling.","Auto-entrepreneur":"Self-employed","Autre":"Other","Autre / je ne sais pas":"Other / not sure","Autres genres":"Other genres","Autres instruments":"Other instruments","Avis":"Reviews","Avis clients":"Customer reviews","Avis clients · Wimbo":"Customer reviews · Wimbo","Avis publié":"Review published","Avis refusé":"Review rejected","Badge Premium offert à vie, mise en avant dans les résultats et commission réduite.":"Premium badge free for life, featured placement in results and reduced commission.","Badge Pro sur le profil":"Pro badge on your profile","Badge ★ Premium":"★ Premium badge","Baptême & communion":"Christening & communion","Basse":"Bass","Bassiste":"Bassist","Basé à":"Based in","Batterie":"Drums","Batteur":"Drummer","Besoin de plus de photos ?":"Need more photos?","Bien sûr. Précisez-les dans votre demande de devis : la plupart des artistes acceptent les demandes spéciales avec quelques semaines d'avance.":"Of course. Mention them in your quote request: most artists accept special requests with a few weeks' notice.","Bientôt disponible":"Coming soon","Bloquez vos dates indisponibles, évitez les doubles réservations.":"Block out the dates you're unavailable and avoid double bookings.","Bon retour":"Welcome","Bravo, votre profil est complet !":"Well done, your profile is complete!","Budget maximum":"Maximum budget","C'est rare, mais si cela arrive, votre acompte vous est intégralement remboursé et nous vous proposons en priorité des artistes équivalents disponibles à votre date.":"It's rare, but if it happens, your deposit is refunded in full and we'll give you priority access to equivalent artists available on your date.","Cachet":"Fee","Calendrier":"Calendar","Calendrier de disponibilités":"Availability calendar","Ce fichier n'est pas une vidéo (formats acceptés : MP4, MOV, WebM).":"This file isn't a video (accepted formats: MP4, MOV, WebM).","Ce lien a expiré ou a déjà été utilisé.":"This link has expired or has already been used.","Ce profil n'existe pas ou n'est plus disponible.":"This profile doesn't exist or is no longer available.","Ce que Wimbo gère pour vous":"What Wimbo handles for you","Ce que les organisateurs disent des artistes Wimbo. Chaque avis est relu et rapproché d'une réservation.":"What organisers say about Wimbo artists. Every review is checked and matched to a booking.","Ce qui est inclus : durée, matériel, déplacement…":"What's included: duration, equipment, travel…","Cet artiste établit un tarif sur mesure pour chaque événement (durée, lieu, formation). Demandez un devis gratuit : vous connaissez le coût total, cotisations GUSO comprises, avant de réserver.":"This artist sets a tailored price for each event (duration, venue, line-up). Request a free quote: you'll know the total cost, GUSO contributions included, before you book.","Cette page a fait une fausse note":"This page hit a wrong note","Changer mon mot de passe":"Change my password","Chanson française":"French chanson","Chant":"Vocals","Chanteur / Chanteuse":"Singer","Chanteur·se":"Singer","Chanteuse, pianiste, violoniste, DJ : cherchez directement l'artiste qu'il vous faut.":"Singer, pianist, violinist, DJ: search directly for the artist you need.","Chaque artiste fixe son tarif : comptez en général de 400 à 900 € pour un solo, de 900 à 2 400 € pour un trio ou un quatuor, et de 1 500 à 3 500 € pour un groupe. Le devis précise tout, cotisations GUSO comprises.":"Each artist sets their own rates: as a guide, expect €400 to €900 for a solo artist, €900 to €2,400 for a trio or quartet, and €1,500 to €3,500 for a band. The quote sets everything out, GUSO contributions included.","Chargement…":"Loading…","Chercher":"Search","Cherchez":"Search","Cherchez et comparez":"Search and compare","Choisir…":"Choose…","Choisissez au moins 8 caractères.":"Choose at least 8 characters.","Choisissez au moins un instrument ou une spécialité (ou utilisez « Autre »).":"Choose at least one instrument or speciality (or use “Other”).","Choisissez au moins un style.":"Choose at least one style.","Choisissez le type d'événement.":"Choose the type of event.","Choisissez un mot de passe d'au moins 8 caractères.":"Choose a password of at least 8 characters.","Choisissez votre ville dans la liste de suggestions : elle nous indique aussi le pays.":"Choose your city from the list of suggestions: it also tells us the country.","Chœur":"Choir","Chœur / chorale":"Choir / chorus","Clarinette":"Clarinet","Clarinettiste":"Clarinettist","Classique":"Classical","Clavier":"Keyboard","Claviériste":"Keyboard player","Cliquez sur le cœur d'un profil pour le retrouver ici.":"Click the heart on a profile to find it here.","Cliquez sur un jour pour le marquer indisponible. Les dates confirmées apparaissent en couleur.":"Click a day to mark it as unavailable. Confirmed dates appear in colour.","Cocktail":"Drinks reception","Cocktail & dîner":"Drinks reception & dinner","Combien coûte l'utilisation de Wimbo ?":"How much does it cost to use Wimbo?","Combien coûte un artiste ?":"How much does an artist cost?","Combien coûte un musicien pour un événement privé ?":"How much does a musician cost for a private event?","Combien de photos et de vidéos ?":"How many photos and videos?","Combien de temps faut-il pour s'inscrire ?":"How long does it take to sign up?","Commencer gratuitement":"Start for free","Commencez à taper puis choisissez dans la liste : le pays est ajouté automatiquement.":"Start typing, then choose from the list: the country is added automatically.","Comment ajouter des vidéos à mon profil ?":"How do I add videos to my profile?","Comment créer mon compte ?":"How do I create my account?","Comment fonctionne le paiement ?":"How does payment work?","Comment mon profil est-il validé ?":"How is my profile approved?","Comment pouvons-nous vous aider ?":"How can we help you?","Comment ça marche":"How it works","Comment ça marche · Wimbo":"How it works · Wimbo","Comparer les offres":"Compare plans","Compléter mon profil":"Complete my profile","Complétez ces informations pour activer votre espace organisateur.":"Complete these details to activate your organiser area.","Comprendre le GUSO en 5 minutes":"Understanding GUSO in 5 minutes","Concentrez-vous sur la scène":"Focus on the stage","Concert à la maison":"House concert","Conditions générales de vente":"Terms and conditions of sale","Confidentialité":"Privacy","Confirmer la réservation":"Confirm booking","Confirmée":"Confirmed","Connecté avec":"Logged in with","Connexion au serveur impossible.":"Unable to connect to the server.","Connexion au serveur impossible. Vérifiez votre connexion internet.":"Unable to connect to the server. Check your internet connection.","Connexion en cours…":"Logging in…","Connexion · Wimbo":"Log in · Wimbo","Connexion…":"Logging in…","Conseil : une photo en situation (sur scène, avec votre instrument) attire bien plus de demandes.":"Tip: an action shot (on stage, with your instrument) attracts far more requests.","Conseils, guides et inspirations pour réussir la musique de vos événements.":"Tips, guides and inspiration to get the music right at your events.","Contactez-nous":"Contact us","Continuer":"Continue","Contrat et GUSO":"Contract and GUSO","Contrat et déclaration GUSO préparés pour vos clients : vous êtes déclaré correctement, sans effort.":"Contract and GUSO declaration prepared for your clients: you're declared correctly, effortlessly.","Contrebasse":"Double bass","Contrebassiste":"Double bassist","Coordonnées bancaires":"Bank details","Copiez l'adresse de la vidéo depuis YouTube, Vimeo, Instagram ou TikTok. Les vidéos YouTube et Vimeo se lisent directement sur votre fiche.":"Copy the video link from YouTube, Vimeo, Instagram or TikTok. YouTube and Vimeo videos play directly on your profile.","Création de votre profil…":"Creating your profile…","Création du compte…":"Creating account…","Créer mon compte":"Create my account","Créer mon compte pour suivre ma demande":"Create my account to track my request","Créer mon profil":"Create my profile","Créer mon profil artiste":"Create my artist profile","Créer mon profil gratuitement":"Create my profile for free","Créer un compte":"Create an account","Créer un compte · Wimbo":"Create an account · Wimbo","Créez votre compte":"Create your account","Créez votre compte pour suivre vos demandes, retrouver vos favoris et réserver en quelques clics.":"Create your account to track your requests, find your favourites and book in just a few clicks.","Créez votre profil gratuitement.":"Create your profile for free.","Créez-le en 3 minutes avec votre compte actuel.":"Create it in 3 minutes with your existing account.","Cérémonie":"Ceremony","Cérémonie laïque, religieuse ou civile : des musiciens qui savent accompagner les moments forts, de l'entrée des mariés à la sortie, avec un répertoire choisi ensemble.":"Humanist, religious or civil ceremony: musicians who know how to accompany the big moments, from the couple's entrance to their exit, with a repertoire chosen together.","Cérémonie, cocktail, dîner, soirée : quel artiste pour quel moment, à quel budget, et combien de temps à l'avance réserver ?":"Ceremony, drinks reception, dinner, evening party: which artist for which moment, on what budget, and how far in advance should you book?","D'acompte sécurisé":"Secure deposit","Date à préciser":"Date to be confirmed","Date, lieu, nombre d'invités, budget : chaque demande arrive complète. Vous répondez avec un devis en quelques clics.":"Date, venue, number of guests, budget: every request arrives complete. You reply with a quote in just a few clicks.","Demande acceptée, le client est prévenu":"Request accepted, the client has been notified","Demande déclinée":"Request declined","Demande enregistrée":"Request received","Demande personnalisée":"Custom request","Demander un devis":"Request a quote","Demander un devis gratuit":"Request a free quote","Demander un nouveau lien":"Request a new link","Demandes":"Requests","Demandes de devis et messagerie":"Quote requests and messaging","Demandes reçues":"Requests received","Demandes reçues, profil, calendrier":"Requests received, profile, calendar","Demandez un devis":"Request a quote","Depuis votre espace artiste, onglet « Mon profil » : envoyez une vidéo courte (15 secondes et 50 Mo maximum) ou collez un lien YouTube, Vimeo, Instagram ou TikTok. Le nombre de vidéos dépend de votre offre : 2 en Pro, 5 en Premium.":"From your artist area, “My profile” tab: upload a short video (15 seconds and 50 MB maximum) or paste a YouTube, Vimeo, Instagram or TikTok link. The number of videos depends on your plan: 2 with Pro, 5 with Premium.","Dernières demandes":"Latest requests","Des demandes qualifiées":"Qualified requests","Des demandes qualifiées de particuliers et d'entreprises, sans démarchage":"Qualified requests from individuals and businesses, without having to chase clients","Des formules douces et familiales pour célébrer un baptême ou une communion, à l'église, en salle ou dans le jardin.":"Gentle, family-friendly options to celebrate a christening or communion, in church, in a hall or in the garden.","Des profils vérifiés, un devis en quelques heures, l'administratif en moins.":"Verified profiles, a quote within hours, none of the paperwork.","Devis envoyé":"Quote sent","Devis envoyé au client":"Quote sent to the client","Dim":"Sun","Du jazz manouche au zouk, en passant par le fado et l'afro-house : trouvez le style qui fera vibrer vos invités.":"From gypsy jazz to zouk, by way of fado and Afro house: find the style that will get your guests moving.","Durée":"Duration","Dès qu'un organisateur vous contacte, sa demande apparaît ici et vous êtes prévenu par email.":"As soon as an organiser contacts you, their request appears here and you're notified by email.","Déclaration GUSO préparée par Wimbo":"GUSO declaration prepared by Wimbo","Découverte":"Discovery","Découverte (gratuit, commission de 15 %) : profil avec 5 photos. Pro (19 € par mois, commission de 10 %) : 15 photos, 2 vidéos et une visibilité renforcée. Premium (49 € par mois, commission de 7 %) : 30 photos, 5 vidéos et la mise en avant en tête des résultats. Les 150 premiers artistes inscrits sont Premium à vie, gratuitement.":"Discovery (free, 15% commission): profile with 5 photos. Pro (€19 per month, 10% commission): 15 photos, 2 videos and enhanced visibility. Premium (€49 per month, 7% commission): 30 photos, 5 videos and top placement in the results. The first 150 artists to sign up get Premium for life, free of charge.","Découverte : 5 photos. Pro : 15 photos et 2 vidéos. Premium : 30 photos et 5 vidéos (15 secondes maximum chacune, ou un lien YouTube).":"Discovery: 5 photos. Pro: 15 photos and 2 videos. Premium: 30 photos and 5 videos (15 seconds maximum each, or a YouTube link).","Découverte est gratuite (commission 15 %), Pro coûte 19 € par mois (10 %) et Premium 49 € par mois (7 %). Les 150 premiers artistes inscrits sont Premium à vie, gratuitement.":"Discovery is free (15% commission), Pro costs €19 per month (10%) and Premium €49 per month (7%). The first 150 artists to sign up get Premium for life, free of charge.","Découvrez les profils à l'affiche":"Discover the featured profiles","Décrivez votre événement : lieu, moments à animer, chansons souhaitées…":"Describe your event: venue, which moments need music, song requests…","Décrivez votre événement en 2 minutes. L'artiste répond en 2 à 3 heures avec un devis détaillé.":"Describe your event in 2 minutes. The artist replies within 2 to 3 hours with a detailed quote.","Décrivez votre événement en 2 minutes. L'artiste vous répond sous 2 à 3 heures avec un devis détaillé.":"Describe your event in 2 minutes. The artist will reply within 2 to 3 hours with a detailed quote.","Déjà inscrit ?":"Already registered?","Délai de réponse":"Response time","Délai de réponse moyen":"Average response time","Démonstration :":"Demo:","Détails":"Details","Dîner":"Dinner","EVJF / EVG":"Hen / stag party","Effacer les filtres":"Clear filters","Email ou mot de passe incorrect.":"Incorrect email or password.","En 3 étapes":"In 3 steps","En France, engager un artiste pour un événement privé impose une déclaration auprès du Guichet unique du spectacle occasionnel (GUSO). Beaucoup l'ignorent, et s'exposent à un redressement.":"In France, hiring an artist for a private event requires a declaration to the Guichet unique du spectacle occasionnel (GUSO). Many people don't know this, and risk being penalised.","En activité depuis":"Performing since","En attente":"Pending","En attente de réponse":"Awaiting reply","En cas d'imprévu, notre équipe vous propose un artiste de remplacement sous 24 h ouvrées.":"If anything unexpected happens, our team will offer you a replacement artist within 24 working hours.","En combien de temps vais-je recevoir un devis ?":"How quickly will I receive a quote?","En euros, pour une prestation de 2 h. C'est un prix « à partir de » : vous l'ajustez à chaque devis.":"In euros, for a 2-hour performance. This is a “from” price: you can adjust it in each quote.","En pause":"Paused","En savoir plus":"Find out more","En vedette":"Featured","Enregistrement du compte impossible :":"Account could not be saved:","Enregistrement du profil impossible :":"Profile could not be saved:","Enregistrement impossible :":"Could not save:","Enregistrement impossible, réessayez dans un instant.":"Could not save, please try again in a moment.","Enregistrement…":"Saving…","Enregistrer":"Save","Ensemble classique":"Classical ensemble","Environ 5 minutes. Vous pouvez créer votre compte sans photo et compléter votre profil plus tard depuis votre espace.":"About 5 minutes. You can create your account without a photo and complete your profile later from your area.","Envoi de la vidéo… cela peut prendre une minute":"Uploading video… this may take a minute","Envoi en cours…":"Sending…","Envoi…":"Sending…","Envoyer":"Send","Envoyer le devis":"Send quote","Envoyer le message":"Send message","Envoyer un devis":"Send a quote","Erreur 404":"Error 404","Espace artiste · Wimbo":"Artist area · Wimbo","Espace organisateur":"Organiser area","Essayez d'élargir vos critères, ou confiez-nous votre recherche : nous trouvons l'artiste qu'il vous faut sous 24 h.":"Try broadening your criteria, or let us do the search for you: we'll find the right artist within 24 hours.","Et si je dois annuler ?":"What if I need to cancel?","Ex. : 600":"E.g. 600","Ex. : 800":"E.g. 800","Ex. : Lyon, Lisbonne…":"E.g. Lyon, Lisbon…","Ex. : Paris":"E.g. Paris","Ex. : Paris, Lisbonne, Douala…":"E.g. Paris, Lisbon, Douala…","Ex. : Trio Étincelles":"E.g. Trio Étincelles","Ex. : kora, oud, steel drum (séparez par des virgules)":"E.g. kora, oud, steel drum (separate with commas)","Expérience":"Experience","FAQ organisateurs":"Organiser FAQ","Favori":"Favourite","Favoris":"Favourites","Fermer":"Close","Filtres":"Filters","Filtrez par style, événement, ville et budget. Photos, vidéos et avis vérifiés vous aident à choisir.":"Filter by style, event, city and budget. Photos, videos and verified reviews help you choose.","Filtrez par style, événement, ville, budget et formation. Chaque profil est vérifié par notre équipe.":"Filter by style, event, city, budget and line-up. Every profile is verified by our team.","Flûte":"Flute","Flûtiste":"Flautist","Folk / Acoustique":"Folk / Acoustic","Fondateur":"Founder","Formalités GUSO préparées côté client":"GUSO formalities prepared on the client side","Formation":"Line-up","Formation et membres":"Line-up and members","Fête":"Party","Fête au pays":"Party back home","Fête au pays (diaspora)":"Party back home (diaspora)","Fête privée":"Private party","GUSO : tout comprendre en 5 minutes":"GUSO: everything you need to know in 5 minutes","GUSO géré":"GUSO handled","GUSO inclus":"GUSO included","Genres musicaux":"Music genres","Gratuit et sans engagement":"Free, no commitment","Gratuit, en 1 minute. Pour organiser un événement.":"Free, in 1 minute. For organising an event.","Groupe":"Band","Groupe de reprises":"Covers band","Guitare":"Guitar","Guitariste":"Guitarist","Harpe":"Harp","Harpiste":"Harpist","Ici et au pays":"Here and back home","Identité, statut et extraits contrôlés par notre équipe avant toute mise en ligne.":"Identity, status and samples checked by our team before anything goes live.","Identité, statut, extraits et références contrôlés avant la mise en ligne.":"Identity, status, samples and references checked before going live.","Il reste 150 places de membres fondateurs : Premium offert à vie. Inscription gratuite en 5 minutes.":"150 founding member places left: Premium free for life. Free sign-up in 5 minutes.","Ils ont réservé sur Wimbo":"They booked on Wimbo","Impossible de lire cette image":"Unable to read this image","Indiquer un tarif ou choisir « sur devis »":"Enter a price or choose “on quote”","Indiquez l'email de votre compte.":"Enter your account email.","Indiquez la date de votre événement.":"Enter the date of your event.","Indiquez la ville de l'événement.":"Enter the city where the event takes place.","Indiquez un montant valide.":"Enter a valid amount.","Indiquez un tarif indicatif, ou choisissez « Sur devis uniquement ».":"Enter an indicative price, or choose “On quote only”.","Indiquez une adresse email valide pour recevoir le devis.":"Enter a valid email address to receive the quote.","Indiquez une adresse email valide.":"Enter a valid email address.","Indiquez votre email et votre mot de passe.":"Enter your email and password.","Indiquez votre nom et un commentaire d'au moins 15 caractères.":"Enter your name and a comment of at least 15 characters.","Indiquez votre nom.":"Enter your name.","Indiquez votre prénom et votre nom.":"Enter your first name and surname.","Indiquez votre ville.":"Enter your city.","Indisponible":"Unavailable","Informations":"Information","Informations enregistrées":"Details saved","Inscription artiste · Wimbo":"Artist sign-up · Wimbo","Inscription gratuite en 5 minutes.":"Free sign-up in 5 minutes.","Inscription gratuite, sans engagement.":"Free sign-up, no commitment.","Instruments et spécialités":"Instruments and specialities","Intermittent du spectacle":"Intermittent performer","Intermittent du spectacle, artiste salarié via le GUSO ou structure (association, société de production) : Wimbo s'adapte. Nous préparons les formalités côté client pour que vous soyez déclaré correctement.":"Intermittent performer, artist employed via GUSO or organisation (association, production company): Wimbo adapts to you. We prepare the formalities on the client side so that you're declared correctly.","Invités":"Guests","J'accepte les":"I accept the","J'accepte que Wimbo utilise ces informations pour me répondre (voir la politique de confidentialité).":"I agree that Wimbo may use this information to reply to me (see the privacy policy).","J'affiche un tarif indicatif":"Show an indicative price","J'ai oublié mon mot de passe":"I've forgotten my password","Jazz manouche":"Gypsy jazz","Je confirme ma réservation":"Confirm my booking","Je n'ai pas trouvé de réponse précise à votre question. Notre équipe vous répond sous 24 heures ouvrées.":"I couldn't find a precise answer to your question. Our team will reply within 24 working hours.","Je ne cours plus après les demandes : elles arrivent qualifiées, avec la date, le lieu et le budget. Et le paiement tombe à l'heure.":"I don't chase requests any more: they come in qualified, with the date, venue and budget. And payment arrives on time.","Je ne suis pas disponible":"I'm not available","Je peux me déplacer au-delà de mon rayon (frais en sus)":"I can travel beyond my radius (extra charges apply)","Je vis hors de France métropolitaine, puis-je m'inscrire ?":"I live outside mainland France, can I sign up?","Jeu":"Thu","Jusqu'à":"Up to","Jusqu'à 1 000 €":"Up to €1,000","L'acompte est sécurisé dès la réservation. Le solde vous est versé sous 48 h après la prestation.":"The deposit is secured at the time of booking. The balance is paid to you within 48 hours of the performance.","L'artiste vous répond en général sous 2 à 3 heures.":"The artist usually replies within 2 to 3 hours.","L'artiste étudie votre demande et vous envoie un devis détaillé, cotisations GUSO comprises.":"The artist reviews your request and sends you a detailed quote, GUSO contributions included.","L'inscription est-elle gratuite ?":"Is sign-up free?","La bonne musique pour chaque moment":"The right music for every moment","La date de l'événement doit être dans le futur.":"The event date must be in the future.","La déclaration obligatoire est préparée pour vous et les cotisations sont intégrées au devis. Zéro oubli, zéro surprise.":"The mandatory declaration is prepared for you and contributions are built into the quote. Nothing forgotten, no surprises.","La déclaration préparée pour vous":"The declaration prepared for you","La musique":"Music","La musique accompagne chaque moment de votre mariage : l'entrée à la cérémonie, le cocktail, le dîner puis la soirée dansante. Sur Wimbo, vous trouvez le chanteur, le quatuor, le groupe ou le DJ qui vous ressemble, et vous recevez un devis détaillé en quelques heures. Le contrat et la déclaration GUSO sont préparés pour vous.":"Music accompanies every moment of your wedding: the entrance at the ceremony, the drinks reception, the dinner and then the evening dancing. On Wimbo, you'll find the singer, quartet, band or DJ that suits you, and receive a detailed quote within hours. The contract and GUSO declaration are prepared for you.","La musique nous rapproche":"Music brings us together","La page que vous cherchez n'existe pas ou a été déplacée.":"The page you're looking for doesn't exist or has been moved.","La recherche, la consultation des profils et les demandes de devis sont gratuites et sans engagement. Lorsque vous réservez, des frais de service sont inclus dans le devis : ils couvrent le paiement sécurisé, la préparation des formalités GUSO et l'accompagnement en cas de problème.":"Searching, browsing profiles and requesting quotes are all free, with no commitment. When you book, a service fee is included in the quote: it covers secure payment, preparation of the GUSO formalities and support if anything goes wrong.","La suite":"What's next","Langue":"Language","Langues":"Languages","Latino / Salsa":"Latin / Salsa","Le GUSO est le guichet qui permet de déclarer un artiste engagé pour un événement en France. Wimbo prépare la déclaration et intègre les cotisations au devis : vous n'avez qu'à valider.":"GUSO is the one-stop shop for declaring an artist hired for an event in France. Wimbo prepares the declaration and includes the contributions in the quote: all you have to do is approve.","Le GUSO est le guichet qui permet de déclarer un artiste engagé pour un événement occasionnel. C'est obligatoire en France quand vous engagez directement un artiste. Wimbo prépare la déclaration et intègre les cotisations au devis : vous n'avez qu'à valider.":"GUSO is the one-stop shop for declaring an artist hired for an occasional event. It's mandatory in France when you hire an artist directly. Wimbo prepares the declaration and includes the contributions in the quote: all you have to do is approve.","Le GUSO, on s'en occupe":"GUSO? We'll take care of it","Le blog Wimbo":"The Wimbo blog","Le coût total dès le devis":"The total cost, right from the quote","Le jour J, l'artiste fait le show. Le solde est réglé après la prestation, puis vous laissez un avis.":"On the big day, the artist puts on a show. The balance is paid after the performance, then you leave a review.","Le jour J, place à la musique. Le solde est réglé après la prestation.":"On the big day, let the music play. The balance is paid after the performance.","Le monde de Wimbo":"The world of Wimbo","Le paiement en ligne sécurisé sera activé à l'ouverture des réservations. En attendant, notre équipe vous contacte pour finaliser.":"Secure online payment will be activated when bookings open. In the meantime, our team will contact you to finalise things.","Le plus choisi":"Most popular","Le serveur ne répond pas pour le moment. Vérifiez votre connexion et réessayez dans quelques minutes.":"The server isn't responding right now. Check your connection and try again in a few minutes.","Le service GUSO":"The GUSO service","Le site est-il traduit ?":"Is the site translated?","Le site existe-t-il en portugais et en anglais ?":"Is the site available in Portuguese and English?","Le solde vous est versé dans les 48 heures suivant la prestation, une fois l'événement confirmé par le client. L'acompte est sécurisé dès la réservation.":"The balance is paid to you within 48 hours of the performance, once the client has confirmed the event. The deposit is secured at the time of booking.","Les artistes Wimbo s'engagent à répondre sous 2 à 3 heures en journée. Le délai moyen de chaque artiste est affiché sur son profil.":"Wimbo artists commit to replying within 2 to 3 hours during the day. Each artist's average response time is shown on their profile.","Les artistes que vous avez mis de côté. Enregistrés sur cet appareil.":"The artists you've saved. Stored on this device.","Les avis sont-ils vérifiés ?":"Are reviews verified?","Les clients savent exactement ce qu'ils paient, cotisations comprises. Fini les négociations gênantes au moment du devis.":"Clients know exactly what they're paying, contributions included. No more awkward negotiations at quote time.","Les formalités GUSO préparées pour vos clients":"GUSO formalities prepared for your clients","Les organisateurs peuvent vous trouver et vous contacter.":"Organisers can find and contact you.","Les premiers artistes arrivent":"The first artists are on their way","Les premiers avis arrivent bientôt":"The first reviews are coming soon","Les vidéos sont disponibles avec les offres Pro (2 vidéos) et Premium (5 vidéos).":"Videos are available with the Pro (2 videos) and Premium (5 videos) plans.","Les vidéos sont disponibles avec les offres Pro et Premium.":"Videos are available with the Pro and Premium plans.","Les vidéos sont disponibles avec les offres Pro et Premium. Vous pourrez en ajouter depuis votre espace en changeant d'offre.":"Videos are available with the Pro and Premium plans. You can add them from your area by changing your plan.","Lien YouTube, Vimeo, Instagram ou TikTok":"YouTube, Vimeo, Instagram or TikTok link","Lien copié":"Link copied","Lire notre guide des prix":"Read our pricing guide","Lisbonne, Portugal":"Lisbon, Portugal","Logistique et équipement":"Logistics and equipment","Lun":"Mon","MP4 ou MOV, 50 Mo maximum. Filmez à l'horizontale de préférence.":"MP4 or MOV, 50 MB maximum. Film in landscape if possible.","Mar":"Tue","Mariage":"Wedding","Mariage au Portugal, baptême en Guadeloupe, anniversaire à Lisbonne : comment trouver et réserver un artiste local sans être sur place.":"A wedding in Portugal, a christening in Guadeloupe, a birthday in Lisbon: how to find and book a local artist without being there in person.","Mariage, anniversaire, soirée d'entreprise ou fête au pays : la bonne musique pour chaque occasion.":"Wedding, birthday, corporate party or party back home: the right music for every occasion.","Mariage, anniversaire…":"Wedding, birthday…","Marquer comme traité":"Mark as handled","Marquer à traiter":"Mark as to do","Membres fondateurs":"Founding members","Mentions légales":"Legal notice","Mer":"Wed","Merci ! Votre avis sera publié après vérification.":"Thank you! Your review will be published once it has been checked.","Merci d'accepter l'utilisation de vos informations pour vous répondre.":"Please agree to the use of your details so that we can reply to you.","Merci d'accepter les CGV pour continuer.":"Please accept the terms and conditions to continue.","Merci de noter les 4 critères.":"Please rate all 4 criteria.","Merci de remplir votre nom, un email valide et votre message.":"Please enter your name, a valid email address and your message.","Mes demandes":"My requests","Mes demandes de devis, favoris":"My quote requests, favourites","Mes demandes envoyées (organisateur)":"My sent requests (organiser)","Mes disponibilités":"My availability","Mes favoris":"My favourites","Mes favoris · Wimbo":"My favourites · Wimbo","Mes informations":"My details","Mes paiements":"My payments","Mes photos":"My photos","Mes vidéos":"My videos","Message bien reçu":"Message received","Message mis à jour":"Message updated","Messages de contact":"Contact messages","Mieux notés":"Top rated","Mise en avant en tête des résultats":"Featured at the top of results","Mise à jour impossible :":"Update failed:","Mois précédent":"Previous month","Mois suivant":"Next month","Mon compte":"My account","Mon espace":"My area","Mon espace organisateur":"My organiser area","Mon espace · Wimbo":"My area · Wimbo","Mon profil":"My profile","Montage et déplacements":"Set-up and travel","Montant":"Amount","Mot de passe":"Password","Mot de passe mis à jour":"Password updated","Mot de passe oublié":"Forgotten password","Mot de passe oublié ?":"Forgotten your password?","Mot de passe oublié · Wimbo":"Forgotten password · Wimbo","Mot de passe refusé : choisissez au moins 8 caractères.":"Password rejected: choose at least 8 characters.","Mot de passe trop court : 8 caractères minimum (une phrase courte marche très bien).":"Password too short: 8 characters minimum (a short phrase works very well).","Mot de passe trop court : 8 caractères minimum.":"Password too short: 8 characters minimum.","Mot-clé":"Keyword","Musiciens, chanteurs, groupes et DJ vérifiés pour vos événements, près de chez vous comme au pays.":"Verified musicians, singers, bands and DJs for your events, near you or back home.","Musiciens, chanteurs, groupes et DJ vérifiés. Devis en 2 à 3 heures, déclaration GUSO et paiement sécurisé inclus.":"Verified musicians, singers, bands and DJs. Quotes in 2 to 3 hours, GUSO declaration and secure payment included.","Musicien·ne":"Musician","Musique du monde":"World music","Navigation principale":"Main navigation","Nom":"Last name","Nom de scène":"Stage name","Nom, email, mot de passe. Pas de carte bancaire.":"Name, email, password. No bank card required.","Nom, style, ville…":"Name, style, city…","Nos articles":"Our articles","Note minimum":"Minimum rating","Notre offre musicale":"Our music offering","Notre signature":"Our signature","Notre équipe le vérifie sous 48 h. En attendant, complétez-le pour qu'il soit prêt.":"Our team will review it within 48 hours. In the meantime, complete it so that it's ready.","Notre équipe vous répond sous 24 h ouvrées.":"Our team will reply within 24 working hours.","Notre équipe vous répond sous 24 heures ouvrées.":"Our team will reply within 24 working hours.","Notre équipe vérifie votre identité, vos extraits et votre statut. La validation prend en général 48 heures, après quoi votre profil apparaît dans les résultats.":"Our team checks your identity, your clips and your status. Validation usually takes 48 hours, after which your profile appears in the results.","Notre équipe vérifie votre profil, puis vous apparaissez dans les résultats.":"Our team reviews your profile, then you appear in the results.","Nous contacter":"Contact us","Nous joindre":"Get in touch","Nous sélectionnons actuellement des artistes dans cette catégorie. Confiez-nous votre recherche, nous vous proposons des profils sous 24 h.":"We are currently selecting artists in this category. Tell us what you're looking for and we'll suggest profiles within 24 hours.","Nous vous envoyons un lien pour choisir un nouveau mot de passe.":"We'll send you a link to choose a new password.","Nouveau":"Fresh","Nouveau mot de passe":"New password","Nouveau mot de passe · Wimbo":"New password · Wimbo","Nouveau sur Wimbo":"New to Wimbo","Nouvelle demande":"New request","Noël & Nouvel an":"Christmas & New Year","Numéro de téléphone incomplet.":"Incomplete phone number.","Offert à vie : vous gardez toutes les fonctionnalités Premium, sans abonnement.":"Free for life: you keep all Premium features, with no subscription.","Offre":"Plan","Offre de lancement":"Launch offer","Offre gratuite, commission de 15 % par prestation.":"Free plan, 15% commission per performance.","Offrez-vous un concert privé dans votre salon ou votre jardin : une formule acoustique, conviviale et inoubliable pour vos proches.":"Treat yourself to a private concert in your living room or garden: a friendly, acoustic and unforgettable experience for your loved ones.","On s'occupe du reste":"We take care of the rest","On vous attend sur scène":"See you on stage","Organisateur":"Organiser","Organisateur : cliquez sur « Se connecter » puis « Je cherche un artiste ». Artiste : cliquez sur « Je suis artiste ». Les deux sont gratuits et prennent quelques minutes.":"Organiser: click “Log in” then “I'm looking for an artist”. Artist: click “I'm an artist”. Both are free and take a few minutes.","Organisateurs":"Organisers","Organiser une fête au pays à distance : le guide diaspora":"Organising a party back home from afar: the diaspora guide","Organiste":"Organist","Orgue":"Organ","Oui : choisissez la langue avec le drapeau en haut de page (français, portugais ou anglais). Les présentations des artistes restent dans la langue où ils les ont rédigées.":"Yes: choose the language with the flag at the top of the page (French, Portuguese or English). Artist bios stay in the language they were written in.","Oui : choisissez le français, le portugais ou l'anglais avec le drapeau en haut de page.":"Yes: choose French, Portuguese or English with the flag at the top of the page.","Oui, Wimbo n'a pas de frontières : vous pouvez réserver un artiste près de chez vous ou pour une fête au pays, et tout gérer à distance.":"Yes, Wimbo has no borders: you can book an artist near you or for a party back home, and manage everything remotely.","Oui, c'est l'une des spécialités de Wimbo : une fête de famille au Portugal, aux Antilles, en Afrique ou ailleurs. Les échanges et le paiement se font en ligne, et nos artistes ont l'habitude des familles qui organisent à distance.":"Yes, it's one of Wimbo's specialities: a family party in Portugal, the French Caribbean, Africa or elsewhere. Communication and payment take place online, and our artists are used to families organising from afar.","Oui, vous restez libre d'accepter ou de refuser chaque demande, et de proposer un devis adapté. Un taux de réponse élevé améliore toutefois votre visibilité.":"Yes, you're free to accept or decline each request, and to offer a tailored quote. A high response rate does, however, improve your visibility.","Oui. Chaque avis est relu par notre équipe et rapproché d'une réservation réelle avant d'être publié sur le profil de l'artiste.":"Yes. Every review is checked by our team and matched to a real booking before being published on the artist's profile.","Oui. Créer votre profil et recevoir des demandes est gratuit. Une commission n'est prélevée que sur les prestations réalisées. Les 150 premiers artistes inscrits bénéficient du badge Premium à vie.":"Yes. Creating your profile and receiving requests is free. A commission is only charged on completed performances. The first 150 artists to sign up get the Premium badge for life.","Oui. Wimbo est ouvert aux artistes du monde entier. Les formalités dépendent du pays de l'événement : en France (DOM compris), nous préparons la déclaration GUSO ; ailleurs, nous vous accompagnons au cas par cas.":"Yes. Wimbo is open to artists from all over the world. Formalities depend on the country of the event: in France (including overseas departments), we prepare the GUSO declaration; elsewhere, we support you on a case-by-case basis.","Où ?":"Where?","Page introuvable · Wimbo":"Page not found · Wimbo","Paiement garanti":"Guaranteed payment","Paiement garanti : l'acompte est sécurisé dès la réservation":"Guaranteed payment: the deposit is secured as soon as you book","Paiement sécurisé":"Secure payment","Paiement sécurisé, solde après la prestation":"Secure payment, balance after the performance","Paiements":"Payments","Paperasse GUSO":"GUSO paperwork","Parler à quelqu'un":"Talk to someone","Partager":"Share","Partenariat (lieu, wedding planner…)":"Partnership (venue, wedding planner…)","Pas de":"Don't","Pas de photo sous la main ? Créez votre profil maintenant et ajoutez-les plus tard depuis votre espace.":"No photos to hand? Create your profile now and add them later from your area.","Pas encore d'avis. Les avis sont publiés après chaque prestation réservée via Wimbo.":"No reviews yet. Reviews are published after each performance booked through Wimbo.","Pas encore de compte ?":"No account yet?","Pas encore de favoris":"No favourites yet","Passer en mode":"Switch to","Patientez…":"Please wait…","Pays":"Country","Percussionniste":"Percussionist","Percussions":"Percussion","Photo supprimée":"Photo deleted","Photo trop lourde (15 Mo maximum)":"Photo too large (15 MB maximum)","Photos ajoutées":"Photos added","Pianiste":"Pianist","Pilotage de la plateforme":"Platform management","Places fondateurs":"Founding member places","Plus de 30 jours avant l'événement, l'acompte est remboursé intégralement. Entre 30 et 15 jours, 50 % de l'acompte est retenu ; en dessous de 15 jours, l'acompte est conservé.":"More than 30 days before the event, the deposit is refunded in full. Between 30 and 15 days, 50% of the deposit is retained; under 15 days, the deposit is kept.","Plus qu'un annuaire : un vrai service de réservation":"More than a directory: a real booking service","Plus tard":"Later","Politique de confidentialité":"Privacy policy","Populaires :":"Popular:","Posez votre question…":"Ask your question…","Pour bloquer la date, un acompte de 30 % est demandé.":"A 30% deposit is required to secure the date.","Pour devenir administrateur, votre adresse doit être ajoutée dans la table « wimbo_admins » (fichier SQL v3).":"To become an administrator, your address must be added to the “wimbo_admins” table (SQL v3 file).","Pour démarrer":"To get started","Pour les artistes actifs":"For active artists","Pour les pros à plein temps":"For full-time pros","Pour quel événement ?":"For which event?","Pour recevoir vos paiements, renseignez votre IBAN via notre prestataire de paiement sécurisé.":"To receive your payments, enter your IBAN via our secure payment provider.","Pour un devis":"For a quote","Pour vous prévenir par SMS quand un client vous contacte. Jamais partagé.":"So we can text you when a client gets in touch. Never shared.","Pourquoi Wimbo":"Why Wimbo","Pourquoi rejoindre Wimbo":"Why join Wimbo","Premium · membre fondateur":"Premium · founding member","Presse":"Press","Prestation":"Performance","Prestation confirmée":"Performance confirmed","Prestations via Wimbo":"Performances through Wimbo","Prix HT. La commission est prélevée uniquement sur les prestations réservées et réalisées via Wimbo.":"Prices exclude VAT. Commission is only charged on performances booked and completed through Wimbo.","Prix croissant":"Price, low to high","Prix décroissant":"Price, high to low","Pro et Premium seront activés dès l'ouverture du paiement en ligne. En attendant, votre profil fonctionne en Découverte.":"Pro and Premium will be activated as soon as online payment opens. In the meantime, your profile stays on the Discovery plan.","Professionnalisme":"Professionalism","Profil en cours de validation.":"Profile under review.","Profil enregistré":"Profile saved","Profil gratuit, badge Premium offert à vie et des demandes qualifiées. Nous gérons l'administratif, vous gérez la scène.":"Free profile, Premium badge free for life and qualified requests. We handle the admin, you take the stage.","Profil public avec 5 photos":"Public profile with 5 photos","Profil refusé":"Profile rejected","Profil remis en attente":"Profile moved back to pending","Profil vérifié":"Profile verified","Profils vérifiés, devis en 2 à 3 h, GUSO inclus.":"Verified profiles, quotes in 2 to 3 hours, GUSO included.","Profiter de l'offre":"Claim the offer","Profitez":"Enjoy","Près de chez vous ou à l'autre bout du monde : réservez un artiste local même à distance, pour les fêtes de la diaspora.":"Close to home or on the other side of the world: book a local artist even from afar, for diaspora celebrations.","Précédent":"Previous","Précédente":"Previous","Prénom":"First name","Prénom et nom":"Full name","Présentation":"About","Présentez votre musique":"Showcase your music","Présentez-vous":"Introduce yourself","Prêt à trouver votre artiste ?":"Ready to find your artist?","Publier":"Publish","Publié":"Published","Puis-je demander des chansons particulières ?":"Can I request specific songs?","Puis-je fixer mes propres tarifs ?":"Can I set my own rates?","Puis-je refuser une demande ?":"Can I decline a request?","Puis-je réserver un artiste à l'étranger depuis la France ?":"Can I book an artist abroad from France?","Puis-je réserver à l'étranger ?":"Can I book abroad?","Qu'est-ce que le GUSO ?":"What is GUSO?","Qu'est-ce que le GUSO et dois-je m'en occuper ?":"What is GUSO and do I need to deal with it?","Qualité musicale":"Musical quality","Quand suis-je payé ?":"When do I get paid?","Que se passe-t-il si l'artiste annule ?":"What happens if the artist cancels?","Quel artiste ?":"Which artist?","Quel espace souhaitez-vous ouvrir ?":"Which area would you like to open?","Quel statut faut-il pour travailler via Wimbo ?":"What status do I need to work through Wimbo?","Quelles différences entre les offres Découverte, Pro et Premium ?":"What are the differences between the Discovery, Pro and Premium plans?","Quelles sont les offres artistes ?":"What are the artist plans?","Question générale":"General question","Questions fréquentes":"Frequently asked questions","Rayon de déplacement (km)":"Travel radius (km)","Recevez des demandes de particuliers et d'entreprises, fixez vos tarifs, soyez payé à temps. Wimbo prépare les formalités pour vos clients.":"Receive requests from individuals and companies, set your rates, get paid on time. Wimbo prepares the paperwork for your clients.","Recevoir la newsletter Wimbo (1 email par mois maximum)":"Receive the Wimbo newsletter (1 email per month maximum)","Recevoir le lien":"Get the link","Recherche d'artiste personnalisée":"Personalised artist search","Rechercher un artiste · Wimbo":"Find an artist · Wimbo","Recommandés":"Recommended","Refuser":"Decline","Refusé":"Rejected","Refusés":"Rejected","Rejoignez les":"Join the","Rejoignez les 150 membres fondateurs":"Join the 150 founding members","Remettre en attente":"Move back to pending","Renseigner vos indisponibilités":"Add your unavailable dates","Restaurateurs et gérants de bar : programmez des artistes live réguliers ou ponctuels pour animer vos soirées et fidéliser votre clientèle.":"Restaurant and bar owners: book live artists on a regular or one-off basis to liven up your evenings and keep your customers coming back.","Retirer":"Remove","Retiré de vos favoris":"Removed from your favourites","Retour":"Back","Retour à l'accueil":"Back to homepage","Retour à l'administration":"Back to admin","Retour à la connexion":"Back to login","Retrouvez vos demandes, vos favoris et votre espace artiste.":"Access your requests, your favourites and your artist area.","Revenus encaissés":"Earnings received","Réalisée":"Completed","Récapitulatif de réservation, contrat et déclaration préparés automatiquement.":"Booking summary, contract and declaration prepared automatically.","Réception":"Reception","Rédiger une présentation (40 caractères minimum)":"Write an introduction (40 characters minimum)","Réinitialiser mon mot de passe":"Reset my password","Répertoire":"Repertoire","Réponses immédiates":"Instant answers","Réservation confirmée, l'artiste est prévenu":"Booking confirmed, the artist has been notified","Réserver ma place":"Reserve my place","Réserver un artiste n'a jamais été aussi simple":"Booking an artist has never been so easy","Réservez":"Book","Réservez sereinement":"Book with peace of mind","Réveillon, fête de fin d'année, arbre de Noël : réservez tôt, les artistes sont très demandés en décembre.":"Christmas and New Year's Eve parties, end-of-year celebrations, children's Christmas parties: book early, artists are in high demand in December.","Salarié":"Employee","Sam":"Sat","Sans engagement, modifiable à tout moment. Une commission uniquement sur les prestations réalisées.":"No commitment, change at any time. Commission only on completed performances.","Saxophoniste":"Saxophonist","Se connecter":"Log in","Se déconnecter":"Log out","Serveur indisponible":"Server unavailable","Sinon, nous affichons votre prénom et votre nom.":"Otherwise, we display your first and last name.","Site web":"Website","Siège":"Head office","Soirée":"Evening","Soirée complète":"Full evening","Soirée de gala, séminaire, inauguration ou fête de fin d'année : nos artistes ont l'habitude des événements professionnels. Facture au nom de votre société, interlocuteur unique et accompagnement administratif.":"Gala evening, seminar, launch or end-of-year party: our artists are used to corporate events. Invoice in your company's name, a single point of contact and administrative support.","Solde après la prestation":"Balance after the performance","Solo, duo, groupe ou DJ : les fourchettes de prix constatées et les critères qui font varier le devis.":"Solo, duo, band or DJ: typical price ranges and the factors that affect the quote.","Sous 24 h ouvrées, du lundi au samedi":"Within 24 working hours, Monday to Saturday","Statistiques avancées":"Advanced statistics","Statut":"Status","Style, ville, tarif indicatif, quelques photos. Vous pourrez tout compléter plus tard.":"Style, city, guide price, a few photos. You can fill in the rest later.","Suivant":"Next","Suivante":"Next","Suivez nos conseils":"Follow our tips","Suivez vos demandes de devis et vos réservations.":"Track your quote requests and bookings.","Suivre ma demande":"Track my request","Sujet":"Subject","Support par email sous 48 h":"Email support within 48 hours","Support prioritaire":"Priority support","Supprimer":"Delete","Sur devis":"On quote","Sur devis uniquement":"On quote only","Sur la page de connexion, cliquez sur « Mot de passe oublié ? » : vous recevrez un lien par email pour en choisir un nouveau.":"On the login page, click “Forgotten your password?”: you'll receive a link by email to choose a new one.","Tarif":"Rate","Tarif indicatif pour une prestation de 2 heures. Le devis précise la durée, le déplacement et les cotisations sociales (GUSO) : vous connaissez le coût total avant de réserver.":"Guide price for a 2-hour performance. The quote specifies the duration, travel and social security contributions (GUSO): you know the total cost before booking.","Taux de réponse":"Response rate","Total du devis":"Quote total","Totalement. Vous indiquez une fourchette sur votre profil et ajustez chaque devis selon la date, la durée et le déplacement.":"Absolutely. You set a range on your profile and adjust each quote according to the date, duration and travel.","Touchez aussi les familles de la diaspora qui organisent une fête au pays, partout dans le monde.":"Also reach diaspora families organising a party back home, anywhere in the world.","Tous":"All","Tous les budgets":"All budgets","Tous les genres":"All genres","Tous les instruments":"All instruments","Tous les pays":"All countries","Tout Découverte, plus :":"Everything in Discovery, plus:","Tout Pro, plus :":"Everything in Pro, plus:","Tout ce qu'il faut savoir pour réserver un artiste ou rejoindre Wimbo.":"Everything you need to know to book an artist or join Wimbo.","Tout effacer":"Clear all","Toutes les demandes":"All requests","Toutes les notes":"All ratings","Toutes les places de membres fondateurs sont prises. Merci à nos 150 premiers artistes !":"All founding member places have been taken. Thank you to our first 150 artists!","Toutes les questions":"All questions","Traité":"Handled","Tri :":"Sort:","Tri : Mieux notés":"Sort: Top rated","Tri : Prix croissant":"Sort: Price, low to high","Tri : Prix décroissant":"Sort: Price, high to low","Tri : Recommandés":"Sort: Recommended","Trier":"Sort","Tromboniste":"Trombonist","Trompette":"Trumpet","Trompettiste":"Trumpeter","Trop de tentatives en peu de temps. Patientez quelques minutes avant de réessayer.":"Too many attempts in a short time. Please wait a few minutes before trying again.","Trouver, réserver et payer un artiste en toute sérénité, sans vous soucier de l'administratif.":"Find, book and pay an artist with complete peace of mind, without worrying about the admin.","Trouvez par genre, événement ou instrument":"Find by genre, event or instrument","Trouvez un artiste et demandez un devis gratuit en 2 minutes.":"Find an artist and request a free quote in 2 minutes.","Trouvez votre artiste sur Wimbo":"Find your artist on Wimbo","Type d'artiste":"Artist type","Type d'événement":"Event type","Type d'événement, date, ville, style recherché, budget…":"Event type, date, city, preferred style, budget…","Téléphone":"Phone","Un compte existe déjà avec cet email. Connectez-vous ou utilisez « Mot de passe oublié ».":"An account already exists with this email. Log in or use “Forgotten password”.","Un compte existe déjà avec cet email. Utilisez le même mot de passe, ou « Mot de passe oublié » sur la page de connexion.":"An account already exists with this email. Use the same password, or “Forgotten password” on the login page.","Un enterrement de vie de jeune fille ou de garçon mémorable : DJ, groupe de reprises ou chanteur pour faire chanter et danser toute la bande.":"A memorable hen or stag do: a DJ, covers band or singer to get the whole group singing and dancing.","Un interlocuteur":"One point of contact","Un lien vidéo n'est pas valide : copiez l'adresse complète (elle commence par https://).":"A video link is not valid: copy the full address (it starts with https://).","Un seul compte pour vos espaces organisateur et artiste.":"One account for your organiser and artist areas.","Une ambiance élégante pour un cocktail ou un dîner : piano-voix, jazz, bossa nova, saxophone lounge ou quatuor à cordes. Des formules acoustiques, discrètes et adaptées aux lieux intimes.":"An elegant atmosphere for a cocktail party or dinner: piano and vocals, jazz, bossa nova, lounge saxophone or string quartet. Acoustic, discreet formats suited to intimate venues.","Une erreur est survenue. Réessayez dans un instant.":"Something went wrong. Please try again in a moment.","Une question ?":"Got a question?","Une question, une recherche particulière, un partenariat ? Écrivez-nous, nous répondons sous 24 h ouvrées.":"A question, a specific search, a partnership? Write to us, we reply within 24 working hours.","Une soirée entre amis, une fête de famille, une pendaison de crémaillère : un musicien ou un DJ fait toute la différence. Wimbo vous aide à trouver l'artiste disponible près de chez vous, au bon prix.":"An evening with friends, a family party, a housewarming: a musician or DJ makes all the difference. Wimbo helps you find an available artist near you, at the right price.","Une équipe à votre écoute":"A team that's here for you","Validation sous 48 h":"Approval within 48 hours","Valider":"Confirm","Valider les artistes, modérer les avis, suivre les demandes et les messages.":"Approve artists, moderate reviews, track requests and messages.","Validez le devis et réglez un acompte de 30 % : la date est bloquée, votre paiement est sécurisé.":"Accept the quote and pay a 30% deposit: the date is secured and your payment is protected.","Validé":"Approved","Validés":"Approved","Ven":"Fri","Version de présentation : les profils et avis affichés sont des exemples.":"Demo version: the profiles and reviews shown are examples.","Vidéo Vimeo":"Vimeo video","Vidéo YouTube":"YouTube video","Vidéo ajoutée":"Video added","Vidéo supprimée":"Video deleted","Vidéo trop lourde : 50 Mo maximum.":"Video too large: 50 MB maximum.","Vidéos":"Videos","Vidéos : non incluses dans votre offre.":"Videos: not included in your plan.","Vidéos courtes":"Short videos","Ville":"City","Ville ou région":"City or region","Ville, région…":"City, region…","Violon":"Violin","Violoncelle":"Cello","Violoncelliste":"Cellist","Violoniste":"Violinist","Visibilité renforcée dans les résultats":"Enhanced visibility in results","Vivez de":"Make a living from","Voir l'aperçu":"View preview","Voir la fiche":"View profile","Voir les abonnements":"View plans","Voir les conditions":"View the terms","Voir les offres":"See our plans","Voir les résultats":"Show results","Voir mon profil":"View my profile","Voir mon profil public":"View my public profile","Voir plus de genres":"See more genres","Voir toute la FAQ":"View the full FAQ","Vos paiements apparaîtront ici après votre première prestation. Le solde est versé sous 48 h après chaque événement.":"Your payments will appear here after your first performance. The balance is paid within 48 hours of each event.","Vos photos":"Your photos","Vos questions":"Your questions","Vos styles":"Your styles","Vos tarifs, vos règles":"Your rates, your rules","Votre acompte est sécurisé, le solde n'est versé à l'artiste qu'après la prestation.":"Your deposit is secure, and the balance is only paid to the artist after the performance.","Votre avis sera publié après vérification de la prestation.":"Your review will be published once the performance has been verified.","Votre cachet (€)":"Your fee (€)","Votre commentaire":"Your comment","Votre compte":"Your account","Votre compte a un profil artiste et un espace organisateur.":"Your account has an artist profile and an organiser area.","Votre devis :":"Your quote:","Votre email n'est pas encore confirmé : cliquez sur le lien reçu par email, puis reconnectez-vous.":"Your email has not been confirmed yet: click the link we emailed you, then log in again.","Votre message":"Your message","Votre musique":"Your music","Votre nom":"Your name","Votre offre":"Your plan","Votre offre ne permet pas d'ajouter plus de photos.":"Your plan does not allow you to add more photos.","Votre parcours, votre répertoire, les événements que vous animez…":"Your background, your repertoire, the events you play at…","Votre profil a bien été enregistré":"Your profile has been saved","Votre profil affichera « Sur devis » : vous fixez le prix au cas par cas, à chaque demande.":"Your profile will show “On quote”: you set the price case by case, for each request.","Votre profil en ligne en 5 minutes":"Your profile online in 5 minutes","Votre profil est créé. Notre équipe le valide sous 48 h, vous serez prévenu par email. En attendant, complétez-le pour recevoir plus de demandes.":"Your profile has been created. Our team will approve it within 48 hours and you'll be notified by email. In the meantime, complete it to receive more requests.","Votre profil est en ligne.":"Your profile is live.","Votre question":"Your question","Votre tarif":"Your rate","Votre utilisation":"Your usage","Votre ville":"Your city","Vous engagez un musicien pour une fête privée ? Voici ce qu'est le GUSO, pourquoi il est obligatoire et comment Wimbo s'en charge pour vous.":"Hiring a musician for a private party? Here's what GUSO is, why it's mandatory and how Wimbo takes care of it for you.","Vous fixez votre fourchette et ajustez chaque devis. Vous acceptez ou refusez librement.":"You set your range and adjust each quote. You're free to accept or decline.","Vous ne trouvez pas votre réponse ?":"Can't find your answer?","Vous pourriez également aimer":"You might also like","Vous profitez, on s'occupe du reste":"You enjoy, we take care of the rest","Vous réglez un acompte de 30 % pour bloquer la date, par carte via notre prestataire de paiement sécurisé. Le solde est réglé après la prestation et n'est versé à l'artiste qu'une fois l'événement passé.":"You pay a 30% deposit by card through our secure payment provider to secure the date. The balance is paid after the performance and is only released to the artist once the event has taken place.","Vous validez en un clic":"You confirm in one click","Vous validez et réglez 30 % d'acompte : la date est bloquée.":"You confirm and pay a 30% deposit: the date is secured.","Vous vivez en France et organisez une fête de famille au Portugal, aux Antilles ou ailleurs ? Réservez un artiste local à distance, échangez avec lui en ligne et payez en toute sécurité. Wimbo s'occupe du lien.":"Live in France and organising a family party in Portugal, the French Caribbean or elsewhere? Book a local artist remotely, chat with them online and pay securely. Wimbo takes care of the connection.","Vous vous demandez peut-être":"You may be wondering","Vous êtes":"You are","Vous êtes artiste ?":"Are you an artist?","Vous êtes artiste ? Créez directement votre profil, c'est gratuit :":"Are you an artist? Create your profile directly, it's free:","Vous êtes connecté avec":"You are logged in as","Vous êtes déconnecté":"You have been logged out","Vous êtes déjà connecté":"You're already logged in","Vues du profil (30 j)":"Profile views (30 days)","Vérifiez votre boîte mail":"Check your inbox","Vérifié":"Verified","Wimbo ajoute automatiquement les cotisations GUSO et les frais de service dans le devis envoyé au client.":"Wimbo automatically adds GUSO contributions and service fees to the quote sent to the client.","Wimbo me permet de jouer pour les familles franco-portugaises des deux côtés de la frontière, sans me noyer dans la paperasse.":"Wimbo lets me play for French-Portuguese families on both sides of the border, without drowning in paperwork.","Wimbo réunit des artistes vérifiés pour les mariages, fêtes privées, anniversaires et événements d'entreprise, avec l'administratif en moins.":"Wimbo brings together verified artists for weddings, private parties, birthdays and corporate events, minus the admin.","Wimbo, accueil":"Wimbo, home","Zone de déplacement":"Travel area","Zéro paperasse":"Zero paperwork","[Wimbo] Vue artists_public absente (exécuter le SQL v2) :":"[Wimbo] artists_public view missing (run the SQL v2):","avec vos informations et celles de l'artiste.":"with your details and the artist's.","cette fonction n'est pas encore activée : exécutez le fichier « SQL site v3 » dans Supabase.":"this feature is not enabled yet: run the “SQL site v3” file in Supabase.","délai dépassé":"timed out","départ":"start","je m'inscris":"sign up","l'espace vidéo n'est pas encore activé (fichier « SQL site v3 » à exécuter dans Supabase)":"the video area is not enabled yet (“SQL site v3” file to run in Supabase)","la base de données a refusé l'enregistrement (règles de sécurité Supabase). Exécutez le fichier « SQL site v2 » dans Supabase puis réessayez.":"the database refused to save (Supabase security rules). Run the “SQL site v2” file in Supabase, then try again.","le profil a été envoyé mais la base ne permet pas de le relire (règles de sécurité Supabase). Exécutez le fichier « SQL site v2 » dans Supabase puis reconnectez-vous.":"the profile was sent but the database does not allow it to be read back (Supabase security rules). Run the “SQL site v2” file in Supabase, then log in again.","le serveur ne répond pas":"the server is not responding","nous rapproche":"brings us together","novembre 2026":"November 2026","ouvre un espace artiste complet.":"opens a full artist area.","panique":"panic","parmi nous":"back","places de membres fondateurs : badge Premium offert à vie":"founding member places: Premium badge free for life","politique de confidentialité":"privacy policy","un profil existe déjà avec cet email (créé avec l'ancienne version du site). Supprimez l'ancien compte de test dans Supabase, ou utilisez une autre adresse.":"a profile already exists with this email (created with the old version of the site). Delete the old test account in Supabase, or use another address.","vidéo trop lourde pour le serveur (50 Mo maximum)":"video too large for the server (50 MB maximum)","votre art":"your art","votre offre ne permet pas d'ajouter plus de photos.":"your plan does not allow you to add more photos.","votre offre ne permet pas d'ajouter plus de vidéos":"your plan does not allow you to add more videos","votre offre ne permet pas d'ajouter plus de vidéos.":"your plan does not allow you to add more videos.","© 2026 Wimbo · CWEA SAS · Tous droits réservés":"© 2026 Wimbo · CWEA SAS · All rights reserved","« Je ne cours plus après les demandes : elles arrivent qualifiées, avec la date, le lieu et le budget. Et le paiement tombe à l'heure. »":"“I no longer chase after requests: they arrive qualified, with the date, venue and budget. And payment arrives on time.”","« Les clients savent exactement ce qu'ils paient, cotisations comprises. Fini les négociations gênantes au moment du devis. »":"“Clients know exactly what they're paying, contributions included. No more awkward negotiations at the quote stage.”","« Wimbo me permet de jouer pour les familles franco-portugaises des deux côtés de la frontière, sans me noyer dans la paperasse. »":"“Wimbo lets me play for French-Portuguese families on both sides of the border, without drowning in paperwork.”","· Blog Wimbo":"· Wimbo Blog","· Tous droits réservés":"· All rights reserved","· Vous êtes artiste ?":"· Are you an artist?","· tarif sur mesure":"· tailored price","À lire aussi":"Further reading","À partir de":"From","À traiter":"To do","Écrire à l'équipe Wimbo":"Write to the Wimbo team","Électro / House":"Electronic / House","Étape 1":"Step 1","Étape 2":"Step 2","Étape 3":"Step 3","Étape 4":"Step 4","Événement":"Event","Événement d'entreprise":"Corporate event","Événements":"Events","Abonnements artistes":"Artist plans","Autres événements":"Other events","Bonjour ! Je réponds aux questions fréquentes sur Wimbo. Que voulez-vous savoir ?":"Hello! I answer frequently asked questions about Wimbo. What would you like to know?","Chercher un artiste":"Find an artist","Choisir vos styles":"Choose your styles","Connexion artistes":"Artist login","Créer un profil artiste":"Create an artist profile","Découvrez tous les événements":"Discover all events","Découvrir les artistes":"Discover the artists","Espace artiste":"Artist area","Espace artistes":"Artists' area","FAQ artistes":"Artist FAQ","Instruments et artistes":"Instruments and artists","Je cherche un artiste":"I'm looking for an artist","Je suis artiste":"I'm an artist","Laisser un avis":"Leave a review","Lire tous les avis":"Read all reviews","Mon espace artiste":"My artist area","Publier mon avis":"Post my review","Tous les artistes":"All artists","Tous les événements":"All events","Trouver un artiste":"Find an artist","Trouvez l'artiste idéal pour votre événement":"Find the perfect artist for your event","Vidéos courtes de 15 secondes maximum (MP4 ou MOV, 50 Mo). Les liens YouTube et Vimeo du formulaire ci-dessus comptent aussi.":"Short videos of up to 15 seconds (MP4 or MOV, 50 MB). YouTube and Vimeo links in the form above also count.","Voir les artistes":"See the artists","Voir tous les artistes":"See all artists","Vous n'avez pas encore de profil artiste":"You don't have an artist profile yet","Wimbo · Musiciens, chanteurs, groupes et DJ pour vos événements":"Wimbo · Musicians, singers, bands and DJs for your events","et la":"and the","Passer en mode organisateur":"Switch to organiser mode","Passer en mode artiste":"Switch to artist mode","CGV":"Terms of sale","Musiciens, chanteurs, groupes et DJ vérifiés pour vos événements.":"Verified musicians, singers, bands and DJs for your events.","* Champs obligatoires":"* Required fields","Écrivez votre message.":"Please write your message.","Famille":"Family","Entreprise":"Corporate","La musique qui rapproche,":"Music that brings us together,","les émotions qui restent":"emotions that last","La musique qui rapproche, les émotions qui restent":"Music that brings us together, emotions that last","Votre art,":"Your art,","leurs émotions":"their emotions","Votre art, leurs émotions":"Your art, their emotions","Profil gratuit et demandes qualifiées. Nous gérons l'administratif, vous gérez la scène.":"Free profile and qualified requests. We handle the admin, you own the stage.","Filtrez par style, événement, ville et budget. Chaque profil est vérifié par notre équipe.":"Filter by style, event, city and budget. Every profile is checked by our team.","(recommandé, jusqu'à 4 : la première sera votre photo principale)":"(recommended, up to 4: the first will be your main photo)","Wimbo · La musique qui rapproche, les émotions qui restent":"Wimbo · Music that brings us together, emotions that last","Trouver un musicien, un chanteur ou un DJ · Wimbo":"Find a musician, singer or DJ · Wimbo","Comment réserver un musicien ou un DJ · Wimbo":"How to book a musician or DJ · Wimbo","Musiciens, chanteurs, DJ : trouvez des dates avec Wimbo":"Musicians, singers, DJs: find bookings with Wimbo","Abonnements artistes : Découverte, Pro, Premium · Wimbo":"Artist plans: Discovery, Pro, Premium · Wimbo","Avis clients sur les artistes · Wimbo":"Customer reviews of our artists · Wimbo","FAQ : devis, paiement, GUSO et réservation · Wimbo":"FAQ: quotes, payment, GUSO and bookings · Wimbo","Blog : conseils musique pour vos événements · Wimbo":"Blog: music tips for your events · Wimbo"},"tpl":{"(facultatif, 15 secondes maximum, {n} au total avec les liens)":"(optional, 15 seconds maximum, {n} in total including links)",", déplacements possibles au-delà":", further travel possible","Action impossible : {err}":"Action failed: {err}","Bienvenue sur Wimbo, {name} !":"Welcome to Wimbo, {name}!","Bienvenue {name}":"Welcome, {name}","Bienvenue {name} !":"Welcome, {name}!","Bonjour {name}":"Hello {name}","Cette vidéo dure {n} secondes : 15 secondes maximum.":"This video is {n} seconds long: 15 seconds maximum.","Choisir {plan}":"Choose {plan}","Commission de {n} % par prestation.":"{n}% commission per performance.","Commission {n} % par prestation":"{n}% commission per performance","Contact : {email}":"Contact: {email}","Demande : {plan}":"Request: {plan}","Demande de passage en {plan} enregistrée : elle sera activée dès l'ouverture du paiement en ligne, ou par l'équipe Wimbo.":"Your request to switch to {plan} has been recorded: it will be activated as soon as online payment opens, or by the Wimbo team.","Demande envoyée en tant que {name}":"Request sent as {name}","Demande envoyée à {name} !":"Request sent to {name}!","Demander l'offre {plan}":"Request the {plan} plan","Demander un devis à {name}":"Request a quote from {name}","Dernière mise à jour : {date}":"Last updated: {date}","Devis reçu : {price}":"Quote received: {price}","Envoi de la vidéo {i} sur {n}…":"Uploading video {i} of {n}…","Envoi de {n} photos…":"Uploading {n} photos…","Envoi de {n} photo…":"Uploading {n} photo…","Envoyée le {date}":"Sent on {date}","Il reste {n} places":"{n} places left","Il reste {n} places : inscrivez-vous maintenant et profitez de toutes les fonctionnalités Premium (30 photos, 5 vidéos), sans abonnement.":"{n} places left: sign up now and enjoy all Premium features (30 photos, 5 videos), with no subscription.","Il reste {n} places de membres fondateurs : Premium offert à vie.":"{n} founding member places left: Premium free for life.","La lecture vidéo sera disponible à l'ouverture de la plateforme. Demandez un devis pour recevoir d'autres extraits de {name}.":"Video playback will be available when the platform launches. Request a quote to receive more clips from {name}.","La vidéo n'a pas pu être envoyée ({err}). Vous pourrez l'ajouter depuis votre espace artiste.":"The video could not be uploaded ({err}). You can add it from your artist area.","Lecture impossible : {err}":"Unable to load: {err}","Les documents juridiques de Wimbo sont rédigés en français : seule cette version fait foi.":"Wimbo's legal documents are written in French: only the French version is legally binding.","Membre fondateur : il reste {n} places. Votre profil sera Premium à vie (30 photos, 5 vidéos), gratuitement.":"Founding member: {n} places left. Your profile will be Premium for life (30 photos, 5 videos), free of charge.","Merci {name}, nous vous répondons sous 24 h ouvrées à {email}.":"Thank you, {name}. We'll reply to {email} within 24 working hours.","Musiciens et groupes {genre}":"{genre} musicians and bands","Musique pour {event}":"Music for {event}","Note moyenne sur {n} avis":"Average rating from {n} reviews","Nous avons envoyé un lien de confirmation à <strong>{email}</strong>. Cliquez dessus puis connectez-vous : votre profil et vos photos seront enregistrés automatiquement.":"We've sent a confirmation link to <strong>{email}</strong>. Click it, then log in: your profile and photos will be saved automatically.","Nous avons envoyé un lien de confirmation à <strong>{email}</strong>. Cliquez dessus, puis connectez-vous : votre compte sera prêt.":"We've sent a confirmation link to <strong>{email}</strong>. Click it, then log in: your account will be ready.","Offre {plan} appliquée":"{plan} plan applied","Plus qu'une étape, {name} !":"Just one more step, {name}!","Premium offert à vie aux {n} premiers artistes":"Premium free for life for the first {n} artists","Profil complété à {n} %":"Profile {n}% complete","Publié le {date} par l'équipe Wimbo":"Published on {date} by the Wimbo team","Reçue le {date}":"Received on {date}","Réponse de {name}":"Reply from {name}","Réponse sous {t} en moyenne":"Replies within {t} on average","Si un compte existe pour {email}, vous allez recevoir un lien de réinitialisation. Pensez à vérifier vos spams.":"If an account exists for {email}, you'll receive a reset link. Remember to check your spam folder.","Suppression impossible : {err}":"Deletion failed: {err}","Sur devis":"On quote","Trouvez un {instrument} pour votre événement : profils vérifiés, photos, vidéos et avis clients. Demandez un devis gratuit et recevez une réponse sous 2 à 3 heures.":"Find the right {instrument} for your event: verified profiles, photos, videos and client reviews. Request a free quote and get a reply within 2 to 3 hours.","Type d'artiste":"Artist type","Version {v} du {date}":"Version {v} dated {date}","Vidéo non envoyée : {err}":"Video not uploaded: {err}","Vidéos courtes {opt}":"Short videos {opt}","Ville principale":"Main city","Voir la vidéo sur {site}":"Watch the video on {site}","Votre avis sur {name}":"Your review of {name}","Votre offre permet {n} vidéos au total (fichiers et liens).":"Your plan allows {n} videos in total (files and links).","Votre offre {plan} permet {n} photos. La première est votre photo principale.":"Your {plan} plan allows {n} photos. The first one is your main photo.","Vous avez atteint les {n} vidéos de votre offre.":"You have reached your plan's limit of {n} videos.","Vous cherchez un artiste {genre} pour un mariage, une fête privée ou un événement d'entreprise ? Découvrez des profils vérifiés, écoutez leurs extraits, comparez les cachets et demandez un devis en quelques clics. Nous préparons la déclaration GUSO et sécurisons le paiement.":"Looking for {genre} artists for a wedding, private party or corporate event? Discover verified profiles, listen to their clips, compare fees and request a quote in just a few clicks. We prepare the GUSO declaration and secure the payment.","Vous recevrez une réponse à <strong>{email}</strong>, en général sous {time}.":"You'll receive a reply at <strong>{email}</strong>, usually within {time}.","dès {price}":"from {price}","l'artiste":"the artist","membre fondateur":"founding member","pour {event}":"for {event}","sur {n} avis":"from {n} reviews","tarif sur mesure":"tailored price","{cat} · {read} de lecture":"{cat} · {read} read","{city} et {n} km autour":"{city} and within {n} km","{instrument} pour votre événement":"{instrument} for your event","{n} artiste":"{n} artist","{n} artiste disponible":"{n} artist available","{n} artistes":"{n} artists","{n} artistes disponibles":"{n} artists available","{n} avis":"{n} reviews","{n} avis vérifié":"{n} verified review","{n} avis vérifiés":"{n} verified reviews","{n} demandes de devis":"{n} quote requests","{n} invités":"{n} guests","{n} événements":"{n} events","À partir de {price}":"From {price}","Étape {n} sur 3":"Step {n} of 3","à {place}":"in {place}","{n} avis#1":"{n} review","Offre de lancement : Premium offert à vie aux {n} premiers artistes":"Launch offer: Premium free for life for the first {n} artists","Plus que {n} places":"Only {n} places left","Je m'inscris gratuitement":"Sign up for free"},"blog":{"choisir-musicien-mariage":{"title":"Wedding music: the guide to choosing your artist","excerpt":"Ceremony, drinks reception, dinner, evening party: which artist for which moment, on what budget, and how far in advance should you book?","body":"<p>Music is one of the most powerful memories of a wedding. Well chosen, it enhances the emotion of the ceremony, relaxes the atmosphere at the drinks reception and gets every generation dancing. Here's how to go about it, step by step.</p>\n<h3>1. Break your day down into moments</h3>\n<p>A wedding usually has four musical moments: the <strong>ceremony</strong> (entrance, exchange of vows, exit), the <strong>drinks reception</strong>, the <strong>dinner</strong> and the <strong>evening party</strong>. Each moment calls for a different line-up: a quartet or a singer-guitarist for the ceremony, a jazz duo or a saxophonist for the drinks reception, then a band or a DJ for the evening.</p>\n<h3>2. Choose the right line-up for your venue</h3>\n<p>An outdoor estate with no electricity? Opt for an acoustic set-up. A large hall with 200 guests? You'll need a suitable sound system, which most bands provide. Always check the space required, as stated on the artist's profile.</p>\n<h3>3. Set a realistic budget</h3>\n<p>As a rough guide, allow €400 to €900 for a solo musician, €900 to €1,800 for a trio and €1,500 to €3,500 for a full band, depending on the duration, the date and travel. On Wimbo, every profile shows a fee range and the quote itemises the social security contributions, so there are no nasty surprises.</p>\n<h3>4. Book early</h3>\n<p>Saturdays from May to September go quickly: book 8 to 12 months ahead for the most in-demand artists. For an off-season wedding, 3 to 6 months is often enough.</p>\n<h3>5. The right questions to ask</h3>\n<ul><li>Which songs can be added to the repertoire, and how much notice is needed?</li><li>What breaks are planned during the performance?</li><li>What happens if the artist is unable to perform?</li><li>Is the equipment (PA system, lighting, microphone for the speeches) included?</li></ul>\n<h3>6. Don't forget the admin</h3>\n<p>In France, hiring an artist for a private event requires a declaration to GUSO. On Wimbo, we prepare it for you and payment is secured right up to the big day. All you have to do is enjoy it.</p>"},"guso-tout-comprendre":{"title":"GUSO: everything you need to know in 5 minutes","excerpt":"Hiring a musician for a private party? Here's what GUSO is, why it's mandatory and how Wimbo takes care of it for you.","body":"<p><strong>GUSO</strong> (Guichet unique du spectacle occasionnel, the one-stop shop for occasional live performances) is the public service that allows occasional organisers to declare and pay live performers legally. It applies to private individuals, associations and companies whose main business is not live entertainment.</p>\n<h3>Why is it mandatory?</h3>\n<p>In France, an artist who performs in public is presumed to be an employee (Article L7121-3 of the French Labour Code). So when you hire one directly for your wedding or birthday, you become their occasional employer, and you must declare the performance and pay the corresponding social security contributions.</p>\n<h3>How does GUSO work?</h3>\n<p>A single declaration, the <strong>DUS</strong> (déclaration unique et simplifiée, or single simplified declaration), replaces all the formalities: it serves as both an employment contract and a declaration to the social security bodies (URSSAF, pension, unemployment insurance, performers' paid leave, training, occupational health). GUSO calculates the contributions and redistributes them.</p>\n<h3>Key points to remember</h3>\n<ul><li>Use of GUSO is limited to <strong>6 performances per year</strong> for the same organiser.</li><li>The declaration should ideally be made before the performance, and at the latest within the following few days.</li><li>The contributions come on top of the artist's net fee: you need to factor them into your budget.</li><li>If the artist invoices you through an organisation (association, production company), that organisation is the employer: no GUSO for you.</li></ul>\n<h3>What Wimbo does</h3>\n<p>On Wimbo, the quote you receive includes the contributions: you know the total cost from the outset. Once the booking is confirmed, we prepare the declaration with your details and the artist's, and all you have to do is approve it. No more oversights, no more risk of penalties.</p>\n<p class=\"note\">This article is for information only and is not a substitute for legal advice. For specific cases, visit <a href=\"https://www.guso.fr\" target=\"_blank\" rel=\"noopener\">guso.fr</a>.</p>"},"prix-musicien-evenement":{"title":"How much does a musician cost for a private event?","excerpt":"Solo, duo, band or DJ: typical price ranges and the factors that affect the quote.","body":"<p>It's the first question everyone asks. An artist's fee depends on many factors, but a few benchmarks will help you see things more clearly.</p>\n<h3>Guide price ranges</h3>\n<ul><li><strong>Solo musician or singer</strong>: €400 to €900</li><li><strong>Duo</strong>: €600 to €1,300</li><li><strong>Trio or quartet</strong>: €900 to €2,400</li><li><strong>Band of 4 to 6 musicians</strong>: €1,500 to €3,500</li><li><strong>DJ</strong>: €500 to €1,600</li></ul>\n<p>These amounts are for a 2- to 4-hour performance and are given as a rough guide only.</p>\n<h3>What affects the price</h3>\n<ul><li><strong>The date</strong>: a Saturday in June costs more than a Thursday in November.</li><li><strong>The duration</strong>: ceremony only, drinks reception, or a full evening into the early hours.</li><li><strong>Travel</strong>: distance, tolls, accommodation if needed.</li><li><strong>Equipment</strong>: sound system, lighting, microphone for the speeches.</li><li><strong>Special requests</strong>: learning new songs, choreography, themed outfits.</li></ul>\n<h3>How to avoid nasty surprises</h3>\n<p>Ask for a detailed quote specifying the duration, breaks, equipment and any additional costs. On Wimbo, the quote also includes the GUSO social security contributions, which many people forget to budget for. Payment is made in two instalments: a 30% deposit to secure the date, and the balance after the performance.</p>"},"organiser-fete-au-pays":{"title":"Organising a party back home from afar: the diaspora guide","excerpt":"A wedding in Portugal, a christening in Guadeloupe, a birthday in Lisbon: how to find and book a local artist without being there.","body":"<p>Do you live in France while your family is in Portugal, the French Caribbean or Africa? Organising a party over there from Paris or Lyon is often a real headache: finding trustworthy suppliers, making yourself understood, paying from a distance. Here's our advice.</p>\n<h3>1. Start with the music</h3>\n<p>The venue and caterer can often be found through family. Artists, on the other hand, get booked up early and are harder to assess without seeing them. On Wimbo, every profile features photos, videos and verified reviews: you can compare from the comfort of your sofa.</p>\n<h3>2. Think about the mix of cultures</h3>\n<p>A French-Portuguese or French-Caribbean wedding often brings together several generations and several languages. Look for an artist who can switch from French pop to kizomba, fado or zouk. Mention this in your quote request.</p>\n<h3>3. Have a video call before booking</h3>\n<p>A 20-minute call with the artist lets you confirm the repertoire, timings and logistics. Wimbo messaging keeps all your conversations in one place.</p>\n<h3>4. Secure the payment</h3>\n<p>Avoid international bank transfers with no guarantee. With Wimbo, your deposit is secured and the balance is only paid to the artist after the performance.</p>\n<h3>5. Appoint a contact on site</h3>\n<p>A cousin or a friend can welcome the artist on the day. Share the booking summary with them: timings, contact details, directions.</p>"},"prix-dj-mariage":{"title":"Wedding DJ prices: what to budget and how to compare quotes","excerpt":"How much does a wedding DJ cost? Guide price ranges, what affects the price, what is included and the questions to ask before you book your DJ.","body":"<p><strong>In short:</strong> as a rough guide, a DJ for a wedding evening usually costs between €600 and €1,500, depending on the duration, the date, travel and the equipment provided. This price generally covers the sound system, dance-floor lighting and planning the playlist with you. To compare, ask for detailed quotes based on the same hours and check, line by line, what is included.</p>\n<h3>How much does a wedding DJ cost?</h3>\n<p>There is no single rate: each DJ sets their own price, and the quote is what counts. The lower end of the range tends to mean a few hours on a weekday or out of season, with standard equipment. The upper end means a Saturday in June, a party that goes on into the early hours, more elaborate lighting or a DJ who is there from the drinks reception onwards. To see how these amounts compare with other line-ups (solo, trio, band), read our <a href=\"/blog/prix-musicien-evenement\">guide to musician prices</a>.</p>\n<p>Torn between a DJ and a live band? Our <a href=\"/blog/choisir-musicien-mariage\">wedding music guide</a> helps you choose moment by moment. A popular combination: a musician for the ceremony and drinks reception, then a DJ for the evening.</p>\n<h3>What affects the price</h3>\n<ul><li><strong>Duration</strong>: the evening party only, or from the drinks reception and through dinner. Time beyond the agreed finish is often charged as an extra.</li><li><strong>Date</strong>: Saturdays from May to September are the most in demand, and therefore the most expensive.</li><li><strong>Travel</strong>: distance, tolls and sometimes accommodation if the venue is far away or the party ends very late.</li><li><strong>Equipment</strong>: a sound system powerful enough for the number of guests, lighting effects, a second set-up for a non-religious ceremony or a drinks reception in another space.</li><li><strong>Personalisation</strong>: a tailor-made playlist, a mix of styles (French pop, afrobeats, kizomba, zouk…), hosting on the mic, a planned first dance.</li></ul>\n<h3>What is included in a DJ's price?</h3>\n<p>A wedding DJ quote generally includes:</p>\n<ul><li>the performance for the agreed duration, breaks included;</li><li>a sound system suited to the venue and the number of guests;</li><li>mood lighting for the dance floor;</li><li>a microphone for speeches and announcements;</li><li>a chat before the big day to plan the playlist, the must-play songs and the ones to avoid;</li><li>setting up and packing down.</li></ul>\n<p>None of this is automatic: some DJs offer lighting or a wireless mic as optional extras. Check every line and ask what happens if the party runs over.</p>\n<h3>How do you compare DJ quotes?</h3>\n<p>Two quotes can only be compared if they cover the same thing. Give each DJ the same information (timings, venue, number of guests, the atmosphere you want), then look at:</p>\n<ul><li><strong>The price per hour of music</strong>, once set-up and breaks are taken out.</li><li><strong>The equipment listed</strong>: a cheaper quote with no lighting or mic can end up costing more.</li><li><strong>Additional costs</strong>: travel, extra hours, the DJ's meal.</li><li><strong>Social security contributions</strong>: in France, hiring an artist directly means making a declaration to the <a href=\"/blog/guso-tout-comprendre\">GUSO</a>, the French one-stop scheme for occasionally hiring performers. On Wimbo, we prepare it for you and the contributions are shown in the quote.</li></ul>\n<p>Also look at the videos and verified reviews on each profile: how well a DJ reads the dance floor matters as much as their fee.</p>\n<h3>Questions to ask before you book</h3>\n<ul><li>How many weddings have you played, and do you have a video of an evening you could show me?</li><li>How will we build the playlist together? Will you accept a list of songs not to play?</li><li>Can you get several generations dancing and blend the cultures of both our families?</li><li>What is the rate for an extra hour if the party carries on?</li><li>What happens if you can't make it on the day?</li><li>What do you need at the venue: space, power sockets, a meal, set-up times?</li></ul>\n<h3>When should you book your wedding DJ?</h3>\n<p>For a Saturday in peak season, the most sought-after DJs get booked early: booking 8 to 12 months ahead is not excessive. Out of season or on a weekday, a few months is often enough. On Wimbo, you secure the date with a 30% deposit that stays protected, and the balance is only paid after the performance.</p>\n<p>Ready to start comparing? Browse the <a href=\"/instruments/deejay\">DJs available on Wimbo</a>, watch their videos and send your quote requests: artists usually reply within 2 to 3 hours. Then simply choose the one who feels right for you.</p>"},"musique-bapteme":{"title":"Christening music: which musicians for the ceremony and party?","excerpt":"Religious or non-religious ceremony, drinks, meal: what music to choose for a christening, which line-up, what budget to plan for, and our practical tips.","body":"<p><strong>In short:</strong> for christening music, a singer accompanied by guitar, organ or harp is often all you need for the ceremony, then a duo or small band can take over for the drinks and the meal. As a rough guide, allow €400 to €900 for a solo musician and €900 to €1,800 for a duo or trio. In church, always check your choice of music with the parish.</p>\n<h3>What music should you choose for a church christening?</h3>\n<p>In church, music accompanies the family's entrance, a few key moments of the service and the exit. The choice is made with the parish: some prefer liturgical hymns, others accept classical pieces or more personal songs. Get in touch early with the priest, minister or music team: they will also tell you whether there is an organ and an organist available.</p>\n<p>The great classics always work: Schubert's or Gounod's “Ave Maria”, Pachelbel's “Canon”, Bach's “Jesu, Joy of Man's Desiring”, or Leonard Cohen's “Hallelujah” for a more contemporary touch, if the parish agrees. In a church with good acoustics, a single voice with one instrument is enough to move everyone.</p>\n<h3>What about a non-religious ceremony?</h3>\n<p>A civil naming ceremony at the town hall (the French “baptême républicain”) or a non-religious ceremony in a garden or function room gives you more freedom. You can choose songs that mean something to your family: a gentle French chanson, a reworked lullaby, a song from your grandparents' culture. Plan for three moments: the entrance, one or two songs between the readings and the godparents' promises, then the exit.</p>\n<p>A few ideas: “Here Comes the Sun” by the Beatles, “What a Wonderful World” by Louis Armstrong, “La vie en rose” by Édith Piaf or “Sodade” by Cesária Évora. At the town hall, the ceremony is short and the room often small: an acoustic line-up is ideal, and check in advance what is allowed.</p>\n<h3>Drinks and meal: a relaxed atmosphere</h3>\n<p>After the ceremony, the music takes on a different role: it accompanies the reunions without drowning out the conversation. A guitar and vocal duo, a jazz or bossa nova trio, a pianist if the venue has a piano: the aim is live background music at a moderate volume. Think about the children too, who are often out in force: a few songs they know always go down well at dessert time.</p>\n<p>If the party carries on into the evening, a small band or a DJ can take over and get every generation dancing.</p>\n<h3>Which line-up should you choose?</h3>\n<ul><li><strong>Solo voice</strong>, a cappella or with the church organ: understated and very moving in a space with good acoustics.</li><li><strong>Guitar and vocals</strong>: the most versatile option, moving from the ceremony to the drinks without changing artist.</li><li><strong>Harp</strong>: soft and elegant, perfect for the ceremony or a quiet drinks reception. Discover the <a href=\"/instruments/harpiste\">harpists on Wimbo</a>.</li><li><strong>Small ensemble</strong> (duo or trio): vocals, guitar or piano, sometimes violin or saxophone, to carry you from the ceremony to the drinks and the meal.</li></ul>\n<h3>What budget should you plan for christening music?</h3>\n<p>As a rough guide, allow €400 to €900 for a solo musician or singer, €900 to €1,800 for a duo or trio, and €1,500 to €3,500 for a full band if you are planning an evening of dancing. The price depends mainly on the duration (ceremony only or the whole day), the date, travel and equipment. Keeping the same artist for the ceremony and the drinks can work out cheaper than two separate bookings, and makes organising easier.</p>\n<h3>Our practical tips</h3>\n<ul><li><strong>Book early</strong> if the christening falls on a spring or summer weekend, a busy time with first communions and weddings.</li><li><strong>Share the venue's constraints</strong>: parish timetable, access to electricity, set-up time, space available.</li><li><strong>Send your song list</strong> a few weeks in advance, especially for a song that is not yet in the artist's repertoire.</li><li><strong>Plan ahead for the paperwork</strong>: in France, hiring an artist directly means making a declaration to the <a href=\"/blog/guso-tout-comprendre\">GUSO</a> (the French scheme for declaring performers hired occasionally), which Wimbo prepares for you. For a christening back home, formalities depend on the country and the artist's status: read our <a href=\"/blog/organiser-fete-au-pays\">guide to parties back home</a>.</li></ul>\n<p>To find the line-up that suits you, browse the artists available for <a href=\"/evenements/bapteme-communion\">christenings and communions</a> on Wimbo: watch their videos, compare verified profiles and send your quote requests in a few clicks.</p>"},"mariage-kizomba-semba-zouk":{"title":"Kizomba, semba and zouk wedding music: the multicultural guide","excerpt":"A French-Angolan, French-Cape Verdean or French-Caribbean wedding: kizomba, semba, zouk, kompa, band or DJ, and a playlist built together with both families.","body":"<p><strong>In short:</strong> For a French-Angolan, French-Cape Verdean or French-Caribbean wedding, choose a band or DJ who has truly mastered the family's rhythms (kizomba, semba, coladeira, funaná, zouk, kompa) as well as the classics your French guests know. Build the playlist with both families, alternate styles in blocks and confirm the repertoire with the artist before booking.</p>\n<p>At a mixed wedding, the dance floor is often the first real meeting place for the two families. Aunties who dance semba, cousins who swear by zouk, university friends waiting for their 2000s hits: everyone needs to find their place. Here's how to go about it.</p>\n<h3>Kizomba, semba, zouk, kompa: who dances what?</h3>\n<p>To an untrained ear, these styles sound alike. To the families, not at all. A few pointers to help you discuss them with your artist:</p>\n<ul><li><strong>Semba</strong> (Angola): the historic party rhythm, danced in couples with playful steps. A classic: “Mona Ki Ngi Xica” by Bonga.</li><li><strong>Kizomba</strong> (Angola): born in the 1980s, slower and more sensual, perfect for getting couples dancing. “Única Mulher” by Anselmo Ralph remains a must.</li><li><strong>Coladeira and funaná</strong> (Cape Verde): coladeira has a gentle sway, while funaná, driven by the accordion and the ferrinho, is fast and very festive. Morna, slower, is lovely during dinner, for example “Sodade” by Cesária Évora.</li><li><strong>Zouk</strong> (Guadeloupe, Martinique): popularised by Kassav', whose “Zouk la sé sèl médikaman nou ni” still gets every table on its feet.</li><li><strong>Kompa</strong> (Haiti): a close cousin of zouk and a staple of Caribbean and Haitian parties, with standards such as “New York City” by Tabou Combo.</li></ul>\n<h3>Live band or DJ: which should you choose?</h3>\n<p>A <strong>live band</strong> brings unbeatable energy: semba or funaná played with real percussion and an accordion is unforgettable. On the other hand, the repertoire is more limited, and you need to allow for space, set-up time and a bigger budget: as a rough guide, €1,500 to €3,500 for a full band.</p>\n<p>A <strong>DJ</strong> can switch from kizomba to French pop and then to kompa in a second, and take guests' requests. As a rough guide, allow €600 to €1,500 for a wedding evening, depending on the duration, the date, travel and equipment.</p>\n<p>You can also combine the two: a band or a singer to open the dancing and play an hour live, then a DJ until the early hours. On Wimbo, compare <a href=\"/genres/kizomba-semba\">kizomba and semba</a> or <a href=\"/genres/zouk-kompa\">zouk and kompa</a> profiles, with their videos and reviews.</p>\n<h3>How do you mix cultures without losing anyone?</h3>\n<p>The secret: alternate in <strong>blocks of 20 to 30 minutes</strong> rather than changing style with every song. A block of kizomba and semba, a block of French hits everyone sings along to, a block of zouk or funaná, then start again, gradually raising the tempo.</p>\n<ul><li><strong>Start broad</strong>: the first songs should speak to both families and every generation.</li><li><strong>Think of the older guests</strong>: an old-school semba or coladeira early in the evening often brings grandparents onto the dance floor.</li><li><strong>Offer a quick lesson</strong>: a few minutes of basic kizomba steps, led by the artist or a relative who dances well, puts everyone at ease. Ask the artist whether they offer this.</li><li><strong>Take care over the first dance</strong>: a slow kizomba works beautifully, as long as you rehearse it before the big day.</li></ul>\n<h3>Building the playlist with both families</h3>\n<p>Rather than letting each family negotiate with the artist, keep everything in one shared document. Ask each side for its <strong>ten must-haves</strong>, the songs for key moments (the couple's entrance, first dance, cake, last song) and a short list of tracks to avoid.</p>\n<p>Some families also want a traditional moment: a song for the bride's entrance, a dance with the parents, a tribute to those who stayed back home. Let the artist know early: most are happy to learn a few songs given a few weeks' notice. Send the final version a month before the wedding, then let the DJ or band read the room.</p>\n<h3>The right questions to ask before booking</h3>\n<ul><li>Do you really play these styles for a whole evening, or just a few songs? Ask for a recent video filmed at a real event.</li><li>Can you sing or make announcements in Portuguese, Creole and French?</li><li>How long is the performance, and what breaks are planned?</li><li>Are the sound system, lighting and a microphone for the speeches included?</li><li>Will you accept a playlist from the families and live requests?</li></ul>\n<p>On Wimbo, every profile is verified, artists usually reply within 2 to 3 hours, and a secured 30% deposit is enough to hold the date; the balance is paid after the party. For a wedding in France, we also prepare the <a href=\"/blog/guso-tout-comprendre\">GUSO declaration</a> (the French scheme for declaring an artist hired on a one-off basis). Summer Saturdays go quickly: aim for 8 to 12 months ahead for an in-demand artist.</p>\n<p>Planning a wedding that celebrates both families? <a href=\"/recherche\">Search for your artist on Wimbo</a> by style and city, and request your quotes for free. Music that brings people together, emotions that last.</p>"},"fete-cap-vert-angola-a-distance":{"title":"Organising a party in Cape Verde or Angola from France","excerpt":"A christening in Praia, a wedding in Luanda: how to find a local artist remotely, check their equipment, pay safely and choose the right date from France.","body":"<p><strong>In short:</strong> To organise a party in Cape Verde or Angola from France or Portugal, book the artist four to six months ahead (more for summer and the festive season), go over the repertoire and equipment on a video call and make sure the venue has a reliable power supply. Pay through a platform that secures the deposit and hand the big day over to someone you trust locally.</p>\n<p>A christening in Praia, a grandmother's 80th in Mindelo, a wedding in Luanda: the family is over there, your life is here, and organising it all often falls to you. We have already covered the <a href=\"/blog/organiser-fete-au-pays\">basics of organising a party back home from afar</a>; here are the points specific to Cape Verde and Angola.</p>\n<h3>When is the best time for a party in Cape Verde or Angola?</h3>\n<p>In <strong>Cape Verde</strong>, it rains little, and mostly between August and October: for an outdoor party, the rest of the year is a safer bet. In <strong>Angola</strong>, the climate varies by region. In Luanda, the cooler dry season, known as cacimbo, runs roughly from May to September, while the rain falls mainly between November and April.</p>\n<p>Think about the diaspora calendar too: summer and the end-of-year holidays are when many families go home, and when artists are most in demand. For those dates, book early. For calls, mind the time difference: Cape Verde is two hours behind Paris in winter (three in summer), and Angola is on Paris time in winter (one hour behind in summer).</p>\n<h3>Finding a local artist without being there</h3>\n<p>Start by looking for an artist <strong>based locally</strong>: they know the venues, the audience and the customs, and you avoid flights and accommodation. In Cape Verde, be specific about the island: bringing a band from Santiago to São Vicente means a flight or a ferry, and often a night in a hotel. In Angola, distances between Luanda and the provinces matter too.</p>\n<p>Depending on the city, the choice of local artists may be limited. In that case, a diaspora artist based in France or Portugal can make the trip: budget for travel, accommodation and entry formalities, which depend on the country and the artist's nationality. The <a href=\"/evenements/evenement-diaspora\">Party back home</a> page brings together artists who offer this kind of event.</p>\n<h3>What should you check on the video call?</h3>\n<p>A video call before booking is worth more than any number of messages. Go beyond the repertoire:</p>\n<ul><li>Ask the artist to <strong>show their equipment</strong> on screen: sound system, microphones, cables, lights. Is it theirs or hired, and is it included in the quote?</li><li>Ask how much <strong>electrical power</strong> they need and how many sockets.</li><li>Ask for a recent video filmed at a real party, not just in a studio.</li><li>Check the number of musicians, the duration, the breaks and the set-up time.</li><li>Discuss plan B: rain, wind, a power cut, a last-minute cancellation.</li><li>Agree on the language for announcements: Portuguese, Creole, French, or a bit of all three.</li></ul>\n<h3>Paying from a distance without taking risks</h3>\n<p>The classic trap: transferring the whole fee in advance, to a personal account or through a money transfer service, to someone you have never seen perform. Three rules:</p>\n<ul><li>Only pay a <strong>deposit</strong> to hold the date, never the full amount before the party.</li><li>Get everything in writing: a detailed quote, timings, equipment, travel costs.</li><li>Pay in a way that protects you: a payment made outside the platform carries no guarantee.</li></ul>\n<p>On Wimbo, the 30% deposit stays secured and the balance is only paid to the artist after the performance, once you have confirmed it.</p>\n<h3>Your local contact: a real job to do</h3>\n<p>A cousin, an aunt or a trusted friend will be your eyes and ears. Give them a clear brief:</p>\n<ul><li>Visit the venue beforehand and check the electricity: available sockets, a stable supply, the distance to the music area.</li><li>If the power is unreliable (family land, beach, garden), hire a <strong>generator</strong> suited to the power the artist needs, placed well away from the dance floor, with enough fuel.</li><li>Arrange a shelter to protect the equipment from sun, wind or a sudden shower.</li><li>Call the artist two days before to confirm the time and access.</li><li>Welcome the artist on the day, then let you know that everything went well.</li></ul>\n<p>The Wimbo website is also available in Portuguese: handy for the family back home.</p>\n<h3>What Wimbo can and cannot do abroad</h3>\n<p>Wherever your party takes place, Wimbo lets you compare verified profiles, receive quotes usually within 2 to 3 hours, talk to the artist through the messaging system and pay securely. It's all explained on the <a href=\"/comment-ca-marche\">How it works</a> page.</p>\n<p>However, the GUSO declaration (the French scheme for declaring artists hired on a one-off basis) that we prepare for events in France does not apply in Cape Verde or Angola: there, formalities depend on the country and the artist's status. Raise the question as soon as you request a quote and, for an outdoor party, check with the venue or the local authorities. Finally, Wimbo does not choose for you, nor does it book the venue, the caterer or the flights: you stay in control.</p>\n<p>Is the family waiting for you to celebrate? <a href=\"/recherche\">Find your artist on Wimbo</a> and request your quotes for free, from Paris, Lyon or Lisbon.</p>"},"groupe-soiree-entreprise":{"title":"Band or DJ for a corporate party: how do you choose?","excerpt":"Gala, seminar, Christmas party: band, DJ or musicians, formats for each moment, technical needs, budget, lead times and GUSO for a successful company event.","body":"<p><strong>In short:</strong> for a corporate party, choose a band if you want a real live highlight and a packed dance floor, a DJ if you're after flexibility and a controlled budget, and acoustic musicians for the drinks reception and dinner. These options work very well together: musicians for the welcome, then a band or DJ to round off the night. For December, book as early as September.</p>\n<h3>Band, DJ or musicians: which is right for your party?</h3>\n<p>It all depends on the atmosphere you want and who your guests are. A <strong>live band</strong> puts on a show: people watch, applaud and then dance. It's ideal for a gala or an end-of-year party that needs to make an impression, especially with a <a href=\"/genres/reprises\">covers band</a> whose repertoire has something for everyone, from 80s classics to today's hits.</p>\n<p>A <strong>DJ</strong> reads the room in real time, plays without breaks and needs less space. <strong>Acoustic musicians</strong> (jazz duo, piano and vocals, saxophone, bossa nova trio) set the mood for drinks and dinner without drowning out conversation. Finally, a <strong>mixed line-up</strong> is common: a band for one or two sets, then a DJ until the end.</p>\n<h3>Drinks, dinner, dancing: a format for each moment</h3>\n<ul><li><strong>Welcome drinks</strong> (1 to 2 hours): a light, mobile format at a moderate volume. Your guests are also there to chat with colleagues or clients.</li><li><strong>Dinner or gala</strong> (about 2 hours): background music between courses, with planned breaks for speeches, awards or the year-in-review video.</li><li><strong>Dancing</strong> (2 to 4 hours): a band usually plays sets of 45 minutes to an hour, with breaks in between; a DJ can keep going non-stop.</li><li><strong>Seminar</strong>: live music at a seminar can open the plenary session, liven up a break or entertain guests in the evening. Some artists also offer participatory workshops (percussion, singing): mention it in your request.</li></ul>\n<p>Think about overtime too: ask for the price of an extra hour in the quote, in case the party runs late.</p>\n<h3>Sound and technical needs: questions to ask the venue</h3>\n<p>Before booking, contact the technical manager of the venue or hotel and send them the artist's technical rider. In particular, check:</p>\n<ul><li>the space available for the stage: a five-piece band takes up far more room than a DJ;</li><li>the power sockets nearby and the available power supply;</li><li>whether there is a sound limiter, common in city venues: an acoustic drum kit copes with one less easily than a DJ;</li><li>set-up and soundcheck times, to be scheduled before guests arrive;</li><li>access for unloading equipment, parking and a dressing room for the artists;</li><li>a microphone for management speeches: can the artist provide one?</li></ul>\n<h3>What budget should you plan for a corporate party?</h3>\n<p>As a rough guide, allow €400 to €900 for a solo musician, €900 to €1,800 for a duo or trio, €1,500 to €3,500 for a full band and €600 to €1,500 for a DJ for an evening. These amounts vary with the duration, date, travel and equipment: a large venue needs more sound and lighting. To cover several moments, ask the same artist for a package: some bands offer an acoustic version for the drinks before switching to the full line-up. Our <a href=\"/blog/prix-musicien-evenement\">price guide</a> explains what makes a quote go up or down.</p>\n<h3>End of year: book from September</h3>\n<p>December is the busiest time of year for corporate parties: Thursdays and Fridays go quickly, and the most sought-after artists are booked by September or October. Ideally, book 3 to 6 months ahead for an end-of-year party, and even earlier for a gala with a full band. Also allow time for internal approval: budget, purchase order, procurement.</p>\n<p>Left it late? Widen your dates (a Tuesday or Wednesday), go for a lighter format, or turn your party into a New Year event in January, when there is often more choice.</p>\n<h3>Invoicing and GUSO: what your company needs to know</h3>\n<p>In France, a performing artist is presumed to be an employee. If your company hires one directly and its main business is not live entertainment, it must use <strong>GUSO</strong> (Guichet unique du spectacle occasionnel, the French one-stop shop for occasional live performances), just like a private individual, up to a limit of 6 performances a year. A single declaration serves as the employment contract and covers the social security contributions. Let your accounts department know: this is a salary plus contributions, not a supplier invoice.</p>\n<p>If the artist works through an organisation (association, production company), that organisation employs them and invoices you: no GUSO on your side. On Wimbo, enter your company details: the quote is made out in its name and includes GUSO contributions where they apply; we prepare the declaration and all you have to do is approve it. Payment works the same way as for a private individual: a secured 30% deposit, then the balance after the performance. For an event outside France, formalities depend on the country and the artist's status. It's all explained in <a href=\"/blog/guso-tout-comprendre\">our article on GUSO</a>.</p>\n<p>Ready to find the artist for your next event? Compare verified profiles, listen to their clips and send your quote requests from our <a href=\"/evenements/entreprise\">Corporate event</a> page: artists usually reply within 2 to 3 hours.</p>"},"musique-ceremonie-laique":{"title":"Secular wedding ceremony music: key moments and song ideas","excerpt":"Guests arriving, entrance, readings, vows, exit: which music to choose for your secular ceremony, which line-up to book, plus 16 song ideas to listen to.","body":"<p><strong>In short:</strong> a secular ceremony has five musical moments: guests arriving, the entrance, the readings, the exchange of vows and the exit. An acoustic line-up (vocals and guitar, string quartet, harp or piano) suits most venues, with a piece chosen for each highlight. Outdoors, plan for shade, a power solution and a plan B in case of rain.</p>\n<p>Unlike a civil wedding, a secular (or celebrant-led) ceremony has no set format: you choose the place, the length and every piece of music. It's real freedom, as long as you prepare the music carefully with your artists.</p>\n<h3>What are the musical moments of a secular ceremony?</h3>\n<ul><li><strong>Guests arriving</strong> (15 to 30 minutes): gentle music while everyone takes their seats. It sets the tone and avoids awkward silences.</li><li><strong>The entrance</strong>: the celebrant, the wedding party, then the couple. It's the most eagerly awaited moment: choose a piece that moves you, and the musicians will adapt it to the length of the aisle.</li><li><strong>Readings and speeches</strong>: short interludes between speakers let the emotion settle and refresh everyone's attention.</li><li><strong>The exchange of vows</strong>: silence during the words, then a piece for the ring exchange or a symbolic ritual (sand, ribbon, candle).</li><li><strong>The exit</strong>: an upbeat, joyful track that signals the start of the party.</li></ul>\n<h3>Which line-up should you choose?</h3>\n<ul><li><strong>Vocals and guitar</strong>: the most flexible option. It suits every repertoire, from French chanson to pop, and only needs a small battery-powered PA.</li><li><strong>String quartet</strong>: elegant and stately, it plays Pachelbel as well as arrangements of pop songs. Provide four chairs without armrests and level ground.</li><li><strong>Harp</strong>: an airy, almost magical sound. A <a href=\"/instruments/harpiste\">harpist</a> needs easy access for the instrument, stable ground and shade.</li><li><strong>Piano</strong>: intense and timeless, but you need a piano on site or a digital piano, which means electricity.</li></ul>\n<p>For the emotion of the vows, a voice often makes all the difference. For a more classical feel, strings and harp create a more solemn atmosphere.</p>\n<h3>16 song ideas for your secular ceremony</h3>\n<ul><li><strong>Guests arriving</strong>: “La Vie en rose” (Édith Piaf), “Can't Help Falling in Love” (Elvis Presley), “Gymnopédie No. 1” (Erik Satie).</li><li><strong>Entrance</strong>: “Canon in D” (Johann Pachelbel), “A Thousand Years” (Christina Perri), “Perfect” (Ed Sheeran), “Comptine d'un autre été, l'après-midi” (Yann Tiersen).</li><li><strong>Readings</strong>: “Clair de lune” (Claude Debussy), “Nuvole bianche” (Ludovico Einaudi), “River Flows in You” (Yiruma).</li><li><strong>Vows and rings</strong>: “L'Hymne à l'amour” (Édith Piaf), “All of Me” (John Legend), “Je te promets” (Johnny Hallyday).</li><li><strong>Exit</strong>: “Signed, Sealed, Delivered I'm Yours” (Stevie Wonder), “Viva la Vida” (Coldplay), “Marry You” (Bruno Mars).</li></ul>\n<p>Do you have roots in Portugal, Cape Verde or the French Caribbean? An instrumental fado, a morna or a biguine can be a lovely tribute to your family. Send your list to the musicians one to two months beforehand: some pieces need a special arrangement.</p>\n<h3>Outdoor ceremonies: constraints to plan for</h3>\n<ul><li><strong>Power</strong>: a socket nearby or a battery-powered PA. Check with the venue.</li><li><strong>Sound</strong>: outdoors, voices don't carry well. Plan a microphone for the celebrant and readers: many musicians can provide one, so ask.</li><li><strong>Sun and humidity</strong>: wooden instruments go out of tune and can be damaged. A gazebo or a shady spot protects both musicians and instruments.</li><li><strong>Wind</strong>: it blows sheet music away and buffets the microphones; experienced musicians bring clips and foam windshields.</li><li><strong>Rain</strong>: arrange a covered plan B and tell the artists where it is.</li><li><strong>Ground</strong>: grass, gravel or a slope make it harder to set up a harp or a piano. Give the distance between the car park and the ceremony spot.</li></ul>\n<h3>Budget and final tips</h3>\n<p>As a rough guide, allow €400 to €900 for a solo musician and €900 to €1,800 for a duo or trio; a quartet may cost a little more. The price depends on the duration, date, travel and equipment. Ask whether the artist can carry on into the drinks reception: it's often simpler and cheaper than booking a second line-up. For an event in France, the Wimbo quote includes the GUSO contributions (GUSO is the French scheme for declaring performers hired occasionally) and we prepare the declaration.</p>\n<p>On the day, choose one person (the celebrant or a witness) to cue the musicians, and send them a minute-by-minute running order. For the other moments of the day, our <a href=\"/blog/choisir-musicien-mariage\">guide to choosing your wedding artist</a> will help you plan the rest of the programme.</p>\n<p>Want a ceremony that feels like you? Browse verified profiles of singers, quartets and harpists on our <a href=\"/evenements/ceremonie\">Ceremony</a> page, listen to their clips and send your quote requests in a few clicks.</p>"},"musique-anniversaire-30-40-50-ans":{"title":"Birthday party music for a 30th, 40th or 50th: what to choose","excerpt":"30th, 40th, 50th, 60th or 70th birthday: the right music for the age and the venue, live band or DJ, guide prices and tips for pulling off a surprise party.","body":"<p><strong>In short:</strong> for a 30th, 40th, 50th birthday or beyond, start with the guest of honour and the venue. A solo musician or a duo is enough for a dinner at home, a band or a DJ will get a hired hall dancing, and a mix of the two often gives you the best of both. The common thread that works at any age: the songs from when they were 20.</p>\n<h3>What music for a 30th, 40th or 50th birthday (and beyond)?</h3>\n<p>One simple rule works almost every time: go for the songs that shaped the guest of honour between the ages of 15 and 25. They are the ones that make them smile from the very first notes, and that their friends know by heart.</p>\n<ul><li><strong>30th</strong>: the hits of the 2010s, pop, electronic and Afrobeats, starting with “Uptown Funk” by Mark Ronson and Bruno Mars.</li><li><strong>40th</strong>: the 2000s, R&B, pop and hip-hop, with classics such as “Crazy in Love” by Beyoncé.</li><li><strong>50th</strong>: the 1990s, dance, rock and pop, including the evergreen “Freed from Desire” by Gala.</li><li><strong>60th</strong>: the 1980s, funk, new wave and pop, with “Billie Jean” by Michael Jackson top of the list.</li><li><strong>70th</strong>: the 1970s, soul, disco, rock and singer-songwriters, and “September” by Earth, Wind & Fire to get the dance floor going.</li></ul>\n<p>These are only starting points: a jazz or fado lover deserves a party that reflects who they are, whatever their age. Ask the people closest to them what they really listen to.</p>\n<h3>Dinner at home or hired venue: which format?</h3>\n<p><strong>Dinner at home</strong> (20 to 40 guests): a singer-guitarist, a pianist (bringing their own keyboard if you have no piano) or an acoustic duo creates a warm atmosphere without drowning out the conversation. Check the space and power supply listed on the artist's profile, and let your neighbours know.</p>\n<p><strong>Hired venue</strong> (50 guests or more): time to dance. A <a href=\"/genres/reprises\">covers band</a> or a DJ with their own sound system and lighting will turn a function room into a dance floor. Before booking, ask the venue what time the party must finish and whether a sound limiter is in place, then pass this information on to the artist.</p>\n<h3>Live musician or DJ: how to choose?</h3>\n<p>Live music brings emotion: a voice singing their favourite song as the cake comes out, a saxophone accompanying their entrance, musicians interacting with the guests. A DJ, on the other hand, has an almost unlimited catalogue, moves between generations without a lull and can easily keep going until the early hours.</p>\n<p>A popular solution is a mix of the two: a musician during drinks and dinner, then a DJ for the dancing. Some bands also offer a DJ set between their live sets: ask about it in your quote request.</p>\n<h3>Bringing generations together with the soundtrack of their youth</h3>\n<p>A birthday party often brings together children, parents, childhood friends and colleagues. To make sure nobody stays seated:</p>\n<ul><li><strong>Build their playlist</strong>: ask their siblings or oldest friends for 5 to 10 songs that sum them up, and send the list to the artist 3 to 4 weeks ahead. A song outside the repertoire takes work, and sometimes costs extra.</li><li><strong>Plan the evening in waves</strong>: gentle music during dinner, then the hits of their youth, current tracks for the younger guests and a finale everyone can sing along to.</li><li><strong>Think about family roots</strong>: a kizomba, zouk or fado moment can get three generations on their feet at once.</li></ul>\n<h3>What budget for birthday party entertainment?</h3>\n<p>As a rough guide, allow €400 to €900 for a solo musician, €900 to €1,800 for a duo or trio, €1,500 to €3,500 for a full band and €600 to €1,500 for a DJ for the evening. The amount depends on the duration, the date, travel and equipment. A Friday evening or a Sunday lunch may be more affordable than a Saturday in June. Our <a href=\"/blog/prix-musicien-evenement\">price guide</a> explains what affects a quote.</p>\n<p>On Wimbo, the quote includes social security contributions and, for a party in France, we prepare the GUSO declaration (the French scheme for declaring performers hired on an occasional basis). You pay a 30% deposit, which stays secured, and the balance after the performance.</p>\n<h3>Surprise party: our tips for keeping the secret</h3>\n<ul><li>Give the artist the number of an accomplice, never that of the guest of honour, and avoid shared calendars or inboxes.</li><li>Have the artist arrive before the guests so they can set up out of sight.</li><li>Agree with the artist on the entrance song and a clear cue (a text message, the lights going off) to start it at the right moment.</li><li>Build in some leeway: if the guest of honour runs late, the artist's schedule needs to be able to shift. Mention this in your quote request from the start.</li></ul>\n<p>Want to make this birthday a memory that lasts? On Wimbo, search by town, date and style, listen to the clips, read verified reviews and request a free quote: artists usually reply within 2 to 3 hours. <a href=\"/evenements/anniversaire\">Find an artist for a birthday party</a>.</p>"},"musicien-profil-qui-attire-les-demandes":{"title":"Getting more gigs as a musician: 7 tips for your online profile","excerpt":"Musician, singer, band or DJ: 7 practical tips for an online profile that attracts quote requests and helps you land more gigs, bookings and contracts.","body":"<p><strong>In short:</strong> to land more bookings, your profile has to reassure a client who has never seen you perform. Polished photos, 15-second videos, a clear repertoire, honest prices, quick replies, reviews and an up-to-date calendar make all the difference. On Wimbo, signing up is free and the first 150 to sign up get Premium for life.</p>\n<h3>How can a musician get more bookings?</h3>\n<p>A client planning a wedding or a birthday often compares several profiles in a few minutes, sometimes on their phone in the evening. They are looking for simple answers: what you look like on stage, what you play, how much you cost, whether you are free on their date and whether they can trust you. Each of the 7 tips below answers one of these questions.</p>\n<h3>Tips 1 and 2: photos and videos that make people want to book</h3>\n<p><strong>1. Photos in action.</strong> One sharp photo of you performing, one of the full line-up and a well-lit portrait are worth more than twenty blurry shots taken from the back of the room. Show the line-ups you actually offer: if you play solo and as a trio, both should appear.</p>\n<p><strong>2. 15-second videos.</strong> Clients won't listen to a whole concert: choose a clip that starts strong, with good sound. Ideally, have one video per key moment (drinks reception, first dance, dance floor). On Wimbo, you can upload a short video or paste a YouTube, Vimeo, Instagram or TikTok link.</p>\n<h3>Tips 3 and 4: a clear repertoire and honest prices</h3>\n<p><strong>3. An easy-to-read repertoire.</strong> List your styles, around ten representative songs, the languages you sing in, the length of your sets and the equipment you provide. Say whether you will learn a song on request, and how much notice you need. There's no point listing 300 songs: clients want to picture their event, not read a catalogue.</p>\n<p><strong>4. Honest prices, or “on quote”.</strong> An indicative range reassures clients and filters out requests that don't fit their budget. If your fee genuinely varies depending on the line-up or travel, show “on quote” and explain what changes it. On Wimbo, you set your own prices and adjust each quote, and the client knows the total cost from the outset.</p>\n<h3>Tip 5: reply quickly, even if it's to say no</h3>\n<p>Organisers often contact several artists at once, and the first clear reply gets a head start. On Wimbo, artists usually reply within 2 to 3 hours, your average response time is shown on your profile and a good response rate improves your visibility. A good reply fits in a few lines: a thank-you, confirmation of the date, the line-up you propose, the price and a question about the event. Not available? Decline quickly and politely: the client will appreciate it.</p>\n<h3>Tips 6 and 7: reviews and an up-to-date calendar</h3>\n<p><strong>6. Reviews.</strong> After each performance, ask the client for a review while the emotion is still fresh. Reply to reviews with a few sincere words: future clients read your replies too. On Wimbo, every review is linked to a real booking, which gives it real weight.</p>\n<p><strong>7. An availability calendar.</strong> Block out dates that are already taken, including those booked outside Wimbo. You avoid double bookings and requests you would have to turn down, and the client can see straight away whether they can count on you.</p>\n<h3>How does Wimbo help you find gigs?</h3>\n<p>Wimbo connects private individuals and companies with verified artists, in France and elsewhere, including diaspora parties back home. Requests arrive complete (date, venue, number of guests, budget), the client's deposit is secured from the moment of booking and, for events in France, the GUSO declaration (the French scheme for declaring performers hired on an occasional basis) is prepared on the client's side (<a href=\"/blog/guso-tout-comprendre\">GUSO explained</a>). Three plans, no commitment:</p>\n<ul><li><strong>Discovery</strong>: free, profile with 5 photos, quote requests, messaging and calendar.</li><li><strong>Pro</strong> (€19 a month): 15 photos, 2 videos and greater visibility in the results.</li><li><strong>Premium</strong> (€49 a month): 30 photos, 5 videos and a featured spot at the top of the results.</li></ul>\n<p>Commission is only charged on performances that actually take place. And for the launch, the first 150 to sign up get Premium for life, free of charge, with the founding member badge. Full details are on the <a href=\"/abonnements\">Plans</a> page.</p>\n<p>Your art, their emotions: create your profile in 5 minutes, no bank card needed, and our team usually approves it within 48 hours. <a href=\"/je-suis-artiste\">Discover Wimbo for artists</a>.</p>"}},"chatk":[["price","prices","cost","costs","much","budget","expensive","fee","fees","rate"],["guso","declaration","declare","contributions","tax","social"],["register","registration","sign","signup","create","account","profile"],["password","forgot","forgotten","login","log","reset"],["cancel","cancellation","refund","refunds","money","back"],["video","videos","photo","photos","pictures","media"],["plan","plans","subscription","offer","premium","pro","discovery","founding","founder","founders"],["contact","team","human","talk","speak","phone","email","person"],["language","languages","portuguese","english","french","translation","translated"],["country","abroad","portugal","angola","cape","verde","diaspora","haiti","caribbean","home"]]}};

/* =====================================================================
   WIMBO — Application (cœur) : utilitaires, données, routeur, pages
   catalogue (accueil, recherche, fiche artiste, catégories)
   ===================================================================== */

/* ---------- Utilitaires ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/Œ/g, 'OE').replace(/æ/g, 'ae').toLowerCase().trim();
const fmtEUR = n => new Intl.NumberFormat(LANGS[LANG] ? LANGS[LANG].locale : 'fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(n));
const fmtRating = n => LANG === 'en' ? n.toFixed(1) : n.toFixed(1).replace('.', ',');
const fmtDate = (d, o) => { try { return new Date(d).toLocaleDateString(LANGS[LANG] ? LANGS[LANG].locale : 'fr-FR', o || { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return d; } };
const initials = n => String(n || '?').split(/[\s&\-—–·.]+/).filter(w => /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]/.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
const list = v => (v ? String(v).split(',').filter(Boolean) : []);
const isEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || '').trim());
const uid = () => (window.crypto && crypto.randomUUID ? crypto.randomUUID() : 'l-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8));
const todayISO = () => new Date().toISOString().slice(0, 10);
/* Évite qu'une requête serveur bloque l'affichage (réseau lent, projet Supabase en pause…) */
function withTimeout(p, ms, fallback) {
  return Promise.race([Promise.resolve(p).catch(e => { console.warn('[Wimbo]', e && e.message ? e.message : e); return fallback; }), new Promise(r => setTimeout(() => r(fallback), ms))]);
}
function img(src, w, h) {
  if (!src) return '';
  if (/^(https?:|data:|blob:)/.test(src)) return src;
  return U(src, w, h);
}

/* ---------- Pays, lieux, instruments, vidéos ---------- */
let REGION_NAMES = null;
try { REGION_NAMES = new Intl.DisplayNames(['fr'], { type: 'region' }); } catch (e) { REGION_NAMES = null; }
function countryName(code) {
  if (!code || code === 'OTHER') return '';
  try { return REGION_NAMES ? REGION_NAMES.of(String(code).toUpperCase()) : code; } catch (e) { return code; }
}
const DOM_RE = /Guadeloupe|Martinique|Guyane|Réunion|Mayotte|Polynésie|Calédonie|Saint-Martin|Saint-Barthélemy/i;
function placeLabel(a) {
  const parts = [a.city];
  if (a.country && a.country !== 'FR') parts.push(countryName(a.country));
  else if (a.region && DOM_RE.test(a.region)) parts.push(a.region);
  return parts.filter(Boolean).join(', ');
}
function parseInstruments(text) {
  const slugs = [], extra = [];
  String(text || '').split(/[,;\/+&]|\s+et\s+/i).map(x => x.trim()).filter(Boolean).forEach(tok => {
    const n = norm(tok).replace(/[^a-z ]/g, '').trim();
    const slug = Object.keys(INSTR_CHIP).find(k => norm(INSTR_CHIP[k]) === norm(tok)) || INSTR_SYN[n] || INSTR_SYN[n.split(' ')[0]];
    if (slug) { if (!slugs.includes(slug)) slugs.push(slug); }
    else if (!extra.some(x => norm(x) === norm(tok))) extra.push(tok.charAt(0).toUpperCase() + tok.slice(1));
  });
  return { slugs, extra };
}
function instrumentsText(slugs, otherText) {
  const other = String(otherText || '').split(/[,;]/).map(x => x.trim()).filter(Boolean);
  return slugs.map(k => INSTR_CHIP[k] || k).concat(other).join(', ');
}
function parseVideo(url) {
  url = String(url || '').trim();
  if (!/^https?:\/\//i.test(url)) return null;
  let m;
  if ((m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/i))) return { kind: 'youtube', url, thumb: 'https://i.ytimg.com/vi/' + m[1] + '/hqdefault.jpg', embed: 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1&rel=0' };
  if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i))) return { kind: 'vimeo', url, thumb: null, embed: 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1' };
  const host = ((url.match(/^https?:\/\/(?:www\.|m\.)?([^/]+)/i) || [])[1] || '').toLowerCase();
  const label = /instagram/.test(host) ? 'Instagram' : /tiktok/.test(host) ? 'TikTok' : /facebook|fb\.watch/.test(host) ? 'Facebook' : /soundcloud/.test(host) ? 'SoundCloud' : host;
  return { kind: 'link', url, label };
}
function videoLinks(text) { return String(text || '').split(/[\s,]+/).map(x => x.trim()).filter(x => parseVideo(x)).slice(0, 6); }

/* ---------- Champ « ville » avec suggestions (monde entier, via Photon / OpenStreetMap) ---------- */
const AC = { timer: null, ctrl: null, failed: false };
function cityField(o) {
  const cc = o.country || '';
  return '<div class="ac"' + (o.withCountry ? ' data-ac-country' : '') + (o.full ? ' data-ac-full' : '') + ' data-ac>' +
    '<input type="text" name="' + o.name + '"' + (o.id ? ' id="' + o.id + '"' : '') + ' autocomplete="off" spellcheck="false"' + (o.required ? ' required' : '') + ' placeholder="' + esc(o.placeholder || 'Ex. : Paris, Lisbonne, Douala…') + '" value="' + esc(o.value || '') + '"' + (o.value ? ' data-picked="' + esc(o.value) + '"' : '') + '>' +
    (o.withCountry ? '<input type="hidden" name="' + (o.countryField || 'country') + '" value="' + esc(cc) + '"><span class="ac-country' + (cc ? '' : ' hide') + '">' + esc(countryName(cc)) + '</span>' : '') +
    '<div class="ac-list hide" role="listbox"></div></div>';
}
function acReset(input) {
  const box = input.closest('[data-ac]'); if (!box || !box.hasAttribute('data-ac-country')) return;
  if (input.value.trim() !== (input.dataset.picked || '')) {
    const h = box.querySelector('input[type=hidden]'); if (h) h.value = '';
    const b = box.querySelector('.ac-country'); if (b) b.classList.add('hide');
  }
}
async function acSearch(input) {
  const box = input.closest('[data-ac]'); const list = box.querySelector('.ac-list');
  const q = input.value.trim();
  if (q.length < 2) { list.classList.add('hide'); return; }
  try {
    if (AC.ctrl) AC.ctrl.abort();
    AC.ctrl = new AbortController();
    const u = new URL('https://photon.komoot.io/api/');
    u.searchParams.set('q', q); u.searchParams.set('limit', '10'); u.searchParams.set('lang', 'fr');
    ['place:city', 'place:town', 'place:village', 'place:municipality'].forEach(t => u.searchParams.append('osm_tag', t));
    const r = await withTimeout(fetch(u, { signal: AC.ctrl.signal }), 6000, null);
    if (!r || !r.ok) throw new Error('service de suggestions indisponible');
    const j = await r.json(); AC.failed = false;
    const seen = new Set(); const items = [];
    (j.features || []).forEach(f => {
      const p = f.properties || {}; if (!p.name || !p.countrycode) return;
      const key = norm(p.name) + '|' + (p.state || '') + '|' + p.countrycode; if (seen.has(key)) return; seen.add(key);
      items.push({ city: p.name, region: p.state || p.county || '', cc: String(p.countrycode).toUpperCase(), country: countryName(p.countrycode) || p.country || '' });
    });
    if (input.value.trim() !== q) return;
    list.innerHTML = items.length ? items.slice(0, 7).map(it => '<button type="button" class="ac-item" role="option" data-ac-pick data-city="' + esc(it.city) + '" data-cc="' + esc(it.cc) + '" data-country="' + esc(it.country) + '" data-region="' + esc(it.region) + '"><strong>' + esc(it.city) + '</strong><span>' + esc([it.region, it.country].filter(Boolean).join(', ')) + '</span></button>').join('') : '<div class="ac-empty">Aucune ville trouvée. Vérifiez l\'orthographe.</div>';
    list.classList.remove('hide');
  } catch (e) {
    if (e && e.name === 'AbortError') return;
    AC.failed = true; list.classList.add('hide');
  }
}
function acPick(btn) {
  const box = btn.closest('[data-ac]'); const input = box.querySelector('input[type=text]');
  const full = box.hasAttribute('data-ac-full') && btn.dataset.country ? btn.dataset.city + ', ' + btn.dataset.country : btn.dataset.city;
  input.value = full; input.dataset.picked = full; input.dataset.region = btn.dataset.region || '';
  const h = box.querySelector('input[type=hidden]'); if (h) h.value = btn.dataset.cc;
  const b = box.querySelector('.ac-country'); if (b) { b.textContent = btn.dataset.country; b.classList.remove('hide'); }
  box.querySelector('.ac-list').classList.add('hide');
  input.dataset.skipAc = '1';
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

const LS = {
  get(k, d) { try { const v = localStorage.getItem('wimbo_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('wimbo_' + k, JSON.stringify(v)); } catch (e) { console.warn('[Wimbo] stockage local plein', e); } }
};

/* ---------- Langue (FR par défaut ; dictionnaires dans i18n.js) ---------- */
const LANGS = {
  fr: { label: 'Français', short: 'FR', flag: '🇫🇷', locale: 'fr-FR' },
  pt: { label: 'Português', short: 'PT', flag: '🇵🇹', locale: 'pt-PT' },
  en: { label: 'English', short: 'EN', flag: '🇬🇧', locale: 'en-GB' }
};
let LANG = (function () {
  let l = null; try { l = JSON.parse(localStorage.getItem('wimbo_lang')); } catch (e) {}
  if (!l) l = String((navigator.language || 'fr')).slice(0, 2).toLowerCase();
  return LANGS[l] ? l : 'fr';
})();
const I18N_DICT = (typeof I18N !== 'undefined' && I18N[LANG]) || {};
/* Phrase avec variables : T('Il reste {n} places', { n: 12 }) */
function T(tpl, vars) {
  let s = (LANG !== 'fr' && I18N_DICT.tpl && I18N_DICT.tpl[tpl]) || tpl;
  if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
  return s;
}
const trData = (map, k) => (LANG !== 'fr' && I18N_DICT[map] && I18N_DICT[map][k]) || null;
/* Libellé traduit via le dictionnaire de l'interface (ou texte d'origine) */
const tu = s => (s && trStr(s)) || s;
const gL = k => trData('genres', k) || (GENRES[k] && tu(GENRES[k])) || k;
const eL = k => (trData('events', k) && trData('events', k).label) || (EVENTS[k] && tu(EVENTS[k].label)) || k;
const eT = k => (trData('events', k) && trData('events', k).text) || (EVENTS[k] ? tu(EVENTS[k].text) : '');
const iL = k => trData('instruments', k) || (INSTRUMENTS[k] && tu(INSTRUMENTS[k])) || k;
const cL = k => trData('chips', k) || (INSTR_CHIP[k] && tu(INSTR_CHIP[k])) || iL(k);
const tyL = k => trData('types', k) || (ARTIST_TYPES[k] && tu(ARTIST_TYPES[k])) || k;
const pnL = k => trData('plans', k) || (PLAN_NAMES[k] && tu(PLAN_NAMES[k])) || k;
const blogL = b => b && Object.assign({}, b, { cat: tu(b.cat), read: tu(b.read) }, trData('blog', b.slug) || {});
const blogList = () => BLOG.map(blogL);
function faqData() {
  if (LANG === 'fr') return FAQ;
  if (I18N_DICT.faq) return I18N_DICT.faq;
  const m = l => l.map(x => [tu(x[0]), tu(x[1])]);
  return { organisateurs: m(FAQ.organisateurs), artistes: m(FAQ.artistes) };
}
const plural = (n, one, many) => {
  if (n <= 1 && one === many && LANG !== 'fr' && I18N_DICT.tpl && I18N_DICT.tpl[one + '#1']) return T(one + '#1', { n });
  return T(n > 1 ? many : one, { n });
};

/* Traduction automatique de l'interface : chaque texte affiché est remplacé
   par sa version PT / EN (dictionnaire i18n.js). Les contenus écrits par les
   artistes (ou marqués data-notr) restent dans leur langue d'origine. */
const TR_UI = (LANG !== 'fr' && I18N_DICT.ui) || null;
const TR_ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
function trStr(s) {
  if (!TR_UI || !s) return null;
  const key = String(s).replace(/\s+/g, ' ').trim(); if (!key) return null;
  const t = TR_UI[key]; if (t === undefined) return null;
  return s.match(/^\s*/)[0] + t + s.match(/\s*$/)[0];
}
function trNode(root) {
  if (!TR_UI || !root) return;
  if (root.nodeType === 3) {
    const p = root.parentNode; if (p && p.closest && p.closest('[data-notr],script,style,textarea')) return;
    const t = trStr(root.nodeValue); if (t !== null && t !== root.nodeValue) root.nodeValue = t; return;
  }
  if (root.nodeType !== 1 || (root.closest && root.closest('[data-notr]'))) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, { acceptNode(n) {
    if (n.nodeType === 1 && (n.hasAttribute('data-notr') || /^(SCRIPT|STYLE)$/.test(n.tagName))) return NodeFilter.FILTER_REJECT;
    if (n.nodeType === 3 && n.parentNode && n.parentNode.tagName === 'TEXTAREA') return NodeFilter.FILTER_SKIP;
    return NodeFilter.FILTER_ACCEPT; } });
  let n = root;
  while (n) {
    if (n.nodeType === 3) { const t = trStr(n.nodeValue); if (t !== null && t !== n.nodeValue) n.nodeValue = t; }
    else TR_ATTRS.forEach(a => { const v = n.getAttribute(a); if (v) { const t = trStr(v); if (t !== null && t !== v) n.setAttribute(a, t); } });
    n = w.nextNode();
  }
}
function startTranslation() {
  try { document.documentElement.lang = LANG; } catch (e) {}
  if (!TR_UI) return;
  trNode(document.body);
  new MutationObserver(muts => muts.forEach(m => {
    if (m.type === 'characterData') trNode(m.target);
    else if (m.type === 'attributes') { const v = m.target.getAttribute(m.attributeName); const t = trStr(v); if (t !== null && t !== v) m.target.setAttribute(m.attributeName, t); }
    else m.addedNodes.forEach(trNode);
  })).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: TR_ATTRS });
}
const trTitle = s => trStr(s) || s;
function langSwitch() {
  const cur = LANGS[LANG];
  return '<div class="lang-switch"><button class="lang-btn" aria-haspopup="true" aria-label="Langue">' + cur.flag + ' ' + cur.short + '</button><div class="lang-menu" data-notr>' +
    Object.keys(LANGS).map(k => '<a href="#" data-lang="' + k + '" class="' + (k === LANG ? 'on' : '') + '">' + LANGS[k].flag + ' ' + LANGS[k].label + '</a>').join('') + '</div></div>';
}
function langRow() { return '<div class="lang-row" data-notr>' + Object.keys(LANGS).map(k => '<a href="#" data-lang="' + k + '" class="' + (k === LANG ? 'on' : '') + '">' + LANGS[k].flag + ' ' + LANGS[k].label + '</a>').join('') + '</div>'; }
function chatExtra() {
  if (LANG === 'fr') return CHAT_EXTRA;
  const kw = I18N_DICT.chatk || [];
  return CHAT_EXTRA.map((e, i) => ({ k: e.k.concat(kw[i] || []), q: tu(e.q), a: tu(e.a), link: e.link && [e.link[0], tu(e.link[1])] }));
}

/* ---------- Icônes ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  pin: '<path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  heart: '<path d="M12 20s-7.5-4.6-9.3-9.2C1.4 7.4 3.6 4 7.1 4c2 0 3.4 1.1 4.9 2.9C13.5 5.1 14.9 4 16.9 4c3.5 0 5.7 3.4 4.4 6.8C19.5 15.4 12 20 12 20z"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  checkc: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.4c1.9.8 3 2.9 3 5.6"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  euro: '<path d="M17.5 6.5A7 7 0 1 0 17.5 17.5"/><path d="M4 10.5h9M4 13.5h9"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>', chevL: '<path d="m15 18-6-6 6-6"/>', chevR: '<path d="m9 6 6 6-6 6"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  play: '<path d="M7 4.5v15l13-7.5z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  msg: '<path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  home: '<path d="M3 11 12 3l9 8M5 9.5V20h14V9.5"/>',
  inbox: '<path d="M3 13h5l2 3h4l2-3h5"/><path d="M5.5 5h13L21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/>',
  filter: '<path d="M3 5h18l-7 8.5V20l-4-2v-4.5z"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  swap: '<path d="M7 7h13l-4-4M17 17H4l4 4"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  plane: '<path d="M2 16.5 22 9l-3.5-2-6 2.3L6 4 4 5l4.5 6-3.5 1.3L3 11l-1 1z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  facebook: '<path d="M14 21v-8h3l.5-3.5H14V7.6c0-1 .3-1.7 1.8-1.7h1.8V2.8A24 24 0 0 0 15 2.7c-2.6 0-4.4 1.6-4.4 4.5v2.3H7.7V13h2.9v8z"/>',
  tiktok: '<path d="M16 3c.3 2.4 1.8 4 4 4.2v3.2c-1.5 0-2.8-.4-4-1.2v6.3A5.5 5.5 0 1 1 10.5 10v3.3a2.3 2.3 0 1 0 2.3 2.3V3z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7v.01M11 17v-4c0-1.7 1-3 2.6-3S16.5 11 16.5 13v4M11 10v7"/>'
};
const FILLED = new Set(['play', 'facebook', 'tiktok']);
function ic(name, cls) {
  const f = FILLED.has(name);
  return '<svg class="' + (cls || 'icon') + '" viewBox="0 0 24 24" fill="' + (f ? 'currentColor' : 'none') + '" stroke="' + (f ? 'none' : 'currentColor') + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
}

/* ---------- Supabase ---------- */
const SUPABASE_URL = 'https://oxsygfihkltwjobfymsq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94c3lnZmloa2x0d2pvYmZ5bXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NjI0MzMsImV4cCI6MjEwNDUzODQzM30.xZoX4mj5UfxuSCKeiUkTsuKdgQg63RjYVN4glguh9gI';
let sb = null;
try { if (window.supabase && window.supabase.createClient) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); }
catch (e) { console.warn('[Wimbo] Supabase indisponible', e); }

/* ---------- État global ---------- */
const S = {
  catalog: [], session: null, user: null, artist: null, client: null,
  role: LS.get('role', null), catalogReady: false,
  reviews: [], seatsLeft: null, isAdmin: false
};
const planOf = r => (r && PLAN_LIMITS[r.plan]) ? r.plan : 'decouverte';
const limitsOf = r => PLAN_LIMITS[planOf(r)];
const seatsLeft = () => (S.seatsLeft != null ? S.seatsLeft : CONFIG.FOUNDERS_SEATS);
/* Bandeau défilant « membres fondateurs » : offre éphémère, masqué pour les artistes inscrits,
   sur les pages d'inscription / d'espace, quand il n'y a plus de place, ou 3 jours après fermeture. */
function renderPromo() {
  const el = document.querySelector('#promo-bar'); if (!el) return;
  const path = location.pathname || '/';
  const n = seatsLeft();
  const closed = (LS.get('promo_closed', 0) || 0) > Date.now() - 3 * 864e5;
  if (n <= 0 || S.artist || closed || /^\/(inscription-artiste|espace-artiste|admin|mon-espace)/.test(path)) { el.innerHTML = ''; el.className = ''; return; }
  const offer = T('Offre de lancement : Premium offert à vie aux {n} premiers artistes', { n: CONFIG.FOUNDERS_SEATS });
  const msg = '<span class="pb-item">★ ' + esc(offer) + '</span><span class="pb-item">' + esc(T('Plus que {n} places', { n })) + '</span><span class="pb-item pb-cta">' + esc(T('Je m\'inscris gratuitement')) + ' →</span>';
  el.className = 'promo-bar';
  el.innerHTML = '<a class="pb-link" href="/inscription-artiste" aria-label="' + esc(offer) + '"><span class="pb-track">' + msg + msg + msg + msg + '</span></a><button type="button" class="pb-close" data-promo-close aria-label="Fermer">×</button>';
}
const DEMO_EMAIL = 'demo@wimbo.dev';
const isDemoAccount = () => !!(S.user && S.user.email === DEMO_EMAIL);

/* ---------- Catalogue ---------- */
const OLD_STYLE_MAP = { 'variete-fr': 'chanson-francaise', 'variete': 'chanson-francaise', 'bossa': 'bossa-nova', 'standards': 'jazz', 'electro': 'electro-house', 'folk': 'folk-acoustique', 'soul': 'soul-rnb', 'hip-hop': 'afrobeats', 'reggae': 'musique-du-monde' };
function mapStyles(arr) {
  const out = [];
  (arr || []).forEach(s => { const k = GENRES[s] ? s : OLD_STYLE_MAP[s]; if (k && !out.includes(k)) out.push(k); });
  return out;
}
function mapArtistRow(r) {
  const name = r.stage_name || [r.first_name, r.last_name].filter(Boolean).join(' ') || 'Artiste Wimbo';
  const photos = (r.photos || []).slice().sort((x, y) => (y.is_main ? 1 : 0) - (x.is_main ? 1 : 0) || (x.position || 0) - (y.position || 0)).map(p => p.public_url).filter(Boolean);
  const disc = (r.discipline || 'musicien').toLowerCase();
  const inst = (r.main_instrument || '').toLowerCase();
  const parsed = parseInstruments(r.main_instrument);
  const type = disc === 'dj' || (/\bdj\b/.test(inst) && parsed.slugs.length === 1) ? 'dj' : disc === 'groupe' ? 'groupe' : disc === 'ensemble' || disc === 'quatuor' ? 'ensemble' : disc === 'chanteur' ? 'chanteur' : 'musicien';
  const instruments = parsed.slugs.slice();
  if (type === 'chanteur' && !instruments.includes('chanteur')) instruments.push('chanteur');
  if (type === 'dj' && !instruments.includes('deejay')) instruments.push('deejay');
  const genres = mapStyles(r.styles);
  const videoUrls = (Array.isArray(r.video_urls) && r.video_urls.length ? r.video_urls : [r.portfolio_youtube]).filter(v => parseVideo(v));
  const instLabels = parsed.slugs.map(k => cL(k)).concat(parsed.extra);
  const radius = r.travel_radius_km || 50;
  return {
    slug: r.id, id: r.id, real: true, status: r.status, name,
    tagline: [instLabels.slice(0, 3).join(', '), genres.slice(0, 2).map(g => gL(g)).join(', ')].filter(Boolean).join(' · ') || tyL(type),
    type, formation: [type === 'groupe' ? 'Groupe' : type === 'ensemble' ? 'Quatuor' : 'Solo'], members: [],
    city: r.city || '', region: '', country: r.country && r.country !== 'OTHER' ? String(r.country).toUpperCase() : 'FR', extraInstruments: parsed.extra,
    zone: T('{city} et {n} km autour', { city: r.city || T('Ville principale'), n: radius }) + (r.willing_to_travel ? T(', déplacements possibles au-delà') : ''),
    serves: [r.city].filter(Boolean), genres, instruments,
    events: ['mariage', 'anniversaire', 'fete-privee', 'cocktail-diner', 'entreprise'],
    priceMin: Number(r.base_price_eur) > 0 ? Number(r.base_price_eur) : null, priceMax: null,
    plan: planOf(r), premium: planOf(r) === 'premium', pro: planOf(r) === 'pro', founder: !!r.is_founder,
    uploadedVideos: (r.videos || []).filter(v => v && v.public_url),
    verified: r.status === 'validated', languages: ['Français'],
    since: r.registered_at ? new Date(r.registered_at).getFullYear() : new Date().getFullYear(),
    bookings: 0, responseTime: '3 h',
    cover: photos[0] || null, avatar: photos[0] || null, gallery: photos, videos: [], videoUrls,
    description: r.bio || '', links: { instagram: r.portfolio_instagram, youtube: r.portfolio_youtube, website: r.portfolio_website },
    availability: r.availability || {}
  };
}
function demoCatalog() { return CONFIG.DEMO_MODE ? DEMO_ARTISTS.map(a => Object.assign({ id: a.slug, demo: true }, a)) : []; }
let catalogPromise = null;
function loadCatalog() {
  S.catalog = demoCatalog();
  if (!sb) { S.catalogReady = true; return Promise.resolve(); }
  const q = sb.from('artists_public').select('*').then(({ data, error }) => {
    if (error) { console.info('[Wimbo] Vue artists_public absente (exécuter le SQL v2) :', error.message); return; }
    const real = (data || []).map(mapArtistRow);
    S.catalog = real.concat(S.catalog.filter(a => a.demo));
  });
  catalogPromise = withTimeout(q, 5000, null).then(() => { S.catalogReady = true; });
  return catalogPromise;
}
const findArtist = slug => S.catalog.find(a => a.slug === slug);
/* Après une modification dans l'espace artiste, la fiche publique reflète tout de suite les changements */
function syncOwnCatalogEntry() {
  if (!S.artist) return;
  const i = S.catalog.findIndex(a => a.slug === S.artist.id);
  if (i >= 0) S.catalog[i] = mapArtistRow(S.artist);
}

function reviewsOf(slug) {
  const demo = CONFIG.DEMO_MODE ? DEMO_REVIEWS.filter(r => r.a === slug) : [];
  return demo.concat(S.reviews.filter(r => r.a === slug)).sort((a, b) => b.d.localeCompare(a.d));
}
function loadReviews() {
  if (!sb) return Promise.resolve();
  return withTimeout(sb.from('avis').select('*').eq('status', 'publie').order('created_at', { ascending: false }).limit(500), 6000, { data: null }).then(res => {
    S.reviews = ((res && res.data) || []).map(r => ({ a: r.artist_slug, n: r.author_name, e: r.event_type || '', d: String(r.created_at || '').slice(0, 10), s: [r.rating_music || 5, r.rating_comm || 5, r.rating_pro || 5, r.rating_kind || 5], t: r.comment, real: true }));
  });
}
function loadSeats() {
  if (!sb) return Promise.resolve();
  return withTimeout(sb.rpc('wimbo_founder_seats_left'), 5000, { data: null }).then(res => { if (res && typeof res.data === 'number') S.seatsLeft = res.data; });
}
function ratingOf(a) {
  const rv = reviewsOf(a.slug);
  if (!rv.length) return null;
  const avg = rv.reduce((s, r) => s + r.s.reduce((x, y) => x + y, 0) / r.s.length, 0) / rv.length;
  return { avg, count: rv.length };
}
function allReviews() { return (CONFIG.DEMO_MODE ? DEMO_REVIEWS.slice() : []).concat(S.reviews).sort((a, b) => b.d.localeCompare(a.d)); }

/* ---------- Favoris ---------- */
const favs = () => LS.get('favs', []);
const isFav = slug => favs().includes(slug);
function toggleFav(slug) {
  const f = favs(); const i = f.indexOf(slug);
  if (i >= 0) f.splice(i, 1); else f.push(slug);
  LS.set('favs', f);
  $$('[data-fav="' + slug + '"]').forEach(b => { b.classList.toggle('on', i < 0); b.setAttribute('aria-pressed', i < 0); });
  toast(i < 0 ? 'Ajouté à vos favoris' : 'Retiré de vos favoris');
  updateFavCount();
}
function favBtn(slug) {
  const on = isFav(slug);
  return '<button class="fav' + (on ? ' on' : '') + '" data-fav="' + esc(slug) + '" aria-pressed="' + on + '" aria-label="Ajouter aux favoris">' + ic('heart') + '</button>';
}
function updateFavCount() { const n = favs().length; $$('[data-fav-count]').forEach(e => { e.textContent = n ? n : ''; e.classList.toggle('hide', !n); }); }

/* ---------- Composants ---------- */
function stars(n, cls) {
  let h = '<span class="rv-stars ' + (cls || '') + '">';
  for (let i = 1; i <= 5; i++) h += ic('star', i <= Math.round(n) ? '' : 'off');
  return h + '</span>';
}
function cardA(a) {
  const r = ratingOf(a);
  const pic = (a.gallery && a.gallery[0]) || a.cover;
  return '<article class="card-a">' +
    '<a href="/artiste/' + esc(a.slug) + '" class="ph ph-tint" aria-label="' + esc(a.name) + '">' + (pic ? '<img loading="lazy" src="' + img(pic, 640, 540) + '" alt="' + esc(a.name) + '">' : '') + '</a>' +
    '<div class="badges">' + (a.premium ? '<span class="badge badge-prem">' + ic('star', 'icon-sm') + ' Premium</span>' : a.pro ? '<span class="badge badge-pro">Pro</span>' : '') + (a.verified ? '<span class="badge badge-ver">' + ic('check', 'icon-sm') + ' Vérifié</span>' : '') + '</div>' +
    favBtn(a.slug) +
    '<a href="/artiste/' + esc(a.slug) + '" class="bd"><h3>' + esc(a.name) + '</h3><div class="tg">' + esc(a.tagline) + '</div>' +
    '<div class="loc">' + ic('pin', 'icon-sm') + ' ' + esc(placeLabel(a) || '—') + '</div>' +
    '<div class="meta">' + (r ? '<span class="stars">' + ic('star') + ' ' + fmtRating(r.avg) + ' <span class="muted">(' + r.count + ')</span></span>' : '<span class="badge badge-soft">Nouveau</span>') +
    '<span class="pr">' + (a.priceMin ? esc(T('dès {price}', { price: fmtEUR(a.priceMin) })) : 'Sur devis') + '</span></div></a></article>';
}
function sectionHead(eyebrow, title, lead, right) {
  return '<div class="section-head"><div><span class="eyebrow">' + eyebrow + '</span><h2 class="h-lg">' + title + '</h2>' + (lead ? '<p class="lead">' + lead + '</p>' : '') + '</div>' + (right || '') + '</div>';
}
function carousel(id, items) {
  return '<div class="carousel"><div class="track" id="' + id + '">' + items.join('') + '</div></div>';
}
function carBtns(id) {
  return '<div class="car-btns"><button class="car-btn" data-car="prev" data-target="' + id + '" aria-label="Précédent">' + ic('chevL') + '</button><button class="car-btn" data-car="next" data-target="' + id + '" aria-label="Suivant">' + ic('chevR') + '</button></div>';
}
function rvCard(r) {
  const a = findArtist(r.a);
  const avg = r.s.reduce((x, y) => x + y, 0) / r.s.length;
  return '<div class="rv-card">' + stars(avg) + '<p class="q" data-notr>« ' + esc(r.t) + ' »</p><div class="rv-who"><span class="avatar-i">' + esc(initials(r.n)) + '</span><div><strong>' + esc(r.n) + '</strong><span>' + esc(r.e) + (a ? ' · <a class="link" href="/artiste/' + a.slug + '">' + esc(a.name) + '</a>' : '') + '</span></div></div></div>';
}
function blogCard(b) {
  return '<a class="bl-card" href="/blog/' + b.slug + '"><div class="ph"><img loading="lazy" src="' + img(b.cover, 700, 440) + '" alt=""></div><div class="bd"><span class="cat">' + esc(b.cat) + ' · ' + esc(b.read) + '</span><h3>' + esc(b.title) + '</h3><p>' + esc(b.excerpt) + '</p></div></a>';
}
function countBy(field, key) { return S.catalog.filter(a => (a[field] || []).includes(key)).length; }

/* ---------- Toast / modale / lightbox ---------- */
let toastTimer = null;
function toast(msg) {
  const t = $('#toast'); if (!t) return;
  t.innerHTML = ic('checkc') + '<span>' + esc(msg) + '</span>';
  t.classList.add('show'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
function openModal(html, opts) {
  const root = $('#modal-root');
  root.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><div class="modal-bg" data-close></div><div class="modal-box"' + (opts && opts.wide ? ' style="max-width:720px"' : '') + '><button class="modal-x" data-close aria-label="Fermer">' + ic('x') + '</button>' + html + '</div></div>';
  document.body.style.overflow = 'hidden';
  const f = root.querySelector('input, select, textarea, button.btn'); if (f && !(opts && opts.noFocus)) setTimeout(() => f.focus(), 50);
}
function closeModal() { $('#modal-root').innerHTML = ''; document.body.style.overflow = ''; }
let LB = { set: [], i: 0 };
function openLightbox(set, i) {
  LB = { set, i };
  const root = $('#modal-root');
  root.innerHTML = '<div class="lightbox" data-lb><button class="lb-x" data-close aria-label="Fermer">' + ic('x') + '</button><button class="lb-p" data-lb-move="-1" aria-label="Précédente">' + ic('chevL') + '</button><img id="lb-img" alt=""><button class="lb-n" data-lb-move="1" aria-label="Suivante">' + ic('chevR') + '</button></div>';
  document.body.style.overflow = 'hidden';
  lbShow();
}
function lbShow() { const im = $('#lb-img'); if (im) im.src = img(LB.set[LB.i], 1600); }
function lbMove(d) { LB.i = (LB.i + d + LB.set.length) % LB.set.length; lbShow(); }

/* ---------- Header & footer ---------- */
function megaLinks(obj, base) {
  const lab = base === 'genres' ? gL : base === 'evenements' ? eL : base === 'instruments' ? iL : (k => obj[k]);
  return Object.keys(obj).map(k => '<a href="/' + base + '/' + k + '">' + esc(lab(k)) + '</a>').join('');
}
function instrumentsWithArtists() {
  const o = {}; Object.keys(INSTRUMENTS).forEach(k => { if (countBy('instruments', k) > 0) o[k] = INSTRUMENTS[k]; });
  return Object.keys(o).length ? o : INSTRUMENTS;
}
function renderHeader() {
  const h = $('#site-header');
  const u = S.user;
  const name = S.artist ? (S.artist.stage_name || S.artist.first_name) : S.client ? S.client.first_name : (u && u.user_metadata && u.user_metadata.first_name) || (u ? u.email.split('@')[0] : '');
  const right = u ?
    '<div class="nav-item" style="position:relative"><button class="user-btn" data-usermenu aria-haspopup="true">' + esc(name) + ' <span class="avatar-i">' + esc(initials(name)) + '</span></button></div>' :
    '<a class="nav-link hide-m" href="/je-suis-artiste">' + ic('mic', 'icon-sm') + ' Je suis artiste</a><a class="btn btn-primary btn-sm" href="/connexion">Se connecter</a>';
  h.innerHTML = '<div class="wrap">' +
    '<a class="logo" href="/" aria-label="Wimbo, accueil"><img src="' + LOGO_LIGHT + '" alt="Wimbo"></a>' +
    '<nav class="nav" aria-label="Navigation principale">' +
      '<div class="nav-item"><button class="nav-link">Genres ' + ic('chevD') + '</button><div class="mega"><div class="mega-grid">' + megaLinks(GENRES, 'genres') + '</div><div class="mega-foot"><a class="link" href="/genres">Tous les genres</a></div></div></div>' +
      '<div class="nav-item"><button class="nav-link">Événements ' + ic('chevD') + '</button><div class="mega"><div class="mega-grid">' + megaLinks(EVENTS, 'evenements') + '</div><div class="mega-foot"><a class="link" href="/evenements">Tous les événements</a></div></div></div>' +
      '<div class="nav-item"><button class="nav-link">Instruments ' + ic('chevD') + '</button><div class="mega" style="min-width:440px"><div class="mega-grid" style="grid-template-columns:1fr 1fr">' + megaLinks(instrumentsWithArtists(), 'instruments') + '</div><div class="mega-foot"><a class="link" href="/instruments">Tous les instruments</a></div></div></div>' +
      '<a class="nav-link" href="/comment-ca-marche">Comment ça marche</a>' +
      '<a class="nav-link" href="/blog">Blog</a>' +
    '</nav>' +
    '<div class="header-right">' +
      '<span class="hide-m">' + langSwitch() + '</span>' +
      '<a class="nav-link hide-m" href="/favoris" aria-label="Favoris" style="position:relative">' + ic('heart') + '<span data-fav-count class="badge badge-prem hide" style="position:absolute;top:0;right:0;padding:1px 6px;font-size:10px"></span></a>' +
      right +
    '</div>' +
    '<button class="burger" data-drawer aria-label="Menu">' + ic('menu') + '</button>' +
  '</div>';
  renderDrawer();
  updateFavCount();
}
function userMenuHTML() {
  const u = S.user; if (!u) return '';
  const both = S.artist && S.client;
  return '<div class="dropdown" id="usermenu">' +
    '<div class="dd-head"><strong>' + esc(S.artist ? (S.artist.stage_name || S.artist.first_name) : (S.client ? S.client.first_name + ' ' + (S.client.last_name || '') : u.email)) + '</strong><span class="small muted">' + esc(u.email) + '</span></div>' +
    (S.artist ? '<a href="/espace-artiste">' + ic('music') + ' Espace artiste</a>' : '') +
    (S.client ? '<a href="/mon-espace">' + ic('user') + ' Mon espace organisateur</a>' : '') +
    (!S.client && S.artist ? '<a href="/mon-espace">' + ic('inbox') + ' Mes demandes envoyées (organisateur)</a>' : '') +
    (S.isAdmin ? '<a href="/admin">' + ic('shield') + ' Administration</a>' : '') +
    '<a href="/favoris">' + ic('heart') + ' Mes favoris</a>' +
    (both ? '<button data-role="' + (S.role === 'artist' ? 'user' : 'artist') + '">' + ic('swap') + ' ' + (S.role === 'artist' ? 'Passer en mode organisateur' : 'Passer en mode artiste') + '</button>' : '') +
    (!S.artist ? '<a href="/inscription-artiste">' + ic('mic') + ' Créer mon profil artiste</a>' : '') +
    '<button data-logout>' + ic('logout') + ' Se déconnecter</button></div>';
}
function renderDrawer() {
  const d = $('#drawer');
  const u = S.user;
  d.innerHTML = '<div class="drawer-bg" data-drawer-close></div><div class="drawer-panel">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><a class="logo" href="/"><img src="' + LOGO_LIGHT + '" alt="Wimbo"></a><button class="burger" style="display:block;margin:0" data-drawer-close aria-label="Fermer">' + ic('x') + '</button></div>' +
    '<a class="dl" href="/recherche">Trouver un artiste</a>' +
    '<details><summary>Genres</summary>' + megaLinks(GENRES, 'genres') + '</details>' +
    '<details><summary>Événements</summary>' + megaLinks(EVENTS, 'evenements') + '</details>' +
    '<details><summary>Instruments</summary>' + megaLinks(INSTRUMENTS, 'instruments') + '</details>' +
    '<a class="dl" href="/comment-ca-marche">Comment ça marche</a>' +
    '<a class="dl" href="/je-suis-artiste">Je suis artiste</a>' +
    '<a class="dl" href="/blog">Blog</a>' +
    '<a class="dl" href="/favoris">Mes favoris</a>' + langRow() +
    (u ? (S.artist ? '<a class="dl" href="/espace-artiste">Espace artiste</a>' : '') + '<a class="dl" href="/mon-espace">Mon espace</a><button class="btn btn-ghost" style="margin-top:18px;color:var(--ivoire)" data-logout>Se déconnecter</button>' :
      '<div style="display:grid;gap:10px;margin-top:20px"><a class="btn btn-primary" href="/inscription">Créer un compte</a><a class="btn btn-ghost" style="color:var(--ivoire)" href="/connexion">Se connecter</a></div>') +
  '</div>';
}
function renderFooter() {
  const f = $('#site-footer');
  f.innerHTML = '<div class="wrap">' +
    '<div class="foot-top">' +
      '<div class="foot-brand"><img src="' + LOGO_LIGHT + '" alt="Wimbo"><div class="tagline">La musique qui rapproche, les émotions qui restent</div><p>Musiciens, chanteurs, groupes et DJ vérifiés pour vos événements.</p>' +
        '<div class="socials"><a href="' + CONFIG.INSTAGRAM + '" target="_blank" rel="noopener" aria-label="Instagram">' + ic('instagram') + '</a><a href="' + CONFIG.FACEBOOK + '" target="_blank" rel="noopener" aria-label="Facebook">' + ic('facebook') + '</a><a href="' + CONFIG.TIKTOK + '" target="_blank" rel="noopener" aria-label="TikTok">' + ic('tiktok') + '</a><a href="' + CONFIG.LINKEDIN + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ic('linkedin') + '</a></div></div>' +
      '<div><h4>Artistes</h4><ul><li><a href="/je-suis-artiste">Comment ça marche</a></li><li><a href="/abonnements">Abonnements</a></li><li><a href="/inscription-artiste">Créer mon profil</a></li><li><a href="/connexion">Connexion artistes</a></li><li><a href="/faq?t=artistes">FAQ artistes</a></li></ul></div>' +
      '<div><h4>Organisateurs</h4><ul><li><a href="/genres">Genres</a></li><li><a href="/evenements">Événements</a></li><li><a href="/instruments">Instruments</a></li><li><a href="/avis">Avis clients</a></li><li><a href="/faq">FAQ organisateurs</a></li></ul></div>' +
      '<div><h4>Le monde de Wimbo</h4><ul><li><a href="/blog">Blog</a></li><li><a href="/comment-ca-marche">Le service GUSO</a></li><li><a href="/contact">Contact</a></li><li><a href="/mentions-legales">Mentions légales</a></li><li><a href="/cgv">CGV</a></li><li><a href="/confidentialite">Confidentialité</a></li></ul></div>' +
    '</div>' +
    '<div class="foot-countries">' + langRow() + '</div>' +
    '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' Wimbo · ' + esc(CONFIG.COMPANY) + ' · Tous droits réservés</span><span class="version">' + esc(T('Version {v} du {date}', { v: CONFIG.VERSION, date: fmtDate(BUILD_DATE, { day: '2-digit', month: '2-digit', year: 'numeric' }) })) + '</span>' +
      (CONFIG.DEMO_MODE && CONFIG.DEMO_NOTICE ? '<span>Version de présentation : les profils et avis affichés sont des exemples.</span>' : '') + '</div>' +
  '</div>';
}

/* ---------- Formulaire de recherche (partagé) ---------- */
function whatOptions(sel) {
  const o = (v, l) => '<option value="' + v + '"' + (sel === v ? ' selected' : '') + '>' + esc(l) + '</option>';
  return o('', 'Tous les artistes') +
    '<optgroup label="' + esc(T('Type d\'artiste')) + '">' + Object.keys(ARTIST_TYPES).map(k => o('type:' + k, tyL(k))).join('') + '</optgroup>' +
    '<optgroup label="' + esc(T('Genres')) + '">' + Object.keys(GENRES).map(k => o('genre:' + k, gL(k))).join('') + '</optgroup>' +
    '<optgroup label="' + esc(T('Instruments')) + '">' + Object.keys(INSTRUMENTS).map(k => o('instrument:' + k, iL(k))).join('') + '</optgroup>';
}
function eventOptions(sel, emptyLabel) {
  return '<option value="">' + esc(emptyLabel || 'Tous les événements') + '</option>' + Object.keys(EVENTS).map(k => '<option value="' + k + '"' + (sel === k ? ' selected' : '') + '>' + esc(eL(k)) + '</option>').join('');
}
function searchBar(f) {
  f = f || {};
  const what = f.type && f.type.length === 1 ? 'type:' + f.type[0] : f.genre && f.genre.length === 1 ? 'genre:' + f.genre[0] : f.instrument && f.instrument.length === 1 ? 'instrument:' + f.instrument[0] : '';
  return '<form class="searchbar" data-form="search" role="search">' +
    '<div class="sf"><label for="sb-what">Quel artiste ?</label><select id="sb-what" name="what">' + whatOptions(what) + '</select></div>' +
    '<div class="sf"><label for="sb-ev">Pour quel événement ?</label><select id="sb-ev" name="event">' + eventOptions(f.event || '') + '</select></div>' +
    '<div class="sf"><label for="sb-ville">Où ?</label>' + cityField({ name: 'ville', id: 'sb-ville', value: f.ville || '', placeholder: 'Ville, région…' }) + '</div>' +
    '<button class="btn btn-primary" type="submit">' + ic('search') + ' Chercher</button>' +
    '</form>';
}
function submitSearch(form) {
  const fd = new FormData(form);
  const p = new URLSearchParams();
  const what = fd.get('what') || '';
  if (what) { const [k, v] = what.split(':'); p.set(k, v); }
  if (fd.get('event')) p.set('event', fd.get('event'));
  if ((fd.get('ville') || '').trim()) p.set('ville', fd.get('ville').trim());
  location.hash = '#/recherche' + (p.toString() ? '?' + p.toString() : '');
}

/* =====================================================================
   PAGE : ACCUEIL
   ===================================================================== */
function pHome() {
  const featured = S.catalog.slice().sort((a, b) => (b.premium - a.premium) || ((ratingOf(b) || { avg: 0 }).avg - (ratingOf(a) || { avg: 0 }).avg)).slice(0, 10);
  const evKeys = ['mariage', 'anniversaire', 'fete-privee', 'entreprise', 'cocktail-diner', 'evenement-diaspora'];
  const reviews = allReviews().slice(0, 8);
  const html =
  '<section class="hero">' +
    '<div class="hero-bg" style="background-image:url(\'' + U(P.crowdGuitarGold, 2000) + '\')"></div><div class="hero-shape"></div>' +
    '<div class="wrap hero-inner">' +
      '<div class="hero-tabs" role="tablist"><button class="on" data-htab="find" role="tab">Trouver un artiste</button><button data-htab="artist" role="tab">Je suis artiste</button></div>' +
      '<div data-hpanel="find">' +
        '<h1 class="h-xl h-slogan">La musique qui rapproche,<span class="accent">les émotions qui restent</span></h1>' +
        '<p class="sub">Trouvez l\'artiste idéal pour votre événement</p>' +
        '<p class="lead">Musiciens, chanteurs, groupes et DJ vérifiés. Devis en 2 à 3 heures, déclaration GUSO et paiement sécurisé inclus.</p>' +
        searchBar() +
        '<div class="quick"><span>Populaires :</span><a class="chip" href="/evenements/mariage">Mariage</a><a class="chip" href="/evenements/anniversaire">Anniversaire</a><a class="chip" href="/genres/jazz">Jazz</a><a class="chip" href="/instruments/deejay">DJ</a><a class="chip" href="/evenements/evenement-diaspora">Fête au pays</a></div>' +
      '</div>' +
      '<div data-hpanel="artist" class="artist-tab-panel hide">' +
        '<h1 class="h-xl">Votre art,<span class="accent">leurs émotions</span></h1>' +
        '<p class="sub">On s\'occupe du reste</p>' +
        '<ul><li>' + ic('checkc') + ' Des demandes qualifiées de particuliers et d\'entreprises, sans démarchage</li><li>' + ic('checkc') + ' Paiement garanti : l\'acompte est sécurisé dès la réservation</li><li>' + ic('checkc') + ' Les formalités GUSO préparées pour vos clients</li><li>' + ic('checkc') + ' ' + CONFIG.FOUNDERS_SEATS + ' places de membres fondateurs : badge Premium offert à vie</li></ul>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-primary btn-lg" href="/inscription-artiste">Créer mon profil gratuitement</a><a class="btn btn-ghost btn-lg" href="/je-suis-artiste">En savoir plus</a></div>' +
      '</div>' +
    '</div>' +
  '</section>' +
  '<section class="promises"><div class="wrap">' +
    '<div class="promise"><div class="num">100 %</div><div class="lbl">Artistes vérifiés</div></div>' +
    '<div class="promise"><div class="num">2-3 h</div><div class="lbl">Pour un devis</div></div>' +
    '<div class="promise"><div class="num">0</div><div class="lbl">Paperasse GUSO</div></div>' +
    '<div class="promise"><div class="num">30 %</div><div class="lbl">D\'acompte sécurisé</div></div>' +
  '</div></section>' +
  '<section class="section-sm"><div class="wrap"><p class="intro-line">Wimbo réunit des artistes vérifiés pour les mariages, fêtes privées, anniversaires et événements d\'entreprise, avec l\'administratif en moins.</p></div></section>' +
  '<section class="section" style="padding-top:20px"><div class="wrap">' +
    sectionHead('En vedette', 'Découvrez les profils à l\'affiche', null, carBtns('feat')) +
    carousel('feat', featured.map(cardA)) +
    '<div class="center" style="margin-top:20px"><a class="btn btn-dark" href="/recherche">Voir tous les artistes ' + ic('arrowR') + '</a></div>' +
  '</div></section>' +
  '<section class="section ivory-2"><div class="wrap">' +
    '<div class="center" style="margin-bottom:46px"><span class="eyebrow">Comment ça marche</span><h2 class="h-lg">Réserver un artiste n\'a jamais été aussi simple</h2></div>' +
    '<div class="steps">' +
      '<div class="step"><span class="st-n">Étape 1</span><div class="st-ic">' + ic('search') + '</div><h3>Cherchez et comparez</h3><p>Filtrez par style, événement, ville et budget. Photos, vidéos et avis vérifiés vous aident à choisir.</p></div>' +
      '<div class="step"><span class="st-n">Étape 2</span><div class="st-ic">' + ic('msg') + '</div><h3>Demandez un devis</h3><p>Décrivez votre événement en 2 minutes. L\'artiste vous répond sous 2 à 3 heures avec un devis détaillé.</p></div>' +
      '<div class="step"><span class="st-n">Étape 3</span><div class="st-ic">' + ic('shield') + '</div><h3>Réservez sereinement</h3><p>Acompte de 30 % sécurisé, solde après la prestation. Nous préparons la déclaration GUSO pour vous.</p></div>' +
    '</div>' +
    '<div class="center" style="margin-top:40px"><a class="btn btn-primary btn-lg" href="/recherche">' + ic('search') + ' Chercher un artiste</a></div>' +
  '</div></section>' +
  '<section class="section"><div class="wrap">' +
    sectionHead('Événements', 'La bonne musique pour chaque moment', null, '<a class="link" href="/evenements">Découvrez tous les événements</a>') +
    '<div class="ev-grid">' + evKeys.map(k => '<a class="ev-card" href="/evenements/' + k + '"><img loading="lazy" src="' + U(EVENTS[k].photo, 800, 700) + '" alt=""><div class="ev-bd"><h3>' + esc(T('Musique pour {event}', { event: eL(k).toLowerCase() })) + '</h3><p>' + esc(eT(k)) + '</p><span class="more">Voir les artistes ' + ic('arrowR', 'icon-sm') + '</span></div></a>').join('') + '</div>' +
  '</div></section>' +
  '<section class="section dark why on-dark"><div class="shape-a"></div><div class="shape-b"></div><div class="wrap" style="position:relative">' +
    '<div style="margin-bottom:46px;max-width:720px"><span class="eyebrow">Pourquoi Wimbo</span><h2 class="h-lg">Plus qu\'un annuaire : un vrai service de réservation</h2></div>' +
    '<div class="why-grid">' +
      '<div class="why-item"><div class="wi">' + ic('doc') + '</div><h3>GUSO inclus</h3><p>La déclaration obligatoire est préparée pour vous et les cotisations sont intégrées au devis. Zéro oubli, zéro surprise.</p></div>' +
      '<div class="why-item"><div class="wi">' + ic('lock') + '</div><h3>Paiement sécurisé</h3><p>Votre acompte est sécurisé, le solde n\'est versé à l\'artiste qu\'après la prestation.</p></div>' +
      '<div class="why-item"><div class="wi">' + ic('shield') + '</div><h3>Artistes vérifiés</h3><p>Identité, statut et extraits contrôlés par notre équipe avant toute mise en ligne.</p></div>' +
      '<div class="why-item"><div class="wi">' + ic('plane') + '</div><h3>Ici et au pays</h3><p>Près de chez vous ou à l\'autre bout du monde : réservez un artiste local même à distance, pour les fêtes de la diaspora.</p></div>' +
    '</div></div></section>' +
  (reviews.length ? '<section class="section"><div class="wrap">' +
    sectionHead('Avis clients', 'Ils ont réservé sur Wimbo', null, carBtns('rv')) +
    carousel('rv', reviews.map(rvCard)) +
    '<div class="center" style="margin-top:16px"><a class="link" href="/avis">Lire tous les avis</a></div>' +
  '</div></section>' : '') +
  '<section class="cta-band"><div class="circle"></div><div class="wrap">' +
    '<div><span class="eyebrow" style="color:var(--nuit)">Vous êtes artiste ?</span><h2>Votre art, leurs émotions</h2><p>Profil gratuit et demandes qualifiées. Nous gérons l\'administratif, vous gérez la scène.</p></div>' +
    '<div class="ctas"><a class="btn btn-dark btn-lg" href="/inscription-artiste">Créer mon profil</a><a class="btn btn-ghost btn-lg" href="/je-suis-artiste">Comment ça marche</a></div>' +
  '</div></section>' +
  '<section class="section ivory-2"><div class="wrap">' +
    sectionHead('Nos articles', 'Suivez nos conseils', null, '<a class="link" href="/blog">Accéder au blog</a>') +
    '<div class="blog-grid">' + blogList().slice(0, 3).map(blogCard).join('') + '</div>' +
  '</div></section>' +
  offerIndex();
  return { title: 'Wimbo · Musiciens, chanteurs, groupes et DJ pour vos événements', html };
}
function offerIndex() {
  const col = (title, obj, base, lbl) => '<div><h3>' + title + '</h3><ul>' + Object.keys(obj).map(k => '<li><a href="/' + base + '/' + k + '">' + esc(lbl ? lbl(obj[k]) : obj[k]) + '</a></li>').join('') + '</ul></div>';
  return '<section class="section"><div class="wrap"><span class="eyebrow">Notre offre musicale</span><h2 class="h-md" style="margin-bottom:34px">Trouvez par genre, événement ou instrument</h2><div class="offer-cols">' +
    col('Genres', GENRES, 'genres') + col('Événements', EVENTS, 'evenements', e => e.label) + col('Instruments', INSTRUMENTS, 'instruments') + '</div></div></section>';
}

/* =====================================================================
   PAGE : RECHERCHE
   ===================================================================== */
function readFilters(q) {
  return {
    q: q.get('q') || '', type: list(q.get('type')), genre: list(q.get('genre')), event: q.get('event') || '',
    instrument: list(q.get('instrument')), ville: q.get('ville') || '', pays: q.get('pays') || '',
    budget: +q.get('budget') || 0, formation: list(q.get('formation')), note: +q.get('note') || 0,
    premium: q.get('premium') === '1', tri: q.get('tri') || 'pertinence'
  };
}
function filtersToQuery(f) {
  const p = new URLSearchParams();
  if (f.q) p.set('q', f.q);
  ['type', 'genre', 'instrument'].forEach(k => { if (f[k].length) p.set(k, f[k].join(',')); });
  ['event', 'ville', 'pays'].forEach(k => { if (f[k]) p.set(k, f[k]); });
  if (f.budget) p.set('budget', f.budget);
  if (f.note) p.set('note', f.note);
  if (f.premium) p.set('premium', '1');
  if (f.tri && f.tri !== 'pertinence') p.set('tri', f.tri);
  return p.toString();
}
function matchArtist(a, f) {
  if (f.q) {
    const hay = norm([a.name, a.tagline, a.city, a.region, a.zone].concat((a.genres || []).map(g => GENRES[g] + ' ' + gL(g)), (a.instruments || []).map(i => INSTRUMENTS[i] + ' ' + iL(i)), (a.events || []).map(e => EVENTS[e] && (EVENTS[e].label + ' ' + eL(e)))).join(' '));
    if (!norm(f.q).split(/\s+/).every(w => hay.includes(w))) return false;
  }
  if (f.type.length && !f.type.includes(a.type)) return false;
  if (f.genre.length && !f.genre.some(g => (a.genres || []).includes(g))) return false;
  if (f.event && !(a.events || []).includes(f.event)) return false;
  if (f.instrument.length && !f.instrument.some(i => (a.instruments || []).includes(i))) return false;
  if (f.ville) {
    const v = norm(f.ville);
    const places = [a.city, a.region, a.zone, countryName(a.country)].concat(a.serves || []).filter(Boolean).map(norm);
    if (!places.some(p => p.includes(v) || (p.length > 3 && v.includes(p)))) return false;
  }
  if (f.pays && a.country !== f.pays) return false;
  if (f.budget && a.priceMin && a.priceMin > f.budget) return false;
  if (f.note) { const r = ratingOf(a); if (!r || r.avg < f.note) return false; }
  if (f.premium && !a.premium) return false;
  return true;
}
function sortArtists(arr, tri) {
  const rt = a => (ratingOf(a) || { avg: 0 }).avg;
  const pr = a => a.priceMin || 99999;
  const s = arr.slice();
  if (tri === 'prix-asc') s.sort((a, b) => pr(a) - pr(b));
  else if (tri === 'prix-desc') s.sort((a, b) => (b.priceMin || 0) - (a.priceMin || 0));
  else if (tri === 'note') s.sort((a, b) => rt(b) - rt(a));
  else { const rank = a => (a.premium ? 2 : a.pro ? 1 : 0); s.sort((a, b) => (rank(b) - rank(a)) || (rt(b) - rt(a)) || ((b.bookings || 0) - (a.bookings || 0))); }
  return s;
}
let SEARCH_F = null;
function catalogCountries(extra) {
  const set = new Set(S.catalog.map(a => a.country).filter(Boolean)); if (extra) set.add(extra);
  return Array.from(set).sort((x, y) => countryName(x).localeCompare(countryName(y), 'fr'));
}
function pSearch(q) {
  const f = readFilters(q); SEARCH_F = f;
  const ck = (name, val, label, on, cnt) => '<label class="ck"><input type="checkbox" name="' + name + '" value="' + val + '"' + (on ? ' checked' : '') + '> ' + esc(label) + (cnt != null ? '<span class="cnt">' + cnt + '</span>' : '') + '</label>';
  const genreKeys = Object.keys(GENRES).filter(g => countBy('genres', g) > 0 || f.genre.includes(g));
  const instKeys = Object.keys(INSTRUMENTS).filter(i => countBy('instruments', i) > 0 || f.instrument.includes(i));
  const html =
  '<section class="search-top"><div class="wrap">' + searchBar(f) + '</div></section>' +
  '<div class="wrap results-layout">' +
    '<aside class="filters" id="filters"><form id="ff" data-form="filters" onsubmit="return false">' +
      '<div class="fhead"><strong>Filtres</strong><span style="display:flex;gap:10px;align-items:center"><button type="button" class="more-btn" data-reset-filters>Tout effacer</button><button type="button" class="car-btn f-close" style="display:none;width:38px;height:38px" data-toggle-filters aria-label="Fermer">' + ic('x') + '</button></span></div>' +
      '<h4>Mot-clé</h4><input type="text" name="q" value="' + esc(f.q) + '" placeholder="Nom, style, ville…">' +
      '<h4>Type d\'artiste</h4>' + Object.keys(ARTIST_TYPES).map(k => ck('type', k, tyL(k), f.type.includes(k), S.catalog.filter(a => a.type === k).length)).join('') +
      '<h4>Événement</h4><select name="event">' + eventOptions(f.event) + '</select>' +
      '<h4>Ville ou région</h4>' + cityField({ name: 'ville', value: f.ville, placeholder: 'Ex. : Lyon, Lisbonne…' }) +
      '<h4>Pays</h4><select name="pays"><option value="">Tous les pays</option>' + catalogCountries(f.pays).map(c => '<option value="' + c + '"' + (f.pays === c ? ' selected' : '') + '>' + esc(countryName(c)) + '</option>').join('') + '</select>' +
      '<h4>Budget maximum</h4><input type="range" name="budget" min="300" max="3500" step="100" value="' + (f.budget || 3500) + '"><div class="small muted" id="budget-out">' + (f.budget ? 'Jusqu\'à ' + fmtEUR(f.budget) : 'Tous les budgets') + '</div>' +
      '<h4>Genres</h4><div id="genre-list">' + genreKeys.map((g, i) => '<div' + (i > 7 && !f.genre.includes(g) ? ' class="more-g hide"' : '') + '>' + ck('genre', g, gL(g), f.genre.includes(g), countBy('genres', g)) + '</div>').join('') + '</div>' + (genreKeys.length > 8 ? '<button type="button" class="more-btn" data-more-genres>Voir plus de genres</button>' : '') +
      '<h4>Instruments</h4>' + instKeys.map(i => ck('instrument', i, iL(i), f.instrument.includes(i), countBy('instruments', i))).join('') +
      '<h4>Note minimum</h4>' + [[0, 'Toutes les notes'], [4.5, '4,5 et plus'], [4.8, '4,8 et plus']].map(n => '<label class="ck"><input type="radio" name="note" value="' + n[0] + '"' + ((f.note || 0) == n[0] ? ' checked' : '') + '> ' + n[1] + '</label>').join('') +
      '<h4>Options</h4>' + ck('premium', '1', 'Artistes Premium uniquement', f.premium) +
      '<div class="f-apply" style="display:none"><button type="button" class="btn btn-primary btn-block" data-toggle-filters>Voir les résultats</button></div>' +
    '</form></aside>' +
    '<div id="results"></div>' +
  '</div>';
  return { title: 'Rechercher un artiste · Wimbo', html, after: () => renderResults() };
}
function collectFilters() {
  const form = $('#ff'); if (!form) return SEARCH_F;
  const fd = new FormData(form);
  const budget = +fd.get('budget');
  return {
    q: (fd.get('q') || '').trim(), type: fd.getAll('type'), genre: fd.getAll('genre'), event: fd.get('event') || '',
    instrument: fd.getAll('instrument'), ville: (fd.get('ville') || '').trim(), pays: fd.get('pays') || '',
    budget: budget && budget < 3500 ? budget : 0, formation: fd.getAll('formation'), note: +fd.get('note') || 0,
    premium: fd.get('premium') === '1', tri: (SEARCH_F && SEARCH_F.tri) || 'pertinence'
  };
}
function applyFilters() {
  SEARCH_F = collectFilters();
  const qs = filtersToQuery(SEARCH_F);
  history.replaceState(null, '', '/recherche' + (qs ? '?' + qs : ''));
  const bo = $('#budget-out'); if (bo) bo.textContent = SEARCH_F.budget ? 'Jusqu\'à ' + fmtEUR(SEARCH_F.budget) : 'Tous les budgets';
  renderResults();
}
function activeChips(f) {
  const chips = [];
  const add = (label, key, val) => chips.push('<span class="chip on" data-rm-filter="' + key + '" data-rm-val="' + esc(val || '') + '">' + esc(label) + ' ' + ic('x', 'icon-sm') + '</span>');
  if (f.q) add('« ' + f.q + ' »', 'q');
  f.type.forEach(t => add(tyL(t), 'type', t));
  f.genre.forEach(g => add(gL(g), 'genre', g));
  f.instrument.forEach(i => add(iL(i), 'instrument', i));
  if (f.event) add(eL(f.event), 'event');
  if (f.ville) add(f.ville, 'ville');
  if (f.pays) add(countryName(f.pays), 'pays');
  if (f.budget) add('≤ ' + fmtEUR(f.budget), 'budget');
  if (f.note) add('★ ' + String(f.note).replace('.', ',') + '+', 'note');
  if (f.premium) add('Premium', 'premium');
  return chips.join('');
}
function renderResults() {
  const box = $('#results'); if (!box) return;
  const f = SEARCH_F;
  const res = sortArtists(S.catalog.filter(a => matchArtist(a, f)), f.tri);
  const where = f.ville ? ' ' + T('à {place}', { place: f.ville }) : f.pays ? ' · ' + countryName(f.pays) : '';
  const what = f.event && EVENTS[f.event] ? ' ' + T('pour {event}', { event: eL(f.event).toLowerCase() }) : '';
  box.innerHTML =
    '<div class="res-head"><h1>' + esc(plural(res.length, '{n} artiste', '{n} artistes') + what + where) + '</h1>' +
      '<div class="res-tools"><button class="btn btn-dark btn-sm filters-toggle" data-toggle-filters>' + ic('filter', 'icon-sm') + ' Filtres</button>' +
      '<select data-sort aria-label="Trier">' + [['pertinence', 'Recommandés'], ['note', 'Mieux notés'], ['prix-asc', 'Prix croissant'], ['prix-desc', 'Prix décroissant']].map(o => '<option value="' + o[0] + '"' + (f.tri === o[0] ? ' selected' : '') + '>Tri : ' + o[1] + '</option>').join('') + '</select></div></div>' +
    '<div class="active-filters">' + activeChips(f) + '</div>' +
    (res.length ? '<div class="grid-cards">' + res.map(cardA).join('') + '</div>' :
      '<div class="empty"><div class="em-ic">' + ic('search') + '</div><h2 class="h-md">Aucun artiste ne correspond… pour l\'instant</h2><p class="muted" style="max-width:480px;margin:10px auto 22px">Essayez d\'élargir vos critères, ou confiez-nous votre recherche : nous trouvons l\'artiste qu\'il vous faut sous 24 h.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn btn-ghost" data-reset-filters>Effacer les filtres</button><a class="btn btn-primary" href="/contact?sujet=recherche">Demande personnalisée</a></div></div>');
}
function removeFilter(key, val) {
  const f = SEARCH_F;
  if (Array.isArray(f[key])) f[key] = f[key].filter(x => x !== val);
  else f[key] = key === 'premium' ? false : (key === 'budget' || key === 'note') ? 0 : '';
  location.hash = '#/recherche' + (filtersToQuery(f) ? '?' + filtersToQuery(f) : '');
}

/* =====================================================================
   PAGE : FICHE ARTISTE
   ===================================================================== */
function ownArtistPreview(slug) {
  if (S.artist && S.artist.id === slug) return mapArtistRow(S.artist);
  return null;
}
async function pArtist(slug) {
  let a = ownArtistPreview(slug) || findArtist(slug);
  if (!a && catalogPromise && !S.catalogReady) { await catalogPromise; a = findArtist(slug); }
  let adminView = false;
  if (!a && S.isAdmin && sb) {
    const res = await withTimeout(sb.from('artists').select('*, photos:artist_photos(*), videos:artist_videos(*)').eq('id', slug).maybeSingle(), 8000, { data: null });
    if (res && res.data) { a = mapArtistRow(res.data); adminView = true; }
  }
  if (!a) return p404('Ce profil n\'existe pas ou n\'est plus disponible.');
  const rv = reviewsOf(a.slug);
  const r = ratingOf(a);
  const crit = ['Qualité musicale', 'Communication', 'Professionnalisme', 'Amabilité'];
  const critAvg = crit.map((c, i) => rv.length ? rv.reduce((s, x) => s + x.s[i], 0) / rv.length : 0);
  const firstEv = (a.events || [])[0];
  const similar = S.catalog.filter(x => x.slug !== a.slug && (x.genres || []).some(g => (a.genres || []).includes(g) || x.type === a.type)).slice(0, 4);
  const pending = a.real && a.status !== 'validated' && !adminView;
  const gal = a.gallery && a.gallery.length ? a.gallery : [];
  const price = a.priceMin ? (a.priceMax ? fmtEUR(a.priceMin) + ' – ' + fmtEUR(a.priceMax) : T('À partir de {price}', { price: fmtEUR(a.priceMin) })) : 'Sur devis';
  const html =
  (pending ? '<div style="background:#FFF1DC;color:#6E4200;padding:12px 0;font-size:14.5px"><div class="wrap">' + ic('eye', 'icon-sm') + ' Aperçu de votre profil : il sera visible publiquement après validation par l\'équipe Wimbo (sous 48 h).</div></div>' : '') +
  (adminView ? '<div style="background:#E3F3EA;color:#145A38;padding:12px 0;font-size:14.5px"><div class="wrap">' + ic('shield', 'icon-sm') + ' Aperçu administrateur · statut : <strong>' + esc(a.status) + '</strong> · <a class="link" href="/admin">Retour à l\'administration</a></div></div>' : '') +
  '<div class="pf-cover">' + (a.cover ? '<img src="' + img(a.cover, 2000, 760) + '" alt="">' : '') + '</div>' +
  '<div class="wrap">' +
    '<div class="pf-head">' +
      '<div class="pf-avatar">' + (a.avatar ? '<img src="' + img(a.avatar, 400, 400) + '" alt="' + esc(a.name) + '">' : '') + '</div>' +
      '<div class="pf-title">' +
        '<div class="crumbs" style="margin-bottom:8px"><a href="/">Accueil</a>' + ic('chevR', 'icon-sm') + (firstEv ? '<a href="/evenements/' + firstEv + '">' + esc(eL(firstEv)) + '</a>' + ic('chevR', 'icon-sm') : '') + '<a href="/recherche?ville=' + encodeURIComponent(a.city) + '">' + esc(a.city) + '</a></div>' +
        '<h1>' + esc(a.name) + '</h1><div class="tg">' + esc(a.tagline) + '</div>' +
        '<div class="row">' + (r ? '<span class="stars">' + ic('star') + ' ' + fmtRating(r.avg) + ' <span style="opacity:.75;font-weight:400">' + esc(T('sur {n} avis', { n: r.count })) + '</span></span>' : '<span class="badge badge-soft">Nouveau sur Wimbo</span>') +
          (a.premium ? '<span class="badge badge-prem">' + ic('star', 'icon-sm') + ' Premium</span>' : a.pro ? '<span class="badge badge-pro">Pro</span>' : '') + (a.founder ? '<span class="badge badge-ver">Membre fondateur</span>' : '') + (a.verified ? '<span class="badge badge-ver">' + ic('check', 'icon-sm') + ' Profil vérifié</span>' : '') + '<span class="badge badge-ver">' + ic('doc', 'icon-sm') + ' GUSO géré</span></div>' +
      '</div>' +
      '<div class="pf-actions"><button class="btn btn-ghost btn-sm' + (isFav(a.slug) ? ' on' : '') + '" data-fav="' + esc(a.slug) + '">' + ic('heart', 'icon-sm') + ' Favori</button><button class="btn btn-ghost btn-sm" data-share>' + ic('share', 'icon-sm') + ' Partager</button></div>' +
    '</div>' +
  '</div>' +
  '<nav class="pf-tabs"><div class="wrap"><a href="#" data-scroll="pf-details" class="on">Détails</a><a href="#" data-scroll="pf-photos">Photos <small>(' + gal.length + ')</small></a><a href="#" data-scroll="pf-videos">Vidéos <small>(' + ((a.videos || []).length + (a.videoUrls || []).length + (a.uploadedVideos || []).length) + ')</small></a><a href="#" data-scroll="pf-avis">Avis <small>(' + rv.length + ')</small></a></div></nav>' +
  '<div class="wrap pf-layout">' +
    '<div>' +
      '<div class="pf-block" id="pf-details"><h2>Informations</h2><div class="info-list">' +
        '<div>' + ic('pin') + '<div><span>Basé à</span>' + esc(placeLabel(a)) + (a.region && a.region !== a.city && !DOM_RE.test(a.region) ? ' (' + esc(a.region) + ')' : '') + '</div></div>' +
        '<div>' + ic('plane') + '<div><span>Zone de déplacement</span>' + esc(a.zone) + '</div></div>' +
        '<div>' + ic('globe') + '<div><span>Langues</span>' + esc((a.languages || []).join(', ')) + '</div></div>' +
        '<div>' + ic('clock') + '<div><span>Délai de réponse moyen</span>' + esc(a.responseTime || '3 h') + '</div></div>' +
        '<div>' + ic('calendar') + '<div><span>En activité depuis</span>' + esc(a.since) + '</div></div>' +
        '<div>' + ic('music') + '<div><span>Prestations via Wimbo</span>' + (a.bookings ? esc(T('{n} événements', { n: a.bookings })) : 'Nouveau') + '</div></div>' +
      '</div></div>' +
      ((a.members && a.members.length) || a.formation ? '<div class="pf-block"><h2>Formation et membres</h2><div class="chips" style="margin-bottom:16px">' + (a.formation || []).map(x => '<span class="chip">' + esc(x) + '</span>').join('') + '</div>' + (a.members && a.members.length ? '<div class="members">' + a.members.map(m => '<div><strong>' + esc(m.n) + '</strong><span>' + esc(m.r.map(tu).join(', ')) + '</span></div>').join('') + '</div>' : '') + '</div>' : '') +
      '<div class="pf-block"><h2>Cachet</h2><div class="price-big">' + price + '</div><p class="small" style="margin-top:8px">' + (a.priceMin ? 'Tarif indicatif pour une prestation de 2 heures. Le devis précise la durée, le déplacement et les cotisations sociales (GUSO) : vous connaissez le coût total avant de réserver.' : 'Cet artiste établit un tarif sur mesure pour chaque événement (durée, lieu, formation). Demandez un devis gratuit : vous connaissez le coût total, cotisations GUSO comprises, avant de réserver.') + '</p></div>' +
      '<div class="pf-block"><h2>Genres</h2><div class="chips">' + (a.genres || []).map(g => '<a class="chip" href="/genres/' + g + '">' + esc(gL(g)) + '</a>').join('') + (a.instruments || []).map(i => '<a class="chip" href="/instruments/' + i + '">' + esc(iL(i)) + '</a>').join('') + (a.extraInstruments || []).map(x => '<span class="chip">' + esc(x) + '</span>').join('') + '</div></div>' +
      (a.description ? '<div class="pf-block"><h2>Description</h2><p>' + esc(a.description) + '</p></div>' : '') +
      (a.experience ? '<div class="pf-block"><h2>Aperçu</h2>' +
        '<h4>Expérience</h4><p>' + esc(a.experience) + '</p>' +
        (a.formationText ? '<h4>Formation</h4><p>' + esc(a.formationText) + '</p>' : '') +
        (a.repertoire ? '<h4>Répertoire</h4><p>' + esc(a.repertoire) + '</p>' : '') +
        (a.logistique ? '<h4>Logistique et équipement</h4><p>' + esc(a.logistique) + '</p>' : '') +
        (a.montage ? '<h4>Montage et déplacements</h4><p>' + esc(a.montage) + '</p>' : '') + '</div>' : '') +
      '<div class="pf-block"><h2>Événements</h2><div class="chips">' + (a.events || []).map(e => '<a class="chip" href="/evenements/' + e + '">' + esc(eL(e)) + '</a>').join('') + '</div></div>' +
      '<div class="pf-block" id="pf-photos"><h2>Photos</h2>' + (gal.length ? '<div class="gallery">' + gal.map((g, i) => '<button data-lightbox="' + i + '" aria-label="Agrandir la photo"><img loading="lazy" src="' + img(g, 500, 500) + '" alt=""></button>').join('') + '</div>' : '<p class="muted">Aucune photo pour le moment.</p>') + '</div>' +
      '<div class="pf-block" id="pf-videos"><h2>Vidéos</h2>' + ((a.videos || []).length ? '<div class="videos">' + a.videos.map((v, i) => '<button class="video" data-video="' + i + '"><img loading="lazy" src="' + img(v.img, 640, 360) + '" alt=""><span class="play">' + ic('play') + '</span><span class="vt"><span>' + esc(v.t) + '</span><span>' + esc(v.d) + '</span></span></button>').join('') + '</div>' : (((a.videoUrls || []).length + (a.uploadedVideos || []).length) ? '<div class="videos">' + (a.uploadedVideos || []).map(v => uploadedVideoTile(v)).join('') + (a.videoUrls || []).map((u, i) => videoTile(u, i)).join('') + '</div>' : '<p class="muted">Aucune vidéo pour le moment.</p>')) + '</div>' +
      '<div class="pf-block" id="pf-avis"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:20px"><h2 style="margin:0">Avis</h2><button class="btn btn-ghost btn-sm" data-review="' + esc(a.slug) + '">' + ic('edit', 'icon-sm') + ' Laisser un avis</button></div>' +
        (rv.length ? '<div class="rating-sum"><div><div class="big">' + fmtRating(r.avg) + '</div>' + stars(r.avg) + '<div class="small muted">' + esc(plural(rv.length, '{n} avis vérifié', '{n} avis vérifiés')) + '</div></div><div>' + crit.map((c, i) => '<div class="crit"><span>' + c + '</span><div class="bar"><i style="width:' + (critAvg[i] / 5 * 100) + '%"></i></div><strong>' + fmtRating(critAvg[i]) + '</strong></div>').join('') + '</div></div>' +
          rv.map(x => '<div class="review"><div class="rh"><div><strong>' + esc(x.n) + '</strong> <span>· ' + esc(x.e) + '</span></div><span>' + fmtDate(x.d) + '</span></div>' + stars(x.s.reduce((p, q) => p + q, 0) / 4) + '<p data-notr>' + esc(x.t) + '</p>' + (x.r ? '<div class="reply"><strong>' + esc(T('Réponse de {name}', { name: a.name })) + '</strong>' + esc(x.r) + '</div>' : '') + '</div>').join('')
          : '<p class="muted">Pas encore d\'avis. Les avis sont publiés après chaque prestation réservée via Wimbo.</p>') +
      '</div>' +
    '</div>' +
    '<aside class="book-col"><div class="book" id="book">' + bookingForm(a) + '</div></aside>' +
  '</div>' +
  (similar.length ? '<section class="section ivory-2" style="padding:70px 0"><div class="wrap"><span class="eyebrow">Vous pourriez également aimer</span><h2 class="h-md" style="margin-bottom:28px">Artistes similaires</h2><div class="grid-cards">' + similar.map(cardA).join('') + '</div></div></section>' : '') +
  '<div class="mobile-book"><div><div class="small muted">' + (a.priceMin ? 'À partir de' : 'Tarif') + '</div><strong style="font-family:var(--f-title);font-size:20px">' + (a.priceMin ? fmtEUR(a.priceMin) : 'Sur devis') + '</strong></div><button class="btn btn-primary" data-book-mobile="' + esc(a.slug) + '">Demander un devis</button></div>';
  return { title: a.name + ' · ' + a.tagline + ' · Wimbo', html, after: () => { window.__artist = a; setupTabsSpy(); } };
}
function uploadedVideoTile(v) {
  return '<div class="video video-file"><video src="' + esc(v.public_url) + '#t=0.1" controls playsinline preload="metadata"></video></div>';
}
function videoTile(u, i) {
  const v = parseVideo(u); if (!v) return '';
  if (v.kind === 'link') return '<a class="video video-link" href="' + esc(v.url) + '" target="_blank" rel="noopener"><span class="play">' + ic('play') + '</span><span class="vt"><span>' + T('Voir la vidéo sur {site}', { site: esc(v.label) }) + '</span><span>↗</span></span></a>';
  return '<button class="video" data-embed="' + esc(v.embed) + '">' + (v.thumb ? '<img loading="lazy" src="' + esc(v.thumb) + '" alt="">' : '') + '<span class="play">' + ic('play') + '</span><span class="vt"><span>' + (v.kind === 'youtube' ? 'Vidéo YouTube' : 'Vidéo Vimeo') + '</span><span>' + (i + 1) + '</span></span></button>';
}
function bookingForm(a, inModal) {
  const u = S.user;
  const nm = S.client ? (S.client.first_name + ' ' + (S.client.last_name || '')).trim() : S.artist ? (S.artist.first_name + ' ' + (S.artist.last_name || '')).trim() : '';
  return '<div class="from">' + (a.priceMin ? T('À partir de {price}', { price: '<strong>' + fmtEUR(a.priceMin) + '</strong>' }) : '<strong>' + esc(T('Sur devis')) + '</strong> · ' + esc(T('tarif sur mesure'))) + '</div>' +
    (ratingOf(a) ? '<div class="small" style="margin:4px 0 16px">' + stars(ratingOf(a).avg) + ' <span class="muted">' + fmtRating(ratingOf(a).avg) + ' · ' + esc(plural(ratingOf(a).count, '{n} avis', '{n} avis')) + '</span></div>' : '<div style="height:14px"></div>') +
    '<form class="form" data-form="devis" data-artist="' + esc(a.slug) + '" novalidate>' +
      '<div class="row2"><div class="fld"><label>Date</label><input type="date" name="event_date" min="' + todayISO() + '" required></div>' +
      '<div class="fld"><label>Invités</label><input type="number" name="guests" min="1" max="2000" placeholder="80"></div></div>' +
      '<div class="fld"><label>Type d\'événement</label><select name="event_type" required>' + eventOptions('', 'Choisir…').replace('value=""', 'value="" disabled selected') + '</select></div>' +
      '<div class="row2"><div class="fld"><label>Ville</label>' + cityField({ name: 'event_city', placeholder: a.city || 'Ville', required: true, full: true }) + '</div>' +
      '<div class="fld"><label>Durée</label><select name="duration"><option value="1 h">1 h</option><option value="2 h" selected>2 h</option><option value="3 h">3 h</option><option value="4 h">4 h</option><option value="Soirée complète">Soirée complète</option></select></div></div>' +
      '<div class="fld"><label>Votre message</label><textarea name="message" placeholder="Décrivez votre événement : lieu, moments à animer, chansons souhaitées…"></textarea></div>' +
      (u ? '<div class="small muted">' + T('Demande envoyée en tant que {name}', { name: '<strong>' + esc(nm || u.email) + '</strong>' }) + '</div>' :
        '<div class="fld"><label>Prénom et nom</label><input name="client_name" autocomplete="name" required></div>' +
        '<div class="row2"><div class="fld"><label>Email</label><input type="email" name="client_email" autocomplete="email" required></div>' +
        '<div class="fld"><label>Téléphone <span class="opt">(facultatif)</span></label><input type="tel" name="client_phone" autocomplete="tel"></div></div>') +
      '<div class="alert alert-err hide" data-err></div>' +
      '<button class="btn btn-primary btn-block btn-lg" type="submit">Demander un devis gratuit</button>' +
    '</form>' +
    '<div class="reassure"><div>' + ic('checkc', 'icon-sm') + ' Gratuit et sans engagement</div><div>' + ic('checkc', 'icon-sm') + ' ' + esc(T('Réponse sous {t} en moyenne', { t: a.responseTime || '3 h' })) + '</div><div>' + ic('checkc', 'icon-sm') + ' Déclaration GUSO préparée par Wimbo</div><div>' + ic('checkc', 'icon-sm') + ' Paiement sécurisé, solde après la prestation</div></div>';
}
function setupTabsSpy() {
  const tabs = $$('.pf-tabs a'); if (!tabs.length) return;
  const ids = ['pf-details', 'pf-photos', 'pf-videos', 'pf-avis'];
  if (window.__spy) window.removeEventListener('scroll', window.__spy);
  window.__spy = () => {
    let cur = ids[0];
    ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 200) cur = id; });
    tabs.forEach(t => t.classList.toggle('on', t.dataset.scroll === cur));
  };
  window.addEventListener('scroll', window.__spy, { passive: true });
}

/* =====================================================================
   PAGES : CATÉGORIES (genres, événements, instruments)
   ===================================================================== */
const KINDS = {
  genres: { obj: GENRES, field: 'genres', title: 'Genres musicaux', lead: 'Du jazz manouche au zouk, en passant par le fado et l\'afro-house : trouvez le style qui fera vibrer vos invités.', label: k => gL(k), param: 'genre' },
  evenements: { obj: EVENTS, field: 'events', title: 'Événements', lead: 'Mariage, anniversaire, soirée d\'entreprise ou fête au pays : la bonne musique pour chaque occasion.', label: k => eL(k), param: 'event' },
  instruments: { obj: INSTRUMENTS, field: 'instruments', title: 'Instruments et artistes', lead: 'Chanteuse, pianiste, violoniste, DJ : cherchez directement l\'artiste qu\'il vous faut.', label: k => iL(k), param: 'instrument' }
};
function pIndex(kind) {
  const K = KINDS[kind];
  const keys = Object.keys(K.obj);
  const pics = {};
  keys.forEach(k => { const a = S.catalog.find(x => (x[K.field] || []).includes(k)); pics[k] = kind === 'evenements' ? EVENTS[k].photo : a ? ((a.gallery && a.gallery[0]) || a.cover) : P.concertCrowd; });
  const html = pageHero(K.title, K.lead, null, kind === 'evenements' ? P.weddingTables : kind === 'genres' ? P.concertCrowd : P.guitarsRoom) +
    '<section class="section"><div class="wrap"><div class="ev-tiles">' + keys.map(k => { const n = countBy(K.field, k); return '<a class="ev-tile" href="/' + kind + '/' + k + '"><img loading="lazy" src="' + img(pics[k], 520, 400) + '" alt=""><span>' + esc(K.label(k)) + '<small>' + (n ? esc(plural(n, '{n} artiste', '{n} artistes')) : 'Bientôt disponible') + '</small></span></a>'; }).join('') + '</div></div></section>';
  return { title: K.title + ' · Wimbo', html };
}
function pLanding(kind, slug) {
  const K = KINDS[kind];
  if (!K || !K.obj[slug]) return p404();
  const label = K.label(slug);
  const arts = sortArtists(S.catalog.filter(a => (a[K.field] || []).includes(slug)), 'pertinence');
  const title = kind === 'evenements' ? T('Musique pour {event}', { event: label.toLowerCase() }) : kind === 'genres' ? T('Musiciens et groupes {genre}', { genre: label }) : T('{instrument} pour votre événement', { instrument: label });
  const text = kind === 'evenements' ? eT(slug) : kind === 'genres' ?
    T('Vous cherchez un artiste {genre} pour un mariage, une fête privée ou un événement d\'entreprise ? Découvrez des profils vérifiés, écoutez leurs extraits, comparez les cachets et demandez un devis en quelques clics. Nous préparons la déclaration GUSO et sécurisons le paiement.', { genre: label }) :
    T('Trouvez un {instrument} pour votre événement : profils vérifiés, photos, vidéos et avis clients. Demandez un devis gratuit et recevez une réponse sous 2 à 3 heures.', { instrument: label.toLowerCase().split(' / ')[0] });
  const pic = kind === 'evenements' ? EVENTS[slug].photo : arts[0] ? (arts[0].cover || arts[0].gallery[0]) : P.concertCrowd;
  const others = Object.keys(K.obj).filter(k => k !== slug).slice(0, 14);
  const html = pageHero(title, text, '<a href="/">Accueil</a>' + ic('chevR', 'icon-sm') + '<a href="/' + kind + '">' + K.title + '</a>' + ic('chevR', 'icon-sm') + '<span>' + esc(label) + '</span>', pic) +
    '<section class="section" style="padding-top:60px"><div class="wrap">' +
      '<div class="res-head"><h2 class="h-md">' + esc(plural(arts.length, '{n} artiste disponible', '{n} artistes disponibles')) + '</h2><a class="btn btn-dark btn-sm" href="/recherche?' + K.param + '=' + slug + '">' + ic('filter', 'icon-sm') + ' Affiner la recherche</a></div>' +
      (arts.length ? '<div class="grid-cards">' + arts.map(cardA).join('') + '</div>' :
        '<div class="empty"><div class="em-ic">' + ic('music') + '</div><h2 class="h-md">Les premiers artistes arrivent</h2><p class="muted" style="max-width:480px;margin:10px auto 22px">Nous sélectionnons actuellement des artistes dans cette catégorie. Confiez-nous votre recherche, nous vous proposons des profils sous 24 h.</p><a class="btn btn-primary" href="/contact?sujet=recherche">Demande personnalisée</a></div>') +
      '<div style="margin-top:50px"><h3 class="h-md" style="margin-bottom:16px;font-size:20px">' + esc(T(kind === 'genres' ? 'Autres genres' : kind === 'evenements' ? 'Autres événements' : 'Autres instruments')) + '</h3><div class="chips">' + others.map(k => '<a class="chip" href="/' + kind + '/' + k + '">' + esc(K.label(k)) + '</a>').join('') + '</div></div>' +
    '</div></section>';
  return { title: title + ' · Wimbo', html };
}
function pageHero(title, lead, crumbs, photo) {
  return '<section class="page-hero">' + (photo ? '<div class="ph-bg" style="background-image:url(\'' + img(photo, 1800, 700) + '\')"></div>' : '') + '<div class="wrap">' + (crumbs ? '<div class="crumbs">' + crumbs + '</div>' : '') + '<h1 class="h-lg" style="max-width:820px">' + esc(title) + '</h1>' + (lead ? '<p class="lead">' + esc(lead) + '</p>' : '') + '</div></section>';
}
function p404(msg) {
  return { title: 'Page introuvable · Wimbo', html: '<section class="section"><div class="wrap center"><span class="eyebrow">Erreur 404</span><h1 class="h-lg">Cette page a fait une fausse note</h1><p class="lead" style="margin:16px auto 30px">' + esc(msg || 'La page que vous cherchez n\'existe pas ou a été déplacée.') + '</p><a class="btn btn-primary" href="/">Retour à l\'accueil</a> <a class="btn btn-ghost" href="/recherche">Voir les artistes</a></div></section>' };
}

/* =====================================================================
   WIMBO — Application (pages) : contenus, comptes, espaces, routeur
   ===================================================================== */

/* ---------- Statuts des demandes ---------- */
const REQ_STATUS = {
  nouvelle: ['En attente de réponse', 'badge-warn'],
  devis_envoye: ['Devis envoyé', 'badge-soft'],
  acceptee: ['Confirmée', 'badge-ok'],
  refusee: ['Indisponible', 'badge-no'],
  annulee: ['Annulée', 'badge-no'],
  realisee: ['Réalisée', 'badge-ok']
};
const statusBadge = s => { const x = REQ_STATUS[s] || [s, 'badge-soft']; return '<span class="badge ' + x[1] + '">' + esc(x[0]) + '</span>'; };

/* =====================================================================
   PAGES DE CONTENU
   ===================================================================== */
function pHow() {
  const faq = FAQ.organisateurs.slice(0, 5);
  const html = pageHero('Comment ça marche', 'Trouver, réserver et payer un artiste en toute sérénité, sans vous soucier de l\'administratif.', null, P.crowdOrange) +
  '<section class="section"><div class="wrap">' +
    '<div class="steps steps-4">' +
      '<div class="step"><span class="st-n">Étape 1</span><div class="st-ic">' + ic('search') + '</div><h3>Cherchez</h3><p>Filtrez par style, événement, ville et budget. Chaque profil est vérifié par notre équipe.</p></div>' +
      '<div class="step"><span class="st-n">Étape 2</span><div class="st-ic">' + ic('msg') + '</div><h3>Demandez un devis</h3><p>Décrivez votre événement en 2 minutes. L\'artiste répond en 2 à 3 heures avec un devis détaillé.</p></div>' +
      '<div class="step"><span class="st-n">Étape 3</span><div class="st-ic">' + ic('card') + '</div><h3>Réservez</h3><p>Validez le devis et réglez un acompte de 30 % : la date est bloquée, votre paiement est sécurisé.</p></div>' +
      '<div class="step"><span class="st-n">Étape 4</span><div class="st-ic">' + ic('music') + '</div><h3>Profitez</h3><p>Le jour J, l\'artiste fait le show. Le solde est réglé après la prestation, puis vous laissez un avis.</p></div>' +
    '</div></div></section>' +
  '<section class="section ivory-2"><div class="wrap two-col">' +
    '<div><span class="eyebrow">Notre signature</span><h2 class="h-lg">Le GUSO, on s\'en occupe</h2><p class="lead" style="margin-top:16px">En France, engager un artiste pour un événement privé impose une déclaration auprès du Guichet unique du spectacle occasionnel (GUSO). Beaucoup l\'ignorent, et s\'exposent à un redressement.</p>' +
      '<div class="prose" style="margin-top:18px"><ul><li><strong>Le coût total dès le devis</strong> : cachet, cotisations sociales et frais de service.</li><li><strong>La déclaration préparée pour vous</strong> avec vos informations et celles de l\'artiste.</li><li><strong>Vous validez en un clic</strong>, nous suivons le dossier jusqu\'au bout.</li></ul></div>' +
      '<a class="btn btn-dark" href="/blog/guso-tout-comprendre">Comprendre le GUSO en 5 minutes</a></div>' +
    '<div class="box" style="padding:0;overflow:hidden;border-radius:var(--r-lg)"><img src="' + U(P.sheetMusic, 900, 700) + '" alt="" style="width:100%;height:100%;object-fit:cover;aspect-ratio:9/7"></div>' +
  '</div></section>' +
  '<section class="section dark why on-dark"><div class="shape-a"></div><div class="wrap" style="position:relative"><div style="margin-bottom:40px"><span class="eyebrow">Ce que Wimbo gère pour vous</span><h2 class="h-lg">Vous profitez, on s\'occupe du reste</h2></div>' +
    '<div class="why-grid">' +
      '<div class="why-item"><div class="wi">' + ic('shield') + '</div><h3>Artistes vérifiés</h3><p>Identité, statut, extraits et références contrôlés avant la mise en ligne.</p></div>' +
      '<div class="why-item"><div class="wi">' + ic('lock') + '</div><h3>Paiement sécurisé</h3><p>Acompte de 30 % à la réservation, solde après la prestation, versé à l\'artiste une fois l\'événement passé.</p></div>' +
      '<div class="why-item"><div class="wi">' + ic('doc') + '</div><h3>Contrat et GUSO</h3><p>Récapitulatif de réservation, contrat et déclaration préparés automatiquement.</p></div>' +
      '<div class="why-item"><div class="wi">' + ic('users') + '</div><h3>Un interlocuteur</h3><p>En cas d\'imprévu, notre équipe vous propose un artiste de remplacement sous 24 h ouvrées.</p></div>' +
    '</div></div></section>' +
  '<section class="section"><div class="wrap" style="max-width:860px"><div class="center" style="margin-bottom:30px"><span class="eyebrow">Questions fréquentes</span><h2 class="h-lg">Vous vous demandez peut-être</h2></div>' +
    '<div class="faq">' + faq.map(x => '<details><summary>' + esc(x[0]) + ic('plus') + '</summary><p>' + esc(x[1]) + '</p></details>').join('') + '</div>' +
    '<div class="center" style="margin-top:30px"><a class="link" href="/faq">Toutes les questions</a></div></div></section>' +
  '<section class="cta-band"><div class="circle"></div><div class="wrap"><div><h2>Prêt à trouver votre artiste ?</h2><p>Des profils vérifiés, un devis en quelques heures, l\'administratif en moins.</p></div><div class="ctas"><a class="btn btn-dark btn-lg" href="/recherche">' + ic('search') + ' Chercher un artiste</a></div></div></section>';
  return { title: 'Comment ça marche · Wimbo', html };
}

function pArtistLanding() {
  const quotes = CONFIG.DEMO_MODE ? [
    ['elise-marceau', "Je ne cours plus après les demandes : elles arrivent qualifiées, avec la date, le lieu et le budget. Et le paiement tombe à l'heure."],
    ['dj-kaito', "Wimbo me permet de jouer pour les familles franco-portugaises des deux côtés de la frontière, sans me noyer dans la paperasse."],
    ['los-compadres', "Les clients savent exactement ce qu'ils paient, cotisations comprises. Fini les négociations gênantes au moment du devis."]
  ] : [];
  const html =
  '<section class="hero"><div class="hero-bg" style="background-image:url(\'' + U(P.womanGuitarStage, 2000) + '\')"></div><div class="hero-shape"></div><div class="wrap hero-inner">' +
    '<span class="eyebrow">Espace artistes</span><h1 class="h-xl">Votre art,<span class="accent">leurs émotions</span></h1><p class="sub">On s\'occupe du reste</p>' +
    '<p class="lead">Recevez des demandes de particuliers et d\'entreprises, fixez vos tarifs, soyez payé à temps. Wimbo prépare les formalités pour vos clients.</p>' +
    '<div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-primary btn-lg" href="/inscription-artiste">Créer mon profil gratuitement</a><a class="btn btn-ghost btn-lg" href="/abonnements">Voir les abonnements</a></div>' +
  '</div></section>' +
  '<section class="section"><div class="wrap">' + sectionHead('Pourquoi rejoindre Wimbo', 'Concentrez-vous sur la scène', null) +
    '<div class="why-grid why-3">' + [
      ['inbox', 'Des demandes qualifiées', 'Date, lieu, nombre d\'invités, budget : chaque demande arrive complète. Vous répondez avec un devis en quelques clics.'],
      ['lock', 'Paiement garanti', 'L\'acompte est sécurisé dès la réservation. Le solde vous est versé sous 48 h après la prestation.'],
      ['doc', 'Zéro paperasse', 'Contrat et déclaration GUSO préparés pour vos clients : vous êtes déclaré correctement, sans effort.'],
      ['euro', 'Vos tarifs, vos règles', 'Vous fixez votre fourchette et ajustez chaque devis. Vous acceptez ou refusez librement.'],
      ['calendar', 'Agenda intégré', 'Bloquez vos dates indisponibles, évitez les doubles réservations.'],
      ['plane', 'Ici et au pays', 'Touchez aussi les familles de la diaspora qui organisent une fête au pays, partout dans le monde.']
    ].map(x => '<div class="step" style="padding:28px"><div class="st-ic" style="margin-top:0">' + ic(x[0]) + '</div><h3>' + x[1] + '</h3><p>' + x[2] + '</p></div>').join('') + '</div></div></section>' +
  '<section class="section ivory-2"><div class="wrap"><div class="center" style="margin-bottom:40px"><span class="eyebrow">En 3 étapes</span><h2 class="h-lg">Votre profil en ligne en 5 minutes</h2></div><div class="steps">' +
    '<div class="step"><span class="st-n">Étape 1</span><div class="st-ic">' + ic('user') + '</div><h3>Créez votre compte</h3><p>Nom, email, mot de passe. Pas de carte bancaire.</p></div>' +
    '<div class="step"><span class="st-n">Étape 2</span><div class="st-ic">' + ic('music') + '</div><h3>Présentez votre musique</h3><p>Style, ville, tarif indicatif, quelques photos. Vous pourrez tout compléter plus tard.</p></div>' +
    '<div class="step"><span class="st-n">Étape 3</span><div class="st-ic">' + ic('checkc') + '</div><h3>Validation sous 48 h</h3><p>Notre équipe vérifie votre profil, puis vous apparaissez dans les résultats.</p></div>' +
  '</div></div></section>' +
  '<section class="section"><div class="wrap">' +
    (quotes.length ? '<div class="blog-grid">' + quotes.map(q => { const a = findArtist(q[0]); return a ? '<div class="rv-card"><p class="q">« ' + esc(q[1]) + ' »</p><div class="rv-who"><span class="avatar-i" style="overflow:hidden">' + (a.avatar ? '<img src="' + img(a.avatar, 80, 80) + '" alt="" style="width:100%;height:100%;object-fit:cover">' : initials(a.name)) + '</span><div><strong>' + esc(a.name) + '</strong><span>' + esc(a.tagline) + '</span></div></div></div>' : ''; }).join('') + '</div>' : '') +
  '</div></section>' +
  '<section class="section ivory-2"><div class="wrap" style="max-width:860px"><div class="center" style="margin-bottom:30px"><span class="eyebrow">FAQ artistes</span><h2 class="h-lg">Vos questions</h2></div><div class="faq">' + FAQ.artistes.map(x => '<details><summary>' + esc(x[0]) + ic('plus') + '</summary><p>' + esc(x[1]) + '</p></details>').join('') + '</div></div></section>' +
  '<section class="cta-band"><div class="circle"></div><div class="wrap"><div><h2>On vous attend sur scène</h2><p>Inscription gratuite, sans engagement.</p></div><div class="ctas"><a class="btn btn-dark btn-lg" href="/inscription-artiste">Créer mon profil</a></div></div></section>';
  return { title: 'Artistes : rejoignez Wimbo', html };
}

function foundersBanner() {
  const n = seatsLeft();
  return '<div class="founders"><div><span class="eyebrow">Membres fondateurs</span><h2 class="h-md">' + T('Premium offert à vie aux {n} premiers artistes', { n: CONFIG.FOUNDERS_SEATS }) + '</h2><p class="lead" style="margin-top:8px">' + (n > 0 ? T('Il reste {n} places : inscrivez-vous maintenant et profitez de toutes les fonctionnalités Premium (30 photos, 5 vidéos), sans abonnement.', { n }) : 'Toutes les places de membres fondateurs sont prises. Merci à nos 150 premiers artistes !') + '</p></div>' + (n > 0 ? '<a class="btn btn-primary btn-lg" href="/inscription-artiste">Profiter de l\'offre</a>' : '') + '</div>';
}
function planCard(p, href, cta, current) {
  return '<div class="plan' + (p.popular ? ' pop' : '') + '">' + (p.popular ? '<span class="badge badge-prem pop-b">Le plus choisi</span>' : '') +
    '<h3>' + esc(p.name) + '</h3><div class="ptag">' + esc(p.tag) + '</div><div class="pp">' + p.price + ' €<small> / mois</small></div><div class="com">' + T('Commission {n} % par prestation', { n: p.commission }) + '</div>' +
    '<ul>' + (p.includes ? '<li class="inc">' + esc(p.includes) + '</li>' : '') + p.features.map(f => '<li>' + ic('check', 'icon-sm') + esc(f) + '</li>').join('') + '</ul>' +
    (current ? current : '<a class="btn ' + (p.popular ? 'btn-primary' : 'btn-dark') + ' btn-block" href="' + href + '">' + esc(cta) + '</a>') + '</div>';
}
function pPricing() {
  const html = pageHero('Abonnements artistes', 'Sans engagement, modifiable à tout moment. Une commission uniquement sur les prestations réalisées.', '<a href="/je-suis-artiste">Espace artistes</a>' + ic('chevR', 'icon-sm') + '<span>Abonnements</span>', P.stageColor) +
  '<section class="section"><div class="wrap">' +
    foundersBanner() +
    '<div class="plans">' + PLANS.map(p => planCard(p, S.artist ? '/espace-artiste?tab=abonnement' : '/inscription-artiste?offre=' + p.id, p.price ? T('Choisir {plan}', { plan: p.name }) : 'Commencer gratuitement')).join('') + '</div>' +
    '<p class="center small muted" style="margin-top:26px">Prix HT. La commission est prélevée uniquement sur les prestations réservées et réalisées via Wimbo.</p>' +
  '</div></section>';
  return { title: 'Abonnements artistes · Wimbo', html };
}

function pReviews(q) {
  const all = allReviews();
  const ev = q.get('e') || '';
  const types = Array.from(new Set(all.map(r => r.e.replace(/ .*$/, ''))));
  const shown = ev ? all.filter(r => r.e.startsWith(ev)) : all;
  const avg = all.length ? all.reduce((s, r) => s + r.s.reduce((a, b) => a + b, 0) / 4, 0) / all.length : 0;
  const html = pageHero('Avis clients', 'Ce que les organisateurs disent des artistes Wimbo. Chaque avis est relu et rapproché d\'une réservation.', null, P.handsHeart) +
  '<section class="section"><div class="wrap">' +
    (all.length ? '<div class="box" style="display:flex;gap:30px;align-items:center;flex-wrap:wrap;margin-bottom:30px"><div class="price-big" style="font-size:52px">' + fmtRating(avg) + '</div><div>' + stars(avg) + '<div class="muted small">' + T('Note moyenne sur {n} avis', { n: all.length }) + '</div></div><div class="chips" style="margin-left:auto"><a class="chip' + (!ev ? ' on' : '') + '" href="/avis">Tous</a>' + types.map(t => '<a class="chip' + (ev === t ? ' on' : '') + '" href="/avis?e=' + encodeURIComponent(t) + '">' + esc(t) + '</a>').join('') + '</div></div>' +
      '<div class="blog-grid">' + shown.map(rvCard).join('') + '</div>' :
      '<div class="empty"><h2 class="h-md">Les premiers avis arrivent bientôt</h2></div>') +
  '</div></section>';
  return { title: 'Avis clients · Wimbo', html };
}

function pFaq(q) {
  const t = q.get('t') === 'artistes' ? 'artistes' : 'organisateurs';
  const html = pageHero('Questions fréquentes', 'Tout ce qu\'il faut savoir pour réserver un artiste ou rejoindre Wimbo.', null, P.micBokeh) +
  '<section class="section"><div class="wrap" style="max-width:860px"><div class="center"><div class="faq-tabs"><a class="btn btn-sm ' + (t === 'organisateurs' ? 'btn-dark' : '') + '" href="/faq">Organisateurs</a><a class="btn btn-sm ' + (t === 'artistes' ? 'btn-dark' : '') + '" href="/faq?t=artistes">Artistes</a></div></div>' +
    '<div class="faq">' + FAQ[t].map(x => '<details><summary>' + esc(x[0]) + ic('plus') + '</summary><p>' + esc(x[1]) + '</p></details>').join('') + '</div>' +
    '<div class="box center" style="margin-top:34px"><h3 class="h-md" style="font-size:20px">Vous ne trouvez pas votre réponse ?</h3><p class="muted">Notre équipe vous répond sous 24 h ouvrées.</p><a class="btn btn-primary" href="/contact">Nous contacter</a></div>' +
  '</div></section>';
  return { title: 'FAQ · Wimbo', html };
}

function pBlog() {
  const html = pageHero('Le blog Wimbo', 'Conseils, guides et inspirations pour réussir la musique de vos événements.', null, P.vinyl) +
    '<section class="section"><div class="wrap"><div class="blog-grid">' + blogList().map(blogCard).join('') + '</div></div></section>';
  return { title: 'Blog · Wimbo', html };
}
function pArticle(slug) {
  const b = blogL(BLOG.find(x => x.slug === slug));
  if (!b) return p404();
  const others = blogList().filter(x => x.slug !== slug).slice(0, 3);
  const html = '<section class="section" style="padding-top:60px"><div class="wrap"><div class="article">' +
    '<div class="crumbs"><a href="/">Accueil</a>' + ic('chevR', 'icon-sm') + '<a href="/blog">Blog</a>' + ic('chevR', 'icon-sm') + '<span>' + esc(b.cat) + '</span></div>' +
    '<span class="eyebrow">' + T('{cat} · {read} de lecture', { cat: esc(b.cat), read: esc(b.read) }) + '</span><h1 class="h-lg">' + esc(b.title) + '</h1><p class="muted small" style="margin-top:12px">' + T('Publié le {date} par l\'équipe Wimbo', { date: fmtDate(b.date) }) + '</p>' +
    '<div class="cover"><img src="' + U(b.cover, 1500, 750) + '" alt=""></div>' +
    '<div class="prose">' + b.body + '</div>' +
    '<div class="box" style="margin-top:40px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap"><div><strong style="font-family:var(--f-title);font-size:18px">Trouvez votre artiste sur Wimbo</strong><div class="muted small">Profils vérifiés, devis en 2 à 3 h, GUSO inclus.</div></div><a class="btn btn-primary" href="/recherche">Chercher un artiste</a></div>' +
  '</div></div></section>' +
  '<section class="section ivory-2" style="padding:70px 0"><div class="wrap"><h2 class="h-md" style="margin-bottom:26px">À lire aussi</h2><div class="blog-grid">' + others.map(blogCard).join('') + '</div></div></section>';
  return { title: b.title + ' · Blog Wimbo', html };
}

function pContact(q) {
  const sujet = q.get('sujet') || '';
  const opts = [['question', 'Question générale'], ['recherche', 'Recherche d\'artiste personnalisée'], ['artiste', 'Je suis artiste'], ['partenariat', 'Partenariat (lieu, wedding planner…)'], ['presse', 'Presse'], ['autre', 'Autre']];
  const html = pageHero('Contactez-nous', 'Une question, une recherche particulière, un partenariat ? Écrivez-nous, nous répondons sous 24 h ouvrées.', null, P.familyHands) +
  '<section class="section"><div class="wrap two-col" style="align-items:start">' +
    '<div class="box"><form class="form" data-form="contact" novalidate>' +
      '<div class="row2"><div class="fld"><label>Prénom</label><input name="first_name" required autocomplete="given-name" value="' + esc(S.client ? S.client.first_name || '' : '') + '"></div><div class="fld"><label>Nom</label><input name="last_name" required autocomplete="family-name" value="' + esc(S.client ? S.client.last_name || '' : '') + '"></div></div>' +
      '<div class="fld"><label>Email</label><input type="email" name="email" required autocomplete="email" value="' + esc(S.user ? S.user.email : '') + '"></div>' +
      '<div class="fld"><label>Sujet</label><select name="subject">' + opts.map(o => '<option value="' + o[0] + '"' + (sujet === o[0] ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select></div>' +
      '<div class="fld"><label>Votre message</label><textarea name="message" required placeholder="' + (sujet === 'recherche' ? 'Type d\'événement, date, ville, style recherché, budget…' : 'Comment pouvons-nous vous aider ?') + '"></textarea></div>' +
      '<label class="check"><input type="checkbox" name="consent" required> J\'accepte que Wimbo utilise ces informations pour me répondre (voir la politique de confidentialité).</label>' +
      '<p class="tiny muted req-note">* Champs obligatoires</p><div class="alert alert-err hide" data-err></div><button class="btn btn-primary btn-lg" type="submit">Envoyer le message</button></form></div>' +
    '<div><span class="eyebrow">Nous joindre</span><h2 class="h-md">Une équipe à votre écoute</h2><div class="info-list" style="grid-template-columns:1fr;margin-top:24px">' +
      '<div>' + ic('mail') + '<div><span>Email</span><a class="link" href="mailto:' + CONFIG.CONTACT_EMAIL + '">' + CONFIG.CONTACT_EMAIL + '</a></div></div>' +
      '<div>' + ic('clock') + '<div><span>Délai de réponse</span>Sous 24 h ouvrées, du lundi au samedi</div></div>' +
      '<div>' + ic('pin') + '<div><span>Siège</span>' + esc(CONFIG.COMPANY_ADDRESS) + '</div></div>' +
    '</div><div class="alert alert-info" style="margin-top:26px">Vous êtes artiste ? Créez directement votre profil, c\'est gratuit : <a class="link" href="/inscription-artiste">je m\'inscris</a>.</div></div>' +
  '</div></section>';
  return { title: 'Contact · Wimbo', html };
}

function pLegal(kind) {
  const C = CONFIG;
  const pages = {
    'mentions-legales': ['Mentions légales', `
<h3>Éditeur du site</h3><p>Le site Wimbo est édité par ${esc(C.COMPANY)}, société par actions simplifiée dont le siège est situé ${esc(C.COMPANY_ADDRESS)} (immatriculation au RCS de Paris en cours). Contact : <a href="mailto:${C.CONTACT_EMAIL}">${C.CONTACT_EMAIL}</a>. Directeur de la publication : le représentant légal de ${esc(C.COMPANY)}.</p>
<h3>Hébergement</h3><p>Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Données applicatives hébergées par Supabase Inc.</p>
<h3>Activité</h3><p>Wimbo est une plateforme de mise en relation entre des organisateurs d'événements et des artistes du spectacle vivant. Wimbo n'est ni l'employeur des artistes ni le producteur des spectacles ; elle assiste l'organisateur dans ses démarches administratives, notamment la déclaration auprès du GUSO.</p>
<h3>Propriété intellectuelle</h3><p>La marque Wimbo, son logo, la charte graphique et l'ensemble des contenus du site sont protégés. Toute reproduction sans autorisation écrite est interdite. Les photographies d'illustration proviennent de la banque d'images Unsplash.</p>
<h3>Cookies</h3><p>Le site n'utilise que des traceurs strictement nécessaires à son fonctionnement (session de connexion, favoris enregistrés sur votre appareil). Aucun cookie publicitaire.</p>`],
    'cgv': ['Conditions générales de vente', `
<p class="note">Version de présentation. Le texte définitif sera validé par un avocat avant l'ouverture des réservations.</p>
<h3>1. Objet</h3><p>Les présentes conditions encadrent la réservation, via Wimbo, de prestations artistiques pour des événements privés ou d'entreprise.</p>
<h3>2. Réservation</h3><p>Le client adresse une demande de devis à l'artiste. Le devis est valable 7 jours. La réservation devient définitive à réception d'un acompte de 30 % du prix total ; le solde de 70 % est dû dans les 48 heures suivant la prestation.</p>
<h3>3. Prix</h3><p>Le prix affiché au devis comprend le cachet de l'artiste, les cotisations sociales liées à la déclaration GUSO lorsqu'elle s'applique, les frais éventuels de déplacement et les frais de service Wimbo.</p>
<h3>4. Droit de rétractation</h3><p>Conformément à l'article L.221-28 du Code de la consommation, les prestations de loisirs fournies à une date déterminée ne bénéficient pas du droit de rétractation.</p>
<h3>5. Annulation par le client</h3><ul><li>Plus de 30 jours avant l'événement : acompte remboursé intégralement.</li><li>Entre 30 et 15 jours : 50 % de l'acompte retenu.</li><li>Moins de 15 jours : acompte retenu.</li><li>Moins de 72 heures : acompte et 50 % du solde dus.</li></ul>
<h3>6. Annulation par l'artiste</h3><p>Wimbo propose un artiste de remplacement de niveau équivalent sous 24 heures ouvrées. À défaut, les sommes versées sont intégralement remboursées sous 14 jours.</p>
<h3>7. Assistance GUSO</h3><p>Lorsque le client est employeur occasionnel, Wimbo prépare la déclaration auprès du GUSO pour son compte, sur la base des informations transmises.</p>
<h3>8. Réclamations et médiation</h3><p>Toute réclamation est à adresser à ${C.CONTACT_EMAIL} dans les 30 jours suivant la prestation. En cas de litige, le client peut recourir gratuitement à un médiateur de la consommation.</p>`],
    'confidentialite': ['Politique de confidentialité', `
<h3>Données collectées</h3><p>Compte (nom, email, téléphone), informations d'événement transmises dans vos demandes, et pour les artistes : profil public, photos, statut professionnel.</p>
<h3>Finalités</h3><p>Mise en relation avec les artistes, gestion des réservations et des paiements, préparation des formalités GUSO, support client. Vos données ne sont jamais revendues.</p>
<h3>Destinataires</h3><p>L'artiste concerné par votre demande, nos prestataires techniques (hébergement, paiement) et, pour la déclaration GUSO, l'organisme compétent.</p>
<h3>Durée de conservation</h3><p>Pendant la durée de votre compte, puis 3 ans après le dernier contact ; les pièces comptables sont conservées 10 ans.</p>
<h3>Vos droits</h3><p>Accès, rectification, effacement, opposition et portabilité : écrivez à ${C.CONTACT_EMAIL}. Vous pouvez également saisir la CNIL.</p>`]
  };
  const p = pages[kind];
  const html = pageHero(p[0], null, null, null) + '<section class="section"><div class="wrap"><div class="article">' + (LANG !== 'fr' ? '<p class="note">' + T('Les documents juridiques de Wimbo sont rédigés en français : seule cette version fait foi.') + '</p>' : '') + '<div class="prose" data-notr>' + p[1] + '</div><p class="small muted" style="margin-top:30px">' + T('Dernière mise à jour : {date}', { date: fmtDate('2026-10-28') }) + '</p></div></div></section>';
  return { title: p[0] + ' · Wimbo', html };
}

function pFavoris() {
  const f = favs().map(findArtist).filter(Boolean);
  const html = pageHero('Mes favoris', 'Les artistes que vous avez mis de côté. Enregistrés sur cet appareil.', null, P.handsHeart) +
    '<section class="section"><div class="wrap">' + (f.length ? '<div class="grid-cards">' + f.map(cardA).join('') + '</div>' :
      '<div class="empty"><div class="em-ic">' + ic('heart') + '</div><h2 class="h-md">Pas encore de favoris</h2><p class="muted" style="margin:10px 0 22px">Cliquez sur le cœur d\'un profil pour le retrouver ici.</p><a class="btn btn-primary" href="/recherche">Découvrir les artistes</a></div>') + '</div></section>';
  return { title: 'Mes favoris · Wimbo', html };
}

/* =====================================================================
   COMPTES : session, connexion, inscriptions
   ===================================================================== */
function friendlyAuthError(m) {
  m = String(m || '');
  if (/invalid login/i.test(m)) return 'Email ou mot de passe incorrect.';
  if (/not confirmed/i.test(m)) return 'Votre email n\'est pas encore confirmé : cliquez sur le lien reçu par email, puis reconnectez-vous.';
  if (/rate limit/i.test(m)) return 'Trop de tentatives en peu de temps. Patientez quelques minutes avant de réessayer.';
  if (/fetch|network|timeout/i.test(m)) return 'Le serveur ne répond pas pour le moment. Vérifiez votre connexion et réessayez dans quelques minutes.';
  if (/password/i.test(m)) return 'Mot de passe refusé : choisissez au moins 8 caractères.';
  if (/already|registered|exists/i.test(m)) return 'Un compte existe déjà avec cet email. Connectez-vous ou utilisez « Mot de passe oublié ».';
  return m || 'Une erreur est survenue. Réessayez dans un instant.';
}
async function setSession(session) {
  S.session = session || null; S.user = session ? session.user : null; S.artist = null; S.client = null; S.isAdmin = false;
  if (S.user && sb) {
    const id = S.user.id;
    const none = { data: null };
    const [ar, ur] = await withTimeout(Promise.all([
      sb.from('artists').select('*, photos:artist_photos(*), videos:artist_videos(*)').eq('id', id).maybeSingle(),
      sb.from('users').select('*').eq('id', id).maybeSingle()
    ]), 6000, [none, none]);
    let arRow = ar && ar.data;
    if (ar && ar.error) {  // table des vidéos absente (SQL v3 pas encore exécuté) : on relit sans les vidéos
      const r2 = await withTimeout(sb.from('artists').select('*, photos:artist_photos(*)').eq('id', id).maybeSingle(), 6000, none);
      arRow = r2 && r2.data;
    }
    S.artist = arRow || null; S.client = (ur && ur.data) || null;
    const adm = await withTimeout(sb.rpc('is_wimbo_admin'), 5000, { data: false });
    S.isAdmin = !!(adm && adm.data === true);
    await flushPendingProfile();
    if (!S.role || (S.role === 'artist' && !S.artist) || (S.role === 'user' && !S.client)) S.role = S.artist ? 'artist' : 'user';
    LS.set('role', S.role);
  }
}
async function refreshProfiles() { if (S.session) await setSession(S.session); renderHeader(); }

function compressImage(file, max, quality) {
  max = max || 1200; quality = quality || 0.85;
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = e => {
      const im = new Image();
      im.onload = () => {
        let w = im.width, h = im.height;
        if (w > h && w > max) { h = h * max / w; w = max; } else if (h > max) { w = w * max / h; h = max; }
        const c = document.createElement('canvas'); c.width = w; c.height = h;
        c.getContext('2d').drawImage(im, 0, 0, w, h);
        const dataUrl = c.toDataURL('image/jpeg', quality);
        c.toBlob(blob => resolve({ dataUrl, blob }), 'image/jpeg', quality);
      };
      im.onerror = reject; im.src = e.target.result;
    };
    fr.onerror = reject; fr.readAsDataURL(file);
  });
}
async function dataUrlToBlob(u) { const r = await fetch(u); return r.blob(); }

async function uploadArtistPhotos(artistId, blobs, startPos) {
  let pos = startPos || 0;
  for (const b of blobs) {
    if (!b) continue;
    const path = artistId + '/photo-' + Date.now() + '-' + pos + '.jpg';
    const up = await sb.storage.from('artist-photos').upload(path, b, { contentType: 'image/jpeg', upsert: false });
    if (up.error) { console.warn('[Wimbo] upload photo', up.error.message); continue; }
    const pub = sb.storage.from('artist-photos').getPublicUrl(path);
    await sb.from('artist_photos').insert({ artist_id: artistId, storage_path: path, public_url: pub.data.publicUrl, is_main: pos === 0, position: pos });
    pos++;
  }
}
/* Enregistre en s'adaptant à la base : si une colonne récente (video_urls) n'existe pas encore,
   ou si l'ancienne règle « pays = FR/PT/AO » est toujours active, on réessaie sans bloquer l'utilisateur. */
function dbMessage(m) {
  m = String(m || '');
  if (/row-level security|violates row level/i.test(m)) return 'la base de données a refusé l\'enregistrement (règles de sécurité Supabase). Exécutez le fichier « SQL site v2 » dans Supabase puis réessayez.';
  if (/limite_photos/.test(m)) return 'votre offre ne permet pas d\'ajouter plus de photos.';
  if (/limite_videos/.test(m)) return 'votre offre ne permet pas d\'ajouter plus de vidéos.';
  if (/plan_requested|artist_videos|is_wimbo_admin|wimbo_founder/.test(m)) return 'cette fonction n\'est pas encore activée : exécutez le fichier « SQL site v3 » dans Supabase.';
  if (/_email_key|duplicate key.*email/i.test(m)) return 'un profil existe déjà avec cet email (créé avec l\'ancienne version du site). Supprimez l\'ancien compte de test dans Supabase, ou utilisez une autre adresse.';
  return m;
}
async function saveRow(table, op, row, id) {
  let r = Object.assign({}, row);
  const T = { error: { message: 'le serveur ne répond pas' } };
  for (let attempt = 0; attempt < 5; attempt++) {
    let res;
    if (op === 'upsert') {
      res = await withTimeout(sb.from(table).insert(r), 12000, T);
      if (res.error && /duplicate key/i.test(res.error.message || '') && /_pkey/i.test(res.error.message || '')) {
        const u = Object.assign({}, r); delete u.id;
        res = await withTimeout(sb.from(table).update(u).eq('id', r.id), 12000, T);
      }
    } else {
      res = await withTimeout(sb.from(table).update(r).eq('id', id), 12000, T);
    }
    const error = res.error;
    if (!error) return r;
    const m = error.message || '';
    if (/video_urls/.test(m) && 'video_urls' in r) { delete r.video_urls; continue; }
    if (/plan_requested/.test(m) && 'plan_requested' in r) { delete r.plan_requested; continue; }
    if (/country/.test(m) && r.country && !['FR', 'PT', 'AO', 'OTHER'].includes(r.country)) { r.country = 'OTHER'; continue; }
    if (/limite_photos|limite_videos/.test(m)) throw new Error(dbMessage(m));
    if (/discipline/.test(m) && r.discipline && !['chanteur', 'musicien', 'groupe'].includes(r.discipline)) { r.discipline = 'musicien'; continue; }
    throw new Error(dbMessage(m));
  }
  throw new Error('Enregistrement impossible, réessayez dans un instant.');
}
/* Vérifie que le profil enregistré est bien relisible par son propriétaire (sinon : règles Supabase à corriger) */
async function checkReadable(table, id) {
  const res = await withTimeout(sb.from(table).select('id').eq('id', id).maybeSingle(), 8000, { data: null, error: { message: 'le serveur ne répond pas' } });
  if (res.error) throw new Error(dbMessage(res.error.message));
  if (!res.data) throw new Error('le profil a été envoyé mais la base ne permet pas de le relire (règles de sécurité Supabase). Exécutez le fichier « SQL site v2 » dans Supabase puis reconnectez-vous.');
}
async function pushArtistRow(row, blobs) {
  try { await saveRow('artists', 'upsert', row); await checkReadable('artists', row.id); } catch (e) { throw new Error('Enregistrement du profil impossible : ' + e.message); }
  if (blobs && blobs.length) await uploadArtistPhotos(row.id, blobs, 0);
}
async function pushUserRow(row) {
  try { await saveRow('users', 'upsert', row); await checkReadable('users', row.id); } catch (e) { throw new Error('Enregistrement du compte impossible : ' + e.message); }
}
async function flushPendingProfile() {
  const p = LS.get('pending_profile', null);
  if (!p || !S.user || norm(p.email) !== norm(S.user.email)) return;
  try {
    p.row.id = S.user.id;
    if (p.kind === 'artist') {
      const blobs = await Promise.all((p.photos || []).map(dataUrlToBlob));
      await pushArtistRow(p.row, blobs);
      const ar = await sb.from('artists').select('*, photos:artist_photos(*)').eq('id', S.user.id).maybeSingle(); S.artist = ar.data || S.artist;
    } else {
      await pushUserRow(p.row);
      const ur = await sb.from('users').select('*').eq('id', S.user.id).maybeSingle(); S.client = ur.data || S.client;
    }
    LS.set('pending_profile', null);
    toast('Votre profil a bien été enregistré');
  } catch (e) { console.warn('[Wimbo] profil en attente', e); }
}
/* signUp tolérant : récupère l'UID si le compte existe déjà (double rôle artiste + organisateur) */
async function signUpOrIn(email, password, meta) {
  const { data, error } = await withTimeout(sb.auth.signUp({ email, password, options: { data: meta, emailRedirectTo: location.origin + '/' } }), 15000, { data: null, error: { message: 'timeout' } });
  const exists = (error && /already|registered|exists/i.test(error.message)) || (data && data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0);
  if (exists) {
    const si = await sb.auth.signInWithPassword({ email, password });
    if (si.error) throw new Error('Un compte existe déjà avec cet email. Utilisez le même mot de passe, ou « Mot de passe oublié » sur la page de connexion.');
    return { user: si.data.user, session: si.data.session };
  }
  if (error) throw new Error(friendlyAuthError(error.message));
  return { user: data.user, session: data.session };
}

function authLayout(sidePhoto, sideTitle, sideText, inner) {
  return '<div class="auth-wrap"><div class="auth-side"><img src="' + U(sidePhoto, 1200, 1400) + '" alt=""><div class="in on-dark"><span class="eyebrow">Wimbo</span><h2 class="h-lg" style="text-transform:uppercase">' + sideTitle + '</h2><p class="lead" style="margin-top:14px">' + sideText + '</p></div></div><div class="auth-main"><div class="auth-card"><a href="/"><img class="auth-logo" src="' + LOGO_DARK + '" alt="Wimbo"></a>' + inner + '</div></div></div>';
}
function pLogin(q) {
  const redirect = q.get('redirect') || '';
  if (S.user) return { title: 'Connexion · Wimbo', html: '<section class="section"><div class="wrap center"><h1 class="h-md">Vous êtes déjà connecté</h1><p class="muted">' + esc(S.user.email) + '</p><div style="display:flex;gap:10px;justify-content:center;margin-top:20px">' + (S.artist ? '<a class="btn btn-primary" href="/espace-artiste">Espace artiste</a>' : '') + '<a class="btn btn-dark" href="/mon-espace">Mon espace</a><button class="btn btn-ghost" data-logout>Se déconnecter</button></div></div></section>' };
  const html = authLayout(P.singerArms, 'Bon retour<br>parmi nous', 'Retrouvez vos demandes, vos favoris et votre espace artiste.',
    '<h1>Se connecter</h1><p class="muted">Un seul compte pour vos espaces organisateur et artiste.</p>' +
    '<form class="form" data-form="login" data-redirect="' + esc(redirect) + '" novalidate style="margin-top:24px">' +
      '<div class="fld"><label>Email</label><input type="email" name="email" autocomplete="email" required></div>' +
      '<div class="fld"><label>Mot de passe</label><input type="password" name="password" autocomplete="current-password" required></div>' +
      '<div style="text-align:right;margin-top:-4px"><a class="link small" href="/mot-de-passe-oublie">Mot de passe oublié ?</a></div>' +
      '<div class="alert alert-err hide" data-err></div>' +
      '<button class="btn btn-primary btn-lg btn-block" type="submit">Se connecter</button></form>' +
    '<div class="alert alert-info" style="margin-top:20px">Pas encore de compte ? <a class="link" href="/inscription">Je cherche un artiste</a> · <a class="link" href="/inscription-artiste">Je suis artiste</a></div>' +
    '<p class="tiny muted" style="margin-top:18px">Démonstration : <strong>demo@wimbo.dev</strong> ouvre un espace artiste complet.</p>');
  return { title: 'Connexion · Wimbo', html };
}
function pForgot() {
  const html = authLayout(P.micBokeh, 'Pas de<br>panique', 'Nous vous envoyons un lien pour choisir un nouveau mot de passe.',
    '<h1>Mot de passe oublié</h1><p class="muted">Indiquez l\'email de votre compte.</p><form class="form" data-form="forgot" novalidate style="margin-top:22px"><div class="fld"><label>Email</label><input type="email" name="email" required autocomplete="email"></div><div class="alert alert-err hide" data-err></div><div class="alert alert-ok hide" data-ok></div><button class="btn btn-primary btn-lg btn-block" type="submit">Recevoir le lien</button></form><p style="margin-top:18px"><a class="link" href="/connexion">Retour à la connexion</a></p>');
  return { title: 'Mot de passe oublié · Wimbo', html };
}
function pNewPassword() {
  const html = authLayout(P.micBokeh, 'Nouveau<br>départ', 'Choisissez un mot de passe d\'au moins 8 caractères.',
    '<h1>Nouveau mot de passe</h1>' + (S.user ? '<form class="form" data-form="newpass" novalidate style="margin-top:22px"><div class="fld"><label>Nouveau mot de passe</label><input type="password" name="password" minlength="8" required autocomplete="new-password"><span class="hint">8 caractères minimum. Astuce : une phrase courte, comme « guitare bleue 2027 ».</span></div><div class="alert alert-err hide" data-err></div><button class="btn btn-primary btn-lg btn-block" type="submit">Enregistrer</button></form>' : '<p class="muted">Ce lien a expiré ou a déjà été utilisé.</p><a class="btn btn-primary" href="/mot-de-passe-oublie">Demander un nouveau lien</a>'));
  return { title: 'Nouveau mot de passe · Wimbo', html };
}
function pSignupUser(q) {
  const email = q.get('email') || '';
  const loggedArtist = S.user && S.artist && !S.client;
  if (S.user && S.client) { location.hash = '#/mon-espace'; return { title: 'Wimbo', html: '' }; }
  const html = authLayout(P.friendsToast, 'La musique qui rapproche,<br>les émotions qui restent', 'Créez votre compte pour suivre vos demandes, retrouver vos favoris et réserver en quelques clics.',
    '<h1>Créer mon compte</h1><p class="muted">Gratuit, en 1 minute. Pour organiser un événement.</p>' +
    '<form class="form" data-form="signup-user" novalidate style="margin-top:22px">' +
      '<div class="row2"><div class="fld"><label>Prénom</label><input name="first_name" autocomplete="given-name" required value="' + esc(loggedArtist ? S.artist.first_name : '') + '"></div><div class="fld"><label>Nom</label><input name="last_name" autocomplete="family-name" required value="' + esc(loggedArtist ? S.artist.last_name : '') + '"></div></div>' +
      (loggedArtist ? '<div class="alert alert-info">Vous êtes connecté avec <strong>' + esc(S.user.email) + '</strong> : votre espace organisateur sera lié à votre compte artiste.</div>' :
      '<div class="fld"><label>Email</label><input type="email" name="email" autocomplete="email" required value="' + esc(email) + '"></div>' +
      '<div class="fld"><label>Mot de passe</label><input type="password" name="password" minlength="8" autocomplete="new-password" required><span class="hint">8 caractères minimum. Astuce : une phrase courte, comme « mariage de ma fille 2027 ».</span></div>') +
      '<div class="row2"><div class="fld"><label>Téléphone <span class="opt">(facultatif)</span></label><input type="tel" name="phone" autocomplete="tel"></div><div class="fld"><label>Ville <span class="opt">(facultatif)</span></label>' + cityField({ name: 'city', withCountry: true, placeholder: 'Ex. : Paris' }) + '</div></div>' +
      '<label class="check"><input type="checkbox" name="consent" required> J\'accepte les <a class="link" href="/cgv" target="_blank">CGV</a> et la <a class="link" href="/confidentialite" target="_blank">politique de confidentialité</a>.</label>' +
      '<div class="alert alert-err hide" data-err></div>' +
      '<button class="btn btn-primary btn-lg btn-block" type="submit">Créer mon compte</button></form>' +
    '<p style="margin-top:18px" class="small">Déjà inscrit ? <a class="link" href="/connexion">Se connecter</a> · Vous êtes artiste ? <a class="link" href="/inscription-artiste">Créer un profil artiste</a></p>');
  return { title: 'Créer un compte · Wimbo', html };
}

/* Tarif : montant indicatif OU « sur devis » (base_price_eur = 0 signifie « sur devis » choisi explicitement) */
const isSurDevis = v => v !== null && v !== undefined && v !== '' && Number(v) === 0;
function priceField(isDevis, value, name) {
  return '<div class="fld"><label>Votre tarif</label>' +
    '<div class="price-mode"><label class="ck"><input type="radio" name="price_mode" value="price"' + (!isDevis ? ' checked' : '') + '> J\'affiche un tarif indicatif</label>' +
    '<label class="ck"><input type="radio" name="price_mode" value="devis"' + (isDevis ? ' checked' : '') + '> Sur devis uniquement</label></div>' +
    '<div data-price-box' + (isDevis ? ' class="hide"' : '') + '><input type="number" name="' + name + '" min="50" max="20000" step="10" placeholder="Ex. : 600" value="' + esc(value || '') + '"><span class="hint" style="display:block;margin-top:6px">En euros, pour une prestation de 2 h. C\'est un prix « à partir de » : vous l\'ajustez à chaque devis.</span></div>' +
    '<span class="hint' + (isDevis ? '' : ' hide') + '" data-devis-hint>Votre profil affichera « Sur devis » : vous fixez le prix au cas par cas, à chaque demande.</span></div>';
}

/* Vignettes « instruments et spécialités » + champ « Autre » pour les instruments rares */
function instrumentPicker(selected, otherText) {
  const sel = selected || [];
  const hasOther = !!(otherText && otherText.trim());
  return '<div class="fld"><label>Instruments et spécialités <span class="opt">(cliquez pour choisir, plusieurs possibles)</span></label>' +
    '<div class="pick-chips" data-pick="instr">' + Object.keys(INSTR_CHIP).map(k => '<span class="chip' + (sel.includes(k) ? ' on' : '') + '" data-val="' + k + '">' + esc(cL(k)) + '</span>').join('') +
    '<span class="chip chip-other' + (hasOther ? ' on' : '') + '" data-other-toggle>' + ic('plus', 'icon-sm') + ' Autre</span></div>' +
    '<div class="' + (hasOther ? '' : 'hide') + '" data-other-box style="margin-top:8px"><input name="instr_other" placeholder="Ex. : kora, oud, steel drum (séparez par des virgules)" value="' + esc(otherText || '') + '"></div></div>';
}
function videoFields(list) {
  const v = (list || []).concat(['', '', '']).slice(0, 3);
  return '<div class="fld"><label>Vidéos <span class="opt">(facultatif, jusqu\'à 3 liens)</span></label>' +
    v.map((x, i) => '<input name="video' + i + '" inputmode="url" placeholder="Lien YouTube, Vimeo, Instagram ou TikTok" value="' + esc(x) + '"' + (i ? ' style="margin-top:8px"' : '') + '>').join('') +
    '<span class="hint" style="display:block;margin-top:6px">Copiez l\'adresse de la vidéo depuis YouTube, Vimeo, Instagram ou TikTok. Les vidéos YouTube et Vimeo se lisent directement sur votre fiche.</span></div>';
}
function readVideos(fd) {
  const out = []; let bad = false;
  [0, 1, 2].forEach(i => { const u = (fd.get('video' + i) || '').toString().trim(); if (!u) return; if (parseVideo(u)) out.push(u); else bad = true; });
  return { list: out, bad };
}

/* --- Inscription artiste : assistant en 3 étapes --- */
let WZ = { step: 1, data: {}, photos: [] };
function pSignupArtist(q) {
  if (S.user && S.artist) { location.hash = '#/espace-artiste'; return { title: 'Wimbo', html: '' }; }
  const offre = q && q.get('offre');
  WZ = { step: 1, data: { plan_requested: PLAN_LIMITS[offre] ? offre : null }, photos: [], videos: [] };
  const html = authLayout(P.womanGuitarStage, 'Votre art,<br>leurs émotions', (seatsLeft() > 0 ? T('Il reste {n} places de membres fondateurs : Premium offert à vie.', { n: seatsLeft() }) : 'Créez votre profil gratuitement.') + ' ' + 'Inscription gratuite en 5 minutes.', '<div id="wizard"></div>');
  return { title: 'Inscription artiste · Wimbo', html, after: renderWizard };
}
function renderWizard() {
  const box = $('#wizard'); if (!box) return;
  const d = WZ.data; const s = WZ.step;
  const logged = !!S.user;
  const head = '<span class="eyebrow">' + T('Étape {n} sur 3', { n: s }) + '</span><h1>' + ['Votre compte', 'Votre musique', 'Vos photos'][s - 1] + '</h1><div class="wizard-steps"><div class="on"></div><div class="' + (s >= 2 ? 'on' : '') + '"></div><div class="' + (s >= 3 ? 'on' : '') + '"></div></div>';
  let body = '';
  if (s === 1) {
    body = '<form class="form" data-form="wz1" novalidate>' +
      '<div class="row2"><div class="fld"><label>Prénom</label><input name="first_name" required autocomplete="given-name" value="' + esc(d.first_name || (S.client && S.client.first_name) || '') + '"></div><div class="fld"><label>Nom</label><input name="last_name" required autocomplete="family-name" value="' + esc(d.last_name || (S.client && S.client.last_name) || '') + '"></div></div>' +
      (logged ? '<div class="alert alert-info">Connecté avec <strong>' + esc(S.user.email) + '</strong> : votre profil artiste sera lié à ce compte.</div>' :
        '<div class="fld"><label>Email</label><input type="email" name="email" required autocomplete="email" value="' + esc(d.email || '') + '"></div>' +
        '<div class="fld"><label>Mot de passe</label><input type="password" name="password" minlength="8" required autocomplete="new-password" value="' + esc(d.password || '') + '"><span class="hint">8 caractères minimum. Astuce : une phrase courte, comme « guitare bleue 2027 ».</span></div>') +
      '<div class="fld"><label>Téléphone</label><input type="tel" name="phone" required autocomplete="tel" placeholder="06 12 34 56 78" value="' + esc(d.phone || '') + '"><span class="hint">Pour vous prévenir par SMS quand un client vous contacte. Jamais partagé.</span></div>' +
      '<label class="check"><input type="checkbox" name="consent" required' + (d.consent ? ' checked' : '') + '> J\'accepte les <a class="link" href="/cgv" target="_blank">CGV</a> et la <a class="link" href="/confidentialite" target="_blank">politique de confidentialité</a>.</label>' +
      '<div class="alert alert-err hide" data-err></div><button class="btn btn-primary btn-lg btn-block" type="submit">Continuer ' + ic('arrowR') + '</button></form>' +
      (logged ? '' : '<p class="small" style="margin-top:16px">Déjà inscrit ? <a class="link" href="/connexion">Se connecter</a></p>');
  } else if (s === 2) {
    const g = d.genres || [];
    body = '<form class="form" data-form="wz2" novalidate>' +
      '<div class="fld"><label>Vous êtes</label><select name="type" required>' + Object.keys(ARTIST_TYPES).map(k => '<option value="' + k + '"' + (d.type === k ? ' selected' : '') + '>' + esc(tyL(k)) + '</option>').join('') + '</select></div>' +
      '<div class="fld"><label>Nom de scène <span class="opt">(facultatif)</span></label><input name="stage_name" placeholder="Ex. : Trio Étincelles" value="' + esc(d.stage_name || '') + '"><span class="hint">Sinon, nous affichons votre prénom et votre nom.</span></div>' +
      instrumentPicker(d.instruments, d.instr_other) +
      '<div class="fld"><label>Vos styles <span class="opt">(cliquez pour choisir)</span></label><div class="pick-chips" data-pick="genres">' + Object.keys(GENRES).map(k => '<span class="chip' + (g.includes(k) ? ' on' : '') + '" data-val="' + k + '">' + esc(gL(k)) + '</span>').join('') + '</div></div>' +
      '<div class="fld"><label>Votre ville</label>' + cityField({ name: 'city', value: d.city, country: d.country, withCountry: true, required: true }) + '<span class="hint">Commencez à taper puis choisissez dans la liste : le pays est ajouté automatiquement.</span></div>' +
      priceField(d.price_mode === 'devis', d.price, 'price') +
      '<div class="fld"><label>Statut</label><select name="legal_status">' + [['intermittent', 'Intermittent du spectacle'], ['auto-entrepreneur', 'Auto-entrepreneur'], ['association', 'Association / structure'], ['salarie', 'Salarié'], ['autre', 'Autre / je ne sais pas']].map(o => '<option value="' + o[0] + '"' + (d.legal_status === o[0] ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select></div>' +
      '<div class="alert alert-err hide" data-err></div>' +
      '<div style="display:flex;gap:10px"><button type="button" class="btn btn-ghost" data-wz-back>Retour</button><button class="btn btn-primary btn-lg" style="flex:1" type="submit">Continuer ' + ic('arrowR') + '</button></div></form>';
  } else {
    body = '<form class="form" data-form="wz3" novalidate>' +
      '<div class="fld"><label>Photos <span class="opt">(recommandé, jusqu\'à 4 : la première sera votre photo principale)</span></label><div class="photo-slots">' +
        [0, 1, 2, 3].map(i => WZ.photos[i] ? '<div class="photo-slot"><img src="' + WZ.photos[i].dataUrl + '" alt=""><button type="button" class="rm" data-rm-photo="' + i + '" aria-label="Retirer">×</button></div>' : '<label class="photo-slot">' + ic('plus') + '<input type="file" accept="image/*" data-photo-slot="' + i + '" hidden></label>').join('') +
      '</div><span class="hint">Conseil : une photo en situation (sur scène, avec votre instrument) attire bien plus de demandes.</span></div>' +
      wizardPlanBox() + wizardVideos() +
      '<div class="fld"><label>Présentez-vous <span class="opt">(facultatif)</span></label><textarea name="bio" placeholder="Votre parcours, votre répertoire, les événements que vous animez…">' + esc(d.bio || '') + '</textarea></div>' +
      '<div class="alert alert-err hide" data-err></div>' +
      '<div style="display:flex;gap:10px"><button type="button" class="btn btn-ghost" data-wz-back>Retour</button><button class="btn btn-primary btn-lg" style="flex:1" type="submit">Créer mon profil</button></div>' +
      '<p class="tiny muted center">Pas de photo sous la main ? Créez votre profil maintenant et ajoutez-les plus tard depuis votre espace.</p></form>';
  }
  box.innerHTML = head + body;
  const first = box.querySelector('input:not([type=checkbox]):not([type=file]), select'); if (first) first.focus();
}
function artistRowFromWizard(id) {
  const d = WZ.data;
  const disc = { chanteur: 'chanteur', musicien: 'musicien', groupe: 'groupe', dj: 'musicien', ensemble: 'groupe' }[d.type] || 'musicien';
  const inst = instrumentsText(d.instruments || [], d.instr_other) || (d.type === 'dj' ? 'DJ' : '');
  return {
    id, first_name: d.first_name, last_name: d.last_name, stage_name: d.stage_name || null,
    email: (S.user ? S.user.email : d.email).toLowerCase(), phone: d.phone, discipline: disc, main_instrument: inst || null,
    styles: d.genres || [], city: d.city, country: d.country || 'FR', travel_radius_km: 50, willing_to_travel: true,
    video_urls: d.videos || [], portfolio_youtube: (d.videos || []).find(u => /youtu/.test(u)) || null,
    plan_requested: d.plan_requested || null,
    base_price_eur: d.price_mode === 'devis' ? 0 : (d.price ? Number(d.price) : null), legal_status: d.legal_status || 'autre', status: 'pending', bio: d.bio || null
  };
}
async function submitArtistWizard(btn) {
  if (!sb) throw new Error('Connexion au serveur impossible. Vérifiez votre connexion internet.');
  const d = WZ.data;
  let user = S.user, session = S.session;
  if (user) { const cur = await withTimeout(sb.auth.getSession(), 6000, null); if (cur && cur.data && cur.data.session) { session = cur.data.session; user = session.user; } }
  if (!user) {
    const r = await signUpOrIn(d.email.trim().toLowerCase(), d.password, { first_name: d.first_name, last_name: d.last_name, stage_name: d.stage_name || null });
    user = r.user; session = r.session;
  }
  const row = artistRowFromWizard(user && user.id);
  if (!session) {
    LS.set('pending_profile', { kind: 'artist', email: row.email, row, photos: WZ.photos.map(p => p.dataUrl) });
    return 'confirm';
  }
  await pushArtistRow(row, WZ.photos.map(p => p.blob));
  WZ.videoError = null;
  if (WZ.videos.length) {
    try { await uploadArtistVideos(row.id, WZ.videos, (i, n) => { if (btn) btn.innerHTML = T('Envoi de la vidéo {i} sur {n}…', { i, n }); }); }
    catch (e) { WZ.videoError = e.message; }
  }
  await setSession(session);
  S.role = 'artist'; LS.set('role', 'artist');
  loadSeats();
  return 'ok';
}

/* =====================================================================
   ESPACE ARTISTE
   ===================================================================== */
const DASH_TABS_ARTIST = [['apercu', 'home', 'Aperçu'], ['demandes', 'inbox', 'Demandes'], ['profil', 'edit', 'Mon profil'], ['calendrier', 'calendar', 'Calendrier'], ['paiements', 'card', 'Paiements'], ['abonnement', 'star', 'Abonnement']];
let ART_REQS = [];
function demoReqs() { return LS.get('demo_reqs', null) || DEMO_DASHBOARD.requests.map(r => Object.assign({ demo: true }, r)); }
async function fetchArtistRequests() {
  let rows = [];
  if (sb && S.user) {
    const { data, error } = await withTimeout(sb.from('demandes').select('*').eq('artist_id', S.user.id).order('created_at', { ascending: false }), 6000, { data: null, error: { message: 'délai dépassé' } });
    if (!error && data) rows = data; else if (error) console.info('[Wimbo] demandes :', error.message);
  }
  if (isDemoAccount()) rows = rows.concat(demoReqs());
  return rows;
}
function dashShell(kind, tab, content, title, sub) {
  const tabs = kind === 'artist' ? DASH_TABS_ARTIST : DASH_TABS_CLIENT;
  const base = kind === 'artist' ? '/espace-artiste' : '/mon-espace';
  return '<section class="page-hero" style="padding:0"><div class="wrap" style="padding-top:44px;padding-bottom:44px"><span class="eyebrow">' + (kind === 'artist' ? 'Espace artiste' : 'Espace organisateur') + '</span><h1 class="h-md">' + title + '</h1>' + (sub ? '<p class="lead" style="margin-top:8px">' + sub + '</p>' : '') + '</div></section>' +
    '<div class="wrap dash"><nav class="dash-nav">' + tabs.map(t => '<a href="' + base + '?tab=' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + ic(t[1]) + ' ' + t[2] + (t[0] === 'demandes' ? '<span class="cnt hide" data-req-count></span>' : '') + '</a>').join('') + '</nav><div id="dash-content">' + content + '</div></div>';
}
function profileCompletion(ar) {
  const checks = [
    [!!ar.bio && ar.bio.length > 40, 'Rédiger une présentation (40 caractères minimum)'],
    [(ar.photos || []).length >= 3, 'Ajouter au moins 3 photos'],
    [ar.base_price_eur !== null && ar.base_price_eur !== undefined, 'Indiquer un tarif ou choisir « sur devis »'],
    [(ar.styles || []).length > 0, 'Choisir vos styles'],
    [!!(ar.portfolio_youtube || ar.portfolio_instagram), 'Ajouter un lien vidéo ou Instagram'],
    [!!(ar.availability && ar.availability.unavailable && ar.availability.unavailable.length), 'Renseigner vos indisponibilités']
  ];
  return { pct: Math.round(checks.filter(c => c[0]).length / checks.length * 100), todo: checks.filter(c => !c[0]).map(c => c[1]) };
}
async function pArtistSpace(q) {
  if (!S.authReady) await withTimeout(authPromise, 6000, null);
  if (!S.user) { location.hash = '#/connexion?redirect=' + encodeURIComponent('/espace-artiste'); return { title: 'Wimbo', html: '' }; }
  if (!S.artist) return { title: 'Espace artiste · Wimbo', html: '<section class="section"><div class="wrap center"><span class="eyebrow">Espace artiste</span><h1 class="h-lg">Vous n\'avez pas encore de profil artiste</h1><p class="lead" style="margin:16px auto 26px">Créez-le en 3 minutes avec votre compte actuel.</p><a class="btn btn-primary btn-lg" href="/inscription-artiste">Créer mon profil artiste</a></div></section>' };
  S.role = 'artist'; LS.set('role', 'artist');
  const tab = q.get('tab') || 'apercu';
  const ar = S.artist;
  const name = ar.stage_name || ar.first_name;
  return { title: 'Espace artiste · Wimbo', html: dashShell('artist', tab, '<div class="loading"><div class="spinner"></div>Chargement…</div>', T('Bonjour {name}', { name: esc(name) }), null), after: () => renderArtistTab(tab) };
}
async function renderArtistTab(tab) {
  const box = $('#dash-content'); if (!box) return;
  const ar = S.artist; const demo = isDemoAccount();
  ART_REQS = await fetchArtistRequests();
  const nNew = ART_REQS.filter(r => r.status === 'nouvelle').length;
  $$('[data-req-count]').forEach(e => { e.textContent = nNew; e.classList.toggle('hide', !nNew); });
  const pending = ar.status !== 'validated';
  const banner = pending ? '<div class="banner-st pending"><div><strong>Profil en cours de validation.</strong> Notre équipe le vérifie sous 48 h. En attendant, complétez-le pour qu\'il soit prêt.</div><a class="btn btn-dark btn-sm" href="/artiste/' + ar.id + '">Voir l\'aperçu</a></div>' :
    '<div class="banner-st ok"><div><strong>Votre profil est en ligne.</strong> Les organisateurs peuvent vous trouver et vous contacter.</div><a class="btn btn-dark btn-sm" href="/artiste/' + ar.id + '">Voir mon profil public</a></div>';
  let h = '';
  if (tab === 'apercu') {
    const comp = profileCompletion(ar);
    const k = demo ? DEMO_DASHBOARD.kpis : { views: null, requests: ART_REQS.length, responseRate: ART_REQS.length ? Math.round(ART_REQS.filter(r => r.status !== 'nouvelle').length / ART_REQS.length * 100) : null, revenue: 0 };
    h = banner + '<div class="kpis">' +
      '<div class="kpi"><span>Vues du profil (30 j)</span><strong>' + (k.views != null ? k.views.toLocaleString('fr-FR') : '—') + '</strong></div>' +
      '<div class="kpi"><span>Demandes reçues</span><strong>' + k.requests + '</strong></div>' +
      '<div class="kpi"><span>Taux de réponse</span><strong>' + (k.responseRate != null ? k.responseRate + ' %' : '—') + '</strong></div>' +
      '<div class="kpi"><span>Revenus encaissés</span><strong>' + fmtEUR(k.revenue) + '</strong></div></div>' +
      '<div class="two-col" style="align-items:start;gap:24px">' +
        '<div class="box"><h3 class="h-md" style="font-size:19px;margin-bottom:12px">' + T('Profil complété à {n} %', { n: comp.pct }) + '</h3><div class="bar" style="height:10px;margin-bottom:18px"><i style="width:' + comp.pct + '%"></i></div>' +
          (comp.todo.length ? '<ul style="padding-left:18px;margin:0 0 16px;color:var(--ink-2)">' + comp.todo.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul><a class="btn btn-primary btn-sm" href="/espace-artiste?tab=profil">Compléter mon profil</a>' : '<p class="muted">Bravo, votre profil est complet !</p>') + '</div>' +
        '<div class="box"><h3 class="h-md" style="font-size:19px;margin-bottom:12px">Dernières demandes</h3>' + (ART_REQS.length ? ART_REQS.slice(0, 3).map(r => '<div style="display:flex;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--line-2)"><div><strong>' + esc(r.client_name) + '</strong><div class="small muted">' + esc(r.event_type) + ' · ' + (r.event_date ? fmtDate(r.event_date) : '') + '</div></div>' + statusBadge(r.status) + '</div>').join('') + '<a class="link small" style="display:inline-block;margin-top:12px" href="/espace-artiste?tab=demandes">Toutes les demandes</a>' : '<p class="muted">Aucune demande pour l\'instant. Un profil complet avec de belles photos reçoit bien plus de demandes.</p>') + '</div>' +
      '</div>';
  } else if (tab === 'demandes') {
    h = '<div class="res-head"><h2 class="h-md">Demandes reçues</h2></div>' + (ART_REQS.length ? ART_REQS.map(reqCardArtist).join('') : '<div class="empty"><div class="em-ic">' + ic('inbox') + '</div><h3 class="h-md" style="font-size:20px">Aucune demande pour le moment</h3><p class="muted">Dès qu\'un organisateur vous contacte, sa demande apparaît ici et vous êtes prévenu par email.</p></div>');
  } else if (tab === 'profil') {
    const st = ar.styles || [];
    h = '<div class="box" style="margin-bottom:22px"><h2 class="h-md" style="font-size:21px;margin-bottom:18px">Mes informations</h2><form class="form" data-form="artist-profile" novalidate>' +
      '<div class="fld"><label>Nom de scène</label><input name="stage_name" value="' + esc(ar.stage_name || '') + '"></div>' +
      (function () { const pi = parseInstruments(ar.main_instrument); return instrumentPicker(pi.slugs, pi.extra.join(', ')); })() +
      '<div class="fld"><label>Présentation</label><textarea name="bio" style="min-height:140px">' + esc(ar.bio || '') + '</textarea></div>' +
      '<div class="fld"><label>Styles</label><div class="pick-chips" data-pick="styles">' + Object.keys(GENRES).map(k => '<span class="chip' + (mapStyles(st).includes(k) ? ' on' : '') + '" data-val="' + k + '">' + esc(gL(k)) + '</span>').join('') + '</div></div>' +
      '<div class="fld"><label>Ville</label>' + cityField({ name: 'city', value: ar.city || '', country: ar.country && ar.country !== 'OTHER' ? ar.country : '', withCountry: true }) + '</div>' +
      '<div class="row2"><div class="fld"><label>Rayon de déplacement (km)</label><input type="number" name="travel_radius_km" min="0" max="2000" value="' + esc(ar.travel_radius_km || 50) + '"></div></div>' + priceField(isSurDevis(ar.base_price_eur), Number(ar.base_price_eur) > 0 ? Number(ar.base_price_eur) : '', 'base_price_eur') +
      '<label class="check"><input type="checkbox" name="willing_to_travel"' + (ar.willing_to_travel ? ' checked' : '') + '> Je peux me déplacer au-delà de mon rayon (frais en sus)</label>' +
      (limitsOf(ar).videos ? videoFields(Array.isArray(ar.video_urls) && ar.video_urls.length ? ar.video_urls : (ar.portfolio_youtube ? [ar.portfolio_youtube] : [])) : '') +
      '<div class="row2"><div class="fld"><label>Instagram</label><input name="portfolio_instagram" placeholder="https://instagram.com/…" value="' + esc(ar.portfolio_instagram || '') + '"></div>' +
      '<div class="fld"><label>Site web</label><input name="portfolio_website" placeholder="https://…" value="' + esc(ar.portfolio_website || '') + '"></div></div>' +
      '<div class="alert alert-err hide" data-err></div><div><button class="btn btn-primary" type="submit">Enregistrer</button></div></form></div>' +
      dashPhotosBox(ar) + dashVideosBox(ar);
  } else if (tab === 'calendrier') {
    h = '<div class="box"><div class="res-head"><h2 class="h-md" style="font-size:21px">Mes disponibilités</h2><div class="car-btns"><button class="car-btn" data-cal="-1" aria-label="Mois précédent">' + ic('chevL') + '</button><button class="car-btn" data-cal="1" aria-label="Mois suivant">' + ic('chevR') + '</button></div></div><p class="muted small">Cliquez sur un jour pour le marquer indisponible. Les dates confirmées apparaissent en couleur.</p><div id="cal"></div><div style="display:flex;gap:18px;margin-top:16px;font-size:13.5px;flex-wrap:wrap"><span><span class="badge" style="background:var(--nuit);color:var(--ivoire)">&nbsp;</span> Indisponible</span><span><span class="badge badge-prem">&nbsp;</span> Prestation confirmée</span></div></div>';
  } else if (tab === 'paiements') {
    const pays = demo ? DEMO_DASHBOARD.payments : [];
    h = '<div class="box" style="margin-bottom:22px"><h2 class="h-md" style="font-size:21px;margin-bottom:14px">Mes paiements</h2>' + (pays.length ? '<table class="table"><thead><tr><th>Date</th><th>Prestation</th><th>Montant</th><th>Statut</th></tr></thead><tbody>' + pays.map(p => '<tr><td>' + fmtDate(p.date, { day: 'numeric', month: 'short' }) + '</td><td>' + esc(p.label) + '</td><td><strong>' + fmtEUR(p.amount) + '</strong></td><td><span class="badge ' + (p.status === 'Versé' ? 'badge-ok' : 'badge-warn') + '">' + p.status + '</span></td></tr>').join('') + '</tbody></table>' : '<p class="muted">Vos paiements apparaîtront ici après votre première prestation. Le solde est versé sous 48 h après chaque événement.</p>') + '</div>' +
      '<div class="box"><h3 class="h-md" style="font-size:19px;margin-bottom:8px">Coordonnées bancaires</h3><p class="muted small">Pour recevoir vos paiements, renseignez votre IBAN via notre prestataire de paiement sécurisé.</p><button class="btn btn-dark btn-sm" data-soon="Le versement des paiements sera activé à l\'ouverture des réservations.">Ajouter mon IBAN</button></div>';
  } else if (tab === 'abonnement') {
    h = dashPlanTab(ar);
  }
  box.innerHTML = h;
  if (tab === 'calendrier') renderCalendar();
}
function reqCardArtist(r) {
  return '<div class="req"><div class="rq-h"><strong>' + esc(r.client_name || 'Organisateur') + '</strong>' + statusBadge(r.status) + '</div>' +
    '<div class="rq-meta"><span>' + ic('music', 'icon-sm') + esc(r.event_type || '') + '</span><span>' + ic('calendar', 'icon-sm') + (r.event_date ? fmtDate(r.event_date) : 'Date à préciser') + '</span><span>' + ic('pin', 'icon-sm') + esc(r.event_city || '') + '</span>' + (r.guests ? '<span>' + ic('users', 'icon-sm') + T('{n} invités', { n: r.guests }) + '</span>' : '') + (r.duration ? '<span>' + ic('clock', 'icon-sm') + esc(r.duration) + '</span>' : '') + '</div>' +
    (r.message ? '<p class="rq-msg">' + esc(r.message) + '</p>' : '') +
    (r.quote_amount ? '<div class="small"><strong>Votre devis :</strong> ' + fmtEUR(r.quote_amount) + (r.quote_message ? ' · ' + esc(r.quote_message) : '') + '</div>' : '') +
    (r.status === 'nouvelle' ? '<div class="rq-act"><button class="btn btn-primary btn-sm" data-quote="' + r.id + '">Envoyer un devis</button><button class="btn btn-dark btn-sm" data-req-set="acceptee" data-id="' + r.id + '">Accepter</button><button class="btn btn-ghost btn-sm" data-req-set="refusee" data-id="' + r.id + '">Je ne suis pas disponible</button></div>' : '') +
    '<div class="tiny muted">' + T('Reçue le {date}', { date: fmtDate(r.created_at, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) }) + (r.client_email && r.status === 'acceptee' ? ' · ' + T('Contact : {email}', { email: esc(r.client_email) }) + (r.client_phone ? ' · ' + esc(r.client_phone) : '') : '') + '</div></div>';
}
async function updateRequest(id, patch) {
  const r = ART_REQS.find(x => String(x.id) === String(id)); if (!r) return;
  if (r.demo) {
    const all = demoReqs().map(x => x.id === id ? Object.assign(x, patch) : x); LS.set('demo_reqs', all);
  } else if (sb) {
    const { error } = await sb.from('demandes').update(patch).eq('id', id);
    if (error) { toast('Mise à jour impossible : ' + error.message); return; }
  }
  Object.assign(r, patch);
  toast(patch.status === 'acceptee' ? 'Demande acceptée, le client est prévenu' : patch.status === 'refusee' ? 'Demande déclinée' : 'Devis envoyé au client');
  renderArtistTab('demandes');
}
let CAL_OFFSET = 0;
function renderCalendar() {
  const box = $('#cal'); if (!box) return;
  const ar = S.artist;
  const off = new Set(((ar.availability || {}).unavailable) || []);
  const booked = new Set(ART_REQS.filter(r => r.status === 'acceptee' && r.event_date).map(r => String(r.event_date).slice(0, 10)));
  const now = new Date(); const d0 = new Date(now.getFullYear(), now.getMonth() + CAL_OFFSET, 1);
  const month = d0.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const startDay = (d0.getDay() + 6) % 7; const days = new Date(d0.getFullYear(), d0.getMonth() + 1, 0).getDate();
  let h = '<h3 style="font-size:18px;margin:6px 0 14px;text-transform:capitalize">' + month + '</h3><div class="cal">' + ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(x => '<div class="dh">' + x + '</div>').join('');
  for (let i = 0; i < startDay; i++) h += '<div class="blank"></div>';
  const today = todayISO();
  for (let day = 1; day <= days; day++) {
    const iso = d0.getFullYear() + '-' + String(d0.getMonth() + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
    const cls = iso < today ? 'past' : booked.has(iso) ? 'booked' : off.has(iso) ? 'off' : '';
    h += '<button class="' + cls + '" data-day="' + iso + '">' + day + '</button>';
  }
  box.innerHTML = h + '</div>';
}
async function toggleDay(iso) {
  const ar = S.artist; const av = Object.assign({}, ar.availability || {}); const set = new Set(av.unavailable || []);
  if (set.has(iso)) set.delete(iso); else set.add(iso);
  av.unavailable = Array.from(set).sort(); ar.availability = av;
  renderCalendar();
  if (sb) { const { error } = await sb.from('artists').update({ availability: av }).eq('id', ar.id); if (error) toast('Enregistrement impossible : ' + error.message); }
}

/* =====================================================================
   ESPACE ORGANISATEUR
   ===================================================================== */
const DASH_TABS_CLIENT = [['demandes', 'inbox', 'Mes demandes'], ['favoris', 'heart', 'Favoris'], ['compte', 'user', 'Mon compte']];
async function fetchClientRequests() {
  let rows = [];
  if (sb && S.user) { const { data, error } = await withTimeout(sb.from('demandes').select('*').eq('client_id', S.user.id).order('created_at', { ascending: false }), 6000, { data: null, error: { message: 'délai dépassé' } }); if (!error && data) rows = data; }
  const email = S.user ? norm(S.user.email) : '';
  const local = LS.get('demandes', []).filter(r => (S.user && r.client_id === S.user.id) || (email && norm(r.client_email) === email));
  local.forEach(l => { if (!rows.find(r => r.id === l.id)) rows.push(l); });
  return rows.sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
}
async function pClientSpace(q) {
  if (!S.authReady) await withTimeout(authPromise, 6000, null);
  if (!S.user) { location.hash = '#/connexion?redirect=' + encodeURIComponent('/mon-espace'); return { title: 'Wimbo', html: '' }; }
  const tab = q.get('tab') || 'demandes';
  if (S.client) { S.role = 'user'; LS.set('role', 'user'); }
  const name = S.client ? S.client.first_name : (S.artist ? S.artist.first_name : '');
  return { title: 'Mon espace · Wimbo', html: dashShell('client', tab, '<div class="loading"><div class="spinner"></div>Chargement…</div>', T('Bonjour {name}', { name: esc(name || '') }), 'Suivez vos demandes de devis et vos réservations.'), after: () => renderClientTab(tab) };
}
async function renderClientTab(tab) {
  const box = $('#dash-content'); if (!box) return;
  let h = '';
  if (tab === 'demandes') {
    const rows = await fetchClientRequests();
    h = '<div class="res-head"><h2 class="h-md">Mes demandes</h2><a class="btn btn-primary btn-sm" href="/recherche">' + ic('plus', 'icon-sm') + ' Nouvelle demande</a></div>' +
      (rows.length ? rows.map(r => { const a = findArtist(r.artist_slug); return '<div class="req"><div class="rq-h"><strong>' + (a ? '<a class="link" href="/artiste/' + a.slug + '">' + esc(a.name) + '</a>' : esc(r.artist_name || 'Artiste')) + '</strong>' + statusBadge(r.status) + '</div>' +
        '<div class="rq-meta"><span>' + ic('music', 'icon-sm') + esc(r.event_type || '') + '</span><span>' + ic('calendar', 'icon-sm') + (r.event_date ? fmtDate(r.event_date) : '') + '</span><span>' + ic('pin', 'icon-sm') + esc(r.event_city || '') + '</span></div>' +
        (r.status === 'devis_envoye' && r.quote_amount ? '<div class="alert alert-info"><strong>' + T('Devis reçu : {price}', { price: fmtEUR(r.quote_amount) }) + '</strong>' + (r.quote_message ? '<br>' + esc(r.quote_message) : '') + '</div><div class="rq-act"><button class="btn btn-primary btn-sm" data-accept-quote="' + r.id + '" data-amount="' + r.quote_amount + '">Accepter le devis</button></div>' : '') +
        (r.status === 'nouvelle' ? '<div class="small muted">' + ic('clock', 'icon-sm') + ' L\'artiste vous répond en général sous 2 à 3 heures.</div>' : '') +
        '<div class="tiny muted">' + T('Envoyée le {date}', { date: fmtDate(r.created_at, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) }) + '</div></div>'; }).join('') :
        '<div class="empty"><div class="em-ic">' + ic('inbox') + '</div><h3 class="h-md" style="font-size:20px">Aucune demande pour l\'instant</h3><p class="muted" style="margin:8px 0 20px">Trouvez un artiste et demandez un devis gratuit en 2 minutes.</p><a class="btn btn-primary" href="/recherche">Chercher un artiste</a></div>');
  } else if (tab === 'favoris') {
    const f = favs().map(findArtist).filter(Boolean);
    h = '<div class="res-head"><h2 class="h-md">Mes favoris</h2></div>' + (f.length ? '<div class="grid-cards">' + f.map(cardA).join('') + '</div>' : '<div class="empty"><div class="em-ic">' + ic('heart') + '</div><p class="muted">Cliquez sur le cœur d\'un profil pour le retrouver ici.</p><a class="btn btn-primary" href="/recherche">Découvrir les artistes</a></div>');
  } else {
    const c = S.client || {};
    h = '<div class="box"><h2 class="h-md" style="font-size:21px;margin-bottom:18px">Mon compte</h2>' + (!S.client ? '<div class="alert alert-info" style="margin-bottom:16px">Complétez ces informations pour activer votre espace organisateur.</div>' : '') +
      '<form class="form" data-form="client-profile" novalidate><div class="row2"><div class="fld"><label>Prénom</label><input name="first_name" required value="' + esc(c.first_name || (S.artist && S.artist.first_name) || '') + '"></div><div class="fld"><label>Nom</label><input name="last_name" required value="' + esc(c.last_name || (S.artist && S.artist.last_name) || '') + '"></div></div>' +
      '<div class="fld"><label>Email</label><input value="' + esc(S.user.email) + '" disabled></div>' +
      '<div class="row2"><div class="fld"><label>Téléphone</label><input type="tel" name="phone" value="' + esc(c.phone || '') + '"></div><div class="fld"><label>Ville</label>' + cityField({ name: 'city', value: c.city || '', country: c.country && c.country !== 'OTHER' ? c.country : '', withCountry: true, placeholder: 'Ex. : Paris' }) + '</div></div>' +
      '<label class="check"><input type="checkbox" name="notif_newsletter"' + (c.notif_newsletter ? ' checked' : '') + '> Recevoir la newsletter Wimbo (1 email par mois maximum)</label>' +
      '<div class="alert alert-err hide" data-err></div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-primary" type="submit">Enregistrer</button><a class="btn btn-ghost" href="/mot-de-passe-oublie">Changer mon mot de passe</a></div></form></div>';
  }
  box.innerHTML = h;
}

/* =====================================================================
   FORMULAIRES : envoi des données
   ===================================================================== */
function formErr(form, msg) { const e = form.querySelector('[data-err]'); if (!e) return toast(msg); e.textContent = msg; e.classList.toggle('hide', !msg); if (msg) e.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
async function busy(btn, on, label) {
  if (!btn) return;
  if (on) { btn.dataset.label = btn.innerHTML; btn.disabled = true; btn.innerHTML = label || 'Patientez…'; }
  else { btn.disabled = false; if (btn.dataset.label) btn.innerHTML = btn.dataset.label; }
}
/* File d'attente : si Supabase ne répond pas, on réessaie au prochain chargement */
async function pushOrQueue(table, row) {
  if (!sb) { queue(table, row); return false; }
  const { error } = await withTimeout(sb.from(table).insert(row), 7000, { error: { message: 'délai dépassé' } });
  if (error) { console.warn('[Wimbo] ' + table + ' :', error.message); queue(table, row); return false; }
  return true;
}
function queue(table, row) { const q = LS.get('queue', []); q.push({ table, row }); LS.set('queue', q); }
async function flushQueue() {
  const q = LS.get('queue', []); if (!q.length || !sb) return;
  const rest = [];
  for (const it of q) { const r = await withTimeout(sb.from(it.table).insert(it.row), 7000, { error: { message: 'délai dépassé' } }); if (r.error && !/duplicate/i.test(r.error.message)) rest.push(it); }
  LS.set('queue', rest);
}

const FORMS = {
  chat(form) { const inp = form.querySelector('input'); const v = inp.value; inp.value = ''; chatAsk(v); },
  search: form => submitSearch(form),
  filters: () => applyFilters(),
  async devis(form) {
    const a = findArtist(form.dataset.artist) || window.__artist; if (!a) return;
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    if (!g('event_date')) return formErr(form, 'Indiquez la date de votre événement.');
    if (g('event_date') < todayISO()) return formErr(form, 'La date de l\'événement doit être dans le futur.');
    if (!g('event_type')) return formErr(form, 'Choisissez le type d\'événement.');
    if (!g('event_city')) return formErr(form, 'Indiquez la ville de l\'événement.');
    const name = S.user ? ((S.client && (S.client.first_name + ' ' + (S.client.last_name || ''))) || (S.artist && (S.artist.first_name + ' ' + (S.artist.last_name || ''))) || S.user.email).trim() : g('client_name');
    const email = S.user ? S.user.email : g('client_email');
    if (!name) return formErr(form, 'Indiquez votre nom.');
    if (!isEmail(email)) return formErr(form, 'Indiquez une adresse email valide pour recevoir le devis.');
    formErr(form, '');
    const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Envoi en cours…');
    const row = {
      id: uid(), artist_slug: a.slug, artist_id: a.real ? a.id : null, artist_name: a.name,
      client_id: S.user ? S.user.id : null, client_name: name, client_email: email.toLowerCase(),
      client_phone: S.user ? ((S.client && S.client.phone) || null) : (g('client_phone') || null),
      event_type: EVENTS[g('event_type')] ? EVENTS[g('event_type')].label : g('event_type'), event_date: g('event_date'), event_city: g('event_city'),
      guests: g('guests') ? parseInt(g('guests'), 10) : null, duration: g('duration'), message: g('message') || null, status: 'nouvelle'
    };
    await pushOrQueue('demandes', row);
    const loc = LS.get('demandes', []); loc.unshift(Object.assign({ created_at: new Date().toISOString() }, row)); LS.set('demandes', loc.slice(0, 50));
    busy(btn, false); form.reset(); closeModal();
    openModal('<div class="success-ic">' + ic('check') + '</div><h2>' + T('Demande envoyée à {name} !', { name: esc(a.name) }) + '</h2><p class="muted">' + T('Vous recevrez une réponse à <strong>{email}</strong>, en général sous {time}.', { email: esc(email), time: esc(a.responseTime || '3 h') }) + '</p>' +
      '<div class="recap"><div><span>Événement</span><strong>' + esc(row.event_type) + '</strong></div><div><span>Date</span><strong>' + fmtDate(row.event_date) + '</strong></div><div><span>Ville</span><strong>' + esc(row.event_city) + '</strong></div>' + (row.guests ? '<div><span>Invités</span><strong>' + row.guests + '</strong></div>' : '') + '<div><span>Durée</span><strong>' + esc(row.duration) + '</strong></div></div>' +
      '<h4 style="font-size:16px;margin:18px 0 8px">La suite</h4><ol style="padding-left:20px;color:var(--ink-2);margin:0 0 20px;font-size:15px"><li>L\'artiste étudie votre demande et vous envoie un devis détaillé, cotisations GUSO comprises.</li><li>Vous validez et réglez 30 % d\'acompte : la date est bloquée.</li><li>Le jour J, place à la musique. Le solde est réglé après la prestation.</li></ol>' +
      (S.user ? '<a class="btn btn-primary btn-block" href="/mon-espace" data-close>Suivre ma demande</a>' : '<a class="btn btn-primary btn-block" href="/inscription?email=' + encodeURIComponent(email) + '" data-close>Créer mon compte pour suivre ma demande</a><button class="btn btn-ghost btn-block" style="margin-top:10px" data-close>Plus tard</button>'));
  },
  async contact(form) {
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    if (!g('first_name') || !g('last_name')) return formErr(form, 'Indiquez votre prénom et votre nom.');
    if (!isEmail(g('email'))) return formErr(form, 'Indiquez une adresse email valide.');
    if (!g('message')) return formErr(form, 'Écrivez votre message.');
    if (!fd.get('consent')) return formErr(form, 'Merci d\'accepter l\'utilisation de vos informations pour vous répondre.');
    formErr(form, ''); const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Envoi…');
    await pushOrQueue('contact_messages', { id: uid(), name: (g('first_name') + ' ' + g('last_name')).trim(), email: g('email').toLowerCase(), subject: g('subject'), message: g('message') });
    busy(btn, false);
    form.closest('.box').innerHTML = '<div class="success-ic">' + ic('check') + '</div><h2 class="h-md">Message bien reçu</h2><p class="muted">' + T('Merci {name}, nous vous répondons sous 24 h ouvrées à {email}.', { name: esc(g('first_name')), email: esc(g('email')) }) + '</p><a class="btn btn-dark" href="/">Retour à l\'accueil</a>';
  },
  async review(form) {
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    const sc = ['r1', 'r2', 'r3', 'r4'].map(k => parseInt(fd.get(k), 10) || 0);
    if (sc.some(x => !x)) return formErr(form, 'Merci de noter les 4 critères.');
    if (!g('author') || g('comment').length < 15) return formErr(form, 'Indiquez votre nom et un commentaire d\'au moins 15 caractères.');
    const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Envoi…');
    await pushOrQueue('avis', { id: uid(), artist_slug: form.dataset.artist, author_name: g('author'), event_type: g('event_type') || null, rating_music: sc[0], rating_comm: sc[1], rating_pro: sc[2], rating_kind: sc[3], comment: g('comment'), user_id: S.user ? S.user.id : null, status: 'en_attente' });
    busy(btn, false); closeModal(); toast('Merci ! Votre avis sera publié après vérification.');
  },
  async login(form) {
    if (!sb) return formErr(form, 'Connexion au serveur impossible.');
    const fd = new FormData(form); const email = (fd.get('email') || '').trim().toLowerCase(); const password = fd.get('password') || '';
    if (!isEmail(email) || !password) return formErr(form, 'Indiquez votre email et votre mot de passe.');
    formErr(form, ''); const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Connexion…');
    const { data, error } = await withTimeout(sb.auth.signInWithPassword({ email, password }), 12000, { data: null, error: { message: 'timeout' } });
    if (error) { busy(btn, false); return formErr(form, friendlyAuthError(error.message)); }
    await setSession(data.session); renderHeader(); renderDrawer(); busy(btn, false);
    const red = form.dataset.redirect;
    if (S.artist && S.client && !red) return roleChoice();
    location.hash = red ? '#' + red : (S.artist ? '#/espace-artiste' : '#/mon-espace');
    toast(T('Bienvenue {name}', { name: (S.artist && (S.artist.stage_name || S.artist.first_name)) || (S.client && S.client.first_name) || '' }).trim());
  },
  async forgot(form) {
    const email = (new FormData(form).get('email') || '').trim();
    if (!isEmail(email)) return formErr(form, 'Indiquez une adresse email valide.');
    const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Envoi…');
    const { error } = sb ? await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + '/' }) : { error: { message: 'Serveur indisponible' } };
    busy(btn, false);
    if (error) return formErr(form, friendlyAuthError(error.message));
    formErr(form, ''); const ok = form.querySelector('[data-ok]'); ok.textContent = T('Si un compte existe pour {email}, vous allez recevoir un lien de réinitialisation. Pensez à vérifier vos spams.', { email }); ok.classList.remove('hide');
  },
  async newpass(form) {
    const pw = new FormData(form).get('password') || '';
    if (pw.length < 8) return formErr(form, 'Choisissez au moins 8 caractères.');
    const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Enregistrement…');
    const { error } = await sb.auth.updateUser({ password: pw });
    busy(btn, false);
    if (error) return formErr(form, friendlyAuthError(error.message));
    toast('Mot de passe mis à jour'); location.hash = S.artist ? '#/espace-artiste' : '#/mon-espace';
  },
  async 'signup-user'(form) {
    if (!sb) return formErr(form, 'Connexion au serveur impossible.');
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    const logged = !!S.user;
    if (!g('first_name') || !g('last_name')) return formErr(form, 'Indiquez votre prénom et votre nom.');
    if (!logged && !isEmail(g('email'))) return formErr(form, 'Adresse email invalide (format attendu : nom@domaine.fr).');
    if (!logged && (fd.get('password') || '').length < 8) return formErr(form, 'Mot de passe trop court : 8 caractères minimum.');
    if (!fd.get('consent')) return formErr(form, 'Merci d\'accepter les CGV pour continuer.');
    formErr(form, ''); const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Création du compte…');
    try {
      let user = S.user, session = S.session;
      const email = logged ? S.user.email : g('email').toLowerCase();
      if (!logged) { const r = await signUpOrIn(email, fd.get('password'), { first_name: g('first_name'), last_name: g('last_name') }); user = r.user; session = r.session; }
      const row = { id: user && user.id, first_name: g('first_name'), last_name: g('last_name'), email, phone: g('phone') || null, city: g('city') || null, country: g('country') || 'FR' };
      if (!session) {
        LS.set('pending_profile', { kind: 'user', email, row });
        busy(btn, false);
        $('.auth-card').innerHTML = '<div class="success-ic">' + ic('mail') + '</div><h1 class="h-md">Vérifiez votre boîte mail</h1><p class="muted">' + T('Nous avons envoyé un lien de confirmation à <strong>{email}</strong>. Cliquez dessus, puis connectez-vous : votre compte sera prêt.', { email: esc(email) }) + '</p><a class="btn btn-primary" href="/connexion">Se connecter</a>';
        return;
      }
      await pushUserRow(row); await setSession(session); S.role = 'user'; LS.set('role', 'user'); renderHeader();
      busy(btn, false); toast(T('Bienvenue {name} !', { name: g('first_name') }));
      location.hash = '#/mon-espace';
    } catch (e) { busy(btn, false); formErr(form, e.message); }
  },
  wz1(form) {
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    if (!g('first_name') || !g('last_name')) return formErr(form, 'Indiquez votre prénom et votre nom.');
    if (!S.user && !isEmail(g('email'))) return formErr(form, 'Adresse email invalide (format attendu : nom@domaine.fr).');
    if (!S.user && (fd.get('password') || '').length < 8) return formErr(form, 'Mot de passe trop court : 8 caractères minimum (une phrase courte marche très bien).');
    if (g('phone').replace(/\D/g, '').length < 8) return formErr(form, 'Numéro de téléphone incomplet.');
    if (!fd.get('consent')) return formErr(form, 'Merci d\'accepter les CGV pour continuer.');
    Object.assign(WZ.data, { first_name: g('first_name'), last_name: g('last_name'), email: g('email'), password: fd.get('password'), phone: g('phone'), consent: true });
    WZ.step = 2; renderWizard(); window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  wz2(form) {
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    const genres = $$('[data-pick="genres"] .chip.on', form).map(c => c.dataset.val);
    const instruments = $$('[data-pick="instr"] .chip.on', form).map(c => c.dataset.val);
    const other = $('[data-other-box]', form).classList.contains('hide') ? '' : g('instr_other');
    if (!instruments.length && !other) return formErr(form, 'Choisissez au moins un instrument ou une spécialité (ou utilisez « Autre »).');
    if (!genres.length) return formErr(form, 'Choisissez au moins un style.');
    if (!g('city')) return formErr(form, 'Indiquez votre ville.');
    if (!g('country') && !AC.failed) return formErr(form, 'Choisissez votre ville dans la liste de suggestions : elle nous indique aussi le pays.');
    const mode = fd.get('price_mode') || 'price';
    if (mode === 'price' && !(Number(g('price')) > 0)) return formErr(form, 'Indiquez un tarif indicatif, ou choisissez « Sur devis uniquement ».');
    Object.assign(WZ.data, { type: g('type'), stage_name: g('stage_name'), instruments, instr_other: other, genres, city: g('city'), country: g('country') || 'FR', price_mode: mode, price: mode === 'devis' ? '' : g('price'), legal_status: g('legal_status') });
    WZ.step = 3; renderWizard(); window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  async wz3(form) {
    const fd3 = new FormData(form);
    WZ.data.bio = (fd3.get('bio') || '').toString().trim();
    if (fd3.get('plan_requested')) WZ.data.plan_requested = fd3.get('plan_requested');
    const vids = readVideos(fd3);
    if (vids.bad) return formErr(form, 'Un lien vidéo n\'est pas valide : copiez l\'adresse complète (elle commence par https://).');
    const vLim = PLAN_LIMITS[expectedPlan()].videos;
    if (vids.list.length + WZ.videos.length > vLim) return formErr(form, vLim ? T('Votre offre permet {n} vidéos au total (fichiers et liens).', { n: vLim }) : 'Les vidéos sont disponibles avec les offres Pro et Premium.');
    WZ.data.videos = vids.list;
    formErr(form, ''); const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Création de votre profil…');
    try {
      const res = await submitArtistWizard(btn);
      busy(btn, false);
      const nm = WZ.data.stage_name || WZ.data.first_name;
      if (res === 'confirm') {
        $('#wizard').innerHTML = '<div class="success-ic">' + ic('mail') + '</div><h1 class="h-md">' + T('Plus qu\'une étape, {name} !', { name: esc(nm) }) + '</h1><p class="muted">' + T('Nous avons envoyé un lien de confirmation à <strong>{email}</strong>. Cliquez dessus puis connectez-vous : votre profil et vos photos seront enregistrés automatiquement.', { email: esc(WZ.data.email) }) + '</p><a class="btn btn-primary" href="/connexion">Se connecter</a>';
        return;
      }
      renderHeader();
      $('#wizard').innerHTML = '<div class="success-ic">' + ic('check') + '</div><span class="badge badge-prem" style="margin-bottom:12px">' + ic('star', 'icon-sm') + ' Membre fondateur</span><h1 class="h-md">' + T('Bienvenue sur Wimbo, {name} !', { name: esc(nm) }) + '</h1><p class="muted">Votre profil est créé. Notre équipe le valide sous 48 h, vous serez prévenu par email. En attendant, complétez-le pour recevoir plus de demandes.</p>' + (WZ.videoError ? '<div class="alert alert-info">' + T('La vidéo n\'a pas pu être envoyée ({err}). Vous pourrez l\'ajouter depuis votre espace artiste.', { err: esc(WZ.videoError) }) + '</div>' : '') + '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><a class="btn btn-primary" href="/espace-artiste">Mon espace artiste</a><a class="btn btn-ghost" href="/artiste/' + (S.artist ? S.artist.id : '') + '">Voir mon profil</a></div>';
    } catch (e) { busy(btn, false); formErr(form, e.message); }
  },
  async 'artist-profile'(form) {
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    const instruments = $$('[data-pick="instr"] .chip.on', form).map(c => c.dataset.val);
    const other = $('[data-other-box]', form).classList.contains('hide') ? '' : g('instr_other');
    const vids = readVideos(fd);
    if (vids.bad) return formErr(form, 'Un lien vidéo n\'est pas valide : copiez l\'adresse complète (elle commence par https://).');
    if (g('city') && !g('country') && !AC.failed) return formErr(form, 'Choisissez votre ville dans la liste de suggestions : elle nous indique aussi le pays.');
    const vLim = limitsOf(S.artist).videos, vUp = (S.artist.videos || []).length;
    if (vids.list.length + vUp > vLim) return formErr(form, vLim ? T('Votre offre permet {n} vidéos au total (fichiers et liens).', { n: vLim }) : 'Les vidéos sont disponibles avec les offres Pro et Premium.');
    const patch = {
      stage_name: g('stage_name') || null, main_instrument: instrumentsText(instruments, other) || null, bio: g('bio') || null,
      styles: $$('[data-pick="styles"] .chip.on', form).map(c => c.dataset.val), city: g('city') || null, country: g('country') || S.artist.country || 'FR',
      video_urls: vids.list,
      travel_radius_km: parseInt(g('travel_radius_km'), 10) || 50, base_price_eur: fd.get('price_mode') === 'devis' ? 0 : Number(g('base_price_eur')),
      willing_to_travel: !!fd.get('willing_to_travel'), portfolio_youtube: vids.list.find(u => /youtu/.test(u)) || null, portfolio_instagram: g('portfolio_instagram') || null, portfolio_website: g('portfolio_website') || null
    };
    if (fd.get('price_mode') !== 'devis' && !(patch.base_price_eur > 0)) return formErr(form, 'Indiquez un tarif indicatif, ou choisissez « Sur devis uniquement ».');
    formErr(form, '');
    const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Enregistrement…');
    let saved = null;
    try { saved = await saveRow('artists', 'update', patch, S.artist.id); } catch (e) { busy(btn, false); return formErr(form, 'Enregistrement impossible : ' + e.message); }
    busy(btn, false);
    Object.assign(S.artist, saved); if (!('video_urls' in saved)) S.artist.video_urls = patch.video_urls;
    syncOwnCatalogEntry(); renderHeader(); toast('Profil enregistré');
  },
  async 'client-profile'(form) {
    const fd = new FormData(form); const g = k => (fd.get(k) || '').toString().trim();
    if (!g('first_name') || !g('last_name')) return formErr(form, 'Indiquez votre prénom et votre nom.');
    const row = { id: S.user.id, email: S.user.email, first_name: g('first_name'), last_name: g('last_name'), phone: g('phone') || null, city: g('city') || null, country: g('country') || (S.client && S.client.country) || 'FR', notif_newsletter: !!fd.get('notif_newsletter') };
    const btn = form.querySelector('[type=submit]'); busy(btn, true, 'Enregistrement…');
    try { await pushUserRow(row); await refreshProfiles(); toast('Informations enregistrées'); } catch (e) { formErr(form, e.message); }
    busy(btn, false);
  },
  async quote(form) {
    const fd = new FormData(form); const amount = parseFloat(fd.get('amount'));
    if (!amount || amount < 50) return formErr(form, 'Indiquez un montant valide.');
    closeModal();
    await updateRequest(form.dataset.id, { status: 'devis_envoye', quote_amount: amount, quote_message: (fd.get('message') || '').toString().trim() || null });
  }
};

/* ---------- Petites modales ---------- */
function roleChoice() {
  openModal('<h2>Quel espace souhaitez-vous ouvrir ?</h2><p class="muted">Votre compte a un profil artiste et un espace organisateur.</p><div style="display:grid;gap:12px;margin-top:20px">' +
    '<a class="box" style="display:flex;gap:14px;align-items:center;box-shadow:none;border:1.5px solid var(--line)" href="/espace-artiste" data-close data-setrole="artist"><span class="st-ic" style="width:48px;height:48px;border-radius:50%;background:var(--grad);display:grid;place-items:center;color:#fff">' + ic('mic') + '</span><div><strong>Espace artiste</strong><div class="small muted">Demandes reçues, profil, calendrier</div></div></a>' +
    '<a class="box" style="display:flex;gap:14px;align-items:center;box-shadow:none;border:1.5px solid var(--line)" href="/mon-espace" data-close data-setrole="user"><span class="st-ic" style="width:48px;height:48px;border-radius:50%;background:var(--nuit);display:grid;place-items:center;color:#fff">' + ic('user') + '</span><div><strong>Espace organisateur</strong><div class="small muted">Mes demandes de devis, favoris</div></div></a></div>');
}
function reviewModal(slug) {
  const a = findArtist(slug);
  const crit = ['Qualité musicale', 'Communication', 'Professionnalisme', 'Amabilité'];
  openModal('<h2>' + T('Votre avis sur {name}', { name: esc(a ? a.name : T('l\'artiste')) }) + '</h2><p class="muted small">Votre avis sera publié après vérification de la prestation.</p>' +
    '<form class="form" data-form="review" data-artist="' + esc(slug) + '" novalidate style="margin-top:16px">' +
    crit.map((c, i) => '<div class="fld"><label>' + c + '</label><div style="display:flex;gap:6px">' + [1, 2, 3, 4, 5].map(n => '<label style="cursor:pointer"><input type="radio" name="r' + (i + 1) + '" value="' + n + '" class="sr-only" required><span class="chip" data-star>' + n + ' ★</span></label>').join('') + '</div></div>').join('') +
    '<div class="row2"><div class="fld"><label>Votre nom</label><input name="author" required placeholder="Camille D." value="' + esc(S.client ? S.client.first_name + ' ' + (S.client.last_name || '').slice(0, 1) + '.' : '') + '"></div><div class="fld"><label>Événement</label><input name="event_type" placeholder="Mariage, anniversaire…"></div></div>' +
    '<div class="fld"><label>Votre commentaire</label><textarea name="comment" required></textarea></div><div class="alert alert-err hide" data-err></div><button class="btn btn-primary btn-block" type="submit">Publier mon avis</button></form>');
}
function quoteModal(id) {
  const r = ART_REQS.find(x => String(x.id) === String(id)); if (!r) return;
  const base = S.artist && Number(S.artist.base_price_eur) > 0 ? Number(S.artist.base_price_eur) : '';
  openModal('<h2>Envoyer un devis</h2><p class="muted small">' + esc(r.client_name) + ' · ' + esc(r.event_type) + ' · ' + (r.event_date ? fmtDate(r.event_date) : '') + '</p>' +
    '<form class="form" data-form="quote" data-id="' + esc(id) + '" novalidate style="margin-top:16px"><div class="fld"><label>Votre cachet (€)</label><input type="number" name="amount" min="50" step="10" value="' + base + '" placeholder="Ex. : 800" required><span class="hint">Wimbo ajoute automatiquement les cotisations GUSO et les frais de service dans le devis envoyé au client.</span></div>' +
    '<div class="fld"><label>Message <span class="opt">(facultatif)</span></label><textarea name="message" placeholder="Ce qui est inclus : durée, matériel, déplacement…"></textarea></div><div class="alert alert-err hide" data-err></div><button class="btn btn-primary btn-block" type="submit">Envoyer le devis</button></form>');
}
function videoModal(i) {
  const a = window.__artist; if (!a || !a.videos[i]) return;
  const v = a.videos[i];
  openModal('<div class="video" style="cursor:default;margin-bottom:18px"><img src="' + img(v.img, 1000, 560) + '" alt=""><span class="play">' + ic('play') + '</span></div><h2>' + esc(v.t) + '</h2><p class="muted">' + T('La lecture vidéo sera disponible à l\'ouverture de la plateforme. Demandez un devis pour recevoir d\'autres extraits de {name}.', { name: esc(a.name) }) + '</p><button class="btn btn-primary" data-close data-book-mobile="' + esc(a.slug) + '">Demander un devis</button>', { wide: true, noFocus: true });
}
async function logout() {
  if (sb) await sb.auth.signOut();
  await setSession(null); LS.set('role', null); S.role = null;
  renderHeader(); renderDrawer(); toast('Vous êtes déconnecté'); location.hash = '#/';
}

/* =====================================================================
   ROUTEUR
   ===================================================================== */
const ROUTES = [
  [/^\/?$/, () => pHome()],
  [/^\/recherche$/, (m, q) => pSearch(q)],
  [/^\/artiste\/([^/]+)$/, m => pArtist(m[1])],
  [/^\/(genres|evenements|instruments)$/, m => pIndex(m[1])],
  [/^\/(genres|evenements|instruments)\/([^/]+)$/, m => pLanding(m[1], m[2])],
  [/^\/comment-ca-marche$/, () => pHow()],
  [/^\/je-suis-artiste$/, () => pArtistLanding()],
  [/^\/abonnements$/, () => pPricing()],
  [/^\/avis$/, (m, q) => pReviews(q)],
  [/^\/faq$/, (m, q) => pFaq(q)],
  [/^\/blog$/, () => pBlog()],
  [/^\/blog\/([^/]+)$/, m => pArticle(m[1])],
  [/^\/contact$/, (m, q) => pContact(q)],
  [/^\/(mentions-legales|cgv|confidentialite)$/, m => pLegal(m[1])],
  [/^\/favoris$/, () => pFavoris()],
  [/^\/connexion$/, (m, q) => pLogin(q)],
  [/^\/inscription$/, (m, q) => pSignupUser(q)],
  [/^\/inscription-artiste$/, (m, q) => pSignupArtist(q)],
  [/^\/admin$/, (m, q) => pAdmin(q)],
  [/^\/mot-de-passe-oublie$/, () => pForgot()],
  [/^\/nouveau-mot-de-passe$/, () => pNewPassword()],
  [/^\/espace-artiste$/, (m, q) => pArtistSpace(q)],
  [/^\/mon-espace$/, (m, q) => pClientSpace(q)]
];
let lastPath = null;
async function route() {
  if (/access_token=|error_description=|type=recovery/.test(location.hash)) { $('#app').innerHTML = '<div class="loading"><div class="spinner"></div>Connexion en cours…</div>'; return; }
  if (/^#\//.test(location.hash)) history.replaceState(null, '', location.hash.slice(1));
  const path = (location.pathname || '/').replace(/\/+$/, '') || '/';
  const q = new URLSearchParams(location.search || '');
  let res = null;
  for (const [re, fn] of ROUTES) { const m = path.match(re); if (m) { res = await fn(m, q); break; } }
  if (!res) res = p404();
  if (!res.html && res.title === 'Wimbo') return; // redirection en cours
  if (window.__spy) { window.removeEventListener('scroll', window.__spy); window.__spy = null; }
  const um = $('#usermenu'); if (um) um.remove();
  if ($('#modal-root').innerHTML) closeModal();
  $('#app').innerHTML = res.html;
  document.title = trTitle(SEO_TITLES[path] || res.title || 'Wimbo');
  if (path !== lastPath) window.scrollTo({ top: 0, behavior: 'instant' });
  lastPath = path;
  $$('.nav-link').forEach(l => l.classList.toggle('active', [path, '#' + path].includes(l.getAttribute('href'))));
  $('#drawer').classList.remove('open'); document.body.style.overflow = '';
  if (res.after) res.after();
  renderPromo();
}

/* =====================================================================
   ÉVÉNEMENTS (délégation)
   ===================================================================== */
document.addEventListener('click', async e => {
  const t = e.target;
  const c = sel => t.closest(sel);
  let el;
  if ((el = c('[data-promo-close]'))) { LS.set('promo_closed', Date.now()); renderPromo(); return; }
  if ((el = c('[data-close]'))) {
    if (el.dataset.setrole) { S.role = el.dataset.setrole; LS.set('role', S.role); }
    const bm = el.dataset.bookMobile, cb = el.dataset.confirmBooking;
    closeModal();
    if (bm) openBooking(bm);
    if (cb) await confirmBooking(cb);
    return; // les liens <a data-close> poursuivent leur navigation
  }
  if ((el = c('[data-fav]'))) { e.preventDefault(); toggleFav(el.dataset.fav); return; }
  if ((el = c('[data-lightbox]'))) { const a = window.__artist; if (a) openLightbox(a.gallery, +el.dataset.lightbox); return; }
  if ((el = c('[data-lb-move]'))) { lbMove(+el.dataset.lbMove); return; }
  if ((el = c('[data-video]'))) { videoModal(+el.dataset.video); return; }
  if ((el = c('[data-review]'))) { reviewModal(el.dataset.review); return; }
  if ((el = c('[data-book-mobile]'))) { openBooking(el.dataset.bookMobile); return; }
  if ((el = c('[data-share]'))) { const url = location.href; if (navigator.share) { try { await navigator.share({ title: document.title, url }); } catch (x) {} } else { try { await navigator.clipboard.writeText(url); toast('Lien copié'); } catch (x) { toast(url); } } return; }
  if ((el = c('[data-scroll]'))) { e.preventDefault(); const tg = document.getElementById(el.dataset.scroll); if (tg) tg.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  if ((el = c('[data-car]'))) { const tr = document.getElementById(el.dataset.target); if (tr) tr.scrollBy({ left: (el.dataset.car === 'next' ? 1 : -1) * tr.clientWidth * 0.9, behavior: 'smooth' }); return; }
  if ((el = c('[data-htab]'))) { $$('[data-htab]').forEach(b => b.classList.toggle('on', b === el)); $$('[data-hpanel]').forEach(p => p.classList.toggle('hide', p.dataset.hpanel !== el.dataset.htab)); return; }
  if ((el = c('[data-usermenu]'))) { const ex = $('#usermenu'); if (ex) ex.remove(); else el.parentElement.insertAdjacentHTML('beforeend', userMenuHTML()); return; }
  if (!c('#usermenu')) { const ex = $('#usermenu'); if (ex) ex.remove(); }
  if ((el = c('[data-logout]'))) { e.preventDefault(); logout(); return; }
  if ((el = c('[data-role]'))) { S.role = el.dataset.role; LS.set('role', S.role); location.hash = S.role === 'artist' ? '#/espace-artiste' : '#/mon-espace'; return; }
  if ((el = c('[data-drawer]'))) { $('#drawer').classList.add('open'); document.body.style.overflow = 'hidden'; return; }
  if ((el = c('[data-drawer-close]'))) { $('#drawer').classList.remove('open'); document.body.style.overflow = ''; return; }
  if ((el = c('[data-toggle-filters]'))) { const f = $('#filters'); if (f) { f.classList.toggle('open'); document.body.style.overflow = f.classList.contains('open') ? 'hidden' : ''; } return; }
  if ((el = c('[data-reset-filters]'))) { location.hash = '#/recherche'; return; }
  if ((el = c('[data-more-genres]'))) { $$('.more-g').forEach(x => x.classList.remove('hide')); el.remove(); return; }
  if ((el = c('[data-rm-filter]'))) { removeFilter(el.dataset.rmFilter, el.dataset.rmVal); return; }
  if ((el = c('[data-ac-pick]'))) { acPick(el); return; }
  if ((el = c('[data-chat-open]'))) { CHAT.open = true; renderChat(); return; }
  if ((el = c('[data-chat-close]'))) { CHAT.open = false; renderChat(); return; }
  if ((el = c('[data-chat-q]'))) { chatAsk(el.dataset.chatQ); return; }
  if ((el = c('#chat-root a[href^="/"]'))) { CHAT.open = false; setTimeout(renderChat, 0); }
  if ((el = c('[data-lang]'))) { e.preventDefault(); try { localStorage.setItem('wimbo_lang', JSON.stringify(el.dataset.lang)); } catch (x) {} location.reload(); return; }
  if ((el = c('[data-rm-video]'))) { WZ.videos.splice(+el.dataset.rmVideo, 1); renderWizard(); return; }
  if ((el = c('[data-del-video]'))) {
    el.disabled = true;
    await sb.storage.from('artist-videos').remove([el.dataset.path]);
    const { error } = await sb.from('artist_videos').delete().eq('id', el.dataset.delVideo);
    if (error) toast(T('Suppression impossible : {err}', { err: dbMessage(error.message) })); else { await reloadOwnArtist(); syncOwnCatalogEntry(); toast('Vidéo supprimée'); }
    renderArtistTab('profil'); return;
  }
  if ((el = c('[data-request-plan]'))) {
    el.disabled = true;
    try { await saveRow('artists', 'update', { plan_requested: el.dataset.requestPlan }, S.artist.id); S.artist.plan_requested = el.dataset.requestPlan; toast('Demande enregistrée'); }
    catch (x) { toast(x.message); }
    renderArtistTab('abonnement'); return;
  }
  if ((el = c('[data-adm-status]'))) {
    el.disabled = true; const stv = el.dataset.admStatus;
    const ok = await admUpdate('artists', el.dataset.id, { status: stv, validated_at: stv === 'validated' ? new Date().toISOString() : null }, stv === 'validated' ? 'Artiste validé : il apparaît dans le catalogue' : stv === 'rejected' ? 'Profil refusé' : 'Profil remis en attente');
    if (ok) { await loadCatalog(); }
    const qs = new URLSearchParams(location.search || ''); renderAdminTab('artistes', qs.get('statut') || 'pending'); return;
  }
  if ((el = c('[data-adm-avis]'))) {
    el.disabled = true; const ok = await admUpdate('avis', el.dataset.id, { status: el.dataset.admAvis }, el.dataset.admAvis === 'publie' ? 'Avis publié' : 'Avis refusé');
    if (ok) await loadReviews(); renderAdminTab('avis'); return;
  }
  if ((el = c('[data-adm-msg]'))) { el.disabled = true; await admUpdate('contact_messages', el.dataset.id, { handled: el.dataset.admMsg === '1' }, 'Message mis à jour'); renderAdminTab('messages'); return; }
  if ((el = c('[data-other-toggle]'))) { const box = el.closest('.fld').querySelector('[data-other-box]'); const open = box.classList.contains('hide'); box.classList.toggle('hide', !open); el.classList.toggle('on', open); if (open) box.querySelector('input').focus(); return; }
  if ((el = c('[data-embed]'))) { openModal('<div class="embed"><iframe src="' + esc(el.dataset.embed) + '" title="Vidéo" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>', { wide: true, noFocus: true }); return; }
  if (!c('[data-ac]')) $$('.ac-list').forEach(l => l.classList.add('hide'));
  if ((el = c('.pick-chips .chip'))) { el.classList.toggle('on'); return; }
  if ((el = c('[data-star]'))) { const grp = el.closest('.fld'); $$('[data-star]', grp).forEach(s => s.classList.remove('on')); el.classList.add('on'); return; }
  if ((el = c('[data-wz-back]'))) { WZ.step = Math.max(1, WZ.step - 1); renderWizard(); return; }
  if ((el = c('[data-rm-photo]'))) { WZ.photos.splice(+el.dataset.rmPhoto, 1); renderWizard(); return; }
  if ((el = c('[data-req-set]'))) { updateRequest(el.dataset.id, { status: el.dataset.reqSet }); return; }
  if ((el = c('[data-quote]'))) { quoteModal(el.dataset.quote); return; }
  if ((el = c('[data-accept-quote]'))) { const amt = +el.dataset.amount; openModal('<div class="success-ic">' + ic('lock') + '</div><h2>Confirmer la réservation</h2><p class="muted">Pour bloquer la date, un acompte de 30 % est demandé.</p><div class="recap"><div><span>Total du devis</span><strong>' + fmtEUR(amt) + '</strong></div><div><span>Acompte (30 %)</span><strong>' + fmtEUR(amt * 0.3) + '</strong></div><div><span>Solde après la prestation</span><strong>' + fmtEUR(amt * 0.7) + '</strong></div></div><p class="small muted">Le paiement en ligne sécurisé sera activé à l\'ouverture des réservations. En attendant, notre équipe vous contacte pour finaliser.</p><button class="btn btn-primary btn-block" data-close data-confirm-booking="' + esc(el.dataset.acceptQuote) + '">Je confirme ma réservation</button>'); return; }
  if ((el = c('[data-cal]'))) { CAL_OFFSET += +el.dataset.cal; renderCalendar(); return; }
  if ((el = c('[data-day]'))) { toggleDay(el.dataset.day); return; }
  if ((el = c('[data-soon]'))) { toast(el.dataset.soon); return; }
  if ((el = c('[data-del-photo]'))) {
    el.disabled = true;
    await sb.storage.from('artist-photos').remove([el.dataset.path]);
    const { error } = await sb.from('artist_photos').delete().eq('id', el.dataset.delPhoto);
    if (error) toast('Suppression impossible : ' + error.message); else { S.artist.photos = (S.artist.photos || []).filter(p => String(p.id) !== el.dataset.delPhoto); syncOwnCatalogEntry(); toast('Photo supprimée'); }
    renderArtistTab('profil'); return;
  }
});
async function confirmBooking(id) {
  if (sb && S.user) { const { error } = await sb.from('demandes').update({ status: 'acceptee' }).eq('id', id); if (error) console.warn('[Wimbo] confirmation', error.message); }
  const loc = LS.get('demandes', []); loc.forEach(r => { if (r.id === id) r.status = 'acceptee'; }); LS.set('demandes', loc);
  toast('Réservation confirmée, l\'artiste est prévenu');
  renderClientTab('demandes');
}
function openBooking(slug) {
  const a = findArtist(slug) || window.__artist; if (!a) return;
  openModal('<h2>' + T('Demander un devis à {name}', { name: esc(a.name) }) + '</h2>' + bookingForm(a, true));
}
document.addEventListener('submit', e => {
  const form = e.target.closest('form[data-form]'); if (!form) return;
  e.preventDefault();
  const fn = FORMS[form.dataset.form]; if (fn) fn(form);
});
document.addEventListener('change', async e => {
  const t = e.target;
  if (t.name === 'price_mode') { const f = t.form; const devis = t.value === 'devis'; f.querySelector('[data-price-box]').classList.toggle('hide', devis); f.querySelector('[data-devis-hint]').classList.toggle('hide', !devis); return; }
  if (t.closest('#ff')) { if (t.type !== 'text') applyFilters(); return; }
  if (t.matches('[data-sort]')) { SEARCH_F.tri = t.value; const qs = filtersToQuery(SEARCH_F); history.replaceState(null, '', '/recherche' + (qs ? '?' + qs : '')); renderResults(); return; }
  if (t.matches('[data-adm-plan]')) { t.disabled = true; await admUpdate('artists', t.dataset.id, { plan: t.value }, T('Offre {plan} appliquée', { plan: pnL(t.value) })); t.disabled = false; return; }
  if (t.matches('[data-video-slot]') && t.files[0]) {
    try { const v = await checkVideoFile(t.files[0]); WZ.videos.push(v); renderWizard(); } catch (x) { toast(x.message); t.value = ''; }
    return;
  }
  if (t.matches('[data-add-video]') && t.files[0]) {
    let v; try { v = await checkVideoFile(t.files[0]); } catch (x) { toast(x.message); t.value = ''; return; }
    const lab = t.closest('label'); if (lab) lab.classList.add('hide');
    toast('Envoi de la vidéo… cela peut prendre une minute');
    try { await uploadArtistVideos(S.artist.id, [Object.assign(v, {})], null); await reloadOwnArtist(); syncOwnCatalogEntry(); toast('Vidéo ajoutée'); }
    catch (x) { toast(T('Vidéo non envoyée : {err}', { err: x.message })); }
    renderArtistTab('profil'); return;
  }
  if (t.matches('[data-photo-slot]') && t.files[0]) {
    if (t.files[0].size > 15 * 1024 * 1024) return toast('Photo trop lourde (15 Mo maximum)');
    try { const p = await compressImage(t.files[0]); WZ.photos.push(p); WZ.photos = WZ.photos.slice(0, 4); renderWizard(); } catch (x) { toast('Impossible de lire cette image'); }
    return;
  }
  if (t.matches('[data-add-photos]') && t.files.length) {
    const room = limitsOf(S.artist).photos - (S.artist.photos || []).length;
    if (room <= 0) return toast('Votre offre ne permet pas d\'ajouter plus de photos.');
    const files = Array.from(t.files).slice(0, room);
    toast(plural(files.length, 'Envoi de {n} photo…', 'Envoi de {n} photos…'));
    const blobs = []; for (const f of files) { try { blobs.push((await compressImage(f)).blob); } catch (x) {} }
    await uploadArtistPhotos(S.artist.id, blobs, (S.artist.photos || []).length);
    await reloadOwnArtist();
    syncOwnCatalogEntry(); toast('Photos ajoutées'); renderArtistTab('profil');
  }
});
let qTimer = null;
document.addEventListener('input', e => {
  const t = e.target;
  if (t.closest('[data-ac]') && t.type === 'text') {
    if (t.dataset.skipAc) delete t.dataset.skipAc;
    else { acReset(t); clearTimeout(AC.timer); AC.timer = setTimeout(() => acSearch(t), 250); }
  }
  if (t.closest('#ff') && (t.type === 'text' || t.type === 'range')) { clearTimeout(qTimer); qTimer = setTimeout(applyFilters, t.type === 'range' ? 120 : 350); }
});
document.addEventListener('keydown', e => {
  const acBox = e.target.closest && e.target.closest('[data-ac]');
  if (acBox) {
    const list = acBox.querySelector('.ac-list'); const items = $$('.ac-item', list); const open = !list.classList.contains('hide') && items.length;
    if (e.key === 'ArrowDown' && open) { e.preventDefault(); const i = items.indexOf(document.activeElement); (items[i + 1] || items[0]).focus(); return; }
    if (e.key === 'ArrowUp' && open) { e.preventDefault(); const i = items.indexOf(document.activeElement); if (i <= 0) acBox.querySelector('input[type=text]').focus(); else items[i - 1].focus(); return; }
    if (e.key === 'Enter' && open && e.target.matches('input')) { e.preventDefault(); acPick(items[0]); return; }
    if (e.key === 'Escape') { list.classList.add('hide'); return; }
  }
  if (e.key === 'Escape') { if ($('#modal-root').innerHTML) closeModal(); const um = $('#usermenu'); if (um) um.remove(); }
  if ($('[data-lb]')) { if (e.key === 'ArrowRight') lbMove(1); if (e.key === 'ArrowLeft') lbMove(-1); }
});
document.addEventListener('error', e => { if (e.target && e.target.tagName === 'IMG') e.target.style.visibility = 'hidden'; }, true);
window.addEventListener('hashchange', () => { if (/^#\//.test(location.hash)) route(); });
window.addEventListener('popstate', route);
document.addEventListener('click', e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
  let href = a.getAttribute('href');
  if (/^#\//.test(href)) href = href.slice(1);
  if (!/^\/(?!\/)/.test(href) || a.target || a.hasAttribute('download') || /^\/assets\//.test(href) || /\.(xml|txt|pdf|png|jpe?g)$/i.test(href.split('?')[0])) return;
  e.preventDefault();
  if (href !== location.pathname + location.search) history.pushState(null, '', href);
  route();
});
/* Filet de sécurité : tout lien « #/… » restant devient une vraie adresse */
new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => {
  if (n.nodeType !== 1) return;
  (n.matches && n.matches('a[href^="#/"]') ? [n] : []).concat(Array.from(n.querySelectorAll ? n.querySelectorAll('a[href^="#/"]') : [])).forEach(a => a.setAttribute('href', a.getAttribute('href').slice(1)));
}))).observe(document.documentElement, { childList: true, subtree: true });


/* =====================================================================
   OFFRES, PHOTOS ET VIDÉOS
   ===================================================================== */
function expectedPlan() {
  if (S.artist) return planOf(S.artist);
  return seatsLeft() > 0 ? 'premium' : 'decouverte';
}
function wizardPlanBox() {
  if (seatsLeft() > 0) return '<div class="alert alert-ok">' + T('Membre fondateur : il reste {n} places. Votre profil sera Premium à vie (30 photos, 5 vidéos), gratuitement.', { n: seatsLeft() }) + '</div>';
  const cur = WZ.data.plan_requested || 'decouverte';
  return '<div class="fld"><label>Votre offre</label><div class="price-mode">' + PLANS.map(p => '<label class="ck"><input type="radio" name="plan_requested" value="' + p.id + '"' + (cur === p.id ? ' checked' : '') + '> ' + esc(p.name) + ' · ' + p.price + ' €</label>').join('') + '</div><span class="hint">Pro et Premium seront activés dès l\'ouverture du paiement en ligne. En attendant, votre profil fonctionne en Découverte.</span></div>';
}
function wizardVideos() {
  const lim = PLAN_LIMITS[expectedPlan()].videos;
  if (!lim) return '<div class="alert alert-info">Les vidéos sont disponibles avec les offres Pro et Premium. Vous pourrez en ajouter depuis votre espace en changeant d\'offre.</div>';
  return '<div class="fld"><label>' + T('Vidéos courtes {opt}', { opt: '<span class="opt">' + T('(facultatif, 15 secondes maximum, {n} au total avec les liens)', { n: lim }) + '</span>' }) + '</label><div class="photo-slots">' +
    WZ.videos.map((v, i) => '<div class="photo-slot vslot">' + ic('play') + '<span class="vname">' + esc(v.name) + (v.duration ? ' · ' + v.duration + ' s' : '') + '</span><button type="button" class="rm" data-rm-video="' + i + '" aria-label="Retirer">×</button></div>').join('') +
    (WZ.videos.length < lim ? '<label class="photo-slot">' + ic('upload') + '<span class="vname">Ajouter une vidéo</span><input type="file" accept="video/mp4,video/quicktime,video/webm,video/*" data-video-slot hidden></label>' : '') +
    '</div><span class="hint">MP4 ou MOV, 50 Mo maximum. Filmez à l\'horizontale de préférence.</span></div>' + videoFields(WZ.data.videos);
}
function readVideoMeta(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file); const v = document.createElement('video');
    v.preload = 'metadata'; v.muted = true;
    v.onloadedmetadata = () => { const d = v.duration; URL.revokeObjectURL(url); resolve({ duration: d }); };
    v.onerror = () => { URL.revokeObjectURL(url); reject(new Error('lecture impossible')); };
    v.src = url;
  });
}
async function checkVideoFile(file) {
  if (!/^video\//.test(file.type || '') && !/\.(mp4|mov|m4v|webm)$/i.test(file.name || '')) throw new Error('Ce fichier n\'est pas une vidéo (formats acceptés : MP4, MOV, WebM).');
  if (file.size > 50 * 1024 * 1024) throw new Error('Vidéo trop lourde : 50 Mo maximum.');
  let meta = null;
  try { meta = await withTimeout(readVideoMeta(file), 8000, null); } catch (e) { meta = null; }
  if (meta && isFinite(meta.duration) && meta.duration > 15.9) throw new Error(T('Cette vidéo dure {n} secondes : 15 secondes maximum.', { n: Math.round(meta.duration) }));
  return { file, name: file.name, duration: meta && isFinite(meta.duration) ? Math.round(meta.duration * 10) / 10 : null };
}
function videoError(m) {
  m = String(m || '');
  if (/limite_videos/.test(m)) return 'votre offre ne permet pas d\'ajouter plus de vidéos';
  if (/bucket|not found|artist_videos/i.test(m)) return 'l\'espace vidéo n\'est pas encore activé (fichier « SQL site v3 » à exécuter dans Supabase)';
  if (/exceed|too large|size|payload/i.test(m)) return 'vidéo trop lourde pour le serveur (50 Mo maximum)';
  return dbMessage(m);
}
async function uploadArtistVideos(artistId, vids, onProgress) {
  for (let i = 0; i < vids.length; i++) {
    const v = vids[i];
    if (onProgress) onProgress(i + 1, vids.length);
    const ext = ((v.name || '').split('.').pop() || 'mp4').toLowerCase().replace(/[^a-z0-9]/g, '') || 'mp4';
    const path = artistId + '/video-' + Date.now() + '-' + i + '.' + ext;
    const up = await withTimeout(sb.storage.from('artist-videos').upload(path, v.file, { contentType: v.file.type || 'video/mp4', upsert: false }), 180000, { error: { message: 'délai dépassé' } });
    if (up.error) throw new Error(videoError(up.error.message));
    const pub = sb.storage.from('artist-videos').getPublicUrl(path);
    const ins = await withTimeout(sb.from('artist_videos').insert({ artist_id: artistId, storage_path: path, public_url: pub.data.publicUrl, duration_s: v.duration, position: i }), 15000, { error: { message: 'délai dépassé' } });
    if (ins.error) { await sb.storage.from('artist-videos').remove([path]); throw new Error(videoError(ins.error.message)); }
  }
}
async function reloadOwnArtist() {
  if (!sb || !S.user) return;
  let r = await withTimeout(sb.from('artists').select('*, photos:artist_photos(*), videos:artist_videos(*)').eq('id', S.user.id).maybeSingle(), 8000, { data: null });
  if (r && r.error) r = await withTimeout(sb.from('artists').select('*, photos:artist_photos(*)').eq('id', S.user.id).maybeSingle(), 8000, { data: null });
  if (r && r.data) S.artist = r.data;
}
function usageBar(label, n, max) {
  const pct = max ? Math.min(100, Math.round(n / max * 100)) : 100;
  return '<div class="crit"><span>' + label + '</span><div class="bar"><i style="width:' + pct + '%"></i></div><strong>' + n + ' / ' + max + '</strong></div>';
}
function dashPhotosBox(ar) {
  const L = limitsOf(ar); const photos = (ar.photos || []).slice().sort((a, b) => (a.position || 0) - (b.position || 0));
  return '<div class="box" style="margin-bottom:22px"><div class="res-head" style="margin-bottom:6px"><h2 class="h-md" style="font-size:21px">Mes photos</h2><span class="badge badge-soft">' + photos.length + ' / ' + L.photos + '</span></div>' +
    '<p class="muted small" style="margin-bottom:16px">' + T('Votre offre {plan} permet {n} photos. La première est votre photo principale.', { plan: pnL(planOf(ar)), n: L.photos }) + '</p><div class="photo-slots">' +
    photos.map(p => '<div class="photo-slot"><img src="' + esc(p.public_url) + '" alt=""><button type="button" class="rm" data-del-photo="' + p.id + '" data-path="' + esc(p.storage_path) + '" aria-label="Supprimer">×</button></div>').join('') +
    (photos.length < L.photos ? '<label class="photo-slot">' + ic('upload') + '<input type="file" accept="image/*" multiple data-add-photos hidden></label>' : '') +
    '</div>' + (photos.length >= L.photos && planOf(ar) !== 'premium' ? '<p class="small" style="margin-top:12px">Besoin de plus de photos ? <a class="link" href="/espace-artiste?tab=abonnement">Voir les offres</a></p>' : '') + '</div>';
}
function dashVideosBox(ar) {
  const L = limitsOf(ar); const vids = ar.videos || []; const links = (ar.video_urls || []).length;
  if (!L.videos) return '<div class="box"><h2 class="h-md" style="font-size:21px;margin-bottom:6px">Mes vidéos</h2><p class="muted">Les vidéos sont disponibles avec les offres Pro (2 vidéos) et Premium (5 vidéos).</p><a class="btn btn-dark btn-sm" href="/espace-artiste?tab=abonnement">Voir les offres</a></div>';
  const used = vids.length + links;
  return '<div class="box"><div class="res-head" style="margin-bottom:6px"><h2 class="h-md" style="font-size:21px">Mes vidéos</h2><span class="badge badge-soft">' + used + ' / ' + L.videos + '</span></div>' +
    '<p class="muted small" style="margin-bottom:16px">Vidéos courtes de 15 secondes maximum (MP4 ou MOV, 50 Mo). Les liens YouTube et Vimeo du formulaire ci-dessus comptent aussi.</p>' +
    '<div class="videos">' + vids.map(v => '<div class="video video-file"><video src="' + esc(v.public_url) + '#t=0.1" controls playsinline preload="metadata"></video><button type="button" class="rm" data-del-video="' + v.id + '" data-path="' + esc(v.storage_path) + '" aria-label="Supprimer">×</button></div>').join('') + '</div>' +
    (used < L.videos ? '<label class="btn btn-dark btn-sm" style="margin-top:14px;cursor:pointer">' + ic('upload', 'icon-sm') + ' Ajouter une vidéo<input type="file" accept="video/mp4,video/quicktime,video/webm,video/*" data-add-video hidden></label>' : '<p class="small" style="margin-top:12px">' + T('Vous avez atteint les {n} vidéos de votre offre.', { n: L.videos }) + '</p>') + '</div>';
}
function dashPlanTab(ar) {
  const plan = planOf(ar); const L = limitsOf(ar); const pinfo = PLANS.find(p => p.id === plan);
  const lead = ar.is_founder ? 'Offert à vie : vous gardez toutes les fonctionnalités Premium, sans abonnement.' : plan === 'decouverte' ? 'Offre gratuite, commission de 15 % par prestation.' : T('Commission de {n} % par prestation.', { n: pinfo.commission });
  const req = ar.plan_requested && ar.plan_requested !== plan && !ar.is_founder ? '<div class="alert alert-info" style="margin-bottom:20px">' + T('Demande de passage en {plan} enregistrée : elle sera activée dès l\'ouverture du paiement en ligne, ou par l\'équipe Wimbo.', { plan: pnL(ar.plan_requested) }) + '</div>' : '';
  return '<div class="founders" style="margin-bottom:24px"><div><span class="eyebrow">Votre offre</span><h2 class="h-md">' + esc(pnL(plan)) + (ar.is_founder ? ' · ' + T('membre fondateur') : '') + '</h2><p class="lead" style="margin-top:6px">' + lead + '</p></div><span class="badge badge-prem" style="font-size:13px;padding:8px 14px">' + ic('star', 'icon-sm') + ' Actif</span></div>' + req +
    '<div class="box" style="margin-bottom:24px"><h3 class="h-md" style="font-size:19px;margin-bottom:12px">Votre utilisation</h3>' + usageBar('Photos', (ar.photos || []).length, L.photos) + (L.videos ? usageBar('Vidéos', (ar.videos || []).length + (ar.video_urls || []).length, L.videos) : '<p class="small muted">Vidéos : non incluses dans votre offre.</p>') + '</div>' +
    '<div class="plans">' + PLANS.map(p => planCard(p, '#', '', p.id === plan ? '<span class="badge badge-ok" style="align-self:flex-start">Votre offre</span>' : ar.is_founder ? '' : '<button class="btn btn-dark btn-block" data-request-plan="' + p.id + '">' + T('Demander l\'offre {plan}', { plan: p.name }) + '</button>')).join('') + '</div>';
}

/* =====================================================================
   ADMINISTRATION
   ===================================================================== */
const ADMIN_TABS = [['artistes', 'music', 'Artistes'], ['avis', 'star', 'Avis'], ['demandes', 'inbox', 'Demandes'], ['messages', 'mail', 'Messages']];
const STATUS_LABELS = { pending: ['En attente', 'badge-warn'], validated: ['Validé', 'badge-ok'], rejected: ['Refusé', 'badge-no'], paused: ['En pause', 'badge-soft'], en_attente: ['En attente', 'badge-warn'], publie: ['Publié', 'badge-ok'], refuse: ['Refusé', 'badge-no'] };
const stBadge = s => { const x = STATUS_LABELS[s] || [s, 'badge-soft']; return '<span class="badge ' + x[1] + '">' + esc(x[0]) + '</span>'; };
async function pAdmin(q) {
  if (!S.authReady) await withTimeout(authPromise, 6000, null);
  if (!S.user) { location.hash = '#/connexion?redirect=' + encodeURIComponent('/admin'); return { title: 'Wimbo', html: '' }; }
  if (!S.isAdmin) return { title: 'Accès réservé · Wimbo', html: '<section class="section"><div class="wrap center"><span class="eyebrow">Administration</span><h1 class="h-lg">Accès réservé à l\'équipe Wimbo</h1><p class="lead" style="margin:16px auto 0">Pour devenir administrateur, votre adresse doit être ajoutée dans la table « wimbo_admins » (fichier SQL v3).</p></div></section>' };
  const tab = q.get('tab') || 'artistes';
  const html = '<section class="page-hero" style="padding:0"><div class="wrap" style="padding-top:44px;padding-bottom:44px"><span class="eyebrow">Administration</span><h1 class="h-md">Pilotage de la plateforme</h1><p class="lead" style="margin-top:8px">Valider les artistes, modérer les avis, suivre les demandes et les messages.</p></div></section>' +
    '<div class="wrap dash"><nav class="dash-nav">' + ADMIN_TABS.map(t => '<a href="/admin?tab=' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + ic(t[1]) + ' ' + t[2] + '<span class="cnt hide" data-adm-count="' + t[0] + '"></span></a>').join('') + '</nav><div id="dash-content"><div class="loading"><div class="spinner"></div>Chargement…</div></div></div>';
  return { title: 'Administration · Wimbo', html, after: () => renderAdminTab(tab, q.get('statut') || 'pending') };
}
function admCount(tab, n) { $$('[data-adm-count="' + tab + '"]').forEach(e => { e.textContent = n; e.classList.toggle('hide', !n); }); }
async function admQuery(qb) {
  const res = await withTimeout(qb, 12000, { data: null, error: { message: 'le serveur ne répond pas' } });
  if (res.error) throw new Error(dbMessage(res.error.message));
  return res.data || [];
}
async function renderAdminTab(tab, st) {
  const box = $('#dash-content'); if (!box) return;
  try {
    if (tab === 'artistes') {
      const rows = await admQuery(sb.from('artists').select('*, photos:artist_photos(*)').order('registered_at', { ascending: false }));
      const counts = { pending: 0, validated: 0, rejected: 0 }; rows.forEach(r => { counts[r.status] = (counts[r.status] || 0) + 1; });
      admCount('artistes', counts.pending);
      const shown = st === 'all' ? rows : rows.filter(r => r.status === st);
      box.innerHTML = '<div class="kpis"><div class="kpi"><span>En attente</span><strong>' + counts.pending + '</strong></div><div class="kpi"><span>Validés</span><strong>' + counts.validated + '</strong></div><div class="kpi"><span>Refusés</span><strong>' + (counts.rejected || 0) + '</strong></div><div class="kpi"><span>Places fondateurs</span><strong>' + seatsLeft() + '</strong></div></div>' +
        '<div class="chips" style="margin-bottom:18px">' + [['pending', 'En attente'], ['validated', 'Validés'], ['rejected', 'Refusés'], ['all', 'Tous']].map(x => '<a class="chip' + (st === x[0] ? ' on' : '') + '" href="/admin?tab=artistes&statut=' + x[0] + '">' + x[1] + '</a>').join('') + '</div>' +
        (shown.length ? shown.map(admArtistCard).join('') : '<div class="empty"><p class="muted">Aucun artiste dans cette catégorie.</p></div>');
    } else if (tab === 'avis') {
      const rows = await admQuery(sb.from('avis').select('*').order('created_at', { ascending: false }));
      admCount('avis', rows.filter(r => r.status === 'en_attente').length);
      box.innerHTML = '<div class="res-head"><h2 class="h-md">Avis clients</h2></div>' + (rows.length ? rows.map(r => { const a = findArtist(r.artist_slug); const avg = ([r.rating_music, r.rating_comm, r.rating_pro, r.rating_kind].reduce((x, y) => x + (y || 0), 0) / 4); return '<div class="req"><div class="rq-h"><strong>' + esc(r.author_name) + ' · ' + (a ? esc(a.name) : esc(r.artist_slug)) + '</strong>' + stBadge(r.status) + '</div>' + stars(avg) + '<p class="rq-msg">' + esc(r.comment) + '</p><div class="tiny muted">' + esc(r.event_type || '') + ' · ' + fmtDate(r.created_at) + '</div><div class="rq-act">' + (r.status !== 'publie' ? '<button class="btn btn-primary btn-sm" data-adm-avis="publie" data-id="' + r.id + '">Publier</button>' : '') + (r.status !== 'refuse' ? '<button class="btn btn-ghost btn-sm" data-adm-avis="refuse" data-id="' + r.id + '">Refuser</button>' : '') + '</div></div>'; }).join('') : '<div class="empty"><p class="muted">Aucun avis pour le moment.</p></div>');
    } else if (tab === 'demandes') {
      const rows = await admQuery(sb.from('demandes').select('*').order('created_at', { ascending: false }).limit(300));
      box.innerHTML = '<div class="res-head"><h2 class="h-md">' + T('{n} demandes de devis', { n: rows.length }) + '</h2></div>' + (rows.length ? rows.map(r => '<div class="req"><div class="rq-h"><strong>' + esc(r.client_name) + ' → ' + esc(r.artist_name || r.artist_slug) + '</strong>' + statusBadge(r.status) + '</div><div class="rq-meta"><span>' + ic('music', 'icon-sm') + esc(r.event_type || '') + '</span><span>' + ic('calendar', 'icon-sm') + (r.event_date ? fmtDate(r.event_date) : '') + '</span><span>' + ic('pin', 'icon-sm') + esc(r.event_city || '') + '</span><span>' + ic('mail', 'icon-sm') + esc(r.client_email) + '</span>' + (r.quote_amount ? '<span>' + ic('euro', 'icon-sm') + fmtEUR(r.quote_amount) + '</span>' : '') + '</div>' + (r.message ? '<p class="rq-msg">' + esc(r.message) + '</p>' : '') + '<div class="tiny muted">' + fmtDate(r.created_at, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) + '</div></div>').join('') : '<div class="empty"><p class="muted">Aucune demande pour le moment.</p></div>');
    } else {
      const rows = await admQuery(sb.from('contact_messages').select('*').order('created_at', { ascending: false }).limit(300));
      admCount('messages', rows.filter(r => !r.handled).length);
      box.innerHTML = '<div class="res-head"><h2 class="h-md">Messages de contact</h2></div>' + (rows.length ? rows.map(r => '<div class="req"><div class="rq-h"><strong>' + esc(r.name) + ' · ' + esc(r.subject || '') + '</strong>' + (r.handled ? '<span class="badge badge-ok">Traité</span>' : '<span class="badge badge-warn">À traiter</span>') + '</div><div class="rq-meta"><span>' + ic('mail', 'icon-sm') + '<a class="link" href="mailto:' + esc(r.email) + '">' + esc(r.email) + '</a></span><span>' + fmtDate(r.created_at, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) + '</span></div><p class="rq-msg">' + esc(r.message) + '</p><div class="rq-act"><button class="btn btn-ghost btn-sm" data-adm-msg="' + (r.handled ? '0' : '1') + '" data-id="' + r.id + '">' + (r.handled ? 'Marquer à traiter' : 'Marquer comme traité') + '</button></div></div>').join('') : '<div class="empty"><p class="muted">Aucun message pour le moment.</p></div>');
    }
  } catch (e) {
    box.innerHTML = '<div class="alert alert-err">' + T('Lecture impossible : {err}', { err: esc(e.message) }) + '</div>';
  }
}
function admArtistCard(r) {
  const name = r.stage_name || [r.first_name, r.last_name].filter(Boolean).join(' ');
  const photo = (r.photos || []).slice().sort((a, b) => (a.position || 0) - (b.position || 0))[0];
  const inst = parseInstruments(r.main_instrument);
  const price = Number(r.base_price_eur) > 0 ? fmtEUR(Number(r.base_price_eur)) : (isSurDevis(r.base_price_eur) ? 'Sur devis' : '—');
  return '<div class="req adm-art"><div class="adm-head"><div class="adm-ph">' + (photo ? '<img src="' + esc(photo.public_url) + '" alt="">' : '') + '</div><div style="flex:1;min-width:0"><div class="rq-h"><strong>' + esc(name) + '</strong><span style="display:flex;gap:6px;flex-wrap:wrap">' + stBadge(r.status) + '<span class="badge badge-soft">' + esc(pnL(planOf(r))) + '</span>' + (r.is_founder ? '<span class="badge badge-prem">Fondateur</span>' : '') + '</span></div>' +
    '<div class="rq-meta" style="margin-top:6px"><span>' + ic('mail', 'icon-sm') + esc(r.email || '') + '</span><span>' + esc(r.phone || '') + '</span><span>' + ic('pin', 'icon-sm') + esc(placeLabel({ city: r.city, country: r.country })) + '</span><span>' + ic('calendar', 'icon-sm') + (r.registered_at ? fmtDate(r.registered_at) : '') + '</span></div></div></div>' +
    '<div class="rq-meta"><span>' + ic('music', 'icon-sm') + esc(inst.slugs.map(k => cL(k)).concat(inst.extra).join(', ') || '—') + '</span><span>' + esc(mapStyles(r.styles).map(g => gL(g)).join(', ')) + '</span><span>' + ic('euro', 'icon-sm') + price + '</span><span>' + T('{n} photo(s)', { n: (r.photos || []).length }) + '</span></div>' +
    (r.bio ? '<p class="rq-msg">' + esc(String(r.bio).slice(0, 400)) + (String(r.bio).length > 400 ? '…' : '') + '</p>' : '') +
    '<div class="rq-act">' + (r.status !== 'validated' ? '<button class="btn btn-primary btn-sm" data-adm-status="validated" data-id="' + r.id + '">Valider</button>' : '') + (r.status !== 'rejected' ? '<button class="btn btn-ghost btn-sm" data-adm-status="rejected" data-id="' + r.id + '">Refuser</button>' : '') + (r.status !== 'pending' ? '<button class="btn btn-ghost btn-sm" data-adm-status="pending" data-id="' + r.id + '">Remettre en attente</button>' : '') +
    '<label class="small" style="display:flex;gap:8px;align-items:center">Offre <select data-adm-plan data-id="' + r.id + '">' + PLANS.map(p => '<option value="' + p.id + '"' + (planOf(r) === p.id ? ' selected' : '') + '>' + esc(p.name) + '</option>').join('') + '</select></label>' +
    (r.plan_requested && r.plan_requested !== planOf(r) ? '<span class="badge badge-warn">' + T('Demande : {plan}', { plan: pnL(r.plan_requested) || r.plan_requested }) + '</span>' : '') +
    '<a class="link small" href="/artiste/' + r.id + '">Voir la fiche</a></div></div>';
}
async function admUpdate(table, id, patch, okMsg) {
  const res = await withTimeout(sb.from(table).update(patch).eq('id', id), 12000, { error: { message: 'le serveur ne répond pas' } });
  if (res.error) { toast(T('Action impossible : {err}', { err: dbMessage(res.error.message) })); return false; }
  toast(okMsg); return true;
}

/* =====================================================================
   CHATBOT FAQ (sans IA, sans coût : recherche dans la FAQ)
   ===================================================================== */
const CHAT = { open: false, log: [] };
const STOP = new Set(['les', 'des', 'une', 'pour', 'est', 'que', 'qui', 'quoi', 'comment', 'avec', 'dans', 'sur', 'pas', 'mon', 'mes', 'vous', 'nous', 'votre', 'quel', 'quelle', 'quels', 'quelles', 'faire', 'peut', 'puis', 'aux', 'par', 'the', 'and', 'how', 'what', 'can', 'for', 'with', 'are', 'does', 'uma', 'como', 'para', 'com', 'que', 'um', 'meu', 'minha', 'qual', 'quais', 'posso', 'est-ce']);
function chatKB() {
  const f = faqData();
  return chatExtra().concat(f.organisateurs.map(x => ({ q: x[0], a: x[1], k: [] })), f.artistes.map(x => ({ q: x[0], a: x[1], k: [] })));
}
const toks = s => norm(s).split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOP.has(w));
function chatAnswer(text) {
  const qn = norm(text); const qt = toks(text);
  let best = null, bestScore = 0;
  chatKB().forEach(e => {
    let sc = 0;
    (e.k || []).forEach(k => { if (qt.includes(k) || (k.length > 4 && qn.includes(k))) sc += 3; });
    const et = toks(e.q); const ea = norm(e.a);
    qt.forEach(t => { if (et.includes(t)) sc += 1.5; else if (ea.includes(t)) sc += 0.4; });
    if (sc > bestScore) { bestScore = sc; best = e; }
  });
  return bestScore >= 2 ? best : null;
}
function chatSuggestions() { return chatExtra().slice(0, 4).map(e => '<button type="button" class="chip" data-chat-q="' + esc(e.q) + '">' + esc(e.q) + '</button>').join(''); }
function renderChat() {
  const root = $('#chat-root'); if (!root) return;
  if (!CHAT.log.length) CHAT.log.push({ who: 'bot', html: esc('Bonjour ! Je réponds aux questions fréquentes sur Wimbo. Que voulez-vous savoir ?') });
  root.innerHTML = CHAT.open ?
    '<div class="chat-panel" role="dialog" aria-label="Aide Wimbo"><div class="chat-head"><div><strong>Une question ?</strong><span>Réponses immédiates</span></div><button class="modal-x" data-chat-close aria-label="Fermer">' + ic('x') + '</button></div>' +
    '<div class="chat-log" id="chat-log">' + CHAT.log.map(m => '<div class="chat-msg ' + m.who + '"' + (m.who === 'me' ? ' data-notr' : '') + '>' + m.html + '</div>').join('') + '<div class="chat-sugg">' + chatSuggestions() + '</div></div>' +
    '<form class="chat-form" data-form="chat"><input name="q" autocomplete="off" placeholder="Posez votre question…" aria-label="Votre question"><button class="btn btn-primary btn-sm" type="submit" aria-label="Envoyer">' + ic('arrowR', 'icon-sm') + '</button></form></div>' :
    '<button class="chat-fab" data-chat-open aria-label="Une question ?">' + ic('msg') + '<span>Une question ?</span></button>';
  const log = $('#chat-log'); if (log) log.scrollTop = log.scrollHeight;
  const inp = root.querySelector('.chat-form input'); if (inp && CHAT.open) inp.focus();
}
function chatAsk(text) {
  text = String(text || '').trim(); if (!text) return;
  CHAT.log.push({ who: 'me', html: esc(text) });
  const e = chatAnswer(text);
  if (e) CHAT.log.push({ who: 'bot', html: esc(e.a) + (e.link ? '<br><a class="link" href="' + e.link[0] + '">' + esc(e.link[1]) + '</a>' : '') + '<br><a class="link small" href="/faq">Voir toute la FAQ</a>' });
  else CHAT.log.push({ who: 'bot', html: esc('Je n\'ai pas trouvé de réponse précise à votre question. Notre équipe vous répond sous 24 heures ouvrées.') + '<br><a class="link" href="/contact">Écrire à l\'équipe Wimbo</a>' });
  renderChat();
}

/* =====================================================================
   DÉMARRAGE
   ===================================================================== */
let authPromise = Promise.resolve();
async function initAuth() {
  if (!sb) { S.authReady = true; return; }
  const res = await withTimeout(sb.auth.getSession(), 4000, null);
  if (res && res.data) await setSession(res.data.session);
  S.authReady = true;
  sb.auth.onAuthStateChange((event, session) => {
    setTimeout(async () => {
      if (event === 'PASSWORD_RECOVERY') { await setSession(session); renderHeader(); location.hash = '#/nouveau-mot-de-passe'; return; }
      if (event === 'SIGNED_IN' && /access_token=/.test(location.hash)) { await setSession(session); renderHeader(); location.hash = S.artist ? '#/espace-artiste' : '#/mon-espace'; return; }
      if (event === 'SIGNED_OUT' && S.user) { await setSession(null); renderHeader(); }
    }, 0);
  });
}
(async function boot() {
  startTranslation();
  renderHeader(); renderFooter();
  if (/^#\//.test(location.hash)) history.replaceState(null, '', location.hash.slice(1));
  if ($('#app').dataset.prerendered !== location.pathname) $('#app').innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  const cat = loadCatalog();
  const extras = Promise.all([loadSeats().then(renderPromo), loadReviews()]).catch(() => {});
  authPromise = initAuth();
  renderChat();
  await withTimeout(Promise.all([cat, authPromise, extras]), 2500, null);
  renderHeader();
  await route();
  cat.then(() => { renderHeader(); if (/^\/?$|^\/(recherche|genres|evenements|instruments)/.test(location.pathname || '/')) route(); });
  authPromise.then(() => { renderHeader(); if (/^\/(espace-artiste|mon-espace|connexion|inscription|admin)/.test(location.pathname)) route(); });
  flushQueue();
})();
