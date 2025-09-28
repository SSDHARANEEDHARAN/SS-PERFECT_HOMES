import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hammer, Sofa } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Furnished Work Images
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

const FurnishedWorkPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const furnishedItems = [
    { image: furnished1, name: "Modern Kitchen Cabinet", specs: "Plywood, Laminate Finish, Soft Close Hinges" },
    { image: furnished2, name: "Luxury Dining Table", specs: "Solid Wood, 6 Seater, Natural Finish" },
    { image: furnished3, name: "Bedroom Wardrobe", specs: "MDF, Mirror Doors, Interior Shelving" },
    { image: furnished4, name: "TV Entertainment Unit", specs: "Engineered Wood, Cable Management, LED Lighting" },
    { image: furnished5, name: "Study Table with Storage", specs: "Particle Board, Drawer Units, Ergonomic Design" },
    { image: furnished6, name: "Sofa Set 3+2+1", specs: "Fabric Upholstery, Foam Cushions, Wooden Frame" },
    { image: furnished7, name: "Coffee Table Glass Top", specs: "Tempered Glass, Metal Base, Modern Design" },
    { image: furnished8, name: "Wooden Staircase Railing", specs: "Teak Wood, Hand Carved, Safety Rails" },
    { image: furnished9, name: "Kitchen Island Counter", specs: "Granite Top, Storage Cabinets, Breakfast Bar" },
    { image: furnished10, name: "Bedroom Dressing Table", specs: "Solid Wood, Mirror, Multiple Drawers" },
    { image: furnished11, name: "Bookshelf Wall Unit", specs: "Plywood, Adjustable Shelves, Corner Design" },
    { image: furnished12, name: "Dining Room Showcase", specs: "Glass Display, LED Lights, Crockery Storage" },
    { image: furnished13, name: "Home Office Desk", specs: "L-Shape Design, Cable Tray, Keyboard Drawer" },
    { image: furnished14, name: "Living Room Side Table", specs: "Marble Top, Wooden Base, Compact Size" },
    { image: furnished15, name: "Kitchen Pantry Cabinet", specs: "Full Height, Multiple Compartments, Soft Close" },
    { image: furnished16, name: "Bedroom Chest of Drawers", specs: "5 Drawer Unit, Metal Handles, Smooth Finish" },
    { image: furnished17, name: "Dining Chair Set", specs: "Upholstered Seats, Wooden Frame, Set of 6" },
    { image: furnished18, name: "Wall Mounted TV Stand", specs: "Floating Design, Hidden Cables, Storage Boxes" },
    { image: furnished19, name: "Kitchen Breakfast Table", specs: "Compact 4 Seater, Foldable Design, Space Saving" },
    { image: furnished20, name: "Bedroom Night Stand", specs: "Bedside Table, Single Drawer, Lamp Space" }
  ];

  const totalPages = Math.ceil(furnishedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = furnishedItems.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Furnished Work - ${productName}`,
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
                <Sofa className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Furnished Work</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium <span className="text-primary">Furniture Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of custom furniture including kitchen interiors, staircases, bedroom sets, dining tables, and complete home furnishing solutions.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Furniture?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premium quality materials, expert craftsmanship, and custom designs tailored to your space and lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sofa className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-muted-foreground">
                  Tailored furniture solutions designed to fit your space perfectly
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Skilled artisans ensuring quality construction and finishing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Solutions</h3>
                <p className="text-muted-foreground">
                  From kitchen interiors to bedroom sets - complete home furnishing
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

export default FurnishedWorkPage;