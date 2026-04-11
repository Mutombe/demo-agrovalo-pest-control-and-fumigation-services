export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Agrovalo Pest Control", legalName: "Agrovalo Pest Control", tagline: "Protecting Your Space. Preserving Your Peace.",
    description: "Protecting Your Space. Preserving Your Peace.",
    phone: "+263 71 811 0076", phoneRaw: "+263718110076", whatsappNumber: "263718110076", email: "info@agrovalo.co.zw",
    address: "941 Hazel Rd, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.8, ratingRounded: 5, reviewCount: 31, established: "2016", yearsExperience: "8+", projectsCompleted: "1500+", employees: "15+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "agrovalo-pest-control-and-fumigation-services-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Agrovalo", logoLine2: "Pest Control" },
  hero: {
    badge: "Harare's Trusted Pest Control & Fumigation Experts",
    titleParts: [{ text: "PROTECTING " }, { text: "YOUR SPACE", highlight: true }, { text: " PRESERVING YOUR PEACE." }],
    subtitle: "Protecting Your Space.",
    ctaPrimary: "Book an Inspection", ctaSecondary: "View Our Services", trustBadge: "1,500+ Properties",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", alt: "Agrovalo Pest Control - professional service" },
      { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85", alt: "Agrovalo Pest Control - professional service" },
      { url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", alt: "Agrovalo Pest Control - professional service" }
    ],
  },
  stats: [
    { number: "1500+", label: "Properties Treated" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "48hr", label: "Response Time" }
  ],
  servicesPreview: [
    { title: "Pest Control", desc: "Comprehensive pest management for cockroaches, ants, spiders, and other common household and commercial pests.", icon: "ShieldCheck" },
    { title: "Fumigation Services", desc: "Industrial-grade fumigation for warehouses, stores, and agricultural facilities using approved chemicals.", icon: "Star" },
    { title: "Termite Treatment", desc: "Pre-construction and post-construction termite barriers plus active colony elimination.", icon: "Target" },
    { title: "Rodent Control", desc: "Strategic baiting and exclusion programs to eliminate rats and mice from your property permanently.", icon: "Lightbulb" },
    { title: "Disinfection & Sanitisation", desc: "Hospital-grade disinfection for offices, schools, and public spaces using WHO-approved solutions.", icon: "Rocket" },
    { title: "Weed & Vegetation Control", desc: "Chemical and mechanical weed management for commercial properties and agricultural land.", icon: "Buildings" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Pest Control", slug: "pest-control", desc: "Comprehensive pest management for cockroaches, ants, spiders, and other common household and commercial pests. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80" },
      { title: "Fumigation Services", slug: "fumigation-services", desc: "Industrial-grade fumigation for warehouses, stores, and agricultural facilities using approved chemicals. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
      { title: "Termite Treatment", slug: "termite-treatment", desc: "Pre-construction and post-construction termite barriers plus active colony elimination. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80" },
      { title: "Rodent Control", slug: "rodent-control", desc: "Strategic baiting and exclusion programs to eliminate rats and mice from your property permanently. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
      { title: "Disinfection & Sanitisation", slug: "disinfection-sanitisation", desc: "Hospital-grade disinfection for offices, schools, and public spaces using WHO-approved solutions. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80" },
      { title: "Weed & Vegetation Control", slug: "weed-vegetation-control", desc: "Chemical and mechanical weed management for commercial properties and agricultural land. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "Hotel Fumigation", slug: "hotel--fumigation", category: "Fumigation", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", images: ["https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80"] },
      { title: "Office Pest Control", slug: "office--pest--control", category: "Pest Control", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"] },
      { title: "Warehouse Termite Treatment", slug: "warehouse--termite--treatment", category: "Termite", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", images: ["https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80"] },
      { title: "Restaurant Rodent Control", slug: "restaurant--rodent--control", category: "Rodent", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"] },
      { title: "Hospital Disinfection", slug: "hospital--disinfection", category: "Disinfection", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", images: ["https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80"] },
      { title: "Farm Weed Control", slug: "farm--weed--control", category: "Weed Control", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"] },
      { title: "Apartment Bed Bug Treatment", slug: "apartment--bed--bug--treatment", category: "Commercial", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", images: ["https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80"] },
      { title: "School Mosquito Control", slug: "school--mosquito--control", category: "Residential", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from Agrovalo Pest Control. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using Agrovalo Pest Control for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. Agrovalo Pest Control sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at Agrovalo Pest Control went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred Agrovalo Pest Control to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. Agrovalo Pest Control sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["Agrovalo Pest Control has been protecting Harare's homes and businesses since 2016. We use only approved, environmentally responsible treatment methods.", "Over 1,500 properties treated with a 4.8 Google rating. From termite barriers to industrial fumigation, we eliminate the problem and prevent its return.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Agrovalo", points: [{ title: "Eco-Friendly Solutions", desc: "Approved chemicals that are safe for families, pets, and the environment." },{ title: "Guaranteed Results", desc: "If pests return within our warranty period, so do we -- at no extra cost." },{ title: "48-Hour Response", desc: "Emergency pest situations handled within 48 hours." },{ title: "Certified Technicians", desc: "Professionally trained applicators with health and safety compliance." }] },
  featuredProjects: [{ title: "Hotel Fumigation", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", category: "Fumigation" },{ title: "Office Pest Control", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", category: "Pest Control" },{ title: "Warehouse Termite Treatment", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80", category: "Termite" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "941 Hazel Rd, Harare, Zimbabwe", phone: "+263 71 811 0076", email: "info@agrovalo.co.zw" },
  ] },
  homeCta: {
    title: "PEST PROBLEM? CONSIDER IT SOLVED.", subtitle: "Termites, rodents, cockroaches, bed bugs -- whatever the pest, we have the solution. Fast, effective, guaranteed.",
    ctaPrimary: "Book an Inspection", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Agrovalo! I need pest control services for my property.",
    backgroundImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&fit=crop&q=80",
  },
  footer: { description: "Harare's trusted pest control and fumigation experts since 2016.", copyright: "Agrovalo Pest Control" },
};

export default siteData;
