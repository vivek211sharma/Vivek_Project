import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Star, Shield, Truck, Clock, Heart, Award, Zap, Music, Guitar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Trust Indicators Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Trusted by Musicians Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-lift">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-primary-foreground/80 text-sm">Handpicked by experts</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-lift">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lifetime Warranty</h3>
              <p className="text-primary-foreground/80 text-sm">Built to last forever</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-primary-foreground/80 text-sm">On orders $200+</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-lift">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30-Day Returns</h3>
              <p className="text-primary-foreground/80 text-sm">No questions asked</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                <Guitar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                StringCraft
              </h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Your premier destination for quality acoustic, semi-acoustic, and electric guitars. 
              Crafting musical excellence since 1995 with passion and precision.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-secondary/20 hover:text-secondary transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary/20 hover:text-secondary transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary/20 hover:text-secondary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary/20 hover:text-secondary transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>

            {/* Customer Testimonial */}
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                ))}
              </div>
              <p className="text-sm text-primary-foreground/80 italic">
                "Amazing quality guitars and exceptional service. My go-to store for all my musical needs!"
              </p>
              <p className="text-xs text-primary-foreground/60 mt-2">— John Smith, Professional Musician</p>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', icon: Award },
                { name: 'Our Story', icon: Music },
                { name: 'Guitar Care', icon: Shield },
                { name: 'Warranty', icon: Heart },
                { name: 'Returns', icon: Clock }
              ].map(({ name, icon: Icon }) => (
                <li key={name}>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Categories */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-secondary">Categories</h4>
            <ul className="space-y-3">
              {[
                { name: 'Acoustic Guitars', badge: 'Popular' },
                { name: 'Semi-Acoustic', badge: 'Trending' },
                { name: 'Electric Guitars', badge: 'Hot' },
                { name: 'Accessories', badge: 'New' },
                { name: 'Amplifiers', badge: 'Sale' }
              ].map(({ name, badge }) => (
                <li key={name}>
                  <a 
                    href="#" 
                    className="flex items-center justify-between text-primary-foreground/80 hover:text-secondary transition-all duration-300 group"
                  >
                    <span>{name}</span>
                    <Badge className="text-xs bg-secondary/20 text-secondary border-secondary">
                      {badge}
                    </Badge>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-secondary">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <Mail className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-semibold">hello@stringcraft.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <MapPin className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Address</p>
                  <p className="font-semibold">123 Music St, Guitar City</p>
                </div>
              </div>
            </div>

            {/* Enhanced Newsletter */}
            <div className="pt-4">
              <h5 className="font-bold mb-3 text-secondary">🎵 Stay Updated</h5>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Get exclusive deals, new arrivals, and expert tips delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary"
                />
                <Button 
                  className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-2">
                Join 10,000+ musicians getting exclusive deals
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 StringCraft. All rights reserved.
            </p>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <Shield className="w-3 h-3 mr-1" />
              SSL Secured
            </Badge>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;