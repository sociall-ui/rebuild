export const COMPANY = {
  name: "Emparet Building Cleaning",
  short: "EMPARET",
  tagline: "Building Cleaning",
  phoneDisplay: "+974 5548 4233",
  phoneRaw: "+97455484233",
  email: "emparetcleaning@gmail.com",
  address: "Al Mirqab Mall Offices, Floor 1, Office 101, Doha, Qatar",
  addressShort: "Al Mirqab Mall, Doha",
  hours: [
    { day: "Monday – Saturday", time: "8:00 – 22:00" },
    { day: "Sunday", time: "By arrangement" },
    { day: "Emergencies", time: "24 / 7, 365 days" },
  ],
  mapEmbed: "https://www.google.com/maps?q=Al+Mirqab+Mall,+Doha,+Qatar&z=15&output=embed",
};

export const wa = (message: string) =>
  `https://wa.me/97455484233?text=${encodeURIComponent(message)}`;

export const ASSETS = {
  logo: "/images/logo.jpg",
  heroVideo: "https://videos.pexels.com/video-files/6195524/6195524-uhd_3840_2160_25fps.mp4",
  heroPoster:
    "https://images.pexels.com/videos/6195524/pexels-photo-6195524.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
  processTeam:
    "https://images.pexels.com/videos/6195148/pexels-photo-6195148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
  aboutMain:
    "https://images.pexels.com/photos/6195118/pexels-photo-6195118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  aboutSub:
    "https://images.pexels.com/photos/6195115/pexels-photo-6195115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  ctaSkyline:
    "https://images.pexels.com/photos/31405737/pexels-photo-31405737.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

export type Service = {
  id: string;
  cat: "residential" | "commercial";
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  img?: string;
};

const IMG = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;

export const SERVICES: Service[] = [
  /* ---------------- RESIDENTIAL ---------------- */
  {
    id: "home",
    cat: "residential",
    icon: "home",
    title: "Home & Apartment Cleaning",
    desc: "Regular weekly or fortnightly cleaning for apartments and family homes — bedrooms, kitchen, bathrooms, floors and all the little details in between.",
    tags: ["Apartments", "Weekly", "Same crew"],
    img: IMG("7513163"),
  },
  {
    id: "villa",
    cat: "residential",
    icon: "home",
    title: "Villa & Compound Cleaning",
    desc: "Full-villa programmes covering majlis, staircases, terraces, maid rooms and outdoor areas — with a crew sized to your property.",
    tags: ["Villas", "Majlis", "Outdoor"],
    img: IMG("6197109"),
  },
  {
    id: "deep",
    cat: "residential",
    icon: "spray",
    title: "Deep & Move-in / Move-out Cleaning",
    desc: "A top-to-bottom intensive clean for handovers, new tenants and post-renovation — inside cupboards, behind appliances, every hidden corner.",
    tags: ["Handover", "Inspection-ready"],
    img: IMG("6197121"),
  },
  {
    id: "kitchen",
    cat: "residential",
    icon: "sparkle",
    title: "Kitchen & Bathroom Deep Clean",
    desc: "Degreasing, descaling and sanitising of the two hardest rooms in the house — hobs, ovens, tiles, grout and fittings restored properly.",
    tags: ["Degreasing", "Descaling", "Sanitised"],
    img: IMG("6195118"),
  },
  {
    id: "sofa",
    cat: "residential",
    icon: "sofa",
    title: "Sofa, Carpet & Mattress Cleaning",
    desc: "Hot-water extraction and stain treatment for sofas, curtains, carpets and mattresses — removing dust, odours and allergens, not just dirt.",
    tags: ["Upholstery", "Carpets", "Anti-allergen"],
    img: IMG("6195275"),
  },
  {
    id: "windowhome",
    cat: "residential",
    icon: "squeegee",
    title: "Windows, Balconies & Façades",
    desc: "Streak-free glass, tracks, balconies and sliding doors — plus low-rise façade and terrace washing for villas and apartment blocks.",
    tags: ["Glass", "Balconies", "Tracks"],
    img: IMG("39772103"),
  },

  /* ---------------- COMMERCIAL ---------------- */
  {
    id: "office",
    cat: "commercial",
    icon: "building",
    title: "Office & Commercial Cleaning",
    desc: "Daily, weekly or nightly desk-to-floor programmes for offices, business centres and retail — delivered discreetly while your building works.",
    tags: ["Offices", "Lobbies", "Malls"],
    img: IMG("7534210"),
  },
  {
    id: "floor",
    cat: "commercial",
    icon: "sparkle",
    title: "Floor Care & Marble Polishing",
    desc: "Machine scrubbing, hot-water extraction, crystallisation and burnishing that put a mirror finish back on marble, granite, terrazzo and stone.",
    tags: ["Marble", "Granite", "Crystalisation"],
    img: IMG("14011664"),
  },
  {
    id: "facade",
    cat: "commercial",
    icon: "squeegee",
    title: "Window & Façade Cleaning",
    desc: "Certified rope-access and water-fed crews for high-rises, curtain walls and skylights — streak-free glass, safely, at any height.",
    tags: ["High-rise", "Rope access", "Glass"],
    img: IMG("40797270"),
  },
  {
    id: "postcon",
    cat: "commercial",
    icon: "hardhat",
    title: "Post-Construction Cleaning",
    desc: "We strip out the dust, paint marks and residue after fit-out — so your building opens on the day the contractors leave.",
    tags: ["Fit-out", "Dust removal"],
    img: IMG("37121405"),
  },
  {
    id: "industrial",
    cat: "commercial",
    icon: "warehouse",
    title: "Industrial & Warehouse Cleaning",
    desc: "Ride-on scrubbers for warehouses, loading bays, parking levels and production areas — scheduled around your shifts, not against them.",
    tags: ["Warehouses", "Parking", "Ride-on scrub"],
    img: IMG("26795774"),
  },
  {
    id: "contract",
    cat: "commercial",
    icon: "shield",
    title: "24/7 Maintenance Contracts",
    desc: "A named supervisor, live checklists and a daily report. One transparent monthly contract that keeps every floor on standard, every day.",
    tags: ["Monthly", "Supervised", "Reported"],
    img: IMG("36303748"),
  },
];

export const STATS = [
  { value: 350, decimals: 0, suffix: "+", label: "Homes & sites cleaned" },
  { value: 1.2, decimals: 1, suffix: "M+", label: "Sq. ft. cleaned across Doha" },
  { value: 4.9, decimals: 1, suffix: " / 5", label: "Average client rating" },
  { value: 24, decimals: 0, suffix: "/7", label: "Support & emergency response" },
];

export const STEPS = [
  {
    n: "01",
    title: "Send us a quick brief",
    desc: "WhatsApp us your property type, size and what needs cleaning — a villa, an apartment or a whole tower. We reply within 30 minutes, no forms, no waiting.",
    meta: "Avg. response: under 30 min",
  },
  {
    n: "02",
    title: "Free site survey & proposal",
    desc: "A supervisor walks your space, measures every area and sends a transparent, itemised quote. Fixed price. No hidden extras, ever.",
    meta: "Survey & quote: within 24 h",
  },
  {
    n: "03",
    title: "Crews on-site, spotless result",
    desc: "Uniformed, vetted crews arrive on time with industrial equipment and eco-safe chemistry. You get a sign-off checklist when we finish.",
    meta: "Sign-off checklist on completion",
  },
];

export const WHY = [
  { icon: "badge", title: "Trained & vetted crews", desc: "Uniformed, background-checked professionals who follow one standard." },
  { icon: "machine", title: "Industrial-grade equipment", desc: "Ride-on scrubbers, crystalisers and water-fed poles — the real tools." },
  { icon: "leaf", title: "Eco-safe chemistry", desc: "MSDS-compliant, non-toxic products that are safe for every occupant." },
  { icon: "shield", title: "Insured & Qatar-compliant", desc: "Fully documented and compliant with Qatari regulations — for homes and businesses alike." },
  { icon: "bolt", title: "24/7 emergency response", desc: "Spill, damage or event? A crew rolls out day or night, 365 days." },
  { icon: "clipboard", title: "Supervised & reported", desc: "A named supervisor and a daily checklist report you can actually see." },
];

export const TESTIMONIALS = [
  {
    name: "Ahmed Al Mansoori",
    role: "Facility Manager, West Bay Tower",
    service: "Office Contract",
    quote:
      "Their nightly office team is punctual, discreet and thorough. Our lobby and 14th floor have simply never looked this consistent.",
    initials: "AM",
  },
  {
    name: "Mariam Al Sulaiti",
    role: "Villa Owner, Al Waab",
    service: "Villa Deep Clean",
    quote:
      "They cleaned our five-bedroom villa top to bottom in one day — majlis, kitchen, all six bathrooms. The crew was respectful, fast and left everything smelling fresh.",
    initials: "MS",
  },
  {
    name: "Sarah Thompson",
    role: "Office Manager, Al Mirqab Mall",
    service: "Marble & Floor Care",
    quote:
      "Emparet handles our entire floor every week. The marble crystallisation was a game changer — it genuinely shines like glass now.",
    initials: "ST",
  },
  {
    name: "Daniel Okafor",
    role: "Apartment Tenant, The Pearl",
    service: "Move-out Clean",
    quote:
      "Booked them for a move-out clean and got my full deposit back without a single objection. Inside the cupboards and oven were spotless.",
    initials: "DO",
  },
  {
    name: "Rajesh Nair",
    role: "Property Director, The Pearl-Qatar",
    service: "Façade & Windows",
    quote:
      "The rope-access crew was flawless on our curtain wall. Certified, insured and completely safe. This is how high-rise cleaning should work.",
    initials: "RN",
  },
  {
    name: "Fatima Al Kuwari",
    role: "Homemaker, Al Sadd",
    service: "Weekly Home Cleaning",
    quote:
      "Same two ladies every Thursday for a year now. They know our home, they use eco-safe products, and I never have to explain anything twice.",
    initials: "FK",
  },
];

export const AREAS = [
  "West Bay",
  "The Pearl-Qatar",
  "Al Mirqab",
  "Doha Corniche",
  "Lusail",
  "Msheireb Downtown",
  "Al Rayyan",
  "Al Sadd",
  "Al Wakrah",
  "Industrial Area",
  "Airport Free Zone",
  "Al Khor",
];

export const MARQUEE_ITEMS = [
  "Villas & Compounds",
  "Apartments",
  "Office Towers",
  "Shopping Malls",
  "Hotels & Lounges",
  "Warehouses",
  "Clinics & Centres",
  "Parking Levels",
];
