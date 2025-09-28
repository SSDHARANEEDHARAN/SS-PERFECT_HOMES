import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import DoorQuoteForm from "@/components/DoorQuoteForm";

// Import all main door images
import mainDoor1 from "@/assets/wood-work-1.jpg";
import mainDoor2 from "@/assets/wood-work-2.jpg";
import mainDoor3 from "@/assets/wood-work-3.jpg";
import mainDoor4 from "@/assets/wood-work-4.jpg";
import mainDoor5 from "@/assets/wood-work-5.jpg";
import mainDoor6 from "@/assets/wood-work-6.jpg";
import mainDoor7 from "@/assets/wood-work-7.jpg";
import mainDoor8 from "@/assets/wood-work-8.jpg";
import mainDoor9 from "@/assets/wood-work-9.jpg";
import mainDoor10 from "@/assets/wood-work-10.jpg";
import mainDoor11 from "@/assets/wood-work-11.jpg";
import mainDoor12 from "@/assets/wood-work-12.jpg";

const mainDoors = [
  { src: mainDoor1, name: "Premium Teak Door", specs: { material: "Teak Wood", size: "7x3 ft", finish: "Natural Polish", hardware: "Brass Fittings" } },
  { src: mainDoor2, name: "Royal Mahogany Door", specs: { material: "Mahogany Wood", size: "8x3.5 ft", finish: "Glossy Lacquer", hardware: "Antique Bronze" } },
  { src: mainDoor3, name: "Classic Oak Door", specs: { material: "Oak Wood", size: "7.5x3 ft", finish: "Matte Varnish", hardware: "Stainless Steel" } },
  { src: mainDoor4, name: "Modern Pine Door", specs: { material: "Pine Wood", size: "7x3 ft", finish: "UV Coating", hardware: "Chrome Handles" } },
  { src: mainDoor5, name: "Luxury Rosewood Door", specs: { material: "Rosewood", size: "8x4 ft", finish: "High Gloss", hardware: "Gold Plated" } },
  { src: mainDoor6, name: "Heritage Teak Door", specs: { material: "Teak Wood", size: "7.5x3.5 ft", finish: "Traditional Finish", hardware: "Vintage Brass" } },
  { src: mainDoor7, name: "Designer Walnut Door", specs: { material: "Walnut Wood", size: "8x3 ft", finish: "Satin Finish", hardware: "Modern Handles" } },
  { src: mainDoor8, name: "Elite Mahogany Door", specs: { material: "Mahogany Wood", size: "7x3.5 ft", finish: "French Polish", hardware: "Antique Gold" } },
  { src: mainDoor9, name: "Supreme Oak Door", specs: { material: "Oak Wood", size: "8x4 ft", finish: "Natural Oil", hardware: "Forged Iron" } },
  { src: mainDoor10, name: "Grand Teak Door", specs: { material: "Teak Wood", size: "8.5x4 ft", finish: "Royal Polish", hardware: "Palace Brass" } },
  { src: mainDoor11, name: "Executive Pine Door", specs: { material: "Pine Wood", size: "7.5x3 ft", finish: "Executive Stain", hardware: "Steel Handles" } },
  { src: mainDoor12, name: "Majestic Rosewood Door", specs: { material: "Rosewood", size: "8x3.5 ft", finish: "Mirror Finish", hardware: "Crystal Knobs" } }
];

interface MainDoorCarouselProps {
  onClose: () => void;
}

export default function MainDoorCarousel({ onClose }: MainDoorCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentDoor = mainDoors[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mainDoors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mainDoors.length) % mainDoors.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleEnquiryClick = () => {
    setShowQuoteForm(true);
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Close button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <ChevronLeft className="h-4 w-4 rotate-45" />
        </Button>

        {/* Main carousel container */}
        <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border">
          {/* Image carousel */}
          <div 
            className="relative h-[60vh] md:h-[70vh] flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image display with blur effect */}
            <div className="flex items-center justify-center w-full h-full relative px-16">
              {/* Previous image (blurred) */}
              <div className="absolute left-0 w-1/4 h-3/4 opacity-50">
                <img
                  src={mainDoors[(currentIndex - 1 + mainDoors.length) % mainDoors.length].src}
                  alt="Previous door"
                  className="w-full h-full object-cover rounded-lg blur-sm"
                />
              </div>

              {/* Current image (focused) */}
              <div className="w-1/2 h-full flex items-center justify-center">
                <img
                  src={currentDoor.src}
                  alt={currentDoor.name}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500"
                />
              </div>

              {/* Next image (blurred) */}
              <div className="absolute right-0 w-1/4 h-3/4 opacity-50">
                <img
                  src={mainDoors[(currentIndex + 1) % mainDoors.length].src}
                  alt="Next door"
                  className="w-full h-full object-cover rounded-lg blur-sm"
                />
              </div>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {mainDoors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Door specifications */}
          <div className="p-6 bg-card/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">{currentDoor.name}</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Material</div>
                  <div className="font-semibold text-foreground">{currentDoor.specs.material}</div>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Dimensions</div>
                  <div className="font-semibold text-foreground">{currentDoor.specs.size}</div>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Finish</div>
                  <div className="font-semibold text-foreground">{currentDoor.specs.finish}</div>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Hardware</div>
                  <div className="font-semibold text-foreground">{currentDoor.specs.hardware}</div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-3 text-lg font-semibold"
                  onClick={handleEnquiryClick}
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quote form modal */}
        {showQuoteForm && (
          <DoorQuoteForm 
            selectedImage={{
              id: currentIndex + 1,
              src: currentDoor.src,
              title: currentDoor.name,
              description: `Material: ${currentDoor.specs.material} | Size: ${currentDoor.specs.size} | Finish: ${currentDoor.specs.finish} | Hardware: ${currentDoor.specs.hardware}`
            }}
            onClose={() => setShowQuoteForm(false)}
            onBack={() => setShowQuoteForm(false)}
          />
        )}
      </div>
    </div>
  );
}