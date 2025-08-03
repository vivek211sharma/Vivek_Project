export interface Guitar {
  id: string;
  name: string;
  brand: string;
  base_price: number;
  sale_price?: number | null;
  image_url: string;
  category_slug: string;
  description: string;
  features: string[];
  stock_quantity: number;
  rating: number;
  is_featured: boolean;
  is_on_sale: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface Accessory {
  id: string;
  name: string;
  brand: string;
  base_price: number;
  sale_price?: number | null;
  image_url: string;
  category_slug: string;
  description: string;
  features: string[];
  stock_quantity: number;
  rating: number;
  is_featured: boolean;
  is_on_sale: boolean;
  accessory_type: 'strings' | 'straps' | 'capos' | 'picks' | 'tuners' | 'cases' | 'stands' | 'cables';
}

// Sample guitars data with real images
export const guitars: Guitar[] = [
  // Acoustic Guitars
  {
    id: "acoustic-1",
    name: "Martin D-28 Standard",
    brand: "Martin",
    base_price: 2999.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "acoustic",
    description: "The legendary Martin D-28 Standard is the benchmark for dreadnought guitars. Handcrafted with premium materials and traditional construction.",
    features: ["Solid Sitka spruce top", "Solid East Indian rosewood back and sides", "Mahogany neck", "Rosewood fingerboard", "20 frets", "Dreadnought body shape"],
    stock_quantity: 8,
    rating: 4.9,
    is_featured: true,
    is_on_sale: false
  },
  {
    id: "acoustic-2",
    name: "Taylor 214ce Grand Auditorium",
    brand: "Taylor",
    base_price: 999.99,
    sale_price: 849.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "acoustic",
    description: "The Taylor 214ce combines beautiful tone with exceptional playability. Perfect for both fingerpicking and strumming.",
    features: ["Solid Sitka spruce top", "Layered sapele back and sides", "Mahogany neck", "Ebony fingerboard", "Expression System 2 electronics", "Grand Auditorium body"],
    stock_quantity: 15,
    rating: 4.7,
    is_featured: false,
    is_on_sale: true
  },
  {
    id: "acoustic-3",
    name: "Gibson J-45 Standard",
    brand: "Gibson",
    base_price: 2499.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "acoustic",
    description: "The Gibson J-45 Standard delivers the classic Gibson sound with warm, balanced tone and exceptional craftsmanship.",
    features: ["Solid Sitka spruce top", "Solid mahogany back and sides", "Mahogany neck", "Rosewood fingerboard", "20 frets", "Round shoulder dreadnought"],
    stock_quantity: 12,
    rating: 4.8,
    is_featured: true,
    is_on_sale: false
  },
  {
    id: "acoustic-4",
    name: "Yamaha FG830 Folk",
    brand: "Yamaha",
    base_price: 299.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "acoustic",
    description: "The Yamaha FG830 offers exceptional value with solid tonewood construction and reliable performance.",
    features: ["Solid Sitka spruce top", "Rosewood back and sides", "Nato neck", "Rosewood fingerboard", "20 frets", "Traditional western body"],
    stock_quantity: 25,
    rating: 4.5,
    is_featured: false,
    is_on_sale: false
  },
  {
    id: "acoustic-5",
    name: "Fender CD-60S All-Mahogany",
    brand: "Fender",
    base_price: 199.99,
    sale_price: 179.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "acoustic",
    description: "The Fender CD-60S All-Mahogany delivers warm, rich tones perfect for beginners and experienced players alike.",
    features: ["Solid mahogany top", "Mahogany back and sides", "Mahogany neck", "Walnut fingerboard", "20 frets", "Dreadnought body"],
    stock_quantity: 30,
    rating: 4.4,
    is_featured: false,
    is_on_sale: true
  },

  // Semi-Acoustic Guitars
  {
    id: "semi-acoustic-1",
    name: "Gibson ES-335 Dot",
    brand: "Gibson",
    base_price: 3499.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "semi-acoustic",
    description: "The Gibson ES-335 Dot is the quintessential semi-hollow electric guitar, perfect for jazz, blues, and rock.",
    features: ["Maple top, back, and sides", "Mahogany center block", "Mahogany neck", "Rosewood fingerboard", "Classic '57 Humbuckers", "ES-335 body shape"],
    stock_quantity: 6,
    rating: 4.9,
    is_featured: true,
    is_on_sale: false
  },
  {
    id: "semi-acoustic-2",
    name: "Epiphone Casino",
    brand: "Epiphone",
    base_price: 599.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "semi-acoustic",
    description: "The Epiphone Casino delivers the classic hollow-body sound made famous by The Beatles and countless other artists.",
    features: ["Maple top, back, and sides", "Mahogany neck", "Rosewood fingerboard", "P-90 Pro pickups", "Full hollow-body construction", "Casino body shape"],
    stock_quantity: 18,
    rating: 4.6,
    is_featured: false,
    is_on_sale: false
  },
  {
    id: "semi-acoustic-3",
    name: "Gretsch G2622 Streamliner",
    brand: "Gretsch",
    base_price: 449.99,
    sale_price: 399.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "semi-acoustic",
    description: "The Gretsch G2622 Streamliner combines classic Gretsch styling with modern playability and versatile tone.",
    features: ["Laminated maple top", "Laminated maple back and sides", "Maple neck", "Walnut fingerboard", "Broad'Tron humbuckers", "Center block construction"],
    stock_quantity: 22,
    rating: 4.5,
    is_featured: false,
    is_on_sale: true
  },
  {
    id: "semi-acoustic-4",
    name: "Ibanez AS73 Artcore",
    brand: "Ibanez",
    base_price: 349.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "semi-acoustic",
    description: "The Ibanez AS73 Artcore offers professional semi-hollow tone and playability at an accessible price point.",
    features: ["Laminated maple top", "Laminated maple back and sides", "Mahogany neck", "Jatoba fingerboard", "Classic Elite humbuckers", "AS body shape"],
    stock_quantity: 20,
    rating: 4.4,
    is_featured: false,
    is_on_sale: false
  },

  // Electric Guitars
  {
    id: "electric-1",
    name: "Fender Stratocaster American Professional II",
    brand: "Fender",
    base_price: 1699.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "electric",
    description: "The Fender Stratocaster American Professional II represents the pinnacle of Stratocaster design with premium features and exceptional tone.",
    features: ["Alder body", "Maple neck", "Rosewood fingerboard", "V-Mod II Single-Coil pickups", "2-Point tremolo", "22 frets"],
    stock_quantity: 10,
    rating: 4.8,
    is_featured: true,
    is_on_sale: false
  },
  {
    id: "electric-2",
    name: "Gibson Les Paul Standard '50s",
    brand: "Gibson",
    base_price: 2499.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "electric",
    description: "The Gibson Les Paul Standard '50s delivers the classic Les Paul sound with authentic '50s specifications and premium craftsmanship.",
    features: ["Mahogany body with maple top", "Mahogany neck", "Rosewood fingerboard", "Burstbucker pickups", "Aluminum Nashville Tune-o-matic", "22 frets"],
    stock_quantity: 8,
    rating: 4.9,
    is_featured: true,
    is_on_sale: false
  },
  {
    id: "electric-3",
    name: "PRS SE Custom 24",
    brand: "PRS",
    base_price: 799.99,
    sale_price: 699.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "electric",
    description: "The PRS SE Custom 24 offers the iconic PRS design and tone at an accessible price point with exceptional playability.",
    features: ["Mahogany body", "Maple top", "Mahogany neck", "Rosewood fingerboard", "PRS SE 85/15 S pickups", "PRS tremolo"],
    stock_quantity: 15,
    rating: 4.7,
    is_featured: false,
    is_on_sale: true
  },
  {
    id: "electric-4",
    name: "Ibanez RG450DX",
    brand: "Ibanez",
    base_price: 299.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "electric",
    description: "The Ibanez RG450DX is perfect for rock and metal with its fast-playing neck and high-output pickups.",
    features: ["Poplar body", "Maple neck", "Jatoba fingerboard", "Quantum pickups", "Ibanez tremolo", "24 frets"],
    stock_quantity: 25,
    rating: 4.3,
    is_featured: false,
    is_on_sale: false
  },
  {
    id: "electric-5",
    name: "Epiphone Les Paul Standard",
    brand: "Epiphone",
    base_price: 599.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "electric",
    description: "The Epiphone Les Paul Standard delivers classic Les Paul tone and feel with premium features and exceptional value.",
    features: ["Mahogany body", "Maple top", "Mahogany neck", "Rosewood fingerboard", "Alnico Classic humbuckers", "LockTone Tune-o-matic"],
    stock_quantity: 20,
    rating: 4.5,
    is_featured: false,
    is_on_sale: false
  },
  {
    id: "electric-6",
    name: "Squier Classic Vibe '50s Stratocaster",
    brand: "Squier",
    base_price: 399.99,
    sale_price: 349.99,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category_slug: "electric",
    description: "The Squier Classic Vibe '50s Stratocaster captures the essence of the original with vintage styling and authentic tone.",
    features: ["Alder body", "Maple neck", "Laurel fingerboard", "Fender-designed single-coil pickups", "6-saddle bridge", "21 frets"],
    stock_quantity: 30,
    rating: 4.4,
    is_featured: false,
    is_on_sale: true
  }
];

// Sample accessories data
export const accessories: Accessory[] = [
  {
    id: "acc-1",
    name: "Elixir Phosphor Bronze Acoustic Guitar Strings",
    brand: "Elixir",
    base_price: 24.99,
    sale_price: 19.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "strings",
    description: "Premium phosphor bronze strings with nanoweb coating for extended life and brilliant tone.",
    features: ["Nanoweb coating", "Extended string life", "Bright, balanced tone", "Corrosion resistant"],
    stock_quantity: 45,
    rating: 4.8,
    is_featured: true,
    is_on_sale: true,
    accessory_type: "strings"
  },
  {
    id: "acc-2",
    name: "D'Addario NYXL Electric Guitar Strings",
    brand: "D'Addario",
    base_price: 18.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "strings",
    description: "High-performance electric guitar strings with NY steel core for maximum output and tuning stability.",
    features: ["NY steel core", "Maximum output", "Tuning stability", "Long-lasting"],
    stock_quantity: 32,
    rating: 4.7,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "strings"
  },
  {
    id: "acc-3",
    name: "Levy's Leather Guitar Strap",
    brand: "Levy's",
    base_price: 39.99,
    sale_price: 29.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "straps",
    description: "Premium leather guitar strap with comfortable padding and adjustable length.",
    features: ["Genuine leather", "Padded comfort", "Adjustable length", "Heavy-duty hardware"],
    stock_quantity: 28,
    rating: 4.9,
    is_featured: true,
    is_on_sale: true,
    accessory_type: "straps"
  },
  {
    id: "acc-4",
    name: "Ernie Ball Polypro Guitar Strap",
    brand: "Ernie Ball",
    base_price: 12.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "straps",
    description: "Lightweight and durable polypro strap perfect for electric and acoustic guitars.",
    features: ["Lightweight", "Durable", "Comfortable", "Affordable"],
    stock_quantity: 67,
    rating: 4.5,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "straps"
  },
  {
    id: "acc-5",
    name: "Shubb C1 Guitar Capo",
    brand: "Shubb",
    base_price: 29.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "capos",
    description: "Professional-grade capo with adjustable tension and precise intonation.",
    features: ["Adjustable tension", "Precise intonation", "Durable construction", "Fits all neck sizes"],
    stock_quantity: 23,
    rating: 4.8,
    is_featured: true,
    is_on_sale: false,
    accessory_type: "capos"
  },
  {
    id: "acc-6",
    name: "Kyser Quick-Change Capo",
    brand: "Kyser",
    base_price: 19.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "capos",
    description: "Quick-change capo with spring-loaded design for easy one-handed operation.",
    features: ["Spring-loaded", "One-handed operation", "Quick change", "Universal fit"],
    stock_quantity: 41,
    rating: 4.6,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "capos"
  },
  {
    id: "acc-7",
    name: "Dunlop Tortex Guitar Picks (12-pack)",
    brand: "Dunlop",
    base_price: 8.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "picks",
    description: "Popular tortex picks with excellent grip and consistent tone across all thicknesses.",
    features: ["Excellent grip", "Consistent tone", "12-pack", "Multiple thicknesses"],
    stock_quantity: 89,
    rating: 4.7,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "picks"
  },
  {
    id: "acc-8",
    name: "Fender Premium Celluloid Picks",
    brand: "Fender",
    base_price: 6.99,
    sale_price: 4.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "picks",
    description: "Classic celluloid picks with vintage feel and warm tone.",
    features: ["Vintage feel", "Warm tone", "Classic design", "Smooth attack"],
    stock_quantity: 156,
    rating: 4.4,
    is_featured: false,
    is_on_sale: true,
    accessory_type: "picks"
  },
  {
    id: "acc-9",
    name: "Snark SN-8 Guitar Tuner",
    brand: "Snark",
    base_price: 14.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "tuners",
    description: "Clip-on tuner with bright display and accurate tuning for all instruments.",
    features: ["Clip-on design", "Bright display", "Accurate tuning", "Battery included"],
    stock_quantity: 34,
    rating: 4.6,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "tuners"
  },
  {
    id: "acc-10",
    name: "Boss TU-3 Chromatic Tuner",
    brand: "Boss",
    base_price: 99.99,
    sale_price: 79.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "tuners",
    description: "Professional chromatic tuner with high-accuracy mode and bypass function.",
    features: ["High-accuracy mode", "Bypass function", "Professional grade", "Stage ready"],
    stock_quantity: 12,
    rating: 4.9,
    is_featured: true,
    is_on_sale: true,
    accessory_type: "tuners"
  },
  {
    id: "acc-11",
    name: "Gator Cases Deluxe Guitar Case",
    brand: "Gator",
    base_price: 149.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "cases",
    description: "Heavy-duty guitar case with plush interior and secure latches for maximum protection.",
    features: ["Heavy-duty construction", "Plush interior", "Secure latches", "Maximum protection"],
    stock_quantity: 8,
    rating: 4.8,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "cases"
  },
  {
    id: "acc-12",
    name: "Hercules Guitar Stand",
    brand: "Hercules",
    base_price: 34.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "stands",
    description: "Auto-grip guitar stand with secure locking mechanism and foldable design.",
    features: ["Auto-grip system", "Secure locking", "Foldable design", "Stable base"],
    stock_quantity: 25,
    rating: 4.7,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "stands"
  },
  {
    id: "acc-13",
    name: "Monster Cable Pro Series Instrument Cable",
    brand: "Monster",
    base_price: 29.99,
    sale_price: 24.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "cables",
    description: "High-quality instrument cable with gold-plated connectors and noise-free performance.",
    features: ["Gold-plated connectors", "Noise-free", "High-quality", "Durable"],
    stock_quantity: 43,
    rating: 4.5,
    is_featured: false,
    is_on_sale: true,
    accessory_type: "cables"
  },
  {
    id: "acc-14",
    name: "Planet Waves American Stage Cable",
    brand: "Planet Waves",
    base_price: 19.99,
    image_url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop",
    category_slug: "cables",
    description: "Professional instrument cable with lifetime warranty and superior conductivity.",
    features: ["Lifetime warranty", "Superior conductivity", "Professional grade", "Reliable"],
    stock_quantity: 67,
    rating: 4.6,
    is_featured: false,
    is_on_sale: false,
    accessory_type: "cables"
  }
];