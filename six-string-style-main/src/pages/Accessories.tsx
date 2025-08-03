import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Accessory, accessories } from "@/data/guitars";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import AccessoryCard from "@/components/AccessoryCard";
import Cart, { CartItem } from "@/components/Cart";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Award, Shield, Truck, Clock, Heart, Zap, Music, Users, TrendingUp, Search, Filter, Guitar, ShoppingCart } from "lucide-react";

const Accessories = () => {
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Redirect to auth page if not authenticated after loading
  useEffect(() => {
    if (!authLoading && !user) {
      // Don't redirect immediately, let users browse first
      // You can uncomment the line below if you want to force authentication
      // navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleAddToCart = (accessory: Accessory) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === accessory.id);
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Increased quantity of ${accessory.name}`,
        });
        return prev.map(item =>
          item.id === accessory.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${accessory.name} has been added to your cart`,
        });
        return [...prev, { ...accessory, quantity: 1 }];
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

  // Filter and sort accessories
  const filteredAccessories = accessories
    .filter(accessory => {
      const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          accessory.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          accessory.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || accessory.accessory_type === selectedCategory;
      return matchesSearch && matchesCategory;
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

  const categories = [
    { id: "all", name: "All Accessories", icon: Guitar },
    { id: "strings", name: "Guitar Strings", icon: Music },
    { id: "straps", name: "Guitar Straps", icon: Guitar },
    { id: "capos", name: "Capos", icon: Music },
    { id: "picks", name: "Picks", icon: Music },
    { id: "tuners", name: "Tuners", icon: Music },
    { id: "cases", name: "Cases & Bags", icon: Guitar },
    { id: "stands", name: "Stands", icon: Guitar },
    { id: "cables", name: "Cables", icon: Music }
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
              Premium Guitar Accessories
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              Complete Your Setup
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              From strings to straps, picks to tuners - everything you need to enhance your playing experience. 
              Quality accessories for every musician.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search accessories..."
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
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(({ id, name, icon: Icon }) => (
                <Button
                  key={id}
                  variant={selectedCategory === id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(id)}
                  className={`${
                    selectedCategory === id 
                      ? "bg-secondary text-secondary-foreground" 
                      : "bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
                  } transition-all duration-300`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {name}
                </Button>
              ))}
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
                {selectedCategory === "all" ? "All Accessories" : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {filteredAccessories.length} products found
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
          {filteredAccessories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAccessories.map((accessory, index) => (
                <div
                  key={accessory.id}
                  className="animate-slide-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccessoryCard accessory={accessory} onAddToCart={handleAddToCart} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Music className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No accessories found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
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
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect accessories for your setup. 
              Get personalized recommendations and expert advice.
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

export default Accessories; 