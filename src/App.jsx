import { useState, useEffect } from 'react'
import {
  ArrowRight, ArrowUpRight, Check, Clock3, Instagram,
  MapPin, Menu, Phone, Sparkles, Utensils, X, CalendarDays,
  ChevronDown, Star, Leaf, Flame, Wine, Coffee, Mail,
  Facebook, Search, ShieldCheck, Heart, Award, Users,
  CheckCircle2, Compass, Eye, Plus, Trash2, Printer
} from 'lucide-react'

import {
  photos,
  menuDishes,
  menuCategories,
  dietaryFilters,
  restaurantReviews,
  privateDiningSpaces,
  faqItems
} from './data/restaurantData'

export default function App() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Menu Filters & Search
  const [selectedCategory, setSelectedCategory] = useState('All Dishes')
  const [selectedDietary, setSelectedDietary] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Modals & Panels
  const [reservationModalOpen, setReservationModalOpen] = useState(false)
  const [selectedDishModal, setSelectedDishModal] = useState(null)
  const [tastingDrawerOpen, setTastingDrawerOpen] = useState(false)
  const [eventInquiryModalOpen, setEventInquiryModalOpen] = useState(false)
  const [reviewModalOpen, setReviewModalOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  // Tasting List / Pre-order Tray
  const [tastingList, setTastingList] = useState([])

  // Dynamic Reviews
  const [reviews, setReviews] = useState(restaurantReviews)

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Filter Dishes
  const filteredDishes = menuDishes.filter(dish => {
    const matchesCategory = selectedCategory === 'All Dishes' || dish.category === selectedCategory
    const matchesDietary = selectedDietary === 'All' ||
      dish.dietary === selectedDietary ||
      dish.dietaryTag === selectedDietary
    const matchesSearch = searchQuery.trim() === '' ||
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesDietary && matchesSearch
  })

  // Tasting Tray Handlers
  const addToTastingList = (dish) => {
    if (!tastingList.some(item => item.id === dish.id)) {
      setTastingList([...tastingList, { ...dish, quantity: 1 }])
      setTastingDrawerOpen(true)
    }
  }

  const removeFromTastingList = (id) => {
    setTastingList(tastingList.filter(item => item.id !== id))
  }

  const tastingTotal = tastingList.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  // Add Review Handler
  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews])
    setReviewModalOpen(false)
  }

  return (
    <div className="site-wrapper">
      {/* 1. TOP NOTICE / ANNOUNCEMENT BAR */}
      <div className="top-notice-bar">
        <div className="wrap top-notice-inner">
          <div className="top-notice-left">
            <span className="top-notice-badge">
              <Sparkles size={11} /> Michelin Inspired
            </span>
            <span>Bishoftu Sunset Dining & Tasting Experience • Reserve for This Weekend</span>
          </div>
          <div className="top-notice-right">
            <a href="tel:+251911234567" className="top-notice-link">
              <Phone size={12} /> +251 91 123 4567
            </a>
            <span className="top-notice-link">
              <Clock3 size={12} /> Wed – Sun : 12:00 PM – 11:00 PM
            </span>
            <a href="#visit" className="top-notice-link">
              <MapPin size={12} /> Bishoftu, Ethiopia
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY HEADER */}
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="wrap header-inner">
          {/* BRAND EMBLEM */}
          <a href="#home" className="brand" aria-label="Ember & Earth Home">
            <div className="brand-crest"><span /></div>
            <div className="brand-copy">
              <strong>EMBER <i>&</i> EARTH</strong>
              <small>FINE DINING · BISHOFTU</small>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#home">Home</a>
            <a href="#philosophy">Experience</a>
            <a href="#menu">Tasting Menu</a>
            <a href="#chef">The Chef</a>
            <a href="#events">Private Dining</a>
            <a href="#reviews">Reviews</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Contact & Visit</a>
          </nav>

          {/* HEADER ACTIONS */}
          <div className="header-actions">
            {tastingList.length > 0 && (
              <button
                className="tasting-pill-btn"
                onClick={() => setTastingDrawerOpen(true)}
                title="View your tasting selection"
              >
                <Utensils size={13} />
                <span>Tasting Tray</span>
                <span className="tasting-count-badge">{tastingList.length}</span>
              </button>
            )}

            <button
              className="header-reserve-btn"
              onClick={() => setReservationModalOpen(true)}
            >
              Reserve a Table <ArrowUpRight size={14} />
            </button>

            <button
              className="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-copy">
            <strong>EMBER <i>&</i> EARTH</strong>
            <small>FINE DINING · BISHOFTU</small>
          </div>
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-drawer-links">
          {[
            ['Home', '#home'],
            ['The Experience', '#philosophy'],
            ['Tasting Menu', '#menu'],
            ['Executive Chef', '#chef'],
            ['Private Dining & Events', '#events'],
            ['Guest Reviews', '#reviews'],
            ['Atmosphere Gallery', '#gallery'],
            ['Location & Hours', '#visit'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{label}</span>
              <ArrowRight size={14} color="#d4b374" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-cta">
          {tastingList.length > 0 && (
            <button
              className="btn btn-glass btn-sm"
              onClick={() => {
                setMobileMenuOpen(false)
                setTastingDrawerOpen(true)
              }}
            >
              View Tasting Selection ({tastingList.length})
            </button>
          )}
          <button
            className="btn btn-gold"
            onClick={() => {
              setMobileMenuOpen(false)
              setReservationModalOpen(true)
            }}
          >
            Save A Place at The Table <ArrowUpRight size={14} />
          </button>
        </div>
      </aside>

      {/* 4. HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-media-wrapper">
          <img
            src={photos.hero}
            alt="Warmly lit luxury restaurant table set for dinner"
            className="hero-bg-img"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
        </div>

        <div className="wrap hero-content">
          <div className="hero-badge-pill">
            <Sparkles size={13} />
            <span>Michelin-Inspired Gastronomy & Hospitality</span>
          </div>

          <h1 className="hero-title">
            Where Culinary Craft<br />
            Meets <em>Timeless Elegance.</em>
          </h1>

          <p className="hero-description">
            Set above the serene volcanic lakes of Bishoftu, Ember & Earth pairs the bounty of Ethiopian highlands with refined classical culinary technique, genuine warmth, and unforgettable tables.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="btn btn-gold">
              Explore Tasting Menu <ArrowUpRight size={15} />
            </a>
            <button
              className="btn btn-glass"
              onClick={() => setReservationModalOpen(true)}
            >
              Reserve Your Table <CalendarDays size={15} />
            </button>
            <button
              className="btn btn-glass"
              onClick={() => setEventInquiryModalOpen(true)}
            >
              Private Dining & Events <ArrowRight size={15} />
            </button>
          </div>

          <div className="hero-footer-bar">
            <div className="hero-stat-item">
              <Star size={18} fill="#d4b374" />
              <div className="hero-stat-text">
                <strong>4.9 / 5.0 Rating</strong>
                <span>Over 480+ verified guest reviews</span>
              </div>
            </div>

            <div className="hero-stat-item">
              <Wine size={18} />
              <div className="hero-stat-text">
                <strong>800+ Bottle Cellar</strong>
                <span>Curated by master sommeliers</span>
              </div>
            </div>

            <div className="hero-stat-item">
              <MapPin size={18} />
              <div className="hero-stat-text">
                <strong>Lakeview Sanctuary</strong>
                <span>Bishoftu, Oromia, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HIGHLIGHTS PILLARS BAR */}
      <section className="highlights-bar">
        <div className="wrap highlights-grid">
          <div className="highlight-box">
            <div className="highlight-icon-wrap"><Award size={20} /></div>
            <div className="highlight-text">
              <strong>Michelin-Trained Chefs</strong>
              <small>Artisanal culinary execution</small>
            </div>
          </div>

          <div className="highlight-box">
            <div className="highlight-icon-wrap"><Leaf size={20} /></div>
            <div className="highlight-text">
              <strong>Farm-To-Table Sourcing</strong>
              <small>Daily harvest from local growers</small>
            </div>
          </div>

          <div className="highlight-box">
            <div className="highlight-icon-wrap"><Flame size={20} /></div>
            <div className="highlight-text">
              <strong>Acacia Wood Fire Hearth</strong>
              <small>Primal wood-smoked delicacies</small>
            </div>
          </div>

          <div className="highlight-box">
            <div className="highlight-icon-wrap"><Heart size={20} /></div>
            <div className="highlight-text">
              <strong>Ethiopian Warmth</strong>
              <small>World-renowned gracious care</small>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHILOSOPHY & THE EXPERIENCE SECTION */}
      <section className="philosophy-section section-pad" id="philosophy">
        <div className="wrap philosophy-grid">
          <div className="philosophy-copy">
            <div className="section-kicker">
              <span>01</span><i /> THE PHILOSOPHY
            </div>
            <h2 className="section-title">
              Come for the flavors.<br />
              <em>Stay for the feeling.</em>
            </h2>
            <p>
              We believe dining is an intimate human ceremony. At Ember & Earth, every plate begins with respect: respect for the Ethiopian soil, for traditional artisanal growers in the surrounding highlands, and for our guests who gather to celebrate life.
            </p>
            <p>
              Our kitchen bridges authentic regional heritage with classical European mastery — slow fermentation, dry-aging techniques, hand-rolled pastas, and pristine wood-fired searing.
            </p>

            <div className="philosophy-pillars">
              <div className="pillar-item">
                <span className="pillar-number">01</span>
                <h4>Locally Sourced</h4>
                <p>Pure highland organic vegetables, grass-fed meats, and cold-pressed oils.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-number">02</span>
                <h4>Artisan Mastery</h4>
                <p>Scratch cooking with daily fresh pasta, sourdough crusts, and house sauces.</p>
              </div>

              <div className="pillar-item">
                <span className="pillar-number">03</span>
                <h4>Genuine Welcome</h4>
                <p>Hospitality deeply rooted in the warmth of our culture and home.</p>
              </div>
            </div>
          </div>

          <div className="philosophy-visual">
            <img
              src={photos.interior}
              alt="Ember & Earth warm interior ambiance"
              className="philosophy-img-main"
              loading="lazy"
            />
            <div className="philosophy-quote-card">
              <div className="quote-symbol">“</div>
              <p>
                Food is never merely sustenance. In our culture, breaking bread together is an oath of friendship and lasting joy.
              </p>
              <small>EXECUTIVE CHEF DAWIT ALEMAYEHU</small>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FULL INTERACTIVE MENU SECTION (LIGHT LUXURY CANVAS) */}
      <section className="menu-section section-pad" id="menu">
        <div className="wrap">
          <div className="menu-header-row">
            <div>
              <div className="section-kicker section-kicker-dark">
                <span>02</span><i /> OUR CULINARY SELECTIONS
              </div>
              <h2 className="section-title section-title-dark">
                A Symphony of<br />
                <em>Considered Flavors.</em>
              </h2>
            </div>
            <p className="section-subtitle section-subtitle-dark">
              Every dish is thoughtfully paired with accurate photography, detailed ingredients, wine recommendations, and guest review scores.
            </p>
          </div>

          {/* SEARCH & DIETARY CONTROLS BOX */}
          <div className="menu-controls-box">
            <div className="menu-search-row">
              <div className="menu-search-input-wrap">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search dishes by name (e.g. Pasta, Steak, Truffle, Salmon)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search dishes"
                />
                {searchQuery && (
                  <button
                    className="menu-search-clear"
                    onClick={() => setSearchQuery('')}
                    title="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="dietary-tags-row">
                <span className="dietary-tag-label">Dietary:</span>
                {dietaryFilters.map(filter => (
                  <button
                    key={filter}
                    className={`dietary-tag-btn ${selectedDietary === filter ? 'active' : ''}`}
                    onClick={() => setSelectedDietary(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* CATEGORY TABS */}
            <div className="category-tabs-bar" role="tablist">
              {menuCategories.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* DISHES GRID */}
          {filteredDishes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#5e6861' }}>
              <p style={{ fontSize: '18px', marginBottom: '10px' }}>No dishes found matching your current filter.</p>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Dishes')
                  setSelectedDietary('All')
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="dishes-grid">
              {filteredDishes.map(dish => (
                <article className="dish-card" key={dish.id}>
                  <div className="dish-thumb-wrap">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="dish-thumb-img"
                      loading="lazy"
                    />
                    <span className="dish-badge-tag">{dish.tag}</span>
                    <span className="dish-dietary-pill">{dish.dietary}</span>
                  </div>

                  <div className="dish-details-body">
                    <div className="dish-rating-row">
                      <div className="star-rating-display" title={`${dish.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill={i < Math.floor(dish.rating) ? '#df9e28' : '#e6ded0'}
                            color={i < Math.floor(dish.rating) ? '#df9e28' : '#c9bfad'}
                          />
                        ))}
                        <span className="star-rating-score">{dish.rating.toFixed(1)}</span>
                        <span className="star-rating-count">({dish.reviewsCount})</span>
                      </div>
                      <span className="dish-price-badge">{dish.priceFormatted}</span>
                    </div>

                    <h3 className="dish-title">{dish.name}</h3>
                    <p className="dish-excerpt">{dish.description}</p>

                    <div className="dish-card-actions">
                      <button
                        className="dish-view-btn"
                        onClick={() => setSelectedDishModal(dish)}
                      >
                        <Eye size={13} /> Details & Pairing
                      </button>
                      <button
                        className="dish-add-tray-btn"
                        onClick={() => addToTastingList(dish)}
                        title="Add to tasting list"
                      >
                        <Plus size={14} /> Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e0d6c5' }}>
            <p style={{ fontSize: '12px', color: '#74776f', margin: 0 }}>
              ★ All tasting menu selections prepared fresh to order. Prices in Ethiopian Birr (ETB). For private tasting experiences, please reserve 24 hours in advance.
            </p>
          </div>
        </div>
      </section>

      {/* 8. EXECUTIVE CHEF & STORY */}
      <section className="chef-section section-pad" id="chef">
        <div className="wrap chef-grid">
          <div className="chef-portrait-wrap">
            <img
              src={photos.chef}
              alt="Executive Chef Dawit Alemayehu preparing a gourmet dish"
              className="chef-portrait-img"
              loading="lazy"
            />
            <div className="chef-stamp">
              EXECUTIVE CHEF · DAWIT ALEMAYEHU
            </div>
          </div>

          <div className="chef-bio-wrap">
            <div className="section-kicker">
              <span>03</span><i /> THE CULINARY DIRECTOR
            </div>
            <h2 className="section-title">
              Mastery Rooted in<br />
              <em>Heritage & Fire.</em>
            </h2>
            <div className="chef-role-lead">
              "Every plate is a tribute to the soils that nurtured our ingredients."
            </div>
            <p>
              Trained across Michelin-starred kitchens in Lyon, Florence, and San Sebastián, Chef Dawit returned to Ethiopia to spearhead a culinary renaissance in Bishoftu. His philosophy harmonizes classical discipline with indigenous herbs — wild thyme (tosign), sacred basil (besobila), and ancestral teff grains.
            </p>
            <p>
              Under his guidance, Ember & Earth runs a low-waste kitchen that partners exclusively with local sustainable fishermen from Lake Babogaya and highland regenerative organic farms.
            </p>

            <div className="chef-awards-grid">
              <div className="chef-award-item">
                <strong>Prix Culinaire d'Or</strong>
                <small>Pan-African Gastronomy 2024</small>
              </div>

              <div className="chef-award-item">
                <strong>Sommelier Choice</strong>
                <small>Top Cellar Pairing Excellence</small>
              </div>

              <div className="chef-award-item">
                <strong>Farm Stewardship</strong>
                <small>Certified Sustainable Dining</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRIVATE DINING & EVENTS */}
      <section className="events-section section-pad" id="events">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}>
              <span>04</span><i /> EXCLUSIVE SPACES
            </div>
            <h2 className="section-title">
              Private Dining &<br />
              <em>Unforgettable Celebrations.</em>
            </h2>
            <p className="section-subtitle">
              From candlelit wine vault degustations to grand lakeview wedding galas, our team crafts bespoke experiences tailored to your most distinguished guests.
            </p>
          </div>

          <div className="events-cards-grid">
            {privateDiningSpaces.map(space => (
              <div className="event-space-card" key={space.id}>
                <div className="event-card-img-wrap">
                  <img src={space.image} alt={space.name} loading="lazy" />
                  <span className="event-capacity-tag">{space.capacity}</span>
                </div>

                <div className="event-card-body">
                  <h3>{space.name}</h3>
                  <div className="event-suitable">{space.suitableFor}</div>
                  <p>{space.description}</p>

                  <ul className="event-features-list">
                    {space.features.map(feat => (
                      <li key={feat}>
                        <Check size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="btn btn-gold btn-sm"
                    onClick={() => setEventInquiryModalOpen(true)}
                  >
                    Inquire For This Space <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ATMOSPHERE GALLERY MOSAIC */}
      <section className="gallery-section section-pad" id="gallery">
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap' }}>
            <div>
              <div className="section-kicker section-kicker-dark">
                <span>05</span><i /> A GLIMPSE INSIDE
              </div>
              <h2 className="section-title section-title-dark">
                Crafted for the<br />
                <em>Senses & Memory.</em>
              </h2>
            </div>
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => setReservationModalOpen(true)}
            >
              Experience It In Person <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="gallery-grid-mosaic">
            {[
              {
                src: photos.interior,
                title: 'The Grand Hearth Hall',
                subtitle: 'Main Dining Ambiance',
                cls: 'span-2'
              },
              {
                src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
                title: 'Acacia Wood Seared Steak',
                subtitle: 'Charcoal Kitchen Craft',
                cls: ''
              },
              {
                src: photos.wineCellar,
                title: 'Heritage Wine Vault',
                subtitle: 'Private Tasting Collection',
                cls: ''
              },
              {
                src: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=85',
                title: 'Handmade Truffle Tagliatelle',
                subtitle: 'Daily Fresh Egg Pasta',
                cls: 'span-col-2'
              },
              {
                src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=85',
                title: 'Smoked Oak Bourbon Cocktail',
                subtitle: 'Artisan Mixology Bar',
                cls: ''
              },
              {
                src: photos.gardenDining,
                title: 'The Lakeview Terrace',
                subtitle: 'Sunset Twilight Dining',
                cls: ''
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`gallery-mosaic-item ${item.cls}`}
                onClick={() => setLightboxImage(item)}
              >
                <img src={item.src} alt={item.title} className="gallery-mosaic-img" loading="lazy" />
                <div className="gallery-mosaic-overlay">
                  <h4>{item.title}</h4>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GUEST REVIEWS & REPUTATION */}
      <section className="reviews-section section-pad" id="reviews">
        <div className="wrap">
          <div className="reviews-summary-card">
            <div className="reviews-rating-big">
              <span className="reviews-score-number">4.9</span>
              <div className="reviews-rating-meta">
                <div className="star-rating-display">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#d4b374" color="#d4b374" />
                  ))}
                </div>
                <strong>Exceptional Dining Distinction</strong>
                <span>Based on 480+ verified Google, TripAdvisor & critic reviews</span>
              </div>
            </div>

            <button
              className="btn btn-gold"
              onClick={() => setReviewModalOpen(true)}
            >
              Share Your Dining Experience <Star size={14} />
            </button>
          </div>

          <div className="reviews-cards-grid">
            {reviews.map(rev => (
              <div className="review-card" key={rev.id}>
                <div className="review-card-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#d4b374" color="#d4b374" />
                  ))}
                </div>
                <div className="review-card-highlight">"{rev.highlight}"</div>
                <p className="review-card-quote">{rev.comment}</p>
                <div className="review-card-author">
                  <div>
                    <strong>{rev.name}</strong>
                    <small>{rev.role}</small>
                  </div>
                  <span className="review-card-date">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="faq-section section-pad">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}>
              <span>06</span><i /> GUEST INQUIRIES
            </div>
            <h2 className="section-title">
              Frequently Asked<br />
              <em>Questions.</em>
            </h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={19} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 13. VISIT, HOURS & INTERACTIVE CONTACT */}
      <section className="visit-section section-pad" id="visit">
        <div className="wrap">
          <div className="visit-grid">
            {/* LOCATION & HOURS INFO */}
            <div className="visit-info-card">
              <div>
                <div className="section-kicker">
                  <span>07</span><i /> FIND US
                </div>
                <h2 className="section-title">
                  Your Table<br />
                  <em>Awaits.</em>
                </h2>
              </div>

              <div className="visit-detail-row">
                <MapPin size={22} />
                <div className="visit-detail-text">
                  <span>LOCATION & ADDRESS</span>
                  <p>Lake Babogaya Shoreline, Bishoftu, Oromia, Ethiopia</p>
                  <small>45 minutes drive from Addis Ababa Bole International Airport via Express Tollway.</small>
                  <a
                    href="https://maps.google.com/?q=Bishoftu+Ethiopia"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#d4b374', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontSize: '12px' }}
                  >
                    Open in Google Maps <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              <div className="visit-detail-row">
                <Clock3 size={22} />
                <div className="visit-detail-text">
                  <span>DINING HOURS</span>
                  <p>Wednesday through Sunday</p>
                  <small>Lunch: 12:00 PM – 4:00 PM | Dinner: 6:00 PM – 11:00 PM</small>
                  <small style={{ color: '#ebd6ab', marginTop: '4px' }}>Closed Monday & Tuesday for kitchen prep & private buyouts.</small>
                </div>
              </div>

              <div className="visit-detail-row">
                <Phone size={22} />
                <div className="visit-detail-text">
                  <span>DIRECT INQUIRIES</span>
                  <p>+251 91 123 4567 / +251 11 433 8900</p>
                  <small>concierge@emberandearth.et</small>
                </div>
              </div>

              <div className="visit-detail-row">
                <ShieldCheck size={22} />
                <div className="visit-detail-text">
                  <span>VALET & PARKING</span>
                  <p>Complimentary On-Site Valet</p>
                  <small>Secure gated parking with 24/7 dedicated security personnel.</small>
                </div>
              </div>
            </div>

            {/* QUICK CONTACT INQUIRY FORM */}
            <div className="visit-contact-form-card">
              <div className="section-kicker">
                <span>DIRECT MESSAGE</span><i /> WE'D LOVE TO HEAR
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', margin: '0 0 20px', color: '#fbf8f2' }}>
                Send Us an Inquiry
              </h3>

              <form onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! Your inquiry has been transmitted to the Ember & Earth concierge team.')
                e.target.reset()
              }}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>First Name</label>
                    <input required type="text" placeholder="e.g. Dawit" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input required type="text" placeholder="e.g. Haile" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input required type="email" placeholder="dawit@example.com" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input required type="tel" placeholder="+251 9..." />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select defaultValue="Table Reservation Query">
                    <option>Table Reservation Query</option>
                    <option>Private Dining / Lakeview Buyout</option>
                    <option>Wine Tasting Session</option>
                    <option>Dietary / Allergy Pre-consultation</option>
                    <option>Press & Media Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="3" required placeholder="How may our concierge assist your party?" />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                  Submit Inquiry <ArrowUpRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 14. LUXURY FOOTER */}
      <footer className="site-footer">
        <div className="wrap footer-main-grid">
          <div>
            <div className="brand">
              <div className="brand-crest"><span /></div>
              <div className="brand-copy">
                <strong>EMBER <i>&</i> EARTH</strong>
                <small>FINE DINING · BISHOFTU</small>
              </div>
            </div>
            <p className="footer-brand-text">
              An unforgettable culinary haven perched by the tranquil waters of Bishoftu. Celebrating Ethiopian heritage through modern fine gastronomy, open hearth cooking, and world-class wine collections.
            </p>
          </div>

          <div className="footer-col">
            <h4>EXPLORE</h4>
            <div className="footer-links-list">
              <a href="#philosophy">Our Philosophy</a>
              <a href="#menu">Full Tasting Menu</a>
              <a href="#chef">Executive Chef</a>
              <a href="#events">Private Dining Vault</a>
              <a href="#gallery">Atmosphere Gallery</a>
              <a href="#reviews">Guest Reviews</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>EXPERIENCES</h4>
            <div className="footer-links-list">
              <a href="#events">Lakeview Sunset Dinners</a>
              <a href="#events">Wine Vault Degustation</a>
              <a href="#events">Chef's Table Experience</a>
              <a href="#visit">Gift Certificates</a>
              <a href="#visit">Dress Code Policy</a>
            </div>
          </div>

          <div className="footer-col footer-newsletter">
            <h4>PRIVATE INVITATIONS</h4>
            <p>Subscribe for seasonal menu launches, cellar vintage releases, and exclusive culinary evenings.</p>
            <form
              className="footer-newsletter-form"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Welcome to our private dining circle. You will receive exclusive seasonal invitations.')
                e.target.reset()
              }}
            >
              <input type="email" required placeholder="Enter your email" />
              <button type="submit" className="btn btn-gold btn-sm">Join</button>
            </form>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#d4b374' }}>
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#d4b374' }}>
                <Facebook size={18} />
              </a>
              <a href="mailto:concierge@emberandearth.et" style={{ color: '#d4b374' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="wrap footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} EMBER & EARTH HOSPITALITY GROUP. ALL RIGHTS RESERVED.
          </div>
          <div>
            CRAFTED WITH PRECISION IN BISHOFTU, ETHIOPIA • FINE DINING EXCELLENCE
          </div>
        </div>
      </footer>

      {/* ===================================================
          MODALS & SLIDEOUT DRAWERS
          =================================================== */}

      {/* A. TABLE RESERVATION MODAL (MULTI-STEP BOOKING ENGINE) */}
      {reservationModalOpen && (
        <ReservationModal
          onClose={() => setReservationModalOpen(false)}
          preSelectedDishes={tastingList}
        />
      )}

      {/* B. DISH DETAIL MODAL */}
      {selectedDishModal && (
        <DishDetailModal
          dish={selectedDishModal}
          onClose={() => setSelectedDishModal(null)}
          onAddToTasting={() => {
            addToTastingList(selectedDishModal)
            setSelectedDishModal(null)
          }}
        />
      )}

      {/* C. TASTING LIST DRAWER */}
      <div className={`tasting-drawer ${tastingDrawerOpen ? 'open' : ''}`}>
        <div className="tasting-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Utensils size={16} color="#d4b374" />
            <strong style={{ fontSize: '15px', color: '#fbf8f2' }}>Your Tasting Selection</strong>
          </div>
          <button
            onClick={() => setTastingDrawerOpen(false)}
            style={{ background: 'transparent', border: 'none', color: '#fbf8f2' }}
          >
            <X size={18} />
          </button>
        </div>

        {tastingList.length === 0 ? (
          <p style={{ color: 'rgba(251,248,242,0.6)', fontSize: '13px' }}>
            No dishes selected yet. Explore our menu and tap "Add" to curate your tasting course.
          </p>
        ) : (
          <>
            <div className="tasting-drawer-items">
              {tastingList.map(item => (
                <div className="tasting-item-row" key={item.id}>
                  <div>
                    <strong style={{ display: 'block', color: '#fbf8f2', fontSize: '13px' }}>{item.name}</strong>
                    <small style={{ color: '#d4b374' }}>{item.priceFormatted}</small>
                  </div>
                  <button
                    className="tasting-item-remove-btn"
                    onClick={() => removeFromTastingList(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBlock: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#fbf8f2', fontSize: '14px', fontWeight: '700' }}>
              <span>Total Estimated:</span>
              <span style={{ color: '#d4b374' }}>ETB {tastingTotal.toLocaleString()}</span>
            </div>

            <button
              className="btn btn-gold"
              style={{ width: '100%', marginTop: '8px' }}
              onClick={() => {
                setTastingDrawerOpen(false)
                setReservationModalOpen(true)
              }}
            >
              Reserve Table With This Tasting Menu <ArrowUpRight size={14} />
            </button>
          </>
        )}
      </div>

      {/* D. PRIVATE DINING / EVENT INQUIRY MODAL */}
      {eventInquiryModalOpen && (
        <EventInquiryModal onClose={() => setEventInquiryModalOpen(false)} />
      )}

      {/* E. SUBMIT REVIEW MODAL */}
      {reviewModalOpen && (
        <ReviewSubmissionModal
          onClose={() => setReviewModalOpen(false)}
          onSubmit={handleAddReview}
        />
      )}

      {/* F. GALLERY LIGHTBOX */}
      {lightboxImage && (
        <div className="modal-backdrop" onClick={() => setLightboxImage(null)}>
          <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setLightboxImage(null)}
            >
              <X size={18} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', background: '#000' }}
            />
            <div style={{ background: '#111d17', padding: '16px 20px', color: '#fbf8f2', border: '1px solid #d4b374' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px' }}>{lightboxImage.title}</h3>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#d4b374' }}>{lightboxImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ===================================================
   COMPONENT: MULTI-STEP TABLE RESERVATION MODAL
   =================================================== */
function ReservationModal({ onClose, preSelectedDishes }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    diningZone: 'The Lakeview Sunset Terrace',
    date: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 10),
    time: '19:30',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    occasion: 'Anniversary / Romantic Evening',
    specialRequests: ''
  })
  const [bookingRef, setBookingRef] = useState('')

  const zones = [
    { title: 'The Lakeview Sunset Terrace', desc: 'Panoramic waters, fresh breeze, open fire brazier' },
    { title: 'The Grand Hearth Hall', desc: 'Central stone fireplace, warm fine dining atmosphere' },
    { title: 'The Heritage Wine Cellar', desc: 'Subterranean stone vault, exclusive intimacy' },
    { title: 'Executive Chef’s Counter', desc: 'Front-row view of plating and culinary craft' }
  ]

  const timeSlots = [
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM'
  ]

  const handleNextStep = (e) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      const generatedRef = 'EE-' + Math.floor(1000 + Math.random() * 9000) + 'X'
      setBookingRef(generatedRef)
      setStep(3)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="reservation-modal-body">
          {step < 3 && (
            <>
              <div className="section-kicker section-kicker-dark">
                <span>ONLINE BOOKING</span><i /> SAVE YOUR PLACE
              </div>
              <h2 className="section-title section-title-dark" style={{ fontSize: '36px', marginBottom: '16px' }}>
                Reserve a Table<br />
                <em>At Ember & Earth.</em>
              </h2>

              <div className="reservation-step-indicator">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className="step-line" />
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className="step-line" />
                <div className="step-dot">3</div>
              </div>
            </>
          )}

          {step === 1 && (
            <form onSubmit={handleNextStep}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7b6238', display: 'block', marginBottom: '8px' }}>
                  Select Dining Ambience & Zone
                </label>
                <div className="dining-zones-grid">
                  {zones.map(z => (
                    <div
                      key={z.title}
                      className={`dining-zone-option ${formData.diningZone === z.title ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, diningZone: z.title })}
                    >
                      <strong>{z.title}</strong>
                      <small>{z.desc}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Date of Visit</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().slice(0, 10)}
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Party Size</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, '12+ (Private Space)'].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Time Slot</label>
                <select
                  value={formData.time}
                  onChange={e => setFormData({ ...formData, time: e.target.value })}
                >
                  {timeSlots.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '14px' }}>
                Continue to Guest Details <ArrowRight size={14} />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep}>
              <div className="form-group">
                <label>Full Guest Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dawit Haile"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="dawit@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+251 91 123 4567"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Special Occasion</label>
                <select
                  value={formData.occasion}
                  onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                >
                  <option>Anniversary / Romantic Evening</option>
                  <option>Birthday Celebration</option>
                  <option>Executive Corporate Dinner</option>
                  <option>Family Reunion</option>
                  <option>Casual Fine Dining</option>
                </select>
              </div>

              <div className="form-group">
                <label>Dietary Restrictions or Special Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Allergies, seating preference, quiet corner..."
                  value={formData.specialRequests}
                  onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                />
              </div>

              {preSelectedDishes.length > 0 && (
                <div style={{ background: '#f4ede0', padding: '12px 16px', border: '1px solid #dfd3be', marginBottom: '16px', fontSize: '12px' }}>
                  <strong style={{ color: '#8f6f36' }}>Attached Tasting Selection ({preSelectedDishes.length} dishes):</strong>
                  <div style={{ color: '#4f554f', marginTop: '4px' }}>
                    {preSelectedDishes.map(d => d.name).join(', ')}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => setStep(1)}
                  style={{ flex: 1 }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ flex: 2 }}
                >
                  Confirm Table Reservation <CheckCircle2 size={14} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', paddingBlock: '10px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dce8dc', color: '#2b5837', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
                <Check size={32} />
              </div>

              <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#8f6f36', fontWeight: '700', textTransform: 'uppercase' }}>
                RESERVATION CONFIRMED
              </span>
              <h2 className="section-title section-title-dark" style={{ fontSize: '32px', margin: '6px 0 12px' }}>
                Your Place Is <em>Saved.</em>
              </h2>
              <p style={{ color: '#5e6861', fontSize: '14px', maxWidth: '440px', margin: '0 auto 20px' }}>
                Thank you, <strong>{formData.name}</strong>. A confirmation SMS & email have been prepared. Please present your booking voucher upon arrival.
              </p>

              {/* VOUCHER CARD */}
              <div className="booking-voucher-card">
                <div className="voucher-header">
                  <div>
                    <strong style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#142019' }}>EMBER & EARTH</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: '#7b6238' }}>FINE DINING BISHOFTU</span>
                  </div>
                  <div className="voucher-ref-code">{bookingRef}</div>
                </div>

                <div className="voucher-details-grid">
                  <div className="voucher-detail-item">
                    <span>GUEST NAME</span>
                    <strong>{formData.name}</strong>
                  </div>
                  <div className="voucher-detail-item">
                    <span>PARTY SIZE</span>
                    <strong>{formData.guests} Guests</strong>
                  </div>
                  <div className="voucher-detail-item">
                    <span>DATE & TIME</span>
                    <strong>{formData.date} at {formData.time}</strong>
                  </div>
                  <div className="voucher-detail-item">
                    <span>SELECTED ZONE</span>
                    <strong>{formData.diningZone}</strong>
                  </div>
                </div>

                {preSelectedDishes.length > 0 && (
                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed #dcd1be', textAlign: 'left', fontSize: '12px' }}>
                    <span style={{ fontSize: '10px', color: '#7b6238', textTransform: 'uppercase', letterSpacing: '0.08em' }}>PRE-SELECTED TASTING DISHES:</span>
                    <p style={{ margin: '3px 0 0', color: '#142019', fontWeight: '500' }}>
                      {preSelectedDishes.map(d => d.name).join(' • ')}
                    </p>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => window.print()}
                >
                  <Printer size={14} /> Print Voucher
                </button>
                <button
                  className="btn btn-gold btn-sm"
                  onClick={onClose}
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ===================================================
   COMPONENT: DISH DETAIL MODAL
   =================================================== */
function DishDetailModal({ dish, onClose, onAddToTasting }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card dish-modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="dish-modal-img-wrap">
          <img src={dish.image} alt={dish.name} />
        </div>

        <div className="dish-modal-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', color: '#8f6f36', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {dish.category} • {dish.dietary}
            </span>
            <span className="dish-price-badge" style={{ fontSize: '18px' }}>
              {dish.priceFormatted}
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', margin: '0 0 10px', color: '#142019', lineHeight: 1.2 }}>
            {dish.name}
          </h2>

          <div className="star-rating-display" style={{ marginBottom: '14px' }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(dish.rating) ? '#df9e28' : '#e6ded0'}
                color={i < Math.floor(dish.rating) ? '#df9e28' : '#c9bfad'}
              />
            ))}
            <span className="star-rating-score">{dish.rating.toFixed(1)} / 5.0</span>
            <span className="star-rating-count">({dish.reviewsCount} reviews)</span>
          </div>

          <p style={{ fontSize: '13px', lineHeight: 1.8, color: '#4f554f', margin: '0 0 14px' }}>
            {dish.description}
          </p>

          <div style={{ marginBlock: '8px' }}>
            <span style={{ fontSize: '10px', fontWeight: '700', color: '#8f6f36', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Key Ingredients:
            </span>
            <div className="ingredients-pills">
              {dish.ingredients.map(ing => (
                <span className="ingredient-pill" key={ing}>{ing}</span>
              ))}
            </div>
          </div>

          <div style={{ background: '#f5efe4', padding: '12px 14px', borderLeft: '3px solid #8f6f36', marginBlock: '10px', fontSize: '12px' }}>
            <strong style={{ color: '#8f6f36', display: 'block', marginBottom: '2px' }}>
              Sommelier Wine Pairing:
            </strong>
            <span style={{ color: '#2a352e' }}>{dish.winePairing}</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: '#74776f', marginBlock: '8px' }}>
            <span>Calories: <strong>{dish.calories}</strong></span>
            <span>Prep: <strong>{dish.prepTime}</strong></span>
            <span>Allergens: <strong>{dish.allergens.join(', ')}</strong></span>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
            <button
              className="btn btn-gold"
              style={{ width: '100%' }}
              onClick={onAddToTasting}
            >
              Add to Tasting Tray <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===================================================
   COMPONENT: PRIVATE DINING / EVENT INQUIRY MODAL
   =================================================== */
function EventInquiryModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '580px' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ padding: 'clamp(28px, 5vw, 48px)' }}>
          {!submitted ? (
            <>
              <div className="section-kicker section-kicker-dark">
                <span>EXCLUSIVE CELEBRATION</span><i /> PRIVATE INQUIRY
              </div>
              <h2 className="section-title section-title-dark" style={{ fontSize: '32px', marginBottom: '14px' }}>
                Plan Your Event<br />
                <em>At Ember & Earth.</em>
              </h2>
              <p style={{ fontSize: '13px', color: '#5e6861', lineHeight: 1.8, marginBottom: '20px' }}>
                Our private dining coordinator will tailor menus, wine pairings, and room decor to perfection.
              </p>

              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                <div className="form-group">
                  <label>Host / Organization Name</label>
                  <input required type="text" placeholder="e.g. Bethlehem & Co." />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Email</label>
                    <input required type="email" placeholder="host@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input required type="tel" placeholder="+251..." />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Preferred Space</label>
                    <select defaultValue="The Lakeview Sunset Terrace">
                      <option>The Lakeview Sunset Terrace (Up to 60)</option>
                      <option>The Heritage Wine Cellar (8 to 16)</option>
                      <option>The Grand Hearth Hall (Up to 120)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Estimated Guests</label>
                    <input required type="number" min="6" max="150" defaultValue="15" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Event Type</label>
                  <select defaultValue="Anniversary / Private Gala">
                    <option>Anniversary / Private Gala</option>
                    <option>Wedding Rehearsal / Reception</option>
                    <option>Executive Corporate Retreat</option>
                    <option>Sommelier Tasting Masterclass</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Event Vision & Special Requirements</label>
                  <textarea rows="3" placeholder="Dietary guidelines, AV equipment, custom floral requests..." />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '10px' }}>
                  Submit Event Inquiry <ArrowUpRight size={14} />
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', paddingBlock: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#dce8dc', color: '#2b5837', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
                <Check size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#142019' }}>Inquiry Received</h3>
              <p style={{ color: '#5e6861', fontSize: '13px', lineHeight: 1.8, margin: '10px 0 24px' }}>
                Thank you. Our Private Dining Director will contact you within 24 hours with custom packages and floor plans.
              </p>
              <button className="btn btn-outline-dark btn-sm" onClick={onClose}>
                Return to Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ===================================================
   COMPONENT: SUBMIT REVIEW MODAL
   =================================================== */
function ReviewSubmissionModal({ onClose, onSubmit }) {
  const [rating, setRating] = useState(5)
  const [name, setName] = useState('')
  const [role, setRole] = useState('Dinner Guest (Verified)')
  const [highlight, setHighlight] = useState('')
  const [comment, setComment] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      id: Date.now(),
      name: name || 'Valued Guest',
      role,
      rating,
      date: 'Just now',
      highlight: highlight || 'An exquisite and memorable evening.',
      comment
    })
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '520px' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ padding: 'clamp(28px, 5vw, 44px)' }}>
          <div className="section-kicker section-kicker-dark">
            <span>FEEDBACK & HONORS</span><i /> SHARE EXPERIENCE
          </div>
          <h2 className="section-title section-title-dark" style={{ fontSize: '30px', marginBottom: '14px' }}>
            Rate Your Dining<br />
            <em>At Ember & Earth.</em>
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7b6238', display: 'block', marginBottom: '6px' }}>
                Star Rating (Out of 5)
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[1, 2, 3, 4, 5].map(starNum => (
                  <button
                    type="button"
                    key={starNum}
                    onClick={() => setRating(starNum)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
                  >
                    <Star
                      size={28}
                      fill={starNum <= rating ? '#df9e28' : '#e0d8cc'}
                      color={starNum <= rating ? '#df9e28' : '#c9bfad'}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Your Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Almaz Tsegaye"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Guest Type</label>
              <select value={role} onChange={e => setRole(e.target.value)}>
                <option>Dinner Guest (Verified)</option>
                <option>Wine Vault Tasting Guest</option>
                <option>Private Celebration Host</option>
                <option>Food & Wine Enthusiast</option>
              </select>
            </div>

            <div className="form-group">
              <label>Key Highlight (One Line)</label>
              <input
                required
                type="text"
                placeholder="e.g. The Truffle Tagliatelle and sunset lake view were divine."
                value={highlight}
                onChange={e => setHighlight(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Detailed Dining Review</label>
              <textarea
                rows="3"
                required
                placeholder="Describe your impressions of the flavors, presentation, ambiance and hospitality..."
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '10px' }}>
              Publish Review <Check size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}