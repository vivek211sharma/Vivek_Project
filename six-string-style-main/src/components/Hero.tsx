import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Gift, Crown, Star, Music, Zap, Shield, Truck, Clock, Heart, Play } from "lucide-react";
import heroImage from "@/assets/hero-guitars.jpg";

const Hero = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />
      </div>

      {/* Floating Musical Notes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          >
            <Music size={24 + i * 4} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Exclusive Member Badge for Registered Users */}
          {user && (
            <div className="mb-6 animate-slide-up">
              <Badge className="bg-secondary/20 text-secondary border-secondary px-4 py-2 text-sm font-semibold backdrop-blur-sm animate-pulse">
                <Crown className="w-4 h-4 mr-2" />
                Welcome back, {user.user_metadata?.display_name || user.email?.split('@')[0]}!
              </Badge>
            </div>
          )}

          {/* Enhanced Headline with Typing Animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block animate-slide-up">Discover Your</span>
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x">
                Perfect Sound
              </span>
              <span className="block text-3xl md:text-4xl mt-2 text-white/80 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Premium Guitars for Every Musician
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Experience the finest collection of acoustic, semi-acoustic, and electric guitars. 
            <span className="block text-secondary font-semibold mt-2">
              Crafted for passion, designed for performance.
            </span>
          </p>

          {/* Enhanced Trust Indicators */}
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-white/80 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-secondary" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-secondary" />
              <span>Lifetime Support</span>
            </div>
          </div>

          {/* Exclusive Offers for Registered Users */}
          {user && (
            <div className="mb-8 p-6 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl border border-secondary/30 backdrop-blur-sm animate-glow-pulse">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">🎉 Exclusive Member Offers</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-secondary">15% OFF</div>
                  <div className="text-sm text-white/80">All Acoustic Guitars</div>
                  <div className="text-xs text-secondary/70 mt-1">Limited Time</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-secondary">Free Shipping</div>
                  <div className="text-sm text-white/80">On Orders $200+</div>
                  <div className="text-xs text-secondary/70 mt-1">Worldwide</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-secondary">Early Access</div>
                  <div className="text-sm text-white/80">New Arrivals</div>
                  <div className="text-xs text-secondary/70 mt-1">24h Early</div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-secondary-foreground font-bold px-10 py-6 text-lg animate-glow-pulse shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-400 bg-orange-500/20 text-orange-200 hover:bg-orange-500 hover:text-white px-10 py-6 text-lg transition-all duration-300 backdrop-blur-sm group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Watch Demo
            </Button>
          </div>

          {/* Sign up prompt for non-registered users */}
          {!user && (
            <div className="mb-8 p-6 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl border border-accent/30 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-accent">🎵 Join our community for exclusive deals!</h3>
              </div>
              <p className="text-white/90 mb-4">
                Get <span className="font-bold text-secondary">15% off</span> your first purchase and access to member-only offers
              </p>
              <Button 
                variant="secondary"
                onClick={() => navigate("/auth")}
                className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-bold px-8 py-3 transition-all duration-300"
              >
                Sign Up for Free
              </Button>
            </div>
          )}

          {/* Enhanced Stats with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '1.3s' }}>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-white/80">Premium Guitars</div>
              <div className="text-xs text-secondary/70 mt-1">Handpicked Quality</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-white/80">Top Brands</div>
              <div className="text-xs text-secondary/70 mt-1">World-Class</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">10k+</div>
              <div className="text-white/80">Happy Musicians</div>
              <div className="text-xs text-secondary/70 mt-1">Trusted by Pros</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-white/80">Expert Support</div>
              <div className="text-xs text-secondary/70 mt-1">Always Here</div>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="mt-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>
              <p className="text-white/90 italic text-lg mb-4">
                "The quality of these guitars is incredible! I've been playing for 20 years and this is the best collection I've seen online."
              </p>
              <div className="text-white/70 text-sm">
                — Sarah Johnson, Professional Musician
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="text-white/50 text-xs mt-2">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;