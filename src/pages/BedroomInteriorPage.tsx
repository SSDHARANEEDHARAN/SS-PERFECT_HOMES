import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bed, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Bedroom Interior Images
import bedroom1 from "@/assets/bg-bedroom-1.jpg";
import bedroom2 from "@/assets/bg-bedroom-2.jpg";
import furnished1 from "@/assets/furnished-work-1.jpg";
import furnished2 from "@/assets/furnished-work-2.jpg";
import furnished3 from "@/assets/furnished-work-3.jpg";
import furnished4 from "@/assets/furnished-work-4.jpg";
import furnished5 from "@/assets/furnished-work-5.jpg";
import furnished6 from "@/assets/furnished-work-6.jpg";
import furnished7 from "@/assets/furnished-work-7.jpg";
import furnished8 from "@/assets/furnished-work-8.jpg";
import furnished9 from "@/assets/furnished-work-9.jpg";
import furnished10 from "@/assets/furnished-work-10.jpg";
import furnished11 from "@/assets/furnished-work-11.jpg";
import furnished12 from "@/assets/furnished-work-12.jpg";
import furnished13 from "@/assets/furnished-work-13.jpg";
import furnished14 from "@/assets/furnished-work-14.jpg";
import furnished15 from "@/assets/furnished-work-15.jpg";
import furnished16 from "@/assets/furnished-work-16.jpg";
import furnished17 from "@/assets/furnished-work-17.jpg";
import furnished18 from "@/assets/furnished-work-18.jpg";
import furnished19 from "@/assets/furnished-work-19.jpg";
import furnished20 from "@/assets/furnished-work-20.jpg";

const BedroomInteriorPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const bedroomInteriors = [
    { image: bedroom1, name: "Master Bedroom Suite", specs: "King Size Bed, Walk-in Closet, Ensuite Bathroom" },
    { image: bedroom2, name: "Contemporary Bedroom", specs: "Platform Bed, Built-in Storage, Minimalist Design" },
    { image: furnished1, name: "Luxury Bedroom Set", specs: "Upholstered Headboard, Nightstands, Dresser Unit" },
    { image: furnished2, name: "Modern Wardrobe Design", specs: "Sliding Doors, Mirror Finish, Interior Organizers" },
    { image: furnished3, name: "Cozy Bedroom Nook", specs: "Reading Corner, Window Seat, Built-in Shelves" },
    { image: furnished4, name: "Teen Bedroom Setup", specs: "Study Area, Bunk Bed, Colorful Accents" },
    { image: furnished5, name: "Guest Bedroom Package", specs: "Comfortable Bed, Storage Solutions, Welcome Ambiance" },
    { image: furnished6, name: "Small Bedroom Design", specs: "Space Optimization, Multi-functional Furniture, Smart Storage" },
    { image: furnished7, name: "Traditional Bedroom", specs: "Wooden Furniture, Classic Patterns, Warm Colors" },
    { image: furnished8, name: "Scandinavian Bedroom", specs: "Light Woods, White Linens, Natural Textures" },
    { image: furnished9, name: "Industrial Bedroom Look", specs: "Metal Frames, Exposed Brick, Urban Style" },
    { image: furnished10, name: "Bohemian Bedroom Style", specs: "Rich Textiles, Layered Rugs, Eclectic Decor" },
    { image: furnished11, name: "Minimalist Bedroom", specs: "Clean Lines, Neutral Colors, Clutter-free Space" },
    { image: furnished12, name: "Romantic Bedroom Setup", specs: "Soft Lighting, Elegant Fabrics, Intimate Atmosphere" },
    { image: furnished13, name: "Kids Bedroom Theme", specs: "Playful Colors, Safety Features, Fun Elements" },
    { image: furnished14, name: "Attic Bedroom Design", specs: "Sloped Ceiling, Dormer Windows, Cozy Layout" },
    { image: furnished15, name: "Loft Bedroom Style", specs: "Open Concept, High Ceilings, Modern Furniture" },
    { image: furnished16, name: "Vintage Bedroom Decor", specs: "Antique Furniture, Heritage Colors, Classic Style" },
    { image: furnished17, name: "Coastal Bedroom Theme", specs: "Beach Colors, Natural Materials, Ocean Vibes" },
    { image: furnished18, name: "Luxury Walk-in Closet", specs: "Custom Shelving, Island Unit, Jewelry Display" },
    { image: furnished19, name: "Bedroom TV Wall Unit", specs: "Entertainment Center, Cable Management, Storage" },
    { image: furnished20, name: "Bedroom Balcony Access", specs: "French Doors, Outdoor Connection, Natural Light" }
  ];

  const totalPages = Math.ceil(bedroomInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = bedroomInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Bedroom Interior - ${productName}`,
      description: `Get detailed information about ${productName}. Specifications: ${specs}`,
      productImage: productImage,
      productName: productName
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Bed className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Bedroom Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Elegant <span className="text-primary">Bedroom Interior Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Create your perfect sanctuary with our bedroom interior designs featuring custom wardrobes, comfortable furniture, and personalized styling solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentItems.map((item, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {item.specs}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group/button"
                      onClick={() => handleEnquiryClick(item.name, item.specs, item.image)}
                    >
                      Enquiry Now
                      <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => handlePageChange(pageNum)}
                    className="w-10 h-10"
                  >
                    {pageNum}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Bedroom Interiors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Personalized designs, comfortable furniture, and smart storage solutions to create your perfect bedroom sanctuary.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comfort Design</h3>
                <p className="text-muted-foreground">
                  Ergonomic furniture and layouts designed for ultimate comfort and relaxation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Storage</h3>
                <p className="text-muted-foreground">
                  Built-in wardrobes and storage solutions tailored to your needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personal Style</h3>
                <p className="text-muted-foreground">
                  Personalized design themes reflecting your unique style preferences
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {selectedService && (
        <EnquiryForm
          title={selectedService.title}
          description={selectedService.description}
          productImage={selectedService.productImage}
          productName={selectedService.productName}
          onClose={() => setSelectedService(null)}
        />
      )}
      
    </div>
  );
};

export default BedroomInteriorPage;