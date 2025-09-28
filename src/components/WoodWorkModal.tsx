import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import { X, Home, Utensils, Bed, TreePine, BookOpen, Waves, ArrowLeft, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Autoplay from "embla-carousel-autoplay";

// Import wood work images - using 80 images per category
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
import woodWork11 from "@/assets/wood-work-11.jpg";
import woodWork12 from "@/assets/wood-work-12.jpg";
import woodWork13 from "@/assets/wood-work-13.jpg";
import woodWork14 from "@/assets/wood-work-14.jpg";
import woodWork15 from "@/assets/wood-work-15.jpg";
import woodWork16 from "@/assets/wood-work-16.jpg";
import woodWork17 from "@/assets/wood-work-17.jpg";
import woodWork18 from "@/assets/wood-work-18.jpg";
import woodWork19 from "@/assets/wood-work-19.jpg";
import woodWork20 from "@/assets/wood-work-20.jpg";

// Create 80 images by cycling through the 20 available images
const createImageArray = () => [
  ...Array.from({ length: 4 }, () => [
    woodWork1, woodWork2, woodWork3, woodWork4, woodWork5,
    woodWork6, woodWork7, woodWork8, woodWork9, woodWork10,
    woodWork11, woodWork12, woodWork13, woodWork14, woodWork15,
    woodWork16, woodWork17, woodWork18, woodWork19, woodWork20
  ]).flat()
];

const mainImages = createImageArray();
const pujaImages = createImageArray();
const kitchenImages = createImageArray();
const bedroomImages = createImageArray();
const balconyImages = createImageArray();
const templeImages = createImageArray();
const studyRoomImages = createImageArray();

interface WoodWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string | null;
}

const categories = [
  { id: "main", name: "Main", icon: Home, images: mainImages },
  { id: "puja", name: "Puja", icon: TreePine, images: pujaImages },
  { id: "kitchen", name: "Kitchen", icon: Utensils, images: kitchenImages },
  { id: "bedroom", name: "Bedroom", icon: Bed, images: bedroomImages },
  { id: "balcony", name: "Balcony", icon: Waves, images: balconyImages },
  { id: "temple", name: "Temple", icon: TreePine, images: templeImages },
  { id: "study", name: "Study Room", icon: BookOpen, images: studyRoomImages },
];

const WoodWorkModal: React.FC<WoodWorkModalProps> = ({ isOpen, onClose, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  const { toast } = useToast();

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setCurrentImageIndex(0);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentImageIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleGetQuote = async () => {
    if (!selectedCategoryData) return;
    
    setIsLoadingQuote(true);
    try {
      const currentImage = selectedCategoryData.images[currentImageIndex];
      
      const { data, error } = await supabase.functions.invoke('send-door-quote', {
        body: {
          doorCategory: selectedCategoryData.name,
          imageUrl: currentImage,
          imageIndex: currentImageIndex + 1
        }
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent",
        description: `Quote request for ${selectedCategoryData.name} image ${currentImageIndex + 1} has been sent successfully!`,
      });
    } catch (error) {
      console.error('Error sending quote:', error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoadingQuote(false);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentImageIndex(0);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] bg-background/95 backdrop-blur-sm border border-border overflow-hidden">
        <div className="relative h-full">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          {!selectedCategory ? (
            // Category Selection View
            <div className="p-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Wood Work Categories</h2>
                <p className="text-muted-foreground">Choose a category to explore our collection</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className="group relative overflow-hidden rounded-xl bg-card/50 hover:bg-card/80 border border-border/50 hover:border-border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={category.images[0]}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <Badge variant="secondary" className="bg-background/80 text-foreground">
                              80 Images
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">Premium wood designs</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Image Carousel View
            <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBackToCategories}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Categories</span>
                  </Button>
                  <div className="flex items-center space-x-3">
                    {selectedCategoryData && (
                      <>
                        <selectedCategoryData.icon className="w-6 h-6 text-primary" />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{selectedCategoryData.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Image {currentImageIndex + 1} of {selectedCategoryData.images.length}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <Button
                  onClick={handleGetQuote}
                  disabled={isLoadingQuote}
                  className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isLoadingQuote ? "Sending..." : "Get Quote"}</span>
                </Button>
              </div>

              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-background/50 to-accent/20">
                {selectedCategoryData && (
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <Carousel
                      setApi={setApi}
                      plugins={[plugin.current]}
                      className="w-full max-w-6xl"
                      opts={{
                        align: "center",
                        loop: true,
                      }}
                      onMouseEnter={plugin.current.stop}
                      onMouseLeave={plugin.current.reset}
                    >
                      <CarouselContent className="flex items-center">
                        {selectedCategoryData.images.map((image, index) => {
                          const isCenter = index === currentImageIndex;
                          const isAdjacent = Math.abs(index - currentImageIndex) === 1 || 
                                           (currentImageIndex === 0 && index === selectedCategoryData.images.length - 1) ||
                                           (currentImageIndex === selectedCategoryData.images.length - 1 && index === 0);
                          
                          return (
                            <CarouselItem
                              key={index}
                              className="flex items-center justify-center transition-all duration-500 ease-in-out"
                              style={{ flex: "0 0 33.333%" }}
                            >
                              <div 
                                className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
                                  isCenter 
                                    ? "scale-110 z-10 shadow-2xl" 
                                    : isAdjacent 
                                      ? "scale-90 opacity-70 blur-sm" 
                                      : "scale-75 opacity-40 blur-md"
                                }`}
                                onClick={() => api?.scrollTo(index)}
                              >
                                <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-xl">
                                  <img
                                    src={image}
                                    alt={`${selectedCategoryData.name} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                
                                {/* Center image overlay */}
                                {isCenter && (
                                  <div className="absolute inset-0 border-4 border-primary/50 rounded-xl shadow-elegant">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                      <Badge className="bg-primary text-primary-foreground shadow-lg">
                                        Featured
                                      </Badge>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                      
                      <CarouselPrevious 
                        className="left-4 bg-background/90 hover:bg-background border-border hover:border-primary/50 shadow-lg" 
                      />
                      <CarouselNext 
                        className="right-4 bg-background/90 hover:bg-background border-border hover:border-primary/50 shadow-lg" 
                      />
                    </Carousel>

                    {/* Image counter and info */}
                    <div className="mt-8 text-center">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="text-lg font-semibold text-foreground">
                          {selectedCategoryData.name} - Image {currentImageIndex + 1} of {selectedCategoryData.images.length}
                        </div>
                      </div>
                      
                      {/* Get Quote Button */}
                      <Button
                        onClick={handleGetQuote}
                        disabled={isLoadingQuote}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 px-8 py-3"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-lg font-medium">
                          {isLoadingQuote ? "Sending Quote Request..." : "Get Quote for This Design"}
                        </span>
                      </Button>
                      
                      <p className="text-sm text-muted-foreground mt-2">
                        Click to request a quote for the currently selected design
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Remove thumbnails section since we now have the new carousel design */}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WoodWorkModal;