import { ShoppingCart, Menu, Search, User, LogOut, Guitar as GuitarIcon, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

const Header = ({ cartItems, onCartClick }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            StringCraft
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/acoustic-guitars" 
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <GuitarIcon className="w-4 h-4" />
            Acoustic
          </Link>
          <Link 
            to="/semi-acoustic-guitars" 
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <GuitarIcon className="w-4 h-4" />
            Semi-Acoustic
          </Link>
          <Link 
            to="/electric-guitars" 
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <GuitarIcon className="w-4 h-4" />
            Electric
          </Link>
          <Link 
            to="/accessories" 
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <Music className="w-4 h-4" />
            Accessories
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search guitars..." 
              className="pl-10 w-64"
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onCartClick}
            className="relative hover:shadow-lg transition-all duration-300"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-bounce-gentle"
              >
                {cartItems}
              </Badge>
            )}
          </Button>

          {/* Auth Section */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {user.user_metadata?.display_name || user.email?.split('@')[0]}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="default"
              size="sm"
              onClick={() => navigate("/auth")}
              className="bg-gradient-accent hover:opacity-90"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;