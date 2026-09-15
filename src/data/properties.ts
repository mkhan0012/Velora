export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  images: string[];
  description?: string;
  amenities?: string[];
  featured?: boolean;
  new?: boolean;
}

export const properties: Property[] = [
  {
    id: "villa-no-07",
    title: "Villa No. 07",
    location: "Alibaug, Maharashtra",
    price: "₹8.75 Cr",
    priceValue: 87500000,
    bedrooms: 4,
    bathrooms: 5,
    area: "4,800 sq.ft",
    type: "Villa",
    featured: true,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Designed around light, landscape and privacy. This exceptional coastal villa features a striking brutalist concrete exterior softened by warm timber screens and lush tropical landscaping. The open-plan living areas blur the boundary between indoors and the central courtyard pool.",
    amenities: ["Private Pool", "Courtyard Garden", "Staff Quarters", "Double Garage", "Smart Home System", "Outdoor Kitchen"]
  },
  {
    id: "horizon-penthouse",
    title: "Horizon Penthouse",
    location: "Mumbai",
    price: "₹24.00 Cr",
    priceValue: 240000000,
    bedrooms: 4,
    bathrooms: 5,
    area: "5,200 sq.ft",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Occupying the entire top floor, the Horizon Penthouse offers uninterrupted views of the Arabian Sea. The interior palette of travertine, smoked oak, and brushed bronze creates a quiet, sophisticated atmosphere high above the city.",
    amenities: ["Panoramic Sea Views", "Private Terrace", "Plunge Pool", "Wine Cellar", "Direct Elevator Access", "Concierge"]
  },
  {
    id: "the-glasshouse",
    title: "The Glasshouse",
    location: "Goa",
    price: "₹12.50 Cr",
    priceValue: 125000000,
    bedrooms: 5,
    bathrooms: 6,
    area: "6,200 sq.ft",
    type: "Estate",
    new: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "A masterclass in tropical modernism. The Glasshouse features floor-to-ceiling retractable glass walls that open the entire ground floor to the surrounding forest. Natural stone floors extend from the interior directly into the infinity pool.",
    amenities: ["Infinity Pool", "Forest Views", "Guest Pavilion", "Spa Room", "Chef's Kitchen", "Organic Garden"]
  },
  {
    id: "ridge-estate",
    title: "Ridge Estate",
    location: "Delhi",
    price: "₹18.50 Cr",
    priceValue: 185000000,
    bedrooms: 6,
    bathrooms: 7,
    area: "8,500 sq.ft",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Set on an expansive plot, Ridge Estate combines grand proportions with minimalist detailing. The architecture balances monumental stone walls with delicate slatted timber screens, providing deep shaded verandas perfect for the climate.",
    amenities: ["Landscaped Gardens", "Home Theater", "Gymnasium", "Library", "Multiple Lounges", "Staff Quarters"]
  },
  {
    id: "courtyard-residence",
    title: "Courtyard Residence",
    location: "Bengaluru",
    price: "₹6.80 Cr",
    priceValue: 68000000,
    bedrooms: 4,
    bathrooms: 4,
    area: "4,100 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "An introverted architecture designed for privacy and calm. The house is arranged around a serene central courtyard featuring a mature frangipani tree and a reflective water body. Interiors feature raw concrete and polished wood.",
    amenities: ["Central Courtyard", "Water Features", "Rooftop Terrace", "Study", "Two-car Garage"]
  },
  {
    id: "jubilee-hills-plot",
    title: "Premium Plot, Jubilee Hills",
    location: "Hyderabad",
    price: "₹15.00 Cr",
    priceValue: 150000000,
    bedrooms: 0,
    bathrooms: 0,
    area: "1,200 sq.yards",
    type: "Plot",
    featured: true,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
    ],
    description: "A rare opportunity to acquire a pristine corner plot in one of the city's most exclusive neighborhoods. The elevated position offers potential for sweeping views, while mature boundary trees ensure immediate privacy for a future bespoke residence.",
    amenities: ["Corner Plot", "Elevated Position", "Mature Trees", "Gated Community", "Ready for Construction"]
  },
  {
    id: "banjara-hills-house",
    title: "Banjara Hills Modern",
    location: "Hyderabad",
    price: "₹10.50 Cr",
    priceValue: 105000000,
    bedrooms: 4,
    bathrooms: 5,
    area: "5,800 sq.ft",
    type: "House",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Characterized by clean lines and generous volumes, this contemporary house offers a seamless flow between interior living spaces and the lush exterior gardens. Large overhangs provide shade and a distinctive architectural profile.",
    amenities: ["Landscaped Garden", "Double-height Living", "Media Room", "Covered Parking", "Solar System"]
  },
  {
    id: "sea-face-apartment",
    title: "Sea Face Apartment",
    location: "Mumbai",
    price: "₹15.00 Cr",
    priceValue: 150000000,
    bedrooms: 3,
    bathrooms: 4,
    area: "2,800 sq.ft",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "An elegant coastal apartment designed with a refined, muted palette to let the ocean views take center stage. Bespoke joinery and high-end finishes throughout create a feeling of understated luxury.",
    amenities: ["Ocean Views", "Bespoke Interiors", "Gym Access", "24/7 Security", "Valet Parking"]
  },
  {
    id: "gachibowli-plot",
    title: "Gachibowli Estate Plot",
    location: "Hyderabad",
    price: "₹8.20 Cr",
    priceValue: 82000000,
    bedrooms: 0,
    bathrooms: 0,
    area: "800 sq.yards",
    type: "Plot",
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2064&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2064&auto=format&fit=crop"
    ],
    description: "A perfectly rectangular plot located in a quiet, rapidly developing premium enclave. Surrounded by established luxury homes, it presents an ideal canvas for an ambitious architectural project.",
    amenities: ["Clear Title", "Prime Location", "Park Facing", "Underground Utilities"]
  },
  {
    id: "hitec-city-villa",
    title: "HITEC City Villa",
    location: "Hyderabad",
    price: "₹12.50 Cr",
    priceValue: 125000000,
    bedrooms: 5,
    bathrooms: 6,
    area: "6,200 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "An oasis of calm in the city's tech hub. This villa pairs striking contemporary design with warm, natural materials. The triple-height atrium floods the core of the house with natural light throughout the day.",
    amenities: ["Triple-height Atrium", "Private Pool", "Home Office", "Smart Automation", "Elevator"]
  },
  {
    id: "coastal-pavilion",
    title: "Coastal Pavilion",
    location: "Goa",
    price: "₹9.25 Cr",
    priceValue: 92500000,
    bedrooms: 4,
    bathrooms: 5,
    area: "5,100 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Designed as a series of interconnected pavilions, this property celebrates outdoor living. Deep overhangs and louvered screens control the tropical sun, while open corridors catch the coastal breeze.",
    amenities: ["Pavilion Layout", "Tropical Gardens", "Lap Pool", "Outdoor Dining", "Yoga Deck"]
  },
  {
    id: "the-lumina",
    title: "The Lumina",
    location: "Delhi",
    price: "₹22.00 Cr",
    priceValue: 220000000,
    bedrooms: 5,
    bathrooms: 6,
    area: "7,500 sq.ft",
    type: "Estate",
    new: true,
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "An architectural statement. The Lumina uses light as its primary material, with skylights and vast windows strategically placed to track the sun. The minimalist interior serves as a gallery for living.",
    amenities: ["Gallery Spaces", "Indoor Pool", "Wine Room", "Spa Facilities", "Basement Parking"]
  },
  {
    id: "nandi-hills-retreat",
    title: "Nandi Hills Retreat",
    location: "Bengaluru",
    price: "₹8.50 Cr",
    priceValue: 85000000,
    bedrooms: 3,
    bathrooms: 4,
    area: "3,800 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2127&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2127&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Perched on a hillside, this retreat offers sweeping views of the valley below. Constructed largely from local stone and timber, it sits harmoniously within its rugged natural context.",
    amenities: ["Valley Views", "Infinity Edge Plunge Pool", "Fire Pit", "Hiking Trail Access", "Solar Powered"]
  },
  {
    id: "south-mumbai-heritage",
    title: "Heritage Apartment",
    location: "Mumbai",
    price: "₹16.50 Cr",
    priceValue: 165000000,
    bedrooms: 4,
    bathrooms: 4,
    area: "3,200 sq.ft",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A sensitive restoration of an art-deco classic. High ceilings, original terrazzo floors, and generous proportions have been preserved and updated with highly contemporary, minimal interventions.",
    amenities: ["Heritage Building", "High Ceilings", "Original Features", "Modern Kitchen", "City Views"]
  },
  {
    id: "whitefield-estate",
    title: "Whitefield Estate",
    location: "Bengaluru",
    price: "₹14.00 Cr",
    priceValue: 140000000,
    bedrooms: 5,
    bathrooms: 6,
    area: "6,800 sq.ft",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    ],
    description: "A sprawling contemporary estate characterized by extensive use of structural glass and steel. The property includes a large formal garden, a detached guest house, and state-of-the-art wellness facilities.",
    amenities: ["Guest House", "Wellness Center", "Formal Gardens", "Tennis Court", "Home Cinema"]
  },
  {
    id: "aravali-plot",
    title: "Aravali View Plot",
    location: "Delhi",
    price: "₹10.50 Cr",
    priceValue: 105000000,
    bedrooms: 0,
    bathrooms: 0,
    area: "2,000 sq.yards",
    type: "Plot",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
    ],
    description: "A substantial parcel of land backing onto preserved green space. Offering privacy, security, and a tranquil atmosphere, it represents a blank canvas for a significant private commission.",
    amenities: ["Green Space Adjoining", "Secure Perimeter", "Substantial Acreage", "Quiet Enclave"]
  }
];

export const locations = ["All", "Mumbai", "Goa", "Delhi", "Hyderabad", "Bengaluru", "Alibaug, Maharashtra"];
export const propertyTypes = ["All", "Villa", "Apartment", "Penthouse", "Plot", "Estate", "House"];
export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹5 Cr", min: 0, max: 50000000 },
  { label: "₹5 Cr - ₹10 Cr", min: 50000000, max: 100000000 },
  { label: "₹10 Cr - ₹20 Cr", min: 100000000, max: 200000000 },
  { label: "₹20 Cr+", min: 200000000, max: Infinity }
];
