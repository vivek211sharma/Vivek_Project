import { Guitar } from "@/data/guitars";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Award, Zap } from "lucide-react";

interface CategorySectionProps {
  title: string;
  description: string;
  guitars: Guitar[];
  id: string;
  onAddToCart: (guitar: Guitar) => void;
}

const CategorySection = ({ title, description, guitars, id, onAddToCart }: CategorySectionProps) => {
  const featuredGuitars = guitars.filter(guitar => guitar.is_featured);
  const regularGuitars = guitars.filter(guitar => !guitar.is_featured);

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-secondary/20 text-secondary border-secondary px-3 py-1 text-sm font-semibold">
              <TrendingUp className="w-4 h-4 mr-1" />
              Popular Category
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Category Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-secondary fill-current" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-secondary" />
              <span>Expert Crafted</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        {featuredGuitars.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-2">⭐ Featured Picks</h3>
              <p className="text-muted-foreground">Handpicked by our experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGuitars.map((guitar, index) => (
                <div
                  key={guitar.id}
                  className="animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <ProductCard guitar={guitar} onAddToCart={onAddToCart} />
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-gradient-to-r from-secondary to-accent text-white px-3 py-1 text-sm font-bold shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Products Section */}
        {regularGuitars.length > 0 && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">All {title}</h3>
              <p className="text-muted-foreground">Explore our complete collection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularGuitars.map((guitar, index) => (
                <div
                  key={guitar.id}
                  className="animate-slide-up hover-lift"
                  style={{ animationDelay: `${(featuredGuitars.length + index) * 0.1}s` }}
                >
                  <ProductCard guitar={guitar} onAddToCart={onAddToCart} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call-to-Action Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Find Your Perfect {title.slice(0, -1)}?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of musicians who trust us for their instruments. 
            Get expert advice, free shipping, and 30-day returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Shop All {title}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 transition-all duration-300"
            >
              Get Expert Advice
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 hover-lift">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-semibold text-primary mb-2">Premium Quality</h4>
            <p className="text-sm text-muted-foreground">Handpicked by experts</p>
          </div>
          <div className="p-4 hover-lift">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold text-primary mb-2">Expert Support</h4>
            <p className="text-sm text-muted-foreground">24/7 customer service</p>
          </div>
          <div className="p-4 hover-lift">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-primary mb-2">Fast Shipping</h4>
            <p className="text-sm text-muted-foreground">Free on orders $200+</p>
          </div>
          <div className="p-4 hover-lift">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-semibold text-primary mb-2">30-Day Returns</h4>
            <p className="text-sm text-muted-foreground">No questions asked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;