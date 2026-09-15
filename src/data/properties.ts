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
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    ]
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
    images: []
  },
  {
    id: "horizon-penthouse",
    title: "Horizon Penthouse",
    location: "Mumbai",
    price: "₹18.00 Cr",
    priceValue: 180000000,
    bedrooms: 3,
    bathrooms: 4,
    area: "3,500 sq.ft",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    images: []
  },
  {
    id: "courtyard-residence",
    title: "Courtyard Residence",
    location: "Bengaluru",
    price: "₹6.20 Cr",
    priceValue: 62000000,
    bedrooms: 4,
    bathrooms: 4,
    area: "4,100 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    images: []
  },
  {
    id: "ridge-estate",
    title: "Ridge Estate",
    location: "Delhi",
    price: "₹15.75 Cr",
    priceValue: 157500000,
    bedrooms: 6,
    bathrooms: 7,
    area: "8,500 sq.ft",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    images: []
  },
  {
    id: "coastal-pavilion",
    title: "Coastal Pavilion",
    location: "Alibaug, Maharashtra",
    price: "₹9.25 Cr",
    priceValue: 92500000,
    bedrooms: 4,
    bathrooms: 5,
    area: "5,100 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    images: []
  }
];

export const locations = ["All", "Mumbai", "Goa", "Alibaug", "Delhi", "Bengaluru", "Hyderabad"];
export const propertyTypes = ["All", "Villa", "Apartment", "Penthouse", "Plot", "Estate"];
export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹5 Cr", min: 0, max: 50000000 },
  { label: "₹5 Cr - ₹10 Cr", min: 50000000, max: 100000000 },
  { label: "₹10 Cr - ₹15 Cr", min: 100000000, max: 150000000 },
  { label: "Above ₹15 Cr", min: 150000000, max: Infinity }
];
