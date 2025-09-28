import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Dining Hall Interior Images
import dining1 from "@/assets/bg-dining-1.jpg";
import dining2 from "@/assets/bg-dining-2.jpg";
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

const DiningHallInteriorPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const diningHallInteriors = [
    { image: dining1, name: "Formal Dining Room", specs: "6-8 Seater Table, Elegant Chairs, Statement Lighting" },
    { image: dining2, name: "Modern Dining Setup", specs: "Contemporary Table, Stylish Seating, Minimalist Design" },
    { image: furnished1, name: "Family Dining Area", specs: "Large Table, Comfortable Chairs, Warm Atmosphere" },
    { image: furnished2, name: "Compact Dining Space", specs: "Space-saving Table, Foldable Chairs, Smart Storage" },
    { image: furnished3, name: "Traditional Dining Hall", specs: "Wooden Furniture, Classic Design, Heritage Style" },
    { image: furnished4, name: "Open Plan Dining Area", specs: "Connected Kitchen, Island Bar, Flow Design" },
    { image: furnished5, name: "Luxury Dining Room", specs: "Premium Materials, Chandelier, Sophisticated Look" },
    { image: furnished6, name: "Casual Dining Corner", specs: "Breakfast Nook, Cozy Seating, Relaxed Vibe" },
    { image: furnished7, name: "Round Table Dining", specs: "Circular Table, Equal Seating, Social Layout" },
    { image: furnished8, name: "Long Table Setup", specs: "Extended Table, Multiple Chairs, Large Gatherings" },
    { image: furnished9, name: "Glass Dining Table", specs: "Transparent Top, Metal Base, Modern Aesthetic" },
    { image: furnished10, name: "Marble Top Dining", specs: "Marble Surface, Elegant Base, Premium Finish" },
    { image: furnished11, name: "Wooden Dining Suite", specs: "Solid Wood Table, Matching Chairs, Natural Beauty" },
    { image: furnished12, name: "Dining Room Storage", specs: "Built-in Cabinets, Display Shelves, Organized Space" },
    { image: furnished13, name: "Multi-purpose Dining", specs: "Work Table, Study Space, Flexible Use" },
    { image: furnished14, name: "Outdoor Dining Area", specs: "Weather Resistant, Garden Setting, Al Fresco Style" },
    { image: furnished15, name: "Banquet Style Dining", specs: "Large Capacity, Event Seating, Party Setup" },
    { image: furnished16, name: "Counter Height Dining", specs: "Bar Height Table, Tall Chairs, Modern Style" },
    { image: furnished17, name: "Vintage Dining Room", specs: "Antique Furniture, Classic Elements, Nostalgic Feel" },
    { image: furnished18, name: "Industrial Dining Style", specs: "Metal Accents, Raw Materials, Urban Look" },
    { image: furnished19, name: "Scandinavian Dining", specs: "Light Woods, Simple Lines, Nordic Style" },
    { image: furnished20, name: "Bohemian Dining Space", specs: "Eclectic Mix, Colorful Elements, Artistic Flair" }
  ];

  const totalPages = Math.ceil(diningHallInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = diningHallInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Dining Hall Interior - ${productName}`,
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
                <Utensils className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Dining Hall Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Elegant <span className="text-primary">Dining Hall Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Design memorable dining experiences with our dining hall interiors featuring elegant tables, comfortable seating, and sophisticated ambiance.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Dining Hall Interiors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Elegant designs, quality furniture, and thoughtful layouts to create memorable dining experiences for family and guests.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Elegant Dining</h3>
                <p className="text-muted-foreground">
                  Sophisticated furniture and layouts for memorable dining experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Furniture</h3>
                <p className="text-muted-foreground">
                  Durable tables, comfortable chairs, and elegant storage solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect Ambiance</h3>
                <p className="text-muted-foreground">
                  Creating the right atmosphere for family meals and entertainment
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

export default DiningHallInteriorPage;