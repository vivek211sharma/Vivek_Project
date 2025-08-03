import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Guitar } from "@/data/guitars";
import { useProducts } from "@/hooks/useProducts";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Cart, { CartItem } from "@/components/Cart";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Shield, Truck, Clock, Heart, Zap, Music, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const { data: products = [], isLoading, error } = useProducts();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Redirect to auth page if not authenticated after loading
  useEffect(() => {
    if (!authLoading && !user) {
      // Don't redirect immediately, let users browse first
      // You can uncomment the line below if you want to force authentication
      // navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleAddToCart = (guitar: Guitar) => {
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading guitars...</p>
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

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter guitars by category
  const acousticGuitars = products.filter(guitar => guitar.category_slug === 'acoustic');
  const semiAcousticGuitars = products.filter(guitar => guitar.category_slug === 'semi-acoustic');
  const electricGuitars = products.filter(guitar => guitar.category_slug === 'electric');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary px-4 py-2 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Why Choose StringCraft?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience Musical Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of musicians who trust us for their instruments. 
              We're not just selling guitars - we're building musical dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every guitar is handpicked by our expert team to ensure the highest quality standards.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                All our guitars come with a comprehensive lifetime warranty for your peace of mind.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Free Shipping</h3>
              <p className="text-muted-foreground">
                Enjoy free shipping on all orders over $200, with secure packaging and fast delivery.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">30-Day Returns</h3>
              <p className="text-muted-foreground">
                Not satisfied? Return any guitar within 30 days for a full refund, no questions asked.
              </p>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Trusted by Musicians Worldwide
              </h3>
              <p className="text-muted-foreground text-lg">
                Join our community of satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Premium Guitars</div>
                <div className="flex justify-center mt-2">
                  <Music className="w-4 h-4 text-secondary" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-muted-foreground">Expert Support</div>
                <div className="flex justify-center mt-2">
                  <Users className="w-4 h-4 text-secondary" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Musical Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate("/accessories")}
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all duration-300"
                >
                  <Music className="w-5 h-5 mr-2" />
                  Shop Accessories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CategorySection
        id="acoustic"
        title="Acoustic Guitars"
        description="Pure, natural sound with traditional craftsmanship. Perfect for fingerpicking, strumming, and intimate performances."
        guitars={acousticGuitars}
        onAddToCart={handleAddToCart}
      />
      
      <CategorySection
        id="semi-acoustic"
        title="Semi-Acoustic Guitars"
        description="The best of both worlds - acoustic resonance with electric versatility. Ideal for jazz, blues, and studio recording."
        guitars={semiAcousticGuitars}
        onAddToCart={handleAddToCart}
      />
      
      <CategorySection
        id="electric"
        title="Electric Guitars"
        description="Unleash your creativity with powerful amplified sound. From vintage classics to modern shred machines."
        guitars={electricGuitars}
        onAddToCart={handleAddToCart}
      />

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

export default Index;
