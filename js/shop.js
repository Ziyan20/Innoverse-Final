/* ============================================================
   SHOP.JS — Full E-Commerce Engine
   Cart · Product Detail · Checkout · Payment · Order Success
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   PRODUCT CATALOG
   ══════════════════════════════════════════════════════════ */
var productCatalog = {
  'essentials-duo': {
    id: 'essentials-duo',
    name: 'The Essentials Duo',
    category: 'Duo',
    categoryKey: 'duo',
    badge: 'Gift Set',
    image: 'assets/images/perfume_rose_eternelle.jpg',
    alt: 'The Essentials Duo luxury fragrance pairing',
    sizes: { 'Gift Set': 185 },
    defaultSize: 'Gift Set',
    concentration: 'Gift Set',
    rating: 4.8,
    reviewCount: 120,
    description: 'Two luxury fragrances thoughtfully paired for the discerning collector.',
    longDescription: 'A curated duo of our most coveted signatures in a premium gift presentation.',
    topNotes: ['Rose Éternelle', 'Lumière Dorée'],
    heartNotes: ['Luxury Pairing', 'Collector Presentation'],
    baseNotes: ['Gift-ready box', 'Signature finish'],
    features: ['Premium gift presentation', 'Ready to give', 'Luxury collector packaging'],
    specs: { 'Format': 'Gift Set', 'Includes': '2 x 50ml', 'Presentation': 'Collector box' },
    reviews: []
  },
  'discovery-collection': {
    id: 'discovery-collection',
    name: 'The Discovery Collection',
    category: 'Discovery',
    categoryKey: 'discovery',
    badge: 'Gift Set',
    image: 'assets/images/perfume_nuit_dor.jpg',
    alt: 'The Discovery Collection three-scent gift set',
    sizes: { 'Gift Set': 240 },
    defaultSize: 'Gift Set',
    concentration: 'Gift Set',
    rating: 4.9,
    reviewCount: 89,
    description: 'Three signature fragrances to explore the complete olfactory universe.',
    longDescription: 'A compact discovery collection designed for gifting and fragrance exploration.',
    topNotes: ['Rose Éternelle', 'Lumière Dorée', 'Nuit d\'Or'],
    heartNotes: ['Discovery edit', 'Luxury travel set'],
    baseNotes: ['Gift-ready presentation', 'Collector casing'],
    features: ['Three full signatures', 'Luxury presentation box', 'Ideal for gifting'],
    specs: { 'Format': 'Gift Set', 'Includes': '3 x 30ml', 'Presentation': 'Collector box' },
    reviews: []
  },
  'connoisseurs-treasure': {
    id: 'connoisseurs-treasure',
    name: 'The Connoisseur\'s Treasure',
    category: 'Luxury',
    categoryKey: 'luxury',
    badge: 'Gift Set',
    image: 'assets/images/perfume_crystal_noir.jpg',
    alt: 'The Connoisseur\'s Treasure luxury fragrance trio',
    sizes: { 'Gift Set': 645 },
    defaultSize: 'Gift Set',
    concentration: 'Gift Set',
    rating: 5.0,
    reviewCount: 42,
    description: 'Three full-size signatures presented in an elevated luxury gift format.',
    longDescription: 'An exceptional collector set for fragrance connoisseurs who appreciate the rarest notes.',
    topNotes: ['Rose Éternelle', 'Lumière Dorée', 'Crystal Noir'],
    heartNotes: ['Full-size luxury set', 'Pearl-finish box'],
    baseNotes: ['Collector display', 'Luxury finish'],
    features: ['Three full-size signatures', 'Luxury box', 'Collector-grade presentation'],
    specs: { 'Format': 'Gift Set', 'Includes': '3 x 100ml', 'Presentation': 'Luxury box' },
    reviews: []
  },
  'day-to-night-journey': {
    id: 'day-to-night-journey',
    name: 'The Day to Night Journey',
    category: 'Trio',
    categoryKey: 'trio',
    badge: 'Gift Set',
    image: 'assets/images/perfume_ambre_royal.jpg',
    alt: 'The Day to Night Journey fragrance trio',
    sizes: { 'Gift Set': 265 },
    defaultSize: 'Gift Set',
    concentration: 'Gift Set',
    rating: 4.7,
    reviewCount: 76,
    description: 'A curated trio built for a polished day-to-evening fragrance wardrobe.',
    longDescription: 'The impeccable balance between morning freshness and evening depth in one elegant set.',
    topNotes: ['Blanc de Blanc', 'Ambre Royal', 'Nuit d\'Or'],
    heartNotes: ['Lifestyle edit', 'Luxury trio'],
    baseNotes: ['Premium gift box', 'Collector presentation'],
    features: ['Three curated scents', 'Elegant gift casing', 'Day to night versatility'],
    specs: { 'Format': 'Gift Set', 'Includes': '3 x 30ml', 'Presentation': 'Gift case' },
    reviews: []
  },
  'luxury-duo': {
    id: 'luxury-duo',
    name: 'The Luxury Duo',
    category: 'Luxury',
    categoryKey: 'luxury',
    badge: 'Gift Set',
    image: 'assets/images/perfume_lumiere_doree.jpg',
    alt: 'The Luxury Duo premium fragrance pairing',
    sizes: { 'Gift Set': 420 },
    defaultSize: 'Gift Set',
    concentration: 'Gift Set',
    rating: 4.9,
    reviewCount: 58,
    description: 'Two premium fragrances for the ultimate luxury experience.',
    longDescription: 'A refined duo of luminous florals and rich dark woods in a collector presentation.',
    topNotes: ['Crystal Noir', 'Nuit d\'Or'],
    heartNotes: ['Dual-signature set', 'Luxury pairing'],
    baseNotes: ['Gift-ready finishing', 'Collector presentation'],
    features: ['Two premium signatures', 'Luxury pairing', 'Gift-ready packaging'],
    specs: { 'Format': 'Gift Set', 'Includes': '2 x 75ml', 'Presentation': 'Luxury box' },
    reviews: []
  },
  'signature-explorer': {
    id: 'signature-explorer',
    name: 'The Signature Explorer',
    category: 'Discovery',
    categoryKey: 'discovery',
    badge: 'Gift Set',
    image: 'assets/images/perfume_blanc_de_blanc.jpg',
    alt: 'The Signature Explorer travel-sized fragrance sampler',
    sizes: { 'Gift Set': 195 },
    defaultSize: 'Gift Set',
    concentration: 'Gift Set',
    rating: 4.6,
    reviewCount: 94,
    description: 'Discover our iconic scents in a compact gift-sized sampler set.',
    longDescription: 'An explorer set for discovering all favorites in one elegant collection.',
    topNotes: ['Crystal Noir', 'Blanc de Blanc', 'Lumière Dorée'],
    heartNotes: ['Fragrance discovery', 'Collector assortment'],
    baseNotes: ['Mini bottle assortment', 'Gift-ready presentation'],
    features: ['Five iconic scents', 'Travel-size discovery set', 'Perfect for gifting'],
    specs: { 'Format': 'Gift Set', 'Includes': '5 x 15ml', 'Presentation': 'Travel box' },
    reviews: []
  },
  'nuit-dor': {
    id: 'nuit-dor',
    name: "Nuit d\u2019Or",
    category: 'Oriental',
    categoryKey: 'oriental',
    badge: 'Bestseller',
    image: 'assets/images/perfume_nuit_dor.jpg',
    alt: "Nuit d\u2019Or \u2014 dark obsidian luxury perfume bottle",
    sizes: { '30ml': 129, '50ml': 189, '75ml': 235, '100ml': 275 },
    defaultSize: '50ml',
    concentration: 'Eau de Parfum',
    rating: 5.0,
    reviewCount: 284,
    description: "A deep, evocative signature born from the darkest hours. Nuit d\u2019Or opens with a burst of Italian bergamot and Madagascan black pepper \u2014 sharp, arresting, unforgettable. As night deepens, rare Cambodian oud and Egyptian jasmine absolute rise from the heart, filling the air with an intoxicating warmth. The dry-down is a masterpiece of amber and white musk that clings to skin for hours, leaving a trail that turns heads and lingers in memory. This is not a perfume that asks for attention \u2014 it commands it.",
    longDescription: "Crafted in our Paris atelier over eighteen months, this fragrance draws on oud harvested from 200-year-old agarwood trees deep in the Cambodian jungle, sourced through our exclusive sustainability partnerships. Each batch is blended by hand and left to macerate for a minimum of eight weeks before bottling.",
    topNotes: ['Bergamot', 'Black Pepper', 'Pink Grapefruit'],
    heartNotes: ['Jasmine Absolute', 'Oud', 'Vetiver'],
    baseNotes: ['Amber', 'White Musk', 'Benzoin'],
    features: [
      'Long-lasting \u2014 12 to 16 hours on skin',
      'Perfect for evening and formal occasions',
      'Hand-blown Murano glass collector bottle',
      'Includes velvet presentation pouch',
      'Complimentary engraving available'
    ],
    specs: {
      'Concentration': 'Eau de Parfum (EDP)',
      'Bottle Material': 'Hand-blown Murano glass',
      'Country of Origin': 'France',
      'Year Created': '2019',
      'Perfumer': 'Henri Leclerc',
      'Sillage': 'Heavy \u2014 projects boldly',
      'Longevity': '12\u201316 hours',
      'Season': 'Autumn / Winter',
      'Occasion': 'Evening, Formal'
    },
    reviews: [
      { author: 'Sophia L.', location: 'Paris, France', rating: 5, title: 'Absolute masterpiece', body: "I\u2019ve worn many luxury fragrances but nothing compares to Nuit d\u2019Or. The oud is not overpowering \u2014 it is perfectly balanced with the jasmine. Hours later, I still get compliments. This is my forever fragrance.", date: 'August 12, 2024', helpful: 47 },
      { author: 'James W.', location: 'London, UK', rating: 5, title: 'Worth every penny', body: "Bought this as a treat to myself after seeing it featured in GQ. The sillage is extraordinary \u2014 people have stopped me on the street to ask what I\u2019m wearing. The bottle is also a work of art.", date: 'July 28, 2024', helpful: 33 },
      { author: 'Rania H.', location: 'Dubai, UAE', rating: 5, title: 'My evening signature', body: "In Dubai we take fragrance very seriously, and Nuit d\u2019Or stands up to the very best oud-based perfumes. The amber base is rich and warm without being heavy. Extraordinary.", date: 'June 15, 2024', helpful: 28 }
    ]
  },
  'lumiere-doree': {
    id: 'lumiere-doree',
    name: "Lumi\u00e8re Dor\u00e9e",
    category: 'Floral',
    categoryKey: 'floral',
    badge: 'New Arrival',
    image: 'assets/images/perfume_lumiere_doree.jpg',
    alt: "Lumi\u00e8re Dor\u00e9e \u2014 ornate Arabian perfume bottle with gold filigree",
    sizes: { '30ml': 149, '50ml': 195, '75ml': 220, '100ml': 280 },
    defaultSize: '75ml',
    concentration: 'Eau de Parfum',
    rating: 5.0,
    reviewCount: 192,
    description: "Golden light captured in a bottle. Lumi\u00e8re Dor\u00e9e is the fragrance of a Mediterranean morning \u2014 citrus-bright yet warm, floral yet grounded. The opening is a luminous burst of Sicilian citrus and Egyptian neroli, playful and radiant. As the heart blooms, Turkish rose absolute and rare ylang-ylang from the Comoros Islands weave together in perfect harmony. The base of Indonesian sandalwood and Madagascar vanilla anchors everything in a warm, honeyed embrace that is unmistakably feminine without ever being conventional.",
    longDescription: "Inspired by the golden hour over the Moroccan souks and the intricate arabesque craft of the Islamic Golden Age, the bottle itself is a collector\u2019s piece \u2014 hand-engraved by Moroccan artisans with traditional geometric patterns overlaid in 22-karat gold.",
    topNotes: ['Sicilian Citrus', 'Neroli', 'Bergamot'],
    heartNotes: ['Turkish Rose', 'Ylang-Ylang', 'Jasmine'],
    baseNotes: ['Sandalwood', 'Vanilla', 'White Musk'],
    features: [
      'Radiant, luminous opening accord',
      'Elegant and feminine \u2014 day to evening',
      'Hand-engraved arabesque bottle in 22k gold',
      'Free gift wrapping included',
      'Limited batch \u2014 2,000 bottles worldwide'
    ],
    specs: {
      'Concentration': 'Eau de Parfum (EDP)',
      'Bottle Material': 'Crystal with 22k gold engraving',
      'Country of Origin': 'France \u2022 Morocco',
      'Year Created': '2024',
      'Perfumer': 'Henri Leclerc',
      'Sillage': 'Moderate \u2014 elegant trail',
      'Longevity': '10\u201314 hours',
      'Season': 'Spring / Summer',
      'Occasion': 'Day, Evening, Special Occasions'
    },
    reviews: [
      { author: 'Aisha N.', location: 'Tokyo, Japan', rating: 5, title: 'Liquid sunshine', body: "I ordered this as soon as it launched and I am completely in love. The citrus opening is so fresh and the rose heart is stunning. It\u2019s become my daily signature and I receive compliments everywhere I go.", date: 'August 20, 2024', helpful: 61 },
      { author: 'Fatima K.', location: 'Abu Dhabi, UAE', rating: 5, title: 'The bottle alone is worth it', body: "The arabesque engraving on the bottle is absolutely stunning \u2014 it sits on my vanity like a sculpture. But the fragrance inside is even more beautiful. Warm, golden, and deeply feminine.", date: 'August 8, 2024', helpful: 44 },
      { author: 'Emma B.', location: 'Milan, Italy', rating: 5, title: 'Best new fragrance of 2024', body: "I work in fashion and I wear a lot of luxury fragrances. Lumi\u00e8re Dor\u00e9e is the most beautiful new release I\u2019ve smelled this year. The sandalwood base is creamy and warm without being heavy.", date: 'July 31, 2024', helpful: 39 }
    ]
  },
  'crystal-noir': {
    id: 'crystal-noir',
    name: 'Crystal Noir',
    category: 'Fresh',
    categoryKey: 'fresh',
    badge: '',
    image: 'assets/images/perfume_crystal_noir.jpg',
    alt: 'Crystal Noir \u2014 geometric faceted crystal bottle',
    sizes: { '30ml': 109, '50ml': 165, '75ml': 205 },
    defaultSize: '50ml',
    concentration: 'Eau de Toilette',
    rating: 4.8,
    reviewCount: 156,
    description: "Clarity and shadow \u2014 the quiet tension at the heart of Crystal Noir. This is a fragrance for those who prefer understated elegance over projection, who understand that the most powerful statements are sometimes whispered. It opens with Sicilian grapefruit and French neroli \u2014 clean, luminous, immediate. The heart unfolds with cool iris from Florence and violet leaf, adding depth without weight. The dry-down of Haitian vetiver and Atlas cedarwood gives Crystal Noir a quiet, confident resonance that stays close to skin throughout the day.",
    longDescription: "The hand-faceted crystal bottle, a collaboration with Venetian glassblower Maestro Enzo Ferraro, refracts light in ways that change with every angle \u2014 a physical embodiment of the fragrance\u2019s duality. Each bottle is unique, slightly different from the next.",
    topNotes: ['Sicilian Grapefruit', 'Neroli', 'Lemon Zest'],
    heartNotes: ['Florentine Iris', 'Violet Leaf', 'Orris'],
    baseNotes: ['Haitian Vetiver', 'Atlas Cedarwood', 'Musk'],
    features: [
      'Clean, luminous fresh-woody accord',
      'Ideal for office and daytime wear',
      'Hand-faceted crystal bottle \u2014 each unique',
      'Travel-friendly 30ml option available',
      'Unisex \u2014 wears beautifully on all skin types'
    ],
    specs: {
      'Concentration': 'Eau de Toilette (EDT)',
      'Bottle Material': 'Hand-faceted crystal',
      'Country of Origin': 'France',
      'Year Created': '2021',
      'Perfumer': 'Sophie Marchais',
      'Sillage': 'Light to moderate',
      'Longevity': '6\u20139 hours',
      'Season': 'All seasons, especially Spring',
      'Occasion': 'Day, Office, Casual'
    },
    reviews: [
      { author: 'Marcus T.', location: 'New York, USA', rating: 5, title: 'My everyday go-to', body: "I\u2019ve been searching for a fresh iris fragrance that doesn\u2019t smell synthetic. Crystal Noir is it. The vetiver base is perfectly balanced \u2014 earthy but not overpowering. Colleagues ask about it constantly.", date: 'August 15, 2024', helpful: 29 },
      { author: 'Clara M.', location: 'Berlin, Germany', rating: 4.8, title: 'Minimalist and beautiful', body: "The bottle is genuinely stunning \u2014 the way it catches light is mesmerizing. The fragrance itself is clean and refined. It\u2019s the kind of perfume that doesn\u2019t shout but definitely makes an impression.", date: 'July 20, 2024', helpful: 22 },
      { author: 'Yuki S.', location: 'Osaka, Japan', rating: 5, title: 'Perfect for all seasons', body: "I wear Crystal Noir year-round. In summer it feels crisp and cool, in winter it warms up nicely on my skin. The iris heart is exceptional \u2014 powdery but not old-fashioned.", date: 'June 28, 2024', helpful: 18 }
    ]
  },
  'ambre-royal': {
    id: 'ambre-royal',
    name: 'Ambre Royal',
    category: 'Oriental',
    categoryKey: 'oriental',
    badge: 'Limited Edition',
    image: 'assets/images/perfume_ambre_royal.jpg',
    alt: 'Ambre Royal \u2014 rich amber crystal collector bottle',
    sizes: { '50ml': 195, '100ml': 245 },
    defaultSize: '100ml',
    concentration: 'Extrait de Parfum',
    rating: 5.0,
    reviewCount: 98,
    description: "Power. Presence. Legacy. Ambre Royal is the crown jewel of the Amazon Perfumes collection \u2014 an Extrait de Parfum of extraordinary concentration and depth. It opens with Iranian saffron and green cardamom \u2014 spiced, warm, immediately arresting. The heart is a luminous column of pure Bulgarian rose intertwined with the finest Cambodian oud, creating a combination that has defined luxury oriental perfumery for centuries. The base is an amber monument: pure benzoin resin, labdanum, and aged sandalwood, sustaining this magnificent scent for 24 to 36 hours on skin.",
    longDescription: "Only 300 bottles are crafted each year. The crystal flacon is hand-cut and inspected individually in our Grasse atelier. Each arrives in a handcrafted wooden presentation box with a certificate of authenticity, numbered and signed by Maison perfumer Henri Leclerc. This is not merely a fragrance \u2014 it is an heirloom.",
    topNotes: ['Iranian Saffron', 'Green Cardamom', 'Pink Pepper'],
    heartNotes: ['Bulgarian Rose Absolute', 'Cambodian Oud', 'Jasmine'],
    baseNotes: ['Amber', 'Benzoin Resin', 'Sandalwood', 'Labdanum'],
    features: [
      '24\u201336 hour longevity on skin',
      'Limited to 300 bottles worldwide per year',
      'Hand-numbered certificate of authenticity',
      'Handcrafted wooden presentation box',
      'Complimentary calligraphy gift card'
    ],
    specs: {
      'Concentration': 'Extrait de Parfum (Perfume Extract)',
      'Bottle Material': 'Hand-cut crystal, gilded cap',
      'Country of Origin': 'France',
      'Year Created': '2017',
      'Perfumer': 'Henri Leclerc',
      'Sillage': 'Very heavy \u2014 a true statement',
      'Longevity': '24\u201336 hours',
      'Season': 'Autumn / Winter',
      'Occasion': 'Evening, Formal, Special Occasions'
    },
    reviews: [
      { author: 'Prince A.', location: 'Riyadh, Saudi Arabia', rating: 5, title: 'The finest oud I have ever worn', body: "I have a collection of over 400 fragrances. Ambre Royal sits at the very top. The saffron and rose combination is extraordinary \u2014 regal without being ostentatious. The longevity is genuinely 30+ hours on my skin. Nothing else comes close.", date: 'August 22, 2024', helpful: 89 },
      { author: 'Victoria H.', location: 'Monaco', rating: 5, title: 'My wedding fragrance', body: "I wore Ambre Royal on my wedding day and my husband still says it\u2019s the most beautiful thing he\u2019s ever smelled. The wooden box and certificate make it feel genuinely special \u2014 a true luxury experience from first touch.", date: 'July 14, 2024', helpful: 73 },
      { author: 'Ibrahim M.', location: 'Doha, Qatar', rating: 5, title: 'Worth every dollar', body: "In the Gulf, we are used to fine oud. Ambre Royal earns its place among the very best. The benzoin base is unique \u2014 sweet but complex, not cloying. I gift this to important guests and they always reach out afterward to ask where it\u2019s from.", date: 'June 30, 2024', helpful: 51 }
    ]
  },
  'rose-eternelle': {
    id: 'rose-eternelle',
    name: "Rose \u00c9ternelle",
    category: 'Floral',
    categoryKey: 'floral',
    badge: '',
    image: 'assets/images/perfume_rose_eternelle.jpg',
    alt: "Rose \u00c9ternelle \u2014 rose gold feminine bottle",
    sizes: { '30ml': 129, '50ml': 165, '75ml': 195, '100ml': 240 },
    defaultSize: '75ml',
    concentration: 'Eau de Parfum',
    rating: 5.0,
    reviewCount: 211,
    description: "The rose has been the queen of perfumery for three thousand years. Rose \u00c9ternelle does not try to modernize it \u2014 it immortalizes it. The opening is a luscious, sun-warmed peach shimmering with luminous aldehydes, as if the rose is just about to bloom. The heart is pure Bulgarian Rose Absolute from the Valley of Roses \u2014 rich, honeyed, velvety, and deeply romantic. A whisper of white peony adds lightness and modernity. The dry-down anchors everything in a bed of dark patchouli and white musk that is simultaneously sensual and clean, lasting long into the next morning.",
    longDescription: "The roses used in Rose \u00c9ternelle are hand-harvested at dawn in May from the Kazanlak Valley in Bulgaria \u2014 the only region in the world where conditions produce rose oil of sufficient quality for this fragrance. Our master distiller, Milena Kovacheva, oversees every harvest personally.",
    topNotes: ['Bulgarian Rose Absolute', 'Peach', 'Aldehydes'],
    heartNotes: ['Rose Heart', 'White Peony', 'Magnolia'],
    baseNotes: ['Patchouli', 'White Musk', 'Orris Root'],
    features: [
      'Hand-harvested Bulgarian Rose Absolute',
      'Romantic and feminine \u2014 day to evening',
      'Rose-gold bottle with velvet carrying pouch',
      'Perfect anniversary or birthday gift',
      'Voted \u201cBest Floral\u201d by Fragrantica 2023'
    ],
    specs: {
      'Concentration': 'Eau de Parfum (EDP)',
      'Bottle Material': 'Rose-gold tinted glass',
      'Country of Origin': 'France \u2022 Bulgaria',
      'Year Created': '2020',
      'Perfumer': 'Sophie Marchais',
      'Sillage': 'Moderate \u2014 beautiful projection',
      'Longevity': '10\u201314 hours',
      'Season': 'Spring, Summer, Autumn',
      'Occasion': 'Day, Evening, Romantic'
    },
    reviews: [
      { author: 'Isabelle D.', location: 'Lyon, France', rating: 5, title: 'The perfect rose fragrance', body: "As a French woman who has worn perfume for forty years, I am very particular. Rose \u00c9ternelle is the most authentic rose fragrance I have ever worn. It does not smell synthetic or soapy \u2014 it smells like actual roses, but elevated. Magnifique.", date: 'August 18, 2024', helpful: 58 },
      { author: 'Sarah K.', location: 'Toronto, Canada', rating: 5, title: 'My mother cried when I gifted this', body: "I bought this for my mother\u2019s 60th birthday. She\u2019s a lifelong fragrance lover and when she opened it and smelled it for the first time, she actually teared up. The peach-rose combination is absolutely beautiful.", date: 'July 25, 2024', helpful: 45 },
      { author: 'Priya S.', location: 'Mumbai, India', rating: 5, title: 'Sophisticated and timeless', body: "I wear this to every formal event I attend. The patchouli base makes it feel luxurious and grown-up while the rose heart keeps it romantic. Perfect for special occasions.", date: 'July 10, 2024', helpful: 31 }
    ]
  },
  'blanc-de-blanc': {
    id: 'blanc-de-blanc',
    name: 'Blanc de Blanc',
    category: 'Woody',
    categoryKey: 'woody',
    badge: "Editor's Pick",
    image: 'assets/images/perfume_blanc_de_blanc.jpg',
    alt: 'Blanc de Blanc \u2014 minimal frosted white bottle',
    sizes: { '30ml': 119, '50ml': 175, '75ml': 215 },
    defaultSize: '50ml',
    concentration: 'Eau de Toilette',
    rating: 4.9,
    reviewCount: 178,
    description: "Everything unnecessary has been removed. Blanc de Blanc is the fragrance that remains. Opening with luminous white musk and shimmering aldehydes \u2014 clean, radiant, effortlessly sophisticated \u2014 it settles into a heart of white flowers: Grasse lily and Tahitian gardenia, impossibly delicate yet distinct. The base of French cedarwood and Haitian vetiver gives Blanc de Blanc its quiet authority \u2014 a woody foundation that speaks without shouting. This is a fragrance for people who have nothing to prove, and everything to appreciate.",
    longDescription: "Inspired by the Japanese concept of 'Ma' \u2014 the beauty of negative space. The frosted white bottle, designed in collaboration with Copenhagen studio NORM Architects, contains no unnecessary embellishment. The fragrance inside follows the same philosophy.",
    topNotes: ['White Musk', 'Aldehydes', 'Crisp Air Accord'],
    heartNotes: ['Grasse Lily', 'Tahitian Gardenia', 'White Rose'],
    baseNotes: ['French Cedarwood', 'Haitian Vetiver', 'Cashmeran'],
    features: [
      'Clean, luminous minimal fragrance',
      'Fresh and office-ready \u2014 never overwhelming',
      'Award-winning frosted minimalist bottle',
      'Unisex \u2014 loved equally by men and women',
      "Named Editor\u2019s Pick by Vogue, Wallpaper*, and GQ"
    ],
    specs: {
      'Concentration': 'Eau de Toilette (EDT)',
      'Bottle Material': 'Frosted Bohemian glass',
      'Country of Origin': 'France',
      'Year Created': '2022',
      'Perfumer': 'Sophie Marchais',
      'Sillage': 'Light \u2014 intimate and refined',
      'Longevity': '7\u201310 hours',
      'Season': 'All seasons',
      'Occasion': 'Day, Office, Casual, Travel'
    },
    reviews: [
      { author: 'Lars H.', location: 'Stockholm, Sweden', rating: 5, title: 'Scandinavian minimalism in a bottle', body: "As a Swede, I appreciate restraint. Blanc de Blanc is the most beautifully minimal fragrance I\u2019ve encountered. It\u2019s not trying to impress anyone \u2014 it simply is. The vetiver base is superb.", date: 'August 10, 2024', helpful: 52 },
      { author: 'Anna V.', location: 'Vienna, Austria', rating: 4.9, title: 'My office fragrance of choice', body: "I work in a professional environment where strong fragrances can be inappropriate. Blanc de Blanc is the perfect solution \u2014 it\u2019s present enough to be noticed but never intrusive. The gardenia heart is beautiful.", date: 'July 22, 2024', helpful: 38 },
      { author: 'Tom C.', location: 'Singapore', rating: 5, title: 'Worth every cent', body: "I bought this as a \u2018safe\u2019 choice after reading the reviews. It has quickly become my most-worn fragrance. The aldehydes give it a classic quality without smelling old. Extraordinary craftsmanship.", date: 'July 5, 2024', helpful: 26 }
    ]
  }
};

/* Global export */
window.productCatalog = productCatalog;

/* ══════════════════════════════════════════════════════════
   CART ENGINE
   ══════════════════════════════════════════════════════════ */
var CART_KEY     = 'amazonPerfumesCart';
var SHIPPING_KEY = 'amazonPerfumesShipping';

var fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
function currency(v) { return fmt.format(v); }

function readCart() {
  try { var r = localStorage.getItem(CART_KEY); return r ? JSON.parse(r) : []; }
  catch(e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  var count = readCart().reduce(function(t, i) { return t + Number(i.qty || 0); }, 0);
  document.querySelectorAll('.cart-count').forEach(function(el) { el.textContent = count; });
}
function getCartTotal(cart) {
  cart = cart || readCart();
  return cart.reduce(function(s, i) { return s + Number(i.price) * Number(i.qty || 1); }, 0);
}

function addToCart(productId, size, qty) {
  size = size || 'default';
  qty  = qty  || 1;
  var product = productCatalog[productId];
  if (!product) return;

  var price = product.sizes
    ? (product.sizes[size] || product.sizes[product.defaultSize] || Object.values(product.sizes)[0])
    : product.price;

  var cart = readCart();
  var key  = productId + '||' + size;
  var ex   = cart.find(function(i) { return i.key === key; });

  if (ex) {
    ex.qty += qty;
  } else {
    cart.push({
      key:   key,
      id:    productId,
      name:  product.name,
      image: product.image,
      size:  size,
      conc:  product.concentration,
      price: price,
      qty:   qty
    });
  }
  saveCart(cart);
  showToast(product.name, size);
  return cart;
}

function removeFromCart(key) {
  saveCart(readCart().filter(function(i) { return i.key !== key; }));
}
function updateQty(key, qty) {
  saveCart(readCart().map(function(i) {
    return i.key === key ? Object.assign({}, i, { qty: Math.max(1, Number(qty) || 1) }) : i;
  }));
}
function getProductById(id) { return productCatalog[id]; }

/* Individual product page map */
var productPageMap = {
  'nuit-dor':       'nuit-dor.html',
  'lumiere-doree':  'lumiere-doree.html',
  'crystal-noir':   'crystal-noir.html',
  'ambre-royal':    'ambre-royal.html',
  'rose-eternelle': 'rose-eternelle.html',
  'blanc-de-blanc': 'blanc-de-blanc.html',
  'essentials-duo': 'gift-sets.html',
  'discovery-collection': 'gift-sets.html',
  'connoisseurs-treasure': 'gift-sets.html',
  'day-to-night-journey': 'gift-sets.html',
  'luxury-duo': 'gift-sets.html',
  'signature-explorer': 'gift-sets.html'
};

function goToProduct(id)    {
  window.location.href = productPageMap[id] || 'product.html?id=' + id;
}
function buyNow(id, size, qty) { addToCart(id, size, qty); window.location.href = 'checkout.html'; }

function buildStars(r) {
  var full = Math.round(r);
  return '\u2605'.repeat(full) + '\u2606'.repeat(5 - full);
}

/* ── Toast ───────────────────────────────────────────────── */
var _toastTimer;
function showToast(name, size) {
  var t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.innerHTML = '<div class="toast-icon">\u2713</div>' +
      '<div class="toast-text"><b class="toast-name"></b>' +
      '<span class="toast-sz"></span>' +
      '<span class="toast-action" onclick="window.location.href=\'cart.html\'">View Cart \u2192</span></div>';
    document.body.appendChild(t);
  }
  t.querySelector('.toast-name').textContent = name + ' added to cart';
  t.querySelector('.toast-sz').textContent   = size + ' \u00b7 ' + readCart().reduce(function(s,i){return s+i.qty;},0) + ' item(s)';
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function() { t.classList.remove('show'); }, 4000);
}

/* ══════════════════════════════════════════════════════════
   COLLECTION CARDS (index.html)
   ══════════════════════════════════════════════════════════ */
function loadCatalogCards() {
  document.querySelectorAll('.pcard').forEach(function(card) {
    var pid = card.dataset.productId;
    if (!pid) return;
    var product = productCatalog[pid];

    card.addEventListener('click', function(e) {
      if (e.target.closest('button')) return;
      goToProduct(pid);
    });

    var quickBtn = card.querySelector('.quick-btn');
    if (quickBtn) {
      quickBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        addToCart(pid, product ? product.defaultSize : '50ml', 1);
        quickBtn.textContent = 'Added \u2713';
        setTimeout(function() { quickBtn.textContent = 'Quick Add'; }, 1500);
      });
    }

    var addBtn = card.querySelector('.product-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        addToCart(pid, product ? product.defaultSize : '50ml', 1);
      });
    }

    var wishBtn = card.querySelector('.pcard-wish');
    if (wishBtn) {
      wishBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        wishBtn.textContent = '\u2665';
        wishBtn.style.color = '#e88';
        wishBtn.style.borderColor = '#e88';
      });
    }
  });
}

/* ══════════════════════════════════════════════════════════
   PRODUCT DETAIL PAGE  (product.html)
   ══════════════════════════════════════════════════════════ */
function renderProductPage() {
  var shell = document.getElementById('product-detail-shell');
  if (!shell) return;

  var params  = new URLSearchParams(window.location.search);
  var pid     = params.get('id');
  var product = getProductById(pid);

  /* Not found */
  if (!product) {
    shell.innerHTML =
      '<div style="text-align:center;padding:80px 40px;">' +
        '<div style="font-size:3rem;margin-bottom:24px;opacity:.3">\uD83D\uDEAB</div>' +
        '<h2 class="t-display" style="font-size:2.5rem;margin-bottom:16px;">Product not found</h2>' +
        '<p style="color:var(--white-faint);margin-bottom:40px;">The fragrance you are looking for is unavailable.</p>' +
        '<a href="index.html#collection" class="btn btn-gold"><span>Back to Collection</span></a>' +
      '</div>';
    return;
  }

  /* Update breadcrumb */
  var crumb = document.getElementById('breadcrumb-name');
  if (crumb) crumb.textContent = product.name;
  document.title = product.name + ' \u2014 Amazon Perfumes';

  /* Delivery date (simulate) */
  var d = new Date();
  d.setDate(d.getDate() + 5);
  var deliveryDate = d.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
  var d2 = new Date(); d2.setDate(d2.getDate() + 3);
  var expressDate = d2.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });

  /* Size options */
  var sizesHTML = Object.entries(product.sizes).map(function(entry) {
    var sz = entry[0], pr = entry[1];
    return '<button class="pdp-size-btn' + (sz === product.defaultSize ? ' active' : '') + '" data-size="' + sz + '" data-price="' + pr + '">' +
      sz + '<br><small style="font-size:.65em;font-family:\'Cormorant Garamond\',serif;">' + currency(pr) + '</small></button>';
  }).join('');

  /* Rating bars */
  var bars = [[5,92],[4,6],[3,2],[2,0],[1,0]].map(function(b) {
    return '<div class="review-bar-row"><span>' + b[0] + '\u2605</span>' +
      '<div class="review-bar-track"><div class="review-bar-fill" style="width:' + b[1] + '%;"></div></div>' +
      '<span class="review-bar-pct">' + b[1] + '%</span></div>';
  }).join('');

  /* Reviews */
  var reviewsHTML = product.reviews.map(function(rv) {
    return '<div class="review-card">' +
      '<div class="review-card-header">' +
        '<div class="review-author">' +
          '<div class="review-avatar">' + rv.author[0] + '</div>' +
          '<div><div class="review-author-name">' + rv.author + '</div>' +
            '<div class="review-author-meta">' + rv.location + '</div></div>' +
        '</div>' +
        '<div style="text-align:right">' +
          '<div class="review-date">' + rv.date + '</div>' +
          '<span class="verified-badge" style="margin-top:6px;">\u2713 Verified Purchase</span>' +
        '</div>' +
      '</div>' +
      '<div class="review-stars">' + '\u2605'.repeat(Math.round(rv.rating)) + '</div>' +
      '<div class="review-title">' + rv.title + '</div>' +
      '<div class="review-body">' + rv.body + '</div>' +
      '<div class="review-helpful">Helpful? ' +
        '<button class="review-helpful-btn" onclick="this.textContent=\'\u2191 \'+(' + rv.helpful + '+1)+\' Yes\';this.style.borderColor=\'var(--gold)\';this.style.color=\'var(--gold)\';">\u2191 ' + rv.helpful + ' Yes</button>' +
        '<button class="review-helpful-btn">No</button>' +
      '</div>' +
    '</div>';
  }).join('');

  /* Related products */
  var relatedIDs = Object.keys(productCatalog).filter(function(id) { return id !== pid; }).slice(0, 3);
  var relatedHTML = relatedIDs.map(function(rid) {
    var rp = productCatalog[rid];
    var rPrice = rp.sizes ? Object.values(rp.sizes)[0] : rp.price;
    return '<article class="pcard" style="cursor:pointer;" onclick="goToProduct(\'' + rid + '\')">' +
      '<div class="pcard-img"><img src="' + rp.image + '" alt="' + rp.alt + '" loading="lazy" />' +
        (rp.badge ? '<span class="pcard-badge">' + rp.badge + '</span>' : '') +
      '</div>' +
      '<div class="pcard-body">' +
        '<p class="pcard-cat">' + rp.category + '</p>' +
        '<div class="pcard-stars">' + '\u2605'.repeat(Math.round(rp.rating)) + '</div>' +
        '<h3 class="pcard-name">' + rp.name + '</h3>' +
        '<div class="pcard-footer">' +
          '<div><div class="pcard-price">from ' + currency(rPrice) + '</div>' +
            '<div class="pcard-size">' + rp.concentration + '</div></div>' +
          '<button class="pcard-add" onclick="event.stopPropagation();addToCart(\'' + rid + '\',\'' + rp.defaultSize + '\',1)" aria-label="Add to cart">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join('');

  /* Main render */
  shell.innerHTML =
    /* PDP grid */
    '<div class="pdp-wrap">' +

      /* Gallery */
      '<div class="pdp-gallery">' +
        '<div class="pdp-main-img" id="pdp-main-img">' +
          (product.badge ? '<div class="pdp-badge-overlay">' + product.badge + '</div>' : '') +
          '<img src="' + product.image + '" alt="' + product.alt + '" id="pdp-main-photo" />' +
        '</div>' +
        '<div class="pdp-thumbs">' +
          '<div class="pdp-thumb active"><img src="' + product.image + '" alt="Front view" /></div>' +
          '<div class="pdp-thumb"><img src="' + product.image + '" alt="Side view" style="transform:scaleX(-1)" /></div>' +
          '<div class="pdp-thumb"><img src="' + product.image + '" alt="Top view" style="filter:brightness(.85)saturate(1.2)" /></div>' +
          '<div class="pdp-thumb"><img src="' + product.image + '" alt="Cap detail" style="filter:brightness(1.1)contrast(.9)" /></div>' +
        '</div>' +
      '</div>' +

      /* Info panel */
      '<div class="pdp-info">' +

        '<p class="pdp-brand">Amazon Perfumes \u00b7 ' + product.category + '</p>' +
        '<h1 class="pdp-name">' + product.name + '</h1>' +

        '<div class="pdp-rating-row">' +
          '<span class="pdp-stars" aria-label="' + product.rating + ' stars">' + buildStars(product.rating) + '</span>' +
          '<span class="pdp-rating-num">' + product.rating.toFixed(1) + '</span>' +
          '<a href="#tab-reviews" class="pdp-reviews-link">' + product.reviewCount + ' Reviews</a>' +
          '<span class="pdp-verified">\u2713 Verified Maison</span>' +
        '</div>' +

        '<div class="pdp-divider"></div>' +

        '<div class="pdp-price-block">' +
          '<div class="pdp-price" id="pdp-price">' + currency(product.sizes[product.defaultSize]) + '</div>' +
          '<div class="pdp-price-note">Inclusive of all taxes &amp; duties</div>' +
          '<div class="pdp-price-save">\u2713 Free global shipping on this order</div>' +
        '</div>' +

        '<span class="pdp-option-label">Select Size &mdash; <span id="pdp-selected-size">' + product.defaultSize + '</span></span>' +
        '<div class="pdp-sizes" role="group" aria-label="Size options">' + sizesHTML + '</div>' +

        '<div class="pdp-qty-row">' +
          '<span class="pdp-option-label" style="margin:0;">Quantity</span>' +
          '<div class="pdp-qty">' +
            '<button class="pdp-qty-btn" id="pdp-qty-dec" aria-label="Decrease quantity">&minus;</button>' +
            '<div class="pdp-qty-num" id="pdp-qty-num">1</div>' +
            '<button class="pdp-qty-btn" id="pdp-qty-inc" aria-label="Increase quantity">+</button>' +
          '</div>' +
        '</div>' +

        '<div class="pdp-cta">' +
          '<button class="pdp-btn-cart" id="pdp-add-btn" aria-label="Add to cart">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>' +
            'Add to Cart' +
          '</button>' +
          '<button class="pdp-btn-buy" id="pdp-buy-btn" aria-label="Buy now">' +
            '\u26a1 Buy Now' +
          '</button>' +
        '</div>' +

        '<div class="pdp-delivery">' +
          '<div class="pdp-delivery-row">' +
            '<div class="pdp-delivery-icon">\uD83D\uDCE6</div>' +
            '<div class="pdp-delivery-text">' +
              '<div class="d-title">Standard Delivery &mdash; Free</div>' +
              '<div class="d-sub">Expected by <strong>' + deliveryDate + '</strong></div>' +
            '</div>' +
          '</div>' +
          '<div class="pdp-delivery-row">' +
            '<div class="pdp-delivery-icon">\u26a1</div>' +
            '<div class="pdp-delivery-text">' +
              '<div class="d-title">Express Delivery \u2014 $18</div>' +
              '<div class="d-sub">Arrives by <strong>' + expressDate + '</strong> (order within 4h)</div>' +
            '</div>' +
          '</div>' +
          '<div class="pdp-delivery-row">' +
            '<div class="pdp-delivery-icon">\uD83D\uDD04</div>' +
            '<div class="pdp-delivery-text">' +
              '<div class="d-title">30-Day Returns</div>' +
              '<div class="d-sub">Unopened items accepted with original packaging</div>' +
            '</div>' +
          '</div>' +
          '<div class="pdp-delivery-row">' +
            '<div class="pdp-delivery-icon">\uD83D\uDEE1\uFE0F</div>' +
            '<div class="pdp-delivery-text">' +
              '<div class="d-title">Authenticity Guaranteed</div>' +
              '<div class="d-sub">Every bottle is certified by our Grasse atelier</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<span class="pdp-option-label">Key Highlights</span>' +
        '<div class="pdp-highlights">' +
          '<ul>' + product.features.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
        '</div>' +

        '<div class="pdp-actions-row">' +
          '<button class="pdp-action-link" id="pdp-wish-btn">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' +
            'Wishlist' +
          '</button>' +
          '<button class="pdp-action-link">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' +
            'Share' +
          '</button>' +
        '</div>' +

      '</div>' + /* end pdp-info */
    '</div>' + /* end pdp-wrap */

    /* TABS */
    '<div class="pdp-tabs-section">' +
      '<nav class="pdp-tabs-nav" role="tablist">' +
        '<button class="pdp-tab-btn active" data-tab="description" role="tab">Description</button>' +
        '<button class="pdp-tab-btn" data-tab="notes" role="tab">Fragrance Notes</button>' +
        '<button class="pdp-tab-btn" data-tab="reviews" role="tab" id="tab-reviews">Reviews (' + product.reviewCount + ')</button>' +
      '</nav>' +

      /* Description tab */
      '<div class="pdp-tab-content active" id="tab-description">' +
        '<div class="pdp-desc-grid">' +
          '<div>' +
            '<p class="pdp-desc-text">' + product.description + '</p>' +
            '<p class="pdp-desc-text" style="margin-top:20px;">' + product.longDescription + '</p>' +
          '</div>' +
          '<div class="pdp-specs">' +
            '<table><tbody>' +
              Object.entries(product.specs).map(function(s) {
                return '<tr><td>' + s[0] + '</td><td>' + s[1] + '</td></tr>';
              }).join('') +
            '</tbody></table>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* Notes Pyramid tab */
      '<div class="pdp-tab-content" id="tab-notes">' +
        '<div class="notes-pyramid">' +
          '<div class="notes-layer top">' +
            '<div class="notes-layer-label">Top Notes</div>' +
            '<div class="notes-layer-items">' + product.topNotes.map(function(n) { return '<span class="note-chip">' + n + '</span>'; }).join('') + '</div>' +
            '<div class="notes-layer-time">0\u201315 min</div>' +
          '</div>' +
          '<div class="notes-layer heart">' +
            '<div class="notes-layer-label">Heart Notes</div>' +
            '<div class="notes-layer-items">' + product.heartNotes.map(function(n) { return '<span class="note-chip">' + n + '</span>'; }).join('') + '</div>' +
            '<div class="notes-layer-time">15\u201360 min</div>' +
          '</div>' +
          '<div class="notes-layer base">' +
            '<div class="notes-layer-label">Base Notes</div>' +
            '<div class="notes-layer-items">' + product.baseNotes.map(function(n) { return '<span class="note-chip">' + n + '</span>'; }).join('') + '</div>' +
            '<div class="notes-layer-time">1h+</div>' +
          '</div>' +
          '<div class="notes-legend">' +
            '<div class="notes-legend-item"><div class="notes-legend-dot dot-top"></div>Top \u2014 First impression</div>' +
            '<div class="notes-legend-item"><div class="notes-legend-dot dot-heart"></div>Heart \u2014 Soul of the fragrance</div>' +
            '<div class="notes-legend-item"><div class="notes-legend-dot dot-base"></div>Base \u2014 Lasting trail</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* Reviews tab */
      '<div class="pdp-tab-content" id="tab-reviews-panel">' +
        '<div class="reviews-summary">' +
          '<div>' +
            '<div class="reviews-big-num">' + product.rating.toFixed(1) + '</div>' +
            '<div class="reviews-big-stars">' + '\u2605'.repeat(Math.round(product.rating)) + '</div>' +
            '<div class="reviews-big-count">' + product.reviewCount + ' Verified Reviews</div>' +
          '</div>' +
          '<div class="reviews-bars">' + bars + '</div>' +
        '</div>' +
        '<div class="reviews-list">' + reviewsHTML + '</div>' +
      '</div>' +

    '</div>' + /* end pdp-tabs-section */

    /* Related products */
    '<div class="related-section wrap" style="padding-left:0;padding-right:0;">' +
      '<div class="related-header">' +
        '<h2 class="related-title">You May Also <em>Love</em></h2>' +
        '<a href="index.html#collection" class="btn-text">View All</a>' +
      '</div>' +
      '<div class="related-grid">' + relatedHTML + '</div>' +
    '</div>';

  /* ── Interactions ──────────────────────────────────────── */
  var selectedSize  = product.defaultSize;
  var selectedPrice = product.sizes[selectedSize];
  var qty = 1;

  /* Size buttons */
  shell.querySelectorAll('.pdp-size-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      shell.querySelectorAll('.pdp-size-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      selectedSize  = btn.dataset.size;
      selectedPrice = Number(btn.dataset.price);
      document.getElementById('pdp-price').textContent        = currency(selectedPrice);
      document.getElementById('pdp-selected-size').textContent = selectedSize;
    });
  });

  /* Qty stepper */
  document.getElementById('pdp-qty-dec').addEventListener('click', function() {
    if (qty > 1) { qty--; document.getElementById('pdp-qty-num').textContent = qty; }
  });
  document.getElementById('pdp-qty-inc').addEventListener('click', function() {
    if (qty < 10) { qty++; document.getElementById('pdp-qty-num').textContent = qty; }
  });

  /* Add to Cart */
  document.getElementById('pdp-add-btn').addEventListener('click', function() {
    addToCart(pid, selectedSize, qty);
    var btn = document.getElementById('pdp-add-btn');
    btn.innerHTML = '\u2713 Added to Cart';
    btn.style.background = 'var(--gold)';
    btn.style.color = 'var(--black)';
    setTimeout(function() {
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Add to Cart';
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });

  /* Buy Now */
  document.getElementById('pdp-buy-btn').addEventListener('click', function() {
    buyNow(pid, selectedSize, qty);
  });

  /* Thumb gallery */
  shell.querySelectorAll('.pdp-thumb').forEach(function(t, i) {
    t.addEventListener('click', function() {
      shell.querySelectorAll('.pdp-thumb').forEach(function(x) { x.classList.remove('active'); });
      t.classList.add('active');
    });
  });

  /* Wishlist */
  var wishBtn = document.getElementById('pdp-wish-btn');
  if (wishBtn) {
    wishBtn.addEventListener('click', function() {
      wishBtn.style.color = '#e88';
      wishBtn.innerHTML = wishBtn.innerHTML.replace('Wishlist', '\u2665 Wishlisted');
    });
  }

  /* Tabs */
  shell.querySelectorAll('.pdp-tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.dataset.tab;
      shell.querySelectorAll('.pdp-tab-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      /* Map tab key to content IDs */
      var map = { description: 'tab-description', notes: 'tab-notes', reviews: 'tab-reviews-panel' };
      shell.querySelectorAll('.pdp-tab-content').forEach(function(c) { c.classList.remove('active'); });
      var el = document.getElementById(map[target]);
      if (el) el.classList.add('active');
      if (target === 'reviews') {
        btn.setAttribute('id', ''); /* Remove ID so anchor scroll works */
        var anchor = document.getElementById('tab-reviews');
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* Smooth scroll to reviews from rating link */
  var ratingLink = shell.querySelector('.pdp-reviews-link');
  if (ratingLink) {
    ratingLink.addEventListener('click', function(e) {
      e.preventDefault();
      shell.querySelectorAll('.pdp-tab-btn').forEach(function(b) { b.classList.remove('active'); });
      var reviewTabBtn = shell.querySelector('[data-tab="reviews"]');
      if (reviewTabBtn) reviewTabBtn.classList.add('active');
      shell.querySelectorAll('.pdp-tab-content').forEach(function(c) { c.classList.remove('active'); });
      var rp = document.getElementById('tab-reviews-panel');
      if (rp) { rp.classList.add('active'); rp.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  }
}

/* ══════════════════════════════════════════════════════════
   CART PAGE
   ══════════════════════════════════════════════════════════ */
function renderCartPage() {
  var cartList = document.getElementById('cart-items');
  var emptyPanel = document.getElementById('empty-cart');
  var summary  = document.getElementById('order-summary');
  if (!cartList || !summary) return;

  var cart = readCart();

  if (!cart.length) {
    cartList.innerHTML = '';
    if (emptyPanel) emptyPanel.style.display = 'block';
    summary.innerHTML =
      '<h3>Order Summary</h3>' +
      '<div class="summary-row"><span>Subtotal</span><strong>$0.00</strong></div>' +
      '<div class="summary-row"><span>Shipping</span><strong>Free</strong></div>' +
      '<div class="summary-row total"><span>Total</span><strong>$0.00</strong></div>' +
      '<a href="index.html#collection" class="btn btn-gold checkout-link" style="width:100%;justify-content:center;margin-top:20px;"><span>Browse Collection</span></a>';
    return;
  }

  if (emptyPanel) emptyPanel.style.display = 'none';

  cartList.innerHTML = cart.map(function(item) {
    return '<div class="cart-item" data-key="' + item.key + '">' +
      '<div class="cart-item-img-wrap"><img src="' + item.image + '" alt="' + item.name + '" /></div>' +
      '<div class="cart-item-copy">' +
        '<h4>' + item.name + '</h4>' +
        '<p>' + item.size + ' &mdash; ' + item.conc + '</p>' +
        '<div class="cart-item-actions">' +
          '<span class="cart-item-link" onclick="removeFromCart(\'' + item.key + '\');renderCartPage();">Remove</span>' +
          '<span class="cart-item-link" onclick="goToProduct(\'' + item.id + '\')">View Details</span>' +
        '</div>' +
      '</div>' +
      '<div class="cart-item-controls">' +
        '<div class="qty-control">' +
          '<button class="qty-btn" data-action="dec" data-key="' + item.key + '" aria-label="Decrease">&minus;</button>' +
          '<span>' + item.qty + '</span>' +
          '<button class="qty-btn" data-action="inc" data-key="' + item.key + '" aria-label="Increase">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="cart-item-price">' + currency(item.price * item.qty) + '</div>' +
    '</div>';
  }).join('');

  /* Qty button handlers */
  cartList.querySelectorAll('.qty-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key    = btn.dataset.key;
      var action = btn.dataset.action;
      var item   = readCart().find(function(i) { return i.key === key; });
      if (!item) return;
      if (action === 'inc') {
        updateQty(key, item.qty + 1);
      } else {
        if (item.qty <= 1) removeFromCart(key);
        else updateQty(key, item.qty - 1);
      }
      renderCartPage();
    });
  });

  var subtotal = getCartTotal(cart);
  var shipping = subtotal > 0 ? 0 : 0; /* free */
  var total    = subtotal + shipping;

  summary.innerHTML =
    '<h3>Order Summary</h3>' +
    cart.map(function(i) {
      return '<div class="summary-row"><span>' + i.name + ' &times; ' + i.qty + '</span><strong>' + currency(i.price * i.qty) + '</strong></div>';
    }).join('') +
    '<div class="pdp-divider" style="margin:8px 0"></div>' +
    '<div class="summary-row"><span>Subtotal</span><strong>' + currency(subtotal) + '</strong></div>' +
    '<div class="summary-row"><span>Shipping</span><strong style="color:#2e7d4f;">FREE</strong></div>' +
    '<div class="summary-row total"><span>Total</span><strong>' + currency(total) + '</strong></div>' +
    '<p style="font-size:.62rem;color:var(--white-faint);margin:8px 0 20px;letter-spacing:.1em;">Inclusive of all taxes &amp; duties</p>' +
    '<a href="checkout.html" class="btn btn-gold checkout-link" style="width:100%;justify-content:center;"><span>Proceed to Checkout \u2192</span></a>';
}

/* ══════════════════════════════════════════════════════════
   CHECKOUT PAGE (Shipping Address)
   ══════════════════════════════════════════════════════════ */
function renderCheckoutPage() {
  var form    = document.getElementById('checkout-form');
  var summary = document.getElementById('checkout-summary');
  if (!form || !summary) return;

  var cart = readCart();
  if (!cart.length) {
    summary.innerHTML = '<p style="color:var(--white-faint);font-size:.85rem;">Your cart is empty.</p>';
    form.style.display = 'none';
    return;
  }

  var subtotal = getCartTotal(cart);
  var total    = subtotal;

  summary.innerHTML =
    '<h3>Your Order</h3>' +
    cart.map(function(i) {
      return '<div class="summary-row">' +
        '<span style="display:flex;gap:10px;align-items:center;">' +
          '<img src="' + i.image + '" style="width:40px;height:50px;object-fit:cover;border:1px solid var(--border);" alt="' + i.name + '" />' +
          '<span>' + i.name + ' &times; ' + i.qty + '</span>' +
        '</span>' +
        '<strong>' + currency(i.price * i.qty) + '</strong></div>';
    }).join('') +
    '<div class="pdp-divider" style="margin:8px 0;"></div>' +
    '<div class="summary-row"><span>Shipping</span><strong style="color:#2e7d4f;">FREE</strong></div>' +
    '<div class="summary-row total"><span>Total</span><strong>' + currency(total) + '</strong></div>';

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data     = new FormData(form);
    var shipping = Object.fromEntries(data.entries());
    localStorage.setItem(SHIPPING_KEY, JSON.stringify(shipping));
    window.location.href = 'payment.html';
  });
}

/* ══════════════════════════════════════════════════════════
   PAYMENT PAGE
   ══════════════════════════════════════════════════════════ */
function renderPaymentPage() {
  var summary     = document.getElementById('payment-summary');
  var paymentForm = document.getElementById('payment-form');
  if (!summary || !paymentForm) return;

  var cart         = readCart();
  var shippingInfo = {};
  try { shippingInfo = JSON.parse(localStorage.getItem(SHIPPING_KEY) || '{}'); } catch(e) {}

  if (!cart.length) {
    summary.innerHTML = '<p style="color:var(--white-faint);font-size:.85rem;">Your cart is empty. Please add a fragrance first.</p>';
    paymentForm.style.display = 'none';
    return;
  }

  var subtotal = getCartTotal(cart);
  var total    = subtotal;

  summary.innerHTML =
    '<h3>Order Total</h3>' +
    (shippingInfo.fullname ? '<div class="shipping-box"><h4>Shipping to</h4><p>' + shippingInfo.fullname + '<br>' + (shippingInfo.address || '') + '<br>' + (shippingInfo.city || '') + ', ' + (shippingInfo.state || '') + ' ' + (shippingInfo.zip || '') + '</p></div>' : '') +
    cart.map(function(i) {
      return '<div class="summary-row"><span>' + i.name + ' &times; ' + i.qty + '</span><strong>' + currency(i.price * i.qty) + '</strong></div>';
    }).join('') +
    '<div class="pdp-divider" style="margin:8px 0;"></div>' +
    '<div class="summary-row"><span>Shipping</span><strong style="color:#2e7d4f;">FREE</strong></div>' +
    '<div class="summary-row total"><span>Total</span><strong>' + currency(total) + '</strong></div>' +
    '<p style="font-size:.6rem;color:var(--white-faint);margin-top:12px;letter-spacing:.1em;">\uD83D\uDD12 Secured by 256-bit SSL encryption</p>';

  /* Payment method tab switching */
  var tabs   = document.querySelectorAll('.pay-tab-btn');
  var panels = document.querySelectorAll('.pay-tab-panel');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      panels.forEach(function(p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var panel = document.getElementById('pay-panel-' + tab.dataset.method);
      if (panel) panel.classList.add('active');
    });
  });

  /* Card number formatting */
  var cardInput = document.getElementById('card-number');
  if (cardInput) {
    cardInput.addEventListener('input', function() {
      var v = cardInput.value.replace(/\D/g, '').slice(0, 16);
      cardInput.value = v.replace(/(.{4})/g, '$1 ').trim();
    });
  }
  var expiryInput = document.getElementById('card-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', function() {
      var v = expiryInput.value.replace(/\D/g, '').slice(0, 4);
      if (v.length > 2) v = v.slice(0, 2) + ' / ' + v.slice(2);
      expiryInput.value = v;
    });
  }

  paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var method      = document.querySelector('.pay-tab-btn.active');
    var methodName  = method ? method.textContent.trim() : 'Card';
    var orderNumber = 'AP-' + Date.now().toString().slice(-8).toUpperCase();

    localStorage.setItem('amazonLatestOrder', JSON.stringify({
      orderNumber: orderNumber,
      method:      methodName,
      total:       total,
      shipping:    shippingInfo,
      items:       cart,
      date:        new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })
    }));

    localStorage.removeItem(CART_KEY);
    localStorage.removeItem(SHIPPING_KEY);

    var btn = paymentForm.querySelector('button[type="submit"]');
    if (btn) btn.innerHTML = '<span>\u2713 Processing...</span>';
    setTimeout(function() { window.location.href = 'order-success.html'; }, 900);
  });
}

/* ══════════════════════════════════════════════════════════
   ORDER SUCCESS PAGE
   ══════════════════════════════════════════════════════════ */
function renderOrderSuccess() {
  var shell = document.getElementById('order-success-shell');
  if (!shell) return;

  var order = {};
  try { order = JSON.parse(localStorage.getItem('amazonLatestOrder') || '{}'); } catch(e) {}

  /* Estimated delivery */
  var deliveryDays = 5;
  var d = new Date(); d.setDate(d.getDate() + deliveryDays);
  var deliveryDate = d.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });

  var itemsHTML = '';
  if (order.items && order.items.length) {
    itemsHTML = order.items.map(function(i) {
      return '<div class="success-order-row">' +
        '<span class="lbl" style="display:flex;align-items:center;gap:10px;">' +
          '<img src="' + i.image + '" style="width:36px;height:44px;object-fit:cover;border:1px solid var(--border);" alt="' + i.name + '" />' +
          i.name + ' &times; ' + i.qty +
        '</span>' +
        '<span class="val">' + currency(i.price * i.qty) + '</span>' +
      '</div>';
    }).join('');
  }

  shell.innerHTML =
    '<div class="success-icon">\u2713</div>' +
    '<span class="success-eyebrow">Order Confirmed</span>' +
    '<h1 class="success-title">Thank You,<br><em>' + (order.shipping && order.shipping.fullname ? order.shipping.fullname.split(' ')[0] : 'Dear Customer') + '!</em></h1>' +
    '<p class="success-sub">Your luxury fragrance order has been received and is being prepared with the utmost care by our Grasse atelier. You will receive a confirmation email shortly.</p>' +

    '<div class="success-order-box">' +
      '<div class="success-order-row">' +
        '<span class="lbl">Order Number</span>' +
        '<span class="val gold-val">' + (order.orderNumber || 'AP-' + Date.now().toString().slice(-8)) + '</span>' +
      '</div>' +
      '<div class="success-order-row">' +
        '<span class="lbl">Order Date</span>' +
        '<span class="val">' + (order.date || new Date().toLocaleDateString()) + '</span>' +
      '</div>' +
      '<div class="success-order-row">' +
        '<span class="lbl">Payment Method</span>' +
        '<span class="val">' + (order.method || 'Card') + '</span>' +
      '</div>' +
      (order.shipping && order.shipping.address ?
        '<div class="success-order-row">' +
          '<span class="lbl">Ship To</span>' +
          '<span class="val">' + order.shipping.city + ', ' + order.shipping.country + '</span>' +
        '</div>' : '') +
      itemsHTML +
      '<div class="success-order-row">' +
        '<span class="lbl">Order Total</span>' +
        '<span class="val gold-val">' + currency(order.total || 0) + '</span>' +
      '</div>' +
    '</div>' +

    '<div class="success-steps">' +
      '<div class="success-step"><div class="step-icon">\u2705</div><div class="step-lbl">Order Placed</div></div>' +
      '<div class="success-step"><div class="step-icon">\uD83C\uDFFA</div><div class="step-lbl">Being Crafted</div></div>' +
      '<div class="success-step"><div class="step-icon">\uD83D\uDCE6</div><div class="step-lbl">Dispatched</div></div>' +
      '<div class="success-step"><div class="step-icon">\uD83C\uDFE0</div><div class="step-lbl">Delivered</div></div>' +
    '</div>' +

    '<p style="font-size:.75rem;color:var(--white-faint);margin-bottom:32px;letter-spacing:.08em;">Expected delivery: <strong style="color:var(--black);">' + deliveryDate + '</strong></p>' +

    '<div class="success-actions">' +
      '<a href="index.html#collection" class="btn btn-gold"><span>Continue Shopping</span></a>' +
      '<a href="index.html" class="btn btn-outline"><span>Back to Home</span></a>' +
    '</div>';
}

/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
  loadCatalogCards();
  /* renderProductPage, renderCartPage etc. are called by individual pages
     that need them, so we only call them if the relevant shell exists AND
     the page has not already called them via its own inline init flag.      */
  if (!window._pageInitDone) {
    renderProductPage();
    renderCartPage();
    renderCheckoutPage();
    renderPaymentPage();
    renderOrderSuccess();
  }
});
