import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

// Kitchen Interior Images
import kitchenImage1 from "@/assets/bg-kitchen-1.jpg";
import kitchenImage2 from "@/assets/bg-kitchen-2.jpg";
import kitchenImage3 from "@/assets/bg-dining-1.jpg";
import kitchenImage4 from "@/assets/bg-dining-2.jpg";
import kitchenImage5 from "@/assets/furnished-work-1.jpg";
import kitchenImage6 from "@/assets/furnished-work-2.jpg";
import kitchenImage7 from "@/assets/furnished-work-3.jpg";
import kitchenImage8 from "@/assets/furnished-work-4.jpg";
import kitchenImage9 from "@/assets/furnished-work-5.jpg";
import kitchenImage10 from "@/assets/furnished-work-6.jpg";
import kitchenImage11 from "@/assets/furnished-work-7.jpg";
import kitchenImage12 from "@/assets/furnished-work-8.jpg";
import kitchenImage13 from "@/assets/furnished-work-9.jpg";
import kitchenImage14 from "@/assets/furnished-work-10.jpg";
import kitchenImage15 from "@/assets/furnished-work-11.jpg";
import kitchenImage16 from "@/assets/furnished-work-12.jpg";
import kitchenImage17 from "@/assets/furnished-work-13.jpg";
import kitchenImage18 from "@/assets/furnished-work-14.jpg";
import kitchenImage19 from "@/assets/furnished-work-15.jpg";
import kitchenImage20 from "@/assets/furnished-work-16.jpg";
import kitchenImage21 from "@/assets/furnished-work-17.jpg";
import kitchenImage22 from "@/assets/furnished-work-18.jpg";
import kitchenImage23 from "@/assets/furnished-work-19.jpg";
import kitchenImage24 from "@/assets/furnished-work-20.jpg";
import kitchenImage25 from "@/assets/smart-home-1.jpg";
import kitchenImage26 from "@/assets/smart-home-2.jpg";
import kitchenImage27 from "@/assets/smart-home-3.jpg";
import kitchenImage28 from "@/assets/smart-home-4.jpg";
import kitchenImage29 from "@/assets/smart-home-5.jpg";
import kitchenImage30 from "@/assets/smart-home-6.jpg";
import kitchenImage31 from "@/assets/smart-home-7.jpg";
import kitchenImage32 from "@/assets/smart-home-8.jpg";
import kitchenImage33 from "@/assets/smart-home-9.jpg";
import kitchenImage34 from "@/assets/smart-home-10.jpg";
import kitchenImage35 from "@/assets/smart-home-11.jpg";
import kitchenImage36 from "@/assets/smart-home-12.jpg";
import kitchenImage37 from "@/assets/smart-home-13.jpg";
import kitchenImage38 from "@/assets/smart-home-14.jpg";
import kitchenImage39 from "@/assets/smart-home-15.jpg";
import kitchenImage40 from "@/assets/smart-home-16.jpg";
import kitchenImage41 from "@/assets/smart-home-17.jpg";
import kitchenImage42 from "@/assets/smart-home-18.jpg";
import kitchenImage43 from "@/assets/smart-home-19.jpg";
import kitchenImage44 from "@/assets/smart-home-20.jpg";
import kitchenImage45 from "@/assets/iot-integration-1.jpg";
import kitchenImage46 from "@/assets/iot-integration-2.jpg";
import kitchenImage47 from "@/assets/iot-integration-3.jpg";
import kitchenImage48 from "@/assets/iot-integration-4.jpg";
import kitchenImage49 from "@/assets/iot-integration-5.jpg";
import kitchenImage50 from "@/assets/iot-integration-6.jpg";

const KitchenDoorsPage = () => {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProjectSelect = () => {};

  const kitchenInteriors = [
    { image: kitchenImage1, name: "Modern Modular Kitchen", specs: "L-Shaped Design, Premium Laminate, Soft-Close Hardware" },
    { image: kitchenImage2, name: "Contemporary Kitchen Suite", specs: "Island Design, Granite Counter, LED Lighting" },
    { image: kitchenImage3, name: "Luxury Kitchen Interior", specs: "U-Shaped Layout, Marble Counter, Smart Appliances" },
    { image: kitchenImage4, name: "Classic Kitchen Design", specs: "Traditional Style, Wooden Cabinets, Ceramic Tiles" },
    { image: kitchenImage5, name: "Smart Kitchen Solution", specs: "IoT Enabled, Touch Controls, Auto Sensors" },
    { image: kitchenImage6, name: "Premium Kitchen Setup", specs: "Parallel Design, Quartz Counter, Under-Cabinet Lighting" },
    { image: kitchenImage7, name: "Elegant Kitchen Interior", specs: "Open Layout, Glass Cabinets, Modern Fixtures" },
    { image: kitchenImage8, name: "Designer Kitchen Space", specs: "G-Shaped Design, Acrylic Finish, Built-in Appliances" },
    { image: kitchenImage9, name: "Contemporary Cooking Area", specs: "Minimalist Style, Handle-less Cabinets, Induction Cooktop" },
    { image: kitchenImage10, name: "Luxury Culinary Space", specs: "Custom Design, Premium Hardware, Wine Storage" },
    { image: kitchenImage11, name: "Modern Kitchen Hub", specs: "Central Island, Breakfast Bar, Pendant Lighting" },
    { image: kitchenImage12, name: "Stylish Kitchen Interior", specs: "Two-Tone Cabinets, Subway Tiles, Stainless Steel" },
    { image: kitchenImage13, name: "Executive Kitchen Design", specs: "High-End Finishes, Custom Storage, Professional Grade" },
    { image: kitchenImage14, name: "Smart Culinary Center", specs: "Voice Control, App Integration, Energy Efficient" },
    { image: kitchenImage15, name: "Premium Cooking Space", specs: "Solid Wood Cabinets, Natural Stone, Copper Accents" },
    { image: kitchenImage16, name: "Contemporary Kitchen Style", specs: "Sleek Design, Integrated Handles, LED Strip Lights" },
    { image: kitchenImage17, name: "Luxury Kitchen Experience", specs: "Custom Millwork, Professional Appliances, Butler Pantry" },
    { image: kitchenImage18, name: "Modern Culinary Workspace", specs: "Clean Lines, Hidden Storage, Waterfall Counter" },
    { image: kitchenImage19, name: "Designer Kitchen Solution", specs: "Bespoke Cabinetry, Luxury Finishes, Smart Storage" },
    { image: kitchenImage20, name: "Premium Kitchen Interior", specs: "High Gloss Finish, Soft Touch Drawers, Task Lighting" },
    { image: kitchenImage21, name: "Smart Kitchen Technology", specs: "Automated Systems, Digital Displays, Remote Control" },
    { image: kitchenImage22, name: "Elegant Cooking Space", specs: "Traditional Charm, Modern Function, Quality Hardware" },
    { image: kitchenImage23, name: "Contemporary Kitchen Hub", specs: "Open Concept, Social Layout, Premium Materials" },
    { image: kitchenImage24, name: "Luxury Culinary Design", specs: "Custom Features, High-End Appliances, Artisan Details" },
    { image: kitchenImage25, name: "Modern Kitchen Innovation", specs: "Smart Technology, Eco-Friendly, Energy Saving" },
    { image: kitchenImage26, name: "Premium Cooking Environment", specs: "Professional Grade, Custom Storage, Luxury Finishes" },
    { image: kitchenImage27, name: "Designer Kitchen Space", specs: "Unique Layout, Premium Materials, Custom Lighting" },
    { image: kitchenImage28, name: "Smart Culinary Solution", specs: "IoT Integration, Automated Features, Modern Design" },
    { image: kitchenImage29, name: "Luxury Kitchen Interior", specs: "Bespoke Design, Premium Hardware, Quality Craftsmanship" },
    { image: kitchenImage30, name: "Contemporary Cooking Area", specs: "Minimalist Aesthetic, Functional Layout, Quality Build" },
    { image: kitchenImage31, name: "Modern Kitchen System", specs: "Modular Design, Easy Maintenance, Durable Materials" },
    { image: kitchenImage32, name: "Premium Culinary Space", specs: "Custom Solutions, High-End Finishes, Smart Features" },
    { image: kitchenImage33, name: "Designer Kitchen Experience", specs: "Unique Features, Luxury Materials, Expert Craftsmanship" },
    { image: kitchenImage34, name: "Smart Kitchen Environment", specs: "Connected Appliances, Digital Integration, Modern Living" },
    { image: kitchenImage35, name: "Luxury Cooking Center", specs: "Professional Equipment, Custom Design, Premium Quality" },
    { image: kitchenImage36, name: "Contemporary Kitchen Style", specs: "Sleek Aesthetics, Functional Design, Quality Components" },
    { image: kitchenImage37, name: "Modern Culinary Hub", specs: "Central Focus, Social Space, Quality Materials" },
    { image: kitchenImage38, name: "Premium Kitchen Design", specs: "High-End Features, Custom Solutions, Luxury Finishes" },
    { image: kitchenImage39, name: "Smart Cooking Space", specs: "Technology Integration, Efficient Layout, Modern Features" },
    { image: kitchenImage40, name: "Designer Kitchen Interior", specs: "Unique Style, Premium Materials, Expert Installation" },
    { image: kitchenImage41, name: "Luxury Culinary Experience", specs: "Bespoke Features, High-End Appliances, Quality Craftsmanship" },
    { image: kitchenImage42, name: "Modern Kitchen Innovation", specs: "Smart Solutions, Contemporary Design, Premium Build" },
    { image: kitchenImage43, name: "Premium Cooking Environment", specs: "Professional Grade, Custom Features, Luxury Materials" },
    { image: kitchenImage44, name: "Contemporary Kitchen Solution", specs: "Modern Aesthetics, Functional Design, Quality Hardware" },
    { image: kitchenImage45, name: "Smart Kitchen Technology", specs: "IoT Enabled, Digital Controls, Modern Living" },
    { image: kitchenImage46, name: "Designer Culinary Space", specs: "Custom Design, Premium Finishes, Expert Workmanship" },
    { image: kitchenImage47, name: "Luxury Kitchen System", specs: "High-End Components, Bespoke Solutions, Quality Build" },
    { image: kitchenImage48, name: "Modern Cooking Center", specs: "Contemporary Style, Smart Features, Premium Materials" },
    { image: kitchenImage49, name: "Premium Kitchen Interior", specs: "Luxury Finishes, Custom Solutions, Expert Installation" },
    { image: kitchenImage50, name: "Smart Culinary Hub", specs: "Technology Integration, Modern Design, Quality Craftsmanship" },
  ];

  const totalPages = Math.ceil(kitchenInteriors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInteriors = kitchenInteriors.slice(startIndex, endIndex);

  const handleEnquiryClick = (productName: string, specs: string) => {
    setSelectedService({
      title: `Kitchen Interior - ${productName}`,
      description: `Get detailed information about ${productName}. Specifications: ${specs}`
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
                Premium <span className="text-primary">Kitchen Interior Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our extensive collection of modern kitchen interiors featuring smart technology and luxury finishes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentInteriors.map((interior, idx) => (
                <Card 
                  key={startIndex + idx} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img 
                      src={interior.image} 
                      alt={interior.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{interior.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {interior.specs}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group/button"
                      onClick={() => handleEnquiryClick(interior.name, interior.specs)}
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
      </main>

      <Footer />
      
      {selectedService && (
        <EnquiryForm
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default KitchenDoorsPage;