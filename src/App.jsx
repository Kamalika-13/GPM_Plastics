import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Check, ChevronDown, ClipboardCheck, IceCreamBowl,
  Layers3, Mail, Menu, MapPin, MessageCircle, Pause, PackageCheck, Phone, Play, Send, Shapes,
  ShieldCheck, Sparkles, X,
} from 'lucide-react'
import { categories, products } from './products'

const primaryPhone = '919345429389'
const officialLogoPath = '/images/gmp-logo.png'
const heroVideoPath = '/videos/hero.mp4'
const heroPosterPath = '/images/hero-poster.jpg'
const aboutImagePath = '/images/about-factory.png'
const productMessage = 'Hello GMP Plastics, I am interested in your plastic ice cream cups/products. Please share your product details and quotation.'
const mouldMessage = 'Hello GMP Plastics, I have a requirement for a customized plastic cup/design. I would like to discuss mould development.'
const waLink = (message) => `https://wa.me/${primaryPhone}?text=${encodeURIComponent(message)}`

const valueProps = [
  { icon: Shapes, title: 'Custom designs', text: 'Customer-specific packaging concepts' },
  { icon: Layers3, title: 'Mould development', text: 'Explored subject to feasibility' },
  { icon: ShieldCheck, title: 'Quality manufacturing', text: 'Focused, practical production solutions' },
  { icon: MessageCircle, title: 'B2B support', text: 'Direct communication for your business' },
]

const capabilities = [
  'Plastic product manufacturing', 'Custom product development',
  'Customer-specific mould development', 'Product design support',
  'Ice cream packaging solutions', 'B2B manufacturing',
  'Customized shapes & designs', 'Commercial production support',
]

const advantages = [
  { title: 'Innovative designs', text: 'Creative packaging concepts for attractive product presentation.', icon: Sparkles },
  { title: 'Customization', text: 'Products can be developed around customer requirements.', icon: Shapes },
  { title: 'Mould development', text: 'Explore customer-specific mould solutions, subject to feasibility.', icon: Layers3 },
  { title: 'Quality focus', text: 'A considered focus on manufacturing consistency and product quality.', icon: ShieldCheck },
  { title: 'B2B orientation', text: 'Solutions for commercial ice cream and food businesses.', icon: PackageCheck },
  { title: 'Customer support', text: 'Responsive enquiry handling and direct communication.', icon: MessageCircle },
]

const process = [
  { n: '01', title: 'Share your idea', text: 'Tell us about your product, audience and packaging need.' },
  { n: '02', title: 'Design & feasibility review', text: 'We review dimensions, technical needs and production suitability.' },
  { n: '03', title: 'Mould development', text: 'A suitable customer-specific mould can be explored if feasible.' },
  { n: '04', title: 'Production', text: 'Move towards production planning and a packaging solution.' },
]

const journey = ['Idea', 'Design', 'Custom mould', 'Manufacturing', 'Product']

const hsnCodes = [
  { code: '84805000', description: 'Moulding boxes for metal foundry; mould bases; moulding patterns; moulds for metal (other than ingot moulds), metal carbides, glass, mineral materials, rubber or plastics moulds for glass' },
  { code: '84807100', description: 'Moulding boxes for metal foundry; mould bases; moulding patterns; moulds for metal (other than ingot moulds), metal carbides, glass, mineral materials, rubber or plastics - moulds for rubber or plastics: injection or compression types' },
  { code: '84802000', description: 'Moulding boxes for metal foundry; mould bases; moulding patterns; moulds for metal (other than ingot moulds), metal carbides, glass, mineral materials, rubber or plastics mould bases' },
  { code: '84804100', description: 'Moulding boxes for metal foundry; mould bases; moulding patterns; moulds for metal (other than ingot moulds), metal carbides, glass, mineral materials, rubber or plastics - moulds for metal or metal carbides: injection or compression types' },
]

function BrandMark() {
  return officialLogoPath ? (
    <a className="brand-logo-link" href="#home" aria-label="GMP Plastics home"><img className="brand-image" src={officialLogoPath} alt="GMP Plastics" /></a>
  ) : (
    <a className="brand" href="#home" aria-label="GMP Plastics home">
      <span className="brand-globe" aria-hidden="true">G</span>
      <span className="brand-words"><b>GMP</b><small>Plastics</small></span>
    </a>
  )
}

function ProductVisual({ product }) {
  const tones = {
    ball: { main: '#53b8e9', light: '#d7f3ff', accent: '#df382e' },
    mango: { main: '#f4a82d', light: '#fff0c6', accent: '#168b65' },
    strawberry: { main: '#e84a51', light: '#ffe0df', accent: '#197955' },
    matka: { main: '#c96742', light: '#f7dfd2', accent: '#8b0236' },
    custom: { main: '#1488c1', light: '#d8f0fb', accent: '#d92920' },
    curd: { main: '#f5f5ef', light: '#ffffff', accent: '#007fc3' },
    spoon: { main: '#78c8d7', light: '#dff6f7', accent: '#8b0236' },
    'wooden-spoon': { main: '#c58a4f', light: '#e8c493', accent: '#946035' },
    packaging: { main: '#93c5df', light: '#e6f5fc', accent: '#df382e' },
  }
  const tone = tones[product.visual]
  if (product.visual === 'wooden-spoon') {
    return <svg viewBox="0 0 280 220" role="img" aria-label={`${product.name} illustration`} className="product-illustration"><ellipse cx="140" cy="185" rx="70" ry="11" fill="#3a0118" opacity=".09" /><g transform="rotate(-18 140 110)"><path d="M140 24c-24 0-39 17-39 39 0 18 13 30 29 37l-4 87c0 8 6 14 14 14s14-6 14-14l-4-87c16-7 29-19 29-37 0-22-15-39-39-39Z" fill={tone.main} stroke={tone.accent} strokeWidth="3"/><path d="M119 60c2-13 10-21 21-23m-5 59 1 83" fill="none" stroke={tone.light} strokeWidth="4" strokeLinecap="round" opacity=".75"/></g></svg>
  }
  if (product.visual === 'spoon') {
    return <svg viewBox="0 0 280 220" role="img" aria-label={`${product.name} illustration`} className="product-illustration"><ellipse cx="140" cy="183" rx="77" ry="13" fill="#3a0118" opacity=".09" /><path d="M137 151 91 70c-9-16 1-36 19-38 19-3 31 15 25 31l-30 85c-2 6-1 8 3 7l28-7c4-1 5 2 1 5Z" fill={tone.main} stroke="#8b0236" strokeOpacity=".14" strokeWidth="3" /><path d="M128 150 181 53c8-15 28-14 35 1 5 11 0 24-12 30l-69 73c-4 4-3 8 2 7l28-5c5-1 5 3 0 6Z" fill={tone.accent} opacity=".88" /></svg>
  }
  const isRound = product.visual === 'ball'
  const isFruit = product.visual === 'mango' || product.visual === 'strawberry'
  const isMatka = product.visual === 'matka'
  const isWide = product.visual === 'packaging' || product.visual === 'curd'
  return (
    <svg viewBox="0 0 280 220" role="img" aria-label={`${product.name} illustration`} className={`product-illustration illustration-${product.visual}`}>
      <ellipse cx="140" cy="184" rx="83" ry="13" fill="#3a0118" opacity=".09" />
      <circle cx="222" cy="53" r="28" fill={tone.light} opacity=".14" />
      <path d="M39 157c19-21 41-27 62-18m74 12c16-17 32-22 50-17" fill="none" stroke={tone.accent} strokeWidth="2" opacity=".22" />
      {isRound ? <><path d="M81 92c0-32 26-58 59-58s59 26 59 58v13H81Z" fill={tone.main} /><path d="M70 104h140l-13 59c-2 8-9 14-18 14h-78c-9 0-16-6-18-14Z" fill="#fff" stroke="#8b0236" strokeOpacity=".18" strokeWidth="3"/><path d="M77 118h126l-6 31H84Z" fill={tone.light}/><path d="M83 163h114" stroke={tone.main} strokeWidth="6" strokeLinecap="round"/></> : null}
      {isFruit && product.visual === 'mango' ? <><path d="M141 40c-37-11-74 13-77 51-3 40 39 83 74 83 33 0 72-42 72-78 0-31-30-51-69-56Z" fill={tone.main} stroke="#d1841c" strokeWidth="3"/><path d="M136 40c0-15 9-24 23-29m-20 28c16-10 30-9 41-1-14 5-26 5-41 1Z" fill={tone.accent} stroke="#116d50" strokeWidth="2"/><path d="M97 88c5-15 16-23 28-27" fill="none" stroke="#fff4cb" strokeWidth="6" strokeLinecap="round" opacity=".65"/></> : null}
      {isFruit && product.visual === 'strawberry' ? <><path d="M140 49c-13-21-39-23-51-7-13 18-2 44 3 63 11 40 37 71 48 71s37-31 48-71c5-19 16-45 3-63-12-16-38-14-51 7Z" fill={tone.main} stroke="#cc303c" strokeWidth="3"/><path d="M140 48c-10-17-30-17-39-6 12 0 22 6 31 16-5-18 7-28 19-30-3 8-6 14-11 20 13-11 26-12 39-5-14 0-24 8-31 18" fill={tone.accent}/><g fill="#ffd682"><ellipse cx="116" cy="83" rx="2" ry="4"/><ellipse cx="158" cy="81" rx="2" ry="4"/><ellipse cx="103" cy="117" rx="2" ry="4"/><ellipse cx="139" cy="111" rx="2" ry="4"/><ellipse cx="175" cy="116" rx="2" ry="4"/><ellipse cx="122" cy="148" rx="2" ry="4"/><ellipse cx="157" cy="148" rx="2" ry="4"/></g></> : null}
      {isMatka ? <><path d="M93 64c5-18 18-28 47-28s42 10 47 28l-10 100c-1 11-11 19-22 19h-30c-11 0-21-8-22-19Z" fill={tone.main} stroke="#a64b32" strokeWidth="3"/><ellipse cx="140" cy="64" rx="47" ry="14" fill="#ffe4d5" stroke="#a64b32" strokeWidth="3"/><ellipse cx="140" cy="65" rx="35" ry="8" fill="#5d322e"/><path d="M104 101h72m-69 28h63m-56 27h49" stroke="#f4c6ac" strokeWidth="4" strokeLinecap="round" opacity=".8"/></> : null}
      {product.visual === 'custom' ? <><path d="M82 94h116l-10 69c-1 8-8 14-16 14h-64c-8 0-15-6-16-14Z" fill={tone.main} stroke="#8b0236" strokeOpacity=".18" strokeWidth="3"/><path d="M73 83c0-8 6-14 14-14h106c8 0 14 6 14 14v13H73Z" fill="#fff" stroke="#8b0236" strokeOpacity=".2" strokeWidth="3"/><path d="m128 110 8 16 18 3-13 12 3 18-16-9-16 9 3-18-13-12 18-3Z" fill={tone.light}/><path d="M95 156h90" stroke="#fff" strokeWidth="4" opacity=".8"/></> : null}
      {isWide ? <><path d="M75 82h130l-9 83c-1 9-9 15-18 15h-76c-9 0-17-6-18-15Z" fill={tone.main} stroke="#8b0236" strokeOpacity=".18" strokeWidth="3"/><path d="M67 76c0-8 7-15 15-15h116c8 0 15 7 15 15v13H67Z" fill="#fff" stroke="#8b0236" strokeOpacity=".2" strokeWidth="3"/><path d="M82 110h116" stroke={tone.accent} strokeWidth="5" opacity=".8"/><path d="M91 129h99m-94 14h89" stroke="#8b0236" strokeOpacity=".18" strokeWidth="3" strokeLinecap="round"/><circle cx="140" cy="151" r="9" fill={tone.light}/></> : null}
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 30)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const links = [['About', '#about'], ['Products', '#products'], ['Custom moulds', '#custom'], ['Capabilities', '#capabilities'], ['Why GMP', '#why-gmp'], ['Contact', '#contact']]
  return (
    <header className={`site-header${compact ? ' is-compact' : ''}`}>
      <div className="header-inner">
        <BrandMark />
        <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          {links.map(([name, href]) => <a key={href} href={href} onClick={closeMenu}>{name}</a>)}
          <a className="nav-mobile-quote" href="#contact" onClick={closeMenu}>Get a quote <ArrowRight size={15} /></a>
        </nav>
        <a className="button button-light header-quote" href="#contact">Get a quote <ArrowRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function HeroVideo() {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(true)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setPlaying(false)
    }
  }, [])
  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) { void video.play(); setPlaying(true) } else { video.pause(); setPlaying(false) }
  }
  return (
    <div className="hero-media">
      <div className="hero-video-frame">
        <video ref={ref} className="hero-video" src={heroVideoPath} poster={heroPosterPath} autoPlay muted loop playsInline preload="auto" aria-label="Plastic ice cream cups floating against a crimson background" />
        <button className="video-toggle" onClick={toggle} aria-label={playing ? 'Pause background video' : 'Play background video'}>
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false)
  const href = waLink(`${productMessage} I am interested in ${product.name}.`)
  return (
    <article className="product-card">
      <a className={`product-visual${product.image && !imageFailed ? ' has-image' : ''}`} href={href} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.name}`}>
        {product.image && !imageFailed ? <img src={product.image} alt={product.name} loading="lazy" onError={() => setImageFailed(true)} /> : <ProductVisual product={product} />}
      </a>
      <div className="product-card-copy">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a className="text-link" href={href} target="_blank" rel="noreferrer">Enquire now <ArrowRight size={16} /></a>
      </div>
    </article>
  )
}

function AboutVisual() {
  return (
    <div className="about-visual reveal">
      <div className="about-photo-frame">
        <img className="about-image" src={aboutImagePath} alt="GMP Plastics manufacturing unit with production equipment and packaged products" />
      </div>
      <div className="about-note"><Sparkles size={20} /><span>Ideas take shape <b>through collaboration.</b></span></div>
    </div>
  )
}

function ContactForm() {
  const [custom, setCustom] = useState('No')
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const mobile = String(data.get('mobile') ?? '').replace(/[\s()-]/g, '')
    if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(mobile)) {
      setMessage('Enter a valid Indian mobile number to continue.')
      return
    }
    const enquiry = [
      'Hello GMP Plastics, I would like to discuss a requirement.',
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      `Mobile: ${data.get('mobile')}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Requirement: ${data.get('requirement')}`,
      `Quantity: ${data.get('quantity') || 'Not provided'}`,
      `Custom design: ${custom}`,
      `Message: ${data.get('message')}`,
    ].join('\n')
    window.location.assign(waLink(enquiry))
  }
  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading"><h3>Tell us what you need.</h3></div>
      <div className="form-grid">
        <label>Name <span>*</span><input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label>Company name<input name="company" autoComplete="organization" placeholder="Business name" /></label>
        <label>Mobile number <span>*</span><input name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 00000 00000" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" /></label>
        <label>Product requirement <span>*</span><select name="requirement" defaultValue="" required><option value="" disabled>Select a product or requirement</option>{products.map((product) => <option key={product.id}>{product.name}</option>)}<option>Other plastic packaging</option></select></label>
        <label>Estimated quantity<input name="quantity" placeholder="e.g. 10,000 pieces" /></label>
        <fieldset className="custom-field"><legend>Custom design?</legend><div className="radio-row">{['Yes', 'No'].map((option) => <label className={`radio-option${custom === option ? ' selected' : ''}`} key={option}><input type="radio" name="custom" value={option} checked={custom === option} onChange={() => setCustom(option)} />{option}</label>)}</div></fieldset>
        <label className="message-field">Message <span>*</span><textarea name="message" rows={4} placeholder="Share the product, dimensions, design or questions you have in mind." required /></label>
      </div>
      <button className="button button-crimson submit-button" type="submit">Send enquiry on WhatsApp <Send size={16} /></button>
      <p className="form-note">Required fields are marked *. Submitting opens WhatsApp with your enquiry details ready to send. This website does not store or submit your information to a server.</p>
    </form>
  )
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProducts = useMemo(() => activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory), [activeCategory])

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [activeCategory])

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">Plastic packaging, shaped around your product</p>
              <h1>Plastic packaging solutions for the ice cream &amp; food industry.</h1>
              <p className="hero-description">From standard products to custom designs, GMP Plastics manufactures cups and containers for businesses with ideas to bring to life.</p>
              <div className="hero-actions">
                <a href="#products" className="button button-light">Explore products <ArrowDownRight size={17} /></a>
                <a href="#custom" className="button button-ghost">Request a custom design <ArrowRight size={16} /></a>
              </div>
              <a className="hero-whatsapp" href={waLink(productMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Talk to us on WhatsApp <span>93454 29389</span></a>
            </div>
            <HeroVideo />
          </div>
        </section>

        <section className="value-strip" id="value-strip" aria-label="GMP Plastics strengths">
          <div className="container value-grid">{valueProps.map(({ icon: Icon, title, text }) => <article className="value-item" key={title}><span className="value-icon"><Icon size={21} strokeWidth={1.7} /></span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-layout">
            <AboutVisual />
            <div className="about-copy reveal">
              <h2>Packaging that makes the first impression count.</h2>
              <p>GMP Plastics is a plastic manufacturing company specializing in high-quality plastic cups and containers for the ice cream and food industry.</p>
              <p>We manufacture ice cream ball cups, mango-shaped cups, strawberry-shaped cups and matka kulfi cups, along with customized ice cream cups in a variety of shapes and designs.</p>
              <div className="about-highlight"><ClipboardCheck size={22} /><p><b>Custom mould development</b> can be explored around your requirements, subject to design feasibility, technical requirements and production suitability.</p></div>
              <p>Our focus is on product quality, innovative designs, customization, reliable manufacturing and customer satisfaction.</p>
              <a href="#capabilities" className="text-link">Get to know our capabilities <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="products-section section-pad" id="products">
          <div className="container">
            <div className="section-heading reveal"><h2>Designed to catch the eye. Made for the serve.</h2><p>Distinctive packaging for frozen desserts and food products, with options to discuss around your requirements.</p></div>
            <div className="product-toolbar"><span className="product-count">{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</span><div className="filter-list" role="group" aria-label="Filter products by category">{categories.map((category) => <button className={`filter-button${activeCategory === category ? ' active' : ''}`} key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>)}</div></div>
            <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
            <div className="catalogue-note"><span className="catalogue-mark"><IceCreamBowl size={20} /></span><span>Looking for something specific? <b>Share your product or packaging requirement with us.</b></span><a href={waLink(productMessage)} target="_blank" rel="noreferrer">Ask about a product <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="custom-section section-pad" id="custom">
          <div className="container custom-inner">
            <div className="custom-copy reveal">
              <h2>Have a unique product idea?</h2>
              <p className="custom-manifesto">Your idea. Your design. Our manufacturing.</p>
              <p className="custom-description">Have an ice cream cup or plastic packaging design that is different from standard market products? Share your concept with GMP Plastics. We can evaluate it and explore customer-specific mould development based on technical feasibility, dimensions, production requirements and commercial considerations.</p>
              <div className="custom-actions"><a className="button button-light" href={waLink(mouldMessage)} target="_blank" rel="noreferrer">Discuss your custom design <ArrowRight size={16} /></a><a className="custom-wa-link" href={waLink(mouldMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Send your requirement on WhatsApp</a></div>
              <small className="feasibility-note">All custom development is subject to technical feasibility and production requirements.</small>
            </div>
            <ol className="process-column reveal">{process.map((step) => <li className="process-step" key={step.n}><span className="process-marker">{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="capabilities-section section-pad" id="capabilities">
          <div className="container capability-layout">
            <div className="capability-intro reveal"><h2>From product thought to practical packaging.</h2><p>GMP Plastics is focused on plastic packaging solutions for ice cream and food businesses, including standard products and customer-specific development.</p><a className="text-link" href="#contact">Discuss a requirement <ArrowRight size={16} /></a></div>
            <ul className="capability-list reveal">{capabilities.map((item) => <li className="capability-row" key={item}><span className="check"><Check size={15} strokeWidth={2.4} /></span><h3>{item}</h3></li>)}</ul>
          </div>
          <div className="container story-line"><p className="story-line-label">The GMP approach</p><ol className="story-steps">{journey.map((title, i) => <li className="story-step" key={title}><span>{i + 1}</span><b>{title}</b>{i < journey.length - 1 && <ArrowRight size={16} aria-hidden="true" />}</li>)}</ol></div>
        </section>

        <section className="hsn-section section-pad" id="hsn-codes">
          <div className="container">
            <div className="section-heading reveal">
              <h2>Deals in HSN Code</h2>
              <p>HSN codes associated with mould bases and moulds.</p>
            </div>
            <div className="hsn-table-wrap reveal">
              <table className="hsn-table">
                <thead><tr><th scope="col">HSN Code</th><th scope="col">HSN Description</th></tr></thead>
                <tbody>{hsnCodes.map(({ code, description }) => <tr key={code}><th scope="row">{code}</th><td>{description}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="why-section section-pad" id="why-gmp"><div className="container"><div className="section-heading reveal"><h2>Good ideas deserve good partners.</h2></div><div className="advantages-grid">{advantages.map(({ title, text, icon: Icon }) => <article className="advantage-card" key={title}><span className="advantage-icon"><Icon size={22} strokeWidth={1.7} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="contact-section section-pad" id="contact"><div className="container contact-layout"><div className="contact-copy reveal"><h2>Let’s discuss your requirement.</h2><p>Talk directly with G. Masilamani about products, custom designs and packaging requirements.</p><div className="contact-person"><div className="contact-avatar">GM</div><div><b>G. Masilamani</b><span>GMP Plastics</span></div></div><div className="contact-methods"><a href="tel:+919345429389"><span className="contact-method-icon"><Phone size={18} /></span><span><small>Call / WhatsApp</small><b>+91 93454 29389</b></span><ArrowRight size={17} /></a><a href="tel:+916383552556"><span className="contact-method-icon"><Phone size={18} /></span><span><small>Alternate number</small><b>+91 63835 52556</b></span><ArrowRight size={17} /></a><a href="mailto:manigmpplastics@gmail.com"><span className="contact-method-icon"><Send size={17} /></span><span><small>Email</small><b>manigmpplastics@gmail.com</b></span><ArrowRight size={17} /></a><a href="https://www.google.com/maps/search/?api=1&query=No.+113-114%2C+Vangnuchavur+Road%2C+Opp.+Pondit+Kurumbapet%2C+Puducherry+605009%2C+India" target="_blank" rel="noreferrer"><span className="contact-method-icon"><MapPin size={18} /></span><span><small>Visit / map</small><b>No. 113–114, Vangnuchavur Road,<br />Opp. Pondit Kurumbapet, Puducherry 605009</b></span><ArrowRight size={17} /></a></div></div><div className="form-wrap reveal"><ContactForm /></div></div></section>
      </main>
      <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><BrandMark /><p>Plastic manufacturing solutions<br />for the ice cream and food industry.</p><a href={waLink(productMessage)} className="footer-whatsapp" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Talk with GMP <ArrowRight size={15} /></a></div><div className="footer-links"><h2>Explore</h2><a href="#home">Home</a><a href="#about">About</a><a href="#products">Products</a><a href="#custom">Custom moulds</a><a href="#capabilities">Capabilities</a><a href="#contact">Contact</a></div><div className="footer-contact"><h2>Get in touch</h2><b>G. Masilamani</b><a className="footer-contact-item" href="tel:+919345429389"><Phone size={16} aria-hidden="true" />93454 29389</a><a className="footer-contact-item" href="tel:+916383552556"><Phone size={16} aria-hidden="true" />63835 52556</a><a className="footer-contact-item" href="mailto:manigmpplastics@gmail.com"><Mail size={16} aria-hidden="true" />manigmpplastics@gmail.com</a><a className="footer-contact-item" href="https://www.google.com/maps/search/?api=1&query=No.+113-114%2C+Vangnuchavur+Road%2C+Opp.+Pondit+Kurumbapet%2C+Puducherry+605009%2C+India" target="_blank" rel="noreferrer"><MapPin size={16} aria-hidden="true" /><span>No. 113–114, Vangnuchavur Road,<br />Opp. Pondit Kurumbapet,<br />Puducherry – 605009, India.</span></a></div><div className="footer-cta"><h2>Have an idea?</h2><a href="#custom">Let’s explore what’s possible. <ArrowDownRight size={22} /></a></div></div><div className="footer-bottom"><span>© 2026 GMP Plastics. All rights reserved.</span><a href="#home">Back to top <ChevronDown size={15} /></a></div></div></footer>
      <a className="floating-whatsapp" href={waLink(productMessage)} target="_blank" rel="noreferrer" aria-label="Chat with GMP Plastics on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a>
      <div className="mobile-action-bar"><a href={waLink(productMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a><a href="tel:+919345429389"><Phone size={17} /> Call</a><a href="#contact"><Send size={16} /> Enquire</a></div>
    </>
  )
}
