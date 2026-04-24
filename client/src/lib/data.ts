// ============================================================
// DESIGN: Carbon Blueprint — Technical Dark Luxury
// Data layer for Modular Finder
// ============================================================

export interface ModularCompany {
  id: number;
  name: string;
  location: string;
  specialty: string;
  priceRange: string;
  website: string;
  featured?: boolean;
}

export const modularCompanies: ModularCompany[] = [
  { id: 1, name: "Boxabl", location: "Las Vegas, NV", specialty: "Foldable modular homes, Casita line", priceRange: "$50K - $150K", website: "https://www.boxabl.com", featured: true },
  { id: 2, name: "Clayton Homes", location: "Maryville, TN", specialty: "Largest US manufacturer, full range", priceRange: "$80K - $350K", website: "https://www.claytonhomes.com", featured: true },
  { id: 3, name: "Champion Home Builders", location: "Troy, MI", specialty: "Nationwide modular & manufactured", priceRange: "$70K - $300K", website: "https://www.championhomes.com", featured: true },
  { id: 4, name: "Cavco Industries", location: "Phoenix, AZ", specialty: "Affordable modular housing", priceRange: "$60K - $250K", website: "https://www.cavco.com" },
  { id: 5, name: "Dvele", location: "San Diego, CA", specialty: "Net-zero modern prefab homes", priceRange: "$200K - $600K", website: "https://www.dvele.com", featured: true },
  { id: 6, name: "Plant Prefab", location: "Rialto, CA", specialty: "Custom panelized & modular", priceRange: "$250K - $800K", website: "https://www.plantprefab.com" },
  { id: 7, name: "Ritz-Craft", location: "Mifflinburg, PA", specialty: "Leading modular manufacturer", priceRange: "$100K - $400K", website: "https://www.ritz-craft.com", featured: true },
  { id: 8, name: "Affinity Modular", location: "Various, US", specialty: "Premium modular homes (Vantem)", priceRange: "$150K - $500K", website: "https://affinitymodular.com" },
  { id: 9, name: "US Modular Inc.", location: "Chino, CA", specialty: "Luxury modular homes & ADUs", priceRange: "$150K - $600K", website: "https://www.usmodularinc.com" },
  { id: 10, name: "Guerdon Modular", location: "Boise, ID", specialty: "Multi-family & commercial modular", priceRange: "$100K - $500K", website: "https://www.guerdon.com" },
  { id: 11, name: "Fleetwood Homes", location: "Nampa, ID", specialty: "Established modular manufacturer", priceRange: "$70K - $250K", website: "https://www.fleetwoodhomes.com" },
  { id: 12, name: "Skyline Homes", location: "Elkhart, IN", specialty: "America's Most Trusted builder", priceRange: "$60K - $200K", website: "https://www.skylinehomes.com", featured: true },
  { id: 13, name: "Dynamic Homes", location: "Detroit Lakes, MN", specialty: "Personalized modular homes", priceRange: "$80K - $300K", website: "https://dynamichomes.com" },
  { id: 14, name: "KBS Builders", location: "South Paris, ME", specialty: "New England premier modular", priceRange: "$100K - $400K", website: "https://www.kbsbuildersinc.com" },
  { id: 15, name: "BonnaVilla", location: "Aurora, NE", specialty: "Chief Industries modular homes", priceRange: "$80K - $250K", website: "https://www.bonnavilla.com" },
  { id: 16, name: "Franklin Homes", location: "Russellville, AL", specialty: "Quality modular construction", priceRange: "$60K - $200K", website: "https://www.franklinhomes.net" },
  { id: 17, name: "Deer Valley Homebuilders", location: "Guin, AL", specialty: "Premium modular homes", priceRange: "$70K - $250K", website: "https://www.deervalleyhomebuilders.com" },
  { id: 18, name: "Sunshine Homes", location: "Red Bay, AL", specialty: "Southern modular excellence", priceRange: "$60K - $200K", website: "https://www.sunshinehomes-inc.com" },
  { id: 19, name: "KIT Custom Homebuilders", location: "Caldwell, ID", specialty: "Custom modular solutions", priceRange: "$100K - $350K", website: "https://www.kitcustomhomebuilders.com" },
  { id: 20, name: "Mesocore", location: "Various, US", specialty: "Luxury-affordable modular", priceRange: "$120K - $400K", website: "https://www.mesocore.com" },
  { id: 21, name: "Modular Building Systems", location: "Middleburg, PA", specialty: "Commercial & residential modular", priceRange: "$80K - $300K", website: "https://www.modularbuilding.com" },
  { id: 22, name: "Apex Homes", location: "Ephrata, PA", specialty: "Quality modular construction", priceRange: "$100K - $350K", website: "https://www.apexhomespa.com" },
  { id: 23, name: "Blue Ridge Log Cabins", location: "Campobello, SC", specialty: "Modular log cabin homes", priceRange: "$80K - $300K", website: "https://www.blueridgelogcabins.com" },
  { id: 24, name: "Colony Factory Crafted Homes", location: "Various, US", specialty: "Factory-crafted modular homes", priceRange: "$70K - $250K", website: "https://www.colonyhomes.com" },
  { id: 25, name: "Adventure Homes", location: "Garrett, IN", specialty: "Innovative modular designs", priceRange: "$60K - $200K", website: "https://www.adventurehomes.net" },
  { id: 26, name: "American Homestar", location: "Various, US", specialty: "Affordable modular housing", priceRange: "$50K - $180K", website: "https://www.americanhomestar.com" },
  { id: 27, name: "Commodore Homes", location: "Various, IN", specialty: "Quality modular manufacturing", priceRange: "$70K - $250K", website: "https://www.commodorehomes.com" },
  { id: 28, name: "Green Manufactured Homes", location: "Various, US", specialty: "Eco-focused modular homes", priceRange: "$80K - $300K", website: "https://www.greenmanufacturedhomes.com" },
  { id: 29, name: "Timber Creek Homes", location: "Various, US", specialty: "Timber-frame modular homes", priceRange: "$90K - $350K", website: "https://www.timbercreekhomes.com" },
  { id: 30, name: "Impresa Modular", location: "Various, US", specialty: "Nationwide modular network", priceRange: "$100K - $400K", website: "https://www.impresamodular.com" },
];

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const heroStats: Stat[] = [
  { value: "30", label: "Top Modular Builders", suffix: "+" },
  { value: "50", label: "States Covered" },
  { value: "65", label: "Cost Savings vs Site-Built", suffix: "%" },
  { value: "19", label: "Days to Build 57 Floors" },
];

export const comparisonData = [
  { category: "Average Cost", modular: "10-30% Less", siteBuild: "Baseline", advantage: "modular" },
  { category: "Build Time", modular: "30-50% Faster", siteBuild: "6-12 Months", advantage: "modular" },
  { category: "Quality Control", modular: "Factory Precision", siteBuild: "Weather Dependent", advantage: "modular" },
  { category: "Waste Generated", modular: "Up to 90% Less", siteBuild: "High Waste", advantage: "modular" },
  { category: "Building Codes", modular: "State/Local Codes", siteBuild: "State/Local Codes", advantage: "tie" },
  { category: "Customization", modular: "Highly Customizable", siteBuild: "Fully Custom", advantage: "tie" },
  { category: "Appreciation", modular: "Same as Site-Built", siteBuild: "Standard", advantage: "tie" },
  { category: "Structural Strength", modular: "Bolted + Nailed", siteBuild: "Nailed Only", advantage: "modular" },
  { category: "Carbon Emissions", modular: "Significantly Lower", siteBuild: "Higher", advantage: "modular" },
  { category: "Weather Delays", modular: "None (Factory Built)", siteBuild: "Common", advantage: "modular" },
];

export const mythBusters = [
  {
    myth: "Modular homes are the same as mobile homes or trailers",
    reality: "Modular homes are built to the SAME state and local building codes as traditional site-built homes. They are placed on permanent foundations and are structurally identical to conventional construction. Mobile homes (pre-1976) and manufactured homes follow different HUD federal codes and sit on a chassis.",
  },
  {
    myth: "Modular homes don't appreciate in value",
    reality: "Modular homes appreciate at the same rate as comparable site-built homes in the same area. They receive the same appraisals, qualify for the same mortgages, and are assessed identically by county tax offices.",
  },
  {
    myth: "Modular homes look cheap or cookie-cutter",
    reality: "Modern modular homes are highly customizable with luxury finishes, custom floor plans, and architectural details indistinguishable from site-built homes. Companies like Dvele and Plant Prefab build homes exceeding $500K with premium materials.",
  },
  {
    myth: "You can't get a mortgage for a modular home",
    reality: "Modular homes qualify for all the same financing options as site-built homes: conventional mortgages, FHA loans, VA loans, and USDA loans. Banks treat them identically because they meet the same building codes.",
  },
  {
    myth: "Modular homes aren't as strong or durable",
    reality: "Modular homes are actually STRONGER than site-built homes. They must withstand transportation on highways, so they use both bolts AND nails (site-built uses only nails). Factory quality control ensures every joint meets specifications.",
  },
];

export const globalCaseStudies = [
  {
    title: "China: 57-Story Skyscraper in 19 Days",
    location: "Changsha, China",
    company: "Broad Sustainable Building (BSB)",
    description: "The 'Mini Sky City' tower — a 57-story, 180,000 sq meter mixed-use building with 800 apartments and office space for 4,000 people — was assembled in just 19 working days using modular 'LEGO-like' prefabricated pieces. Three floors per day became China's new construction standard.",
    stat: "19 Days",
    statLabel: "57 Stories Built",
  },
  {
    title: "Saudi Arabia: NEOM Mega-City",
    location: "NEOM, Saudi Arabia",
    company: "NEOM / Dorce",
    description: "The NEOM mega-project is leveraging modular construction at unprecedented scale. Dorce delivered prefabricated modular solutions for a 10,000-person living city, with 1,364 modules housing 33,000+ construction staff. The project showcases robotics, automation, and advanced material science.",
    stat: "33,000+",
    statLabel: "Staff Housed",
  },
  {
    title: "Singapore: LEGO-Brick Apartments",
    location: "Singapore",
    company: "Singapore HDB",
    description: "Singapore has unveiled a revolutionary modular apartment system designed like LEGO bricks — units that can be unclipped, rearranged, or replaced. This reconfigurable, sustainable housing solution represents the future of flexible urban living.",
    stat: "100%",
    statLabel: "Reconfigurable",
  },
  {
    title: "Japan: 72-Hour Disaster Response",
    location: "Japan",
    company: "Various Prefab Manufacturers",
    description: "Following a major earthquake in 2024, Japanese prefab housing companies deployed 1,000 emergency shelter units within just 72 hours. This demonstrates the unmatched speed and disaster resilience that modular construction provides.",
    stat: "72 Hrs",
    statLabel: "1,000 Units Deployed",
  },
];

export const whyModularFacts = [
  {
    icon: "DollarSign",
    title: "Save 10-65% on Costs",
    description: "Factory bulk purchasing, reduced labor costs, and zero weather delays translate to massive savings. Manufactured homes sold for 66% less than single-family homes in 2024.",
  },
  {
    icon: "Clock",
    title: "30-50% Faster Build",
    description: "While site work and foundation are prepared, the home is simultaneously being built in a factory. Total construction time is cut by a third to half.",
  },
  {
    icon: "Shield",
    title: "Superior Quality Control",
    description: "Every component is built in a climate-controlled factory with rigorous inspections. No rain-soaked lumber, no frozen concrete, no compromised materials.",
  },
  {
    icon: "Leaf",
    title: "90% Less Waste",
    description: "Factory construction generates up to 90% less waste than site-built. Materials are precisely cut, excess is recycled, and the carbon footprint is significantly lower.",
  },
  {
    icon: "Zap",
    title: "Energy Efficient",
    description: "Tight factory tolerances mean better insulation and air sealing. Many modular homes achieve net-zero energy status, drastically reducing utility bills.",
  },
  {
    icon: "TrendingUp",
    title: "$207B Market by 2033",
    description: "The global modular construction market is projected to reach $207.82 billion by 2033, growing at 8.2% CAGR. This isn't a trend — it's the future of construction.",
  },
];

export const housingCrisisStats = [
  { value: "74.9%", label: "of US households cannot afford a median-priced new home" },
  { value: "7.1M", label: "home shortage for extremely low-income renters" },
  { value: "22.6M", label: "renter households are cost-burdened" },
  { value: "$422K+", label: "median single-family home price" },
];
