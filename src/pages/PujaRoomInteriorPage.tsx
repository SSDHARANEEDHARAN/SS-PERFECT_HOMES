import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Puja Room Interior Images
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

const PujaRoomInteriorPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const pujaRoomInteriors = [
    { image: furnished1, name: "Traditional Puja Mandir", specs: "Wooden Structure, Carved Details, Sacred Storage" },
    { image: furnished2, name: "Modern Temple Design", specs: "Contemporary Style, LED Lighting, Clean Lines" },
    { image: furnished3, name: "Wall Mounted Mandir", specs: "Space Saving, Decorative Frame, Compact Design" },
    { image: furnished4, name: "Corner Puja Room", specs: "Corner Utilization, Multi-level Shelves, Intimate Space" },
    { image: furnished5, name: "Glass Temple Unit", specs: "Transparent Design, Easy Maintenance, Modern Look" },
    { image: furnished6, name: "Marble Puja Setup", specs: "Premium Marble, Elegant Finish, Traditional Style" },
    { image: furnished7, name: "Wooden Carved Mandir", specs: "Hand Carved, Teak Wood, Artistic Details" },
    { image: furnished8, name: "Built-in Temple Wall", specs: "Integrated Design, Storage Cabinets, Hidden Lighting" },
    { image: furnished9, name: "Portable Puja Unit", specs: "Movable Design, Compact Size, Easy Assembly" },
    { image: furnished10, name: "Gold Finished Temple", specs: "Golden Accents, Luxury Feel, Ornate Design" },
    { image: furnished11, name: "Minimalist Puja Space", specs: "Simple Design, Clean Aesthetics, Focus on Function" },
    { image: furnished12, name: "Multi-Deity Mandir", specs: "Multiple Compartments, Spacious Design, Family Temple" },
    { image: furnished13, name: "LED Illuminated Temple", specs: "Smart Lighting, Color Options, Modern Features" },
    { image: furnished14, name: "Antique Style Mandir", specs: "Vintage Look, Heritage Design, Classical Elements" },
    { image: furnished15, name: "Compact Home Temple", specs: "Small Space Solution, Efficient Layout, Daily Use" },
    { image: furnished16, name: "Luxury Puja Room", specs: "Premium Materials, Elaborate Design, Grand Style" },
    { image: furnished17, name: "South Indian Style Temple", specs: "Regional Design, Traditional Patterns, Cultural Elements" },
    { image: furnished18, name: "North Indian Mandir Style", specs: "Northern Traditions, Specific Features, Regional Touch" },
    { image: furnished19, name: "Contemporary Worship Space", specs: "Modern Interpretation, Sleek Design, Updated Style" },
    { image: furnished20, name: "Family Puja Corner", specs: "Gathering Space, Comfortable Seating, Peaceful Ambiance" }
  ];

  const totalPages = Math.ceil(pujaRoomInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pujaRoomInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Puja Room Interior - ${productName}`,
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
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Puja Room Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sacred <span className="text-primary">Puja Room Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Create your perfect prayer space with our puja room interior designs featuring traditional mandirs, modern temples, and peaceful worship environments.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Puja Room Interiors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sacred designs, quality materials, and peaceful environments to create the perfect space for prayer and meditation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sacred Design</h3>
                <p className="text-muted-foreground">
                  Traditional and contemporary designs respecting spiritual values and customs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                <p className="text-muted-foreground">
                  Premium wood, marble, and finishing materials for lasting beauty
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Peaceful Environment</h3>
                <p className="text-muted-foreground">
                  Creating serene spaces that inspire devotion and inner peace
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

export default PujaRoomInteriorPage;