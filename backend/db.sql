DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS locations CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  country TEXT NOT NULL,
  image TEXT,
  description TEXT
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  city_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN (
  'attraction', 'restaurant', 'café', 'bar', 'museum',
  'park', 'hotel', 'shopping', 'beach', 'transport'
)) NOT NULL,
  address TEXT,
  description TEXT,
  image TEXT,
  link TEXT,
  FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
);

INSERT INTO cities (name, slug, country, image, description)
VALUES
-- Amsterdam
('Amsterdam',
'amsterdam',
'Netherlands',
'amsterdam-cityguide.webp',
'Amsterdam blends historic charm with modern energy. It offers winding canals, iconic gabled houses, vibrant neighborhoods, world-class museums, and a relaxed café culture perfect for exploring by foot or bike.'
),

-- Bangkok
('Bangkok',
'bangkok',
'Thailand',
'bangkok.webp',
'Bangkok is a vibrant city where ancient temples meet rooftop bars, bustling street markets, and serene riverside life. It''s chaotic, colorful, and endlessly fascinating — from golden Buddha statues to spicy street food.'
),

-- Copenhagen
('Copenhagen',
'copenhagen',
'Denmark',
'copenhagen-cityguide.webp',
'Copenhagen blends modern Scandinavian design with old-world charm. From cycle-friendly streets to cozy cafés and minimalist fashion, it''s a city that feels both relaxed and sophisticated. Whether you''re strolling through royal palaces or exploring the hippie vibes of Christiania, Copenhagen is effortlessly cool.'
),

-- Dubai
('Dubai',
'dubai',
'United Arab Emirates',
'dubai-cityguide.webp',
'Dubai is a dazzling metropolis known for its ultramodern architecture, luxury shopping, and vibrant nightlife scene. From the world''s tallest building, Burj Khalifa, to expansive desert safaris and artificial islands, Dubai offers a blend of futuristic innovation and rich cultural heritage.'
),

-- Lisbon
('Lisbon',
'lisbon',
'Portugal',
'lisbon.webp',
'Lisbon is a coastal city with a rich history, famous for its charming neighborhoods, colorful tile facades, and vibrant street life. Known as the “City of Seven Hills,” it offers stunning viewpoints, historic trams, and delicious seafood. Lisbon blends tradition with a lively modern culture and a growing creative scene.'
),

-- Melbourne
('Melbourne',
'melbourne',
'Australia',
'melbourne-cityguide.webp',
'Melbourne is Australia''s cultural capital, known for its vibrant arts scene, coffee culture, and diverse neighborhoods. The city boasts beautiful parks, laneways filled with street art, world-class sports events, and a thriving food scene. Melbourne offers a blend of European charm and modern urban living.'
),

-- New York
('New York',
'newyork',
'United States',
'newyork-cityguide.webp',
'New York City, also known as “The Big Apple,” is a global hub for finance, culture, and entertainment. Famous for its iconic skyline, Broadway theaters, diverse neighborhoods, and endless attractions, NYC offers something for everyone — from Central Park and world-class museums to bustling markets and vibrant nightlife.'
),

-- Paris
('Paris',
'paris',
'France',
'paris-cityguide.webp',
'Paris, often called “The City of Light,” is renowned for its rich history, art, fashion, and cuisine. The city is famous for iconic landmarks like the Eiffel Tower, Louvre Museum, and charming neighborhoods such as Montmartre. Paris offers a romantic atmosphere with elegant cafés, beautiful architecture, and vibrant culture.'
),

-- Tokyo
('Tokyo',
'tokyo',
'Japan',
'tokyo-cityguide.webp',
'Tokyo is a vibrant megacity where cutting-edge technology meets traditional Japanese culture. The city is famous for its neon-lit districts, world-class cuisine, historic temples, and trendy shopping areas. Tokyo offers a unique blend of old and new, from serene gardens to futuristic skyscrapers.'
);

-- INSERT INTO locations
INSERT INTO locations (city_id, name, type, address, description, image, link)
VALUES
-- Amsterdam
(1,
'Rijksmuseum',
'museum',
'Museumstraat 1, Amsterdam',
'One of the most famous art museums in the Netherlands, home to masterpieces from Rembrandt and Vermeer.',
'rijksmuseum.webp',
'https://www.rijksmuseum.nl/nl'
),

-- (1,
-- 'De Kas',
-- 'restaurant',
-- 'Kamerlingh Onneslaan 3, 1097 DE Amsterdam',
-- 'A unique farm-to-table restaurant located in a greenhouse, offering seasonal dishes made from ingredients grown on-site.',
-- 'dekas.webp',
-- 'https://restaurantdekas.com/'
-- ),

(1,
'Greenhouse Grove',
'restaurant',
'Groeneweg 12, 1012 ZZ Amsterdam',
'A cozy farm-to-table restaurant set in a glasshouse, serving seasonal meals made from locally grown ingredients.',
'greenhousegrove.webp',
'#'
),

-- (1,
-- 'Café de Klepel',
-- 'restaurant',
-- 'Prinsenstraat 22, 1015 DD Amsterdam',
-- 'A cozy French bistro with a killer wine list. Known for its intimate setting, seasonal dishes, and friendly staff — a hidden gem in the Jordaan neighborhood.',
-- 'cafedeklepel.webp',
-- 'https://www.cafedeklepel.nl/'
-- ),

(1,
'Bistro L''Étoile',
'restaurant',
'Sterstraat 14, 1015 ZZ Amsterdam',
'A warm and intimate French-inspired bistro tucked away in the heart of the Jordaan. Famous for its rotating seasonal menu and thoughtfully curated wine selection.',
'bistroletoile.webp',
'#'
),

-- (1,
-- 'The Hoxton, Amsterdam',
-- 'hotel',
-- 'Herengracht 255, 1016 BJ Amsterdam',
-- 'A lively and historic hotel on the Herengracht canal with 111 rooms featuring parquet floors, modern bathrooms and canal views. Located by the Nine Streets near top shops and restaurants.',
-- 'hoxton.webp',
-- 'https://thehoxton.com/amsterdam/'
-- ),

(1,
'Canalhouse & Co.',
'hotel',
'Herengracht 312, 1016 ZZ Amsterdam',
'A vibrant boutique hotel set in a row of restored canal houses. Offers 100+ stylish rooms with hardwood floors, sleek bathrooms, and scenic canal views — perfectly placed near the Nine Streets district.',
'canalhouseco.webp',
'#'
),

(1,
'Vondelpark',
'park',
'1071 AA Amsterdam',
'A spacious and lively green escape in the heart of Amsterdam, Vondelpark is perfect for cycling, picnics, and peaceful walks. With ponds, open-air performances, and charming cafés, it''s a favorite spot for both locals and visitors.',
'vondelpark.webp',
'https://www.amsterdam.nl/leefomgeving/parken-recreatiegebieden/vondelpark/'
),

(1,
'Casa Verde',
'bar',
'Eerste Van Swindenstraat 585, 1093 LC Amsterdam',
'A tropical-inspired bar filled with greenery and color, serving playful cocktails and light bites in a laid-back, jungle-like setting.',
'casaverde.webp',
'#'
),

-- (1,
-- 'Coffee & Coconut',
-- 'café',
-- 'Ceintuurbaan 282, 1072 GK Amsterdam',
-- 'Set in a former 1920s cinema, Coffee & Coconuts offers a tropical vibe with spacious seating, fresh coconuts, specialty coffee, and healthy brunch dishes.',
-- 'coffeeandcoconut.webp',
-- 'https://ceintuurtheater.nl/'
-- ),

(1,
'Java & Jungle',
'café',
'Tropenlaan 5, 1072 ZZ Amsterdam',
'Housed in a renovated 1920s building, Java & Jungle blends tropical flair with cozy open spaces. Known for its fresh smoothies, craft coffee, and vibrant brunch plates in a lush, relaxed setting.',
'javaandjungle.webp',
'#'
),


-- Bangkok
(2,
'The Grand Palace',
'attraction',
'Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200',
'A historic complex and former royal residence, the Grand Palace is one of Bangkok’s most iconic landmarks with intricate architecture and rich cultural history.',
'grandpalace.webp',
'https://www.royalgrandpalace.th/th/home'
),

-- (2,
-- 'Bo.lan',
-- 'restaurant',
-- '24 Sukhumvit 53 Alley, Khlong Tan Nuea, Watthana, Bangkok 10110',
-- 'A fine dining restaurant offering traditional Thai cuisine with a sustainable approach, run by a chef duo passionate about preserving authentic flavors.',
-- 'bolan.webp',
-- 'https://www.bolan.co.th/'
-- ),

(2,
'Sai & Spice',
'restaurant',
'12 Sukhumvit 55, Khlong Tan Nuea, Watthana, Bangkok 10110',
'A laid-back spot serving real Thai food made with local ingredients. Run by a small team that cares about flavor, tradition, and keeping things green.',
'saiandspice.webp',
'#'
),



-- (2,
-- 'Saneh Jaan',
-- 'restaurant',
-- '130-132 Witthayu Rd, Lumphini, Pathum Wan, Bangkok 10330',
-- 'A Michelin-starred restaurant serving authentic and refined Thai cuisine, preserving traditional flavors with a modern touch in an elegant setting.',
-- 'sanehjaan.webp',
-- 'https://sanehjaan.com/'
-- ),

(2,
'Baan Charoen',
'restaurant',
'128 Witthayu Rd, Lumphini, Pathum Wan, Bangkok 10330',
'A cozy Thai restaurant that sticks to old-school recipes and bold flavors. A great place if you’re into classic dishes made right, with a relaxed vibe and friendly staff.',
'baancharoen.webp',
'#'
),


-- (2,
-- 'Mandarin Oriental Bangkok',
-- 'hotel',
-- '48 Oriental Avenue, Khwaeng Bang Rak, Bang Rak, Bangkok 10500',
-- 'A legendary riverside hotel known for timeless luxury, impeccable service, and a rich literary heritage, offering elegant rooms and serene views of the Chao Phraya River.',
-- 'mandarinoriental.webp',
-- 'https://www.mandarinoriental.com/en/'
-- ),

(2,
'Lotus River Retreat',
'hotel',
'17 Mekhala Road, Bang Rak, Bangkok 10500',
'An iconic riverside escape blending classic Thai elegance with modern comfort. Guests enjoy tranquil views of the Chao Phraya River, refined service, and a serene atmosphere steeped in cultural charm.',
'lotusriverretreat.webp',
'#'
),


(2,
'Lumphini Park',
'park',
'Lumphini, Pathum Wan, Bangkok 10330',
'A peaceful urban park in central Bangkok offering lakes, shaded paths, and open spaces for jogging, tai chi, and picnics.',
'lumphinipark.webp',
'https://www.tourismthailand.org/Attraction/lumpini-park'
),

(2,
'Sky Bar at Lebua',
'bar',
'64th Floor, State Tower Bangkok, 1055 Si Lom Rd, Si Lom, Bang Rak, Bangkok 10500',
'A world-famous rooftop bar with panoramic views of Bangkok, known for its upscale atmosphere and signature cocktails.',
'skybar.webp',
'https://lebua.com/restaurants/sky-bar/'
),

-- (2,
-- 'Rocket Coffeebar',
-- 'café',
-- '149 Sathon Soi 12 Alley, Si Lom, Bang Rak, Bangkok 10500',
-- 'A trendy café offering expertly brewed coffee, Scandinavian-inspired breakfasts, and minimalist design in a relaxed setting.',
-- 'rocketcoffeebar.webp',
-- 'https://rocketcoffeebar.com/'
-- ),

(2,
'Nordic Bloom',
'café',
'147 Sathon Soi 12, Si Lom, Bang Rak, Bangkok 10500',
'A trendy café offering expertly brewed coffee, Scandinavian-inspired breakfasts, and minimalist design in a relaxed setting.',
'nordicbloom.webp',
'#'
),

-- Copenhagen
(3,
'Nyhavn',
'attraction',
'Nyhavn 17, 1051 Copenhagen',
'A colorful 17th-century waterfront, canal, and entertainment district lined with brightly painted townhouses, historic wooden ships, and lively cafés.',
'nyhavn.webp',
'https://www.visitcopenhagen.com/copenhagen/planning/nyhavn-gdk474735'
),

-- (3,
-- 'Restaurant Barr',
-- 'restaurant',
-- 'Strandgade 93, 1401 Copenhagen',
-- 'A cozy eatery in the former Noma space offering a modern take on traditional Northern Sea cuisine with great beer pairings.',
-- 'restaurantbarr.webp',
-- 'https://restaurantbarr.com/'
-- ),

(3,
'Nordstrand',
'restaurant',
'Strandgade 95, 1401 Copenhagen',
'A warm and inviting restaurant serving contemporary Nordic seafood dishes, known for its fresh flavors and curated beer selection.',
'nordstrand.webp',
'#'
),

-- (3,
-- 'Kødbyens Fiskebar',
-- 'restaurant',
-- 'Flæsketorvet 100, 1711 København V',
-- 'A vibrant seafood restaurant located in Copenhagen’s Meatpacking District, known for its fresh fish, oysters, and natural wines in an industrial-chic atmosphere.',
-- 'fiskebar.webp',
-- 'https://fiskebaren.dk/en/'
-- ),

(3,
'Nordhav Fisk',
'restaurant',
'Flæsketorvet 102, 1711 Copenhagen',
'A contemporary seafood restaurant in Copenhagen’s Meatpacking District, celebrated for its fresh catch, curated oyster selection, and a natural wine list in a stylish industrial setting.',
'nordhavfisk.webp',
'#'
),

-- (3,
-- 'Hotel Sanders',
-- 'hotel',
-- 'Tordenskjoldsgade 15, 1055 Copenhagen',
-- 'A stylish boutique hotel with a warm, theatrical vibe, elegant interiors, and a rooftop conservatory in the heart of Copenhagen.',
-- 'hotelsanders.webp',
-- 'https://www.hotelsanders.com/'
-- ),

(3,
'Hôtel Amélie',
'hotel',
'Tordenskjoldsgade 17, 1055 Copenhagen',
'A charming boutique hotel blending classic elegance with modern comfort, featuring cozy lounges and a rooftop garden in central Copenhagen.',
'hotelamelie.webp',
'#'
),

-- (3,
-- 'King''s Garden (Kongens Have)',
-- 'park',
-- 'Øster Voldgade 4A, 1350 København',
-- 'Copenhagen''s oldest and most visited park, surrounding Rosenborg Castle and ideal for picnics, strolls, and people-watching.',
-- 'kongenshave.webp',
-- 'https://www.visitcopenhagen.com/copenhagen/planning/kings-garden-playground-gdk566087'
-- ),

(3,
'Valbyparken',
'park',
'Hammelstrupvej 100, 2450 Copenhagen',
'Valby Park is Copenhagen''s biggest green space, perfect for relaxing strolls and picnics. It features beautiful themed gardens, lakes, and a huge nature playground. Don''t miss Rosenhaven, one of Europe''s largest rose gardens with thousands of blooming roses.',
'valbyparken.webp',
'https://www.visitcopenhagen.com/copenhagen/planning/valbyparken-gdk965110'
),

-- (3,
-- 'Ruby',
-- 'bar',
-- 'Nybrogade 10, 1203 Copenhagen',
-- 'A hidden cocktail bar in a townhouse with a speakeasy vibe, known for its expertly crafted drinks and elegant atmosphere.',
-- 'rubybar.webp',
-- 'https://rby.dk/'
-- ),

(3,
'The Velvet Room',
'bar',
'Nybrogade 12, 1203 Copenhagen',
'A cozy cocktail bar tucked away in a charming townhouse, offering creative drinks and a stylish, intimate vibe.',
'thevelvetroom.webp',
'#'
),

-- (3,
-- 'Leckerbaer',
-- 'café',
-- 'Ryesgade 118, 2100 København Ø',
-- 'A modern Nordic patisserie offering delicate, beautifully crafted cakes and signature småkager in a cozy, minimalist setting.',
-- 'leckerbaer.webp',
-- 'https://leckerbaer.dk/'
-- ),

(3,
'Søster & Bror',
'café',
'Ryesgade 120, 2100 København Ø',
'A bright and welcoming café specializing in Nordic pastries and fresh-brewed coffee, known for its warm atmosphere and handcrafted treats.',
'sosterbror.webp',
'#'
),

-- Dubai
(4,
'Burj Khalifa',
'attraction',
'1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai',
'The tallest building in the world, offering breathtaking views from its observation decks and a stunning architectural experience.',
'burjkhalifa.webp',
'https://www.burjkhalifa.ae/'
),

(4,
'Museum of the Future',
'museum',
'Sheikh Zayed Rd, Trade Centre 2, Dubai',
'Curious about what the world might look like in 50 years? A visit to the Museum of the Future in Dubai takes you on a journey through innovation, sustainability, and imagination. It''sperfect for dreamers, tech-lovers, and anyone craving a glimpse into what''s next.',
'museumofthefuture.webp',
'https://museumofthefuture.ae/en'
),

-- (4,
-- 'Al Fanar Restaurant & Cafe',
-- 'restaurant',
-- 'Souq Al Zafarana, next to Al Khabisi Wedding Hall, Al Jimi, Dubai',
-- 'Authentic Emirati cuisine served in a nostalgic setting that recreates life in 1960s Dubai.',
-- 'alfanar.webp',
-- 'https://www.alfanarrestaurant.com/'
-- ),

(4,
'Al Jaleel Eatery',
'restaurant',
'Souq Al Zafarana, Al Jimi, Dubai',
'A traditional Emirati restaurant offering classic dishes in a cozy, vintage-inspired atmosphere that captures the spirit of old Dubai.',
'aljaleeleatery.webp',
'#'
),

-- (4,
-- 'Mimi Kakushi',
-- 'restaurant',
-- '663R+37 Dubai',
-- 'A modern Japanese izakaya offering a vibrant atmosphere, creative cocktails, and a menu filled with fresh sushi, sashimi, and grilled delights.',
-- 'mimikakushi.webp',
-- 'https://mimikakushi.ae/'
-- ),

(4,
'Kumo Izakaya',
'restaurant',
'663R+40 Dubai',
'A lively Japanese izakaya with a modern twist, serving fresh sushi, sashimi, and inventive cocktails in a stylish setting.',
'kumoizakaya.webp',
'#'
),

-- (4,
-- 'XVA Hotel Dubai',
-- 'hotel',
-- 'Al Fahidi Street, Al Fahidi Neighborhood (formerly Bastakiya), near Dubai Museum, Bur Dubai, Dubai',
-- 'A boutique art hotel nestled in Dubai''s historical district, offering uniquely decorated rooms, an art gallery, and a peaceful courtyard café.',
-- 'xvahotel.webp',
-- 'https://xvahotel.com/'
-- ),

(4,
'Al Qamar Hotel',
'hotel',
'Al Fahidi Street, Al Fahidi Neighborhood, Dubai',
'A charming hotel in Dubai''s historic district, featuring artist-inspired rooms, a cozy gallery space, and a serene courtyard café.',
'alqamarhotel.webp',
'#'
),

-- (4,
-- 'Nola Bijou Bistro & Bar',
-- 'bar',
-- 'City Walk, C2, Al Wasl, Dubai',
-- 'Nola is a beloved local bar in Dubai, famous for jazz nights and great gin cocktails. Their new City Walk spot keeps the relaxed vibe with a lively happy hour — perfect for after-work drinks.',
-- 'nolabarandbistro.webp',
-- 'https://www.noladubai.com/citywalk'
-- ),

(4,
'The Blue Note',
'bar',
'City Walk, C3, Al Wasl, Dubai',
'A cozy jazz bar known for smooth tunes and expertly crafted gin cocktails, offering a laid-back atmosphere and lively happy hours perfect for unwinding.',
'bluenote.webp',
'#'
),

-- (4,
-- 'Milk Bar',
-- 'café',
-- 'Wasl 51 Building, Al Wasl Road, Jumeirah, Jumeirah 1, Dubai',
-- 'Milk is one of my favourites. This Swedish-inspired café serves great coffee, tasty breakfasts, and delicious pastries. The bright, minimalist space perfectly captures Scandinavian cool.',
-- 'milkbar.webp',
-- 'https://www.milkbar.ae/'
-- );

(4,
'Nordic Nest Café',
'café',
'Wasl 53 Building, Al Wasl Road, Jumeirah, Dubai',
'A bright Scandinavian-inspired café offering expertly brewed coffee, hearty breakfasts, and freshly baked pastries in a minimalist, cozy setting.',
'nordicnest.webp',
'#'
),

-- Lisbon
(5,
'Belém Tower',
'attraction',
'Av. Brasília, 1400-038 Lisbon',
'A UNESCO-listed fortress by the Tagus River, known for its beautiful Manueline architecture and rich maritime history.',
'belemtower.webp',
'https://www.museusemonumentos.pt/pt/museus-e-monumentos/torre-de-belem'
),

(5,
'Edward VII Park',
'park',
'Praça do Marquês de Pombal - 1070-051 Lisbon',
'Lisbon''s central urban park, offering spacious lawns, leafy paths, a dramatic viewpoint, and a lovely greenhouse.',
'edwardviipark.webp',
'https://www.visitportugal.com/en/content/parque-eduardo-vii'
),

(5,
'Tasca do Sol',
'restaurant',
'Rua das Oliveiras 42, 1100-112 Lisbon',
'A small, welcoming spot offering modern takes on Southern Portuguese classics, with a focus on seasonal ingredients and warm hospitality.',
'tascadosol.webp',
'#'
),

(5,
'Café Aurora',
'café',
'Rua Nova da Esperança 15, 1200-203 Lisbon',
'A vintage-style café with strong coffee, homemade pastries, and a calm, nostalgic atmosphere.',
'cafeaurora.webp',
'#'
),

(5,
'Alto Noite',
'bar',
'Rua do Miradouro 8, 1200-045 Lisbon',
'A popular rooftop bar perched on a Lisbon hill, known for sunset views, laid-back vibes, and DJ sets on weekends.',
'altonoite.webp',
'#'
),

(5,
'Hotel Miradouro Azul',
'hotel',
'Calçada da Esperança 17, 1200-456 Lisbon',
'A small city hotel with tiled balconies, river views, and a quiet courtyard.',
'miradouroazul.webp',
'#'
),

-- Melbourne
(6,
'Eureka Skydeck',
'attraction',
'7 Riverside Quay, Southbank VIC 3006, Melbourne',
'Observation deck on the 88th floor offering panoramic city views over Melbourne and the Yarra River.',
'eurekaskydeck.webp',
'#'
),

(6,
'Fitzroy Gardens',
'park',
'Wellington Parade, East Melbourne VIC 3002',
'Historic 26-hectare garden with Cook''s Cottage, conservatory, tree-lined pathways, and sculptures.',
'fitzroygardens.webp',
'https://www.melbourne.vic.gov.au/fitzroy-gardens'
),

(6,
'Ember & Rye',
'restaurant',
'28 Darling Street, Melbourne',
'A relaxed Melbourne eatery serving modern Australian dishes with wood-fired flavours and a focus on seasonal ingredients.',
'emberandrye.webp',
'#'
),

(6,
'Fig & Steam',
'café',
'14 Bishop Lane, Melbourne',
'A tucked-away café known for rich espresso, fluffy ricotta pancakes, and vintage interiors with plenty of greenery.',
'figandsteam.webp',
'#'
),

(6,
'Laneway Social',
'bar',
'17 Wren Lane, Melbourne',
'A casual neighbourhood bar hidden off a cobbled alley, pouring local craft beer and house cocktails to a lo-fi soundtrack.',
'lanewaysocial.webp',
'#'
),

(6,
'The Arlo Fitzroy',
'hotel',
'92 Nicholson Street, Fitzroy, Melbourne',
'A laid-back city hotel with leafy courtyard, brick walls, and sunny rooms just minutes from galleries, cafés and tram stops.',
'arlofitzroy.webp',
'#'
);
