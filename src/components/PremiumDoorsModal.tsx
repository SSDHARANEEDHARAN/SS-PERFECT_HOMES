import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Quote, Home, Sparkles, ChefHat, Bed, Wind, Church } from "lucide-react";
import { cn } from "@/lib/utils";
import DoorQuoteForm from "./DoorQuoteForm";

// Import door images - categorized by type
import door1 from "@/assets/doors-service.jpg";
import automaticGate1 from "@/assets/automatic-gate-1.jpg";
import automaticGate2 from "@/assets/automatic-gate-2.jpg";
import automaticGate3 from "@/assets/automatic-gate-3.jpg";
import automaticGate4 from "@/assets/automatic-gate-4.jpg";
import automaticGate5 from "@/assets/automatic-gate-5.jpg";
import automaticGate6 from "@/assets/automatic-gate-6.jpg";
import automaticGate7 from "@/assets/automatic-gate-7.jpg";

// Wood work images for wooden doors
import woodWork1 from "@/assets/wood-work-1.jpg";
import woodWork2 from "@/assets/wood-work-2.jpg";
import woodWork3 from "@/assets/wood-work-3.jpg";
import woodWork4 from "@/assets/wood-work-4.jpg";
import woodWork5 from "@/assets/wood-work-5.jpg";
import woodWork6 from "@/assets/wood-work-6.jpg";
import woodWork7 from "@/assets/wood-work-7.jpg";
import woodWork8 from "@/assets/wood-work-8.jpg";
import woodWork9 from "@/assets/wood-work-9.jpg";
import woodWork10 from "@/assets/wood-work-10.jpg";

// Craft work images for artistic doors
import craftWork1 from "@/assets/craft-work-1.jpg";
import craftWork2 from "@/assets/craft-work-2.jpg";
import craftWork3 from "@/assets/craft-work-3.jpg";
import craftWork4 from "@/assets/craft-work-4.jpg";
import craftWork5 from "@/assets/craft-work-5.jpg";
import craftWork6 from "@/assets/craft-work-6.jpg";
import craftWork7 from "@/assets/craft-work-7.jpg";
import craftWork8 from "@/assets/craft-work-8.jpg";
import craftWork9 from "@/assets/craft-work-9.jpg";
import craftWork10 from "@/assets/craft-work-10.jpg";

// Furnished work images for modern doors
import furnishedWork1 from "@/assets/furnished-work-1.jpg";
import furnishedWork2 from "@/assets/furnished-work-2.jpg";
import furnishedWork3 from "@/assets/furnished-work-3.jpg";
import furnishedWork4 from "@/assets/furnished-work-4.jpg";
import furnishedWork5 from "@/assets/furnished-work-5.jpg";
import furnishedWork6 from "@/assets/furnished-work-6.jpg";
import furnishedWork7 from "@/assets/furnished-work-7.jpg";
import furnishedWork8 from "@/assets/furnished-work-8.jpg";
import furnishedWork9 from "@/assets/furnished-work-9.jpg";
import furnishedWork10 from "@/assets/furnished-work-10.jpg";

interface PremiumDoorsModalProps {
  onClose: () => void;
}

const doorCategories = {
  "main-door": {
    name: "Main Door",
    icon: Home,
    images: [
      { id: 1, src: door1, title: "Premium Main Door", description: "Elegant entrance door with security features" },
      { id: 2, src: automaticGate1, title: "Automatic Main Gate", description: "Smart gate with remote control access" },
      { id: 3, src: automaticGate2, title: "Security Main Door", description: "Heavy-duty main door with advanced security" },
      { id: 4, src: automaticGate3, title: "Classic Main Door", description: "Traditional design with modern functionality" },
      { id: 5, src: automaticGate4, title: "Modern Main Door", description: "Contemporary design with smart locks" },
      { id: 6, src: automaticGate5, title: "Designer Main Door", description: "Artistic main door with premium finish" },
      { id: 7, src: automaticGate6, title: "Wooden Main Door", description: "Solid wood construction with brass fittings" },
      { id: 8, src: automaticGate7, title: "Steel Main Door", description: "Reinforced steel door with modern design" },
      { id: 9, src: woodWork1, title: "Carved Wooden Main Door", description: "Hand-carved wooden door with intricate designs" },
      { id: 10, src: woodWork2, title: "Luxury Wooden Door", description: "Premium wood with gold accents" },
      { id: 11, src: woodWork3, title: "Traditional Wooden Door", description: "Classic wooden door with traditional hardware" },
      { id: 12, src: woodWork4, title: "Modern Wooden Door", description: "Contemporary wood design with sleek finish" },
      { id: 13, src: woodWork5, title: "Panel Main Door", description: "Multi-panel wooden design with raised sections" },
      { id: 14, src: woodWork6, title: "Minimalist Main Door", description: "Clean lines and simple elegance" },
      { id: 15, src: woodWork7, title: "Double Main Door", description: "Wide entrance with dual wooden panels" },
      { id: 16, src: woodWork8, title: "Colonial Main Door", description: "Classic colonial style entrance" },
      { id: 17, src: woodWork9, title: "Rustic Main Door", description: "Rustic wood finish with vintage hardware" },
      { id: 18, src: woodWork10, title: "Custom Main Door", description: "Personalized wooden design as per requirements" },
      { id: 19, src: furnishedWork1, title: "Contemporary Main Door", description: "Ultra-modern design with sleek finish" },
      { id: 20, src: furnishedWork2, title: "Luxury Main Entrance", description: "High-end materials and premium finishes" },
      { id: 21, src: furnishedWork3, title: "Smart Main Door", description: "Digital lock enabled main door with sensors" }
    ]
  },
  "puja-door": {
    name: "Puja Door",
    icon: Sparkles,
    images: [
      { id: 22, src: craftWork1, title: "Traditional Puja Door", description: "Sacred designs with brass work and carvings" },
      { id: 23, src: craftWork2, title: "Carved Puja Door", description: "Hand-carved religious motifs and symbols" },
      { id: 24, src: craftWork3, title: "Brass Puja Door", description: "Premium brass finish with divine engravings" },
      { id: 25, src: craftWork4, title: "Wooden Puja Door", description: "Sacred wood with traditional religious carvings" },
      { id: 26, src: craftWork5, title: "Ornate Puja Door", description: "Intricate designs with gold accents and patterns" },
      { id: 27, src: craftWork6, title: "Temple Style Door", description: "Temple architecture inspired door design" },
      { id: 28, src: craftWork7, title: "Decorative Puja Door", description: "Artistic religious symbols and motifs" },
      { id: 29, src: craftWork8, title: "Sacred Puja Door", description: "Blessed entrance for worship and prayers" },
      { id: 30, src: craftWork9, title: "Antique Puja Door", description: "Vintage style with aged finish and patina" },
      { id: 31, src: craftWork10, title: "Custom Puja Door", description: "Personalized spiritual designs and symbols" },
      { id: 32, src: woodWork1, title: "Teak Puja Door", description: "Premium teak wood with religious carvings" },
      { id: 33, src: woodWork2, title: "Rosewood Puja Door", description: "Rich rosewood with divine carvings" },
      { id: 34, src: woodWork3, title: "Sandalwood Puja Door", description: "Fragrant sandalwood construction with carvings" },
      { id: 35, src: woodWork4, title: "Hand-painted Puja Door", description: "Artistic hand-painted religious scenes" },
      { id: 36, src: woodWork5, title: "Embossed Puja Door", description: "Raised religious symbols and patterns" },
      { id: 37, src: woodWork6, title: "Lattice Puja Door", description: "Intricate lattice work with spiritual designs" },
      { id: 38, src: woodWork7, title: "Silver Puja Door", description: "Silver-plated with divine motifs" },
      { id: 39, src: woodWork8, title: "Copper Puja Door", description: "Copper finish with spiritual engravings" },
      { id: 40, src: woodWork9, title: "Marble Inlay Puja Door", description: "Wooden door with marble inlay work" },
      { id: 41, src: woodWork10, title: "Gilded Puja Door", description: "Gold-leafed decorative elements" },
      { id: 42, src: door1, title: "Premium Puja Door", description: "Luxury finish with sacred elements" }
    ]
  },
  "kitchen-door": {
    name: "Kitchen Door", 
    icon: ChefHat,
    images: [
      { id: 43, src: furnishedWork1, title: "Modern Kitchen Door", description: "Sleek design with easy maintenance and cleaning" },
      { id: 44, src: furnishedWork2, title: "Glass Kitchen Door", description: "Transparent glass with aluminum frame" },
      { id: 45, src: furnishedWork3, title: "Contemporary Kitchen Door", description: "Ultra-modern minimalist design for kitchens" },
      { id: 46, src: furnishedWork4, title: "Sliding Kitchen Door", description: "Space-saving sliding glass door mechanism" },
      { id: 47, src: furnishedWork5, title: "Modular Kitchen Door", description: "Integrated with modular kitchen design" },
      { id: 48, src: furnishedWork6, title: "Stainless Steel Door", description: "Commercial grade stainless steel construction" },
      { id: 49, src: furnishedWork7, title: "Aluminium Kitchen Door", description: "Lightweight aluminum with powder coating" },
      { id: 50, src: furnishedWork8, title: "Swing Kitchen Door", description: "Dual-swing mechanism for easy access" },
      { id: 51, src: furnishedWork9, title: "Frosted Kitchen Door", description: "Privacy glass with modern appeal" },
      { id: 52, src: furnishedWork10, title: "Smart Kitchen Door", description: "Automated opening and closing system" },
      { id: 53, src: woodWork1, title: "Wooden Kitchen Door", description: "Moisture-resistant wood with sealant" },
      { id: 54, src: woodWork2, title: "Louvered Kitchen Door", description: "Ventilation slats for air circulation" },
      { id: 55, src: woodWork3, title: "Panel Kitchen Door", description: "Raised panel design with wood trim" },
      { id: 56, src: woodWork4, title: "Barn Kitchen Door", description: "Rustic barn-style sliding door" },
      { id: 57, src: woodWork5, title: "Folding Kitchen Door", description: "Accordion-style folding door system" },
      { id: 58, src: woodWork6, title: "Pocket Kitchen Door", description: "Disappears into wall cavity when open" },
      { id: 59, src: woodWork7, title: "Cafe Kitchen Door", description: "Half-height swinging door design" },
      { id: 60, src: woodWork8, title: "Easy-Clean Kitchen Door", description: "Stain-resistant surface coating" },
      { id: 61, src: woodWork9, title: "Ventilated Kitchen Door", description: "Built-in ventilation system for cooking areas" },
      { id: 62, src: woodWork10, title: "Soundproof Kitchen Door", description: "Noise reduction for open kitchen layouts" },
      { id: 63, src: door1, title: "Premium Kitchen Door", description: "High-end materials and finishes for luxury kitchens" }
    ]
  },
  "bedroom-door": {
    name: "Bedroom Door",
    icon: Bed,
    images: [
      { id: 64, src: woodWork1, title: "Classic Bedroom Door", description: "Traditional wooden design with privacy features" },
      { id: 65, src: woodWork2, title: "Modern Bedroom Door", description: "Contemporary style with clean lines" },
      { id: 66, src: woodWork3, title: "Solid Wood Bedroom Door", description: "Premium solid wood construction" },
      { id: 67, src: woodWork4, title: "Panel Bedroom Door", description: "Raised or recessed panel design" },
      { id: 68, src: woodWork5, title: "Flush Bedroom Door", description: "Smooth flush surface design" },
      { id: 69, src: woodWork6, title: "Painted Bedroom Door", description: "Custom paint finish options available" },
      { id: 70, src: woodWork7, title: "Minimalist Bedroom Door", description: "Simple and elegant bedroom entrance" },
      { id: 71, src: woodWork8, title: "Wooden Bedroom Door", description: "Natural wood grain with protective finish" },
      { id: 72, src: woodWork9, title: "Designer Bedroom Door", description: "Stylish design for modern bedrooms" },
      { id: 73, src: woodWork10, title: "Luxury Bedroom Door", description: "Premium materials for master bedrooms" },
      { id: 74, src: furnishedWork1, title: "Contemporary Bedroom Door", description: "Modern design with sleek hardware" },
      { id: 75, src: furnishedWork2, title: "Sliding Bedroom Door", description: "Space-saving sliding mechanism" },
      { id: 76, src: furnishedWork3, title: "Glass Panel Bedroom Door", description: "Frosted glass panels for light transmission" },
      { id: 77, src: furnishedWork4, title: "Soundproof Bedroom Door", description: "Noise-blocking construction for privacy" },
      { id: 78, src: furnishedWork5, title: "Bi-fold Bedroom Door", description: "Folding door for closet access" },
      { id: 79, src: furnishedWork6, title: "Mirrored Bedroom Door", description: "Built-in full-length mirror surface" },
      { id: 80, src: furnishedWork7, title: "Double Bedroom Door", description: "Wide opening double doors for master suite" },
      { id: 81, src: furnishedWork8, title: "Pocket Bedroom Door", description: "Hidden sliding door system" },
      { id: 82, src: furnishedWork9, title: "Security Bedroom Door", description: "Enhanced security features for safety" },
      { id: 83, src: furnishedWork10, title: "Custom Bedroom Door", description: "Personalized design for unique spaces" },
      { id: 84, src: door1, title: "Master Bedroom Door", description: "Luxury door for master bedroom suite" }
    ]
  },
  "balcony-door": {
    name: "Balcony Door",
    icon: Wind,
    images: [
      { id: 85, src: furnishedWork1, title: "Glass Balcony Door", description: "Full glass panel with weather sealing" },
      { id: 86, src: furnishedWork2, title: "Sliding Balcony Door", description: "Large sliding glass doors for balcony access" },
      { id: 87, src: furnishedWork3, title: "French Balcony Door", description: "Classic French doors leading to balcony" },
      { id: 88, src: furnishedWork4, title: "Bi-fold Balcony Door", description: "Accordion-style folding doors for wide opening" },
      { id: 89, src: furnishedWork5, title: "UPVC Balcony Door", description: "Maintenance-free UPVC construction" },
      { id: 90, src: furnishedWork6, title: "Aluminum Balcony Door", description: "Lightweight aluminum frame with thermal break" },
      { id: 91, src: furnishedWork7, title: "Energy Efficient Door", description: "Double-glazed glass for energy conservation" },
      { id: 92, src: furnishedWork8, title: "Security Balcony Door", description: "Reinforced glass with multi-point locking" },
      { id: 93, src: furnishedWork9, title: "Weather-Sealed Door", description: "Superior weather protection system" },
      { id: 94, src: furnishedWork10, title: "Smart Glass Door", description: "Switchable privacy glass technology" },
      { id: 95, src: automaticGate1, title: "Automated Balcony Door", description: "Motorized opening and closing system" },
      { id: 96, src: automaticGate2, title: "Screen Balcony Door", description: "Integrated insect screen system" },
      { id: 97, src: automaticGate3, title: "Multi-Panel Door", description: "Multiple sliding panels for flexibility" },
      { id: 98, src: automaticGate4, title: "Floor-to-Ceiling Door", description: "Maximum glass area for natural light" },
      { id: 99, src: automaticGate5, title: "Corner Balcony Door", description: "L-shaped corner opening design" },
      { id: 100, src: automaticGate6, title: "Lift & Slide Door", description: "Heavy-duty lift and slide mechanism" },
      { id: 101, src: automaticGate7, title: "Curved Balcony Door", description: "Curved glass panel design feature" },
      { id: 102, src: woodWork1, title: "Wooden Balcony Door", description: "Traditional wood frame with glass panels" },
      { id: 103, src: woodWork2, title: "Composite Balcony Door", description: "Modern composite materials for durability" },
      { id: 104, src: woodWork3, title: "Pocket Balcony Door", description: "Disappearing pocket door system" },
      { id: 105, src: door1, title: "Designer Balcony Door", description: "Architectural statement piece for balconies" }
    ]
  },
  "temple-door": {
    name: "Temple Door",
    icon: Church,
    images: [
      { id: 106, src: craftWork1, title: "Traditional Temple Door", description: "Authentic temple architecture with carvings" },
      { id: 107, src: craftWork2, title: "Carved Temple Door", description: "Intricate stone and wood religious carvings" },
      { id: 108, src: craftWork3, title: "Bronze Temple Door", description: "Heavy bronze with divine motifs and symbols" },
      { id: 109, src: craftWork4, title: "Sacred Temple Door", description: "Blessed entrance with spiritual significance" },
      { id: 110, src: craftWork5, title: "Ornate Temple Door", description: "Elaborate decorations with gold leafing" },
      { id: 111, src: craftWork6, title: "Stone Temple Door", description: "Natural stone carved entrance gateway" },
      { id: 112, src: craftWork7, title: "Marble Temple Door", description: "Premium marble with intricate inlay work" },
      { id: 113, src: craftWork8, title: "Antique Temple Door", description: "Vintage style with aged patina finish" },
      { id: 114, src: craftWork9, title: "Artistic Temple Door", description: "Hand-painted religious artwork and scenes" },
      { id: 115, src: craftWork10, title: "Divine Temple Door", description: "Spiritual symbols and divine representations" },
      { id: 116, src: woodWork1, title: "Teak Temple Door", description: "Sacred teak wood with religious carvings" },
      { id: 117, src: woodWork2, title: "Sandalwood Temple Door", description: "Fragrant sandalwood construction" },
      { id: 118, src: woodWork3, title: "Rosewood Temple Door", description: "Rich rosewood with hand-carved details" },
      { id: 119, src: woodWork4, title: "Embossed Temple Door", description: "Raised religious symbols and patterns" },
      { id: 120, src: woodWork5, title: "Double Temple Door", description: "Grand double-door temple entrance" },
      { id: 121, src: woodWork6, title: "Arched Temple Door", description: "Traditional arched doorway design" },
      { id: 122, src: woodWork7, title: "Lattice Temple Door", description: "Intricate lattice work with spiritual motifs" },
      { id: 123, src: woodWork8, title: "Silver Temple Door", description: "Silver-plated divine entrance" },
      { id: 124, src: woodWork9, title: "Copper Temple Door", description: "Copper finish with oxidation effects" },
      { id: 125, src: woodWork10, title: "Gilded Temple Door", description: "Gold-leafed decorative temple entrance" },
      { id: 126, src: door1, title: "Premium Temple Door", description: "Luxury materials for sacred divine spaces" }
    ]
  }
};

const PremiumDoorsModal = ({ onClose }: PremiumDoorsModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState("main-door");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  const currentImages = doorCategories[selectedCategory as keyof typeof doorCategories].images;

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsAutoplay(true);
  }, [selectedCategory]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay, currentImages.length]);

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const handleQuoteClick = () => {
    setIsAutoplay(false);
    setShowQuoteForm(true);
  };

  if (showQuoteForm) {
    return (
      <DoorQuoteForm
        selectedImage={currentImages[currentIndex]}
        onClose={() => {
          setShowQuoteForm(false);
          onClose();
        }}
        onBack={() => setShowQuoteForm(false)}
      />
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
        <div className="relative h-full bg-background rounded-lg overflow-hidden">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Premium Doors Collection</h2>
                <p className="text-muted-foreground">Discover our premium door solutions for every space</p>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            {/* Category Selection */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(doorCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? "cta" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(key)}
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative h-full pt-32 pb-20">
            <div className="flex items-center justify-center h-full px-4">
              {/* Left Arrow */}
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Carousel Images */}
              <div className="flex items-center justify-center space-x-8 w-full">
                {[-1, 0, 1].map((offset) => {
                  const imageIndex = (currentIndex + offset + currentImages.length) % currentImages.length;
                  const image = currentImages[imageIndex];
                  const isCenter = offset === 0;

                  return (
                    <div
                      key={imageIndex}
                      className={cn(
                        "relative transition-all duration-500 ease-in-out rounded-lg overflow-hidden cursor-pointer",
                        isCenter
                          ? "w-96 h-[500px] opacity-100 scale-100 shadow-elegant z-10"
                          : "w-64 h-80 opacity-40 scale-75 blur-sm hover:opacity-60"
                      )}
                      onClick={() => !isCenter && setCurrentIndex(imageIndex)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      )}
                      {isCenter && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                          <p className="text-white/90 text-sm mb-4">{image.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow */}  
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Category and Progress Info */}
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-muted-foreground">
                    {doorCategories[selectedCategory as keyof typeof doorCategories].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {currentImages.length}
                  </div>
                </div>
                
                {/* Mini Dots Indicator - show first 10 */}
                <div className="flex space-x-1">
                  {currentImages.slice(0, Math.min(10, currentImages.length)).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoplay(false);
                        setCurrentIndex(index);
                      }}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all duration-200",
                        index === currentIndex 
                          ? "bg-primary w-4" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      )}
                    />
                  ))}
                  {currentImages.length > 10 && (
                    <span className="text-xs text-muted-foreground">+{currentImages.length - 10}</span>
                  )}
                </div>
                
                {/* Autoplay Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="text-xs"
                >
                  {isAutoplay ? "Pause" : "Play"}
                </Button>
              </div>

              {/* Quote Button */}
              <Button onClick={handleQuoteClick} variant="cta" className="flex items-center space-x-2">
                <Quote className="w-4 h-4" />
                <span>Get Quote for This Design</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumDoorsModal;