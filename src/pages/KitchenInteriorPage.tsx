import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Hammer, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Kitchen Interior Images - Using background room images as kitchen interiors
import kitchen1 from "@/assets/bg-kitchen-1.jpg";
import kitchen2 from "@/assets/bg-kitchen-2.jpg";
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

const KitchenInteriorPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; productImage?: string; productName?: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleProjectSelect = () => {};

  const kitchenInteriors = [
    { image: kitchen1, name: "Modern Modular Kitchen", specs: "L-Shape Design, Granite Countertop, Soft Close Drawers" },
    { image: kitchen2, name: "Contemporary Kitchen Island", specs: "Island Counter, Bar Seating, LED Under-Cabinet Lights" },
    { image: furnished1, name: "Luxury Kitchen Cabinets", specs: "High Gloss Finish, Handle-less Design, Pull-out Drawers" },
    { image: furnished2, name: "Traditional Kitchen Setup", specs: "Wooden Cabinets, Marble Countertop, Classic Hardware" },
    { image: furnished3, name: "Compact Kitchen Design", specs: "Space Saving, Vertical Storage, Breakfast Counter" },
    { image: furnished4, name: "Open Kitchen Concept", specs: "Island Bar, Pendant Lights, Modern Appliances" },
    { image: furnished5, name: "Galley Kitchen Layout", specs: "Parallel Counters, Maximum Storage, Efficient Workflow" },
    { image: furnished6, name: "U-Shape Kitchen", specs: "Corner Utilization, Ample Storage, Work Triangle" },
    { image: furnished7, name: "Kitchen Pantry Unit", specs: "Floor to Ceiling, Multiple Shelves, Organized Storage" },
    { image: furnished8, name: "Kitchen Breakfast Nook", specs: "Built-in Seating, Storage Bench, Cozy Dining" },
    { image: furnished9, name: "Farmhouse Kitchen Style", specs: "Shaker Cabinets, Subway Tiles, Vintage Hardware" },
    { image: furnished10, name: "Scandinavian Kitchen", specs: "Light Wood, White Cabinets, Minimalist Design" },
    { image: furnished11, name: "Industrial Kitchen Look", specs: "Metal Accents, Concrete Counters, Exposed Elements" },
    { image: furnished12, name: "Mediterranean Kitchen", specs: "Warm Colors, Stone Backsplash, Arched Details" },
    { image: furnished13, name: "Contemporary Handleless", specs: "Push-to-Open, Clean Lines, Integrated Appliances" },
    { image: furnished14, name: "Two-Tone Kitchen Cabinets", specs: "Upper Light, Lower Dark, Visual Interest" },
    { image: furnished15, name: "Kitchen Bar Counter", specs: "Waterfall Edge, Bar Stools, Entertainment Area" },
    { image: furnished16, name: "Butler's Pantry", specs: "Secondary Prep Area, Extra Storage, Coffee Station" },
    { image: furnished17, name: "Kitchen Window Seat", specs: "Natural Light, Storage Below, Reading Nook" },
    { image: furnished18, name: "Smart Kitchen Setup", specs: "IoT Appliances, Touch Controls, Automated Systems" },
    { image: furnished19, name: "Outdoor Kitchen Design", specs: "Weather Resistant, Grill Area, Al Fresco Dining" },
    { image: furnished20, name: "Kitchen Herb Garden", specs: "Indoor Herbs, Green Wall, Fresh Ingredients" }
  ];

  const totalPages = Math.ceil(kitchenInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = kitchenInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string, productImage: string) => {
    setSelectedService({
      title: `Kitchen Interior - ${productName}`,
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
                <ChefHat className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Kitchen Interiors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Modern <span className="text-primary">Kitchen Interior Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform your kitchen with our premium interior designs featuring modular cabinets, granite countertops, smart storage solutions, and contemporary styling.
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Kitchen Interiors?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert design, premium materials, and smart storage solutions to create the perfect cooking and dining experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Modular Design</h3>
                <p className="text-muted-foreground">
                  Smart modular kitchen designs maximizing space and functionality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                <p className="text-muted-foreground">
                  Premium cabinets, countertops, and hardware for lasting durability
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Installation</h3>
                <p className="text-muted-foreground">
                  End-to-end kitchen installation with professional finishing
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

export default KitchenInteriorPage;