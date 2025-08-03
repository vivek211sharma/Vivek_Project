import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Cart, { CartItem } from "@/components/Cart";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Award, Shield, Truck, Clock, Heart, Zap, Music, Users, TrendingUp, Search, Filter, Guitar as GuitarIcon, ShoppingCart } from "lucide-react";

const ElectricGuitars = () => {
  const { toast } = useToast();
  const { data: products = [], isLoading, error } = useProducts();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  // Redirect to auth page if not authenticated after loading
  useEffect(() => {
    if (!authLoading && !user) {
      // Don't redirect immediately, let users browse first
      // navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleAddToCart = (guitar: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === guitar.id);
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Increased quantity of ${guitar.name}`,
        });
        return prev.map(item =>
          item.id === guitar.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${guitar.name} has been added to your cart`,
        });
        return [...prev, { ...guitar, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  // Filter electric guitars
  const electricGuitars = products.filter(guitar => guitar.category_slug === 'electric');

  // Filter and sort guitars
  const filteredGuitars = electricGuitars
    .filter(guitar => {
      const matchesSearch = guitar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          guitar.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          guitar.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPrice = priceRange === "all" || 
        (priceRange === "under-500" && guitar.base_price < 500) ||
        (priceRange === "500-1000" && guitar.base_price >= 500 && guitar.base_price < 1000) ||
        (priceRange === "1000-2000" && guitar.base_price >= 1000 && guitar.base_price < 2000) ||
        (priceRange === "over-2000" && guitar.base_price >= 2000);
      
      return matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.base_price - b.base_price;
        case "price-high":
          return b.base_price - a.base_price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "featured":
        default:
          return b.is_featured ? 1 : -1;
      }
    });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading electric guitars...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error loading products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary via-primary/95 to-background text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-secondary/20 text-secondary border-secondary px-4 py-2 text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Premium Electric Guitars
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              Unleash Your Power
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              From vintage classics to modern shred machines - discover electric guitars that deliver 
              powerful amplified sound and endless creative possibilities.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search electric guitars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-primary-foreground rounded-md focus:border-secondary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-primary-foreground rounded-md focus:border-secondary"
                >
                  <option value="all">All Prices</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="over-2000">Over $2,000</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Electric Guitars
              </h2>
              <p className="text-muted-foreground">
                {filteredGuitars.length} guitars found
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-secondary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredGuitars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGuitars.map((guitar, index) => (
                <div
                  key={guitar.id}
                  className="animate-slide-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard guitar={guitar} onAddToCart={handleAddToCart} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <GuitarIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No electric guitars found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or price filter
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setPriceRange("all");
                }}
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white"
              >
                <Search className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          )}

          {/* Call-to-Action Section */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Help Choosing Your Electric Guitar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect electric guitar. 
              Get personalized recommendations for rock, blues, jazz, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Expert Advice
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                View Cart ({totalItems})
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default ElectricGuitars; 