import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Hammer, PaintBucket, Wrench, Cpu, User, LogOut, ChevronRight, Home, TreePine, Utensils, Bed, Waves, BookOpen, Star, Shield, Grid3X3, Square, ArrowUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  onProjectSelect: (project: string) => void;
  onDoorCategorySelect?: (category: string) => void;
}

const Header = ({ onProjectSelect, onDoorCategorySelect }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleDoorCategorySelect = (category: string) => {
    if (onDoorCategorySelect) {
      onDoorCategorySelect(category);
    }
  };

  const handleAuthAction = () => {
    if (user) {
      signOut().then(() => {
        toast({
          title: "Signed Out",
          description: "You have been successfully signed out."
        });
      });
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Perfect Home's</h1>
              <p className="text-xs text-muted-foreground">Interiors & Solutions</p>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => navigate("/")} className="text-foreground hover:text-primary transition-colors">Home</button>
            <div className="relative group">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">Projects & Designs</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <div className="relative group/woodwork">
                    <div className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Hammer className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">Wood Work</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    {/* Wood Work Submenu */}
                    <div className="absolute left-full top-0 ml-2 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover/woodwork:opacity-100 group-hover/woodwork:visible transition-all duration-200 z-50">
                      <div className="p-2">
                        <button
                          onClick={() => navigate('/main-doors')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Home className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Main Doors</span>
                        </button>
                        <button
                          onClick={() => handleDoorCategorySelect("puja")}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <TreePine className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Puja Doors</span>
                        </button>
                        <button
                          onClick={() => handleDoorCategorySelect("kitchen")}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Utensils className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Kitchen Doors</span>
                        </button>
                        <button
                          onClick={() => handleDoorCategorySelect("bedroom")}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Bed className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Bedroom Doors</span>
                        </button>
                        <button
                          onClick={() => handleDoorCategorySelect("balcony")}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Waves className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Balcony Doors</span>
                        </button>
                        <button
                          onClick={() => handleDoorCategorySelect("temple")}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <TreePine className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Temple Doors</span>
                        </button>
                        <button
                          onClick={() => handleDoorCategorySelect("study")}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <BookOpen className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Study Room Doors</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/furnished">
                    <div className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <PaintBucket className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">Furnished Work</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    {/* Furnished Work Submenu */}
                    <div className="absolute left-full top-0 ml-2 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover/furnished:opacity-100 group-hover/furnished:visible transition-all duration-200 z-50">
                      <div className="p-2">
                        <button
                          onClick={() => navigate('/interiors/kitchen')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Utensils className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Kitchen Interior</span>
                        </button>
                        <button
                          onClick={() => navigate('/interiors/bedroom')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Bed className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Bedroom Interior</span>
                        </button>
                        <button
                          onClick={() => navigate('/interiors/study-room')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <BookOpen className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Study Room Interior</span>
                        </button>
                        <button
                          onClick={() => navigate('/interiors/puja-room')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Star className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Puja Room Interior</span>
                        </button>
                        <button
                          onClick={() => navigate('/interiors/dining-hall')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Utensils className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Dining Hall Interior</span>
                        </button>
                        <button
                          onClick={() => navigate('/works/furnished-work')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <PaintBucket className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">All Furnished Work</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/welding">
                    <div className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Wrench className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">Welding Works</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    {/* Welding Works Submenu */}
                    <div className="absolute left-full top-0 ml-2 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover/welding:opacity-100 group-hover/welding:visible transition-all duration-200 z-50">
                      <div className="p-2">
                        <button
                          onClick={() => navigate('/welding/main-gates')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Shield className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Main Gates</span>
                        </button>
                        <button
                          onClick={() => navigate('/welding/window-grills')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Grid3X3 className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Window Grills</span>
                        </button>
                        <button
                          onClick={() => navigate('/welding/balcony-grills')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <TreePine className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Balcony Grills</span>
                        </button>
                        <button
                          onClick={() => navigate('/welding/sheet-works')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Square className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Sheet Works</span>
                        </button>
                        <button
                          onClick={() => navigate('/welding/staircase')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <ArrowUp className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Staircase</span>
                        </button>
                        <button
                          onClick={() => navigate('/welding/compound-grills')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Home className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Compound Grills</span>
                        </button>
                        <button
                          onClick={() => navigate('/welding/technical-works')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Wrench className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">Technical Works</span>
                        </button>
                        <button
                          onClick={() => navigate('/works/welding-works')}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Hammer className="w-5 h-5 text-primary" />
                          <span className="text-foreground font-medium">All Welding Works</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">Services</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {[
                    { id: 'all-services', name: 'All Services', path: '/all-services' },
                    { id: 'iot-integration', name: 'IoT Integration', path: '/services/iot-integration' },
                    { id: 'smart-home', name: 'Smart Home Automation', path: '/services/smart-home' },
                    { id: 'automatic-gate', name: 'Automatic Gate', path: '/services/automatic-gate' },
                    { id: 'iot-water', name: 'IoT Water Management', path: '/services/iot-water' },
                  ].map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigate(service.path)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                    >
                      <Cpu className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => navigate("/about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate("/contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* Right: Auth Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="cta" 
              size="sm" 
              onClick={handleAuthAction}
              className="flex items-center space-x-2"
            >
              {user ? (
                <>
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-3">
            <ThemeToggle />
            <Button 
              variant="cta" 
              size="sm"
              onClick={handleAuthAction}
              className="flex items-center space-x-1"
            >
              {user ? <LogOut className="w-3 h-3" /> : <User className="w-3 h-3" />}
              <span className="hidden xs:inline">{user ? 'Out' : 'In'}</span>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => navigate("/")} className="text-foreground hover:text-primary transition-colors">Home</button>
              <div className="space-y-2">
                <span className="text-foreground font-medium">Projects & Designs</span>
                <div className="pl-4 space-y-2">
                    <div className="space-y-1">
                      <div className="text-foreground text-sm font-medium px-2">Wood Work</div>
                      <div className="pl-4">
                        <button
                          onClick={() => {
                            navigate('/main-doors');
                            setIsMenuOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                        >
                          <Home className="w-4 h-4 text-primary" />
                          <span className="text-foreground text-sm">Main Doors</span>
                        </button>
                      </div>
                    </div>
                  <button
                    onClick={() => {
                      navigate('/works/furnished-work');
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                  >
                    <PaintBucket className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-sm">Furnished Work</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/works/welding-works');
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                  >
                    <Wrench className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-sm">Welding Works</span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-foreground font-medium">Services</span>
                <div className="pl-4 space-y-2">
                  {[
                    { id: 'iot-integration', name: 'IoT Integration', path: '/services/iot-integration' },
                    { id: 'smart-home', name: 'Smart Home Automation', path: '/services/smart-home' },
                    { id: 'automatic-gate', name: 'Automatic Gate', path: '/services/automatic-gate' },
                    { id: 'iot-water', name: 'IoT Water Management', path: '/services/iot-water' },
                  ].map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        navigate(service.path);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                    >
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="text-foreground text-sm">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => navigate("/about")} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => navigate("/contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
                <div className="flex flex-col space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <Button 
                    variant="cta" 
                    size="sm" 
                    className="w-full flex items-center justify-center space-x-2"
                    onClick={() => {
                      handleAuthAction();
                      setIsMenuOpen(false);
                    }}
                  >
                    {user ? <LogOut className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    <span>{user ? 'Sign Out' : 'Sign In'}</span>
                  </Button>
                </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;