-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create products table (guitars)
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category_id UUID REFERENCES public.categories(id),
  brand TEXT NOT NULL,
  base_price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_on_sale BOOLEAN DEFAULT false,
  sale_price DECIMAL(10,2),
  stock_quantity INTEGER DEFAULT 0,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create product variants table
CREATE TABLE public.product_variants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is a public e-commerce store)
CREATE POLICY "Categories are publicly readable" 
ON public.categories 
FOR SELECT 
USING (true);

CREATE POLICY "Products are publicly readable" 
ON public.products 
FOR SELECT 
USING (true);

CREATE POLICY "Product variants are publicly readable" 
ON public.product_variants 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_product_variants_updated_at
  BEFORE UPDATE ON public.product_variants
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample categories
INSERT INTO public.categories (name, description, slug) VALUES
('Acoustic Guitars', 'Traditional acoustic guitars with rich, natural sound', 'acoustic'),
('Semi-Acoustic Guitars', 'Versatile guitars that blend acoustic warmth with electric amplification', 'semi-acoustic'),
('Electric Guitars', 'Electric guitars for rock, blues, and modern music styles', 'electric');

-- Insert sample products
INSERT INTO public.products (name, description, category_id, brand, base_price, image_url, rating, is_featured, is_on_sale, sale_price, stock_quantity, features) VALUES
-- Acoustic Guitars
('Martin D-28', 'The legendary Martin D-28 delivers the sound that has defined American music.', (SELECT id FROM public.categories WHERE slug = 'acoustic'), 'Martin', 2799.00, '/placeholder.svg', 4.9, true, false, null, 15, ARRAY['Solid Sitka Spruce Top', 'East Indian Rosewood Back/Sides', 'Ebony Fingerboard', 'Bone Nut & Saddle']),
('Taylor 814ce', 'A flagship Grand Auditorium with exceptional tone and playability.', (SELECT id FROM public.categories WHERE slug = 'acoustic'), 'Taylor', 3398.00, '/placeholder.svg', 4.8, true, true, 2999.00, 8, ARRAY['Solid Sitka Spruce Top', 'Indian Rosewood Back/Sides', 'ES2 Electronics', 'Ebony Fingerboard']),
('Gibson J-45', 'The workhorse acoustic guitar with classic Gibson tone.', (SELECT id FROM public.categories WHERE slug = 'acoustic'), 'Gibson', 2499.00, '/placeholder.svg', 4.7, false, false, null, 12, ARRAY['Solid Sitka Spruce Top', 'Mahogany Back/Sides', 'Rosewood Fingerboard', 'Bone Nut']),

-- Semi-Acoustic Guitars
('Gibson ES-335', 'The iconic semi-hollow body guitar that started it all.', (SELECT id FROM public.categories WHERE slug = 'semi-acoustic'), 'Gibson', 2799.00, '/placeholder.svg', 4.8, true, false, null, 6, ARRAY['Maple/Poplar/Maple Body', 'Mahogany Neck', '490R & 490T Pickups', 'ABR-1 Bridge']),
('Epiphone Casino', 'The hollow body guitar made famous by The Beatles.', (SELECT id FROM public.categories WHERE slug = 'semi-acoustic'), 'Epiphone', 899.00, '/placeholder.svg', 4.6, false, true, 749.00, 20, ARRAY['Laminated Maple Body', 'Mahogany Neck', 'P-90 Pickups', 'Bigsby Vibrato']),
('Gretsch G6120', 'The classic hollow body guitar with that distinctive Gretsch sound.', (SELECT id FROM public.categories WHERE slug = 'semi-acoustic'), 'Gretsch', 3199.00, '/placeholder.svg', 4.7, true, false, null, 4, ARRAY['Laminated Maple Body', 'Mahogany Neck', 'High Sensitive Filter\'Tron Pickups', 'Bigsby B6120']),

-- Electric Guitars
('Fender Stratocaster', 'The most versatile electric guitar ever made.', (SELECT id FROM public.categories WHERE slug = 'electric'), 'Fender', 1399.00, '/placeholder.svg', 4.8, true, false, null, 25, ARRAY['Alder Body', 'Maple Neck', 'Player Series Pickups', 'Vintage-Style Tremolo']),
('Gibson Les Paul', 'The legendary Les Paul with classic humbucker tone.', (SELECT id FROM public.categories WHERE slug = 'electric'), 'Gibson', 2499.00, '/placeholder.svg', 4.9, true, true, 2199.00, 10, ARRAY['Mahogany Body', 'Maple Cap', '490R & 498T Pickups', 'Tune-o-matic Bridge']),
('Fender Telecaster', 'The original solid body electric guitar with timeless tone.', (SELECT id FROM public.categories WHERE slug = 'electric'), 'Fender', 1299.00, '/placeholder.svg', 4.7, false, false, null, 18, ARRAY['Alder Body', 'Maple Neck', 'Player Series Pickups', 'String-Through-Body Bridge']);