import { Star, ShoppingCart, Heart, Eye, Zap, TrendingUp, Award, Clock, Guitar, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accessory } from "@/data/guitars";

interface AccessoryCardProps {
  accessory: Accessory;
  onAddToCart: (accessory: Accessory) => void;
}

const AccessoryCard = ({ accessory, onAddToCart }: AccessoryCardProps) => {
  // Ensure we have valid numbers for pricing
  const basePrice = Number(accessory.base_price) || 0;
  const salePrice = accessory.is_on_sale && accessory.sale_price ? Number(accessory.sale_price) : null;
  const displayPrice = salePrice || basePrice;
  const wasPrice = accessory.is_on_sale && salePrice ? basePrice : null;
  const discountPercentage = wasPrice && displayPrice
    ? Math.round(((wasPrice - displayPrice) / wasPrice) * 100)
    : 0;

  // Stock urgency indicator
  const isLowStock = accessory.stock_quantity > 0 && accessory.stock_quantity <= 10;
  const isHighDemand = accessory.rating >= 4.5;

  // Get accessory type icon
  const getAccessoryIcon = (type: string) => {
    switch (type) {
      case 'strings':
        return <Music className="w-4 h-4" />;
      case 'straps':
        return <Guitar className="w-4 h-4" />;
      case 'capos':
        return <Music className="w-4 h-4" />;
      case 'picks':
        return <Music className="w-4 h-4" />;
      case 'tuners':
        return <Music className="w-4 h-4" />;
      case 'cases':
        return <Guitar className="w-4 h-4" />;
      case 'stands':
        return <Guitar className="w-4 h-4" />;
      case 'cables':
        return <Music className="w-4 h-4" />;
      default:
        return <Music className="w-4 h-4" />;
    }
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-premium hover:-translate-y-2 bg-gradient-card border-0 shadow-card hover:shadow-xl">
      <div className="relative overflow-hidden">
        {/* Enhanced Sale Badge */}
        {discountPercentage > 0 && (
          <Badge 
            className="absolute top-3 left-3 z-10 bg-gradient-to-r from-secondary to-accent text-white font-bold px-3 py-1 shadow-lg animate-pulse"
          >
            <Zap className="w-3 h-3 mr-1" />
            -{discountPercentage}% OFF
          </Badge>
        )}

        {/* Featured Badge */}
        {accessory.is_featured && (
          <Badge 
            className="absolute top-3 right-3 z-10 bg-gradient-to-r from-primary to-secondary text-white font-bold px-3 py-1 shadow-lg"
          >
            <Award className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}

        {/* Stock Status */}
        {accessory.stock_quantity === 0 && (
          <Badge 
            className="absolute top-3 right-3 z-10 bg-muted text-muted-foreground"
          >
            Out of Stock
          </Badge>
        )}

        {/* Low Stock Warning */}
        {isLowStock && accessory.stock_quantity > 0 && (
          <Badge 
            className="absolute top-12 right-3 z-10 bg-orange-500 text-white font-bold px-3 py-1 shadow-lg animate-pulse"
          >
            <Clock className="w-3 h-3 mr-1" />
            Only {accessory.stock_quantity} left!
          </Badge>
        )}

        {/* High Demand Badge */}
        {isHighDemand && (
          <Badge 
            className="absolute top-3 right-3 z-10 bg-green-500 text-white font-bold px-3 py-1 shadow-lg"
          >
            <TrendingUp className="w-3 h-3 mr-1" />
            Hot Seller
          </Badge>
        )}

        {/* Image Container */}
        <div className="aspect-square bg-muted relative overflow-hidden">
          <img
            src={accessory.image_url}
            alt={accessory.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Enhanced Overlay Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
            <div className="flex gap-3 animate-slide-up">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                onClick={() => onAddToCart(accessory)}
                disabled={accessory.stock_quantity === 0}
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold px-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 text-primary hover:bg-white font-semibold"
            >
              Quick View
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
            {accessory.brand}
          </span>
          <Badge variant="outline" className="text-xs font-semibold">
            {getAccessoryIcon(accessory.accessory_type)}
            <span className="ml-1">{accessory.category_slug.toUpperCase()}</span>
          </Badge>
        </div>

        {/* Name */}
        <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {accessory.name}
        </h3>

        {/* Enhanced Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(accessory.rating)
                    ? "fill-secondary text-secondary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-secondary">
            {accessory.rating} ({Math.floor(accessory.rating * 20)}% recommend)
          </span>
        </div>

        {/* Enhanced Price Display */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-primary">
              ${displayPrice?.toLocaleString() || '0'}
            </span>
            {wasPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${wasPrice.toLocaleString()}
              </span>
            )}
          </div>
          {discountPercentage > 0 && (
            <div className="text-sm text-green-600 font-semibold">
              You save ${(wasPrice! - displayPrice).toLocaleString()} ({discountPercentage}% off)
            </div>
          )}
        </div>

        {/* Enhanced Features */}
        <div className="space-y-2 mb-6">
          {accessory.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="text-sm text-muted-foreground flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></span>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Stock Status */}
        {isLowStock && accessory.stock_quantity > 0 && (
          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2 text-orange-700">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Only {accessory.stock_quantity} left in stock!
              </span>
            </div>
          </div>
        )}

        {/* Enhanced Add to Cart Button */}
        <Button
          onClick={() => onAddToCart(accessory)}
          disabled={accessory.stock_quantity === 0}
          className={`w-full font-bold transition-all duration-300 hover:shadow-lg ${
            accessory.stock_quantity > 0 
              ? "bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl" 
              : "bg-muted text-muted-foreground"
          }`}
          size="lg"
        >
          {accessory.stock_quantity > 0 ? (
            <>
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isLowStock ? "Buy Now - Limited Stock!" : "Add to Cart"}
            </>
          ) : (
            "Out of Stock"
          )}
        </Button>

        {/* Trust Indicators */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>✓ Free Shipping</span>
          <span>✓ 30-Day Returns</span>
          <span>✓ Expert Support</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessoryCard; 