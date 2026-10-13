export const photos = {
  hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90',
  heroSecondary: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90',
  interior: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85',
  terrace: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
  chef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85',
  wineCellar: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
  gardenDining: 'https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1200&q=85',
  atmosphere: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85',
}

export const menuDishes = [
  // HANDMADE PASTA & RISOTTO (Photo matches pasta 100%)
  {
    id: 'pasta-1',
    name: 'Handmade Truffle Tagliatelle Pasta',
    category: 'Handmade Pasta',
    dietary: 'Vegetarian',
    dietaryTag: 'Chef Signature',
    price: 680,
    priceFormatted: 'ETB 680',
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=85',
    tag: 'Signature Dish',
    description: 'Silky fresh egg ribbon pasta hand-rolled daily, tossed in aromatic black truffle cream, aged 24-month Parmigiano Reggiano, wild mountain mushrooms, and cold-pressed extra virgin olive oil.',
    ingredients: ['Fresh Egg Tagliatelle', 'Umbrian Black Truffle', 'Aged Parmigiano Reggiano', 'Forest Chanterelles', 'Mountain Herb Butter'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    winePairing: 'Barolo DOCG or Chianti Classico Riserva',
    calories: '620 kcal',
    prepTime: '18 mins'
  },
  {
    id: 'pasta-2',
    name: 'Artisan Rigatoni alla Vodka Pasta',
    category: 'Handmade Pasta',
    dietary: 'Vegetarian',
    dietaryTag: 'Guest Favorite',
    price: 590,
    priceFormatted: 'ETB 590',
    rating: 4.8,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85',
    tag: 'Popular',
    description: 'Bronze-die extruded rigatoni pasta coated in a velvety slow-simmered San Marzano tomato cream sauce, a splash of grain spirit reduction, fragrant garlic, and whipped Sicilian ricotta.',
    ingredients: ['Artisan Rigatoni', 'San Marzano D.O.P. Tomatoes', 'Heavy Cream', 'Calabrian Chili', 'Fresh Basil', 'Whipped Ricotta'],
    allergens: ['Dairy', 'Gluten'],
    winePairing: 'Pinot Grigio or Crisp Dry Rosé',
    calories: '580 kcal',
    prepTime: '16 mins'
  },
  {
    id: 'pasta-3',
    name: 'Seafood Linguine Mare e Monti Pasta',
    category: 'Handmade Pasta',
    dietary: 'Pescatarian',
    dietaryTag: 'Seasonal Special',
    price: 780,
    priceFormatted: 'ETB 780',
    rating: 4.9,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=85',
    tag: 'Chef Special',
    description: 'Tender linguine pasta prepared with pan-seared jumbo tiger prawns, local calamari, cherry datterini tomatoes, white wine garlic emulsion, and Italian flat-leaf parsley.',
    ingredients: ['Handmade Linguine', 'Tiger Prawns', 'Calamari', 'White Wine Reduction', 'Cherry Tomatoes', 'Fresh Garlic'],
    allergens: ['Crustaceans', 'Molluscs', 'Gluten'],
    winePairing: 'Gavi di Gavi or Chablis Premier Cru',
    calories: '540 kcal',
    prepTime: '20 mins'
  },
  {
    id: 'pasta-4',
    name: 'Classic Spaghetti al Pomodoro & Basil Pasta',
    category: 'Handmade Pasta',
    dietary: 'Vegan',
    dietaryTag: 'Plant-Forward',
    price: 520,
    priceFormatted: 'ETB 520',
    rating: 4.7,
    reviewsCount: 85,
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1000&q=85',
    tag: 'Classic',
    description: 'Traditional slow-cooked vine-ripened plum tomato sugo with crushed garlic, cold-pressed olive oil, fresh Genovese basil leaves, and golden sourdough pangrattato crumbles.',
    ingredients: ['Spaghetti di Gragnano', 'Vine Plum Tomatoes', 'Genovese Sweet Basil', 'Extra Virgin Olive Oil', 'Crisp Breadcrumbs'],
    allergens: ['Gluten'],
    winePairing: 'Chianti Superiore or Sangiovese',
    calories: '490 kcal',
    prepTime: '14 mins'
  },

  // STEAKS, MAINS & GRILL
  {
    id: 'main-1',
    name: 'Prime Dry-Aged Ribeye Steak',
    category: 'Mains & Grill',
    dietary: 'Gluten-Friendly',
    dietaryTag: 'Top Rated',
    price: 1150,
    priceFormatted: 'ETB 1,150',
    rating: 5.0,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    tag: 'Best Seller',
    description: '350g Prime Highland beef ribeye steak, aged for 35 days and char-grilled over aromatic olive wood coals. Accompanied by roasted rosemary baby potatoes, confit garlic, and Madagascar peppercorn jus.',
    ingredients: ['35-Day Dry Aged Ribeye', 'Fresh Rosemary', 'Confit Garlic', 'Mountain Herb Butter', 'Green Peppercorn Jus'],
    allergens: ['Dairy'],
    winePairing: 'Cabernet Sauvignon or Brunello di Montalcino',
    calories: '780 kcal',
    prepTime: '22 mins'
  },
  {
    id: 'main-2',
    name: 'Pan-Seared Atlantic Salmon Fillet',
    category: 'Mains & Grill',
    dietary: 'Pescatarian',
    dietaryTag: 'Healthy Choice',
    price: 890,
    priceFormatted: 'ETB 890',
    rating: 4.9,
    reviewsCount: 134,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85',
    tag: 'Signature',
    description: 'Crisp skin Atlantic salmon fillet gently pan-roasted and served over citrus-herb quinoa pilaf, char-grilled green asparagus, and a velvety Meyer lemon caper beurre blanc.',
    ingredients: ['Fresh Salmon Fillet', 'Citrus Quinoa', 'Grilled Asparagus', 'Lemon Butter Emulsion', 'Wild Baby Capers'],
    allergens: ['Fish', 'Dairy'],
    winePairing: 'Crisp Sancerre or Oaked Chardonnay',
    calories: '610 kcal',
    prepTime: '18 mins'
  },
  {
    id: 'main-3',
    name: 'Gourmet Wagyu Beef Brioche Burger',
    category: 'Mains & Grill',
    dietary: 'Non-Veg',
    dietaryTag: 'House Special',
    price: 640,
    priceFormatted: 'ETB 640',
    rating: 4.8,
    reviewsCount: 178,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    tag: 'Guest Favorite',
    description: '200g hand-formed Wagyu beef patty on a lightly toasted brioche bun, aged sharp cheddar, slow-caramelized balsamic onions, heirloom tomato, crisp bibb lettuce, and house truffle aioli.',
    ingredients: ['Wagyu Beef', 'Artisan Brioche', 'Aged Cheddar', 'Caramelized Onions', 'Truffle Mayo', 'Hand-cut Fries'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    winePairing: 'Syrah or Craft Amber Ale',
    calories: '820 kcal',
    prepTime: '15 mins'
  },

  // WOOD-FIRED PIZZA & FLATBREADS
  {
    id: 'pizza-1',
    name: 'Artisan Wood-Fired Truffle Margherita Pizza',
    category: 'Wood-Fired Pizza',
    dietary: 'Vegetarian',
    dietaryTag: 'Guest Favorite',
    price: 620,
    priceFormatted: 'ETB 620',
    rating: 4.9,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85',
    tag: 'Neapolitan Style',
    description: 'Slow-fermented 72-hour sourdough crust blistered at 450°C in our refractory stone oven. Fior di latte mozzarella, crushed San Marzano tomatoes, fresh sweet basil, and white truffle oil infusion.',
    ingredients: ['72-hr Fermented Dough', 'San Marzano D.O.P.', 'Fior di Latte Mozzarella', 'Fresh Basil', 'White Truffle Essence'],
    allergens: ['Gluten', 'Dairy'],
    winePairing: 'Prosecco Superiore DOCG or Chianti',
    calories: '690 kcal',
    prepTime: '12 mins'
  },

  // STARTERS & SALADS
  {
    id: 'starter-1',
    name: 'Heirloom Baby Greens & Citrus Garden Salad',
    category: 'Starters & Salads',
    dietary: 'Vegan',
    dietaryTag: 'Farm-to-Table',
    price: 450,
    priceFormatted: 'ETB 450',
    rating: 4.8,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85',
    tag: 'Fresh Harvest',
    description: 'Crisp organic greens hand-harvested from Bishoftu highland growers, blood orange wheels, pomegranate arils, toasted pumpkin seeds, avocado slices, and golden citrus blossom vinaigrette.',
    ingredients: ['Highland Organic Greens', 'Blood Orange', 'Pomegranate', 'Hass Avocado', 'Pumpkin Seeds', 'Citrus Vinaigrette'],
    allergens: ['Seeds'],
    winePairing: 'Sauvignon Blanc or New Zealand Pinot Gris',
    calories: '320 kcal',
    prepTime: '10 mins'
  },
  {
    id: 'starter-2',
    name: 'Tuscan Heirloom Tomato & Basil Bruschetta',
    category: 'Starters & Salads',
    dietary: 'Vegetarian',
    dietaryTag: 'Popular Starter',
    price: 390,
    priceFormatted: 'ETB 390',
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1000&q=85',
    tag: 'Antipasti',
    description: 'Crusty grilled sourdough bread rubbed with charred roasted garlic cloves, ripe red and yellow cherry tomatoes, fragrant micro-basil, and a 12-year aged Modena balsamic reduction glaze.',
    ingredients: ['Grilled Country Sourdough', 'Vine Tomatoes', 'Roasted Garlic', 'Genovese Basil', 'Aged Balsamic'],
    allergens: ['Gluten'],
    winePairing: 'Vermentino or Pinot Grigio',
    calories: '280 kcal',
    prepTime: '10 mins'
  },
  {
    id: 'starter-3',
    name: 'Velvety Roasted Pumpkin & Herb Bisque Soup',
    category: 'Starters & Salads',
    dietary: 'Vegetarian',
    dietaryTag: 'Chef Special',
    price: 420,
    priceFormatted: 'ETB 420',
    rating: 4.8,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=85',
    tag: 'Comfort Warmth',
    description: 'Smooth, roasted butternut squash and nutmeg spiced pumpkin bisque gently blended with coconut cream, toasted pepitas, and a delicate drizzle of crispy sage brown butter.',
    ingredients: ['Roasted Butternut Pumpkin', 'Nutmeg & Sage', 'Organic Coconut Cream', 'Roasted Pepitas', 'Herb Infusion'],
    allergens: ['Dairy (Vegan upon request)'],
    winePairing: 'Oaked Chardonnay or Viognier',
    calories: '310 kcal',
    prepTime: '12 mins'
  },

  // ARTISAN DESSERTS
  {
    id: 'dessert-1',
    name: 'Decadent Dark Chocolate Ganache Cake',
    category: 'Artisan Desserts',
    dietary: 'Vegetarian',
    dietaryTag: 'Pastry Highlight',
    price: 440,
    priceFormatted: 'ETB 440',
    rating: 5.0,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    tag: 'Indulgent',
    description: 'Rich 70% single-estate dark chocolate layer sponge cake with silky whipped chocolate ganache, toasted hazelnut crunch, edible 24k gold leaf, and a scoop of house Tahitian vanilla bean gelato.',
    ingredients: ['70% Valrhona Dark Chocolate', 'Hazelnut Praline', 'Tahitian Vanilla', 'Whipped Cream', 'Edible Gold'],
    allergens: ['Dairy', 'Gluten', 'Eggs', 'Tree Nuts'],
    winePairing: 'Tawny Port or Pedro Ximénez Sherry',
    calories: '510 kcal',
    prepTime: '10 mins'
  },
  {
    id: 'dessert-2',
    name: 'Vanilla Bean Basque Burnt Cheesecake',
    category: 'Artisan Desserts',
    dietary: 'Vegetarian',
    dietaryTag: 'Guest Obsession',
    price: 420,
    priceFormatted: 'ETB 420',
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85',
    tag: 'Signature Dessert',
    description: 'Traditional San Sebastián style cheesecake with a richly caramelized scorched crust and an impossibly velvety, molten vanilla core. Served with tart wild cherry compote.',
    ingredients: ['Spanish Cream Cheese', 'Madagascar Vanilla Pods', 'Heavy Cream', 'Wild Cherries', 'Farm Fresh Eggs'],
    allergens: ['Dairy', 'Eggs'],
    winePairing: 'Moscato d’Asti or Late Harvest Riesling',
    calories: '480 kcal',
    prepTime: '8 mins'
  },
  {
    id: 'dessert-3',
    name: 'Wild Berry & Mascarpone Tart',
    category: 'Artisan Desserts',
    dietary: 'Vegetarian',
    dietaryTag: 'Fresh Seasonal',
    price: 390,
    priceFormatted: 'ETB 390',
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=85',
    tag: 'Pastry Selection',
    description: 'Delicate buttery almond sablé crust filled with light whipped mascarpone cream, crowned with fresh Ethiopian highland blackberries, raspberries, and wild mint blossom.',
    ingredients: ['Almond Sablé Pastry', 'Italian Mascarpone', 'Highland Berries', 'Orange Blossom Honey', 'Mint'],
    allergens: ['Dairy', 'Gluten', 'Tree Nuts', 'Eggs'],
    winePairing: 'Brut Rosé Champagne or Demi-Sec',
    calories: '390 kcal',
    prepTime: '8 mins'
  },

  // ARTISAN COCKTAILS & CELLAR
  {
    id: 'drink-1',
    name: 'Smoked Oak Bourbon Old Fashioned Cocktail',
    category: 'Cocktails & Cellar',
    dietary: 'Artisan Beverage',
    dietaryTag: 'Craft Mixology',
    price: 490,
    priceFormatted: 'ETB 490',
    rating: 4.9,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85',
    tag: 'House Classic',
    description: 'Small-batch Kentucky bourbon stirred with organic demerara syrup, aromatic Angostura bitters, hand-carved crystal ice sphere, and served smoked table-side under acacia wood vapors.',
    ingredients: ['Aged Bourbon Whiskey', 'Demerara Nectar', 'Angostura Bitters', 'Orange Peel Oils', 'Charred Oak Smoke'],
    allergens: ['None'],
    winePairing: 'Pairs with Ribeye Steak or Dark Chocolate',
    calories: '180 kcal',
    prepTime: '6 mins'
  },
  {
    id: 'drink-2',
    name: 'Botanist Mint & Cucumber Citrus Spritz Cocktail',
    category: 'Cocktails & Cellar',
    dietary: 'Artisan Beverage',
    dietaryTag: 'Refreshing Aperitif',
    price: 420,
    priceFormatted: 'ETB 420',
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85',
    tag: 'Summer Sip',
    description: 'Handcrafted floral botanical dry gin infused with crisp muddled garden cucumber, fresh Moroccan mint, elderflower liqueur, fresh lime juice, and effervescent sparkling tonic.',
    ingredients: ['Artisanal Dry Gin', 'Garden Mint', 'Cucumber Ribbons', 'Elderflower Cordial', 'Sparkling Club Soda'],
    allergens: ['None'],
    winePairing: 'Pairs with Salads, Salmon & Starters',
    calories: '145 kcal',
    prepTime: '5 mins'
  },
  {
    id: 'drink-3',
    name: 'Reserve Lakeview Cellar Red Wine (Glass)',
    category: 'Cocktails & Cellar',
    dietary: 'Cellar Selection',
    dietaryTag: 'Sommelier Choice',
    price: 850,
    priceFormatted: 'ETB 850',
    rating: 4.9,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=85',
    tag: 'Vintage 2019',
    description: 'Prestigious private cellar blend of Cabernet Sauvignon and Syrah. Expressive notes of wild blackberry, dark cassis, cedarwood, vanilla bean, and exceptionally polished, lingering velvet tannins.',
    ingredients: ['Cabernet Sauvignon (60%)', 'Syrah (40%)', '18 Months French Oak Aging'],
    allergens: ['Contains Sulfites'],
    winePairing: 'Prime Ribeye Steak or Truffle Tagliatelle',
    calories: '125 kcal',
    prepTime: 'Instant Pour'
  },
  {
    id: 'drink-4',
    name: 'Single-Origin Yirgacheffe Pour Over Coffee',
    category: 'Cocktails & Cellar',
    dietary: 'Heritage Roast',
    dietaryTag: 'Ethiopian Origin',
    price: 210,
    priceFormatted: 'ETB 210',
    rating: 5.0,
    reviewsCount: 260,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
    tag: 'Cultural Heritage',
    description: 'Specialty Grade 1 washed Arabica beans from the high mist altitude of Yirgacheffe. Hand-poured table-side through ceramic dripper. Exquisite jasmine aroma, bergamot citrus, and honey nectar sweetness.',
    ingredients: ['100% Ethiopian Heirloom Arabica', 'Highland Spring Water'],
    allergens: ['None'],
    winePairing: 'Served with Traditional Frankincense Smoke & Sweet Pastry',
    calories: '5 kcal',
    prepTime: '6 mins'
  }
]

export const menuCategories = [
  'All Dishes',
  'Handmade Pasta',
  'Mains & Grill',
  'Wood-Fired Pizza',
  'Starters & Salads',
  'Artisan Desserts',
  'Cocktails & Cellar'
]

export const dietaryFilters = [
  'All',
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-Friendly',
  'Chef Signature'
]

export const restaurantReviews = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Gastronomy Critic, Condé Nast Traveler',
    rating: 5,
    date: 'February 2026',
    comment: 'Ember & Earth is nothing short of a revelation in East African fine dining. The Handmade Truffle Tagliatelle rivals Northern Italy’s best trattorias, while the lake breeze of Bishoftu elevates every second at the table.',
    highlight: 'A triumph of culinary refinement and genuine hospitality.'
  },
  {
    id: 2,
    name: 'Selamawit Tadesse',
    role: 'Private Dining Guest (Verified)',
    rating: 5,
    date: 'January 2026',
    comment: 'We hosted our 10th anniversary dinner in the Heritage Wine Cellar. The 35-day dry-aged ribeye paired with their sommelier’s reserve wine was the most memorable meal our family has ever had in Ethiopia.',
    highlight: 'Unmatched intimacy, impeccable service, and Michelin-tier flavors.'
  },
  {
    id: 3,
    name: 'Jean-Luc Moreau',
    role: 'Executive Chef & International Consultant',
    rating: 5,
    date: 'March 2026',
    comment: 'The balance of Ethiopian indigenous ingredients with classical European culinary discipline is breathtaking. Chef Dawit’s team demonstrates precision in every plating and warmth in every interaction.',
    highlight: 'Flawless culinary technique rooted in deep terroir.'
  },
  {
    id: 4,
    name: 'Dr. Michael Chen',
    role: 'Diplomatic Mission Guest (Verified)',
    rating: 5,
    date: 'March 2026',
    comment: 'The ambiance during sunset across Lake Babogaya from the terrace is magical. Every single dish looked exactly like a work of art and tasted even better. Don’t leave without the Basque Cheesecake!',
    highlight: 'The sunset terrace view paired with the Basque Cheesecake is unmissable.'
  }
]

export const privateDiningSpaces = [
  {
    id: 'terrace',
    name: 'The Lakeview Sunset Terrace',
    capacity: 'Up to 60 seated guests',
    suitableFor: 'Sunset cocktail receptions, anniversary galas, intimate celebrations',
    description: 'Overlooking the gentle waters of Bishoftu with glowing open flame braziers, lush subtropical palms, and panoramic twilight views.',
    features: ['Private Bar Setup', 'Dedicated Sommelier', 'Acoustic Sound System', 'Retractable Glass Pergola'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'cellar',
    name: 'The Heritage Wine Cellar & Vault',
    capacity: '8 to 16 seated guests',
    suitableFor: 'Exclusive degustation dinners, corporate boardroom dinners, wine tastings',
    description: 'Subterranean volcanic stone vault lined with over 800 vintage bottles, handcrafted acacia wood dining table, and private sommelier service.',
    features: ['Curated Wine Pairings', 'Custom 7-Course Tasting', 'Complete Audio Privacy', 'Pre-Dinner Champagne Lounge'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'grand-hall',
    name: 'The Grand Hearth Hall',
    capacity: 'Up to 120 guests',
    suitableFor: 'Full restaurant buyout, luxury corporate galas, high-profile weddings',
    description: 'Cathedral ceilings, monumental central stone hearth, polished bronze fixtures, and warm atmospheric ambient lighting designed for monumental occasions.',
    features: ['Full Kitchen Dedication', 'Bespoke Menu Customization', 'Valet Reception Staff', 'Live Music Stage Space'],
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85'
  }
]

export const faqItems = [
  {
    question: 'What is the recommended dress code for dining?',
    answer: 'We kindly request smart casual to formal attire. We advise avoiding athletic gym apparel, beachwear, or open pool flip-flops in the main dining room and wine vault in the evenings.'
  },
  {
    question: 'How far in advance should we reserve a table?',
    answer: 'For weekend dinners (Friday through Sunday) and the sunset terrace, we recommend booking 3 to 7 days in advance. For the Heritage Wine Cellar or private events, 2 weeks advance notice is advised.'
  },
  {
    question: 'Can dietary restrictions and food allergies be accommodated?',
    answer: 'Absolutely. Our culinary team takes great care with vegetarian, vegan, gluten-friendly, halal-certified, and specific allergy requirements. Please note any preferences during booking.'
  },
  {
    question: 'Is valet parking available on-site?',
    answer: 'Yes, complimentary secure valet parking is provided at our main entrance gate for all dining and event guests.'
  },
  {
    question: 'What is your corkage and private cake policy?',
    answer: 'Guests may bring up to two 750ml bottles of special personal vintage wine for an ETB 800 corkage fee per bottle (excluding bottles featured on our active wine list). Celebration cakes incur a cake service fee of ETB 500.'
  }
]

