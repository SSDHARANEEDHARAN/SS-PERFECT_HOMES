import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hammer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import MainDoorCarouselInline from "@/components/MainDoorCarouselInline";

// Door Images
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
import mainDoor13 from "@/assets/wood-work-13.jpg";
import mainDoor14 from "@/assets/wood-work-14.jpg";
import mainDoor15 from "@/assets/wood-work-15.jpg";
import mainDoor16 from "@/assets/wood-work-16.jpg";
import mainDoor17 from "@/assets/wood-work-17.jpg";
import mainDoor18 from "@/assets/wood-work-18.jpg";
import mainDoor19 from "@/assets/wood-work-19.jpg";
import mainDoor20 from "@/assets/wood-work-20.jpg";

const MainDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const mainDoors = [
    { image: mainDoor1, name: "Premium Teak Door", specs: "Teak Wood, 7x3 ft, Natural Polish" },
    { image: mainDoor2, name: "Royal Mahogany Door", specs: "Mahogany Wood, 8x3.5 ft, Glossy Lacquer" },
    { image: mainDoor3, name: "Classic Oak Door", specs: "Oak Wood, 7.5x3 ft, Matte Varnish" },
    { image: mainDoor4, name: "Modern Pine Door", specs: "Pine Wood, 7x3 ft, UV Coating" },
    { image: mainDoor5, name: "Elegant Walnut Door", specs: "Walnut Wood, 7.5x3.5 ft, Satin Finish" },
    { image: mainDoor6, name: "Traditional Rosewood Door", specs: "Rosewood, 8x4 ft, Hand Polished" },
    { image: mainDoor7, name: "Contemporary Maple Door", specs: "Maple Wood, 7x3 ft, Clear Coat" },
    { image: mainDoor8, name: "Rustic Cedar Door", specs: "Cedar Wood, 7.5x3 ft, Natural Stain" },
    { image: mainDoor9, name: "Luxury Ebony Door", specs: "Ebony Wood, 8x3.5 ft, High Gloss" },
    { image: mainDoor10, name: "Designer Cherry Door", specs: "Cherry Wood, 7x3 ft, Semi Gloss" },
    { image: mainDoor11, name: "Artistic Birch Door", specs: "Birch Wood, 7.5x3.5 ft, Matte Finish" },
    { image: mainDoor12, name: "Executive Mahogany Door", specs: "Premium Mahogany, 8x4 ft, Mirror Polish" },
    { image: mainDoor13, name: "Classic Pine Panel Door", specs: "Pine Wood, 7x3 ft, Traditional Stain" },
    { image: mainDoor14, name: "Modern Teak Design", specs: "Teak Wood, 7.5x3 ft, Contemporary Finish" },
    { image: mainDoor15, name: "Royal Oak Entrance", specs: "Oak Wood, 8x3.5 ft, Royal Polish" },
    { image: mainDoor16, name: "Elegant Carved Door", specs: "Sheesham Wood, 7x3 ft, Hand Carved" },
    { image: mainDoor17, name: "Premium Walnut Panel", specs: "Walnut Wood, 7.5x3.5 ft, Premium Finish" },
    { image: mainDoor18, name: "Designer Glass Insert", specs: "Teak Frame, 8x3.5 ft, Frosted Glass" },
    { image: mainDoor19, name: "Traditional Solid Door", specs: "Mango Wood, 7x3 ft, Natural Polish" },
    { image: mainDoor20, name: "Contemporary Style Door", specs: "Engineered Wood, 7.5x3 ft, Modern Lacquer" },
  ];

  const totalPages = Math.ceil(mainDoors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoors = mainDoors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Main Door - ${productName}`,
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
                <Home className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Main Doors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium <span className="text-primary">Main Door Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of handcrafted main doors featuring premium wood varieties and exquisite finishes.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Carousel Section */}
        <MainDoorCarouselInline />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentDoors.map((door, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={door.image} 
                      alt={door.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{door.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {door.specs}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group/button"
                      onClick={() => handleEnquiryClick(door.name, door.specs, door.image)}
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Main Doors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premium quality materials, expert craftsmanship, and attention to detail in every door we create.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                <p className="text-muted-foreground">
                  Only the finest wood varieties selected for durability and beauty
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-muted-foreground">
                  Tailored designs to match your home's architecture and style
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
                <p className="text-muted-foreground">
                  Professional installation with warranty and after-sales support
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

export default MainDoorsPage;