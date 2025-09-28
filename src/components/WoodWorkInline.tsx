import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, Home, Building, Utensils, Bed, Sunrise, Church, BookOpen } from "lucide-react";
import { toast } from "sonner";
import Autoplay from "embla-carousel-autoplay";
import DoorQuoteForm from "@/components/DoorQuoteForm";
import MainDoorCarousel from "@/components/MainDoorCarousel";

// Import all door images - Main Doors (Wood Work)
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

// Puja/Temple Doors (Craft Work)
import pujaDoor1 from "@/assets/craft-work-1.jpg";
import pujaDoor2 from "@/assets/craft-work-2.jpg";
import pujaDoor3 from "@/assets/craft-work-3.jpg";
import pujaDoor4 from "@/assets/craft-work-4.jpg";
import pujaDoor5 from "@/assets/craft-work-5.jpg";
import pujaDoor6 from "@/assets/craft-work-6.jpg";
import pujaDoor7 from "@/assets/craft-work-7.jpg";
import pujaDoor8 from "@/assets/craft-work-8.jpg";
import pujaDoor9 from "@/assets/craft-work-9.jpg";
import pujaDoor10 from "@/assets/craft-work-10.jpg";
import pujaDoor11 from "@/assets/craft-work-11.jpg";
import pujaDoor12 from "@/assets/craft-work-12.jpg";

// Kitchen/Modern Doors (Furnished Work)
import kitchenDoor1 from "@/assets/furnished-work-1.jpg";
import kitchenDoor2 from "@/assets/furnished-work-2.jpg";
import kitchenDoor3 from "@/assets/furnished-work-3.jpg";
import kitchenDoor4 from "@/assets/furnished-work-4.jpg";
import kitchenDoor5 from "@/assets/furnished-work-5.jpg";
import kitchenDoor6 from "@/assets/furnished-work-6.jpg";
import kitchenDoor7 from "@/assets/furnished-work-7.jpg";
import kitchenDoor8 from "@/assets/furnished-work-8.jpg";
import kitchenDoor9 from "@/assets/furnished-work-9.jpg";
import kitchenDoor10 from "@/assets/furnished-work-10.jpg";
import kitchenDoor11 from "@/assets/furnished-work-11.jpg";
import kitchenDoor12 from "@/assets/furnished-work-12.jpg";

// Bedroom/Interior Doors (Wood Work 13-20)
import bedroomDoor1 from "@/assets/wood-work-13.jpg";
import bedroomDoor2 from "@/assets/wood-work-14.jpg";
import bedroomDoor3 from "@/assets/wood-work-15.jpg";
import bedroomDoor4 from "@/assets/wood-work-16.jpg";
import bedroomDoor5 from "@/assets/wood-work-17.jpg";
import bedroomDoor6 from "@/assets/wood-work-18.jpg";
import bedroomDoor7 from "@/assets/wood-work-19.jpg";
import bedroomDoor8 from "@/assets/wood-work-20.jpg";
import bedroomDoor9 from "@/assets/furnished-work-13.jpg";
import bedroomDoor10 from "@/assets/furnished-work-14.jpg";
import bedroomDoor11 from "@/assets/furnished-work-15.jpg";
import bedroomDoor12 from "@/assets/furnished-work-16.jpg";

// Automatic/Security Doors (Automatic Gates)
import balconyDoor1 from "@/assets/automatic-gate-1.jpg";
import balconyDoor2 from "@/assets/automatic-gate-2.jpg";
import balconyDoor3 from "@/assets/automatic-gate-3.jpg";
import balconyDoor4 from "@/assets/automatic-gate-4.jpg";
import balconyDoor5 from "@/assets/automatic-gate-5.jpg";
import balconyDoor6 from "@/assets/automatic-gate-6.jpg";
import balconyDoor7 from "@/assets/automatic-gate-7.jpg";
import balconyDoor8 from "@/assets/automatic-gate-8.jpg";
import balconyDoor9 from "@/assets/automatic-gate-9.jpg";
import balconyDoor10 from "@/assets/automatic-gate-10.jpg";
import balconyDoor11 from "@/assets/automatic-gate-11.jpg";
import balconyDoor12 from "@/assets/automatic-gate-12.jpg";

// Temple/Sacred Doors (Craft Work 13-20)
import templeDoor1 from "@/assets/craft-work-13.jpg";
import templeDoor2 from "@/assets/craft-work-14.jpg";
import templeDoor3 from "@/assets/craft-work-15.jpg";
import templeDoor4 from "@/assets/craft-work-16.jpg";
import templeDoor5 from "@/assets/craft-work-17.jpg";
import templeDoor6 from "@/assets/craft-work-18.jpg";
import templeDoor7 from "@/assets/craft-work-19.jpg";
import templeDoor8 from "@/assets/craft-work-20.jpg";
import templeDoor9 from "@/assets/furnished-work-17.jpg";
import templeDoor10 from "@/assets/furnished-work-18.jpg";
import templeDoor11 from "@/assets/furnished-work-19.jpg";
import templeDoor12 from "@/assets/furnished-work-20.jpg";

// Study/Office Doors (Automatic Gates 13-20)
import studyDoor1 from "@/assets/automatic-gate-13.jpg";
import studyDoor2 from "@/assets/automatic-gate-14.jpg";
import studyDoor3 from "@/assets/automatic-gate-15.jpg";
import studyDoor4 from "@/assets/automatic-gate-16.jpg";
import studyDoor5 from "@/assets/automatic-gate-17.jpg";
import studyDoor6 from "@/assets/automatic-gate-18.jpg";
import studyDoor7 from "@/assets/automatic-gate-19.jpg";
import studyDoor8 from "@/assets/automatic-gate-20.jpg";

const categories = [
  {
    id: "main",
    name: "Main Doors",
    icon: Home,
    images: [
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
    ]
  },
  {
    id: "puja",
    name: "Puja Doors",
    icon: Church,
    images: [
      { src: pujaDoor1, name: "Sacred Teak Temple Door", specs: { material: "Teak Wood", size: "6x2.5 ft", finish: "Natural Oil", hardware: "Traditional Brass" } },
      { src: pujaDoor2, name: "Divine Carved Door", specs: { material: "Sheesham Wood", size: "6.5x3 ft", finish: "Hand Carved", hardware: "Antique Brass" } },
      { src: pujaDoor3, name: "Spiritual Sandalwood Door", specs: { material: "Sandalwood", size: "5.5x2 ft", finish: "Natural Wax", hardware: "Silver Fittings" } },
      { src: pujaDoor4, name: "Temple Style Door", specs: { material: "Mango Wood", size: "6x2.5 ft", finish: "Traditional Stain", hardware: "Copper Handles" } },
      { src: pujaDoor5, name: "Ornate Worship Door", specs: { material: "Walnut Wood", size: "7x3 ft", finish: "Gold Leaf", hardware: "Decorative Brass" } },
      { src: pujaDoor6, name: "Blessed Teak Door", specs: { material: "Teak Wood", size: "6.5x2.5 ft", finish: "Sacred Oil", hardware: "Temple Bronze" } },
      { src: pujaDoor7, name: "Divine Rosewood Door", specs: { material: "Rosewood", size: "6x3 ft", finish: "Holy Polish", hardware: "Ornate Silver" } },
      { src: pujaDoor8, name: "Sacred Sheesham Door", specs: { material: "Sheesham Wood", size: "6.5x2.5 ft", finish: "Prayer Finish", hardware: "Blessed Brass" } },
      { src: pujaDoor9, name: "Temple Walnut Door", specs: { material: "Walnut Wood", size: "7x2.5 ft", finish: "Devotional Stain", hardware: "Sacred Metal" } },
      { src: pujaDoor10, name: "Spiritual Oak Door", specs: { material: "Oak Wood", size: "6x2.5 ft", finish: "Divine Polish", hardware: "Holy Copper" } },
      { src: pujaDoor11, name: "Worship Mango Door", specs: { material: "Mango Wood", size: "6.5x3 ft", finish: "Blessed Finish", hardware: "Temple Gold" } },
      { src: pujaDoor12, name: "Holy Sandalwood Door", specs: { material: "Sandalwood", size: "6x2 ft", finish: "Sacred Wax", hardware: "Divine Silver" } }
    ]
  },
  {
    id: "kitchen",
    name: "Kitchen Doors",
    icon: Utensils,
    images: [
      { src: kitchenDoor1, name: "Modern Kitchen Door", specs: { material: "Marine Plywood", size: "7x3 ft", finish: "Laminate", hardware: "Soft Close Hinges" } },
      { src: kitchenDoor2, name: "Contemporary Glass Door", specs: { material: "Toughened Glass", size: "7x3 ft", finish: "Frosted Glass", hardware: "Aluminum Frame" } },
      { src: kitchenDoor3, name: "Rustic Wood Door", specs: { material: "Reclaimed Wood", size: "6.5x2.5 ft", finish: "Distressed", hardware: "Iron Handles" } },
      { src: kitchenDoor4, name: "Sleek Panel Door", specs: { material: "MDF", size: "7x3 ft", finish: "High Gloss Paint", hardware: "Hidden Hinges" } },
      { src: kitchenDoor5, name: "Vintage Style Door", specs: { material: "Solid Pine", size: "6.5x3 ft", finish: "Antique Wash", hardware: "Ceramic Knobs" } },
      { src: kitchenDoor6, name: "Designer Kitchen Door", specs: { material: "Acrylic Sheet", size: "7x3 ft", finish: "High Gloss Acrylic", hardware: "Push to Open" } },
      { src: kitchenDoor7, name: "Premium Laminate Door", specs: { material: "HPL Laminate", size: "7x3 ft", finish: "Woodgrain Texture", hardware: "Blum Hinges" } },
      { src: kitchenDoor8, name: "Industrial Style Door", specs: { material: "Steel Frame", size: "7x3 ft", finish: "Powder Coating", hardware: "Industrial Handles" } },
      { src: kitchenDoor9, name: "Scandinavian Door", specs: { material: "Birch Plywood", size: "7x3 ft", finish: "Natural Birch", hardware: "Minimalist Handles" } },
      { src: kitchenDoor10, name: "Luxury Kitchen Door", specs: { material: "Solid Wood", size: "7.5x3 ft", finish: "Piano Finish", hardware: "German Hardware" } },
      { src: kitchenDoor11, name: "Modern Glass Door", specs: { material: "Tempered Glass", size: "7x3 ft", finish: "Clear Glass", hardware: "Stainless Frame" } },
      { src: kitchenDoor12, name: "Eco-Friendly Door", specs: { material: "Bamboo", size: "7x3 ft", finish: "Natural Bamboo", hardware: "Eco Hardware" } }
    ]
  },
  {
    id: "bedroom",
    name: "Bedroom Doors",
    icon: Bed,
    images: [
      { src: bedroomDoor1, name: "Elegant Bedroom Door", specs: { material: "Engineered Wood", size: "7x3 ft", finish: "Veneer Polish", hardware: "Privacy Lock" } },
      { src: bedroomDoor2, name: "Sliding Panel Door", specs: { material: "Bamboo", size: "8x3 ft", finish: "Natural Bamboo", hardware: "Sliding Track" } },
      { src: bedroomDoor3, name: "French Style Door", specs: { material: "Oak Wood", size: "7.5x3 ft", finish: "White Paint", hardware: "Crystal Knobs" } },
      { src: bedroomDoor4, name: "Minimalist Door", specs: { material: "Plywood", size: "7x2.5 ft", finish: "Smooth Lacquer", hardware: "Concealed Handles" } },
      { src: bedroomDoor5, name: "Traditional Panel Door", specs: { material: "Solid Wood", size: "7x3 ft", finish: "Wood Stain", hardware: "Brass Handles" } },
      { src: bedroomDoor6, name: "Contemporary Bedroom Door", specs: { material: "MDF", size: "7x3 ft", finish: "Melamine Finish", hardware: "Modern Handles" } },
      { src: bedroomDoor7, name: "Classic Wood Door", specs: { material: "Teak Wood", size: "7x3 ft", finish: "Natural Teak", hardware: "Antique Brass" } },
      { src: bedroomDoor8, name: "Designer Panel Door", specs: { material: "Walnut Veneer", size: "7.5x3 ft", finish: "Satin Walnut", hardware: "Designer Handles" } },
      { src: bedroomDoor9, name: "Luxury Bedroom Door", specs: { material: "Mahogany Wood", size: "7x3 ft", finish: "Rich Mahogany", hardware: "Gold Handles" } },
      { src: bedroomDoor10, name: "Modern Sliding Door", specs: { material: "Glass Panel", size: "8x3 ft", finish: "Frosted Glass", hardware: "Sliding System" } },
      { src: bedroomDoor11, name: "Rustic Bedroom Door", specs: { material: "Reclaimed Wood", size: "7x3 ft", finish: "Rustic Finish", hardware: "Iron Hardware" } },
      { src: bedroomDoor12, name: "Premium Wood Door", specs: { material: "Rosewood", size: "7x3 ft", finish: "High Gloss", hardware: "Premium Handles" } }
    ]
  },
  {
    id: "balcony",
    name: "Balcony Doors",
    icon: Sunrise,
    images: [
      { src: balconyDoor1, name: "Weather Resistant Door", specs: { material: "Treated Wood", size: "7x3 ft", finish: "Exterior Grade", hardware: "Stainless Steel" } },
      { src: balconyDoor2, name: "Glass Panel Door", specs: { material: "Aluminum Frame", size: "8x3.5 ft", finish: "Powder Coated", hardware: "Multi-Point Lock" } },
      { src: balconyDoor3, name: "Sliding Balcony Door", specs: { material: "UPVC", size: "7.5x3 ft", finish: "UV Resistant", hardware: "Rollers & Track" } },
      { src: balconyDoor4, name: "French Balcony Door", specs: { material: "Steel Frame", size: "7x3 ft", finish: "Anti-Rust Coating", hardware: "Security Bolts" } },
      { src: balconyDoor5, name: "Modern Balcony Door", specs: { material: "Composite Wood", size: "8x4 ft", finish: "Weather Shield", hardware: "Auto Lock" } },
      { src: balconyDoor6, name: "Security Gate Door", specs: { material: "Steel", size: "7x3 ft", finish: "Galvanized Coating", hardware: "Heavy Duty Lock" } },
      { src: balconyDoor7, name: "Decorative Metal Door", specs: { material: "Wrought Iron", size: "7x3 ft", finish: "Artistic Design", hardware: "Ornate Handles" } },
      { src: balconyDoor8, name: "Automated Gate Door", specs: { material: "Aluminum", size: "8x3.5 ft", finish: "Anodized Finish", hardware: "Motor System" } },
      { src: balconyDoor9, name: "Sliding Security Door", specs: { material: "Steel", size: "7.5x3 ft", finish: "Powder Coating", hardware: "Sliding Lock" } },
      { src: balconyDoor10, name: "Modern Security Gate", specs: { material: "Aluminum", size: "7x3 ft", finish: "Weather Proof", hardware: "Digital Lock" } },
      { src: balconyDoor11, name: "Designer Security Door", specs: { material: "Steel", size: "7x3 ft", finish: "Designer Coating", hardware: "Smart Lock" } },
      { src: balconyDoor12, name: "Premium Gate Door", specs: { material: "Stainless Steel", size: "8x3.5 ft", finish: "Mirror Finish", hardware: "Premium Hardware" } }
    ]
  },
  {
    id: "temple",
    name: "Temple Doors",
    icon: Church,
    images: [
      { src: templeDoor1, name: "Grand Temple Door", specs: { material: "Teak Wood", size: "8x4 ft", finish: "Hand Carved", hardware: "Temple Brass" } },
      { src: templeDoor2, name: "Sacred Entry Door", specs: { material: "Rosewood", size: "7x3.5 ft", finish: "Gold Inlay", hardware: "Ornate Handles" } },
      { src: templeDoor3, name: "Divine Portal Door", specs: { material: "Sandalwood", size: "6x3 ft", finish: "Sacred Oils", hardware: "Silver Work" } },
      { src: templeDoor4, name: "Blessed Sanctuary Door", specs: { material: "Sheesham", size: "7.5x3 ft", finish: "Traditional Art", hardware: "Copper Details" } },
      { src: templeDoor5, name: "Holy Chamber Door", specs: { material: "Walnut", size: "6.5x3 ft", finish: "Spiritual Motifs", hardware: "Blessed Metal" } },
      { src: templeDoor6, name: "Ancient Temple Door", specs: { material: "Teak Wood", size: "8x4 ft", finish: "Traditional Carving", hardware: "Ancient Brass" } },
      { src: templeDoor7, name: "Sacred Rosewood Door", specs: { material: "Rosewood", size: "7x3.5 ft", finish: "Divine Polish", hardware: "Sacred Silver" } },
      { src: templeDoor8, name: "Temple Sheesham Door", specs: { material: "Sheesham", size: "7x3 ft", finish: "Holy Stain", hardware: "Temple Bronze" } },
      { src: templeDoor9, name: "Spiritual Walnut Door", specs: { material: "Walnut", size: "6.5x3 ft", finish: "Blessed Finish", hardware: "Divine Copper" } },
      { src: templeDoor10, name: "Sacred Oak Door", specs: { material: "Oak Wood", size: "7x3 ft", finish: "Prayer Polish", hardware: "Holy Gold" } },
      { src: templeDoor11, name: "Divine Mango Door", specs: { material: "Mango Wood", size: "6.5x3 ft", finish: "Temple Finish", hardware: "Sacred Brass" } },
      { src: templeDoor12, name: "Blessed Sandalwood Door", specs: { material: "Sandalwood", size: "6x2.5 ft", finish: "Sacred Wax", hardware: "Temple Silver" } }
    ]
  },
  {
    id: "study",
    name: "Study Room Doors",
    icon: BookOpen,
    images: [
      { src: studyDoor1, name: "Executive Study Door", specs: { material: "Mahogany", size: "7x3 ft", finish: "Executive Polish", hardware: "Leather Handles" } },
      { src: studyDoor2, name: "Library Style Door", specs: { material: "Oak Wood", size: "7.5x3 ft", finish: "Classic Stain", hardware: "Antique Brass" } },
      { src: studyDoor3, name: "Modern Office Door", specs: { material: "Engineered Wood", size: "7x2.5 ft", finish: "Professional Look", hardware: "Sleek Handles" } },
      { src: studyDoor4, name: "Scholar's Door", specs: { material: "Pine Wood", size: "6.5x3 ft", finish: "Book-match Veneer", hardware: "Quiet Close" } },
      { src: studyDoor5, name: "Academic Door", specs: { material: "Birch Wood", size: "7x3 ft", finish: "Scholarly Finish", hardware: "Study Lock" } },
      { src: studyDoor6, name: "Professional Office Door", specs: { material: "Walnut Wood", size: "7x3 ft", finish: "Business Polish", hardware: "Corporate Handles" } },
      { src: studyDoor7, name: "Classic Study Door", specs: { material: "Teak Wood", size: "7x3 ft", finish: "Traditional Teak", hardware: "Classic Brass" } },
      { src: studyDoor8, name: "Modern Study Door", specs: { material: "MDF", size: "7x3 ft", finish: "Contemporary Finish", hardware: "Modern Hardware" } }
    ]
  }
];

interface WoodWorkInlineProps {
  selectedCategory?: string | null;
  onBackToHome: () => void;
}

const WoodWorkInline = ({ selectedCategory, onBackToHome }: WoodWorkInlineProps) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(selectedCategory || null);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedDoor, setSelectedDoor] = useState<any>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showMainDoorCarousel, setShowMainDoorCarousel] = useState(false);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentImageIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    setCurrentCategory(selectedCategory || null);
  }, [selectedCategory]);

  const handleDoorClick = (image: any, category: any) => {
    setSelectedDoor({
      id: Date.now(),
      src: image.src,
      title: image.name,
      description: `${category.name} - ${image.specs.material} | ${image.specs.size} | ${image.specs.finish}`,
      specs: image.specs,
      category: category.name
    });
  };

  const handleGetQuote = () => {
    setShowQuoteForm(true);
  };

  const handleBackFromDoor = () => {
    setSelectedDoor(null);
    setShowQuoteForm(false);
  };

  const handleCloseQuoteForm = () => {
    setShowQuoteForm(false);
    setSelectedDoor(null);
  };

  const handleBackFromQuoteForm = () => {
    setShowQuoteForm(false);
  };

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === "main") {
      setShowMainDoorCarousel(true);
    } else {
      setCurrentCategory(categoryId);
      setCurrentImageIndex(1);
    }
  };

  const handleBackToCategories = () => {
    setCurrentCategory(null);
    setCurrentImageIndex(1);
  };

  // Category Selection View
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={onBackToHome}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Door Categories
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <div className="w-full h-32 rounded-lg overflow-hidden">
                        <img
                          src={category.images[0].src}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Image Carousel View
  const category = categories.find(cat => cat.id === currentCategory);
  if (!category) return null;

  const currentImage = category.images[currentImageIndex - 1];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${currentImage.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60 backdrop-blur-sm" />
      
      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={handleBackToCategories}
              className="flex items-center gap-2 bg-background/80 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Categories
            </Button>
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl">
              {category.name}
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Category Grid (2x3) */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                {category.images.map((image, index) => {
                  const Icon = category.icon;
                  return (
                    <Card
                      key={index}
                      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 backdrop-blur-md border-white/20 ${
                        currentImageIndex === index + 1 
                          ? 'bg-primary/20 ring-2 ring-primary shadow-2xl scale-105' 
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      onClick={() => handleDoorClick(image, category)}
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors backdrop-blur-sm">
                            <Icon className="h-6 w-6 text-white drop-shadow-lg" />
                          </div>
                          <div className="w-full h-20 rounded-lg overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-sm font-semibold text-white drop-shadow-sm line-clamp-2">{image.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Center - Carousel */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center">
              <Carousel
                setApi={setApi}
                className="w-full max-w-lg"
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                  }),
                ]}
              >
                <CarouselContent className="-ml-4">
                  {category.images.map((image, index) => (
                    <CarouselItem key={index} className="pl-4">
                      <div className="relative group cursor-pointer" onClick={() => handleDoorClick(image, category)}>
                        <div className={`
                          overflow-hidden rounded-2xl transition-all duration-700 
                          ${api?.selectedScrollSnap() === index 
                            ? 'scale-110 shadow-2xl ring-4 ring-primary/50 blur-0' 
                            : 'scale-90 opacity-40 blur-[3px]'
                          }
                        `}>
                          <div className={`
                            absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500
                            ${api?.selectedScrollSnap() === index ? 'opacity-100' : ''}
                          `} />
                          <div className={`
                            absolute inset-0 shadow-[0_0_60px_rgba(var(--primary),0.4)] transition-opacity duration-500
                            ${api?.selectedScrollSnap() === index ? 'opacity-100' : 'opacity-0'}
                          `} />
                          <img
                            src={image.src}
                            alt={image.name}
                            className="w-full h-80 md:h-96 object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
                <CarouselNext className="right-4 bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
              </Carousel>

              {/* Big Glowing CTA Button */}
              <div className="mt-8 text-center">
                <Button 
                  onClick={handleGetQuote}
                  size="lg"
                  className="bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/70 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 rounded-full animate-pulse hover:animate-none hover:scale-110 border-2 border-white/30"
                  style={{
                    boxShadow: '0 0 30px rgba(var(--primary), 0.6), 0 0 60px rgba(var(--primary), 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  ✨ Get Quote ✨
                </Button>
              </div>
            </div>

            {/* Right Side - Dynamic Specifications Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Specifications</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white drop-shadow-sm mb-2">{currentImage.name}</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-4" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="text-white/80 font-medium">Material:</span>
                        <span className="text-white font-semibold">{currentImage.specs.material}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="text-white/80 font-medium">Size:</span>
                        <span className="text-white font-semibold">{currentImage.specs.size}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="text-white/80 font-medium">Finish:</span>
                        <span className="text-white font-semibold">{currentImage.specs.finish}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-white/80 font-medium">Hardware:</span>
                        <span className="text-white font-semibold">{currentImage.specs.hardware}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-white/90 text-sm text-center">
                        Image {currentImageIndex} of {category.images.length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Individual Door Detail View
  if (selectedDoor && !showQuoteForm) {
    // Find the category that contains this door
    const doorCategory = categories.find(cat => cat.name === selectedDoor.category);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={handleBackFromDoor}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to {selectedDoor.category}
            </Button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {selectedDoor.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
            {/* Left Side - Scrollable Images */}
            <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-border">
                  <h2 className="text-2xl font-bold text-foreground">Collection Gallery</h2>
                  <p className="text-muted-foreground">{doorCategory?.name || 'Door Collection'}</p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {doorCategory?.images.map((image, index) => (
                      <div 
                        key={index}
                        className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
                          image.src === selectedDoor.src ? 'ring-2 ring-primary shadow-lg' : ''
                        }`}
                        onClick={() => handleDoorClick(image, doorCategory)}
                      >
                        <img
                          src={image.src}
                          alt={image.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium truncate">{image.name}</p>
                        </div>
                        {image.src === selectedDoor.src && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                            Current
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Specifications */}
            <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-border">
                  <h2 className="text-2xl font-bold text-foreground">Specifications</h2>
                  <p className="text-muted-foreground">{selectedDoor.title}</p>
                </div>
                
                <div className="flex-1 p-6 space-y-6">
                  {/* Main Image */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={selectedDoor.src}
                      alt={selectedDoor.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Product Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground font-medium">Material:</span>
                        <span className="text-foreground font-semibold">{selectedDoor.specs.material}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground font-medium">Size:</span>
                        <span className="text-foreground font-semibold">{selectedDoor.specs.size}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground font-medium">Finish:</span>
                        <span className="text-foreground font-semibold">{selectedDoor.specs.finish}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-muted-foreground font-medium">Hardware:</span>
                        <span className="text-foreground font-semibold">{selectedDoor.specs.hardware}</span>
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">What's Included</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Professional installation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        2-year warranty
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Free maintenance for 6 months
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Custom sizing available
                      </li>
                    </ul>
                  </div>

                  {/* Get Quote Button */}
                  <div className="pt-4">
                    <Button 
                      onClick={handleGetQuote}
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/70 text-white py-4 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 rounded-xl hover:scale-105"
                    >
                      ✨ Get Quote for {selectedDoor.title} ✨
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quote Form Modal
  if (showQuoteForm && selectedDoor) {
    return (
      <DoorQuoteForm
        selectedImage={selectedDoor}
        onClose={handleCloseQuoteForm}
        onBack={handleBackFromQuoteForm}
      />
    );
  }

  // Main Door Carousel Modal
  if (showMainDoorCarousel) {
    return (
      <MainDoorCarousel
        onClose={() => setShowMainDoorCarousel(false)}
      />
    );
  }
};

export default WoodWorkInline;